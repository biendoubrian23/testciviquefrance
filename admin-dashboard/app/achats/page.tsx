import { Header } from '@/components/layout';
import { StatCard, Card, Badge, DataTable } from '@/components/ui';
import { getAchats, getRevenueStats } from '@/lib/actions/revenue';
import { CreditCard, CheckCircle, Clock, XCircle } from 'lucide-react';
import { Achat } from '@/types';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface AchatWithUser extends Achat {
  user_email?: string;
}

export default async function AchatsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; status?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || '1');
  const status = params.status || 'all';

  const [{ achats, total }, stats] = await Promise.all([
    getAchats(page, 20, status),
    getRevenueStats(),
  ]);

  const totalPages = Math.ceil(total / 20);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const productLabels: Record<string, string> = {
    pack_standard: 'Pack Standard',
    pack_premium: 'Pack Premium',
    pack_examen: 'Pack Examen',
    unlock_level: 'Deblocage niveau',
    no_timer: 'Mode sans chrono',
    flashcards_2: 'Flashcards 2 themes',
    flashcards_5: 'Flashcards 5 themes',
  };

  const statusConfig: Record<string, { label: string; variant: 'success' | 'warning' | 'error' | 'neutral' }> = {
    completed: { label: 'Complete', variant: 'success' },
    pending: { label: 'En attente', variant: 'warning' },
    failed: { label: 'Echoue', variant: 'error' },
    refunded: { label: 'Rembourse', variant: 'neutral' },
  };

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

  // Compter par status
  const completedCount = achats.filter(a => a.status === 'completed').length;
  const pendingCount = achats.filter(a => a.status === 'pending').length;
  const failedCount = achats.filter(a => a.status === 'failed').length;

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Historique des achats" 
        subtitle={`${total} transactions au total`}
      />

      <div className="p-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total achats"
            value={stats.totalAchats}
            icon={CreditCard}
            variant="primary"
          />
          <StatCard
            title="Completes"
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
            title="Echoues"
            value={failedCount}
            icon={XCircle}
            variant="error"
          />
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <form className="flex flex-wrap items-center gap-4">
            <select 
              name="status" 
              defaultValue={status}
              className="input-field w-48"
            >
              <option value="all">Tous les status</option>
              <option value="completed">Completes</option>
              <option value="pending">En attente</option>
              <option value="failed">Echoues</option>
              <option value="refunded">Rembourses</option>
            </select>
            <button type="submit" className="btn-primary">
              Filtrer
            </button>
          </form>
        </Card>

        {/* Table */}
        <Card noPadding>
          <DataTable
            columns={columns}
            data={achats}
            keyExtractor={(achat) => achat.id}
            emptyMessage="Aucun achat trouve"
          />
        </Card>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-text-muted">
              Page {page} sur {totalPages}
            </p>
            <div className="flex gap-2">
              {page > 1 && (
                <Link
                  href={`/achats?page=${page - 1}&status=${status}`}
                  className="btn-secondary"
                >
                  Precedent
                </Link>
              )}
              {page < totalPages && (
                <Link
                  href={`/achats?page=${page + 1}&status=${status}`}
                  className="btn-primary"
                >
                  Suivant
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
