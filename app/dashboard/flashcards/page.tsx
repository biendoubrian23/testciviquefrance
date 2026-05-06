'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useSupabase } from '@/hooks/useSupabase';
import FlashcardsUpgradeModal from '@/components/dashboard/FlashcardsUpgradeModal';
import { 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw,
  Shuffle,
  Check,
  X,
  RotateCw,
  BookOpen,
  Scale,
  Landmark,
  MapPin,
  Users,
  Lock,
  ArrowRight
} from 'lucide-react';

interface Flashcard {
  id: string;
  question: string;
  reponse: string;
}

interface Theme {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  cards: Flashcard[];
}

// 5 Thèmes avec 10 questions chacun basées sur le référentiel officiel
const themes: Theme[] = [
  {
    id: 'principes',
    name: 'Principes et valeurs',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-500',
    cards: [
      { id: 'p1', question: 'Quelle est la devise de la République française ?', reponse: 'Liberté, Égalité, Fraternité' },
      { id: 'p2', question: 'Quelles sont les trois couleurs du drapeau français (de gauche à droite) ?', reponse: 'Bleu, Blanc, Rouge' },
      { id: 'p3', question: 'Comment s\'appelle l\'hymne national français ?', reponse: 'La Marseillaise' },
      { id: 'p4', question: 'Quel est le symbole féminin de la République française ?', reponse: 'Marianne' },
      { id: 'p5', question: 'Quelle loi de 1905 établit la séparation des Églises et de l\'État ?', reponse: 'La loi du 9 décembre 1905 sur la laïcité' },
      { id: 'p6', question: 'Quel jour célèbre-t-on la fête nationale française ?', reponse: 'Le 14 juillet' },
      { id: 'p7', question: 'Quelle est la langue officielle de la République française selon la Constitution ?', reponse: 'Le français (article 2 de la Constitution)' },
      { id: 'p8', question: 'Que garantit le principe de laïcité ?', reponse: 'La liberté de conscience et l\'égalité de tous les citoyens, quelles que soient leurs croyances' },
      { id: 'p9', question: 'Quel animal est un symbole coutumier de la France ?', reponse: 'Le coq gaulois' },
      { id: 'p10', question: 'Selon l\'article 1er de la Constitution, la France est une République...', reponse: 'Indivisible, laïque, démocratique et sociale' },
    ]
  },
  {
    id: 'institutions',
    name: 'Institutions politiques',
    icon: <Landmark className="w-5 h-5" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-500',
    cards: [
      { id: 'i1', question: 'Qui est le chef de l\'État en France ?', reponse: 'Le Président de la République' },
      { id: 'i2', question: 'Quels sont les trois pouvoirs dans une démocratie ?', reponse: 'Législatif, Exécutif et Judiciaire' },
      { id: 'i3', question: 'Comment s\'appelle le Parlement français ? De quoi est-il composé ?', reponse: 'Le Parlement, composé de l\'Assemblée nationale et du Sénat' },
      { id: 'i4', question: 'Quelle est la durée du mandat du Président de la République ?', reponse: '5 ans (quinquennat)' },
      { id: 'i5', question: 'À partir de quel âge peut-on voter en France ?', reponse: '18 ans' },
      { id: 'i6', question: 'Qui nomme le Premier ministre ?', reponse: 'Le Président de la République' },
      { id: 'i7', question: 'Quelle est la durée du mandat d\'un député ?', reponse: '5 ans' },
      { id: 'i8', question: 'Quelle est la durée du mandat d\'un sénateur ?', reponse: '6 ans' },
      { id: 'i9', question: 'Combien y a-t-il d\'États membres dans l\'Union européenne (2024) ?', reponse: '27 États membres' },
      { id: 'i10', question: 'Quelles sont les trois principales institutions de l\'Union européenne ?', reponse: 'Le Parlement européen, la Commission européenne et le Conseil de l\'UE' },
    ]
  },
  {
    id: 'droits',
    name: 'Droits et devoirs',
    icon: <Scale className="w-5 h-5" />,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-500',
    cards: [
      { id: 'd1', question: 'Quel texte de 1789 garantit les droits fondamentaux en France ?', reponse: 'La Déclaration des droits de l\'homme et du citoyen' },
      { id: 'd2', question: 'La polygamie est-elle autorisée en France ?', reponse: 'Non, la polygamie est interdite en France' },
      { id: 'd3', question: 'Quelles sont les conditions pour voter en France ?', reponse: 'Avoir la nationalité française, être majeur (18 ans), jouir de ses droits civils et politiques' },
      { id: 'd4', question: 'Qu\'est-ce que l\'État de droit ?', reponse: 'Un système où la loi s\'applique à tous, y compris aux autorités publiques' },
      { id: 'd5', question: 'Les impôts sont-ils obligatoires en France ?', reponse: 'Oui, payer ses impôts est une obligation citoyenne' },
      { id: 'd6', question: 'L\'égalité homme-femme est-elle garantie par la loi ?', reponse: 'Oui, l\'égalité entre les femmes et les hommes est un principe constitutionnel' },
      { id: 'd7', question: 'Peut-on refuser de scolariser ses enfants en France ?', reponse: 'Non, l\'instruction est obligatoire de 3 à 16 ans' },
      { id: 'd8', question: 'Qu\'est-ce que la liberté d\'expression ?', reponse: 'Le droit d\'exprimer librement ses opinions, dans le respect de la loi' },
      { id: 'd9', question: 'La Constitution de la Ve République date de quelle année ?', reponse: '1958' },
      { id: 'd10', question: 'Qu\'interdit la loi en matière de discrimination ?', reponse: 'Toute discrimination fondée sur l\'origine, le sexe, la religion, l\'orientation sexuelle, etc.' },
    ]
  },
  {
    id: 'histoire',
    name: 'Histoire et géographie',
    icon: <MapPin className="w-5 h-5" />,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-500',
    cards: [
      { id: 'h1', question: 'En quelle année a eu lieu la Révolution française ?', reponse: '1789' },
      { id: 'h2', question: 'Quand les femmes ont-elles obtenu le droit de vote en France ?', reponse: '1944' },
      { id: 'h3', question: 'Qui a lancé l\'appel du 18 juin 1940 ?', reponse: 'Le Général de Gaulle' },
      { id: 'h4', question: 'En quelle année la peine de mort a-t-elle été abolie en France ?', reponse: '1981 (sous François Mitterrand)' },
      { id: 'h5', question: 'Combien d\'habitants compte la France environ ?', reponse: 'Environ 68 millions d\'habitants' },
      { id: 'h6', question: 'Quels sont les 4 principaux fleuves français ?', reponse: 'La Seine, la Loire, le Rhône et la Garonne' },
      { id: 'h7', question: 'Combien y a-t-il de DROM (Départements et Régions d\'Outre-Mer) ?', reponse: '5 : Guadeloupe, Martinique, Guyane, Réunion, Mayotte' },
      { id: 'h8', question: 'Quelles sont les dates de la Première Guerre mondiale ?', reponse: '1914-1918' },
      { id: 'h9', question: 'Quelles sont les dates de la Seconde Guerre mondiale ?', reponse: '1939-1945' },
      { id: 'h10', question: 'En quelle année l\'euro est-il devenu la monnaie de la France ?', reponse: '2002' },
    ]
  },
  {
    id: 'societe',
    name: 'Vivre en France',
    icon: <Users className="w-5 h-5" />,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-500',
    cards: [
      { id: 's1', question: 'Quel numéro appeler en cas d\'urgence médicale (SAMU) ?', reponse: '15 (ou 112 pour les urgences européennes)' },
      { id: 's2', question: 'L\'assurance responsabilité civile est-elle obligatoire ?', reponse: 'Oui, elle est obligatoire pour couvrir les dommages causés à autrui' },
      { id: 's3', question: 'Quelle est la durée légale du travail en France ?', reponse: '35 heures par semaine' },
      { id: 's4', question: 'L\'école est-elle gratuite et obligatoire en France ?', reponse: 'Oui, l\'école publique est gratuite et l\'instruction obligatoire de 3 à 16 ans' },
      { id: 's5', question: 'Quel organisme aide à la recherche d\'emploi en France ?', reponse: 'France Travail (anciennement Pôle Emploi)' },
      { id: 's6', question: 'Qu\'est-ce que l\'autorité parentale ?', reponse: 'L\'ensemble des droits et devoirs des parents envers leurs enfants mineurs' },
      { id: 's7', question: 'Doit-on déclarer ses revenus aux impôts chaque année ?', reponse: 'Oui, la déclaration de revenus est obligatoire chaque année' },
      { id: 's8', question: 'Qu\'est-ce que la Sécurité sociale ?', reponse: 'Le système de protection sociale qui prend en charge les frais de santé' },
      { id: 's9', question: 'Peut-on choisir librement son médecin en France ?', reponse: 'Oui, le libre choix du médecin est un droit du patient' },
      { id: 's10', question: 'Quelles vaccinations sont obligatoires pour les enfants nés après 2018 ?', reponse: '11 vaccins obligatoires (diphtérie, tétanos, polio, coqueluche, etc.)' },
    ]
  }
];

