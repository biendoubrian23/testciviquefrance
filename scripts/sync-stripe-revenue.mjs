import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

function parseEnv(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const env = {};
  for (const line of fs.readFileSync(filePath, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const match = line.match(/^\s*([^=]+?)\s*=\s*(.*)?\s*$/);
    if (!match) continue;
    let value = match[2] || '';
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    env[match[1]] = value;
  }
  return env;
}

const env = { ...parseEnv('.env'), ...parseEnv('.env.local'), ...process.env };
const stripe = new Stripe(env.STRIPE_SECRET_KEY, { apiVersion: '2024-06-20' });
const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const PRICE_TO_PRODUCT = {
  [env.STRIPE_STANDARD_PRICE_ID || 'price_1Sc3AqIUG5GUejFZagJyV8HC']: 'standard',
  [env.STRIPE_PREMIUM_PRICE_ID || 'price_1Sc3BYIUG5GUejFZaWexcxzz']: 'premium',
  price_1Sc3C6IUG5GUejFZtIHXajUx: 'pack_examen',
  price_1SfM9ZIUG5GUejFZYk1zz8f5: 'flashcards_2_themes',
  price_1SfM9zIUG5GUejFZ5j0QHiSc: 'flashcards_5_themes',
  price_1SfM96IUG5GUejFZgBW5798m: 'no_timer',
  price_1SfM7tIUG5GUejFZD0fHE3Ih: 'unlock_level',
};

const since = process.argv[2] || '2026-04-24T00:00:00Z';
const created = { gte: Math.floor(Date.parse(since) / 1000) };

async function getCustomerEmail(customerId) {
  if (!customerId) return null;
  try {
    const customer = await stripe.customers.retrieve(customerId);
    return customer.deleted ? null : customer.email;
  } catch {
    return null;
  }
}

async function findProfile(customerId, email) {
  if (customerId) {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('stripe_customer_id', customerId)
      .maybeSingle();
    if (data) return data;
  }

  if (email) {
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .ilike('email', email)
      .maybeSingle();
    if (data) return data;
  }

  return null;
}

async function revenueExists({ invoiceId, paymentId }) {
  if (invoiceId) {
    const { data } = await supabase
      .from('revenue_events')
      .select('id')
      .eq('stripe_invoice_id', invoiceId)
      .maybeSingle();
    if (data) return true;
  }

  if (paymentId) {
    const { data } = await supabase
      .from('revenue_events')
      .select('id')
      .eq('stripe_payment_id', paymentId)
      .maybeSingle();
    if (data) return true;
  }

  return false;
}

async function insertRevenue(event) {
  if (event.amount <= 0 || event.product_type === 'unknown') return false;
  if (await revenueExists({ invoiceId: event.stripe_invoice_id, paymentId: event.stripe_payment_id })) return false;

  const { error } = await supabase.from('revenue_events').insert({
    ...event,
    status: 'succeeded',
    currency: (event.currency || 'eur').toLowerCase(),
  });

  if (error) {
    console.error('Erreur insert revenue_events:', error.message, event);
    return false;
  }

  return true;
}

async function insertAchatIfMissing(event) {
  if (event.event_type !== 'one_time' || !event.user_id || !event.stripe_payment_id) return false;

  const { data: existing } = await supabase
    .from('achats')
    .select('id')
    .eq('stripe_payment_id', event.stripe_payment_id)
    .maybeSingle();

  if (existing) return false;

  const { error } = await supabase.from('achats').insert({
    user_id: event.user_id,
    product_type: event.product_type,
    amount: event.amount,
    currency: (event.currency || 'eur').toUpperCase(),
    stripe_payment_id: event.stripe_payment_id,
    stripe_customer_id: event.stripe_customer_id,
    status: 'completed',
    completed_at: event.created_at,
  });

  if (error) {
    console.error('Erreur insert achats:', error.message, event);
    return false;
  }

  return true;
}

async function syncInvoices() {
  let inserted = 0;
  for await (const invoice of stripe.invoices.list({ created, limit: 100 })) {
    if (!invoice.paid || invoice.amount_paid <= 0 || !invoice.subscription) continue;

    const priceId = invoice.lines.data[0]?.price?.id;
    const productType = PRICE_TO_PRODUCT[priceId] || 'unknown';
    const email = invoice.customer_email || await getCustomerEmail(invoice.customer);
    const profile = await findProfile(invoice.customer, email);
    const event = {
      user_id: profile?.id || null,
      event_type: 'subscription',
      product_type: productType === 'premium' ? 'premium' : 'standard',
      amount: invoice.amount_paid / 100,
      currency: invoice.currency,
      stripe_invoice_id: invoice.id,
      stripe_payment_id: invoice.payment_intent || null,
      stripe_customer_id: invoice.customer || null,
      created_at: new Date(invoice.created * 1000).toISOString(),
    };

    if (await insertRevenue(event)) {
      inserted += 1;
      console.log(`+ invoice ${invoice.id} ${event.product_type} ${event.amount}€`);
    }
  }
  return inserted;
}

async function syncCheckoutSessions() {
  let inserted = 0;
  let achatsInserted = 0;

  for await (const session of stripe.checkout.sessions.list({
    created,
    limit: 100,
    expand: ['data.line_items'],
  })) {
    if (session.mode !== 'payment' || session.payment_status !== 'paid' || !session.payment_intent) continue;

    const priceId = session.line_items?.data?.[0]?.price?.id;
    const productType = PRICE_TO_PRODUCT[priceId] || 'unknown';
    const email = session.customer_details?.email || await getCustomerEmail(session.customer);
    const profile = session.client_reference_id
      ? (await supabase.from('profiles').select('*').eq('id', session.client_reference_id).maybeSingle()).data
      : await findProfile(session.customer, email);

    const event = {
      user_id: profile?.id || null,
      event_type: 'one_time',
      product_type: productType,
      amount: (session.amount_total || 0) / 100,
      currency: session.currency,
      stripe_invoice_id: null,
      stripe_payment_id: session.payment_intent,
      stripe_customer_id: session.customer || null,
      created_at: new Date(session.created * 1000).toISOString(),
    };

    if (await insertRevenue(event)) {
      inserted += 1;
      console.log(`+ checkout ${session.id} ${event.product_type} ${event.amount}€`);
    }

    if (await insertAchatIfMissing(event)) {
      achatsInserted += 1;
    }
  }

  return { inserted, achatsInserted };
}

const invoiceCount = await syncInvoices();
const sessionResult = await syncCheckoutSessions();

console.log(`Sync terminee depuis ${since}`);
console.log(`Revenue invoices inseres: ${invoiceCount}`);
console.log(`Revenue achats ponctuels inseres: ${sessionResult.inserted}`);
console.log(`Achats table inseres: ${sessionResult.achatsInserted}`);
