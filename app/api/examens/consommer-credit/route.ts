import { NextResponse } from 'next/server';
import { createClient as createAdminClient } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/server';
import { ALL_STANDARD_PRICE_IDS, ALL_PREMIUM_PRICE_IDS } from '@/lib/stripe/plans';

/**
 * Débite un crédit d'examen blanc pour l'utilisateur connecté.
 *
 * Depuis le durcissement du 20/07 (trigger `protect_profile_entitlements`),
 * un utilisateur ne peut plus modifier `exam_credits` ni
 * `subscription_exams_used` depuis le navigateur : le débit fait côté client
 * échouait en 42501 et plus aucun examen blanc ne démarrait. Le débit passe
 * donc ici, avec la clé service, pour l'utilisateur de la session uniquement.
 *
 * Chaque écriture est conditionnée à l'ancienne valeur : deux clics
 * simultanés ne peuvent pas consommer un seul crédit deux fois.
 */
export async function POST() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ success: false, error: 'Non authentifié' }, { status: 401 });
  }

  const admin = createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );

  const { data: profile, error } = await admin
    .from('profiles')
    .select('exam_credits, subscription_exams_used, stripe_price_id, subscription_status')
    .eq('id', user.id)
    .single();

  if (error || !profile) {
    return NextResponse.json({ success: false, error: 'Profil introuvable' }, { status: 404 });
  }

  // Priorité 1 : les crédits Pack Examen achetés à l'unité.
  const credits = profile.exam_credits || 0;
  if (credits > 0) {
    const { data } = await admin
      .from('profiles')
      .update({ exam_credits: credits - 1 })
      .eq('id', user.id)
      .eq('exam_credits', credits)
      .select('id');
    if (data && data.length === 1) return NextResponse.json({ success: true, source: 'pack' });
    return NextResponse.json({ success: false, error: 'Conflit, réessayez' }, { status: 409 });
  }

  // Priorité 2 : les examens inclus dans l'abonnement (essai compris).
  if (profile.subscription_status === 'active' || profile.subscription_status === 'trialing') {
    const limite = ALL_PREMIUM_PRICE_IDS.includes(profile.stripe_price_id) ? 3
      : ALL_STANDARD_PRICE_IDS.includes(profile.stripe_price_id) ? 1 : 0;
    const utilises = profile.subscription_exams_used || 0;
    if (utilises < limite) {
      let requete = admin
        .from('profiles')
        .update({ subscription_exams_used: utilises + 1 })
        .eq('id', user.id);
      requete = profile.subscription_exams_used === null
        ? requete.is('subscription_exams_used', null)
        : requete.eq('subscription_exams_used', utilises);
      const { data } = await requete.select('id');
      if (data && data.length === 1) return NextResponse.json({ success: true, source: 'abonnement' });
      return NextResponse.json({ success: false, error: 'Conflit, réessayez' }, { status: 409 });
    }
  }

  return NextResponse.json({ success: false, error: 'Aucun crédit disponible' }, { status: 402 });
}
