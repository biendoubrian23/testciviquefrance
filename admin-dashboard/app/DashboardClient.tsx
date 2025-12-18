'use client';

import { useState, useTransition } from 'react';
import { StatCard, Card } from '@/components/ui';
import { ActivityChart, RevenueChart, CategoryDistribution, ExamSuccessChart } from '@/components/charts';
import { RecentUsersTable } from './components/RecentUsersTable';
import { SubscriptionFilter } from '@/lib/actions/dashboard';
import { 
  Users, 
  GraduationCap, 
  CreditCard, 
  HelpCircle,
  TrendingUp,
  Clock,
  Target,
  Award,
  Filter,
} from 'lucide-react';

interface DashboardClientProps {
  initialStats: {
    totalUsers: number;
    newUsersThisMonth: number;
    premiumUsers: number;
    standardUsers: number;
    totalRevenus: number;
    revenusThisMonth: number;
    standardRevenue: number;
    premiumRevenue: number;
    totalExamens: number;
    tauxReussiteExamens: number;
    totalQuestions: number;
    totalCategories: number;
    totalSessions: number;
    questionsRepondues: number;
    tempsEtudeTotal: number;
  };
  activityData: any[];
  revenueData: any[];
  categoryStats: any[];
  recentUsers: any[];
  examSuccessData: any[];
}

export function DashboardClient({
  initialStats,
  activityData,
  revenueData,
  categoryStats,
  recentUsers,
  examSuccessData,
}: DashboardClientProps) {
  const [stats, setStats] = useState(initialStats);
  const [filter, setFilter] = useState<SubscriptionFilter>('all');
  const [isPending, startTransition] = useTransition();

  const handleFilterChange = (newFilter: SubscriptionFilter) => {
    setFilter(newFilter);
    startTransition(async () => {
      const response = await fetch(`/api/dashboard?filter=${newFilter}`);
      const data = await response.json();
      setStats(data.stats);
    });
  };

  const formatStudyTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes} min`;
  };

  const getFilterLabel = () => {
    switch (filter) {
      case 'premium': return 'Premium';
      case 'standard': return 'Standard';
      default: return 'Payants';
    }
  };

  const getDisplayedRevenue = () => {
    switch (filter) {
      case 'premium': return stats.premiumRevenue;
      case 'standard': return stats.standardRevenue;
      default: return stats.totalRevenus;
    }
  };

  return (
    <div className={isPending ? 'opacity-60' : ''}>
      {/* Filtre abonnement */}
      <div className="mb-6 flex items-center gap-4 p-4 bg-gray-50 border border-gray-200">
        <Filter className="w-5 h-5 text-text-muted" />
        <span className="text-sm font-medium">Afficher les stats pour:</span>
        <select
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value as SubscriptionFilter)}
          className="px-4 py-2 border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="all">Tous les abonnes (Standard + Premium)</option>
          <option value="standard">Standard uniquement (2.99€/sem)</option>
          <option value="premium">Premium uniquement (6.99€/sem)</option>
        </select>
      </div>

      {/* Stats principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Utilisateurs totaux"
          value={stats.totalUsers.toLocaleString('fr-FR')}
          subtitle={`+${stats.newUsersThisMonth} ce mois`}
          icon={Users}
          variant="primary"
          trend={{ value: stats.newUsersThisMonth, isPositive: true }}
        />
        <StatCard
          title={`Utilisateurs ${getFilterLabel()}`}
          value={stats.premiumUsers.toLocaleString('fr-FR')}
          subtitle={filter === 'all' 
            ? `${stats.standardUsers} Standard + ${stats.premiumUsers - stats.standardUsers} Premium`
            : `${((stats.premiumUsers / Math.max(stats.totalUsers, 1)) * 100).toFixed(1)}% du total`
          }
          icon={Award}
          variant="success"
        />
        <StatCard
          title={`Revenus ${getFilterLabel()}`}
          value={`${getDisplayedRevenue().toFixed(2)} €`}
          subtitle={filter === 'all' 
            ? `${stats.standardRevenue.toFixed(2)}€ Std + ${stats.premiumRevenue.toFixed(2)}€ Prem /sem`
            : 'par semaine'
          }
          icon={CreditCard}
          variant="success"
        />
        <StatCard
          title="Examens completes"
          value={stats.totalExamens.toLocaleString('fr-FR')}
          subtitle={`${stats.tauxReussiteExamens}% de reussite`}
          icon={GraduationCap}
          variant="primary"
        />
      </div>

      {/* Stats secondaires */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Questions totales"
          value={stats.totalQuestions.toLocaleString('fr-FR')}
          subtitle={`${stats.totalCategories} categories`}
          icon={HelpCircle}
        />
        <StatCard
          title="Sessions de quiz"
          value={stats.totalSessions.toLocaleString('fr-FR')}
          icon={Target}
        />
        <StatCard
          title="Questions repondues"
          value={stats.questionsRepondues.toLocaleString('fr-FR')}
          icon={TrendingUp}
        />
        <StatCard
          title="Temps d'etude total"
          value={formatStudyTime(stats.tempsEtudeTotal)}
          icon={Clock}
        />
      </div>

      {/* Graphiques principaux */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card title="Activite des utilisateurs" subtitle="14 derniers jours">
          <ActivityChart data={activityData} />
        </Card>
        <Card title="Revenus" subtitle="30 derniers jours">
          <RevenueChart data={revenueData} />
        </Card>
      </div>

      {/* Graphiques secondaires */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card title="Resultats des examens" subtitle="14 derniers jours">
          <ExamSuccessChart data={examSuccessData} />
        </Card>
        <Card title="Questions par categorie">
          <CategoryDistribution data={categoryStats} />
        </Card>
      </div>

      {/* Table des utilisateurs recents */}
      <Card 
        title="Utilisateurs recents" 
        subtitle="Derniers inscrits"
        actions={
          <a href="/utilisateurs" className="text-sm text-primary-600 hover:text-primary-700">
            Voir tout
          </a>
        }
      >
        <RecentUsersTable users={recentUsers} />
      </Card>
    </div>
  );
}
