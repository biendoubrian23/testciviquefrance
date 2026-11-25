import Stripe from 'stripe';
import { ALL_PREMIUM_PRICE_IDS, ALL_STANDARD_PRICE_IDS } from '@/lib/stripe/plans';

// Les règles d'abonnement (25/11/2026), côté serveur seulement.
//
// - Un compte n'a jamais deux abonnements : le dernier pris annule les autres
//   (webhook, `annulerLesAutres`). Un client avait payé deux Premium à 6,99 €.
// - On ne monte qu'en gamme : Standard (2,99 €) vers Premium (6,99 €).
//   Tant qu'un Premium est en cours, le Standard est bloqué ; il redevient
//   possible quand le Premium est résilié ou que son prélèvement échoue.
// - La même formule ne se reprend pas tant qu'elle est en cours.
// - Un Premium résilié puis remplacé par un Standard va au bout de sa semaine :
//   le profil reste Premium, puis passe au Standard quand le Premium se termine.

export type Niveau = 'standard' | 'premium';

const NIVEAUX: Record<Niveau, number> = { standard: 1, premium: 2 };

// Statuts d'un abonnement qui prélève encore, ou va le faire.
const STATUTS_VIVANTS = ['active', 'trialing', 'past_due', 'unpaid', 'incomplete'];

export function niveauDuPrix(priceId?: string | null): Niveau | null {
  if (!priceId) return null;
  if (ALL_PREMIUM_PRICE_IDS.includes(priceId)) return 'premium';
  if (ALL_STANDARD_PRICE_IDS.includes(priceId)) return 'standard';
  return null;
}

/**
 * Les abonnements Standard ou Premium encore vivants d'un compte, sur tous ses
 * clients Stripe : chaque Payment Link payé peut créer un client à part, sous
 * l'id déjà connu du profil ou sous l'une de ses adresses e-mail.
 */
export async function abonnementsDuCompte(
  stripe: Stripe,
  { customerIds = [], emails = [] }: { customerIds?: (string | null | undefined)[]; emails?: (string | null | undefined)[] },
): Promise<Stripe.Subscription[]> {
  const clients = new Set(customerIds.filter((id): id is string => Boolean(id)));
  for (const email of new Set(emails.filter((e): e is string => Boolean(e)).map((e) => e.toLowerCase()))) {
    const trouves = await stripe.customers.list({ email, limit: 20 });
    trouves.data.forEach((c) => clients.add(c.id));
  }

  const abonnements: Stripe.Subscription[] = [];
  for (const customer of clients) {
    const liste = await stripe.subscriptions.list({ customer, status: 'all', limit: 20 });
    abonnements.push(
      ...liste.data.filter((s) => STATUTS_VIVANTS.includes(s.status) && niveauDuPrix(s.items.data[0]?.price?.id)),
    );
  }
  return abonnements;
}

/**
 * Peut-on acheter ce niveau ? Ne compte que les abonnements « en cours » :
 * actifs ou en essai, et non résiliés. Un abonnement résilié (fin de période)
 * ou dont le prélèvement a échoué ne bloque plus rien.
 */
export function refusAchat(niveau: Niveau, abonnements: Stripe.Subscription[]): string | null {
  const enCours = abonnements.filter((s) => ['active', 'trialing'].includes(s.status) && !s.cancel_at_period_end);
  const niveaux = enCours.map((s) => niveauDuPrix(s.items.data[0]?.price?.id)).filter((n): n is Niveau => Boolean(n));

  if (niveaux.includes(niveau)) {
    return 'Vous avez déjà cet abonnement. Pour le gérer, passez par « Gérer mon abonnement ».';
  }
  if (niveaux.some((n) => NIVEAUX[n] > NIVEAUX[niveau])) {
    return 'Vous avez déjà le Premium, qui comprend tout le Pack Standard. Le Standard redeviendra disponible si vous résiliez le Premium ou si son prélèvement échoue.';
  }
  return null;
}

// Un abonnement déjà résilié par le client, qui court jusqu'à la fin de sa période payée.
export function seTermineSeul(s: Stripe.Subscription): boolean {
  return s.cancel_at_period_end && ['active', 'trialing'].includes(s.status);
}

/**
 * Après un nouvel abonnement : annule tout de suite les autres du même compte,
 * sans prorata ni remboursement. Un abonnement que le client a déjà résilié
 * n'est pas touché : il va au bout de la semaine payée. Renvoie les ids annulés.
 */
export async function annulerLesAutres(
  stripe: Stripe,
  nouveau: string,
  compte: { customerIds?: (string | null | undefined)[]; emails?: (string | null | undefined)[] },
): Promise<string[]> {
  const autres = (await abonnementsDuCompte(stripe, compte)).filter((s) => s.id !== nouveau && !seTermineSeul(s));
  const annules: string[] = [];
  for (const s of autres) {
    try {
      await stripe.subscriptions.cancel(s.id, { prorate: false, invoice_now: false });
      annules.push(s.id);
    } catch (e) {
      console.error(`❌ Impossible d'annuler ${s.id} après le nouvel abonnement ${nouveau}:`, e);
    }
  }
  return annules;
}
