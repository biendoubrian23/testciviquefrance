'use client';

import { useEffect, useMemo, useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleCard from '@/components/blog/ArticleCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { allArticles } from '@/lib/data/articles';
import { createClient } from '@/lib/supabase/client';

type SortMode = 'recent' | 'popular';

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [sortMode, setSortMode] = useState<SortMode>('recent');
  const [viewCounts, setViewCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;

    async function loadViewCounts() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('article_views')
        .select('slug, views');

      if (cancelled || error || !data) return;

      const counts: Record<string, number> = {};
      data.forEach((row: { slug: string; views: number | string }) => {
        counts[row.slug] = Number(row.views) || 0;
      });
      setViewCounts(counts);
    }

    loadViewCounts();

    return () => {
      cancelled = true;
    };
  }, []);

  // Filtrage réactif des articles basé sur la catégorie sélectionnée
  const sortedArticles = useMemo(() => {
    const filteredArticles = selectedCategory === 'tous'
      ? allArticles
      : allArticles.filter((article) => article.categorySlug === selectedCategory);

    return [...filteredArticles].sort((a, b) => {
      if (sortMode === 'popular') {
        return (viewCounts[b.slug] ?? b.views) - (viewCounts[a.slug] ?? a.views);
      }

      const dateA = new Date(a.date.split('/').reverse().join('-'));
      const dateB = new Date(b.date.split('/').reverse().join('-'));
      return dateB.getTime() - dateA.getTime();
    });
  }, [selectedCategory, sortMode, viewCounts]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-primary-50/30 to-white">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="relative max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up">
              Actualités & Démarches
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
              Restez informé des dernières actualités sur la naturalisation française,
              le renouvellement des titres de séjour et les évolutions des démarches administratives.
            </p>
            
            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mt-8 animate-fade-in-up delay-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2026</div>
                <div className="text-sm text-white/70">Actualités</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">Décret</div>
                <div className="text-sm text-white/70">2025-647</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">Mise à jour</div>
                <div className="text-sm text-white/70">Permanente</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 pb-20 mt-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <div className="lg:w-72 flex-shrink-0 animate-fade-in-left delay-100">
                <BlogSidebar
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
              </div>

              {/* Articles Content */}
              <div className="flex-1 animate-fade-in-right delay-200">
                {/* Tous les articles */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Tous les articles{' '}
                      <span className="text-gray-400 font-normal">
                        ({sortedArticles.length})
                      </span>
                    </h2>
                    <label className="inline-flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-medium">Trier</span>
                      <select
                        value={sortMode}
                        onChange={(event) => setSortMode(event.target.value as SortMode)}
                        className="h-10 border border-gray-200 bg-white px-3 text-sm font-medium text-gray-800 shadow-sm outline-none transition-colors hover:border-primary-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                      >
                        <option value="recent">Récent</option>
                        <option value="popular">Populaire</option>
                      </select>
                    </label>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {sortedArticles.map((article) => (
                      <ArticleCard key={article.id} article={article} />
                    ))}
                  </div>

                  {sortedArticles.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-gray-500">
                        Aucun article trouvé dans cette catégorie.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
