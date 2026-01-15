'use client';

import { useState, useTransition, useEffect, useCallback } from 'react';
import { StatCard, Card, Badge, DataTable, ProgressBar } from '@/components/ui';
import { FileText, Target, TrendingUp, BookOpen, Filter, RefreshCw } from 'lucide-react';
import { UserFilter } from '@/lib/actions/examens';

interface SessionWithDetails {
  id: string;
  user_id: string;
  categorie_id: string;
  niveau: number;
  score: number;
  total_questions: number;
  temps_moyen: number | null;
  temps_total: number | null;
  completed: boolean;
  started_at: string;
  completed_at: string | null;
  user_email: string;
  category_name: string;
  subscription_type?: 'gratuit' | 'standard' | 'premium';
}

interface CategoryStats {
  id: string;
  name: string;
  color: string;
  total: number;
  avgScore: number;
}

interface SessionStats {
  totalSessions: number;
  sessionsCompletes: number;
  avgScore: number;
}

interface SessionsClientProps {
  initialStats: SessionStats;
  initialSessions: SessionWithDetails[];
  initialCategoryStats: CategoryStats[];
}

export function SessionsClient({ initialStats, initialSessions, initialCategoryStats }: SessionsClientProps) {
  const [stats, setStats] = useState(initialStats);
  const [sessions, setSessions] = useState(initialSessions);
  const [categoryStats, setCategoryStats] = useState(initialCategoryStats);
  const [filter, setFilter] = useState<UserFilter>('all');
  const [isPending, startTransition] = useTransition();
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Fonction de rafraîchissement des données
  const refreshData = useCallback(async () => {
    try {
      const response = await fetch(`/api/sessions?filter=${filter}`);
      const data = await response.json();
      if (data.stats) setStats(data.stats);
      if (data.sessions) setSessions(data.sessions);
      if (data.categoryStats) setCategoryStats(data.categoryStats);
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Erreur rafraîchissement:', error);
    }
  }, [filter]);

  // Rafraîchissement automatique toutes les 30 secondes
  useEffect(() => {
    const interval = setInterval(refreshData, 30000);
    return () => clearInterval(interval);
  }, [refreshData]);

  const handleFilterChange = (newFilter: UserFilter) => {
    setFilter(newFilter);
    startTransition(async () => {
      const response = await fetch(`/api/sessions?filter=${newFilter}`);
      const data = await response.json();
      setStats(data.stats);
      setSessions(data.sessions);
      setCategoryStats(data.categoryStats);
      setLastUpdate(new Date());
    });
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getSubscriptionBadge = (type?: string) => {
    switch (type) {
      case 'premium':
        return <Badge variant="success">Premium</Badge>;
      case 'standard':
        return <Badge variant="warning">Standard</Badge>;
      default:
        return <Badge variant="default">Gratuit</Badge>;
    }
  };

  const columns = [
    {
      key: 'user',
      header: 'Utilisateur',
      render: (session: SessionWithDetails) => (
        <div>
          <span className="text-sm">{session.user_email}</span>
          <div className="mt-1">{getSubscriptionBadge(session.subscription_type)}</div>
        </div>
      ),
    },
    {
      key: 'category',
      header: 'Categorie',
      render: (session: SessionWithDetails) => (
        <span className="font-medium text-sm">{session.category_name}</span>
      ),
    },
    {
      key: 'niveau',
      header: 'Niveau',
      className: 'text-center',
      render: (session: SessionWithDetails) => (
        <Badge variant="info">Niveau {session.niveau}</Badge>
      ),
    },
    {
      key: 'score',
      header: 'Score',
      render: (session: SessionWithDetails) => {
        const percentage = Math.round((session.score / session.total_questions) * 100);
        const variant = percentage >= 70 ? 'success' : percentage >= 50 ? 'warning' : 'error';
        return (
          <div className="flex items-center gap-2 w-32">
            <span className="font-medium text-sm">{session.score}/{session.total_questions}</span>
            <ProgressBar value={percentage} max={100} size="sm" variant={variant} />
          </div>
        );
      },
    },
    {
      key: 'date',
      header: 'Date',
      render: (session: SessionWithDetails) => (
        <span className="text-text-muted text-sm">{formatDate(session.completed_at)}</span>
      ),
    },
  ];

  const filterLabel = {
    all: 'Tous les utilisateurs',
    premium: 'Premium uniquement',
    standard: 'Standard uniquement',
    gratuit: 'Gratuit uniquement',
  };

  return (
    <div className={isPending ? 'opacity-60' : ''}>
      {/* Filtre */}
      <div className="mb-6 flex flex-wrap items-center gap-4 p-4 bg-gray-50 border border-gray-200">
        <Filter className="w-5 h-5 text-text-muted" />
        <span className="text-sm font-medium">Filtrer par type d'utilisateur:</span>
        <select
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value as UserFilter)}
          className="px-4 py-2 border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="all">Tous les utilisateurs</option>
          <option value="premium">Premium</option>
          <option value="standard">Standard</option>
          <option value="gratuit">Gratuit</option>
        </select>
        <div className="ml-auto flex items-center gap-3">
          <span className="text-sm text-text-muted">
            {filterLabel[filter]}
          </span>
          <button
            onClick={refreshData}
            className="flex items-center gap-1 px-3 py-1 text-xs bg-primary-600 text-white hover:bg-primary-700 transition-colors"
            title="Rafraîchir les données"
          >
            <RefreshCw className="w-3 h-3" />
            Actualiser
          </button>
          <span className="text-xs text-text-muted">
            {lastUpdate.toLocaleTimeString('fr-FR')}
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Sessions totales"
          value={stats.totalSessions}
          icon={FileText}
          variant="primary"
        />
        <StatCard
          title="Sessions completees"
          value={stats.sessionsCompletes}
          icon={Target}
          variant="success"
        />
        <StatCard
          title="Score moyen"
          value={`${stats.avgScore}%`}
          icon={TrendingUp}
          variant={stats.avgScore >= 70 ? 'success' : 'warning'}
        />
      </div>

      {/* Stats par categorie */}
      <Card
        title="Performance par categorie"
        subtitle="Statistiques de sessions par theme"
        className="mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryStats.map((cat) => (
            <div
              key={cat.id}
              className="p-4 border border-gray-200"
              style={{ borderLeftWidth: '4px', borderLeftColor: cat.color }}
            >
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5" style={{ color: cat.color }} />
                <p className="font-semibold text-text-primary">{cat.name}</p>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-2xl font-bold text-text-primary">{cat.total}</p>
                  <p className="text-xs text-text-muted">sessions</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold" style={{ color: cat.color }}>{cat.avgScore}%</p>
                  <p className="text-xs text-text-muted">score moyen</p>
                </div>
              </div>
              <div className="mt-3">
                <ProgressBar
                  value={cat.avgScore}
                  max={100}
                  size="sm"
                  variant={cat.avgScore >= 70 ? 'success' : cat.avgScore >= 50 ? 'warning' : 'error'}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Table des sessions */}
      <Card title="Sessions recentes" noPadding>
        <DataTable
          columns={columns}
          data={sessions}
          keyExtractor={(session) => session.id}
          emptyMessage="Aucune session trouvee"
        />
      </Card>
    </div>
  );
}
