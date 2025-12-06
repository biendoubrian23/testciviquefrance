'use client';

import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { 
  CreditCard, 
  Check,
  Crown,
  Zap,
  Gift,
  ArrowRight
} from 'lucide-react';

const packs = [
  { credits: 10, price: 3.99, popular: false },
  { credits: 25, price: 9.99, popular: true, savings: '10%' },
  { credits: 50, price: 17.99, popular: false, savings: '20%' },
  { credits: 100, price: 29.99, popular: false, savings: '35%' },
];

export default function CreditsPage() {
  const { profile } = useAuth();

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mes crédits</h1>
        <p className="text-gray-600 text-lg">
          Achetez des crédits pour continuer à vous entraîner
        </p>
      </div>

      {/* Solde actuel */}
      <div className="bg-primary-600 p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-primary-100 mb-2">Votre solde actuel</p>
            <p className="text-5xl font-bold">{profile?.credits ?? 0} crédits</p>
          </div>
          <div className="w-16 h-16 bg-white/20 flex items-center justify-center">
            <CreditCard className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Offre Premium */}
      <div className="bg-gray-50 border border-gray-200 p-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-primary-50 flex items-center justify-center flex-shrink-0">
            <Crown className="w-7 h-7 text-primary-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-gray-900">Passez Premium</h3>
              <span className="px-2 py-0.5 bg-primary-100 text-primary-700 text-xs font-medium">
                Recommandé
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Accès illimité à toutes les questions et examens blancs pendant 1 semaine
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-gray-700">
                <Check className="w-5 h-5 text-emerald-600" />
                Questions illimitées
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <Check className="w-5 h-5 text-emerald-600" />
                Examens blancs illimités
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <Check className="w-5 h-5 text-emerald-600" />
                Statistiques avancées
              </li>
            </ul>
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard/credits/premium"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 font-bold hover:bg-primary-700 transition-colors"
              >
                <Crown className="w-5 h-5" />
                13,99€ / semaine
              </Link>
              <span className="text-sm text-gray-500">Sans engagement</span>
            </div>
          </div>
        </div>
      </div>

      {/* Packs de crédits */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Acheter des crédits</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packs.map((pack) => (
            <div 
              key={pack.credits}
              className={`bg-white border-2 p-6 relative ${
                pack.popular ? 'border-primary-600' : 'border-gray-200'
              }`}
            >
              {pack.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-medium px-3 py-1">
                  Populaire
                </span>
              )}
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-primary-50 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900">{pack.credits}</p>
                <p className="text-gray-500">crédits</p>
              </div>
              <div className="text-center mb-4">
                <p className="text-2xl font-bold text-primary-600">{pack.price}€</p>
                {pack.savings && (
                  <p className="text-sm text-emerald-600 font-medium">Économisez {pack.savings}</p>
                )}
              </div>
              <button className={`w-full py-2.5 font-medium transition-colors ${
                pack.popular 
                  ? 'bg-primary-600 text-white hover:bg-primary-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}>
                Acheter
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Info crédits */}
      <div className="bg-gray-50 border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-4">Comment fonctionnent les crédits ?</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary-50 flex items-center justify-center flex-shrink-0">
              <span className="text-primary-600 font-bold">1</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Entraînement</p>
              <p className="text-sm text-gray-600">1 crédit par question</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary-50 flex items-center justify-center flex-shrink-0">
              <span className="text-primary-600 font-bold">2</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Examen blanc</p>
              <p className="text-sm text-gray-600">2 crédits par examen</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-emerald-50 flex items-center justify-center flex-shrink-0">
              <Gift className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">Inscription</p>
              <p className="text-sm text-gray-600">5 crédits offerts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
