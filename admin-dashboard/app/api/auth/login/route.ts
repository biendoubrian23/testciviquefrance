import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { createAdminClient } from '@/lib/supabase/admin';

// Configuration sécurité
const MAX_ATTEMPTS = 5;           // Tentatives avant verrouillage
const LOCK_DURATION_MIN = 15;     // Durée verrouillage en minutes
const SESSION_DURATION_HOURS = 24; // Durée session
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const RATE_LIMIT_MAX = 5;          // 5 essais par minute par IP

// Rate limiting simple en mémoire
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  
  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  
  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }
  
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const supabase = createAdminClient();
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  const userAgent = req.headers.get('user-agent') || '';
  
  try {
    // 🛡️ Rate limiting par IP
    if (!checkRateLimit(ip)) {
      await logAttempt(supabase, '', ip, userAgent, false, 'rate_limited');
      return NextResponse.json(
        { error: 'Trop de tentatives. Réessayez dans 1 minute.' },
        { status: 429 }
      );
    }

    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Identifiants requis' },
        { status: 400 }
      );
    }

    // 🔍 Chercher l'utilisateur
    const { data: admin, error: findError } = await supabase
      .from('admin_users')
      .select('*')
      .eq('username', username)
      .single();

    if (findError || !admin) {
      await logAttempt(supabase, username, ip, userAgent, false, 'user_not_found');
      // Message générique pour ne pas révéler si le user existe
      return NextResponse.json(
        { error: 'Identifiants incorrects' },
        { status: 401 }
      );
    }

    // 🔒 Vérifier si compte verrouillé
    if (admin.locked_until && new Date(admin.locked_until) > new Date()) {
      const remainingMin = Math.ceil((new Date(admin.locked_until).getTime() - Date.now()) / 60000);
      await logAttempt(supabase, username, ip, userAgent, false, 'account_locked');
      return NextResponse.json(
        { error: `Compte verrouillé. Réessayez dans ${remainingMin} minute(s).` },
        { status: 403 }
      );
    }

    // 🔐 Vérifier le mot de passe
    const isValidPassword = await bcrypt.compare(password, admin.password_hash);

    if (!isValidPassword) {
      const newAttempts = (admin.failed_attempts || 0) + 1;
      const shouldLock = newAttempts >= MAX_ATTEMPTS;
      
      await supabase
        .from('admin_users')
        .update({
          failed_attempts: newAttempts,
          last_failed_at: new Date().toISOString(),
          locked_until: shouldLock 
            ? new Date(Date.now() + LOCK_DURATION_MIN * 60000).toISOString() 
            : null,
        })
        .eq('id', admin.id);

      await logAttempt(supabase, username, ip, userAgent, false, 'invalid_password');

      if (shouldLock) {
        return NextResponse.json(
          { error: `Compte verrouillé pour ${LOCK_DURATION_MIN} minutes après ${MAX_ATTEMPTS} échecs.` },
          { status: 403 }
        );
      }

      return NextResponse.json(
        { error: `Identifiants incorrects. ${MAX_ATTEMPTS - newAttempts} essai(s) restant(s).` },
        { status: 401 }
      );
    }

    // ✅ Connexion réussie !
    
    // Réinitialiser les compteurs d'échec
    await supabase
      .from('admin_users')
      .update({
        failed_attempts: 0,
        locked_until: null,
        last_failed_at: null,
        last_login_at: new Date().toISOString(),
        last_login_ip: ip,
      })
      .eq('id', admin.id);

    // Créer un token de session sécurisé
    const sessionToken = crypto.randomBytes(32).toString('hex');
    const tokenHash = crypto.createHash('sha256').update(sessionToken).digest('hex');
    const expiresAt = new Date(Date.now() + SESSION_DURATION_HOURS * 60 * 60 * 1000);

    // Sauvegarder la session
    await supabase
      .from('admin_sessions')
      .insert({
        admin_id: admin.id,
        token_hash: tokenHash,
        ip_address: ip,
        user_agent: userAgent,
        expires_at: expiresAt.toISOString(),
      });

    await logAttempt(supabase, username, ip, userAgent, true, null);

    // Créer la réponse avec cookie sécurisé
    const response = NextResponse.json({ success: true });
    
    response.cookies.set('admin_session', sessionToken, {
      httpOnly: true,      // Inaccessible au JavaScript
      secure: process.env.NODE_ENV === 'production', // HTTPS uniquement en prod
      sameSite: 'strict',  // Protection CSRF
      path: '/',
      expires: expiresAt,
    });

    return response;

  } catch (error: any) {
    console.error('Erreur login admin:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

// Fonction utilitaire pour logger les tentatives
async function logAttempt(
  supabase: ReturnType<typeof createAdminClient>,
  username: string,
  ip: string,
  userAgent: string,
  success: boolean,
  failureReason: string | null
) {
  try {
    await supabase.from('admin_login_attempts').insert({
      username: username || 'unknown',
      ip_address: ip,
      user_agent: userAgent,
      success,
      failure_reason: failureReason,
    });
  } catch (e) {
    console.error('Erreur log tentative:', e);
  }
}
