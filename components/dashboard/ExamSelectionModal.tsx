'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, Loader2 } from 'lucide-react';

interface ExamSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  examCredits: number;
  examensHistory?: { exam_number: number; passed: boolean }[];
}

export default function ExamSelectionModal({
  isOpen,
  onClose,
  examCredits,
  examensHistory = []
}: ExamSelectionModalProps) {
  const router = useRouter();
  const [selectedExam, setSelectedExam] = useState<number | null>(null);
  const [isStarting, setIsStarting] = useState(false);

  // Obtenir le nombre de tentatives pour un examen
  const getAttemptCount = (examNumber: number) => {
    return examensHistory.filter(h => h.exam_number === examNumber).length;
  };

  const handleStartExam = async () => {
    if (!selectedExam || isStarting || examCredits === 0) return;
    
    setIsStarting(true);
    
    // Rediriger vers la page de l'examen avec le numéro sélectionné
    router.push(`/dashboard/examens/nouveau?exam=${selectedExam}`);
  };

  if (!isOpen) return null;

  const examens = [1, 2, 3, 4, 5];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Modal - Version simplifiée V2 */}
      <div className="relative bg-white w-full max-w-md shadow-xl rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-green-600 text-white p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">🎯 Quel examen passer ?</h2>
          <button onClick={onClose} className="p-1 hover:bg-primary-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Crédits */}
        <div className="p-3 bg-gray-50 border-b text-center">
          <span className={`font-bold ${examCredits > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {examCredits} crédit{examCredits !== 1 ? 's' : ''} disponible{examCredits !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Liste des examens - Version simple */}
        <div className="p-4 space-y-2">
          {examens.map((num) => {
            const attempts = getAttemptCount(num);
            const isSelected = selectedExam === num;
            
            return (
              <button
                key={num}
                onClick={() => setSelectedExam(num)}
                disabled={examCredits === 0}
                className={`w-full flex items-center justify-between p-3 border-2 transition-all ${
                  isSelected 
                    ? 'border-primary-500 bg-primary-50' 
                    : 'border-gray-200 hover:border-gray-300'
                } ${examCredits === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <span className="font-medium text-gray-900">
                  Examen blanc {num}
                </span>
                <span className={`text-sm ${attempts > 0 ? 'text-orange-600 font-medium' : 'text-gray-400'}`}>
                  {attempts > 0 ? `${attempts}x tenté` : 'Non tenté'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50"
          >
            Annuler
          </button>
          
          <button
            onClick={handleStartExam}
            disabled={!selectedExam || isStarting || examCredits === 0}
            className={`flex-1 py-2 font-bold flex items-center justify-center gap-2 ${
              selectedExam && examCredits > 0
                ? 'bg-primary-600 text-white hover:bg-primary-700'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isStarting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Chargement...
              </>
            ) : (
              'Commencer'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
