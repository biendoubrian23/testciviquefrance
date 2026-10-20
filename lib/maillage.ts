import type { Article } from "@/contenu/articles";
import type { Rubrique } from "@/contenu/rubriques";

/**
 * Le maillage interne des articles : qui pointe vers qui, calculé une fois
 * pour toutes les pages, sans réseau ni hasard.
 *
 * ## Pourquoi
 *
 * Le 20/10/2026, Search Console comptait 51 pages indexées sur environ 170,
 * alors que toutes répondaient 200 avec une canonique juste. Ce qui manquait,
 * c'étaient les liens : 90 articles sur 155 n'étaient liés que depuis une ou
 * deux pages, presque toujours la seule liste `/articles`. Une page que le
 * site cite si peu, Google l'explore rarement et la garde mal.
 *
 * ## Les liens que reçoit chaque article
 *
 * | d'où | combien | règle |
 * |---|---|---|
 * | `/articles` | 1 | la liste complète |
 * | la page de sa rubrique (`/articles/rubrique/<rubrique>`) | 1 | la liste complète de la rubrique |
 * | ses voisins chronologiques | 1 ou 2 | « plus récent » et « plus ancien » de la même rubrique |
 * | « Dans la même rubrique » | 2 garantis, plus ceux qui lui ressemblent | voir `memeRubrique` |
 * | « À lire ensuite » | selon la date | `suggestions` dans `lib/article.ts` |
 *
 * Soit **au moins cinq pages** par article, ce que `npm run seo:banc` vérifie
 * sur le site construit (`scripts/seo/maillage.mjs`). Un article publié demain
 * entre dans ce calcul sans rien écrire : il prend sa place dans sa rubrique,
 * ses voisins le lient, et ceux qui lui ressemblent le proposent.
 *
 * Tout est déterministe : à registre égal, mêmes liens, au build comme dans
 * les scripts du robot (qui jouent ce fichier avec Node, sans compilateur).
 */

/** La page d'une rubrique. Les slugs de rubrique sont ceux de l'ancien site, gardés tels quels. */
export function cheminRubrique(r: Rubrique): string {
  return `/articles/rubrique/${r}`;
}

/** Les articles d'une rubrique, du plus récent au plus ancien (l'ordre de `ARTICLES_RECENTS`). */
export function articlesDeRubrique(r: Rubrique, liste: readonly Article[]): Article[] {
  return liste.filter((a) => a.rubrique === r);
}

/** La date de la dernière retouche d'un ensemble d'articles : le `lastmod` honnête d'une page qui les liste. */
export function derniereRetouche(liste: readonly Article[]): string | undefined {
  return liste.reduce<string | undefined>((max, a) => (!max || a.modifieLe > max ? a.modifieLe : max), undefined);
}

/**
 * L'article précédent et le suivant dans la même rubrique, par date de
 * publication. `liste` est triée du plus récent au plus ancien.
 */
export function voisinsDeRubrique(article: Article, liste: readonly Article[]): { plusRecent?: Article; plusAncien?: Article } {
  const rubrique = articlesDeRubrique(article.rubrique, liste);
  const i = rubrique.findIndex((a) => a.slug === article.slug);
  if (i === -1) return {};
  return { plusRecent: rubrique[i - 1], plusAncien: rubrique[i + 1] };
}

/* ------------------------------------------------------------- mots-clés */

/**
 * Les mots qui ne disent rien du sujet. Les mots très fréquents sur le site
 * (« France », « 2026 », « titre ») pèsent déjà peu grâce à la rareté
 * (`poids`) : cette liste ne retire que les mots-outils.
 */
const VIDES = new Set(
  "les des une aux pour par sur dans avec sans que qui quoi quel quelle quels quelles comment combien est sont son ses vos votre nos notre cette ces tout tous toute toutes plus moins faire etre avoir pas peut doit apres avant entre chez ou leur leurs vous nous ils elles elle mon mes".split(
    " ",
  ),
);

/** Les mots d'un texte, sans accents ni casse : « Titre de séjour » donne `titre`, `sejour`. */
function mots(texte: string): string[] {
  return texte
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((m) => m.length >= 3 && !/^\d+$/.test(m) && !VIDES.has(m));
}

