/**
 * Rassemble les chiffres du robot SEO du matin.
 *
 *   node scripts/seo/donnees.mjs              28 derniers jours complets
 *   node scripts/seo/donnees.mjs --jours 56   une autre fenetre
 *
 * Ecrit `docs/seo/donnees/AAAA-MM-JJ.json` (jour de Paris du lancement) et
 * imprime un resume markdown court sur la sortie standard.
 *
 * Porte depuis `CosmetWiki/scripts/seo/donnees.mjs` (Cosme Check, lui-meme venu
 * de MemoryPilot et de RevealChat) : memes cles de premier niveau
 * (`posthog`, `supabase`, `gsc`, `articles`, `correlations`, `erreurs`),
 * pour que la doctrine du robot se lise de la meme facon sur les quatre sites.
 * Test Civique n'a pas d'app mobile : la place d'App Store Connect est prise
 * par **Stripe** (`stripe`), et l'entonnoir va jusqu'a l'inscription et au
 * paiement sur le site lui-meme.
 *
 * ## Ce qui est lu, et pourquoi chaque source
 *
 * - **PostHog** (projet 112119, UE) : ce que font les visiteurs, page par page
 *   (vues, profondeur de lecture, sections atteintes, clics sur les appels,
 *   sources de trafic dont les assistants IA), et l'entonnoir du site
 *   (`signup_form_started`, `signup_completed` qui porte la campagne d'un
 *   article, `pricing_page_viewed`, `checkout_started`, `exam_started`).
 *   ⚠️ Avant le 20/10/2026, PostHog ne mesurait rien sans consentement aux
 *   cookies : les series d'avant sont sous-estimees, la base et Stripe font foi.
 * - **Supabase** (schema `public`, les requetes de `C:\Projet\Matinale\collecte\testcivique.mjs`) :
 *   inscriptions (`profiles`), abonnes, ventes (`revenue_events`, la source de
 *   l'admin), examens blancs, entrainements. Des agregats seulement.
 * - **Stripe**, en lecture seule (GET) : encaissements, frais, remboursements,
 *   abonnements actifs.
 * - **Search Console** : ce que Google montre de nous, et sur quelles
 *   requetes. La propriete attendue est `sc-domain:testciviquefrance.fr` ; le
 *   script prend toute propriete testciviquefrance.fr que le compte de service
 *   voit, et dit quoi faire s'il n'en voit aucune.
 *
 * ## La fenetre s'arrete hier
 *
 * Le robot tourne le matin : la journee en cours n'a que quelques heures, et
 * la compter ferait croire a une chute chaque jour.
 *
 * ## Une source qui tombe n'arrete pas les autres
 *
 * Chaque source est lue dans son propre essai. Une panne est notee dans
 * `erreurs` ou `indisponible`, et le fichier est quand meme ecrit. Le script
 * sort 0 tant qu'il a ecrit le fichier.
 *
 * ## Lecture seule, garantie par les services
 *
 * La cle de service Supabase et la cle Stripe peuvent ecrire : on ne leur
 * envoie que des **GET**. PostgREST execute tout GET dans une transaction en
 * lecture seule.
 *
 * ## Aucune donnee personnelle ne sort
 *
 * Les comptes se comptent, ils ne se lisent pas : chaque decompte est un GET
 * `limit=0` dont seul l'en-tete `Content-Range` est lu. Les ventes sont lues
 * sans aucune colonne qui designe une personne (type, produit, montant,
 * devise, statut, date). Aucune adresse, aucun nom, aucun identifiant ne part
 * dans `docs/`, suivi par git.
 */

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {
  RACINE,
  arrondi,
  cheminCentral,
  decaler,
  declarerSecret,
  ecrireJson,
  heureParis,
  jourParis,
  joursEntre,
  lireEnv,
  lireJson,
  masquer,
  messageErreur,
  minuitParis,
  option,
  relatif,
  requete,
} from './lib.mjs';

const DOSSIER = path.join(RACINE, 'docs', 'seo', 'donnees');

/* Seuils de lecture des donnees, regroupes ici pour etre retouches d'un coup. */

/**
 * Seuls les evenements du site en production comptent. Le projet PostHog
 * recevra aussi ceux du developpement local et des preversions Vercel : sans
 * ce filtre, une seance de test ferait croire au robot qu'un article marche.
 */
const HOTES = ['testciviquefrance.fr', 'www.testciviquefrance.fr'];
/** Sous ce nombre de jours ayant au moins un clic CTA, une correlation ne veut rien dire. */
const JOURS_MIN_CORRELATION = 14;
const DECALAGES = [0, 1, 2, 3];
/** « Vues sans clic » de la Search Console : impressions minimales, ctr maximal, plage de position. */
const SANS_CLIC = { impressionsMin: 10, ctrMax: 0.02, positionMin: 5, positionMax: 50 };
/** Requetes Supabase menees de front : assez pour aller vite, pas assez pour saturer PostgREST. */
const PARALLELE_SUPABASE = 8;

