'use client';

import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, ChevronRight } from 'lucide-react';
import { Article, getPopularArticles } from '@/lib/data/articles';
import { cadreGeneralContent } from '@/lib/data/article-content';
import ArticleCard from './ArticleCard';

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  const relatedArticles = getPopularArticles(3).filter((a) => a.id !== article.id);
  const content = cadreGeneralContent;

  // Pour l'article principal sur le cadre général
  const isMainArticle = article.slug === 'cadre-general-examen-civique';

  return (
    <article className="pt-28 pb-20">
      {/* Hero */}
      <header className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-primary-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/articles" className="hover:text-white transition-colors">
              Articles
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{article.category}</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-primary-100">
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
        <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-200">
          <Link
            href="/articles"
            className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux articles
          </Link>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {isMainArticle ? (
            <>
              {/* Introduction */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-primary-700 mb-4 flex items-center gap-3">
                  {content.introduction.title}
                </h2>
                <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ 
                  __html: content.introduction.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary-700">$1</strong>').replace(/\n/g, '<br/>') 
                }} />
                <div className="mt-4 p-4 bg-primary-50 rounded-xl border-l-4 border-primary-500">
                  <p className="text-sm text-gray-600 mb-2">🔎 {content.introduction.note}</p>
                  <Link href={content.introduction.link.href} className="text-primary-600 hover:text-primary-700 font-medium underline">
                    {content.introduction.link.text}
                  </Link>
                </div>
              </section>

              {/* Cadre légal */}
              <section className="mb-10 p-6 bg-blue-50/50 rounded-2xl">
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  {content.cadreLegal.title}
                </h2>
                <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ 
                  __html: content.cadreLegal.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary-700">$1</strong>') 
                }} />
                <p className="text-gray-600 mb-3">Ces textes définissent :</p>
                <ul className="space-y-2">
                  {content.cadreLegal.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ 
                        __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>') 
                      }} />
                    </li>
                  ))}
                </ul>
              </section>

              {/* Titres concernés */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  {content.titresConcernes.title}
                </h2>
                <ul className="space-y-2 mb-4">
                  {content.titresConcernes.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ 
                        __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>') 
                      }} />
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 text-sm italic" dangerouslySetInnerHTML={{ 
                  __html: content.titresConcernes.note.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary-700">$1</strong>') 
                }} />
              </section>

              {/* Structure de l'examen */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-primary-700 mb-6">
                  {content.structureExamen.title}
                </h2>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Élément</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Détail</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {content.structureExamen.table.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-900">{row.label}</td>
                          <td className="px-6 py-4 text-gray-700">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 5 Thématiques officielles */}
              <section className="mb-10 p-6 bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl">
                <h2 className="text-2xl font-bold text-primary-700 mb-6">
                  {content.thematiquesOfficielles.title}
                </h2>
                <ol className="space-y-3 mb-6">
                  {content.thematiquesOfficielles.themes.map((theme, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <span className="text-gray-800 font-medium">{theme}</span>
                    </li>
                  ))}
                </ol>
                <p className="text-gray-600 text-sm">
                  Consultez la description complète et les notions clés dans :
                </p>
                <Link href={content.thematiquesOfficielles.link.href} className="text-primary-600 hover:text-primary-700 font-medium underline">
                  {content.thematiquesOfficielles.link.text}
                </Link>
              </section>

              {/* Répartition des questions */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  {content.repartitionQuestions.title}
                </h2>
                <p className="text-gray-600 mb-6">{content.repartitionQuestions.intro}</p>
                <div className="space-y-6">
                  {content.repartitionQuestions.themes.map((theme, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-200 p-5">
                      <h3 className="text-lg font-bold text-primary-700 mb-3">
                        {index + 1}. {theme.title} — {theme.total} questions
                      </h3>
                      <ul className="space-y-2">
                        {theme.notions.map((notion, nIndex) => (
                          <li key={nIndex} className="flex items-center gap-3 text-gray-700 text-sm">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                            <span><strong className="text-gray-900">{notion.name}</strong> : {notion.count} question{notion.count > 1 ? 's' : ''}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Modalités de notation */}
              <section className="mb-10 p-6 bg-amber-50 rounded-2xl border-l-4 border-amber-500">
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  {content.modalitesNotation.title}
                </h2>
                <ul className="space-y-3">
                  {content.modalitesNotation.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ 
                        __html: rule.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>') 
                      }} />
                    </li>
                  ))}
                </ul>
              </section>

              {/* Bien se préparer */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  {content.bienSePreparer.title}
                </h2>
                <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ 
                  __html: content.bienSePreparer.content.replace(/\n/g, '<br/>') 
                }} />
                <Link
                  href={content.bienSePreparer.cta.href}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
                >
                  👉 {content.bienSePreparer.cta.text}
                </Link>
              </section>

              {/* Articles associés */}
              <section className="mb-10 p-6 bg-gray-50 rounded-2xl">
                <h2 className="text-2xl font-bold text-primary-700 mb-4">
                  {content.articlesAssocies.title}
                </h2>
                <ul className="space-y-2">
                  {content.articlesAssocies.articles.map((a, index) => (
                    <li key={index}>
                      <Link href={a.href} className="text-primary-600 hover:text-primary-700 underline">
                        {a.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          ) : (
            // Contenu par défaut pour les autres articles
            <div className="text-gray-700">
              <p className="text-lg leading-relaxed mb-6">{article.excerpt}</p>
              <div className="p-6 bg-primary-50 rounded-xl text-center">
                <p className="text-gray-600 mb-4">
                  Le contenu complet de cet article sera bientôt disponible.
                </p>
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors"
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
