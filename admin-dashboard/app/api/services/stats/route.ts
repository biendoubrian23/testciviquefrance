import { NextResponse } from 'next/server';
import { getServicesStats } from '@/lib/actions/services';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const stats = await getServicesStats();
    return NextResponse.json({ stats });
  } catch (error) {
    console.error('Erreur API services stats:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des stats services' },
      { status: 500 }
    );
  }
}
