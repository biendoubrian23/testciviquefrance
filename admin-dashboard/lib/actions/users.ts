import { createAdminClient } from '@/lib/supabase/admin';
import { Profile, UserWithStats } from '@/types';

export async function getAllUsers(
  page: number = 1, 
  limit: number = 20,
  search?: string,
  filter?: 'all' | 'premium' | 'free'
): Promise<{ users: Profile[]; total: number }> {
  const supabase = createAdminClient();
  const offset = (page - 1) * limit;

  let query = supabase
    .from('profiles')
    .select('*', { count: 'exact' });

  if (search) {
    query = query.or(`email.ilike.%${search}%,prenom.ilike.%${search}%,nom.ilike.%${search}%`);
  }

  if (filter === 'premium') {
    query = query.eq('is_premium', true);
  } else if (filter === 'free') {
    query = query.eq('is_premium', false);
  }

  const { data, count } = await query
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  return {
    users: data || [],
    total: count || 0,
  };
}

export async function getUserDetails(userId: string): Promise<UserWithStats | null> {
  const supabase = createAdminClient();

  const [
    { data: profile },
    { data: stats },
    { data: gamification },
    { count: achatsCount },
    { count: examensCount },
  ] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', userId).single(),
    supabase.from('statistiques').select('*').eq('user_id', userId).single(),
    supabase.from('gamification').select('*').eq('user_id', userId).single(),
    supabase.from('achats').select('*', { count: 'exact', head: true }).eq('user_id', userId).eq('status', 'completed'),
    supabase.from('examens_blancs').select('*', { count: 'exact', head: true }).eq('user_id', userId).eq('is_completed', true),
  ]);

  if (!profile) return null;

  return {
    ...profile,
    statistiques: stats || undefined,
    gamification: gamification || undefined,
    achats_count: achatsCount || 0,
    examens_count: examensCount || 0,
  };
}

export async function getPremiumUsers(): Promise<Profile[]> {
  const supabase = createAdminClient();

  const { data } = await supabase
    .from('profiles')
    .select('*')
    .eq('is_premium', true)
    .order('premium_expires_at', { ascending: true });

  return data || [];
}

export async function getUsersWithProgression() {
  const supabase = createAdminClient();

  const { data: users } = await supabase
    .from('profiles')
    .select('id, email, prenom, nom, created_at')
    .order('created_at', { ascending: false })
    .limit(100);

  if (!users) return [];

  const result = [];
  for (const user of users) {
    const [
      { data: stats },
      { count: sessionsCount },
      { data: progression },
    ] = await Promise.all([
      supabase.from('statistiques').select('total_questions_repondues, total_bonnes_reponses').eq('user_id', user.id).single(),
      supabase.from('sessions_quiz').select('*', { count: 'exact', head: true }).eq('user_id', user.id).eq('completed', true),
      supabase.from('progression_niveaux').select('niveau, is_completed').eq('user_id', user.id),
    ]);

    const tauxReussite = stats && stats.total_questions_repondues > 0
      ? Math.round((stats.total_bonnes_reponses / stats.total_questions_repondues) * 100)
      : 0;

    const niveauxCompletes = progression?.filter(p => p.is_completed).length || 0;
    const niveauMax = progression?.reduce((max, p) => Math.max(max, p.niveau), 0) || 0;

    result.push({
      ...user,
      questionsRepondues: stats?.total_questions_repondues || 0,
      tauxReussite,
      sessionsCount: sessionsCount || 0,
      niveauxCompletes,
      niveauMax,
    });
  }

  return result;
}

export async function getUserActivityStats() {
  const supabase = createAdminClient();
  
  const now = new Date();
  const last24h = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const last7d = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const last30d = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  const [
    { count: active24h },
    { count: active7d },
    { count: active30d },
  ] = await Promise.all([
    supabase.from('statistiques').select('*', { count: 'exact', head: true })
      .gte('derniere_activite', last24h.toISOString()),
    supabase.from('statistiques').select('*', { count: 'exact', head: true })
      .gte('derniere_activite', last7d.toISOString()),
    supabase.from('statistiques').select('*', { count: 'exact', head: true })
      .gte('derniere_activite', last30d.toISOString()),
  ]);

  return {
    active24h: active24h || 0,
    active7d: active7d || 0,
    active30d: active30d || 0,
  };
}
