import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-generaux-3.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/arnaques-etrangers-france-2026-faux-avocats-prefecture-anef`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "arnaques-etrangers-france-2026-faux-avocats-prefecture-anef",
  titre: "Les 7 arnaques qui ciblent les étrangers en France, comment ne pas se faire piéger",
  titreSeo: "Les 7 arnaques qui ciblent les étrangers en France, comment ne pas se faire piéger",
  resume: "Faux avocats en immigration, faux sites préfecture, fausses convocations par email, faux logements, faux contrats de travail, arnaques transferts d'argent, promesses de régularisation bidon... Les 7 arnaques les plus courantes en 2026 et comment les reconnaître en 30 secondes.",
  chapo: "Chaque année, des milliers d'étrangers en France perdent des centaines, parfois des milliers, d'euros à cause d'arnaques qui les visent spécifiquement. Faux avocats en immigration, faux sites préfecture, fausses promesses de régularisation… Les escrocs savent que vous êtes pressé, stressé par vos papiers, et parfois isolé. Ils exploitent votre méconnaissance du système administratif français pour vous soutirer de l'argent. Le pire ? La plupart des victimes n'osent pas porter plainte, par peur de se retrouver \"dans le radar\" de l'administration. Ce guide expose les 7 arnaques les plus courantes en 2026, comment les reconnaître en 30 secondes, et surtout quoi faire si vous êtes déjà tombé dans le piège.",
  publieLe: "2026-04-09",
  modifieLe: "2026-04-09",
  minutes: 18,
  theme: "arnaques étrangers France",
  motsCles: [
    "arnaques étrangers France",
    "faux avocat immigration France",
    "arnaque préfecture titre de séjour",
    "faux site ANEF arnaque",
    "arnaque régularisation sans papiers France",
    "escroquerie étranger France 2026",
    "fausse convocation préfecture mail",
    "arnaque logement étranger",
    "arnaque Western Union étranger",
    "faux contrat de travail régularisation",
    "signaler arnaque étranger France",
    "porter plainte arnaque immigration",
    "arnaque titre de séjour",
    "arnaque papiers France",
    "se protéger arnaques étranger",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
  },
  blocs: [
    { type: "h2", texte: "Arnaque n°1 : Les faux avocats en immigration", id: "arnaque-1-faux-avocats" },
    {
      type: "p",
      texte: "C'est l'arnaque la plus répandue et la plus destructrice. Des individus se présentent comme \"avocats spécialisés en immigration\" ou \"consultants en droit des étrangers\" et promettent de régulariser votre situation moyennant 1 500 à 5 000 €.",
    },
    { type: "h3", texte: "Comment ils opèrent" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Ils vous contactent via Facebook, WhatsApp, TikTok ou des groupes communautaires",
        "Ils ont un site web professionnel avec de faux avis clients",
        "Ils promettent des résultats \"garantis\" (un vrai avocat ne garantit jamais un résultat)",
        "Ils demandent un paiement cash ou par virement avant toute démarche",
        "Ils disparaissent une fois l'argent encaissé, ou déposent un dossier vide à la préfecture",
      ],
    },
    { type: "h3", texte: "Comment vérifier en 30 secondes" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Vérifiez sur l'annuaire du Barreau** : tout avocat inscrit est consultable sur [annuaire.cnb.avocat.fr](https://annuaire.cnb.avocat.fr). Si son nom n'apparaît pas, c'est un faux",
        "**Un vrai avocat a un numéro de Toque** (ex: \"Toque D1234, Barreau de Paris\")",
        "**Un vrai avocat ne fait JAMAIS de démarchage** sur les réseaux sociaux",
        "**Un vrai avocat émet une convention d'honoraires** signée avant tout paiement",
      ],
    },
    { type: "h3", texte: "Ce que dit la loi" },
    {
      type: "p",
      texte: "Exercer le droit sans être avocat inscrit au Barreau est un délit pénal (article 72 de la loi du 31 décembre 1971) puni de 2 ans de prison et 30 000 € d'amende.",
    },
    {
      type: "h2",
      texte: "Arnaque n°2 : Les faux sites préfecture et ANEF",
      id: "arnaque-2-faux-sites-prefecture",
    },
    {
      type: "p",
      texte: "Des sites web imitent parfaitement les sites officiels de la préfecture ou de l'ANEF (Administration Numérique des Étrangers en France) et vous facturent des \"frais de dossier\" inexistants.",
    },
    { type: "h3", texte: "Comment ils opèrent" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'URL ressemble au site officiel mais avec des variantes subtiles : \"prefecture-paris.com\" au lieu de \"prefecture-de-police.interieur.gouv.fr\"",
        "Ils apparaissent parfois en publicité sponsorisée sur Google (au-dessus des vrais résultats)",
        "Ils demandent vos données personnelles (numéro de titre, passeport, adresse) puis un paiement de 50 à 200 € pour \"traitement accéléré\"",
        "Certains volent vos données pour usurper votre identité",
      ],
    },
    { type: "h3", texte: "Les vrais sites officiels à connaître" },
    {
      type: "tableau",
      entetes: ["Service", "URL officielle", "Ce qu'il faut vérifier"],
      lignes: [
        ["ANEF", "administration-etrangers-en-france.interieur.gouv.fr", "Toujours en .gouv.fr"],
        ["Préfectures", "www.prefectures-regions.gouv.fr", "Toujours en .gouv.fr"],
        ["Timbres fiscaux", "timbres.impots.gouv.fr", "Toujours en .gouv.fr"],
        ["Service public", "www.service-public.fr", "Toujours en .gouv.fr"],
      ],
    },
    { type: "h3", texte: "La règle d'or" },
    {
      type: "p",
      texte: "**Aucun site officiel français ne se termine autrement que par .gouv.fr**. Si l'URL finit par .com, .fr, .org, .net, c'est un faux. Jamais un site .gouv.fr ne vous demandera un paiement par carte pour \"accélérer\" un dossier de titre de séjour.",
    },
    {
      type: "h2",
      texte: "Arnaque n°3 : Les fausses convocations par email ou SMS",
      id: "arnaque-3-fausse-convocation",
    },
    {
      type: "p",
      texte: "Vous recevez un email ou un SMS qui semble venir de la préfecture ou de l'OFII, vous demandant de \"confirmer votre rendez-vous\" ou de \"mettre à jour votre dossier\" en cliquant sur un lien.",
    },
    { type: "h3", texte: "Les signaux d'alerte" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'email vient d'une adresse Gmail, Outlook ou Yahoo (jamais d'un .gouv.fr)",
        "Le SMS contient un lien raccourci (bit.ly, tinyurl)",
        "On vous demande de payer en ligne \"pour confirmer\" ou \"sous peine d'annulation\"",
        "Les fautes d'orthographe (même si les escrocs s'améliorent)",
        "Un sentiment d'urgence extrême : \"Vous avez 24h pour répondre sinon votre dossier sera supprimé\"",
      ],
    },
    { type: "h3", texte: "Ce que fait réellement la préfecture" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les convocations officielles arrivent par **courrier postal** (lettre simple ou recommandée) ou sur votre **espace ANEF**",
        "La préfecture ne vous envoie **jamais de SMS** avec un lien",
        "La préfecture ne demande **jamais de paiement** par email",
        "Si vous avez un doute, appelez directement le standard de votre préfecture",
      ],
    },
    { type: "h3", texte: "Que faire si vous avez cliqué" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Ne rentrez aucune donnée personnelle",
        "Si vous avez donné des informations, changez immédiatement vos mots de passe ANEF",
        "Signalez sur **signal-spam.fr** et **internet-signalement.gouv.fr** (plateforme Pharos)",
        "Prévenez votre banque si vous avez communiqué des coordonnées bancaires",
      ],
    },
    {
      type: "h2",
      texte: "Arnaque n°4 : Les faux logements et le piège du garant",
      id: "arnaque-4-faux-logement",
    },
    {
      type: "p",
      texte: "La recherche de logement est un cauchemar pour beaucoup d'étrangers en France, et les escrocs le savent très bien. Ils exploitent votre désespoir pour vous arnaquer.",
    },
    { type: "h3", texte: "Les formes les plus courantes" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**L'appartement trop beau, trop pas cher** : photos magnifiques d'un appartement à 500 €/mois en plein Paris. Le \"propriétaire\" est \"à l'étranger\" et vous demande un virement pour \"réserver\" le logement",
        "**Le faux garant payant** : quelqu'un vous propose de \"se porter garant\" moyennant 500 à 2 000 €, avec de faux bulletins de salaire. Si le propriétaire vérifie, vous perdez le logement ET l'argent",
        "**La sous-location illégale** : on vous loue une chambre à prix fort dans un logement social, sans contrat, sans droits, et risque d'expulsion immédiate",
        "**Le faux bail** : on vous fait signer un \"contrat de location\" pour un logement qui n'appartient pas à la personne. Vous payez un dépôt de garantie à quelqu'un qui n'est pas le propriétaire",
      ],
    },
    { type: "h3", texte: "Comment vous protéger" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Ne payez JAMAIS avant de visiter** : aucune exception",
        "**Vérifiez l'identité du propriétaire** : demandez une pièce d'identité et un titre de propriété ou un mandat de gestion",
        "**Utilisez Visale** (garantie gratuite d'Action Logement) plutôt qu'un garant payant, c'est gratuit et reconnu par tous les propriétaires",
        "**Passez par des plateformes sécurisées** : agences immobilières, leboncoin avec paiement sécurisé, CROUS pour les étudiants",
        "**Si c'est trop beau pour être vrai, c'est faux**",
      ],
    },
    { type: "h3", texte: "Logements d'urgence si vous êtes en difficulté" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**115** (SAMU social) : numéro gratuit pour hébergement d'urgence 24h/24",
        "**ADOMA** : résidences sociales pour travailleurs étrangers",
        "**CADA** : centres d'accueil pour demandeurs d'asile",
      ],
    },
    {
      type: "h2",
      texte: "Arnaque n°5 : Les faux contrats de travail pour régularisation",
      id: "arnaque-5-faux-contrat-travail",
    },
    {
      type: "p",
      texte: "Cette arnaque est particulièrement dangereuse car elle peut ruiner définitivement vos chances de régularisation.",
    },
    { type: "h3", texte: "Le schéma classique" },
    {
      type: "p",
      texte: "Un \"intermédiaire\" vous propose un contrat de travail d'un employeur fictif ou complice pour monter un dossier de régularisation (article L435-1 du CESEDA, ex \"admission exceptionnelle au séjour\"). Le prix : entre 2 000 et 10 000 €.",
    },
    { type: "h3", texte: "Pourquoi c'est un piège mortel" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La préfecture **vérifie systématiquement** la réalité de l'emploi : appel à l'employeur, visite DIRECCTE, vérification URSSAF",
        "Si la fraude est détectée, votre dossier est **rejeté définitivement** et vous êtes fiché pour fraude documentaire",
        "L'article L823-1 du CESEDA prévoit jusqu'à **5 ans de prison** et **20 000 € d'amende** pour l'usage de faux documents dans une procédure de titre de séjour",
        "L'intermédiaire, lui, s'en sort souvent indemne, c'est VOUS qui portez le risque",
      ],
    },
    { type: "h3", texte: "Ce que la préfecture vérifie vraiment" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Existence de l'entreprise au registre du commerce (RCS) ou au répertoire des métiers",
        "Déclarations URSSAF et bulletins de salaire réels",
        "Cohérence entre le poste, le secteur, et votre profil",
        "Appel téléphonique direct à l'employeur",
        "Parfois, visite sur le lieu de travail",
      ],
    },
    { type: "h3", texte: "L'alternative légale" },
    {
      type: "p",
      texte: "Si vous cherchez une régularisation par le travail, adressez-vous à une **association d'aide juridique** (La Cimade, GISTI, Ligue des Droits de l'Homme) qui vous accompagnera gratuitement dans une démarche légale.",
    },
    {
      type: "h2",
      texte: "Arnaque n°6 : Les arnaques aux transferts d'argent",
      id: "arnaque-6-transfert-argent",
    },
    {
      type: "p",
      texte: "Les transferts d'argent vers le pays d'origine sont un terrain fertile pour les escrocs, surtout dans les communautés où le hawala (transfert informel) est courant.",
    },
    { type: "h3", texte: "Les arnaques les plus fréquentes" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Le faux agent de transfert** : un individu dans une épicerie ou un commerce propose des transferts \"moins chers\" que Western Union ou MoneyGram. L'argent part mais n'arrive jamais",
        "**Le hawala non fiable** : le système hawala repose sur la confiance. Certains \"agents\" encaissent l'argent et disparaissent, surtout quand il s'agit de gros montants",
        "**L'arnaque par WhatsApp** : un \"proche\" vous contacte (numéro piraté ou voix clonée par IA) en urgence pour demander un virement immédiat",
        "**Les faux sites de transfert** : des sites imitent Wise, Remitly ou WorldRemit avec des taux attractifs",
      ],
    },
    { type: "h3", texte: "Comment transférer en sécurité" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Utilisez uniquement des services agréés** par l'ACPR (Autorité de Contrôle Prudentiel et de Résolution) : Wise, Western Union, MoneyGram, Remitly, WorldRemit",
        "**Comparez les frais** sur des comparateurs légitimes comme Monito.com",
        "**Gardez TOUJOURS un reçu** de chaque transfert",
        "**Ne transférez jamais via des particuliers** : même un \"ami d'un ami\"",
        "**Méfiez-vous des taux trop beaux** : si c'est 15% moins cher que partout, c'est suspect",
      ],
    },
    { type: "h3", texte: "Les montants à ne pas dépasser sans déclaration" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Au-delà de **10 000 €** par an en transferts, votre banque est tenue de signaler à Tracfin",
        "Si vous transportez **10 000 € ou plus en espèces** à la frontière, vous DEVEZ les déclarer aux douanes sous peine de **50% de saisie** + amende",
      ],
    },
    {
      type: "h2",
      texte: "Arnaque n°7 : Les \"promesses de régularisation rapide\"",
      id: "arnaque-7-promesse-regularisation",
    },
    {
      type: "p",
      texte: "Des individus ou des \"associations\" (souvent non déclarées) promettent une régularisation \"garantie\" en échange d'argent. C'est la plus cruelle des arnaques parce qu'elle exploite l'espoir des personnes les plus vulnérables.",
    },
    { type: "h3", texte: "Les signaux d'alerte immédiats" },
    {
      type: "liste",
      style: "puces",
      items: [
        "\"Nous avons des contacts à la préfecture\" → FAUX. Aucun agent préfectoral ne vend des faveurs",
        "\"Régularisation garantie en 3 mois\" → FAUX. Aucune procédure ne peut être garantie",
        "\"On s'occupe de tout, vous n'avez rien à faire\" → FAUX. Votre présence et vos documents sont toujours nécessaires",
        "Paiement uniquement en espèces, pas de facture, pas de reçu",
        "Pas de numéro SIRET, pas de site web officiel, pas d'adresse fixe",
      ],
    },
    { type: "h3", texte: "Les vrais organismes gratuits qui aident" },
    {
      type: "tableau",
      entetes: ["Organisme", "Ce qu'il fait", "Contact"],
      lignes: [
        [
          "La Cimade",
          "Accompagnement juridique gratuit, permanences en préfecture",
          "lacimade.org",
        ],
        [
          "GISTI",
          "Conseil juridique, formations, publications sur le droit des étrangers",
          "gisti.org",
        ],
        ["Ligue des Droits de l'Homme", "Permanences juridiques gratuites", "ldh-france.org"],
        ["ADDE", "Avocats spécialisés droit des étrangers (consultations gratuites)", "adde.fr"],
        [
          "Centre Primo Levi",
          "Accompagnement demandeurs d'asile victimes de torture",
          "primolevi.org",
        ],
        [
          "Aide juridictionnelle",
          "Prise en charge totale des frais d'avocat si revenus modestes",
          "service-public.fr",
        ],
      ],
    },
    { type: "h3", texte: "Le vrai processus de régularisation" },
    {
      type: "p",
      texte: "La régularisation est une procédure **administrative et juridique**. Elle dépend de critères objectifs (durée de séjour, emploi, liens familiaux, intégration). Aucune somme d'argent ne peut accélérer ou garantir le résultat.",
    },
    {
      type: "h2",
      texte: "Vous êtes victime d'une arnaque : les 5 étapes à suivre immédiatement",
      id: "que-faire-victime",
    },
    {
      type: "p",
      texte: "Si vous êtes déjà tombé dans l'un de ces pièges, ne restez pas silencieux. Porter plainte ne mettra **PAS** en danger votre titre de séjour. Au contraire, cela peut vous protéger.",
    },
    { type: "h3", texte: "Étape 1 : Conservez toutes les preuves" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Captures d'écran des messages, emails, sites web",
        "Reçus de paiement, relevés bancaires",
        "Photos des documents reçus",
        "Numéros de téléphone, noms, adresses",
      ],
    },
    { type: "h3", texte: "Étape 2 : Portez plainte" },
    {
      type: "liste",
      style: "puces",
      items: [
        "En ligne sur **pre-plainte-en-ligne.gouv.fr** puis au commissariat",
        "Ou directement au commissariat ou à la gendarmerie",
        "Demandez un **interprète** si besoin (c'est votre droit et c'est gratuit)",
        "Vous recevrez un récépissé de plainte : conservez-le précieusement",
      ],
    },
    { type: "h3", texte: "Étape 3 : Signalez l'arnaque" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Pharos** (internet-signalement.gouv.fr) pour les arnaques en ligne",
        "**Signal Conso** (signal.conso.gouv.fr) pour les arnaques commerciales",
        "**DGCCRF** (economie.gouv.fr) pour les pratiques commerciales frauduleuses",
        "**Votre banque** : demandez un chargeback si paiement par carte",
      ],
    },
    { type: "h3", texte: "Étape 4 : Prévenez votre communauté" },
    {
      type: "p",
      texte: "Beaucoup d'arnaques fonctionnent par le bouche-à-oreille dans les communautés. Si vous avez été victime, parlez-en autour de vous. Publiez un avertissement dans les groupes Facebook/WhatsApp de votre communauté.",
    },
    { type: "h3", texte: "Étape 5 : Consultez une association" },
    {
      type: "p",
      texte: "La Cimade, le GISTI ou l'ADDE peuvent vous aider à évaluer les dégâts (surtout si l'escroc a déposé un faux dossier en votre nom à la préfecture) et à régulariser la situation.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Les arnaques ciblant les étrangers en France sont industrialisées et rapportent des millions d'euros chaque année aux escrocs. Les 7 arnaques présentées ici, faux avocats, faux sites préfecture, fausses convocations, faux logements, faux contrats de travail, arnaques aux transferts d'argent, et fausses promesses de régularisation, suivent toutes le même schéma : exploiter votre stress, votre urgence et votre isolement. La meilleure protection ? L'information. Partagez ce guide avec les personnes de votre entourage qui pourraient en avoir besoin. Et rappelez-vous : les vrais sites officiels finissent toujours par .gouv.fr, un vrai avocat figure au barreau, et aucune régularisation ne se vend.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Est-ce que je risque quelque chose si je porte plainte en tant qu'étranger en situation irrégulière ?",
      reponse: "Non, porter plainte est un droit fondamental en France, quel que soit votre statut administratif. La police a l'obligation de prendre votre plainte (circulaire du 5 mars 2012). Elle ne peut pas vous signaler à la préfecture pour votre situation administrative. Si un agent refuse de prendre votre plainte, insistez et demandez le responsable du commissariat, ou écrivez directement au Procureur de la République.",
    },
    {
      question: "Comment vérifier qu'un avocat en immigration est bien inscrit au Barreau ?",
      reponse: "Consultez l'annuaire national des avocats sur annuaire.cnb.avocat.fr. Tapez le nom de l'avocat et vérifiez qu'il apparaît avec sa spécialisation et son barreau d'inscription. Tout avocat doit avoir un numéro de Toque. Si la personne n'apparaît pas dans cet annuaire, elle n'est pas avocat.",
    },
    {
      question: "J'ai payé un faux avocat, est-ce que je peux récupérer mon argent ?",
      reponse: "Oui, potentiellement. Portez plainte pour escroquerie (article 313-1 du Code pénal). Si vous avez payé par carte bancaire, demandez un chargeback à votre banque dans les 13 mois suivant le paiement. Si vous avez payé en espèces, la récupération sera plus difficile mais la plainte peut mener à une condamnation et des dommages et intérêts.",
    },
    {
      question: "Un site me demande de payer pour prendre un rendez-vous en préfecture, est-ce normal ?",
      reponse: "Non, c'est une arnaque. Les rendez-vous en préfecture sont entièrement gratuits et se prennent uniquement sur le site officiel de votre préfecture (en .gouv.fr) ou via l'ANEF (administration-etrangers-en-france.interieur.gouv.fr). Aucun site officiel ne facture la prise de rendez-vous.",
    },
    {
      question: "Quelqu'un m'a proposé un faux contrat de travail pour me régulariser, que faire ?",
      reponse: "Refusez catégoriquement. L'utilisation de faux documents est un délit pénal puni de 5 ans de prison et 20 000 € d'amende. Si la fraude est détectée par la préfecture, cela annulera définitivement vos chances. Contactez plutôt La Cimade (lacimade.org) ou le GISTI (gisti.org) pour un accompagnement juridique gratuit vers une régularisation légale.",
    },
  ],
};

export default article;
