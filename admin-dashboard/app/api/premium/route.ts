import { NextRequest, NextResponse } from 'next/server';
import { getPremiumUsers, getPaidUsersStats, PaidUserFilter } from '@/lib/actions/users';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filter = (searchParams.get('filter') || 'all') as PaidUserFilter;

  const [users, stats] = await Promise.all([
    getPremiumUsers(filter),
    getPaidUsersStats()
  ]);

  return NextResponse.json({ users, stats });
}
