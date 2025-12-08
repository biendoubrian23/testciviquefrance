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
    <header className="h-14 sm:h-16 bg-white border-b border-gray-200 flex items-center justify-between px-3 sm:px-6 sticky top-0 z-30">
      {/* Menu burger (mobile uniquement) */}
      <button 
        onClick={onMenuClick}
        className="lg:hidden p-2 -ml-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
        aria-label="Ouvrir le menu"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <Menu className="w-6 h-6" />
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
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher une question, un thème..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all text-base"
            style={{ fontSize: '16px' }} /* Empêche le zoom sur iOS */
          />
        </div>
      </div>

      {/* Actions droite */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Bouton recherche mobile */}
        <button 
          className="sm:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
          aria-label="Rechercher"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <Search className="w-5 h-5" />
        </button>

        {/* Notifications */}
        <button 
          className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
          aria-label="Notifications"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary-600 rounded-full" />
        </button>

        {/* Avatar - version simplifiée sur mobile */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium text-gray-900">
              {profile?.prenom ? `${profile.prenom} ${profile.nom || ''}`.trim() : 'Utilisateur'}
            </p>
            <p className="text-xs text-gray-500">
              {(() => {
                const extendedProfile = profile as any;
                if (!extendedProfile?.is_premium) return 'Membre gratuit';
                
                // Différencier selon le plan souscrit
                if (extendedProfile?.stripe_price_id === 'price_1Sc3rPEuT9agNbEU65mDE4RP') {
                  return 'Membre Premium'; // Plan à 6,99€
                } else if (extendedProfile?.stripe_price_id === 'price_1Sc3qxEuT9agNbEUdX0RkLM4') {
                  return 'Membre Standard'; // Plan à 2,99€
                } else {
                  return 'Membre Premium'; // Par défaut si is_premium = true
                }
              })()}
            </p>
          </div>
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-50 flex items-center justify-center text-primary-600 font-semibold border border-primary-100 flex-shrink-0">
            {profile?.prenom?.[0]?.toUpperCase() || profile?.email?.[0]?.toUpperCase() || 'U'}
          </div>
        </div>
      </div>
    </header>
  );
}
