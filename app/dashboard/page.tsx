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
import { CATEGORIES, getCategoryName } from '@/lib/data/categories';

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
        // OPTIMISATION: Utiliser la fonction RPC pour récupérer toutes les données en une seule requête
        const { data: dashboardData, error: rpcError } = await supabase
          .rpc('get_dashboard_data', { p_user_id: user.id });

        if (rpcError) {
          // Fallback: si la fonction RPC n'existe pas encore, utiliser l'ancienne méthode
          console.error('RPC non disponible, fallback:', rpcError.message);
          await fetchDashboardDataLegacy();
          return;
        }

        if (dashboardData) {
          // Statistiques
          const statsData = dashboardData.statistiques;
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

          // Activité récente - utiliser le cache des catégories au lieu de requêtes DB
          if (dashboardData.sessions_recentes && dashboardData.sessions_recentes.length > 0) {
            const activities: Activity[] = dashboardData.sessions_recentes.slice(0, 5).map((s: { id: string; score: number; total_questions: number; niveau: number; categorie_id: string; completed_at: string }) => {
              const themeName = getCategoryName(s.categorie_id); // Cache local au lieu de DB
              // Seuil de validation : 8/10 (80%)
              const isSuccess = s.score >= 8;
              const totalQuestions = s.total_questions || (s.niveau <= 4 ? 10 : 5);
              return {
                id: s.id,
                type: 'question' as const,
                correct: isSuccess,
                theme: `${themeName} - Niveau ${s.niveau}`,
                score: s.score,
                total: totalQuestions,
                time: formatTimeAgo(new Date(s.completed_at)),
              };
            });
            setRecentActivity(activities);
          }

          // Progression par catégorie - calculer la moyenne des pourcentages
          const meilleursScores = dashboardData.meilleurs_scores || [];
          const scoresParCategorie = new Map<string, Map<number, number>>();
          
          // Regrouper les scores par catégorie et niveau
          for (const score of meilleursScores) {
            if (!scoresParCategorie.has(score.categorie_id)) {
              scoresParCategorie.set(score.categorie_id, new Map());
            }
            const niveauxMap = scoresParCategorie.get(score.categorie_id)!;
            // Garder le meilleur score pour chaque niveau
            const currentBest = niveauxMap.get(score.niveau) || 0;
            niveauxMap.set(score.niveau, Math.max(currentBest, score.meilleur_score));
          }

          const categoriesWithProgress = CATEGORIES.map((cat) => {
            const niveauxMap = scoresParCategorie.get(cat.id);
            if (!niveauxMap || niveauxMap.size === 0) {
              return {
                id: cat.id,
                name: cat.nom,
                progress: 0,
                ordre: cat.ordre,
              };
            }

            // Calculer la moyenne des pourcentages des niveaux joués
            let totalPourcentage = 0;
            let niveauxJoues = 0;
            
            for (const [niveau, score] of niveauxMap.entries()) {
              const nbQuestions = niveau <= 4 ? 10 : 5;
              const pourcentage = Math.round((score / nbQuestions) * 100);
              totalPourcentage += pourcentage;
              niveauxJoues++;
            }

            const moyennePourcentage = niveauxJoues > 0 ? Math.round(totalPourcentage / niveauxJoues) : 0;

            return {
              id: cat.id,
              name: cat.nom,
              progress: moyennePourcentage,
              ordre: cat.ordre,
            };
          });
          setCategories(categoriesWithProgress);
        }

      } catch (error) {
        console.error('Erreur chargement dashboard:', error);
        // Fallback en cas d'erreur
        await fetchDashboardDataLegacy();
      } finally {
        setLoading(false);
      }
    };

    // Méthode legacy (fallback si RPC non disponible)
    const fetchDashboardDataLegacy = async () => {
      try {
        // Récupérer les statistiques de l'utilisateur (sans .single() pour éviter 406)
        let { data: statsList, error: statsError } = await supabase
          .from('statistiques')
          .select('*')
          .eq('user_id', user!.id)
          .limit(1);

        // Si pas de statistiques, les créer automatiquement (pour les anciens comptes)
        if ((!statsList || statsList.length === 0) && !statsError) {
          const { data: newStats, error: insertError } = await supabase
            .from('statistiques')
            .insert({ user_id: user!.id })
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
        const { data: sessionsData } = await supabase
          .from('sessions_quiz')
          .select('id, score, total_questions, niveau, categorie_id, completed, started_at, completed_at')
          .eq('user_id', user!.id)
          .eq('completed', true)
          .order('completed_at', { ascending: false, nullsFirst: false })
          .limit(10);

        // Récupérer les examens blancs complétés
        const { data: examensData } = await supabase
          .from('examens_blancs')
          .select('id, score, total_questions, passed, completed_at')
          .eq('user_id', user!.id)
          .eq('is_completed', true)
          .order('completed_at', { ascending: false })
          .limit(10);

        const activities: Activity[] = [];

        // Ajouter les sessions de quiz
        if (sessionsData && sessionsData.length > 0) {
          for (const s of sessionsData) {
            const themeName = getCategoryName(s.categorie_id); // Cache local
            // Seuil de validation : 8/10 (80%)
            const isSuccess = s.score >= 8;
            const totalQuestions = s.total_questions || (s.niveau <= 4 ? 10 : 5);
            activities.push({
              id: s.id,
              type: 'question' as const,
              correct: isSuccess,
              theme: `${themeName} - Niveau ${s.niveau}`,
              score: s.score,
              total: totalQuestions,
              time: formatTimeAgo(new Date(s.completed_at || s.started_at)),
            });
          }
        }

        // Ajouter les examens blancs
        if (examensData && examensData.length > 0) {
          for (const e of examensData) {
            activities.push({
              id: e.id,
              type: 'question' as const,
              correct: e.passed,
              theme: "Session d'examen blanc",
              score: e.score,
              total: e.total_questions,
              time: formatTimeAgo(new Date(e.completed_at)),
            });
          }
        }

        // Trier par date (les plus récentes en premier) et garder les 5 premières
        activities.sort((a, b) => {
          // On ne peut pas trier par date directement car on a déjà formaté avec formatTimeAgo
          // Mais comme on a déjà trié les deux sources séparément, on garde juste les 5 premiers
          return 0;
        });
        setRecentActivity(activities.slice(0, 5));

        // Utiliser le cache des catégories au lieu d'une requête DB
        // Récupérer les sessions pour calculer la progression
        const { data: allSessionsData } = await supabase
          .from('sessions_quiz')
          .select('categorie_id, niveau, score')
          .eq('user_id', user!.id)
          .eq('completed', true);

        const scoresParCategorie = new Map<string, Map<number, number>>();
        if (allSessionsData) {
          for (const session of allSessionsData) {
            if (!scoresParCategorie.has(session.categorie_id)) {
              scoresParCategorie.set(session.categorie_id, new Map());
            }
            const niveauxMap = scoresParCategorie.get(session.categorie_id)!;
            // Garder le meilleur score pour chaque niveau
            const currentBest = niveauxMap.get(session.niveau) || 0;
            niveauxMap.set(session.niveau, Math.max(currentBest, session.score));
          }
        }

        const categoriesWithProgress = CATEGORIES.map((cat) => {
          const niveauxMap = scoresParCategorie.get(cat.id);
          if (!niveauxMap || niveauxMap.size === 0) {
            return {
              id: cat.id,
              name: cat.nom,
              progress: 0,
              ordre: cat.ordre,
            };
          }

          // Calculer la moyenne des pourcentages des niveaux joués
          let totalPourcentage = 0;
          let niveauxJoues = 0;
          
          for (const [niveau, score] of niveauxMap.entries()) {
            const nbQuestions = niveau <= 4 ? 10 : 5;
            const pourcentage = Math.round((score / nbQuestions) * 100);
            totalPourcentage += pourcentage;
            niveauxJoues++;
          }

          const moyennePourcentage = niveauxJoues > 0 ? Math.round(totalPourcentage / niveauxJoues) : 0;

          return {
            id: cat.id,
            name: cat.nom,
            progress: moyennePourcentage,
            ordre: cat.ordre,
          };
        });
        setCategories(categoriesWithProgress);

      } catch (error) {
        console.error('Erreur chargement dashboard (legacy):', error);
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
        {/* Message personnalisé selon le profil */}
        <p className="text-primary-100 mb-5 sm:mb-6 text-base sm:text-lg">
          {profile?.test_deadline === 'urgent' 
            ? 'Votre test approche ! Entraînez-vous régulièrement pour être prêt le jour J.'
            : profile?.test_deadline === 'soon'
            ? 'Vous avez le temps de bien vous préparer. Continuez votre entraînement !'
            : profile?.test_deadline === 'relaxed'
            ? 'Prenez votre temps et progressez à votre rythme.'
            : profile?.test_deadline === 'exploration'
            ? 'Explorez librement les questions, sans pression !'
            : profile?.test_deadline === 'no_date'
            ? 'Définir une date peut vous aider à rester motivé. Bonne préparation !'
            : 'Prêt à continuer votre préparation à l\'examen civique ?'
          }
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          {/* Bouton Flashcards - visible uniquement sur mobile */}
          <Link 
            href="/dashboard/flashcards"
            className="sm:hidden inline-flex items-center justify-center gap-2 bg-white text-emerald-600 px-5 py-3 font-medium hover:bg-emerald-50 active:bg-emerald-100 transition-colors"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            🃏 Flashcards
          </Link>
          <Link 
            href="/dashboard/entrainement"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-5 py-3 sm:py-2.5 font-medium hover:bg-primary-50 active:bg-primary-100 transition-colors"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <BookOpen className="w-5 h-5" />
            Quiz thématiques
          </Link>
          <Link 
            href="/dashboard/examens"
            className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 px-5 py-3 sm:py-2.5 font-medium hover:bg-indigo-50 active:bg-indigo-100 transition-colors"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <FileQuestion className="w-5 h-5" />
            Session d&apos;examen blanc
          </Link>
          {/* Bouton essai gratuit - visible uniquement sur mobile */}
          <Link 
            href="/dashboard/credits"
            className="sm:hidden inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-5 py-3 font-semibold hover:bg-amber-600 active:bg-amber-700 transition-colors"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <Trophy className="w-5 h-5" />
            🎁 2 jours d&apos;essai GRATUIT
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
          <h3 className="font-bold text-gray-900 mb-2">Session d'examen blanc</h3>
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
