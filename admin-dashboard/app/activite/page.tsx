import { Header } from '@/components/layout';
import { RefreshBanner } from '@/components/ui/RefreshBanner';
import { ActivityClient } from './ActivityClient';
import { getActivityStats, getRecentSessions, getRecentExamens, getRecentSignups, getHourlyActivity } from '@/lib/actions/activity';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ActivityPage() {
  // Charger les données initiales (période par défaut: 1 semaine)
  const [stats, sessions, examens, signups, hourlyData] = await Promise.all([
    getActivityStats('1w'),
    getRecentSessions('1w'),
    getRecentExamens('1w'),
    getRecentSignups('1w'),
    getHourlyActivity('1w'),
  ]);

  // Transformer les données pour le graphique
  const chartData = hourlyData.map(h => ({
    date: h.hour,
    users: h.sessions + h.examens,
    sessions: h.sessions,
  }));

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Activité en temps réel" 
        subtitle={`Dernière mise à jour: ${new Date().toLocaleTimeString('fr-FR')}`}
      />

      {/* Bandeau refresh */}
      <div className="px-8 pt-4">
        <RefreshBanner />
      </div>

      {/* Contenu avec filtres */}
      <ActivityClient
        initialStats={stats}
        initialSessions={sessions}
        initialExamens={examens}
        initialSignups={signups}
        initialChartData={chartData}
      />
    </div>
  );
}
