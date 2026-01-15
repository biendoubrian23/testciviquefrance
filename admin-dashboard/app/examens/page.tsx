import { getExamensStats, getRecentExamens, getExamensByNumber } from '@/lib/actions/examens';
import { ExamensClient } from './ExamensClient';

export const dynamic = 'force-dynamic';

export default async function ExamensPage() {
  const [stats, recentExamens, examensByNumber] = await Promise.all([
    getExamensStats(),
    getRecentExamens(50),
    getExamensByNumber(),
  ]);

  return (
    <ExamensClient
      initialStats={stats}
      initialExamens={recentExamens}
      initialExamensByNumber={examensByNumber}
    />
  );
}

