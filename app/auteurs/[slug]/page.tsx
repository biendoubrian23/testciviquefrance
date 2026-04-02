import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { getAuthorBySlug, getAllAuthors } from '@/lib/data/authors';
import { allArticles } from '@/lib/data/articles';
import { SEO_CONFIG } from '@/lib/seo/constants';
import { Calendar, Clock, ArrowRight, Linkedin, ExternalLink } from 'lucide-react';

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAuthors().map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return { title: 'Auteur non trouvé' };
  }

  const canonicalUrl = `${SEO_CONFIG.siteUrl}/auteurs/${author.slug}`;

  return {
    title: `${author.name} — ${author.role} | ${SEO_CONFIG.siteName}`,
    description: author.bio.substring(0, 160),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${author.name} — ${author.role}`,
      description: author.bio.substring(0, 160),
      url: canonicalUrl,
      siteName: SEO_CONFIG.siteName,
      type: 'profile',
    },
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  // Articles écrits par cet auteur (tous les articles actuels)
  const authorArticles = allArticles.slice(0, 20);

  // JSON-LD Person schema
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    url: `${SEO_CONFIG.siteUrl}/auteurs/${author.slug}`,
    jobTitle: author.role,
    description: author.bio,
    worksFor: {
      '@type': 'Organization',
      name: SEO_CONFIG.siteName,
      url: SEO_CONFIG.siteUrl,
    },
    knowsAbout: author.expertise,
    ...(author.linkedin && { sameAs: [author.linkedin] }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero auteur */}
        <section className="bg-gradient-to-b from-primary-50 to-white pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full bg-primary-600 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                {author.name.split(' ').map((n) => n[0]).join('')}
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                  {author.name}
                </h1>
                <p className="text-lg text-primary-600 font-medium mb-4">{author.role}</p>
                <p className="text-gray-600 leading-relaxed max-w-2xl">{author.bio}</p>

                {/* Liens sociaux */}
                {author.linkedin && (
                  <div className="mt-4 flex gap-3">
                    <a
                      href={author.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Domaines d'expertise */}
            <div className="mt-8">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Domaines d&apos;expertise
              </h2>
              <div className="flex flex-wrap gap-2">
                {author.expertise.map((exp, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full border border-primary-200"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Articles de l'auteur */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Articles publiés ({authorArticles.length})
            </h2>

            <div className="space-y-6">
              {authorArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="block group p-5 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <span className="inline-block text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 mb-2">
                        {article.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime} min
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary-500 transition-colors flex-shrink-0 mt-2" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