export default function FlashcardsPage() {
  const { user } = useAuth();
  const supabase = useSupabase();
  
  const [selectedTheme, setSelectedTheme] = useState<Theme>(themes[0]);
  const [flashcards, setFlashcards] = useState<Flashcard[]>(themes[0].cards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [knownCards, setKnownCards] = useState<Set<string>>(new Set());
  const [reviewCards, setReviewCards] = useState<Flashcard[]>([]);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);
  
  // États pour le contrôle d'accès
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [hasSubscription, setHasSubscription] = useState(false);
  const [hasFlashcards2, setHasFlashcards2] = useState(false);
  const [hasFlashcards5, setHasFlashcards5] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const currentDeck = isReviewMode ? reviewCards : flashcards;
  const currentCard = currentDeck[currentIndex];
  const progress = currentDeck.length > 0 ? ((currentIndex + 1) / currentDeck.length) * 100 : 0;

  // Charger les informations d'accès
  useEffect(() => {
    async function loadAccessInfo() {
      if (!user) return;

      const { data: profile } = await supabase
        .from('profiles')
        .select('subscription_status, flashcards_2_themes, flashcards_5_themes')
        .eq('id', user.id)
        .single();

      if (profile) {
        const subscriptionActive = profile.subscription_status === 'active' || profile.subscription_status === 'trialing';
        setHasSubscription(subscriptionActive);
        setHasFlashcards2(profile.flashcards_2_themes || false);
        setHasFlashcards5(profile.flashcards_5_themes || false);
      }
      
      setIsLoading(false);
    }

    loadAccessInfo();
  }, [user, supabase]);

  // Vérifier si un thème est accessible
  const isThemeUnlocked = (themeId: string): boolean => {
    if (hasFlashcards5) return true;
    if (hasFlashcards2 && (themeId === 'principes' || themeId === 'histoire')) return true;
    return false;
  };

  // Changer de thème
  const changeTheme = (theme: Theme) => {
    setSelectedTheme(theme);
    setFlashcards(theme.cards);
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCards(new Set());
    setReviewCards([]);
    setIsReviewMode(false);
    setSessionComplete(false);
  };

  // Retourner la carte avec animation
  const flipCard = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsFlipped(!isFlipped);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Navigation
  const goToPrevious = () => {
    if (isAnimating || currentIndex === 0) return;
    setIsAnimating(true);
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => prev - 1);
      setIsAnimating(false);
    }, 150);
  };

  const goToNext = () => {
    if (isAnimating) return;
    
    if (currentIndex >= currentDeck.length - 1) {
      if (isReviewMode) {
        setSessionComplete(true);
      } else if (reviewCards.length > 0) {
        setIsReviewMode(true);
        setCurrentIndex(0);
        setIsFlipped(false);
      } else {
        setSessionComplete(true);
      }
      return;
    }
    
    setIsAnimating(true);
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsAnimating(false);
    }, 150);
  };

  // Marquer comme connu
  const markAsKnown = () => {
    if (!currentCard || isAnimating) return;
    setKnownCards((prev) => new Set([...prev, currentCard.id]));
    setReviewCards((prev) => prev.filter(c => c.id !== currentCard.id));
    goToNext();
  };

  // Marquer à revoir
  const markAsReview = () => {
    if (!currentCard || isAnimating) return;
    if (!reviewCards.find(c => c.id === currentCard.id)) {
      setReviewCards((prev) => [...prev, currentCard]);
    }
    setKnownCards((prev) => {
      const newSet = new Set(prev);
      newSet.delete(currentCard.id);
      return newSet;
    });
    goToNext();
  };

  // Mélanger les cartes
  const shuffleCards = () => {
    const shuffled = [...selectedTheme.cards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
    setReviewCards([]);
    setKnownCards(new Set());
    setIsReviewMode(false);
    setSessionComplete(false);
  };

  // Réinitialiser
  const resetProgress = () => {
    setFlashcards(selectedTheme.cards);
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCards(new Set());
    setReviewCards([]);
    setIsReviewMode(false);
    setSessionComplete(false);
  };

  // Écran de fin de session
  if (sessionComplete) {
    return (
      <div className="max-w-2xl mx-auto px-2 sm:px-4 py-6">
        {/* Sélecteur de thèmes */}
        <div className="mb-6">
          <h2 className="text-sm font-medium text-gray-500 mb-3">Choisir un thème</h2>
          <div className="flex flex-wrap gap-2">
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => changeTheme(theme)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedTheme.id === theme.id
                    ? `${theme.bgColor} ${theme.color} border-2 ${theme.borderColor}`
                    : 'bg-white/40 border border-white/60 text-gray-600 hover:bg-white/55'
                }`}
              >
                {theme.icon}
                <span className="hidden sm:inline">{theme.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="glass-card p-8 text-center">
          <div className="w-20 h-20 bg-emerald-100/70 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {isReviewMode ? 'Révision terminée !' : 'Session terminée !'}
          </h2>
          <p className="text-gray-600 mb-2">
            Thème : <span className={`font-semibold ${selectedTheme.color}`}>{selectedTheme.name}</span>
          </p>
          <p className="text-gray-600 mb-6">
            Vous avez maîtrisé <span className="font-bold text-emerald-600">{knownCards.size}</span> carte{knownCards.size > 1 ? 's' : ''} sur {selectedTheme.cards.length}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={resetProgress}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-all active:scale-95"
              style={{ boxShadow: '0 4px 14px rgba(37,99,235,0.35)' }}
            >
              <RotateCcw className="w-5 h-5" />
              Recommencer
            </button>
            <button
              onClick={shuffleCards}
              className="flex items-center justify-center gap-2 px-6 py-3 glass-pill font-medium"
            >
              <Shuffle className="w-5 h-5" />
              Mélanger
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentCard) {
    return (
      <div className="max-w-2xl mx-auto px-2 sm:px-4 py-6">
        <p className="text-center text-gray-500">Aucune carte disponible</p>
      </div>
    );
  }

  // Page verrouillée si aucun accès aux flashcards (ni abonnement, ni achat flashcards)
  const hasFlashcardsAccess = hasSubscription || hasFlashcards2 || hasFlashcards5;
  
  if (!hasFlashcardsAccess) {
    return (
      <div className="max-w-2xl mx-auto px-3 sm:px-4 py-8 sm:py-12">
        {/* Lien retour vers les offres */}
        <a
          href="/dashboard/credits"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm sm:text-base font-medium">Voir les offres</span>
        </a>
        
        <div
          className="p-6 sm:p-8 text-center rounded-2xl"
          style={{
            backgroundColor: 'rgba(255,251,235,0.6)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(251,191,36,0.4)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
          }}
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-100/70 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600" />
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            Débloquez les Flashcards
          </h1>
          
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 max-w-md mx-auto">
            Accédez à des flashcards interactifs pour réviser efficacement 
            les thèmes clés de l&apos;examen civique.
          </p>
          
          <div
            className="p-3 sm:p-4 mb-4 sm:mb-6 rounded-xl"
            style={{
              backgroundColor: 'rgba(209,250,229,0.5)',
              border: '1px solid rgba(52,211,153,0.4)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <p className="text-xs sm:text-sm text-emerald-800 font-medium">
              🃏 Achetez les flashcards à l&apos;unité - sans abonnement requis !
            </p>
          </div>

          <button
            onClick={() => setShowUpgradeModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-all rounded-xl active:scale-95"
            style={{ boxShadow: '0 4px 14px rgba(5,150,105,0.35)' }}
          >
            <span>Voir les packs Flashcards</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Modal d'upgrade */}
        <FlashcardsUpgradeModal
          isOpen={showUpgradeModal}
          onClose={() => setShowUpgradeModal(false)}
          hasSubscription={hasSubscription}
          hasFlashcards2Themes={hasFlashcards2}
          hasFlashcards5Themes={hasFlashcards5}
        />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-2 sm:px-4 py-6">
      {/* En-tête */}
      <div className="mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          {isReviewMode ? '🔄 Révision' : 'Flashcards'}
        </h1>
        <p className="text-gray-600">
          {isReviewMode 
            ? `Revoyez les ${reviewCards.length} carte${reviewCards.length > 1 ? 's' : ''} à revoir`
            : 'Cliquez sur la carte pour révéler la réponse'
          }
        </p>
      </div>

      {/* Sélecteur de thèmes */}
      <div className="mb-6">
        <h2 className="text-sm font-medium text-gray-500 mb-3">Choisir un thème</h2>
        <div className="flex flex-wrap gap-2">
          {themes.map((theme) => {
            const isUnlocked = isThemeUnlocked(theme.id);
            return (
              <button
                key={theme.id}
                onClick={() => {
                  if (isUnlocked) {
                    changeTheme(theme);
                  } else {
                    setShowUpgradeModal(true);
                  }
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedTheme.id === theme.id
                    ? `${theme.bgColor} ${theme.color} border-2 ${theme.borderColor}`
                    : isUnlocked
                      ? 'bg-white/40 border border-white/60 text-gray-600 hover:bg-white/55'
                      : 'bg-white/20 border border-white/40 text-gray-400 cursor-pointer hover:border-amber-300/60'
                }`}
              >
                {!isUnlocked && <Lock className="w-4 h-4" />}
                {theme.icon}
                <span className="hidden sm:inline">{theme.name}</span>
              </button>
            );
          })}
        </div>
        
        {/* Info pack flashcards */}
        {!hasFlashcards5 && (
          <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
            <Lock className="w-3 h-3" />
            {hasFlashcards2 ? (
              <span>3 thèmes supplémentaires disponibles avec le pack 5 thèmes</span>
            ) : (
              <span>Pack 2 thèmes : Principes & Histoire · Pack 5 thèmes : tous les thèmes</span>
            )}
          </div>
        )}
      </div>

      {/* Stats rapides */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="glass-card p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">{currentDeck.length}</p>
          <p className="text-xs text-gray-500">Cartes</p>
        </div>
        <div
          className="p-4 text-center rounded-2xl"
          style={{
            backgroundColor: 'rgba(209,250,229,0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(52,211,153,0.3)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
          }}
        >
          <p className="text-2xl font-bold text-emerald-600">{knownCards.size}</p>
          <p className="text-xs text-gray-500">Maîtrisées</p>
        </div>
        <div
          className="p-4 text-center rounded-2xl"
          style={{
            backgroundColor: 'rgba(254,243,199,0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(251,191,36,0.3)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
          }}
        >
          <p className="text-2xl font-bold text-amber-600">{reviewCards.length}</p>
          <p className="text-xs text-gray-500">À revoir</p>
        </div>
      </div>

      {/* Barre de progression */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progression</span>
          <span>{currentIndex + 1}/{currentDeck.length}</span>
        </div>
        <div
          className="h-2 rounded-full overflow-hidden"
          style={{
            backgroundColor: 'rgba(255,255,255,0.45)',
            border: '1px solid rgba(255,255,255,0.6)',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.04)',
          }}
        >
          <div 
            className={`h-full transition-all duration-300 ${
              selectedTheme.id === 'principes' ? 'bg-blue-500' :
              selectedTheme.id === 'institutions' ? 'bg-purple-500' :
              selectedTheme.id === 'droits' ? 'bg-emerald-500' :
              selectedTheme.id === 'histoire' ? 'bg-amber-500' :
              'bg-rose-500'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Carte verrouillée si thème non accessible */}
      {!isThemeUnlocked(selectedTheme.id) ? (
        <div className="mb-6 glass-card p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-amber-600" />
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Thème verrouillé
          </h3>
          
          <p className="text-gray-600 mb-4">
            Ce thème nécessite l&apos;achat d&apos;un pack Flashcards
          </p>
          
          <div className="glass-subcard p-4 mb-4 text-sm text-left">
            {hasFlashcards2 ? (
              <div>
                <p className="font-medium text-gray-900 mb-2">✓ Pack 2 thèmes débloqué</p>
                <p className="text-gray-600">Débloquez 3 thèmes supplémentaires avec le pack 5 thèmes</p>
              </div>
            ) : (
              <div>
                <p className="font-medium text-gray-900 mb-2">📦 Packs disponibles :</p>
                <p className="text-gray-600">• Pack 2 thèmes (€1.20) : Principes + Histoire</p>
                <p className="text-gray-600">• Pack 5 thèmes (€1.50) : Tous les thèmes</p>
              </div>
            )}
          </div>
          
          <button
            onClick={() => setShowUpgradeModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all active:scale-95"
            style={{ boxShadow: '0 4px 14px rgba(245,158,11,0.35)' }}
          >
            <span>Débloquer ce thème</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      ) : (
        /* Carte avec animation 3D */
        <div 
          className="relative mb-6 cursor-pointer"
          onClick={flipCard}
          style={{ perspective: '1000px' }}
        >
          <div 
            className="relative w-full min-h-[280px] sm:min-h-[320px] transition-transform duration-500"
            style={{ 
              transformStyle: 'preserve-3d',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            }}
          >
          {/* Face avant - Question */}
          <div
            className="absolute inset-0 rounded-xl p-6 sm:p-8 flex flex-col"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              backgroundColor: 'rgba(255,255,255,0.55)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.70)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
            }}
          >
            {/* Catégorie */}
            <div className="flex justify-between items-start mb-4">
              <span className={`text-xs ${selectedTheme.color} ${selectedTheme.bgColor} px-3 py-1 rounded-full font-medium`}>
                {selectedTheme.name}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <RotateCw className="w-3 h-3" />
                Question
              </span>
            </div>

            {/* Question */}
            <div className="flex-1 flex items-center justify-center">
              <p className="text-xl sm:text-2xl font-semibold text-gray-900 text-center leading-relaxed">
                {currentCard.question}
              </p>
            </div>

            {/* Instruction */}
            <p className="text-center text-sm text-gray-400 mt-4">
              👆 Touchez pour voir la réponse
            </p>
          </div>

          {/* Face arrière - Réponse */}
          <div 
            className={`absolute inset-0 ${selectedTheme.bgColor} border-2 ${selectedTheme.borderColor} rounded-xl p-6 sm:p-8 flex flex-col`}
            style={{ 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            {/* Catégorie */}
            <div className="flex justify-between items-start mb-4">
              <span className={`text-xs ${selectedTheme.color} bg-white/50 px-3 py-1 rounded-full font-medium`}>
                {selectedTheme.name}
              </span>
              <span className={`text-xs ${selectedTheme.color} flex items-center gap-1`}>
                <Check className="w-3 h-3" />
                Réponse
              </span>
            </div>

            {/* Réponse */}
            <div className="flex-1 flex items-center justify-center">
              <p className={`text-2xl sm:text-3xl font-bold ${selectedTheme.color} text-center leading-relaxed`}>
                {currentCard.reponse}
              </p>
            </div>

            {/* Instruction */}
            <p className={`text-center text-sm ${selectedTheme.color} opacity-60 mt-4`}>
              👆 Touchez pour revoir la question
            </p>
          </div>
        </div>
        </div>
      )}

      {/* Boutons Je sais / À revoir - désactivés si thème verrouillé */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={markAsReview}
          disabled={isAnimating || !isThemeUnlocked(selectedTheme.id)}
          className="flex items-center justify-center gap-2 py-4 text-amber-700 rounded-xl font-semibold active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: 'rgba(254,243,199,0.6)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '2px solid rgba(251,191,36,0.5)',
          }}
        >
          <X className="w-5 h-5" />
          <span>À revoir</span>
        </button>
        <button
          onClick={markAsKnown}
          disabled={isAnimating || !isThemeUnlocked(selectedTheme.id)}
          className="flex items-center justify-center gap-2 py-4 text-emerald-700 rounded-xl font-semibold active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: 'rgba(209,250,229,0.6)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '2px solid rgba(52,211,153,0.5)',
          }}
        >
          <Check className="w-5 h-5" />
          <span>Je sais !</span>
        </button>
      </div>

      {/* Navigation - désactivée si thème verrouillé */}
      <div className="flex items-center justify-between">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0 || isAnimating || !isThemeUnlocked(selectedTheme.id)}
          className="glass-pill !p-3 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <div className="flex gap-2">
          <button
            onClick={shuffleCards}
            disabled={!isThemeUnlocked(selectedTheme.id)}
            className="glass-pill flex items-center gap-2 px-4 py-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Shuffle className="w-4 h-4" />
            <span className="hidden sm:inline">Mélanger</span>
          </button>
          <button
            onClick={resetProgress}
            disabled={!isThemeUnlocked(selectedTheme.id)}
            className="glass-pill flex items-center gap-2 px-4 py-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">Recommencer</span>
          </button>
        </div>

        <button
          onClick={goToNext}
          disabled={isAnimating || !isThemeUnlocked(selectedTheme.id)}
          className="glass-pill !p-3 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Info mode révision */}
      {reviewCards.length > 0 && !isReviewMode && (
        <div
          className="mt-6 p-4 rounded-xl text-center"
          style={{
            backgroundColor: 'rgba(254,243,199,0.5)',
            border: '1px solid rgba(251,191,36,0.35)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        >
          <p className="text-amber-700 text-sm">
            💡 Les cartes "À revoir" seront présentées à nouveau à la fin
          </p>
        </div>
      )}
      
      {/* Modal d'upgrade pour débloquer des thèmes */}
      <FlashcardsUpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        hasSubscription={hasSubscription}
        hasFlashcards2Themes={hasFlashcards2}
        hasFlashcards5Themes={hasFlashcards5}
      />
    </div>
  );
}
