import { createAdminClient } from '@/lib/supabase/admin';
import { Question, Category } from '@/types';

// Price IDs pour différencier les types d'abonnement
const PREMIUM_PRICE_IDS = [
  'price_1Sc3rPEuT9agNbEU65mDE4RP', // Premium TEST
  'price_1Sc3BYIUG5GUejFZaWexcxzz', // Premium PRODUCTION
];
const STANDARD_PRICE_IDS = [
  'price_1Sc3qxEuT9agNbEUdX0RkLM4', // Standard TEST
  'price_1Sc3AqIUG5GUejFZagJyV8HC', // Standard PRODUCTION
];

export type UserFilter = 'all' | 'premium' | 'standard' | 'gratuit';

async function getUserIdsBySubscription(supabase: any, filter: UserFilter): Promise<string[] | null> {
  if (filter === 'all') return null;
  
  let query = supabase.from('profiles').select('id');
  
  if (filter === 'premium') {
    query = query.eq('is_premium', true).in('stripe_price_id', PREMIUM_PRICE_IDS);
  } else if (filter === 'standard') {
    query = query.eq('is_premium', true).in('stripe_price_id', STANDARD_PRICE_IDS);
  } else if (filter === 'gratuit') {
    query = query.eq('is_premium', false);
  }
  
  const { data } = await query;
  return data?.map((p: { id: string }) => p.id) || [];
}

export async function getQuestionsStats() {
  const supabase = createAdminClient();

  const [
    { count: totalQuestions },
    { count: premiumQuestions },
    { count: totalCategories },
    { data: difficultyData },
  ] = await Promise.all([
    supabase.from('questions').select('*', { count: 'exact', head: true }),
    supabase.from('questions').select('*', { count: 'exact', head: true }).eq('is_premium', true),
    supabase.from('categories').select('*', { count: 'exact', head: true }),
    supabase.from('questions').select('difficulte'),
  ]);

  // Compter par difficulte
  const byDifficulty = difficultyData?.reduce((acc, q) => {
    const diff = q.difficulte || 1;
    acc[diff] = (acc[diff] || 0) + 1;
    return acc;
  }, {} as Record<number, number>) || {};

  return {
    totalQuestions: totalQuestions || 0,
    premiumQuestions: premiumQuestions || 0,
    freeQuestions: (totalQuestions || 0) - (premiumQuestions || 0),
    totalCategories: totalCategories || 0,
    byDifficulty,
  };
}

export async function getQuestions(
  page: number = 1,
  limit: number = 20,
  categoryId?: string,
  difficulty?: string
): Promise<{ questions: (Question & { category_name?: string; reponses_count?: number })[]; total: number }> {
  const supabase = createAdminClient();
  const offset = (page - 1) * limit;

  let query = supabase.from('questions').select('*', { count: 'exact' });

  if (categoryId) {
    query = query.eq('categorie_id', categoryId);
  }
  if (difficulty) {
    query = query.eq('difficulte', parseInt(difficulty));
  }

  const { data, count } = await query
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (!data) return { questions: [], total: 0 };

  // Recuperer les categories
  const categoryIds = [...new Set(data.map(q => q.categorie_id))];
  const { data: categories } = await supabase
    .from('categories')
    .select('id, nom')
    .in('id', categoryIds);

  const categoryMap = new Map(categories?.map(c => [c.id, c.nom]) || []);

  // Compter les reponses par question
  const result = [];
  for (const q of data) {
    const { count: reponsesCount } = await supabase
      .from('reponses')
      .select('*', { count: 'exact', head: true })
      .eq('question_id', q.id);

    result.push({
      ...q,
      category_name: categoryMap.get(q.categorie_id) || 'Inconnue',
      reponses_count: reponsesCount || 0,
    });
  }

  return { questions: result, total: count || 0 };
}

