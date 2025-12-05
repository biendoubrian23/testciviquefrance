'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleCard from '@/components/blog/ArticleCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { getArticlesByCategory } from '@/lib/data/articles';

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('tous');

  const sortedArticles = getArticlesByCategory(selectedCategory);

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Blog & Ressources
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Découvrez nos articles sur l&apos;examen civique, les thématiques officielles,
              et nos conseils pour réussir votre test de naturalisation.
            </p>
            
            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5+</div>
                <div className="text-sm text-white/70">Articles</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5</div>
                <div className="text-sm text-white/70">Thématiques</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-white/70">Gratuit</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 pb-20 mt-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar */}
              <div className="lg:w-72 flex-shrink-0">
                <BlogSidebar
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />
              </div>

              {/* Articles Content */}
              <div className="flex-1">
                {/* Tous les articles */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Tous les articles{' '}
                      <span className="text-gray-400 font-normal">
                        ({sortedArticles.length})
                      </span>
                    </h2>
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
