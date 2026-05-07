'use client';

import Link from 'next/link';
import { allArticles } from '@/lib/data/articles';
import ArticleViews from '@/components/blog/ArticleViews';

export default function RecentArticles() {
  // 6 articles récents + variés (catégories différentes)
  const recentArticles = [...allArticles]
    .sort((a, b) => {
      const dateA = a.date.split('/').reverse().join('');
      const dateB = b.date.split('/').reverse().join('');
      return dateB.localeCompare(dateA);
    })
    .slice(0, 6);

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Nos derniers articles
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Guides pratiques et actualités pour vos démarches d&apos;immigration et de naturalisation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
            >
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary-50 text-primary-700 mb-3">
                {article.category}
              </span>
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="mt-3 flex items-center text-xs text-gray-400 gap-3">
                <ArticleViews
                  slug={article.slug}
                  fallbackViews={article.views}
                  iconClassName="w-3.5 h-3.5"
                />
                <span>·</span>
                <span>{article.date}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/articles"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Voir tous nos articles
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
