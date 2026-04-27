import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// AUTH TEMPORAIREMENT DÉSACTIVÉE
export async function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
  ],
};

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
