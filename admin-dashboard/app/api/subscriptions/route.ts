import { NextRequest, NextResponse } from 'next/server';
import { getSubscriptions } from '@/lib/actions/subscriptions';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  
  const filter = {
    type: (searchParams.get('type') || 'all') as 'all' | 'standard' | 'premium',
    status: (searchParams.get('status') || 'all') as 'all' | 'active' | 'expiring' | 'canceled',
    period: (searchParams.get('period') || 'all') as 'all' | 'week' | 'month' | '3months',
  };

  const subscriptions = await getSubscriptions(filter);

  return NextResponse.json({ subscriptions });
}
