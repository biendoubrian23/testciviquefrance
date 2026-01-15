import { NextResponse } from 'next/server';
import { getTotalServicesRevenue } from '@/lib/actions/services';

export const dynamic = 'force-dynamic';

export async function GET() {
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
