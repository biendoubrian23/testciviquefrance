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

  // Une seule requête RPC au lieu de 13 parallèles (évite la saturation du pool NANO)
  const { data: rpcData, error } = await supabase.rpc('get_admin_dashboard_stats', {
    p_start_of_month: startOfMonth.toISOString(),
  });

  if (error || !rpcData) {
    console.error('Erreur RPC dashboard stats:', error);
    // Retourner des zéros plutôt que planter
    return {
      totalUsers: 0, newUsersToday: 0, newUsersThisWeek: 0, newUsersThisMonth: 0,
      premiumUsers: 0, standardUsers: 0, trialingUsers: 0, activeUsersToday: 0,
      totalQuestions: 0, totalCategories: 0, totalExamens: 0, examensReussis: 0,
      tauxReussiteExamens: 0, totalSessions: 0, totalRevenus: 0, revenusThisMonth: 0,
      standardRevenue: 0, premiumRevenue: 0, totalAchats: 0,
      questionsRepondues: 0, tempsEtudeTotal: 0,
    };
  }

  const d = rpcData as any;
  const allRevenue: Array<{ amount: number; product_type: string }> = d.allRevenue || [];
  const monthRevenue: Array<{ amount: number; product_type: string }> = d.monthRevenue || [];

  const totalRevenus = allRevenue.reduce((sum, e) => sum + (e.amount || 0), 0);
  const revenusThisMonth = monthRevenue.reduce((sum, e) => sum + (e.amount || 0), 0);
  const standardRevenue = allRevenue.filter(e => e.product_type === 'standard').reduce((sum, e) => sum + (e.amount || 0), 0);
  const premiumRevenue = allRevenue.filter(e => e.product_type === 'premium').reduce((sum, e) => sum + (e.amount || 0), 0);

  const premiumUsers: number = d.premiumUsers || 0;
  const standardUsers: number = d.standardUsers || 0;
  const tauxReussiteExamens = d.totalExamens > 0
    ? Math.round((d.examensReussis / d.totalExamens) * 100)
    : 0;

  let displayedPremiumUsers = premiumUsers + standardUsers;
  if (subscriptionFilter === 'premium') displayedPremiumUsers = premiumUsers;
  else if (subscriptionFilter === 'standard') displayedPremiumUsers = standardUsers;

  return {
    totalUsers: d.totalUsers || 0,
    newUsersToday: 0,
    newUsersThisWeek: 0,
    newUsersThisMonth: d.newUsersThisMonth || 0,
    premiumUsers: displayedPremiumUsers,
    standardUsers,
    trialingUsers: d.trialingUsers || 0,
    activeUsersToday: 0,
    totalQuestions: d.totalQuestions || 0,
    totalCategories: d.totalCategories || 0,
    totalExamens: d.totalExamens || 0,
    examensReussis: d.examensReussis || 0,
    tauxReussiteExamens,
    totalSessions: d.totalSessions || 0,
    totalRevenus,
    revenusThisMonth,
    standardRevenue,
    premiumRevenue,
    totalAchats: allRevenue.filter(e => e.product_type !== 'standard' && e.product_type !== 'premium').length,
    questionsRepondues: d.questionsRepondues || 0,
    tempsEtudeTotal: d.tempsEtudeTotal || 0,
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
