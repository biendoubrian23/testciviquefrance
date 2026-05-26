'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'tcf_cookie_consent_v1';

type ConsentPrefs = { analytics: boolean; ads: boolean; savedAt: number };

// Appelle la fonction gtag globale définie dans layout.tsx (Google Consent Mode v2).
// gtag() est une fonction déclarée dans un <script> du <head> → disponible sur window.
function updateConsentMode(analytics: boolean, ads: boolean) {
  if (typeof window === 'undefined') return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === 'function') {
    gtag('consent', 'update', {
      analytics_storage: analytics ? 'granted' : 'denied',
      ad_storage: ads ? 'granted' : 'denied',
      ad_user_data: ads ? 'granted' : 'denied',
      ad_personalization: ads ? 'granted' : 'denied',
    });
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  // RGPD : les cases non essentielles doivent être décochées par défaut
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [adsEnabled, setAdsEnabled] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CONSENT_KEY);
      if (!raw) {
        setVisible(true);
      } else {
        const prefs: ConsentPrefs = JSON.parse(raw);
        updateConsentMode(prefs.analytics, prefs.ads);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  // Permet de rouvrir le bandeau depuis n'importe où (ex. bouton "Gérer les cookies" du footer)
  useEffect(() => {
    const handleOpen = () => {
      setVisible(true);
      setShowDetails(false);
      setAnalyticsEnabled(false);
      setAdsEnabled(false);
    };
    window.addEventListener('tcf:open-cookie-banner', handleOpen);
    return () => window.removeEventListener('tcf:open-cookie-banner', handleOpen);
  }, []);

  const saveConsent = (analytics: boolean, ads: boolean) => {
    const prefs: ConsentPrefs = { analytics, ads, savedAt: Date.now() };
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));
    } catch {
      // storage plein — on continue sans persistence
    }
    updateConsentMode(analytics, ads);
    window.dispatchEvent(new CustomEvent('tcf:consent-updated', { detail: { analytics, ads } }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gestion des cookies"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-blue-600 shadow-2xl"
    >
      <div className="max-w-6xl mx-auto px-4 py-5">
        <div className="flex flex-col gap-4">

          <div>
            <p className="text-sm font-semibold text-gray-900 mb-1">
              Nous respectons votre vie privée
            </p>
            <p className="text-sm text-gray-600">
              Nous utilisons des cookies pour améliorer votre expérience, mesurer l&apos;audience du site
              et afficher des publicités pertinentes via Google AdSense. Vous pouvez accepter, refuser
              ou personnaliser vos choix à tout moment.{' '}
              <Link href="/politique-confidentialite" className="text-blue-600 underline hover:text-blue-800">
                Politique de confidentialité
              </Link>
            </p>
          </div>

          {showDetails && (
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-900">Cookies nécessaires</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Authentification, sécurité, préférences de navigation. Indispensables au fonctionnement.
                  </p>
                </div>
                <span className="shrink-0 text-xs text-green-700 font-semibold bg-green-100 px-2 py-0.5 rounded">
                  Toujours actifs
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-900">Cookies analytiques</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Mesure d&apos;audience anonymisée (Google Analytics, PostHog, Ahrefs).
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={e => setAnalyticsEnabled(e.target.checked)}
                    className="sr-only peer"
                    aria-label="Activer les cookies analytiques"
                  />
                  <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5" />
                </label>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-900">Cookies publicitaires</p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Publicités pertinentes via Google AdSense. Refuser affiche des publicités non personnalisées.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={adsEnabled}
                    onChange={e => setAdsEnabled(e.target.checked)}
                    className="sr-only peer"
                    aria-label="Activer les cookies publicitaires"
                  />
                  <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5" />
                </label>
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 items-center">
            <button
              type="button"
              onClick={() => saveConsent(true, true)}
              className="px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Tout accepter
            </button>
            <button
              type="button"
              onClick={() => saveConsent(false, false)}
              className="px-5 py-2 bg-white text-gray-800 text-sm font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Tout refuser
            </button>
            {showDetails ? (
              <button
                type="button"
                onClick={() => saveConsent(analyticsEnabled, adsEnabled)}
                className="px-5 py-2 bg-gray-700 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Enregistrer mes choix
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowDetails(true)}
                className="px-3 py-2 text-sm text-blue-600 underline hover:text-blue-800 focus:outline-none"
              >
                Personnaliser
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
