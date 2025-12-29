'use client';

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';

// ⏱️ TIMEOUT pour ne jamais bloquer indéfiniment
const AUTH_TIMEOUT_MS = 5000; // 5 secondes max

type Profile = {
  id: string;
  email: string;
  prenom: string | null;
  nom: string | null;
  avatar_url: string | null;
  credits: number;
  is_premium: boolean;
  premium_expires_at: string | null;
  // Champs Stripe
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  stripe_price_id: string | null;
  subscription_status: string | null;
  subscription_start_date: string | null;
  subscription_end_date: string | null;
  // Pack Examen
  exam_credits: number | null;
  subscription_exams_used: number | null;
  last_purchase_at: string | null;
  // Flashcards
  flashcards_2_themes?: boolean;
  flashcards_5_themes?: boolean;
  flashcards_purchased_at?: string;
};

type AuthContextType = {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  isLoading: boolean;
  authError: string | null; // Nouveau: pour afficher les erreurs
  signUp: (email: string, password: string, prenom: string, nom: string, acceptMarketing?: boolean) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signInWithGoogle: () => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  retryAuth: () => Promise<void>; // Nouveau: pour réessayer manuellement
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Client Supabase singleton
const supabase = createClient();

// Helper: Promise avec timeout
function withTimeout<T>(promise: Promise<T>, ms: number, fallback: T): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((resolve) => setTimeout(() => resolve(fallback), ms))
  ]);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  // Fonction pour récupérer le profil (avec timeout)
  const fetchProfile = useCallback(async (userId: string): Promise<Profile | null> => {
    try {
      const profilePromise = supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      const result = await withTimeout(
        profilePromise,
        3000, // 3 sec max pour le profil
        { data: null, error: { message: 'Timeout profil' } }
      );

      if (result.error || !result.data) {
        console.warn('Profil non chargé:', result.error?.message);
        return null;
      }
      return result.data as Profile;
    } catch (err) {
      console.warn('Exception profil:', err);
      return null;
    }
  }, []);

  const refreshProfile = useCallback(async () => {
    if (user) {
      const profileData = await fetchProfile(user.id);
      setProfile(profileData);
    }
  }, [user, fetchProfile]);

  // Fonction d'initialisation auth (réutilisable pour retry)
  const initAuth = useCallback(async () => {
    setIsLoading(true);
    setAuthError(null);

    try {
      // Récupérer la session avec TIMEOUT
      // On utilise getUser() pour vérifier que l'utilisateur existe toujours côté serveur
      // (cas où la DB a été formatée mais le token local est encore valide)
      const sessionResult = await Promise.race([
        supabase.auth.getUser(),
        new Promise<{ data: { user: User | null }, error: any }>((resolve) =>
          setTimeout(() => resolve({ data: { user: null }, error: { message: 'Timeout' } }), AUTH_TIMEOUT_MS)
        )
      ]);

      const currentUser = sessionResult.data?.user;

      if (currentUser) {
        // Si l'utilisateur existe, on récupère la session complète
        const { data: { session } } = await supabase.auth.getSession();
        setSession(session);
        setUser(currentUser);
        // Charger le profil en arrière-plan (NE PAS BLOQUER)
        fetchProfile(currentUser.id).then(profileData => {
          setProfile(profileData);
        });
      } else {
        // Pas d'utilisateur valide côté serveur
        // On nettoie tout pour éviter les états incohérents
        await supabase.auth.signOut();
        setSession(null);
        setUser(null);
        setProfile(null);
      }
    } catch (err) {
      console.error('Erreur initAuth:', err);
      setAuthError('Connexion au serveur difficile. Veuillez réessayer.');
      // En cas d'erreur, on continue quand même (mode dégradé)
      setSession(null);
      setUser(null);
      setProfile(null);
    } finally {
      // TOUJOURS terminer le chargement, même en cas d'erreur
      setIsLoading(false);
    }
  }, [fetchProfile]);

  // Fonction retry exposée à l'utilisateur
  const retryAuth = useCallback(async () => {
    await initAuth();
  }, [initAuth]);

  useEffect(() => {
    let mounted = true;

    // Lancer l'init
    initAuth();

    // Écouter les changements d'auth (ne bloque pas)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: string, newSession: Session | null) => {
        if (!mounted) return;

        console.log('Auth event:', event);
        setAuthError(null); // Reset erreur sur nouvel event

        if (newSession?.user) {
          setSession(newSession);
          setUser(newSession.user);
          // Profil en arrière-plan
          fetchProfile(newSession.user.id).then(profileData => {
            if (mounted) setProfile(profileData);
          });
        } else {
          setSession(null);
          setUser(null);
          setProfile(null);
        }

        // Si on reçoit un event, le loading est fini
        setIsLoading(false);
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [initAuth, fetchProfile]);

  const signUp = useCallback(async (email: string, password: string, prenom: string, nom: string, acceptMarketing: boolean = false) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          prenom,
          nom,
        },
      },
    });

    // Si l'inscription est réussie, ajouter le contact à Brevo
    if (!error) {
      try {
        const response = await fetch('/api/brevo/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            prenom,
            nom,
            acceptMarketing,
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('❌ Erreur Brevo (API):', response.status, errorText);
        } else {
          console.log('✅ Contact ajouté à la liste Brevo avec succès');
        }

      } catch (brevoError) {
        // Ne pas bloquer l'inscription si Brevo échoue
        console.warn('⚠️ Erreur Brevo (Réseau/Client):', brevoError);
      }
    }

    return { error: error as Error | null };
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return { error: error as Error | null };
  }, []);

  const signInWithGoogle = useCallback(async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    return { error: error as Error | null };
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
    setSession(null);
    // Rediriger vers la page d'accueil après déconnexion
    window.location.href = '/';
  }, []);

  const value = useMemo(() => ({
    user,
    profile,
    session,
    isLoading,
    authError,
    signUp,
    signIn,
    signInWithGoogle,
    signOut,
    refreshProfile,
    retryAuth,
  }), [user, profile, session, isLoading, authError, signUp, signIn, signInWithGoogle, signOut, refreshProfile, retryAuth]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth doit être utilisé dans un AuthProvider');
  }
  return context;
}
