// Types pour le système d'onboarding

export interface OnboardingQuestion {
  id: string;
  domaine: string;
  question: string;
  options: OnboardingOption[];
  explication: string;
  ordre: number;
}

export interface OnboardingOption {
  text: string;
  isCorrect?: boolean; // Optionnel pour compatibilité
  hash?: string; // Hash de la réponse pour vérification
}

export interface OnboardingAnswer {
  questionId: string;
  domaine: string;
  selectedOption: string;
  isCorrect: boolean;
}

export interface OnboardingQuizResult {
  id: string;
  user_id: string;
  score: number;
  total_questions: number;
  completed: boolean;
  answers: OnboardingAnswer[];
  strengths: string[];
  weaknesses: string[];
  created_at: string;
  completed_at: string | null;
}

export interface DomainScore {
  domaine: string;
  correct: number;
  total: number;
  percentage: number;
}
