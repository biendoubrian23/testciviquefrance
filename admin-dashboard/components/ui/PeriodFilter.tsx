'use client';

import { useState } from 'react';

export type PeriodType = '15min' | '1h' | '1d' | '1w' | '1m' | '1y' | 'lifetime';

interface PeriodFilterProps {
  value: PeriodType;
  onChange: (period: PeriodType) => void;
  compact?: boolean;
}

const periods: { value: PeriodType; label: string; shortLabel: string }[] = [
  { value: '15min', label: '15 min', shortLabel: '15m' },
  { value: '1h', label: '1 heure', shortLabel: '1h' },
  { value: '1d', label: '1 jour', shortLabel: '1j' },
  { value: '1w', label: '1 semaine', shortLabel: '1s' },
  { value: '1m', label: '1 mois', shortLabel: '1m' },
  { value: '1y', label: '1 an', shortLabel: '1a' },
  { value: 'lifetime', label: 'Tout', shortLabel: '∞' },
];

export function PeriodFilter({ value, onChange, compact = false }: PeriodFilterProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {periods.map((period) => (
        <button
          key={period.value}
          onClick={() => onChange(period.value)}
          className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
            value === period.value
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {compact ? period.shortLabel : period.label}
        </button>
      ))}
    </div>
  );
}

// Fonction utilitaire pour calculer la date de début selon la période
export function getStartDateFromPeriod(period: PeriodType): Date | null {
  const now = new Date();
  
  switch (period) {
    case '15min':
      return new Date(now.getTime() - 15 * 60 * 1000);
    case '1h':
      return new Date(now.getTime() - 60 * 60 * 1000);
    case '1d':
      return new Date(now.getTime() - 24 * 60 * 60 * 1000);
    case '1w':
      return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    case '1m':
      return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    case '1y':
      return new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
    case 'lifetime':
      return null; // Pas de limite
    default:
      return new Date(now.getTime() - 24 * 60 * 60 * 1000);
  }
}

// Fonction pour obtenir le label de la période
export function getPeriodLabel(period: PeriodType): string {
  const found = periods.find(p => p.value === period);
  return found ? found.label : '1 jour';
}
