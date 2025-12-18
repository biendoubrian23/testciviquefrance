import { Header } from '@/components/layout';
import { StatCard, Card, Badge, DataTable, ProgressBar } from '@/components/ui';
import { getPremiumUsers } from '@/lib/actions/users';
import { Award, Calendar, Clock, CreditCard } from 'lucide-react';
import { Profile } from '@/types';

export const dynamic = 'force-dynamic';

export default async function PremiumUsersPage() {
  const premiumUsers = await getPremiumUsers();

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const getDaysRemaining = (expiresAt: string | null) => {
    if (!expiresAt) return 0;
    const expires = new Date(expiresAt);
    const now = new Date();
    const diff = expires.getTime() - now.getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  };

  const columns = [
    {
      key: 'user',
      header: 'Utilisateur',
      render: (user: Profile) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 flex items-center justify-center flex-shrink-0">
            <Award className="w-5 h-5 text-green-600" />
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
      key: 'expiration',
      header: 'Expiration',
      render: (user: Profile) => {
        const daysRemaining = getDaysRemaining(user.premium_expires_at);
        const variant = daysRemaining <= 1 ? 'error' : daysRemaining <= 3 ? 'warning' : 'success';
        return (
          <div className="space-y-1">
            <span className="text-sm">{formatDate(user.premium_expires_at)}</span>
            <div className="flex items-center gap-2">
              <ProgressBar 
                value={daysRemaining} 
                max={7} 
                size="sm"
                variant={variant}
              />
              <Badge variant={variant}>{daysRemaining}j</Badge>
            </div>
          </div>
        );
      },
    },
    {
      key: 'options',
      header: 'Options actives',
      render: (user: Profile) => (
        <div className="flex flex-wrap gap-1">
          {user.no_timer_enabled && <Badge variant="info">Sans chrono</Badge>}
          {user.flashcards_5_themes && <Badge variant="info">Flashcards 5</Badge>}
          {user.flashcards_2_themes && !user.flashcards_5_themes && <Badge variant="info">Flashcards 2</Badge>}
        </div>
      ),
    },
    {
      key: 'credits',
      header: 'Credits',
      className: 'text-center',
      render: (user: Profile) => (
        <span className="font-medium text-lg">{user.credits}</span>
      ),
    },
    {
      key: 'last_purchase',
      header: 'Dernier achat',
      render: (user: Profile) => (
        <span className="text-text-muted">{formatDate(user.last_purchase_at)}</span>
      ),
    },
  ];

  // Statistiques
  const totalPremium = premiumUsers.length;
  const expiringToday = premiumUsers.filter(u => getDaysRemaining(u.premium_expires_at) <= 1).length;
  const expiringThisWeek = premiumUsers.filter(u => getDaysRemaining(u.premium_expires_at) <= 7).length;

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Utilisateurs Premium" 
        subtitle={`${totalPremium} abonnes actifs`}
      />

      <div className="p-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Premium actifs"
            value={totalPremium}
            icon={Award}
            variant="success"
          />
          <StatCard
            title="Expirent aujourd'hui"
            value={expiringToday}
            icon={Clock}
            variant={expiringToday > 0 ? 'error' : 'default'}
          />
          <StatCard
            title="Expirent cette semaine"
            value={expiringThisWeek}
            icon={Calendar}
            variant={expiringThisWeek > 0 ? 'warning' : 'default'}
          />
          <StatCard
            title="Revenus potentiels"
            value={`${(expiringThisWeek * 4.99).toFixed(2)} €`}
            subtitle="Si renouvellement"
            icon={CreditCard}
          />
        </div>

        {/* Table */}
        <Card title="Liste des utilisateurs Premium" noPadding>
          <DataTable
            columns={columns}
            data={premiumUsers}
            keyExtractor={(user) => user.id}
            emptyMessage="Aucun utilisateur premium"
          />
        </Card>
      </div>
    </div>
  );
}
