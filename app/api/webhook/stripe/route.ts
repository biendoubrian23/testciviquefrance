import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { STRIPE_PLANS } from '@/lib/stripe/plans';
import { checkRateLimit, RATE_LIMITS, rateLimitResponse, getIdentifier } from '@/lib/utils/rate-limit';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2025-11-17.clover' as any, // Version utilisée en production
});

function getSupabaseClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  );
}

export async function POST(req: NextRequest) {
  // 🚦 PROTECTION 1 : Rate limiting (100 requêtes/min par IP)
  const identifier = getIdentifier(req);
  const rateLimitResult = checkRateLimit(identifier, RATE_LIMITS.stripeWebhook);

  if (!rateLimitResult.success) {
    console.warn(`⚠️ Rate limit dépassé pour IP: ${identifier}`);
    return rateLimitResponse(rateLimitResult.resetTime);
  }

  const supabase = getSupabaseClient();
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  // 🔒 PROTECTION 2 : Vérification de la signature Stripe (CRITIQUE)
  if (!signature) {
    console.error('❌ Tentative webhook sans signature');
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  // Vérifier que la clé secrète webhook est configurée
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

  // ✅ Signature valide, on peut traiter l'événement en toute sécurité

  console.log(`📨 Event reçu: ${event.type}`);

  // Chaque handler est wrappé pour éviter qu'une erreur ne cause un 500 global
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        try {
          const session = event.data.object as Stripe.Checkout.Session;
          await handleCheckoutCompleted(session, supabase);
        } catch (handlerError) {
          console.error('❌ Erreur checkout.session.completed:', handlerError);
        }
        break;
      }

      case 'customer.subscription.updated': {
        try {
          const subscription = event.data.object as Stripe.Subscription;
          await handleSubscriptionUpdated(subscription, supabase);
        } catch (handlerError) {
          console.error('❌ Erreur customer.subscription.updated:', handlerError);
        }
        break;
      }

      case 'customer.subscription.deleted': {
        try {
          const subscription = event.data.object as Stripe.Subscription;
          await handleSubscriptionDeleted(subscription, supabase);
        } catch (handlerError) {
          console.error('❌ Erreur customer.subscription.deleted:', handlerError);
        }
        break;
      }

      case 'invoice.paid': {
        try {
          const invoice = event.data.object as Stripe.Invoice;
          await handleInvoicePaid(invoice, supabase);
        } catch (handlerError) {
          console.error('❌ Erreur invoice.paid:', handlerError);
        }
        break;
      }

      case 'invoice.payment_failed': {
        try {
          const invoice = event.data.object as Stripe.Invoice;
          await handleInvoicePaymentFailed(invoice, supabase);
        } catch (handlerError) {
          console.error('❌ Erreur invoice.payment_failed:', handlerError);
        }
        break;
      }

      default:
        console.log(`⚠️ Event non géré: ${event.type}`);
    }

    // Toujours retourner 200 pour éviter les retries infinis de Stripe
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('❌ Erreur critique traitement webhook:', error);
    // Même en cas d'erreur critique, retourner 200 pour éviter les retries
    // Les erreurs sont loggées et peuvent être tracées
    return NextResponse.json({ received: true, warning: 'Handler had errors but acknowledged' });
  }
}

// ==============================================================================
// HANDLERS
// ==============================================================================