/** Les mots-clés d'un article : son thème, ses requêtes voisines et son titre. */
export function motsCles(a: Article): Set<string> {
  return new Set(mots([a.theme, ...(a.motsCles ?? []), a.titre].join(" ")));
}

/**
 * Le poids de chaque mot dans une liste d'articles : un mot rare (« oqtf »)
 * rapproche deux articles bien plus qu'un mot que tout le site emploie
 * (« sejour »). C'est le logarithme de la rareté, calculé une fois par liste.
 */
const cachePoids = new WeakMap<readonly Article[], { poids: Map<string, number>; mots: Map<string, Set<string>> }>();

function index(liste: readonly Article[]) {
  let i = cachePoids.get(liste);
  if (!i) {
    const parArticle = new Map(liste.map((a) => [a.slug, motsCles(a)]));
    const frequence = new Map<string, number>();
    for (const ms of parArticle.values()) for (const m of ms) frequence.set(m, (frequence.get(m) ?? 0) + 1);
    const poids = new Map([...frequence].map(([m, n]) => [m, Math.log((liste.length + 1) / n)]));
    i = { poids, mots: parArticle };
    cachePoids.set(liste, i);
  }
  return i;
}

/** La proximité de deux articles : la somme des poids de leurs mots-clés communs. */
export function proximite(a: Article, b: Article, liste: readonly Article[]): number {
  const { poids, mots: parArticle } = index(liste);
  const ma = parArticle.get(a.slug) ?? motsCles(a);
  const mb = parArticle.get(b.slug) ?? motsCles(b);
  let score = 0;
  for (const m of ma) if (mb.has(m)) score += poids.get(m) ?? 0;
  return score;
}

/* ------------------------------------------------- « Dans la même rubrique » */

/**
 * Le bloc « Dans la même rubrique » d'un article : `combien` liens (7 par
 * défaut), tous de sa rubrique.
 *
 * 1. **Deux places garanties**, les articles publiés deux rangs avant et deux
 *    rangs après lui dans la rubrique (la rubrique est lue comme un cercle :
 *    après le plus ancien vient le plus récent). Chaque article reçoit ainsi
 *    deux liens de ce bloc quoi qu'il arrive, même s'il ne ressemble à aucun
 *    autre : c'est ce qui tient le minimum de cinq liens entrants, aujourd'hui
 *    et pour les articles à venir.
 * 2. **Le reste, les plus proches par mots-clés communs** (`proximite`), puis,
 *    à égalité, les plus récents.
 *
 * Sont écartés : l'article lui-même, ses deux voisins directs (déjà liés par
 * « plus récent » et « plus ancien ») et les articles de `exclure` (ceux
 * d'« À lire ensuite », déjà sur la page). Le bloc liste les plus proches
 * d'abord, puis les deux places garanties.
 */
export function memeRubrique(article: Article, liste: readonly Article[], combien = 7, exclure: readonly Article[] = []): Article[] {
  const rubrique = articlesDeRubrique(article.rubrique, liste);
  const i = rubrique.findIndex((a) => a.slug === article.slug);
  if (i === -1) return [];
  const n = rubrique.length;
  const pris = new Set<string>([article.slug, ...exclure.map((a) => a.slug)]);
  if (i > 0) pris.add(rubrique[i - 1].slug);
  if (i < n - 1) pris.add(rubrique[i + 1].slug);

  const garantis: Article[] = [];
  for (const d of [2, -2]) {
    if (n < 4) break;
    const v = rubrique[(((i + d) % n) + n) % n];
    if (!pris.has(v.slug)) {
      garantis.push(v);
      pris.add(v.slug);
    }
  }

  const proches = rubrique
    .filter((a) => !pris.has(a.slug))
    .map((a) => ({ a, score: proximite(article, a, liste) }))
    .sort((x, y) => y.score - x.score || y.a.publieLe.localeCompare(x.a.publieLe) || x.a.slug.localeCompare(y.a.slug))
    .slice(0, Math.max(0, combien - garantis.length))
    .map((x) => x.a);

  return [...proches, ...garantis];
}
