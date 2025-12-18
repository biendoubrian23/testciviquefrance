import { NextRequest, NextResponse } from 'next/server';
import { getPremiumUsers, PaidUserFilter } from '@/lib/actions/users';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filter = (searchParams.get('filter') || 'all') as PaidUserFilter;

  const users = await getPremiumUsers(filter);

  return NextResponse.json({ users });
}
