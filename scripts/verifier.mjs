/**
 * Le banc des articles, contre un site construit qui tourne.
 *
 *   npm run build && npm run seo:banc        (lance le site sur 3210, joue le banc, l'arrete)
 *   BASE_VERIF=http://127.0.0.1:3000 node scripts/verifier.mjs   (contre un site deja lance)
 *
 * Porte de `CosmetWiki/scripts/verifier.mjs` (Cosme Check, venu de
 * MemoryPilot), reduit a ce que le robot editorial peut casser en publiant
 * un article : il ne teste pas du texte, il teste des regles, celles qu'une
 * relecture ne rattrape pas parce qu'elles portent sur toutes les pages a la
 * fois. Aucun navigateur : tout se lit dans le HTML rendu et dans les
 * reponses brutes.
 *
 * | section | ce qui est verifie |
 * |---|---|
 * | pages | chaque article repond 200, dont les 154 adresses d'avant la migration (`scripts/seo/anciennes-adresses.json`) |
 * | referencement | titre, description, canonique absolue, un seul h1, pas de tiret cadratin visible |
 * | donnees structurees | JSON-LD valide ; `NewsArticle` et `BreadcrumbList` ; `FAQPage` avec autant de questions que l'article |
 * | appels | les cinq emplacements, chacun vers `/signup?c=<slug>&m=blog&e=<emplacement>` |
 * | rubriques | chaque page `/articles/rubrique/<rubrique>` en 200, `CollectionPage` et `BreadcrumbList`, tous ses articles lies ; chaque article lie sa rubrique et porte « Dans la meme rubrique » |
 * | redirections | les adresses fusionnees (`anciennes-adresses.json > redirigees`) repondent 301 vers leur cible |
 * | plan du site, flux | chaque article dans `/sitemap.xml` (avec sa date), les rubriques aussi, et dans `/feed.xml` ; `/sitemap-news.xml` porte les articles de moins de 48 heures, et eux seuls |
 *
 * Le maillage (au moins cinq pages qui lient chaque article) est mesure a part,
 * par `scripts/seo/maillage.mjs`, que `seo:banc` lance juste apres.
 * | mesure | PostHog sans cookie sans consentement, `cta_clic`, `section_atteinte`, campagne jointe a l'inscription |
 */

import { existsSync, readFileSync } from 'node:fs';
import { registerHooks } from 'node:module';
import { fileURLToPath } from 'node:url';

const BASE = process.env.BASE_VERIF ?? 'http://127.0.0.1:3210';
/** On se presente en navigateur, pour voir ce que voit un visiteur. */
const NAVIGATEUR = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36';
const SITE = 'https://www.testciviquefrance.fr';

/* Le code du site, lu par Node sans compilateur : l'alias `@/` et les imports sans extension. */
const RACINE = new URL('../', import.meta.url).href;
registerHooks({
  resolve(specifier, context, nextResolve) {
    let s = specifier.startsWith('@/') ? RACINE + specifier.slice(2) : specifier;
    const relatif = s.startsWith('.') || s.startsWith('file:');
    if (relatif && !/\.(?:[cm]?[jt]sx?|json)$/.test(s)) {
      const base = new URL(s, context.parentURL);
      const chemin = fileURLToPath(base);
      if (existsSync(`${chemin}.ts`)) s = `${base.href}.ts`;
      else if (existsSync(`${chemin}/index.ts`)) s = `${base.href}/index.ts`;
    }
    return nextResolve(s, context);
  },
});
const avertirNode = process.emitWarning;
process.emitWarning = (alerte, ...reste) => {
  if (/MODULE_TYPELESS_PACKAGE_JSON/.test(String(alerte)) || reste.some((r) => r?.code === 'MODULE_TYPELESS_PACKAGE_JSON' || r === 'MODULE_TYPELESS_PACKAGE_JSON')) return;
  avertirNode.call(process, alerte, ...reste);
};
const site = (chemin) => import(new URL(chemin, RACINE).href);
const { ARTICLES } = await site('contenu/articles.ts');
const { placesDesAppels, ancres, sommaire, recentPourActualites } = await site('lib/article.ts');
const { cheminRubrique, articlesDeRubrique } = await site('lib/maillage.ts');
const { RUBRIQUES } = await site('contenu/rubriques.ts');

const FICHIER_ANCIENNES = JSON.parse(readFileSync(new URL('scripts/seo/anciennes-adresses.json', RACINE), 'utf8'));
const ANCIENNES = FICHIER_ANCIENNES.adresses;
const REDIRIGEES = FICHIER_ANCIENNES.redirigees ?? {};

