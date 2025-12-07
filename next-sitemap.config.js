/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.testciviquefrance.fr',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/dashboard/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/dashboard/', '/admin/'],
      },
    ],
  },
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/articles')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/tests')) {
      priority = 0.8;
      changefreq = 'daily';
    } else if (path === '/tarifs') {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path === '/login' || path === '/signup') {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
