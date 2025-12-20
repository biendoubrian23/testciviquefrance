import { NextRequest, NextResponse } from 'next/server';
import { getRecentExamens, PeriodType } from '@/lib/actions/activity';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const period = (searchParams.get('period') || '15min') as PeriodType;

  try {
    const data = await getRecentExamens(period);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erreur API examens:', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
