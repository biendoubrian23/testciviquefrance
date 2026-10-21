import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { STRIPE_PLANS } from '@/lib/stripe/plans';
import { createClient } from '@/lib/supabase/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2024-06-20' as any,
});

export async function POST(req: NextRequest) {
  try {
    const { planKey, userEmail, userId } = await req.json();

    if (!planKey || !userEmail) {
      return NextResponse.json(
        {
          success: false,
          error: 'Paramètres manquants'
        },
        { status: 400 }
      );
    }

    // Vérifier que la clé Stripe est configurée
    if (!process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET_KEY === 'sk_test_placeholder') {
      return NextResponse.json(
        {
          success: false,
          error: 'Configuration du service de paiement incomplète. Veuillez contacter le support.'
        },
        { status: 500 }
      );
    }

    // Vérifier que la clé webhook est configurée
    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      console.error('❌ STRIPE_WEBHOOK_SECRET non configuré');
      return NextResponse.json(
        {
          success: false,
          error: 'La configuration des paiements n\'est pas complète. Les paiements ne pourront pas être traités automatiquement. Veuillez contacter le support.'
        },
        { status: 500 }
      );
    }

    // Récupérer le plan demandé
    const plan = STRIPE_PLANS[planKey as keyof typeof STRIPE_PLANS];

    if (!plan) {
      return NextResponse.json(
        {
          success: false,
          error: 'Produit non trouvé'
        },
        { status: 404 }
      );
    }

    // Un abonné actif qui repaie un Payment Link d'abonnement crée un second
    // client et un second abonnement, facturés tous les deux chaque semaine.
    // Le changement de formule passe par le portail Stripe, pas par un nouvel achat.
    if (plan.interval !== 'one_time') {
      const supabase = await createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('subscription_status, stripe_subscription_id')
          .eq('id', user.id)
          .single();
        if (profile?.stripe_subscription_id && ['active', 'trialing', 'past_due'].includes(profile.subscription_status || '')) {
          return NextResponse.json(
            {
              success: false,
              error: 'Vous avez déjà un abonnement actif. Pour changer de formule, passez par « Gérer mon abonnement ».'
            },
            { status: 409 }
          );
        }
      }
    }

    // Test de connexion Stripe : vérifier que le price_id existe
    try {
      await stripe.prices.retrieve(plan.priceId);
    } catch (stripeError: any) {
      console.error('❌ Erreur connexion Stripe:', stripeError.message);

      return NextResponse.json(
        {
          success: false,
          error: 'Le service de paiement est temporairement indisponible. Veuillez réessayer dans quelques instants.'
        },
        { status: 503 }
      );
    }

    // ✅ Stripe est accessible, retourner l'URL de paiement avec client_reference_id
    let checkoutUrl = `${plan.paymentLink}?prefilled_email=${encodeURIComponent(userEmail)}`;
    if (userId) {
      checkoutUrl += `&client_reference_id=${userId}`;
    }

    return NextResponse.json({
      success: true,
      checkoutUrl,
    });

  } catch (error: any) {
    console.error('❌ Erreur vérification Stripe:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Une erreur inattendue est survenue. Veuillez réessayer.'
      },
      { status: 500 }
    );
  }
}
