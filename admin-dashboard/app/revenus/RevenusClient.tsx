'use client';

import { useState, useEffect } from 'react';
import { StatCard, Card, Badge, ProgressBar } from '@/components/ui';
import { 
  CreditCard, 
  TrendingUp, 
  Users, 
  Calendar, 
  Clock, 
  RefreshCw,
  ChevronRight,
  AlertTriangle,
  Sparkles,
  Filter
} from 'lucide-react';
import Link from 'next/link';
import { Subscription, SubscriptionStats, SubscriptionFilter } from '@/lib/actions/subscriptions';

interface RevenusClientProps {
  initialSubscriptions: Subscription[];
  initialStats: SubscriptionStats;
  revenueHistory: Array<{
    week: string;
    date: string;
    standard: number;
    premium: number;
    total: number;
    revenue: number;
  }>;
}

export function RevenusClient({ initialSubscriptions, initialStats, revenueHistory }: RevenusClientProps) {
  const [subscriptions, setSubscriptions] = useState(initialSubscriptions);
  const [stats, setStats] = useState(initialStats);
  const [filter, setFilter] = useState<SubscriptionFilter>({
    type: 'all',
    status: 'all',
    period: 'all',
  });
  const [loading, setLoading] = useState(false);
  const [refreshingStats, setRefreshingStats] = useState(false);

  // Fonction pour rafraîchir les statistiques (churn inclus)
  const refreshStats = async () => {
    setRefreshingStats(true);
    try {
      const response = await fetch('/api/subscriptions/stats');
      const data = await response.json();
      if (data.stats) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Error refreshing stats:', error);
    } finally {
      setRefreshingStats(false);
    }
  };

  const handleFilterChange = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filter.type !== 'all') params.set('type', filter.type!);
      if (filter.status !== 'all') params.set('status', filter.status!);
      if (filter.period !== 'all') params.set('period', filter.period!);
      
      const response = await fetch(`/api/subscriptions?${params.toString()}`);
      const data = await response.json();
      setSubscriptions(data.subscriptions);
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFilterChange();
  }, [filter]);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className={loading ? 'opacity-60' : ''}>
      {/* Stats principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
        <StatCard
          title="Abonnes actifs"
          value={stats.totalActive}
          subtitle={`${stats.totalStandard} Std + ${stats.totalPremium} Prem`}
          icon={Users}
          variant="primary"
        />
        <StatCard
          title="Revenus/semaine"
          value={`${stats.weeklyRevenue.toFixed(2)} €`}
          icon={CreditCard}
          variant="success"
        />
        <StatCard
          title="Revenus/mois"
          value={`${stats.monthlyRevenue.toFixed(2)} €`}
          subtitle="Projection 4 semaines"
          icon={TrendingUp}
          variant="success"
        />
        <StatCard
          title="Nouveaux ce mois"
          value={stats.newThisMonth}
          icon={Sparkles}
          variant="info"
        />
        <StatCard
          title="Expirent cette sem."
          value={stats.expiringThisWeek}
          icon={Clock}
          variant={stats.expiringThisWeek > 0 ? 'warning' : 'default'}
        />
        <StatCard
          title="Taux de churn"
          value={`${stats.churnRate}%`}
          subtitle="Ce mois"
          icon={RefreshCw}
          variant={stats.churnRate > 10 ? 'error' : 'default'}
          action={{
            icon: RefreshCw,
            onClick: refreshStats,
            loading: refreshingStats,
            tooltip: 'Recalculer le taux de churn'
          }}
        />
      </div>

      {/* Répartition des revenus */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card title="Revenus Standard" className="border-l-4 border-l-orange-500">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-orange-600">{stats.standardRevenue.toFixed(2)} €</span>
              <Badge variant="warning">{stats.totalStandard} abonnés</Badge>
            </div>
            <div className="text-sm text-text-muted">
              Prix: 2.99€/semaine
            </div>
            <ProgressBar 
              value={stats.totalStandard} 
              max={stats.totalActive || 1} 
              variant="warning"
              showLabel
              label={`${Math.round((stats.totalStandard / (stats.totalActive || 1)) * 100)}%`}
            />
          </div>
        </Card>

        <Card title="Revenus Premium" className="border-l-4 border-l-green-500">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-green-600">{stats.premiumRevenue.toFixed(2)} €</span>
              <Badge variant="success">{stats.totalPremium} abonnés</Badge>
            </div>
            <div className="text-sm text-text-muted">
              Prix: 6.99€/semaine
            </div>
            <ProgressBar 
              value={stats.totalPremium} 
              max={stats.totalActive || 1} 
              variant="success"
              showLabel
              label={`${Math.round((stats.totalPremium / (stats.totalActive || 1)) * 100)}%`}
            />
          </div>
        </Card>

        <Card title="Projection annuelle" className="border-l-4 border-l-blue-500">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-blue-600">{stats.yearlyRevenue.toFixed(2)} €</span>
              <Badge variant="info">52 semaines</Badge>
            </div>
            <div className="text-sm text-text-muted">
              Basé sur les abonnés actuels
            </div>
            <Link 
              href="/revenus/projections" 
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <Sparkles className="w-4 h-4" />
              Analyse intelligente
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </Card>
      </div>

      {/* Bouton Analyse intelligente */}
      <div className="mb-8">
        <Link 
          href="/revenus/projections"
          className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
        >
          <Sparkles className="w-6 h-6" />
          <div className="text-left">
            <div className="text-lg">Analyse intelligente & Projections</div>
            <div className="text-sm opacity-80">Simulez vos revenus futurs, objectifs et scénarios</div>
          </div>
          <ChevronRight className="w-6 h-6" />
        </Link>
      </div>

      {/* Historique des revenus */}
      <Card title="Historique des revenus" subtitle="12 dernières semaines" className="mb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="table-header">
                <th className="px-4 py-3 text-left">Semaine</th>
                <th className="px-4 py-3 text-center">Standard</th>
                <th className="px-4 py-3 text-center">Premium</th>
                <th className="px-4 py-3 text-center">Total</th>
                <th className="px-4 py-3 text-right">Revenus</th>
              </tr>
            </thead>
            <tbody>
              {revenueHistory.map((week, idx) => (
                <tr key={idx} className="table-row">
                  <td className="px-4 py-3">
                    <div className="font-medium">{week.week}</div>
                    <div className="text-xs text-text-muted">{week.date}</div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Badge variant="warning">{week.standard}</Badge>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Badge variant="success">{week.premium}</Badge>
                  </td>
                  <td className="px-4 py-3 text-center font-medium">
                    {week.total}
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-green-600">
                    {week.revenue.toFixed(2)} €
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Filtres et liste des abonnés */}
      <Card title="Liste des abonnés" noPadding>
        {/* Filtres */}
        <div className="p-4 border-b border-gray-200 flex flex-wrap gap-4 items-center bg-gray-50">
          <Filter className="w-5 h-5 text-text-muted" />
          
          <select
            value={filter.type}
            onChange={(e) => setFilter({ ...filter, type: e.target.value as SubscriptionFilter['type'] })}
            className="px-3 py-2 border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">Tous les types</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
          </select>

          <select
            value={filter.status}
            onChange={(e) => setFilter({ ...filter, status: e.target.value as SubscriptionFilter['status'] })}
            className="px-3 py-2 border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">Tous les statuts</option>
            <option value="active">Actifs</option>
            <option value="expiring">Expirent bientôt</option>
            <option value="canceled">Annulés</option>
          </select>

          <select
            value={filter.period}
            onChange={(e) => setFilter({ ...filter, period: e.target.value as SubscriptionFilter['period'] })}
            className="px-3 py-2 border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">Toutes les périodes</option>
            <option value="week">Cette semaine</option>
            <option value="month">Ce mois</option>
            <option value="3months">3 derniers mois</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="table-header">
                <th className="px-4 py-3 text-left">Utilisateur</th>
                <th className="px-4 py-3 text-center">Type</th>
                <th className="px-4 py-3 text-center">Statut</th>
                <th className="px-4 py-3 text-center">Prix</th>
                <th className="px-4 py-3 text-center">Semaines actives</th>
                <th className="px-4 py-3 text-center">Jours restants</th>
                <th className="px-4 py-3 text-left">Début</th>
                <th className="px-4 py-3 text-left">Fin</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-text-muted">
                    Aucun abonnement trouvé
                  </td>
                </tr>
              ) : (
                subscriptions.map((sub) => (
                  <tr key={sub.id} className="table-row">
                    <td className="px-4 py-3">
                      <div className="font-medium">
                        {sub.prenom && sub.nom ? `${sub.prenom} ${sub.nom}` : 'Non renseigné'}
                      </div>
                      <div className="text-xs text-text-muted">{sub.email}</div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Badge variant={sub.type === 'premium' ? 'success' : 'warning'}>
                        {sub.type === 'premium' ? 'Premium' : 'Standard'}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Badge variant={sub.status === 'active' ? 'success' : sub.status === 'canceled' ? 'error' : 'warning'}>
                        {sub.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-center font-semibold">
                      {sub.price.toFixed(2)} €/sem
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Badge variant="info">{sub.weeks_active}</Badge>
                    </td>
                    <td className="px-4 py-3 text-center">
                      {sub.days_remaining <= 2 ? (
                        <span className="flex items-center justify-center gap-1 text-red-600 font-medium">
                          <AlertTriangle className="w-4 h-4" />
                          {sub.days_remaining}j
                        </span>
                      ) : (
                        <Badge variant={sub.days_remaining <= 3 ? 'warning' : 'success'}>
                          {sub.days_remaining}j
                        </Badge>
                      )}
                    </td>
                    <td className="px-4 py-3 text-text-muted text-sm">
                      {formatDate(sub.start_date)}
                    </td>
                    <td className="px-4 py-3 text-text-muted text-sm">
                      {formatDate(sub.end_date)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
