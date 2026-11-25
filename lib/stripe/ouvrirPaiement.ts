import type { PlanType } from '@/lib/stripe/plans';

// Ouvre le paiement Stripe d'un plan en passant par /api/verify-stripe : c'est
// lui qui relie le paiement au compte et applique les règles d'abonnement
// (lib/stripe/abonnements.ts). Aucun bouton ne doit ouvrir un Payment Link
// directement. Renvoie le message d'erreur à afficher, ou null si la page part.
export async function ouvrirPaiement(planKey: PlanType, userEmail: string): Promise<string | null> {
  try {
    const response = await fetch('/api/verify-stripe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ planKey, userEmail }),
    });
    const data = await response.json();
    if (!data.success) {
      return data.error || 'Une erreur est survenue lors de la vérification du service de paiement.';
    }
    window.location.href = data.checkoutUrl;
    return null;
  } catch {
    return 'Une erreur inattendue est survenue. Veuillez réessayer dans quelques instants.';
  }
}
