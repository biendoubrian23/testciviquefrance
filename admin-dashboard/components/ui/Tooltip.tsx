'use client';

import { useState, useRef, useEffect } from 'react';
import { HelpCircle, X } from 'lucide-react';

interface TooltipProps {
  title: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export function Tooltip({ title, children, position = 'bottom' }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Fermer au clic extérieur
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const positionClasses = {
    top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
    bottom: 'top-full mt-2 left-0',
    left: 'right-full mr-2 top-0',
    right: 'left-full ml-2 top-0',
  };

  return (
    <div className="relative inline-block" ref={tooltipRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors"
        title={title}
        type="button"
      >
        <HelpCircle className="w-4 h-4" />
      </button>

      {isOpen && (
        <div 
          className={`absolute z-50 ${positionClasses[position]} w-80 max-w-sm`}
        >
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-gray-900 text-sm">{title}</h4>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Composant pour une entrée avec explication
interface TooltipFieldProps {
  label: string;
  tooltip: React.ReactNode;
  children: React.ReactNode;
}

export function TooltipField({ label, tooltip, children }: TooltipFieldProps) {
  return (
    <div>
      <div className="flex items-center gap-1 mb-1">
        <label className="text-sm font-medium">{label}</label>
        <Tooltip title={label}>
          {tooltip}
        </Tooltip>
      </div>
      {children}
    </div>
  );
}
