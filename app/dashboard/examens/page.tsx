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
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Examens blancs</h1>
        <p className="text-gray-600 text-lg">
          Testez-vous dans les conditions réelles de l&apos;examen civique
        </p>
      </div>

      {/* Card principale - Lancer un examen (accessible à tous) */}
      {examCredits && (
        <>
          {/* Card principale - Lancer un examen */}
          <div className="bg-primary-600 p-8 text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-3">Prêt pour un examen blanc ?</h2>
                <p className="text-primary-100 mb-4 max-w-xl">
                  L&apos;examen civique officiel comporte 40 questions. Vous devez obtenir au moins 32 bonnes réponses (80%) pour réussir.
                  Testez-vous dans les mêmes conditions !
                </p>
                
                {/* Compteur d'examens disponibles */}
                {examCredits && (
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg text-green-100">
                      <Trophy className="w-5 h-5" />
                      <span className="font-semibold">
                        {examCredits.totalAvailable} examen{examCredits.totalAvailable > 1 ? 's' : ''} disponible{examCredits.totalAvailable > 1 ? 's' : ''}
                      </span>
                      {examCredits.examCredits > 0 && (
                        <span className="text-green-200 text-sm">
                          ({examCredits.examCredits} Pack Examen)
                        </span>
                      )}
                      {examCredits.subscriptionExamsRemaining > 0 && (
                        <span className="text-green-200 text-sm">
                          ({examCredits.subscriptionExamsRemaining}/{examCredits.subscriptionExamsLimit} {examCredits.isStandard ? 'Standard' : 'Premium'})
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <FileQuestion className="w-5 h-5" />
                    <span>40 questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>45 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    <span>32/40 pour réussir (80%)</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleStartExam}
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 font-bold hover:bg-primary-50 transition-colors"
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
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-50 flex items-center justify-center">
                <FileQuestion className="w-5 h-5 text-primary-600" />
              </div>
              <span className="text-sm text-gray-600">Examens passés</span>
            </div>
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
            ) : (
              <p className="text-4xl font-bold text-gray-900">{stats.totalExamens}</p>
            )}
          </div>

          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-50 flex items-center justify-center">
                <Trophy className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-600">Taux de réussite</span>
            </div>
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
            ) : (
              <p className="text-4xl font-bold text-gray-900">{stats.tauxReussite}%</p>
            )}
          </div>

          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-50 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary-600" />
              </div>
              <span className="text-sm text-gray-600">Meilleur score</span>
            </div>
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
            ) : (
              <p className="text-4xl font-bold text-gray-900">
                {stats.meilleurScore > 0 ? `${stats.meilleurScore}/40` : '-'}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Historique des examens - Accessible pour tous ceux qui ont un historique */}
      {examensHistory.length > 0 && (
        <div className="bg-white border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Historique des examens</h2>
            <p className="text-sm text-gray-600 mt-1">
              Consultez vos résultats et revoyez vos corrections
            </p>
          </div>
          <div className="divide-y divide-gray-100">
            {isLoading ? (
              <div className="p-12 text-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary-600 mx-auto mb-4" />
                <p className="text-gray-500">Chargement...</p>
              </div>
            ) : (
              examensHistory.map((examen) => (
                <div key={examen.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 flex items-center justify-center ${
                      examen.passed ? 'bg-emerald-50' : 'bg-red-50'
                    }`}>
                      {examen.passed ? (
                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      ) : (
                        <AlertCircle className="w-6 h-6 text-red-500" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Score : {examen.score}/{examen.total_questions}
                      </p>
                      <p className="text-sm text-gray-500">
                        {formatDate(examen.completed_at)} • {formatDuration(examen.temps_total)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 text-sm font-medium ${
                      examen.passed 
                        ? 'bg-emerald-50 text-emerald-700' 
                        : 'bg-red-50 text-red-600'
                    }`}>
                      {examen.passed ? 'Réussi' : 'Échoué'}
                    </span>
                    <Link 
                      href={`/dashboard/examens/${examen.id}`}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm"
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
