import { NextResponse } from 'next/server';
import { getExamensStats, getRecentExamens, getExamensByNumber } from '@/lib/actions/examens';

export async function GET() {
    const [stats, examens, examensByNumber] = await Promise.all([
        getExamensStats(),
        getRecentExamens(50),
        getExamensByNumber(),
    ]);

    return NextResponse.json({ stats, examens, examensByNumber });
}
