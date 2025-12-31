import { NextRequest, NextResponse } from 'next/server';

// PostHog EU API endpoint
const POSTHOG_HOST = process.env.POSTHOG_HOST || 'https://eu.i.posthog.com';
const POSTHOG_API_KEY = process.env.POSTHOG_PERSONAL_API_KEY;
const POSTHOG_PROJECT_ID = process.env.POSTHOG_PROJECT_ID;

export interface PostHogEvent {
    event: string;
    timestamp: string;
    properties: {
        $current_url?: string;
        $pathname?: string;
        $referrer?: string;
        $device_type?: string;
        $browser?: string;
        [key: string]: unknown;
    };
}

export interface UserNavigationData {
    pageViews: {
        path: string;
        url: string;
        count: number;
        lastVisited: string;
        totalTimeSpent?: number;
    }[];
    recentEvents: {
        event: string;
        timestamp: string;
        path: string;
        url: string;
    }[];
    totalPageviews: number;
    totalEvents: number;
    firstSeen: string | null;
    lastSeen: string | null;
}

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ userId: string }> }
) {
    try {
        const { userId } = await params;

        if (!userId) {
            return NextResponse.json({ error: 'User ID required' }, { status: 400 });
        }

        // Si PostHog n'est pas configuré, retourner des données vides
        if (!POSTHOG_API_KEY || !POSTHOG_PROJECT_ID) {
            console.warn('PostHog API credentials not configured');
            return NextResponse.json({
                pageViews: [],
                recentEvents: [],
                totalPageviews: 0,
                totalEvents: 0,
                firstSeen: null,
                lastSeen: null,
                error: 'PostHog non configuré - Ajoutez POSTHOG_PERSONAL_API_KEY et POSTHOG_PROJECT_ID dans .env',
            });
        }

        // Récupérer les events de l'utilisateur depuis PostHog
        const eventsUrl = `${POSTHOG_HOST}/api/projects/${POSTHOG_PROJECT_ID}/events/?distinct_id=${userId}&limit=100`;

        const response = await fetch(eventsUrl, {
            headers: {
                'Authorization': `Bearer ${POSTHOG_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('PostHog API error:', response.status, errorText);
            return NextResponse.json({
                pageViews: [],
                recentEvents: [],
                totalPageviews: 0,
                totalEvents: 0,
                firstSeen: null,
                lastSeen: null,
                error: `PostHog API error: ${response.status}`,
            });
        }

        const data = await response.json();
        const events: PostHogEvent[] = data.results || [];

        // Traiter les événements
        const pageViewsMap = new Map<string, {
            path: string;
            url: string;
            count: number;
            lastVisited: string;
            timestamps: string[];
        }>();

        const recentEvents: UserNavigationData['recentEvents'] = [];
        let totalPageviews = 0;
        let firstSeen: string | null = null;
        let lastSeen: string | null = null;

        events.forEach((event) => {
            const timestamp = event.timestamp;
            const path = event.properties?.$pathname || '/';
            const url = event.properties?.$current_url || '';

            // Track first/last seen
            if (!lastSeen || new Date(timestamp) > new Date(lastSeen)) {
                lastSeen = timestamp;
            }
            if (!firstSeen || new Date(timestamp) < new Date(firstSeen)) {
                firstSeen = timestamp;
            }

            // Compter les pageviews
            if (event.event === '$pageview') {
                totalPageviews++;

                const existing = pageViewsMap.get(path);
                if (existing) {
                    existing.count++;
                    existing.timestamps.push(timestamp);
                    if (new Date(timestamp) > new Date(existing.lastVisited)) {
                        existing.lastVisited = timestamp;
                    }
                } else {
                    pageViewsMap.set(path, {
                        path,
                        url,
                        count: 1,
                        lastVisited: timestamp,
                        timestamps: [timestamp],
                    });
                }
            }

            // Garder les 20 derniers events
            if (recentEvents.length < 20) {
                recentEvents.push({
                    event: event.event,
                    timestamp,
                    path,
                    url,
                });
            }
        });

        // Convertir en array et trier par count
        const pageViews = Array.from(pageViewsMap.values())
            .map(({ path, url, count, lastVisited }) => ({
                path,
                url,
                count,
                lastVisited,
            }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10); // Top 10 pages

        const result: UserNavigationData = {
            pageViews,
            recentEvents,
            totalPageviews,
            totalEvents: events.length,
            firstSeen,
            lastSeen,
        };

        return NextResponse.json(result);
    } catch (error) {
        console.error('Error fetching PostHog events:', error);
        return NextResponse.json({
            pageViews: [],
            recentEvents: [],
            totalPageviews: 0,
            totalEvents: 0,
            firstSeen: null,
            lastSeen: null,
            error: 'Internal server error',
        });
    }
}
