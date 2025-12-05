'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Eye, ArrowRight } from 'lucide-react';
import { Article } from '@/lib/data/articles';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
}

export default function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  const categoryColors: Record<string, string> = {
    'cadre-legal': 'bg-blue-500',
    'thematiques': 'bg-green-500',
    'preparation': 'bg-purple-500',
    'conseils': 'bg-orange-500',
  };

  const categoryBgColors: Record<string, string> = {
    'cadre-legal': 'bg-blue-50 text-blue-700',
    'thematiques': 'bg-green-50 text-green-700',
    'preparation': 'bg-purple-50 text-purple-700',
    'conseils': 'bg-orange-50 text-orange-700',
  };

  if (variant === 'featured') {
    return (
      <Link href={`/articles/${article.slug}`} className="group block">
        <div className="relative h-64 overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
          {/* Image placeholder avec gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800">
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          {/* Contenu */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <span className={`self-start px-3 py-1 text-xs font-semibold text-white ${categoryColors[article.categorySlug] || 'bg-primary-500'}`}>
              {article.category}
            </span>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:underline">
                {article.title}
              </h3>
              <p className="text-white/80 text-sm line-clamp-2">
                {article.excerpt}
              </p>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link href={`/articles/${article.slug}`} className="group flex gap-4 p-3 hover:bg-gray-50 transition-colors">
        <div className="w-20 h-20 flex-shrink-0 overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200">
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-primary-600 transition-colors">
            {article.title}
          </h4>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {article.views}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <article className="bg-white shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-48 bg-gradient-to-br from-primary-100 via-primary-50 to-blue-100 overflow-hidden">
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 text-xs font-semibold ${categoryBgColors[article.categorySlug] || 'bg-primary-50 text-primary-700'}`}>
              {article.category}
            </span>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-5">
          <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {article.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4 text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime} min
              </span>
            </div>
            <span className="text-primary-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Lire
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
