import { createAdminClient } from '@/lib/supabase/admin';

// Prix des abonnements
const STANDARD_PRICE = 2.99;
const PREMIUM_PRICE = 6.99;

// Price IDs
const PREMIUM_PRICE_IDS = [
  'price_1Sc3rPEuT9agNbEU65mDE4RP', // Premium TEST
  'price_1Sc3BYIUG5GUejFZaWexcxzz', // Premium PRODUCTION
];
const STANDARD_PRICE_IDS = [
  'price_1Sc3qxEuT9agNbEUdX0RkLM4', // Standard TEST
  'price_1Sc3AqIUG5GUejFZagJyV8HC', // Standard PRODUCTION
];

export type Subscription = {
  id: string;
  email: string;
  prenom: string | null;
  nom: string | null;
  type: 'standard' | 'premium';
  price: number;
  status: 'active' | 'canceled' | 'past_due' | 'inactive';
  start_date: string | null;
  end_date: string | null;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  days_remaining: number;
  weeks_active: number;
};

export type SubscriptionStats = {
  totalActive: number;
  totalStandard: number;
  totalPremium: number;
  weeklyRevenue: number;
  monthlyRevenue: number;
  yearlyRevenue: number;
  standardRevenue: number;
  premiumRevenue: number;
  expiringThisWeek: number;
  expiringToday: number;
  newThisWeek: number;
  newThisMonth: number;
  churnRate: number; // taux de désabonnement
};

export type SubscriptionFilter = {
  type?: 'all' | 'standard' | 'premium';
  status?: 'all' | 'active' | 'expiring' | 'canceled';
  period?: 'all' | 'week' | 'month' | '3months';
};

function getSubscriptionType(priceId: string | null): 'standard' | 'premium' {
  if (priceId && PREMIUM_PRICE_IDS.includes(priceId)) return 'premium';
  return 'standard';
}

function getDaysRemaining(endDate: string | null): number {
  if (!endDate) return 0;
  const end = new Date(endDate);
  const now = new Date();
  const diff = end.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function getWeeksActive(startDate: string | null): number {
  if (!startDate) return 0;
  const start = new Date(startDate);
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24 * 7)));
}

export async function getSubscriptions(filter: SubscriptionFilter = {}): Promise<Subscription[]> {
  const supabase = createAdminClient();

  let query = supabase
    .from('profiles')
    .select('id, email, prenom, nom, is_premium, stripe_price_id, subscription_status, subscription_start_date, subscription_end_date, stripe_customer_id, stripe_subscription_id')
    .eq('is_premium', true);

  // Filtre par type
  if (filter.type === 'premium') {
    query = query.in('stripe_price_id', PREMIUM_PRICE_IDS);
  } else if (filter.type === 'standard') {
    query = query.in('stripe_price_id', STANDARD_PRICE_IDS);
  }

  // Filtre par statut
  if (filter.status === 'active') {
    query = query.eq('subscription_status', 'active');
  } else if (filter.status === 'canceled') {
    query = query.eq('subscription_status', 'canceled');
  }

  const { data } = await query.order('subscription_start_date', { ascending: false });

  if (!data) return [];

  let subscriptions = data.map(user => {
    const type = getSubscriptionType(user.stripe_price_id);
    return {
      id: user.id,
      email: user.email,
      prenom: user.prenom,
      nom: user.nom,
      type,
      price: type === 'premium' ? PREMIUM_PRICE : STANDARD_PRICE,
      status: (user.subscription_status || 'inactive') as Subscription['status'],
      start_date: user.subscription_start_date,
      end_date: user.subscription_end_date,
      stripe_customer_id: user.stripe_customer_id,
      stripe_subscription_id: user.stripe_subscription_id,
      days_remaining: getDaysRemaining(user.subscription_end_date),
      weeks_active: getWeeksActive(user.subscription_start_date),
    };
  });

  // Filtre par période
  if (filter.period && filter.period !== 'all') {
    const now = new Date();
    let startDate = new Date();
    if (filter.period === 'week') {
      startDate.setDate(now.getDate() - 7);
    } else if (filter.period === 'month') {
      startDate.setMonth(now.getMonth() - 1);
    } else if (filter.period === '3months') {
      startDate.setMonth(now.getMonth() - 3);
    }
    subscriptions = subscriptions.filter(s => 
      s.start_date && new Date(s.start_date) >= startDate
    );
  }

  // Filtre pour expiring
  if (filter.status === 'expiring') {
    subscriptions = subscriptions.filter(s => s.days_remaining <= 7 && s.days_remaining > 0);
  }

  return subscriptions;
}

