/**
 * Le suivi d'indexation, chaque matin, par l'API URL Inspection de Search Console.
 *
 *   npm run seo:indexation                         inspecte jusqu'a 60 adresses, ecrit l'etat, propose les demandes du jour
 *   npm run seo:indexation -- --max 20             une autre limite pour cette fois
 *   npm run seo:indexation -- --sans-reseau        n'interroge pas Google : recalcule les propositions sur l'etat connu
 *   npm run seo:indexation -- --demandee <adresse> [<adresse> ...]
 *                                                  note que l'indexation de ces adresses a ete demandee aujourd'hui
 *
 * Ecrit `docs/seo/indexation.json` et imprime un resume markdown.
 *
 * ## Pourquoi
 *
 * Le 20/10/2026, Search Console comptait 51 pages indexees et 120 non
 * indexees. Le robot editorial (`docs/seo/ROBOT.md`, section 7) demande chaque
 * matin, dans Search Console via Chrome, l'indexation de la nouvelle page puis
 * d'adresses non indexees, dans la limite pratique de l'interface (10 par
 * jour). Ce script lui dit **lesquelles**, et garde la trace de ce que Google
 * en pense, adresse par adresse.
 *
 * ## Le quota, et pourquoi 60 par jour
 *
 * L'API URL Inspection accepte 2 000 inspections par jour et 600 par minute
 * pour une propriete. Le script en fait au plus
 * `REGLAGES.json > indexation_inspections_par_jour` (60), une toutes les
 * 1,2 seconde, en tournant sur tout le plan du site : d'abord les adresses
 * jamais inspectees, puis les articles retouches depuis leur derniere
 * inspection, puis les inspections les plus anciennes. Les quelque 170
 * adresses du site sont ainsi revues tous les trois jours, tres loin du quota.
 *
 * ## Les adresses proposees, dans cet ordre
 *
 * 1. **Les articles corriges, optimises ou fusionnes** dans les 14 derniers
 *    jours (lignes `corrige`, `optimise`, `fusionne` de `JOURNAL.md`), tant que
 *    Google ne les a pas explores depuis et qu'ils n'ont pas deja ete demandes
 *    apres la retouche : une correction que Google ne relit pas ne corrige rien.
 * 2. **Les adresses non indexees**, sauf celles demandees il y a moins de
 *    `indexation_jours_entre_demandes` jours : d'abord les pages publiees ces
 *    30 derniers jours, puis celles qui ont des impressions dans Search
 *    Console (dernier `docs/seo/donnees/*.json`), puis les plus recentes.
 * 3. Faute d'assez d'adresses connues, les adresses **jamais inspectees**
 *    (un jour de panne de l'API, par exemple), marquees comme telles : celles
 *    sans aucune impression d'abord (une page qui en a est indexee), puis les
 *    plus recentes.
 *
 * ## Il ne plante jamais le robot
 *
 * Une coupure reseau est reessayee (3 fois, 2, 4 puis 8 secondes) ; trois
 * echecs d'affilee arretent les inspections du jour. L'etat deja connu est
 * garde, l'erreur est notee dans `derniere_execution`, les propositions sont
 * calculees quand meme, et le script sort 0.
 *
 * Portee : `webmasters.readonly`. L'API ne sait pas **demander** une
 * indexation (elle n'existe que pour les offres d'emploi et les videos en
 * direct) : la demande reste un geste dans Search Console.
 */

import fs from 'node:fs';
import path from 'node:path';
import { registerHooks } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

import {
  FICHIER_INDEXATION,
  RACINE,
  SITE,
  UA_NAVIGATEUR,
  decaler,
  ecrireJson,
  heureParis,
  jetonGoogle,
  jourParis,
  lireEnv,
  lireJson,
  masquer,
  messageErreur,
  option,
  pause,
  positionnels,
  relatif,
  requeteAvecReprises,
  resumeIndexation,
} from './lib.mjs';

