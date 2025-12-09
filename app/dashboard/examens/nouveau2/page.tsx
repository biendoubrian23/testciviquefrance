'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
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
import { getNextExamenForUser, ExamenBlanc, Question, verifyAnswer as verifyAnswerUtil, findCorrectIndex } from '@/lib/data/examens';

interface UserAnswer {
  questionId: number;
  selectedIndex: number | null;
}

type Phase = 'en_cours' | 'termine' | 'revision';

export default function ExamenBlanc2() {
  const router = useRouter();
  const { user, profile } = useAuth();
  const supabase = useSupabase();

  // État de l'examen
  const [examen, setExamen] = useState<ExamenBlanc | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  
  // État du quiz
  const [phase, setPhase] = useState<Phase>('en_cours');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(45 * 60); // 45 minutes
  const [revisionQuestionIndex, setRevisionQuestionIndex] = useState(0);

  // Fonction de vérification adaptée au numéro d'examen
  const verifyAnswer = useCallback((questionId: number, userAnswerIndex: number, correctHash: string) => {
    if (!examen) return false;
    return verifyAnswerUtil(examen.numero, questionId, userAnswerIndex, correctHash);
  }, [examen]);

  // Trouver l'index correct adapté au numéro d'examen
  const findCorrectIndexAdapted = useCallback((questionId: number, correctHash: string) => {
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

      try {
        // Toujours charger le prochain examen pour l'utilisateur
        const examenToLoad = await getNextExamenForUser(user.id, supabase);

        if (!examenToLoad) {
          // Si null, cela signifie qu'il faut faire l'examen 1 (ancien système)
          console.log('Redirection vers examen #1');
          router.push('/dashboard/examens/nouveau');
          return;
        }

        setExamen(examenToLoad);
        setQuestions(examenToLoad.questions);

        // Vérifier s'il y a un examen en cours
        const { data: existingExam, error: fetchError } = await supabase
          .from('examens_blancs')
          .select('*')
          .eq('user_id', user.id)
          .eq('is_completed', false)
          .eq('exam_number', examenToLoad.numero)
          .order('started_at', { ascending: false })
          .limit(1)
          .maybeSingle();

        if (existingExam && !fetchError) {
          // Reprendre l'examen existant
          setSessionId(existingExam.id);

          if (existingExam.current_answers && Array.isArray(existingExam.current_answers)) {
            setUserAnswers(existingExam.current_answers);
          } else {
            setUserAnswers(examenToLoad.questions.map(q => ({ questionId: q.id, selectedIndex: null })));
          }

          if (typeof existingExam.current_question_index === 'number') {
            setCurrentQuestionIndex(existingExam.current_question_index);
          }

          if (typeof existingExam.time_remaining === 'number' && existingExam.time_remaining > 0) {
            setTimeRemaining(existingExam.time_remaining);
          }
        } else {
          // Créer une nouvelle session
          const initialAnswers = examenToLoad.questions.map(q => ({ questionId: q.id, selectedIndex: null }));

          const { data: newExam, error: insertError } = await supabase
            .from('examens_blancs')
            .insert({
              user_id: user.id,
              exam_number: examenToLoad.numero,
              score: 0,
              total_questions: examenToLoad.totalQuestions,
              is_completed: false,
              current_answers: initialAnswers,
              current_question_index: 0,
              time_remaining: examenToLoad.dureeMinutes * 60,
              started_at: new Date().toISOString()
            })
            .select('id')
            .single();

          if (newExam && !insertError) {
            setSessionId(newExam.id);
            setUserAnswers(initialAnswers);
            setCurrentQuestionIndex(0);
            setTimeRemaining(examenToLoad.dureeMinutes * 60);

            // Consommer un crédit d'examen
            const creditConsumed = await consumeExamCredit(user.id);
            if (!creditConsumed) {
              console.warn('⚠️ Impossible de consommer un crédit d\'examen');
            }
          } else {
            console.error('Erreur création session:', insertError);
            router.push('/dashboard/examens');
            return;
          }
        }
      } catch (error) {
        console.error('Erreur chargement examen:', error);
        router.push('/dashboard/examens');
      }

      setIsLoading(false);
    }

    loadExamen();
  }, [user, supabase, router]);

  // Sauvegarder la progression (optimisé avec debounce)
  const saveProgress = useCallback(async () => {
    if (!sessionId || !user || phase !== 'en_cours') return;

    try {
      await supabase
        .from('examens_blancs')
        .update({
          current_answers: userAnswers,
          current_question_index: currentQuestionIndex,
          time_remaining: timeRemaining
        })
        .eq('id', sessionId);
    } catch (error) {
      console.error('Erreur sauvegarde progression:', error);
    }
  }, [sessionId, user, userAnswers, currentQuestionIndex, timeRemaining, phase, supabase]);

  // Sauvegarder à chaque changement (debounced)
  useEffect(() => {
    if (!sessionId || phase !== 'en_cours') return;

    const timeoutId = setTimeout(() => {
      saveProgress();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [userAnswers, currentQuestionIndex, saveProgress, sessionId, phase]);

  // Sauvegarder le temps toutes les 10 secondes
  useEffect(() => {
    if (!sessionId || phase !== 'en_cours') return;

    const interval = setInterval(() => {
      saveProgress();
    }, 10000);

    return () => clearInterval(interval);
  }, [sessionId, phase, saveProgress]);

  // Calculer le score
  const calculateScore = useCallback(() => {
    if (!questions.length) return 0;
    return userAnswers.reduce((acc, answer, idx) => {
      const question = questions[idx];
      if (answer.selectedIndex !== null && verifyAnswer(question.id, answer.selectedIndex, question.correctHash)) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }, [userAnswers, questions, verifyAnswer]);

  // Terminer l'examen
  const handleFinishExam = useCallback(async () => {
    setPhase('termine');
    setIsSaving(true);

    const score = calculateScore();
    const tempsTotal = (examen?.dureeMinutes || 45) * 60 - timeRemaining;
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
  }, [calculateScore, timeRemaining, user, supabase, sessionId, userAnswers, examen]);

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

  // Fonctions de navigation
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
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleGoToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const score = calculateScore();
  const percentage = Math.round((score / (questions.length || 40)) * 100);
  const passed = score >= 32;

  const handleStartRevision = () => {
    setPhase('revision');
    setRevisionQuestionIndex(0);
  };

  const handlePreviousRevision = () => {
    if (revisionQuestionIndex > 0) {
      setRevisionQuestionIndex(revisionQuestionIndex - 1);
    }
  };

  const handleNextRevision = () => {
    if (revisionQuestionIndex < questions.length - 1) {
      setRevisionQuestionIndex(revisionQuestionIndex + 1);
    }
  };

  // Loading
  if (isLoading || !examen) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
      </div>
    );
  }

  const currentQuestion = questions[phase === 'revision' ? revisionQuestionIndex : currentQuestionIndex];
  const currentAnswer = userAnswers[phase === 'revision' ? revisionQuestionIndex : currentQuestionIndex];

  // Affichage selon la phase
  if (phase === 'termine') {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-white border-2 border-gray-200 p-8 text-center">
          {passed ? (
            <>
              <Trophy className="w-16 h-16 mx-auto text-green-600 mb-4" />
              <h1 className="text-3xl font-bold text-green-600 mb-2">Félicitations !</h1>
              <p className="text-gray-600 mb-6">Vous avez réussi l&apos;examen blanc</p>
            </>
          ) : (
            <>
              <AlertTriangle className="w-16 h-16 mx-auto text-orange-600 mb-4" />
              <h1 className="text-3xl font-bold text-orange-600 mb-2">Pas encore cette fois</h1>
              <p className="text-gray-600 mb-6">Continuez à vous entraîner</p>
            </>
          )}

          <div className="bg-gray-50 p-6 mb-6">
            <div className="text-5xl font-bold text-gray-900 mb-2">{score}/40</div>
            <div className="text-xl text-gray-600 mb-4">{percentage}%</div>
            <div className={`text-sm font-semibold ${passed ? 'text-green-600' : 'text-orange-600'}`}>
              {passed ? 'ADMIS' : 'NON ADMIS'} (minimum 32/40)
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartRevision}
              className="px-6 py-3 bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
            >
              Voir la correction
            </button>
            <button
              onClick={() => router.push('/dashboard')}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Retour au tableau de bord
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === 'revision') {
    const revisionQuestion = questions[revisionQuestionIndex];
    const revisionAnswer = userAnswers[revisionQuestionIndex];
    const correctIndex = findCorrectIndexAdapted(revisionQuestion.id, revisionQuestion.correctHash);
    const isCorrect = revisionAnswer.selectedIndex !== null && verifyAnswer(revisionQuestion.id, revisionAnswer.selectedIndex, revisionQuestion.correctHash);

    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Correction - Question {revisionQuestionIndex + 1}/{questions.length}</h1>
          <button
            onClick={() => router.push('/dashboard')}
            className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Quitter
          </button>
        </div>

        <div className="bg-white border-2 border-gray-200 p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            {isCorrect ? (
              <CheckCircle className="w-6 h-6 text-green-600" />
            ) : (
              <XCircle className="w-6 h-6 text-red-600" />
            )}
            <span className={`font-semibold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
              {isCorrect ? 'Bonne réponse' : 'Mauvaise réponse'}
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-2">{revisionQuestion.categorie} - {revisionQuestion.sousCategorie}</p>
          <h2 className="text-xl font-bold text-gray-900 mb-6">{revisionQuestion.question}</h2>

          <div className="space-y-3 mb-6">
            {revisionQuestion.options.map((option, idx) => {
              const isUserChoice = revisionAnswer.selectedIndex === idx;
              const isCorrectChoice = idx === correctIndex;

              return (
                <div
                  key={idx}
                  className={`p-4 border-2 ${
                    isCorrectChoice
                      ? 'border-green-600 bg-green-50'
                      : isUserChoice
                      ? 'border-red-600 bg-red-50'
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={isCorrectChoice || isUserChoice ? 'font-semibold' : ''}>
                      {option}
                    </span>
                    {isCorrectChoice && <CheckCircle className="w-5 h-5 text-green-600" />}
                    {isUserChoice && !isCorrectChoice && <XCircle className="w-5 h-5 text-red-600" />}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
            <h3 className="font-bold text-blue-900 mb-2">Explication</h3>
            <p className="text-blue-800">{revisionQuestion.explication}</p>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handlePreviousRevision}
            disabled={revisionQuestionIndex === 0}
            className={`px-6 py-3 font-semibold transition-colors flex items-center gap-2 ${
              revisionQuestionIndex === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-800 text-white hover:bg-gray-900'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Précédent
          </button>

          <button
            onClick={handleNextRevision}
            disabled={revisionQuestionIndex === questions.length - 1}
            className={`px-6 py-3 font-semibold transition-colors flex items-center gap-2 ${
              revisionQuestionIndex === questions.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
          >
            Suivant
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  // Phase en_cours
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{examen.titre}</h1>
          <p className="text-gray-600">Question {currentQuestionIndex + 1} / {questions.length}</p>
        </div>
        <div className="flex items-center gap-2 text-red-600 font-bold text-xl">
          <Clock className="w-6 h-6" />
          {formatTime(timeRemaining)}
        </div>
      </div>

      <div className="bg-white border-2 border-gray-200 p-6 mb-6">
        <p className="text-sm text-gray-500 mb-2">{currentQuestion.categorie} - {currentQuestion.sousCategorie}</p>
        <h2 className="text-xl font-bold text-gray-900 mb-6">{currentQuestion.question}</h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectAnswer(idx)}
              className={`w-full text-left p-4 border-2 transition-colors ${
                currentAnswer?.selectedIndex === idx
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between mb-6">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`px-6 py-3 font-semibold transition-colors flex items-center gap-2 ${
            currentQuestionIndex === 0
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-gray-800 text-white hover:bg-gray-900'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          Précédent
        </button>

        {currentQuestionIndex === questions.length - 1 ? (
          <button
            onClick={handleFinishExam}
            disabled={isSaving}
            className="px-6 py-3 bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400"
          >
            {isSaving ? 'Sauvegarde...' : 'Terminer l\'examen'}
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors flex items-center gap-2"
          >
            Suivant
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-10 gap-2">
        {questions.map((_, idx) => {
          const answer = userAnswers[idx];
          return (
            <button
              key={idx}
              onClick={() => handleGoToQuestion(idx)}
              className={`aspect-square flex items-center justify-center text-sm font-semibold border-2 transition-colors ${
                idx === currentQuestionIndex
                  ? 'border-primary-600 bg-primary-600 text-white'
                  : answer?.selectedIndex !== null
                  ? 'border-green-600 bg-green-50 text-green-700'
                  : 'border-gray-300 text-gray-600 hover:border-gray-400'
              }`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
