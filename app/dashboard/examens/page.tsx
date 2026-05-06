'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useSupabase } from '@/hooks/useSupabase';
import { 
  FileQuestion, 
  Clock, 
  Target,
  Trophy,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Award,
  Loader2
} from 'lucide-react';
import { getExamCreditsInfo, type ExamCreditsInfo } from '@/lib/utils/examCredits';
import UpgradeModal from '@/components/dashboard/UpgradeModal';
import ExamSelectionModal from '@/components/dashboard/ExamSelectionModal';

interface ExamenBlanc {
  id: string;
  score: number;
  total_questions: number;
  temps_total: number;
  passed: boolean;
  completed_at: string;
}

interface ExamenStats {
  totalExamens: number;
  tauxReussite: number;
  meilleurScore: number;
}

export default function ExamensPage() {
  const { user, isLoading: authLoading } = useAuth();
  const supabase = useSupabase();
  const [examensHistory, setExamensHistory] = useState<ExamenBlanc[]>([]);
  const [stats, setStats] = useState<ExamenStats>({
    totalExamens: 0,
    tauxReussite: 0,
    meilleurScore: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [examCredits, setExamCredits] = useState<ExamCreditsInfo | null>(null);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showExamSelectionModal, setShowExamSelectionModal] = useState(false);

  // Charger les examens et statistiques depuis Supabase
  useEffect(() => {
    async function loadExamensData() {
      // Si pas d'utilisateur après le chargement auth, on arrête
      if (authLoading) return;
      
      if (!user) {
        setIsLoading(false);
        return;
      }

      try {
        // Récupérer les crédits d'examens
        const creditsInfo = await getExamCreditsInfo(user.id);
        setExamCredits(creditsInfo);

        // Récupérer l'historique des examens blancs
        const { data: examens, error: examensError } = await supabase
          .from('examens_blancs')
          .select('*')
          .eq('user_id', user.id)
          .eq('is_completed', true)
          .order('completed_at', { ascending: false });

        if (examensError) {
          console.error('Erreur chargement examens:', examensError);
        } else if (examens) {
          setExamensHistory(examens);

          // Calculer les statistiques
          const totalExamens = examens.length;
          
          // Calculer le taux de réussite comme la MOYENNE des pourcentages de score
          const tauxReussite = totalExamens > 0 
            ? Math.round(examens.reduce((sum: number, e: ExamenBlanc) => {
                const percentage = (e.score / e.total_questions) * 100;
                return sum + percentage;
              }, 0) / totalExamens)
            : 0;
          
          const meilleurScore = examens.length > 0 ? Math.max(...examens.map((e: ExamenBlanc) => e.score)) : 0;

          setStats({
            totalExamens,
            tauxReussite,
            meilleurScore
          });
        }
      } catch (error) {
        console.error('Erreur:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadExamensData();
  }, [user, supabase, authLoading]);

  // Formater la date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // Formater la durée (secondes -> minutes)
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} min`;
  };

  // Gérer le clic sur "Commencer l'examen"
  const handleStartExam = () => {
    // Toujours afficher la modal de sélection d'examens
    // La gestion des crédits se fait dans la modal
    setShowExamSelectionModal(true);
  };

  // Déterminer le type d'utilisateur pour la modal
  const getUserType = (): 'free' | 'standard' | 'premium' | 'exam-only' => {
    if (!examCredits) return 'free';
    if (examCredits.isFree) return 'free';
    if (examCredits.isStandard) return 'standard';
    if (examCredits.isPremium) return 'premium';
    if (examCredits.examCredits > 0 && !examCredits.isStandard && !examCredits.isPremium) return 'exam-only';
    return 'free';
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Modal d'upgrade */}
      <UpgradeModal 
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        userType={getUserType()}
      />

      {/* Modal de sélection d'examens */}
      <ExamSelectionModal 
        isOpen={showExamSelectionModal}
        onClose={() => setShowExamSelectionModal(false)}
        examCredits={examCredits?.totalAvailable || 0}
        onNeedCredits={() => {
          setShowExamSelectionModal(false);
          setShowUpgradeModal(true);
        }}
      />

      {/* En-tête */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Examens blancs</h1>
        <p className="text-gray-600 text-lg">
          Testez-vous dans les conditions réelles de l&apos;examen civique
        </p>
      </div>

      {/* Card principale - Lancer un examen (accessible à tous) */}
      {examCredits && (
        <>
          {/* Card principale - Lancer un examen */}
          <div
            className="relative overflow-hidden rounded-2xl p-6 sm:p-8 text-white"
            style={{
              background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 50%, #4F46E5 100%)',
              boxShadow: '0 12px 40px rgba(37, 99, 235, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
            }}
          >
            {/* Reflets décoratifs */}
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }} />
            <div className="flex flex-col gap-5 relative">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Prêt pour une session d&apos;examen blanc ?</h2>
                <p className="text-primary-100 mb-4 max-w-xl text-sm sm:text-base">
                  L&apos;examen civique officiel comporte 40 questions. Vous devez obtenir au moins 32 bonnes réponses (80%) pour réussir.
                </p>

                {/* Bouton mobile */}
                <button
                  onClick={handleStartExam}
                  className="sm:hidden w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-200 active:scale-95 mb-4"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    color: '#1D4ED8',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,1)',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  Commencer l&apos;examen
                  <ArrowRight className="w-5 h-5" />
                </button>

                {/* Compteur d'examens disponibles */}
                {examCredits && (
                  <div className="mb-5">
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.18)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255,255,255,0.35)',
                      }}
                    >
                      <Trophy className="w-4 h-4" />
                      <span>
                        {examCredits.totalAvailable} session{examCredits.totalAvailable > 1 ? 's' : ''} disponible{examCredits.totalAvailable > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-4 text-sm text-primary-100">
                  <div className="flex items-center gap-2">
                    <FileQuestion className="w-4 h-4" />
                    <span>40 questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>45 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    <span>32/40 pour réussir (80%)</span>
                  </div>
                </div>
              </div>
              {/* Bouton desktop */}
              <div className="hidden sm:flex">
                <button
                  onClick={handleStartExam}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-200 active:scale-95"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    color: '#1D4ED8',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,1)',
                    WebkitTapHighlightColor: 'transparent',
                  }}
                >
                  Commencer l&apos;examen
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Statistiques - Visibles pour tous */}
      {examCredits && (
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="glass-card p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-100/70 flex items-center justify-center border border-white/60">
                <FileQuestion className="w-5 h-5 text-primary-600" />
              </div>
              <span className="text-sm text-gray-700">Examens passés</span>
            </div>
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
            ) : (
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">{stats.totalExamens}</p>
            )}
          </div>

          <div className="glass-card p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-100/70 flex items-center justify-center border border-white/60">
                <Trophy className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-700">Taux de réussite</span>
            </div>
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
            ) : (
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">{stats.tauxReussite}%</p>
            )}
          </div>

          <div className="glass-card p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-100/70 flex items-center justify-center border border-white/60">
                <Award className="w-5 h-5 text-primary-600" />
              </div>
              <span className="text-sm text-gray-700">Meilleur score</span>
            </div>
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
            ) : (
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                {stats.meilleurScore > 0 ? `${stats.meilleurScore}/40` : '-'}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Historique des examens */}
      {examensHistory.length > 0 && (
        <div className="glass-card overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-white/40">
            <h2 className="text-xl font-bold text-gray-900">Historique des examens</h2>
            <p className="text-sm text-gray-600 mt-1">
              Consultez vos résultats et revoyez vos corrections
            </p>
          </div>
          <div className="divide-y divide-white/40">
            {isLoading ? (
              <div className="p-12 text-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary-600 mx-auto mb-4" />
                <p className="text-gray-600">Chargement...</p>
              </div>
            ) : (
              examensHistory.map((examen) => (
                <div key={examen.id} className="p-4 sm:p-6 flex items-center justify-between hover:bg-white/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center border border-white/60"
                      style={{ backgroundColor: examen.passed ? 'rgba(209,250,229,0.7)' : 'rgba(254,226,226,0.7)' }}
                    >
                      {examen.passed ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      ) : (
                        <AlertCircle className="w-6 h-6 text-red-500" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Score : {examen.score}/{examen.total_questions}
                      </p>
                      <p className="text-sm text-gray-600">
                        {formatDate(examen.completed_at)} • {formatDuration(examen.temps_total)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 text-sm font-medium rounded-full ${
                        examen.passed
                          ? 'bg-emerald-100/80 text-emerald-700'
                          : 'bg-red-100/80 text-red-600'
                      }`}
                    >
                      {examen.passed ? 'Réussi' : 'Échoué'}
                    </span>
                    <Link
                      href={`/dashboard/examens/${examen.id}`}
                      className="text-primary-700 hover:text-primary-800 font-medium text-sm transition-all duration-200 active:scale-95"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      Voir détails
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
