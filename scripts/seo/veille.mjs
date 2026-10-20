/**
 * Veille du matin : ce qui change pour les etrangers en France, et ce que
 * les gens tapent.
 *
 *   node scripts/seo/veille.mjs [--sans-reddit]
 *
 * Ecrit `docs/seo/veille/AAAA-MM-JJ.json` et imprime un resume markdown.
 *
 * Porte depuis `CosmetWiki/scripts/seo/veille.mjs` (Cosme Check, lui-meme venu
 * de MemoryPilot et de RevealChat) : memes sources de base, memes fichiers,
 * meme forme de sortie. Test Civique veut devenir **la reference** sur ce qui
 * change pour les etrangers en France (titres de sejour, naturalisation,
 * prefectures, ANEF, OFII, lois et decrets, calendrier) et sur l'examen
 * civique : la veille doit permettre d'ecrire **dans les 24 h** sur une
 * nouvelle regle officielle. D'ou deux sources propres a ce site :
 *
 * - **le Journal officiel**, par l'open data de la DILA
 *   (`https://echanges.dila.gouv.fr/OPENDATA/JORF/`) : le sommaire du JO du
 *   jour, filtre sur les textes qui touchent les etrangers, la nationalite,
 *   l'asile, l'integration, l'examen civique. Legifrance repond 403 (defi
 *   Cloudflare) a tout client sans navigateur, flux RSS compris, et son API
 *   (PISTE) exige une cle : verifie le 20/10/2026 ;
 * - **les flux officiels** qui repondent sans cle (service-public, Conseil
 *   d'Etat, Senat, Assemblee nationale, Defenseur des droits), filtres sur nos
 *   sujets. interieur.gouv.fr (403), l'ANEF (application JavaScript), l'OFII
 *   et vie-publique.fr (mur JavaScript et cookie) ne se lisent pas sans
 *   navigateur : leur actualite remonte par Google Actualites.
 *
 * Et les sources communes aux robots jumeaux :
 *
 * - **Google Trends** (France ; les territoires d'outre-mer rendent 400, ils
 *   sont compris dans `geo=FR`) ;
 * - **Google Actualites** sur nos sujets, une expression par requete (les
 *   `OR` combines a des guillemets rendent souvent zero, mesure du
 *   20/10/2026), dont des requetes sur Mayotte, la Guyane, la Guadeloupe et La
 *   Reunion ;
 * - **les suggestions de Google**, avec la memoire `suggestions-vues.json` qui
 *   fait ressortir les nouvelles ;
 * - **Reddit** (r/france, r/AskFrance, r/expats), le top de la semaine, lu par
 *   flux RSS. Le JSON anonyme est refuse ; le flux repond.
 *
 * La veille est en francais seulement : le site ne publie qu'en francais et
 * ne vise que la France et l'outre-mer.
 *
 * Les requetes, les graines, les subs, les flux et le reglage du Journal
 * officiel vivent dans `docs/seo/veille-requetes.json`, pas ici : le robot
 * doit pouvoir elargir sa veille sans toucher au code. Un champ absent du
 * fichier y est ajoute avec sa valeur de depart, sans toucher aux autres.
 *
 * ## Politesse
 *
 * Une pause de 300 ms entre deux appels et un User-Agent qui dit qui nous
 * sommes. Ces points d'acces sont publics mais pas des API garanties : un
 * robot qui martele se fait couper, et la veille du lendemain avec.
 *
 * ## ⚠️ Reddit : une requete par minute
 *
 * Mesure le 19/10/2026 sur RevealChat : le flux anonyme repond
 * `x-ratelimit-remaining: 0` des la premiere requete, et la remise a zero
 * tombe sur la minute suivante. Le script suit les en-tetes de quota, attend
 * la fin de la fenetre quand il le faut, et retente une fois. C'est la
 * derniere etape, bornee a `REDDIT_BUDGET_MS`, et `--sans-reddit` la saute.
 * Reddit filtre aussi le client (Node refuse la ou curl passe) : le script
 * bascule de l'un a l'autre au premier 403, voir `getRedditCurl`.
 *
 * ## Ce qui a deja ete lu aujourd'hui est repris
 *
 * Un sub lu lors d'un passage plus tot dans la journee est repris tel quel au
 * lieu d'etre relu.
 */

import { execFile } from 'node:child_process';
import https from 'node:https';
import zlib from 'node:zlib';
import path from 'node:path';
import {
  RACINE,
  UA,
  ecrireJson,
  heureParis,
  jourParis,
  lireJson,
  messageErreur,
  pause,
  relatif,
  requete,
} from './lib.mjs';

const FICHIER_REQUETES = path.join(RACINE, 'docs', 'seo', 'veille-requetes.json');
const DOSSIER = path.join(RACINE, 'docs', 'seo', 'veille');
const FICHIER_VUES = path.join(DOSSIER, 'suggestions-vues.json');
const FICHIER_REDDIT_VUS = path.join(DOSSIER, 'reddit-vus.json');
const PAUSE_MS = 300;
const PAUSE_REDDIT_MS = 1000;
/** Au-dela, les subs restants sont notes comme non lus plutot que de bloquer la matinee. */
const REDDIT_BUDGET_MS = 15 * 60 * 1000;
/** Plafond d'une attente de quota : la fenetre de Reddit est d'une minute. */
const REDDIT_ATTENTE_MAX_MS = 65 * 1000;
const AGE_MAX_H = 72;
/** Les flux officiels publient peu : une semaine de recul. */
const AGE_FLUX_H = 7 * 24;
const FRAIS_H = 24;
const ARTICLES_MAX = 10;
const REDDIT_MAX = 10;