/* Le registre des articles, lu tel quel par Node (alias `@/`, imports sans extension). */
const RACINE_URL = pathToFileURL(RACINE).href;
registerHooks({
  resolve(specifier, context, nextResolve) {
    let s = specifier.startsWith('@/') ? RACINE_URL + specifier.slice(2) : specifier;
    const rel = s.startsWith('.') || s.startsWith('file:');
    if (rel && !/\.(?:[cm]?[jt]sx?|json)$/.test(s)) {
      const base = new URL(s, context.parentURL);
      const chemin = fileURLToPath(base);
      if (fs.existsSync(`${chemin}.ts`)) s = `${base.href}.ts`;
    }
    return nextResolve(s, context);
  },
});
const avertirNode = process.emitWarning;
process.emitWarning = (alerte, ...reste) => {
  if (/MODULE_TYPELESS_PACKAGE_JSON/.test(String(alerte)) || reste.some((r) => r?.code === 'MODULE_TYPELESS_PACKAGE_JSON' || r === 'MODULE_TYPELESS_PACKAGE_JSON')) return;
  avertirNode.call(process, alerte, ...reste);
};

const args = process.argv.slice(2);
const REGLAGES = lireJson(path.join(RACINE, 'docs', 'seo', 'REGLAGES.json'), {});
const MAX = Number(option(args, 'max', REGLAGES.indexation_inspections_par_jour ?? 60));
const PROPOSITIONS = REGLAGES.indexation_propositions ?? 8;
const JOURS_ENTRE_DEMANDES = REGLAGES.indexation_jours_entre_demandes ?? 7;
const AUJOURDHUI = jourParis();
const MAINTENANT = heureParis();

const etat = lireJson(FICHIER_INDEXATION, null) ?? {};
etat.adresses ??= {};

/** L'adresse complete d'un argument : `/articles/x` ou `https://www.../articles/x`. */
const complete = (a) => (a.startsWith('http') ? a.replace(/^https?:\/\/(www\.)?testciviquefrance\.fr/, SITE) : `${SITE}${a.startsWith('/') ? '' : '/'}${a}`).replace(/\/$/, '') || SITE;

function ecrire() {
  const trie = Object.fromEntries(Object.entries(etat.adresses).sort(([a], [b]) => a.localeCompare(b)));
  ecrireJson(FICHIER_INDEXATION, {
    note:
      "Tenu par `npm run seo:indexation` (scripts/seo/indexation.mjs) : l'etat de chaque adresse du plan du site selon l'API URL Inspection de Search Console, et les adresses a faire demander aujourd'hui. `demandeLe` est ecrit par `--demandee` quand le robot a demande l'indexation dans Search Console.",
    propriete: etat.propriete ?? null,
    mis_a_jour: MAINTENANT,
    derniere_execution: etat.derniere_execution ?? null,
    a_demander: etat.a_demander ?? [],
    a_signaler: etat.a_signaler ?? [],
    adresses: trie,
  });
}

/* ----------------------------------------------------- --demandee : noter, et rien d'autre */
if (args.includes('--demandee')) {
  const adresses = positionnels(args, ['max']).map(complete);
  for (const a of adresses) {
    etat.adresses[a] ??= {};
    etat.adresses[a].demandeLe = AUJOURDHUI;
  }
  etat.a_demander = (etat.a_demander ?? []).filter((p) => !adresses.includes(p.adresse));
  ecrire();
  console.log(`${adresses.length} demande(s) d'indexation notee(s) le ${AUJOURDHUI} dans ${relatif(FICHIER_INDEXATION)}.`);
  process.exit(0);
}

/* ------------------------------------------------------------ les adresses suivies */

const { ARTICLES } = await import(new URL('contenu/articles.ts', RACINE_URL).href);
const parChemin = new Map(ARTICLES.map((a) => [`/articles/${a.slug}`, a]));

