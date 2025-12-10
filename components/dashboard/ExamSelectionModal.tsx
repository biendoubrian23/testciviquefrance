'use client';

import { X, AlertTriangle, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ExamSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  examCredits: number;
  onNeedCredits: () => void;
}

export default function ExamSelectionModal({ isOpen, onClose, examCredits, onNeedCredits }: ExamSelectionModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const hasCredits = examCredits > 0;

  const handleExamClick = (examNumber: number) => {
    // Si pas de crédits, afficher la modal d'upgrade
    if (!hasCredits) {
      onNeedCredits();
      return;
    }

    if (examNumber === 1) {
      // Rediriger vers l'examen blanc 1
      router.push('/dashboard/examens/nouveau');
    } else if (examNumber === 2) {
      // Rediriger vers l'examen blanc 2
      router.push('/dashboard/examens/nouveau2');
    }
    // Pour les examens 3-5, ne rien faire pour le moment
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white w-full max-w-md mx-4 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Choisissez votre examen</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Alerte si pas de crédits */}
        {!hasCredits && (
          <div className="mx-6 mt-6 p-4 bg-amber-50 border border-amber-200 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-amber-800">
                Vous n&apos;avez pas de crédit d&apos;examen blanc
              </p>
              <p className="text-xs text-amber-600 mt-1">
                Achetez un pack ou un abonnement pour accéder aux examens
              </p>
            </div>
          </div>
        )}

        {/* Compteur de crédits */}
        <div className="mx-6 mt-4 p-3 bg-gray-50 border border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            <span className="font-bold text-gray-900">{examCredits}</span> examen{examCredits !== 1 ? 's' : ''} blanc{examCredits !== 1 ? 's' : ''} disponible{examCredits !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          {[1, 2, 3, 4, 5].map((examNumber) => {
            const isAvailable = examNumber === 1 || examNumber === 2;
            const isDisabled = !isAvailable;
            
            return (
              <button
                key={examNumber}
                onClick={() => handleExamClick(examNumber)}
                className={`w-full p-4 text-left border-2 transition-all ${
                  isAvailable
                    ? hasCredits 
                      ? 'border-primary-600 bg-primary-50 hover:bg-primary-100 cursor-pointer'
                      : 'border-amber-400 bg-amber-50 hover:bg-amber-100 cursor-pointer'
                    : 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-60'
                }`}
                disabled={isDisabled}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-semibold ${
                    isAvailable 
                      ? hasCredits ? 'text-primary-700' : 'text-amber-700'
                      : 'text-gray-500'
                  }`}>
                    Examen blanc {examNumber}
                  </span>
                  {!isAvailable && (
                    <span className="text-xs text-gray-400">Bientôt disponible</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          {hasCredits ? (
            <p className="text-sm text-gray-600 text-center">
              Les examens blancs 1 et 2 sont actuellement disponibles
            </p>
          ) : (
            <button
              onClick={onNeedCredits}
              className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-3 font-bold hover:bg-primary-700 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              Obtenir des examens blancs
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
