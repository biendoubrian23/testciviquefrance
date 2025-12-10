'use client';

import { useState, useEffect, useCallback, useMemo, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useSupabase } from '@/hooks/useSupabase';
import { 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  XCircle,
  AlertTriangle,
  Trophy,
  Home,
  Loader2
} from 'lucide-react';
import { consumeExamCredit } from '@/lib/utils/examCredits';
import { getExamen, verifyAnswer, findCorrectIndex, ExamenBlanc, Question } from '@/lib/data/examens';

function ExamenBlancContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const supabase = useSupabase();

  // Récupérer le numéro d'examen depuis l'URL
  const examNumberFromUrl = searchParams.get('exam');

  // États principaux
  const [examen, setExamen] = useState<ExamenBlanc | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});
  const [timeRemaining, setTimeRemaining] = useState(45 * 60); // 45 minutes en secondes
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [examSessionId, setExamSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Calculer le score à partir du hash
  const getCorrectAnswerIndex = useCallback((questionId: number, correctHash: string) => {
    if (!examen) return 0;
    return findCorrectIndex(examen.numero, questionId, correctHash);
  }, [examen]);

  // Charger l'examen approprié au montage
  useEffect(() => {
    async function loadExamen() {
      if (!user?.id) {
        router.push('/login');
        return;
      }

      // Vérifier que le paramètre exam est présent
      if (!examNumberFromUrl) {
        console.log('❌ [NOUVEAU PAGE] Paramètre exam manquant, retour à la page des examens');
        router.push('/dashboard/examens');
        return;
      }

      const examNumber = parseInt(examNumberFromUrl, 10);
      
      // Valider le numéro d'examen (1-5)
      if (isNaN(examNumber) || examNumber < 1 || examNumber > 5) {
        console.log('❌ [NOUVEAU PAGE] Numéro d\'examen invalide:', examNumberFromUrl);
        router.push('/dashboard/examens');
        return;
      }

      try {
        console.log('🚀 [NOUVEAU PAGE] Chargement examen #' + examNumber + ' pour user:', user.id);
        
        // Charger l'examen spécifié via le paramètre URL
        const examenToLoad = getExamen(examNumber);

        console.log('📦 [NOUVEAU PAGE] Examen chargé:', examenToLoad);
        console.log('🔢 [NOUVEAU PAGE] Numéro examen:', examenToLoad?.numero);

        if (!examenToLoad) {
          // Si null, retour à la page des examens
          console.log('❌ [NOUVEAU PAGE] Aucun examen disponible, retour à la page des examens');
          router.push('/dashboard/examens');
          return;
        }

        console.log('✅ [NOUVEAU PAGE] Examen #' + examenToLoad.numero + ' va être chargé');
        console.log('📝 [NOUVEAU PAGE] Nombre de questions:', examenToLoad.questions.length);

        setExamen(examenToLoad);
        setQuestions(examenToLoad.questions);

        // Créer directement une nouvelle session d'examen
        // (on ne gère pas la reprise d'examen pour simplifier)
        const { data: newExam, error: createError } = await supabase
          .from('examens_blancs')
          .insert({
            user_id: user.id,
            exam_number: examenToLoad.numero,
            is_completed: false,
          })
          .select()
          .single();

        if (createError) {
          console.error('Erreur création examen:', createError);
          // Continuer quand même pour afficher l'examen
        }

        if (newExam) {
          setExamSessionId(newExam.id);
        }
        
        // Consommer un crédit d'examen
        const creditConsumed = await consumeExamCredit(user.id);
        if (!creditConsumed) {
          console.warn('Impossible de consommer le crédit d\'examen');
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Erreur chargement examen:', error);
        router.push('/dashboard/examens');
      }
    }

    loadExamen();
  }, [user, router, supabase, examNumberFromUrl]);

  // Timer
  useEffect(() => {
    if (isLoading || showResults || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isLoading, showResults, timeRemaining]);

  // Note: La sauvegarde de progression a été désactivée car les colonnes
  // user_answers et current_question n'existent pas dans la table

  // Gérer le choix d'une réponse
  const handleAnswerSelect = (answerIndex: number) => {
    if (showResults) return;
    
    const currentQuestion = questions[currentQuestionIndex];
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answerIndex
    }));
  };

  // Navigation
  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Soumettre l'examen
  const handleSubmitExam = async () => {
    if (!examSessionId || !examen || !user) return;
    
    setIsSubmitting(true);

    try {
      // Calculer le score
      let correctCount = 0;
      questions.forEach(question => {
        const userAnswer = userAnswers[question.id];
        if (userAnswer !== undefined && verifyAnswer(examen.numero, question.id, userAnswer, question.correctHash)) {
          correctCount++;
        }
      });

      const score = Math.round((correctCount / questions.length) * 100);
      const passed = correctCount >= 30; // 30/40 minimum

      // Mettre à jour dans la base de données
      await supabase
        .from('examens_blancs')
        .update({
          is_completed: true,
          completed_at: new Date().toISOString(),
          score: score,
          correct_answers: correctCount,
          total_questions: questions.length,
          passed: passed,
          time_taken: (examen.dureeMinutes * 60) - timeRemaining,
        })
        .eq('id', examSessionId);

      setShowResults(true);
    } catch (error) {
      console.error('Erreur soumission examen:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculer les statistiques
  const stats = useMemo(() => {
    if (!showResults || !examen) return null;

    let correctCount = 0;
    let incorrectCount = 0;
    let unanswered = 0;

    questions.forEach(question => {
      const userAnswer = userAnswers[question.id];
      if (userAnswer === undefined) {
        unanswered++;
      } else if (verifyAnswer(examen.numero, question.id, userAnswer, question.correctHash)) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });

    const score = Math.round((correctCount / questions.length) * 100);
    const passed = correctCount >= 30;

    return {
      correctCount,
      incorrectCount,
      unanswered,
      score,
      passed,
      total: questions.length
    };
  }, [showResults, examen, questions, userAnswers]);

  // Format du temps
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Chargement de l&apos;examen...</p>
        </div>
      </div>
    );
  }

  if (!examen || questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
          <p className="text-gray-600">Erreur de chargement de l&apos;examen</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answeredCount = Object.keys(userAnswers).length;

  // Vue des résultats
  if (showResults && stats) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 px-2 py-4 sm:p-6">
        <div className="max-w-5xl mx-auto">
          {/* En-tête résultats */}
          <div className="bg-white shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">
                Résultats - {examen.titre}
              </h1>
              <button
                onClick={() => router.push('/dashboard/examens')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <Home className="w-4 h-4" />
                Retour aux examens
              </button>
            </div>

            {/* Score principal */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-4 border border-blue-200">
                <div className="text-blue-600 text-sm font-medium mb-1">Score</div>
                <div className="text-3xl font-bold text-blue-900">{stats.score}%</div>
              </div>
              <div className="bg-green-50 p-4 border border-green-200">
                <div className="text-green-600 text-sm font-medium mb-1">Correctes</div>
                <div className="text-3xl font-bold text-green-900">{stats.correctCount}/{stats.total}</div>
              </div>
              <div className="bg-red-50 p-4 border border-red-200">
                <div className="text-red-600 text-sm font-medium mb-1">Incorrectes</div>
                <div className="text-3xl font-bold text-red-900">{stats.incorrectCount}</div>
              </div>
              <div className="bg-gray-50 p-4 border border-gray-200">
                <div className="text-gray-600 text-sm font-medium mb-1">Non répondues</div>
                <div className="text-3xl font-bold text-gray-900">{stats.unanswered}</div>
              </div>
            </div>

            {/* Résultat */}
            <div className={`p-4 border-2 ${stats.passed ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
              <div className="flex items-center gap-3">
                {stats.passed ? (
                  <>
                    <Trophy className="w-8 h-8 text-green-600" />
                    <div>
                      <div className="font-bold text-green-900 text-lg">Félicitations ! Vous avez réussi</div>
                      <div className="text-green-700 text-sm">Vous avez obtenu {stats.correctCount}/40 bonnes réponses (minimum requis: 30/40)</div>
                    </div>
                  </>
                ) : (
                  <>
                    <XCircle className="w-8 h-8 text-red-600" />
                    <div>
                      <div className="font-bold text-red-900 text-lg">Non admis</div>
                      <div className="text-red-700 text-sm">Il vous faut au moins 30/40 bonnes réponses. Vous en avez {stats.correctCount}/40.</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Correction détaillée */}
          <div className="space-y-4">
            {questions.map((question, index) => {
              const userAnswer = userAnswers[question.id];
              const correctIndex = getCorrectAnswerIndex(question.id, question.correctHash);
              const isCorrect = userAnswer !== undefined && verifyAnswer(examen.numero, question.id, userAnswer, question.correctHash);
              const wasAnswered = userAnswer !== undefined;

              return (
                <div key={question.id} className="bg-white border border-gray-200 p-3">
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border-2 font-bold ${
                      !wasAnswered ? 'border-gray-300 text-gray-400' :
                      isCorrect ? 'border-green-500 text-green-600' : 'border-red-500 text-red-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100">
                          {question.categorie}
                        </span>
                        {wasAnswered && (
                          isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600" />
                          )
                        )}
                      </div>
                      <p className="font-medium text-gray-900 mb-3">{question.question}</p>

                      {/* Options */}
                      <div className="space-y-2 mb-3">
                        {question.options.map((option, optIndex) => {
                          const isUserAnswer = userAnswer === optIndex;
                          const isCorrectAnswer = optIndex === correctIndex;

                          return (
                            <div
                              key={optIndex}
                              className={`p-3 border-2 ${
                                isCorrectAnswer
                                  ? 'border-green-500 bg-green-50'
                                  : isUserAnswer
                                  ? 'border-red-500 bg-red-50'
                                  : 'border-gray-200'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className={isCorrectAnswer ? 'font-medium text-green-900' : isUserAnswer ? 'text-red-900' : 'text-gray-700'}>
                                  {option}
                                </span>
                                <div className="flex items-center gap-2">
                                  {isCorrectAnswer && <CheckCircle className="w-5 h-5 text-green-600" />}
                                  {isUserAnswer && !isCorrectAnswer && <XCircle className="w-5 h-5 text-red-600" />}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Explication */}
                      <div className="bg-blue-50 border border-blue-200 p-3">
                        <p className="text-xs text-blue-900 leading-relaxed">{question.explication}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Vue de l'examen en cours
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* En-tête avec timer et progression */}
        <div className="bg-white shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                {examen.titre}
              </h1>
              <p className="text-sm text-gray-600">
                Question {currentQuestionIndex + 1} sur {questions.length} • {answeredCount} réponses
              </p>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 border-2 ${
              timeRemaining < 300 ? 'border-red-500 bg-red-50' : 'border-blue-500 bg-blue-50'
            }`}>
              <Clock className={`w-5 h-5 ${timeRemaining < 300 ? 'text-red-600' : 'text-blue-600'}`} />
              <span className={`font-mono font-bold ${timeRemaining < 300 ? 'text-red-900' : 'text-blue-900'}`}>
                {formatTime(timeRemaining)}
              </span>
            </div>
          </div>

          {/* Barre de progression */}
          <div className="w-full bg-gray-200 h-2">
            <div
              className="bg-blue-600 h-2 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Badge numéro d'examen */}
          <div className="mt-4 inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold">
            Examen #{examen.numero}
          </div>
        </div>

        {/* Question actuelle */}
        <div className="bg-white shadow-sm border border-gray-200 p-6 mb-6">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium mb-3">
              {currentQuestion.categorie}
            </span>
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Options de réponse */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = userAnswers[currentQuestion.id] === index;
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 border-2 transition-all ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 border-2 flex items-center justify-center ${
                      isSelected ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                    }`}>
                      {isSelected && <CheckCircle className="w-4 h-4 text-white" />}
                    </div>
                    <span className={isSelected ? 'font-medium text-blue-900' : 'text-gray-700'}>
                      {option}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation - Boutons en haut sur mobile */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <button
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Précédent</span>
          </button>

          {currentQuestionIndex === questions.length - 1 ? (
            <button
              onClick={handleSubmitExam}
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 transition-colors"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Envoi...
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Terminer
                </>
              )}
            </button>
          ) : (
            <button
              onClick={goToNextQuestion}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <span className="hidden sm:inline">Suivant</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Grille de navigation des questions - Dupliquée en dessous sur mobile */}
        <div className="bg-white shadow-sm border border-gray-200 p-4 sm:hidden">
          <p className="text-sm font-medium text-gray-700 mb-3">Navigation rapide</p>
          <div className="grid grid-cols-8 gap-2">
            {questions.map((q, index) => {
              const isAnswered = userAnswers[q.id] !== undefined;
              const isCurrent = index === currentQuestionIndex;

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`aspect-square flex items-center justify-center text-sm font-medium border-2 transition-colors ${
                    isCurrent
                      ? 'border-blue-600 bg-blue-600 text-white'
                      : isAnswered
                      ? 'border-green-500 bg-green-50 text-green-900'
                      : 'border-gray-300 text-gray-600 hover:border-blue-300'
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grille de navigation des questions - Version desktop */}
        <div className="bg-white shadow-sm border border-gray-200 p-4 hidden sm:block">
          <p className="text-sm font-medium text-gray-700 mb-3">Navigation rapide</p>
          <div className="grid grid-cols-10 gap-2">
            {questions.map((q, index) => {
              const isAnswered = userAnswers[q.id] !== undefined;
              const isCurrent = index === currentQuestionIndex;

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`aspect-square flex items-center justify-center text-sm font-medium border-2 transition-colors ${
                    isCurrent
                      ? 'border-blue-600 bg-blue-600 text-white'
                      : isAnswered
                      ? 'border-green-500 bg-green-50 text-green-900'
                      : 'border-gray-300 text-gray-600 hover:border-blue-300'
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// Wrapper avec Suspense pour useSearchParams
export default function ExamenBlancUnified() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Chargement de l&apos;examen...</p>
        </div>
      </div>
    }>
      <ExamenBlancContent />
    </Suspense>
  );
}