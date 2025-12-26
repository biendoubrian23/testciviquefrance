import { NextRequest } from 'next/server';
import crypto from 'crypto';
import { createAdminClient } from '@/lib/supabase/admin';

export interface AdminSession {
  id: string;
  adminId: string;
  username: string;
  expiresAt: Date;
}

/**
 * Vérifie la session admin depuis une API route
 * Retourne null si non authentifié
 */
export async function verifyAdminSession(req: NextRequest): Promise<AdminSession | null> {
  const sessionToken = req.cookies.get('admin_session')?.value;

  if (!sessionToken) {
    return null;
  }

  const supabase = createAdminClient();
  const tokenHash = crypto.createHash('sha256').update(sessionToken).digest('hex');

  const { data: session, error } = await supabase
    .from('admin_sessions')
    .select('id, admin_id, expires_at, admin_users(username)')
    .eq('token_hash', tokenHash)
    .gt('expires_at', new Date().toISOString())
    .single();

  if (error || !session) {
    return null;
  }

  return {
    id: session.id,
    adminId: session.admin_id,
    username: (session.admin_users as any)?.username || '',
    expiresAt: new Date(session.expires_at),
  };
}

/**
 * Helper pour retourner une erreur 401 si non authentifié
 */
export function unauthorizedResponse() {
  return new Response(JSON.stringify({ error: 'Non autorisé' }), {
    status: 401,
    headers: { 'Content-Type': 'application/json' },
  });
}
