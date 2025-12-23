'use client';

import { ArticleFullContent } from '@/lib/data/seo-content';
import { Article } from '@/lib/data/articles';
import TableOfContents from '@/components/seo/TableOfContents';
import YouTubeEmbed, { YouTubeGrid } from '@/components/seo/YouTubeEmbed';
import SourcesExternes from '@/components/seo/SourcesExternes';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle, 
  Info, 
  Calendar, 
  Clock, 
  User,
  Share2,
  Bookmark,
  ChevronRight
} from 'lucide-react';

interface SEOArticleRendererProps {
  content: ArticleFullContent;
  article: Article;
}

/**
 * Composant de rendu dynamique pour les articles SEO
 * Design aligné avec ArticleContent pour une cohérence visuelle
 */
export default function SEOArticleRenderer({ content, article }: SEOArticleRendererProps) {
  // Fonction pour parser le markdown basique
  const parseMarkdown = (text: string): string => {
    return text
      // Gras
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>')
      // Italique
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Emojis étoiles pour les dates importantes
      .replace(/⭐/g, '<span class="text-yellow-500">⭐</span>')
      // Flèches pour les réponses
      .replace(/→/g, '<span class="text-primary-600 font-medium">→</span>')
      // Retours à la ligne
      .replace(/\n/g, '<br/>');
  };

  // Image de fond par défaut ou de l'article
  const getHeaderImage = () => {
    if (article?.image && article.image.includes('unsplash')) {
      return `url('${article.image}')`;
    }
    return "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070')";
  };

  return (
    <article className="pb-20">
      {/* Hero avec image de fond - identique à ArticleContent */}
      <header className="relative text-white py-20 px-4">
        {/* Image de fond dynamique */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: getHeaderImage(),
          }}
        />
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-300 mb-8 animate-fade-in-up">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/articles" className="hover:text-white transition-colors">
              Articles
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{article.category}</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight animate-fade-in-up delay-100">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-gray-200 animate-fade-in-up delay-200">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {article.date}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-5 h-5" />
              {article.author}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {article.readTime} min de lecture
            </span>
          </div>
        </div>
      </header>

      {/* Contenu principal centré */}
      <div className="max-w-4xl mx-auto px-4">
        {/* Actions */}
        <div className="flex items-center justify-between py-6 border-b border-gray-200 -mt-4 bg-white relative z-10">
          <Link
            href="/articles"
            className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux articles
          </Link>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 text-gray-600 transition-colors rounded-lg">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 text-gray-600 transition-colors rounded-lg">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Content */}
        <div className="mt-10">
          {/* Table des matières - style encadré */}
          <TableOfContents
            contentSelector="article"
            levels={[2, 3]}
            title="Dans cet article"
            showNumbers={true}
          />

          {/* Introduction - Style éditorial avec encadré */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-500 inline-block">
              Introduction
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-l-4 border-primary-500 rounded-r-lg">
              <p 
                className="text-lg text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: parseMarkdown(content.introduction) }}
              />
            </div>
          </section>

          {/* Sections de contenu */}
          {content.sections.map((section, index) => (
            <section key={section.id} className="mb-14">
              <h2 
                id={section.id}
                className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-500 scroll-mt-24 flex items-center gap-3"
              >
                <span className="flex items-center justify-center w-10 h-10 bg-primary-600 text-white text-lg font-bold flex-shrink-0">
                  {index + 1}
                </span>
                <span>{section.title}</span>
              </h2>
              
              {/* Contenu de la section avec parsing intelligent */}
              <div className="space-y-4">
                {section.content.split('\n\n').map((paragraph, pIdx) => {
                  // Vérifier si c'est une liste à puces
                  if (paragraph.includes('• ') || paragraph.includes('- ')) {
                    const items = paragraph.split('\n').filter(line => line.trim().startsWith('• ') || line.trim().startsWith('- '));
                    if (items.length > 0) {
                      return (
                        <ul key={pIdx} className="space-y-3">
                          {items.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-4 text-gray-700">
                              <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                              <span 
                                className="text-base"
                                dangerouslySetInnerHTML={{ 
                                  __html: parseMarkdown(item.replace(/^[•-]\s*/, '')) 
                                }}
                              />
                            </li>
                          ))}
                        </ul>
                      );
                    }
                  }
                  
                  // Vérifier si c'est une liste numérotée
                  if (/^\d+\.\s/.test(paragraph.trim())) {
                    const items = paragraph.split('\n').filter(line => /^\d+\.\s/.test(line.trim()));
                    if (items.length > 0) {
                      return (
                        <ol key={pIdx} className="space-y-4">
                          {items.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-4 p-4 border border-gray-200 hover:border-primary-300 hover:bg-primary-50/30 transition-all">
                              <span className="w-8 h-8 bg-primary-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                                {iIdx + 1}
                              </span>
                              <span 
                                className="text-gray-700"
                                dangerouslySetInnerHTML={{ 
                                  __html: parseMarkdown(item.replace(/^\d+\.\s*/, '')) 
                                }}
                              />
                            </li>
                          ))}
                        </ol>
                      );
                    }
                  }
                  
                  // Paragraphe normal
                  return (
                    <p 
                      key={pIdx}
                      className="text-gray-700 leading-relaxed text-lg"
                      dangerouslySetInnerHTML={{ __html: parseMarkdown(paragraph) }}
                    />
                  );
                })}
              </div>
            </section>
          ))}

          {/* Conclusion - Mise en valeur forte */}
          <section className="mb-14">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
                <CheckCircle className="w-6 h-6" />
                À retenir
              </h2>
              <p 
                className="text-primary-100 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: parseMarkdown(content.conclusion).replace(/text-gray-900/g, 'text-white') }}
              />
            </div>
          </section>

          {/* FAQ si disponible - Style accordéon amélioré */}
          {content.faq && content.faq.length > 0 && (
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-500 flex items-center gap-2">
                <Info className="w-6 h-6 text-primary-600" />
                Questions fréquentes
              </h2>
              <div className="space-y-4">
                {content.faq.map((item, idx) => (
                  <details 
                    key={idx} 
                    className="bg-white border border-gray-200 overflow-hidden group"
                  >
                    <summary className="p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-between">
                      <span className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-gray-100 text-primary-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                          Q{idx + 1}
                        </span>
                        {item.question}
                      </span>
                      <ArrowRight className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-90 flex-shrink-0" />
                    </summary>
                    <div className="p-5 pt-0 text-gray-700 border-t border-gray-100 bg-gray-50">
                      <div className="pl-11">
                        {item.answer}
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Vidéos YouTube si disponibles */}
          {content.videos && content.videos.length > 0 && (
            <YouTubeGrid 
              videos={content.videos} 
              title="Vidéos pour approfondir"
            />
          )}

          {/* Sources externes si disponibles */}
          {content.sources && content.sources.length > 0 && (
            <SourcesExternes 
              sources={content.sources}
              title="Sources officielles et références"
            />
          )}

          {/* CTA vers la préparation */}
          <section className="mb-10 p-8 bg-gray-100 border-t-4 border-gray-900 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Prêt à préparer le test civique ?
            </h3>
            <p className="text-gray-600 mb-6">
              Accédez gratuitement à tous nos cours et testez vos connaissances avec nos QCM.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/cours"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors text-lg"
              >
                Voir les cours gratuits
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors text-lg"
              >
                Créer un compte
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
