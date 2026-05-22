/**
 * Script de backfill : Stripe → public.revenue_events
 *
 * Ré-importe TOUS les paiements réussis (abonnements via Invoices + achats uniques
 * via Checkout Sessions) dans la table `revenue_events`. Idempotent : on peut le
 * relancer autant de fois que nécessaire, les enregistrements existants ne sont
 * pas dupliqués.
 *
 * Source : https://stripe.com/docs/api/invoices/list + auto-pagination du SDK.
 *
 * USAGE :
 *   node --env-file=.env scripts/backfill-revenue-events.mjs
 *
 * Prérequis env :
 *   - STRIPE_SECRET_KEY
 *   - NEXT_PUBLIC_SUPABASE_URL
 *   - SUPABASE_SERVICE_ROLE_KEY
 */

import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

// Plans Stripe — copie locale pour ne pas dépendre du TS principal
const PLANS = [
  { priceId: 'price_1Sc3AqIUG5GUejFZagJyV8HC', type: 'standard',           kind: 'subscription' },
  { priceId: 'price_1Sc3BYIUG5GUejFZaWexcxzz', type: 'premium',            kind: 'subscription' },
  { priceId: 'price_1Sc3C6IUG5GUejFZtIHXajUx', type: 'pack_examen',        kind: 'one_time' },
  { priceId: 'price_1SfM9ZIUG5GUejFZYk1zz8f5', type: 'flashcards_2_themes',kind: 'one_time' },
  { priceId: 'price_1SfM9zIUG5GUejFZ5j0QHiSc', type: 'flashcards_5_themes',kind: 'one_time' },
  { priceId: 'price_1SfM96IUG5GUejFZgBW5798m', type: 'no_timer',           kind: 'one_time' },
  { priceId: 'price_1SfM7tIUG5GUejFZD0fHE3Ih', type: 'unlock_level',       kind: 'one_time' },
];

function planForPrice(priceId) {
  return PLANS.find(p => p.priceId === priceId) || null;
}

function planForSubscriptionAmount(amountCents) {
  // Fallback si l'API ne renvoie pas le price_id : on déduit du montant.
  if (amountCents === 299) return PLANS.find(p => p.type === 'standard');
  if (amountCents === 699) return PLANS.find(p => p.type === 'premium');
  return null;
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2024-06-20' });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
);

// --- Cache profil par stripe_customer_id ---
const profileCache = new Map();
async function findUserId(stripeCustomerId) {
  if (!stripeCustomerId) return null;
  if (profileCache.has(stripeCustomerId)) return profileCache.get(stripeCustomerId);
  const { data } = await supabase
    .from('profiles')
    .select('id')
    .eq('stripe_customer_id', stripeCustomerId)
    .maybeSingle();
  const id = data?.id || null;
  profileCache.set(stripeCustomerId, id);
  return id;
}

// --- 1. Backfill des invoices d'abonnement ---
async function backfillSubscriptionInvoices() {
  console.log('📄 Stripe → Invoices (status=paid, auto-pagination)…');
  const rows = [];
  let scanned = 0, skipTrial = 0, skipNoSub = 0, skipUnknown = 0;

  for await (const invoice of stripe.invoices.list({ status: 'paid', limit: 100 })) {
    scanned++;
    if (!invoice.subscription) { skipNoSub++; continue; }
    const amountCents = invoice.amount_paid || 0;
    if (amountCents <= 0) { skipTrial++; continue; }

    const priceId = invoice.lines?.data?.[0]?.price?.id;
    let plan = planForPrice(priceId) || planForSubscriptionAmount(amountCents);
    if (!plan || plan.kind !== 'subscription') {
      console.warn(`  ⚠️  ${invoice.id}: plan inconnu (price=${priceId}, amount=${amountCents}) — skip`);
      skipUnknown++;
      continue;
    }

    const userId = await findUserId(invoice.customer);
    rows.push({
      user_id: userId,
      event_type: 'subscription',
      product_type: plan.type,
      amount: amountCents / 100,
      currency: (invoice.currency || 'eur').toLowerCase(),
      stripe_invoice_id: invoice.id,
      stripe_payment_id: typeof invoice.payment_intent === 'string' ? invoice.payment_intent : null,
      stripe_customer_id: typeof invoice.customer === 'string' ? invoice.customer : null,
      status: 'succeeded',
      created_at: new Date(invoice.created * 1000).toISOString(),
    });
  }

  console.log(`   scannées=${scanned} | trial(0€)=${skipTrial} | sans sub=${skipNoSub} | inconnu=${skipUnknown} | à upsert=${rows.length}`);

  // Upsert par batch de 100, conflit géré par stripe_invoice_id UNIQUE
  let upserted = 0;
  for (let i = 0; i < rows.length; i += 100) {
    const batch = rows.slice(i, i + 100);
    const { error, count } = await supabase
      .from('revenue_events')
      .upsert(batch, { onConflict: 'stripe_invoice_id', ignoreDuplicates: true, count: 'exact' });
    if (error) { console.error('   ❌ batch upsert error:', error); }
    else { upserted += batch.length; }
  }
  console.log(`   ✅ ${upserted} invoices traitées (les doublons sont silencieusement ignorés)`);
  return { scanned, upserted };
}

