import { updateSession } from '@/lib/supabase/middleware';
import { type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Exécuter le middleware UNIQUEMENT sur les routes qui ont besoin
     * de vérification d'auth. Les pages publiques (articles, cours, landing…)
     * sont exclues pour éviter l'appel Supabase inutile sur chaque requête.
     */
    '/dashboard/:path*',
    '/onboarding/:path*',
    '/login',
    '/signup',
  ],
};
