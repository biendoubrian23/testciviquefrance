import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-frais-universite-hors-ue-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/frais-inscription-universites-france-etudiants-hors-ue-2026`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "frais-inscription-universites-france-etudiants-hors-ue-2026",
  titre: "Frais université 2026 : 2 895 € en licence pour les étudiants hors-UE, ce que change le décret du 19 mai",
  titreSeo: "Frais université 2026 : 2 895 € en licence pour les étudiants hors-UE, ce que change le décret du 19 mai",
  resume: "Le décret n° 2026-385 du 19 mai 2026 met fin aux exonérations massives dans les universités françaises. À partir de septembre 2026, la plupart des étudiants hors UE/EEE/Suisse paieront 2 895 €/an en licence et 3 941 €/an en master. Qui est exonéré automatiquement, comment réduire la facture et quel impact sur votre titre de séjour.",
  chapo: "**Publié le 25 mai 2026.** Depuis la rentrée 2019, les étudiants hors Union européenne sont officiellement tenus de payer des frais d'inscription beaucoup plus élevés dans les universités françaises : **2 895 € par an en licence** et **3 941 € en master**, contre 178 € et 254 € pour les étudiants européens. Dans les faits, la plupart des universités accordaient des exonérations massives, et la majorité des étudiants extracommunautaires payaient finalement le tarif normal.",
  publieLe: "2026-05-25",
  modifieLe: "2026-05-25",
  minutes: 12,
  theme: "frais inscription étudiants étrangers 2026",
  motsCles: [
    "frais inscription étudiants étrangers 2026",
    "frais différenciés étudiants extracommunautaires",
    "prix université France étranger 2026",
    "décret 2026-385 étudiants étrangers",
    "combien coûte une université en France pour un étranger",
    "exonération frais université étranger France",
    "étudiant marocain prix université France 2026",
    "étudiant algérien frais université France 2026",
    "Choose France Higher Education décret mai 2026",
    "droits différenciés université France hors-UE",
    "frais inscription licence master hors-UE France",
    "exonération boursiers campus france",
  ],
  rubrique: "actualites",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
  },
  blocs: [
    {
      type: "p",
      texte: "Ce régime de tolérance s'arrête avec le **décret n° 2026-385 du 19 mai 2026**, publié au Journal officiel le 20 mai. Le texte, qui s'inscrit dans le plan *« Choose France For Higher Education »* du ministre Philippe Baptiste, plafonne désormais les exonérations discrétionnaires à **30 % des étudiants hors-UE** dès la rentrée 2026-2027, avec une réduction progressive les années suivantes.",
    },
    {
      type: "p",
      texte: "Pour les étudiants marocains, algériens, tunisiens, camerounais, sénégalais et de tous les autres pays hors EEE/Suisse qui candidatent à une université française pour septembre 2026, la question est simple : **vais-je payer 2 895 € ou 178 € ?** Ce guide répond précisément, catégorie par catégorie.",
    },
    { type: "h2", texte: "Ce que change le décret du 19 mai 2026", id: "ce-que-dit-le-decret" },
    { type: "h3", texte: "Un décret, pas de nouveaux tarifs" },
    {
      type: "p",
      texte: "Première précision importante : le décret n° 2026-385 **ne crée pas de nouveaux tarifs**. Les montants de 2 895 € (licence) et 3 941 € (master) existent depuis la circulaire ministérielle de novembre 2019. Ce qui change, c'est que les universités ne peuvent plus les contourner librement.",
    },
    {
      type: "p",
      texte: "Jusqu'à présent, chaque université fixait elle-même le nombre d'exonérations accordées à ses étudiants extracommunautaires. Beaucoup exonéraient 80 %, 90 %, voire 100 % d'entre eux. Le nouveau décret impose un **plafond légal** à ces exonérations discrétionnaires.",
    },
    {
      type: "encadre",
      texte: "Source : [Légifrance, Décret n° 2026-385 du 19 mai 2026 relatif aux modalités d'exonération des droits d'inscription des étudiants étrangers](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054113646)",
      ton: "bleu",
    },
    { type: "h3", texte: "Le tableau des frais en vigueur (rentrée 2026-2027)" },
    {
      type: "tableau",
      entetes: ["Niveau", "Tarif hors-UE", "Tarif UE/France"],
      lignes: [
        ["Licence (L1, L2, L3)", "**2 895 €/an**", "178 €/an"],
        ["Master (M1, M2)", "**3 941 €/an**", "254 €/an"],
        ["Doctorat", "**Même tarif que les étudiants UE**", "380 €/an env."],
      ],
    },
    {
      type: "p",
      texte: "Les doctorants hors-UE sont explicitement exonérés de la différenciation tarifaire : ils paient le même tarif que les doctorants français et européens.",
    },
    { type: "h3", texte: "Le calendrier des plafonds d'exonération" },
    {
      type: "tableau",
      entetes: ["Rentrée", "Plafond d'exonérations discrétionnaires"],
      lignes: [
        ["2026-2027", "30 % des étudiants extracommunautaires"],
        ["2027-2028", "25 %"],
        ["2028-2029 et au-delà", "20 %"],
      ],
    },
    {
      type: "p",
      texte: "Concrètement : si une université accueille 1 000 étudiants hors-UE, elle ne pourra exonérer que 300 d'entre eux à la discrétion du président d'université en 2026-2027. Les 700 autres paieront 2 895 € en licence ou 3 941 € en master.",
    },
    { type: "h2", texte: "Qui est concerné par ces frais élevés ?", id: "qui-est-concerne" },
    { type: "h3", texte: "Les étudiants hors UE/EEE/Suisse" },
    {
      type: "p",
      texte: "Ces frais s'appliquent à tout étudiant ressortissant d'un pays **hors Union européenne, hors Espace économique européen (EEE) et hors Suisse**. Concrètement, cela concerne notamment les étudiants du Maghreb (Maroc, Algérie, Tunisie), d'Afrique subsaharienne, du Moyen-Orient, d'Asie, d'Amérique latine, etc.",
    },
    { type: "p", texte: "**Ne sont pas concernés** :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les citoyens de l'Union européenne (27 États membres) ;",
        "Les ressortissants de l'Islande, du Liechtenstein, de la Norvège (EEE) ;",
        "Les ressortissants de la Suisse ;",
        "Les Andorrans et Monégasques.",
      ],
    },
    { type: "h3", texte: "Et si j'ai déjà un titre de séjour en France ?" },
    {
      type: "p",
      texte: "Avoir un titre de séjour en France ne suffit pas à bénéficier du tarif européen, **sauf** si vous relevez d'une des catégories d'exonération automatique listées ci-dessous. Le statut de **résident de longue durée** (carte de résident 10 ans ou carte UE-longue durée), en revanche, ouvre droit à une exonération automatique.",
    },
    { type: "h3", texte: "BTS et IUT : les filières non concernées" },
    {
      type: "p",
      texte: "Les BTS (brevet de technicien supérieur), dispensés dans les lycées publics relevant du ministre de l'Éducation nationale, **ne sont pas soumis aux droits différenciés** : les frais y restent uniformes pour tous les étudiants. Les DUT/BUT dans les IUT, qui font partie des universités, sont en revanche potentiellement concernés si l'université décide d'appliquer les droits différenciés à ces formations.",
    },
    {
      type: "encadre",
      texte: "Vérifiez toujours auprès de l'établissement visé si votre formation est concernée.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Qui est automatiquement exonéré ? Les catégories protégées",
      id: "categories-exonerees",
    },
    {
      type: "p",
      texte: "Le décret prévoit plusieurs catégories d'étudiants qui bénéficient d'une **exonération automatique**, indépendante du plafond des 30 %. Ces étudiants paient le tarif européen (178 € en licence, 254 € en master) même s'ils sont hors-UE.",
    },
    { type: "h3", texte: "Exonérations automatiques (hors quota)" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Réfugiés et bénéficiaires de la protection subsidiaire** : statut reconnu par l'OFPRA ou la CNDA.",
        "**Apatrides** reconnus en France.",
        "**Résidents de longue durée** : détenteurs d'une carte de résident 10 ans ou d'une carte UE-longue durée délivrée par la France.",
        "**Doctorants** : quel que soit leur pays d'origine, ils paient le même tarif que les doctorants français.",
        "**Étudiants en classes préparatoires aux grandes écoles (CPGE)** : exonérés du dispositif.",
        "**Boursiers du gouvernement français** : lauréats des programmes Campus France, Eiffel Excellence, etc.",
        "**Étudiants en mobilité d'échange** : dans le cadre d'accords bilatéraux entre établissements avec réciprocité (ex. : accords Erasmus+ pour les partenaires hors-UE, conventions d'échange).",
      ],
    },
    { type: "h3", texte: "Exonérations discrétionnaires (dans la limite du quota)" },
    {
      type: "p",
      texte: "En dehors des catégories ci-dessus, le président d'université peut exonérer d'autres étudiants sur **critères sociaux**, dans la limite du plafond applicable (30 % en 2026-2027). Ces exonérations sont accordées selon les règles internes de chaque établissement, il n'existe pas de critère national unifié.",
    },
    { type: "h3", texte: "La protection des étudiants déjà exonérés" },
    {
      type: "p",
      texte: "Si vous bénéficiiez d'une exonération pour l'année 2025-2026, **vous êtes protégé jusqu'à la fin de votre cycle** (licence, master), à condition de rester dans le même établissement et de poursuivre la même formation. Cette protection n'est **pas** automatiquement transférable si vous changez d'université.",
    },
    {
      type: "encadre",
      texte: "Source : [Légifrance, Décret n° 2026-385 du 19 mai 2026](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054113646)",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Rentrée 2026-2027 : quand ces règles entrent-elles en vigueur ?",
      id: "quand-cela-sapplique",
    },
    {
      type: "p",
      texte: "Le décret est entré en vigueur le **21 mai 2026**. Les nouvelles règles de plafonnement des exonérations s'appliquent à partir de la **rentrée universitaire de septembre 2026**.",
    },
    { type: "h3", texte: "Ce que ça signifie concrètement" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les universités doivent, avant la rentrée 2026, définir et communiquer leur politique d'exonération en respectant le plafond des 30 %.",
        "Les décisions d'admission et de tarification pour septembre 2026 **peuvent déjà intégrer ce nouveau cadre**.",
        "Si vous êtes en cours de candidature pour septembre 2026, renseignez-vous **dès maintenant** auprès du service des inscriptions de votre université cible sur votre tarif applicable.",
      ],
    },
    { type: "h3", texte: "Ce que ça ne change pas (encore)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les formations hors champ du décret (BTS, CPGE, lycées professionnels) continuent sur l'ancien régime.",
        "Les étudiants en cycle en cours et déjà exonérés conservent leur exonération jusqu'à la fin de leur cycle.",
        "Le décret ne modifie pas les frais pour les étudiants UE/EEE/Suisse.",
      ],
    },
    {
      type: "h2",
      texte: "Comment savoir si vous serez concerné par ces frais ?",
      id: "comment-savoir-si-vous-payez",
    },
    { type: "p", texte: "Trois questions permettent de déterminer votre situation :" },
    { type: "h3", texte: "Étape 1 : Votre nationalité" },
    {
      type: "p",
      texte: "Êtes-vous ressortissant d'un pays hors UE/EEE/Suisse ? Si oui, vous êtes **a priori** soumis aux droits différenciés. Si non, vous payez le tarif normal européen.",
    },
    { type: "h3", texte: "Étape 2 : Votre statut" },
    { type: "p", texte: "Relevez-vous d'une catégorie d'exonération automatique ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous êtes réfugié, bénéficiaire de la protection subsidiaire ou apatride → **exonéré automatiquement**.",
        "Vous êtes résident de longue durée (carte 10 ans ou UE-LD) → **exonéré automatiquement**.",
        "Vous êtes boursier du gouvernement français → **exonéré automatiquement**.",
        "Vous êtes en échange dans le cadre d'un accord bilatéral avec réciprocité → **exonéré automatiquement**.",
        "Vous êtes inscrit en doctorat → **exonéré automatiquement**.",
      ],
    },
    { type: "h3", texte: "Étape 3 : La politique de votre université" },
    {
      type: "p",
      texte: "Si vous n'entrez dans aucune catégorie automatique, votre tarif dépend de la politique d'exonération discrétionnaire de l'université. **Demandez par écrit** au service des inscriptions :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si vous serez soumis aux droits différenciés ;",
        "Si une exonération discrétionnaire est possible et selon quels critères ;",
        "Le délai de réponse.",
      ],
    },
    {
      type: "p",
      texte: "Conservez toujours une **trace écrite** de la réponse. En cas de désaccord, le médiateur académique ou le Défenseur des droits peuvent être saisis.",
    },
    {
      type: "h2",
      texte: "Comment réduire la facture ? Bourses et alternatives",
      id: "reduire-la-facture",
    },
    { type: "h3", texte: "1. Les bourses du gouvernement français" },
    {
      type: "p",
      texte: "Le programme **Eiffel Excellence** (Campus France) offre des bourses couvrant frais d'inscription, logement et allocation mensuelle pour des masters et doctorats. Concurrence élevée : candidatez dès octobre.",
    },
    {
      type: "p",
      texte: "Le programme **Bourses du gouvernement français** (BGF) via les ambassades françaises dans votre pays couvre frais d'inscription et frais de vie. Renseignez-vous auprès de l'Institut français ou de l'ambassade dans votre pays d'origine.",
    },
    {
      type: "encadre",
      texte: "Campus France : [campusfrance.org/fr/bourses-eiffel](https://www.campusfrance.org/fr/bourses-eiffel)",
      ton: "bleu",
    },
    { type: "h3", texte: "2. Les bourses des collectivités et fondations" },
    {
      type: "p",
      texte: "Certaines régions françaises (Île-de-France, Occitanie, etc.) et fondations d'entreprises proposent des aides aux étudiants étrangers méritants. Ces dispositifs varient selon l'université et la formation.",
    },
    { type: "h3", texte: "3. Les universités qui maintiennent une politique d'exonération large" },
    {
      type: "p",
      texte: "Toutes les universités ne réduiront pas leurs exonérations au strict minimum. Certaines, notamment celles très tournées vers l'international, pourraient maintenir des taux d'exonération proches du plafond de 30 %. Comparez les politiques d'accueil entre établissements.",
    },
    { type: "h3", texte: "4. Les grandes écoles et établissements privés" },
    {
      type: "p",
      texte: "Paradoxalement, certaines grandes écoles ont des frais élevés **pour tous** les étudiants (3 000 € à 15 000 €/an), mais proposent des **bourses sur dossier social** indépendantes du statut UE/hors-UE. Le calcul coût-bourse peut être favorable selon les cas.",
    },
    { type: "h3", texte: "5. Le lien avec votre titre de séjour étudiant" },
    {
      type: "p",
      texte: "Attention à un point souvent méconnu : lors du **renouvellement de votre titre de séjour étudiant**, la préfecture vérifie vos ressources financières. Payer 2 895 € de frais d'inscription n'affecte pas directement les conditions de ressources (calculées sur les revenus, non les dépenses). Cela dit, anticiper ce budget dans votre plan de financement est indispensable pour éviter des difficultés.",
    },
    {
      type: "p",
      texte: "Voir notre guide : [Titre de séjour étudiant : inscription, renouvellement, droits](/articles/titre-sejour-etudiant-france-guide-2025)",
    },
    { type: "h2", texte: "Questions fréquentes", id: "faq" },
    { type: "h2", texte: "Sources officielles", id: "sources" },
    {
      type: "p",
      texte: "Tous les faits de ce guide sont vérifiés sur les sources officielles suivantes, à jour au 25 mai 2026 :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "[Légifrance : Décret n° 2026-385 du 19 mai 2026 relatif aux modalités d'exonération des droits d'inscription des étudiants étrangers](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054113646)",
        "[Campus France : Bourses Eiffel Excellence](https://www.campusfrance.org/fr/bourses-eiffel)",
        "Couverture presse : RFI, InfoMigrants, L'Orient-Le Jour, L'Étudiant",
      ],
    },
    {
      type: "p",
      texte: "Les politiques d'exonération varient par établissement : vérifiez auprès de votre université avant toute inscription.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le décret du 19 mai 2026 marque la fin de la tolérance généralisée vis-à-vis des frais différenciés pour les étudiants hors-UE. À partir de septembre 2026, la majorité des étudiants extracommunautaires paieront effectivement 2 895 € en licence ou 3 941 € en master, sauf s'ils relèvent d'une catégorie d'exonération automatique (réfugiés, résidents de longue durée, boursiers du gouvernement français, doctorants) ou obtiennent une exonération discrétionnaire de leur université. La clé : **demandez par écrit à votre université** quelle sera votre situation avant de vous inscrire, et explorez dès maintenant les dispositifs de bourses disponibles.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Suis-je concerné si j'ai déjà un titre de séjour en France ?",
      reponse: "Pas automatiquement. Un titre de séjour temporaire (étudiant, salarié, vie privée et familiale) ne vous exonère pas des droits différenciés. En revanche, si vous êtes détenteur d'une carte de résident 10 ans ou d'une carte UE-longue durée délivrée par la France, vous bénéficiez d'une exonération automatique et payez le tarif UE.",
    },
    {
      question: "Les frais s'appliquent-ils en BTS ou en IUT ?",
      reponse: "Les BTS sont dispensés dans des lycées relevant du ministère de l'Éducation nationale et ne sont pas soumis aux droits différenciés. Les DUT/BUT en IUT (qui font partie des universités) peuvent l'être, selon la politique de l'université. Vérifiez auprès de l'établissement visé.",
    },
    {
      question: "Un étudiant marocain ou algérien est-il concerné ?",
      reponse: "Oui, les ressortissants du Maroc, d'Algérie et de Tunisie sont hors UE/EEE/Suisse et sont donc en principe soumis aux droits différenciés. Ils peuvent bénéficier d'une exonération automatique s'ils sont boursiers du gouvernement français, réfugiés, résidents de longue durée, doctorants ou en échange via un accord bilatéral avec réciprocité. Sinon, ils dépendent de la politique discrétionnaire de leur université.",
    },
    {
      question: "Je suis boursier Campus France : suis-je exonéré ?",
      reponse: "Si vous bénéficiez d'une bourse du gouvernement français (programme Eiffel, BGF, etc.), vous êtes automatiquement exonéré des droits différenciés et payez le tarif UE. Les bourses accordées par votre gouvernement ou par une fondation privée (qui ne sont pas des bourses du gouvernement français) ne donnent pas droit à cette exonération automatique.",
    },
    {
      question: "Combien coûte un doctorat pour un étudiant hors-UE en France ?",
      reponse: "Les doctorants hors-UE sont exonérés des droits différenciés : ils paient le même tarif que les doctorants français et européens, soit environ 380 € par an (droits d'inscription en école doctorale). C'est l'une des rares exceptions automatiques prévues par le décret 2026-385.",
    },
    {
      question: "J'étais exonéré en 2025-2026 : vais-je perdre mon exonération ?",
      reponse: "Non, si vous bénéficiiez d'une exonération pour 2025-2026, vous êtes protégé jusqu'à la fin de votre cycle universitaire (licence ou master), à condition de rester dans le même établissement et de poursuivre la même formation. Si vous changez d'université ou de filière, cette protection ne suit pas.",
    },
  ],
};

export default article;
