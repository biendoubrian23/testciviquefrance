'use client';

import { useState, useTransition } from 'react';
import { StatCard, Card, ProgressBar } from '@/components/ui';
import { BookOpen, HelpCircle, Target, Users, Filter } from 'lucide-react';
import { UserFilter } from '@/lib/actions/content';

interface CategoryWithStats {
  id: string;
  nom: string;
  description: string | null;
  couleur: string;
  ordre: number;
  questions_count: number;
  sessions_count: number;
  avg_score: number;
  unique_users: number;
}

interface GlobalStats {
  totalCategories: number;
  totalQuestions: number;
  totalSessions: number;
  avgQuestionsPerCategory: number;
}

interface CategoriesClientProps {
  initialCategories: CategoryWithStats[];
  initialStats: GlobalStats;
}

export function CategoriesClient({ initialCategories, initialStats }: CategoriesClientProps) {
  const [categories, setCategories] = useState(initialCategories);
  const [stats, setStats] = useState(initialStats);
  const [filter, setFilter] = useState<UserFilter>('all');
  const [isPending, startTransition] = useTransition();

  const handleFilterChange = (newFilter: UserFilter) => {
    setFilter(newFilter);
    startTransition(async () => {
      const response = await fetch(`/api/categories?filter=${newFilter}`);
      const data = await response.json();
      setCategories(data.categories);
      setStats(data.stats);
    });
  };

  const totalQuestions = categories.reduce((sum, c) => sum + c.questions_count, 0);

  const filterLabel = {
    all: 'Tous les utilisateurs',
    premium: 'Premium uniquement',
    standard: 'Standard uniquement',
    gratuit: 'Gratuit uniquement',
  };

  return (
    <div className={isPending ? 'opacity-60' : ''}>
      {/* Filtre */}
      <div className="mb-6 flex items-center gap-4 p-4 bg-gray-50 border border-gray-200">
        <Filter className="w-5 h-5 text-text-muted" />
        <span className="text-sm font-medium">Statistiques pour:</span>
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
        <span className="text-sm text-text-muted ml-2">
          {filterLabel[filter]}
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total categories"
          value={stats.totalCategories}
          icon={BookOpen}
          variant="primary"
        />
        <StatCard
          title="Total questions"
          value={stats.totalQuestions}
          icon={HelpCircle}
        />
        <StatCard
          title="Sessions completees"
          value={stats.totalSessions}
          subtitle={filter !== 'all' ? filterLabel[filter] : undefined}
          icon={Target}
          variant="success"
        />
        <StatCard
          title="Moyenne par categorie"
          value={stats.avgQuestionsPerCategory}
          subtitle="questions"
          icon={Users}
        />
      </div>

      {/* Liste des categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const percentage = totalQuestions > 0
            ? Math.round((category.questions_count / totalQuestions) * 100)
            : 0;

          return (
            <Card key={category.id}>
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${category.couleur}20` }}
                >
                  <BookOpen 
                    className="w-6 h-6" 
                    style={{ color: category.couleur }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-text-primary">{category.nom}</h3>
                  <p className="text-sm text-text-muted mt-1 line-clamp-2">
                    {category.description || 'Aucune description'}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-text-muted">Questions</span>
                  <span className="font-semibold">{category.questions_count}</span>
                </div>
                <ProgressBar 
                  value={percentage} 
                  max={100}
                  size="md"
                />
                <p className="text-xs text-text-muted mt-1 text-right">
                  {percentage}% du total
                </p>
              </div>

              {/* Stats utilisateurs filtrées */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-text-muted">Sessions</p>
                    <p className="font-semibold">{category.sessions_count}</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Score moy.</p>
                    <p className="font-semibold" style={{ color: category.avg_score >= 70 ? '#16a34a' : category.avg_score >= 50 ? '#ca8a04' : '#dc2626' }}>
                      {category.avg_score}%
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">Utilisateurs</p>
                    <p className="font-semibold">{category.unique_users}</p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
