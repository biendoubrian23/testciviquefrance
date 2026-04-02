'use client';

import { useEffect } from 'react';

interface AdSenseBlockProps {
  slot: string;
  format?: 'auto' | 'autorelaxed';
  fullWidthResponsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdSenseBlock({
  slot,
  format = 'auto',
  fullWidthResponsive = true,
  className = '',
}: AdSenseBlockProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense non chargé (bloqueur pub, SSR, etc.)
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3632266086082682"
        data-ad-slot={slot}
        data-ad-format={format}
        {...(fullWidthResponsive && format !== 'autorelaxed'
          ? { 'data-full-width-responsive': 'true' }
          : {})}
      />
    </div>
  );
}
