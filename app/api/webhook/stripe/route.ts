import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { STRIPE_PLANS } from '@/lib/stripe/plans';
import { checkRateLimit, RATE_LIMITS, rateLimitResponse, getIdentifier } from '@/lib/utils/rate-limit';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2025-02-24.acacia',
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

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        await handleInvoicePaymentFailed(invoice, supabase);
        break;
      }

      default:
        console.log(`⚠️ Event non géré: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('❌ Erreur traitement webhook:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
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
    .select('*')
    .eq('email', customerEmail)
    .single();

  if (fetchError) {
    console.error('❌ Erreur récupération profil:', fetchError);
    return;
  }

  const { error: updateError } = await supabase
    .from('profiles')
    .update({
      stripe_customer_id: customerId,
      stripe_subscription_id: subscriptionId,
      stripe_price_id: priceId,
      subscription_status: subscription.status,
      subscription_start_date: new Date(subscription.current_period_start * 1000).toISOString(),
      subscription_end_date: new Date(subscription.current_period_end * 1000).toISOString(),
      is_premium: true,
      subscription_exams_used: 0, // Reset du compteur pour le nouvel abonnement
    })
    .eq('email', customerEmail);

  if (updateError) {
    console.error('❌ Erreur mise à jour profil:', updateError);
  } else {
    console.log('✅ Profil mis à jour avec succès');
  }
}

// Gérer la mise à jour d'abonnement (renouvellement, changement de plan)
async function handleSubscriptionUpdated(subscription: Stripe.Subscription, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('🔄 Subscription updated:', subscription.id);

  const customerId = subscription.customer as string;
  
  // Vérifier que l'utilisateur existe avant de mettre à jour
  const { data: existingProfile, error: fetchError } = await supabase
    .from('profiles')
    .select('id, email')
    .eq('stripe_customer_id', customerId)
    .single();

  if (fetchError || !existingProfile) {
    console.warn(`⚠️ Profil non trouvé pour customer ${customerId}, tentative via subscription_id`);
    
    // Essayer de trouver par subscription_id
    const { data: profileBySubId, error: subError } = await supabase
      .from('profiles')
      .select('id, email')
      .eq('stripe_subscription_id', subscription.id)
      .single();
    
    if (subError || !profileBySubId) {
      console.error(`❌ Impossible de trouver le profil pour customer ${customerId} ou subscription ${subscription.id}`);
      return; // Ne pas lancer d'erreur, juste ignorer
    }
    
    console.log(`✅ Profil trouvé via subscription_id: ${profileBySubId.email}`);
  }
  
  const priceId = subscription.items.data[0]?.price?.id;
  if (!priceId) {
    console.error('❌ Pas de price_id dans la subscription');
    return;
  }

  // 'trialing' = période d'essai gratuite, doit aussi donner accès premium
  const hasActiveAccess = subscription.status === 'active' || subscription.status === 'trialing';

  const { error } = await supabase
    .from('profiles')
    .update({
      stripe_subscription_id: subscription.id,
      stripe_price_id: priceId,
      subscription_status: subscription.status,
      subscription_start_date: new Date(subscription.current_period_start * 1000).toISOString(),
      subscription_end_date: new Date(subscription.current_period_end * 1000).toISOString(),
      is_premium: hasActiveAccess,
    })
    .eq('stripe_customer_id', customerId);

  if (error) {
    console.error('❌ Erreur mise à jour subscription:', error);
  } else {
    console.log(`✅ Subscription mise à jour - status: ${subscription.status}, is_premium: ${hasActiveAccess}`);
  }
}

// Gérer l'annulation d'abonnement
async function handleSubscriptionDeleted(subscription: Stripe.Subscription, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('🗑️ Subscription deleted:', subscription.id);

  const customerId = subscription.customer as string;

  // Vérifier que l'utilisateur existe
  const { data: existingProfile, error: fetchError } = await supabase
    .from('profiles')
    .select('id, email')
    .eq('stripe_customer_id', customerId)
    .single();

  if (fetchError || !existingProfile) {
    console.warn(`⚠️ Profil non trouvé pour customer ${customerId} lors de la suppression`);
    return;
  }

  const { error } = await supabase
    .from('profiles')
    .update({
      subscription_status: 'canceled',
      is_premium: false,
      stripe_subscription_id: null,
      stripe_price_id: null,
    })
    .eq('stripe_customer_id', customerId);

  if (error) {
    console.error('❌ Erreur annulation subscription:', error);
  } else {
    console.log(`✅ Accès révoqué pour ${existingProfile.email}`);
  }
}

// Gérer le paiement réussi d'une facture (renouvellement)
async function handleInvoicePaid(invoice: Stripe.Invoice, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('💳 Invoice paid:', invoice.id);

  if (!invoice.subscription) return;

  const customerId = invoice.customer as string;

  const { error } = await supabase
    .from('profiles')
    .update({
      subscription_status: 'active',
      is_premium: true,
      subscription_exams_used: 0, // Reset du compteur à chaque renouvellement hebdomadaire
    })
    .eq('stripe_customer_id', customerId);

  if (error) {
    console.error('❌ Erreur après paiement:', error);
  } else {
    console.log('✅ Paiement confirmé');
  }
}

// Gérer l'échec de paiement
async function handleInvoicePaymentFailed(invoice: Stripe.Invoice, supabase: ReturnType<typeof getSupabaseClient>) {
  console.log('❌ Invoice payment failed:', invoice.id);

  if (!invoice.subscription) return;

  const customerId = invoice.customer as string;

  // Vérifier que l'utilisateur existe
  const { data: existingProfile, error: fetchError } = await supabase
    .from('profiles')
    .select('id, email, subscription_status')
    .eq('stripe_customer_id', customerId)
    .single();

  if (fetchError || !existingProfile) {
    console.warn(`⚠️ Profil non trouvé pour customer ${customerId} lors de l'échec de paiement`);
    return;
  }

  // Si l'utilisateur était en trialing et le paiement échoue, révoquer l'accès
  const shouldRevokePremium = existingProfile.subscription_status === 'trialing';

  const { error } = await supabase
    .from('profiles')
    .update({
      subscription_status: 'past_due',
      // Révoquer l'accès si c'était une période d'essai qui se termine
      ...(shouldRevokePremium && { is_premium: false }),
    })
    .eq('stripe_customer_id', customerId);

  if (error) {
    console.error('❌ Erreur marquage paiement échoué:', error);
  } else {
    console.log(`⚠️ Statut mis à jour: past_due pour ${existingProfile.email}${shouldRevokePremium ? ' - Accès révoqué (fin période essai)' : ''}`);
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

    // Vérifier si l'utilisateur a un abonnement actif
    if (profile.subscription_status !== 'active') {
      console.error('❌ Achat Mode sans chrono refusé - Pas d\'abonnement actif');
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

    // Vérifier si l'utilisateur a un abonnement actif
    if (profile.subscription_status !== 'active') {
      console.error('❌ Achat Débloquer niveau refusé - Pas d\'abonnement actif');
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
