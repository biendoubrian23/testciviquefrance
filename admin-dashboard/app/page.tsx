import { Header } from '@/components/layout';
import { StatCard, Card } from '@/components/ui';
import { ActivityChart, RevenueChart, CategoryDistribution, ExamSuccessChart } from '@/components/charts';
import { 
  getDashboardStats, 
  getActivityData, 
  getRevenueData, 
  getCategoryStats,
  getRecentUsers,
  getExamSuccessData,
} from '@/lib/actions/dashboard';
import { 
  Users, 
  GraduationCap, 
  CreditCard, 
  HelpCircle,
  TrendingUp,
  Clock,
  Target,
  Award,
} from 'lucide-react';
import { RecentUsersTable } from './components/RecentUsersTable';

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
    getDashboardStats(),
    getActivityData(14),
    getRevenueData(30),
    getCategoryStats(),
    getRecentUsers(8),
    getExamSuccessData(14),
  ]);

  // Formatage du temps d'etude
  const formatStudyTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes} min`;
  };

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Vue d'ensemble" 
        subtitle={`Derniere mise a jour: ${new Date().toLocaleString('fr-FR')}`}
      />

      <div className="p-8">
        {/* Stats principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Utilisateurs totaux"
            value={stats.totalUsers.toLocaleString('fr-FR')}
            subtitle={`+${stats.newUsersThisMonth} ce mois`}
            icon={Users}
            variant="primary"
            trend={{ value: stats.newUsersThisMonth, isPositive: true }}
          />
          <StatCard
            title="Utilisateurs Premium"
            value={stats.premiumUsers.toLocaleString('fr-FR')}
            subtitle={`${((stats.premiumUsers / Math.max(stats.totalUsers, 1)) * 100).toFixed(1)}% du total`}
            icon={Award}
            variant="success"
          />
          <StatCard
            title="Revenus totaux"
            value={`${stats.totalRevenus.toFixed(2)} €`}
            subtitle={`+${stats.revenusThisMonth.toFixed(2)} € ce mois`}
            icon={CreditCard}
            variant="success"
          />
          <StatCard
            title="Examens completes"
            value={stats.totalExamens.toLocaleString('fr-FR')}
            subtitle={`${stats.tauxReussiteExamens}% de reussite`}
            icon={GraduationCap}
            variant="primary"
          />
        </div>

        {/* Stats secondaires */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Questions totales"
            value={stats.totalQuestions.toLocaleString('fr-FR')}
            subtitle={`${stats.totalCategories} categories`}
            icon={HelpCircle}
          />
          <StatCard
            title="Sessions de quiz"
            value={stats.totalSessions.toLocaleString('fr-FR')}
            icon={Target}
          />
          <StatCard
            title="Questions repondues"
            value={stats.questionsRepondues.toLocaleString('fr-FR')}
            icon={TrendingUp}
          />
          <StatCard
            title="Temps d'etude total"
            value={formatStudyTime(stats.tempsEtudeTotal)}
            icon={Clock}
          />
        </div>

        {/* Graphiques principaux */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card title="Activite des utilisateurs" subtitle="14 derniers jours">
            <ActivityChart data={activityData} />
          </Card>
          <Card title="Revenus" subtitle="30 derniers jours">
            <RevenueChart data={revenueData} />
          </Card>
        </div>

        {/* Graphiques secondaires */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card title="Resultats des examens" subtitle="14 derniers jours">
            <ExamSuccessChart data={examSuccessData} />
          </Card>
          <Card title="Questions par categorie">
            <CategoryDistribution data={categoryStats} />
          </Card>
        </div>

        {/* Table des utilisateurs recents */}
        <Card 
          title="Utilisateurs recents" 
          subtitle="Derniers inscrits"
          actions={
            <a href="/utilisateurs" className="text-sm text-primary-600 hover:text-primary-700">
              Voir tout
            </a>
          }
        >
          <RecentUsersTable users={recentUsers} />
        </Card>
      </div>
    </div>
  );
}
