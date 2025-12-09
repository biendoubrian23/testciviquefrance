'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSupabase } from '@/hooks/useSupabase';
import { useAuth } from '@/contexts/AuthContext';
import { ChevronRight, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import type { OnboardingQuestion, OnboardingAnswer } from '@/types/onboarding';

export default function OnboardingQuizPage() {
  const router = useRouter();
  const { user } = useAuth();
  const supabase = useSupabase();
  
  const [questions, setQuestions] = useState<OnboardingQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<OnboardingAnswer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;
  const isLastQuestion = currentIndex === questions.length - 1;

  // Charger les questions depuis la base de données
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const { data, error } = await supabase
          .from('onboarding_questions')
          .select('*')
          .order('ordre');

        if (error) throw error;

        if (data && data.length > 0) {
          setQuestions(data as OnboardingQuestion[]);
        }
      } catch (error) {
        console.error('Erreur chargement questions:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadQuestions();
  }, [supabase]);

  const handleSelectOption = (index: number) => {
    if (showExplanation) return;
    setSelectedOption(index);
  };

  const handleValidate = () => {
    if (selectedOption === null || !currentQuestion) return;
    
    const isCorrect = currentQuestion.options[selectedOption].isCorrect === true;
    
    const answer: OnboardingAnswer = {
      questionId: currentQuestion.id,
      domaine: currentQuestion.domaine,
      selectedOption: currentQuestion.options[selectedOption].text,
      isCorrect,
    };
    
    setAnswers([...answers, answer]);
    setShowExplanation(true);
  };

  const handleNext = async () => {
    if (isLastQuestion) {
      // Calculer le score final et sauvegarder
      setIsSaving(true);
      
      const finalAnswers = [...answers];
      const score = finalAnswers.filter(a => a.isCorrect).length;
      
      // Calculer les points forts et faibles par domaine
      const domainResults: { [key: string]: { correct: number; total: number } } = {};
      
      finalAnswers.forEach(answer => {
        if (!domainResults[answer.domaine]) {
          domainResults[answer.domaine] = { correct: 0, total: 0 };
        }
        domainResults[answer.domaine].total++;
        if (answer.isCorrect) {
          domainResults[answer.domaine].correct++;
        }
      });

      const strengths: string[] = [];
      const weaknesses: string[] = [];

      Object.entries(domainResults).forEach(([domain, result]) => {
        const percentage = (result.correct / result.total) * 100;
        if (percentage >= 50) {
          strengths.push(domain);
        } else {
          weaknesses.push(domain);
        }
      });

      // Sauvegarder dans Supabase si l'utilisateur est connecté
      if (user) {
        try {
          await supabase.from('onboarding_quiz').upsert({
            user_id: user.id,
            score,
            total_questions: questions.length,
            completed: true,
            answers: finalAnswers,
            strengths,
            weaknesses,
            completed_at: new Date().toISOString(),
          });
        } catch (error) {
          console.error('Erreur sauvegarde quiz:', error);
        }
      }

      // Stocker les résultats en session storage pour la page suivante
      sessionStorage.setItem('onboardingResults', JSON.stringify({
        score,
        totalQuestions: questions.length,
        answers: finalAnswers,
        strengths,
        weaknesses,
      }));

      router.push('/onboarding/resultats');
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    }
  };

  // Afficher le loader pendant le chargement
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-10 h-10 animate-spin text-primary-600 mx-auto mb-4" />
          <p className="text-gray-600">Chargement du quiz...</p>
        </div>
      </div>
    );
  }

  // Si pas de questions chargées
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Aucune question disponible.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-lg font-bold text-gray-900">Évaluez votre niveau</h1>
              <p className="text-xs text-gray-500">
                Question {currentIndex + 1} sur {questions.length}
              </p>
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
      <main className="max-w-3xl mx-auto px-4 py-4">
        {/* Domain badge */}
        <div className="mb-3">
          <span className="inline-block px-2 py-0.5 bg-primary-50 text-primary-700 text-xs font-medium border border-primary-200">
            {currentQuestion.domaine}
          </span>
        </div>

        {/* Question */}
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-2 mb-4">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOption === index;
            const isCorrectOption = option.isCorrect === true;
            
            let optionClasses = 'w-full p-3 text-left border-2 transition-all duration-200 text-sm ';
            
            if (showExplanation) {
              if (isCorrectOption) {
                optionClasses += 'border-emerald-500 bg-emerald-50 text-emerald-900';
              } else if (isSelected && !isCorrectOption) {
                optionClasses += 'border-red-500 bg-red-50 text-red-900';
              } else {
                optionClasses += 'border-gray-200 bg-gray-50 text-gray-500';
              }
            } else {
              if (isSelected) {
                optionClasses += 'border-primary-600 bg-primary-50 text-primary-900';
              } else {
                optionClasses += 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50';
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleSelectOption(index)}
                disabled={showExplanation}
                className={optionClasses}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option.text}</span>
                  {showExplanation && isCorrectOption && (
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  )}
                  {showExplanation && isSelected && !isCorrectOption && (
                    <XCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="mb-4 p-3 bg-white border-l-4 border-primary-600">
            <h3 className="font-bold text-gray-900 text-sm mb-1">Explication</h3>
            <p className="text-gray-600 text-sm">{currentQuestion.explication}</p>
          </div>
        )}

        {/* Action button */}
        <div className="flex justify-end">
          {!showExplanation ? (
            <button
              onClick={handleValidate}
              disabled={selectedOption === null}
              className={`px-6 py-2.5 font-semibold text-sm transition-all duration-200 flex items-center gap-2 ${
                selectedOption !== null
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Valider
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={isSaving}
              className="px-6 py-2.5 bg-primary-600 text-white font-semibold text-sm hover:bg-primary-700 transition-all duration-200 flex items-center gap-2"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Calcul des résultats...
                </>
              ) : isLastQuestion ? (
                <>
                  Voir mes résultats
                  <ChevronRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  Question suivante
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
