'use client';

import { useState, useEffect, useCallback } from 'react';
import { StatCard, Card, Badge } from '@/components/ui';
import { PeriodFilter, PeriodType, getPeriodLabel } from '@/components/ui/PeriodFilter';
import { ActivityChart } from '@/components/charts';
import { Users, FileText, GraduationCap, CreditCard, Clock, UserPlus, RefreshCw } from 'lucide-react';

interface ActivityClientProps {
  initialStats: {
    users: number;
    sessions: number;
    examens: number;
    achats: number;
  };
  initialSessions: any[];
  initialExamens: any[];
  initialSignups: any[];
  initialChartData: any[];
}

export function ActivityClient({
  initialStats,
  initialSessions,
  initialExamens,
  initialSignups,
  initialChartData,
}: ActivityClientProps) {
  // Périodes pour chaque bloc (défaut: 1 semaine pour voir plus de données)
  const [statsPeriod, setStatsPeriod] = useState<PeriodType>('1w');
  const [chartPeriod, setChartPeriod] = useState<PeriodType>('1w');
  const [sessionsPeriod, setSessionsPeriod] = useState<PeriodType>('1w');
  const [examensPeriod, setExamensPeriod] = useState<PeriodType>('1w');
  const [signupsPeriod, setSignupsPeriod] = useState<PeriodType>('1w');

  // Données
  const [stats, setStats] = useState(initialStats);
  const [sessions, setSessions] = useState(initialSessions);
  const [examens, setExamens] = useState(initialExamens);
  const [signups, setSignups] = useState(initialSignups);
  const [chartData, setChartData] = useState(initialChartData);

  // Loading states
  const [loadingStats, setLoadingStats] = useState(false);
  const [loadingChart, setLoadingChart] = useState(false);
  const [loadingSessions, setLoadingSessions] = useState(false);
  const [loadingExamens, setLoadingExamens] = useState(false);
  const [loadingSignups, setLoadingSignups] = useState(false);

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

  // Fetch functions
  const fetchStats = useCallback(async (period: PeriodType) => {
    setLoadingStats(true);
    try {
      const res = await fetch(`/api/activity/stats?period=${period}`);
      const data = await res.json();
      setStats(data);
    } catch (error) {
      console.error('Erreur stats:', error);
    } finally {
      setLoadingStats(false);
    }
  }, []);

  const fetchChart = useCallback(async (period: PeriodType) => {
    setLoadingChart(true);
    try {
      const res = await fetch(`/api/activity/chart?period=${period}`);
      const data = await res.json();
      setChartData(data.map((h: any) => ({
        date: h.hour,
        users: h.sessions + h.examens,
        sessions: h.sessions,
      })));
    } catch (error) {
      console.error('Erreur chart:', error);
    } finally {
      setLoadingChart(false);
    }
  }, []);

  const fetchSessions = useCallback(async (period: PeriodType) => {
    setLoadingSessions(true);
    try {
      const res = await fetch(`/api/activity/sessions?period=${period}`);
      const data = await res.json();
      setSessions(data);
    } catch (error) {
      console.error('Erreur sessions:', error);
    } finally {
      setLoadingSessions(false);
    }
  }, []);

  const fetchExamens = useCallback(async (period: PeriodType) => {
    setLoadingExamens(true);
    try {
      const res = await fetch(`/api/activity/examens?period=${period}`);
      const data = await res.json();
      setExamens(data);
    } catch (error) {
      console.error('Erreur examens:', error);
    } finally {
      setLoadingExamens(false);
    }
  }, []);

  const fetchSignups = useCallback(async (period: PeriodType) => {
    setLoadingSignups(true);
    try {
      const res = await fetch(`/api/activity/signups?period=${period}`);
      const data = await res.json();
      setSignups(data);
    } catch (error) {
      console.error('Erreur signups:', error);
    } finally {
      setLoadingSignups(false);
    }
  }, []);

  // Effect handlers for period changes
  useEffect(() => {
    fetchStats(statsPeriod);
  }, [statsPeriod, fetchStats]);

  useEffect(() => {
    fetchChart(chartPeriod);
  }, [chartPeriod, fetchChart]);

  useEffect(() => {
    fetchSessions(sessionsPeriod);
  }, [sessionsPeriod, fetchSessions]);

  useEffect(() => {
    fetchExamens(examensPeriod);
  }, [examensPeriod, fetchExamens]);

  useEffect(() => {
    fetchSignups(signupsPeriod);
  }, [signupsPeriod, fetchSignups]);

  return (
    <div className="p-8">
      {/* Stats avec filtre */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Statistiques</h2>
          <PeriodFilter value={statsPeriod} onChange={setStatsPeriod} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className={`relative ${loadingStats ? 'opacity-50' : ''}`}>
            <StatCard
              title="Utilisateurs actifs"
              value={stats.users}
              subtitle={getPeriodLabel(statsPeriod)}
              icon={Users}
              variant="primary"
            />
            {loadingStats && <LoadingOverlay />}
          </div>
          <div className={`relative ${loadingStats ? 'opacity-50' : ''}`}>
            <StatCard
              title="Sessions de quiz"
              value={stats.sessions}
              subtitle={getPeriodLabel(statsPeriod)}
              icon={FileText}
              variant="success"
            />
            {loadingStats && <LoadingOverlay />}
          </div>
          <div className={`relative ${loadingStats ? 'opacity-50' : ''}`}>
            <StatCard
              title="Examens blancs"
              value={stats.examens}
              subtitle={getPeriodLabel(statsPeriod)}
              icon={GraduationCap}
            />
            {loadingStats && <LoadingOverlay />}
          </div>
          <div className={`relative ${loadingStats ? 'opacity-50' : ''}`}>
            <StatCard
              title="Achats"
              value={stats.achats}
              subtitle={getPeriodLabel(statsPeriod)}
              icon={CreditCard}
              variant="warning"
            />
            {loadingStats && <LoadingOverlay />}
          </div>
        </div>
      </div>

      {/* Graphique avec filtre */}
      <div className="mb-8">
        <Card 
          title="Activité horaire" 
          subtitle={getPeriodLabel(chartPeriod)}
          actions={<PeriodFilter value={chartPeriod} onChange={setChartPeriod} compact />}
        >
          <div className={`relative ${loadingChart ? 'opacity-50' : ''}`}>
            <ActivityChart data={chartData} />
            {loadingChart && <LoadingOverlay />}
          </div>
        </Card>
      </div>

      {/* Activités récentes avec filtres */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sessions */}
        <Card 
          title="Sessions de quiz" 
          subtitle={getPeriodLabel(sessionsPeriod)}
          actions={<PeriodFilter value={sessionsPeriod} onChange={setSessionsPeriod} compact />}
        >
          <div className={`relative ${loadingSessions ? 'opacity-50' : ''}`}>
            {sessions.length === 0 ? (
              <p className="text-center text-text-muted py-4">Aucune session</p>
            ) : (
              <ul className="space-y-3 max-h-80 overflow-y-auto">
                {sessions.map((session: any) => (
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
            {loadingSessions && <LoadingOverlay />}
          </div>
        </Card>

        {/* Examens */}
        <Card 
          title="Examens blancs" 
          subtitle={getPeriodLabel(examensPeriod)}
          actions={<PeriodFilter value={examensPeriod} onChange={setExamensPeriod} compact />}
        >
          <div className={`relative ${loadingExamens ? 'opacity-50' : ''}`}>
            {examens.length === 0 ? (
              <p className="text-center text-text-muted py-4">Aucun examen</p>
            ) : (
              <ul className="space-y-3 max-h-80 overflow-y-auto">
                {examens.map((exam: any) => (
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
            {loadingExamens && <LoadingOverlay />}
          </div>
        </Card>

        {/* Inscriptions */}
        <Card 
          title="Nouvelles inscriptions" 
          subtitle={getPeriodLabel(signupsPeriod)}
          actions={<PeriodFilter value={signupsPeriod} onChange={setSignupsPeriod} compact />}
        >
          <div className={`relative ${loadingSignups ? 'opacity-50' : ''}`}>
            {signups.length === 0 ? (
              <p className="text-center text-text-muted py-4">Aucune inscription</p>
            ) : (
              <ul className="space-y-3 max-h-80 overflow-y-auto">
                {signups.map((user: any) => (
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
            {loadingSignups && <LoadingOverlay />}
          </div>
        </Card>
      </div>
    </div>
  );
}

function LoadingOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white/50">
      <RefreshCw className="w-5 h-5 text-primary-600 animate-spin" />
    </div>
  );
}
