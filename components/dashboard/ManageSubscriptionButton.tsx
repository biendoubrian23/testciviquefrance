'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { ExternalLink, Loader2 } from 'lucide-react';

interface ManageSubscriptionButtonProps {
  variant?: 'default' | 'discrete';
}

export default function ManageSubscriptionButton({ variant = 'default' }: ManageSubscriptionButtonProps) {
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

  // Style discret : petit texte gris
  if (variant === 'discrete') {
    return (
      <button
        onClick={handleManageSubscription}
        disabled={isLoading}
        className="text-xs text-gray-400 hover:text-gray-500 hover:underline transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Chargement...' : 'Gérer mon abonnement'}
      </button>
    );
  }

  // Style par défaut
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