/** Valeurs de depart, ecrites quand le fichier ou l'un de ses champs manque. */
const REQUETES_DEPART = {
  "note": "Lu par scripts/seo/veille.mjs. jorf : sommaire du Journal officiel (open data DILA, sans cle), filtre par inclure/exclure. flux : flux officiels sans cle, filtre = regex (drapeaux iu) sur titre et resume. tendances_geos : Google Trends (l'outre-mer rend 400, il est compris dans FR). requetes_fr : Google Actualites (72 h), une expression par requete (les OR avec guillemets rendent souvent zero, 20/10/2026). graines_fr : suggestions de Google. reddit : top de la semaine (r/expats est anglo-americain : ne retenir que ce qui parle de la France). Zone : la France et l'outre-mer seulement. A enrichir librement.",
  "jorf": {
    "nom": "Journal officiel (sommaire du jour, open data DILA)",
    "index": "https://echanges.dila.gouv.fr/OPENDATA/JORF/",
    "methode": "Lire l'index Apache, garder les archives JORF_AAAAMMJJ-HHMMSS.tar.gz des 36 dernières heures dont la taille affichée est inférieure à 1 Mo (le JO du jour sort vers 00 h 25, 60 à 225 Ko ; ignorer les archives de 21 h, 2 à 6 Mo). Télécharger, gunzip en mémoire, parcourir le tar par blocs de 512 octets et ne lire que */conteneur/JORF/CONT/**/JORFCONT*.xml. Chaque texte est un <LIEN_TXT idtxt titretxt/> ; le ministère est le <TITRE_TM> parent, la date est <DATE_PUBLI>.",
    "motif_archive": "JORF_(\\d{8})-(\\d{6})\\.tar\\.gz</a>\\s+\\S+ \\S+\\s+([\\d.]+[KM])",
    "taille_max_octets": 1000000,
    "entree_sommaire": "/conteneur/JORF/CONT/.*\\.xml$",
    "lien_texte": "https://www.legifrance.gouv.fr/jorf/id/{idtxt}",
    "inclure": "(?<![a-zà-ÿ])(étrangers|entrée et (du )?séjour|titres? de séjour|cartes? de (séjour|résident)|nationalité française|ceseda|droit d.asile|demandeurs? d.asile|immigration|intégration républicaine|examen civique|naturalisation|visas?(?![a-zà-ÿ])|réfugiés?|apatrides?|ofii|ofpra|éloignement|rétention administrative|regroupement familial)",
    "exclure": "portant naturalisation, réintégration|accès protégé|délégation de signature|portant nomination",
    "pourquoi_pas_legifrance": "legifrance.gouv.fr répond 403 (défi Cloudflare) à toutes les adresses, flux RSS compris, avec un UA robot comme avec un UA navigateur ; l'API PISTE exige une clé."
  },
  "flux": [
    {
      "nom": "service-public particuliers",
      "url": "https://www.service-public.gouv.fr/abonnements/rss/actu-actualites-particuliers.rss",
      "format": "rss",
      "filtre": "(?<![a-zà-ÿ])(étrangers?(?! \\(affaires)|séjour|résident|naturalis|nationalité|asile|immigration|intégration républicaine|examen civique|visas?(?![a-zà-ÿ])|réfugiés?|ofii|anef|préfecture)"
    },
    {
      "nom": "service-public professionnels",
      "url": "https://www.service-public.gouv.fr/abonnements/rss/actu-actu-pro.rss",
      "format": "rss",
      "filtre": "(?<![a-zà-ÿ])(salariés? étrangers?|travailleurs? étrangers?|autorisation de travail|titre de séjour|métiers en tension|ressortissants? étrangers?)"
    },
    {
      "nom": "Conseil d'État actualités",
      "url": "https://www.conseil-etat.fr/rss/actualites-rss",
      "format": "rss",
      "filtre": "(?<![a-zà-ÿ])(étrangers|séjour|nationalité|naturalis|asile|immigration|intégration|ceseda|éloignement|oqtf|rétention|visas?(?![a-zà-ÿ])|réfugiés?)"
    },
    {
      "nom": "Conseil d'État avis",
      "url": "https://www.conseil-etat.fr/rss/avis-rss",
      "format": "rss",
      "filtre": "(?<![a-zà-ÿ])(étrangers|séjour|nationalité|naturalis|asile|immigration|intégration|ceseda|éloignement)"
    },
    {
      "nom": "Conseil d'État jurisprudence",
      "url": "https://www.conseil-etat.fr/rss/analyses-de-jurisprudence-rss",
      "format": "rss",
      "filtre": "(?<![a-zà-ÿ])(étrangers?(?![a-zà-ÿ])|titre de séjour|nationalité|naturalis|asile|ceseda|éloignement|oqtf|rétention administrative)"
    },
    {
      "nom": "Sénat derniers textes",
      "url": "https://www.senat.fr/rss/textes.xml",
      "format": "atom-iso-8859-15",
      "filtre": "(?<![a-zà-ÿ])(étrangers|immigration|asile|nationalité|naturalis|séjour|intégration|droit du sol|ceseda|mayotte)"
    },
    {
      "nom": "Sénat rapports",
      "url": "https://www.senat.fr/rss/rapports.xml",
      "format": "atom-iso-8859-15",
      "filtre": "(?<![a-zà-ÿ])(étrangers|immigration|asile|nationalité|naturalis|séjour|intégration)"
    },
    {
      "nom": "Sénat communiqués",
      "url": "https://www.senat.fr/rss/presse.xml",
      "format": "atom-iso-8859-15",
      "filtre": "(?<![a-zà-ÿ])(étrangers|immigration|asile|nationalité|naturalis|séjour|intégration)"
    },
    {
      "nom": "Assemblée nationale documents",
      "url": "https://www2.assemblee-nationale.fr/feeds/detail/documents-parlementaires",
      "format": "rss",
      "filtre": "(?<![a-zà-ÿ])(étrangers|immigration|asile|nationalité|naturalis|séjour|intégration|droit du sol|ceseda)"
    },
    {
      "nom": "Défenseur des droits",
      "url": "https://www.defenseurdesdroits.fr/rss.xml",
      "format": "rss",
      "filtre": "(?<![a-zà-ÿ])(étrangers|immigration|asile|séjour|préfecture|anef|naturalis|nationalité)"
    }
  ],
  "tendances_geos": [
    "FR"
  ],
  "requetes_fr": [
    "\"examen civique\"",
    "\"titre de séjour\"",
    "\"carte de séjour\"",
    "\"carte de résident\"",
    "\"préfecture\" \"rendez-vous\" étrangers",
    "préfecture étrangers",
    "ANEF",
    "OFII",
    "CESEDA",
    "naturalisation",
    "\"nationalité française\"",
    "naturalisations chiffres",
    "\"contrat d intégration républicaine\"",
    "\"niveau de français\" étrangers",
    "\"loi immigration\"",
    "\"ministre de l Intérieur\" immigration",
    "décret étrangers",
    "régularisation sans-papiers",
    "OQTF",
    "\"demandeurs d asile\"",
    "\"travailleurs étrangers\"",
    "\"étudiants étrangers\"",
    "\"droit du sol\"",
    "Mayotte immigration",
    "\"titre de séjour\" Guyane",
    "\"titre de séjour\" Guadeloupe",
    "\"titre de séjour\" Réunion",
    "\"examen civique\" résultats",
    "\"formation civique\" OFII",
    "\"Défenseur des droits\" étrangers",
    "Guyane immigration",
    "\"Nouvelle-Calédonie\" nationalité"
  ],
  "requetes_en": [],
  "graines_fr": [
    "examen civique",
    "examen civique naturalisation",
    "examen civique carte de résident",
    "examen civique questions",
    "examen civique gratuit",
    "examen civique date",
    "examen civique inscription",
    "examen civique résultat",
    "test civique",
    "test civique naturalisation",
    "test civique gratuit",
    "test civique résultat",
    "titre de séjour",
    "titre de séjour renouvellement",
    "titre de séjour pluriannuel",
    "titre de séjour étudiant",
    "titre de séjour salarié",
    "carte de séjour",
    "carte de résident 10 ans",
    "naturalisation",
    "naturalisation par décret",
    "naturalisation mariage",
    "naturalisation délai",
    "nationalité française",
    "anef",
    "anef titre de séjour",
    "rendez-vous préfecture",
    "ofii",
    "contrat d'intégration républicaine",
    "niveau de français naturalisation",
    "tcf naturalisation",
    "valeurs de la république",
    "récépissé titre de séjour",
    "timbre fiscal titre de séjour",
    "naturalisation outre-mer",
    "droit du sol mayotte"
  ],
  "graines_en": [],
  "reddit": [
    "france",
    "AskFrance",
    "expats"
  ]
};

