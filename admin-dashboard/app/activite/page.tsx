import { Header } from '@/components/layout';
import { StatCard, Card, Badge } from '@/components/ui';
import { RefreshBanner } from '@/components/ui/RefreshBanner';
import { ActivityChart } from '@/components/charts';
import { getRealtimeActivity, getHourlyActivity } from '@/lib/actions/activity';
import { Users, FileText, GraduationCap, CreditCard, Clock, UserPlus } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ActivityPage() {
  const [activityData, hourlyData] = await Promise.all([
    getRealtimeActivity(),
    getHourlyActivity(),
  ]);

  const { stats, recentSessions, recentExamens, recentSignups } = activityData;

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('fr-FR', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Transformer les donnees pour le graphique
  const chartData = hourlyData.map(h => ({
    date: h.hour,
    users: h.sessions + h.examens,
    sessions: h.sessions,
  }));

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Activite en temps reel" 
        subtitle={`Derniere mise a jour: ${new Date().toLocaleTimeString('fr-FR')}`}
      />

      <div className="p-8">
        {/* Bandeau refresh */}
        <RefreshBanner />

        {/* Stats derniere heure vs 24h */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Utilisateurs actifs"
            value={stats.usersLastHour}
            subtitle={`${stats.usersLast24h} sur 24h`}
            icon={Users}
            variant="primary"
          />
          <StatCard
            title="Sessions de quiz"
            value={stats.sessionsLastHour}
            subtitle={`${stats.sessionsLast24h} sur 24h`}
            icon={FileText}
            variant="success"
          />
          <StatCard
            title="Examens blancs"
            value={stats.examensLastHour}
            subtitle={`${stats.examensLast24h} sur 24h`}
            icon={GraduationCap}
          />
          <StatCard
            title="Achats (24h)"
            value={stats.achatsLast24h}
            icon={CreditCard}
            variant="warning"
          />
        </div>

        {/* Graphique horaire */}
        <Card title="Activite horaire" subtitle="24 dernieres heures" className="mb-8">
          <ActivityChart data={chartData} />
        </Card>

        {/* Activites recentes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sessions recentes (15 min) */}
          <Card title="Sessions en cours" subtitle="15 dernieres minutes">
            {recentSessions.length === 0 ? (
              <p className="text-center text-text-muted py-4">Aucune session recente</p>
            ) : (
              <ul className="space-y-3">
                {recentSessions.map((session: any) => (
                  <li key={session.id} className="flex items-center justify-between p-3 bg-gray-50">
                    <div>
                      <Badge variant={session.completed ? 'success' : 'info'}>
                        Niveau {session.niveau}
                      </Badge>
                      <p className="text-xs text-text-muted mt-1">
                        Score: {session.score}/{session.total_questions || 10}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-text-muted flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatTime(session.started_at)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </Card>

          {/* Examens recents (15 min) */}
          <Card title="Examens en cours" subtitle="15 dernieres minutes">
            {recentExamens.length === 0 ? (
              <p className="text-center text-text-muted py-4">Aucun examen recent</p>
            ) : (
              <ul className="space-y-3">
                {recentExamens.map((exam: any) => (
                  <li key={exam.id} className="flex items-center justify-between p-3 bg-gray-50">
                    <div>
                      <Badge variant={exam.is_completed ? (exam.passed ? 'success' : 'error') : 'info'}>
                        Examen {exam.exam_number || 1}
                      </Badge>
                      {exam.is_completed && (
                        <p className="text-xs text-text-muted mt-1">
                          Score: {exam.score}/{exam.total_questions}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-text-muted flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatTime(exam.started_at)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </Card>

          {/* Inscriptions recentes (24h) */}
          <Card title="Nouvelles inscriptions" subtitle="24 dernieres heures">
            {recentSignups.length === 0 ? (
              <p className="text-center text-text-muted py-4">Aucune inscription recente</p>
            ) : (
              <ul className="space-y-3">
                {recentSignups.map((user: any) => (
                  <li key={user.id} className="flex items-center gap-3 p-3 bg-gray-50">
                    <div className="w-8 h-8 bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <UserPlus className="w-4 h-4 text-primary-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-primary truncate">
                        {user.prenom || user.email?.split('@')[0] || 'Nouveau'}
                      </p>
                      <p className="text-xs text-text-muted truncate">{user.email}</p>
                    </div>
                    <p className="text-xs text-text-muted">
                      {formatDateTime(user.created_at)}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
