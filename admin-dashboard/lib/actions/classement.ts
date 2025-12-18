import { createAdminClient } from '@/lib/supabase/admin';

// Price IDs pour différencier les types d'abonnement
const PREMIUM_PRICE_IDS = [
  'price_1Sc3rPEuT9agNbEU65mDE4RP', // Premium TEST
  'price_1Sc3BYIUG5GUejFZaWexcxzz', // Premium PRODUCTION
];
const STANDARD_PRICE_IDS = [
  'price_1Sc3qxEuT9agNbEUdX0RkLM4', // Standard TEST
  'price_1Sc3AqIUG5GUejFZagJyV8HC', // Standard PRODUCTION
];

export type UserRanking = {
  id: string;
  email: string;
  prenom: string | null;
  nom: string | null;
  subscription_type: 'gratuit' | 'standard' | 'premium';
  // Performance
  total_questions_repondues: number;
  total_bonnes_reponses: number;
  taux_reussite: number;
  // Examens
  total_examens: number;
  examens_reussis: number;
  taux_examens: number;
  meilleur_score_examen: number;
  // Sessions
  total_sessions: number;
  // Temps
  temps_total_etude: number; // en secondes
  temps_moyen_par_session: number;
  // Gamification
  points_total: number;
  streak_jours: number;
  meilleure_serie: number;
  // Niveaux
  niveaux_completes: number;
  niveau_max: number;
  // Dates
  created_at: string;
  derniere_activite: string | null;
};

export type SortCriteria = 
  | 'taux_reussite' 
  | 'total_questions_repondues' 
  | 'temps_total_etude'
  | 'examens_reussis'
  | 'points_total'
  | 'streak_jours'
  | 'niveaux_completes'
  | 'meilleur_score_examen';

export type FilterCriteria = {
  subscriptionType?: 'all' | 'premium' | 'standard' | 'gratuit';
  minQuestions?: number;
  minTauxReussite?: number;
  hasExamens?: boolean;
  actifRecent?: boolean; // actif dans les 7 derniers jours
};

function getSubscriptionType(profile: { is_premium: boolean; stripe_price_id: string | null }): 'gratuit' | 'standard' | 'premium' {
  if (!profile.is_premium) return 'gratuit';
  if (profile.stripe_price_id && PREMIUM_PRICE_IDS.includes(profile.stripe_price_id)) return 'premium';
  if (profile.stripe_price_id && STANDARD_PRICE_IDS.includes(profile.stripe_price_id)) return 'standard';
  // Par défaut si is_premium=true mais pas de price_id correspondant
  return 'premium';
}