const LANGUES = {
  fr: { news: 'hl=fr&gl=FR&ceid=FR:fr', suggest: 'hl=fr&gl=fr' },
  // Gardee pour la forme des robots jumeaux ; Test Civique ne veille qu'en francais.
  en: { news: 'hl=en-US&gl=US&ceid=US:en', suggest: 'hl=en&gl=us' },
};

const AUJOURDHUI = jourParis();
const erreurs = [];
let appels = 0;

/** Un appel, precede de la pause de politesse sauf pour le premier. */
async function appeler(url, pauseMs = PAUSE_MS) {
  if (appels > 0) await pause(pauseMs);
  appels += 1;
  const reponse = await requete(url, {}, 20000);
  if (!reponse.ok) throw new Error(`${reponse.status} sur ${new URL(url).host}`);
  return reponse;
}

/* ------------------------------------------------------------------- XML */

function decoderEntites(texte) {
  return texte
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(Number.parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .trim();
}

function balise(xml, nom) {
  const m = xml.match(new RegExp(`<${nom}(?:\\s[^>]*)?>([\\s\\S]*?)</${nom}>`));
  return m ? decoderEntites(m[1]) : null;
}

function blocs(xml, nom) {
  return [...xml.matchAll(new RegExp(`<${nom}(?:\\s[^>]*)?>([\\s\\S]*?)</${nom}>`, 'g'))].map((m) => m[1]);
}

function ageHeures(datePub) {
  const t = Date.parse(datePub ?? '');
  return Number.isNaN(t) ? null : Math.round(((Date.now() - t) / 3600000) * 10) / 10;
}

/* ----------------------------------------------------------- Tendances */

async function tendances(geo) {
  const xml = await (await appeler(`https://trends.google.com/trending/rss?geo=${geo}`)).text();
  return blocs(xml, 'item').map((item) => ({
    titre: balise(item, 'title'),
    trafic: balise(item, 'ht:approx_traffic'),
    age_h: ageHeures(balise(item, 'pubDate')),
    articles: blocs(item, 'ht:news_item')
      .slice(0, 3)
      .map((n) => ({
        titre: balise(n, 'ht:news_item_title'),
        source: balise(n, 'ht:news_item_source'),
        url: balise(n, 'ht:news_item_url'),
      })),
  }));
}

/* ----------------------------------------------------------- Actualites */

/** Titre ramene a sa forme la plus simple, pour reconnaitre un doublon entre deux requetes. */
function cleTitre(titre) {
  return titre
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

async function actualites(langue, requeteNews, dejaVus) {
  // `when:3d` fait le tri cote Google ; le filtre sur la date ci-dessous reste le garde-fou.
  const q = encodeURIComponent(`${requeteNews} when:3d`);
  const xml = await (
    await appeler(`https://news.google.com/rss/search?q=${q}&${LANGUES[langue].news}`)
  ).text();

  const articles = [];
  for (const item of blocs(xml, 'item')) {
    const source = balise(item, 'source');
    let titre = balise(item, 'title') ?? '';
    // Google colle « - Source » au titre : on le retire, la source a son propre champ.
    if (source && titre.endsWith(` - ${source}`)) titre = titre.slice(0, -(source.length + 3));
    const age = ageHeures(balise(item, 'pubDate'));
    if (age === null || age > AGE_MAX_H) continue;
    const cle = cleTitre(titre);
    if (!cle || dejaVus.has(cle)) continue;
    dejaVus.add(cle);
    articles.push({ titre, source, age_h: age, frais: age <= FRAIS_H, url: balise(item, 'link') });
  }
  articles.sort((a, b) => a.age_h - b.age_h);
  return articles.slice(0, ARTICLES_MAX);
}

/* ---------------------------------------------------------- Suggestions */

/**
 * Decode une reponse de suggestions selon le jeu de caracteres annonce.
 *
 * ⚠️ Selon la langue et le client, Google repond en UTF-8 ou en ISO-8859-1, et
 * `response.text()` suppose toujours UTF-8 : « où noter » deviendrait
 * « o� noter ». On lit donc les octets, on suit l'en-tete, et sans en-tete on
 * tente un UTF-8 strict avant de retomber sur le latin-1.
 */
async function decoderSuggestions(reponse) {
  const octets = new Uint8Array(await reponse.arrayBuffer());
  const charset = (reponse.headers.get('content-type') ?? '').match(/charset=([^;]+)/i)?.[1]?.trim();
  if (charset) {
    try {
      return new TextDecoder(charset.toLowerCase()).decode(octets);
    } catch {
      // Jeu de caracteres inconnu de TextDecoder : on retombe sur la detection.
    }
  }
  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(octets);
  } catch {
    return new TextDecoder('latin1').decode(octets);
  }
}

async function suggestions(langue, graine) {
  const url =
    'https://suggestqueries.google.com/complete/search?client=firefox' +
    `&${LANGUES[langue].suggest}&q=${encodeURIComponent(graine)}`;
  const texte = await decoderSuggestions(await appeler(url));
  const [, liste] = JSON.parse(texte);
  const graineSimple = graine.trim().toLowerCase();
  return (liste ?? []).filter((s) => typeof s === 'string' && s.trim().toLowerCase() !== graineSimple);
}

/* --------------------------------------------------------------- Reddit */

/**
 * GET minimal, statut, quota et corps, par `node:https`.
 *
 * `node:https` plutot que `fetch` : le seul 403 mesure chez RevealChat venait
 * de `fetch`, et ce client-ci, qui n'envoie que le User-Agent et `Accept`
 * comme curl, est celui qu'on a vu passer a 01:08 le 19/10/2026.
 */
function getRedditNode(url) {
  return new Promise((resoudre, rejeter) => {
    const req = https.get(url, { headers: { 'User-Agent': UA, Accept: '*/*' }, timeout: 20000 }, (res) => {
      const morceaux = [];
      res.on('data', (m) => morceaux.push(m));
      res.on('end', () =>
        resoudre({
          statut: res.statusCode,
          reste: Number.parseFloat(res.headers['x-ratelimit-remaining']),
          reset: Number.parseFloat(res.headers['x-ratelimit-reset']),
          corps: Buffer.concat(morceaux).toString('utf8'),
        }),
      );
    });
    req.on('timeout', () => req.destroy(new Error('delai depasse')));
    req.on('error', rejeter);
  });
}

/**
 * Le meme GET, par `curl`.
 *
 * ⚠️ Mesure le 19/10/2026 vers 11 h : Reddit renvoyait 403 (une page de
 * blocage de 190 Ko) a chaque requete de `node:https`, quel que soit le
 * User-Agent, et 200 a `curl` lance dans la meme minute depuis la meme
 * adresse. C'est donc l'empreinte du client (TLS, HTTP) qui est filtree, pas
 * l'adresse ni le nom qu'on annonce. Le curl de Windows (Schannel) et celui
 * de Git Bash ne presentent pas l'empreinte de Node. Les arguments ne portent
 * aucun secret : le flux est anonyme.
 */
function getRedditCurl(url) {
  return new Promise((resoudre, rejeter) => {
    execFile(
      'curl',
      ['-s', '-S', '-D', '-', '-A', UA, '-H', 'Accept: */*', '--max-time', '20', url],
      { maxBuffer: 50 * 1024 * 1024, encoding: 'utf8', windowsHide: true },
      (erreur, sortie) => {
        if (erreur) return rejeter(erreur);
        // `-D -` ecrit les en-tetes avant le corps, separes par une ligne vide.
        const fin = sortie.indexOf('\r\n\r\n');
        const tete = fin >= 0 ? sortie.slice(0, fin) : sortie;
        const entete = (nom) => tete.match(new RegExp(`^${nom}:\\s*(.+)$`, 'mi'))?.[1]?.trim();
        resoudre({
          statut: Number(tete.match(/^HTTP\/[\d.]+\s+(\d+)/)?.[1]) || 0,
          reste: Number.parseFloat(entete('x-ratelimit-remaining')),
          reset: Number.parseFloat(entete('x-ratelimit-reset')),
          corps: fin >= 0 ? sortie.slice(fin + 4) : '',
        });
      },
    );
  });
}

/**
 * Le client Reddit du moment, `node` ou `curl`.
 *
 * Il part de celui qui a marche au passage precedent (`reddit-vus.json`), et
 * bascule sur l'autre au premier 403 : un refus d'empreinte ne se leve pas en
 * attendant, alors que changer de client le contourne aussitot. La bascule ne
 * se fait qu'une fois par passage, pour ne pas osciller si Reddit refuse
 * tout. Un curl introuvable (ENOENT) laisse Node seul.
 */
let clientReddit = 'node';
let basculeFaite = false;
/** Attente imposee avant le prochain appel Reddit, deduite de la derniere reponse. */
let attenteReddit = 0;

async function appelReddit(url) {
  let essais = 0;
  let dernier = null;
  while (essais < 2) {
    await pause(Math.max(PAUSE_REDDIT_MS, attenteReddit));
    let r;
    try {
      r = clientReddit === 'curl' ? await getRedditCurl(url) : await getRedditNode(url);
    } catch (e) {
      if (clientReddit === 'curl' && e.code === 'ENOENT') {
        clientReddit = 'node';
        basculeFaite = true;
        continue;
      }
      throw e;
    }
    appels += 1;
    const finFenetre = Number.isFinite(r.reset) ? (r.reset + 1) * 1000 : REDDIT_ATTENTE_MAX_MS;
    // Quota epuise (ou en-tete absent) : le prochain appel attend la fenetre suivante.
    attenteReddit = Number.isFinite(r.reste) && r.reste >= 1 ? 0 : Math.min(finFenetre, REDDIT_ATTENTE_MAX_MS);
    if (r.statut === 200) return r.corps;
    dernier = r.statut;
    if (r.statut !== 429 && r.statut !== 403) throw new Error(`${r.statut} sur www.reddit.com (${clientReddit})`);
    attenteReddit = Math.min(finFenetre, REDDIT_ATTENTE_MAX_MS);
    if (r.statut === 403 && !basculeFaite) {
      basculeFaite = true;
      const ancien = clientReddit;
      clientReddit = clientReddit === 'node' ? 'curl' : 'node';
      console.error(`  Reddit refuse ${ancien} (403) : bascule sur ${clientReddit}`);
      // Changer de client n'use pas d'essai : le refus venait du client, pas du sub.
      continue;
    }
    essais += 1;
  }
  throw new Error(`${dernier ?? "refus"} sur www.reddit.com (${clientReddit}), apres une nouvelle tentative`);
}

/** Les premiers titres du top de la semaine, dans l'ordre du flux. */
async function reddit(sub) {
  const xml = await appelReddit(`https://www.reddit.com/r/${encodeURIComponent(sub)}/top/.rss?t=week`);
  return blocs(xml, 'entry')
    .slice(0, REDDIT_MAX)
    .map((entree, i) => {
      const publie = balise(entree, 'published') ?? balise(entree, 'updated');
      return {
        rang: i + 1,
        id: balise(entree, 'id'),
        titre: balise(entree, 'title'),
        publie,
        age_h: ageHeures(publie),
        url: entree.match(/<link[^>]*href="([^"]+)"/)?.[1] ?? null,
      };
    });
}

