// Types pour le dashboard admin

export interface Profile {
  id: string;
  email: string;
  prenom: string | null;
  nom: string | null;
  avatar_url: string | null;
  credits: number; // Ancien système - à ignorer
  exam_credits: number; // Crédits examens achetés via Pack Examen
  subscription_exams_used: number; // Examens utilisés de l'abonnement cette semaine
  is_premium: boolean;
  premium_expires_at: string | null;
  stripe_price_id: string | null;
  stripe_customer_id: string | null;
  subscription_status: string | null;
  unlock_level_count: number;
  no_timer_enabled: boolean;
  flashcards_2_themes: boolean;
  flashcards_5_themes: boolean;
  last_purchase_at: string | null;
  has_completed_onboarding: boolean;
  // Nouvelles colonnes d'objectifs utilisateur
  test_deadline: 'urgent' | 'soon' | 'relaxed' | 'no_date' | 'exploration' | null;
  procedure_type: 'naturalization' | 'residence_permit' | 'renewal' | 'other' | null;
  profile_completed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  nom: string;
  description: string | null;
  icone: string | null;
  couleur: string;
  ordre: number;
  created_at: string;
}

export interface Question {
  id: string;
  categorie_id: string;
  question: string;
  type: 'qcm' | 'vrai_faux' | 'texte';
  explication: string | null;
  difficulte: number;
  is_premium: boolean;
  created_at: string;
}

export interface Reponse {
  id: string;
  question_id: string;
  texte: string;
  is_correct: boolean;
  ordre: number;
}

export interface Resultat {
  id: string;
  user_id: string;
  question_id: string;
  reponse_donnee: string | null;
  is_correct: boolean;
  temps_reponse: number | null;
  created_at: string;
}

export interface ExamenBlanc {
  id: string;
  user_id: string;
  score: number;
  total_questions: number;
  temps_total: number | null;
  is_completed: boolean;
  passed: boolean | null;
  exam_number: number;
  started_at: string;
  completed_at: string | null;
}

export interface Statistique {
  id: string;
  user_id: string;
  total_questions_repondues: number;
  total_bonnes_reponses: number;
  total_examens_blancs: number;
  total_examens_reussis: number;
  meilleur_score: number;
  temps_total_etude: number;
  serie_actuelle: number;
  meilleure_serie: number;
  derniere_activite: string | null;
  updated_at: string;
}

export interface SessionQuiz {
  id: string;
  user_id: string;
  categorie_id: string;
  niveau: number;
  score: number;
  total_questions: number;
  temps_moyen: number | null;
  temps_total: number | null;
  completed: boolean;
  started_at: string;
  completed_at: string | null;
}

export interface ProgressionNiveau {
  id: string;
  user_id: string;
  categorie_id: string;
  niveau: number;
  is_unlocked: boolean;
  is_completed: boolean;
  meilleur_score: number;
  tentatives: number;
  derniere_tentative: string | null;
  created_at: string;
}

export interface Gamification {
  id: string;
  user_id: string;
  points_total: number;
  streak_jours: number;
  meilleure_serie: number;
  derniere_activite: string | null;
  created_at: string;
}

export interface Achat {
  id: string;
  user_id: string;
  product_type: 'pack_standard' | 'pack_premium' | 'pack_examen' | 'unlock_level' | 'no_timer' | 'flashcards_2' | 'flashcards_5' | 'flashcards_2_themes' | 'flashcards_5_themes';
  amount: number;
  currency: string;
  stripe_payment_id: string | null;
  stripe_customer_id: string | null;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  created_at: string;
  completed_at: string | null;
}

export interface OnboardingQuiz {
  id: string;
  user_id: string;
  score: number;
  total_questions: number;
  completed: boolean;
  answers: any[];
  strengths: string[];
  weaknesses: string[];
  created_at: string;
  completed_at: string | null;
}

// Stats agrégées pour le dashboard
export interface DashboardStats {
  totalUsers: number;
  newUsersToday: number;
  newUsersThisWeek: number;
  newUsersThisMonth: number;
  premiumUsers: number;
  trialingUsers: number;
  activeUsersToday: number;
  totalQuestions: number;
  totalCategories: number;
  totalExamens: number;
  examensReussis: number;
  tauxReussiteExamens: number;
  totalSessions: number;
  totalRevenus: number;
  revenusThisMonth: number;
  totalAchats: number;
  questionsRepondues: number;
  tempsEtudeTotal: number;
}

export interface UserWithStats extends Profile {
  statistiques?: Statistique;
  gamification?: Gamification;
  achats_count?: number;
  examens_count?: number;
}

export interface RevenueData {
  date: string;
  amount: number;
  count: number;
}

export interface ActivityData {
  date: string;
  users: number;
  sessions: number;
  examens: number;
}
