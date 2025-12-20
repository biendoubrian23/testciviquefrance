import { Header } from '@/components/layout';
import { getPremiumUsers, getPaidUsersStats } from '@/lib/actions/users';
import { PremiumClient } from './PremiumClient';

export const dynamic = 'force-dynamic';

export default async function PremiumUsersPage() {
  const [users, stats] = await Promise.all([
    getPremiumUsers('all'),
    getPaidUsersStats(),
  ]);

  const totalPaid = stats.totalStandard + stats.totalPremium;

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Utilisateurs Payants" 
        subtitle={`${totalPaid} abonnes actifs (${stats.totalStandard} Standard + ${stats.totalPremium} Premium)`}
      />

      <div className="p-4 lg:p-8">
        <PremiumClient
          initialUsers={users}
          initialStats={stats}
        />
      </div>
    </div>
  );
}