/* ------------------------------------------------------- Flux officiels */

/** Les elements d'un flux RSS ou Atom : titre, lien, date, resume. */
function elementsFlux(xml) {
  const items = blocs(xml, 'item');
  const entrees = items.length ? items : blocs(xml, 'entry');
  return entrees.map((e) => ({
    titre: balise(e, 'title') ?? '',
    url: balise(e, 'link') || e.match(/<link[^>]*href="([^"]+)"/)?.[1] || null,
    publie: balise(e, 'pubDate') ?? balise(e, 'published') ?? balise(e, 'updated') ?? balise(e, 'issued') ?? balise(e, 'dc:date') ?? null,
    resume: (balise(e, 'description') ?? balise(e, 'summary') ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 300),
  }));
}

/**
 * Un flux officiel, filtre sur nos sujets. `format` dit l'encodage : le Senat
 * publie en ISO-8859-15, que `response.text()` lirait de travers.
 */
async function flux({ nom, url, format, filtre }) {
  const reponse = await appeler(url);
  const octets = new Uint8Array(await reponse.arrayBuffer());
  const xml = new TextDecoder(/iso-8859-15/.test(format ?? '') ? 'iso-8859-15' : 'utf-8').decode(octets);
  const motif = filtre ? new RegExp(filtre, 'iu') : null;
  return elementsFlux(xml)
    .map((e) => ({ ...e, age_h: ageHeures(e.publie) }))
    .filter((e) => e.age_h === null || e.age_h <= AGE_FLUX_H)
    .filter((e) => !motif || motif.test(`${e.titre} ${e.resume}`))
    .sort((a, b) => (a.age_h ?? 1e9) - (b.age_h ?? 1e9))
    .slice(0, ARTICLES_MAX)
    .map((e) => ({ nom, ...e }));
}

