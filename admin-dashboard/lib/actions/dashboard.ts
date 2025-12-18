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
    // Utilisateurs premium (is_premium + price_id premium)
    supabase.from('profiles').select('*', { count: 'exact', head: true })
      .eq('is_premium', true)
      .in('stripe_price_id', PREMIUM_PRICE_IDS),
    // Utilisateurs standard (is_premium + price_id standard)
    supabase.from('profiles').select('*', { count: 'exact', head: true })
      .eq('is_premium', true)
      .in('stripe_price_id', STANDARD_PRICE_IDS),
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
    // Revenus totaux (achats completes)
    supabase.from('achats').select('amount').eq('status', 'completed'),
    // Revenus ce mois (achats)
    supabase.from('achats').select('amount')
      .eq('status', 'completed')
      .gte('created_at', startOfMonth.toISOString()),
    // Stats agregees
    supabase.from('statistiques').select('total_questions_repondues, temps_total_etude'),
  ]);

  // Calculer les revenus basés sur les abonnements actifs
  const standardUsers = standardUsersCount || 0;
  const premiumUsers = premiumUsersCount || 0;
  
  // Revenus des abonnements (par semaine)
  const standardRevenue = standardUsers * STANDARD_PRICE;
  const premiumRevenue = premiumUsers * PREMIUM_PRICE;
  const subscriptionRevenue = standardRevenue + premiumRevenue;
  
  // Revenus des achats ponctuels
  const achatsRevenue = achatsData?.reduce((sum, a) => sum + (a.amount || 0), 0) || 0;
  const achatsThisMonthRevenue = achatsThisMonth?.reduce((sum, a) => sum + (a.amount || 0), 0) || 0;
  
  // Total revenus = abonnements + achats ponctuels
  const totalRevenus = subscriptionRevenue + achatsRevenue;
  const revenusThisMonth = subscriptionRevenue + achatsThisMonthRevenue;
  
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
  
  // Récupérer les abonnements actifs avec leur date de début
  const [
    { data: subscriptions },
    { data: achats },
  ] = await Promise.all([
    supabase
      .from('profiles')
      .select('stripe_price_id, subscription_start_date')
      .eq('is_premium', true)
      .not('subscription_start_date', 'is', null)
      .gte('subscription_start_date', startDate.toISOString()),
    supabase
      .from('achats')
      .select('amount, created_at')
      .eq('status', 'completed')
      .gte('created_at', startDate.toISOString()),
  ]);

  // Grouper par jour
  const data = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dayStr = date.toISOString().split('T')[0];

    // Revenus des abonnements démarrés ce jour
    const daySubscriptions = subscriptions?.filter(s => 
      s.subscription_start_date?.startsWith(dayStr)
    ) || [];
    
    const subscriptionRevenue = daySubscriptions.reduce((sum, s) => {
      const isPremium = s.stripe_price_id && PREMIUM_PRICE_IDS.includes(s.stripe_price_id);
      return sum + (isPremium ? PREMIUM_PRICE : STANDARD_PRICE);
    }, 0);

    // Revenus des achats ponctuels (pack examen, etc.)
    const dayAchats = achats?.filter(a => 
      a.created_at?.startsWith(dayStr)
    ) || [];
    
    const achatsRevenue = dayAchats.reduce((sum, a) => sum + (a.amount || 0), 0);

    data.push({
      date: date.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }),
      amount: subscriptionRevenue + achatsRevenue,
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
