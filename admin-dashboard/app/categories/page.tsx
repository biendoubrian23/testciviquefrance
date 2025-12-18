import { Header } from '@/components/layout';
import { StatCard, Card, ProgressBar } from '@/components/ui';
import { getCategories, getQuestionsStats } from '@/lib/actions/content';
import { BookOpen, HelpCircle, Target, TrendingUp } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function CategoriesPage() {
  const [categories, stats] = await Promise.all([
    getCategories(),
    getQuestionsStats(),
  ]);

  const totalQuestions = categories.reduce((sum, c) => sum + c.questions_count, 0);

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Categories" 
        subtitle={`${categories.length} categories disponibles`}
      />

      <div className="p-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Total categories"
            value={categories.length}
            icon={BookOpen}
            variant="primary"
          />
          <StatCard
            title="Total questions"
            value={totalQuestions}
            icon={HelpCircle}
          />
          <StatCard
            title="Moyenne par categorie"
            value={Math.round(totalQuestions / Math.max(categories.length, 1))}
            icon={Target}
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

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-xs text-text-muted">Ordre</p>
                      <p className="font-semibold">{category.ordre}</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-muted">Couleur</p>
                      <div className="flex items-center justify-center gap-2">
                        <div 
                          className="w-4 h-4" 
                          style={{ backgroundColor: category.couleur }}
                        />
                        <span className="text-xs font-mono">{category.couleur}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
