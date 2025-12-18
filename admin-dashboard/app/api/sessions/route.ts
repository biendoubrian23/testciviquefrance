import { NextRequest, NextResponse } from 'next/server';
import { getSessionsStats, getRecentSessions, getSessionsByCategory, UserFilter } from '@/lib/actions/examens';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filter = (searchParams.get('filter') || 'all') as UserFilter;

  const [stats, sessions, categoryStats] = await Promise.all([
    getSessionsStats(filter),
    getRecentSessions(50, filter),
    getSessionsByCategory(filter),
  ]);

  return NextResponse.json({ stats, sessions, categoryStats });
}
