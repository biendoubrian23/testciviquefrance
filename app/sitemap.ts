import { MetadataRoute } from 'next';
import { ARTICLES_RECENTS } from '@/contenu/articles';
import { RUBRIQUES } from '@/contenu/rubriques';
import { getAllAuthors } from '@/lib/data/authors';
import { articlesDeRubrique, cheminRubrique, derniereRetouche } from '@/lib/maillage';

/**
 * Le plan du site.
 *
 * ⚠️ **`lastmod` dit la vérité ou se tait.** Google ignore les dates d'un plan
 * du site qui les invente : avant le 20/10/2026, toutes les pages hors
 * articles portaient la date du build, c'est-à-dire « modifiée aujourd'hui »
 * chaque jour. Désormais :
 *
 * - un article porte sa date `modifieLe` (sa dernière retouche réelle) ;
 * - une page qui liste des articles (accueil, `/articles`, une rubrique, la
 *   page auteur) porte la dernière retouche des articles qu'elle liste ;
 * - les pages fixes (tarifs, FAQ, pages légales…) n'en portent pas : leur
 *   date de dernière modification n'est écrite nulle part.
 *
 * Seules des adresses canoniques y entrent (`www`, sans barre finale, sans
 * paramètre).
 */
const baseUrl = 'https://www.testciviquefrance.fr';

/** `AAAA-MM-JJ` en instant ISO, comme les dates `modifiedTime` des pages. */
const instant = (jour: string | undefined) => (jour ? new Date(`${jour}T08:00:00+02:00`).toISOString() : undefined);

export default function sitemap(): MetadataRoute.Sitemap {
  const toutDernier = instant(derniereRetouche(ARTICLES_RECENTS));

  const articleEntries: MetadataRoute.Sitemap = ARTICLES_RECENTS.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: instant(article.modifieLe),
    changeFrequency: article.rubrique === 'actualites' ? ('daily' as const) : ('monthly' as const),
    priority: 0.9,
  }));

  const rubriqueEntries: MetadataRoute.Sitemap = RUBRIQUES.map((r) => ({
    url: `${baseUrl}${cheminRubrique(r)}`,
    lastModified: instant(derniereRetouche(articlesDeRubrique(r, ARTICLES_RECENTS))),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // La page auteur liste les 20 articles les plus récents (`app/auteurs/[slug]`).
  const authorEntries: MetadataRoute.Sitemap = getAllAuthors().map((author) => ({
    url: `${baseUrl}/auteurs/${author.slug}`,
    lastModified: instant(derniereRetouche(ARTICLES_RECENTS.slice(0, 20))),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const fixe = (chemin: string, changeFrequency: 'weekly' | 'monthly' | 'yearly', priority: number) => ({
    url: `${baseUrl}${chemin}`,
    changeFrequency,
    priority,
  });

  return [
    { url: baseUrl, lastModified: toutDernier, changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/articles`, lastModified: toutDernier, changeFrequency: 'daily', priority: 0.9 },
    ...rubriqueEntries,
    ...articleEntries,
    ...authorEntries,
    fixe('/a-propos', 'monthly', 0.7),
    fixe('/tarifs', 'weekly', 0.85),
    fixe('/faq', 'weekly', 0.85),
    fixe('/contact', 'monthly', 0.6),
    fixe('/cours', 'monthly', 0.7),
    fixe('/eligibilite-examen-civique', 'monthly', 0.9),
    // Pages légales : indexées pour transparence et conformité AdSense
    fixe('/mentions-legales', 'yearly', 0.4),
    fixe('/politique-confidentialite', 'monthly', 0.5),
    fixe('/cgu', 'yearly', 0.4),
    fixe('/cgv', 'yearly', 0.4),
    // Note : onboarding exclu du sitemap car bloqué par robots.txt
  ];
}
