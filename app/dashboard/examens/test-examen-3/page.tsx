'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useSupabase } from '@/hooks/useSupabase';
import { Clock, ChevronLeft, ChevronRight, CheckCircle, Home, Trophy, XCircle, Loader2 } from 'lucide-react';
import { EXAMEN_3 } from '@/lib/data/examens/examen-3';
import { verifyAnswer, findCorrectIndex } from '@/lib/data/examens';
import { consumeExamCredit } from '@/lib/utils/examCredits';

const examen = EXAMEN_3;
const questions = examen.questions;

export default function TestExamen3Page() {
  const router = useRouter();
  const { user } = useAuth();
  const supabase = useSupabase();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: number }>({});
  const [timeRemaining, setTimeRemaining] = useState(45 * 60);
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [examSessionId, setExamSessionId] = useState<string | null>(null);

  useEffect(() => {
    async function initExam() {
      if (!user?.id) { router.push('/login'); return; }
      try {
        const { data: newExam } = await supabase
          .from('examens_blancs')
          .insert({ user_id: user.id, exam_number: examen.numero, is_completed: false, total_questions: questions.length })
          .select().single();
        if (newExam) setExamSessionId(newExam.id);
        await consumeExamCredit(user.id);
        setIsLoading(false);
      } catch (error) { console.error('Erreur:', error); setIsLoading(false); }
    }
    initExam();
  }, [user, router, supabase]);

  useEffect(() => {
    if (isLoading || showResults || timeRemaining <= 0) return;
    const timer = setInterval(() => {
      setTimeRemaining(prev => { if (prev <= 1) { handleSubmitExam(); return 0; } return prev - 1; });
    }, 1000);
    return () => clearInterval(timer);
  }, [isLoading, showResults, timeRemaining]);

  const formatTime = (s: number) => `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`;
  const handleAnswerSelect = (i: number) => { if (!showResults) setUserAnswers(p => ({...p, [questions[currentQuestionIndex].id]: i})); };
  const goToNextQuestion = () => { if (currentQuestionIndex < questions.length - 1) setCurrentQuestionIndex(currentQuestionIndex + 1); };
  const goToPreviousQuestion = () => { if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1); };
  const goToQuestion = (i: number) => setCurrentQuestionIndex(i);

  const calculateScore = () => {
    let score = 0;
    questions.forEach(q => { if (userAnswers[q.id] !== undefined && verifyAnswer(examen.numero, q.id, userAnswers[q.id], q.correctHash)) score++; });
    return score;
  };

  const handleSubmitExam = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    const score = calculateScore();
    if (examSessionId) {
      await supabase.from('examens_blancs').update({ score, is_completed: true, passed: score >= 32, temps_total: (45*60) - timeRemaining, completed_at: new Date().toISOString() }).eq('id', examSessionId);
    }
    setShowResults(true);
    setIsSubmitting(false);
  };

  if (isLoading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-12 h-12 animate-spin text-green-500" /><p className="ml-4">Chargement Examen #3...</p></div>;

  const answeredCount = Object.keys(userAnswers).length;
  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestion.id];

  if (showResults) {
    const score = calculateScore();
    const passed = score >= 32;
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className={`${passed ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'} border-2 p-8 text-center mb-8`}>
            {passed ? <Trophy className="w-16 h-16 text-green-500 mx-auto mb-4" /> : <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />}
            <h1 className="text-3xl font-bold mb-2">{passed ? '🎉 Réussi !' : '❌ Échoué'}</h1>
            <p className="text-xl">Score: <strong>{score}/40</strong> ({Math.round(score/40*100)}%)</p>
            <button onClick={() => router.push('/dashboard/examens')} className="mt-6 bg-primary-600 text-white px-6 py-3 font-bold hover:bg-primary-700"><Home className="inline w-5 h-5 mr-2" />Retour</button>
          </div>
          <h2 className="text-2xl font-bold mb-4">📝 Correction - Examen #3</h2>
          <div className="space-y-3">
            {questions.map((q, i) => {
              const ua = userAnswers[q.id];
              const ci = findCorrectIndex(examen.numero, q.id, q.correctHash);
              const ok = ua === ci;
              return (
                <div key={q.id} className={`border p-3 ${ok ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'}`}>
                  <p className="font-medium"><span className={`inline-block w-6 h-6 rounded-full text-white text-center text-sm mr-2 ${ok ? 'bg-green-500' : 'bg-red-500'}`}>{i+1}</span>{q.question}</p>
                  <div className="ml-8 mt-2 space-y-1 text-sm">
                    {q.options.map((o, oi) => <div key={oi} className={`p-1 ${oi === ci ? 'bg-green-200 font-bold' : ua === oi && !ok ? 'bg-red-200' : ''}`}>{oi === ci && '✓ '}{ua === oi && !ok && '✗ '}{o}</div>)}
                  </div>
                  <p className="ml-8 mt-2 text-xs text-gray-600 italic">{q.explication}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-4">
        <div className="bg-green-600 text-white p-4 mb-6 flex items-center justify-between">
          <h1 className="text-xl font-bold">📝 Examen Blanc #3</h1>
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-3 py-1 rounded ${timeRemaining < 300 ? 'bg-red-600' : 'bg-green-700'}`}>
              <Clock className="w-5 h-5" /><span className="font-mono font-bold">{formatTime(timeRemaining)}</span>
            </div>
            <span className="text-sm">{answeredCount}/{questions.length}</span>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-72 flex-shrink-0">
            <div className="bg-white border p-4 sticky top-4">
              <h3 className="font-bold mb-3">Progression</h3>
              <div className="grid grid-cols-5 gap-2 mb-4">
                {questions.map((q, i) => (
                  <button key={q.id} onClick={() => goToQuestion(i)} className={`w-9 h-9 rounded-full text-sm font-medium ${i === currentQuestionIndex ? 'bg-green-600 text-white' : userAnswers[q.id] !== undefined ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-gray-100'}`}>{i+1}</button>
                ))}
              </div>
              <button onClick={handleSubmitExam} disabled={isSubmitting} className={`w-full py-3 font-bold ${answeredCount === questions.length ? 'bg-green-600 text-white' : 'bg-gray-200'}`}>{isSubmitting ? 'Envoi...' : `Terminer (${answeredCount}/${questions.length})`}</button>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white border p-6">
              <div className="flex justify-between mb-4">
                <h2 className="text-lg font-bold">Question {currentQuestionIndex + 1}/{questions.length}</h2>
                <span className="bg-green-100 text-green-700 px-3 py-1 text-sm rounded-full">Examen #3</span>
              </div>
              <p className="text-xl font-medium mb-6">{currentQuestion.question}</p>
              <div className="space-y-3">
                {currentQuestion.options.map((o, i) => (
                  <button key={i} onClick={() => handleAnswerSelect(i)} className={`w-full flex items-center gap-4 p-4 border-2 text-left ${selectedAnswer === i ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <span className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${selectedAnswer === i ? 'bg-green-500 text-white' : 'bg-gray-100'}`}>{['A','B','C','D'][i]}</span>
                    <span className="flex-1">{o}</span>
                    {selectedAnswer === i && <CheckCircle className="w-6 h-6 text-green-500" />}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-8 pt-6 border-t">
                <button onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0} className={`flex items-center gap-2 px-4 py-2 border rounded ${currentQuestionIndex === 0 ? 'text-gray-300' : 'hover:bg-gray-50'}`}><ChevronLeft className="w-5 h-5" />Précédent</button>
                <button onClick={goToNextQuestion} disabled={currentQuestionIndex === questions.length - 1} className={`flex items-center gap-2 px-4 py-2 rounded ${currentQuestionIndex === questions.length - 1 ? 'bg-gray-200 text-gray-400' : 'bg-green-600 text-white hover:bg-green-700'}`}>Suivant<ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
