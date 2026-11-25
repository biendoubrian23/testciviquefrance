import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { STRIPE_PLANS, lienPaiement, type PlanType } from '@/lib/stripe/plans';
import { createClient } from '@/lib/supabase/server';
import { abonnementsDuCompte, niveauDuPrix, refusAchat } from '@/lib/stripe/abonnements';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
  apiVersion: '2024-06-20' as any,
});

export async function POST(req: NextRequest) {
  try {
    const { planKey, userEmail } = await req.json();

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

    // Le compte vient de la session, pas du corps de la requête : c'est lui qui
    // relie le paiement au profil (client_reference_id).
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: 'Vous devez être connecté pour effectuer un achat.'
        },
        { status: 401 }
      );
    }

    // Règles d'abonnement (lib/stripe/abonnements.ts) : pas deux fois la même
    // formule, pas de Standard pendant un Premium. Lues chez Stripe, sur tous
    // les clients du compte, et non dans le profil, qui peut être en retard.
    const niveau = niveauDuPrix(plan.priceId);
    if (niveau) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('stripe_customer_id')
        .eq('id', user.id)
        .single();
      const abonnements = await abonnementsDuCompte(stripe, {
        customerIds: [profile?.stripe_customer_id],
        emails: [user.email, userEmail],
      });
      const refus = refusAchat(niveau, abonnements);
      if (refus) {
        return NextResponse.json({ success: false, error: refus }, { status: 409 });
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
    const checkoutUrl = lienPaiement(planKey as PlanType, userEmail, user.id);

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
