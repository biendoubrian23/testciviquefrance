import { getServicesStats, getServiceUsers, getTotalServicesRevenue } from '@/lib/actions/services';
import AchatsAnnexesClient from './AchatsAnnexesClient';

export const dynamic = 'force-dynamic';

export default async function AchatsAnnexesPage() {
  const [stats, users, totalRevenue] = await Promise.all([
    getServicesStats(),
    getServiceUsers({}),
    getTotalServicesRevenue(),
  ]);

  return (
    <AchatsAnnexesClient 
      initialStats={stats}
      initialUsers={users}
      totalRevenue={totalRevenue}
    />
  );
}
