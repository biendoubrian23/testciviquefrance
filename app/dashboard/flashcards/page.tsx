'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useSupabase } from '@/hooks/useSupabase';
import { 
  Layers, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw,
  Shuffle,
  Check,
  X,
  Lock,
  Sparkles,
  RotateCw
} from 'lucide-react';

interface Flashcard {
  id: string;
  question: string;
  reponse: string;
  categorie: string;
}

// Flashcards de démonstration - Questions simples et basiques
const demoFlashcards: Flashcard[] = [
  {
    id: '1',
    question: 'Quelle est la devise de la République française ?',
    reponse: 'Liberté, Égalité, Fraternité',
    categorie: 'Valeurs de la République',
  },
  {
    id: '2',
    question: 'Quelles sont les trois couleurs du drapeau français ?',
    reponse: 'Bleu, Blanc, Rouge',
    categorie: 'Symboles de la France',
  },
  {
    id: '3',
    question: 'Quel est l\'hymne national français ?',
    reponse: 'La Marseillaise',
    categorie: 'Symboles de la France',
  },
  {
    id: '4',
    question: 'Qui est le chef de l\'État en France ?',
    reponse: 'Le Président de la République',
    categorie: 'Institutions',
  },
  {
    id: '5',
    question: 'À partir de quel âge peut-on voter en France ?',
    reponse: '18 ans',
    categorie: 'Droits et devoirs',
  },
  {
    id: '6',
    question: 'Quelle loi de 1905 établit la séparation des Églises et de l\'État ?',
    reponse: 'La loi du 9 décembre 1905 (loi de laïcité)',
    categorie: 'Valeurs de la République',
  },
  {
    id: '7',
    question: 'Comment s\'appelle le symbole féminin de la République ?',
    reponse: 'Marianne',
    categorie: 'Symboles de la France',
  },
  {
    id: '8',
    question: 'Quel jour célèbre-t-on la fête nationale française ?',
    reponse: 'Le 14 juillet',
    categorie: 'Symboles de la France',
  },
];

