'use client';

import { 
  Trophy,
  CheckCircle2,
  XCircle,
  TrendingUp,
  TrendingDown,
  Calendar
} from 'lucide-react';

export default function ResultatsPage() {
  // Données de démonstration
  const recentResults = [
    { id: 1, question: 'Quelle est la devise de la République française ?', theme: 'Valeurs de la République', correct: true, date: 'Aujourd\'hui' },
    { id: 2, question: 'Quelles sont les couleurs du drapeau français ?', theme: 'Symboles de la France', correct: true, date: 'Aujourd\'hui' },
    { id: 3, question: 'En quelle année a eu lieu la Révolution française ?', theme: 'Histoire de France', correct: false, date: 'Hier' },
    { id: 4, question: 'Qui est le chef de l\'État en France ?', theme: 'Institutions françaises', correct: true, date: 'Hier' },
    { id: 5, question: 'Quel est l\'hymne national français ?', theme: 'Symboles de la France', correct: true, date: 'Il y a 2 jours' },
  ];

  const weeklyProgress = [
    { day: 'Lun', correct: 5, incorrect: 2 },
    { day: 'Mar', correct: 8, incorrect: 1 },
    { day: 'Mer', correct: 3, incorrect: 3 },
    { day: 'Jeu', correct: 10, incorrect: 2 },
    { day: 'Ven', correct: 6, incorrect: 1 },
    { day: 'Sam', correct: 0, incorrect: 0 },
    { day: 'Dim', correct: 4, incorrect: 0 },
  ];

  const totalCorrect = weeklyProgress.reduce((acc, day) => acc + day.correct, 0);
  const totalIncorrect = weeklyProgress.reduce((acc, day) => acc + day.incorrect, 0);
  const totalQuestions = totalCorrect + totalIncorrect;
  const successRate = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mes résultats</h1>
        <p className="text-gray-600 text-lg">
          Consultez votre historique et vos performances
        </p>
      </div>

      {/* Statistiques de la semaine */}
      <div className="grid sm:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary-50 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary-600" />
            </div>
            <span className="text-sm text-gray-600">Cette semaine</span>
          </div>
          <p className="text-4xl font-bold text-gray-900">{totalQuestions}</p>
          <p className="text-sm text-gray-500">questions</p>
        </div>

        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-emerald-50 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="text-sm text-gray-600">Bonnes réponses</span>
          </div>
          <p className="text-4xl font-bold text-emerald-600">{totalCorrect}</p>
        </div>

        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
              <XCircle className="w-5 h-5 text-gray-500" />
            </div>
            <span className="text-sm text-gray-600">Mauvaises réponses</span>
          </div>
          <p className="text-4xl font-bold text-gray-500">{totalIncorrect}</p>
        </div>

        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary-50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary-600" />
            </div>
            <span className="text-sm text-gray-600">Taux de réussite</span>
          </div>
          <p className="text-4xl font-bold text-primary-600">{successRate}%</p>
        </div>
      </div>

      {/* Graphique de la semaine */}
      <div className="bg-white border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Activité de la semaine</h2>
        <div className="flex items-end justify-between gap-2 h-40">
          {weeklyProgress.map((day, index) => {
            const total = day.correct + day.incorrect;
            const maxHeight = 120;
            const correctHeight = total > 0 ? (day.correct / Math.max(...weeklyProgress.map(d => d.correct + d.incorrect))) * maxHeight : 0;
            const incorrectHeight = total > 0 ? (day.incorrect / Math.max(...weeklyProgress.map(d => d.correct + d.incorrect))) * maxHeight : 0;
            
            return (
              <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex flex-col items-center justify-end" style={{ height: maxHeight }}>
                  {incorrectHeight > 0 && (
                    <div 
                      className="w-8 bg-gray-300"
                      style={{ height: incorrectHeight }}
                    />
                  )}
                  {correctHeight > 0 && (
                    <div 
                      className="w-8 bg-primary-600"
                      style={{ height: correctHeight }}
                    />
                  )}
                  {total === 0 && (
                    <div className="w-8 h-2 bg-gray-200" />
                  )}
                </div>
                <span className="text-xs text-gray-500">{day.day}</span>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary-600" />
            <span className="text-sm text-gray-600">Bonnes réponses</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-300" />
            <span className="text-sm text-gray-600">Mauvaises réponses</span>
          </div>
        </div>
      </div>

      {/* Historique détaillé */}
      <div className="bg-white border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Historique récent</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {recentResults.map((result) => (
            <div key={result.id} className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
              {result.correct ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              ) : (
                <XCircle className="w-6 h-6 text-gray-400 flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <p className="text-gray-900 truncate">{result.question}</p>
                <p className="text-sm text-gray-500">{result.theme}</p>
              </div>
              <span className="text-sm text-gray-400 flex-shrink-0">{result.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
