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
      {/* Filtre abonnement - responsive */}
      <div className="mb-4 lg:mb-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-3 lg:p-4 bg-gray-50 border border-gray-200">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 lg:w-5 lg:h-5 text-text-muted flex-shrink-0" />
          <span className="text-xs lg:text-sm font-medium whitespace-nowrap">Stats pour:</span>
        </div>
        <select
          value={filter}
          onChange={(e) => handleFilterChange(e.target.value as SubscriptionFilter)}
          className="flex-1 px-3 py-2 border border-gray-300 bg-white text-xs lg:text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 min-w-0"
          aria-label="Filtrer par type d'abonnement"
        >
          <option value="all">Tous (Standard + Premium)</option>
          <option value="standard">Standard (2.99€/sem)</option>
          <option value="premium">Premium (6.99€/sem)</option>
        </select>
      </div>

      {/* Stats principales - grille 2 cols sur mobile */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-4 lg:mb-8">
        <StatCard
          title="Utilisateurs"
          value={stats.totalUsers.toLocaleString('fr-FR')}
          subtitle={`+${stats.newUsersThisMonth} ce mois`}
          icon={Users}
          variant="primary"
          trend={{ value: stats.newUsersThisMonth, isPositive: true }}
        />
        <StatCard
          title={`${getFilterLabel()}`}
          value={stats.premiumUsers.toLocaleString('fr-FR')}
          subtitle={filter === 'all' 
            ? `${stats.standardUsers} Std + ${stats.premiumUsers - stats.standardUsers} Prem`
            : `${((stats.premiumUsers / Math.max(stats.totalUsers, 1)) * 100).toFixed(1)}%`
          }
          icon={Award}
          variant="success"
        />
        <StatCard
          title={`Revenus`}
          value={`${getDisplayedRevenue().toFixed(2)}€`}
          subtitle={filter === 'all' 
            ? `${stats.standardRevenue.toFixed(0)}€ + ${stats.premiumRevenue.toFixed(0)}€`
            : '/semaine'
          }
          icon={CreditCard}
          variant="success"
        />
        <StatCard
          title="Examens"
          value={stats.totalExamens.toLocaleString('fr-FR')}
          subtitle={`${stats.tauxReussiteExamens}% réussite`}
          icon={GraduationCap}
          variant="primary"
        />
      </div>

      {/* Stats secondaires - grille 2 cols sur mobile */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-4 lg:mb-8">
        <StatCard
          title="Questions"
          value={stats.totalQuestions.toLocaleString('fr-FR')}
          subtitle={`${stats.totalCategories} catég.`}
          icon={HelpCircle}
        />
        <StatCard
          title="Sessions"
          value={stats.totalSessions.toLocaleString('fr-FR')}
          icon={Target}
        />
        <StatCard
          title="Répondues"
          value={stats.questionsRepondues.toLocaleString('fr-FR')}
          icon={TrendingUp}
        />
        <StatCard
          title="Temps étude"
          value={formatStudyTime(stats.tempsEtudeTotal)}
          icon={Clock}
        />
      </div>

      {/* Graphiques principaux */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-8">
        <Card title="Activité" subtitle="14 derniers jours">
          <ActivityChart data={activityData} />
        </Card>
        <Card title="Revenus" subtitle="30 derniers jours">
          <RevenueChart data={revenueData} />
        </Card>
      </div>

      {/* Graphiques secondaires */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-8">
        <Card title="Examens" subtitle="14 derniers jours">
          <ExamSuccessChart data={examSuccessData} />
        </Card>
        <Card title="Par catégorie">
          <CategoryDistribution data={categoryStats} />
        </Card>
      </div>

      {/* Table des utilisateurs recents */}
      <Card 
        title="Utilisateurs récents" 
        subtitle="Derniers inscrits"
        actions={
          <a href="/utilisateurs" className="text-xs lg:text-sm text-primary-600 hover:text-primary-700">
            Voir tout
          </a>
        }
      >
        <RecentUsersTable users={recentUsers} />
      </Card>
    </div>
  );
}