export default function FlashcardsPage() {
  const { user } = useAuth();
  const supabase = useSupabase();
  
  // MODE DEV: Mettre à true pour activer les flashcards sans paiement
  const DEV_MODE = true;
  
  const [hasAccess, setHasAccess] = useState(DEV_MODE);
  const [showPaywall, setShowPaywall] = useState(!DEV_MODE);
  const [flashcards, setFlashcards] = useState<Flashcard[]>(demoFlashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [knownCards, setKnownCards] = useState<Set<string>>(new Set());
  const [reviewCards, setReviewCards] = useState<Flashcard[]>([]);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);

  const currentDeck = isReviewMode ? reviewCards : flashcards;
  const currentCard = currentDeck[currentIndex];
  const progress = currentDeck.length > 0 ? ((currentIndex + 1) / currentDeck.length) * 100 : 0;

  // Fermer le paywall
  const closePaywall = () => {
    setShowPaywall(false);
    if (DEV_MODE) {
      setHasAccess(true);
    }
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
    
    // Si on est à la dernière carte
    if (currentIndex >= currentDeck.length - 1) {
      if (isReviewMode) {
        // Fin de la révision
        setSessionComplete(true);
      } else if (reviewCards.length > 0) {
        // Proposer de revoir les cartes "À revoir"
        setIsReviewMode(true);
        setCurrentIndex(0);
        setIsFlipped(false);
      } else {
        // Toutes les cartes sont maîtrisées
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

  // Marquer comme connu - passe à la suivante
  const markAsKnown = () => {
    if (!currentCard || isAnimating) return;
    setKnownCards((prev) => new Set([...prev, currentCard.id]));
    // Retirer de reviewCards si présent
    setReviewCards((prev) => prev.filter(c => c.id !== currentCard.id));
    goToNext();
  };

  // Marquer à revoir - ajoute à la pile de révision et passe à la suivante
  const markAsReview = () => {
    if (!currentCard || isAnimating) return;
    // Ajouter à reviewCards si pas déjà présent
    if (!reviewCards.find(c => c.id === currentCard.id)) {
      setReviewCards((prev) => [...prev, currentCard]);
    }
    // Retirer de knownCards si présent
    setKnownCards((prev) => {
      const newSet = new Set(prev);
      newSet.delete(currentCard.id);
      return newSet;
    });
    goToNext();
  };

  // Mélanger les cartes
  const shuffleCards = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
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
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCards(new Set());
    setReviewCards([]);
    setIsReviewMode(false);
    setSessionComplete(false);
  };

  // Paywall Modal
  if (showPaywall) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
          {/* Bouton fermer (croix grise discrète) */}
          <button
            onClick={closePaywall}
            className="absolute top-3 right-3 p-1 text-gray-300 hover:text-gray-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center">
            {/* Icône */}
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Layers className="w-8 h-8 text-primary-600" />
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Flashcards de révision
            </h2>
            <p className="text-gray-600 mb-6">
              Mémorisez efficacement avec nos flashcards interactives pour réussir votre examen civique.
            </p>

            {/* Prix */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <p className="text-3xl font-bold text-primary-600">1,50 €</p>
              <p className="text-sm text-gray-500">Accès illimité aux flashcards</p>
            </div>

            {/* Bouton d'achat */}
            <button
              onClick={() => {
                // TODO: Intégrer le paiement
                alert('Paiement à intégrer');
              }}
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Débloquer les flashcards
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Page principale des flashcards
  
  // Écran de fin de session
  if (sessionComplete) {
    return (
      <div className="max-w-2xl mx-auto px-2 sm:px-4 py-6">
        <div className="bg-white border-2 border-gray-900 rounded-xl p-8 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {isReviewMode ? 'Révision terminée !' : 'Session terminée !'}
          </h2>
          <p className="text-gray-600 mb-6">
            Vous avez maîtrisé <span className="font-bold text-emerald-600">{knownCards.size}</span> carte{knownCards.size > 1 ? 's' : ''} sur {flashcards.length}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={resetProgress}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              Recommencer
            </button>
            <button
              onClick={shuffleCards}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              <Shuffle className="w-5 h-5" />
              Mélanger et recommencer
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

  return (
    <div className="max-w-2xl mx-auto px-2 sm:px-4 py-6">
      {/* En-tête */}
      <div className="mb-6">
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

      {/* Stats rapides */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white border-2 border-gray-900 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">{currentDeck.length}</p>
          <p className="text-xs text-gray-500">Cartes</p>
        </div>
        <div className="bg-white border-2 border-emerald-500 rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-emerald-600">{knownCards.size}</p>
          <p className="text-xs text-gray-500">Maîtrisées</p>
        </div>
        <div className="bg-white border-2 border-amber-500 rounded-lg p-4 text-center">
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
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Carte avec animation 3D */}
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
            className="absolute inset-0 bg-white border-2 border-gray-900 rounded-xl p-6 sm:p-8 flex flex-col"
            style={{ 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            {/* Catégorie */}
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {currentCard.categorie}
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
            className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-500 rounded-xl p-6 sm:p-8 flex flex-col"
            style={{ 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            {/* Catégorie */}
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs text-primary-600 bg-primary-200 px-3 py-1 rounded-full">
                {currentCard.categorie}
              </span>
              <span className="text-xs text-primary-500 flex items-center gap-1">
                <Check className="w-3 h-3" />
                Réponse
              </span>
            </div>

            {/* Réponse */}
            <div className="flex-1 flex items-center justify-center">
              <p className="text-2xl sm:text-3xl font-bold text-primary-700 text-center leading-relaxed">
                {currentCard.reponse}
              </p>
            </div>

            {/* Instruction */}
            <p className="text-center text-sm text-primary-400 mt-4">
              👆 Touchez pour revoir la question
            </p>
          </div>
        </div>
      </div>

      {/* Boutons Je sais / À revoir */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={markAsReview}
          disabled={isAnimating}
          className="flex items-center justify-center gap-2 py-4 bg-amber-50 border-2 border-amber-400 text-amber-700 rounded-xl font-semibold hover:bg-amber-100 active:scale-[0.98] transition-all disabled:opacity-50"
        >
          <X className="w-5 h-5" />
          <span>À revoir</span>
        </button>
        <button
          onClick={markAsKnown}
          disabled={isAnimating}
          className="flex items-center justify-center gap-2 py-4 bg-emerald-50 border-2 border-emerald-500 text-emerald-700 rounded-xl font-semibold hover:bg-emerald-100 active:scale-[0.98] transition-all disabled:opacity-50"
        >
          <Check className="w-5 h-5" />
          <span>Je sais !</span>
        </button>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0 || isAnimating}
          className="p-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <div className="flex gap-2">
          <button
            onClick={shuffleCards}
            className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            <Shuffle className="w-4 h-4" />
            <span className="hidden sm:inline">Mélanger</span>
          </button>
          <button
            onClick={resetProgress}
            className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">Recommencer</span>
          </button>
        </div>

        <button
          onClick={goToNext}
          disabled={isAnimating}
          className="p-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-30"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Info mode révision */}
      {reviewCards.length > 0 && !isReviewMode && (
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg text-center">
          <p className="text-amber-700 text-sm">
            💡 Les cartes "À revoir" seront présentées à nouveau à la fin
          </p>
        </div>
      )}
    </div>
  );
}
