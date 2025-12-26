import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { createAdminClient } from '@/lib/supabase/admin';

export async function GET(req: NextRequest) {
  const sessionToken = req.cookies.get('admin_session')?.value;

  if (!sessionToken) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const supabase = createAdminClient();
  const tokenHash = crypto.createHash('sha256').update(sessionToken).digest('hex');

  // Vérifier la session en base
  const { data: session, error } = await supabase
    .from('admin_sessions')
    .select('*, admin_users(username)')
    .eq('token_hash', tokenHash)
    .gt('expires_at', new Date().toISOString())
    .single();

  if (error || !session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({
    authenticated: true,
    username: (session.admin_users as any)?.username,
  });
}
