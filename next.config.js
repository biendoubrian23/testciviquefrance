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
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com https://www.youtube.com https://s.ytimg.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://eu.i.posthog.com https://eu-assets.i.posthog.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob: https://www.googletagmanager.com https://www.google-analytics.com https://img.youtube.com https://i.ytimg.com https://www.google.com https://www.google.fr https://googleads.g.doubleclick.net",
              "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://js.stripe.com https://api.stripe.com https://www.google-analytics.com https://www.googletagmanager.com https://api.web3forms.com https://www.google.com https://www.youtube.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://eu.i.posthog.com https://eu.posthog.com",
              "frame-src 'self' https://js.stripe.com https://hooks.stripe.com https://www.googletagmanager.com https://www.youtube.com https://www.youtube-nocookie.com https://googleads.g.doubleclick.net https://www.googleadservices.com",
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
    optimizePackageImports: ['lucide-react', '@heroicons/react'],
  },
};

module.exports = withPWA(nextConfig);