/* ------------------------------------------------------- Journal officiel */

/**
 * Lit une archive tar en memoire et rend les fichiers dont le nom passe le
 * motif. Rien n'est ecrit sur le disque, rien n'est execute : seuls les XML
 * du sommaire sont lus comme du texte.
 */
function lireTar(octets, motif) {
  const fichiers = [];
  let i = 0;
  while (i + 512 <= octets.length) {
    const nom = octets.subarray(i, i + 100).toString('utf8').replace(/\0.*$/s, '');
    if (!nom) break;
    const taille = Number.parseInt(octets.subarray(i + 124, i + 136).toString('utf8').replace(/\0.*$/s, '').trim() || '0', 8);
    const debut = i + 512;
    if (motif.test(nom)) fichiers.push({ nom, texte: octets.subarray(debut, debut + taille).toString('utf8') });
    i = debut + Math.ceil(taille / 512) * 512;
  }
  return fichiers;
}

/**
 * Le sommaire du Journal officiel des dernieres heures, filtre sur nos sujets.
 *
 * L'index Apache de la DILA liste une archive par edition du JO
 * (`JORF_AAAAMMJJ-HHMMSS.tar.gz`, 60 a 225 Ko vers 00 h 25) et des archives
 * lourdes de mise a jour du fonds vers 21 h (2 a 6 Mo), qu'on ignore par la
 * taille. Pas de JO certains jours (le lundi 19/10/2026 par exemple) : ce
 * n'est pas une panne. Chaque texte du sommaire est un
 * `<LIEN_TXT idtxt titretxt/>` ; le lien public est sur Legifrance.
 */
