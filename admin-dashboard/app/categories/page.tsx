import { Header } from '@/components/layout';
import { getCategoriesWithUserStats, getCategoriesGlobalStats } from '@/lib/actions/content';
import { CategoriesClient } from './CategoriesClient';

export const dynamic = 'force-dynamic';

export default async function CategoriesPage() {
  const [categories, stats] = await Promise.all([
    getCategoriesWithUserStats('all'),
    getCategoriesGlobalStats('all'),
  ]);

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Categories" 
        subtitle={`${categories.length} categories disponibles`}
      />

      <div className="p-4 lg:p-8">
        <CategoriesClient
          initialCategories={categories}
          initialStats={stats}
        />
      </div>
    </div>
  );
}
