'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useSupabase } from '@/hooks/useSupabase';
import { 
  BarChart3,
  Target,
  Clock,
  Flame,
  TrendingUp,
  Award,
  Loader2
} from 'lucide-react';

interface GlobalStats {
  totalQuestions: number;
  totalCorrect: number;
  totalExamens: number;
  examensReussis: number;
  tempsTotal: number; // en heures
  serieActuelle: number;
  meilleureSerie: number;
  meilleurScore: number;
  meilleurTemps: number | null; // en secondes
}

interface CategoryStat {
  id: string;
  name: string;
  answered: number;
  correct: number;
  percentage: number;
}

export default function StatistiquesPage() {
  const { user, isLoading: authLoading } = useAuth();
  const supabase = useSupabase();
  const [isLoading, setIsLoading] = useState(true);
  
  const [globalStats, setGlobalStats] = useState<GlobalStats>({
    totalQuestions: 0,
    totalCorrect: 0,
    totalExamens: 0,
    examensReussis: 0,
    tempsTotal: 0,
    serieActuelle: 0,
    meilleureSerie: 0,
    meilleurScore: 0,
    meilleurTemps: null,
  });

  const [categoryStats, setCategoryStats] = useState<CategoryStat[]>([]);
  const [weakestCategory, setWeakestCategory] = useState<string | null>(null);

  useEffect(() => {
    if (authLoading) return;

    async function loadStatistics() {
      if (!user) {
        setIsLoading(false);
        return;
      }

      try {
        // 1. Charger les statistiques globales (sans .single() pour éviter 406)
        const { data: statsList } = await supabase
          .from('statistiques')
          .select('*')
          .eq('user_id', user.id)
          .limit(1);

        const statsData = statsList && statsList.length > 0 ? statsList[0] : null;

        // 2. Charger les examens blancs
        const { data: examensData } = await supabase
          .from('examens_blancs')
          .select('*')
          .eq('user_id', user.id)
          .eq('is_completed', true);

        // 3. Charger les résultats par catégorie
        const { data: resultatsData } = await supabase
          .from('resultats')
          .select(`
            is_correct,
            question:questions(categorie_id)
          `)
          .eq('user_id', user.id);

        // 4. Charger les catégories
        const { data: categoriesData } = await supabase
          .from('categories')
          .select('id, nom')
          .order('ordre');

        // Calculer les stats globales
        const totalExamens = examensData?.length || 0;
        const examensReussis = examensData?.filter((e: { passed: boolean }) => e.passed).length || 0;
        const meilleurScore = examensData?.length 
          ? Math.max(...examensData.map((e: { score: number }) => e.score)) 
          : 0;
        const meilleurTemps = examensData?.length
          ? Math.min(...examensData.filter((e: { temps_total: number }) => e.temps_total).map((e: { temps_total: number }) => e.temps_total))
          : null;

        setGlobalStats({
          totalQuestions: statsData?.total_questions_repondues || 0,
          totalCorrect: statsData?.total_bonnes_reponses || 0,
          totalExamens,
          examensReussis,
          tempsTotal: Math.round((statsData?.temps_total_etude || 0) / 3600 * 10) / 10, // secondes -> heures
          serieActuelle: statsData?.serie_actuelle || 0,
          meilleureSerie: statsData?.meilleure_serie || 0,
          meilleurScore,
          meilleurTemps,
        });

        // Calculer les stats par catégorie
        if (categoriesData && resultatsData) {
          const catStats: CategoryStat[] = categoriesData.map((cat: { id: string; nom: string }) => {
            const resultsForCat = resultatsData.filter(
              (r: { question: { categorie_id: string } | null }) => 
                r.question?.categorie_id === cat.id
            );
            const answered = resultsForCat.length;
            const correct = resultsForCat.filter((r: { is_correct: boolean }) => r.is_correct).length;
            const percentage = answered > 0 ? Math.round((correct / answered) * 100) : 0;

            return {
              id: cat.id,
              name: cat.nom,
              answered,
              correct,
              percentage,
            };
          }).filter((cat: CategoryStat) => cat.answered > 0); // Ne montrer que les catégories avec des réponses

          setCategoryStats(catStats);

          // Trouver la catégorie la plus faible
          if (catStats.length > 0) {
            const weakest = catStats.reduce((prev, curr) => 
              curr.percentage < prev.percentage ? curr : prev
            );
            if (weakest.percentage < 80) {
              setWeakestCategory(weakest.name);
            }
          }
        }
      } catch (error) {
        console.error('Erreur chargement statistiques:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadStatistics();
  }, [user, supabase, authLoading]);

  const successRate = globalStats.totalQuestions > 0 
    ? Math.round((globalStats.totalCorrect / globalStats.totalQuestions) * 100) 
    : 0;

  const formatTime = (seconds: number | null) => {
    if (!seconds) return '-';
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes} min ${secs} sec`;
  };

  // État de chargement
  if (isLoading || authLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* En-tête */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Statistiques</h1>
        <p className="text-gray-600 text-lg">
          Analysez vos performances et identifiez vos points à améliorer
        </p>
      </div>

      {/* Statistiques globales */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary-50 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary-600" />
            </div>
          </div>
          <p className="text-4xl font-bold text-gray-900">{globalStats.totalQuestions}</p>
          <p className="text-sm text-gray-500">Questions répondues</p>
        </div>

        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-emerald-50 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
          <p className="text-4xl font-bold text-emerald-600">{successRate}%</p>
          <p className="text-sm text-gray-500">Taux de réussite global</p>
        </div>

        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-gray-600" />
            </div>
          </div>
          <p className="text-4xl font-bold text-gray-900">{globalStats.tempsTotal}h</p>
          <p className="text-sm text-gray-500">Temps total d&apos;étude</p>
        </div>

        <div className="bg-white border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary-50 flex items-center justify-center">
              <Flame className="w-5 h-5 text-primary-600" />
            </div>
          </div>
          <p className="text-4xl font-bold text-primary-600">{globalStats.serieActuelle}</p>
          <p className="text-sm text-gray-500">Jours consécutifs</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Performance par catégorie */}
        <div className="bg-white border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Performance par thème</h2>
          {categoryStats.length > 0 ? (
            <div className="space-y-5">
              {categoryStats.map((category) => (
                <div key={category.id}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{category.name}</span>
                    <span className={`text-sm font-bold ${
                      category.percentage >= 80 ? 'text-emerald-600' :
                      category.percentage >= 60 ? 'text-primary-600' : 'text-gray-600'
                    }`}>
                      {category.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${
                        category.percentage >= 80 ? 'bg-emerald-600' :
                        category.percentage >= 60 ? 'bg-primary-600' : 'bg-gray-400'
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
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Target className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>Aucune donnée disponible</p>
              <p className="text-sm">Commencez à vous entraîner pour voir vos statistiques</p>
            </div>
          )}
        </div>

        {/* Examens blancs */}
        <div className="bg-white border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Examens blancs</h2>
          
          {globalStats.totalExamens > 0 ? (
            <>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 text-center">
                  <Award className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">
                    {globalStats.examensReussis}/{globalStats.totalExamens}
                  </p>
                  <p className="text-sm text-gray-500">Examens réussis</p>
                </div>
                <div className="bg-gray-50 p-4 text-center">
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
                    <span className="font-bold text-gray-900">{globalStats.meilleurScore}/40</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Temps le plus rapide</span>
                    <span className="font-bold text-gray-900">{formatTime(globalStats.meilleurTemps)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Meilleure série</span>
                    <span className="font-bold text-orange-600">{globalStats.meilleureSerie} jours</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Award className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>Aucun examen blanc passé</p>
              <p className="text-sm">Passez votre premier examen blanc pour voir vos résultats</p>
            </div>
          )}
        </div>
      </div>

      {/* Conseils personnalisés */}
      {weakestCategory && (
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-3">💡 Conseil personnalisé</h3>
          <p className="text-gray-700">
            Votre point faible semble être <strong>{weakestCategory}</strong>.
            Nous vous recommandons de vous concentrer sur ce thème lors de vos prochaines sessions d&apos;entraînement.
          </p>
        </div>
      )}

      {/* Message si pas de données */}
      {globalStats.totalQuestions === 0 && !weakestCategory && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
          <h3 className="font-bold text-gray-900 mb-3">🚀 Commencez votre préparation !</h3>
          <p className="text-gray-600">
            Entraînez-vous et passez des examens blancs pour voir vos statistiques détaillées ici.
          </p>
        </div>
      )}
    </div>
  );
}
