'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useSupabase } from '@/hooks/useSupabase';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  XCircle,
  Trophy,
  Home,
  Loader2,
  Clock,
  Target
} from 'lucide-react';
import { getExamen } from '@/lib/data/examens';
import { findCorrectIndexExam1 } from '@/lib/data/examens/examen1';
import { findCorrectIndex } from '@/lib/data/examens/types';
import type { Question } from '@/lib/data/examens/types';

interface ExamenBlanc {
  id: string;
  user_id: string;
  exam_number: number;
  score: number;
  total_questions: number;
  created_at: string;
  completed_at: string | null;
  is_completed: boolean;
  passed: boolean;
  temps_total: number;
  current_answers: { questionId: number; selectedIndex: number | null }[];
}

interface UserAnswer {
  questionId: number;
  selectedIndex: number | null;
}

interface ExamSessionData {
  id: string;
  exam_number: number;
  score: number;
  total_questions: number;
  is_completed: boolean;
  created_at: string;
  completed_at: string;
  current_answers: UserAnswer[];
}

// Fonction helper pour trouver le bon index selon le numéro d'examen
function getCorrectAnswerIndex(examNumber: number, questionId: number, correctHash: string): number {
  if (examNumber === 1) {
    // L'examen 1 utilise un pattern de hash différent (sans préfixe "exam1")
    return findCorrectIndexExam1(questionId, correctHash);
  } else {
    // Les examens 2-5 utilisent le pattern standard
    return findCorrectIndex(examNumber, questionId, correctHash);
  }
}

