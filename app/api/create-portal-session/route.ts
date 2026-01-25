import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@/lib/supabase/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20' as any,
});

export async function POST(req: NextRequest) {
  try {
    // 🔒 SÉCURITÉ : Récupérer l'utilisateur depuis la session (pas depuis le client)
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      );
    }

    // 🔒 SÉCURITÉ : Charger le stripe_customer_id depuis la base (pas depuis le client)
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single();

    if (profileError || !profile?.stripe_customer_id) {
      return NextResponse.json(
        { error: 'Aucun abonnement Stripe trouvé' },
        { status: 404 }
      );
    }

    // Créer une session du portail client
    const session = await stripe.billingPortal.sessions.create({
      customer: profile.stripe_customer_id,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/credits`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Erreur création portail:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