async function journalOfficiel(cfg) {
  const index = await (await appeler(cfg.index)).text();
  const motif = new RegExp(cfg.motif_archive, 'g');
  const archives = [];
  for (const m of index.matchAll(motif)) {
    const [, jour, heure, taille] = m;
    const octets = Number.parseFloat(taille) * (taille.endsWith('M') ? 1024 * 1024 : 1024);
    const quand = Date.parse(`${jour.slice(0, 4)}-${jour.slice(4, 6)}-${jour.slice(6)}T${heure.slice(0, 2)}:${heure.slice(2, 4)}:00+02:00`);
    if (octets <= cfg.taille_max_octets && Date.now() - quand <= cfg.heures * 3600000) archives.push({ nom: `JORF_${jour}-${heure}.tar.gz`, jour });
  }
  const inclure = new RegExp(cfg.inclure, 'iu');
  const exclure = cfg.exclure ? new RegExp(cfg.exclure, 'iu') : null;
  const textes = [];
  const editions = [];
  for (const a of archives) {
    const brut = Buffer.from(await (await appeler(new URL(a.nom, cfg.index).href)).arrayBuffer());
    const sommaires = lireTar(zlib.gunzipSync(brut), new RegExp(cfg.entree_sommaire));
    for (const { texte } of sommaires) {
      const titreJo = balise(texte, 'TITRE') ?? a.nom;
      editions.push(titreJo);
      let ministere = null;
      for (const m of texte.matchAll(/<TITRE_TM[^>]*>([\s\S]*?)<\/TITRE_TM>|<LIEN_TXT\s+([^>]*?)\/?>/g)) {
        if (m[1] !== undefined) { ministere = decoderEntites(m[1]); continue; }
        const attr = (n) => m[2].match(new RegExp(`${n}="([^"]*)"`))?.[1];
        const titre = decoderEntites(attr('titretxt') ?? '');
        const id = attr('idtxt');
        if (!titre || !inclure.test(titre) || (exclure && exclure.test(titre))) continue;
        textes.push({ jo: titreJo, ministere, titre, url: id ? cfg.lien_texte.replace('{idtxt}', id) : null });
      }
    }
  }
  return { archives: archives.map((a) => a.nom), editions, textes };
}

/* ---------------------------------------------------------------- Main */

