import { NextRequest, NextResponse } from 'next/server';
import { getCategoriesWithUserStats, getCategoriesGlobalStats, UserFilter } from '@/lib/actions/content';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filter = (searchParams.get('filter') || 'all') as UserFilter;

  const [categories, stats] = await Promise.all([
    getCategoriesWithUserStats(filter),
    getCategoriesGlobalStats(filter),
  ]);

  return NextResponse.json({ categories, stats });
}
