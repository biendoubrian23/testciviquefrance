'use client';

import Link from 'next/link';
import { 
  FileQuestion, 
  Clock, 
  Target,
  Trophy,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Award
} from 'lucide-react';

export default function ExamensPage() {
  // Données de démonstration
  const examensHistory = [
    { id: 1, date: '4 déc. 2025', score: 10, total: 12, passed: true, duration: '8 min' },
    { id: 2, date: '2 déc. 2025', score: 8, total: 12, passed: false, duration: '12 min' },
    { id: 3, date: '30 nov. 2025', score: 11, total: 12, passed: true, duration: '7 min' },
  ];

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Examens blancs</h1>
        <p className="text-gray-600 text-lg">
          Testez-vous dans les conditions réelles de l'examen civique
        </p>
      </div>

      {/* Card principale - Lancer un examen */}
      <div className="bg-primary-600 p-8 text-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-3">Prêt pour un examen blanc ?</h2>
            <p className="text-primary-100 mb-6 max-w-xl">
              L'examen civique réel comporte 12 questions. Vous devez obtenir au moins 7 bonnes réponses pour réussir.
              Testez-vous dans les mêmes conditions !
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <FileQuestion className="w-5 h-5" />
                <span>12 questions</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>~10 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span>7/12 pour réussir</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/dashboard/examens/nouveau"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 font-bold hover:bg-primary-50 transition-colors"
            >
              Commencer l'examen
              <ArrowRight className="w-5 h-5" />
            </Link>
            <span className="text-sm text-primary-200 text-center">Coût : 2 crédits</span>
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary-50 flex items-center justify-center">
              <FileQuestion className="w-5 h-5 text-primary-600" />
            </div>
            <span className="text-sm text-gray-600">Examens passés</span>
          </div>
          <p className="text-4xl font-bold text-gray-900">3</p>
        </div>

        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-emerald-50 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="text-sm text-gray-600">Taux de réussite</span>
          </div>
          <p className="text-4xl font-bold text-gray-900">67%</p>
        </div>

        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary-50 flex items-center justify-center">
              <Award className="w-5 h-5 text-primary-600" />
            </div>
            <span className="text-sm text-gray-600">Meilleur score</span>
          </div>
          <p className="text-4xl font-bold text-gray-900">11/12</p>
        </div>
      </div>

      {/* Historique des examens */}
      <div className="bg-white border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Historique des examens</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {examensHistory.length > 0 ? (
            examensHistory.map((examen) => (
              <div key={examen.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 flex items-center justify-center ${
                    examen.passed ? 'bg-emerald-50' : 'bg-gray-100'
                  }`}>
                    {examen.passed ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                    ) : (
                      <AlertCircle className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Score : {examen.score}/{examen.total}
                    </p>
                    <p className="text-sm text-gray-500">{examen.date} • {examen.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 text-sm font-medium ${
                    examen.passed 
                      ? 'bg-emerald-50 text-emerald-700' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {examen.passed ? 'Réussi' : 'Échoué'}
                  </span>
                  <Link 
                    href={`/dashboard/examens/${examen.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                  >
                    Voir détails
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center">
              <FileQuestion className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">Vous n'avez pas encore passé d'examen blanc</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
