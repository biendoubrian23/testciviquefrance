const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  sw: 'sw.js',
  fallbacks: {
    document: '/offline',
  },
  workboxOptions: {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 365 * 24 * 60 * 60,
          },
        },
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 64,
            maxAgeSeconds: 30 * 24 * 60 * 60,
          },
        },
      },
      // Supabase REST : NetworkOnly (pas de cache pour données authentifiées)
      {
        urlPattern: /^https:\/\/.*\.supabase\.co\/rest\/.*/i,
        handler: 'NetworkOnly',
      },
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true, // Activer la compression gzip

  // Optimisation des images
  images: {
    // In dev behind corporate/self-signed TLS, let the browser fetch remote images directly.
    unoptimized: process.env.NODE_ENV === 'development',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.testciviquefrance.fr',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 an
    contentDispositionType: 'attachment',
  },

  // Redirections SEO
  async redirects() {
    return [
      {
        source: '/prix',
        destination: '/articles/prix-test-civique-2026-cout-tarif-titre-sejour-prefecture',
        permanent: true,
      },
      {
        source: '/tarifs-test-civique',
        destination: '/articles/prix-test-civique-2026-cout-tarif-titre-sejour-prefecture',
        permanent: true,
      },
      {
        source: '/prix-test-civique',
        destination: '/articles/prix-test-civique-2026-cout-tarif-titre-sejour-prefecture',
        permanent: true,
      },
      // Redirects 2026 → 2025 pour articles déjà indexés par Google
      {
        source: '/articles/naturalisation-francaise-conditions-demarches-2026',
        destination: '/articles/naturalisation-francaise-conditions-demarches-2025',
        permanent: true,
      },
      {
        source: '/articles/carte-sejour-pluriannuelle-guide-complet-2026',
        destination: '/articles/carte-sejour-pluriannuelle-guide-complet-2025',
        permanent: true,
      },
      {
        source: '/articles/carte-resident-10-ans-obtention-2026',
        destination: '/articles/carte-resident-10-ans-obtention-2025',
        permanent: true,
      },
      {
        source: '/articles/titre-sejour-etudiant-france-guide-2026',
        destination: '/articles/titre-sejour-etudiant-france-guide-2025',
        permanent: true,
      },
      {
        source: '/articles/regroupement-familial-france-procedure-2026',
        destination: '/articles/regroupement-familial-france-procedure-2025',
        permanent: true,
      },
      {
        source: '/articles/questions-frequentes-test-civique-2026',
        destination: '/articles/questions-frequentes-test-civique-2025',
        permanent: true,
      },
      // Redirects anti-thin-content : slugs doublons vers articles riches (AdSense compliance)
      {
        source: '/articles/histoire-france-50-dates-importantes',
        destination: '/articles/histoire-france-dates-cles-test-civique',
        permanent: true,
      },
      {
        source: '/articles/laicite-france-definition-principes-loi-1905',
        destination: '/articles/laicite-france-principe-loi-1905',
        permanent: true,
      },
    ];
  },

  // Headers pour cache et sécurité
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com https://vercel.live https://www.youtube.com https://s.ytimg.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://pagead2.googlesyndication.com https://adservice.google.com https://adservice.google.fr https://fundingchoicesmessages.google.com https://analytics.ahrefs.com https://eu.i.posthog.com https://eu-assets.i.posthog.com https://n6wxm.com https://nap5k.com https://5gvci.com https://quge5.com https://al5sm.com https://my.rtmark.net",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://vercel.live",
              "font-src 'self' https://fonts.gstatic.com https://vercel.live",
              "img-src 'self' data: https: blob: https://www.googletagmanager.com https://www.google-analytics.com https://img.youtube.com https://i.ytimg.com https://www.google.com https://www.google.fr https://googleads.g.doubleclick.net https://pagead2.googlesyndication.com https://tpc.googlesyndication.com https://www.gstatic.com https://adservice.google.com https://adservice.google.fr https://vercel.live",
              "connect-src 'self' https: wss://*.supabase.co wss://ws-us3.pusher.com",
              "frame-src 'self' https://js.stripe.com https://hooks.stripe.com https://www.googletagmanager.com https://www.youtube.com https://www.youtube-nocookie.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://pagead2.googlesyndication.com https://tpc.googlesyndication.com https://vercel.live https://fundingchoicesmessages.google.com https://n6wxm.com https://nap5k.com https://5gvci.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests"
            ].join('; ')
          }
        ]
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        // Cache pour les fonts auto-hébergées par next/font
        source: '/_next/static/media/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        // Cache pour les fichiers WebP/images locales publiques
        source: '/:path*.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        // Cache pour le manifest PWA
        source: '/manifest.json',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400'
          }
        ]
      },
      {
        // Cache pour les fichiers PNG (logo, favicons, og-image)
        source: '/:path*.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        // Cache pour les fichiers JS statiques (SW, workbox)
        source: '/:path(sw|workbox-*).js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000'
          }
        ]
      },
      {
        // ads.txt — doit être accessible sans cache agressif pour Google AdSense
        source: '/ads.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain; charset=utf-8'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400'
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          }
        ]
      }
    ]
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  eslint: {
    // Ignorer les erreurs ESLint pendant le build (apostrophes non échappées)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignorer les erreurs TypeScript pendant le build si nécessaire
    ignoreBuildErrors: false,
  },

  // Optimisations de performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@heroicons/react', 'posthog-js', '@supabase/ssr', '@supabase/supabase-js'],
  },
};

module.exports = withPWA(nextConfig);
