'use client';

import { useState, useEffect, useTransition } from 'react';
import { Header } from '@/components/layout';
import { StatCard, Card } from '@/components/ui';
import { ClassementTable } from './ClassementTable';
import { UserRanking, SortCriteria, FilterCriteria } from '@/lib/actions/classement';
import { Trophy, Target, Clock, Zap } from 'lucide-react';

interface ClassementClientProps {
  initialRankings: UserRanking[];
  stats: {
    topPerformer: { email?: string; prenom?: string | null; nom?: string | null; score: number } | null;
    mostActive: { email?: string; prenom?: string | null; nom?: string | null; questions: number } | null;
    longestStreak: { email?: string; prenom?: string | null; nom?: string | null; streak: number } | null;
    usersWithExams: number;
  };
}

export function ClassementClient({ initialRankings, stats }: ClassementClientProps) {
  const [rankings, setRankings] = useState<UserRanking[]>(initialRankings);
  const [sortBy, setSortBy] = useState<SortCriteria>('taux_reussite');
  const [filters, setFilters] = useState<FilterCriteria>({});
  const [isPending, startTransition] = useTransition();

  const handleSortChange = async (newSort: SortCriteria) => {
    setSortBy(newSort);
    startTransition(async () => {
      const params = new URLSearchParams();
      params.set('sort', newSort);
      if (filters.subscriptionType) params.set('subscription', filters.subscriptionType);
      if (filters.minQuestions) params.set('minQuestions', String(filters.minQuestions));
      if (filters.minTauxReussite) params.set('minTaux', String(filters.minTauxReussite));
      if (filters.hasExamens) params.set('hasExamens', 'true');
      if (filters.actifRecent) params.set('actifRecent', 'true');
      
      const response = await fetch(`/api/classement?${params.toString()}`);
      const data = await response.json();
      setRankings(data.rankings);
    });
  };

  const handleFilterChange = async (newFilters: FilterCriteria) => {
    setFilters(newFilters);
    startTransition(async () => {
      const params = new URLSearchParams();
      params.set('sort', sortBy);
      if (newFilters.subscriptionType) params.set('subscription', newFilters.subscriptionType);
      if (newFilters.minQuestions) params.set('minQuestions', String(newFilters.minQuestions));
      if (newFilters.minTauxReussite) params.set('minTaux', String(newFilters.minTauxReussite));
      if (newFilters.hasExamens) params.set('hasExamens', 'true');
      if (newFilters.actifRecent) params.set('actifRecent', 'true');
      
      const response = await fetch(`/api/classement?${params.toString()}`);
      const data = await response.json();
      setRankings(data.rankings);
    });
  };

  const getName = (user: { prenom?: string | null; nom?: string | null; email?: string } | null) => {
    if (!user) return '-';
    if (user.prenom && user.nom) return `${user.prenom} ${user.nom}`;
    return user.email?.split('@')[0] || '-';
  };

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Classement" 
        subtitle={`${rankings.length} utilisateurs classes`}
      />

      <div className="p-8">
        {/* Stats des meilleurs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Meilleur performeur"
            value={stats.topPerformer ? `${stats.topPerformer.score}%` : '-'}
            subtitle={getName(stats.topPerformer)}
            icon={Trophy}
            variant="success"
          />
          <StatCard
            title="Plus actif"
            value={stats.mostActive ? `${stats.mostActive.questions}` : '-'}
            subtitle={getName(stats.mostActive)}
            icon={Target}
            variant="primary"
          />
          <StatCard
            title="Plus longue serie"
            value={stats.longestStreak ? `${stats.longestStreak.streak}j` : '-'}
            subtitle={getName(stats.longestStreak)}
            icon={Zap}
            variant="warning"
          />
          <StatCard
            title="Avec examens"
            value={stats.usersWithExams}
            subtitle="utilisateurs"
            icon={Clock}
          />
        </div>

        {/* Tableau de classement */}
        <Card 
          title="Classement des utilisateurs" 
          subtitle="Tries et filtres par performance"
          noPadding
          className={isPending ? 'opacity-60' : ''}
        >
          <ClassementTable
            initialData={rankings}
            onSortChange={handleSortChange}
            onFilterChange={handleFilterChange}
            currentSort={sortBy}
            currentFilters={filters}
          />
        </Card>
      </div>
    </div>
  );
}
