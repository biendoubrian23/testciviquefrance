'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useSupabase } from '@/hooks/useSupabase';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface Category {
  id: string;
  nom: string;
  description: string;
  ordre: number;
  questionsCount?: number;
  niveauxCompletes?: number;
  totalNiveaux?: number;
  progress?: number;
}

export default function EntrainementPage() {
  const { user } = useAuth();
  const supabase = useSupabase();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, [user]);

  const fetchCategories = async () => {
    try {
      // Récupérer les catégories
      const { data: categoriesData } = await supabase
        .from('categories')
        .select('*')
        .order('ordre');

      if (categoriesData) {
        // Pour chaque catégorie, compter les questions et calculer la progression par niveaux
        const categoriesWithStats = await Promise.all(
          categoriesData.map(async (cat: { id: string; nom: string; description: string; ordre: number }) => {
            // Compter les questions de cette catégorie
            const { count: questionsCount } = await supabase
              .from('questions')
              .select('id', { count: 'exact', head: true })
              .eq('categorie_id', cat.id);

            // Calculer la progression par niveaux si l'utilisateur est connecté
            let niveauxCompletes = 0;
            const totalNiveaux = 10;
            
            if (user) {
              try {
                // Récupérer la progression (sans .single() pour éviter l'erreur 406)
                const { data: progressionData } = await supabase
                  .from('progression_niveaux')
                  .select('niveau_actuel')
                  .eq('user_id', user.id)
                  .eq('categorie_id', cat.id)
                  .limit(1);

                if (progressionData && progressionData.length > 0) {
                  niveauxCompletes = Math.max(0, (progressionData[0].niveau_actuel || 1) - 1);
                }
              } catch {
                // Pas de progression pour cette catégorie
              }
            }

            const progress = Math.round((niveauxCompletes / totalNiveaux) * 100);

            return {
              ...cat,
              questionsCount: questionsCount || 0,
              niveauxCompletes,
              totalNiveaux,
              progress,
            };
          })
        );

        setCategories(categoriesWithStats);
      }
    } catch (error) {
      console.error('Erreur chargement catégories:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* En-tête */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">S&apos;entraîner</h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Choisissez un thème pour commencer votre entraînement
        </p>
      </div>

      {/* Grille des catégories */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white border border-gray-200 p-5 sm:p-6 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-100 rounded w-full mb-4"></div>
              <div className="h-2 bg-gray-100 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/dashboard/entrainement/${category.id}`}
              className="group bg-white border border-gray-200 p-5 sm:p-6 hover:border-primary-600 active:bg-gray-50 hover:shadow-sm transition-all"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {category.nom}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="text-gray-500">
                  {category.questionsCount} question{category.questionsCount !== 1 ? 's' : ''}
                </span>
                {user && (
                  <span className="font-medium text-gray-700 flex items-center gap-1">
                    {category.niveauxCompletes === 10 && (
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    )}
                    {category.niveauxCompletes}/{category.totalNiveaux} niveaux
                  </span>
                )}
              </div>
              
              {user && (
                <div className="h-1.5 bg-gray-100 overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${
                      category.niveauxCompletes === 10 ? 'bg-emerald-500' : 'bg-primary-600'
                    }`}
                    style={{ width: `${category.progress}%` }}
                  />
                </div>
              )}
              
              <div className="mt-4 flex items-center text-primary-600 font-medium text-sm group-hover:opacity-100 sm:opacity-0 transition-opacity">
                Commencer <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Info sur les crédits */}
      <div className="bg-gray-50 border border-gray-200 p-5 sm:p-6">
        <h3 className="font-bold text-gray-900 mb-2">Comment fonctionne l&apos;entraînement ?</h3>
        <p className="text-gray-600 text-sm">
          Chaque question répondue coûte 1 crédit. Vous recevez l&apos;explication détaillée après chaque réponse.
          Les membres Premium ont un accès illimité à toutes les questions.
        </p>
      </div>
    </div>
  );
}
