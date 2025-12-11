'use client';

import { X, AlertTriangle, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ExamSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  examCredits: number;
  onNeedCredits: () => void;
}

export default function ExamSelectionModal({ isOpen, onClose, examCredits, onNeedCredits }: ExamSelectionModalProps) {
  const router = useRouter();
  const [showWarning, setShowWarning] = useState(false);
  const [selectedExam, setSelectedExam] = useState<number | null>(null);

  if (!isOpen) return null;

  const hasCredits = examCredits > 0;

  const handleExamClick = (examNumber: number) => {
    // Si pas de crédits, afficher la modal d'upgrade
    if (!hasCredits) {
      onNeedCredits();
      return;
    }

    // Afficher l'avertissement avant de lancer l'examen
    setSelectedExam(examNumber);
    setShowWarning(true);
  };

  const handleConfirmStart = () => {
    if (selectedExam === null) return;

    // Rediriger vers l'examen sélectionné
    if (selectedExam === 1) {
      router.push('/dashboard/examens/nouveau');
    } else if (selectedExam === 2) {
      router.push('/dashboard/examens/nouveau2');
    } else if (selectedExam === 3) {
      router.push('/dashboard/examens/nouveau3');
    } else if (selectedExam === 4) {
      router.push('/dashboard/examens/nouveau4');
    } else if (selectedExam === 5) {
      router.push('/dashboard/examens/nouveau5');
    }
  };

  const handleCancelWarning = () => {
    setShowWarning(false);
    setSelectedExam(null);
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
                Vous n&apos;avez pas de crédit de session d&apos;examen blanc
              </p>
              <p className="text-xs text-amber-600 mt-1">
                Achetez un pack ou un abonnement pour accéder aux examens
              </p>
            </div>
          </div>
        )}

          <div className="mx-6 mt-4 p-3 bg-gray-50 border border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              <span className="font-bold text-gray-900">{examCredits}</span> session{examCredits !== 1 ? 's' : ''} d&apos;examen blanc{examCredits !== 1 ? 's' : ''} disponible{examCredits !== 1 ? 's' : ''}
            </p>
          </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          {[1, 2, 3, 4, 5].map((examNumber) => {
            const isAvailable = examNumber >= 1 && examNumber <= 5;
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
              Les examens blancs 1 à 5 sont actuellement disponibles
            </p>
          ) : (
            <button
              onClick={onNeedCredits}
              className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-3 font-bold hover:bg-primary-700 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              Obtenir des sessions d'examen blanc
            </button>
          )}
        </div>
      </div>

      {/* Popup d'avertissement avant de commencer l'examen */}
      {showWarning && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-10 p-4">
          <div className="bg-white max-w-lg w-full p-6 shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 flex items-center justify-center">
                <AlertTriangle className="w-7 h-7 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Important : Conditions de l&apos;examen
                </h3>
                <div className="text-gray-700 text-sm space-y-2 leading-relaxed">
                  <p>
                    <strong>Une fois l&apos;examen commencé</strong>, si vous :
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Revenez en arrière avec le bouton retour</li>
                    <li>Naviguez vers une autre page</li>
                    <li>Quittez la page de l&apos;examen</li>
                  </ul>
                  <p className="font-semibold text-amber-800 mt-3">
                    ⚠️ La session d&apos;examen sera automatiquement terminée et <strong>un crédit d&apos;examen sera consommé</strong>.
                  </p>
                  <p className="text-gray-600 text-xs mt-3">
                    💡 Vous pouvez actualiser la page (F5) sans perdre votre progression grâce à la sauvegarde automatique.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleCancelWarning}
                className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Retour au choix
              </button>
              <button
                onClick={handleConfirmStart}
                className="flex-1 px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold transition-colors"
              >
                J&apos;ai compris, commencer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
