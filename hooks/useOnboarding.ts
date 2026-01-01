'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useSupabase } from './useSupabase';

/**
 * Hook pour vérifier et gérer l'onboarding utilisateur
 * Utilisé côté client pour éviter de surcharger le middleware
 */
export function useOnboarding(redirectIfNotComplete = true) {
  const { user, isLoading: authLoading } = useAuth();
  const supabase = useSupabase();
  const router = useRouter();
  
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkOnboarding = async () => {
      // Attendre que l'auth soit prête
      if (authLoading || !user) {
        setIsChecking(false);
        return;
      }

      try {
        // Vérification rapide avec timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        const { data: profile, error } = await supabase
          .from('profiles')
          .select('has_completed_onboarding')
          .eq('id', user.id)
          .single();

        clearTimeout(timeoutId);

        if (error) {
          console.warn('Erreur vérification onboarding:', error.message);
          // En cas d'erreur, on considère l'onboarding comme fait (mode dégradé)
          setHasCompletedOnboarding(true);
        } else {
          setHasCompletedOnboarding(profile?.has_completed_onboarding ?? false);
          
          // Redirection si demandée et onboarding non complété
          if (redirectIfNotComplete && !profile?.has_completed_onboarding) {
            router.push('/onboarding/profil');
          }
        }
      } catch (err) {
        console.warn('Exception onboarding:', err);
        // Mode dégradé : on laisse passer
        setHasCompletedOnboarding(true);
      } finally {
        setIsChecking(false);
      }
    };

    checkOnboarding();
  }, [user, authLoading, supabase, router, redirectIfNotComplete]);

  return {
    hasCompletedOnboarding,
    isChecking: authLoading || isChecking,
  };
}
