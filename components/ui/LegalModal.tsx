'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  lastUpdate: string;
  sections: Array<{
    title: string;
    content: string;
  }>;
}

export default function LegalModal({ isOpen, onClose, title, lastUpdate, sections }: LegalModalProps) {
  // Bloquer le scroll du body quand le modal est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Fermer avec la touche Échap
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 z-50 animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="bg-white w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl animate-slide-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between p-6 border-b border-gray-200 flex-shrink-0">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                {title}
              </h2>
              <p className="text-sm text-gray-500">
                Dernière mise à jour : {lastUpdate}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 transition-colors ml-4 flex-shrink-0"
              aria-label="Fermer"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Contenu scrollable */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="prose prose-blue max-w-none">
              {sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-primary-500 pb-2 inline-block">
                    {section.title}
                  </h3>
                  <div 
                    className="text-gray-700 leading-relaxed whitespace-pre-line"
                    dangerouslySetInnerHTML={{ 
                      __html: section.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>') 
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end p-6 border-t border-gray-200 bg-gray-50 flex-shrink-0">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-md"
            >
              J'ai compris
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
