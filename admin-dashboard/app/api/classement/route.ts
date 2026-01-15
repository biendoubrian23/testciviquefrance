import { NextRequest, NextResponse } from 'next/server';
import { getUsersRanking, getRankingStats, SortCriteria, FilterCriteria } from '@/lib/actions/classement';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const sort = (searchParams.get('sort') || 'taux_reussite') as SortCriteria;

  const filters: FilterCriteria = {};

  const subscription = searchParams.get('subscription');
  if (subscription && subscription !== 'all') {
    filters.subscriptionType = subscription as any;
  }

  const minQuestions = searchParams.get('minQuestions');
  if (minQuestions) {
    filters.minQuestions = parseInt(minQuestions);
  }

  const minTaux = searchParams.get('minTaux');
  if (minTaux) {
    filters.minTauxReussite = parseInt(minTaux);
  }

  const hasExamens = searchParams.get('hasExamens');
  if (hasExamens === 'true') {
    filters.hasExamens = true;
  }

  const actifRecent = searchParams.get('actifRecent');
  if (actifRecent === 'true') {
    filters.actifRecent = true;
  }

  const [rankings, stats] = await Promise.all([
    getUsersRanking(sort, filters, 100),
    getRankingStats()
  ]);

  return NextResponse.json({ rankings, stats });
}

