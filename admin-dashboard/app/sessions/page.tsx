import { Header } from '@/components/layout';
import { StatCard, Card, Badge, DataTable, ProgressBar } from '@/components/ui';
import { getSessionsStats, getRecentSessions, getSessionsByCategory } from '@/lib/actions/examens';
import { FileText, Target, TrendingUp, BookOpen } from 'lucide-react';

export const dynamic = 'force-dynamic';

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
}

export default async function SessionsPage() {
  const [stats, recentSessions, sessionsByCategory] = await Promise.all([
    getSessionsStats(),
    getRecentSessions(50),
    getSessionsByCategory(),
  ]);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const columns = [
    {
      key: 'user',
      header: 'Utilisateur',
      render: (session: SessionWithDetails) => (
        <span className="text-sm">{session.user_email}</span>
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

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Sessions de quiz" 
        subtitle="Historique des entrainements par niveau"
      />

      <div className="p-8">
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
            {sessionsByCategory.map((cat) => (
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

        {/* Table des sessions recentes */}
        <Card title="Sessions recentes" subtitle="50 dernieres sessions completees" noPadding>
          <DataTable
            columns={columns}
            data={recentSessions}
            keyExtractor={(session) => session.id}
            emptyMessage="Aucune session completee"
          />
        </Card>
      </div>
    </div>
  );
}
