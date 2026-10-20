'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react';
import { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const CONSENT_KEY = 'tcf_cookie_consent_v1';

// Flag pour éviter double init
let posthogInitialized = false;

function hasAnalyticsConsent(): boolean {
    try {
        const raw = localStorage.getItem(CONSENT_KEY);
        if (!raw) return false;
        return JSON.parse(raw).analytics === true;
    } catch {
        return false;
    }
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

    // Tracking des connexions/inscriptions Google : le callback OAuth redirige avec ?ph=...
    // (l'événement ne peut pas être capturé côté serveur, on le fait ici puis on nettoie l'URL)
    useEffect(() => {
        if (!posthogInstance || !searchParams) return;
        const ph = searchParams.get('ph');
        if (!ph) return;
        if (ph === 'google_signup') {
            posthogInstance.capture('signup_completed', { method: 'google' });
        } else if (ph === 'google_login') {
            posthogInstance.capture('login_completed', { method: 'google' });
        }
        // Retirer le paramètre pour éviter un double comptage au rechargement
        if (typeof window !== 'undefined') {
            const url = new URL(window.location.href);
            url.searchParams.delete('ph');
            window.history.replaceState({}, '', url.pathname + url.search + url.hash);
        }
    }, [searchParams, posthogInstance]);

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
                // Re-vérifier le consentement au moment de l'init (l'utilisateur peut avoir répondu entre-temps)
                const analyticsConsent = hasAnalyticsConsent();
                const commun = {
                    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
                    person_profiles: 'identified_only' as const,
                    capture_pageview: false,
                    // La sortie de page porte la profondeur de défilement : c'est elle
                    // qui dit au robot éditorial où les lecteurs d'un article s'arrêtent.
                    capture_pageleave: true,
                    autocapture: true,
                    loaded: () => {
                        setReady(true);
                    },
                };
                posthog.init(
                    process.env.NEXT_PUBLIC_POSTHOG_KEY!,
                    analyticsConsent
                        ? {
                              // Consentement aux cookies analytiques : la mesure complète d'avant.
                              ...commun,
                              disable_session_recording: false,
                              session_recording: {
                                  maskAllInputs: false,
                                  maskInputOptions: {
                                      password: true,
                                  },
                              },
                              enable_heatmaps: true,
                          }
                        : {
                              // Sans consentement (refus, ou pas encore de réponse) : mesure
                              // d'audience SANS COOKIE (20/10/2026). Rien n'est écrit dans le
                              // navigateur, pas de replay, pas de carte de chaleur, pas
                              // d'identité. Le visiteur est compté par une empreinte calculée
                              // par PostHog, dont le sel change chaque jour (lib/mesure.ts).
                              // Le projet PostHog doit garder le « Cookieless server hash
                              // mode » actif, sans quoi ces événements sont jetés.
                              ...commun,
                              cookieless_mode: 'always' as const,
                              persistence: 'memory' as const,
                              disable_session_recording: true,
                              enable_heatmaps: false,
                          },
                );
                posthogInitialized = true;
            };
            // Différer l'init pour ne pas bloquer le thread principal (LCP/TBT)
            if ('requestIdleCallback' in window) {
                requestIdleCallback(initPostHog, { timeout: 3000 });
            } else {
                setTimeout(initPostHog, 2000);
            }
        }

        // Quand le consentement change (CookieBanner) : PostHog ne change pas de mode
        // en cours de route. Un « oui » passe à la mesure complète au chargement
        // suivant ; un « non » garde la mesure sans cookie, qui n'écrit rien chez le
        // visiteur. Si PostHog n'est pas encore initialisé, l'init lira le choix.
        const handleConsentUpdate = (e: Event) => {
            if (!posthogInitialized) return;
            const { analytics } = (e as CustomEvent<{ analytics: boolean; ads: boolean }>).detail;
            if (!analytics) posthog.stopSessionRecording();
        };

        window.addEventListener('tcf:consent-updated', handleConsentUpdate);
        return () => window.removeEventListener('tcf:consent-updated', handleConsentUpdate);
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
