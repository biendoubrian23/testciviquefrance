import { Header } from '@/components/layout';
import { StatCard, Card, Badge, DataTable, ProgressBar } from '@/components/ui';
import { getExamensStats, getRecentExamens, getExamensByNumber } from '@/lib/actions/examens';
import { GraduationCap, Target, CheckCircle, XCircle, Clock, TrendingUp } from 'lucide-react';
import { ExamenBlanc } from '@/types';

export const dynamic = 'force-dynamic';

interface ExamenWithUser extends ExamenBlanc {
  user_email?: string;
}

export default async function ExamensPage() {
  const [stats, recentExamens, examensByNumber] = await Promise.all([
    getExamensStats(),
    getRecentExamens(50),
    getExamensByNumber(),
  ]);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatDuration = (seconds: number | null) => {
    if (!seconds) return '-';
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
  };

  const columns = [
    {
      key: 'user',
      header: 'Utilisateur',
      render: (exam: ExamenWithUser) => (
        <span className="text-sm">{exam.user_email}</span>
      ),
    },
    {
      key: 'exam_number',
      header: 'Examen',
      className: 'text-center',
      render: (exam: ExamenWithUser) => (
        <Badge variant="info">Examen {exam.exam_number || 1}</Badge>
      ),
    },
    {
      key: 'score',
      header: 'Score',
      render: (exam: ExamenWithUser) => (
        <div className="flex items-center gap-2">
          <span className="font-medium">{exam.score}/{exam.total_questions}</span>
          <ProgressBar 
            value={exam.score} 
            max={exam.total_questions}
            size="sm"
            variant={exam.passed ? 'success' : 'error'}
          />
        </div>
      ),
    },
    {
      key: 'passed',
      header: 'Resultat',
      className: 'text-center',
      render: (exam: ExamenWithUser) => (
        <div className="flex justify-center">
          {exam.passed ? (
            <Badge variant="success">Reussi</Badge>
          ) : (
            <Badge variant="error">Echoue</Badge>
          )}
        </div>
      ),
    },
    {
      key: 'temps',
      header: 'Duree',
      render: (exam: ExamenWithUser) => (
        <span className="text-text-muted">{formatDuration(exam.temps_total)}</span>
      ),
    },
    {
      key: 'date',
      header: 'Date',
      render: (exam: ExamenWithUser) => (
        <span className="text-text-muted text-sm">{formatDate(exam.completed_at)}</span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Examens blancs" 
        subtitle="Suivi des examens et resultats"
      />

      <div className="p-8">
        {/* Stats principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <StatCard
            title="Examens lances"
            value={stats.totalExamens}
            icon={GraduationCap}
            variant="primary"
          />
          <StatCard
            title="Examens completes"
            value={stats.examensCompletes}
            icon={Target}
          />
          <StatCard
            title="Examens reussis"
            value={stats.examensReussis}
            icon={CheckCircle}
            variant="success"
          />
          <StatCard
            title="Taux de reussite"
            value={`${stats.tauxReussite}%`}
            icon={TrendingUp}
            variant={stats.tauxReussite >= 70 ? 'success' : 'warning'}
          />
          <StatCard
            title="Score moyen"
            value={`${stats.avgScore}/40`}
            icon={Target}
          />
        </div>

        {/* Stats par numero d'examen */}
        <Card 
          title="Performance par examen" 
          subtitle="Statistiques par numero d'examen blanc"
          className="mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {examensByNumber.map((exam) => (
              <div key={exam.examNumber} className="p-4 border border-gray-200 text-center">
                <p className="text-lg font-semibold text-primary-600">Examen {exam.examNumber}</p>
                <p className="text-2xl font-bold text-text-primary mt-2">{exam.total}</p>
                <p className="text-sm text-text-muted">tentatives</p>
                <div className="mt-3">
                  <ProgressBar 
                    value={exam.tauxReussite} 
                    max={100}
                    showPercentage
                    size="sm"
                    variant={exam.tauxReussite >= 80 ? 'success' : exam.tauxReussite >= 50 ? 'warning' : 'error'}
                  />
                </div>
                <p className="text-xs text-text-muted mt-1">{exam.reussis} reussis</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Table des examens recents */}
        <Card title="Examens recents" subtitle="50 derniers examens completes" noPadding>
          <DataTable
            columns={columns}
            data={recentExamens}
            keyExtractor={(exam) => exam.id}
            emptyMessage="Aucun examen complete"
          />
        </Card>
      </div>
    </div>
  );
}
