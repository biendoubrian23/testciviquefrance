import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageArticle } from "@/components/articles/PageArticle";
import { ARTICLES, ARTICLES_RECENTS, articleParSlug } from "@/contenu/articles";
import { NOM_RUBRIQUE } from "@/contenu/rubriques";
import { imageAbsolue } from "@/lib/articleJsonLd";
import { SEO_CONFIG } from "@/lib/seo/constants";

type Params = { params: { slug: string } };

/**
 * Les articles sont connus au build : chacun devient une page statique servie
 * depuis le CDN, sans fonction réveillée. Une adresse inconnue est une 404, et
 * aucune page n'est fabriquée à la demande.
 *
 * Depuis le 20/10/2026, le contenu vient de `contenu/articles/` (un fichier
 * par article, registre `contenu/articles.ts`). Les 154 adresses publiées
 * avant cette date sont restées les mêmes ; `npm run seo:banc` le vérifie.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const a = articleParSlug(params.slug);
  if (!a) return { title: "Article non trouvé" };
  const url = `${SEO_CONFIG.siteUrl}/articles/${a.slug}`;
  const image = imageAbsolue(a.couverture.src);
  return {
    title: `${a.titreSeo} | Test Civique France`,
    description: a.resume,
    keywords: [a.theme, ...(a.motsCles ?? [])],
    authors: [{ name: a.auteur }],
    alternates: {
      canonical: url,
      types: { "application/rss+xml": [{ url: "/feed.xml", title: "Test Civique France, actualités" }] },
    },
    openGraph: {
      type: "article",
      title: a.titre,
      description: a.resume,
      url,
      siteName: SEO_CONFIG.siteName,
      locale: "fr_FR",
      publishedTime: `${a.publieLe}T08:00:00+02:00`,
      modifiedTime: `${a.modifieLe}T08:00:00+02:00`,
      authors: [a.auteur],
      section: NOM_RUBRIQUE[a.rubrique],
      tags: [a.theme, ...(a.motsCles ?? [])],
      images: [{ url: image, width: a.couverture.largeur, height: a.couverture.hauteur, alt: a.couverture.alt || a.titre }],
    },
    twitter: {
      card: "summary_large_image",
      title: a.titre,
      description: a.resume,
      images: [image],
    },
  };
}

export default function PageArticleTestCivique({ params }: Params) {
  const article = articleParSlug(params.slug);
  if (!article) notFound();
  return <PageArticle article={article} liste={ARTICLES_RECENTS} />;
}
