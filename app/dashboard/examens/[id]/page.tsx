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
import { getExamen, findCorrectIndex, ExamenBlanc as ExamenData, Question } from '@/lib/data/examens';

interface UserAnswer {
  questionId: number;
  selectedIndex: number | null;
}

interface ExamenRecord {
  id: string;
  user_id: string;
  score: number;
  total_questions: number;
  temps_total: number;
  passed: boolean;
  completed_at: string;
  current_answers: UserAnswer[];
  exam_number: number;
}

export default function ExamenDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useAuth();
  const supabase = useSupabase();
  
  const [examenRecord, setExamenRecord] = useState<ExamenRecord | null>(null);
  const [examenData, setExamenData] = useState<ExamenData | null>(null);
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

        setExamenRecord(data);
        
        // Charger les données de l'examen en fonction du numéro
        const examNumber = data.exam_number || 1;
        const examenQuestions = getExamen(examNumber);
        
        if (examenQuestions) {
          setExamenData(examenQuestions);
        } else {
          console.error('Examen non trouvé:', examNumber);
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
    if (examenData && currentQuestionIndex < examenData.questions.length - 1) {
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

  if (!examenRecord || !examenData) {
    return null;
  }

  const questions = examenData.questions;
  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswer = examenRecord.current_answers[currentQuestionIndex];
  const correctIndex = findCorrectIndex(examenData.numero, currentQuestion.id, currentQuestion.correctHash);
  const isCorrect = currentAnswer?.selectedIndex === correctIndex;
  const wasAnswered = currentAnswer?.selectedIndex !== null;

  const percentage = Math.round((examenRecord.score / examenRecord.total_questions) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* En-tête avec résumé */}
      <div className="bg-white border border-gray-200 p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {examenData.titre} - Détails
            </h1>
            <p className="text-sm text-gray-500">{formatDate(examenRecord.completed_at)}</p>
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
            <div className={`text-3xl font-bold mb-1 ${examenRecord.passed ? 'text-emerald-600' : 'text-red-500'}`}>
              {examenRecord.score}/{examenRecord.total_questions}
            </div>
            <div className="text-xs text-gray-600">Score final</div>
          </div>
          <div className="bg-gray-50 p-4 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">{percentage}%</div>
            <div className="text-xs text-gray-600">Pourcentage</div>
          </div>
          <div className="bg-gray-50 p-4 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-1">{formatTime(examenRecord.temps_total)}</div>
            <div className="text-xs text-gray-600">Temps utilisé</div>
          </div>
          <div className="bg-gray-50 p-4 text-center">
            <div className={`flex items-center justify-center gap-2 ${examenRecord.passed ? 'text-emerald-600' : 'text-red-500'}`}>
              {examenRecord.passed ? (
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
            {examenRecord.current_answers.filter((a, idx) => {
              const q = questions[idx];
              if (!q) return false;
              const correct = findCorrectIndex(examenData.numero, q.id, q.correctHash);
              return a.selectedIndex === correct;
            }).length} réponses correctes
          </div>
        </div>
        <div className="grid grid-cols-10 gap-1">
          {questions.map((q, idx) => {
            const answer = examenRecord.current_answers[idx];
            const qCorrectIndex = findCorrectIndex(examenData.numero, q.id, q.correctHash);
            const correct = answer?.selectedIndex === qCorrectIndex;
            
            return (
              <button
                key={idx}
                onClick={() => setCurrentQuestionIndex(idx)}
                className={`w-full aspect-square text-xs font-medium border transition-colors ${
                  idx === currentQuestionIndex
                    ? 'bg-primary-600 text-white border-primary-600'
                    : correct
                      ? 'bg-emerald-100 text-emerald-700 border-emerald-300'
                      : 'bg-red-100 text-red-600 border-red-300'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Détail de la question */}
      <div className="bg-white border border-gray-200 p-6">
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 text-sm font-medium ${
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
            const isUserChoice = currentAnswer?.selectedIndex === optIdx;

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
      </div>

      {/* Navigation */}
      <div className="bg-white border border-gray-200 p-4">
        <div className="flex items-center justify-between">
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

          <span className="text-sm text-gray-500">
            Question {currentQuestionIndex + 1} / {questions.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentQuestionIndex === questions.length - 1}
            className={`flex items-center gap-2 px-4 py-2 border border-gray-200 ${
              currentQuestionIndex === questions.length - 1
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
  );
}
