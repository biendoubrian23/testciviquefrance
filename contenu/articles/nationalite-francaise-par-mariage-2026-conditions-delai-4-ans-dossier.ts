import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-nationalite-mariage.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/nationalite-francaise-par-mariage-2026-conditions-delai-4-ans-dossier`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "nationalite-francaise-par-mariage-2026-conditions-delai-4-ans-dossier",
  titre: "Nationalité française par mariage 2026 : conditions, délai de 4 ans, dossier complet et différences avec la naturalisation",
  titreSeo: "Nationalité française par mariage 2026 : conditions, délai de 4 ans, dossier complet et différences avec la naturalisation",
  resume: "Acquérir la nationalité française par mariage : 4 ans de mariage, communauté de vie, niveau B1, entretien d'assimilation. Procédure, documents, délais réels par juridiction, motifs de refus et droits après l'acquisition. Guide complet 2026.",
  chapo: "Vous êtes marié(e) à un(e) Français(e) et souhaitez acquérir la nationalité française ? La déclaration de nationalité par mariage est une voie distincte de la naturalisation par décret. Plus rapide et avec des conditions différentes, elle reste néanmoins soumise à des critères stricts : 4 ans de mariage minimum, communauté de vie, niveau B1 en français et assimilation aux valeurs de la République. Ce guide détaille la procédure complète en 2026, les documents à fournir, les délais réels et les pièges à éviter.",
  publieLe: "2026-04-06",
  modifieLe: "2026-04-06",
  minutes: 20,
  theme: "nationalité française par mariage",
  motsCles: [
    "nationalité française par mariage",
    "déclaration nationalité mariage",
    "délai 4 ans nationalité mariage",
    "conditions nationalité française mariage",
    "dossier nationalité par mariage 2026",
    "entretien assimilation mariage",
    "différence naturalisation mariage",
    "conjoint français nationalité",
    "niveau français B1 mariage",
    "double nationalité France mariage",
    "opposition nationalité mariage",
    "communauté de vie nationalité",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1529634597503-139d3726fed5",
  },
  blocs: [
    {
      type: "h2",
      texte: "Déclaration par mariage vs naturalisation par décret : quelles différences ?",
      id: "difference-naturalisation-declaration",
    },
    {
      type: "p",
      texte: "Il est essentiel de comprendre que l'acquisition de la nationalité par mariage et la naturalisation sont **deux procédures distinctes** :",
    },
    {
      type: "tableau",
      entetes: ["Critère", "Déclaration par mariage", "Naturalisation par décret"],
      lignes: [
        [
          "**Base juridique**",
          "Articles 21-1 à 21-6 du Code civil",
          "Articles 21-14-1 à 21-27-1 du Code civil",
        ],
        [
          "**Condition principale**",
          "Être marié(e) à un(e) Français(e)",
          "Résider en France depuis 5 ans",
        ],
        [
          "**Délai minimum**",
          "**4 ans de mariage**",
          "**5 ans de résidence** (réduit à 2 ans dans certains cas)",
        ],
        ["**Niveau de français**", "**B1 oral et écrit**", "**B1 oral et écrit**"],
        [
          "**Décision prise par**",
          "Tribunal judiciaire ou consulat (enregistrement)",
          "Préfecture puis ministère (décret du Premier ministre)",
        ],
        ["**Délai de traitement**", "**12-18 mois**", "**18-24 mois**"],
        [
          "**Pouvoir discrétionnaire**",
          "Limité (le gouvernement peut s'opposer dans 2 ans)",
          "Large (la préfecture peut refuser pour de multiples raisons)",
        ],
        [
          "**Test civique**",
          "Pas de QCM formel, mais questionnaire d'assimilation",
          "Test civique de 40 questions depuis 2026",
        ],
      ],
    },
    { type: "h3", texte: "Avantage clé de la déclaration par mariage" },
    {
      type: "p",
      texte: "La déclaration est un **droit** si vous remplissez les conditions : l'administration ne peut pas la refuser arbitrairement (contrairement à la naturalisation, qui est une « faveur » de l'État). Le gouvernement dispose cependant d'un **délai de 2 ans** après l'enregistrement pour **s'opposer** à l'acquisition par décret en Conseil d'État, en cas de défaut d'assimilation ou d'indignité.",
    },
    { type: "h2", texte: "Les 6 conditions à remplir en 2026", id: "conditions-2026" },
    {
      type: "p",
      texte: "Pour déclarer la nationalité française par mariage, vous devez remplir **toutes** les conditions suivantes :",
    },
    { type: "h3", texte: "1. Être marié(e) depuis au moins 4 ans" },
    {
      type: "p",
      texte: "Le mariage doit avoir été **inscrit** ou **transcrit** dans l'état civil français. Le délai de 4 ans court à compter de la date du mariage. **Attention** : le PACS ne compte pas, seul le mariage est reconnu.",
    },
    { type: "h3", texte: "2. Communauté de vie affective et matérielle" },
    {
      type: "p",
      texte: "Vous devez prouver que la **communauté de vie n'a pas cessé** depuis le mariage, tant sur le plan affectif que matériel :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Domicile commun (quittances, bail, avis d'imposition à la même adresse)",
        "Vie commune effective (pas de séparation prolongée)",
        "Comptes bancaires joints, assurance commune, etc.",
      ],
    },
    {
      type: "p",
      texte: "**Si vous vivez à l'étranger** : le délai passe à **5 ans de mariage** (au lieu de 4), sauf si votre conjoint(e) est inscrit(e) au registre des Français à l'étranger pendant toute la durée du mariage.",
    },
    { type: "h3", texte: "3. Conjoint(e) de nationalité française" },
    {
      type: "p",
      texte: "Votre époux/épouse doit être de nationalité française **au moment de la déclaration** et l'avoir été pendant toute la durée du mariage. Si votre conjoint a acquis la nationalité française après le mariage, le délai de 4 ans court à compter de cette acquisition.",
    },
    { type: "h3", texte: "4. Niveau de français B1" },
    {
      type: "p",
      texte: "Vous devez justifier d'un **niveau B1 minimum** (oral et écrit) du Cadre européen commun de référence. Les justificatifs acceptés :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**DELF B1** ou supérieur",
        "**TCF ANF** (Test de Connaissance du Français pour l'Accès à la Nationalité Française) avec B1 minimum dans les 4 épreuves",
        "**TEF Nationalité** avec B1 minimum",
        "Diplôme français de niveau Bac minimum (dispense)",
        "Diplôme universitaire en français d'un pays francophone",
      ],
    },
    {
      type: "p",
      texte: "**Dispenses** : les personnes souffrant d'un handicap ou d'un état de santé rendant impossible l'évaluation linguistique peuvent obtenir une dispense.",
    },
    { type: "h3", texte: "5. Absence de condamnation pénale" },
    { type: "p", texte: "Vous ne devez pas avoir fait l'objet de condamnations pour :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Crimes ou délits constituant une atteinte aux intérêts fondamentaux de la Nation",
        "Actes de terrorisme",
        "Condamnation à plus de 6 mois d'emprisonnement ferme (non effacée)",
      ],
    },
    { type: "h3", texte: "6. Assimilation à la communauté française" },
    {
      type: "p",
      texte: "Vous devez démontrer votre **connaissance des droits et devoirs du citoyen français** et votre **adhésion aux principes et valeurs de la République** (liberté, égalité, fraternité, laïcité). Cette assimilation est vérifiée lors de l'entretien.",
    },
    { type: "h2", texte: "Procédure complète étape par étape en 2026", id: "procedure-complete" },
    { type: "h3", texte: "Étape 1 : Constituer le dossier" },
    { type: "p", texte: "Rassemblez les documents suivants (liste officielle 2026) :" },
    { type: "p", texte: "**Documents d'état civil :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Acte de naissance (copie intégrale) traduit et apostillé/légalisé",
        "Acte de mariage (copie intégrale de moins de 3 mois)",
        "Livret de famille mis à jour",
        "Actes de naissance des enfants le cas échéant",
      ],
    },
    { type: "p", texte: "**Justificatifs de communauté de vie :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Avis d'imposition commun ou déclaration de revenus conjointe (2 dernières années)",
        "Bail commun ou titre de propriété",
        "Attestations d'assurance commune",
        "Factures (électricité, internet) au nom des deux époux",
      ],
    },
    { type: "p", texte: "**Justificatifs d'identité et de séjour :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Titre de séjour en cours de validité (ou carte d'identité si ressortissant UE)",
        "Passeport",
        "Justificatif de domicile de moins de 3 mois",
      ],
    },
    { type: "p", texte: "**Justificatif de niveau de français :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Diplôme DELF B1 ou certificat TCF ANF / TEF Nationalité",
        "Ou diplôme français dispensant de cette condition",
      ],
    },
    { type: "p", texte: "**Casier judiciaire :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Casier judiciaire du pays d'origine (traduit et apostillé)",
        "Le casier judiciaire français (bulletin n°2) est demandé directement par l'administration",
      ],
    },
    { type: "p", texte: "**Timbre fiscal :**" },
    {
      type: "liste",
      style: "puces",
      items: ["**55 €** (timbre fiscal électronique)"],
    },
    { type: "h3", texte: "Étape 2 : Déposer la déclaration" },
    { type: "p", texte: "**Si vous résidez en France :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Déposez votre dossier auprès de la **plateforme de naturalisation** de votre département (tribunal judiciaire ou pôle nationalité de la préfecture selon la juridiction)",
        "Depuis 2024, certaines juridictions acceptent les dossiers **en ligne**",
      ],
    },
    { type: "p", texte: "**Si vous résidez à l'étranger :**" },
    {
      type: "liste",
      style: "puces",
      items: ["Déposez votre dossier auprès du **consulat de France** de votre pays de résidence"],
    },
    { type: "h3", texte: "Étape 3 : L'entretien d'assimilation" },
    { type: "p", texte: "Un entretien individuel est organisé pour vérifier :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Votre **niveau de français** (même si vous avez un diplôme)",
        "Votre **connaissance des valeurs républicaines** (laïcité, égalité hommes-femmes, libertés fondamentales)",
        "Votre **connaissance de l'histoire et de la culture française** (quelques questions de base)",
        "Votre **intégration dans la société française** (travail, liens sociaux, vie quotidienne)",
      ],
    },
    {
      type: "p",
      texte: "**Conseil** : préparez-vous à répondre à des questions comme « Qu'est-ce que la laïcité ? », « Que signifie la devise de la République ? », « Quels sont vos droits et devoirs en tant que citoyen ? ». Le site LeTestCivique.fr est un excellent outil pour vous préparer.",
    },
    { type: "h3", texte: "Étape 4 : Enregistrement et délai d'opposition" },
    { type: "p", texte: "Si le dossier est complet et les conditions remplies :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "La déclaration est **enregistrée** par le tribunal ou le consulat",
        "Un **récépissé** vous est remis",
        "Le ministère de l'Intérieur dispose de **2 ans** pour s'opposer par décret en Conseil d'État",
        "Passé ce délai (ou si aucune opposition), l'acquisition est **définitive**",
        "Vous recevez un **certificat de nationalité française** (CNF)",
      ],
    },
    { type: "h2", texte: "Délais réels en 2026 par juridiction", id: "delais-reels-2026" },
    {
      type: "p",
      texte: "Les délais varient considérablement selon le lieu de dépôt. Voici les estimations en 2026 :",
    },
    {
      type: "tableau",
      entetes: ["Juridiction / Zone", "Délai dépôt → enregistrement", "Délai total (avec opposition)"],
      lignes: [
        ["**Paris / Île-de-France**", "12-18 mois", "14-42 mois"],
        ["**Lyon, Marseille, Toulouse**", "10-15 mois", "12-39 mois"],
        ["**Villes moyennes**", "6-12 mois", "8-36 mois"],
        ["**Consulats (étranger)**", "12-24 mois", "14-48 mois"],
      ],
    },
    { type: "h3", texte: "Comment accélérer la procédure ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Dossier complet dès le dépôt** : toute pièce manquante entraîne un délai supplémentaire de 2-3 mois",
        "**Traductions conformes** : utilisez uniquement des traducteurs assermentés agréés par la cour d'appel",
        "**Anticipez le certificat de niveau de français** : passez le TCF ANF ou le DELF B1 **avant** de constituer le dossier",
        "**En cas de retard** : relancez par courrier recommandé après 12 mois. Si aucune réponse après 18 mois, vous pouvez saisir le tribunal administratif pour excès de pouvoir (rare mais possible).",
      ],
    },
    {
      type: "h2",
      texte: "Motifs d'opposition et de refus : ce qu'il faut savoir",
      id: "motifs-refus-opposition",
    },
    {
      type: "p",
      texte: "L'administration peut **refuser l'enregistrement** de la déclaration ou **s'y opposer** dans un délai de 2 ans. Les motifs principaux en 2026 sont :",
    },
    { type: "h3", texte: "Motifs de refus d'enregistrement (avant enregistrement)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Dossier incomplet** : pièces manquantes ou non conformes",
        "**Conditions non remplies** : durée de mariage insuffisante, défaut de communauté de vie, niveau de français insuffisant",
        "**Fraude** : mariage de complaisance (mariage blanc), faux documents",
      ],
    },
    { type: "h3", texte: "Motifs d'opposition (après enregistrement, dans le délai de 2 ans)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Défaut d'assimilation** : absence de maîtrise du français, méconnaissance des valeurs républicaines, comportement contraire aux principes fondamentaux",
        "**Indignité** : condamnations pénales, menace pour l'ordre public",
        "**Mensonge ou fraude** découverts après l'enregistrement",
      ],
    },
    { type: "h3", texte: "Que faire en cas de refus ?" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Vérifiez le motif** exact dans la notification",
        "**Complétez ou corrigez** votre dossier si le motif est un manque de pièces",
        "**Exercez un recours gracieux** auprès du ministère de la Justice (déclaration) ou de l'Intérieur",
        "**Saisissez le tribunal judiciaire** (en matière de nationalité) dans un délai de 6 mois",
      ],
    },
    { type: "h3", texte: "Le cas du divorce pendant la procédure" },
    {
      type: "p",
      texte: "Si vous divorcez **avant** l'enregistrement de la déclaration, celle-ci est **caduque** : la condition de communauté de vie n'est plus remplie. Si vous divorcez **après** l'enregistrement mais pendant le délai d'opposition de 2 ans, le gouvernement peut invoquer la cessation de communauté de vie pour s'opposer à l'acquisition.",
    },
    {
      type: "h2",
      texte: "Après l'acquisition : droits, obligations et démarches",
      id: "apres-acquisition",
    },
    { type: "p", texte: "Une fois la nationalité française acquise par mariage :" },
    { type: "h3", texte: "Vos nouveaux droits" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Droit de vote** et d'éligibilité à toutes les élections",
        "**Passeport français** (à demander en mairie)",
        "**Carte nationale d'identité** française",
        "**Libre circulation** dans l'UE/EEE sans titre de séjour",
        "**Accès à la fonction publique** (emplois réservés aux nationaux)",
        "**Protection consulaire** dans le monde entier",
      ],
    },
    { type: "h3", texte: "Vos obligations" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Participation au devoir de défense** (journée défense et citoyenneté, levée si vous avez plus de 25 ans)",
        "**Obligations fiscales** : déclaration de revenus mondiaux",
        "**Jury d'assises** : vous pouvez être convoqué",
      ],
    },
    { type: "h3", texte: "Démarches à effectuer" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Demander un **certificat de nationalité française** (CNF) au tribunal judiciaire",
        "Faire une demande de **carte d'identité française** en mairie",
        "Demander un **passeport français** en mairie",
        "Mettre à jour votre situation auprès de la **Sécurité sociale**, la **CAF**, les **impôts** et votre **employeur**",
        "Informer votre pays d'origine (certains pays exigent de choisir une nationalité ; la France autorise la **double nationalité**)",
      ],
    },
    { type: "h3", texte: "Double nationalité" },
    {
      type: "p",
      texte: "La France **autorise la double nationalité** sans restriction. Vous n'avez pas à renoncer à votre nationalité d'origine. Cependant, vérifiez les règles de votre pays d'origine : certains pays (comme la Chine, le Japon ou certains pays africains) n'acceptent pas la double nationalité.",
    },
    {
      type: "h2",
      texte: "Préparer son entretien et le test civique avec LeTestCivique.fr",
      id: "lien-test-civique",
    },
    {
      type: "p",
      texte: "Même si la déclaration par mariage n'implique pas le **test civique formel de 40 questions** (réservé à la naturalisation par décret), l'entretien d'assimilation porte sur les **mêmes thématiques** :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Valeurs et symboles de la République",
        "Institutions françaises",
        "Droits et devoirs du citoyen",
        "Histoire et géographie de la France",
        "Vie quotidienne en France",
      ],
    },
    {
      type: "p",
      texte: "**Notre plateforme LeTestCivique.fr** vous permet de vous préparer efficacement à cet entretien :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**800+ questions QCM** couvrant toutes les thématiques",
        "**Examens blancs** en conditions réelles",
        "**Corrections détaillées** pour chaque question",
        "**Statistiques personnalisées** pour identifier vos lacunes",
      ],
    },
    {
      type: "p",
      texte: "Que vous passiez le test civique formel ou simplement l'entretien d'assimilation dans le cadre du mariage, la préparation est la même, et elle est déterminante pour le résultat.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "L'acquisition de la nationalité française par mariage est une voie plus directe que la naturalisation par décret, mais elle exige rigueur et préparation. Avec 4 ans de mariage, un niveau B1 de français, une communauté de vie prouvée et une assimilation démontrée, vos chances de succès sont élevées. Préparez un dossier complet dès le départ, passez votre test de français en amont, et entraînez-vous aux questions d'assimilation avec LeTestCivique.fr pour mettre toutes les chances de votre côté.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien de temps de mariage faut-il pour demander la nationalité française ?",
      reponse: "Il faut 4 ans de mariage minimum si vous résidez en France, et 5 ans si vous vivez à l'étranger (sauf si votre conjoint est inscrit au registre des Français à l'étranger pendant toute la durée du mariage).",
    },
    {
      question: "Quelle est la différence entre naturalisation et déclaration par mariage ?",
      reponse: "La naturalisation est une \"faveur\" de l'État accordée par décret du Premier ministre après 5 ans de résidence. La déclaration par mariage est un droit si les conditions sont remplies (4 ans de mariage, communauté de vie, français B1). Les délais et la procédure sont différents.",
    },
    {
      question: "Faut-il passer le test civique de 40 questions pour la nationalité par mariage ?",
      reponse: "Non, le test civique formel de 40 questions est réservé à la naturalisation par décret. Pour la déclaration par mariage, vous passez un entretien d'assimilation qui évalue les mêmes connaissances mais sous forme d'échange oral.",
    },
    {
      question: "Puis-je garder ma nationalité d'origine en devenant Français par mariage ?",
      reponse: "Oui, la France autorise la double nationalité sans restriction. Vous n'avez pas à renoncer à votre nationalité d'origine. Vérifiez cependant les règles de votre pays d'origine, car certains pays n'acceptent pas la double nationalité.",
    },
    {
      question: "Que se passe-t-il en cas de divorce pendant la procédure ?",
      reponse: "Si le divorce intervient avant l'enregistrement de la déclaration, celle-ci devient caduque. Si le divorce intervient après l'enregistrement mais pendant le délai d'opposition de 2 ans, le gouvernement peut s'opposer à l'acquisition.",
    },
    {
      question: "Quel niveau de français est requis ?",
      reponse: "Le niveau B1 oral et écrit du CECR est requis. Vous pouvez le justifier par un DELF B1, un TCF ANF, un TEF Nationalité ou un diplôme français de niveau Bac ou supérieur.",
    },
  ],
  sources: [
    {
      titre: "Service-public.fr, Acquisition de la nationalité par mariage",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2726",
      type: "officiel",
      description: "Page officielle détaillant la procédure de déclaration par mariage",
    },
    {
      titre: "Code civil : Articles 21-1 à 21-6",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006150514/",
      type: "juridique",
      description: "Textes de loi encadrant la déclaration de nationalité par mariage",
    },
    {
      titre: "Ministère de la Justice : Nationalité française",
      url: "https://www.justice.gouv.fr/nationalite-francaise",
      type: "officiel",
      description: "Informations officielles du ministère sur les procédures de nationalité",
    },
  ],
};

export default article;
