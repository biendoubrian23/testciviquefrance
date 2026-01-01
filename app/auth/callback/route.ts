import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

// Fonction pour ajouter le contact à Brevo
async function addToBrevo(email: string, prenom: string, nom: string, origin: string) {
  try {
    const response = await fetch(`${origin}/api/brevo/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        prenom,
        nom,
      }),
    });

    if (!response.ok) {
      console.error('❌ Erreur Brevo (Google OAuth):', response.status);
    } else {
      console.log('✅ Contact Google ajouté à Brevo:', email);
    }
  } catch (error) {
    console.warn('⚠️ Erreur Brevo (Google OAuth):', error);
  }
}

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
          .select('has_completed_onboarding, prenom, created_at')
          .eq('id', user.id)
          .single();

        // Si pas de profil trouvé, c'est un TOUT NOUVEAU utilisateur -> onboarding
        if (!profile) {
          // Ajouter à Brevo pour les nouveaux utilisateurs Google
          const fullName = user.user_metadata?.full_name || user.user_metadata?.name || '';
          const nameParts = fullName.split(' ');
          const prenom = nameParts[0] || '';
          const nom = nameParts.slice(1).join(' ') || '';
          
          await addToBrevo(user.email || '', prenom, nom, origin);
          
          return NextResponse.redirect(`${origin}/onboarding/profil`);
        }

        // Vérifier si le profil vient d'être créé (moins de 10 secondes) = nouveau compte
        const createdAt = new Date(profile.created_at);
        const now = new Date();
        const secondsSinceCreation = (now.getTime() - createdAt.getTime()) / 1000;
        
        // Nouveau compte Google (créé il y a moins de 10 sec) ET pas encore d'onboarding
        if (secondsSinceCreation < 10 && profile.has_completed_onboarding === false) {
          // Ajouter à Brevo pour les nouveaux utilisateurs Google
          const fullName = user.user_metadata?.full_name || user.user_metadata?.name || '';
          const nameParts = fullName.split(' ');
          const prenom = nameParts[0] || '';
          const nom = nameParts.slice(1).join(' ') || '';
          
          await addToBrevo(user.email || '', prenom, nom, origin);
          
          return NextResponse.redirect(`${origin}/onboarding/profil`);
        }
        
        // Compte existant (créé il y a plus de 10 secondes) -> toujours dashboard
        return NextResponse.redirect(`${origin}/dashboard`);
      }
      
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Rediriger vers une page d'erreur en cas de problème
  return NextResponse.redirect(`${origin}/login?error=auth`);
}
