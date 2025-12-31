'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react';
import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Initialiser PostHog une seule fois
if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: false, // On capture manuellement pour avoir le pathname
        capture_pageleave: true,
        // Session recordings
        disable_session_recording: false,
        session_recording: {
            maskAllInputs: false,
            maskInputOptions: {
                password: true,
            },
        },
        // Heatmaps et autocapture
        autocapture: true,
        enable_heatmaps: true,
    });
}

// Composant pour tracker les changements de page
function PostHogPageView() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const posthogInstance = usePostHog();

    useEffect(() => {
        if (pathname && posthogInstance) {
            let url = window.origin + pathname;
            if (searchParams && searchParams.toString()) {
                url = url + `?${searchParams.toString()}`;
            }
            posthogInstance.capture('$pageview', {
                $current_url: url,
            });
        }
    }, [pathname, searchParams, posthogInstance]);

    return null;
}

// Wrapper avec Suspense pour useSearchParams
function SuspendedPostHogPageView() {
    return (
        <Suspense fallback={null}>
            <PostHogPageView />
        </Suspense>
    );
}

interface PostHogProviderProps {
    children: React.ReactNode;
}

export function PostHogProvider({ children }: PostHogProviderProps) {
    return (
        <PHProvider client={posthog}>
            <SuspendedPostHogPageView />
            {children}
        </PHProvider>
    );
}

// Hook pour identifier l'utilisateur connecté
export function usePostHogIdentify(userId: string | null, userEmail?: string | null, userName?: string | null) {
    const posthogInstance = usePostHog();

    useEffect(() => {
        if (posthogInstance && userId) {
            posthogInstance.identify(userId, {
                email: userEmail,
                name: userName,
            });
        }
    }, [posthogInstance, userId, userEmail, userName]);
}

// Hook pour tracker des events custom
export function usePostHogEvent() {
    const posthogInstance = usePostHog();

    return {
        capture: (eventName: string, properties?: Record<string, unknown>) => {
            if (posthogInstance) {
                posthogInstance.capture(eventName, properties);
            }
        },
    };
}

// Export PostHog pour usage direct
export { posthog };
