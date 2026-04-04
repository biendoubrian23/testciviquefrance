import { updateSession } from '@/lib/supabase/middleware';
import { type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match toutes les routes sauf:
     * - _next/static (fichiers statiques)
     * - _next/image (optimisation d'images)
     * - favicon.ico (favicon)
     * - fichiers statiques publics (images, txt, xml, json, js, css...)
     *   ads.txt, robots.txt, sitemap.xml, manifest.json, sw.js etc.
     *   doivent être servis SANS passer par Supabase
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|json|js|css|woff|woff2|ttf|eot)$).*)',
  ],
};
