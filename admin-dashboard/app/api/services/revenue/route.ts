import { NextRequest, NextResponse } from 'next/server';
import { getTotalServicesRevenue } from '@/lib/actions/services';
import { verifyAdminSession, unauthorizedResponse } from '@/lib/auth/verify-session';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  if (!(await verifyAdminSession(request))) return unauthorizedResponse();

  try {
    const totalRevenue = await getTotalServicesRevenue();
    return NextResponse.json({ totalRevenue });
  } catch (error) {
    console.error('Erreur API services revenue:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des revenus services' },
      { status: 500 }
    );
  }
}
