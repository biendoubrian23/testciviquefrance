import { NextRequest, NextResponse } from 'next/server';
import { getDashboardStats, SubscriptionFilter } from '@/lib/actions/dashboard';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filter = (searchParams.get('filter') || 'all') as SubscriptionFilter;

  const stats = await getDashboardStats(filter);

  return NextResponse.json({ stats });
}
