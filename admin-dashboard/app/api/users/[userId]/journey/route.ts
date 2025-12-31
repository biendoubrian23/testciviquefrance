import { NextRequest, NextResponse } from 'next/server';
import { getUserJourney } from '@/lib/actions/getUserJourney';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ userId: string }> }
) {
    try {
        const { userId } = await params;

        if (!userId) {
            return NextResponse.json({ error: 'User ID required' }, { status: 400 });
        }

        const journeyData = await getUserJourney(userId);

        if (!journeyData) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json(journeyData);
    } catch (error) {
        console.error('Error fetching user journey:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
