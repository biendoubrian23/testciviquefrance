'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useSupabase } from '@/hooks/useSupabase';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { CATEGORIES as CACHED_CATEGORIES } from '@/lib/data/categories';

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

// Couleurs élégantes inspirées de la France - réparties pour alterner haut/bas
const themeColors: Record<number, { 
  border: string; 
  bg: string; 
  accent: string; 
  progress: string;
  text: string;
}> = {
  1: { // Principes et valeurs - Bleu Marine (couleur officielle)
    border: 'border-[#002395]',
    bg: 'bg-[#002395]/10',
    accent: 'text-[#002395]',
    progress: 'bg-[#002395]',
    text: 'group-hover:text-[#002395]',
  },
  2: { // Vivre en société - Rouge France
    border: 'border-[#C8102E]',
    bg: 'bg-[#C8102E]/10',
    accent: 'text-[#C8102E]',
    progress: 'bg-[#C8102E]',
    text: 'group-hover:text-[#C8102E]',
  },
  3: { // Histoire - Violet Impérial
    border: 'border-[#7C3AED]',
    bg: 'bg-[#7C3AED]/10',
    accent: 'text-[#7C3AED]',
    progress: 'bg-[#7C3AED]',
    text: 'group-hover:text-[#7C3AED]',
  },
  4: { // Institutions - Bleu Océan
    border: 'border-[#0369A1]',
    bg: 'bg-[#0369A1]/10',
    accent: 'text-[#0369A1]',
    progress: 'bg-[#0369A1]',
    text: 'group-hover:text-[#0369A1]',
  },
  5: { // Droits et devoirs - Or/Doré
    border: 'border-[#B45309]',
    bg: 'bg-[#B45309]/10',
    accent: 'text-[#B45309]',
    progress: 'bg-[#B45309]',
    text: 'group-hover:text-[#B45309]',
  },
  6: { // Symboles - Vert Émeraude
    border: 'border-[#059669]',
    bg: 'bg-[#059669]/10',
    accent: 'text-[#059669]',
    progress: 'bg-[#059669]',
    text: 'group-hover:text-[#059669]',
  },
};

// Couleur par défaut
const defaultColor = {
  border: 'border-gray-900',
  bg: 'bg-gray-100',
  accent: 'text-primary-600',
  progress: 'bg-primary-600',
  text: 'group-hover:text-primary-600',
};

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
      // OPTIMISATION: Utiliser le cache des catégories au lieu d'une requête DB
      const categoriesData = CACHED_CATEGORIES;

      // Pour chaque catégorie, calculer la progression par niveaux
      const categoriesWithStats = await Promise.all(
        categoriesData.map(async (cat) => {
          // Calculer la progression par niveaux si l'utilisateur est connecté
          let niveauxCompletes = 0;
          const totalNiveaux = 10;
          
          if (user) {
            try {
              // Récupérer toutes les sessions pour calculer la progression et le niveau actuel
              const { data: sessionsData } = await supabase
                .from('sessions_quiz')
                .select('niveau, score')
                .eq('user_id', user.id)
                .eq('categorie_id', cat.id)
                .eq('completed', true);

              if (sessionsData && sessionsData.length > 0) {
                // Calculer le meilleur score par niveau
                const scoresParNiveau = new Map<number, number>();
                for (const session of sessionsData) {
                  const currentBest = scoresParNiveau.get(session.niveau) || 0;
                  scoresParNiveau.set(session.niveau, Math.max(currentBest, session.score));
                }

                // Calculer le niveau actuel (plus haut niveau débloqué)
                let niveauActuel = 1;
                for (let i = 1; i <= 10; i++) {
                  const score = scoresParNiveau.get(i) || 0;
                  if (score >= 8) {
                    niveauActuel = Math.min(i + 1, 10);
                  }
                }
                niveauxCompletes = niveauActuel;

              }
            } catch {
              // Pas de progression pour cette catégorie
            }
          }

          let progress = 0;
          if (user) {
            try {
              // Recalculer la moyenne pour la barre de progression
              const { data: sessionsData } = await supabase
                .from('sessions_quiz')
                .select('niveau, score')
                .eq('user_id', user.id)
                .eq('categorie_id', cat.id)
                .eq('completed', true);

              if (sessionsData && sessionsData.length > 0) {
                const scoresParNiveau = new Map<number, number>();
                for (const session of sessionsData) {
                  const currentBest = scoresParNiveau.get(session.niveau) || 0;
                  scoresParNiveau.set(session.niveau, Math.max(currentBest, session.score));
                }

                let totalPourcentage = 0;
                let niveauxJoues = 0;
                for (const [niveau, score] of scoresParNiveau.entries()) {
                  const nbQuestions = niveau <= 4 ? 10 : 5;
                  const pourcentage = Math.round((score / nbQuestions) * 100);
                  totalPourcentage += pourcentage;
                  niveauxJoues++;
                }
                progress = niveauxJoues > 0 ? Math.round(totalPourcentage / niveauxJoues) : 0;
              }
            } catch {
              // Pas de progression
            }
          }

          return {
            id: cat.id,
            nom: cat.nom,
            description: cat.description,
            ordre: cat.ordre,
            questionsCount: 70, // 4 niveaux x 10 questions + 6 niveaux x 5 questions = 70
            niveauxCompletes,
            totalNiveaux,
            progress,
          };
        })
      );

      setCategories(categoriesWithStats);
      setCategories(categoriesWithStats);
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
          {categories.map((category) => {
            const colors = themeColors[category.ordre] || defaultColor;
            return (
              <Link
                key={category.id}
                href={`/dashboard/entrainement/${category.id}`}
                className={`group ${colors.bg} border-2 ${colors.border} rounded-xl p-5 sm:p-6 hover:shadow-lg active:opacity-90 transition-all`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <h3 className={`font-bold text-gray-900 mb-2 ${colors.text} transition-colors`}>
                  {category.nom}
                </h3>
                <p className="text-sm text-gray-900 mb-4">
                  {category.description}
                </p>
                
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="text-gray-700 font-medium">
                    {category.questionsCount} question{category.questionsCount !== 1 ? 's' : ''}
                  </span>
                  {user && (
                    <span className="font-semibold text-gray-900 flex items-center gap-1">
                      {category.niveauxCompletes === 10 && (
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      )}
                      Niveau {category.niveauxCompletes}/{category.totalNiveaux}
                    </span>
                  )}
                </div>
                
                {user && (
                  <div className="h-2 bg-white/60 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 rounded-full ${
                        category.niveauxCompletes === 10 ? 'bg-emerald-500' : colors.progress
                      }`}
                      style={{ width: `${category.progress}%` }}
                    />
                  </div>
                )}
                
                <div className={`mt-4 flex items-center ${colors.accent} font-medium text-sm`}>
                  Commencer <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Info sur le fonctionnement */}
      <div className="bg-gray-50 border border-gray-200 p-5 sm:p-6">
        <h3 className="font-bold text-gray-900 mb-2">Comment fonctionne l&apos;entraînement ?</h3>
        <p className="text-gray-600 text-sm">
          Chaque thème comporte 10 niveaux de difficulté croissante. Pour valider un niveau et débloquer le suivant, 
          vous devez obtenir au moins <strong>8 bonnes réponses sur 10</strong> (80%). 
          Une explication détaillée est fournie après chaque question pour vous aider à progresser.
        </p>
      </div>
    </div>
  );
}
