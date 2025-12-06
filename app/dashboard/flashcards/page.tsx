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
  Sparkles
} from 'lucide-react';

interface Flashcard {
  id: string;
  question: string;
  reponse: string;
  categorie: string;
}

// Flashcards de démonstration
const demoFlashcards: Flashcard[] = [
  {
    id: '1',
    question: 'Quelle est la devise de la République française ?',
    reponse: 'Liberté, Égalité, Fraternité',
    categorie: 'Valeurs de la République',
  },
  {
    id: '2',
    question: 'En quelle année a été adoptée la Déclaration des Droits de l\'Homme et du Citoyen ?',
    reponse: '1789',
    categorie: 'Histoire de France',
  },
  {
    id: '3',
    question: 'Quels sont les trois couleurs du drapeau français ?',
    reponse: 'Bleu, Blanc, Rouge',
    categorie: 'Symboles de la France',
  },
  {
    id: '4',
    question: 'Quel est l\'hymne national français ?',
    reponse: 'La Marseillaise',
    categorie: 'Symboles de la France',
  },
  {
    id: '5',
    question: 'Quelle loi de 1905 établit la séparation des Églises et de l\'État ?',
    reponse: 'La loi du 9 décembre 1905',
    categorie: 'Valeurs de la République',
  },
  {
    id: '6',
    question: 'Qui est le chef de l\'État en France ?',
    reponse: 'Le Président de la République',
    categorie: 'Institutions françaises',
  },
  {
    id: '7',
    question: 'À partir de quel âge peut-on voter en France ?',
    reponse: '18 ans',
    categorie: 'Droits et devoirs',
  },
  {
    id: '8',
    question: 'Combien de régions compte la France métropolitaine depuis 2016 ?',
    reponse: '13 régions',
    categorie: 'Géographie',
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
  const [knownCards, setKnownCards] = useState<Set<string>>(new Set());
  const [unknownCards, setUnknownCards] = useState<Set<string>>(new Set());

  const currentCard = flashcards[currentIndex];
  const progress = ((currentIndex + 1) / flashcards.length) * 100;

  // Fermer le paywall
  const closePaywall = () => {
    setShowPaywall(false);
    // En mode dev, on donne accès
    if (DEV_MODE) {
      setHasAccess(true);
    }
  };

  // Navigation
  const goToPrevious = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : flashcards.length - 1));
  };

  const goToNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev < flashcards.length - 1 ? prev + 1 : 0));
  };

  // Marquer comme connu/inconnu
  const markAsKnown = () => {
    setKnownCards((prev) => new Set([...prev, currentCard.id]));
    setUnknownCards((prev) => {
      const newSet = new Set(prev);
      newSet.delete(currentCard.id);
      return newSet;
    });
    goToNext();
  };

  const markAsUnknown = () => {
    setUnknownCards((prev) => new Set([...prev, currentCard.id]));
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
  };

  // Réinitialiser
  const resetProgress = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCards(new Set());
    setUnknownCards(new Set());
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
  return (
    <div className="max-w-2xl mx-auto px-2 sm:px-4 py-6">
      {/* En-tête */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Flashcards</h1>
        <p className="text-gray-600">
          Révisez les notions clés avec des cartes interactives
        </p>
      </div>

      {/* Stats rapides */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white border border-gray-200 p-4 text-center">
          <p className="text-2xl font-bold text-gray-900">{flashcards.length}</p>
          <p className="text-xs text-gray-500">Cartes</p>
        </div>
        <div className="bg-white border border-gray-200 p-4 text-center">
          <p className="text-2xl font-bold text-emerald-600">{knownCards.size}</p>
          <p className="text-xs text-gray-500">Maîtrisées</p>
        </div>
        <div className="bg-white border border-gray-200 p-4 text-center">
          <p className="text-2xl font-bold text-amber-600">{unknownCards.size}</p>
          <p className="text-xs text-gray-500">À revoir</p>
        </div>
      </div>

      {/* Barre de progression */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progression</span>
          <span>{currentIndex + 1}/{flashcards.length}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Carte */}
      <div 
        className="relative mb-6 cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div 
          className={`bg-white border-2 border-gray-200 rounded-xl p-6 sm:p-8 min-h-[250px] flex flex-col justify-center items-center text-center transition-all duration-300 ${
            isFlipped ? 'bg-primary-50 border-primary-200' : ''
          }`}
        >
          {/* Catégorie */}
          <span className="absolute top-4 left-4 text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
            {currentCard.categorie}
          </span>

          {/* Indicateur flip */}
          <span className="absolute top-4 right-4 text-xs text-gray-400">
            {isFlipped ? 'Réponse' : 'Question'}
          </span>

          {/* Contenu */}
          <div className="flex-1 flex items-center justify-center">
            <p className={`text-lg sm:text-xl font-medium ${isFlipped ? 'text-primary-700' : 'text-gray-900'}`}>
              {isFlipped ? currentCard.reponse : currentCard.question}
            </p>
          </div>

          {/* Instruction */}
          <p className="text-xs text-gray-400 mt-4">
            Cliquez pour {isFlipped ? 'voir la question' : 'voir la réponse'}
          </p>
        </div>
      </div>

      {/* Boutons Connu/Inconnu */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          onClick={markAsUnknown}
          className="flex items-center justify-center gap-2 py-3 bg-amber-50 border border-amber-200 text-amber-700 rounded-lg font-medium hover:bg-amber-100 transition-colors"
        >
          <X className="w-5 h-5" />
          <span>À revoir</span>
        </button>
        <button
          onClick={markAsKnown}
          className="flex items-center justify-center gap-2 py-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg font-medium hover:bg-emerald-100 transition-colors"
        >
          <Check className="w-5 h-5" />
          <span>Je sais</span>
        </button>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={goToPrevious}
          className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>

        <div className="flex gap-2">
          <button
            onClick={shuffleCards}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            <Shuffle className="w-4 h-4" />
            <span className="hidden sm:inline">Mélanger</span>
          </button>
          <button
            onClick={resetProgress}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline">Recommencer</span>
          </button>
        </div>

        <button
          onClick={goToNext}
          className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
