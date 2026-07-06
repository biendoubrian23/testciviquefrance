'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GraduationCap, X } from 'lucide-react';
import { usePostHogEvent } from '@/components/analytics/PostHogProvider';

const DISMISS_KEY = 'tcf_article_sticky_dismissed';

/**
 * Barre CTA collante en bas des articles.
 *
 * Objectif : convertir le trafic SEO (surtout mobile) en inscriptions gratuites.
 * - Apparaît après un léger scroll (lecture engagée), pas immédiatement.
 * - Dismissible ; l'état est mémorisé pour la session (ne réapparaît pas en boucle).
 * - Track le clic (`article_sticky_cta_clicked`) pour mesurer l'apport réel.
 */
export default function ArticleStickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true); // caché par défaut (évite le flash)
  const { capture } = usePostHogEvent();

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY) === '1') return;
    setDismissed(false);

    const onScroll = () => {
      // Afficher après ~700px de lecture
      setVisible(window.scrollY > 700);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, '1');
    } catch {
      /* ignore */
    }
    capture('article_sticky_cta_dismissed');
  };

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 print:hidden">
      <div className="mx-auto max-w-4xl px-3 pb-3">
        <div className="flex items-center gap-3 rounded-xl bg-primary-700 text-white shadow-2xl ring-1 ring-primary-900/20 px-4 py-3">
          <GraduationCap className="hidden sm:block w-6 h-6 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold leading-tight truncate">
              Test blanc gratuit — sans carte bancaire
            </p>
            <p className="hidden sm:block text-xs text-blue-100 leading-tight">
              800+ questions officielles, examen en conditions réelles.
            </p>
          </div>
          <Link
            href="/signup"
            onClick={() => capture('article_sticky_cta_clicked')}
            className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-white text-primary-700 font-bold text-sm px-4 py-2.5 hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            Commencer
          </Link>
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Fermer"
            className="flex-shrink-0 p-1 text-blue-100 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
