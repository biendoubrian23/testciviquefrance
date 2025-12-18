import { Header } from '@/components/layout';
import { StatCard, Card, Badge, DataTable } from '@/components/ui';
import { getQuestionsStats, getQuestions, getCategoriesForSelect } from '@/lib/actions/content';
import { HelpCircle, Lock, Unlock, AlertCircle } from 'lucide-react';
import { Question } from '@/types';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface QuestionWithDetails extends Question {
  category_name?: string;
  reponses_count?: number;
}

export default async function QuestionsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; category?: string; difficulty?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || '1');
  const category = params.category || '';
  const difficulty = params.difficulty || '';

  const [stats, { questions, total }, categories] = await Promise.all([
    getQuestionsStats(),
    getQuestions(page, 20, category || undefined, difficulty || undefined),
    getCategoriesForSelect(),
  ]);

  const totalPages = Math.ceil(total / 20);

  const difficultyConfig: Record<number, { label: string; variant: 'success' | 'warning' | 'error' }> = {
    1: { label: 'Facile', variant: 'success' },
    2: { label: 'Moyen', variant: 'warning' },
    3: { label: 'Difficile', variant: 'error' },
  };

  const columns = [
    {
      key: 'question',
      header: 'Question',
      className: 'max-w-md',
      render: (q: QuestionWithDetails) => (
        <div>
          <p className="text-sm font-medium text-text-primary line-clamp-2">
            {q.question}
          </p>
          <p className="text-xs text-text-muted mt-1">{q.category_name}</p>
        </div>
      ),
    },
    {
      key: 'type',
      header: 'Type',
      className: 'text-center',
      render: (q: QuestionWithDetails) => (
        <Badge variant="neutral">{q.type.toUpperCase()}</Badge>
      ),
    },
    {
      key: 'difficulty',
      header: 'Difficulte',
      className: 'text-center',
      render: (q: QuestionWithDetails) => {
        const config = difficultyConfig[q.difficulte] || difficultyConfig[1];
        return <Badge variant={config.variant}>{config.label}</Badge>;
      },
    },
    {
      key: 'premium',
      header: 'Acces',
      className: 'text-center',
      render: (q: QuestionWithDetails) => (
        <div className="flex justify-center">
          {q.is_premium ? (
            <Lock className="w-4 h-4 text-warning" />
          ) : (
            <Unlock className="w-4 h-4 text-success" />
          )}
        </div>
      ),
    },
    {
      key: 'reponses',
      header: 'Reponses',
      className: 'text-center',
      render: (q: QuestionWithDetails) => (
        <span className={q.reponses_count === 0 ? 'text-error' : 'text-text-primary'}>
          {q.reponses_count}
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Questions" 
        subtitle={`${stats.totalQuestions} questions au total`}
      />

      <div className="p-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total questions"
            value={stats.totalQuestions}
            icon={HelpCircle}
            variant="primary"
          />
          <StatCard
            title="Gratuites"
            value={stats.freeQuestions}
            icon={Unlock}
            variant="success"
          />
          <StatCard
            title="Premium"
            value={stats.premiumQuestions}
            icon={Lock}
            variant="warning"
          />
          <StatCard
            title="Categories"
            value={stats.totalCategories}
            icon={AlertCircle}
          />
        </div>

        {/* Repartition par difficulte */}
        <Card title="Repartition par difficulte" className="mb-8">
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(stats.byDifficulty).map(([diff, count]) => {
              const config = difficultyConfig[parseInt(diff)] || difficultyConfig[1];
              const percentage = stats.totalQuestions > 0
                ? Math.round((count / stats.totalQuestions) * 100)
                : 0;
              return (
                <div key={diff} className="text-center p-4 border border-gray-200">
                  <Badge variant={config.variant} >{config.label}</Badge>
                  <p className="text-2xl font-bold text-text-primary mt-2">{count}</p>
                  <p className="text-sm text-text-muted">{percentage}%</p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Filters */}
        <Card className="mb-6">
          <form className="flex flex-wrap items-center gap-4">
            <select 
              name="category" 
              defaultValue={category}
              className="input-field w-64"
            >
              <option value="">Toutes les categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.nom}</option>
              ))}
            </select>
            <select 
              name="difficulty" 
              defaultValue={difficulty}
              className="input-field w-40"
            >
              <option value="">Toutes difficultes</option>
              <option value="1">Facile</option>
              <option value="2">Moyen</option>
              <option value="3">Difficile</option>
            </select>
            <button type="submit" className="btn-primary">
              Filtrer
            </button>
          </form>
        </Card>

        {/* Table */}
        <Card noPadding>
          <DataTable
            columns={columns}
            data={questions}
            keyExtractor={(q) => q.id}
            emptyMessage="Aucune question trouvee"
          />
        </Card>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-text-muted">
              Page {page} sur {totalPages}
            </p>
            <div className="flex gap-2">
              {page > 1 && (
                <Link
                  href={`/questions?page=${page - 1}&category=${category}&difficulty=${difficulty}`}
                  className="btn-secondary"
                >
                  Precedent
                </Link>
              )}
              {page < totalPages && (
                <Link
                  href={`/questions?page=${page + 1}&category=${category}&difficulty=${difficulty}`}
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
