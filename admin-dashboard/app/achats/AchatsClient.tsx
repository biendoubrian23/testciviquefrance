'use client';

import { useState, useEffect, useCallback } from 'react';
import { StatCard, Card, Badge, DataTable } from '@/components/ui';
import { CreditCard, CheckCircle, Clock, XCircle, RefreshCw, Filter } from 'lucide-react';
import { Achat } from '@/types';

interface AchatWithUser extends Achat {
  user_email?: string;
}

interface RevenueStats {
  totalAchats: number;
  achatsCompleted: number;
  totalRevenue: number;
  todayRevenue: number;
  weekRevenue: number;
  monthRevenue: number;
}

interface AchatsClientProps {
  initialAchats: AchatWithUser[];
  initialTotal: number;
  initialStats: RevenueStats;
  initialPage: number;
  initialStatus: string;
}

export function AchatsClient({
  initialAchats,
  initialTotal,
  initialStats,
  initialPage,
  initialStatus,
}: AchatsClientProps) {
  const [achats, setAchats] = useState(initialAchats);
  const [total, setTotal] = useState(initialTotal);
  const [stats, setStats] = useState(initialStats);
  const [page, setPage] = useState(initialPage);
  const [status, setStatus] = useState(initialStatus);
  const [loading, setLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const totalPages = Math.ceil(total / 20);

  const productLabels: Record<string, string> = {
    pack_standard: 'Pack Standard',
    pack_premium: 'Pack Premium',
    pack_examen: 'Pack Examen',
    unlock_level: 'Déblocage niveau',
    no_timer: 'Mode sans chrono',
    flashcards_2: 'Flashcards 2 thèmes',
    flashcards_5: 'Flashcards 5 thèmes',
    flashcards_2_themes: 'Flashcards 2 thèmes',
    flashcards_5_themes: 'Flashcards 5 thèmes',
  };

  const statusConfig: Record<string, { label: string; variant: 'success' | 'warning' | 'error' | 'neutral' }> = {
    completed: { label: 'Complété', variant: 'success' },
    pending: { label: 'En attente', variant: 'warning' },
    failed: { label: 'Échoué', variant: 'error' },
    refunded: { label: 'Remboursé', variant: 'neutral' },
  };

  // Fonction de rafraîchissement
  const refreshData = useCallback(async () => {
    try {
      const response = await fetch(`/api/achats?page=${page}&status=${status}`);
      if (response.ok) {
        const data = await response.json();
        setAchats(data.achats || []);
        setTotal(data.total || 0);
        if (data.stats) setStats(data.stats);
        setLastUpdate(new Date());
      }
    } catch (error) {
      console.error('Erreur rafraîchissement:', error);
    }
  }, [page, status]);

  // Rafraîchissement automatique toutes les 15 secondes
  useEffect(() => {
    const interval = setInterval(refreshData, 15000);
    return () => clearInterval(interval);
  }, [refreshData]);

  // Charger les données quand le filtre change
  const handleFilterChange = async (newStatus: string) => {
    setStatus(newStatus);
    setPage(1);
    setLoading(true);
    try {
      const response = await fetch(`/api/achats?page=1&status=${newStatus}`);
      if (response.ok) {
        const data = await response.json();
        setAchats(data.achats || []);
        setTotal(data.total || 0);
        if (data.stats) setStats(data.stats);
        setLastUpdate(new Date());
      }
    } catch (error) {
      console.error('Erreur filtrage:', error);
    } finally {
      setLoading(false);
    }
  };

  // Pagination
  const goToPage = async (newPage: number) => {
    setPage(newPage);
    setLoading(true);
    try {
      const response = await fetch(`/api/achats?page=${newPage}&status=${status}`);
      if (response.ok) {
        const data = await response.json();
        setAchats(data.achats || []);
        setTotal(data.total || 0);
        setLastUpdate(new Date());
      }
    } catch (error) {
      console.error('Erreur pagination:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Compter par status
  const pendingCount = achats.filter(a => a.status === 'pending').length;
  const failedCount = achats.filter(a => a.status === 'failed').length;

  const columns = [
    {
      key: 'user',
      header: 'Utilisateur',
      render: (achat: AchatWithUser) => (
        <span className="text-sm">{achat.user_email}</span>
      ),
    },
    {
      key: 'product',
      header: 'Produit',
      render: (achat: AchatWithUser) => (
        <span className="font-medium text-sm">{productLabels[achat.product_type] || achat.product_type}</span>
      ),
    },
    {
      key: 'amount',
      header: 'Montant',
      render: (achat: AchatWithUser) => (
        <span className="font-semibold">{achat.amount.toFixed(2)} €</span>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      className: 'text-center',
      render: (achat: AchatWithUser) => {
        const config = statusConfig[achat.status] || { label: achat.status, variant: 'neutral' as const };
        return (
          <div className="flex justify-center">
            <Badge variant={config.variant}>{config.label}</Badge>
          </div>
        );
      },
    },
    {
      key: 'stripe',
      header: 'Stripe ID',
      render: (achat: AchatWithUser) => (
        <span className="text-xs text-text-muted font-mono">
          {achat.stripe_payment_id ? achat.stripe_payment_id.slice(-12) : '-'}
        </span>
      ),
    },
    {
      key: 'date',
      header: 'Date',
      render: (achat: AchatWithUser) => (
        <span className="text-text-muted text-sm">{formatDate(achat.created_at)}</span>
      ),
    },
  ];

  return (
    <div className={loading ? 'opacity-60' : ''}>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total achats"
          value={stats.totalAchats}
          icon={CreditCard}
          variant="primary"
        />
        <StatCard
          title="Complétés"
          value={stats.achatsCompleted}
          icon={CheckCircle}
          variant="success"
        />
        <StatCard
          title="En attente"
          value={pendingCount}
          icon={Clock}
          variant="warning"
        />
        <StatCard
          title="Échoués"
          value={failedCount}
          icon={XCircle}
          variant="error"
        />
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <div className="flex flex-wrap items-center gap-4">
          <Filter className="w-5 h-5 text-text-muted" />
          <select
            value={status}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="input-field w-48"
            title="Filtrer par statut"
          >
            <option value="all">Tous les status</option>
            <option value="completed">Complétés</option>
            <option value="pending">En attente</option>
            <option value="failed">Échoués</option>
            <option value="refunded">Remboursés</option>
          </select>
          <div className="ml-auto flex items-center gap-4">
            <button
              onClick={refreshData}
              className="flex items-center gap-1 px-3 py-1 text-xs bg-primary-600 text-white hover:bg-primary-700 transition-colors"
              title="Rafraîchir les données"
            >
              <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
              Actualiser
            </button>
            <span className="text-xs text-text-muted">
              {lastUpdate.toLocaleTimeString('fr-FR')}
            </span>
          </div>
        </div>
      </Card>

      {/* Table */}
      <Card noPadding>
        <DataTable
          columns={columns}
          data={achats}
          keyExtractor={(achat) => achat.id}
          emptyMessage="Aucun achat trouvé"
        />
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-text-muted">
            Page {page} sur {totalPages} ({total} transactions)
          </p>
          <div className="flex gap-2">
            {page > 1 && (
              <button
                onClick={() => goToPage(page - 1)}
                className="btn-secondary"
                disabled={loading}
              >
                Précédent
              </button>
            )}
            {page < totalPages && (
              <button
                onClick={() => goToPage(page + 1)}
                className="btn-primary"
                disabled={loading}
              >
                Suivant
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
