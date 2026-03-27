'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react';
import { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Flag pour éviter double init
let posthogInitialized = false;

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
    const [ready, setReady] = useState(posthogInitialized);

    useEffect(() => {
        if (!posthogInitialized && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
            const initPostHog = () => {
                posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
                    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
                    person_profiles: 'identified_only',
                    capture_pageview: false,
                    capture_pageleave: true,
                    disable_session_recording: false,
                    session_recording: {
                        maskAllInputs: false,
                        maskInputOptions: {
                            password: true,
                        },
                    },
                    autocapture: true,
                    enable_heatmaps: true,
                    loaded: () => {
                        setReady(true);
                    },
                });
                posthogInitialized = true;
            };
            // Différer l'init pour ne pas bloquer le thread principal (LCP/TBT)
            if ('requestIdleCallback' in window) {
                requestIdleCallback(initPostHog, { timeout: 3000 });
            } else {
                setTimeout(initPostHog, 2000);
            }
        }
    }, []);

    return (
        <PHProvider client={posthog}>
            {ready && <SuspendedPostHogPageView />}
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