export async function getSubscriptionStats(): Promise<SubscriptionStats> {
  const supabase = createAdminClient();

  const now = new Date();
  const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  const [
    { data: activeUsers },
    { count: canceledThisMonth },
    { data: newThisWeekData },
    { data: newThisMonthData },
  ] = await Promise.all([
    supabase.from('profiles')
      .select('stripe_price_id, subscription_end_date, subscription_start_date')
      .eq('is_premium', true),
    supabase.from('profiles')
      .select('*', { count: 'exact', head: true })
      .eq('subscription_status', 'canceled')
      .gte('subscription_end_date', oneMonthAgo.toISOString()),
    supabase.from('profiles')
      .select('id')
      .eq('is_premium', true)
      .gte('subscription_start_date', oneWeekAgo.toISOString()),
    supabase.from('profiles')
      .select('id')
      .eq('is_premium', true)
      .gte('subscription_start_date', oneMonthAgo.toISOString()),
  ]);

  const users = activeUsers || [];
  const totalActive = users.length;
  const totalStandard = users.filter(u => u.stripe_price_id && STANDARD_PRICE_IDS.includes(u.stripe_price_id)).length;
  const totalPremium = users.filter(u => u.stripe_price_id && PREMIUM_PRICE_IDS.includes(u.stripe_price_id)).length;

  const standardRevenue = totalStandard * STANDARD_PRICE;
  const premiumRevenue = totalPremium * PREMIUM_PRICE;
  const weeklyRevenue = standardRevenue + premiumRevenue;

  const expiringThisWeek = users.filter(u => {
    const days = getDaysRemaining(u.subscription_end_date);
    return days <= 7 && days > 0;
  }).length;

  const expiringToday = users.filter(u => {
    const days = getDaysRemaining(u.subscription_end_date);
    return days <= 1;
  }).length;

  // Calcul du taux de churn
  const totalThisMonth = (newThisMonthData?.length || 0) + (canceledThisMonth || 0);
  const churnRate = totalThisMonth > 0 
    ? Math.round(((canceledThisMonth || 0) / totalThisMonth) * 100) 
    : 0;

  return {
    totalActive,
    totalStandard,
    totalPremium,
    weeklyRevenue,
    monthlyRevenue: weeklyRevenue * 4,
    yearlyRevenue: weeklyRevenue * 52,
    standardRevenue,
    premiumRevenue,
    expiringThisWeek,
    expiringToday,
    newThisWeek: newThisWeekData?.length || 0,
    newThisMonth: newThisMonthData?.length || 0,
    churnRate,
  };
}

export async function getRevenueHistory(weeks: number = 12) {
  const supabase = createAdminClient();

  const data = [];
  
  for (let i = weeks - 1; i >= 0; i--) {
    const weekEnd = new Date();
    weekEnd.setDate(weekEnd.getDate() - (i * 7));
    const weekStart = new Date(weekEnd);
    weekStart.setDate(weekStart.getDate() - 7);

    // Compter les abonnés actifs à cette date
    const { data: activeAtDate } = await supabase
      .from('profiles')
      .select('stripe_price_id')
      .eq('is_premium', true)
      .lte('subscription_start_date', weekEnd.toISOString());

    const standardCount = activeAtDate?.filter(u => 
      u.stripe_price_id && STANDARD_PRICE_IDS.includes(u.stripe_price_id)
    ).length || 0;
    
    const premiumCount = activeAtDate?.filter(u => 
      u.stripe_price_id && PREMIUM_PRICE_IDS.includes(u.stripe_price_id)
    ).length || 0;

    const revenue = (standardCount * STANDARD_PRICE) + (premiumCount * PREMIUM_PRICE);

    data.push({
      week: `Sem ${weeks - i}`,
      date: weekEnd.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }),
      standard: standardCount,
      premium: premiumCount,
      total: standardCount + premiumCount,
      revenue,
    });
  }

  return data;
}
