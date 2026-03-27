'use client';

import Link from 'next/link';
import { X, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState<boolean | null>(null);

  useEffect(() => {
    const closed = localStorage.getItem('announcement-banner-closed');
    setIsVisible(closed !== 'true');
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('announcement-banner-closed', 'true');
  };

  // Retourner un placeholder de même hauteur pendant le check pour éviter le CLS
  if (isVisible === null) return <div className="h-[52px] bg-pink-50 border-b border-pink-200" />;
  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 border-b border-pink-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center justify-center gap-2 text-sm sm:text-base">
            <span className="font-bold text-pink-900">📋</span>
            <p className="text-pink-900 text-center">
              <span className="font-semibold">La liste des centres agréés pour l'Examen Civique 2026 est maintenant disponible.</span>
              <Link 
                href="https://francais.cci-paris-idf.fr/candidat"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center gap-1 text-pink-700 hover:text-pink-900 font-semibold underline underline-offset-2 transition-colors"
              >
                En savoir plus
                <ExternalLink className="w-4 h-4" />
              </Link>
            </p>
          </div>
          
          <button
            onClick={handleClose}
            className="flex-shrink-0 p-1 rounded-lg hover:bg-pink-200 transition-colors"
            aria-label="Fermer la bannière"
          >
            <X className="w-5 h-5 text-pink-900" />
          </button>
        </div>
      </div>
    </div>
  );
}