let config = lireJson(FICHIER_REQUETES, null);
const configManquante = !config;
config ??= {};
const champsAjoutes = Object.keys(REQUETES_DEPART).filter((cle) => !(cle in config));
for (const cle of champsAjoutes) config[cle] = REQUETES_DEPART[cle];
if (configManquante || champsAjoutes.length) ecrireJson(FICHIER_REQUETES, config);

const sortie = {
  genere_le: heureParis(),
  note: `actualites : ${AGE_MAX_H} h au plus, frais = moins de ${FRAIS_H} h, dedoublonnees entre requetes, ${ARTICLES_MAX} max par requete. suggestions : nouvelle = jamais vue avant aujourd'hui. reddit : top de la semaine, ordre du flux, nouveau = post jamais vu avant aujourd'hui, reutilise = deja lu lors d'un passage plus tot aujourd'hui.`,
  journal_officiel: null,
  flux: [],
  tendances: {},
  actualites: { fr: [], en: [] },
  suggestions: { premier_passage: false, nouvelles: { fr: [], en: [] }, fr: [], en: [] },
  reddit: { premier_passage: false, subs: [] },
  erreurs,
};

if (config.jorf) {
  try {
    sortie.journal_officiel = await journalOfficiel({ heures: 36, ...config.jorf });
  } catch (e) {
    erreurs.push({ source: 'journal_officiel', message: messageErreur(e) });
  }
}
for (const f of config.flux ?? []) {
  try {
    sortie.flux.push(...(await flux(f)));
  } catch (e) {
    erreurs.push({ source: `flux.${f.nom}`, message: messageErreur(e) });
  }
}

for (const geo of config.tendances_geos ?? []) {
  try {
    sortie.tendances[geo] = await tendances(geo);
  } catch (e) {
    erreurs.push({ source: `trends.${geo}`, message: messageErreur(e) });
    sortie.tendances[geo] = [];
  }
}

for (const langue of ['fr', 'en']) {
  const dejaVus = new Set();
  for (const r of config[`requetes_${langue}`] ?? []) {
    try {
      sortie.actualites[langue].push({ requete: r, articles: await actualites(langue, r, dejaVus) });
    } catch (e) {
      erreurs.push({ source: `news.${langue}.${r}`, message: messageErreur(e) });
    }
  }
}

/*
  Memoire des suggestions : la date de premiere apparition. « Nouvelle »
  veut dire vue pour la premiere fois aujourd'hui, donc un second passage le
  meme jour garde les memes nouvelles au lieu de les effacer. `depuis` date la
  memoire : le jour de sa creation, tout est nouveau et rien ne l'est vraiment.
*/
const memoire = lireJson(FICHIER_VUES, null) ?? { depuis: AUJOURDHUI, fr: {}, en: {} };
memoire.depuis ??= AUJOURDHUI;
sortie.suggestions.premier_passage = memoire.depuis === AUJOURDHUI;
for (const langue of ['fr', 'en']) {
  memoire[langue] ??= {};
  for (const graine of config[`graines_${langue}`] ?? []) {
    try {
      const liste = (await suggestions(langue, graine)).map((texte) => {
        memoire[langue][texte] ??= AUJOURDHUI;
        return { texte, nouvelle: memoire[langue][texte] === AUJOURDHUI };
      });
      sortie.suggestions[langue].push({ graine, suggestions: liste });
      for (const s of liste) if (s.nouvelle) sortie.suggestions.nouvelles[langue].push(s.texte);
    } catch (e) {
      erreurs.push({ source: `suggest.${langue}.${graine}`, message: messageErreur(e) });
    }
  }
}
ecrireJson(FICHIER_VUES, memoire);

/* Reddit : meme logique de memoire, sur l'identifiant du post (stable, au contraire du titre). */
const memoireReddit = lireJson(FICHIER_REDDIT_VUS, null) ?? { depuis: AUJOURDHUI, ids: {} };
memoireReddit.ids ??= {};
memoireReddit.depuis ??= AUJOURDHUI;
sortie.reddit.premier_passage = memoireReddit.depuis === AUJOURDHUI;
if (memoireReddit.client === 'curl' || memoireReddit.client === 'node') clientReddit = memoireReddit.client;
const sansReddit = process.argv.includes('--sans-reddit');
const debutReddit = Date.now();
const fichier = path.join(DOSSIER, `${AUJOURDHUI}.json`);
const dejaLus = new Map(
  (lireJson(fichier, null)?.reddit?.subs ?? [])
    .filter((s) => Array.isArray(s.posts) && s.posts.length > 0)
    .map((s) => [s.sub, s]),
);
const subs = config.reddit ?? [];
const aLire = subs.filter((s) => !dejaLus.has(s)).length;
if (sansReddit) sortie.reddit.saute = true;
else if (subs.length) {
  console.error(
    aLire
      ? `Reddit : ${aLire} subs a lire (${subs.length - aLire} repris), environ une minute par sub (quota anonyme).`
      : `Reddit : les ${subs.length} subs sont deja lus aujourd'hui, repris sans appel.`,
  );
}
for (const [i, sub] of subs.entries()) {
  if (dejaLus.has(sub)) {
    sortie.reddit.subs.push({ ...dejaLus.get(sub), reutilise: true });
    if (!sansReddit) console.error(`  r/${sub} : deja lu aujourd'hui, repris`);
    continue;
  }
  // Sans Reddit, on ne garde que ce qui etait deja lu : rien n'est appele.
  if (sansReddit) continue;
  if (Date.now() - debutReddit + attenteReddit > REDDIT_BUDGET_MS) {
    const restants = subs.slice(i).filter((s) => !dejaLus.has(s));
    erreurs.push({ source: 'reddit', message: `budget de ${REDDIT_BUDGET_MS / 60000} min atteint, non lus : ${restants.join(', ')}` });
    break;
  }
  try {
    const posts = (await reddit(sub)).map((p) => {
      const cle = p.id ?? p.url ?? p.titre;
      memoireReddit.ids[cle] ??= AUJOURDHUI;
      return { ...p, nouveau: memoireReddit.ids[cle] === AUJOURDHUI };
    });
    sortie.reddit.subs.push({ sub, posts });
    console.error(`  r/${sub} : ${posts.length} titres (+${Math.round((Date.now() - debutReddit) / 1000)} s)`);
  } catch (e) {
    erreurs.push({ source: `reddit.${sub}`, message: messageErreur(e) });
    console.error(`  r/${sub} : echec, ${messageErreur(e)}`);
  }
}
// Le client qui a marche sert de point de depart au prochain passage.
if (sortie.reddit.subs.some((s) => !s.reutilise)) memoireReddit.client = clientReddit;
sortie.reddit.client = clientReddit;
ecrireJson(FICHIER_REDDIT_VUS, memoireReddit);

