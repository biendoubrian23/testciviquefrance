import { Header } from '@/components/layout';
import { StatCard, Card, Badge, DataTable, ProgressBar } from '@/components/ui';
import { getUsersWithProgression } from '@/lib/actions/users';
import { TrendingUp, Target, Award, BarChart3 } from 'lucide-react';

export const dynamic = 'force-dynamic';

interface UserWithProgression {
  id: string;
  email: string;
  prenom: string | null;
  nom: string | null;
  created_at: string;
  questionsRepondues: number;
  tauxReussite: number;
  sessionsCount: number;
  niveauxCompletes: number;
  niveauMax: number;
}

export default async function ProgressionPage() {
  const users = await getUsersWithProgression();

  // Stats globales
  const totalQuestionsRepondues = users.reduce((sum, u) => sum + u.questionsRepondues, 0);
  const avgTauxReussite = users.length > 0 
    ? Math.round(users.reduce((sum, u) => sum + u.tauxReussite, 0) / users.length)
    : 0;
  const totalSessions = users.reduce((sum, u) => sum + u.sessionsCount, 0);
  const usersWithProgress = users.filter(u => u.questionsRepondues > 0).length;

  const columns = [
    {
      key: 'user',
      header: 'Utilisateur',
      render: (user: UserWithProgression) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-100 flex items-center justify-center flex-shrink-0">
            <span className="text-primary-600 font-semibold">
              {(user.prenom?.[0] || user.email?.[0] || '?').toUpperCase()}
            </span>
          </div>
          <div>
            <p className="font-medium text-text-primary">
              {user.prenom && user.nom ? `${user.prenom} ${user.nom}` : 'Non renseigne'}
            </p>
            <p className="text-xs text-text-muted">{user.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'questions',
      header: 'Questions',
      className: 'text-center',
      render: (user: UserWithProgression) => (
        <span className="font-medium">{user.questionsRepondues}</span>
      ),
    },
    {
      key: 'tauxReussite',
      header: 'Taux reussite',
      render: (user: UserWithProgression) => {
        const variant = user.tauxReussite >= 80 ? 'success' : user.tauxReussite >= 50 ? 'warning' : 'error';
        return (
          <div className="w-32">
            <ProgressBar 
              value={user.tauxReussite} 
              max={100}
              showPercentage
              size="sm"
              variant={variant}
            />
          </div>
        );
      },
    },
    {
      key: 'sessions',
      header: 'Sessions',
      className: 'text-center',
      render: (user: UserWithProgression) => (
        <span className="font-medium">{user.sessionsCount}</span>
      ),
    },
    {
      key: 'niveau',
      header: 'Niveau max',
      className: 'text-center',
      render: (user: UserWithProgression) => (
        <div className="flex justify-center">
          <Badge variant={user.niveauMax >= 5 ? 'success' : user.niveauMax >= 3 ? 'info' : 'neutral'}>
            Niveau {user.niveauMax}
          </Badge>
        </div>
      ),
    },
    {
      key: 'niveauxCompletes',
      header: 'Niveaux valides',
      className: 'text-center',
      render: (user: UserWithProgression) => (
        <span className="text-text-muted">{user.niveauxCompletes}</span>
      ),
    },
  ];

  // Trier par questions repondues
  const sortedUsers = [...users].sort((a, b) => b.questionsRepondues - a.questionsRepondues);

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Progression des utilisateurs" 
        subtitle="Statistiques d'apprentissage detaillees"
      />

      <div className="p-4 lg:p-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Questions repondues"
            value={totalQuestionsRepondues.toLocaleString('fr-FR')}
            icon={Target}
            variant="primary"
          />
          <StatCard
            title="Taux reussite moyen"
            value={`${avgTauxReussite}%`}
            icon={TrendingUp}
            variant={avgTauxReussite >= 70 ? 'success' : 'warning'}
          />
          <StatCard
            title="Sessions completees"
            value={totalSessions.toLocaleString('fr-FR')}
            icon={BarChart3}
          />
          <StatCard
            title="Utilisateurs actifs"
            value={usersWithProgress}
            subtitle={`Sur ${users.length} total`}
            icon={Award}
          />
        </div>

        {/* Table */}
        <Card 
          title="Classement par progression" 
          subtitle="Top 100 utilisateurs par activite"
          noPadding
        >
          <DataTable
            columns={columns}
            data={sortedUsers}
            keyExtractor={(user) => user.id}
            emptyMessage="Aucune donnee de progression"
          />
        </Card>
      </div>
    </div>
  );
}