// --- 2. Backfill des achats uniques via Checkout Sessions ---
async function backfillOneTimeCheckouts() {
  console.log('🛒 Stripe → Checkout Sessions (mode=payment, paid)…');
  const rows = [];
  let scanned = 0, skipNotPayment = 0, skipNotPaid = 0, skipUnknown = 0, alreadyIn = 0;

  for await (const session of stripe.checkout.sessions.list({ limit: 100 })) {
    scanned++;
    if (session.mode !== 'payment') { skipNotPayment++; continue; }
    if (session.payment_status !== 'paid') { skipNotPaid++; continue; }
    const amountCents = session.amount_total || 0;
    if (amountCents <= 0) { skipNotPaid++; continue; }

    // listLineItems pour avoir le price_id
    let priceId = null;
    try {
      const li = await stripe.checkout.sessions.listLineItems(session.id, { limit: 1 });
      priceId = li.data?.[0]?.price?.id || null;
    } catch (_) { /* ignore */ }

    const plan = planForPrice(priceId);
    if (!plan || plan.kind !== 'one_time') {
      console.warn(`  ⚠️  ${session.id}: plan inconnu (price=${priceId}) — skip`);
      skipUnknown++;
      continue;
    }

    const paymentId = (typeof session.payment_intent === 'string' ? session.payment_intent : null) || session.id;

    // Dédup manuelle car pas de contrainte UNIQUE sur stripe_payment_id
    const { data: existing } = await supabase
      .from('revenue_events')
      .select('id')
      .eq('stripe_payment_id', paymentId)
      .maybeSingle();
    if (existing) { alreadyIn++; continue; }

    const userId = await findUserId(session.customer);
    rows.push({
      user_id: userId,
      event_type: 'one_time',
      product_type: plan.type,
      amount: amountCents / 100,
      currency: (session.currency || 'eur').toLowerCase(),
      stripe_invoice_id: null,
      stripe_payment_id: paymentId,
      stripe_customer_id: typeof session.customer === 'string' ? session.customer : null,
      status: 'succeeded',
      created_at: new Date(session.created * 1000).toISOString(),
    });
  }

  console.log(`   scannées=${scanned} | non-payment=${skipNotPayment} | non-paid=${skipNotPaid} | inconnu=${skipUnknown} | déjà en DB=${alreadyIn} | à insérer=${rows.length}`);

  let inserted = 0;
  for (let i = 0; i < rows.length; i += 100) {
    const batch = rows.slice(i, i + 100);
    const { error } = await supabase.from('revenue_events').insert(batch);
    if (error) { console.error('   ❌ batch insert error:', error); }
    else { inserted += batch.length; }
  }
  console.log(`   ✅ ${inserted} achats uniques insérés`);
  return { scanned, inserted };
}

async function printFinalTotals() {
  const { data: totals } = await supabase
    .from('revenue_events')
    .select('event_type, amount, status');
  if (!totals) return;
  const ok = totals.filter(t => t.status === 'succeeded');
  const sub = ok.filter(t => t.event_type === 'subscription');
  const one = ok.filter(t => t.event_type === 'one_time');
  const sum = arr => arr.reduce((s, t) => s + Number(t.amount), 0);
  console.log('');
  console.log('📊 État de revenue_events après backfill :');
  console.log(`   Total lignes  : ${totals.length}`);
  console.log(`   Subscriptions : ${sub.length}  →  ${sum(sub).toFixed(2)} €`);
  console.log(`   One-time      : ${one.length}  →  ${sum(one).toFixed(2)} €`);
  console.log(`   TOTAL ENCAISSÉ: ${(sum(sub) + sum(one)).toFixed(2)} €`);
}

async function main() {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🔄 Backfill revenue_events depuis Stripe');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  if (!process.env.STRIPE_SECRET_KEY) throw new Error('STRIPE_SECRET_KEY manquante');
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) throw new Error('SUPABASE_SERVICE_ROLE_KEY manquante');

  await backfillSubscriptionInvoices();
  console.log('');
  await backfillOneTimeCheckouts();
  await printFinalTotals();
  console.log('');
  console.log('✅ Backfill terminé.');
}

main().catch(err => { console.error('❌ FATAL:', err); process.exit(1); });