export async function getCategories(): Promise<(Category & { questions_count: number })[]> {
  const supabase = createAdminClient();

  const { data: categories } = await supabase
    .from('categories')
    .select('*')
    .order('ordre');

  if (!categories) return [];

  const result = [];
  for (const cat of categories) {
    const { count } = await supabase
      .from('questions')
      .select('*', { count: 'exact', head: true })
      .eq('categorie_id', cat.id);

    result.push({
      ...cat,
      questions_count: count || 0,
    });
  }

  return result;
}

export async function getCategoriesForSelect() {
  const supabase = createAdminClient();

  const { data } = await supabase
    .from('categories')
    .select('id, nom')
    .order('ordre');

  return data || [];
}

// Stats des catégories avec performances utilisateurs filtrées
export async function getCategoriesWithUserStats(userFilter: UserFilter = 'all') {
  const supabase = createAdminClient();

  const { data: categories } = await supabase
    .from('categories')
    .select('*')
    .order('ordre');

  if (!categories) return [];

  // Récupérer les IDs utilisateurs filtrés
  const userIds = await getUserIdsBySubscription(supabase, userFilter);

  const result = [];
  for (const cat of categories) {
    // Questions count (toujours le total)
    const { count: questionsCount } = await supabase
      .from('questions')
      .select('*', { count: 'exact', head: true })
      .eq('categorie_id', cat.id);

    // Sessions pour cette catégorie avec filtre utilisateur
    let sessionsQuery = supabase
      .from('sessions_quiz')
      .select('score, total_questions, user_id')
      .eq('categorie_id', cat.id)
      .eq('completed', true);

    if (userIds !== null) {
      if (userIds.length === 0) {
        result.push({
          ...cat,
          questions_count: questionsCount || 0,
          sessions_count: 0,
          avg_score: 0,
          unique_users: 0,
        });
        continue;
      }
      sessionsQuery = sessionsQuery.in('user_id', userIds);
    }

    const { data: sessions } = await sessionsQuery;

    const sessionsCount = sessions?.length || 0;
    const avgScore = sessions && sessions.length > 0
      ? Math.round(sessions.reduce((sum, s) => sum + ((s.score / s.total_questions) * 100), 0) / sessions.length)
      : 0;
    const uniqueUsers = new Set(sessions?.map(s => s.user_id) || []).size;

    result.push({
      ...cat,
      questions_count: questionsCount || 0,
      sessions_count: sessionsCount,
      avg_score: avgScore,
      unique_users: uniqueUsers,
    });
  }

  return result;
}

// Stats globales des catégories filtrées par utilisateur
export async function getCategoriesGlobalStats(userFilter: UserFilter = 'all') {
  const supabase = createAdminClient();
  const userIds = await getUserIdsBySubscription(supabase, userFilter);

  const { count: categoriesCount } = await supabase
    .from('categories')
    .select('*', { count: 'exact', head: true });

  const { count: questionsCount } = await supabase
    .from('questions')
    .select('*', { count: 'exact', head: true });

  // Sessions avec filtre
  let sessionsQuery = supabase
    .from('sessions_quiz')
    .select('*', { count: 'exact', head: true })
    .eq('completed', true);

  if (userIds !== null && userIds.length > 0) {
    sessionsQuery = sessionsQuery.in('user_id', userIds);
  } else if (userIds !== null && userIds.length === 0) {
    return {
      totalCategories: categoriesCount || 0,
      totalQuestions: questionsCount || 0,
      totalSessions: 0,
      avgQuestionsPerCategory: categoriesCount ? Math.round((questionsCount || 0) / categoriesCount) : 0,
    };
  }

  const { count: sessionsCount } = await sessionsQuery;

  return {
    totalCategories: categoriesCount || 0,
    totalQuestions: questionsCount || 0,
    totalSessions: sessionsCount || 0,
    avgQuestionsPerCategory: categoriesCount ? Math.round((questionsCount || 0) / categoriesCount) : 0,
  };
}
