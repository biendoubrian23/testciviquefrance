import { createAdminClient } from '@/lib/supabase/admin';
import { Profile, Statistique, Gamification, SessionQuiz, ExamenBlanc, ProgressionNiveau, Achat, OnboardingQuiz, Category } from '@/types';

export interface UserJourneyData {
  profile: Profile;
  onboardingQuiz: OnboardingQuiz | null;
  statistiques: Statistique | null;
  gamification: Gamification | null;
  
  // Sessions et examens (les 20 plus récents)
  recentSessions: (SessionQuiz & { categorie_nom?: string })[];
  recentExamens: ExamenBlanc[];
  
  // Progression par catégorie
  progression: (ProgressionNiveau & { categorie_nom?: string })[];
  
  // Achats
  achats: Achat[];
  
  // Métriques calculées
  funnel: {
    inscription: { done: boolean; date: string };
    onboarding: { done: boolean; date: string | null };
    premiereSession: { done: boolean; date: string | null };
    premierExamen: { done: boolean; date: string | null };
    premierAchat: { done: boolean; date: string | null };
  };
  
  blocages: string[];
}

export async function getUserJourney(userId: string): Promise<UserJourneyData | null> {
  const supabase = createAdminClient();

  // Récupérer toutes les données en parallèle
  const [
    { data: profile },
    { data: onboardingQuiz },
    { data: stats },
    { data: gamification },
    { data: sessions },
    { data: examens },
    { data: progression },
    { data: achats },
    { data: categories },
  ] = await Promise.all([
    supabase.from('profiles').select('*').eq('id', userId).single(),
    supabase.from('onboarding_quiz').select('*').eq('user_id', userId).single(),
    supabase.from('statistiques').select('*').eq('user_id', userId).single(),
    supabase.from('gamification').select('*').eq('user_id', userId).single(),
    supabase.from('sessions_quiz')
      .select('*')
      .eq('user_id', userId)
      .order('started_at', { ascending: false })
      .limit(20),
    supabase.from('examens_blancs')
      .select('*')
      .eq('user_id', userId)
      .order('started_at', { ascending: false })
      .limit(20),
    supabase.from('progression_niveaux')
      .select('*')
      .eq('user_id', userId),
    supabase.from('achats')
      .select('*')
      .eq('user_id', userId)
      .eq('status', 'completed')
      .order('created_at', { ascending: false }),
    supabase.from('categories').select('id, nom'),
  ]);

  if (!profile) return null;

  // Créer un map des catégories
  const categoriesMap = new Map<string, string>();
  categories?.forEach(cat => categoriesMap.set(cat.id, cat.nom));

  // Enrichir les sessions avec le nom de catégorie
  const enrichedSessions = (sessions || []).map(session => ({
    ...session,
    categorie_nom: categoriesMap.get(session.categorie_id) || 'Inconnu',
  }));

  // Enrichir la progression avec le nom de catégorie
  const enrichedProgression = (progression || []).map(prog => ({
    ...prog,
    categorie_nom: categoriesMap.get(prog.categorie_id) || 'Inconnu',
  }));

  // Calculer le funnel
  const firstSession = sessions?.find(s => s.completed) || null;
  const firstExamen = examens?.find(e => e.is_completed) || null;
  const firstAchat = achats?.[achats.length - 1] || null;

  const funnel = {
    inscription: { 
      done: true, 
      date: profile.created_at 
    },
    onboarding: { 
      done: profile.has_completed_onboarding, 
      date: onboardingQuiz?.completed_at || null 
    },
    premiereSession: { 
      done: !!firstSession, 
      date: firstSession?.completed_at || null 
    },
    premierExamen: { 
      done: !!firstExamen, 
      date: firstExamen?.completed_at || null 
    },
    premierAchat: { 
      done: !!firstAchat, 
      date: firstAchat?.created_at || null 
    },
  };

  // Détecter les points de blocage
  const blocages: string[] = [];
  const now = new Date();
  const lastActivity = stats?.derniere_activite ? new Date(stats.derniere_activite) : new Date(profile.created_at);
  const daysSinceActivity = Math.floor((now.getTime() - lastActivity.getTime()) / (1000 * 60 * 60 * 24));

  // Blocage: pas d'onboarding complété
  if (!profile.has_completed_onboarding) {
    blocages.push("Onboarding non complété");
  }

  // Blocage: onboarding fait mais aucune session
  if (profile.has_completed_onboarding && !firstSession) {
    blocages.push("Aucune session d'entraînement après l'onboarding");
  }

  // Blocage: sessions faites mais jamais d'examen
  if (firstSession && !firstExamen) {
    blocages.push("Aucun examen blanc tenté");
  }

  // Blocage: inactif depuis plusieurs jours
  if (daysSinceActivity >= 3 && daysSinceActivity < 7) {
    blocages.push(`Inactif depuis ${daysSinceActivity} jours`);
  } else if (daysSinceActivity >= 7 && daysSinceActivity < 30) {
    blocages.push(`⚠️ Inactif depuis ${daysSinceActivity} jours`);
  } else if (daysSinceActivity >= 30) {
    blocages.push(`🚨 Inactif depuis ${daysSinceActivity} jours (churned?)`);
  }

  // Blocage: taux de réussite faible
  if (stats && stats.total_questions_repondues > 10) {
    const tauxReussite = (stats.total_bonnes_reponses / stats.total_questions_repondues) * 100;
    if (tauxReussite < 50) {
      blocages.push(`Taux de réussite faible (${Math.round(tauxReussite)}%)`);
    }
  }

  // Blocage: examens échoués répétés
  if (examens && examens.length >= 3) {
    const recentExamens = examens.slice(0, 3);
    const allFailed = recentExamens.every(e => e.is_completed && !e.passed);
    if (allFailed) {
      blocages.push("3 derniers examens échoués consécutivement");
    }
  }

  return {
    profile,
    onboardingQuiz: onboardingQuiz || null,
    statistiques: stats || null,
    gamification: gamification || null,
    recentSessions: enrichedSessions,
    recentExamens: examens || [],
    progression: enrichedProgression,
    achats: achats || [],
    funnel,
    blocages,
  };
}
