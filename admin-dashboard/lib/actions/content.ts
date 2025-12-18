import { createAdminClient } from '@/lib/supabase/admin';
import { Question, Category } from '@/types';

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
