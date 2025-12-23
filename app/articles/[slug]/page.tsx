import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleContent from '@/components/blog/ArticleContent';
import SEOArticleRenderer from '@/components/blog/SEOArticleRenderer';
import RelatedArticles from '@/components/seo/RelatedArticles';
import { getArticleBySlug, allArticles, getRelatedArticles } from '@/lib/data/articles';
import { getArticleContent, getAllSEOArticleSlugs } from '@/lib/data/seo-content';
import { getArticleSchema } from '@/lib/seo/schemas';
import { SEO_CONFIG } from '@/lib/seo/constants';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

// Génère les paramètres statiques pour tous les articles
export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article non trouvé',
    };
  }

  const articleKeywords = [
    article.title,
    article.category,
    'test civique',
    'examen civique',
    'naturalisation française',
    'préparation test civique',
    '40 questions',
    'QCM naturalisation',
    'décret 2025-647',
    'CESEDA',
    'seuil 80%',
    '32 bonnes réponses',
  ];

  const canonicalUrl = `${SEO_CONFIG.siteUrl}/articles/${article.slug}`;

  return {
    title: `${article.title} | Test Civique France`,
    description: `${article.excerpt} Guide complet pour réussir le test civique de naturalisation française.`,
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
      publishedTime: article.date,
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
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Générer le JSON-LD avec la nouvelle fonction centralisée
  const articleJsonLd = getArticleSchema({
    title: article.title,
    description: article.excerpt,
    url: `${SEO_CONFIG.siteUrl}/articles/${article.slug}`,
    image: `${SEO_CONFIG.siteUrl}${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: article.author,
    category: article.category,
    readTime: article.readTime,
  });

  // Récupérer les articles liés
  const relatedArticles = getRelatedArticles(slug, 3);
  
  // Vérifier si c'est un article SEO avec contenu complet
  const isSEOArticle = seoArticleSlugs.includes(slug);
  const seoContent = isSEOArticle ? getArticleContent(slug) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
