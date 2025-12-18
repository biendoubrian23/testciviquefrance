'use client';

import { Activity } from 'lucide-react';

export function RefreshBanner() {
  return (
    <div className="bg-primary-50 border border-primary-200 p-4 mb-8 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Activity className="w-5 h-5 text-primary-600" />
        <span className="text-sm text-primary-700">
          Les donnees sont actualisees a chaque chargement de page
        </span>
      </div>
      <button 
        onClick={() => window.location.reload()}
        className="btn-primary text-xs"
      >
        Actualiser
      </button>
    </div>
  );
}
