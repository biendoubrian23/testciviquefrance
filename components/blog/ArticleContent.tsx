'use client';

import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, ChevronRight } from 'lucide-react';
import { Article, getPopularArticles } from '@/lib/data/articles';
import { cadreGeneralContent } from '@/lib/data/article-content';
import ArticleCard from './ArticleCard';
import CentresExamen2026Article from './CentresExamen2026Article';

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  const relatedArticles = getPopularArticles(3).filter((a) => a.id !== article.id);
  const content = cadreGeneralContent;

  // Pour l'article principal sur le cadre général
  const isMainArticle = article.slug === 'cadre-general-examen-civique';
  const isCentres2026Article = article.slug === 'centres-agrees-examen-civique-2026';

  // Choisir l'image de fond selon l'article avec article.image en priorité
  const getHeaderImage = () => {
    // Toujours utiliser l'image de l'article si disponible
    if (article.image && article.image.includes('unsplash')) {
      return `url('${article.image}')`;
    }
    // Fallback selon le slug
    if (isCentres2026Article) {
      return "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070')";
    }
    return "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070')";
  };

  return (
    <article className="pb-20">
      {/* Hero avec image de fond */}
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
            <button className="p-2 hover:bg-gray-100 text-gray-600 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 text-gray-600 transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Content */}
        <div className="mt-10">
          {isCentres2026Article ? (
            <CentresExamen2026Article />
          ) : isMainArticle ? (
            <>
              {/* Introduction - Style éditorial */}
              <section className="mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-500 inline-block">
                  {content.introduction.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ 
                  __html: content.introduction.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-semibold">$1</strong>').replace(/\n/g, '<br/>') 
                }} />
              </section>

              {/* Cadre légal - Mise en valeur forte */}
              <section className="mb-14">
                <div className="bg-primary-600 text-white p-8 mb-6">
                  <h2 className="text-2xl font-bold mb-4">
                    {content.cadreLegal.title}
                  </h2>
                  <p className="text-primary-100 leading-relaxed" dangerouslySetInnerHTML={{ 
                    __html: content.cadreLegal.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') 
                  }} />
                </div>
                <p className="text-gray-700 font-medium mb-4">Ces textes définissent :</p>
                <ul className="space-y-3">
                  {content.cadreLegal.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-4 text-gray-700">
                      <span className="w-6 h-6 bg-primary-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-base" dangerouslySetInnerHTML={{ 
                        __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>') 
                      }} />
                    </li>
                  ))}
                </ul>
              </section>

              {/* Titres concernés */}
              <section className="mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-500 inline-block">
                  {content.titresConcernes.title}
                </h2>
                <ul className="space-y-3 mb-6">
                  {content.titresConcernes.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-4 text-gray-700 py-2 border-b border-gray-100 last:border-0">
                      <span className="w-2 h-2 bg-primary-600 flex-shrink-0" />
                      <span className="text-base" dangerouslySetInnerHTML={{ 
                        __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>') 
                      }} />
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 italic pl-6 border-l-2 border-gray-300" dangerouslySetInnerHTML={{ 
                  __html: content.titresConcernes.note.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary-600">$1</strong>') 
                }} />
              </section>

              {/* Structure de l'examen - Tableau épuré */}
              <section className="mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-500 inline-block">
                  {content.structureExamen.title}
                </h2>
                <div className="border border-gray-200 overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-900 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Élément</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Détail</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {content.structureExamen.table.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 font-semibold text-gray-900">{row.label}</td>
                          <td className="px-6 py-4 text-gray-700">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 5 Thématiques officielles - Style impactant */}
              <section className="mb-14">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-2">
                    {content.thematiquesOfficielles.title}
                  </h2>
                  <p className="text-gray-400">Les 5 domaines de connaissances à maîtriser</p>
                </div>
                <ol className="space-y-4">
                  {content.thematiquesOfficielles.themes.map((theme, index) => (
                    <li key={index} className="flex items-center gap-5 p-4 border border-gray-200 hover:border-primary-300 hover:bg-primary-50/30 transition-all">
                      <span className="w-12 h-12 bg-primary-600 text-white flex items-center justify-center font-bold text-xl flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-gray-800 font-medium text-lg">{theme}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 p-4 bg-gray-50 border-l-4 border-gray-400">
                  <p className="text-gray-600 text-sm mb-1">
                    Consultez la description complète et les notions clés dans :
                  </p>
                  <Link href={content.thematiquesOfficielles.link.href} className="text-primary-600 hover:text-primary-700 font-semibold">
                    {content.thematiquesOfficielles.link.text} →
                  </Link>
                </div>
              </section>

              {/* Répartition des questions */}
              <section className="mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-500 inline-block">
                  {content.repartitionQuestions.title}
                </h2>
                <p className="text-gray-600 mb-8 text-lg">{content.repartitionQuestions.intro}</p>
                <div className="space-y-6">
                  {content.repartitionQuestions.themes.map((theme, index) => (
                    <div key={index} className="border border-gray-200 overflow-hidden">
                      <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-bold text-gray-900">
                          <span className="text-primary-600">{index + 1}.</span> {theme.title} 
                          <span className="ml-2 text-sm font-normal text-gray-500">({theme.total} questions)</span>
                        </h3>
                      </div>
                      <ul className="p-6 space-y-2 bg-white">
                        {theme.notions.map((notion, nIndex) => (
                          <li key={nIndex} className="flex items-center justify-between text-gray-700 py-1">
                            <span className="font-medium text-gray-900">{notion.name}</span>
                            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1">{notion.count} question{notion.count > 1 ? 's' : ''}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Modalités de notation - Alerte importante */}
              <section className="mb-14">
                <div className="border-l-4 border-amber-500 bg-amber-50 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-2xl">⚠️</span> {content.modalitesNotation.title}
                  </h2>
                  <ul className="space-y-3">
                    {content.modalitesNotation.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <span className="w-1.5 h-1.5 bg-amber-600 flex-shrink-0 mt-2" />
                        <span dangerouslySetInnerHTML={{ 
                          __html: rule.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>') 
                        }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Bien se préparer - CTA fort */}
              <section className="mb-14">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-500 inline-block">
                  {content.bienSePreparer.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8" dangerouslySetInnerHTML={{ 
                  __html: content.bienSePreparer.content.replace(/\n/g, '<br/>') 
                }} />
                <Link
                  href={content.bienSePreparer.cta.href}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors text-lg"
                >
                  {content.bienSePreparer.cta.text}
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </Link>
              </section>

              {/* Sources officielles */}
              <section className="mb-10 p-6 bg-gray-100 border-t-4 border-gray-900">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {content.articlesAssocies.title}
                </h2>
                <ul className="space-y-3">
                  {content.articlesAssocies.articles.map((a, index) => (
                    <li key={index}>
                      <a 
                        href={a.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 font-medium hover:underline flex items-center gap-2"
                      >
                        <span className="text-gray-400">↗</span> {a.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          ) : (
            // Contenu par défaut pour les autres articles
            <div className="text-gray-700">
              <p className="text-xl leading-relaxed mb-8">{article.excerpt}</p>
              <div className="p-8 bg-gray-100 text-center border-t-4 border-primary-600">
                <p className="text-gray-600 mb-6">
                  Le contenu complet de cet article sera bientôt disponible.
                </p>
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
                >
                  Découvrir nos autres articles
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-10 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Articles similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.slice(0, 2).map((relatedArticle) => (
                <ArticleCard key={relatedArticle.id} article={relatedArticle} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
