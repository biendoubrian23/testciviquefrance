import { NextRequest, NextResponse } from 'next/server';
import { getServiceUsers } from '@/lib/actions/services';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const serviceType = searchParams.get('serviceType') || undefined;
    const startDate = searchParams.get('startDate') || undefined;
    const endDate = searchParams.get('endDate') || undefined;

    const users = await getServiceUsers({
      serviceType: serviceType as any,
      startDate,
      endDate,
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error('Erreur API services:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des services' },
      { status: 500 }
    );
  }
}
