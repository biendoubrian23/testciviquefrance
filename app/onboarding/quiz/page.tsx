'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { ChevronRight, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import type { OnboardingQuestion, OnboardingAnswer } from '@/types/onboarding';

// Questions statiques pour l'onboarding (fallback si la DB n'est pas configurée)
const staticQuestions: OnboardingQuestion[] = [
  {
    id: '1',
    domaine: 'Principes et valeurs de la République',
    question: 'Selon l\'article 1er de la Constitution, la France est une République :',
    options: [
      { text: 'Indivisible, laïque, démocratique et sociale', isCorrect: true },
      { text: 'Fédérale, laïque et démocratique', isCorrect: false },
      { text: 'Indivisible, catholique et démocratique', isCorrect: false },
      { text: 'Divisible, laïque et monarchique', isCorrect: false },
    ],
    explication: 'L\'article 1er de la Constitution de 1958 définit la France comme une République indivisible, laïque, démocratique et sociale.',
    ordre: 1,
  },
  {
    id: '2',
    domaine: 'Principes et valeurs de la République',
    question: 'La loi de séparation des Églises et de l\'État, fondement de la laïcité française, date de :',
    options: [
      { text: '1789', isCorrect: false },
      { text: '1905', isCorrect: true },
      { text: '1958', isCorrect: false },
      { text: '1848', isCorrect: false },
    ],
    explication: 'La loi du 9 décembre 1905 établit la séparation des Églises et de l\'État.',
    ordre: 2,
  },
  {
    id: '3',
    domaine: 'Système institutionnel et politique',
    question: 'Qui promulgue les lois en France ?',
    options: [
      { text: 'Le Premier ministre', isCorrect: false },
      { text: 'Le Président de l\'Assemblée nationale', isCorrect: false },
      { text: 'Le Président de la République', isCorrect: true },
      { text: 'Le Conseil constitutionnel', isCorrect: false },
    ],
    explication: 'Selon l\'article 10 de la Constitution, le Président de la République promulgue les lois.',
    ordre: 3,
  },
  {
    id: '4',
    domaine: 'Droits et devoirs',
    question: 'À partir de quel âge le vote devient-il un droit en France ?',
    options: [
      { text: '16 ans', isCorrect: false },
      { text: '18 ans', isCorrect: true },
      { text: '21 ans', isCorrect: false },
      { text: '25 ans', isCorrect: false },
    ],
    explication: 'Depuis 1974, tout citoyen français âgé de 18 ans ou plus dispose du droit de vote.',
    ordre: 4,
  },
  {
    id: '5',
    domaine: 'Histoire, géographie et culture',
    question: 'La Déclaration des Droits de l\'Homme et du Citoyen a été adoptée en :',
    options: [
      { text: '1789', isCorrect: true },
      { text: '1848', isCorrect: false },
      { text: '1958', isCorrect: false },
      { text: '1945', isCorrect: false },
    ],
    explication: 'La DDHC a été adoptée le 26 août 1789 par l\'Assemblée nationale constituante.',
    ordre: 5,
  },
  {
    id: '6',
    domaine: 'Histoire, géographie et culture',
    question: 'Combien de régions administratives la France métropolitaine compte-t-elle depuis 2016 ?',
    options: [
      { text: '18', isCorrect: false },
      { text: '13', isCorrect: true },
      { text: '22', isCorrect: false },
      { text: '27', isCorrect: false },
    ],
    explication: 'Depuis la réforme territoriale de 2015, la France métropolitaine compte 13 régions.',
    ordre: 6,
  },
  {
    id: '7',
    domaine: 'Vivre dans la société française',
    question: 'L\'école est obligatoire en France pour les enfants âgés de :',
    options: [
      { text: '6 à 16 ans', isCorrect: false },
      { text: '3 à 16 ans', isCorrect: true },
      { text: '5 à 18 ans', isCorrect: false },
      { text: '6 à 18 ans', isCorrect: false },
    ],
    explication: 'Depuis 2019, l\'instruction est obligatoire de 3 à 16 ans.',
    ordre: 7,
  },
];

export default function OnboardingQuizPage() {
  const router = useRouter();
  const { user } = useAuth();
  const supabase = createClient();
  
  const [questions, setQuestions] = useState<OnboardingQuestion[]>(staticQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<OnboardingAnswer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentIndex === questions.length - 1;

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const { data, error } = await supabase
          .from('onboarding_questions')
          .select('*')
          .order('ordre');

        if (data && data.length > 0) {
          setQuestions(data as OnboardingQuestion[]);
        }
      } catch (error) {
        console.log('Utilisation des questions statiques');
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
    if (selectedOption === null) return;
    
    const isCorrect = currentQuestion.options[selectedOption].isCorrect;
    
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Évaluez votre niveau</h1>
              <p className="text-sm text-gray-500">
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
          <div className="mt-4 h-1 bg-gray-200">
            <div 
              className="h-full bg-primary-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Domain badge */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium border border-primary-200">
            {currentQuestion.domaine}
          </span>
        </div>

        {/* Question */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOption === index;
            const isCorrect = option.isCorrect;
            
            let optionClasses = 'w-full p-4 text-left border-2 transition-all duration-200 ';
            
            if (showExplanation) {
              if (isCorrect) {
                optionClasses += 'border-emerald-500 bg-emerald-50 text-emerald-900';
              } else if (isSelected && !isCorrect) {
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
                  {showExplanation && isCorrect && (
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  )}
                  {showExplanation && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="mb-8 p-6 bg-white border-l-4 border-primary-600">
            <h3 className="font-bold text-gray-900 mb-2">Explication</h3>
            <p className="text-gray-600">{currentQuestion.explication}</p>
          </div>
        )}

        {/* Action button */}
        <div className="flex justify-end">
          {!showExplanation ? (
            <button
              onClick={handleValidate}
              disabled={selectedOption === null}
              className={`px-8 py-3 font-semibold transition-all duration-200 flex items-center gap-2 ${
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
              className="px-8 py-3 bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all duration-200 flex items-center gap-2"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Calcul des résultats...
                </>
              ) : isLastQuestion ? (
                <>
                  Voir mes résultats
                  <ChevronRight className="w-5 h-5" />
                </>
              ) : (
                <>
                  Question suivante
                  <ChevronRight className="w-5 h-5" />
                </>
              )}
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
