import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { STRIPE_PLANS } from '@/lib/stripe/plans';
import { checkRateLimit, RATE_LIMITS, rateLimitResponse, getIdentifier } from '@/lib/utils/rate-limit';

// ✅ CORRECTION 1 : Version API officielle stable
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2024-06-20' as any,
});

function getSupabaseClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  );
}

export async function POST(req: NextRequest) {
  // 🚦 PROTECTION 1 : Rate limiting
  const identifier = getIdentifier(req);
  const rateLimitResult = checkRateLimit(identifier, RATE_LIMITS.stripeWebhook);

  if (!rateLimitResult.success) {
    console.warn(`⚠️ Rate limit dépassé pour IP: ${identifier}`);
    return rateLimitResponse(rateLimitResult.resetTime);
  }

  const supabase = getSupabaseClient();
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  // 🔒 PROTECTION 2 : Signature Stripe
  if (!signature) {
    console.error('❌ Tentative webhook sans signature');
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  if (!process.env.STRIPE_WEBHOOK_SECRET) {
    console.error('❌ STRIPE_WEBHOOK_SECRET non configuré !');
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err: any) {
    console.error(`❌ Signature invalide de ${identifier}: ${err.message}`);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  console.log(`📨 Event reçu: ${event.type} [${event.id}]`);

  // ✅ CORRECTION BONUS : Idempotence simplifiée (via une table stripe_events si elle existe)
  // On tente d'insérer l'event. Si conflit (déjà traité), on ignore.
  // Note: Comme je n'ai pas la garantie que la table existe, je fais un try/catch "soft".
  try {
    const { error } = await supabase.from('stripe_events').insert({ id: event.id, type: event.type });
    // Si erreur de duplication (code 23505 en postgres), on return 200
    if (error && error.code === '23505') {
      console.log(`🔁 Event ${event.id} déjà traité. Ignoré.`);
      return NextResponse.json({ received: true });
    }
  } catch (e) {
    // Si la table n'existe pas, on continue sans idempotence (ce n'est pas bloquant pour le fix critique)
    // console.warn("Table stripe_events manquante ou erreur insert:", e);
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutCompleted(session, supabase);
        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionUpdated(subscription, supabase);
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionDeleted(subscription, supabase);
        break;
      }

      case 'invoice.paid': {
        const invoice = event.data.object as Stripe.Invoice;
        await handleInvoicePaid(invoice, supabase);
        break;
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        await handlePaymentIntentSucceeded(paymentIntent, supabase);
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        await handleInvoicePaymentFailed(invoice, supabase);
        break;
      }

      case 'charge.refunded': {
        const charge = event.data.object as Stripe.Charge;
        await handleChargeRefunded(charge, supabase);
        break;
      }

      default:
        console.log(`⚠️ Event non géré: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('❌ Erreur critique traitement webhook:', error);
    return NextResponse.json({ received: true, warning: 'Handler had errors' });
  }
}

// ==============================================================================
// HANDLERS
// ==============================================================================

async function findProfile(
  supabase: ReturnType<typeof getSupabaseClient>,
  stripeCustomerId: string,
  email?: string | null
) {
  // 1. Essayer par Stripe Customer ID
  if (stripeCustomerId) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('stripe_customer_id', stripeCustomerId)
      .single();

    if (data && !error) return data;
  }

  // 2. Fallback Email
  if (email) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .ilike('email', email)
      .single();

    if (data && !error) {
      // Auto-heal
      await supabase
        .from('profiles')
        .update({ stripe_customer_id: stripeCustomerId })
        .eq('id', data.id);
      return data;
    }
  }

  return null;
}

// Gérer la création d'abonnement après paiement
async function getCustomerEmail(customerId?: string | null) {
  if (!customerId) return null;

  try {
    const customer = await stripe.customers.retrieve(customerId);
    if (!customer.deleted) return (customer as Stripe.Customer).email;
  } catch (error) {
    console.warn('Impossible de recuperer le client Stripe:', customerId, error);
  }

  return null;
}

function getProductTypeFromPriceId(priceId?: string | null) {
  if (!priceId) return 'unknown';
  if (priceId === STRIPE_PLANS.standard.priceId) return 'standard';
  if (priceId === STRIPE_PLANS.premium.priceId) return 'premium';
  if (priceId === STRIPE_PLANS.examen.priceId) return 'pack_examen';
  if (priceId === STRIPE_PLANS.flashcards2Themes.priceId) return 'flashcards_2_themes';
  if (priceId === STRIPE_PLANS.flashcards5Themes.priceId) return 'flashcards_5_themes';
  if (priceId === STRIPE_PLANS.noTimer.priceId) return 'no_timer';
  if (priceId === STRIPE_PLANS.unlockLevel.priceId) return 'unlock_level';
  return 'unknown';
}

async function insertRevenueEvent(
  supabase: ReturnType<typeof getSupabaseClient>,
  payload: {
    user_id?: string | null;
    event_type: 'subscription' | 'one_time';
    product_type: string;
    amount: number;
    currency?: string | null;
    stripe_invoice_id?: string | null;
    stripe_payment_id?: string | null;
    stripe_customer_id?: string | null;
    created_at?: string;
  }
) {
  if (payload.amount <= 0 || payload.product_type === 'unknown') return;

  if (payload.stripe_invoice_id) {
    await supabase.from('revenue_events').upsert({
      user_id: payload.user_id || null,
      event_type: payload.event_type,
      product_type: payload.product_type,
      amount: payload.amount,
      currency: (payload.currency || 'eur').toLowerCase(),
      stripe_invoice_id: payload.stripe_invoice_id,
      stripe_payment_id: payload.stripe_payment_id || null,
      stripe_customer_id: payload.stripe_customer_id || null,
      status: 'succeeded',
      ...(payload.created_at ? { created_at: payload.created_at } : {}),
    }, { onConflict: 'stripe_invoice_id', ignoreDuplicates: true });
    return;
  }

  if (payload.stripe_payment_id) {
    const { data: existing } = await supabase
      .from('revenue_events')
      .select('id')
      .eq('stripe_payment_id', payload.stripe_payment_id)
      .maybeSingle();

    if (existing) return;
  }

  await supabase.from('revenue_events').insert({
    user_id: payload.user_id || null,
    event_type: payload.event_type,
    product_type: payload.product_type,
    amount: payload.amount,
    currency: (payload.currency || 'eur').toLowerCase(),
    stripe_invoice_id: payload.stripe_invoice_id || null,
    stripe_payment_id: payload.stripe_payment_id || null,
    stripe_customer_id: payload.stripe_customer_id || null,
    status: 'succeeded',
    ...(payload.created_at ? { created_at: payload.created_at } : {}),
  });
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('✅ Checkout completed:', session.id);

  const customerId = session.customer as string;
  const customerEmail = session.customer_details?.email || (session as any).email;
  const clientReferenceId = session.client_reference_id;

  if (session.mode === 'payment') {
    await handleOneTimePayment(session, customerEmail, customerId, clientReferenceId, supabase);
    return;
  }

  const subscriptionId = session.subscription as string;
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  const priceId = subscription.items.data[0].price.id;

  const planKey = Object.keys(STRIPE_PLANS).find(
    key => STRIPE_PLANS[key as keyof typeof STRIPE_PLANS].priceId === priceId
  );

  if (!planKey) return;

  let profile = null;
  if (clientReferenceId) {
    const { data } = await supabase.from('profiles').select('id, email, stripe_customer_id').eq('id', clientReferenceId).single();
    profile = data;
  }
  if (!profile) {
    profile = await findProfile(supabase, customerId, customerEmail);
  }

  if (!profile) {
    console.error('❌ IMPOSSIBLE de trouver le profil pour ce checkout.');
    return;
  }

  // ✅ CORRECTION 3 : Reset des crédits seulement pour les abonnements en période d'essai (trialing)
  // Pour les abonnements avec paiement immédiat, invoice.paid gère le reset des compteurs
  // Mais pour trialing, invoice.paid n'est pas déclenché donc on doit reset ici
  const isTrialing = subscription.status === 'trialing';

  const updateData: Record<string, any> = {
    stripe_customer_id: customerId,
    stripe_subscription_id: subscriptionId,
    stripe_price_id: priceId,
    subscription_status: subscription.status,
    subscription_start_date: new Date(subscription.current_period_start * 1000).toISOString(),
    subscription_end_date: new Date(subscription.current_period_end * 1000).toISOString(),
    is_premium: true,
  };

  // Reset des crédits d'examens pour les périodes d'essai (trialing)
  // Car invoice.paid ne sera pas appelé pendant l'essai gratuit
  if (isTrialing) {
    updateData.subscription_exams_used = 0;
    console.log('🎁 Période d\'essai détectée - Reset des crédits d\'examens');
  }

  await supabase
    .from('profiles')
    .update(updateData)
    .eq('id', profile.id);

  console.log(`✅ Profil mis à jour (Checkout) - Status: ${subscription.status}${isTrialing ? ' (crédits reset)' : ''}`);
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('🔄 Subscription updated:', subscription.id);

  const customerId = subscription.customer as string;
  let customerEmail = null;
  try {
    const customer = await stripe.customers.retrieve(customerId);
    if (!customer.deleted) customerEmail = (customer as Stripe.Customer).email;
  } catch (e) { }

  const profile = await findProfile(supabase, customerId, customerEmail);
  if (!profile) return;

  const priceId = subscription.items.data[0]?.price?.id;
  const activeStatuses = ['active', 'trialing'];
  const hasActiveAccess = activeStatuses.includes(subscription.status);

  await supabase
    .from('profiles')
    .update({
      stripe_customer_id: customerId,
      stripe_subscription_id: subscription.id,
      stripe_price_id: priceId,
      subscription_status: subscription.status,
      subscription_start_date: new Date(subscription.current_period_start * 1000).toISOString(),
      subscription_end_date: new Date(subscription.current_period_end * 1000).toISOString(),
      is_premium: hasActiveAccess,
    })
    .eq('id', profile.id);

  console.log(`✅ Subscription maj: ${subscription.status}, Premium: ${hasActiveAccess}`);
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('🗑️ Subscription deleted:', subscription.id);
  const customerId = subscription.customer as string;
  const profile = await findProfile(supabase, customerId);

  if (!profile) return;

  await supabase
    .from('profiles')
    .update({
      subscription_status: 'canceled',
      is_premium: false,
      stripe_subscription_id: null,
      stripe_price_id: null,
    })
    .eq('id', profile.id);

  console.log(`✅ Accès révoqué pour ${profile.id}`);
}

async function handleInvoicePaid(invoice: Stripe.Invoice, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('💳 Invoice paid:', invoice.id);
  if (!invoice.subscription) return;

  const customerId = invoice.customer as string;
  const customerEmail = invoice.customer_email || await getCustomerEmail(customerId);
  const profile = await findProfile(supabase, customerId, customerEmail);

  if (!profile) {
    console.warn(`Profil introuvable pour invoice ${invoice.id}, revenu enregistre sans user_id.`);
  }

  if (profile) {
  // ✅ CORRECTION 2 : On reset les compteurs et on active l'accès
  await supabase
    .from('profiles')
    .update({
      subscription_status: 'active',
      is_premium: true,
      subscription_exams_used: 0, // Reset des crédits de la semaine
      stripe_customer_id: customerId,
    })
    .eq('id', profile.id);
  }

  // 📊 AUDIT REVENUS : Enregistrer le paiement réel reçu
  // On détermine le type d'abonnement depuis la subscription Stripe
  const amountPaid = (invoice.amount_paid || 0) / 100;
  if (amountPaid > 0) {
    // Récupérer le price_id depuis l'invoice pour déterminer standard/premium
    const priceId = invoice.lines?.data?.[0]?.price?.id || profile?.stripe_price_id;
    const productType = getProductTypeFromPriceId(priceId);

    await insertRevenueEvent(supabase, {
      user_id: profile?.id,
      event_type: 'subscription',
      product_type: productType === 'premium' ? 'premium' : 'standard',
      amount: amountPaid,
      currency: invoice.currency || 'eur',
      stripe_invoice_id: invoice.id,
      stripe_payment_id: invoice.payment_intent as string || null,
      stripe_customer_id: customerId,
      created_at: new Date(invoice.created * 1000).toISOString(),
    });

    console.log(`💰 Revenue event enregistré : subscription ${productType} ${amountPaid}€`);
  }

  console.log('✅ Invoice paid : Renouvellement traité (Accès OK, Crédits reset).');
}

async function handlePaymentIntentSucceeded(
  paymentIntent: Stripe.PaymentIntent,
  supabase: ReturnType<typeof getSupabaseClient>
) {
  const amount = (paymentIntent.amount_received || paymentIntent.amount || 0) / 100;
  if (amount <= 0) return;

  if (paymentIntent.invoice) {
    const invoice = await stripe.invoices.retrieve(paymentIntent.invoice as string);
    await handleInvoicePaid(invoice, supabase);
    return;
  }

  const sessions = await stripe.checkout.sessions.list({
    payment_intent: paymentIntent.id,
    limit: 1,
    expand: ['data.line_items'],
  } as any);
  const session = sessions.data[0];

  if (!session || session.mode !== 'payment' || session.payment_status !== 'paid') return;

  const priceId = session.line_items?.data?.[0]?.price?.id;
  const productType = getProductTypeFromPriceId(priceId);
  const customerId = session.customer as string | null;
  const email = session.customer_details?.email || await getCustomerEmail(customerId);
  const profile = session.client_reference_id
    ? (await supabase.from('profiles').select('*').eq('id', session.client_reference_id).single()).data
    : await findProfile(supabase, customerId || '', email);

  await insertRevenueEvent(supabase, {
    user_id: profile?.id,
    event_type: 'one_time',
    product_type: productType,
    amount,
    currency: paymentIntent.currency || session.currency || 'eur',
    stripe_payment_id: paymentIntent.id,
    stripe_customer_id: customerId,
    created_at: new Date(paymentIntent.created * 1000).toISOString(),
  });

  console.log(`ðŸ’° Revenue event fallback payment_intent : ${productType} ${amount}â‚¬`);
}

// 🔁 Remboursement : marque le revenue_event correspondant en status='refunded'
// (la ligne reste visible dans l'admin mais sort du total NET — voir admin-dashboard).
// Ne touche PAS aux profils ni aux abonnements : seule la traçabilité revenu change.
async function handleChargeRefunded(charge: Stripe.Charge, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('🔁 Charge refunded:', charge.id, `(amount_refunded=${charge.amount_refunded || 0})`);
  if (!charge.amount_refunded || charge.amount_refunded <= 0) return;

  // 1) Essai via payment_intent (couvre les achats uniques et certaines invoices)
  const paymentIntentId =
    typeof charge.payment_intent === 'string'
      ? charge.payment_intent
      : (charge.payment_intent as Stripe.PaymentIntent | null)?.id || null;

  if (paymentIntentId) {
    const { data, error } = await supabase
      .from('revenue_events')
      .update({ status: 'refunded' })
      .eq('stripe_payment_id', paymentIntentId)
      .select('id');
    if (!error && data && data.length > 0) {
      console.log(`   ✅ ${data.length} revenue_event(s) marqué(s) "refunded" via payment_intent`);
      return;
    }
  }

  // 2) Fallback via invoice (couvre les renouvellements d'abonnement)
  const invoiceId =
    typeof charge.invoice === 'string'
      ? charge.invoice
      : (charge.invoice as Stripe.Invoice | null)?.id || null;

  if (invoiceId) {
    const { data, error } = await supabase
      .from('revenue_events')
      .update({ status: 'refunded' })
      .eq('stripe_invoice_id', invoiceId)
      .select('id');
    if (!error && data && data.length > 0) {
      console.log(`   ✅ ${data.length} revenue_event(s) marqué(s) "refunded" via invoice`);
      return;
    }
  }

  console.warn(`   ⚠️ Aucun revenue_event trouvé pour le charge ${charge.id} (PI=${paymentIntentId}, inv=${invoiceId})`);
}

async function handleInvoicePaymentFailed(invoice: Stripe.Invoice, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('❌ Invoice payment failed:', invoice.id);
  if (!invoice.subscription) return;

  const customerId = invoice.customer as string;
  const profile = await findProfile(supabase, customerId, invoice.customer_email);

  if (!profile) return;

  await supabase
    .from('profiles')
    .update({
      subscription_status: 'past_due',
      is_premium: false,
    })
    .eq('id', profile.id);

  console.log('⚠️ Paiement échoué. Accès révoqué temporairement (Past Due).');
}

async function handleOneTimePayment(
  session: Stripe.Checkout.Session,
  customerEmail: string | null | undefined,
  customerId: string,
  clientReferenceId: string | null,
  supabase: ReturnType<typeof getSupabaseClient>
) {
  console.log('💳 Paiement unique détecté');

  const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
  if (!lineItems.data || lineItems.data.length === 0) return;
  const priceId = lineItems.data[0].price?.id;

  let profile = null;
  if (clientReferenceId) {
    const { data } = await supabase.from('profiles').select('*').eq('id', clientReferenceId).single();
    profile = data;
  }
  if (!profile) {
    profile = await findProfile(supabase, customerId, customerEmail);
  }

  if (!profile) return;

  let updates: any = { stripe_customer_id: profile.stripe_customer_id || customerId };
  let productType = 'unknown';
  let amount = (session.amount_total || 0) / 100;

  if (priceId === STRIPE_PLANS.examen.priceId) {
    updates.exam_credits = (profile.exam_credits || 0) + 2;
    updates.last_purchase_at = new Date().toISOString();
    productType = 'pack_examen';
  }
  else if (priceId === STRIPE_PLANS.flashcards2Themes.priceId) {
    updates.flashcards_2_themes = true;
    updates.flashcards_purchased_at = new Date().toISOString();
    productType = 'flashcards_2_themes';
  }
  else if (priceId === STRIPE_PLANS.flashcards5Themes.priceId) {
    updates.flashcards_5_themes = true;
    updates.flashcards_purchased_at = new Date().toISOString();
    productType = 'flashcards_5_themes';
  }
  else if (priceId === STRIPE_PLANS.noTimer.priceId) {
    if (profile.subscription_status === 'active' || profile.subscription_status === 'trialing') {
      updates.no_timer_enabled = true;
      updates.last_purchase_at = new Date().toISOString();
      productType = 'no_timer';
    }
  }
  else if (priceId === STRIPE_PLANS.unlockLevel.priceId) {
    if (profile.subscription_status === 'active' || profile.subscription_status === 'trialing') {
      updates.all_levels_unlocked = true;
      updates.last_purchase_at = new Date().toISOString();
      productType = 'unlock_level';
    }
  }

  await supabase.from('profiles').update(updates).eq('id', profile.id);

  if (productType !== 'unknown') {
    const paymentId = session.payment_intent as string || session.id;

    await supabase.from('achats').insert({
      user_id: profile.id,
      product_type: productType,
      amount: amount,
      currency: session.currency || 'EUR',
      stripe_payment_id: paymentId,
      stripe_customer_id: customerId,
      status: 'completed',
      completed_at: new Date().toISOString(),
    });

    // 📊 AUDIT REVENUS : Aussi enregistrer dans revenue_events
    await insertRevenueEvent(supabase, {
      user_id: profile.id,
      event_type: 'one_time',
      product_type: productType,
      amount: amount,
      currency: (session.currency || 'eur').toLowerCase(),
      stripe_payment_id: paymentId,
      stripe_customer_id: customerId,
    });

    console.log(`💰 Achat unique enregistré : ${productType} (${amount}€)`);
  }
}
