import { NextRequest, NextResponse } from 'next/server';
import { getActivityData, getRevenueData } from '@/lib/actions/dashboard';

// Mapping des périodes vers le nombre de jours
const PERIOD_DAYS: Record<string, number> = {
  '1d': 1,
  '1w': 7,
  '2w': 14,
  '1m': 30,
  '3m': 90,
  '1y': 365,
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get('type') || 'activity'; // 'activity' ou 'revenue'
  const period = searchParams.get('period') || '2w';
  
  const days = PERIOD_DAYS[period] || 14;

  try {
    if (type === 'activity') {
      const data = await getActivityData(days);
      return NextResponse.json({ data });
    } else if (type === 'revenue') {
      const data = await getRevenueData(days);
      return NextResponse.json({ data });
    }

    return NextResponse.json({ error: 'Type invalide' }, { status: 400 });
  } catch (error) {
    console.error('Erreur API charts:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
