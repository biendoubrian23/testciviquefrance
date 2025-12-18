import { Header } from '@/components/layout';
import { StatCard, Card, Badge, DataTable } from '@/components/ui';
import { getAllUsers, getUserActivityStats, getUserSubscriptionStats } from '@/lib/actions/users';
import { Users, UserCheck, UserPlus, Crown, Star, User } from 'lucide-react';
import { Profile } from '@/types';
import { getUserSubscriptionType, getUserSubscriptionLabel, getUserSubscriptionBadgeVariant } from '@/lib/utils/subscription';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string; filter?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || '1');
  const search = params.search || '';
  const filter = (params.filter || 'all') as 'all' | 'premium' | 'standard' | 'free';

  const [{ users, total }, activityStats, subscriptionStats] = await Promise.all([
    getAllUsers(page, 20, search, filter),
    getUserActivityStats(),
    getUserSubscriptionStats(),
  ]);

  const totalPages = Math.ceil(total / 20);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const columns = [
    {
      key: 'user',
      header: 'Utilisateur',
      render: (user: Profile) => (
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
      key: 'status',
      header: 'Abonnement',
      className: 'text-center',
      render: (user: Profile) => {
        const subscriptionType = getUserSubscriptionType(user);
        const label = getUserSubscriptionLabel(subscriptionType);
        const variant = getUserSubscriptionBadgeVariant(subscriptionType);
        
        return (
          <div className="flex justify-center">
            <Badge variant={variant}>{label}</Badge>
          </div>
        );
      },
    },
    {
      key: 'credits',
      header: 'Credits',
      className: 'text-center',
      render: (user: Profile) => (
        <span className="font-medium">{user.credits}</span>
      ),
    },
    {
      key: 'features',
      header: 'Options',
      render: (user: Profile) => (
        <div className="flex flex-wrap gap-1">
          {user.no_timer_enabled && <Badge variant="info">Sans chrono</Badge>}
          {user.flashcards_5_themes && <Badge variant="info">Flash 5</Badge>}
          {user.flashcards_2_themes && !user.flashcards_5_themes && <Badge variant="info">Flash 2</Badge>}
          {user.unlock_level_count > 0 && <Badge variant="warning">{user.unlock_level_count} deblocages</Badge>}
        </div>
      ),
    },
    {
      key: 'onboarding',
      header: 'Onboarding',
      className: 'text-center',
      render: (user: Profile) => (
        <div className="flex justify-center">
          {user.has_completed_onboarding ? (
            <Badge variant="success">Complete</Badge>
          ) : (
            <Badge variant="warning">En attente</Badge>
          )}
        </div>
      ),
    },
    {
      key: 'created_at',
      header: 'Inscription',
      render: (user: Profile) => (
        <span className="text-text-muted">{formatDate(user.created_at)}</span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Utilisateurs" 
        subtitle={`${total} utilisateurs au total`}
      />

      <div className="p-8">
        {/* Stats par abonnement */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StatCard
            title="Utilisateurs Gratuit"
            value={subscriptionStats.gratuit}
            subtitle={`${Math.round((subscriptionStats.gratuit / total) * 100)}% du total`}
            icon={User}
            variant="primary"
          />
          <StatCard
            title="Utilisateurs Standard"
            value={subscriptionStats.standard}
            subtitle={`${Math.round((subscriptionStats.standard / total) * 100)}% du total`}
            icon={Star}
            variant="warning"
          />
          <StatCard
            title="Utilisateurs Premium"
            value={subscriptionStats.premium}
            subtitle={`${Math.round((subscriptionStats.premium / total) * 100)}% du total`}
            icon={Crown}
            variant="success"
          />
        </div>

        {/* Stats activité */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Utilisateurs totaux"
            value={total}
            icon={Users}
            variant="primary"
          />
          <StatCard
            title="Actifs (24h)"
            value={activityStats.active24h}
            icon={UserCheck}
            variant="success"
          />
          <StatCard
            title="Actifs (7 jours)"
            value={activityStats.active7d}
            icon={UserCheck}
          />
          <StatCard
            title="Actifs (30 jours)"
            value={activityStats.active30d}
            icon={UserPlus}
          />
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <form className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-64">
              <input
                type="text"
                name="search"
                placeholder="Rechercher par email, prenom, nom..."
                defaultValue={search}
                className="input-field"
              />
            </div>
            <select 
              name="filter" 
              defaultValue={filter}
              className="input-field w-40"
            >
              <option value="all">Tous</option>
              <option value="premium">Premium</option>
              <option value="standard">Standard</option>
              <option value="free">Gratuit</option>
            </select>
            <button type="submit" className="btn-primary">
              Filtrer
            </button>
          </form>
        </Card>

        {/* Table */}
        <DataTable
          columns={columns}
          data={users}
          keyExtractor={(user) => user.id}
          emptyMessage="Aucun utilisateur trouve"
        />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-text-muted">
              Page {page} sur {totalPages}
            </p>
            <div className="flex gap-2">
              {page > 1 && (
                <Link
                  href={`/utilisateurs?page=${page - 1}&search=${search}&filter=${filter}`}
                  className="btn-secondary"
                >
                  Precedent
                </Link>
              )}
              {page < totalPages && (
                <Link
                  href={`/utilisateurs?page=${page + 1}&search=${search}&filter=${filter}`}
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
