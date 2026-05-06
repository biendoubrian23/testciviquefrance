'use client';

import { X } from 'lucide-react';
import { STRIPE_PLANS } from '@/lib/stripe/plans';
import { createClient } from '@/lib/supabase/client';

interface FlashcardsUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  hasSubscription: boolean; // Standard ou Premium
  hasFlashcards2Themes?: boolean;
  hasFlashcards5Themes?: boolean;
}

export default function FlashcardsUpgradeModal({ 
  isOpen, 
  onClose, 
  hasSubscription,
  hasFlashcards2Themes = false,
  hasFlashcards5Themes = false
}: FlashcardsUpgradeModalProps) {
  if (!isOpen) return null;

  const handlePurchase = async (planType: 'flashcards2Themes' | 'flashcards5Themes' | 'standard' | 'premium') => {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      alert('Vous devez être connecté pour effectuer un achat');
      return;
    }

    const plan = STRIPE_PLANS[planType];
    const checkoutUrl = `${plan.paymentLink}?prefilled_email=${encodeURIComponent(user.email || '')}`;
    window.location.href = checkoutUrl;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="glass-card max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative">
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 glass-pill !p-2 text-gray-500 z-10"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Contenu */}
        <div className="p-4 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
            Débloquez les Flashcards
          </h2>
          <p className="text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-8">
            Choisissez votre pack de flashcards pour réviser efficacement
          </p>

          {/* Packs Flashcards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Flashcards 2 thèmes */}
            <div className={`glass-card p-4 sm:p-6 flex flex-col ${
              hasFlashcards2Themes ? 'ring-2 ring-emerald-600' : 'ring-2 ring-emerald-600'
            }`}>
              <h3 className="text-lg sm:text-xl font-bold text-emerald-600 mb-2 text-center">
                Flashcards 2 thèmes
              </h3>
              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">1,20€</span>
                <span className="text-gray-500 text-sm">achat unique</span>
              </div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-emerald-600">✓</span>
                  <span className="font-semibold">Principes et valeurs</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-emerald-600">✓</span>
                  <span className="font-semibold">Histoire et géographie</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-emerald-600">✓</span>
                  <span>Révision par flashcards</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-emerald-600">✓</span>
                  <span>Accès permanent</span>
                </li>
              </ul>

              {hasFlashcards2Themes ? (
                <div className="w-full py-3 bg-emerald-100/70 text-emerald-700 font-semibold text-center border-2 border-emerald-600 rounded-xl">
                  ✅ Actif
                </div>
              ) : (
                <button
                  onClick={() => handlePurchase('flashcards2Themes')}
                  className="glass-cta-emerald w-full py-3 font-semibold rounded-xl active:scale-95"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Acheter 1,20€
                </button>
              )}
            </div>

            {/* Flashcards 5 thèmes */}
            <div className="glass-card p-4 sm:p-6 flex flex-col relative ring-2 ring-blue-600">
              {!hasFlashcards5Themes && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 sm:px-4 py-1 bg-blue-600 text-white text-xs sm:text-sm font-bold whitespace-nowrap">
                    Meilleur rapport qualité-prix
                  </span>
                </div>
              )}
              
              <h3 className="text-lg sm:text-xl font-bold text-blue-600 mb-2 text-center">
                Flashcards 5 thèmes
              </h3>
              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">1,50€</span>
                <span className="text-gray-500 text-sm">achat unique</span>
              </div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  <span className="font-semibold">Tous les 5 thèmes</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  <span>Institutions politiques</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  <span>Droits et devoirs</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-blue-600">✓</span>
                  <span>Vivre en France</span>
                </li>
              </ul>

              {hasFlashcards5Themes ? (
                <div className="w-full py-3 bg-blue-100/70 text-blue-700 font-semibold text-center border-2 border-blue-600 rounded-xl">
                  ✅ Actif
                </div>
              ) : (
                <button
                  onClick={() => handlePurchase('flashcards5Themes')}
                  className="glass-cta w-full py-3 font-semibold rounded-xl active:scale-95"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Acheter 1,50€
                </button>
              )}
            </div>
          </div>

          {/* Note importante */}
          <div
            className="mt-4 sm:mt-6 p-3 sm:p-4 rounded-xl"
            style={{
              backgroundColor: 'rgba(209,250,229,0.4)',
              border: '1px solid rgba(52,211,153,0.35)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <p className="text-xs sm:text-sm text-emerald-800">
              <span className="font-semibold">💡 Note :</span> Les Flashcards sont des achats uniques permanents. 
              Aucun abonnement requis !
            </p>
          </div>

          {/* Section optionnelle pour s'abonner */}
          {!hasSubscription && (
            <div className="mt-6 pt-6 border-t border-white/40">
              <p className="text-center text-gray-600 text-sm mb-4">
                Vous souhaitez aussi accéder aux tests et examens blancs ?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => handlePurchase('standard')}
                  className="px-4 py-2 border-2 border-primary-600 text-primary-600 font-medium hover:bg-primary-50/50 transition-all text-sm rounded-xl active:scale-95 bg-white/30 backdrop-blur-sm"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Pack Standard - 2,99€/sem
                </button>
                <button
                  onClick={() => handlePurchase('premium')}
                  className="px-4 py-2 border-2 border-purple-600 text-purple-600 font-medium hover:bg-purple-50/50 transition-all text-sm rounded-xl active:scale-95 bg-white/30 backdrop-blur-sm"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Premium - 6,99€/sem
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

