'use client';

import { useMemo } from 'react';
import { createClient } from '@/lib/supabase/client';

/**
 * Hook pour obtenir le client Supabase de manière stable.
 * Le client est un singleton, donc il n'est créé qu'une seule fois.
 * Ce hook garantit une référence stable pour éviter les re-renders inutiles.
 */
export function useSupabase() {
  const supabase = useMemo(() => createClient(), []);
  return supabase;
}

export default useSupabase;
