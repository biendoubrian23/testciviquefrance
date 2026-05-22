import { Header } from '@/components/layout';
import { getAllRevenueEvents } from '@/lib/actions/revenue-events';
import { RevenusClient } from './RevenusClient';

export const dynamic = 'force-dynamic';

export default async function RevenusPage() {
  const events = await getAllRevenueEvents();

  return (
    <div className="min-h-screen bg-background-light">
      <Header
        title="Revenus"
        subtitle="Tous les encaissements réels (1 ligne = 1 paiement)"
      />

      <div className="p-4 lg:p-8">
        <RevenusClient initialEvents={events} />
      </div>
    </div>
  );
}