/** Le plan du site en ligne ; a defaut, celui qu'on peut deduire du registre. */
async function adressesDuPlan() {
  try {
    const r = await requeteAvecReprises(`${SITE}/sitemap.xml`, { headers: { 'User-Agent': UA_NAVIGATEUR } }, { delaiMs: 20000 });
    if (r.ok) {
      const locs = [...(await r.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
      if (locs.length) return { adresses: locs, source: 'sitemap.xml en ligne' };
    }
  } catch {
    // Le registre prend le relais.
  }
  const { RUBRIQUES } = await import(new URL('contenu/rubriques.ts', RACINE_URL).href);
  return {
    adresses: [SITE, `${SITE}/articles`, ...RUBRIQUES.map((r) => `${SITE}/articles/rubrique/${r}`), ...ARTICLES.map((a) => `${SITE}/articles/${a.slug}`)],
    source: 'registre (plan du site injoignable)',
  };
}

const plan = await adressesDuPlan();
for (const a of plan.adresses) etat.adresses[a] ??= {};
// Une adresse sortie du plan (article fusionne, retire) n'est plus suivie.
for (const a of Object.keys(etat.adresses)) if (!plan.adresses.includes(a)) delete etat.adresses[a];

const chemin = (adresse) => adresse.replace(SITE, '') || '/';

/* ------------------------------------------------------------------ inspections */

/** L'ordre de passage : jamais inspectees (articles recents d'abord), retouchees depuis, puis les plus anciennes. */
function ordreDInspection() {
  const rang = (adresse) => {
    const l = etat.adresses[adresse];
    const art = parChemin.get(chemin(adresse));
    if (!l.inspecteLe) return [0, '', adresse];
    if (art && art.modifieLe > l.inspecteLe.slice(0, 10)) return [1, l.inspecteLe, adresse];
    return [2, l.inspecteLe, adresse];
  };
  return Object.keys(etat.adresses)
    .filter((a) => !etat.adresses[a].inspecteLe?.startsWith(AUJOURDHUI))
    .map((a) => ({ a, r: rang(a) }))
    .sort((x, y) => {
      if (x.r[0] !== y.r[0]) return x.r[0] - y.r[0];
      // Jamais inspectees : les articles d'abord, du plus recent au plus ancien.
      if (x.r[0] === 0) {
        const ax = parChemin.get(chemin(x.a));
        const ay = parChemin.get(chemin(y.a));
        if (!!ax !== !!ay) return ax ? -1 : 1;
        if (ax && ay && ax.publieLe !== ay.publieLe) return ay.publieLe.localeCompare(ax.publieLe);
        return x.a.localeCompare(y.a);
      }
      return x.r[1].localeCompare(y.r[1]) || x.a.localeCompare(y.a);
    })
    .map((x) => x.a);
}

async function inspecter() {
  if (args.includes('--sans-reseau')) return { inspectees: 0, note: 'sans reseau, a la demande' };
  const env = lireEnv();
  const site = env.GSC_SITE || `${SITE}/`;
  etat.propriete = site;
  let auth;
  try {
    auth = await jetonGoogle('https://www.googleapis.com/auth/webmasters.readonly');
  } catch (e) {
    return { inspectees: 0, erreur: `Google injoignable : ${messageErreur(e)}` };
  }
  if (auth.indisponible) return { inspectees: 0, erreur: auth.indisponible };

  const file = ordreDInspection().slice(0, MAX);
  let inspectees = 0;
  let echecsDAffilee = 0;
  let erreur;
  for (const adresse of file) {
    try {
      const r = await requeteAvecReprises(
        'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect',
        {
          method: 'POST',
          headers: { Authorization: `Bearer ${auth.jeton}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ inspectionUrl: adresse, siteUrl: site, languageCode: 'fr-FR' }),
        },
        { delaiMs: 30000 },
      );
      const texte = await r.text();
      if (r.status === 429) {
        erreur = 'quota de l\'API atteint (429) : inspections arretees pour aujourd\'hui';
        break;
      }
      if (r.status === 403 || r.status === 401) {
        erreur = `acces refuse a ${site} (HTTP ${r.status}) : ${masquer(texte).slice(0, 200)}`;
        break;
      }
      if (!r.ok) throw new Error(`HTTP ${r.status} : ${texte.slice(0, 200)}`);
      const res = JSON.parse(texte).inspectionResult?.indexStatusResult ?? {};
      etat.adresses[adresse] = {
        ...etat.adresses[adresse],
        verdict: res.verdict ?? null,
        coverageState: res.coverageState ?? null,
        indexingState: res.indexingState ?? null,
        pageFetchState: res.pageFetchState ?? null,
        robotsTxtState: res.robotsTxtState ?? null,
        derniereExploration: res.lastCrawlTime ?? null,
        canoniqueGoogle: res.googleCanonical ?? null,
        canoniqueDeclaree: res.userCanonical ?? null,
        inspecteLe: MAINTENANT,
      };
      inspectees += 1;
      echecsDAffilee = 0;
    } catch (e) {
      echecsDAffilee += 1;
      erreur = messageErreur(e);
      if (echecsDAffilee >= 3) {
        erreur = `trois echecs d'affilee, inspections arretees : ${erreur}`;
        break;
      }
    }
    // 600 par minute autorisees : une toutes les 1,2 s en fait 50.
    await pause(1200);
  }
  return { inspectees, ...(erreur ? { erreur } : {}) };
}

/* -------------------------------------------------------------------- propositions */

/** Les impressions par chemin, dans le dernier fichier de `seo:donnees` qui en a. */
function impressions() {
  const dossier = path.join(RACINE, 'docs', 'seo', 'donnees');
  const fichiers = fs.existsSync(dossier) ? fs.readdirSync(dossier).filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f)).sort().reverse() : [];
  for (const f of fichiers) {
    const pages = lireJson(path.join(dossier, f), {})?.gsc?.pages;
    if (Array.isArray(pages) && pages.length) return new Map(pages.map((p) => [p.page, p.impressions ?? 0]));
  }
  return new Map();
}

/** Les articles retouches dans les 14 derniers jours, selon le journal : chemin vers date de la retouche. */
function retouches() {
  const journal = path.join(RACINE, 'docs', 'seo', 'JOURNAL.md');
  const depuis = decaler(AUJOURDHUI, -14);
  const sortie = new Map();
  if (!fs.existsSync(journal)) return sortie;
  for (const ligne of fs.readFileSync(journal, 'utf8').split(/\r?\n/)) {
    const m = ligne.match(/^(\d{4}-\d{2}-\d{2}) \| (corrige|optimise|fusionne) \| ([a-z0-9-]+)/);
    if (!m || m[1] < depuis) continue;
    const c = `/articles/${m[3]}`;
    // Une fusion se lit « ancien vers nouveau » : c'est l'article qui reste qu'on fait relire.
    const cible = ligne.match(/vers ([a-z0-9-]+)/)?.[1];
    const garde = m[2] === 'fusionne' && cible ? `/articles/${cible}` : c;
    if (parChemin.has(garde) && (!sortie.has(garde) || sortie.get(garde) < m[1])) sortie.set(garde, m[1]);
  }
  return sortie;
}

/**
 * Une adresse que redemander ne reglerait pas : une redirection, un `noindex`,
 * ou une canonique declaree vers une autre adresse. C'est un probleme de
 * code, que le robot signale dans son rapport au lieu de la demander. Une
 * page « en double » sans canonique declaree, elle, reste proposee : Google
 * l'a souvent exploree avant que la page porte sa canonique (avant la
 * migration du 20/10/2026), et une nouvelle exploration la corrige.
 */
function aSignaler(adresse, l) {
  if (/redirection|noindex/i.test(l.coverageState ?? '')) return true;
  return !!l.canoniqueDeclaree && l.canoniqueDeclaree !== adresse;
}

function signalees() {
  return Object.entries(etat.adresses)
    .filter(([a, l]) => l.inspecteLe && l.verdict !== 'PASS' && aSignaler(a, l))
    .map(([adresse, l]) => ({ adresse, raison: `${l.coverageState ?? l.verdict}, canonique declaree ${l.canoniqueDeclaree ?? 'aucune'}` }));
}

function propositions() {
  const impr = impressions();
  const retouchees = retouches();
  const recent = decaler(AUJOURDHUI, -30);
  const demandeeRecemment = (l) => l.demandeLe && l.demandeLe > decaler(AUJOURDHUI, -JOURS_ENTRE_DEMANDES);
  const choix = [];
  const pris = new Set();
  const ajouter = (adresse, raison) => {
    if (pris.has(adresse) || choix.length >= PROPOSITIONS) return;
    pris.add(adresse);
    choix.push({ adresse, raison });
  };

  // 1. Corriges, optimises, fusionnes : tant que Google ne les a pas relus ni qu'on ne les a demandes depuis.
  for (const [c, le] of [...retouchees].sort((a, b) => b[1].localeCompare(a[1]))) {
    const adresse = `${SITE}${c}`;
    const l = etat.adresses[adresse] ?? {};
    const relu = l.derniereExploration && l.derniereExploration.slice(0, 10) >= le;
    const demande = l.demandeLe && l.demandeLe >= le;
    if (!relu && !demande) ajouter(adresse, `retouche le ${le} (journal), pas encore relue par Google`);
  }

  // 2. Non indexees, les plus utiles d'abord.
  const cle = (adresse) => {
    const art = parChemin.get(chemin(adresse));
    const nouveau = art ? art.publieLe >= recent : false;
    return { nouveau, impressions: impr.get(chemin(adresse)) ?? 0, date: art?.publieLe ?? '0000-00-00', art };
  };
  const nonIndexees = Object.entries(etat.adresses)
    .filter(([a, l]) => l.inspecteLe && l.verdict !== 'PASS' && !demandeeRecemment(l) && !aSignaler(a, l))
    .map(([a, l]) => ({ a, l, ...cle(a) }))
    .sort((x, y) => Number(y.nouveau) - Number(x.nouveau) || y.impressions - x.impressions || y.date.localeCompare(x.date) || x.a.localeCompare(y.a));
  for (const x of nonIndexees) {
    const autreCanonique = x.l.canoniqueGoogle && x.l.canoniqueGoogle !== x.a ? `canonique choisie par Google : ${x.l.canoniqueGoogle}, explore le ${x.l.derniereExploration?.slice(0, 10) ?? '?'}` : null;
    const pourquoi = [x.l.coverageState ?? x.l.verdict, autreCanonique, x.nouveau ? `publie le ${x.date}` : null, x.impressions ? `${x.impressions} impressions` : null].filter(Boolean).join(', ');
    ajouter(x.a, pourquoi);
  }

  // 3. A defaut, les jamais inspectees. Une page qui a des impressions est forcement indexee :
  //    celles qui n'en ont aucune passent d'abord, puis les plus recentes (une page de rubrique
  //    compte comme neuve).
  const inconnues = Object.entries(etat.adresses)
    .filter(([, l]) => !l.inspecteLe && !demandeeRecemment(l))
    .map(([a]) => {
      const c = cle(a);
      return { a, ...c, date: c.art ? c.date : chemin(a).startsWith('/articles/rubrique/') ? AUJOURDHUI : '0000-00-00' };
    })
    .sort((x, y) => Number(x.impressions > 0) - Number(y.impressions > 0) || y.date.localeCompare(x.date) || x.a.localeCompare(y.a));
  for (const x of inconnues) ajouter(x.a, `jamais inspectee, etat inconnu, ${x.impressions ? `${x.impressions} impressions` : 'aucune impression connue'}`);
  return choix;
}

/* ------------------------------------------------------------------------- main */

let resultat;
try {
  resultat = await inspecter();
} catch (e) {
  resultat = { inspectees: 0, erreur: messageErreur(e) };
}
// Sans reseau, rien n'a ete inspecte : la trace de la derniere vraie execution reste.
if (!args.includes('--sans-reseau') || !etat.derniere_execution) {
  etat.derniere_execution = { le: MAINTENANT, inspectees: resultat.inspectees, plan: plan.source, ...(resultat.erreur ? { erreur: resultat.erreur } : {}) };
}
try {
  etat.a_demander = propositions();
  etat.a_signaler = signalees();
} catch (e) {
  etat.a_demander = [];
  etat.derniere_execution.erreur = `${etat.derniere_execution.erreur ? `${etat.derniere_execution.erreur} ; ` : ''}propositions : ${messageErreur(e)}`;
}
ecrire();

console.log(`# Indexation du ${AUJOURDHUI}`);
console.log(`Propriete ${etat.propriete ?? '?'}, plan du site lu depuis : ${plan.source}. Fichier : ${relatif(FICHIER_INDEXATION)}`);
console.log(masquer(resumeIndexation(lireJson(FICHIER_INDEXATION, null)).join('\n')));
process.exitCode = 0;
