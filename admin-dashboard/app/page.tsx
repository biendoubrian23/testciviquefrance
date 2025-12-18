import { Header } from '@/components/layout';
import { 
  getDashboardStats, 
  getActivityData, 
  getRevenueData, 
  getCategoryStats,
  getRecentUsers,
  getExamSuccessData,
} from '@/lib/actions/dashboard';
import { DashboardClient } from './DashboardClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function DashboardPage() {
  const [
    stats,
    activityData,
    revenueData,
    categoryStats,
    recentUsers,
    examSuccessData,
  ] = await Promise.all([
    getDashboardStats('all'),
    getActivityData(14),
    getRevenueData(30),
    getCategoryStats(),
    getRecentUsers(8),
    getExamSuccessData(14),
  ]);

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Vue d'ensemble" 
        subtitle={`Derniere mise a jour: ${new Date().toLocaleString('fr-FR')}`}
      />

      <div className="p-8">
        <DashboardClient
          initialStats={stats}
          activityData={activityData}
          revenueData={revenueData}
          categoryStats={categoryStats}
          recentUsers={recentUsers}
          examSuccessData={examSuccessData}
        />
      </div>
    </div>
  );
}
