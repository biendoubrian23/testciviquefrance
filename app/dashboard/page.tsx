'use client';

import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { 
  BookOpen, 
  FileQuestion, 
  Trophy, 
  Target,
  TrendingUp,
  Clock,
  Flame,
  ArrowRight,
  CheckCircle2,
  XCircle
} from 'lucide-react';

export default function DashboardPage() {
  const { profile } = useAuth();

  // Données de démonstration (à remplacer par les vraies données Supabase)
  const stats = {
    questionsRepondues: 45,
    tauxReussite: 78,
    tempsEtude: 2.5,
    serieJours: 3,
  };

  const recentActivity = [
    { id: 1, type: 'question', correct: true, theme: 'Valeurs de la République', time: 'Il y a 2h' },
    { id: 2, type: 'question', correct: true, theme: 'Symboles de la France', time: 'Il y a 2h' },
    { id: 3, type: 'question', correct: false, theme: 'Histoire de France', time: 'Il y a 3h' },
    { id: 4, type: 'examen', score: 10, total: 12, time: 'Hier' },
  ];

  const categories = [
    { name: 'Valeurs de la République', progress: 60, color: 'bg-blue-500' },
    { name: 'Symboles de la France', progress: 80, color: 'bg-red-500' },
    { name: 'Histoire de France', progress: 45, color: 'bg-purple-500' },
    { name: 'Institutions françaises', progress: 30, color: 'bg-cyan-500' },
    { name: 'Droits et devoirs', progress: 55, color: 'bg-emerald-500' },
    { name: 'Vie quotidienne', progress: 70, color: 'bg-amber-500' },
  ];

  return (
    <div className="space-y-6">
      {/* En-tête de bienvenue */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">
          Bonjour {profile?.prenom || 'là'} ! 👋
        </h1>
        <p className="text-primary-100 mb-4">
          Prêt à continuer votre préparation à l'examen civique ?
        </p>
        <div className="flex flex-wrap gap-3">
          <Link 
            href="/dashboard/entrainement"
            className="inline-flex items-center gap-2 bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-primary-50 transition-colors"
          >
            <BookOpen className="w-5 h-5" />
            S'entraîner
          </Link>
          <Link 
            href="/dashboard/examens"
            className="inline-flex items-center gap-2 bg-primary-500/30 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-500/40 transition-colors"
          >
            <FileQuestion className="w-5 h-5" />
            Examen blanc
          </Link>
        </div>
      </div>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm text-gray-600">Questions répondues</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.questionsRepondues}</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
            <span className="text-sm text-gray-600">Taux de réussite</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.tauxReussite}%</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm text-gray-600">Temps d'étude</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.tempsEtude}h</p>
        </div>

        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Flame className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-sm text-gray-600">Série en cours</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.serieJours} jours</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Progression par thème */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Progression par thème</h2>
            <Link 
              href="/dashboard/statistiques" 
              className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
            >
              Voir tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {categories.map((category) => (
              <div key={category.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{category.name}</span>
                  <span className="text-sm text-gray-500">{category.progress}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${category.color} rounded-full transition-all duration-500`}
                    style={{ width: `${category.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activité récente */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Activité récente</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3">
                {activity.type === 'question' ? (
                  activity.correct ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                  )
                ) : (
                  <Trophy className="w-5 h-5 text-amber-500 mt-0.5" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    {activity.type === 'question' 
                      ? activity.theme 
                      : `Examen blanc: ${activity.score}/${activity.total}`
                    }
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Actions rapides */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link 
          href="/dashboard/entrainement"
          className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-md transition-all"
        >
          <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
            <BookOpen className="w-6 h-6 text-primary-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Entraînement libre</h3>
          <p className="text-sm text-gray-600">Répondez à des questions par thème à votre rythme</p>
        </Link>

        <Link 
          href="/dashboard/examens"
          className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-md transition-all"
        >
          <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
            <FileQuestion className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Examen blanc</h3>
          <p className="text-sm text-gray-600">Testez-vous dans les conditions réelles (12 questions)</p>
        </Link>

        <Link 
          href="/dashboard/resultats"
          className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-primary-300 hover:shadow-md transition-all"
        >
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
            <Trophy className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Mes résultats</h3>
          <p className="text-sm text-gray-600">Consultez votre historique et vos performances</p>
        </Link>
      </div>
    </div>
  );
}