ecrireJson(fichier, sortie);

/* -------------------------------------------------------------- Resume */

const l = [`# Veille du ${AUJOURDHUI}`, `Fichier : ${relatif(fichier)}`];
const jo = sortie.journal_officiel;
l.push('', '## Journal officiel (36 dernieres heures)');
if (!jo) l.push('non lu (voir les erreurs)');
else {
  l.push(`Editions lues : ${jo.editions.join(' ; ') || 'aucune (pas de JO publie sur la fenetre)'}`);
  l.push(jo.textes.length ? jo.textes.map((t) => `- ${t.titre} [${t.ministere ?? '?'}] ${t.url ?? ''}`).join('\n') : 'Aucun texte sur nos sujets.');
}
l.push('', `## Flux officiels (7 jours, filtres) : ${sortie.flux.length}`);
for (const f of sortie.flux.slice(0, 20)) l.push(`- [${f.nom}] ${f.titre} (${f.age_h ?? '?'} h) ${f.url ?? ''}`);
for (const [geo, liste] of Object.entries(sortie.tendances)) {
  l.push('', `## Tendances Google ${geo}`);
  l.push(liste.length ? liste.map((t) => `${t.titre} (${t.trafic ?? '?'})`).join(' ; ') : 'aucune');
}
for (const langue of ['fr', 'en']) {
  l.push('', `## Actualites ${langue} (72 h)`);
  for (const { requete: r, articles } of sortie.actualites[langue]) {
    if (!articles.length) {
      l.push(`- ${r} : rien`);
      continue;
    }
    l.push(`- ${r} (${articles.length}) :`);
    for (const a of articles.slice(0, 3)) l.push(`  - ${a.titre} [${a.source ?? '?'}, ${a.age_h} h]`);
  }
}
for (const langue of ['fr', 'en']) {
  const nouvelles = sortie.suggestions.nouvelles[langue];
  const total = sortie.suggestions[langue].reduce((s, g) => s + g.suggestions.length, 0);
  l.push('', `## Suggestions ${langue} : ${total} lues, ${nouvelles.length} nouvelles`);
  if (sortie.suggestions.premier_passage) l.push('(premier passage : tout est nouveau, la comparaison commence demain)');
  else if (nouvelles.length) l.push(nouvelles.map((s) => `« ${s} »`).join(', '));
}

/*
  Reddit : le premier jour, les trois premiers de chaque sub pour donner le
  ton. Ensuite, seulement les nouveaux, qui sont ce qui a change depuis hier.
*/
const premierReddit = sortie.reddit.premier_passage;
const nouveauxReddit = sortie.reddit.subs.reduce((s, x) => s + x.posts.filter((p) => p.nouveau).length, 0);
const repris = sortie.reddit.subs.filter((s) => s.reutilise).length;
l.push(
  '',
  sortie.reddit.saute
    ? `## Reddit : saute (--sans-reddit), ${repris} subs repris du passage precedent`
    : `## Reddit, top de la semaine : ${sortie.reddit.subs.length} subs lus (dont ${repris} repris), ${premierReddit ? 'premier passage' : `${nouveauxReddit} nouveaux`}`,
);
for (const { sub, posts } of sortie.reddit.subs) {
  const montres = premierReddit ? posts.slice(0, 3) : posts.filter((p) => p.nouveau).slice(0, 5);
  if (!montres.length) continue;
  l.push(`- r/${sub} :`);
  for (const p of montres) l.push(`  - ${premierReddit ? '' : 'NOUVEAU '}#${p.rang} ${p.titre}`);
}
if (erreurs.length) {
  l.push('', '## Erreurs');
  for (const e of erreurs) l.push(`- ${e.source} : ${e.message}`);
}
l.push('', `${appels} appels.`);
console.log(l.join('\n'));
