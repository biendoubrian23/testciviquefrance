import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleContent from '@/components/blog/ArticleContent';
import { getArticleBySlug, articles } from '@/lib/data/articles';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
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

  return {
    title: `${article.title} | Test Civique France`,
    description: `${article.excerpt} Guide complet pour réussir le test civique de naturalisation française.`,
    keywords: articleKeywords,
    authors: [{ name: article.author }],
    alternates: {
      canonical: `https://testciviquefrance.com/articles/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://testciviquefrance.com/articles/${article.slug}`,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      section: article.category,
      tags: articleKeywords,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
  };
}

// JSON-LD pour l'article
function getArticleJsonLd(article: NonNullable<ReturnType<typeof getArticleBySlug>>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://testciviquefrance.com/articles/${article.slug}#article`,
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: 'https://testciviquefrance.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Test Civique France',
      logo: {
        '@type': 'ImageObject',
        url: 'https://testciviquefrance.com/logo.png',
      },
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://testciviquefrance.com/articles/${article.slug}`,
    },
    articleSection: article.category,
    wordCount: 2500,
    timeRequired: `PT${article.readTime}M`,
    about: [
      { '@type': 'Thing', name: 'Test civique français' },
      { '@type': 'Thing', name: 'Naturalisation française' },
      { '@type': 'Thing', name: 'Examen civique' },
    ],
    keywords: 'test civique, examen civique, naturalisation française, décret 2025-647, CESEDA, 40 questions, QCM, 80 pourcent, carte de séjour, carte résident',
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = getArticleJsonLd(article);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        <ArticleContent article={article} />
      </main>
      <Footer />
    </>
  );
}
