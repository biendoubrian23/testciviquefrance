import { createAdminClient } from '@/lib/supabase/admin';
import { Profile, UserWithStats } from '@/types';

export async function getAllUsers(
  page: number = 1, 
  limit: number = 20,
  search?: string,
  filter?: 'all' | 'premium' | 'standard' | 'free'
): Promise<{ users: Profile[]; total: number }> {
  const supabase = createAdminClient();
  const offset = (page - 1) * limit;

  // Price IDs pour différencier Standard vs Premium
  const PREMIUM_PRICE_IDS = [
    'price_1Sc3rPEuT9agNbEU65mDE4RP', // Premium TEST
    'price_1Sc3BYIUG5GUejFZaWexcxzz', // Premium PRODUCTION
  ];
  const STANDARD_PRICE_IDS = [
    'price_1Sc3qxEuT9agNbEUdX0RkLM4', // Standard TEST
    'price_1Sc3AqIUG5GUejFZagJyV8HC', // Standard PRODUCTION
  ];

  let query = supabase
    .from('profiles')
    .select('*', { count: 'exact' });

  if (search) {
    query = query.or(`email.ilike.%${search}%,prenom.ilike.%${search}%,nom.ilike.%${search}%`);
  }

  if (filter === 'premium') {
    query = query.eq('is_premium', true).in('stripe_price_id', PREMIUM_PRICE_IDS);
  } else if (filter === 'standard') {
    query = query.eq('is_premium', true).in('stripe_price_id', STANDARD_PRICE_IDS);
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

// Prix des abonnements par semaine
const STANDARD_PRICE = 2.99;
const PREMIUM_PRICE = 6.99;

// Price IDs globaux pour différencier Standard vs Premium
const PREMIUM_PRICE_IDS = [
  'price_1Sc3rPEuT9agNbEU65mDE4RP', // Premium TEST
  'price_1Sc3BYIUG5GUejFZaWexcxzz', // Premium PRODUCTION
];
const STANDARD_PRICE_IDS = [
  'price_1Sc3qxEuT9agNbEUdX0RkLM4', // Standard TEST
  'price_1Sc3AqIUG5GUejFZagJyV8HC', // Standard PRODUCTION
];

export type PaidUserFilter = 'all' | 'premium' | 'standard';

export type PaidUserWithType = Profile & {
  subscription_type: 'standard' | 'premium';
  subscription_price: number;
};

export async function getPremiumUsers(filter: PaidUserFilter = 'all'): Promise<PaidUserWithType[]> {
  const supabase = createAdminClient();

  let query = supabase
    .from('profiles')
    .select('*')
    .eq('is_premium', true);

  if (filter === 'premium') {
    query = query.in('stripe_price_id', PREMIUM_PRICE_IDS);
  } else if (filter === 'standard') {
    query = query.in('stripe_price_id', STANDARD_PRICE_IDS);
  }

  const { data } = await query.order('premium_expires_at', { ascending: true });

  if (!data) return [];

  return data.map(user => {
    const isPremiumPlan = user.stripe_price_id && PREMIUM_PRICE_IDS.includes(user.stripe_price_id);
    return {
      ...user,
      subscription_type: isPremiumPlan ? 'premium' as const : 'standard' as const,
      subscription_price: isPremiumPlan ? PREMIUM_PRICE : STANDARD_PRICE,
    };
  });
}

export async function getPaidUsersStats() {
  const supabase = createAdminClient();

  const [
    { count: totalStandard },
    { count: totalPremium },
    { data: standardUsers },
    { data: premiumUsers },
  ] = await Promise.all([
    supabase.from('profiles').select('*', { count: 'exact', head: true })
      .eq('is_premium', true)
      .in('stripe_price_id', STANDARD_PRICE_IDS),
    supabase.from('profiles').select('*', { count: 'exact', head: true })
      .eq('is_premium', true)
      .in('stripe_price_id', PREMIUM_PRICE_IDS),
    supabase.from('profiles').select('premium_expires_at')
      .eq('is_premium', true)
      .in('stripe_price_id', STANDARD_PRICE_IDS),
    supabase.from('profiles').select('premium_expires_at')
      .eq('is_premium', true)
      .in('stripe_price_id', PREMIUM_PRICE_IDS),
  ]);

  const now = new Date();
  const oneDay = 24 * 60 * 60 * 1000;
  const oneWeek = 7 * oneDay;

  const getDaysRemaining = (expiresAt: string | null) => {
    if (!expiresAt) return 0;
    const expires = new Date(expiresAt);
    return Math.max(0, Math.ceil((expires.getTime() - now.getTime()) / oneDay));
  };

  const standardExpiringThisWeek = standardUsers?.filter(u => getDaysRemaining(u.premium_expires_at) <= 7).length || 0;
  const premiumExpiringThisWeek = premiumUsers?.filter(u => getDaysRemaining(u.premium_expires_at) <= 7).length || 0;

  const standardExpiringToday = standardUsers?.filter(u => getDaysRemaining(u.premium_expires_at) <= 1).length || 0;
  const premiumExpiringToday = premiumUsers?.filter(u => getDaysRemaining(u.premium_expires_at) <= 1).length || 0;

  return {
    totalStandard: totalStandard || 0,
    totalPremium: totalPremium || 0,
    standardExpiringToday,
    premiumExpiringToday,
    standardExpiringThisWeek,
    premiumExpiringThisWeek,
    // Revenus actuels par semaine
    standardRevenue: (totalStandard || 0) * STANDARD_PRICE,
    premiumRevenue: (totalPremium || 0) * PREMIUM_PRICE,
    // Revenus potentiels si renouvellement
    potentialStandardRevenue: standardExpiringThisWeek * STANDARD_PRICE,
    potentialPremiumRevenue: premiumExpiringThisWeek * PREMIUM_PRICE,
  };
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

export async function getUserSubscriptionStats() {
  const supabase = createAdminClient();

  const PREMIUM_PRICE_IDS = [
    'price_1Sc3rPEuT9agNbEU65mDE4RP',
    'price_1Sc3BYIUG5GUejFZaWexcxzz',
  ];
  const STANDARD_PRICE_IDS = [
    'price_1Sc3qxEuT9agNbEUdX0RkLM4',
    'price_1Sc3AqIUG5GUejFZagJyV8HC',
  ];

  const [
    { count: totalFree },
    { count: totalStandard },
    { count: totalPremium },
  ] = await Promise.all([
    supabase.from('profiles').select('*', { count: 'exact', head: true })
      .eq('is_premium', false),
    supabase.from('profiles').select('*', { count: 'exact', head: true })
      .eq('is_premium', true)
      .in('stripe_price_id', STANDARD_PRICE_IDS),
    supabase.from('profiles').select('*', { count: 'exact', head: true })
      .eq('is_premium', true)
      .in('stripe_price_id', PREMIUM_PRICE_IDS),
  ]);

  return {
    gratuit: totalFree || 0,
    standard: totalStandard || 0,
    premium: totalPremium || 0,
  };
}
