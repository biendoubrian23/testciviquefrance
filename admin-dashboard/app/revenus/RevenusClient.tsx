'use client';

import { useMemo, useState } from 'react';
import { StatCard, Card, Badge } from '@/components/ui';
import { CreditCard, Wallet, RefreshCw, Users } from 'lucide-react';
import type { RevenueEventRow } from '@/lib/actions/revenue-events';

interface Props {
  initialEvents: RevenueEventRow[];
}

type EventTypeFilter = 'all' | 'subscription' | 'one_time';
type StatusFilter = 'all' | 'succeeded' | 'refunded';
type Tab = 'list' | 'by-customer';

const PRODUCT_LABELS: Record<string, string> = {
  standard: 'Standard',
  premium: 'Premium',
  pack_examen: 'Pack Examen',
  pack_standard: 'Pack Standard (legacy)',
  pack_premium: 'Pack Premium (legacy)',
  flashcards_2_themes: 'Flashcards 2 thèmes',
  flashcards_5_themes: 'Flashcards 5 thèmes',
  no_timer: 'Mode sans chrono',
  unlock_level: 'Déblocage niveau',
};

function labelProduct(t: string) {
  return PRODUCT_LABELS[t] || t;
}

function fmtMoney(n: number) {
  return `${n.toFixed(2)} €`;
}

