/**
 * Les cartes d'articles, pour les pages qui les listent.
 *
 * ⚠️ **Ce n'est plus la source des articles.** Depuis le 20/10/2026, chaque
 * article vit dans `contenu/articles/<slug>.ts`, inscrit au registre
 * `contenu/articles.ts`. Ce module en dérive les cartes (titre, résumé,
 * rubrique, date, image), sous les noms de l'ancien site, pour que les cartes,
 * l'accueil, la page auteur, le plan du site et les flux n'aient pas eu à
 * changer de forme. Il n'y a qu'un seul système : rien ne s'écrit ici.
 *
 * Il charge le texte de tous les articles : **ne l'importez jamais depuis un
 * composant client** (seulement ses types). Une page serveur calcule les
 * cartes et les passe en props.
 */
import { ARTICLES_RECENTS } from '@/contenu/articles';
import { NOM_RUBRIQUE, RUBRIQUES } from '@/contenu/rubriques';
import { cartesDe, type CarteArticle } from '@/lib/article';

export type Article = CarteArticle;

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  count: number;
  color: string;
}

/** Tous les articles publiés, du plus récent au plus ancien. */
export const allArticles: Article[] = cartesDe(ARTICLES_RECENTS);

/** Les rubriques de la page `/articles`, avec leur nombre réel d'articles. */
export const categories: Category[] = [
  { id: 'tous', name: 'Tous les articles', slug: 'tous', icon: '', count: allArticles.length, color: 'primary' },
  ...RUBRIQUES.map((r) => ({
    id: r,
    name: NOM_RUBRIQUE[r],
    slug: r,
    icon: '',
    count: allArticles.filter((a) => a.categorySlug === r).length,
    color: 'primary',
  })),
];

export const getArticleBySlug = (slug: string): Article | undefined => allArticles.find((a) => a.slug === slug);
