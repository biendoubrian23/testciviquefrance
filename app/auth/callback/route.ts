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
      
      // Vérifier si l'utilisateur a complété l'onboarding
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('has_completed_onboarding')
          .eq('id', user.id)
          .single();

        // Si l'utilisateur n'a pas complété l'onboarding, le rediriger vers le quiz
        if (!profile?.has_completed_onboarding) {
          return NextResponse.redirect(`${origin}/onboarding/quiz`);
        }
      }
      
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Rediriger vers une page d'erreur en cas de problème
  return NextResponse.redirect(`${origin}/login?error=auth`);
}