let echecs = 0;
let verifs = 0;
function verifier(nom, condition, detail = '') {
  verifs += 1;
  if (!condition) {
    echecs += 1;
    console.log(`  ECHEC  ${nom}${detail ? ' : ' + detail : ''}`);
  }
}
const lire = (chemin, init = {}) => fetch(BASE + chemin, { ...init, headers: { 'User-Agent': NAVIGATEUR, ...(init.headers ?? {}) } });
const texteVisible = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ');
const decoder = (t) => t.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"');

/* ------------------------------------------------------------------ pages */
console.log('pages');
const RUBRIQUES_CHEMINS = RUBRIQUES.map((r) => cheminRubrique(r));
const CHEMINS = [...new Set(['/', '/articles', ...RUBRIQUES_CHEMINS, ...ARTICLES.map((a) => `/articles/${a.slug}`), ...ANCIENNES])];
const pages = new Map();
for (const chemin of CHEMINS) {
  const r = await lire(chemin, { redirect: 'manual' });
  verifier(`${chemin} repond 200`, r.status === 200, `HTTP ${r.status}`);
  if (r.ok) pages.set(chemin, await r.text());
}
for (const chemin of ANCIENNES) verifier(`l'ancienne adresse ${chemin} est toujours un article`, ARTICLES.some((a) => `/articles/${a.slug}` === chemin));
console.log(`  ${pages.size} pages lues sur ${CHEMINS.length}, dont ${ANCIENNES.length} adresses d'avant la migration`);

/* ---------------------------------------------------------- redirections */
console.log('\nredirections');
for (const [ancienne, cible] of Object.entries(REDIRIGEES)) {
  const r = await lire(ancienne, { redirect: 'manual' });
  const vers = (r.headers.get('location') ?? '').replace(/^https?:\/\/[^/]+/, '');
  verifier(`${ancienne} repond 301 vers ${cible}`, r.status === 301 && vers === cible, `HTTP ${r.status} vers ${vers || 'rien'}`);
  verifier(`${ancienne} n'est plus un article du registre`, !ARTICLES.some((a) => `/articles/${a.slug}` === ancienne));
  verifier(`la cible ${cible} est un article`, ARTICLES.some((a) => `/articles/${a.slug}` === cible));
}

/* ------------------------------------------------------------- rubriques */
console.log('\nrubriques');
const RECENTS = [...ARTICLES].sort((x, y) => y.publieLe.localeCompare(x.publieLe) || y.modifieLe.localeCompare(x.modifieLe) || x.slug.localeCompare(y.slug));
for (const r of RUBRIQUES) {
  const chemin = cheminRubrique(r);
  const html = pages.get(chemin) ?? '';
  const noeuds = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(([, b]) => {
    try {
      const d = JSON.parse(b);
      return d['@graph'] ?? [d];
    } catch {
      return [];
    }
  });
  const membres = articlesDeRubrique(r, RECENTS);
  const collection = noeuds.find((n) => n['@type'] === 'CollectionPage');
  verifier(`${chemin} declare une CollectionPage avec ses ${membres.length} articles`, collection?.mainEntity?.itemListElement?.length === membres.length);
  verifier(`${chemin} declare son fil d'Ariane`, noeuds.some((n) => n['@type'] === 'BreadcrumbList' && n.itemListElement?.at(-1)?.item === `${SITE}${chemin}`));
  for (const a of membres) verifier(`${chemin} lie ${a.slug}`, html.includes(`href="/articles/${a.slug}"`));
}