export async function getUsersRanking(
  sortBy: SortCriteria = 'taux_reussite',
  filters: FilterCriteria = {},
  limit: number = 100
): Promise<UserRanking[]> {
  const supabase = createAdminClient();

  // Récupérer tous les profils
  let profilesQuery = supabase
    .from('profiles')
    .select('id, email, prenom, nom, is_premium, stripe_price_id, created_at');

  // Filtres de base sur le type d'abonnement
  if (filters.subscriptionType === 'premium') {
    profilesQuery = profilesQuery.eq('is_premium', true).in('stripe_price_id', PREMIUM_PRICE_IDS);
  } else if (filters.subscriptionType === 'standard') {
    profilesQuery = profilesQuery.eq('is_premium', true).in('stripe_price_id', STANDARD_PRICE_IDS);
  } else if (filters.subscriptionType === 'gratuit') {
    profilesQuery = profilesQuery.eq('is_premium', false);
  }

  const { data: profiles } = await profilesQuery;

  if (!profiles || profiles.length === 0) return [];

  const rankings: UserRanking[] = [];

  // Pour chaque utilisateur, récupérer toutes les stats
  for (const profile of profiles) {
    const [
      { data: stats },
      { data: gamification },
      { count: examensTotal },
      { count: examensReussis },
      { data: meilleurExamen },
      { count: sessionsTotal },
      { data: sessionsTimes },
      { data: progression },
    ] = await Promise.all([
      supabase.from('statistiques').select('*').eq('user_id', profile.id).single(),
      supabase.from('gamification').select('*').eq('user_id', profile.id).single(),
      supabase.from('examens_blancs').select('*', { count: 'exact', head: true }).eq('user_id', profile.id).eq('is_completed', true),
      supabase.from('examens_blancs').select('*', { count: 'exact', head: true }).eq('user_id', profile.id).eq('passed', true),
      // Récupérer score ET total_questions pour calculer le vrai pourcentage
      supabase.from('examens_blancs').select('score, total_questions').eq('user_id', profile.id).eq('is_completed', true),
      supabase.from('sessions_quiz').select('*', { count: 'exact', head: true }).eq('user_id', profile.id).eq('completed', true),
      supabase.from('sessions_quiz').select('temps_total').eq('user_id', profile.id).eq('completed', true),
      supabase.from('progression_niveaux').select('niveau, is_completed').eq('user_id', profile.id),
    ]);

    const totalQuestions = stats?.total_questions_repondues || 0;
    const bonnesReponses = stats?.total_bonnes_reponses || 0;
    const tauxReussite = totalQuestions > 0 ? Math.round((bonnesReponses / totalQuestions) * 100) : 0;
    const tempsTotal = stats?.temps_total_etude || 0;
    const niveauxCompletes = progression?.filter(p => p.is_completed).length || 0;
    const niveauMax = progression?.reduce((max, p) => Math.max(max, p.niveau), 0) || 0;
    const tempsMoyenSession = sessionsTotal && sessionsTotal > 0 
      ? Math.round((sessionsTimes?.reduce((sum, s) => sum + (s.temps_total || 0), 0) || 0) / sessionsTotal)
      : 0;
    const tauxExamens = examensTotal && examensTotal > 0 ? Math.round(((examensReussis || 0) / examensTotal) * 100) : 0;
    
    // Calculer le meilleur score d'examen en pourcentage (score = bonnes réponses, pas un pourcentage)
    const meilleurScoreExamen = meilleurExamen?.reduce((best, exam) => {
      if (!exam.total_questions || exam.total_questions === 0) return best;
      const pourcentage = Math.round((exam.score / exam.total_questions) * 100);
      return Math.max(best, pourcentage);
    }, 0) || 0;

    // Appliquer les filtres
    if (filters.minQuestions && totalQuestions < filters.minQuestions) continue;
    if (filters.minTauxReussite && tauxReussite < filters.minTauxReussite) continue;
    if (filters.hasExamens && (!examensTotal || examensTotal === 0)) continue;
    if (filters.actifRecent) {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      if (!stats?.derniere_activite || new Date(stats.derniere_activite) < sevenDaysAgo) continue;
    }

    rankings.push({
      id: profile.id,
      email: profile.email,
      prenom: profile.prenom,
      nom: profile.nom,
      subscription_type: getSubscriptionType(profile),
      total_questions_repondues: totalQuestions,
      total_bonnes_reponses: bonnesReponses,
      taux_reussite: tauxReussite,
      total_examens: examensTotal || 0,
      examens_reussis: examensReussis || 0,
      taux_examens: tauxExamens,
      meilleur_score_examen: meilleurScoreExamen,
      total_sessions: sessionsTotal || 0,
      temps_total_etude: tempsTotal,
      temps_moyen_par_session: tempsMoyenSession,
      points_total: gamification?.points_total || 0,
      streak_jours: gamification?.streak_jours || 0,
      meilleure_serie: gamification?.meilleure_serie || 0,
      niveaux_completes: niveauxCompletes,
      niveau_max: niveauMax,
      created_at: profile.created_at,
      derniere_activite: stats?.derniere_activite || null,
    });
  }

  // Trier selon le critère sélectionné
  const sorted = rankings.sort((a, b) => {
    switch (sortBy) {
      case 'taux_reussite':
        return b.taux_reussite - a.taux_reussite;
      case 'total_questions_repondues':
        return b.total_questions_repondues - a.total_questions_repondues;
      case 'temps_total_etude':
        return b.temps_total_etude - a.temps_total_etude;
      case 'examens_reussis':
        return b.examens_reussis - a.examens_reussis;
      case 'points_total':
        return b.points_total - a.points_total;
      case 'streak_jours':
        return b.streak_jours - a.streak_jours;
      case 'niveaux_completes':
        return b.niveaux_completes - a.niveaux_completes;
      case 'meilleur_score_examen':
        return b.meilleur_score_examen - a.meilleur_score_examen;
      default:
        return b.taux_reussite - a.taux_reussite;
    }
  });

  return sorted.slice(0, limit);
}

export async function getRankingStats() {
  const supabase = createAdminClient();

  // Stats globales pour le classement
  const [
    { data: topPerformer },
    { data: mostActive },
    { data: longestStreak },
    { count: usersWithExams },
  ] = await Promise.all([
    supabase.from('statistiques')
      .select('user_id, total_bonnes_reponses, total_questions_repondues')
      .order('total_bonnes_reponses', { ascending: false })
      .limit(1),
    supabase.from('statistiques')
      .select('user_id, total_questions_repondues')
      .order('total_questions_repondues', { ascending: false })
      .limit(1),
    supabase.from('gamification')
      .select('user_id, meilleure_serie')
      .order('meilleure_serie', { ascending: false })
      .limit(1),
    supabase.from('examens_blancs')
      .select('user_id', { count: 'exact', head: true })
      .eq('is_completed', true),
  ]);

  // Récupérer les emails des top users
  const userIds = [
    topPerformer?.[0]?.user_id,
    mostActive?.[0]?.user_id,
    longestStreak?.[0]?.user_id,
  ].filter(Boolean);

  const { data: profiles } = await supabase
    .from('profiles')
    .select('id, email, prenom, nom')
    .in('id', userIds);

  const getUser = (userId: string) => profiles?.find(p => p.id === userId);

  return {
    topPerformer: topPerformer?.[0] ? {
      ...getUser(topPerformer[0].user_id),
      score: topPerformer[0].total_questions_repondues > 0 
        ? Math.round((topPerformer[0].total_bonnes_reponses / topPerformer[0].total_questions_repondues) * 100)
        : 0,
    } : null,
    mostActive: mostActive?.[0] ? {
      ...getUser(mostActive[0].user_id),
      questions: mostActive[0].total_questions_repondues,
    } : null,
    longestStreak: longestStreak?.[0] ? {
      ...getUser(longestStreak[0].user_id),
      streak: longestStreak[0].meilleure_serie,
    } : null,
    usersWithExams: usersWithExams || 0,
  };
}
