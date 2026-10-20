/**
 * Le maillage interne, mesure sur les pages rendues : combien de pages du site
 * pointent vers chaque article.
 *
 *   npm run seo:banc                                    (le banc le lance contre le build local)
 *   node scripts/seo/maillage.mjs                       contre http://127.0.0.1:3210 (BASE_VERIF)
 *   node scripts/seo/maillage.mjs --base https://www.testciviquefrance.fr   contre la production
 *   node scripts/seo/maillage.mjs --liste               detaille aussi les articles les moins lies
 *
 * ## Pourquoi
 *
 * Le 20/10/2026, Search Console comptait 51 pages indexees sur environ 170.
 * Toutes repondaient 200, avec une canonique juste et sans `noindex` : ce qui
 * manquait, c'etaient les liens. 90 articles sur 155 n'etaient lies que depuis
 * une ou deux pages (presque toujours la seule liste `/articles`), et Google
 * explore et garde peu une page que le site lui-meme cite si peu.
 *
 * ## Ce qui est compte
 *
 * Le script lit le plan du site (`/sitemap.xml`), ouvre chaque page, et releve
 * les liens HTML classiques (`<a href>`) vers `/articles/<slug>`, relatifs ou
 * absolus. Un lien entrant, c'est **une autre page** qui pointe vers l'article :
 * dix liens depuis la meme page en font un, et le lien d'un article vers
 * lui-meme ne compte pas. C'est ce que voit un robot d'exploration, pas ce que
 * dit le registre : un bloc de liens qui ne serait pas rendu ne compte pas.
 *
 * Le seuil vient de `docs/seo/REGLAGES.json > liens_entrants_minimum` (5).
 * Sous ce seuil, le script sort 1, et `seo:banc` echoue avec lui.
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const RACINE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const SITE = 'https://www.testciviquefrance.fr';
const NAVIGATEUR =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';

const args = process.argv.slice(2);
const iBase = args.indexOf('--base');
const BASE = (iBase !== -1 ? args[iBase + 1] : process.env.BASE_VERIF ?? 'http://127.0.0.1:3210').replace(/\/$/, '');
const DETAIL = args.includes('--liste');

const REGLAGES = (() => {
  try {
    return JSON.parse(readFileSync(path.join(RACINE, 'docs', 'seo', 'REGLAGES.json'), 'utf8'));
  } catch {
    return {};
  }
})();
const MINIMUM = REGLAGES.liens_entrants_minimum ?? 5;

async function lire(chemin) {
  for (let essai = 1; ; essai += 1) {
    try {
      const r = await fetch(BASE + chemin, { headers: { 'User-Agent': NAVIGATEUR }, signal: AbortSignal.timeout(30000) });
      return { statut: r.status, texte: r.ok ? await r.text() : '' };
    } catch (e) {
      if (essai >= 3) return { statut: 0, texte: '', erreur: e?.message ?? String(e) };
      await new Promise((r) => setTimeout(r, 1000 * essai));
    }
  }
}

/** Le chemin d'une adresse du plan du site, pour la lire sur BASE. */
const chemin = (loc) => loc.replace(/^https?:\/\/[^/]+/, '') || '/';

const plan = await lire('/sitemap.xml');
if (plan.statut !== 200) {
  console.error(`Plan du site illisible sur ${BASE}/sitemap.xml (HTTP ${plan.statut}${plan.erreur ? `, ${plan.erreur}` : ''}).`);
  process.exit(1);
}
const pages = [...new Set([...plan.texte.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => chemin(m[1].trim())))];
const articles = pages.filter((p) => /^\/articles\/[a-z0-9-]+$/.test(p));

/** Pour chaque article, l'ensemble des pages qui pointent vers lui. */
const entrants = new Map(articles.map((a) => [a, new Set()]));
const illisibles = [];

// Quelques lectures en parallele : assez pour aller vite, pas assez pour gener la production.
const PARALLELE = 6;
for (let i = 0; i < pages.length; i += PARALLELE) {
  await Promise.all(
    pages.slice(i, i + PARALLELE).map(async (source) => {
      const r = await lire(source);
      if (r.statut !== 200) {
        illisibles.push(`${source} (HTTP ${r.statut})`);
        return;
      }
      const html = r.texte.replace(/<script[\s\S]*?<\/script>/gi, ' ');
      for (const m of html.matchAll(/<a\b[^>]*?\bhref="(?:https?:\/\/(?:www\.)?testciviquefrance\.fr)?(\/articles\/[a-z0-9-]+)(?:[?#][^"]*)?"/g)) {
        const cible = m[1];
        if (cible !== source && entrants.has(cible)) entrants.get(cible).add(source);
      }
    }),
  );
}

const comptes = articles.map((a) => ({ article: a, n: entrants.get(a).size })).sort((x, y) => x.n - y.n || x.article.localeCompare(y.article));
const valeurs = comptes.map((c) => c.n).sort((a, b) => a - b);
const mediane = valeurs.length ? (valeurs.length % 2 ? valeurs[(valeurs.length - 1) / 2] : (valeurs[valeurs.length / 2 - 1] + valeurs[valeurs.length / 2]) / 2) : 0;
const moyenne = valeurs.length ? valeurs.reduce((s, x) => s + x, 0) / valeurs.length : 0;
const tranches = [
  ['1 ou 2', (n) => n >= 1 && n <= 2],
  ['0', (n) => n === 0],
  ['3 ou 4', (n) => n >= 3 && n <= 4],
  ['5 a 9', (n) => n >= 5 && n <= 9],
  ['10 a 19', (n) => n >= 10 && n <= 19],
  ['20 et plus', (n) => n >= 20],
];
const sous = comptes.filter((c) => c.n < MINIMUM);

console.log(`maillage interne (${BASE})`);
console.log(`  ${pages.length} pages lues dans le plan du site, dont ${articles.length} articles${illisibles.length ? `, ${illisibles.length} illisibles` : ''}`);
console.log(`  liens entrants par article : minimum ${valeurs[0] ?? 0}, mediane ${mediane}, moyenne ${moyenne.toFixed(1)}, maximum ${valeurs.at(-1) ?? 0}`);
console.log(`  repartition : ${tranches.map(([nom, f]) => `${nom} : ${valeurs.filter(f).length}`).join(', ')}`);
for (const p of illisibles) console.log(`  ECHEC  page illisible ${p}`);
if (DETAIL) {
  console.log('  les 15 articles les moins lies :');
  for (const c of comptes.slice(0, 15)) console.log(`    ${c.n}  ${c.article}`);
}
for (const c of sous) console.log(`  ECHEC  ${c.article} : ${c.n} lien(s) entrant(s), minimum ${MINIMUM}`);
console.log(sous.length || illisibles.length ? `\n${sous.length} article(s) sous le minimum de ${MINIMUM} liens entrants\n` : `\naucun article sous ${MINIMUM} liens entrants\n`);
process.exitCode = sous.length || illisibles.length ? 1 : 0;