/* -------------------------------------------------------- referencement */
console.log('\nreferencement');
for (const [chemin, html] of pages) {
  const titre = decoder(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  const canon = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? '';
  verifier(`${chemin} a un titre`, titre.length > 10, `« ${titre} »`);
  verifier(`${chemin} a une description`, desc.length >= 50, `${desc.length} caracteres`);
  if (chemin.startsWith('/articles/')) {
    verifier(`${chemin} a une canonique absolue sur testciviquefrance.fr`, canon === `${SITE}${chemin}`, canon);
    const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
    verifier(`${chemin} a exactement un h1`, h1 === 1, `${h1} trouve(s)`);
    const corps = html.match(/<main[\s\S]*<\/main>/)?.[0] ?? html;
    const tirets = (texteVisible(corps).match(/[\u2013\u2014]/g) ?? []).length;
    verifier(`${chemin} sans tiret cadratin dans l'article`, tirets === 0, `${tirets} occurrence(s)`);
    const imgs = [...corps.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
    verifier(`${chemin} toutes les images de l'article ont un alt`, imgs.every((i) => /\balt=/.test(i)));
  }
}

/* ------------------------------------------------ donnees structurees et article */
console.log("\npages d'article");
for (const a of ARTICLES) {
  const chemin = `/articles/${a.slug}`;
  const html = pages.get(chemin) ?? '';
  const blocs = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(([, b]) => b);
  const noeuds = [];
  let valide = true;
  for (const b of blocs) {
    try {
      const d = JSON.parse(b);
      if (d['@context'] !== 'https://schema.org') valide = false;
      noeuds.push(...(d['@graph'] ?? [d]));
    } catch {
      valide = false;
    }
  }
  verifier(`${chemin} JSON-LD valide`, blocs.length > 0 && valide);
  const article = noeuds.find((n) => n['@type'] === 'NewsArticle');
  verifier(`${chemin} declare un NewsArticle`, !!article);
  verifier(`${chemin} NewsArticle date du ${a.publieLe}`, article?.datePublished?.startsWith(a.publieLe) && article?.dateModified?.startsWith(a.modifieLe));
  verifier(`${chemin} NewsArticle porte son image`, !!article?.image?.url && article.image.url.includes(a.couverture.src.replace(/^https?:\/\/[^/]+/, '').split('?')[0]));
  verifier(`${chemin} NewsArticle a son @id`, article?.['@id'] === `${SITE}${chemin}/#article`);
  // Le gabarit du site pose aussi son propre fil d'Ariane : on cherche celui de l'article.
  const fil = noeuds.find((n) => n['@type'] === 'BreadcrumbList' && n.itemListElement?.at(-1)?.item === `${SITE}${chemin}`);
  verifier(`${chemin} declare son fil d'Ariane a quatre niveaux`, fil?.itemListElement?.length === 4);
  verifier(`${chemin} fil d'Ariane vers sa rubrique`, fil?.itemListElement?.[2]?.item === `${SITE}${cheminRubrique(a.rubrique)}`);
  verifier(`${chemin} lie la page de sa rubrique`, html.includes(`href="${cheminRubrique(a.rubrique)}"`));
  verifier(`${chemin} porte « Dans la meme rubrique »`, html.includes('id="meme-rubrique"') && html.includes('Dans la même rubrique'));
  const faq = noeuds.find((n) => n['@type'] === 'FAQPage');
  if (a.faq?.length) {
    verifier(`${chemin} declare sa FAQ`, faq?.mainEntity?.length === a.faq.length, `${faq?.mainEntity?.length ?? 0} question(s)`);
    verifier(`${chemin} affiche sa FAQ`, html.includes('id="questions-frequentes"'));
  } else verifier(`${chemin} ne declare pas de FAQ qu'il n'affiche pas`, !faq);
  if (a.videos?.length) verifier(`${chemin} declare ses videos`, noeuds.filter((n) => n['@type'] === 'VideoObject').length === a.videos.length);

  // Les cinq appels, chacun vers l'inscription avec la campagne de l'article.
  const places = placesDesAppels(a.blocs);
  const attendus = ['haut', 'colonne', 'fin', 'barre'];
  if (places.milieu !== null || a.blocs.some((b) => b.type === 'cta')) attendus.push('milieu');
  if (places.haut === null) attendus.splice(attendus.indexOf('haut'), 1);
  // Les attributs d'un lien sortent dans l'ordre que React choisit : on lit chaque balise <a> a part.
  const liensAppel = [...html.matchAll(/<a\b[^>]*data-appel="([a-z]+)"[^>]*>/g)].map((m) => [m[1], m[0]]);
  for (const e of attendus) {
    verifier(
      `${chemin} porte l'appel « ${e} »`,
      liensAppel.some(([emp, balise]) => emp === e && balise.includes(`href="/signup?c=${a.slug}&amp;m=blog&amp;e=${e}"`)),
    );
  }
  for (const id of ancres(a.blocs).filter(Boolean)) verifier(`${chemin} porte l'ancre #${id}`, html.includes(`id="${id}"`));
  verifier(`${chemin} a son sommaire`, sommaire(a.blocs).every((e) => html.includes(`href="#${e.id}"`)));
  verifier(`${chemin} suit la lecture section par section`, html.includes('data-corps'));
  verifier(`${chemin} rappelle qu'il n'est pas un conseil individuel`, html.includes('Défenseur des droits'));
  for (const img of [a.couverture, ...a.blocs.filter((b) => b.type === 'image')]) {
    verifier(`${img.src} porte credit et licence (${a.slug})`, !!img.credit?.trim() && !!img.licence?.trim());
    if (img.src.startsWith('/')) verifier(`${img.src} est servie (${a.slug})`, existsSync(new URL(`public${img.src}`, RACINE)));
  }
}

/* ------------------------------------------------- liste, accueil, plan, flux */
console.log('\nliste, accueil, plan du site, flux');
{
  const liste = pages.get('/articles') ?? '';
  const accueil = pages.get('/') ?? '';
  for (const a of ARTICLES) verifier(`/articles liste ${a.slug}`, liste.includes(`href="/articles/${a.slug}"`));
  const recents = [...ARTICLES].sort((x, y) => y.publieLe.localeCompare(x.publieLe) || x.slug.localeCompare(y.slug)).slice(0, 3);
  for (const a of recents) verifier(`l'accueil montre l'article recent ${a.slug}`, accueil.includes(`href="/articles/${a.slug}"`));

  const plan = await (await lire('/sitemap.xml')).text();
  for (const a of ARTICLES) {
    verifier(
      `/sitemap.xml porte ${a.slug} et sa date`,
      new RegExp(`<loc>${SITE}/articles/${a.slug}</loc>\\s*<lastmod>${a.modifieLe}`).test(plan),
    );
  }
  for (const p of ['/eligibilite-examen-civique', '/tarifs', '/cours', ...RUBRIQUES_CHEMINS]) verifier(`/sitemap.xml porte ${p}`, plan.includes(`<loc>${SITE}${p}</loc>`));
  for (const ancienne of Object.keys(REDIRIGEES)) verifier(`/sitemap.xml ne porte plus ${ancienne}`, !plan.includes(`<loc>${SITE}${ancienne}</loc>`));
  const dates = new Set([...plan.matchAll(/<lastmod>([^<]{10})/g)].map((m) => m[1]));
  verifier('/sitemap.xml porte des lastmod varies (jamais la date du jour pour tout le monde)', dates.size >= 5, `${dates.size} date(s) distincte(s)`);
  verifier("/sitemap.xml ne porte que des adresses canoniques (www, sans parametre ni barre finale)", [...plan.matchAll(/<loc>([^<]+)<\/loc>/g)].every((m) => m[1] === SITE || (m[1].startsWith(`${SITE}/`) && !/[?#]|\/$/.test(m[1]))));

  const r = await lire('/feed.xml');
  const flux = await r.text();
  verifier('/feed.xml repond en XML', r.ok && /xml/.test(r.headers.get('content-type') ?? '') && flux.includes('<rss '));
  verifier('/feed.xml est en francais', flux.includes('<language>fr</language>'));
  for (const a of ARTICLES) verifier(`/feed.xml porte ${a.slug}`, flux.includes(`<link>${SITE}/articles/${a.slug}</link>`));

  const rn = await lire('/sitemap-news.xml');
  const news = await rn.text();
  verifier('/sitemap-news.xml repond en XML', rn.ok && /xml/.test(rn.headers.get('content-type') ?? '') && news.includes('xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"'));
  const maintenant = Date.now();
  for (const a of ARTICLES) {
    const present = news.includes(`<loc>${SITE}/articles/${a.slug}</loc>`);
    if (recentPourActualites(a, maintenant)) verifier(`/sitemap-news.xml porte l'article recent ${a.slug}`, present);
    else verifier(`/sitemap-news.xml ne porte pas ${a.slug}, publie il y a plus de 48 heures`, !present);
  }
  verifier('/sitemap-news.xml ne porte que des articles', [...news.matchAll(/<loc>([^<]+)<\/loc>/g)].every((m) => m[1].startsWith(`${SITE}/articles/`)));
}

/* --------------------------------------------------------------- mesure */
console.log('\nla mesure');
{
  const init = readFileSync(new URL('components/analytics/PostHogProvider.tsx', RACINE), 'utf8');
  const mesure = readFileSync(new URL('lib/mesure.ts', RACINE), 'utf8');
  const appel = readFileSync(new URL('components/articles/AppelInscription.tsx', RACINE), 'utf8');
  const lecture = readFileSync(new URL('components/articles/ArticleInteractif.tsx', RACINE), 'utf8');
  const inscription = readFileSync(new URL('app/signup/page.tsx', RACINE), 'utf8');
  verifier('sans consentement, PostHog tourne sans cookie', /cookieless_mode:\s*'always'/.test(init) && /analyticsConsent\s*\?/.test(init));
  verifier('sans consentement, pas de session replay', /disable_session_recording:\s*true/.test(init));
  verifier('les appels envoient cta_clic avec source et destination', /"cta_clic"/.test(appel) && /source: `\$\{slug\}-\$\{emplacement\}`/.test(appel));
  verifier('la lecture envoie section_atteinte', /"section_atteinte"/.test(lecture));
  verifier("lib/mesure ne parle a PostHog que s'il est charge", /__loaded/.test(mesure));
  verifier("l'inscription porte la campagne de l'article", /signup_completed', \{ method: 'email', \.\.\.campagneDeLAdresse\(\)/.test(inscription));
}

console.log(`\n${verifs - echecs}/${verifs} verifications passees` + (echecs ? `, ${echecs} en echec\n` : '\n'));
process.exitCode = echecs ? 1 : 0;
