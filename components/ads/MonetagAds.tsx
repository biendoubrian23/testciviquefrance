'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const MONETAG_ENABLED = process.env.NEXT_PUBLIC_MONETAG_ENABLED !== 'false';

export default function MonetagAds() {
  const pathname = usePathname();
  const [pushDelayElapsed, setPushDelayElapsed] = useState(false);

  const isArticleDetail =
    pathname?.startsWith('/articles/') && pathname !== '/articles';

  useEffect(() => {
    if (!isArticleDetail) {
      setPushDelayElapsed(false);
      return;
    }
    const t = setTimeout(() => setPushDelayElapsed(true), 30_000);
    return () => clearTimeout(t);
  }, [isArticleDetail, pathname]);

  if (!MONETAG_ENABLED) return null;

  return (
    <>
      <Script
        id="monetag-vignette"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function(s){s.dataset.zone='10973465',s.src='https://n6wxm.com/vignette.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`,
        }}
      />
      <Script
        id="monetag-inpage-push"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function(s){s.dataset.zone='10973464',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`,
        }}
      />
      {isArticleDetail && pushDelayElapsed && (
        <Script
          id="monetag-push-notif"
          src="https://5gvci.com/act/files/tag.min.js?z=10973462"
          strategy="lazyOnload"
          data-cfasync="false"
          async
        />
      )}
    </>
  );
}
