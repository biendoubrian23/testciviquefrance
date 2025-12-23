'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Article } from '@/lib/data/articles';

interface RelatedArticlesProps {
  articles: Article[];
  currentSlug?: string;
  title?: string;
  maxArticles?: number;
}

/**
 * Composant Articles Liés pour améliorer le maillage interne
 * Affiche des articles connexes en fin d'article
 */
export default function RelatedArticles({
  articles,
  currentSlug,
  title = 'Articles similaires',
  maxArticles = 3,
}: RelatedArticlesProps) {
  // Filtrer l'article courant et limiter le nombre
  const filteredArticles = articles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, maxArticles);

  if (filteredArticles.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-gray-200" aria-label="Articles similaires">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
        <span className="w-1 h-8 bg-primary-600 rounded-full"></span>
        {title}
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-primary-200 transition-all duration-300"
          >
            {/* Image */}
            <Link href={`/articles/${article.slug}`} className="block relative aspect-video overflow-hidden">
              <Image
                src={article.image || '/images/default-article.jpg'}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute bottom-3 left-3 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded">
                {article.category}
              </span>
            </Link>

            {/* Content */}
            <div className="p-5">
              <Link href={`/articles/${article.slug}`}>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-3">
                  {article.title}
                </h3>
              </Link>

              <p className="text-sm text-gray-600 line-clamp-2 mb-4">{article.excerpt}</p>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime} min
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Link
                href={`/articles/${article.slug}`}
                className="inline-flex items-center gap-1 text-primary-600 font-medium text-sm mt-4 group-hover:gap-2 transition-all"
              >
                Lire l'article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* CTA vers tous les articles */}
      <div className="text-center mt-8">
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          Voir tous nos articles
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
