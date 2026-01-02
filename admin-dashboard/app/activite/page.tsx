import { Header } from '@/components/layout';
import { RefreshBanner } from '@/components/ui/RefreshBanner';
import { ActivityClient } from './ActivityClient';
import { getActivityStats, getRecentSessions, getRecentExamens, getRecentSignups } from '@/lib/actions/activity';
import { getActivityData } from '@/lib/actions/dashboard';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ActivityPage() {
  // Charger les données initiales (période par défaut: 2 semaines)
  const [stats, sessions, examens, signups, chartData] = await Promise.all([
    getActivityStats('1w'),
    getRecentSessions('1w'),
    getRecentExamens('1w'),
    getRecentSignups('1w'),
    getActivityData(14), // Données d'activité journalière sur 2 semaines
  ]);

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
