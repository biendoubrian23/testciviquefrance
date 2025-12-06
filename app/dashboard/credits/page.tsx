'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Check, Crown, ChevronDown } from 'lucide-react';

// Composant FAQ déroulant
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <h4 className="font-semibold text-gray-900 pr-4">{question}</h4>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 pb-4 px-4' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export default function OffresPage() {
  const { profile } = useAuth();
  const [selectedOffer, setSelectedOffer] = useState<string | null>('pack_standard');

  const handleSelectOffer = (offerId: string) => {
    setSelectedOffer(offerId);
  };

  const handlePurchase = () => {
    // TODO: Intégrer Stripe ici
    alert('Paiement Stripe à intégrer - Offre sélectionnée: ' + selectedOffer);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* En-tête */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Nos Offres</h1>
        <p className="text-gray-600 text-lg">
          Choisissez la formule adaptée à votre préparation
        </p>
      </div>

      {/* Statut actuel */}
      <div className="bg-gray-50 border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Votre statut</p>
            <p className="text-xl font-bold text-gray-900">
              {profile?.is_premium ? 'Premium' : 'Gratuit'}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">Niveaux restants</p>
              <p className="text-2xl font-bold text-primary-600">
                {profile?.is_premium ? '∞' : '3'}/jour
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Offres */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Pack Standard - 3,99€/semaine - Recommandé */}
        <div 
          onClick={() => handleSelectOffer('pack_standard')}
          className={`relative cursor-pointer transition-all duration-200 ${
            selectedOffer === 'pack_standard' 
              ? 'ring-2 ring-primary-600' 
              : ''
          }`}
        >
          {/* Badge Recommandé - couleur contrastante */}
          <div className="absolute -top-3 inset-x-0 flex justify-center z-10">
            <span className="px-4 py-1 bg-amber-400 text-amber-900 text-sm font-bold shadow-sm">
              Recommandé
            </span>
          </div>

          <div className="bg-primary-600 text-white p-6 pt-8 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="w-5 h-5" />
              <h3 className="text-lg font-bold">Pack Standard</h3>
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-bold">3,99€</span>
              <span className="text-primary-200 text-sm">/semaine</span>
            </div>
            <p className="text-primary-100 mb-4 text-sm">Accès pendant 7 jours</p>
            
            <ul className="space-y-2 mb-6 flex-grow text-sm">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>Tests thématiques</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>1 examen blanc</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>Cours détaillés</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>Corrigés expliqués</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>Suivi de progression</span>
              </li>
            </ul>

            <button 
              onClick={(e) => { e.stopPropagation(); handlePurchase(); }}
              className="w-full py-3 bg-white text-primary-600 font-semibold hover:bg-gray-50 transition-colors"
            >
              Sélectionner
            </button>
          </div>
        </div>

        {/* Pack Premium - 7,99€/semaine */}
        <div 
          onClick={() => handleSelectOffer('pack_premium')}
          className={`relative cursor-pointer transition-all duration-200 bg-white border-2 ${
            selectedOffer === 'pack_premium' 
              ? 'border-primary-600 ring-2 ring-primary-600' 
              : 'border-gray-200'
          } p-6 h-full flex flex-col`}
        >
          <h3 className="text-lg font-bold text-primary-600 mb-2">Premium</h3>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-4xl font-bold text-gray-900">7,99€</span>
            <span className="text-gray-500 text-sm">/semaine</span>
          </div>
          <p className="text-gray-500 mb-4 text-sm">Accès illimité pendant 7 jours</p>
          
          <ul className="space-y-2 mb-6 flex-grow text-sm">
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>Tests illimités</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>3 examens blancs</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>Statistiques avancées</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>Révision intelligente</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>Support prioritaire</span>
            </li>
          </ul>

          <button 
            onClick={(e) => { e.stopPropagation(); handlePurchase(); }}
            className={`w-full py-3 font-semibold transition-colors border-2 ${
              selectedOffer === 'pack_premium'
                ? 'bg-primary-600 text-white border-primary-600'
                : 'border-primary-600 text-primary-600 hover:bg-primary-50'
            }`}
          >
            Sélectionner
          </button>
        </div>

        {/* Pack Examen - 2,50€ à l'unité */}
        <div 
          onClick={() => handleSelectOffer('pack_examen')}
          className={`relative cursor-pointer transition-all duration-200 bg-white border-2 ${
            selectedOffer === 'pack_examen' 
              ? 'border-primary-600 ring-2 ring-primary-600' 
              : 'border-gray-200'
          } p-6 h-full flex flex-col`}
        >
          <h3 className="text-lg font-bold text-primary-600 mb-2">Pack Examen</h3>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-4xl font-bold text-gray-900">2,50€</span>
          </div>
          <p className="text-gray-500 mb-4 text-sm">À l&apos;unité • Sans expiration</p>
          
          <ul className="space-y-2 mb-6 flex-grow text-sm">
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>2 examens blancs complets</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>Conditions réelles d&apos;examen</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>Corrigés détaillés</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>Score et analyse</span>
            </li>
          </ul>

          <button 
            onClick={(e) => { e.stopPropagation(); handlePurchase(); }}
            className={`w-full py-3 font-semibold transition-colors border-2 ${
              selectedOffer === 'pack_examen'
                ? 'bg-primary-600 text-white border-primary-600'
                : 'border-primary-600 text-primary-600 hover:bg-primary-50'
            }`}
          >
            Sélectionner
          </button>
        </div>
      </div>

      {/* FAQ rapide - déroulante */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Questions fréquentes</h3>
        <div className="border border-gray-200">
          <FAQItem 
            question="Quelle est la différence entre Pack Standard et Premium ?"
            answer="Le Pack Standard (3,99€) inclut les tests thématiques et 1 examen blanc. Le Premium (7,99€) offre des tests illimités, 3 examens blancs, des statistiques avancées et un support prioritaire."
          />
          <FAQItem 
            question="Le Pack Examen expire-t-il ?"
            answer="Non, le Pack Examen à 2,50€ n'expire jamais. Vos 2 examens blancs restent disponibles jusqu'à ce que vous les utilisiez."
          />
          <FAQItem 
            question="Quels moyens de paiement acceptez-vous ?"
            answer="Nous acceptons les cartes bancaires (Visa, Mastercard, Amex) via notre partenaire de paiement sécurisé Stripe."
          />
        </div>
      </div>
    </div>
  );
}
