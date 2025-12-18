import { createAdminClient } from '@/lib/supabase/admin';

export async function getRealtimeActivity() {
  const supabase = createAdminClient();
  
  const now = new Date();
  const last24h = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const lastHour = new Date(now.getTime() - 60 * 60 * 1000);
  const last15min = new Date(now.getTime() - 15 * 60 * 1000);

  const [
    { count: usersLast24h },
    { count: usersLastHour },
    { count: sessionsLast24h },
    { count: sessionsLastHour },
    { count: examensLast24h },
    { count: examensLastHour },
    { count: achatsLast24h },
    { data: recentSessions },
    { data: recentExamens },
    { data: recentSignups },
  ] = await Promise.all([
    supabase.from('statistiques').select('*', { count: 'exact', head: true })
      .gte('derniere_activite', last24h.toISOString()),
    supabase.from('statistiques').select('*', { count: 'exact', head: true })
      .gte('derniere_activite', lastHour.toISOString()),
    supabase.from('sessions_quiz').select('*', { count: 'exact', head: true })
      .gte('started_at', last24h.toISOString()),
    supabase.from('sessions_quiz').select('*', { count: 'exact', head: true })
      .gte('started_at', lastHour.toISOString()),
    supabase.from('examens_blancs').select('*', { count: 'exact', head: true })
      .gte('started_at', last24h.toISOString()),
    supabase.from('examens_blancs').select('*', { count: 'exact', head: true })
      .gte('started_at', lastHour.toISOString()),
    supabase.from('achats').select('*', { count: 'exact', head: true })
      .gte('created_at', last24h.toISOString()),
    // Sessions recentes
    supabase.from('sessions_quiz').select('*')
      .gte('started_at', last15min.toISOString())
      .order('started_at', { ascending: false })
      .limit(10),
    // Examens recents
    supabase.from('examens_blancs').select('*')
      .gte('started_at', last15min.toISOString())
      .order('started_at', { ascending: false })
      .limit(10),
    // Inscriptions recentes
    supabase.from('profiles').select('id, email, prenom, created_at')
      .gte('created_at', last24h.toISOString())
      .order('created_at', { ascending: false })
      .limit(10),
  ]);

  return {
    stats: {
      usersLast24h: usersLast24h || 0,
      usersLastHour: usersLastHour || 0,
      sessionsLast24h: sessionsLast24h || 0,
      sessionsLastHour: sessionsLastHour || 0,
      examensLast24h: examensLast24h || 0,
      examensLastHour: examensLastHour || 0,
      achatsLast24h: achatsLast24h || 0,
    },
    recentSessions: recentSessions || [],
    recentExamens: recentExamens || [],
    recentSignups: recentSignups || [],
  };
}

export async function getHourlyActivity() {
  const supabase = createAdminClient();
  const data = [];

  for (let i = 23; i >= 0; i--) {
    const hourStart = new Date();
    hourStart.setHours(hourStart.getHours() - i, 0, 0, 0);
    const hourEnd = new Date(hourStart);
    hourEnd.setHours(hourEnd.getHours() + 1);

    const [
      { count: sessions },
      { count: examens },
    ] = await Promise.all([
      supabase.from('sessions_quiz').select('*', { count: 'exact', head: true })
        .gte('started_at', hourStart.toISOString())
        .lt('started_at', hourEnd.toISOString()),
      supabase.from('examens_blancs').select('*', { count: 'exact', head: true })
        .gte('started_at', hourStart.toISOString())
        .lt('started_at', hourEnd.toISOString()),
    ]);

    data.push({
      hour: hourStart.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      sessions: sessions || 0,
      examens: examens || 0,
    });
  }

  return data;
}
