'use client';

import { Bell, Search, User } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="h-14 lg:h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8">
      {/* Titre - avec espace pour le burger menu sur mobile */}
      <div className="pl-12 lg:pl-0 min-w-0 flex-1">
        <h1 className="text-base lg:text-xl font-semibold text-text-primary truncate">{title}</h1>
        {subtitle && (
          <p className="text-xs lg:text-sm text-text-muted truncate hidden sm:block">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-2 lg:gap-4 flex-shrink-0">
        {/* Search - caché sur mobile, avec toggle */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="input-field pl-10 w-40 lg:w-64"
          />
        </div>

        {/* Bouton recherche mobile */}
        <button 
          className="md:hidden p-2 hover:bg-gray-100 transition-colors"
          onClick={() => setShowSearch(!showSearch)}
          aria-label="Rechercher"
        >
          <Search className="w-5 h-5 text-text-secondary" />
        </button>

        {/* Notifications */}
        <button className="relative p-2 hover:bg-gray-100 transition-colors" aria-label="Notifications">
          <Bell className="w-5 h-5 text-text-secondary" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-error"></span>
        </button>

        {/* User - simplifié sur mobile */}
        <button className="flex items-center gap-2 p-2 hover:bg-gray-100 transition-colors">
          <div className="w-8 h-8 bg-primary-100 flex items-center justify-center">
            <User className="w-4 h-4 text-primary-600" />
          </div>
          <span className="hidden lg:inline text-sm font-medium text-text-primary">Admin</span>
        </button>
      </div>

      {/* Barre de recherche mobile en plein écran */}
      {showSearch && (
        <div className="md:hidden absolute left-0 right-0 top-14 bg-white border-b border-gray-200 p-3 z-30">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Rechercher..."
              className="input-field pl-10 w-full"
              autoFocus
              onBlur={() => setShowSearch(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}
