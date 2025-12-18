import { getSubscriptionStats } from '@/lib/actions/subscriptions';
import ProjectionsClient from './ProjectionsClient';

export const dynamic = 'force-dynamic';

export default async function ProjectionsPage() {
  const stats = await getSubscriptionStats();

  return (
    <ProjectionsClient 
      currentStandard={stats.totalStandard}
      currentPremium={stats.totalPremium}
    />
  );
}
