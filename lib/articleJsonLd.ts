import type { Article } from "@/contenu/articles";
import { NOM_RUBRIQUE, PAGE_AUTEUR } from "@/contenu/rubriques";
import { nombreDeMots, sourcesCitees, texteBrut } from "@/lib/article";
import { SEO_CONFIG } from "@/lib/seo/constants";

const SITE = SEO_CONFIG.siteUrl;

/** L'image d'un article en adresse absolue : les couvertures migrées sont déjà sur `images.unsplash.com`. */
export function imageAbsolue(src: string): string {
  return /^https?:\/\//.test(src) ? src : `${SITE}${src}`;
}

/**
 * Les données structurées d'une page d'article : `NewsArticle`, le fil
 * d'Ariane et `FAQPage` quand l'article a une FAQ. Un seul `@graph`, relié à
 * l'organisation que pose le gabarit du site sur toutes les pages
 * (`#organization`).
 *
 * `NewsArticle` et le fil d'Ariane à quatre niveaux (Accueil, Articles,
 * rubrique, article) sont ceux de l'ancien site (`lib/seo/schemas.ts`), gardés
 * à l'identique : c'est ce que Google Actualités et les résultats enrichis
 * lisent depuis des mois. S'y ajoutent ce que les moteurs génératifs
 * découpent en réponses : `wordCount`, `keywords`, et les sources citées en
 * `citation`. Les vidéos gardent leur `VideoObject`, posé par
 * `components/seo/YouTubeEmbed.tsx`.
 */
export function jsonLdArticle(a: Article) {
  const url = `${SITE}/articles/${a.slug}`;
  const pageAuteur = PAGE_AUTEUR[a.auteur];
  const sources = sourcesCitees(a);
  const graphe: Record<string, unknown>[] = [
    {
      "@type": "NewsArticle",
      "@id": `${url}/#article`,
      headline: texteBrut(a.titre),
      alternativeHeadline: a.titreSeo,
      description: a.resume,
      url,
      inLanguage: "fr-FR",
      datePublished: `${a.publieLe}T08:00:00+02:00`,
      dateModified: `${a.modifieLe}T08:00:00+02:00`,
      wordCount: nombreDeMots(a),
      timeRequired: `PT${a.minutes}M`,
      articleSection: NOM_RUBRIQUE[a.rubrique],
      keywords: [a.theme, ...(a.motsCles ?? [])].join(", "),
      author: pageAuteur
        ? { "@type": "Person", name: a.auteur, url: `${SITE}${pageAuteur}` }
        : { "@type": "Organization", name: a.auteur, url: SITE },
      publisher: { "@id": `${SITE}/#organization` },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image: {
        "@type": "ImageObject",
        url: imageAbsolue(a.couverture.src),
        width: a.couverture.largeur,
        height: a.couverture.hauteur,
        creditText: `${a.couverture.credit}, ${a.couverture.licence}`,
      },
      ...(sources.length ? { citation: sources } : {}),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE },
        { "@type": "ListItem", position: 2, name: "Articles", item: `${SITE}/articles` },
        {
          "@type": "ListItem",
          position: 3,
          name: NOM_RUBRIQUE[a.rubrique],
          item: `${SITE}/articles?category=${encodeURIComponent(NOM_RUBRIQUE[a.rubrique])}`,
        },
        { "@type": "ListItem", position: 4, name: texteBrut(a.titre), item: url },
      ],
    },
  ];
  if (a.faq?.length) {
    graphe.push({
      "@type": "FAQPage",
      "@id": `${url}/#faq`,
      mainEntity: a.faq.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: { "@type": "Answer", text: texteBrut(q.reponse) },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graphe };
}
