import { NextRequest, NextResponse } from 'next/server';
import { getActivityData } from '@/lib/actions/dashboard';

// Mapping des périodes vers le nombre de jours
const PERIOD_DAYS: Record<string, number> = {
  '1d': 1,
  '1w': 7,
  '2w': 14,
  '1m': 30,
  '3m': 90,
  '1y': 365,
};

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const period = searchParams.get('period') || '2w';
  const days = PERIOD_DAYS[period] || 14;

  try {
    const data = await getActivityData(days);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erreur API chart:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
