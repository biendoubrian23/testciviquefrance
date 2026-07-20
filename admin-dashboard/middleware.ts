import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware d'authentification admin.
 *
 * Point de contrôle UNIQUE : toute requête (page ou /api/*) doit présenter un
 * cookie `admin_session` correspondant à une session non expirée dans la table
 * `admin_sessions`. Sinon → 401 (API) ou redirection /login (page).
 *
 * Runtime edge : on n'utilise PAS le module Node `crypto` ni supabase-js.
 * Le hash SHA-256 passe par Web Crypto, et la vérification par un appel REST
 * Supabase avec la clé service_role (jamais exposée au client).
 *
 * ⚠️ Ce middleware est le premier rempart. Les routes sensibles doublent la
 * vérification via `verifyAdminSession` (défense en profondeur), car un middleware
 * seul peut être contourné sur des versions de Next non patchées (CVE-2025-29927).
 */

// Chemins accessibles sans session (page de login + endpoints d'auth).
const PUBLIC_PATHS = ['/login', '/api/auth/login', '/api/auth/logout', '/api/auth/check'];

async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

async function hasValidSession(token: string): Promise<boolean> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return false;

  try {
    const tokenHash = await sha256Hex(token);
    const nowIso = new Date().toISOString();
    const endpoint =
      `${url}/rest/v1/admin_sessions?select=id` +
      `&token_hash=eq.${tokenHash}` +
      `&expires_at=gt.${encodeURIComponent(nowIso)}` +
      `&limit=1`;

    const res = await fetch(endpoint, {
      headers: { apikey: key, Authorization: `Bearer ${key}` },
      cache: 'no-store',
    });
    if (!res.ok) return false;
    const rows = await res.json();
    return Array.isArray(rows) && rows.length > 0;
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Assets statiques (public/*.ext) → laisser passer (utile pour la page login).
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) {
    return NextResponse.next();
  }

  // Chemins publics.
  if (PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/'))) {
    return NextResponse.next();
  }

  const token = request.cookies.get('admin_session')?.value;
  const isValid = token ? await hasValidSession(token) : false;

  if (!isValid) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    url.search = '';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Tout sauf les internes Next et le favicon (les endpoints /api/auth sont gérés dans le code).
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
