import { createAdminClient } from '@/lib/supabase/admin';

/**
 * Source de vérité unique pour les revenus : la table `revenue_events`.
 * Une ligne = un encaissement réel (jamais supprimée, marquée "refunded" si remboursée).
 *
 * Cette action charge TOUS les événements + joint les profils (email / nom)
 * pour permettre filtrage et agrégation côté client. La table reste petite
 * (~100 lignes aujourd'hui, ~quelques milliers à terme).
 */

export type RevenueEventRow = {
  id: string;
  user_id: string | null;
  event_type: 'subscription' | 'one_time';
  product_type: string;
  amount: number;
  currency: string | null;
  stripe_invoice_id: string | null;
  stripe_payment_id: string | null;
  stripe_customer_id: string | null;
  status: 'succeeded' | 'failed' | 'refunded';
  created_at: string;
  // Champs joints depuis profiles
  user_email: string | null;
  user_name: string | null;
};

export async function getAllRevenueEvents(): Promise<RevenueEventRow[]> {
  const supabase = createAdminClient();

  const { data: events, error } = await supabase
    .from('revenue_events')
    .select('*')
    .order('created_at', { ascending: false });

  if (error || !events) {
    console.error('getAllRevenueEvents error:', error);
    return [];
  }

  // 1) Jointure via user_id (le chemin principal)
  const userIds = Array.from(new Set(events.map(e => e.user_id).filter(Boolean) as string[]));
  let profilesById = new Map<string, { id: string; email: string | null; prenom: string | null; nom: string | null; stripe_customer_id: string | null }>();
  if (userIds.length > 0) {
    const { data } = await supabase
      .from('profiles')
      .select('id, email, prenom, nom, stripe_customer_id')
      .in('id', userIds);
    profilesById = new Map((data || []).map(p => [p.id, p]));
  }

  // 2) Fallback via stripe_customer_id pour les events orphelins (user_id null)
  const orphanCustomerIds = Array.from(new Set(
    events
      .filter(e => !e.user_id && e.stripe_customer_id)
      .map(e => e.stripe_customer_id as string),
  ));
  let profilesByCustomer = new Map<string, { id: string; email: string | null; prenom: string | null; nom: string | null }>();
  if (orphanCustomerIds.length > 0) {
    const { data } = await supabase
      .from('profiles')
      .select('id, email, prenom, nom, stripe_customer_id')
      .in('stripe_customer_id', orphanCustomerIds);
    profilesByCustomer = new Map((data || []).map(p => [p.stripe_customer_id as string, p]));
  }

  return events.map(e => {
    const profile =
      (e.user_id && profilesById.get(e.user_id)) ||
      (e.stripe_customer_id && profilesByCustomer.get(e.stripe_customer_id)) ||
      null;

    const fullName = profile
      ? [profile.prenom, profile.nom].filter(Boolean).join(' ').trim() || null
      : null;

    return {
      id: e.id,
      user_id: e.user_id,
      event_type: e.event_type,
      product_type: e.product_type,
      amount: Number(e.amount),
      currency: e.currency,
      stripe_invoice_id: e.stripe_invoice_id,
      stripe_payment_id: e.stripe_payment_id,
      stripe_customer_id: e.stripe_customer_id,
      status: e.status,
      created_at: e.created_at,
      user_email: profile?.email || null,
      user_name: fullName,
    };
  });
}

/**
 * Petit utilitaire pour les tuiles d'accueil — totaux globaux et fenêtres temporelles.
 * Lecture directe de revenue_events (la même source que la page Revenus).
 */
export async function getRevenueTotals() {
  const supabase = createAdminClient();
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
  const startOf7d = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
  const startOf30d = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString();

  const { data } = await supabase
    .from('revenue_events')
    .select('amount, status, created_at, event_type');

  const all = data || [];
  const net = (rows: typeof all) => rows.filter(r => r.status === 'succeeded').reduce((s, r) => s + Number(r.amount), 0);

  return {
    totalNet: net(all),
    totalGross: all.reduce((s, r) => s + Number(r.amount), 0),
    refundedSum: all.filter(r => r.status === 'refunded').reduce((s, r) => s + Number(r.amount), 0),
    todayNet: net(all.filter(r => r.created_at >= startOfDay)),
    last7dNet: net(all.filter(r => r.created_at >= startOf7d)),
    last30dNet: net(all.filter(r => r.created_at >= startOf30d)),
    eventsCount: all.length,
    refundedCount: all.filter(r => r.status === 'refunded').length,
  };
}
