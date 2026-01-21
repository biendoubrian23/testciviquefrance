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

// Gérer la création d'abonnement après paiement
async function handleCheckoutCompleted(session: Stripe.Checkout.Session, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('✅ Checkout completed:', session.id);

  const customerEmail = session.customer_details?.email;
  if (!customerEmail) {
    console.error('❌ Pas d\'email client trouvé');
    return;
  }

  const customerId = session.customer as string;

  // Vérifier si c'est un abonnement ou un paiement unique
  if (session.mode === 'payment') {
    // Paiement unique (Pack Examen)
    await handleOneTimePayment(session, customerEmail, customerId, supabase);
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

  console.log(`💰 Abonnement créé - Plan: ${planKey}, Email: ${customerEmail}`);

  // Mettre à jour le profil dans Supabase
  const { data: profile, error: fetchError } = await supabase
    .from('profiles')
    .select('id, email, stripe_customer_id, stripe_subscription_id')
    .eq('email', customerEmail)
    .single();

  if (fetchError || !profile) {
    console.error('❌ Erreur récupération profil:', fetchError);
    return;
  }

  // IMPORTANT: Ne pas écraser le customer_id si le profil a déjà un abonnement actif
  // avec un autre customer (cas où l'utilisateur a plusieurs customers Stripe)
  // Pour les abonnements (subscription mode), on met à jour le customer_id
  // Pour les paiements uniques, on garde l'ancien customer_id s'il existe
  const shouldUpdateCustomerId = session.mode === 'subscription' || !profile.stripe_customer_id;

  console.log(`📋 Mode checkout: ${session.mode}`);
  console.log(`📋 Customer ID actuel: ${profile.stripe_customer_id || 'aucun'}`);
  console.log(`📋 Nouveau customer ID: ${customerId}`);
  console.log(`📋 Mise à jour customer_id: ${shouldUpdateCustomerId ? 'OUI' : 'NON (préservation)'}`);

  const { error: updateError } = await supabase
    .from('profiles')
    .update({
      // Mettre à jour customer_id seulement si abonnement ou si vide
      stripe_customer_id: shouldUpdateCustomerId ? customerId : profile.stripe_customer_id,
      stripe_subscription_id: subscriptionId,
      stripe_price_id: priceId,
      subscription_status: subscription.status,
      subscription_start_date: new Date(subscription.current_period_start * 1000).toISOString(),
      subscription_end_date: new Date(subscription.current_period_end * 1000).toISOString(),
      is_premium: true,
      subscription_exams_used: 0, // Reset du compteur pour le nouvel abonnement
    })
    .eq('id', profile.id); // Utiliser l'ID au lieu de l'email pour plus de fiabilité

  if (updateError) {
    console.error('❌ Erreur mise à jour profil:', updateError);
  } else {
    console.log('✅ Profil mis à jour avec succès');
  }
}

// Gérer la mise à jour d'abonnement (renouvellement, changement de plan)
// STRATÉGIE EMAIL-FIRST: L'email est le lien le plus fiable entre Stripe et notre BDD
async function handleSubscriptionUpdated(subscription: Stripe.Subscription, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('🔄 Subscription updated:', subscription.id, '- status:', subscription.status);

  const customerId = subscription.customer as string;

  // ÉTAPE 1: Récupérer l'email du customer Stripe (source de vérité)
  let customerEmail: string | null = null;
  try {
    const stripeCustomer = await stripe.customers.retrieve(customerId);
    if (stripeCustomer && !stripeCustomer.deleted && 'email' in stripeCustomer && stripeCustomer.email) {
      customerEmail = stripeCustomer.email;
      console.log(`📧 Email récupéré de Stripe: ${customerEmail}`);
    } else {
      console.error(`❌ Customer Stripe ${customerId} n'a pas d'email ou est supprimé`);
      return;
    }
  } catch (stripeError: any) {
    console.error(`❌ Erreur récupération customer Stripe: ${stripeError.message}`);
    return;
  }

  // ÉTAPE 2: Chercher le profil par email (le plus fiable)
  const { data: profile, error: fetchError } = await supabase
    .from('profiles')
    .select('id, email, stripe_customer_id, stripe_subscription_id')
    .eq('email', customerEmail)
    .single();

  if (fetchError || !profile) {
    console.error(`❌ Profil non trouvé pour email ${customerEmail}`);
    console.error(`   Erreur: ${fetchError?.message || 'aucune'}`);
    // L'utilisateur n'existe pas dans notre système - ignorer silencieusement
    return;
  }

  console.log(`✅ Profil trouvé via email: ${profile.email} (ID: ${profile.id})`);

  // ÉTAPE 3: Vérifier si on doit mettre à jour le customer_id
  // Mettre à jour TOUJOURS pour les subscription.updated car c'est l'abonnement qui compte
  if (profile.stripe_customer_id && profile.stripe_customer_id !== customerId) {
    console.warn(`⚠️ CORRECTION: customer_id différent détecté`);
    console.warn(`   En BDD: ${profile.stripe_customer_id}`);
    console.warn(`   Reçu de Stripe: ${customerId}`);
    console.warn(`   → Mise à jour vers le customer de l'abonnement actif`);
  }

  const priceId = subscription.items.data[0]?.price?.id;
  if (!priceId) {
    console.error('❌ Pas de price_id dans la subscription');
    return;
  }

  // Déterminer si l'utilisateur doit avoir accès Premium
  // Statuts qui donnent accès: 'active', 'trialing'
  // Statuts qui révoquent l'accès: 'past_due', 'canceled', 'unpaid', 'incomplete', 'incomplete_expired', 'paused'
  const activeStatuses = ['active', 'trialing'];
  const hasActiveAccess = activeStatuses.includes(subscription.status);

  console.log(`📊 Mise à jour subscription pour profil ${profile.id}:`);
  console.log(`   Email: ${customerEmail}`);
  console.log(`   Prix: ${priceId}`);
  console.log(`   Statut Stripe: ${subscription.status}`);
  console.log(`   Accès Premium: ${hasActiveAccess}`);

  // Mettre à jour le profil avec les bonnes infos Stripe
  const { error, data } = await supabase
    .from('profiles')
    .update({
      stripe_customer_id: customerId, // Toujours mettre à jour avec le customer de l'abonnement
      stripe_subscription_id: subscription.id,
      stripe_price_id: priceId,
      subscription_status: subscription.status,
      subscription_start_date: new Date(subscription.current_period_start * 1000).toISOString(),
      subscription_end_date: new Date(subscription.current_period_end * 1000).toISOString(),
      is_premium: hasActiveAccess,
    })
    .eq('id', profile.id)
    .select();

  if (error) {
    console.error('❌ Erreur mise à jour subscription:', error);
    console.error(`   Code: ${error.code}, Message: ${error.message}, Details: ${error.details}`);
    return;
  } else {
    console.log(`✅ Subscription mise à jour avec succès pour ${customerEmail}`);
    console.log(`   Nouveau statut: ${subscription.status}, is_premium: ${hasActiveAccess}`);
    if (data && data.length > 0) {
      console.log(`   Données mises à jour:`, JSON.stringify(data[0], null, 2));
    }
  }
}


// Gérer l'annulation d'abonnement
// STRATÉGIE EMAIL-FIRST pour cohérence avec les autres handlers
async function handleSubscriptionDeleted(subscription: Stripe.Subscription, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('🗑️ Subscription deleted:', subscription.id);

  const customerId = subscription.customer as string;

  // Récupérer l'email du customer Stripe
  let customerEmail: string | null = null;
  try {
    const stripeCustomer = await stripe.customers.retrieve(customerId);
    if (stripeCustomer && !stripeCustomer.deleted && 'email' in stripeCustomer && stripeCustomer.email) {
      customerEmail = stripeCustomer.email;
    } else {
      console.error(`❌ Customer Stripe ${customerId} n'a pas d'email ou est supprimé`);
      return;
    }
  } catch (stripeError: any) {
    console.error(`❌ Erreur récupération customer Stripe: ${stripeError.message}`);
    return;
  }

  const { error, data } = await supabase
    .from('profiles')
    .update({
      subscription_status: 'canceled',
      is_premium: false,
      stripe_subscription_id: null,
      stripe_price_id: null,
    })
    .eq('email', customerEmail)
    .select('email');

  if (error) {
    console.error('❌ Erreur annulation subscription:', error);
  } else if (data && data.length > 0) {
    console.log(`✅ Accès révoqué pour ${data[0].email}`);
  } else {
    console.warn(`⚠️ Profil non trouvé pour email ${customerEmail}`);
  }
}


// Gérer le paiement réussi d'une facture (renouvellement)
// STRATÉGIE EMAIL-FIRST pour cohérence avec les autres handlers
async function handleInvoicePaid(invoice: Stripe.Invoice, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('💳 Invoice paid:', invoice.id);

  if (!invoice.subscription) return;

  const customerId = invoice.customer as string;

  // Récupérer l'email du customer Stripe
  let customerEmail: string | null = null;
  try {
    const stripeCustomer = await stripe.customers.retrieve(customerId);
    if (stripeCustomer && !stripeCustomer.deleted && 'email' in stripeCustomer && stripeCustomer.email) {
      customerEmail = stripeCustomer.email;
    } else {
      console.error(`❌ Customer Stripe ${customerId} n'a pas d'email`);
      return;
    }
  } catch (stripeError: any) {
    console.error(`❌ Erreur récupération customer Stripe: ${stripeError.message}`);
    return;
  }

  // Mise à jour par email
  const { error, data } = await supabase
    .from('profiles')
    .update({
      subscription_status: 'active',
      is_premium: true,
      subscription_exams_used: 0, // Reset du compteur à chaque renouvellement
      stripe_customer_id: customerId, // S'assurer que le bon customer_id est enregistré
    })
    .eq('email', customerEmail)
    .select('email');

  if (error) {
    console.error('❌ Erreur après paiement:', error);
  } else if (data && data.length > 0) {
    console.log(`✅ Paiement confirmé pour ${data[0].email}`);
  } else {
    console.warn(`⚠️ Profil non trouvé pour email ${customerEmail}`);
  }
}


// Gérer l'échec de paiement
// STRATÉGIE EMAIL-FIRST pour cohérence avec les autres handlers
async function handleInvoicePaymentFailed(invoice: Stripe.Invoice, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('❌ Invoice payment failed:', invoice.id);

  if (!invoice.subscription) return;

  const customerId = invoice.customer as string;
  const subscriptionId = invoice.subscription as string;

  // Récupérer l'email du customer Stripe
  let customerEmail: string | null = null;
  try {
    const stripeCustomer = await stripe.customers.retrieve(customerId);
    if (stripeCustomer && !stripeCustomer.deleted && 'email' in stripeCustomer && stripeCustomer.email) {
      customerEmail = stripeCustomer.email;
      console.log(`📧 Email récupéré de Stripe: ${customerEmail}`);
    } else {
      console.error(`❌ Customer Stripe ${customerId} n'a pas d'email ou est supprimé`);
      return;
    }
  } catch (stripeError: any) {
    console.error(`❌ Erreur récupération customer Stripe: ${stripeError.message}`);
    return;
  }

  // IMPORTANT: Révoquer l'accès premium pour TOUT échec de paiement
  // L'utilisateur pourra récupérer son accès quand le paiement sera régularisé
  const { error, data } = await supabase
    .from('profiles')
    .update({
      subscription_status: 'past_due',
      is_premium: false, // Toujours révoquer l'accès en cas d'échec de paiement
      stripe_customer_id: customerId,
      stripe_subscription_id: subscriptionId,
    })
    .eq('email', customerEmail)
    .select('email');

  if (error) {
    console.error('❌ Erreur marquage paiement échoué:', error);
  } else if (data && data.length > 0) {
    console.log(`⚠️ Paiement échoué pour ${data[0].email} - Accès Premium révoqué, statut: past_due`);
  } else {
    console.warn(`⚠️ Profil non trouvé pour email ${customerEmail}`);
  }
}


// Gérer les paiements uniques (Pack Examen)
async function handleOneTimePayment(
  session: Stripe.Checkout.Session,
  customerEmail: string,
  customerId: string,
  supabase: ReturnType<typeof getSupabaseClient>
) {
  console.log('💳 Paiement unique détecté');

  // Récupérer les items achetés
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

  if (!lineItems.data || lineItems.data.length === 0) {
    console.error('❌ Aucun item trouvé dans la session');
    return;
  }

  const priceId = lineItems.data[0].price?.id;

  // Récupérer le profil
  const { data: profile, error: fetchError } = await supabase
    .from('profiles')
    .select('id, exam_credits, stripe_customer_id, subscription_status')
    .eq('email', customerEmail)
    .single();

  if (fetchError || !profile) {
    console.error('❌ Erreur récupération profil:', fetchError);
    return;
  }

  // Vérifier si c'est le Pack Examen
  if (priceId === STRIPE_PLANS.examen.priceId) {
    console.log('📝 Pack Examen acheté - Ajout de 2 examens blancs');

    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        exam_credits: (profile.exam_credits || 0) + 2, // Ajouter 2 examens blancs
        stripe_customer_id: profile.stripe_customer_id || customerId,
        last_purchase_at: new Date().toISOString(),
      })
      .eq('email', customerEmail);

    if (updateError) {
      console.error('❌ Erreur mise à jour crédits:', updateError);
    } else {
      console.log('✅ 2 examens blancs ajoutés au profil');
    }

    // Enregistrer l'achat dans la table achats
    const { error: achatError } = await supabase
      .from('achats')
      .insert({
        user_id: profile.id,
        product_type: 'pack_examen',
        amount: 2.50,
        currency: 'EUR',
        stripe_payment_id: session.payment_intent as string,
        stripe_customer_id: customerId,
        status: 'completed',
        completed_at: new Date().toISOString(),
      });

    if (achatError) {
      console.error('❌ Erreur enregistrement achat:', achatError);
    }
  }
  // Vérifier si c'est Flashcards 2 thèmes
  else if (priceId === STRIPE_PLANS.flashcards2Themes.priceId) {
    console.log('🃏 Flashcards 2 thèmes acheté');

    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        flashcards_2_themes: true,
        flashcards_purchased_at: new Date().toISOString(),
        stripe_customer_id: profile.stripe_customer_id || customerId,
      })
      .eq('email', customerEmail);

    if (updateError) {
      console.error('❌ Erreur activation Flashcards 2 thèmes:', updateError);
    } else {
      console.log('✅ Flashcards 2 thèmes activés (Principes + Histoire)');
    }

    // Enregistrer l'achat
    const { error: achatError } = await supabase
      .from('achats')
      .insert({
        user_id: profile.id,
        product_type: 'flashcards_2_themes',
        amount: 1.20,
        currency: 'EUR',
        stripe_payment_id: session.payment_intent as string,
        stripe_customer_id: customerId,
        status: 'completed',
        completed_at: new Date().toISOString(),
      });

    if (achatError) {
      console.error('❌ Erreur enregistrement achat:', achatError);
    }
  }
  // Vérifier si c'est Flashcards 5 thèmes
  else if (priceId === STRIPE_PLANS.flashcards5Themes.priceId) {
    console.log('🃏 Flashcards 5 thèmes acheté');

    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        flashcards_5_themes: true,
        flashcards_purchased_at: new Date().toISOString(),
        stripe_customer_id: profile.stripe_customer_id || customerId,
      })
      .eq('email', customerEmail);

    if (updateError) {
      console.error('❌ Erreur activation Flashcards 5 thèmes:', updateError);
    } else {
      console.log('✅ Flashcards 5 thèmes activés (Tous les thèmes)');
    }

    // Enregistrer l'achat
    const { error: achatError } = await supabase
      .from('achats')
      .insert({
        user_id: profile.id,
        product_type: 'flashcards_5_themes',
        amount: 1.50,
        currency: 'EUR',
        stripe_payment_id: session.payment_intent as string,
        stripe_customer_id: customerId,
        status: 'completed',
        completed_at: new Date().toISOString(),
      });

    if (achatError) {
      console.error('❌ Erreur enregistrement achat:', achatError);
    }
  }
  // Vérifier si c'est Mode sans chrono
  else if (priceId === STRIPE_PLANS.noTimer.priceId) {
    console.log('⏱️ Mode sans chrono acheté');

    // Vérifier si l'utilisateur a un abonnement actif OU en période d'essai
    const hasActiveSubscription = profile.subscription_status === 'active' || profile.subscription_status === 'trialing';
    if (!hasActiveSubscription) {
      console.error('❌ Achat Mode sans chrono refusé - Pas d\'abonnement actif (status:', profile.subscription_status, ')');
      return;
    }

    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        no_timer_enabled: true,
        last_purchase_at: new Date().toISOString(),
        stripe_customer_id: profile.stripe_customer_id || customerId,
      })
      .eq('email', customerEmail);

    if (updateError) {
      console.error('❌ Erreur activation Mode sans chrono:', updateError);
    } else {
      console.log('✅ Mode sans chrono activé');
    }

    // Enregistrer l'achat
    const { error: achatError } = await supabase
      .from('achats')
      .insert({
        user_id: profile.id,
        product_type: 'no_timer',
        amount: 0.69,
        currency: 'EUR',
        stripe_payment_id: session.payment_intent as string,
        stripe_customer_id: customerId,
        status: 'completed',
        completed_at: new Date().toISOString(),
      });

    if (achatError) {
      console.error('❌ Erreur enregistrement achat:', achatError);
    }
  }
  // Vérifier si c'est Débloquer niveau suivant
  else if (priceId === STRIPE_PLANS.unlockLevel.priceId) {
    console.log('🔓 Débloquer niveau suivant acheté');

    // Vérifier si l'utilisateur a un abonnement actif OU en période d'essai
    const hasActiveSubscription = profile.subscription_status === 'active' || profile.subscription_status === 'trialing';
    if (!hasActiveSubscription) {
      console.error('❌ Achat Débloquer niveau refusé - Pas d\'abonnement actif (status:', profile.subscription_status, ')');
      return;
    }

    const { error: updateError } = await supabase
      .from('profiles')
      .update({
        all_levels_unlocked: true,
        last_purchase_at: new Date().toISOString(),
        stripe_customer_id: profile.stripe_customer_id || customerId,
      })
      .eq('email', customerEmail);

    if (updateError) {
      console.error('❌ Erreur activation Débloquer niveau:', updateError);
    } else {
      console.log('✅ Débloquer niveau suivant activé');
    }

    // Enregistrer l'achat
    const { error: achatError } = await supabase
      .from('achats')
      .insert({
        user_id: profile.id,
        product_type: 'unlock_level',
        amount: 0.99,
        currency: 'EUR',
        stripe_payment_id: session.payment_intent as string,
        stripe_customer_id: customerId,
        status: 'completed',
        completed_at: new Date().toISOString(),
      });

    if (achatError) {
      console.error('❌ Erreur enregistrement achat:', achatError);
    }
  }
}
