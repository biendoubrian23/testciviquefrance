'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { ExternalLink, Loader2 } from 'lucide-react';

export default function ManageSubscriptionButton() {
  const { profile } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleManageSubscription = async () => {
    setIsLoading(true);
    
    try {
      // Le serveur récupère le customerId depuis la session (sécurisé)
      const response = await fetch('/api/create-portal-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      const { url } = await response.json();
      
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Erreur ouverture portail:', error);
      alert('Impossible d\'ouvrir le portail client');
    } finally {
      setIsLoading(false);
    }
  };

  if (!(profile as any)?.stripe_customer_id) {
    return null;
  }

  return (
    <button
      onClick={handleManageSubscription}
      disabled={isLoading}
      className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          Chargement...
        </>
      ) : (
        <>
          <ExternalLink className="w-4 h-4" />
          Gérer mon abonnement
        </>
      )}
    </button>
  );
}
