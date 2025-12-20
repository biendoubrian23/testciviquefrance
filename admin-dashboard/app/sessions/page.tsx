import { Header } from '@/components/layout';
import { getSessionsStats, getRecentSessions, getSessionsByCategory } from '@/lib/actions/examens';
import { SessionsClient } from './SessionsClient';

export const dynamic = 'force-dynamic';

export default async function SessionsPage() {
  const [stats, recentSessions, sessionsByCategory] = await Promise.all([
    getSessionsStats('all'),
    getRecentSessions(50, 'all'),
    getSessionsByCategory('all'),
  ]);

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Sessions de quiz" 
        subtitle="Historique des entrainements par niveau"
      />

      <div className="p-4 lg:p-8">
        <SessionsClient
          initialStats={stats}
          initialSessions={recentSessions}
          initialCategoryStats={sessionsByCategory}
        />
      </div>
    </div>
  );
}
