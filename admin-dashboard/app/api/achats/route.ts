import { NextRequest, NextResponse } from 'next/server';
import { getAchats, getRevenueStats } from '@/lib/actions/revenue';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const status = searchParams.get('status') || 'all';
    const limit = parseInt(searchParams.get('limit') || '20');

    const [{ achats, total }, stats] = await Promise.all([
      getAchats(page, limit, status),
      getRevenueStats(),
    ]);

    return NextResponse.json({
      achats,
      total,
      totalPages: Math.ceil(total / limit),
      stats,
    });
  } catch (error) {
    console.error('Erreur API achats:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des achats' },
      { status: 500 }
    );
  }
}
