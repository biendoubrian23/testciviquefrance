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
      <div className="bg-white max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative">
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 hover:bg-gray-100 transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Contenu */}
        <div className="p-4 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
            Débloquez les Flashcards
          </h2>
          <p className="text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-8">
            {hasSubscription 
              ? 'Choisissez votre pack de flashcards pour réviser efficacement'
              : 'Les Flashcards nécessitent un abonnement Standard ou Premium'}
          </p>

          {/* Si pas d'abonnement, afficher les abonnements d'abord */}
          {!hasSubscription && (
            <>
              <div className="bg-amber-50 border border-amber-200 p-3 sm:p-4 mb-4 sm:mb-6 text-center">
                <p className="text-amber-800 font-medium text-sm sm:text-base">
                  ⚠️ Vous devez d&apos;abord souscrire à un abonnement pour accéder aux Flashcards
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {/* Pack Standard */}
                <div className="bg-white border-2 border-primary-600 p-4 sm:p-6 shadow-lg flex flex-col">
                  <h3 className="text-xl font-bold text-primary-600 mb-2 text-center">Pack Standard</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-4xl font-bold text-gray-900">2,99€</span>
                    <span className="text-gray-500 text-sm">/semaine</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6 flex-grow">
                    <li className="flex items-center gap-2 text-sm">
                      <span className="text-primary-600">✓</span>
                      <span>1 session d&apos;examen blanc</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="text-primary-600">✓</span>
                      <span>Tests thématiques</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="text-primary-600">✓</span>
                      <span>Cours détaillés</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="text-primary-600">✓</span>
                      <span>Accès aux Flashcards (achat séparé)</span>
                    </li>
                  </ul>

                  <button
                    onClick={() => handlePurchase('standard')}
                    className="w-full py-3 bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Choisir Standard
                  </button>
                </div>

                {/* Pack Premium */}
                <div className="bg-white border-2 border-purple-600 p-4 sm:p-6 shadow-lg flex flex-col relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 sm:px-4 py-1 bg-purple-600 text-white text-xs sm:text-sm font-bold whitespace-nowrap">
                      Le plus populaire
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-purple-600 mb-2 text-center">Premium</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">6,99€</span>
                    <span className="text-gray-500 text-sm">/semaine</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6 flex-grow">
                    <li className="flex items-center gap-2 text-sm">
                      <span className="text-purple-600">✓</span>
                      <span className="font-semibold">3 examens blancs</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="text-purple-600">✓</span>
                      <span>Tests illimités</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="text-purple-600">✓</span>
                      <span>Statistiques avancées</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="text-purple-600">✓</span>
                      <span>Accès aux Flashcards (achat séparé)</span>
                    </li>
                  </ul>

                  <button
                    onClick={() => handlePurchase('premium')}
                    className="w-full py-3 bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Choisir Premium
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <p className="text-center text-gray-600 mb-6">
                  Une fois votre abonnement actif, vous pourrez acheter les Flashcards ci-dessous
                </p>
              </div>
            </>
          )}

          {/* Packs Flashcards */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6`}>
            {/* Flashcards 2 thèmes */}
            <div className={`bg-white border-2  p-4 sm:p-6 shadow-lg flex flex-col ${
              hasFlashcards2Themes ? 'border-emerald-600 bg-emerald-50' : 'border-emerald-600'
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
                  <span>Sans expiration</span>
                </li>
              </ul>

              {hasFlashcards2Themes ? (
                <div className="w-full py-3 bg-emerald-100 text-emerald-700 font-semibold text-center border-2 border-emerald-600">
                  ✅ Actif
                </div>
              ) : (
                <button
                  onClick={() => hasSubscription ? handlePurchase('flashcards2Themes') : null}
                  disabled={!hasSubscription}
                  className={`w-full py-3 font-semibold  transition-colors ${
                    hasSubscription
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {hasSubscription ? 'Acheter 1,20€' : 'Abonnement requis'}
                </button>
              )}
            </div>

            {/* Flashcards 5 thèmes */}
            <div className={`bg-white border-2  p-4 sm:p-6 shadow-lg flex flex-col relative ${
              hasFlashcards5Themes ? 'border-blue-600 bg-blue-50' : 'border-blue-600'
            }`}>
              {!hasFlashcards5Themes && hasSubscription && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 sm:px-4 py-1 bg-blue-600 text-white text-xs sm:text-sm font-bold  whitespace-nowrap">
                    Accès complet
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
                <div className="w-full py-3 bg-blue-100 text-blue-700 font-semibold text-center border-2 border-blue-600">
                  ✅ Actif
                </div>
              ) : (
                <button
                  onClick={() => hasSubscription ? handlePurchase('flashcards5Themes') : null}
                  disabled={!hasSubscription}
                  className={`w-full py-3 font-semibold  transition-colors ${
                    hasSubscription
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {hasSubscription ? 'Acheter 1,50€' : 'Abonnement requis'}
                </button>
              )}
            </div>
          </div>

          {/* Note importante */}
          <div className="mt-4 sm:mt-6 bg-blue-50 border border-blue-200 p-3 sm:p-4">
            <p className="text-xs sm:text-sm text-blue-800">
              <span className="font-semibold">💡 Note :</span> Les Flashcards sont des achats uniques sans expiration. 
              Ils restent actifs tant que vous avez un abonnement Standard ou Premium actif.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