/** Une adresse d'article : `/articles/<slug>`, sans barre finale. La liste (`/articles`) n'en est pas une. */
// Le groupe vide garde la forme des robots jumeaux (ou il porte `en/`).
const ARTICLE = /^\/()articles\/([^/?#]+)$/;
const BLOG = /^\/articles(\/|$)/;

/**
 * Une destination de `cta_clic` qui mene a l'inscription. Les appels des
 * articles envoient `inscription` (`components/articles/AppelInscription.tsx`) ;
 * on reconnait aussi les formes plausibles d'un renommage (signup, essai).
 * Le nom `clics_magasin` est garde pour la forme commune aux quatre robots :
 * ici, il compte les clics vers l'inscription.
 */
const MAGASIN = /inscri|signup|essai|essayer|test|tarif|checkout|paiement/i;

/** Les assistants IA qui transmettent leur domaine quand on clique sur une source citee. */
const IA =
  /(^|\.)(chatgpt\.com|openai\.com|perplexity\.ai|gemini\.google\.com|bard\.google\.com|claude\.ai|copilot\.microsoft\.com|you\.com|phind\.com|meta\.ai|mistral\.ai|chat\.mistral\.ai|deepseek\.com|grok\.com|x\.ai)$/;
const MOTEURS =
  /(^|\.)(google\.[a-z.]+|bing\.com|duckduckgo\.com|yahoo\.[a-z.]+|ecosia\.org|qwant\.com|yandex\.[a-z.]+|baidu\.com|search\.brave\.com|startpage\.com|lilo\.org|aol\.com|naver\.com|seznam\.cz)$/;
const RESEAUX =
  /(^|\.)(facebook\.com|fb\.com|instagram\.com|t\.co|twitter\.com|x\.com|linkedin\.com|lnkd\.in|reddit\.com|pinterest\.[a-z.]+|pin\.it|tiktok\.com|youtube\.com|youtu\.be|threads\.net|threads\.com|snapchat\.com|whatsapp\.com|wa\.me|t\.me|telegram\.org|bsky\.app|quora\.com|medium\.com|discord\.com|tumblr\.com)$/;

/** Range un domaine referent dans une famille. L'ordre compte : gemini.google.com est une IA, pas un moteur. */
function familleSource(domaine) {
  if (!domaine || domaine === '$direct') return 'direct';
  if (HOTES.some((h) => domaine === h)) return 'interne';
  if (IA.test(domaine)) return 'ia';
  if (MOTEURS.test(domaine)) return 'moteur';
  if (RESEAUX.test(domaine)) return 'reseau';
  return 'autre';
}

/**
 * L'entonnoir du site, lu dans le meme projet PostHog, sur les hotes du site.
 * `signup_completed` porte `campagne` (le slug de l'article) et
 * `emplacement` quand l'inscription vient d'un appel d'article.
 */
const EVENEMENTS_APP = {
  inscriptions_commencees: 'signup_form_started',
  inscriptions_app: 'signup_completed',
  page_tarifs: 'pricing_page_viewed',
  paiements_commences: 'checkout_started',
  examens_commences: 'exam_started',
  examens_termines: 'exam_completed',
};

const args = process.argv.slice(2);
const nJours = Number.parseInt(option(args, 'jours', '28'), 10);
if (!Number.isInteger(nJours) || nJours < 1 || nJours > 365) {
  console.error('--jours attend un entier entre 1 et 365');
  process.exit(2);
}

const AUJOURDHUI = jourParis();
const FIN = decaler(AUJOURDHUI, -1);
const DEBUT = decaler(FIN, -(nJours - 1));
const JOURS = joursEntre(DEBUT, FIN);
/** Premier jour des 7 derniers : `vues_7j` se compte depuis lui, `vues_1j` sur FIN seul. */
const DEBUT_7J = JOURS[Math.max(0, JOURS.length - 7)];
const env = lireEnv();
const erreurs = [];

function noterErreur(source, e) {
  erreurs.push({ source, message: messageErreur(e) });
}

function exiger(noms) {
  const manquantes = noms.filter((n) => !env[n]);
  if (manquantes.length) throw new Error(`variables absentes du .env central : ${manquantes.join(', ')}`);
}

function ajouter(objet, cle, n = 1) {
  objet[cle] = (objet[cle] ?? 0) + n;
}

function trierObjet(objet, max = Infinity) {
  return Object.fromEntries(
    Object.entries(objet)
      .sort((a, b) => b[1] - a[1])
      .slice(0, max),
  );
}

function somme(liste, cle) {
  return liste.reduce((s, x) => s + (x[cle] ?? 0), 0);
}

/** Un chemin sans barre finale (sauf la racine) : `/articles/x/` et `/articles/x` sont la meme page. */
function normaliserChemin(chemin) {
  const c = String(chemin ?? '').split(/[?#]/)[0];
  if (!c) return '(inconnu)';
  return c.length > 1 ? c.replace(/\/+$/, '') : c;
}

/** Lance des taches asynchrones `n` par `n`, dans l'ordre, et rend leurs resultats dans l'ordre. */
async function enParallele(taches, n) {
  const resultats = new Array(taches.length);
  let suivant = 0;
  const ouvrier = async () => {
    while (suivant < taches.length) {
      const k = suivant;
      suivant += 1;
      resultats[k] = await taches[k]();
    }
  };
  await Promise.all(Array.from({ length: Math.min(n, taches.length) }, ouvrier));
  return resultats;
}

/* ======================================================= Catalogue du blog */

/**
 * Les articles publies : un fichier par article dans `contenu/articles/`, son
 * slug dans `slug: "..."`. On lit le texte plutot que d'importer (alias `@/`
 * que Node ne resout pas seul). Un article a zero vue est une information :
 * le robot doit le voir pour decider de le retravailler.
 */
function catalogueArticles() {
  const note = [];
  const liste = [];
  const dossier = path.join(RACINE, 'contenu', 'articles');
  try {
    for (const nom of fs.readdirSync(dossier).filter((x) => x.endsWith('.ts')).sort()) {
      const texte = fs.readFileSync(path.join(dossier, nom), 'utf8');
      const slug = texte.match(/^\s*slug:\s*['"]([a-z0-9-]+)['"]/m)?.[1];
      if (slug) liste.push({ cle: slug, fr: slug, en: null });
      else note.push(`${nom} : slug illisible`);
    }
  } catch (e) {
    note.push(`contenu/articles illisible : ${messageErreur(e)}`);
  }
  return { liste, note };
}

/* ================================================================ PostHog */

async function hogql(requeteHog) {
  const reponse = await requete(
    `${(env.POSTHOG_HOST || 'https://eu.posthog.com').replace(/\/$/, '')}/api/projects/${env.POSTHOG_PROJECT_ID}/query/`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.POSTHOG_PERSONAL_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: { kind: 'HogQLQuery', query: requeteHog } }),
    },
    90000,
  );
  const texte = await reponse.text();
  if (!reponse.ok) throw new Error(`PostHog ${reponse.status} : ${texte.slice(0, 300)}`);
  const corps = JSON.parse(texte);
  if (corps.error) throw new Error(`PostHog : ${String(corps.error).slice(0, 300)}`);
  return (corps.results ?? []).map((ligne) =>
    Object.fromEntries(corps.columns.map((c, i) => [c, ligne[i]])),
  );
}

async function lirePosthog() {
  exiger(['POSTHOG_PROJECT_ID', 'POSTHOG_PERSONAL_API_KEY']);

  /*
    Bornes en heure de Paris, posees sur `timestamp` lui-meme : c'est la colonne
    de partition, la filtrer directement evite de balayer tout l'historique.
    `LIMIT` est explicite partout, HogQL coupe sinon a 100 lignes sans le dire.
  */
  const bornes =
    `timestamp >= toDateTime('${DEBUT} 00:00:00', 'Europe/Paris') ` +
    `AND timestamp < toDateTime('${decaler(FIN, 1)} 00:00:00', 'Europe/Paris')`;
  const periode = `${bornes} AND properties.$host IN (${HOTES.map((h) => `'${h}'`).join(', ')})`;
  const jour = `toString(toDate(toTimeZone(timestamp, 'Europe/Paris')))`;

  /*
    Le diagnostic d'abord, tous hotes confondus. La mesure du site est branchee
    en meme temps que ce script : tant que rien n'arrive de testciviquefrance.fr, on
    dit pourquoi (rien du tout, ou seulement localhost et les preversions) au
    lieu de rendre une liste vide qui ressemble a un site sans visiteurs.
  */
  const diagnostic = await hogql(`
    SELECT coalesce(nullIf(toString(properties.$host), ''), '(sans hote)') AS h, event AS e, count() AS n
    FROM events WHERE ${bornes}
    GROUP BY h, e ORDER BY n DESC LIMIT 500`);
  const hotesVus = {};
  const evenementsSite = {};
  for (const l of diagnostic) {
    ajouter(hotesVus, l.h, Number(l.n));
    if (HOTES.includes(l.h)) ajouter(evenementsSite, l.e, Number(l.n));
  }
  const totalSite = Object.values(evenementsSite).reduce((s, n) => s + n, 0);

  /*
    Les requetes tournent meme sur un projet vide : elles rendent des listes
    vides en une seconde, et une faute de syntaxe se voit des aujourd'hui au
    lieu du premier matin ou la mesure arrivera.
  */
  const vide = totalSite === 0;
  const [vues, lecture, clics, sections, serie, serieClics, referents, app] = await Promise.all([
    /*
      Visiteurs : PostHog peut recalculer l'identifiant chaque jour (mode
      sans cookie). Un visiteur n'existe donc qu'a l'echelle d'une journee,
      d'ou les uniques par jour additionnes, et le nom « visiteurs_jour »
      qui le rappelle.
    */
    hogql(`
      SELECT p, sum(v) AS vues, sumIf(v, j >= '${DEBUT_7J}') AS vues_7j, sumIf(v, j = '${FIN}') AS vues_1j,
        sum(u) AS visiteurs_jour FROM (
        SELECT properties.$pathname AS p, ${jour} AS j, count() AS v, uniq(distinct_id) AS u
        FROM events WHERE event = '$pageview' AND ${periode}
        GROUP BY p, j
      ) GROUP BY p ORDER BY vues DESC LIMIT 2000`),
    /*
      La profondeur d'une page arrive avec l'evenement suivant : la sortie
      (`$pageleave`) ou, en navigation interne, la vue d'apres. Les deux
      portent `$prev_pageview_*` pour la page quittee, chacune une seule
      fois. posthog-js l'exprime entre 0 et 1.
    */
    hogql(`
      SELECT properties.$prev_pageview_pathname AS p, count() AS n,
        median(toFloat(properties.$prev_pageview_max_scroll_percentage)) AS defil,
        median(toFloat(properties.$prev_pageview_duration)) AS duree
      FROM events
      WHERE event IN ('$pageleave', '$pageview') AND properties.$prev_pageview_pathname IS NOT NULL AND ${periode}
      GROUP BY p LIMIT 2000`),
    hogql(`
      SELECT properties.$pathname AS p, properties.source AS s, properties.destination AS d,
        countIf(${jour} >= '${DEBUT_7J}') AS n7, count() AS n
      FROM events WHERE event = 'cta_clic' AND ${periode}
      GROUP BY p, s, d ORDER BY n DESC LIMIT 5000`),
    /*
      `section_atteinte` porte {slug, section, index, total} (`src/lib/mesure.ts`) :
      l'index, a partir de 1, dit jusqu'ou on lit, une fois par visite. Le nom
      de la section entre dans le regroupement : si l'index venait a manquer
      (`rang` chez RevealChat, d'ou le repli), chaque section resterait une
      ligne a elle au lieu de se fondre en une seule.
    */
    hogql(`
      SELECT properties.slug AS g, properties.$pathname AS p,
        coalesce(toInt(properties.index), toInt(properties.rang)) AS r,
        toString(properties.section) AS section, max(toInt(properties.total)) AS total, count() AS n
      FROM events WHERE event = 'section_atteinte' AND ${periode}
      GROUP BY g, p, r, section ORDER BY g, p, r LIMIT 10000`),
    hogql(`
      SELECT ${jour} AS j, countIf(event = '$pageview') AS vues,
        countIf(event = '$pageview' AND properties.$pathname LIKE '/articles%') AS vues_blog,
        uniqIf(distinct_id, event = '$pageview') AS visiteurs,
        count() AS evenements
      FROM events WHERE ${periode}
      GROUP BY j ORDER BY j LIMIT 1000`),
    // Les clics par jour et par destination : le tri « magasin ou pas » se fait en JavaScript, au meme endroit que partout.
    hogql(`
      SELECT ${jour} AS j, properties.destination AS d, count() AS n
      FROM events WHERE event = 'cta_clic' AND ${periode}
      GROUP BY j, d LIMIT 5000`),
    hogql(`
      SELECT properties.$pathname AS p,
        coalesce(nullIf(toString(properties.$referring_domain), ''), '$direct') AS r,
        coalesce(nullIf(toString(properties.utm_source), ''), '') AS u, count() AS n
      FROM events WHERE event = '$pageview' AND ${periode}
      GROUP BY p, r, u ORDER BY n DESC LIMIT 5000`),
    /* L'entonnoir du site (`EVENEMENTS_APP`), sur les hotes du site. */
    hogql(`
      SELECT ${jour} AS j, event AS e, count() AS n
      FROM events WHERE ${periode} AND event IN (${Object.values(EVENEMENTS_APP).map((e) => `'${e}'`).join(', ')})
      GROUP BY j, e LIMIT 5000`),
  ]);
  /* Les inscriptions venues d'un article : `signup_completed` avec `campagne` et `emplacement`. */
  const inscriptionsArticles = await hogql(`
    SELECT toString(properties.campagne) AS c, toString(properties.emplacement) AS e, count() AS n
    FROM events WHERE event = 'signup_completed' AND properties.campagne IS NOT NULL AND ${periode}
    GROUP BY c, e ORDER BY n DESC LIMIT 500`);
  const appParJour = new Map();
  for (const l of app) {
    const cle = Object.entries(EVENEMENTS_APP).find(([, e]) => e === l.e)?.[0];
    if (!cle) continue;
    const j = appParJour.get(l.j) ?? {};
    j[cle] = (j[cle] ?? 0) + Number(l.n);
    appParJour.set(l.j, j);
  }
  const serieApp = JOURS.map((j) => {
    const l = appParJour.get(j) ?? {};
    return { jour: j, ...Object.fromEntries(Object.keys(EVENEMENTS_APP).map((k) => [k, l[k] ?? 0])) };
  });
  const totauxApp = Object.fromEntries(
    Object.keys(EVENEMENTS_APP).map((k) => [k, serieApp.reduce((s, x) => s + x[k], 0)]),
  );
  const totauxApp7j = Object.fromEntries(
    Object.keys(EVENEMENTS_APP).map((k) => [k, serieApp.filter((x) => x.jour >= DEBUT_7J).reduce((s, x) => s + x[k], 0)]),
  );

  const pages = new Map();
  const page = (chemin) => {
    const c = normaliserChemin(chemin);
    if (!pages.has(c)) {
      const m = c.match(ARTICLE);
      pages.set(c, {
        chemin: c,
        langue: c === '/en' || c.startsWith('/en/') ? 'en' : 'fr',
        article: m ? m[2] : null,
        vues: 0,
        vues_7j: 0,
        vues_1j: 0,
        visiteurs_jour: 0,
        defilement_median_pct: null,
        duree_mediane_s: null,
        sorties_mesurees: 0,
        clics_cta: 0,
        clics_cta_7j: 0,
        clics_magasin: 0,
        taux_cta: null,
        taux_magasin: null,
        clics_par_source: {},
        clics_par_emplacement: {},
        clics_par_destination: {},
        referents: {},
        sources: {},
        utm_source: {},
        lecture: null,
      });
    }
    return pages.get(c);
  };

  for (const l of vues) {
    const p = page(l.p);
    p.vues += Number(l.vues);
    p.vues_7j += Number(l.vues_7j);
    p.vues_1j += Number(l.vues_1j);
    p.visiteurs_jour += Number(l.visiteurs_jour);
  }
  for (const l of lecture) {
    const p = page(l.p);
    p.sorties_mesurees += Number(l.n);
    if (l.defil !== null && Number.isFinite(Number(l.defil))) {
      p.defilement_median_pct = arrondi(Number(l.defil) * 100, 0);
    }
    if (l.duree !== null && Number.isFinite(Number(l.duree))) p.duree_mediane_s = arrondi(Number(l.duree), 0);
  }

  /*
    La position d'un appel dans un article. `AppelTelecharger` envoie
    `source = <slug>-<emplacement>` (haut, milieu, colonne, fin, barre) : on
    retire le slug de la page pour comparer les positions d'un article a
    l'autre. Un slug contient lui-meme des tirets, d'ou le retrait du slug
    connu plutot qu'un decoupage au dernier tiret, qui ne sert qu'en repli.
  */
  const emplacement = (source, slug) => {
    const s = String(source ?? '(sans source)');
    if (slug && s.startsWith(`${slug}-`)) return s.slice(slug.length + 1);
    const m = s.match(/^(?:article[-_:])?.+[-_:]([a-z0-9]+)$/i);
    return m ? m[1] : s;
  };
  const emplacementsArticles = {};
  const emplacementsArticlesMagasin = {};
  for (const l of clics) {
    const p = page(l.p);
    const n = Number(l.n);
    const magasin = MAGASIN.test(String(l.d ?? ''));
    p.clics_cta += n;
    p.clics_cta_7j += Number(l.n7);
    if (magasin) p.clics_magasin += n;
    ajouter(p.clics_par_source, l.s ?? '(sans source)', n);
    ajouter(p.clics_par_destination, l.d ?? '(sans destination)', n);
    if (p.article) {
      const e = emplacement(l.s, p.article);
      ajouter(p.clics_par_emplacement, e, n);
      ajouter(emplacementsArticles, e, n);
      if (magasin) ajouter(emplacementsArticlesMagasin, e, n);
    }
  }
  for (const l of referents) {
    const p = page(l.p);
    const n = Number(l.n);
    ajouter(p.referents, l.r, n);
    ajouter(p.sources, familleSource(l.r), n);
    if (l.u) ajouter(p.utm_source, l.u, n);
  }

  for (const l of sections) {
    const p = page(l.p);
    if (!p.lecture) p.lecture = { slug: l.g ?? p.article, sections: null, sections_vues: 0, rangs: [] };
    p.lecture.sections = Math.max(p.lecture.sections ?? 0, Number(l.total) || 0) || null;
    p.lecture.rangs.push({ index: l.r === null ? null : Number(l.r), section: l.section, visites: Number(l.n) });
  }

  const referentsSite = {};
  const sourcesSite = {};
  const utmSite = {};
  /*
    La mesure du GEO : les visites dont le site d'origine est un moteur de
    reponse. ChatGPT, Perplexity, Gemini, Claude et Copilot transmettent leur
    domaine quand on clique sur une source citee ; c'est la seule trace qu'on
    ait d'etre cite.
  */
  const visitesIa = (refs, liste) => {
    const parMoteur = {};
    for (const [domaine, n] of Object.entries(refs)) if (IA.test(domaine)) ajouter(parMoteur, domaine, n);
    const parPage = liste
      .map((p) => ({
        chemin: p.chemin,
        visites: Object.entries(p.referents)
          .filter(([d]) => IA.test(d))
          .reduce((t, [, n]) => t + n, 0),
      }))
      .filter((x) => x.visites > 0)
      .sort((x, y) => y.visites - x.visites)
      .slice(0, 10);
    return { total: Object.values(parMoteur).reduce((t, n) => t + n, 0), par_moteur: trierObjet(parMoteur), pages: parPage };
  };
  const listePages = [...pages.values()].map((p) => {
    p.taux_cta = p.vues > 0 ? arrondi(p.clics_cta / p.vues, 4) : null;
    p.taux_magasin = p.vues > 0 ? arrondi(p.clics_magasin / p.vues, 4) : null;
    for (const [domaine, n] of Object.entries(p.referents)) ajouter(referentsSite, domaine, n);
    for (const [famille, n] of Object.entries(p.sources)) ajouter(sourcesSite, famille, n);
    for (const [u, n] of Object.entries(p.utm_source)) ajouter(utmSite, u, n);
    p.referents = trierObjet(p.referents, 10);
    p.sources = trierObjet(p.sources);
    p.utm_source = trierObjet(p.utm_source, 10);
    p.clics_par_source = trierObjet(p.clics_par_source);
    p.clics_par_emplacement = trierObjet(p.clics_par_emplacement);
    p.clics_par_destination = trierObjet(p.clics_par_destination);
    if (p.lecture) {
      // L'index peut partir de 0 ou de 1 selon le branchement : on trie et on rapporte au premier vu.
      p.lecture.rangs.sort((a, b) => (a.index ?? 0) - (b.index ?? 0));
      p.lecture.sections_vues = p.lecture.rangs.length;
      const premier = p.lecture.rangs[0]?.visites ?? 0;
      for (const r of p.lecture.rangs) {
        r.part_des_vues = p.vues > 0 ? arrondi(r.visites / p.vues, 3) : null;
        r.part_du_premier = premier > 0 ? arrondi(r.visites / premier, 3) : null;
      }
    }
    return p;
  });
  listePages.sort((a, b) => b.vues - a.vues || b.clics_cta - a.clics_cta);

  /*
    Les jours d'avant la premiere mesure sont `null`, pas 0 : un zero dirait
    « personne n'est venu » alors que personne ne comptait encore, et il
    tirerait les correlations vers un faux signal.
  */
  const parJour = new Map(serie.map((l) => [l.j, l]));
  const clicsParJour = new Map();
  for (const l of serieClics) {
    const c = clicsParJour.get(l.j) ?? { clics: 0, magasin: 0 };
    c.clics += Number(l.n);
    if (MAGASIN.test(String(l.d ?? ''))) c.magasin += Number(l.n);
    clicsParJour.set(l.j, c);
  }
  const premierJour = JOURS.find((j) => Number(parJour.get(j)?.evenements ?? 0) > 0) ?? null;
  const serieComplete = JOURS.map((j) => {
    if (!premierJour || j < premierJour) {
      return { jour: j, vues: null, vues_blog: null, visiteurs: null, clics_cta: null, clics_magasin: null };
    }
    const l = parJour.get(j);
    const c = clicsParJour.get(j);
    return {
      jour: j,
      vues: Number(l?.vues ?? 0),
      vues_blog: Number(l?.vues_blog ?? 0),
      visiteurs: Number(l?.visiteurs ?? 0),
      clics_cta: c?.clics ?? 0,
      clics_magasin: c?.magasin ?? 0,
    };
  });

  const totalVues = somme(listePages, 'vues');
  const totalClics = somme(listePages, 'clics_cta');
  const autresHotes = Object.entries(hotesVus).filter(([h]) => !HOTES.includes(h));
  let etat = 'mesure';
  let message = null;
  if (vide) {
    etat = 'aucune_donnee';
    message = autresHotes.length
      ? `aucune donnee encore de ${HOTES.join(' / ')} : le projet ne recoit que ${autresHotes
          .slice(0, 5)
          .map(([h, n]) => `${h} (${n})`)
          .join(', ')} sur la periode`
      : `aucune donnee encore : le projet PostHog ${env.POSTHOG_PROJECT_ID} n'a recu aucun evenement du site sur la periode`;
  }
  return {
    etat,
    message,
    mesure_depuis: premierJour,
    note: `Hotes ${HOTES.join(', ')} seulement. vues = ${nJours} jours, vues_7j = depuis ${DEBUT_7J}, vues_1j = ${FIN}. visiteurs_jour = uniques par jour additionnes. defilement en % de la page, duree en secondes, medianes. clics_magasin = cta_clic de destination inscription (le nom est commun aux quatre robots). clics_par_emplacement = source <slug>-<emplacement> sans le slug. lecture.sections = total de sections annonce, lecture.rangs[].visites = visites ayant vu la section de cet index (a partir de 1).`,
    hotes_vus: trierObjet(hotesVus, 10),
    evenements_site: trierObjet(evenementsSite, 30),
    totaux: {
      vues: totalVues,
      vues_7j: somme(listePages, 'vues_7j'),
      vues_1j: somme(listePages, 'vues_1j'),
      vues_blog: somme(listePages.filter((p) => BLOG.test(p.chemin)), 'vues'),
      visiteurs_jour: somme(listePages, 'visiteurs_jour'),
      clics_cta: totalClics,
      clics_magasin: somme(listePages, 'clics_magasin'),
      taux_cta: totalVues > 0 ? arrondi(totalClics / totalVues, 4) : null,
      pages_vues: listePages.filter((p) => p.vues > 0).length,
      clics_articles_par_emplacement: trierObjet(emplacementsArticles),
      clics_magasin_articles_par_emplacement: trierObjet(emplacementsArticlesMagasin),
    },
    sources_site: trierObjet(sourcesSite),
    referents_site: trierObjet(referentsSite, 20),
    utm_source_site: trierObjet(utmSite, 20),
    ia: {
      ...visitesIa(referentsSite, listePages),
      /*
        ChatGPT, Gemini, Copilot et Perplexity ajoutent souvent `utm_source` au
        lien cite au lieu de transmettre leur domaine (66 visites chatgpt.com
        sur 28 jours mesurees ainsi le 20/10/2026, 0 par le referent) : on les
        compte a part, sans les additionner au total par referent.
      */
      par_utm_source: trierObjet(
        Object.fromEntries(Object.entries(utmSite).filter(([u]) => /chatgpt|openai|gemini|bard|copilot|perplexity|claude|mistral|deepseek|grok|you\.com|phind|meta\.ai/i.test(u))),
      ),
    },
    pages: listePages,
    serie: serieComplete,
    app: {
      note: `Entonnoir du site (hotes ${HOTES.join(', ')}) : ${Object.entries(EVENEMENTS_APP).map(([k, e]) => `${k} = ${e}`).join(', ')}. 0 = aucun evenement ce jour-la. inscriptions_par_article = signup_completed portant campagne (slug) et emplacement.`,
      inscriptions_par_article: inscriptionsArticles.map((l) => ({ article: l.c, emplacement: l.e || null, inscriptions: Number(l.n) })),
      totaux: totauxApp,
      totaux_7j: totauxApp7j,
      serie: serieApp,
    },
  };
}

/* ================================================================= Stripe */

/** Toutes les pages d'une liste Stripe, en GET seulement. */
async function toutStripe(chemin, max = 5000) {
  const elements = [];
  let apres = null;
  while (elements.length < max) {
    const sep = chemin.includes('?') ? '&' : '?';
    const reponse = await requete(`https://api.stripe.com/v1/${chemin}${sep}limit=100${apres ? `&starting_after=${apres}` : ''}`, {
      headers: { Authorization: `Bearer ${env.STRIPE_SECRET_KEY}` },
    });
    const texte = await reponse.text();
    if (!reponse.ok) throw new Error(`Stripe ${reponse.status} : ${texte.slice(0, 200)}`);
    const j = JSON.parse(texte);
    elements.push(...j.data);
    if (!j.has_more || !j.data.length) break;
    apres = j.data.at(-1).id;
  }
  return elements;
}

/**
 * Les encaissements (`balance_transactions`), par jour de Paris : brut, frais,
 * net, remboursements, additionnes par devise sans conversion (un taux de
 * change invente serait un chiffre invente), et les abonnements actifs.
 */
async function lireStripe() {
  exiger(['STRIPE_SECRET_KEY']);
  const sec = (jour) => Math.floor(minuitParis(jour).getTime() / 1000);
  const mouvements = await toutStripe(`balance_transactions?created[gte]=${sec(DEBUT)}&created[lt]=${sec(decaler(FIN, 1))}`);
  const jourDe = (t) => jourParis(new Date(t * 1000));
  const parJour = new Map(JOURS.map((j) => [j, { jour: j, paiements: 0, brut: {}, net: {}, rembourse: {} }]));
  const totaux = { paiements: 0, paiements_7j: 0, brut: {}, frais: {}, net: {}, rembourse: {} };
  for (const m of mouvements) {
    if (!['charge', 'payment', 'refund', 'payment_refund'].includes(m.type)) continue;
    const j = parJour.get(jourDe(m.created));
    if (!j) continue;
    const dev = m.currency.toUpperCase();
    if (m.type === 'refund' || m.type === 'payment_refund') {
      ajouter(j.rembourse, dev, -m.amount / 100);
      ajouter(totaux.rembourse, dev, -m.amount / 100);
    } else {
      j.paiements += 1;
      totaux.paiements += 1;
      if (j.jour >= DEBUT_7J) totaux.paiements_7j += 1;
      ajouter(j.brut, dev, m.amount / 100);
      ajouter(totaux.brut, dev, m.amount / 100);
    }
    ajouter(j.net, dev, m.net / 100);
    ajouter(totaux.net, dev, m.net / 100);
    ajouter(totaux.frais, dev, m.fee / 100);
  }
  for (const o of [totaux.brut, totaux.frais, totaux.net, totaux.rembourse]) for (const d of Object.keys(o)) o[d] = arrondi(o[d], 2);
  const serie = [...parJour.values()].map((j) => {
    for (const o of [j.brut, j.net, j.rembourse]) for (const d of Object.keys(o)) o[d] = arrondi(o[d], 2);
    return j;
  });
  const [actifs, essais] = await Promise.all([toutStripe('subscriptions?status=active'), toutStripe('subscriptions?status=trialing')]);
  return {
    note: 'Mouvements du solde Stripe (paiements et remboursements), jours de Paris, par devise sans conversion. net = brut - frais - remboursements. Lecture seule.',
    totaux: { ...totaux, abonnements_actifs: actifs.length, abonnements_en_essai: essais.length },
    serie,
  };
}

/* =============================================================== Supabase */

/**
 * Un GET PostgREST avec la cle de service, sur le schema `public`. Jamais
 * d'autre verbe : voir l'en-tete du fichier.
 */
async function rest(chemin, entetes = {}) {
  const base = (env.SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL).replace(/\/$/, '');
  const reponse = await requete(
    `${base}/rest/v1/${chemin}`,
    {
      method: 'GET',
      headers: {
        apikey: env.SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
        Accept: 'application/json',
        ...entetes,
      },
    },
    60000,
  );
  const texte = await reponse.text();
  if (!reponse.ok) {
    const e = new Error(`Supabase ${reponse.status} sur ${chemin.split('?')[0]} : ${texte.slice(0, 300)}`);
    e.statut = reponse.status;
    throw e;
  }
  return { corps: texte ? JSON.parse(texte) : null, plage: reponse.headers.get('content-range') };
}

/** Compte des lignes sans en lire une seule : `limit=0`, `count=exact`, et l'en-tete `Content-Range`. */
async function compter(table, filtres = []) {
  const { plage } = await rest(`${table}?select=*&limit=0&${filtres.join('&')}`, { Prefer: 'count=exact' });
  const total = Number(String(plage ?? '').split('/')[1]);
  if (!Number.isFinite(total)) throw new Error(`Supabase : total absent pour ${table}`);
  return total;
}

/** Les bornes PostgREST d'un jour de Paris, sur une colonne de date. */
function filtreJour(colonne, jour) {
  const debut = minuitParis(jour).toISOString();
  const fin = minuitParis(decaler(jour, 1)).toISOString();
  return [`${colonne}=gte.${encodeURIComponent(debut)}`, `${colonne}=lt.${encodeURIComponent(fin)}`];
}

/**
 * Les inscriptions, les ventes et l'usage, en agregats.
 *
 * Tables lues (les memes que `Matinale/collecte/testcivique.mjs`, le
 * 20/10/2026) : `profiles` (un compte, `created_at`, `subscription_status`),
 * `revenue_events` (une vente : `event_type` abonnement ou achat a l'unite,
 * `product_type`, `amount` en euros TTC, `status`), `examens_blancs`
 * (`completed_at`, `is_completed`, `passed`), `sessions_quiz` (`completed_at`,
 * `completed`).
 */
async function lireSupabase() {
  if (!env.SUPABASE_URL && !env.NEXT_PUBLIC_SUPABASE_URL) throw new Error('variables absentes du .env : NEXT_PUBLIC_SUPABASE_URL');
  exiger(['SUPABASE_SERVICE_ROLE_KEY']);

  const mesures = {
    comptes: (j) => compter('profiles', filtreJour('created_at', j)),
    examens: (j) => compter('examens_blancs', [...filtreJour('completed_at', j), 'is_completed=eq.true']),
    entrainements: (j) => compter('sessions_quiz', [...filtreJour('completed_at', j), 'completed=eq.true']),
  };
  const serie = new Map(JOURS.map((j) => [j, { jour: j }]));
  const absents = [];
  for (const [nom, mesure] of Object.entries(mesures)) {
    try {
      const valeurs = await enParallele(JOURS.map((j) => () => mesure(j)), PARALLELE_SUPABASE);
      JOURS.forEach((j, i) => {
        serie.get(j)[nom] = valeurs[i];
      });
    } catch (e) {
      // Une mesure en echec vaut `null` partout : un zero dirait « aucun », ce qui serait faux.
      for (const j of JOURS) serie.get(j)[nom] = null;
      absents.push(nom);
      noterErreur(`supabase.${nom}`, e);
    }
  }

  /*
    Les ventes : des lignes sans personne (aucune colonne d'utilisateur n'est
    demandee), additionnees par jour de Paris.
  */
  try {
    const debut = encodeURIComponent(minuitParis(DEBUT).toISOString());
    const fin = encodeURIComponent(minuitParis(decaler(FIN, 1)).toISOString());
    const { corps } = await rest(`revenue_events?select=event_type,product_type,amount,currency,status,created_at&created_at=gte.${debut}&created_at=lt.${fin}&limit=5000`);
    for (const j of serie.values()) Object.assign(j, { ventes: 0, montant_eur: 0, remboursements: 0 });
    for (const v of corps ?? []) {
      const j = serie.get(jourParis(new Date(v.created_at)));
      if (!j) continue;
      if (v.status === 'succeeded') {
        j.ventes += 1;
        j.montant_eur = arrondi(j.montant_eur + Number(v.amount || 0), 2);
      } else if (v.status === 'refunded') j.remboursements += 1;
    }
    var produits = {};
    for (const v of (corps ?? []).filter((x) => x.status === 'succeeded')) ajouter(produits, `${v.event_type ?? '?'}:${v.product_type ?? '?'}`, 1);
  } catch (e) {
    for (const j of serie.values()) Object.assign(j, { ventes: null, montant_eur: null, remboursements: null });
    absents.push('ventes');
    noterErreur('supabase.ventes', e);
  }
  const lignes = [...serie.values()];

  const totaux = {};
  const depuis = (jours) => [`created_at=gte.${encodeURIComponent(minuitParis(decaler(AUJOURDHUI, -jours)).toISOString())}`];
  for (const [nom, lire] of Object.entries({
    comptes: () => compter('profiles'),
    abonnes_actifs: () => compter('profiles', ['subscription_status=eq.active']),
    abonnes_en_essai: () => compter('profiles', ['subscription_status=eq.trialing']),
    nouveaux_7j: () => compter('profiles', depuis(7)),
    nouveaux_30j: () => compter('profiles', depuis(30)),
  })) {
    try {
      totaux[nom] = await lire();
    } catch (e) {
      totaux[nom] = null;
      noterErreur(`supabase.${nom}`, e);
    }
  }

  const sommeSerie = (cle) => (lignes.every((l) => l[cle] === null || l[cle] === undefined) ? null : arrondi(lignes.reduce((s, l) => s + (l[cle] ?? 0), 0), 2));
  return {
    note:
      "comptes = profiles crees sur la periode. abonnes_actifs = subscription_status active (essais a part). ventes et montant_eur = revenue_events succeeded (euros TTC encaisses, avant frais Stripe), la source de l'admin. " +
      'examens = examens blancs termines (completed_at). entrainements = sessions_quiz terminees. Jours de Paris. Comptes de l equipe compris : aucune table ne les distingue.',
    mesures_absentes: absents,
    totaux: {
      ...totaux,
      comptes_periode: sommeSerie('comptes'),
      ventes_periode: sommeSerie('ventes'),
      montant_eur_periode: sommeSerie('montant_eur'),
      remboursements_periode: sommeSerie('remboursements'),
      examens_periode: sommeSerie('examens'),
      entrainements_periode: sommeSerie('entrainements'),
      ventes_par_produit: typeof produits === 'undefined' ? null : trierObjet(produits),
    },
    serie: lignes,
  };
}

/* ========================================================= Search Console */

/** La propriete demandee n'est pas lisible : on le dit sans faire echouer la source. */
class Indisponible extends Error {}

async function lireSearchConsole() {
  if (!env.GSC_SERVICE_ACCOUNT_FILE) {
    return { indisponible: 'GSC_SERVICE_ACCOUNT_FILE absente du .env central' };
  }
  const fichier = cheminCentral(env.GSC_SERVICE_ACCOUNT_FILE);
  if (!fs.existsSync(fichier)) {
    return { indisponible: `fichier du compte de service introuvable : ${path.basename(fichier)}` };
  }
  const compte = JSON.parse(fs.readFileSync(fichier, 'utf8'));
  if (!compte.client_email || !compte.private_key) {
    return { indisponible: 'le fichier du compte de service ne contient pas client_email et private_key' };
  }
  // La cle privee n'est pas dans le .env : on la declare pour que `masquer` la connaisse.
  declarerSecret(compte.private_key);
  declarerSecret(compte.private_key_id);

  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const maintenant = Math.floor(Date.now() / 1000);
  const aud = compte.token_uri ?? 'https://oauth2.googleapis.com/token';
  const tete = b64({ alg: 'RS256', typ: 'JWT', kid: compte.private_key_id });
  const corps = b64({
    iss: compte.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud,
    iat: maintenant,
    exp: maintenant + 3600,
  });
  const signature = crypto
    .sign('sha256', Buffer.from(`${tete}.${corps}`), compte.private_key)
    .toString('base64url');

  const echange = await requete(aud, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${tete}.${corps}.${signature}`,
    }),
  });
  const jeton = await echange.json().catch(() => ({}));
  if (!echange.ok || !jeton.access_token) {
    throw new Error(`echange de jeton Google ${echange.status} : ${String(jeton.error ?? '').slice(0, 100)}`);
  }
  declarerSecret(jeton.access_token);
  const autorisation = { Authorization: `Bearer ${jeton.access_token}` };

  /*
    Le compte de service est partage avec RevealChat, MemoryPilot et Cosme
    Check : il voit leurs proprietes, et testciviquefrance.fr seulement si
    quelqu'un l'y a ajoute. On liste d'abord ce qu'il voit, pour dire
    exactement quoi faire quand l'acces manque, au lieu d'un 403 sans
    explication. La propriete attendue est un domaine,
    `sc-domain:testciviquefrance.fr` ; `encodeURIComponent` la rend telle
    quelle dans l'adresse de l'API.
  */
  const demande = env.GSC_SITE || 'sc-domain:testciviquefrance.fr';
  const liste = await requete('https://searchconsole.googleapis.com/webmasters/v3/sites', { headers: autorisation });
  const sites = liste.ok ? ((await liste.json()).siteEntry ?? []) : [];
  const lisible = (s) => s.permissionLevel && s.permissionLevel !== 'siteUnverifiedUser';
  const choisi =
    sites.find((s) => s.siteUrl === demande && lisible(s)) ??
    sites.find((s) => /testciviquefrance\.fr/i.test(s.siteUrl) && lisible(s));
  if (liste.ok && !choisi) {
    return {
      indisponible:
        `le compte de service ${compte.client_email} n'a pas acces a ${demande}` +
        ` (proprietes visibles : ${sites.map((s) => s.siteUrl).join(', ') || 'aucune'}).` +
        " Pour l'ouvrir : Search Console > testciviquefrance.fr > Parametres > Utilisateurs et autorisations > ajouter cette adresse en acces restreint.",
    };
  }
  const site = encodeURIComponent(choisi?.siteUrl ?? demande);

  const interroger = async (dimensions, rowLimit) => {
    const r = await requete(
      `https://searchconsole.googleapis.com/webmasters/v3/sites/${site}/searchAnalytics/query`,
      {
        method: 'POST',
        headers: { ...autorisation, 'Content-Type': 'application/json' },
        body: JSON.stringify({ startDate: DEBUT, endDate: FIN, dimensions, rowLimit, dataState: 'all' }),
      },
      60000,
    );
    const texte = await r.text();
    if (r.status === 403) throw new Indisponible(`Search Console 403 sur ${decodeURIComponent(site)} : ${texte.slice(0, 200)}`);
    if (!r.ok) throw new Error(`Search Console ${r.status} : ${texte.slice(0, 300)}`);
    return (JSON.parse(texte).rows ?? []).map((l) => {
      const ligne = {};
      dimensions.forEach((d, i) => {
        ligne[d === 'query' ? 'requete' : d === 'date' ? 'jour' : d] =
          d === 'page' ? normaliserChemin(l.keys[i].replace(/^https?:\/\/[^/]+/, '') || '/') : l.keys[i];
      });
      return {
        ...ligne,
        clics: l.clicks,
        impressions: l.impressions,
        ctr: arrondi(l.ctr, 4),
        position: arrondi(l.position, 1),
      };
    });
  };

  let pages;
  let requetes;
  let couples;
  let serie;
  try {
    [pages, requetes, couples, serie] = await Promise.all([
      interroger(['page'], 500),
      interroger(['query'], 1000),
      interroger(['page', 'query'], 5000),
      interroger(['date'], 400),
    ]);
  } catch (e) {
    if (e instanceof Indisponible) return { indisponible: messageErreur(e) };
    throw e;
  }
  const parImpressions = (a, b) => b.impressions - a.impressions;
  const sansClic = couples
    .filter(
      (c) =>
        c.impressions >= SANS_CLIC.impressionsMin &&
        c.ctr <= SANS_CLIC.ctrMax &&
        c.position >= SANS_CLIC.positionMin &&
        c.position <= SANS_CLIC.positionMax,
    )
    .sort(parImpressions)
    .slice(0, 50);

  return {
    propriete: decodeURIComponent(site),
    note: `Jours de Google (heure du Pacifique), donnees fraiches incluses donc provisoires sur les 2 a 3 derniers jours. vues_sans_clic : impressions >= ${SANS_CLIC.impressionsMin}, ctr <= ${SANS_CLIC.ctrMax}, position ${SANS_CLIC.positionMin} a ${SANS_CLIC.positionMax}.`,
    totaux: {
      clics: somme(serie, 'clics'),
      impressions: somme(serie, 'impressions'),
    },
    pages: pages.sort(parImpressions),
    requetes: requetes.sort(parImpressions).slice(0, 300),
    pages_requetes: couples.sort(parImpressions).slice(0, 500),
    vues_sans_clic: sansClic,
    serie: serie.sort((a, b) => a.jour.localeCompare(b.jour)),
  };
}

/* ============================================================== Articles */

/**
 * Chaque article, ses deux langues cote a cote : vues sur 1, 7 et 28 jours,
 * clics, lecture, et ce que Google en montre. C'est la vue « par article »
 * que le robot lit d'abord ; `posthog.pages` garde le detail page par page.
 */
function articles(catalogue, posthog, gsc) {
  const pagesPh = new Map((posthog?.pages ?? []).map((p) => [p.chemin, p]));
  const pagesGsc = new Map((gsc?.pages ?? []).map((p) => [p.page, p]));
  const connus = new Set(catalogue.liste.flatMap((a) => [a.fr && `/articles/${a.fr}`]));
  // Une page d'article vue mais absente des sources (renommee, supprimee) reste visible.
  const orphelins = [...pagesPh.keys()]
    .filter((c) => ARTICLE.test(c) && !connus.has(c))
    .map((c) => {
      const m = c.match(ARTICLE);
      return m[1] ? { fr: null, en: m[2], hors_catalogue: true } : { fr: m[2], en: null, hors_catalogue: true };
    });

  const langue = (chemin) => {
    if (!chemin) return null;
    const p = pagesPh.get(chemin);
    const g = pagesGsc.get(chemin);
    return {
      chemin,
      vues_1j: p?.vues_1j ?? 0,
      vues_7j: p?.vues_7j ?? 0,
      vues_28j: p?.vues ?? 0,
      clics_cta: p?.clics_cta ?? 0,
      clics_magasin: p?.clics_magasin ?? 0,
      taux_magasin: p?.taux_magasin ?? null,
      defilement_median_pct: p?.defilement_median_pct ?? null,
      sections_vues: p?.lecture?.sections_vues ?? null,
      source_1: Object.keys(p?.sources ?? {})[0] ?? null,
      gsc: g ? { clics: g.clics, impressions: g.impressions, ctr: g.ctr, position: g.position } : null,
    };
  };
  const liste = [...catalogue.liste, ...orphelins].map((a) => {
    const fr = langue(a.fr ? `/articles/${a.fr}` : null);
    const en = null;
    const total = (cle) => (fr?.[cle] ?? 0) + (en?.[cle] ?? 0);
    return {
      cle: a.cle ?? null,
      slug_fr: a.fr,
      slug_en: a.en,
      ...(a.hors_catalogue ? { hors_catalogue: true } : {}),
      vues_1j: total('vues_1j'),
      vues_7j: total('vues_7j'),
      vues_28j: total('vues_28j'),
      clics_magasin: total('clics_magasin'),
      fr,
      en,
    };
  });
  liste.sort((a, b) => b.vues_7j - a.vues_7j || b.vues_28j - a.vues_28j);
  return {
    note: `Catalogue lu dans contenu/articles/ (francais seulement, adresses /articles/<slug>). vues_28j = fenetre de ${nJours} jours. gsc = null tant que Search Console est indisponible ou sans impression.`,
    nombre: liste.length,
    lecture_catalogue: catalogue.note.length ? catalogue.note : undefined,
    liste,
  };
}

/* ============================================================ Correlations */

function pearson(paires) {
  const n = paires.length;
  if (n < 3) return null;
  const mx = paires.reduce((s, [x]) => s + x, 0) / n;
  const my = paires.reduce((s, [, y]) => s + y, 0) / n;
  let sxy = 0;
  let sxx = 0;
  let syy = 0;
  for (const [x, y] of paires) {
    sxy += (x - mx) * (y - my);
    sxx += (x - mx) ** 2;
    syy += (y - my) ** 2;
  }
  // Une serie constante (tout a zero par exemple) n'a pas de correlation definie.
  if (sxx === 0 || syy === 0) return null;
  return arrondi(sxy / Math.sqrt(sxx * syy), 3);
}

function correlations(posthog, stripe, supabase) {
  const valeurs = (source, cle) =>
    JOURS.map((j) => {
      const l = source?.serie?.find((x) => x.jour === j);
      return l && l[cle] !== null && l[cle] !== undefined ? Number(l[cle]) : null;
    });

  const x = {
    vues_blog: valeurs(posthog, 'vues_blog'),
    clics_cta: valeurs(posthog, 'clics_cta'),
    clics_magasin: valeurs(posthog, 'clics_magasin'),
  };
  const app = { serie: posthog?.app?.serie };
  const y = {
    inscriptions_site: valeurs(app, 'inscriptions_app'),
    nouveaux_comptes: valeurs(supabase, 'comptes'),
    ventes: valeurs(supabase, 'ventes'),
    paiements_stripe: valeurs(stripe, 'paiements'),
  };

  const paires = [];
  for (const [nomX, serieX] of Object.entries(x)) {
    for (const [nomY, serieY] of Object.entries(y)) {
      paires.push({
        x: nomX,
        y: nomY,
        resultats: DECALAGES.map((k) => {
          const points = [];
          for (let i = 0; i + k < JOURS.length; i += 1) {
            if (serieX[i] !== null && serieY[i + k] !== null) points.push([serieX[i], serieY[i + k]]);
          }
          return { decalage_jours: k, r: pearson(points), n: points.length };
        }),
      });
    }
  }

  /*
    Le tableau jour par jour, lisible tel quel : c'est lui qu'on regarde pour
    voir qu'un pic de visites precede (ou non) un pic d'installations, avant
    toute statistique. `null` = pas de mesure ce jour-la, jamais zero.
  */
  const jours = JOURS.map((jour, i) => ({
    jour,
    vues_blog: x.vues_blog[i],
    clics_cta: x.clics_cta[i],
    clics_magasin: x.clics_magasin[i],
    inscriptions_site: y.inscriptions_site[i],
    comptes: y.nouveaux_comptes[i],
    ventes: y.ventes[i],
    paiements_stripe: y.paiements_stripe[i],
  }));

  const joursAlignes = JOURS.filter(
    (_, i) => x.clics_cta[i] !== null && y.nouveaux_comptes[i] !== null,
  ).length;
  /* La regle porte sur les clics des appels d'article, tous emplacements confondus. */
  const joursAvecClic = x.clics_cta.filter((v) => v !== null && v >= 1).length;
  return {
    note: 'Pearson entre x au jour J et y au jour J + decalage. r = null si moins de 3 points ou une serie constante. inscriptions_site = signup_completed (PostHog). comptes = profiles (Supabase). ventes = revenue_events succeeded. paiements_stripe = paiements du solde Stripe. Aucune conclusion ici.',
    regle: `assez_de_donnees exige au moins ${JOURS_MIN_CORRELATION} jours ayant au moins un clic sur un appel d'article`,
    jours_alignes: joursAlignes,
    jours_avec_clic: joursAvecClic,
    clics_cta_total: x.clics_cta.reduce((s, v) => s + (v ?? 0), 0),
    clics_magasin_total: x.clics_magasin.reduce((s, v) => s + (v ?? 0), 0),
    assez_de_donnees: joursAvecClic >= JOURS_MIN_CORRELATION,
    jours,
    paires,
  };
}

/* ================================================================= Resume */

function pct(x) {
  return x === null || x === undefined ? '-' : `${arrondi(x * 100, 1)} %`;
}

function liste(o) {
  return (
    Object.entries(o ?? {})
      .map(([k, n]) => `${k} ${n}`)
      .join(', ') || '0'
  );
}

function resume(donnees, fichier) {
  const l = [];
  const { posthog, stripe: asc, supabase, gsc, articles: art, correlations: cor } = donnees;
  l.push(`# Donnees SEO du ${AUJOURDHUI}`);
  l.push(`Periode ${DEBUT} a ${FIN} (${nJours} jours de Paris, aujourd'hui exclu). Fichier : ${fichier}`);

  l.push('', '## Site (PostHog)');
  if (posthog.erreur) l.push(`ECHEC : ${posthog.erreur}`);
  else if (posthog.etat === 'aucune_donnee') {
    l.push(`${posthog.message.charAt(0).toUpperCase()}${posthog.message.slice(1)}.`);
  } else {
    const t = posthog.totaux;
    l.push(
      `Vues ${t.vues} (7 j : ${t.vues_7j}, hier : ${t.vues_1j}), dont articles ${t.vues_blog}. Visiteurs-jour ${t.visiteurs_jour}. Clics sur les appels ${t.clics_cta} (taux ${pct(t.taux_cta)}), dont vers l'inscription ${t.clics_magasin}. Mesure depuis ${posthog.mesure_depuis}.`,
    );
    l.push(`Familles de sources : ${liste(posthog.sources_site)}`);
    const refs = Object.entries(posthog.referents_site).slice(0, 8);
    if (refs.length) l.push(`Referents : ${refs.map(([d, n]) => `${d} ${n}`).join(', ')}`);
    if (Object.keys(posthog.utm_source_site).length) l.push(`utm_source : ${liste(posthog.utm_source_site)}`);
    const ia = posthog.ia;
    l.push(
      ia && ia.total > 0
        ? `Visites venues des IA (GEO) : ${ia.total} (${liste(ia.par_moteur)}) ; pages : ${ia.pages.map((x) => `${x.chemin} ${x.visites}`).join(', ')}`
        : 'Visites venues des IA (GEO) par referent : 0 pour le moment.',
    );
    if (Object.keys(ia?.par_utm_source ?? {}).length) l.push(`Visites marquees par une IA (utm_source) : ${liste(ia.par_utm_source)}`);
    l.push('', '| page | vues | 7 j | hier | defil. med. | duree med. | clics | magasin | source 1 |');
    l.push('|---|---|---|---|---|---|---|---|---|');
    for (const p of posthog.pages.slice(0, 15)) {
      l.push(
        `| ${p.chemin} | ${p.vues} | ${p.vues_7j} | ${p.vues_1j} | ${p.defilement_median_pct ?? '-'} % | ${p.duree_mediane_s ?? '-'} s | ${p.clics_cta} | ${p.clics_magasin} | ${Object.keys(p.sources)[0] ?? '-'} |`,
      );
    }
    const lus = posthog.pages.filter((p) => p.lecture);
    if (lus.length) {
      l.push('', 'Sections atteintes (visites par index, % des vues) :');
      for (const p of lus.slice(0, 12)) {
        const rangs = p.lecture.rangs.map((r) => `${r.index}:${r.visites}(${pct(r.part_des_vues)})`).join(' > ');
        l.push(`- ${p.chemin} [${p.lecture.sections ?? "?"} sections, ${p.lecture.sections_vues} atteintes] ${rangs}`);
      }
    }
    const emplacements = posthog.totaux.clics_articles_par_emplacement;
    if (Object.keys(emplacements).length) {
      l.push(
        '',
        `Clics des articles par emplacement : ${liste(emplacements)} (vers l'inscription : ${liste(posthog.totaux.clics_magasin_articles_par_emplacement)})`,
      );
      for (const p of posthog.pages.filter((x) => Object.keys(x.clics_par_emplacement).length).slice(0, 12)) {
        l.push(`- ${p.chemin} : ${liste(p.clics_par_emplacement)}`);
      }
    }
  }

  if (posthog.app) {
    const a = posthog.app.totaux;
    const s7 = posthog.app.totaux_7j;
    l.push('', '## Entonnoir du site (PostHog)');
    l.push(
      `Inscriptions commencees ${a.inscriptions_commencees} (7 j : ${s7.inscriptions_commencees}), terminees ${a.inscriptions_app} (7 j : ${s7.inscriptions_app}), page tarifs ${a.page_tarifs}, paiements commences ${a.paiements_commences} (7 j : ${s7.paiements_commences}), examens commences ${a.examens_commences}, termines ${a.examens_termines}.`,
    );
    const pa = posthog.app.inscriptions_par_article ?? [];
    l.push(pa.length ? `Inscriptions venues d'un article : ${pa.map((x) => `${x.article} (${x.emplacement ?? '?'}) ${x.inscriptions}`).join(', ')}` : "Inscriptions venues d'un article : 0 pour le moment.");
  }

  l.push('', `## Articles (${art.nombre})`);
  l.push('| article | hier | 7 j | 28 j | clics inscription | defil. med. | Google (impr. / pos.) |');
  l.push('|---|---|---|---|---|---|---|');
  for (const a of art.liste) {
    const g = (x) => (x?.gsc ? `${x.gsc.impressions}/${x.gsc.position}` : '-');
    l.push(
      `| ${a.slug_fr ?? '-'}${a.hors_catalogue ? ' (hors catalogue)' : ''} | ${a.vues_1j} | ${a.vues_7j} | ${a.vues_28j} | ${a.clics_magasin} | ${a.fr?.defilement_median_pct ?? '-'} % | ${g(a.fr)} |`,
    );
  }

  l.push('', '## Stripe (lecture seule)');
  if (asc.erreur) l.push(`ECHEC : ${asc.erreur}`);
  else {
    const t = asc.totaux;
    l.push(`Paiements ${t.paiements} (7 j : ${t.paiements_7j}). Brut : ${liste(t.brut)}. Net : ${liste(t.net)}. Rembourse : ${liste(t.rembourse)}. Abonnements actifs ${t.abonnements_actifs}, en essai ${t.abonnements_en_essai}.`);
    l.push(`7 derniers jours (paiements) : ${asc.serie.slice(-7).map((j) => `${j.jour.slice(5)} ${j.paiements}`).join(', ')}`);
  }

  l.push('', '## Inscriptions, ventes et usage (Supabase)');
  if (supabase.erreur) l.push(`ECHEC : ${supabase.erreur}`);
  else {
    const t = supabase.totaux;
    l.push(
      `Comptes au total ${t.comptes ?? '?'}, nouveaux sur la periode ${t.comptes_periode ?? '?'} (7 j : ${t.nouveaux_7j ?? '?'}, 30 j : ${t.nouveaux_30j ?? '?'}). Abonnes actifs ${t.abonnes_actifs ?? '?'}, en essai ${t.abonnes_en_essai ?? '?'}.`,
    );
    l.push(`Ventes sur la periode ${t.ventes_periode ?? '?'} pour ${t.montant_eur_periode ?? '?'} EUR TTC (remboursements ${t.remboursements_periode ?? '?'}). Par produit : ${liste(t.ventes_par_produit)}.`);
    l.push(`Examens blancs termines ${t.examens_periode ?? '?'}, entrainements ${t.entrainements_periode ?? '?'}.`);
    l.push(`7 derniers jours (comptes / ventes) : ${supabase.serie.slice(-7).map((j) => `${j.jour.slice(5)} ${j.comptes ?? '?'}/${j.ventes ?? '?'}`).join(', ')}`);
  }

  l.push('', '## Search Console');
  if (gsc.indisponible) l.push(`Indisponible : ${gsc.indisponible}`);
  else if (gsc.erreur) l.push(`ECHEC : ${gsc.erreur}`);
  else {
    l.push(`Propriete ${gsc.propriete}. Clics ${gsc.totaux.clics}, impressions ${gsc.totaux.impressions}.`);
    for (const r of gsc.requetes.slice(0, 10)) {
      l.push(`- « ${r.requete} » ${r.impressions} impr., ${r.clics} clics, pos. ${r.position}`);
    }
    if (gsc.vues_sans_clic.length) {
      l.push('Vues sans clic :');
      for (const c of gsc.vues_sans_clic.slice(0, 10)) {
        l.push(`- ${c.page} « ${c.requete} » ${c.impressions} impr., pos. ${c.position}`);
      }
    }
  }

  l.push('', '## Correlations (nombres seulement)');
  l.push(
    `assez_de_donnees : ${cor.assez_de_donnees ? 'oui' : 'non'} (${cor.jours_avec_clic} jours avec clic sur ${JOURS_MIN_CORRELATION} requis, ${cor.jours_alignes} jours alignes, ${cor.clics_cta_total} clics d'appels dont ${cor.clics_magasin_total} vers l'inscription).`,
  );
  l.push('Jour par jour (vues articles / clics appels / clics inscription / inscriptions PostHog / comptes / ventes / paiements Stripe) :');
  l.push(
    cor.jours
      .slice(-7)
      .map(
        (j) =>
          `${j.jour.slice(5)} ${[j.vues_blog, j.clics_cta, j.clics_magasin, j.inscriptions_site, j.comptes, j.ventes, j.paiements_stripe]
            .map((v) => v ?? '-')
            .join('/')}`,
      )
      .join(', '),
  );
  for (const p of cor.paires) {
    l.push(`- ${p.x} -> ${p.y} : ${p.resultats.map((r) => `J+${r.decalage_jours} r=${r.r ?? '-'} (n=${r.n})`).join(', ')}`);
  }

  if (donnees.erreurs.length) {
    l.push('', '## Erreurs');
    for (const e of donnees.erreurs) l.push(`- ${e.source} : ${e.message}`);
  }
  return l.join('\n');
}

/* ================================================================== Main */

async function lireSource(nom, lecteur) {
  try {
    return await lecteur();
  } catch (e) {
    noterErreur(nom, e);
    return { erreur: messageErreur(e) };
  }
}

const [posthog, stripe, supabase, gsc] = await Promise.all([
  lireSource('posthog', lirePosthog),
  lireSource('stripe', lireStripe),
  lireSource('supabase', lireSupabase),
  lireSource('gsc', lireSearchConsole),
]);

const donnees = {
  genere_le: heureParis(),
  site: 'testciviquefrance.fr',
  periode: { debut: DEBUT, fin: FIN, jours: nJours, fuseau: 'Europe/Paris' },
  posthog,
  stripe: stripe,
  supabase,
  gsc,
  articles: articles(catalogueArticles(), posthog, gsc),
  correlations: correlations(posthog, stripe, supabase),
  erreurs,
};

const fichier = path.join(DOSSIER, `${AUJOURDHUI}.json`);
ecrireJson(fichier, JSON.parse(masquer(JSON.stringify(donnees))));
console.log(masquer(resume(donnees, relatif(fichier))));
