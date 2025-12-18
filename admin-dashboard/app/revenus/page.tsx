import { Header } from '@/components/layout';
import { getSubscriptions, getSubscriptionStats, getRevenueHistory } from '@/lib/actions/subscriptions';
import { RevenusClient } from './RevenusClient';

export const dynamic = 'force-dynamic';

export default async function RevenusPage() {
  const [subscriptions, stats, revenueHistory] = await Promise.all([
    getSubscriptions(),
    getSubscriptionStats(),
    getRevenueHistory(12),
  ]);

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Revenus & Abonnements" 
        subtitle="Suivi en temps réel des abonnements et revenus"
      />

      <div className="p-8">
        <RevenusClient 
          initialSubscriptions={subscriptions}
          initialStats={stats}
          revenueHistory={revenueHistory}
        />
      </div>
    </div>
  );
}

