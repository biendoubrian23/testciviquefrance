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

const categoryHex: Record<number, string> = {
  1: '#002395', // Bleu Marine — Principes et valeurs
  2: '#C8102E', // Rouge France — Vivre en société
  3: '#7C3AED', // Violet Impérial — Histoire
  4: '#0369A1', // Bleu Océan — Institutions
  5: '#D97706', // Ambre — Droits et devoirs
  6: '#059669', // Émeraude — Symboles
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
          let niveauMaxDebloque = 0;
          const totalNiveaux = 10;
          
          if (user) {
            try {
              // Récupérer le profil pour savoir si l'utilisateur a accès premium
              const { data: profileData } = await supabase
                .from('profiles')
                .select('all_levels_unlocked, subscription_status')
                .eq('id', user.id)
                .single();
              
              const hasAllLevelsUnlocked = profileData?.all_levels_unlocked || false;
              const hasActiveSubscription = profileData?.subscription_status === 'active' || profileData?.subscription_status === 'trialing';
              const hasPremiumAccess = hasActiveSubscription || hasAllLevelsUnlocked;

              // Récupérer les meilleurs scores par niveau depuis sessions_quiz
              const { data: sessionsData } = await supabase
                .from('sessions_quiz')
                .select('niveau, score')
                .eq('user_id', user.id)
                .eq('categorie_id', cat.id)
                .eq('completed', true);

              // Calculer le meilleur score pour chaque niveau
              const meilleursScoresParNiveau = new Map<number, number>();
              
              if (sessionsData) {
                for (const session of sessionsData) {
                  const currentBest = meilleursScoresParNiveau.get(session.niveau) || 0;
                  if (session.score > currentBest) {
                    meilleursScoresParNiveau.set(session.niveau, session.score);
                  }
                }
              }

              // Calculer le niveau maximum débloqué basé sur les scores réussis
              // - Score >= 8/10 : déblocage normal
              // - Score >= 5/10 ET all_levels_unlocked : déblocage avec achat
              niveauMaxDebloque = hasPremiumAccess ? 1 : 1; // Niveau 1 toujours accessible
              
              for (let i = 1; i <= 10; i++) {
                const scoreNiveau = meilleursScoresParNiveau.get(i) || 0;
                // Si le niveau i a été réussi (score >= 8), débloquer le niveau i+1
                if (scoreNiveau >= 8) {
                  niveauMaxDebloque = Math.max(niveauMaxDebloque, i + 1);
                }
                // Si l'utilisateur a all_levels_unlocked et score >= 5, débloquer aussi
                else if (hasAllLevelsUnlocked && scoreNiveau >= 5) {
                  niveauMaxDebloque = Math.max(niveauMaxDebloque, i + 1);
                }
              }
              
              // Ne pas dépasser 10
              niveauMaxDebloque = Math.min(niveauMaxDebloque, 10);
              
            } catch {
              // Pas de progression pour cette catégorie
              niveauMaxDebloque = 0;
            }
          }

          // Calculer le pourcentage de progression basé sur les niveaux débloqués
          const progress = user && niveauMaxDebloque > 0 
            ? Math.round((niveauMaxDebloque / totalNiveaux) * 100) 
            : 0;

          return {
            id: cat.id,
            nom: cat.nom,
            description: cat.description,
            ordre: cat.ordre,
            questionsCount: 70, // 4 niveaux x 10 questions + 6 niveaux x 5 questions = 70
            niveauxCompletes: niveauMaxDebloque,
            totalNiveaux,
            progress,
          };
        })
      );

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
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Maîtrisez chaque thématique !</h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Entraînez-vous sur les sujets clés et maximisez vos chances de réussite
        </p>
      </div>

      {/* Grille des catégories */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="glass-card p-5 sm:p-6 animate-pulse">
              <div className="h-6 bg-white/40 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-white/30 rounded w-full mb-4"></div>
              <div className="h-2 bg-white/30 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category) => {
            const hex = categoryHex[category.ordre] ?? '#4F46E5';
            const isComplete = category.niveauxCompletes === 10;
            const fillColor = isComplete ? '#10B981' : hex;
            return (
              <Link
                key={category.id}
                href={`/dashboard/entrainement/${category.id}`}
                className="group glass-card p-5 sm:p-6 transition-all duration-200 active:scale-[0.98]"
                style={{
                  background: `linear-gradient(160deg, ${hex}14 0%, rgba(255,255,255,0.28) 42%)`,
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                <h3
                  className="font-bold mb-2 transition-colors"
                  style={{ color: hex }}
                >
                  {category.nom}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="text-gray-500 font-medium">
                    {category.questionsCount} questions
                  </span>
                  {user && (
                    <span className="font-semibold text-gray-800 flex items-center gap-1">
                      {isComplete && <CheckCircle className="w-4 h-4 text-emerald-500" />}
                      Niveau {category.niveauxCompletes}/{category.totalNiveaux}
                    </span>
                  )}
                </div>

                {user && (
                  <div
                    className="h-1.5 rounded-full overflow-hidden"
                    style={{
                      backgroundColor: `${hex}20`,
                    }}
                  >
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${category.progress}%`,
                        backgroundColor: fillColor,
                      }}
                    />
                  </div>
                )}

                <div
                  className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-semibold text-sm transition-all duration-200 group-hover:scale-[1.03]"
                  style={{
                    color: hex,
                    background: `linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.38) 100%)`,
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: `1px solid rgba(255,255,255,0.70)`,
                    boxShadow: `0 2px 8px ${hex}18, inset 0 1px 0 rgba(255,255,255,0.9)`,
                  }}
                >
                  Commencer <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {/* Info sur le fonctionnement */}
      <div className="glass-subcard p-5 sm:p-6">
        <h3 className="font-bold text-gray-900 mb-2">Comment fonctionne l&apos;entraînement ?</h3>
        <p className="text-gray-700 text-sm">
          Chaque thème comporte 10 niveaux de difficulté croissante. Pour valider un niveau et débloquer le suivant,
          vous devez obtenir au moins <strong>8 bonnes réponses sur 10</strong> (80%).
          Une explication détaillée est fournie après chaque question pour vous aider à progresser.
        </p>
      </div>
    </div>
  );
}
