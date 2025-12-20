import { createAdminClient } from '@/lib/supabase/admin';

export type PeriodType = '15min' | '1h' | '1d' | '1w' | '1m' | '1y' | 'lifetime';

// Fonction utilitaire pour calculer la date de début selon la période
function getStartDateFromPeriod(period: PeriodType): Date | null {
  const now = new Date();
  
  switch (period) {
    case '15min':
      return new Date(now.getTime() - 15 * 60 * 1000);
    case '1h':
      return new Date(now.getTime() - 60 * 60 * 1000);
    case '1d':
      return new Date(now.getTime() - 24 * 60 * 60 * 1000);
    case '1w':
      return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    case '1m':
      return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    case '1y':
      return new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
    case 'lifetime':
      return null; // Pas de limite
    default:
      return new Date(now.getTime() - 24 * 60 * 60 * 1000);
  }
}

// Récupérer les statistiques avec période configurable
export async function getActivityStats(period: PeriodType = '1d') {
  const supabase = createAdminClient();
  const startDate = getStartDateFromPeriod(period);

  const baseQuery = startDate ? { gte: startDate.toISOString() } : {};

  const queries = [
    // Utilisateurs actifs
    startDate 
      ? supabase.from('statistiques').select('*', { count: 'exact', head: true })
          .gte('derniere_activite', startDate.toISOString())
      : supabase.from('statistiques').select('*', { count: 'exact', head: true }),
    // Sessions de quiz
    startDate
      ? supabase.from('sessions_quiz').select('*', { count: 'exact', head: true })
          .gte('started_at', startDate.toISOString())
      : supabase.from('sessions_quiz').select('*', { count: 'exact', head: true }),
    // Examens blancs
    startDate
      ? supabase.from('examens_blancs').select('*', { count: 'exact', head: true })
          .gte('started_at', startDate.toISOString())
      : supabase.from('examens_blancs').select('*', { count: 'exact', head: true }),
    // Achats
    startDate
      ? supabase.from('achats').select('*', { count: 'exact', head: true })
          .gte('created_at', startDate.toISOString())
      : supabase.from('achats').select('*', { count: 'exact', head: true }),
  ];

  const [
    { count: users },
    { count: sessions },
    { count: examens },
    { count: achats },
  ] = await Promise.all(queries);

  return {
    users: users || 0,
    sessions: sessions || 0,
    examens: examens || 0,
    achats: achats || 0,
  };
}

// Récupérer les sessions récentes avec période configurable
export async function getRecentSessions(period: PeriodType = '15min', limit: number = 10) {
  const supabase = createAdminClient();
  const startDate = getStartDateFromPeriod(period);

  let query = supabase.from('sessions_quiz').select('*')
    .order('started_at', { ascending: false })
    .limit(limit);

  if (startDate) {
    query = query.gte('started_at', startDate.toISOString());
  }

  const { data } = await query;
  return data || [];
}

// Récupérer les examens récents avec période configurable
export async function getRecentExamens(period: PeriodType = '15min', limit: number = 10) {
  const supabase = createAdminClient();
  const startDate = getStartDateFromPeriod(period);

  let query = supabase.from('examens_blancs').select('*')
    .order('started_at', { ascending: false })
    .limit(limit);

  if (startDate) {
    query = query.gte('started_at', startDate.toISOString());
  }

  const { data } = await query;
  return data || [];
}

// Récupérer les inscriptions récentes avec période configurable
export async function getRecentSignups(period: PeriodType = '1d', limit: number = 10) {
  const supabase = createAdminClient();
  const startDate = getStartDateFromPeriod(period);

  let query = supabase.from('profiles').select('id, email, prenom, created_at')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (startDate) {
    query = query.gte('created_at', startDate.toISOString());
  }

  const { data } = await query;
  return data || [];
}

// Récupérer l'activité horaire avec période configurable
export async function getHourlyActivity(period: PeriodType = '1d') {
  const supabase = createAdminClient();
  const data = [];

  // Déterminer le nombre d'heures à afficher selon la période
  let hoursToShow = 24;
  switch (period) {
    case '15min':
    case '1h':
      hoursToShow = 1;
      break;
    case '1d':
      hoursToShow = 24;
      break;
    case '1w':
      hoursToShow = 24 * 7; // On montre par jour pour 1 semaine
      break;
    case '1m':
      hoursToShow = 30; // On montre par jour pour 1 mois
      break;
    case '1y':
      hoursToShow = 12; // On montre par mois pour 1 an
      break;
    case 'lifetime':
      hoursToShow = 24; // Par défaut dernières 24h
      break;
  }

  // Pour les périodes courtes, on fait par heure
  if (period === '1d' || period === '15min' || period === '1h') {
    const actualHours = period === '1h' ? 1 : period === '15min' ? 1 : 24;
    
    for (let i = actualHours - 1; i >= 0; i--) {
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
  } else {
    // Pour les périodes longues, on garde le comportement par défaut (24h)
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
  }

  return data;
}

// Ancienne fonction pour rétrocompatibilité
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
