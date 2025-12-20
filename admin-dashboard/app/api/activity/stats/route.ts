import { NextRequest, NextResponse } from 'next/server';
import { getActivityStats, PeriodType } from '@/lib/actions/activity';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const period = (searchParams.get('period') || '1d') as PeriodType;

  try {
    const stats = await getActivityStats(period);
    return NextResponse.json(stats);
  } catch (error) {
    console.error('Erreur API stats:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