export default function ExamenDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const supabase = useSupabase();
  
  const [examen, setExamen] = useState<ExamenBlanc | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    if (!user) return;

    async function loadExamen() {
      try {
        const { data, error } = await supabase
          .from('examens_blancs')
          .select('*')
          .eq('id', params.id)
          .eq('user_id', user!.id)
          .single();

        if (error) {
          console.error('Erreur chargement examen:', error);
          router.push('/dashboard/examens');
          return;
        }

        setExamen(data);
        
        // Charger les questions correspondant à l'examen
        const examNumber = data.exam_number || 1;
        
        // Charger toutes les questions depuis le système centralisé
        const examenData = getExamen(examNumber);
        if (examenData) {
          setQuestions(examenData.questions);
        } else {
          console.error(`Examen ${examNumber} non trouvé`);
          router.push('/dashboard/examens');
          return;
        }
      } catch (error) {
        console.error('Erreur:', error);
        router.push('/dashboard/examens');
      } finally {
        setIsLoading(false);
      }
    }

    loadExamen();
  }, [user, supabase, params.id, router]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white border border-gray-200 p-8 text-center">
          <Loader2 className="w-12 h-12 animate-spin text-primary-600 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Chargement de l&apos;examen...</h2>
        </div>
      </div>
    );
  }

  if (!examen || questions.length === 0) {
    return null;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = examen.current_answers[currentQuestionIndex];
  
  // Utiliser le bon hash selon le numéro d'examen
  const examNumber = examen.exam_number || 1;
  const correctIndex = getCorrectAnswerIndex(examNumber, currentQuestion.id, currentQuestion.correctHash);
  const isCorrect = currentAnswer?.selectedIndex === correctIndex;
  const wasAnswered = currentAnswer?.selectedIndex !== null;

  const percentage = Math.round((examen.score / examen.total_questions) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* En-tête avec résumé */}
      <div className="bg-white border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Détails de l&apos;examen</h1>
            <p className="text-sm text-gray-500">{examen.completed_at ? formatDate(examen.completed_at) : 'Non terminé'}</p>
          </div>
          <button
            onClick={() => router.push('/dashboard/examens')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <Home className="w-5 h-5" />
            <span className="text-sm font-medium">Retour</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 text-center">
            <div className={`text-3xl font-bold mb-1 ${examen.passed ? 'text-emerald-600' : 'text-red-500'}`}>
              {examen.score}/{examen.total_questions}
            </div>
            <div className="text-xs text-gray-600">Score final</div>
          </div>
          <div className="bg-gray-50 p-4 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">{percentage}%</div>
            <div className="text-xs text-gray-600">Pourcentage</div>
          </div>
          <div className="bg-gray-50 p-4 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">{formatTime(examen.temps_total)}</div>
            <div className="text-xs text-gray-600">Temps utilisé</div>
          </div>
          <div className="bg-gray-50 p-4 text-center">
            <div className={`flex items-center justify-center gap-2 ${examen.passed ? 'text-emerald-600' : 'text-red-500'}`}>
              {examen.passed ? (
                <>
                  <Trophy className="w-6 h-6" />
                  <span className="text-xl font-bold">Réussi</span>
                </>
              ) : (
                <>
                  <Target className="w-6 h-6" />
                  <span className="text-xl font-bold">Échoué</span>
                </>
              )}
            </div>
            <div className="text-xs text-gray-600 mt-1">Résultat</div>
          </div>
        </div>
      </div>

      {/* Navigation par points */}
      <div className="bg-white border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-900">Question {currentQuestionIndex + 1} / {questions.length}</h3>
          <div className="text-sm text-gray-500">
            {examen.current_answers.filter((a) => {
              const q = questions.find(question => question.id === a.questionId);
              if (!q) return false;
              const examNum = examen.exam_number || 1;
              const correct = getCorrectAnswerIndex(examNumber, q.id, q.correctHash);
              return a.selectedIndex === correct;
            }).length} réponses correctes
          </div>
        </div>
        <div className="grid grid-cols-10 gap-1">
          {questions.map((q, idx) => {
            const answer = examen.current_answers[idx];
            const examNum = examen.exam_number || 1;
            const qCorrectIndex = getCorrectAnswerIndex(examNumber, q.id, q.correctHash);
            const qWasAnswered = answer?.selectedIndex !== null && answer?.selectedIndex !== undefined;
            const qCorrect = qWasAnswered && answer.selectedIndex === qCorrectIndex;
            
            return (
              <button
                key={q.id}
                onClick={() => setCurrentQuestionIndex(idx)}
                className={`p-2 text-xs font-medium border ${
                  idx === currentQuestionIndex
                    ? 'bg-primary-600 text-white border-primary-600'
                    : qCorrect
                    ? 'bg-emerald-100 text-emerald-700 border-emerald-300'
                    : qWasAnswered
                    ? 'bg-red-100 text-red-700 border-red-300'
                    : 'bg-gray-100 text-gray-500 border-gray-200'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question actuelle */}
      <div className="bg-white border border-gray-200 p-6">
        <div className="flex items-start gap-3 mb-4">
          {wasAnswered ? (
            isCorrect ? (
              <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
            ) : (
              <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            )
          ) : (
            <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0 mt-1" />
          )}
          <div>
            <span className="text-xs text-primary-600 font-medium">{currentQuestion.categorie}</span>
            <h2 className="text-lg font-semibold text-gray-900 mt-1">{currentQuestion.question}</h2>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, optIdx) => {
            const isSelected = currentAnswer?.selectedIndex === optIdx;
            const isOptionCorrect = optIdx === correctIndex;
            
            return (
              <div
                key={optIdx}
                className={`p-4 border-2 rounded-lg ${
                  isOptionCorrect
                    ? 'border-emerald-500 bg-emerald-50'
                    : isSelected && !isOptionCorrect
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                    isOptionCorrect
                      ? 'bg-emerald-500 text-white'
                      : isSelected && !isOptionCorrect
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {String.fromCharCode(65 + optIdx)}
                  </div>
                  <span className={`${
                    isOptionCorrect
                      ? 'text-emerald-700 font-medium'
                      : isSelected && !isOptionCorrect
                      ? 'text-red-700'
                      : 'text-gray-700'
                  }`}>
                    {option}
                  </span>
                  {isOptionCorrect && (
                    <CheckCircle className="w-5 h-5 text-emerald-600 ml-auto" />
                  )}
                  {isSelected && !isOptionCorrect && (
                    <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Explication */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Explication</h4>
          <p className="text-blue-800 text-sm">{currentQuestion.explication}</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white border border-gray-200 p-4">
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center gap-1 px-3 py-2 text-sm font-medium ${
              currentQuestionIndex === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Préc.
          </button>

          <span className="text-sm text-gray-700 font-medium">
            Question {currentQuestionIndex + 1} / {questions.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentQuestionIndex === questions.length - 1}
            className={`flex items-center gap-1 px-3 py-2 text-sm font-medium ${
              currentQuestionIndex === questions.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
          >
            Suivant
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
