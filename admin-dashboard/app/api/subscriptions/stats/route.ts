import { NextResponse } from 'next/server';
import { getSubscriptionStats } from '@/lib/actions/subscriptions';

export async function GET() {
  try {
    const stats = await getSubscriptionStats();
    return NextResponse.json({ stats });
  } catch (error) {
    console.error('Error fetching subscription stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch subscription stats' },
      { status: 500 }
    );
  }
}
