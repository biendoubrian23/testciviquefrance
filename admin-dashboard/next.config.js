/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimisations de performance
  poweredByHeader: false,
  compress: true,
  // Desactiver les requetes vers vite/dev-sw (proviennent d'un autre projet)
  async rewrites() {
    return [
      // Bloquer les requetes Vite qui viennent d'ailleurs
      {
        source: '/@vite/:path*',
        destination: '/api/not-found',
      },
      {
        source: '/dev-sw.js',
        destination: '/api/not-found',
      },
    ];
  },
};

module.exports = nextConfig;
