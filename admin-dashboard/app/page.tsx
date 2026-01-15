import { Header } from '@/components/layout';
import { 
  getDashboardStats, 
  getSignupsData, 
  getRevenueData, 
  getCategoryStats,
  getRecentUsers,
  getExamSuccessData,
} from '@/lib/actions/dashboard';
import { getTotalServicesRevenue, getServicesStats } from '@/lib/actions/services';
import { DashboardClient } from './DashboardClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function DashboardPage() {
  const [
    stats,
    signupsData,
    revenueData,
    categoryStats,
    recentUsers,
    examSuccessData,
    servicesRevenue,
    servicesStats,
  ] = await Promise.all([
    getDashboardStats('all'),
    getSignupsData(14),
    getRevenueData(30),
    getCategoryStats(),
    getRecentUsers(8),
    getExamSuccessData(14),
    getTotalServicesRevenue(),
    getServicesStats(),
  ]);

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Vue d'ensemble" 
        subtitle={`Mise à jour: ${new Date().toLocaleString('fr-FR')}`}
      />

      <div className="p-4 lg:p-8">
        <DashboardClient
          initialStats={stats}
          activityData={signupsData}
          revenueData={revenueData}
          categoryStats={categoryStats}
          recentUsers={recentUsers}
          examSuccessData={examSuccessData}
          servicesRevenue={servicesRevenue}
          servicesStats={servicesStats}
        />
      </div>
    </div>
  );
}
