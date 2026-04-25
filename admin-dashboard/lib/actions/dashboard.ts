import { createAdminClient } from '@/lib/supabase/admin';
import { DashboardStats } from '@/types';

// Prix des abonnements par semaine
const STANDARD_PRICE = 2.99;
const PREMIUM_PRICE = 6.99;

// Price IDs pour différencier Standard vs Premium
const PREMIUM_PRICE_IDS = [
  'price_1Sc3rPEuT9agNbEU65mDE4RP', // Premium TEST
  'price_1Sc3BYIUG5GUejFZaWexcxzz', // Premium PRODUCTION
];
const STANDARD_PRICE_IDS = [
  'price_1Sc3qxEuT9agNbEUdX0RkLM4', // Standard TEST
  'price_1Sc3AqIUG5GUejFZagJyV8HC', // Standard PRODUCTION
];

export type SubscriptionFilter = 'all' | 'premium' | 'standard';

export async function getDashboardStats(subscriptionFilter: SubscriptionFilter = 'all'): Promise<DashboardStats & {
  standardUsers: number;
  standardRevenue: number;
  premiumRevenue: number;
}> {
  const supabase = createAdminClient();

  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  // Requetes paralleles pour optimiser les performances
  const [
    { count: totalUsers },
    { count: newUsersThisMonth },
    { count: premiumUsersCount },
    { count: standardUsersCount },
    { count: trialingUsersCount },
    { count: totalQuestions },
    { count: totalCategories },
    { count: totalExamens },
    { count: examensReussis },
    { count: totalSessions },
    { data: revenueAllData },
    { data: revenueMonthData },
    { data: statsData },
  ] = await Promise.all([
    // Total utilisateurs
    supabase.from('profiles').select('*', { count: 'exact', head: true }),
    // Nouveaux ce mois
    supabase.from('profiles').select('*', { count: 'exact', head: true })
      .gte('created_at', startOfMonth.toISOString()),
    // Utilisateurs premium (is_premium OU subscription_status active/trialing + price_id premium)
    supabase.from('profiles').select('*', { count: 'exact', head: true })
      .or('is_premium.eq.true,subscription_status.eq.active,subscription_status.eq.trialing')
      .in('stripe_price_id', PREMIUM_PRICE_IDS),
    // Utilisateurs standard (is_premium OU subscription_status active/trialing + price_id standard)
    supabase.from('profiles').select('*', { count: 'exact', head: true })
      .or('is_premium.eq.true,subscription_status.eq.active,subscription_status.eq.trialing')
      .in('stripe_price_id', STANDARD_PRICE_IDS),
    // Utilisateurs en période d'essai (trialing)
    supabase.from('profiles').select('*', { count: 'exact', head: true })
      .eq('subscription_status', 'trialing'),
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
    // Revenus réels totaux (depuis revenue_events — source de vérité)
    supabase.from('revenue_events').select('amount, product_type').eq('status', 'succeeded'),
    // Revenus réels ce mois
    supabase.from('revenue_events').select('amount, product_type')
      .eq('status', 'succeeded')
      .gte('created_at', startOfMonth.toISOString()),
    // Stats agregees
    supabase.from('statistiques').select('total_questions_repondues, temps_total_etude'),
  ]);

  const standardUsers = standardUsersCount || 0;
  const premiumUsers = premiumUsersCount || 0;
  const trialingUsers = trialingUsersCount || 0;

  // Revenus réels depuis revenue_events
  const allRevenue = revenueAllData || [];
  const monthRevenue = revenueMonthData || [];

  const totalRevenus = allRevenue.reduce((sum, e) => sum + (e.amount || 0), 0);
  const revenusThisMonth = monthRevenue.reduce((sum, e) => sum + (e.amount || 0), 0);
  const standardRevenue = allRevenue.filter(e => e.product_type === 'standard').reduce((sum, e) => sum + (e.amount || 0), 0);
  const premiumRevenue = allRevenue.filter(e => e.product_type === 'premium').reduce((sum, e) => sum + (e.amount || 0), 0);

  const questionsRepondues = statsData?.reduce((sum, s) => sum + (s.total_questions_repondues || 0), 0) || 0;
  const tempsEtudeTotal = statsData?.reduce((sum, s) => sum + (s.temps_total_etude || 0), 0) || 0;

  const tauxReussiteExamens = totalExamens && totalExamens > 0
    ? Math.round(((examensReussis || 0) / totalExamens) * 100)
    : 0;

  // Appliquer le filtre pour les stats affichées
  let displayedPremiumUsers = premiumUsers + standardUsers; // Par défaut: tous les payants
  if (subscriptionFilter === 'premium') {
    displayedPremiumUsers = premiumUsers;
  } else if (subscriptionFilter === 'standard') {
    displayedPremiumUsers = standardUsers;
  }

  return {
    totalUsers: totalUsers || 0,
    newUsersToday: 0,
    newUsersThisWeek: 0,
    newUsersThisMonth: newUsersThisMonth || 0,
    premiumUsers: displayedPremiumUsers, // Affiche selon le filtre
    standardUsers,
    trialingUsers, // Utilisateurs en période d'essai
    activeUsersToday: 0,
    totalQuestions: totalQuestions || 0,
    totalCategories: totalCategories || 0,
    totalExamens: totalExamens || 0,
    examensReussis: examensReussis || 0,
    tauxReussiteExamens,
    totalSessions: totalSessions || 0,
    totalRevenus,
    revenusThisMonth,
    standardRevenue,
    premiumRevenue,
    totalAchats: allRevenue.filter(e => e.product_type !== 'standard' && e.product_type !== 'premium').length,
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

// Données des inscriptions uniquement (pour le graphique Vue d'ensemble)
export async function getSignupsData(days: number = 14) {
  const supabase = createAdminClient();

  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const { data: profilesData } = await supabase
    .from('profiles')
    .select('created_at')
    .gte('created_at', startDate.toISOString());

  // Grouper par jour
  const data = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dayStr = date.toISOString().split('T')[0];

    const signups = profilesData?.filter(p =>
      p.created_at?.startsWith(dayStr)
    ).length || 0;

    data.push({
      date: date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }),
      signups,
    });
  }

  return data;
}

export async function getRevenueData(days: number = 30) {
  const supabase = createAdminClient();

  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  // Utiliser revenue_events comme source de vérité
  const { data: events } = await supabase
    .from('revenue_events')
    .select('amount, product_type, event_type, created_at')
    .eq('status', 'succeeded')
    .gte('created_at', startDate.toISOString())
    .order('created_at', { ascending: true });

  const data = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dayStr = date.toISOString().split('T')[0];

    const dayEvents = (events || []).filter(e => e.created_at?.startsWith(dayStr));
    const amount = dayEvents.reduce((sum, e) => sum + (e.amount || 0), 0);
    const subscriptionAmount = dayEvents
      .filter(e => e.event_type === 'subscription')
      .reduce((sum, e) => sum + (e.amount || 0), 0);
    const oneTimeAmount = dayEvents
      .filter(e => e.event_type === 'one_time')
      .reduce((sum, e) => sum + (e.amount || 0), 0);

    data.push({
      date: date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }),
      amount,
      subscriptionAmount,
      oneTimeAmount,
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
