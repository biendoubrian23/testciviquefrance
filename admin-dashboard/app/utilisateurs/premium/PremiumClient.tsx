'use client';

import { useState, useTransition } from 'react';
import { StatCard, Card, Badge, DataTable, ProgressBar } from '@/components/ui';
import { Award, Calendar, Clock, CreditCard, Filter, Unlock, Timer, BookOpen, FileText } from 'lucide-react';
import { PaidUserWithType, PaidUserFilter } from '@/lib/actions/users';

interface PaidUsersStats {
  totalStandard: number;
  totalPremium: number;
  standardExpiringToday: number;
  premiumExpiringToday: number;
  standardExpiringThisWeek: number;
  premiumExpiringThisWeek: number;
  standardRevenue: number;
  premiumRevenue: number;
  potentialStandardRevenue: number;
  potentialPremiumRevenue: number;
}

interface PremiumClientProps {
  initialUsers: PaidUserWithType[];
  initialStats: PaidUsersStats;
}

export function PremiumClient({ initialUsers, initialStats }: PremiumClientProps) {
  const [users, setUsers] = useState(initialUsers);
  const [stats, setStats] = useState(initialStats);
  const [filter, setFilter] = useState<PaidUserFilter>('all');
  const [isPending, startTransition] = useTransition();

  const handleFilterChange = (newFilter: PaidUserFilter) => {
    setFilter(newFilter);
    startTransition(async () => {
      const response = await fetch(`/api/premium?filter=${newFilter}`);
      const data = await response.json();
      setUsers(data.users);
    });
  };

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

  const getFilteredStats = () => {
    if (filter === 'standard') {
      return {
        total: stats.totalStandard,
        expiringToday: stats.standardExpiringToday,
        expiringThisWeek: stats.standardExpiringThisWeek,
        potentialRevenue: stats.potentialStandardRevenue,
        currentRevenue: stats.standardRevenue,
      };
    } else if (filter === 'premium') {
      return {
        total: stats.totalPremium,
        expiringToday: stats.premiumExpiringToday,
        expiringThisWeek: stats.premiumExpiringThisWeek,
        potentialRevenue: stats.potentialPremiumRevenue,
        currentRevenue: stats.premiumRevenue,
      };
    }
    return {
      total: stats.totalStandard + stats.totalPremium,
      expiringToday: stats.standardExpiringToday + stats.premiumExpiringToday,
      expiringThisWeek: stats.standardExpiringThisWeek + stats.premiumExpiringThisWeek,
      potentialRevenue: stats.potentialStandardRevenue + stats.potentialPremiumRevenue,
      currentRevenue: stats.standardRevenue + stats.premiumRevenue,
    };
  };

  const filteredStats = getFilteredStats();
  const filterLabel = filter === 'all' ? 'Payants' : filter === 'premium' ? 'Premium' : 'Standard';

  const columns = [
    {
      key: 'user',
      header: 'Utilisateur',
      render: (user: PaidUserWithType) => (
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 ${
            user.subscription_type === 'premium' ? 'bg-green-100' : 'bg-orange-100'
          }`}>
            <Award className={`w-5 h-5 ${
              user.subscription_type === 'premium' ? 'text-green-600' : 'text-orange-600'
            }`} />
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
      key: 'type',
      header: 'Abonnement',
      render: (user: PaidUserWithType) => (
        <div>
          <Badge variant={user.subscription_type === 'premium' ? 'success' : 'warning'}>
            {user.subscription_type === 'premium' ? 'Premium' : 'Standard'}
          </Badge>
          <p className="text-xs text-text-muted mt-1">{user.subscription_price.toFixed(2)}€/sem</p>
        </div>
      ),
    },
    {
      key: 'expiration',
      header: 'Expiration',
      render: (user: PaidUserWithType) => {
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
      key: 'services',
      header: 'Services annexes',
      render: (user: PaidUserWithType) => {
        const services = [];
        
        // Flashcards
        if (user.flashcards_5_themes) {
          services.push({ label: 'Flashcards 5', icon: BookOpen, color: 'bg-purple-100 text-purple-700' });
        } else if (user.flashcards_2_themes) {
          services.push({ label: 'Flashcards 2', icon: BookOpen, color: 'bg-purple-100 text-purple-700' });
        }
        
        // Chrono désactivé
        if (user.no_timer_enabled) {
          services.push({ label: 'Sans chrono', icon: Timer, color: 'bg-blue-100 text-blue-700' });
        }
        
        // Niveaux débloqués
        if (user.unlock_level_count > 0) {
          services.push({ label: `${user.unlock_level_count} niv.`, icon: Unlock, color: 'bg-amber-100 text-amber-700' });
        }
        
        // Crédits examens blancs (Pack Examen achetés)
        if (user.exam_credits > 0) {
          services.push({ label: `${user.exam_credits} pack exam`, icon: FileText, color: 'bg-green-100 text-green-700' });
        }

        if (services.length === 0) {
          return <span className="text-text-muted text-sm">Aucun</span>;
        }

        return (
          <div className="flex flex-wrap gap-1">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium ${service.color}`}
              >
                <service.icon className="w-3 h-3" />
                {service.label}
              </div>
            ))}
          </div>
        );
      },
    },
    {
      key: 'credits',
      header: 'Examens Blancs',
      className: 'text-center',
      render: (user: PaidUserWithType) => {
        // Quota abonnement: Standard = 1/sem, Premium = 3/sem
        const subscriptionQuota = user.subscription_type === 'premium' ? 3 : 1;
        const subscriptionRemaining = Math.max(0, subscriptionQuota - (user.subscription_exams_used || 0));
        const packCredits = user.exam_credits || 0;
        const totalAvailable = subscriptionRemaining + packCredits;
        
        return (
          <div className="flex flex-col items-center space-y-1">
            <span className={`font-bold text-lg ${totalAvailable > 0 ? 'text-green-600' : 'text-text-muted'}`}>
              {totalAvailable}
            </span>
            <div className="text-xs text-text-muted text-center">
              <div>{subscriptionRemaining}/{subscriptionQuota} abo</div>
              {packCredits > 0 && <div>+{packCredits} pack</div>}
            </div>
          </div>
        );
      },
    },
    {
      key: 'last_purchase',
      header: 'Dernier achat',
      render: (user: PaidUserWithType) => (
        <span className="text-text-muted">{formatDate(user.last_purchase_at)}</span>
      ),
    },
  ];

  return (
    <div className={isPending ? 'opacity-60' : ''}>
      {/* Filtre */}
      <div className="mb-6 flex items-center gap-4 p-4 bg-gray-50 border border-gray-200">
        <Filter className="w-5 h-5 text-text-muted" />
        <span className="text-sm font-medium">Type d'abonnement:</span>
        <select
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value as PaidUserFilter)}
          className="px-4 py-2 border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="all">Tous les abonnes</option>
          <option value="standard">Standard (2.99€/sem)</option>
          <option value="premium">Premium (6.99€/sem)</option>
        </select>
        <div className="ml-auto flex gap-4 text-sm">
          <span className="text-orange-600 font-medium">{stats.totalStandard} Standard</span>
          <span className="text-green-600 font-medium">{stats.totalPremium} Premium</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <StatCard
          title={`${filterLabel} actifs`}
          value={filteredStats.total}
          icon={Award}
          variant="success"
        />
        <StatCard
          title="Expirent aujourd'hui"
          value={filteredStats.expiringToday}
          icon={Clock}
          variant={filteredStats.expiringToday > 0 ? 'error' : 'default'}
        />
        <StatCard
          title="Expirent cette semaine"
          value={filteredStats.expiringThisWeek}
          icon={Calendar}
          variant={filteredStats.expiringThisWeek > 0 ? 'warning' : 'default'}
        />
        <StatCard
          title="Revenus actuels"
          value={`${filteredStats.currentRevenue.toFixed(2)} €`}
          subtitle="par semaine"
          icon={CreditCard}
          variant="success"
        />
        <StatCard
          title="Revenus potentiels"
          value={`${filteredStats.potentialRevenue.toFixed(2)} €`}
          subtitle="Si renouvellement"
          icon={CreditCard}
        />
      </div>

      {/* Légende services */}
      <div className="mb-4 flex flex-wrap gap-4 text-xs text-text-muted">
        <span className="font-medium">Legende services:</span>
        <span className="inline-flex items-center gap-1">
          <BookOpen className="w-3 h-3" /> Flashcards (2 ou 5 themes)
        </span>
        <span className="inline-flex items-center gap-1">
          <Timer className="w-3 h-3" /> Mode sans chrono
        </span>
        <span className="inline-flex items-center gap-1">
          <Unlock className="w-3 h-3" /> Niveaux debloques
        </span>
        <span className="inline-flex items-center gap-1">
          <FileText className="w-3 h-3" /> Pack examens achetes
        </span>
      </div>

      {/* Info examens blancs */}
      <div className="mb-4 p-3 bg-blue-50 border border-blue-200 text-xs text-blue-800">
        <strong>Quota examens blancs:</strong> Standard = 1/semaine • Premium = 3/semaine • Pack Examen = +2 (cumulable)
      </div>

      {/* Table */}
      <Card title={`Liste des utilisateurs ${filterLabel}`} noPadding>
        <DataTable
          columns={columns}
          data={users}
          keyExtractor={(user) => user.id}
          emptyMessage="Aucun utilisateur payant"
        />
      </Card>
    </div>
  );
}
