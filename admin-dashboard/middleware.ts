import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import crypto from 'crypto';

// Routes publiques (pas besoin d'auth)
const PUBLIC_ROUTES = ['/login', '/api/auth/login'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Autoriser les routes publiques
  if (PUBLIC_ROUTES.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Autoriser les fichiers statiques
  if (pathname.startsWith('/_next') || pathname.startsWith('/favicon') || pathname.includes('.')) {
    return NextResponse.next();
  }

  // Vérifier le cookie de session
  const sessionToken = request.cookies.get('admin_session')?.value;

  if (!sessionToken) {
    // Pas de session → redirection login
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Note: La vérification complète en BDD est faite dans les API routes
  // Le middleware fait juste une vérification rapide de présence du cookie
  // Pour une sécurité maximale, chaque API route vérifie aussi la session

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match toutes les routes sauf:
     * - api/auth/* (routes d'authentification)
     * - _next/static (fichiers statiques)
     * - _next/image (optimisation images)
     * - favicon.ico
     */
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
};
