/**
 * Les garde-fous du robot SEO, avant toute publication.
 *
 *   npm run seo:verifier            verifie tous les articles
 *   npm run seo:verifier -- --tous  idem, et traite chaque avertissement comme bloquant
 *
 * Porte depuis `CosmetWiki/scripts/seo/verifier.mjs` (Cosme Check), meme sortie
 * (`ERREUR` bloque, `avert.` signale), reecrit pour Test Civique France : les
 * lecteurs prennent des decisions de vie sur ces pages (un titre de sejour,
 * une naturalisation, un recours), donc les regles portent sur la source
 * officielle, la neutralite politique, l'absence de conseil individuel et de
 * promesse, et la lisibilite pour un lecteur dont le francais n'est pas la
 * langue maternelle.
 *
 * ## Pourquoi ce script existe
 *
 * Le robot publie sans relecture humaine. Ce script **est** la relecture du
 * fond : il sort 1 a la premiere regle cassee, et la doctrine du robot
 * (`docs/seo/ROBOT.md`, section 5) lui interdit de pousser tant qu'il ne sort
 * pas 0. `npm run seo:banc` relit ensuite les pages construites.
 *
 * ## Deux niveaux d'exigence
 *
 * Les 154 articles migres le 20/10/2026 ont ete ecrits avant cette doctrine :
 * beaucoup citent des montants, des delais et des chiffres sans source
 * officielle datee. Les bloquer tous empecherait toute publication. Donc :
 *
 * - **les regles dures bloquent partout** : tiret cadratin, lien casse, image
 *   sans credit, vocabulaire militant, promesse de resultat, prix de la
 *   formation, question d'entrainement hors des thematiques officielles,
 *   article mal enregistre ;
 * - **les regles de la doctrine bloquent les articles « stricts »** : publies
 *   ou retouches depuis `REGLAGES.json > doctrine_depuis` (le jour ou le robot
 *   commence). Un ancien article que le robot optimise met a jour sa date
 *   `modifieLe` : il devient strict, et doit etre mis au niveau. Pour les
 *   autres, ces regles avertissent.
 *
 * | bloque partout | bloque un article strict (avertit sinon) |
 * |---|---|
 * | tiret cadratin ; lien interne casse ; image sans credit ni licence | une source sans date de lecture (`luLe`) ; aucune source officielle |
 * | vocabulaire militant ou injurieux | un montant en euros sans source officielle datee |
 * | une promesse de resultat (« vous obtiendrez votre titre ») | un titre alarmiste sans source officielle lue dans les 3 derniers jours |
 * | un prix de la formation Test Civique | « vraies questions de l'examen », « questions officielles » |
 * | un `qcm` hors des cinq thematiques officielles | une signature autre que « Équipe Le Test Civique », une couverture distante ou sans texte alternatif |
 * | un article mal enregistre (slug, fichier, rubrique, dates) | toutes les regles de forme ci-dessous |
 *
 * Avertissements de forme (bloquants pour un article strict) : longueurs
 * (titre, resume, mots), lisibilite, phrases trop longues, terme
 * administratif jamais explique, tutoiement (le site vouvoie), genre presume,
 * moins de 3 liens internes ou de 3 h2, pas de FAQ, duree de lecture fausse.
 *
 * Les articles modifies depuis le dernier commit sont marques `*` : ce sont
 * ceux du jour. Les fichiers d'articles sont du TypeScript sans autre import
 * que des types : Node 24 les execute tel quel.
 */

import { execSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { registerHooks } from 'node:module';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const racine = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

/* Node avertit qu'il relit un `.ts` comme module ES : attendu ici, et ce bruit noierait la sortie. */
const avertirNode = process.emitWarning;
process.emitWarning = (alerte, ...reste) => {
  const code = typeof reste[0] === 'object' ? reste[0]?.code : reste[1];
  if (code === 'MODULE_TYPELESS_PACKAGE_JSON' || /MODULE_TYPELESS_PACKAGE_JSON/.test(String(alerte))) return;
  avertirNode.call(process, alerte, ...reste);
};

/* L'alias `@/` de Next (la racine du depot) et les imports sans extension, traduits pour Node. */
const RACINE_URL = pathToFileURL(racine + path.sep).href;
registerHooks({
  resolve(specifier, context, nextResolve) {
    let s = specifier.startsWith('@/') ? RACINE_URL + specifier.slice(2) : specifier;
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

const site = (chemin) => import(pathToFileURL(path.join(racine, chemin)).href);
const toutBloquant = process.argv.includes('--tous');

const DOSSIER = path.join(racine, 'contenu', 'articles');

const REGLAGES = (() => {
  try {
    return JSON.parse(readFileSync(path.join(racine, 'docs', 'seo', 'REGLAGES.json'), 'utf8'));
  } catch {
    return {};
  }
})();
// `SEO_DOCTRINE_DEPUIS` sert aux essais du verificateur lui-meme, jamais au robot.
const DOCTRINE_DEPUIS = process.env.SEO_DOCTRINE_DEPUIS || REGLAGES.doctrine_depuis || '2026-10-21';
const LIENS_MIN = REGLAGES.liens_internes_minimum ?? 3;
const [MOTS_MIN, MOTS_MAX] = REGLAGES.mots_par_article ?? [700, 1600];
const MOTS_PAR_PHRASE_MAX = REGLAGES.mots_par_phrase_moyenne_max ?? 18;
const PHRASE_LONGUE = REGLAGES.phrase_longue_mots ?? 30;
const LISIBILITE_MIN = REGLAGES.lisibilite_min ?? 55;
const TITRE_SEO_MAX = REGLAGES.titre_seo_max ?? 50;
const JOURS_SOURCE_ACTUALITE = REGLAGES.jours_source_titre_actualite ?? 3;

/* ------------------------------------------------------------------ regles */

/**
 * Le vocabulaire militant ou injurieux, dans un sens ou dans l'autre. Le site
 * rapporte des faits, des textes et des dates ; une position politique, si
 * elle est utile, est attribuee et sourcee, jamais reprise a son compte. Un
 * mot de cette liste ne passe que dans une citation attribuee (bloc
 * `citation` avec `source`).
 */
const MILITANT =
  /grand remplacement|submersion migratoire|invasion migratoire|racaille\w*|islamo-?gauchis\w*|\bfachos?\b|fascis\w*|bien-pensan\w*|immigrationnis\w*|xénophobes? (?:du gouvernement|de l'État)|chasse aux (?:migrants|étrangers|sans-papiers)|rafles?\b|politique (?:honteuse|criminelle|inhumaine)|\bhonteu(?:x|se|ses)\b|\binadmissible\b|\bignoble\b|votez (?:pour|contre)|il faut voter|appel(?:ons|ez) à manifester/i;

/** Ce qui sonne comme une opinion : bloque un article strict, avertit sinon. */
const OPINION = /\bscandal\w*|\binacceptable\b|\bscandaleu\w*|\bheureusement\b le gouvernement|\bmalheureusement\b la loi|\bla bonne (?:loi|réforme)|\bla mauvaise (?:loi|réforme)|loi (?:injuste|absurde|liberticide)/i;

/**
 * Une promesse de resultat. L'article explique la regle generale ; il ne
 * promet jamais qu'un dossier passera, qu'un titre sera delivre ou qu'un
 * examen sera reussi.
 */
const PROMESSE =
  /vous (?:obtiendrez|aurez|décrocherez) (?:votre|la|le|une) (?:naturalisation|nationalité|régularisation|titre de séjour)|(?:réussite|naturalisation|régularisation|obtention|succès)s? (?:est |sont )?(?:garantie?s?|assurée?s?)\b|garantit (?:votre|la|une) (?:réussite|naturalisation|obtention|régularisation)|à coup sûr|réussite assurée|100 ?% de réussite|sans risque de refus/i;

/**
 * Un prix de la formation Test Civique : les prix vivent dans l'app et chez
 * Stripe, et l'article renvoie a `/tarifs`. Un montant en euros dans le meme
 * morceau qu'une formule ou un produit du site est un prix de la formation.
 */
const PRIX_FORMATION =
  /(?:Test Civique France|testciviquefrance\.fr|[Nn]otre (?:formation|plateforme|abonnement|offre|pack)|[Ff]ormule (?:[Pp]remium|[Ss]tandard)|[Aa]bonnement (?:[Pp]remium|[Ss]tandard)|[Pp]ack [Ee]xamen)[^.!?]{0,60}(?:co[ûu]te?n?t?|prix|tarifs?|à partir de|seulement|abonnement à)[^.!?]{0,30}\d+(?:[.,]\d+)?\s?(?:€|euros?\b)|\d+(?:[.,]\d+)?\s?(?:€|euros?\b)\s?(?:par mois|\/ ?mois|par an|\/ ?an)?[^.!?]{0,40}(?:sur Test Civique France|chez Test Civique France|[Nn]otre (?:formation|abonnement|offre|pack)|[Ff]ormule (?:[Pp]remium|[Ss]tandard))/;

/** Une promesse citee pour la denoncer (« Regularisation garantie » d'un escroc) n'en est pas une. */
const DENONCE = /arnaque|escroc|escroquerie|méfi|fraud|\bFAUX\b|faux (?:avocats?|conseillers?|sites?)|promettent|prétendent|signal(?:e|es)? d'alerte/i;

/** Une liste de requetes collee dans le texte : du bourrage de mots-cles, que Google penalise et que le lecteur ne lit pas. */
const BOURRAGE = /recherches? fr[ée]quentes?s*:|(?:"[^"]{3,60}",s*){3,}/i;

/** Un montant en euros : un frais administratif officiel ne s'ecrit qu'avec sa source datee. */
const EUROS = /\d+(?:[.,]\d+)?\s?(?:€|euros?\b|EUR\b)|€\s?\d/i;

/** Ce que le referentiel ne permet pas d'affirmer : aucune question n'est une « vraie question de l'examen ». */
const VRAIES_QUESTIONS = /vraies? questions? (?:de|du) l?['’]?(?:examen|test)|questions? (?:officielles|réelles) (?:de|du) l?['’]?(?:examen|test)|questions? (?:tombées|posées) (?:à|a) l['’]examen (?:réel|officiel)|\bquestions officielles\b/i;

/**
 * Un titre qui annonce un changement : il doit s'appuyer sur une source
 * officielle lue dans les derniers jours. Jamais d'alarmisme faux : aucun
 * titre ne fait croire qu'un droit disparait, qu'une loi s'applique ou qu'un
 * delai change si ce n'est pas vrai et source a la date du jour.
 */
const TITRE_ALARME =
  /\b(?:fin d[eu]s?|supprim\w*|interdi\w*|obligatoire dès|dès (?:le |aujourd'hui|demain|lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche)|c'est fini|urgent|alerte|attention|menac\w*|expuls\w*|nouvelle loi|nouveau décret|change(?:nt)? (?:tout|dès)|ce qui change|durcissement|durci\w*|hausse|augment\w*|délai\w*)\b/i;

/** Les domaines des sources officielles. */
const SOURCES_OFFICIELLES =
  /(?:legifrance\.gouv\.fr|service-public\.(?:gouv\.)?fr|interieur\.gouv\.fr|administration-etrangers-en-france\.interieur\.gouv\.fr|immigration\.interieur\.gouv\.fr|ofii\.fr|ofpra\.gouv\.fr|cnda\.fr|conseil-etat\.fr|conseil-constitutionnel\.fr|journal-officiel\.gouv\.fr|insee\.fr|\.gouv\.fr|senat\.fr|assemblee-nationale\.fr|defenseurdesdroits\.fr|eur-lex\.europa\.eu|europa\.eu)/i;

/** Ce que l'outil photo laisse a ecrire, et qu'il ne faut jamais publier. */
const A_ECRIRE = /<(À ÉCRIRE|A ECRIRE)>/i;

/** Le tutoiement, que le site n'emploie pas (il vouvoie). */
const TUTOIEMENT = /(?<![\p{L}'’-])(?:tu|toi|ton|ta|tes|t['’](?:as|es))(?![\p{L}'’-])/iu;

/** Les adjectifs que le vouvoiement accorde sans y penser : « vous êtes prêt ». Tourner autrement. */
const GENRE =
  /\bvous (?:êtes|serez|étiez|vous sentez|vous sentirez) (?:s[ûu]rs?|certains?|prêts?|fatigués?|perdus?|convaincus?|tentés?|obligés?|habitués?|pressés?|stressés?|déçus?|contents?|heureux|ravis?|curieux|inquiets?|seuls?|marié|mariée|né|née|arrivé|arrivée|installé|installée|entré|entrée)\b/i;

/**
 * Les termes administratifs qu'un lecteur dont le francais n'est pas la
 * langue maternelle, ou un ado de 15 ans, ne connait pas. La premiere fois
 * qu'un article en emploie un, le meme morceau de texte l'explique (une
 * parenthese, un deux-points, « c'est », « qui », « autrement dit »).
 */
const TERMES = [
  'préfecture', 'titre de séjour', 'CESEDA', 'ANEF', 'OFII', 'naturalisation par décret', 'naturalisation par déclaration', 'CIR',
  'contrat d\'intégration républicaine', 'récépissé', 'OQTF', 'carte de résident', 'carte de séjour pluriannuelle', 'VLS-TS',
  'APS', 'DELF', 'TCF', 'Légifrance', 'Journal officiel', 'décret', 'arrêté', 'circulaire', 'AGDREF', 'CNDA', 'OFPRA',
  'timbre fiscal', 'CAF', 'Défenseur des droits', 'recours gracieux', 'recours contentieux', 'tribunal administratif',
];
const EXPLIQUE = /\(|:|c['’]est |qui |autrement dit|signifie|veut dire|désigne|soit |= /i;

const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const DATE_ISO = /^\d{4}-\d{2}-\d{2}$/;
const IMAGE_LOCALE = /^\/images\/articles\/[A-Za-z0-9/_-]+\.webp$/;
const IMAGE_UNSPLASH = /^https:\/\/images\.unsplash\.com\/[A-Za-z0-9_./?&=%-]+$/;
const AUTEUR_ROBOT = 'Équipe Le Test Civique';

/* ---------------------------------------------------------------- lecture */

function modifies() {
  try {
    const sortie = execSync('git status --porcelain -- contenu public/images/articles', { cwd: racine, encoding: 'utf8' });
    return new Set(
      sortie
        .split('\n')
        .filter(Boolean)
        .map((ligne) => ligne.slice(3).trim().replace(/^"|"$/g, '').replace(/\\/g, '/')),
    );
  } catch {
    return new Set();
  }
}

/** Chaque morceau de texte d'un article, avec ce qu'il est : c'est l'unite des regles de fond. */
function morceaux(a) {
  const m = [
    ['titre', a.titre],
    ['titreSeo', a.titreSeo],
    ['resume', a.resume],
    ['chapo', a.chapo],
    ['theme', a.theme],
    ['couverture.alt', a.couverture?.alt],
  ];
  for (const [i, b] of (a.blocs ?? []).entries()) {
    const ou = `bloc ${i + 1} (${b.type})`;
    if (b.type === 'liste') for (const item of b.items ?? []) m.push([ou, item]);
    else if (b.type === 'encadre') m.push([ou, b.titre], [ou, b.texte]);
    else if (b.type === 'image') m.push([`${ou} alt`, b.alt], [ou, b.legende], [`${ou} credit`, b.credit]);
    else if (b.type === 'citation') m.push([`${ou}${b.source ? ' attribuee' : ''}`, b.texte], [ou, b.source]);
    else if (b.type === 'tableau') for (const c of [...(b.entetes ?? []), ...(b.lignes ?? []).flat(), b.legende]) m.push([ou, c]);
    else if (b.type === 'qcm') m.push([ou, b.question], ...(b.choix ?? []).map((c) => [ou, c]), [ou, b.explication]);
    else m.push([ou, b.texte]);
  }
  for (const [i, q] of (a.faq ?? []).entries()) m.push([`faq ${i + 1}`, q.question], [`faq ${i + 1}`, q.reponse]);
  return m.filter(([, t]) => typeof t === 'string' && t !== '');
}

/** Les cibles des liens `[libelle](cible)` d'un texte. */
const liens = (t) => [...t.matchAll(/\]\(([^)\s]+)\)/g)].map((m) => m[1]);
/** Le texte sans balisage. */
const brut = (t) => t.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*|==|\+\+/g, '').replace(/\*([^*]+)\*/g, '$1');

/** Syllabes approximatives d'un mot francais : les groupes de voyelles, moins le e muet final. */
function syllabes(mot) {
  const m = mot.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  let n = (m.match(/[aeiouy]+/g) ?? []).length;
  if (n > 1 && /[^aeiouy]e?s?$/.test(m) && /e(s|nt)?$/.test(m)) n -= 1;
  return Math.max(1, n);
}

/**
 * La lisibilite du texte courant : nombre moyen de mots par phrase, phrases
 * trop longues, et l'indice de Kandel et Moles (1958), l'adaptation francaise
 * de Flesch : 207 - 1,015 x (mots / phrases) - 73,6 x (syllabes / mots).
 * Une mesure grossiere, d'ou un avertissement (bloquant pour un article strict).
 */
function lisibilite(textes) {
  const phrases = textes
    .map(brut)
    .join(' ')
    .split(/(?<=[.!?…])\s+|\s*\n+\s*/)
    .map((p) => p.trim())
    .filter((p) => p.split(/\s+/).length >= 3);
  const motsDe = (p) => p.split(/\s+/).filter((x) => /[a-zà-ÿ0-9]/i.test(x));
  const mots = phrases.flatMap(motsDe);
  if (!phrases.length || !mots.length) return null;
  const moyenne = mots.length / phrases.length;
  const syl = mots.reduce((s, m) => s + syllabes(m), 0) / mots.length;
  return { moyenne, longues: phrases.filter((p) => motsDe(p).length > PHRASE_LONGUE).length, indice: 207 - 1.015 * moyenne - 73.6 * syl };
}

/** Charge un module ; rend `{ module }` ou `{ erreur }`, jamais d'exception. */
async function charger(fichier) {
  try {
    return { module: await import(pathToFileURL(fichier).href) };
  } catch (e) {
    return { erreur: e?.message ?? String(e) };
  }
}

const joursEntre = (a, b) => Math.round((Date.parse(`${b}T12:00:00Z`) - Date.parse(`${a}T12:00:00Z`)) / 86400000);
const AUJOURDHUI = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris' }).format(new Date());

/* -------------------------------------------------------------- execution */

const ecarts = [];
const dejaDits = new Set();
const signaler = (qui, message) => ecarts.push({ qui, message, bloquant: true });
const avertir = (qui, message) => ecarts.push({ qui, message, bloquant: toutBloquant });

const { RUBRIQUES, THEMATIQUES_OFFICIELLES, AUTEURS } = await site('contenu/rubriques.ts');
const { ancres } = await site('lib/article.ts');

/* Les articles, lus fichier par fichier : un fichier oublie du registre doit se voir. */
const articles = [];
for (const nom of readdirSync(DOSSIER).filter((f) => f.endsWith('.ts')).sort()) {
  const fichier = path.join(DOSSIER, nom);
  const qui = nom.replace(/\.ts$/, '');
  const { module, erreur } = await charger(fichier);
  if (erreur) {
    signaler(qui, `le fichier ne s'execute pas : ${erreur}`);
    continue;
  }
  if (!module.default || typeof module.default !== 'object') {
    signaler(qui, "pas d'export par defaut (`export default article;`)");
    continue;
  }
  articles.push({ qui, nom, fichier, source: readFileSync(fichier, 'utf8'), a: module.default });
}

/* Le registre : il se charge, et il liste chaque fichier. */
{
  const { module, erreur } = await charger(path.join(racine, 'contenu', 'articles.ts'));
  if (erreur) signaler('registre', `contenu/articles.ts refuse de se charger : ${erreur}`);
  else {
    const inscrits = new Set((module.ARTICLES ?? []).map((a) => a.slug));
    for (const { qui, a } of articles) if (!inscrits.has(a.slug)) signaler(qui, 'absent de contenu/articles.ts (ligne import et entree du tableau ARTICLES)');
  }
}

const slugs = new Set(articles.map((x) => x.a.slug));

/* Les pages connues, pour les liens internes : les dossiers de `app/` qui ont une page. */
const PAGES_CONNUES = new Set(['/', '/articles']);
(function parcourir(dossier, chemin) {
  for (const e of readdirSync(dossier, { withFileTypes: true })) {
    if (!e.isDirectory()) continue;
    if (e.name.startsWith('(') || e.name.startsWith('[') || e.name.startsWith('_') || e.name === 'api') continue;
    const sous = path.join(dossier, e.name);
    const c = `${chemin}/${e.name}`;
    if (existsSync(path.join(sous, 'page.tsx'))) PAGES_CONNUES.add(c);
    parcourir(sous, c);
  }
})(path.join(racine, 'app'), '');
PAGES_CONNUES.add('/auteurs/brian-biendou');
const ancresDe = new Map(articles.map(({ a }) => [`/articles/${a.slug}`, new Set([...ancres(a.blocs ?? []).filter(Boolean), 'questions-frequentes', 'sources'])]));

const aJour = modifies();
let stricts = 0;

for (const { qui, nom, fichier, source, a } of articles) {
  const strict = (a.modifieLe ?? '') >= DOCTRINE_DEPUIS || (a.publieLe ?? '') >= DOCTRINE_DEPUIS;
  if (strict) stricts += 1;
  /** Une regle de la doctrine : bloque un article strict, avertit sinon. */
  const doctrine = (message) => (strict ? signaler(qui, message) : avertir(qui, `${message} (article d'avant la doctrine : a mettre au niveau a sa prochaine retouche)`));
  /** Une regle de forme : avertit, bloque un article strict. */
  const forme = (message) => (strict ? signaler(qui, `${message} (article du robot : un avertissement compte comme une erreur)`) : avertir(qui, message));

  /* ---- enregistrement ---- */
  if (!SLUG.test(a.slug ?? '') || a.slug.length > 120) signaler(qui, `slug invalide : « ${a.slug} » ([a-z0-9-])`);
  else if (strict && a.slug.length > 60) signaler(qui, `slug de ${a.slug.length} caracteres (60 au plus pour un nouvel article)`);
  if (`${a.slug}.ts` !== nom) signaler(qui, `le fichier doit s'appeler ${a.slug}.ts, comme son slug`);
  if (!RUBRIQUES.includes(a.rubrique)) signaler(qui, `rubrique inconnue : « ${a.rubrique} » (${RUBRIQUES.join(', ')})`);
  if (!AUTEURS.includes(a.auteur)) signaler(qui, `signature inconnue : « ${a.auteur} » (${AUTEURS.join(', ')})`);
  else if (strict && a.auteur !== AUTEUR_ROBOT && a.publieLe >= DOCTRINE_DEPUIS) signaler(qui, `un article du robot est signe « ${AUTEUR_ROBOT} », jamais d'une personne`);
  if (!DATE_ISO.test(a.publieLe ?? '')) signaler(qui, 'publieLe absent ou pas au format AAAA-MM-JJ');
  if (!DATE_ISO.test(a.modifieLe ?? '')) signaler(qui, 'modifieLe absent ou pas au format AAAA-MM-JJ');
  else if (a.modifieLe < a.publieLe) signaler(qui, 'modifieLe anterieur a publieLe');
  else if (a.modifieLe > AUJOURDHUI) signaler(qui, `modifieLe dans le futur (${a.modifieLe})`);
  if (!a.chapo?.trim()) signaler(qui, 'pas de chapo');
  if (!Array.isArray(a.blocs) || a.blocs.length === 0) signaler(qui, 'aucun bloc');

  /* ---- typographie, sur le fichier brut ---- */
  const tirets = [...source.matchAll(/[\u2013\u2014]/g)];
  if (tirets.length) {
    const ligne = source.slice(0, tirets[0].index).split('\n').length;
    signaler(qui, `${tirets.length} tiret(s) cadratin ou demi-cadratin, le premier ligne ${ligne} : couper la phrase, ou une virgule, un deux-points, une parenthese`);
  }

  /* ---- fond ---- */
  const textes = morceaux(a);
  let euros = null;
  for (const [ou, texte] of textes) {
    const attribuee = / attribuee$/.test(ou);
    const signe = (motif, nature, conseil, fn = signaler) => {
      const m = texte.match(motif);
      const cle = `${qui}|${nature}|${ou}|${texte}`;
      if (!m || dejaDits.has(cle)) return;
      dejaDits.add(cle);
      fn(qui, `${nature}, ${ou} : « ${m[0]} »${conseil ? ` (${conseil})` : ''}`);
    };
    if (!attribuee) signe(MILITANT, 'vocabulaire militant ou injurieux', "le site rapporte des faits ; une position s'attribue a qui la tient, dans un bloc citation avec sa source");
    if (!attribuee) signe(OPINION, 'tournure d\'opinion', 'neutralite politique : des faits, des textes, des dates', (q, m) => doctrine(m));
    if (!DENONCE.test(texte)) signe(PROMESSE, 'promesse de resultat', "l'article explique la regle generale, il ne promet jamais l'issue d'un dossier ni d'un examen");
    signe(BOURRAGE, 'bourrage de mots-cles', 'les requetes vont dans motsCles, jamais dans le texte', (q, m) => doctrine(m));
    signe(PRIX_FORMATION, 'prix de la formation ecrit en dur', 'les prix vivent dans l app et chez Stripe : renvoyer a /tarifs');
    signe(VRAIES_QUESTIONS, 'question presentee comme officielle', "suivre le referentiel ; ne jamais ecrire « vraies questions de l'examen » ni « questions officielles »", (q, m) => doctrine(m));
    signe(A_ECRIRE, 'texte laisse a ecrire', null);
    if (!euros && EUROS.test(texte)) euros = [ou, texte.match(EUROS)[0]];
    if (!/ (alt|credit)$/.test(ou)) {
      const v = texte.match(TUTOIEMENT);
      if (v && !attribuee) forme(`tutoiement, ${ou} : « ${v[0]} » (le site vouvoie)`);
      const g = texte.match(GENRE);
      if (g) forme(`genre presume, ${ou} : « ${g[0]} » (tourner la phrase sans accorder au lecteur)`);
    }
  }

  /* ---- les questions d'entrainement ---- */
  for (const [i, b] of (a.blocs ?? []).entries()) {
    if (b.type !== 'qcm') continue;
    if (!THEMATIQUES_OFFICIELLES.includes(b.thematique)) signaler(qui, `bloc ${i + 1} (qcm) : thematique « ${b.thematique} » hors des cinq thematiques officielles`);
    if (!Array.isArray(b.choix) || b.choix.length < 2 || !(b.reponse >= 0 && b.reponse < b.choix.length)) signaler(qui, `bloc ${i + 1} (qcm) : choix ou bonne reponse invalides`);
    if (!b.explication?.trim()) signaler(qui, `bloc ${i + 1} (qcm) : pas d'explication`);
  }

  /* ---- sources ---- */
  const tousLiens = textes.flatMap(([, t]) => liens(t));
  const externes = [...tousLiens.filter((c) => /^https?:\/\//.test(c)), ...(a.sources ?? []).map((s) => s.url)];
  const officielles = (a.sources ?? []).filter((s) => SOURCES_OFFICIELLES.test(s.url ?? ''));
  const officiellesDatees = officielles.filter((s) => DATE_ISO.test(s.luLe ?? ''));
  for (const s of a.sources ?? []) {
    if (!/^https:\/\//.test(s.url ?? '')) signaler(qui, `source « ${s.titre} » : adresse invalide (${s.url})`);
    if (s.luLe !== undefined && !DATE_ISO.test(s.luLe)) signaler(qui, `source « ${s.titre} » : luLe pas au format AAAA-MM-JJ`);
    else if (s.luLe && s.luLe > AUJOURDHUI) signaler(qui, `source « ${s.titre} » : luLe dans le futur`);
    if (!s.luLe) doctrine(`source « ${s.titre} » sans date de lecture (luLe)`);
  }
  if (!officiellesDatees.length) doctrine("aucune source officielle datee dans `sources` (Legifrance, service-public, interieur.gouv.fr, ANEF, OFII, prefecture, Journal officiel, INSEE), avec luLe");
  if (euros && !officiellesDatees.length) doctrine(`montant « ${euros[1]} » (${euros[0]}) sans source officielle datee : un frais administratif s'ecrit avec sa source et sa date`);
  const alarme = `${a.titre} ${a.titreSeo}`.match(TITRE_ALARME);
  if (alarme) {
    const fraiche = officiellesDatees.some((s) => joursEntre(s.luLe, a.modifieLe ?? AUJOURDHUI) <= JOURS_SOURCE_ACTUALITE);
    if (!fraiche) doctrine(`le titre annonce un changement (« ${alarme[0]} ») sans source officielle lue dans les ${JOURS_SOURCE_ACTUALITE} jours : jamais d'alarmisme faux`);
  }

  /* ---- liens ---- */
  const versArticles = new Set();
  for (const cible of tousLiens) {
    if (/^https?:\/\//.test(cible)) {
      if (/^https?:\/\/(www\.)?testciviquefrance\.fr/i.test(cible)) forme(`lien absolu vers le site : ${cible} (ecrire le chemin, /articles/...)`);
      continue;
    }
    if (!cible.startsWith('/')) {
      signaler(qui, `lien ni externe ni interne : ${cible}`);
      continue;
    }
    const [cheminQ, ancre] = cible.split('#');
    const chemin = cheminQ.split('?')[0];
    const art = chemin.match(/^\/articles\/([^/]+)$/);
    if (art) {
      if (!slugs.has(art[1])) {
        signaler(qui, `lien casse vers un article inexistant : ${cible}`);
        continue;
      }
      if (art[1] === a.slug) avertir(qui, `l'article se cite lui-meme : ${cible}`);
      else versArticles.add(chemin);
      if (ancre && !ancresDe.get(chemin)?.has(ancre)) signaler(qui, `ancre inconnue dans ${chemin} : #${ancre}`);
      continue;
    }
    const page = chemin.replace(/\/$/, '') || '/';
    if (!PAGES_CONNUES.has(page) && !/^\/(dashboard|onboarding)(\/|$)/.test(page)) signaler(qui, `lien interne vers une page inconnue : ${cible}`);
  }
  for (const l of a.aLireAussi ?? []) {
    if (!slugs.has(l.slug)) signaler(qui, `« A lire aussi » vers un article inexistant : ${l.slug}`);
    else versArticles.add(`/articles/${l.slug}`);
  }

  /* ---- images : le credit est une obligation de licence ---- */
  const images = (a.blocs ?? []).filter((b) => b.type === 'image');
  if (!a.couverture?.src) signaler(qui, 'pas de couverture');
  if (a.couverture?.position !== undefined && !/^\d{1,3}% \d{1,3}%$/.test(a.couverture.position)) {
    signaler(qui, `couverture.position « ${a.couverture.position} » : deux pourcentages separes par une espace, par exemple « 50% 40% »`);
  }
  for (const img of [a.couverture, ...images].filter(Boolean)) {
    const src = img.src ?? '';
    if (IMAGE_UNSPLASH.test(src)) {
      if (strict && a.publieLe >= DOCTRINE_DEPUIS) signaler(qui, `image ${src} : un nouvel article prend une photo libre locale (npm run seo:photo), pas une adresse distante`);
    } else if (!IMAGE_LOCALE.test(src)) {
      signaler(qui, `image hors format : ${src} (attendu /images/articles/<nom>.webp)`);
      continue;
    } else {
      if (!existsSync(path.join(racine, 'public', src))) signaler(qui, `image absente du disque : public${src}`);
      const petite = src.replace(/\.webp$/, '-s.webp');
      if (!existsSync(path.join(racine, 'public', petite))) signaler(qui, `petite taille absente : public${petite} (700 px)`);
    }
    if (!img.credit?.trim()) signaler(qui, `image ${src} sans credit`);
    if (!img.licence?.trim()) signaler(qui, `image ${src} sans licence`);
    if (!img.source?.trim()) signaler(qui, `image ${src} sans source (la page d'origine est obligatoire)`);
    if (!img.alt?.trim() && (img !== a.couverture || strict)) forme(`image ${src} sans texte alternatif`);
    if (!(img.largeur > 0 && img.hauteur > 0)) signaler(qui, `image ${src} sans largeur ni hauteur`);
  }

  /* ---- forme ---- */
  if ((a.titreSeo ?? '').length > TITRE_SEO_MAX) forme(`titreSeo de ${a.titreSeo.length} caracteres (${TITRE_SEO_MAX} au plus : le site ajoute « | Test Civique France »)`);
  const r = (a.resume ?? '').length;
  if (r < 50 || r > 160) forme(`resume de ${r} caracteres (50 a 160 : il est repris tel quel par Google et les IA)`);
  if (versArticles.size < LIENS_MIN) forme(`${versArticles.size} lien(s) vers d'autres articles (${LIENS_MIN} au moins)`);
  const h2 = (a.blocs ?? []).filter((b) => b.type === 'h2').length;
  if (h2 < 3) forme(`${h2} section(s) h2 (3 au moins : le sommaire et l'appel du milieu en ont besoin)`);
  if (externes.length === 0) forme('aucune source externe');
  if (!a.faq?.length) forme('pas de FAQ (3 ou 4 questions, reprises des suggestions Google)');
  else if (a.faq.length < 3) forme(`FAQ de ${a.faq.length} question(s) (3 ou 4)`);
  const ctas = (a.blocs ?? []).filter((b) => b.type === 'cta').length;
  if (ctas > 1) forme(`${ctas} blocs cta (un au plus : la page place deja les autres appels)`);

  const courant = textes.filter(([ou]) => (ou === 'chapo' || ou.startsWith('bloc') || ou.startsWith('faq')) && !/ (alt|credit)$/.test(ou)).map(([, t]) => t);
  const compter = (liste) => liste.map(brut).join(' ').split(/\s+/).filter(Boolean).length;
  const mots = compter(courant);
  // Le plafond ne vaut que pour le corps redige : ni la FAQ ni les cellules des tableaux (lecon de Cosme Check, 19/10/2026).
  const corps = compter(textes.filter(([ou]) => (ou === 'chapo' || ou.startsWith('bloc')) && !/ (alt|credit)$/.test(ou) && !/\(tableau\)$/.test(ou)).map(([, t]) => t));
  if (corps < MOTS_MIN || corps > MOTS_MAX) forme(`${corps} mots dans le corps, hors FAQ et tableaux (${MOTS_MIN} a ${MOTS_MAX})`);
  const minutes = Math.max(1, Math.round(mots / 200));
  if (Math.abs((a.minutes ?? 0) - minutes) > 1) forme(`minutes: ${a.minutes}, le texte en demande environ ${minutes} (mots / 200)`);

  /* ---- lisibilite : un lecteur dont le francais n'est pas la langue maternelle doit suivre ---- */
  const lis = lisibilite(courant);
  if (lis) {
    if (lis.moyenne > MOTS_PAR_PHRASE_MAX) forme(`phrases de ${lis.moyenne.toFixed(1)} mots en moyenne (${MOTS_PAR_PHRASE_MAX} au plus : couper)`);
    if (lis.longues > 0) forme(`${lis.longues} phrase(s) de plus de ${PHRASE_LONGUE} mots`);
    if (lis.indice < LISIBILITE_MIN) forme(`lisibilite ${lis.indice.toFixed(0)} (Kandel-Moles, ${LISIBILITE_MIN} au moins : mots plus courts, phrases plus courtes)`);
  }
  for (const terme of TERMES) {
    const motif = new RegExp(`(^|[^\\p{L}])${terme.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^\\p{L}]|$)`, 'iu');
    const premier = courant.find((t) => motif.test(brut(t)));
    if (premier && !EXPLIQUE.test(brut(premier))) forme(`terme « ${terme} » jamais explique la premiere fois qu'il apparait`);
  }

  const relatif = path.relative(racine, fichier).split(path.sep).join('/');
  if (aJour.has(relatif) || [...aJour].some((m) => m.endsWith('/') && relatif.startsWith(m))) ecarts.push({ qui, marque: true });
}

/* ------------------------------------------------------------------ sortie */

const marques = new Set(ecarts.filter((e) => e.marque).map((e) => e.qui));
const resume = process.argv.includes('--resume');
let erreurs = 0;
let avertissements = 0;
const parQui = new Map();
for (const e of ecarts.filter((x) => !x.marque)) {
  const nom = `${e.qui}${marques.has(e.qui) ? ' *' : ''}`;
  if (e.bloquant) {
    erreurs += 1;
    console.log(`ERREUR  ${nom} : ${e.message}`);
  } else {
    avertissements += 1;
    parQui.set(e.qui, (parQui.get(e.qui) ?? 0) + 1);
    // Les avertissements des anciens articles sont nombreux : `--resume` les compte au lieu de les lister.
    if (!resume || marques.has(e.qui)) console.log(`avert.  ${nom} : ${e.message}`);
  }
}
if (resume && parQui.size) console.log(`(avertissements resumes : ${parQui.size} articles ; relancer sans --resume pour le detail)`);

console.log(
  `\n${articles.length} articles (${stricts} soumis a la doctrine depuis le ${DOCTRINE_DEPUIS}), ${marques.size} modifie(s) depuis le dernier commit (*) : ` +
    `${erreurs} erreur(s), ${avertissements} avertissement(s).` +
    (erreurs ? '\nBLOQUE : corriger chaque ERREUR avant de publier.' : '\nOK : rien ne bloque la publication.'),
);
process.exitCode = erreurs > 0 ? 1 : 0;
