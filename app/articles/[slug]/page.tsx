import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleContent from '@/components/blog/ArticleContent';
import SEOArticleRenderer from '@/components/blog/SEOArticleRenderer';
import RelatedArticles from '@/components/seo/RelatedArticles';
import { getArticleBySlug, allArticlesIncludingScheduled, getRelatedArticles } from '@/lib/data/articles';
import { getArticleContent, getAllSEOArticleSlugs } from '@/lib/data/seo-content';
import { isArticlePublished } from '@/lib/data/publishing';
import { getArticleSchema, getBreadcrumbSchema, getFAQSchema } from '@/lib/seo/schemas';
import { SEO_CONFIG } from '@/lib/seo/constants';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

// Force le rendu 100% statique — aucun SSR, aucun appel serveur à la demande.
// Les articles en brouillon (publishedAt futur) génèrent une page 404 statique
// au build et deviennent visibles au prochain push qui retire leur publishedAt.
export const dynamic = 'force-static';

// Génère les paramètres statiques pour tous les articles, y compris les brouillons.
// Au build, isArticlePublished gate le rendu : 404 si publishedAt encore futur,
// contenu publié sinon.
export async function generateStaticParams() {
  return allArticlesIncludingScheduled.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  // Articles en brouillon : pas de metadata indexable tant que `publishedAt` n'est pas atteint.
  if (!isArticlePublished(slug)) {
    return {
      title: 'Article non trouvé',
      robots: { index: false, follow: false },
    };
  }

  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article non trouvé',
    };
  }

  // Récupérer les keywords spécifiques de l'article SEO si disponibles
  const seoContent = getArticleContent(slug);

  const baseKeywords = [
    article.title,
    article.category,
    'test civique',
    'examen civique',
    'naturalisation française',
    'préparation test civique',
  ];

  // Fusionner keywords génériques + keywords spécifiques de l'article
  const articleKeywords = seoContent?.keywords?.length
    ? [...new Set([...baseKeywords, ...seoContent.keywords])]
    : [
        ...baseKeywords,
        '40 questions',
        'QCM naturalisation',
        'décret 2025-647',
        'CESEDA',
        'seuil 80%',
        '32 bonnes réponses',
      ];

  const canonicalUrl = `${SEO_CONFIG.siteUrl}/articles/${article.slug}`;

  // Meta description optimisée pour le CTR — coupée proprement sur un mot entier
  const metaDescription = article.excerpt.length > 120
    ? `${article.excerpt.substring(0, 140).replace(/\s+\S*$/, '')}… ✅ Guide 2026 vérifié.`
    : `${article.excerpt} ✅ 40 questions, 95% de réussite — Guide 2026 mis à jour.`;

  return {
    title: `${article.title} | Test Civique France`,
    description: metaDescription,
    keywords: articleKeywords,
    authors: [{ name: article.author }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: canonicalUrl,
      siteName: SEO_CONFIG.siteName,
      type: 'article',
      publishedTime: (() => {
        const parts = article.date.split('/');
        return `${parts[2]}-${parts[1]}-${parts[0]}T08:00:00+02:00`;
      })(),
      modifiedTime: (() => {
        const parts = article.date.split('/');
        return `${parts[2]}-${parts[1]}-${parts[0]}T08:00:00+02:00`;
      })(),
      authors: [article.author],
      section: article.category,
      tags: articleKeywords,
      images: [
        {
          url: `${SEO_CONFIG.siteUrl}${article.image}`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [`${SEO_CONFIG.siteUrl}${article.image}`],
    },
  };
}

// Liste des slugs des articles SEO (avec contenu complet)
const seoArticleSlugs = getAllSEOArticleSlugs();

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  // Articles en brouillon : 404 tant que `publishedAt` (ISO 8601) n'est pas atteint.
  // La page sera générée publiée au prochain build qui retire ce champ.
  if (!isArticlePublished(slug)) {
    notFound();
  }

  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Générer le JSON-LD avec la nouvelle fonction centralisée
  const dateParts = article.date.split('/');
  const isoDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T08:00:00+02:00`;

  const articleJsonLd = getArticleSchema({
    title: article.title,
    description: article.excerpt,
    url: `${SEO_CONFIG.siteUrl}/articles/${article.slug}`,
    image: article.image?.startsWith('http') ? article.image : `${SEO_CONFIG.siteUrl}${article.image}`,
    datePublished: isoDate,
    dateModified: isoDate,
    author: article.author,
    authorUrl: article.author === 'Brian B' ? `${SEO_CONFIG.siteUrl}/auteurs/brian-biendou` : undefined,
    category: article.category,
    readTime: article.readTime,
  });

  // Récupérer les articles liés
  const relatedArticles = getRelatedArticles(slug, 3);
  
  // Vérifier si c'est un article SEO avec contenu complet
  const isSEOArticle = seoArticleSlugs.includes(slug);
  const seoContent = isSEOArticle ? getArticleContent(slug) : null;

  // Slugs des articles avec un rendu dédié (composants riches sur mesure)
  const hasDedicatedRenderer =
    slug === 'cadre-general-examen-civique' ||
    slug === 'centres-agrees-examen-civique-2026' ||
    slug === 'tout-savoir-examen-civique-2026';

  // Compliance AdSense : si un article n'a NI contenu SEO, NI rendu dédié,
  // renvoyer 404 plutôt qu'une page placeholder "contenu bientôt disponible"
  // (= thin content selon Google Publisher Policies)
  if (!isSEOArticle && !hasDedicatedRenderer) {
    notFound();
  }

  // Breadcrumb schema pour Google
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: 'Accueil', url: SEO_CONFIG.siteUrl },
    { name: 'Articles', url: `${SEO_CONFIG.siteUrl}/articles` },
    { name: article.category, url: `${SEO_CONFIG.siteUrl}/articles?category=${encodeURIComponent(article.category)}` },
    { name: article.title, url: `${SEO_CONFIG.siteUrl}/articles/${article.slug}` },
  ]);

  // FAQ schema pour les rich snippets Google (si l'article a des FAQ)
  const faqJsonLd = seoContent?.faq?.length ? getFAQSchema(seoContent.faq) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Header />
      <main className="min-h-screen bg-white">
        {/* Afficher le contenu SEO complet ou le contenu classique */}
        {isSEOArticle && seoContent ? (
          <SEOArticleRenderer content={seoContent} article={article} />
        ) : (
          <ArticleContent article={article} />
        )}
        
        {/* Articles liés pour améliorer le maillage interne */}
        <RelatedArticles 
          articles={relatedArticles} 
          currentSlug={slug}
          title="Articles qui pourraient vous intéresser"
        />
      </main>
      <Footer />
    </>
  );
}
