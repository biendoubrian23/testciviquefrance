import { createAdminClient } from '@/lib/supabase/admin';
import { DashboardStats } from '@/types';

export async function getDashboardStats(): Promise<DashboardStats> {
  const supabase = createAdminClient();
  
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  // Requetes paralleles pour optimiser les performances
  const [
    { count: totalUsers },
    { count: newUsersThisMonth },
    { count: premiumUsers },
    { count: totalQuestions },
    { count: totalCategories },
    { count: totalExamens },
    { count: examensReussis },
    { count: totalSessions },
    { data: achatsData },
    { data: achatsThisMonth },
    { data: statsData },
  ] = await Promise.all([
    // Total utilisateurs
    supabase.from('profiles').select('*', { count: 'exact', head: true }),
    // Nouveaux ce mois
    supabase.from('profiles').select('*', { count: 'exact', head: true })
      .gte('created_at', startOfMonth.toISOString()),
    // Utilisateurs premium
    supabase.from('profiles').select('*', { count: 'exact', head: true })
      .eq('is_premium', true),
    // Total questions
    supabase.from('questions').select('*', { count: 'exact', head: true }),
    // Total categories
    supabase.from('categories').select('*', { count: 'exact', head: true }),
    // Total examens blancs completes
    supabase.from('examens_blancs').select('*', { count: 'exact', head: true })
      .eq('is_completed', true),
    // Examens reussis
    supabase.from('examens_blancs').select('*', { count: 'exact', head: true })
      .eq('passed', true),
    // Total sessions quiz completees
    supabase.from('sessions_quiz').select('*', { count: 'exact', head: true })
      .eq('completed', true),
    // Revenus totaux (tous les achats completes)
    supabase.from('achats').select('amount').eq('status', 'completed'),
    // Revenus ce mois
    supabase.from('achats').select('amount')
      .eq('status', 'completed')
      .gte('created_at', startOfMonth.toISOString()),
    // Stats agregees
    supabase.from('statistiques').select('total_questions_repondues, temps_total_etude'),
  ]);

  const totalRevenus = achatsData?.reduce((sum, a) => sum + (a.amount || 0), 0) || 0;
  const revenusThisMonth = achatsThisMonth?.reduce((sum, a) => sum + (a.amount || 0), 0) || 0;
  const questionsRepondues = statsData?.reduce((sum, s) => sum + (s.total_questions_repondues || 0), 0) || 0;
  const tempsEtudeTotal = statsData?.reduce((sum, s) => sum + (s.temps_total_etude || 0), 0) || 0;

  const tauxReussiteExamens = totalExamens && totalExamens > 0 
    ? Math.round(((examensReussis || 0) / totalExamens) * 100) 
    : 0;

  return {
    totalUsers: totalUsers || 0,
    newUsersToday: 0,
    newUsersThisWeek: 0,
    newUsersThisMonth: newUsersThisMonth || 0,
    premiumUsers: premiumUsers || 0,
    activeUsersToday: 0,
    totalQuestions: totalQuestions || 0,
    totalCategories: totalCategories || 0,
    totalExamens: totalExamens || 0,
    examensReussis: examensReussis || 0,
    tauxReussiteExamens,
    totalSessions: totalSessions || 0,
    totalRevenus,
    revenusThisMonth,
    totalAchats: achatsData?.length || 0,
    questionsRepondues,
    tempsEtudeTotal,
  };
}

export async function getActivityData(days: number = 14) {
  const supabase = createAdminClient();
  
  // Recuperer toutes les donnees en une seule requete puis grouper cote client
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);
  
  const [
    { data: profilesData },
    { data: sessionsData },
  ] = await Promise.all([
    supabase.from('profiles')
      .select('created_at')
      .gte('created_at', startDate.toISOString()),
    supabase.from('sessions_quiz')
      .select('started_at')
      .gte('started_at', startDate.toISOString()),
  ]);

  // Grouper par jour cote client
  const data = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dayStr = date.toISOString().split('T')[0];

    const users = profilesData?.filter(p => 
      p.created_at?.startsWith(dayStr)
    ).length || 0;
    
    const sessions = sessionsData?.filter(s => 
      s.started_at?.startsWith(dayStr)
    ).length || 0;

    data.push({
      date: date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }),
      users,
      sessions,
    });
  }

  return data;
}

export async function getRevenueData(days: number = 30) {
  const supabase = createAdminClient();
  
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);
  
  const { data: achats } = await supabase
    .from('achats')
    .select('amount, created_at')
    .eq('status', 'completed')
    .gte('created_at', startDate.toISOString());

  // Grouper par jour cote client
  const data = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dayStr = date.toISOString().split('T')[0];

    const dayAchats = achats?.filter(a => 
      a.created_at?.startsWith(dayStr)
    ) || [];
    
    const amount = dayAchats.reduce((sum, a) => sum + (a.amount || 0), 0);

    data.push({
      date: date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }),
      amount,
    });
  }

  return data;
}

export async function getCategoryStats() {
  const supabase = createAdminClient();
  
  const [
    { data: categories },
    { data: questions },
  ] = await Promise.all([
    supabase.from('categories').select('id, nom, couleur').order('ordre'),
    supabase.from('questions').select('categorie_id'),
  ]);

  if (!categories) return [];

  return categories.map(cat => ({
    name: cat.nom,
    value: questions?.filter(q => q.categorie_id === cat.id).length || 0,
    color: cat.couleur || '#2563EB',
  }));
}

export async function getRecentUsers(limit: number = 10) {
  const supabase = createAdminClient();
  
  const { data } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  return data || [];
}

export async function getExamSuccessData(days: number = 14) {
  const supabase = createAdminClient();
  
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);
  
  const { data: examens } = await supabase
    .from('examens_blancs')
    .select('passed, is_completed, completed_at')
    .eq('is_completed', true)
    .gte('completed_at', startDate.toISOString());

  // Grouper par jour cote client
  const data = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dayStr = date.toISOString().split('T')[0];

    const dayExamens = examens?.filter(e => 
      e.completed_at?.startsWith(dayStr)
    ) || [];
    
    const reussis = dayExamens.filter(e => e.passed).length;
    const echoues = dayExamens.filter(e => !e.passed).length;

    data.push({
      date: date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }),
      reussis,
      echoues,
    });
  }

  return data;
}
