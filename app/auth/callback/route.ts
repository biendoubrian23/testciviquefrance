import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/dashboard';

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (!error) {
      // Si c'est une réinitialisation de mot de passe, rediriger directement
      if (next.includes('reinitialiser-mot-de-passe')) {
        return NextResponse.redirect(`${origin}${next}`);
      }
      
      // Récupérer l'utilisateur
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        // Attendre un peu pour laisser le trigger créer le profil si nécessaire
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const { data: profile } = await supabase
          .from('profiles')
          .select('has_completed_onboarding')
          .eq('id', user.id)
          .single();

        // Si pas de profil trouvé, c'est un TOUT NOUVEAU utilisateur -> onboarding
        if (!profile) {
          return NextResponse.redirect(`${origin}/onboarding/quiz`);
        }

        // Si l'utilisateur n'a JAMAIS fait l'onboarding (première connexion), le rediriger vers le quiz
        // Sinon, toujours aller au dashboard (même si onboarding non terminé)
        if (profile.has_completed_onboarding === false) {
          // Vérifier si c'est vraiment la première connexion (pas de résultats stockés)
          // Pour simplifier : on redirige vers le dashboard de toute façon
          // L'utilisateur peut recommencer l'onboarding s'il veut via le menu
        }
        
        // Toujours rediriger vers le dashboard pour les utilisateurs existants
        return NextResponse.redirect(`${origin}/dashboard`);
      }
      
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Rediriger vers une page d'erreur en cas de problème
  return NextResponse.redirect(`${origin}/login?error=auth`);
}
