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
      truncate: true,
      render: (user: Profile) => (
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary-100 flex items-center justify-center flex-shrink-0">
            <span className="text-primary-600 font-semibold text-sm lg:text-base">
              {(user.prenom?.[0] || user.email?.[0] || '?').toUpperCase()}
            </span>
          </div>
          <div className="min-w-0">
            <p className="font-medium text-text-primary text-sm truncate">
              {user.prenom && user.nom ? `${user.prenom} ${user.nom}` : 'Non renseigné'}
            </p>
            <p className="text-xs text-text-muted truncate">{user.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'status',
      header: 'Abonn.',
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
      header: 'Crédits',
      className: 'text-center',
      hideOnMobile: true,
      render: (user: Profile) => (
        <span className="font-medium">{user.credits}</span>
      ),
    },
    {
      key: 'features',
      header: 'Options',
      hideOnMobile: true,
      render: (user: Profile) => (
        <div className="flex flex-wrap gap-1">
          {user.no_timer_enabled && <Badge variant="info">Sans chrono</Badge>}
          {user.flashcards_5_themes && <Badge variant="info">Flash 5</Badge>}
          {user.flashcards_2_themes && !user.flashcards_5_themes && <Badge variant="info">Flash 2</Badge>}
          {user.unlock_level_count > 0 && <Badge variant="warning">{user.unlock_level_count} débl.</Badge>}
        </div>
      ),
    },
    {
      key: 'onboarding',
      header: 'Onboard.',
      className: 'text-center',
      hideOnMobile: true,
      render: (user: Profile) => (
        <div className="flex justify-center">
          {user.has_completed_onboarding ? (
            <Badge variant="success">OK</Badge>
          ) : (
            <Badge variant="warning">...</Badge>
          )}
        </div>
      ),
    },
    {
      key: 'created_at',
      header: 'Inscrit',
      hideOnMobile: true,
      render: (user: Profile) => (
        <span className="text-text-muted text-xs lg:text-sm">{formatDate(user.created_at)}</span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Utilisateurs" 
        subtitle={`${total} utilisateurs`}
      />

      <div className="p-4 lg:p-8">
        {/* Stats par abonnement */}
        <div className="grid grid-cols-3 gap-3 lg:gap-6 mb-4 lg:mb-6">
          <StatCard
            title="Gratuit"
            value={subscriptionStats.gratuit}
            subtitle={`${Math.round((subscriptionStats.gratuit / total) * 100)}%`}
            icon={User}
            variant="primary"
          />
          <StatCard
            title="Standard"
            value={subscriptionStats.standard}
            subtitle={`${Math.round((subscriptionStats.standard / total) * 100)}%`}
            icon={Star}
            variant="warning"
          />
          <StatCard
            title="Premium"
            value={subscriptionStats.premium}
            subtitle={`${Math.round((subscriptionStats.premium / total) * 100)}%`}
            icon={Crown}
            variant="success"
          />
        </div>

        {/* Stats activité */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-4 lg:mb-8">
          <StatCard
            title="Total"
            value={total}
            icon={Users}
            variant="primary"
          />
          <StatCard
            title="Actifs 24h"
            value={activityStats.active24h}
            icon={UserCheck}
            variant="success"
          />
          <StatCard
            title="Actifs 7j"
            value={activityStats.active7d}
            icon={UserCheck}
          />
          <StatCard
            title="Actifs 30j"
            value={activityStats.active30d}
            icon={UserPlus}
          />
        </div>

        {/* Filters */}
        <Card className="mb-4 lg:mb-6">
          <form className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 lg:gap-4">
            <div className="flex-1 min-w-0">
              <input
                type="text"
                name="search"
                placeholder="Rechercher..."
                defaultValue={search}
                className="input-field text-sm"
              />
            </div>
            <select 
              name="filter" 
              defaultValue={filter}
              className="input-field w-full sm:w-32 lg:w-40 text-sm"
              aria-label="Filtrer par type d'utilisateur"
            >
              <option value="all">Tous</option>
              <option value="premium">Premium</option>
              <option value="standard">Standard</option>
              <option value="free">Gratuit</option>
            </select>
            <button type="submit" className="btn-primary text-sm">
              Filtrer
            </button>
          </form>
        </Card>

        {/* Table */}
        <DataTable
          columns={columns}
          data={users}
          keyExtractor={(user) => user.id}
          emptyMessage="Aucun utilisateur trouvé"
        />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4 lg:mt-6">
            <p className="text-xs lg:text-sm text-text-muted">
              Page {page}/{totalPages}
            </p>
            <div className="flex gap-2">
              {page > 1 && (
                <Link
                  href={`/utilisateurs?page=${page - 1}&search=${search}&filter=${filter}`}
                  className="btn-secondary text-sm"
                >
                  Préc.
                </Link>
              )}
              {page < totalPages && (
                <Link
                  href={`/utilisateurs?page=${page + 1}&search=${search}&filter=${filter}`}
                  className="btn-primary text-sm"
                >
                  Suiv.
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
