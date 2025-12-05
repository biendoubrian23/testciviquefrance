'use client';

import { 
  BarChart3,
  Target,
  Clock,
  Flame,
  TrendingUp,
  Award,
  Calendar
} from 'lucide-react';

export default function StatistiquesPage() {
  // Données de démonstration
  const globalStats = {
    totalQuestions: 156,
    totalCorrect: 121,
    totalExamens: 8,
    examensReussis: 6,
    tempsTotal: 4.5,
    serieActuelle: 5,
    meilleureSerie: 12,
  };

  const categoryStats = [
    { name: 'Valeurs de la République', answered: 32, correct: 28, percentage: 88 },
    { name: 'Symboles de la France', answered: 28, correct: 25, percentage: 89 },
    { name: 'Histoire de France', answered: 35, correct: 24, percentage: 69 },
    { name: 'Institutions françaises', answered: 25, correct: 18, percentage: 72 },
    { name: 'Droits et devoirs', answered: 22, correct: 16, percentage: 73 },
    { name: 'Vie quotidienne', answered: 14, correct: 10, percentage: 71 },
  ];

  const successRate = Math.round((globalStats.totalCorrect / globalStats.totalQuestions) * 100);

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Statistiques</h1>
        <p className="text-gray-600">
          Analysez vos performances et identifiez vos points à améliorer
        </p>
      </div>

      {/* Statistiques globales */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">{globalStats.totalQuestions}</p>
          <p className="text-sm text-gray-500">Questions répondues</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-emerald-600">{successRate}%</p>
          <p className="text-sm text-gray-500">Taux de réussite global</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">{globalStats.tempsTotal}h</p>
          <p className="text-sm text-gray-500">Temps total d'étude</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Flame className="w-5 h-5 text-orange-600" />
            </div>
          </div>
          <p className="text-3xl font-bold text-orange-600">{globalStats.serieActuelle}</p>
          <p className="text-sm text-gray-500">Jours consécutifs</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Performance par catégorie */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Performance par thème</h2>
          <div className="space-y-5">
            {categoryStats.map((category) => (
              <div key={category.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{category.name}</span>
                  <span className={`text-sm font-bold ${
                    category.percentage >= 80 ? 'text-emerald-600' :
                    category.percentage >= 60 ? 'text-amber-600' : 'text-red-600'
                  }`}>
                    {category.percentage}%
                  </span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      category.percentage >= 80 ? 'bg-emerald-500' :
                      category.percentage >= 60 ? 'bg-amber-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {category.correct}/{category.answered} bonnes réponses
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Examens blancs */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Examens blancs</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <Award className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{globalStats.examensReussis}/{globalStats.totalExamens}</p>
              <p className="text-sm text-gray-500">Examens réussis</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <BarChart3 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-emerald-600">
                {Math.round((globalStats.examensReussis / globalStats.totalExamens) * 100)}%
              </p>
              <p className="text-sm text-gray-500">Taux de réussite</p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="font-semibold text-gray-900 mb-4">Vos records</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Meilleur score</span>
                <span className="font-bold text-gray-900">11/12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Temps le plus rapide</span>
                <span className="font-bold text-gray-900">6 min 32 sec</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Meilleure série</span>
                <span className="font-bold text-orange-600">{globalStats.meilleureSerie} jours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conseils */}
      <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
        <h3 className="font-bold text-gray-900 mb-3">💡 Conseil personnalisé</h3>
        <p className="text-gray-700">
          Votre point faible semble être <strong>l'Histoire de France</strong> avec un taux de réussite de 69%.
          Nous vous recommandons de vous concentrer sur ce thème lors de vos prochaines sessions d'entraînement.
        </p>
      </div>
    </div>
  );
}
