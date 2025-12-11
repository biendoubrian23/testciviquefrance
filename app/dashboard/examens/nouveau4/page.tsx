'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
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
import { EXAMEN_4, verifyAnswerExam4, findCorrectIndexExam4 } from '@/lib/data/examens/examen4';

// ==================== EXAMEN BLANC #4 ====================
const EXAM_NUMBER = 4;
const QUESTIONS_EXAMEN = EXAMEN_4.questions;

type ExamenPhase = 'en_cours' | 'termine' | 'revision';

interface UserAnswer {
  questionId: number;
  selectedIndex: number | null;
}

export default function NouvelExamen4Page() {
  const router = useRouter();
  const { user } = useAuth();
  const supabase = useSupabase();
  
  const [phase, setPhase] = useState<ExamenPhase>('en_cours');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>(
    QUESTIONS_EXAMEN.map(q => ({ questionId: q.id, selectedIndex: null }))
  );
  const [timeRemaining, setTimeRemaining] = useState(45 * 60);
  const [revisionQuestionIndex, setRevisionQuestionIndex] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Charger ou créer une session d'examen au démarrage
  useEffect(() => {
    if (!user) return;

    const userId = user.id;

    async function loadOrCreateSession() {
      setIsLoading(true);
      
      try {
        // Chercher un examen en cours non terminé POUR CET EXAMEN SPÉCIFIQUE
        const { data: existingExam, error: fetchError } = await supabase
          .from('examens_blancs')
          .select('id, current_answers, current_question_index, time_remaining, is_completed')
          .eq('user_id', userId)
          .eq('exam_number', EXAM_NUMBER)
          .eq('is_completed', false)
          .maybeSingle();

        if (existingExam && !fetchError) {
          console.log(`📖 Reprise de l'examen ${EXAM_NUMBER} en cours (session ${existingExam.id})`);
          setSessionId(existingExam.id);
          
          if (existingExam.current_answers && Array.isArray(existingExam.current_answers)) {
            setUserAnswers(existingExam.current_answers);
          }
          
          if (typeof existingExam.current_question_index === 'number') {
            setCurrentQuestionIndex(existingExam.current_question_index);
          }
          
          if (typeof existingExam.time_remaining === 'number' && existingExam.time_remaining > 0) {
            setTimeRemaining(existingExam.time_remaining);
          } else {
            setTimeRemaining(0);
          }
        } else {
          console.log(`✨ Création d'une nouvelle session pour l'examen ${EXAM_NUMBER}`);
          const initialAnswers = QUESTIONS_EXAMEN.map(q => ({ questionId: q.id, selectedIndex: null }));
          
          const { data: newExam, error: insertError } = await supabase
            .from('examens_blancs')
            .insert({
              user_id: userId,
              exam_number: EXAM_NUMBER,
              score: 0,
              total_questions: 40,
              is_completed: false,
              current_answers: initialAnswers,
              current_question_index: 0,
              time_remaining: 45 * 60,
              started_at: new Date().toISOString(),
              last_saved_at: new Date().toISOString()
            })
            .select('id')
            .single();

          if (newExam && !insertError) {
            setSessionId(newExam.id);
            setUserAnswers(initialAnswers);
            setCurrentQuestionIndex(0);
            setTimeRemaining(45 * 60);

            console.log(`💳 Consommation d'un crédit pour l'examen ${EXAM_NUMBER}`);
            const creditConsumed = await consumeExamCredit(userId);
            if (!creditConsumed) {
              console.warn('⚠️ Impossible de consommer un crédit d\'examen');
            }
          } else {
            console.error('Erreur création session:', insertError);
          }
        }
      } catch (error) {
        console.error('Erreur chargement session:', error);
      }
      
      setIsLoading(false);
    }

    loadOrCreateSession();
  }, [user, supabase]);

  // Sauvegarder la progression automatiquement
  const saveProgress = useCallback(async () => {
    if (!sessionId || !user || phase !== 'en_cours') return;

    try {
      await supabase
        .from('examens_blancs')
        .update({
          current_answers: userAnswers,
          current_question_index: currentQuestionIndex,
          time_remaining: timeRemaining,
          last_saved_at: new Date().toISOString()
        })
        .eq('id', sessionId);
    } catch (error) {
      console.error('Erreur sauvegarde progression:', error);
    }
  }, [sessionId, user, userAnswers, currentQuestionIndex, timeRemaining, phase, supabase]);

  // Sauvegarder à chaque changement de réponse ou de question
  useEffect(() => {
    if (!sessionId || phase !== 'en_cours') return;
    
    const timeoutId = setTimeout(() => {
      saveProgress();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [userAnswers, currentQuestionIndex, saveProgress, sessionId, phase]);

  // Sauvegarder le temps restant toutes les 10 secondes
  useEffect(() => {
    if (!sessionId || phase !== 'en_cours') return;

    const interval = setInterval(() => {
      saveProgress();
    }, 10000);

    return () => clearInterval(interval);
  }, [sessionId, phase, saveProgress]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectAnswer = (optionIndex: number) => {
    setUserAnswers(prev => 
      prev.map((answer, idx) => 
        idx === currentQuestionIndex 
          ? { ...answer, selectedIndex: optionIndex }
          : answer
      )
    );
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS_EXAMEN.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleGoToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const calculateScore = useCallback(() => {
    return userAnswers.reduce((acc, answer, idx) => {
      const question = QUESTIONS_EXAMEN[idx];
      if (answer.selectedIndex !== null && verifyAnswerExam4(question.id, answer.selectedIndex, question.correctHash)) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }, [userAnswers]);

  const handleFinishExam = useCallback(async () => {
    setPhase('termine');
    setIsSaving(true);

    const score = calculateScore();
    const tempsTotal = 45 * 60 - timeRemaining;
    const passed = score >= 32;

    if (user && sessionId) {
      try {
        await supabase
          .from('examens_blancs')
          .update({
            score: score,
            temps_total: tempsTotal,
            passed: passed,
            is_completed: true,
            completed_at: new Date().toISOString(),
            current_answers: userAnswers
          })
          .eq('id', sessionId);
      } catch (error) {
        console.error('Erreur sauvegarde examen:', error);
      }
    }

    setIsSaving(false);
  }, [calculateScore, timeRemaining, user, supabase, sessionId, userAnswers]);

  // Timer
  useEffect(() => {
    if (phase !== 'en_cours' || isLoading) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [phase, isLoading, handleFinishExam]);

  const score = calculateScore();
  const percentage = Math.round((score / 40) * 100);
  const passed = score >= 32;

  const handleStartRevision = () => {
    setPhase('revision');
    setRevisionQuestionIndex(0);
  };

  const handleRevisionPrevious = () => {
    if (revisionQuestionIndex > 0) {
      setRevisionQuestionIndex(revisionQuestionIndex - 1);
    }
  };

  const handleRevisionNext = () => {
    if (revisionQuestionIndex < QUESTIONS_EXAMEN.length - 1) {
      setRevisionQuestionIndex(revisionQuestionIndex + 1);
    }
  };

  // Écran de chargement
  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white border border-gray-200 p-8 text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary-600 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Chargement de l&apos;examen 4...</h2>
          <p className="text-gray-500 text-sm">
            Récupération de votre progression en cours
          </p>
        </div>
      </div>
    );
  }

  // Phase EN COURS
  if (phase === 'en_cours') {
    const currentQuestion = QUESTIONS_EXAMEN[currentQuestionIndex];
    const currentAnswer = userAnswers[currentQuestionIndex];
    const answeredCount = userAnswers.filter(a => a.selectedIndex !== null).length;

    return (
      <div className="max-w-6xl mx-auto px-0 sm:px-4 py-1 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-6">
          
          {/* Panneau gauche - Progression */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white border border-gray-200 p-3 sm:p-4 lg:sticky lg:top-4">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">Progression</h3>
                <div className="flex items-center gap-2 text-primary-600">
                  <Clock className="w-4 h-4" />
                  <span className={`font-mono font-bold ${timeRemaining < 300 ? 'text-red-600' : ''}`}>
                    {formatTime(timeRemaining)}
                  </span>
                </div>
              </div>
              
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                {answeredCount}/40 questions répondues
              </p>

              <div className="grid grid-cols-10 sm:grid-cols-8 gap-1">
                {QUESTIONS_EXAMEN.map((_, idx) => {
                  const isAnswered = userAnswers[idx].selectedIndex !== null;
                  const isCurrent = idx === currentQuestionIndex;
                  
                  return (
                    <button
                      key={idx}
                      onClick={() => handleGoToQuestion(idx)}
                      className={`w-7 h-7 sm:w-8 sm:h-8 text-xs font-medium border transition-colors ${
                        isCurrent
                          ? 'bg-primary-600 text-white border-primary-600'
                          : isAnswered
                            ? 'bg-emerald-100 text-emerald-700 border-emerald-300'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              <div className="hidden sm:block mt-4 pt-4 border-t border-gray-100 space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-primary-600"></div>
                  <span>Question actuelle</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-emerald-100 border border-emerald-300"></div>
                  <span>Répondue</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-white border border-gray-200"></div>
                  <span>Non répondue</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panneau droit - Question */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white border-0 sm:border sm:border-gray-200 p-2 sm:p-6">
              <div className="flex sm:hidden items-center justify-between mb-3 pb-2 border-b border-gray-100">
                <span className="text-xs text-gray-500">{answeredCount}/40 répondues</span>
                <div className="flex items-center gap-1 text-primary-600">
                  <Clock className="w-3 h-3" />
                  <span className={`font-mono text-sm font-bold ${timeRemaining < 300 ? 'text-red-600' : ''}`}>
                    {formatTime(timeRemaining)}
                  </span>
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <p className="text-xs sm:text-sm text-gray-500 mb-1">{currentQuestion.categorie}</p>
                <h2 className="text-base sm:text-lg font-bold text-gray-900">
                  Question {currentQuestionIndex + 1} / 40
                </h2>
              </div>

              <p className="text-gray-900 text-base sm:text-lg mb-4 sm:mb-6">{currentQuestion.question}</p>

              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {currentQuestion.options.map((option, optIdx) => {
                  const isSelected = currentAnswer.selectedIndex === optIdx;
                  
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectAnswer(optIdx)}
                      className={`w-full text-left p-3 sm:p-4 border-2 transition-all ${
                        isSelected
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center text-xs sm:text-sm font-bold ${
                          isSelected
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {String.fromCharCode(65 + optIdx)}
                        </div>
                        <span className="text-sm sm:text-base text-gray-800">{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className={`flex items-center gap-2 px-4 py-2 border border-gray-200 ${
                    currentQuestionIndex === 0
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Précédent
                </button>

                {currentQuestionIndex === QUESTIONS_EXAMEN.length - 1 ? (
                  <button
                    onClick={handleFinishExam}
                    className="flex items-center gap-2 px-6 py-2 bg-primary-600 text-white font-semibold hover:bg-primary-700"
                  >
                    Terminer l&apos;examen
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white hover:bg-gray-900"
                  >
                    Suivant
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Phase TERMINÉ
  if (phase === 'termine') {
    return (
      <div className="max-w-2xl mx-auto px-0 sm:px-4 py-2 sm:py-12">
        <div className="bg-white border border-gray-200 p-2 sm:p-8 text-center">
          {isSaving ? (
            <div className="py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Enregistrement de vos résultats...</p>
            </div>
          ) : (
            <>
              <div className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center ${
                passed ? 'bg-emerald-100' : 'bg-red-100'
              }`}>
                {passed ? (
                  <Trophy className="w-10 h-10 text-emerald-600" />
                ) : (
                  <AlertTriangle className="w-10 h-10 text-red-500" />
                )}
              </div>

              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {passed ? 'Félicitations !' : 'Examen non validé'}
              </h1>
              <p className="text-gray-600 mb-8">
                {passed 
                  ? 'Vous avez réussi cette session d\'examen blanc !' 
                  : 'Vous devez obtenir au moins 32/40 (80%) pour réussir.'}
              </p>

              <div className={`inline-block px-8 py-6 mb-8 ${
                passed ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'
              }`}>
                <div className={`text-5xl font-bold mb-2 ${passed ? 'text-emerald-600' : 'text-red-500'}`}>
                  {score}/40
                </div>
                <div className="text-gray-600">
                  {percentage}% de réussite
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                <div className="p-4 bg-gray-50">
                  <div className="text-2xl font-bold text-emerald-600">{score}</div>
                  <div className="text-sm text-gray-500">Bonnes réponses</div>
                </div>
                <div className="p-4 bg-gray-50">
                  <div className="text-2xl font-bold text-red-500">{40 - score}</div>
                  <div className="text-sm text-gray-500">Mauvaises réponses</div>
                </div>
                <div className="p-4 bg-gray-50">
                  <div className="text-2xl font-bold text-gray-700">
                    {formatTime(45 * 60 - timeRemaining)}
                  </div>
                  <div className="text-sm text-gray-500">Temps utilisé</div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleStartRevision}
                  className="w-full bg-primary-600 text-white py-3 px-4 font-semibold hover:bg-primary-700 transition-colors"
                >
                  Revoir les réponses
                </button>
                <button
                  onClick={() => router.push('/dashboard/examens')}
                  className="w-full bg-gray-100 text-gray-700 py-3 px-4 font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Retour aux examens
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // Phase RÉVISION
  if (phase === 'revision') {
    const currentQuestion = QUESTIONS_EXAMEN[revisionQuestionIndex];
    const currentAnswer = userAnswers[revisionQuestionIndex];
    const correctIndex = findCorrectIndexExam4(currentQuestion.id, currentQuestion.correctHash);
    const isCorrect = currentAnswer.selectedIndex === correctIndex;
    const wasAnswered = currentAnswer.selectedIndex !== null;

    return (
      <div className="max-w-4xl mx-auto px-0 sm:px-4 py-1 sm:py-6">
        <div className="bg-white border border-gray-200 p-2 sm:p-4 mb-2 sm:mb-6 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-gray-900">Révision des réponses</h2>
            <p className="text-sm text-gray-500">Question {revisionQuestionIndex + 1} / 40</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm">
              <span className="text-emerald-600 font-bold">{score}</span>
              <span className="text-gray-400"> / 40</span>
            </div>
            <button
              onClick={() => router.push('/dashboard/examens')}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Terminer la révision
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 p-2 sm:p-6">
          <div className={`inline-flex items-center gap-2 px-2 py-1 mb-2 text-sm font-medium ${
            isCorrect
              ? 'bg-emerald-50 text-emerald-700'
              : 'bg-red-50 text-red-700'
          }`}>
            {isCorrect ? (
              <>
                <CheckCircle className="w-4 h-4" />
                Bonne réponse
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4" />
                {wasAnswered ? 'Mauvaise réponse' : 'Non répondue'}
              </>
            )}
          </div>

          <p className="text-sm text-gray-500 mb-2">{currentQuestion.categorie}</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">{currentQuestion.question}</h3>

          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option, optIdx) => {
              const isCorrectOption = optIdx === correctIndex;
              const isUserChoice = currentAnswer.selectedIndex === optIdx;

              let optionClass = 'border-gray-200 bg-white';
              if (isCorrectOption) {
                optionClass = 'border-emerald-500 bg-emerald-50';
              } else if (isUserChoice && !isCorrectOption) {
                optionClass = 'border-red-500 bg-red-50';
              }

              return (
                <div
                  key={optIdx}
                  className={`p-4 border-2 ${optionClass}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 flex items-center justify-center text-sm font-bold ${
                        isCorrectOption
                          ? 'bg-emerald-600 text-white'
                          : isUserChoice
                            ? 'bg-red-500 text-white'
                            : 'bg-gray-100 text-gray-600'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </div>
                      <span className="text-gray-800">{option}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {isCorrectOption && (
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      )}
                      {isUserChoice && !isCorrectOption && (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                      {isUserChoice && (
                        <span className="text-xs text-gray-500">Votre réponse</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-primary-50 border border-primary-200 p-4">
            <h4 className="font-semibold text-primary-800 mb-2">Explication</h4>
            <p className="text-primary-700 text-sm">{currentQuestion.explication}</p>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex flex-wrap justify-center gap-1 mb-4">
              {QUESTIONS_EXAMEN.map((q, idx) => {
                const answer = userAnswers[idx];
                const qCorrectIndex = findCorrectIndexExam4(q.id, q.correctHash);
                const correct = answer.selectedIndex === qCorrectIndex;
                
                return (
                  <button
                    key={idx}
                    onClick={() => setRevisionQuestionIndex(idx)}
                    className={`w-2 h-2 rounded-full ${
                      idx === revisionQuestionIndex
                        ? 'bg-primary-600'
                        : correct
                          ? 'bg-emerald-400'
                          : 'bg-red-400'
                    }`}
                  />
                );
              })}
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={handleRevisionPrevious}
                disabled={revisionQuestionIndex === 0}
                className={`flex items-center gap-2 px-4 py-2 border border-gray-200 ${
                  revisionQuestionIndex === 0
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                Précédent
              </button>

              <span className="text-sm text-gray-500">
                {revisionQuestionIndex + 1} / 40
              </span>

              <button
                onClick={handleRevisionNext}
                disabled={revisionQuestionIndex === QUESTIONS_EXAMEN.length - 1}
                className={`flex items-center gap-2 px-4 py-2 border border-gray-200 ${
                  revisionQuestionIndex === QUESTIONS_EXAMEN.length - 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                Suivant
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
