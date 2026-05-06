'use client';

import { useAuth } from '@/contexts/AuthContext';
import { Bell, Search, Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface DashboardHeaderProps {
  onMenuClick?: () => void;
}

export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const { profile } = useAuth();

  return (
    <header
      className="h-14 sm:h-16 flex items-center justify-between px-3 sm:px-6 fixed top-0 left-0 right-0 lg:left-64 z-30"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.55)',
        WebkitBackdropFilter: 'blur(24px)',
        backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
      }}
    >
      {/* Menu burger (mobile uniquement) */}
      <button
        onClick={onMenuClick}
        className="lg:hidden glass-pill !p-2 -ml-1 text-gray-700"
        aria-label="Ouvrir le menu"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Logo mobile (visible uniquement sur mobile) */}
      <div className="lg:hidden flex-shrink-0">
        <Link href="/dashboard">
          <Image
            src="/logo.png"
            alt="Test Civique France"
            width={115}
            height={115}
            className="w-[126px] h-[126px] object-contain"
          />
        </Link>
      </div>

      {/* Barre de recherche - cachée sur mobile, visible sur tablette/desktop */}
      <div className="hidden sm:block flex-1 max-w-xl lg:ml-0">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 z-10 pointer-events-none" />
          <input
            type="text"
            placeholder="Rechercher une question, un thème..."
            className="glass-input pl-11 rounded-full"
            style={{ fontSize: '16px' }} /* Empêche le zoom sur iOS */
          />
        </div>
      </div>

      {/* Actions droite */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Bouton recherche mobile */}
        <button
          className="sm:hidden glass-pill !p-2 text-gray-700"
          aria-label="Rechercher"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Notifications */}
        <button
          className="relative glass-pill !p-2 text-gray-700"
          aria-label="Notifications"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary-600 rounded-full ring-2 ring-white/70" />
        </button>

        {/* Avatar - version simplifiée sur mobile */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium text-gray-900">
              {profile?.prenom ? `${profile.prenom} ${profile.nom || ''}`.trim() : 'Utilisateur'}
            </p>
            <p className="text-xs text-gray-600">
              {(() => {
                const extendedProfile = profile as any;
                if (!extendedProfile?.is_premium) return 'Membre gratuit';

                // Différencier selon le plan souscrit (TEST + PRODUCTION)
                const premiumPriceIds = [
                  'price_1Sc3rPEuT9agNbEU65mDE4RP', // Premium TEST
                  'price_1Sc3BYIUG5GUejFZaWexcxzz', // Premium PRODUCTION
                ];
                const standardPriceIds = [
                  'price_1Sc3qxEuT9agNbEUdX0RkLM4', // Standard TEST
                  'price_1Sc3AqIUG5GUejFZagJyV8HC', // Standard PRODUCTION
                ];

                if (premiumPriceIds.includes(extendedProfile?.stripe_price_id)) {
                  return 'Membre Premium'; // Plan à 6,99€
                } else if (standardPriceIds.includes(extendedProfile?.stripe_price_id)) {
                  return 'Membre Standard'; // Plan à 2,99€
                } else {
                  return 'Membre Premium'; // Par défaut si is_premium = true
                }
              })()}
            </p>
          </div>
          <div
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-primary-700 font-semibold flex-shrink-0"
            style={{
              backgroundColor: 'rgba(239, 246, 255, 0.7)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.7)',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.9), 0 2px 8px rgba(37, 99, 235, 0.15)',
            }}
          >
            {profile?.prenom?.[0]?.toUpperCase() || profile?.email?.[0]?.toUpperCase() || 'U'}
          </div>
        </div>
      </div>
    </header>
  );
}
