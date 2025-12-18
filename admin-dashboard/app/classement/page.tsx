import { getUsersRanking, getRankingStats } from '@/lib/actions/classement';
import { ClassementClient } from './ClassementClient';

export const dynamic = 'force-dynamic';

export default async function ClassementPage() {
  const [rankings, stats] = await Promise.all([
    getUsersRanking('taux_reussite', {}, 100),
    getRankingStats(),
  ]);

  return (
    <ClassementClient 
      initialRankings={rankings} 
      stats={stats}
    />
  );
}
