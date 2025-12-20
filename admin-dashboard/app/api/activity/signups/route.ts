import { NextRequest, NextResponse } from 'next/server';
import { getRecentSignups, PeriodType } from '@/lib/actions/activity';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const period = (searchParams.get('period') || '1d') as PeriodType;

  try {
    const data = await getRecentSignups(period);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erreur API signups:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
