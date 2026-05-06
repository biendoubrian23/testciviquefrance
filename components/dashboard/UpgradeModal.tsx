'use client';

import { X } from 'lucide-react';
import { STRIPE_PLANS } from '@/lib/stripe/plans';
import { createClient } from '@/lib/supabase/client';
import { posthog } from '@/components/analytics/PostHogProvider';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  userType: 'free' | 'standard' | 'premium' | 'exam-only';
}

export default function UpgradeModal({ isOpen, onClose, userType }: UpgradeModalProps) {
  if (!isOpen) return null;

  const handlePurchase = async (planType: 'standard' | 'premium' | 'examen') => {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      alert('Vous devez être connecté pour effectuer un achat');
      return;
    }

    const plan = STRIPE_PLANS[planType];
    posthog.capture('checkout_started', { plan: planType, price: plan.price, source: 'upgrade_modal' });
    const checkoutUrl = `${plan.paymentLink}?prefilled_email=${encodeURIComponent(user.email || '')}`;
    window.location.href = checkoutUrl;
  };

  // Définir quelles offres afficher selon le type d'utilisateur
  const showStandard = userType === 'free';
  const showPremium = userType === 'free' || userType === 'standard';
  const showExamen = true; // Toujours afficher Pack Examen

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 glass-pill !p-2 text-gray-500"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Contenu */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Débloquez plus d'examens blancs
          </h2>
          <p className="text-gray-600 text-center mb-8">
            {userType === 'free' && 'Choisissez une offre pour accéder aux examens blancs'}
            {userType === 'standard' && 'Passez au Premium ou achetez des examens supplémentaires'}
            {userType === 'premium' && 'Achetez des examens blancs supplémentaires'}
            {userType === 'exam-only' && 'Vos examens Pack Examen sont épuisés. Achetez-en plus !'}
          </p>

          {/* Grille des offres */}
          <div className={`grid gap-6 ${showStandard && showPremium ? 'md:grid-cols-3' : showPremium ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-md mx-auto'}`}>
            
            {/* Pack Standard - Uniquement pour gratuit */}
            {showStandard && (
              <div className="glass-card p-6 flex flex-col ring-2 ring-primary-600">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-primary-600">Pack Standard</h3>
                </div>
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
                    <span>Corrigés expliqués</span>
                  </li>
                </ul>

                <button
                  onClick={() => handlePurchase('standard')}
                  className="glass-cta w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 active:scale-95"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <span>🎁</span> Commencer gratuitement
                </button>
              </div>
            )}

            {/* Pack Premium */}
            {showPremium && (
              <div className="glass-card p-6 relative flex flex-col ring-2 ring-purple-600">
                {userType === 'free' && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-purple-600 text-white text-sm font-bold rounded-full whitespace-nowrap">
                      Le plus populaire
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-purple-600">Premium</h3>
                </div>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-4xl font-bold text-gray-900">6,99€</span>
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
                    <span>Révision intelligente</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-purple-600">✓</span>
                    <span>Support prioritaire</span>
                  </li>
                </ul>

                <button
                  onClick={() => handlePurchase('premium')}
                  className="w-full py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-50/50 transition-all flex items-center justify-center gap-2 active:scale-95 bg-white/30 backdrop-blur-sm"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  <span>🎁</span> Commencer gratuitement
                </button>
              </div>
            )}

            {/* Pack Examen - Toujours visible */}
            {showExamen && (
              <div className="glass-card p-6 flex flex-col ring-2 ring-green-600">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-green-600">Pack Examen</h3>
                </div>
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-4xl font-bold text-gray-900">2,50€</span>
                  <span className="text-gray-500 text-sm">à l'unité</span>
                </div>
                
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-green-600">✓</span>
                    <span className="font-semibold">2 examens blancs</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-green-600">✓</span>
                    <span>Sans expiration</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-green-600">✓</span>
                    <span>Conditions réelles</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-green-600">✓</span>
                    <span>Corrigés détaillés</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <span className="text-red-500">✗</span>
                    <span>Pas de tests thématiques</span>
                  </li>
                </ul>

                <button
                  onClick={() => handlePurchase('examen')}
                  className="glass-cta-emerald w-full py-3 font-semibold rounded-xl active:scale-95"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  Acheter Pack Examen
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
