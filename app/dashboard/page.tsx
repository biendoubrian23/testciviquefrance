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
  ordre?: number;
}

// Couleurs élégantes inspirées de la France pour les barres de progression
// Réparties pour alterner (couleurs différentes entre haut et bas)
const progressColors: Record<number, string> = {
  1: 'bg-[#002395]', // Bleu Marine (Principes)
  2: 'bg-[#C8102E]', // Rouge France (Vivre en société)
  3: 'bg-[#7C3AED]', // Violet Impérial (Histoire)
  4: 'bg-[#0369A1]', // Bleu Océan (Institutions)
  5: 'bg-[#B45309]', // Or/Ambre (Droits)
  6: 'bg-[#059669]', // Vert Émeraude (Symboles)
};

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

  // Fonction utilitaire pour formater le temps
  const formatTimeAgo = (date: Date): string => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'À l\'instant';
    if (diffMins < 60) return `Il y a ${diffMins} min`;
    if (diffHours < 24) return `Il y a ${diffHours}h`;
    if (diffDays === 1) return 'Hier';
    return `Il y a ${diffDays} jours`;
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user) return;
      
      try {
        // Récupérer les statistiques de l'utilisateur (sans .single() pour éviter 406)
        let { data: statsList, error: statsError } = await supabase
          .from('statistiques')
          .select('*')
          .eq('user_id', user.id)
          .limit(1);

        // Si pas de statistiques, les créer automatiquement (pour les anciens comptes)
        if ((!statsList || statsList.length === 0) && !statsError) {
          console.log('Création des statistiques pour l\'utilisateur...');
          const { data: newStats, error: insertError } = await supabase
            .from('statistiques')
            .insert({ user_id: user.id })
            .select()
            .single();
          
          if (!insertError && newStats) {
            statsList = [newStats];
          } else {
            console.error('Erreur création statistiques:', insertError?.message);
          }
        }

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

        // Récupérer l'activité récente depuis sessions_quiz (historique des parties)
        const { data: sessionsData, error: sessionsError } = await supabase
          .from('sessions_quiz')
          .select('id, score, total_questions, niveau, categorie_id, completed, started_at, completed_at')
          .eq('user_id', user.id)
          .eq('completed', true)
          .order('completed_at', { ascending: false, nullsFirst: false })
          .limit(10);

        console.log('=== Sessions récupérées ===')
        console.log('Erreur:', sessionsError)
        console.log('Nombre de sessions:', sessionsData?.length)
        console.log('Sessions:', sessionsData)

        if (sessionsData && sessionsData.length > 0) {
          // Récupérer les noms des catégories
          const categorieIds = [...new Set(sessionsData.map((s: { categorie_id: string }) => s.categorie_id))];
          const { data: categoriesInfo } = await supabase
            .from('categories')
            .select('id, nom')
            .in('id', categorieIds);

          const categoriesMap = new Map(categoriesInfo?.map((c: { id: string; nom: string }) => [c.id, c.nom]) || []);

          const activities: Activity[] = sessionsData.slice(0, 5).map((s: { id: string; score: number; total_questions: number; niveau: number; categorie_id: string; completed_at: string; started_at: string }) => {
            const themeName = categoriesMap.get(s.categorie_id) || 'Entraînement';
            const isSuccess = s.score >= 7; // 70% pour réussir
            // Utiliser total_questions de la base, sinon fallback basé sur niveau
            const totalQuestions = s.total_questions || (s.niveau <= 5 ? 10 : 5);
            return {
              id: s.id,
              type: 'question' as const,
              correct: isSuccess,
              theme: `${themeName} - Niveau ${s.niveau}`,
              score: s.score,
              total: totalQuestions,
              time: formatTimeAgo(new Date(s.completed_at || s.started_at)),
            };
          });
          setRecentActivity(activities);
        }

        // Récupérer les catégories et calculer la progression basée sur les sessions réussies
        const { data: categoriesData } = await supabase
          .from('categories')
          .select('id, nom, ordre')
          .order('ordre');

        if (categoriesData) {
          // Récupérer toutes les sessions réussies de l'utilisateur
          const { data: sessionsData } = await supabase
            .from('sessions_quiz')
            .select('categorie_id, niveau, score')
            .eq('user_id', user.id)
            .eq('completed', true);

          // Calculer le nombre de niveaux complétés par catégorie (score >= 7)
          const niveauxCompletesParCategorie = new Map<string, number>();
          if (sessionsData) {
            for (const session of sessionsData) {
              if (session.score >= 7) {
                const current = niveauxCompletesParCategorie.get(session.categorie_id) || 0;
                // Stocker le niveau max complété
                niveauxCompletesParCategorie.set(
                  session.categorie_id, 
                  Math.max(current, session.niveau)
                );
              }
            }
          }

          const categoriesWithProgress = categoriesData.map((cat: { id: string; nom: string; ordre: number }) => {
            // Le nombre de niveaux complétés = niveau max réussi
            const niveauxCompletes = niveauxCompletesParCategorie.get(cat.id) || 0;
            const progress = Math.min((niveauxCompletes / 10) * 100, 100);

            return {
              id: cat.id,
              name: cat.nom,
              progress: Math.round(progress),
              ordre: cat.ordre,
            };
          });
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

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 overflow-hidden">
        {/* Progression par thème */}
        <div className="lg:col-span-2 bg-white border-2 border-gray-900 p-4 sm:p-6 overflow-hidden">
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
              {categories.map((category, index) => {
                const colorClass = progressColors[category.ordre || (index + 1)] || 'bg-primary-600';
                return (
                  <div key={category.id}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">{category.name}</span>
                      <span className="text-sm font-semibold text-gray-900">{category.progress}%</span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${colorClass} rounded-full transition-all duration-500`}
                        style={{ width: `${category.progress}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              Commencez à vous entraîner pour voir votre progression
            </p>
          )}
        </div>

        {/* Activité récente */}
        <div className="bg-white border-2 border-gray-900 p-4 sm:p-6 overflow-hidden">
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
                  {activity.correct ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {activity.theme}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs font-medium ${activity.correct ? 'text-emerald-600' : 'text-amber-600'}`}>
                        {activity.score}/{activity.total} ({Math.round((activity.score || 0) / (activity.total || 1) * 100)}%)
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{activity.time}</span>
                    </div>
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
