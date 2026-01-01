'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSupabase } from '@/hooks/useSupabase';
import { useAuth } from '@/contexts/AuthContext';
import { ChevronRight, Loader2 } from 'lucide-react';

// Configuration des étapes
const STEPS = [
  {
    id: 'deadline',
    step: 1,
    total: 2,
    title: 'Votre objectif',
    question: 'Quand devez-vous passer votre test civique ?',
    field: 'test_deadline',
    options: [
      { label: 'Moins d\'1 mois', value: 'urgent' },
      { label: '1 à 3 mois', value: 'soon' },
      { label: 'Plus de 3 mois', value: 'relaxed' },
      { label: 'Pas encore de date', value: 'no_date' },
      { label: 'Simple curiosité', value: 'exploration' },
    ],
  },
  {
    id: 'procedure',
    step: 2,
    total: 2,
    title: 'Votre démarche',
    question: 'Quelle est votre démarche administrative ?',
    field: 'procedure_type',
    options: [
      { label: 'Naturalisation', value: 'naturalization' },
      { label: 'Titre de séjour', value: 'residence_permit' },
      { label: 'Carte de résident', value: 'resident_card' },
      { label: 'Autre / Je ne sais pas', value: 'other' },
    ],
  },
];

export default function OnboardingProfilPage() {
  const router = useRouter();
  const { user } = useAuth();
  const supabase = useSupabase();

  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSaving, setIsSaving] = useState(false);

  const step = STEPS[currentStep];
  const progress = ((currentStep + 1) / STEPS.length) * 100;
  const isLastStep = currentStep === STEPS.length - 1;

  const handleSelectOption = (value: string) => {
    setSelectedOption(value);
  };

  const handleNext = async () => {
    // Sauvegarder la réponse
    const newAnswers = { ...answers };
    if (selectedOption) {
      newAnswers[step.field] = selectedOption;
    }
    setAnswers(newAnswers);

    if (isLastStep) {
      // Sauvegarder dans la base de données
      await saveProfile(newAnswers);
    } else {
      // Passer à l'étape suivante
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    }
  };

  const handleSkip = async () => {
    if (isLastStep) {
      // Sauvegarder ce qu'on a et continuer
      await saveProfile(answers);
    } else {
      // Passer à l'étape suivante sans sauvegarder cette réponse
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    }
  };

  const saveProfile = async (data: Record<string, string>) => {
    setIsSaving(true);

    try {
      if (user) {
        await supabase
          .from('profiles')
          .update({
            test_deadline: data.test_deadline || null,
            procedure_type: data.procedure_type || null,
            profile_completed_at: new Date().toISOString(),
          })
          .eq('id', user.id);
      }
    } catch (error) {
      console.error('Erreur sauvegarde profil:', error);
    }

    // Rediriger vers le quiz
    router.push('/onboarding/quiz');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold text-gray-900">
                Étape {step.step}/{step.total} • {step.title}
              </h1>
            </div>
            <div className="text-right">
              <span className="text-sm font-medium text-primary-600">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
          {/* Progress bar */}
          <div className="mt-2 h-1 bg-gray-200">
            <div
              className="h-full bg-primary-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Question */}
        <h2 className="text-lg font-bold text-gray-900 mb-6">
          {step.question}
        </h2>

        {/* Options - Liste verticale */}
        <div className="flex flex-col space-y-2 mb-6">
          {step.options.map((option) => {
            const isSelected = selectedOption === option.value;

            return (
              <button
                key={option.value}
                onClick={() => handleSelectOption(option.value)}
                className={`w-full p-3 text-left border-2 transition-all duration-200 text-sm ${
                  isSelected
                    ? 'border-primary-600 bg-primary-50 text-primary-900'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="font-medium">{option.label}</span>
              </button>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          {/* Skip link */}
          <button
            onClick={handleSkip}
            disabled={isSaving}
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Passer cette étape →
          </button>

          {/* Continue button */}
          <button
            onClick={handleNext}
            disabled={selectedOption === null || isSaving}
            className={`px-6 py-2.5 font-semibold text-sm transition-all duration-200 flex items-center gap-2 ${
              selectedOption !== null && !isSaving
                ? 'bg-primary-600 text-white hover:bg-primary-700'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isSaving ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Chargement...
              </>
            ) : isLastStep ? (
              <>
                Commencer le quiz
                <ChevronRight className="w-4 h-4" />
              </>
            ) : (
              <>
                Continuer
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </main>
    </div>
  );
}
