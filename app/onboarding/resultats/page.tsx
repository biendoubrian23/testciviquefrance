'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  AlertTriangle,
  XCircle,
  CheckCircle,
  ChevronRight,
  BarChart3
} from 'lucide-react';

interface QuizResults {
  score: number;
  totalQuestions: number;
  answers: {
    questionId: string;
    domaine: string;
    selectedOption: string;
    isCorrect: boolean;
  }[];
  strengths: string[];
  weaknesses: string[];
}

export default function OnboardingResultsPage() {
  const router = useRouter();
  const [results, setResults] = useState<QuizResults | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('onboardingResults');
    if (stored) {
      setResults(JSON.parse(stored));
    } else {
      router.push('/onboarding/quiz');
    }
  }, [router]);

  if (!results) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Chargement...</div>
      </div>
    );
  }

  const percentage = Math.round((results.score / results.totalQuestions) * 100);
  const isPassing = percentage >= 80;

  // Calculer les scores par domaine
  const domainScores: { [key: string]: { correct: number; total: number } } = {};
  results.answers.forEach(answer => {
    if (!domainScores[answer.domaine]) {
      domainScores[answer.domaine] = { correct: 0, total: 0 };
    }
    domainScores[answer.domaine].total++;
    if (answer.isCorrect) {
      domainScores[answer.domaine].correct++;
    }
  });

  const handleContinue = () => {
    router.push('/onboarding/offres');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Vos résultats</h1>
          <p className="text-gray-500">Découvrez votre niveau et les domaines à améliorer</p>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Score principal */}
        <div className={`p-8 mb-8 ${isPassing ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'} border`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className={`w-8 h-8 ${isPassing ? 'text-emerald-600' : 'text-amber-600'}`} />
                <h2 className="text-3xl font-bold text-gray-900">
                  {results.score}/{results.totalQuestions}
                </h2>
              </div>
              <p className={`text-lg ${isPassing ? 'text-emerald-700' : 'text-amber-700'}`}>
                {isPassing
                  ? 'Excellent ! Vous avez un bon niveau de base.'
                  : 'Vous avez besoin de vous préparer davantage.'}
              </p>
            </div>
            <div className={`text-6xl font-bold ${isPassing ? 'text-emerald-600' : 'text-amber-600'}`}>
              {percentage}%
            </div>
          </div>

          {/* Barre de progression */}
          <div className="mt-6 h-3 bg-gray-200">
            <div
              className={`h-full transition-all duration-500 ${isPassing ? 'bg-emerald-500' : 'bg-amber-500'}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-sm text-gray-500">
            <span>0%</span>
            <span className="font-medium text-primary-600">Objectif: 80%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Message de motivation + CTA */}
        <div className="bg-primary-50 border border-primary-200 p-6 mb-8">
          <h3 className="font-bold text-primary-900 mb-2">
            {isPassing
              ? 'Vous êtes sur la bonne voie !'
              : 'Ne vous découragez pas !'}
          </h3>
          <p className="text-primary-800 mb-4">
            {isPassing
              ? 'Avec un entraînement régulier sur notre plateforme, vous maximiserez vos chances de réussir l\'examen civique officiel (80% requis).'
              : 'L\'examen civique nécessite 80% de bonnes réponses. Avec notre plateforme de préparation complète, vous pourrez progresser rapidement dans tous les domaines.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleContinue}
              className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Découvrir nos offres
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => router.push('/dashboard')}
              className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold border border-gray-300 hover:bg-gray-50 transition-all duration-200"
            >
              Continuer au Dashboard
            </button>
          </div>
        </div>

        {/* Détail par domaine */}
        <div className="bg-white border border-gray-200 p-6 mb-8">
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-primary-600" />
            <h3 className="text-lg font-bold text-gray-900">Performance par domaine</h3>
          </div>

          <div className="space-y-4">
            {Object.entries(domainScores).map(([domain, score]) => {
              const domainPercentage = Math.round((score.correct / score.total) * 100);
              const isGood = domainPercentage >= 50;

              return (
                <div key={domain} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {isGood ? (
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <XCircle className="w-4 h-4 text-red-500" />
                      )}
                      <span className="font-medium text-gray-900">{domain}</span>
                    </div>
                    <span className={`font-bold ${isGood ? 'text-emerald-600' : 'text-red-600'}`}>
                      {score.correct}/{score.total}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100">
                    <div
                      className={`h-full ${isGood ? 'bg-emerald-500' : 'bg-red-500'}`}
                      style={{ width: `${domainPercentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Domaines à améliorer - Liste simple */}
        {results.weaknesses.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <h3 className="font-bold text-gray-900">Domaines à améliorer</h3>
            </div>
            <ul className="space-y-2">
              {results.weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-center gap-2 text-amber-800">
                  <XCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{weakness}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}
