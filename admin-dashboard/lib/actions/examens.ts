import { createAdminClient } from '@/lib/supabase/admin';
import { ExamenBlanc, SessionQuiz } from '@/types';

export async function getExamensStats() {
  const supabase = createAdminClient();

  const [
    { count: totalExamens },
    { count: examensCompletes },
    { count: examensReussis },
    { data: avgScoreData },
  ] = await Promise.all([
    supabase.from('examens_blancs').select('*', { count: 'exact', head: true }),
    supabase.from('examens_blancs').select('*', { count: 'exact', head: true }).eq('is_completed', true),
    supabase.from('examens_blancs').select('*', { count: 'exact', head: true }).eq('passed', true),
    supabase.from('examens_blancs').select('score').eq('is_completed', true),
  ]);

  const avgScore = avgScoreData && avgScoreData.length > 0
    ? Math.round(avgScoreData.reduce((sum, e) => sum + (e.score || 0), 0) / avgScoreData.length)
    : 0;

  const tauxReussite = examensCompletes && examensCompletes > 0
    ? Math.round(((examensReussis || 0) / examensCompletes) * 100)
    : 0;

  return {
    totalExamens: totalExamens || 0,
    examensCompletes: examensCompletes || 0,
    examensReussis: examensReussis || 0,
    avgScore,
    tauxReussite,
  };
}

export async function getRecentExamens(limit: number = 50): Promise<(ExamenBlanc & { user_email?: string })[]> {
  const supabase = createAdminClient();

  const { data: examens } = await supabase
    .from('examens_blancs')
    .select('*')
    .eq('is_completed', true)
    .order('completed_at', { ascending: false })
    .limit(limit);

  if (!examens) return [];

  // Recuperer les emails des utilisateurs
  const userIds = [...new Set(examens.map(e => e.user_id))];
  const { data: profiles } = await supabase
    .from('profiles')
    .select('id, email')
    .in('id', userIds);

  const emailMap = new Map(profiles?.map(p => [p.id, p.email]) || []);

  return examens.map(e => ({
    ...e,
    user_email: emailMap.get(e.user_id) || 'Inconnu',
  }));
}

export async function getExamensByNumber() {
  const supabase = createAdminClient();

  const { data } = await supabase
    .from('examens_blancs')
    .select('exam_number, passed, is_completed')
    .eq('is_completed', true);

  if (!data) return [];

  // Grouper par numero d'examen
  const grouped = data.reduce((acc, e) => {
    const num = e.exam_number || 1;
    if (!acc[num]) {
      acc[num] = { total: 0, reussis: 0 };
    }
    acc[num].total++;
    if (e.passed) acc[num].reussis++;
    return acc;
  }, {} as Record<number, { total: number; reussis: number }>);

  return Object.entries(grouped).map(([num, stats]) => ({
    examNumber: parseInt(num),
    total: stats.total,
    reussis: stats.reussis,
    tauxReussite: Math.round((stats.reussis / stats.total) * 100),
  })).sort((a, b) => a.examNumber - b.examNumber);
}

export async function getSessionsStats() {
  const supabase = createAdminClient();

  const [
    { count: totalSessions },
    { count: sessionsCompletes },
    { data: avgData },
  ] = await Promise.all([
    supabase.from('sessions_quiz').select('*', { count: 'exact', head: true }),
    supabase.from('sessions_quiz').select('*', { count: 'exact', head: true }).eq('completed', true),
    supabase.from('sessions_quiz').select('score, total_questions').eq('completed', true),
  ]);

  const avgScore = avgData && avgData.length > 0
    ? Math.round(avgData.reduce((sum, s) => sum + ((s.score / s.total_questions) * 100 || 0), 0) / avgData.length)
    : 0;

  return {
    totalSessions: totalSessions || 0,
    sessionsCompletes: sessionsCompletes || 0,
    avgScore,
  };
}

export async function getRecentSessions(limit: number = 50) {
  const supabase = createAdminClient();

  const { data: sessions } = await supabase
    .from('sessions_quiz')
    .select('*')
    .eq('completed', true)
    .order('completed_at', { ascending: false })
    .limit(limit);

  if (!sessions) return [];

  // Recuperer les emails et categories
  const userIds = [...new Set(sessions.map(s => s.user_id))];
  const categoryIds = [...new Set(sessions.map(s => s.categorie_id))];

  const [{ data: profiles }, { data: categories }] = await Promise.all([
    supabase.from('profiles').select('id, email').in('id', userIds),
    supabase.from('categories').select('id, nom').in('id', categoryIds),
  ]);

  const emailMap = new Map(profiles?.map(p => [p.id, p.email]) || []);
  const categoryMap = new Map(categories?.map(c => [c.id, c.nom]) || []);

  return sessions.map(s => ({
    ...s,
    user_email: emailMap.get(s.user_id) || 'Inconnu',
    category_name: categoryMap.get(s.categorie_id) || 'Inconnue',
  }));
}

export async function getSessionsByCategory() {
  const supabase = createAdminClient();

  const { data: categories } = await supabase
    .from('categories')
    .select('id, nom, couleur')
    .order('ordre');

  if (!categories) return [];

  const result = [];
  for (const cat of categories) {
    const [
      { count: total },
      { data: avgData },
    ] = await Promise.all([
      supabase.from('sessions_quiz').select('*', { count: 'exact', head: true })
        .eq('categorie_id', cat.id).eq('completed', true),
      supabase.from('sessions_quiz').select('score, total_questions')
        .eq('categorie_id', cat.id).eq('completed', true),
    ]);

    const avgScore = avgData && avgData.length > 0
      ? Math.round(avgData.reduce((sum, s) => sum + ((s.score / s.total_questions) * 100 || 0), 0) / avgData.length)
      : 0;

    result.push({
      id: cat.id,
      name: cat.nom,
      color: cat.couleur,
      total: total || 0,
      avgScore,
    });
  }

  return result;
}