function fmtDateTime(iso: string) {
  return new Date(iso).toLocaleString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

export function RevenusClient({ initialEvents }: Props) {
  const [tab, setTab] = useState<Tab>('list');
  const [typeFilter, setTypeFilter] = useState<EventTypeFilter>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [search, setSearch] = useState('');

  const hasActiveFilter =
    typeFilter !== 'all' ||
    statusFilter !== 'all' ||
    fromDate !== '' ||
    toDate !== '' ||
    search !== '';

  const resetFilters = () => {
    setTypeFilter('all');
    setStatusFilter('all');
    setFromDate('');
    setToDate('');
    setSearch('');
  };

  // --- Filtrage ---
  const filteredEvents = useMemo(() => {
    const fromTs = fromDate ? new Date(fromDate).getTime() : null;
    const toTs = toDate
      ? (() => { const d = new Date(toDate); d.setHours(23, 59, 59, 999); return d.getTime(); })()
      : null;
    const q = search.trim().toLowerCase();

    return initialEvents.filter(e => {
      if (typeFilter !== 'all' && e.event_type !== typeFilter) return false;
      if (statusFilter !== 'all' && e.status !== statusFilter) return false;
      const ts = new Date(e.created_at).getTime();
      if (fromTs !== null && ts < fromTs) return false;
      if (toTs !== null && ts > toTs) return false;
      if (q) {
        const haystack = [
          e.user_email,
          e.user_name,
          e.stripe_customer_id,
          e.stripe_invoice_id,
          e.stripe_payment_id,
          labelProduct(e.product_type),
        ].filter(Boolean).join(' ').toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [initialEvents, typeFilter, statusFilter, fromDate, toDate, search]);

  // --- Totaux ---
  const totals = useMemo(() => {
    const succeeded = filteredEvents.filter(e => e.status === 'succeeded');
    const refunded = filteredEvents.filter(e => e.status === 'refunded');
    return {
      count: filteredEvents.length,
      net: succeeded.reduce((s, e) => s + e.amount, 0),
      gross: filteredEvents.reduce((s, e) => s + e.amount, 0),
      refundedSum: refunded.reduce((s, e) => s + e.amount, 0),
      refundedCount: refunded.length,
    };
  }, [filteredEvents]);

  // --- Agrégation par client ---
  const byCustomer = useMemo(() => {
    const map = new Map<string, {
      key: string;
      email: string;
      name: string | null;
      stripeCustomerId: string | null;
      n: number;
      nRefunded: number;
      totalNet: number;
      lastPaidAt: string | null;
    }>();

    for (const e of filteredEvents) {
      const key = e.user_email || e.stripe_customer_id || 'inconnu';
      const existing = map.get(key) || {
        key,
        email: e.user_email || (e.stripe_customer_id ? `(Stripe ${e.stripe_customer_id})` : 'Inconnu'),
        name: e.user_name,
        stripeCustomerId: e.stripe_customer_id,
        n: 0,
        nRefunded: 0,
        totalNet: 0,
        lastPaidAt: null as string | null,
      };
      existing.n++;
      if (e.status === 'refunded') {
        existing.nRefunded++;
      } else if (e.status === 'succeeded') {
        existing.totalNet += e.amount;
      }
      if (!existing.lastPaidAt || new Date(e.created_at) > new Date(existing.lastPaidAt)) {
        existing.lastPaidAt = e.created_at;
      }
      if (!existing.name && e.user_name) existing.name = e.user_name;
      if (!existing.stripeCustomerId && e.stripe_customer_id) existing.stripeCustomerId = e.stripe_customer_id;
      map.set(key, existing);
    }

    return Array.from(map.values()).sort((a, b) => b.totalNet - a.totalNet);
  }, [filteredEvents]);

  return (
    <div>
      {/* Tuiles haut de page */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Encaissé net"
          value={fmtMoney(totals.net)}
          subtitle={`${totals.count} paiement${totals.count > 1 ? 's' : ''}`}
          icon={Wallet}
          variant="success"
        />
        <StatCard
          title="Encaissé brut"
          value={fmtMoney(totals.gross)}
          subtitle="Avant remboursements"
          icon={CreditCard}
          variant="primary"
        />
        <StatCard
          title="Remboursé"
          value={fmtMoney(totals.refundedSum)}
          subtitle={`${totals.refundedCount} ligne${totals.refundedCount > 1 ? 's' : ''}`}
          icon={RefreshCw}
          variant={totals.refundedCount > 0 ? 'warning' : 'default'}
        />
        <StatCard
          title="Clients distincts"
          value={byCustomer.length}
          subtitle="Sur le filtre actif"
          icon={Users}
          variant="info"
        />
      </div>

      {/* Filtres */}
      <Card noPadding className="mb-4">
        <div className="p-4 flex flex-wrap gap-3 items-end">
          <div>
            <label className="text-xs text-text-muted block mb-1">Du</label>
            <input
              type="date"
              aria-label="Date de début"
              value={fromDate}
              onChange={e => setFromDate(e.target.value)}
              className="px-3 py-2 border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="text-xs text-text-muted block mb-1">Au</label>
            <input
              type="date"
              aria-label="Date de fin"
              value={toDate}
              onChange={e => setToDate(e.target.value)}
              className="px-3 py-2 border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="text-xs text-text-muted block mb-1">Type</label>
            <select
              aria-label="Filtrer par type de paiement"
              value={typeFilter}
              onChange={e => setTypeFilter(e.target.value as EventTypeFilter)}
              className="px-3 py-2 border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">Tous</option>
              <option value="subscription">Abonnements</option>
              <option value="one_time">Achats uniques</option>
            </select>
          </div>
          <div>
            <label className="text-xs text-text-muted block mb-1">État</label>
            <select
              aria-label="Filtrer par état du paiement"
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value as StatusFilter)}
              className="px-3 py-2 border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">Tous</option>
              <option value="succeeded">Réussi</option>
              <option value="refunded">Remboursé</option>
            </select>
          </div>
          <div className="flex-1 min-w-[220px]">
            <label className="text-xs text-text-muted block mb-1">Recherche (email, ID Stripe…)</label>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="ex. jean.dupont@gmail.com"
              className="w-full px-3 py-2 border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          {hasActiveFilter && (
            <button
              type="button"
              onClick={resetFilters}
              className="px-3 py-2 border border-gray-300 text-sm hover:bg-gray-50 transition-colors"
            >
              Réinitialiser
            </button>
          )}
        </div>
      </Card>

      {/* Onglets */}
      <div className="flex gap-0 border-b border-gray-200">
        <button
          type="button"
          onClick={() => setTab('list')}
          className={`px-4 py-2 -mb-px font-medium text-sm border-b-2 transition-colors ${
            tab === 'list'
              ? 'border-primary-600 text-primary-600 bg-white'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Liste des paiements ({filteredEvents.length})
        </button>
        <button
          type="button"
          onClick={() => setTab('by-customer')}
          className={`px-4 py-2 -mb-px font-medium text-sm border-b-2 transition-colors ${
            tab === 'by-customer'
              ? 'border-primary-600 text-primary-600 bg-white'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Par client ({byCustomer.length})
        </button>
      </div>

      {/* Onglet : Liste des paiements */}
      {tab === 'list' && (
        <Card noPadding>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="table-header">
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Produit</th>
                  <th className="px-4 py-3 text-left">Client</th>
                  <th className="px-4 py-3 text-right">Montant</th>
                  <th className="px-4 py-3 text-center">État</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvents.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-text-muted">
                      Aucun paiement trouvé avec ces filtres
                    </td>
                  </tr>
                ) : (
                  filteredEvents.map(e => (
                    <tr key={e.id} className={`table-row ${e.status === 'refunded' ? 'opacity-60' : ''}`}>
                      <td className="px-4 py-3 text-sm whitespace-nowrap">{fmtDateTime(e.created_at)}</td>
                      <td className="px-4 py-3">
                        <Badge variant={e.event_type === 'subscription' ? 'info' : 'default'}>
                          {e.event_type === 'subscription' ? 'Abonnement' : 'Achat unique'}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-sm">{labelProduct(e.product_type)}</td>
                      <td className="px-4 py-3 text-sm">
                        <div className="font-medium">{e.user_email || (e.stripe_customer_id ? `(Stripe ${e.stripe_customer_id})` : '—')}</div>
                        {e.user_name && <div className="text-xs text-text-muted">{e.user_name}</div>}
                      </td>
                      <td
                        className={`px-4 py-3 text-right font-semibold whitespace-nowrap ${
                          e.status === 'refunded' ? 'line-through text-gray-400' : 'text-green-700'
                        }`}
                      >
                        {fmtMoney(e.amount)}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Badge
                          variant={
                            e.status === 'succeeded'
                              ? 'success'
                              : e.status === 'refunded'
                              ? 'warning'
                              : 'error'
                          }
                        >
                          {e.status === 'succeeded' ? 'Réussi' : e.status === 'refunded' ? 'Remboursé' : 'Échec'}
                        </Badge>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
              {filteredEvents.length > 0 && (
                <tfoot>
                  <tr className="bg-gray-50 font-bold">
                    <td colSpan={4} className="px-4 py-3 text-sm text-text-muted">
                      Total filtré ({filteredEvents.length} ligne{filteredEvents.length > 1 ? 's' : ''})
                    </td>
                    <td className="px-4 py-3 text-right text-green-700">
                      {fmtMoney(totals.net)}{' '}
                      <span className="text-xs text-text-muted font-normal">(net)</span>
                    </td>
                    <td className="px-4 py-3"></td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
        </Card>
      )}

      {/* Onglet : Par client */}
      {tab === 'by-customer' && (
        <Card noPadding>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="table-header">
                  <th className="px-4 py-3 text-left">Client</th>
                  <th className="px-4 py-3 text-center">Nb paiements</th>
                  <th className="px-4 py-3 text-center">Remboursés</th>
                  <th className="px-4 py-3 text-right">Total net</th>
                  <th className="px-4 py-3 text-left">Dernier paiement</th>
                </tr>
              </thead>
              <tbody>
                {byCustomer.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-8 text-center text-text-muted">
                      Aucun client trouvé avec ces filtres
                    </td>
                  </tr>
                ) : (
                  byCustomer.map(c => (
                    <tr key={c.key} className="table-row">
                      <td className="px-4 py-3 text-sm">
                        <div className="font-medium">{c.email}</div>
                        {c.name && <div className="text-xs text-text-muted">{c.name}</div>}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Badge variant="info">{c.n}</Badge>
                      </td>
                      <td className="px-4 py-3 text-center">
                        {c.nRefunded > 0 ? (
                          <Badge variant="warning">{c.nRefunded}</Badge>
                        ) : (
                          <span className="text-text-muted">—</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-green-700 whitespace-nowrap">
                        {fmtMoney(c.totalNet)}
                      </td>
                      <td className="px-4 py-3 text-sm text-text-muted whitespace-nowrap">
                        {c.lastPaidAt ? fmtDate(c.lastPaidAt) : '—'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
              {byCustomer.length > 0 && (
                <tfoot>
                  <tr className="bg-gray-50 font-bold">
                    <td className="px-4 py-3 text-sm text-text-muted">
                      Total ({byCustomer.length} client{byCustomer.length > 1 ? 's' : ''})
                    </td>
                    <td className="px-4 py-3 text-center">
                      {byCustomer.reduce((s, c) => s + c.n, 0)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {byCustomer.reduce((s, c) => s + c.nRefunded, 0) || '—'}
                    </td>
                    <td className="px-4 py-3 text-right text-green-700">
                      {fmtMoney(byCustomer.reduce((s, c) => s + c.totalNet, 0))}
                    </td>
                    <td className="px-4 py-3"></td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
        </Card>
      )}
    </div>
  );
}
