'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useSupabase } from '@/hooks/useSupabase';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  FileQuestion, 
  Trophy, 
  ArrowRight,
  CheckCircle2,
  XCircle
} from 'lucide-react';

interface Stats {
  questionsRepondues: number;
  tauxReussite: number;
  tempsEtude: number;
  serieJours: number;
}

interface Activity {
  id: string;
  type: 'question' | 'examen';
  correct?: boolean;
  theme?: string;
  score?: number;
  total?: number;
  time: string;
}

interface CategoryProgress {
  id: string;
  name: string;
  progress: number;
}

export default function DashboardPage() {
  const { profile, user } = useAuth();
  const supabase = useSupabase();
  
  const [stats, setStats] = useState<Stats>({
    questionsRepondues: 0,
    tauxReussite: 0,
    tempsEtude: 0,
    serieJours: 0,
  });
  const [recentActivity, setRecentActivity] = useState<Activity[]>([]);
  const [categories, setCategories] = useState<CategoryProgress[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user) return;
      
      try {
        // Récupérer les statistiques de l'utilisateur (sans .single() pour éviter 406)
        const { data: statsList } = await supabase
          .from('statistiques')
          .select('*')
          .eq('user_id', user.id)
          .limit(1);

        const statsData = statsList && statsList.length > 0 ? statsList[0] : null;

        if (statsData) {
          const tauxReussite = statsData.total_questions_repondues > 0 
            ? Math.round((statsData.total_bonnes_reponses / statsData.total_questions_repondues) * 100)
            : 0;
          
          setStats({
            questionsRepondues: statsData.total_questions_repondues || 0,
            tauxReussite,
            tempsEtude: Math.round((statsData.temps_total_etude || 0) / 3600 * 10) / 10,
            serieJours: statsData.serie_actuelle || 0,
          });
        }

        // Récupérer l'activité récente (derniers résultats)
        const { data: resultatsData } = await supabase
          .from('resultats')
          .select(`
            id,
            is_correct,
            created_at,
            questions (
              question,
              categories (nom)
            )
          `)
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(5);

        if (resultatsData) {
          const activities: Activity[] = resultatsData.map((r: any) => ({
            id: r.id,
            type: 'question' as const,
            correct: r.is_correct,
            theme: r.questions?.categories?.nom || 'Question',
            time: formatTimeAgo(new Date(r.created_at)),
          }));
          setRecentActivity(activities);
        }

        // Récupérer les catégories et calculer la progression
        const { data: categoriesData } = await supabase
          .from('categories')
          .select('id, nom')
          .order('ordre');

        if (categoriesData) {
          const categoriesWithProgress = await Promise.all(
            categoriesData.map(async (cat: { id: string; nom: string }) => {
              const { count: totalQuestions } = await supabase
                .from('questions')
                .select('id', { count: 'exact', head: true })
                .eq('categorie_id', cat.id);

              // D'abord récupérer les IDs des questions de cette catégorie
              const { data: questionsInCat } = await supabase
                .from('questions')
                .select('id')
                .eq('categorie_id', cat.id);

              const questionIds = questionsInCat?.map(q => q.id) || [];
              
              let bonnesReponses = 0;
              if (questionIds.length > 0) {
                const { count } = await supabase
                  .from('resultats')
                  .select('id', { count: 'exact', head: true })
                  .eq('user_id', user.id)
                  .eq('is_correct', true)
                  .in('question_id', questionIds);
                bonnesReponses = count || 0;
              }

              const progress = totalQuestions && totalQuestions > 0 
                ? Math.round(((bonnesReponses || 0) / totalQuestions) * 100)
                : 0;

              return {
                id: cat.id,
                name: cat.nom,
                progress: Math.min(progress, 100),
              };
            })
          );
          setCategories(categoriesWithProgress);
        }

      } catch (error) {
        console.error('Erreur chargement dashboard:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchDashboardData();
    } else {
      setLoading(false);
    }
  }, [user, supabase]);

  const formatTimeAgo = (date: Date): string => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `Il y a ${diffMins} min`;
    if (diffHours < 24) return `Il y a ${diffHours}h`;
    if (diffDays === 1) return 'Hier';
    return `Il y a ${diffDays} jours`;
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* En-tête de bienvenue */}
      <div className="bg-primary-600 p-5 sm:p-8 text-white -mx-4 sm:mx-0">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          Bonjour {profile?.prenom || 'là'}
        </h1>
        <p className="text-primary-100 mb-5 sm:mb-6 text-base sm:text-lg">
          Prêt à continuer votre préparation à l&apos;examen civique ?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link 
            href="/dashboard/entrainement"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-5 py-3 sm:py-2.5 font-medium hover:bg-primary-50 active:bg-primary-100 transition-colors"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <BookOpen className="w-5 h-5" />
            S&apos;entraîner
          </Link>
          <Link 
            href="/dashboard/examens"
            className="inline-flex items-center justify-center gap-2 bg-primary-700 text-white px-5 py-3 sm:py-2.5 font-medium hover:bg-primary-800 active:bg-primary-900 transition-colors border border-primary-500"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <FileQuestion className="w-5 h-5" />
            Examen blanc
          </Link>
        </div>
      </div>

      {/* Statistiques rapides - Design épuré sans icônes colorées */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        <div className="bg-white p-4 sm:p-5 border border-gray-200">
          <p className="text-xs sm:text-sm text-gray-500 mb-1">Questions répondues</p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900">
            {loading ? '—' : stats.questionsRepondues}
          </p>
        </div>

        <div className="bg-white p-4 sm:p-5 border border-gray-200">
          <p className="text-xs sm:text-sm text-gray-500 mb-1">Taux de réussite</p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900">
            {loading ? '—' : `${stats.tauxReussite}%`}
          </p>
        </div>

        <div className="bg-white p-4 sm:p-5 border border-gray-200">
          <p className="text-xs sm:text-sm text-gray-500 mb-1">Temps d&apos;étude</p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900">
            {loading ? '—' : `${stats.tempsEtude}h`}
          </p>
        </div>

        <div className="bg-white p-4 sm:p-5 border border-gray-200">
          <p className="text-xs sm:text-sm text-gray-500 mb-1">Série en cours</p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900">
            {loading ? '—' : `${stats.serieJours} jour${stats.serieJours > 1 ? 's' : ''}`}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Progression par thème */}
        <div className="lg:col-span-2 bg-white border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">Progression par thème</h2>
            <Link 
              href="/dashboard/statistiques" 
              className="text-sm text-primary-600 hover:text-primary-700 active:text-primary-800 font-medium flex items-center gap-1"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              Voir tout <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          {loading ? (
            <div className="space-y-5">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                  <div className="h-2 bg-gray-100 rounded"></div>
                </div>
              ))}
            </div>
          ) : categories.length > 0 ? (
            <div className="space-y-5">
              {categories.map((category) => (
                <div key={category.id}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{category.name}</span>
                    <span className="text-sm font-semibold text-gray-900">{category.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 overflow-hidden">
                    <div 
                      className="h-full bg-primary-600 transition-all duration-500"
                      style={{ width: `${category.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              Commencez à vous entraîner pour voir votre progression
            </p>
          )}
        </div>

        {/* Activité récente */}
        <div className="bg-white border border-gray-200 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Activité récente</h2>
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse flex gap-3">
                  <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
                    <div className="h-3 bg-gray-100 rounded w-1/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : recentActivity.length > 0 ? (
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  {activity.type === 'question' ? (
                    activity.correct ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-gray-400 mt-0.5" />
                    )
                  ) : (
                    <Trophy className="w-5 h-5 text-primary-600 mt-0.5" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.type === 'question' 
                        ? activity.theme 
                        : `Examen blanc: ${activity.score}/${activity.total}`
                      }
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8 text-sm">
              Aucune activité récente
            </p>
          )}
        </div>
      </div>

      {/* Actions rapides - Design simplifié */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <Link 
          href="/dashboard/entrainement"
          className="group bg-white border border-gray-200 p-5 sm:p-6 hover:border-primary-600 active:bg-gray-50 transition-all"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <h3 className="font-bold text-gray-900 mb-2">Entraînement libre</h3>
          <p className="text-sm text-gray-600">Répondez à des questions par thème à votre rythme</p>
        </Link>

        <Link 
          href="/dashboard/examens"
          className="group bg-white border border-gray-200 p-5 sm:p-6 hover:border-primary-600 active:bg-gray-50 transition-all"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <h3 className="font-bold text-gray-900 mb-2">Examen blanc</h3>
          <p className="text-sm text-gray-600">Testez-vous dans les conditions réelles (40 questions)</p>
        </Link>

        <Link 
          href="/dashboard/statistiques"
          className="group bg-white border border-gray-200 p-5 sm:p-6 hover:border-primary-600 active:bg-gray-50 transition-all sm:col-span-2 lg:col-span-1"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <h3 className="font-bold text-gray-900 mb-2">Mes résultats</h3>
          <p className="text-sm text-gray-600">Consultez votre historique et vos performances</p>
        </Link>
      </div>
    </div>
  );
}
