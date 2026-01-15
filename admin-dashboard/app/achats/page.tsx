import { Header } from '@/components/layout';
import { getAchats, getRevenueStats } from '@/lib/actions/revenue';
import { AchatsClient } from './AchatsClient';

export const dynamic = 'force-dynamic';

export default async function AchatsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; status?: string }>;
}) {
  const params = await searchParams;
  const page = parseInt(params.page || '1');
  const status = params.status || 'all';

  const [{ achats, total }, stats] = await Promise.all([
    getAchats(page, 20, status),
    getRevenueStats(),
  ]);

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Historique des achats" 
        subtitle={`${total} transactions au total`}
      />

      <div className="p-4 lg:p-8">
        <AchatsClient
          initialAchats={achats}
          initialTotal={total}
          initialStats={stats}
          initialPage={page}
          initialStatus={status}
        />
      </div>
    </div>
  );
}