// Helper pour trouver un profil par stripe_customer_id ou email
// Cette fonction centralise la logique "ID d'abord, Email ensuite"
async function findProfile(
  supabase: ReturnType<typeof getSupabaseClient>,
  stripeCustomerId: string,
  email?: string | null
) {
  // 1. Essayer par Stripe Customer ID (Le plus fiable)
  if (stripeCustomerId) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('stripe_customer_id', stripeCustomerId)
      .single();

    if (data && !error) {
      console.log(`✅ Profil trouvé par Customer ID: ${data.id}`);
      return data;
    }
  }

  // 2. Si pas trouvé et qu'on a un email, essayer par email
  if (email) {
    console.log(`⚠️ Profil non trouvé par ID ${stripeCustomerId}, tentative par email: ${email}`);
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .ilike('email', email)
      .single();

    if (data && !error) {
      console.log(`✅ Profil trouvé par Email: ${data.id}. Mise à jour du Customer ID...`);
      // Auto-heal: On met à jour le customer ID manquant
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
async function handleCheckoutCompleted(session: Stripe.Checkout.Session, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('✅ Checkout completed:', session.id);

  const customerId = session.customer as string;
  const customerEmail = session.customer_details?.email || (session as any).email;
  const clientReferenceId = session.client_reference_id; // C'est ici que userId arrive grâce au Payment Link fix

  // Vérifier si c'est un abonnement ou un paiement unique
  if (session.mode === 'payment') {
    // Paiement unique (Pack Examen)
    await handleOneTimePayment(session, customerEmail, customerId, clientReferenceId, supabase);
    return;
  }

  // Récupérer l'abonnement
  const subscriptionId = session.subscription as string;
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  const priceId = subscription.items.data[0].price.id;

  // Trouver le plan correspondant
  const planKey = Object.keys(STRIPE_PLANS).find(
    key => STRIPE_PLANS[key as keyof typeof STRIPE_PLANS].priceId === priceId
  );

  if (!planKey) {
    console.error('❌ Plan non trouvé pour price_id:', priceId);
    return;
  }

  console.log(`💰 Abonnement créé - Plan: ${planKey}, Email: ${customerEmail}, Ref ID: ${clientReferenceId}`);

  let profile = null;

  // 1. Chercher par client_reference_id (FIABILITÉ MAXIMALE)
  if (clientReferenceId) {
    const { data } = await supabase.from('profiles').select('id, email, stripe_customer_id').eq('id', clientReferenceId).single();
    profile = data;
    if (profile) console.log(`✅ Profil identifié par client_reference_id: ${profile.id}`);
  }

  // 2. Si pas trouvé (ancien système ou oubli), utiliser le helper standard
  if (!profile) {
    profile = await findProfile(supabase, customerId, customerEmail);
  }

  if (!profile) {
    console.error('❌ IMPOSSIBLE de trouver le profil pour ce checkout.');
    return;
  }

  // Mettre à jour le profil
  const { error: updateError } = await supabase
    .from('profiles')
    .update({
      stripe_customer_id: customerId, // On force le lien ici
      stripe_subscription_id: subscriptionId,
      stripe_price_id: priceId,
      subscription_status: subscription.status,
      subscription_start_date: new Date(subscription.current_period_start * 1000).toISOString(),
      subscription_end_date: new Date(subscription.current_period_end * 1000).toISOString(),
      is_premium: true, // L'utilisateur vient de payer ou de s'inscrire, donc accès immédiat
      subscription_exams_used: 0,
    })
    .eq('id', profile.id);

  if (updateError) {
    console.error('❌ Erreur mise à jour profil:', updateError);
  } else {
    console.log('✅ Profil mis à jour avec succès (Checkout)');
  }
}

// Gérer la mise à jour d'abonnement (renouvellement, changement de plan)
async function handleSubscriptionUpdated(subscription: Stripe.Subscription, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('🔄 Subscription updated:', subscription.id, '- status:', subscription.status);

  const customerId = subscription.customer as string;

  // Tenter de récupérer l'email depuis Stripe au cas où on en aurait besoin pour le fallback
  let customerEmail = null;
  try {
    const customer = await stripe.customers.retrieve(customerId);
    if (!customer.deleted) customerEmail = (customer as Stripe.Customer).email;
  } catch (e) { console.warn('Erreur récup email stripe:', e); }

  const profile = await findProfile(supabase, customerId, customerEmail);

  if (!profile) {
    console.error(`❌ Profil introuvable pour maj abonnement (Cust: ${customerId})`);
    return;
  }

  const priceId = subscription.items.data[0]?.price?.id;

  // Statuts donnant accès Premium
  // TRIALING doit donner accès !
  const activeStatuses = ['active', 'trialing'];
  const hasActiveAccess = activeStatuses.includes(subscription.status);

  console.log(`📊 Maj ID: ${profile.id} | Statut: ${subscription.status} | Premium: ${hasActiveAccess}`);

  const { error } = await supabase
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

  if (error) {
    console.error('❌ Erreur DB subscription:', error);
  } else {
    console.log(`✅ Subscription mise à jour.`);
  }
}


// Gérer l'annulation d'abonnement
async function handleSubscriptionDeleted(subscription: Stripe.Subscription, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('🗑️ Subscription deleted:', subscription.id);

  const customerId = subscription.customer as string;
  let customerEmail = null;
  try {
    const customer = await stripe.customers.retrieve(customerId);
    if (!customer.deleted) customerEmail = (customer as Stripe.Customer).email;
  } catch (e) { }

  const profile = await findProfile(supabase, customerId, customerEmail);

  if (!profile) {
    console.warn(`⚠️ Profil non trouvé pour suppression (Cust: ${customerId})`);
    return;
  }

  // On garde le stripe_customer_id pour permettre un réabonnement ou gérer les factures
  // On ne vide QUE les infos d'abonnement actif
  const { error } = await supabase
    .from('profiles')
    .update({
      subscription_status: 'canceled',
      is_premium: false,
      stripe_subscription_id: null,
      stripe_price_id: null,
    })
    .eq('id', profile.id);

  if (error) {
    console.error('❌ Erreur annulation:', error);
  } else {
    console.log(`✅ Accès révoqué pour ${profile.email}`);
  }
}


// Gérer le paiement réussi d'une facture (renouvellement)
async function handleInvoicePaid(invoice: Stripe.Invoice, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('💳 Invoice paid:', invoice.id);
  if (!invoice.subscription) return;

  const customerId = invoice.customer as string;
  const profile = await findProfile(supabase, customerId, invoice.customer_email);

  if (!profile) {
    console.error('❌ Profil non trouvé pour Invoice Paid');
    return;
  }

  // Renouvellement réussi -> Active + Premium + Reset Compteurs
  const { error, data } = await supabase
    .from('profiles')
    .update({
      subscription_status: 'active',
      is_premium: true,
      subscription_exams_used: 0,
      stripe_customer_id: customerId, // Reinforce link
    })
    .eq('id', profile.id)
    .select();

  // Enregistrement transaction
  if (data && data.length > 0 && invoice.amount_paid > 0) {
    const amount = invoice.amount_paid / 100;
    const productType = amount > 5 ? 'pack_premium' : 'pack_standard';

    await supabase.from('achats').insert({
      user_id: profile.id,
      product_type: productType,
      amount: amount,
      currency: invoice.currency || 'EUR',
      stripe_payment_id: invoice.payment_intent as string || invoice.id,
      stripe_customer_id: customerId,
      status: 'completed',
      completed_at: new Date().toISOString()
    });
    console.log('💰 Transaction enregistrée.');
  }
}


// Gérer l'échec de paiement
async function handleInvoicePaymentFailed(invoice: Stripe.Invoice, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('❌ Invoice payment failed:', invoice.id);
  if (!invoice.subscription) return;

  const customerId = invoice.customer as string;
  const profile = await findProfile(supabase, customerId, invoice.customer_email);

  if (!profile) {
    console.error('❌ Profil non trouvé pour Payment Failed');
    return;
  }

  // IMPORTANT: 
  // 1. Statut -> past_due
  // 2. Premium -> false (coupe l'accès)
  // 3. ON GARDE le stripe_customer_id pour que le bouton "Gérer l'abonnement" fonctionne encore !
  //    (C'est ça qui permet à l'utilisateur d'aller mettre à jour sa CB ou annuler)

  await supabase
    .from('profiles')
    .update({
      subscription_status: 'past_due',
      is_premium: false,
    })
    .eq('id', profile.id);

  console.log(`⚠️ Paiement échoué pour ${profile.email} - Accès coupé, mais gestion abo possible.`);
}


// Gérer les paiements uniques (Pack Examen)
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

  if (!profile) {
    console.error('❌ Profil non trouvé pour achat unique');
    return;
  }

  // Logique spécifique par produit (inchangée mais utilisant le bon profile.id)
  // ... (Je reprends la logique existante mais plus concise)

  let updates: any = { stripe_customer_id: profile.stripe_customer_id || customerId };
  let productType = 'unknown';
  let amount = (session.amount_total || 0) / 100;

  if (priceId === STRIPE_PLANS.examen.priceId) {
    updates.exam_credits = (profile.exam_credits || 0) + 2;
    updates.last_purchase_at = new Date().toISOString();
    productType = 'pack_examen';
    console.log('📝 Pack Examen +2');
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
    await supabase.from('achats').insert({
      user_id: profile.id,
      product_type: productType,
      amount: amount,
      currency: session.currency || 'EUR',
      stripe_payment_id: session.payment_intent as string || session.id,
      stripe_customer_id: customerId,
      status: 'completed',
      completed_at: new Date().toISOString(),
    });
  }
}
