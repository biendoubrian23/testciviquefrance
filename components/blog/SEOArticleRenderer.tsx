'use client';

import { ArticleFullContent } from '@/lib/data/seo-content';
import { Article } from '@/lib/data/articles';
import { getInternalLinks } from '@/lib/data/internal-links';
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
  User,
  Share2,
  Bookmark,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import AdSenseBlock from '@/components/ui/AdSenseBlock';
import ArticleViews from './ArticleViews';
import TestCiviqueCTA from './TestCiviqueCTA';

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
      // Liens markdown [texte](url)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary-600 underline hover:text-primary-800" target="_blank" rel="noopener noreferrer">$1</a>')
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

  // Fonction utilitaire : détecter si une ligne est une ligne de tableau markdown
  const isTableLine = (line: string): boolean => {
    const trimmed = line.trim();
    return trimmed.startsWith('|') && trimmed.endsWith('|') && trimmed.length > 2;
  };

  // Fonction utilitaire : détecter si une ligne est un séparateur de tableau
  const isTableSeparator = (line: string): boolean => {
    return /^\|[\s\-:|]+\|$/.test(line.trim());
  };

  // Parser un bloc de contenu en éléments typés (paragraphe, liste, tableau, etc.)
  const parseContentBlocks = (content: string) => {
    const lines = content.split('\n');
    const blocks: Array<{ type: 'paragraph' | 'table' | 'bullets' | 'numbered' | 'blockquote' | 'heading'; content: string; lines?: string[]; level?: number }> = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];
      const trimmed = line.trim();

      // Ligne vide → skip
      if (trimmed === '') {
        i++;
        continue;
      }

      // Détection d'un tableau : au moins header + separator
      if (isTableLine(trimmed) && i + 1 < lines.length && isTableSeparator(lines[i + 1]?.trim() || '')) {
        const tableRows: string[] = [];
        while (i < lines.length && isTableLine(lines[i]?.trim() || '')) {
          tableRows.push(lines[i]);
          i++;
        }
        blocks.push({ type: 'table', content: '', lines: tableRows });
        continue;
      }

      // Détection d'une citation (blockquote >)
      if (trimmed.startsWith('> ')) {
        const quoteLines: string[] = [];
        while (i < lines.length && lines[i]?.trim().startsWith('> ')) {
          quoteLines.push(lines[i].trim().replace(/^>\s*/, ''));
          i++;
        }
        blocks.push({ type: 'blockquote', content: quoteLines.join('\n') });
        continue;
      }

      // Détection d'une liste à puces
      if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
        const items: string[] = [];
        while (i < lines.length && (lines[i]?.trim().startsWith('- ') || lines[i]?.trim().startsWith('• '))) {
          items.push(lines[i].trim().replace(/^[•-]\s*/, ''));
          i++;
        }
        blocks.push({ type: 'bullets', content: '', lines: items });
        continue;
      }

      // Détection d'une liste numérotée
      if (/^\d+\.\s/.test(trimmed)) {
        const items: string[] = [];
        while (i < lines.length && /^\d+\.\s/.test(lines[i]?.trim() || '')) {
          items.push(lines[i].trim().replace(/^\d+\.\s*/, ''));
          i++;
        }
        blocks.push({ type: 'numbered', content: '', lines: items });
        continue;
      }

      // Détection des titres markdown (###, ##, #)
      if (/^#{1,6}\s/.test(trimmed)) {
        const level = trimmed.match(/^(#+)\s/)?.[1].length || 3;
        const headingText = trimmed.replace(/^#+\s*/, '');
        blocks.push({ type: 'heading', content: headingText, level });
        i++;
        continue;
      }

      // Sinon c'est un paragraphe de texte (regrouper les lignes consécutives non-vides)
      const paraLines: string[] = [];
      while (
        i < lines.length &&
        lines[i]?.trim() !== '' &&
        !isTableLine(lines[i]?.trim() || '') &&
        !/^#{1,6}\s/.test(lines[i]?.trim() || '') &&
        !lines[i]?.trim().startsWith('- ') &&
        !lines[i]?.trim().startsWith('• ') &&
        !lines[i]?.trim().startsWith('> ') &&
        !/^\d+\.\s/.test(lines[i]?.trim() || '')
      ) {
        paraLines.push(lines[i]);
        i++;
      }
      if (paraLines.length > 0) {
        blocks.push({ type: 'paragraph', content: paraLines.join('\n') });
      }
    }

    return blocks;
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
            <ArticleViews
              slug={article.slug}
              fallbackViews={article.views}
              iconClassName="w-5 h-5"
              label="long"
              incrementOnMount
            />
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

          {/* AdSense - après l'introduction */}
          <AdSenseBlock slot="4450490909" format="auto" className="my-8" />

          {/* Sections de contenu */}
          {content.sections.map((section, index) => {
            // CTA inline inséré juste après la section ~ au milieu de l'article
            // (ne s'affiche que si l'article a au moins 4 sections, pour ne pas casser les courts).
            const showInlineCTA =
              content.sections.length >= 4 &&
              index === Math.floor(content.sections.length / 2) - 1;
            return (
            <div key={section.id}>
            <section className="mb-14">
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
                {parseContentBlocks(section.content).map((block, bIdx) => {
                  // Rendu d'un tableau
                  if (block.type === 'table' && block.lines) {
                    const rows = block.lines.filter(l => !isTableSeparator(l));
                    const headerCells = rows[0]?.split('|').filter(c => c.trim() !== '') || [];
                    const bodyRows = rows.slice(1);
                    
                    return (
                      <div key={bIdx} className="overflow-x-auto my-4">
                        <table className="w-full border-collapse border border-gray-200 text-sm">
                          <thead>
                            <tr className="bg-primary-50">
                              {headerCells.map((cell, cIdx) => (
                                <th 
                                  key={cIdx} 
                                  className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900"
                                  dangerouslySetInnerHTML={{ __html: parseMarkdown(cell.trim()) }}
                                />
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {bodyRows.map((row, rIdx) => {
                              const cells = row.split('|').filter(c => c.trim() !== '');
                              return (
                                <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                  {cells.map((cell, cIdx) => (
                                    <td 
                                      key={cIdx} 
                                      className="border border-gray-200 px-4 py-3 text-gray-700"
                                      dangerouslySetInnerHTML={{ __html: parseMarkdown(cell.trim()) }}
                                    />
                                  ))}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    );
                  }

                  // Rendu d'une liste à puces
                  if (block.type === 'bullets' && block.lines) {
                    return (
                      <ul key={bIdx} className="space-y-3">
                        {block.lines.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-4 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                            <span 
                              className="text-base"
                              dangerouslySetInnerHTML={{ __html: parseMarkdown(item) }}
                            />
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  // Rendu d'une liste numérotée
                  if (block.type === 'numbered' && block.lines) {
                    return (
                      <ol key={bIdx} className="space-y-4">
                        {block.lines.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-4 p-4 border border-gray-200 hover:border-primary-300 hover:bg-primary-50/30 transition-all">
                            <span className="w-8 h-8 bg-primary-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                              {iIdx + 1}
                            </span>
                            <span 
                              className="text-gray-700"
                              dangerouslySetInnerHTML={{ __html: parseMarkdown(item) }}
                            />
                          </li>
                        ))}
                      </ol>
                    );
                  }

                  // Rendu d'une citation
                  if (block.type === 'blockquote') {
                    return (
                      <blockquote key={bIdx} className="border-l-4 border-primary-400 bg-primary-50/40 p-4 my-4 italic text-gray-700">
                        <p dangerouslySetInnerHTML={{ __html: parseMarkdown(block.content) }} />
                      </blockquote>
                    );
                  }

                  // Rendu d'un titre markdown (###, ##, #)
                  if (block.type === 'heading') {
                    const lvl = block.level || 3;
                    if (lvl <= 2) {
                      return (
                        <h3 key={bIdx} className="text-xl font-bold text-gray-900 mt-8 mb-3 pb-2 border-b border-gray-200">
                          {block.content}
                        </h3>
                      );
                    }
                    return (
                      <h4 key={bIdx} className="text-lg font-semibold text-primary-700 mt-6 mb-2">
                        {block.content}
                      </h4>
                    );
                  }

                  // Rendu d'un paragraphe normal
                  return (
                    <p
                      key={bIdx}
                      className="text-gray-700 leading-relaxed text-lg"
                      dangerouslySetInnerHTML={{ __html: parseMarkdown(block.content) }}
                    />
                  );
                })}
              </div>
            </section>
            {showInlineCTA && <TestCiviqueCTA variant="inline" />}
            </div>
            );
          })}

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

          {/* Maillage interne - liens vers articles connexes */}
          {(() => {
            const internalLinks = getInternalLinks(content.slug);
            if (internalLinks.length === 0) return null;
            return (
              <section className="mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-500 flex items-center gap-2">
                  <ExternalLink className="w-6 h-6 text-primary-600" />
                  À lire aussi
                </h2>
                <div className="grid gap-3">
                  {internalLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={`/articles/${link.slug}`}
                      className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 hover:border-primary-400 hover:bg-primary-50/40 transition-all group"
                    >
                      <span className="w-8 h-8 bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                        {idx + 1}
                      </span>
                      <span className="text-gray-800 font-medium group-hover:text-primary-700 transition-colors">
                        {link.anchor}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </section>
            );
          })()}

          {/* AdSense - avant le CTA */}
          <AdSenseBlock slot="9125999446" format="autorelaxed" className="my-8" />

          {/* CTA final standardisé : inscription gratuite + test blanc */}
          <TestCiviqueCTA variant="final" />
        </div>
      </div>
    </article>
  );
}
