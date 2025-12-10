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
  Loader2,
  Lock
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
  exam_number?: number;
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
    if (!examCredits) return;

    // Si membre gratuit ou plus d'examens disponibles, afficher la modal d'upgrade
    if (examCredits.isFree || examCredits.totalAvailable === 0) {
      setShowUpgradeModal(true);
    } else {
      // Afficher la modal de sélection d'examen
      setShowExamSelectionModal(true);
    }
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

      {/* Modal de sélection d'examen */}
      {user && examCredits && !isLoading && (
        <ExamSelectionModal
          isOpen={showExamSelectionModal}
          onClose={() => setShowExamSelectionModal(false)}
          examCredits={examCredits.totalAvailable}
          examensHistory={examensHistory.map(e => ({
            exam_number: e.exam_number || 1,
            passed: e.passed
          }))}
        />
      )}

      {/* En-tête */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Examens blancs</h1>
        <p className="text-gray-600 text-lg">
          Testez-vous dans les conditions réelles de l&apos;examen civique
        </p>
      </div>

      {/* Affichage pour membres gratuits - Page verrouillée */}
      {examCredits?.isFree ? (
        <div className="bg-gray-50 border-2 border-gray-200 p-12 text-center">
          <Lock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Examens blancs réservés aux membres</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Les examens blancs sont accessibles avec un abonnement ou via le Pack Examen. 
            Choisissez l'offre qui vous convient pour débloquer cette fonctionnalité.
          </p>
          <button
            onClick={() => setShowUpgradeModal(true)}
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 font-bold hover:bg-primary-700 transition-colors"
          >
            Voir les offres
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      ) : (
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
                {examCredits && examCredits.totalAvailable > 0 ? (
                  <button
                    onClick={handleStartExam}
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 font-bold hover:bg-primary-50 transition-colors"
                  >
                    Commencer l&apos;examen
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={() => setShowUpgradeModal(true)}
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-6 py-3 font-bold hover:bg-primary-50 transition-colors"
                  >
                    Obtenir des examens
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
                
                {/* Bouton Test Examen 2 - Pour vérifier le fonctionnement */}
                <Link
                  href="/dashboard/examens/test-examen-2"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 font-bold hover:bg-orange-600 transition-colors"
                >
                  🧪 Test Examen 2
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Boutons pour lancer les examens - TOUJOURS VISIBLES */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">🎯 Choisissez votre examen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Examen 1 - Bleu */}
          <Link
            href="/dashboard/examens/nouveau?exam=1"
            className="bg-blue-100 border-2 border-blue-400 p-4 hover:bg-blue-200 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</span>
              <h3 className="font-bold text-blue-800">Examen #1</h3>
            </div>
            <p className="text-sm text-blue-600">40 questions • 45 min</p>
            <div className="mt-3 text-center bg-blue-600 text-white py-2 font-bold group-hover:bg-blue-700">
              Lancer →
            </div>
          </Link>

          {/* Examen 2 - Orange */}
          <Link
            href="/dashboard/examens/nouveau?exam=2"
            className="bg-orange-100 border-2 border-orange-400 p-4 hover:bg-orange-200 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</span>
              <h3 className="font-bold text-orange-800">Examen #2</h3>
            </div>
            <p className="text-sm text-orange-600">40 questions • 45 min</p>
            <div className="mt-3 text-center bg-orange-500 text-white py-2 font-bold group-hover:bg-orange-600">
              Lancer →
            </div>
          </Link>

          {/* Examen 3 - Vert */}
          <Link
            href="/dashboard/examens/nouveau?exam=3"
            className="bg-green-100 border-2 border-green-400 p-4 hover:bg-green-200 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</span>
              <h3 className="font-bold text-green-800">Examen #3</h3>
            </div>
            <p className="text-sm text-green-600">40 questions • 45 min</p>
            <div className="mt-3 text-center bg-green-600 text-white py-2 font-bold group-hover:bg-green-700">
              Lancer →
            </div>
          </Link>

          {/* Examen 4 - Violet */}
          <Link
            href="/dashboard/examens/nouveau?exam=4"
            className="bg-purple-100 border-2 border-purple-400 p-4 hover:bg-purple-200 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</span>
              <h3 className="font-bold text-purple-800">Examen #4</h3>
            </div>
            <p className="text-sm text-purple-600">40 questions • 45 min</p>
            <div className="mt-3 text-center bg-purple-600 text-white py-2 font-bold group-hover:bg-purple-700">
              Lancer →
            </div>
          </Link>

          {/* Examen 5 - Rose */}
          <Link
            href="/dashboard/examens/nouveau?exam=5"
            className="bg-pink-100 border-2 border-pink-400 p-4 hover:bg-pink-200 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg">5</span>
              <h3 className="font-bold text-pink-800">Examen #5</h3>
            </div>
            <p className="text-sm text-pink-600">40 questions • 45 min</p>
            <div className="mt-3 text-center bg-pink-600 text-white py-2 font-bold group-hover:bg-pink-700">
              Lancer →
            </div>
          </Link>
        </div>
      </div>

      {/* Statistiques - Visibles pour tous sauf gratuits sans historique */}
      {!examCredits?.isFree || examensHistory.length > 0 ? (
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
      ) : null}

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
