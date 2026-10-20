import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-quotidien-immigration.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/mariage-etranger-france-2026-papiers-visa-conjoint-titre-sejour`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "mariage-etranger-france-2026-papiers-visa-conjoint-titre-sejour",
  titre: "Se marier avec un étranger en France en 2026 : papiers, visa conjoint, titre de séjour",
  titreSeo: "Se marier avec un étranger en France en 2026 : papiers, visa conjoint, titre de séjour",
  resume: "Dossier mairie, certificat de capacité matrimoniale, transcription du mariage, visa conjoint de Français, titre « vie privée et familiale » : toutes les étapes détaillées.",
  chapo: "Vous souhaitez vous marier en France avec une personne de nationalité étrangère en 2026 ? La procédure implique des démarches spécifiques auprès de la mairie, du consulat et de la préfecture. Dossier de mariage, certificat de capacité matrimoniale, transcription, visa conjoint de Français, titre de séjour « vie privée et familiale » : ce guide détaille chaque étape, les documents requis, les délais moyens et les pièges à éviter pour que votre mariage soit reconnu en France et ouvre droit au séjour légal de votre conjoint.",
  publieLe: "2026-04-02",
  modifieLe: "2026-04-02",
  minutes: 14,
  theme: "mariage étranger France 2026",
  motsCles: [
    "mariage étranger France 2026",
    "se marier avec un étranger en France",
    "papiers mariage étranger",
    "visa conjoint de français",
    "titre de séjour vie privée familiale",
    "transcription mariage consulat",
    "certificat de capacité matrimoniale",
    "mariage mixte France démarches",
    "dossier mariage mairie étranger",
    "carte séjour conjoint français",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  blocs: [
    {
      type: "h2",
      texte: "Les conditions légales pour se marier en France avec un étranger",
      id: "conditions-legales",
    },
    {
      type: "p",
      texte: "Le mariage en France est ouvert à toute personne, quelle que soit sa nationalité, sous réserve de respecter les conditions suivantes :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Âge minimum** : 18 ans révolus pour les deux époux (article 144 du Code civil).",
        "**Consentement libre** : aucune contrainte ni mariage forcé (article 146).",
        "**Absence de lien de parenté prohibé** : pas de mariage entre ascendants/descendants ou frère/sœur.",
        "**Monogamie** : aucun des deux époux ne doit être déjà marié.",
      ],
    },
    {
      type: "p",
      texte: "La mairie du lieu de résidence de l'un des époux est compétente. Si aucun des deux ne réside en France, le mariage peut être célébré au **consulat de France** dans le pays de résidence.",
    },
    {
      type: "p",
      texte: "**Point important** : la situation administrative de l'étranger (visa expiré, situation irrégulière) ne constitue **pas** un motif légal de refus de célébration du mariage. Le droit au mariage est un droit fondamental protégé par la Constitution.",
    },
    { type: "h2", texte: "Le dossier de mariage à déposer en mairie", id: "dossier-mairie" },
    {
      type: "p",
      texte: "Le dossier doit être déposé **au minimum 2 mois avant la date souhaitée**. Voici les pièces requises pour chaque époux :",
    },
    { type: "h3", texte: "Pour l'époux français :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Copie intégrale de l'acte de naissance de moins de 3 mois",
        "Pièce d'identité en cours de validité",
        "Justificatif de domicile",
        "Liste des témoins (2 à 4 personnes majeures)",
      ],
    },
    { type: "h3", texte: "Pour l'époux étranger :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Acte de naissance** traduit par un traducteur assermenté et, selon le pays, apostillé ou légalisé",
        "**Certificat de coutume** : document du consulat attestant la capacité à se marier selon la loi de son pays d'origine",
        "**Certificat de célibat** (certains pays l'exigent)",
        "Passeport en cours de validité",
        "Justificatif de domicile ou d'hébergement en France",
      ],
    },
    {
      type: "p",
      texte: "La mairie procède à la **publication des bans** pendant 10 jours. Un entretien peut être organisé par l'officier d'état civil pour vérifier la sincérité du consentement (article 63 du Code civil).",
    },
    {
      type: "h2",
      texte: "Mariage célébré à l'étranger : la transcription obligatoire",
      id: "mariage-etranger-transcription",
    },
    {
      type: "p",
      texte: "Si vous vous êtes mariés à l'étranger, le mariage doit être **transcrit sur les registres d'état civil français** pour être reconnu en France. Sans transcription, le mariage n'a aucune valeur juridique en droit français.",
    },
    { type: "h3", texte: "Procédure de transcription :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Déposez la demande** auprès du consulat de France dans le pays du mariage ou du Service central d'état civil (SCEC) à Nantes.",
        "**Fournissez** : copie intégrale de l'acte de mariage étranger + traduction assermentée, actes de naissance des deux époux, pièces d'identité.",
        "**Délai moyen** : 2 à 6 mois selon le consulat. Certains pays (Algérie, Maroc, Tunisie) ont des délais plus longs en raison de vérifications supplémentaires.",
      ],
    },
    {
      type: "p",
      texte: "**Attention** : si le consulat soupçonne un mariage de complaisance, il peut saisir le Procureur de la République qui dispose de 6 mois pour s'opposer à la transcription.",
    },
    {
      type: "h2",
      texte: "Le visa conjoint de Français : comment l'obtenir",
      id: "visa-conjoint-francais",
    },
    {
      type: "p",
      texte: "Une fois le mariage reconnu, le conjoint étranger résidant hors de France peut demander un **visa long séjour « conjoint de Français »** (VLS-TS) au consulat de France.",
    },
    { type: "h3", texte: "Documents requis :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Formulaire de demande de visa long séjour",
        "Passeport valide 15 mois minimum",
        "Acte de mariage transcrit (copie intégrale)",
        "Justificatif de nationalité française de l'époux (CNI ou passeport)",
        "3 photos d'identité conformes",
        "Justificatif de domicile en France",
      ],
    },
    {
      type: "p",
      texte: "**Délai moyen** : 2 à 8 semaines selon le consulat. Le visa est **gratuit** pour les conjoints de Français (pas de frais de visa).",
    },
    {
      type: "p",
      texte: "**Important** : ce visa vaut titre de séjour pendant sa première année. Il doit être **validé en ligne sur le site de l'OFII** dans les 3 mois suivant l'arrivée en France.",
    },
    {
      type: "h2",
      texte: "Le titre de séjour « vie privée et familiale » pour le conjoint",
      id: "titre-sejour-vie-privee",
    },
    {
      type: "p",
      texte: "Si le conjoint étranger est **déjà en France**, il peut demander un titre de séjour « vie privée et familiale » en préfecture ou via ANEF :",
    },
    { type: "h3", texte: "Conditions :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Mariage reconnu en France (transcrit si célébré à l'étranger)",
        "Communauté de vie effective avec le conjoint français",
        "Le conjoint français doit résider de façon stable en France",
      ],
    },
    { type: "h3", texte: "Titre délivré :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**1re demande** : carte de séjour temporaire d'un an « vie privée et familiale »",
        "**Après 1 an** : renouvellement ou passage à la carte de séjour pluriannuelle (2 ou 4 ans)",
        "**Après 3 ans de mariage** (et communauté de vie) : éligibilité à la carte de résident de 10 ans",
        "**Après 4 ans de mariage** : éligibilité à la naturalisation française (au lieu de 5 ans normalement)",
      ],
    },
    {
      type: "p",
      texte: "Le titre « vie privée et familiale » autorise à **travailler sans autorisation supplémentaire**.",
    },
    { type: "h2", texte: "Les erreurs fréquentes à éviter", id: "erreurs-frequentes" },
    { type: "p", texte: "Voici les pièges les plus courants qui retardent ou bloquent les démarches :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Oublier la traduction assermentée.** Tout document en langue étrangère doit être traduit par un traducteur inscrit sur la liste de la Cour d'appel.",
        "**Ne pas apostiller les documents.** Pour les pays signataires de la Convention de La Haye, l'apostille remplace la légalisation consulaire.",
        "**Confondre mariage et régularisation.** Le mariage avec un Français ne donne pas automatiquement un titre de séjour. Il faut déposer une demande séparée.",
        "**Dépasser le délai de validation OFII.** Le VLS-TS doit être validé en ligne dans les 3 mois suivant l'arrivée, sous peine d'irrégularité.",
        "**Ne pas prouver la communauté de vie.** Bail commun, compte joint, factures aux deux noms… Préparez ces preuves dès le début.",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le mariage avec un étranger en France est un droit fondamental, mais les démarches administratives sont nombreuses et les délais parfois longs. Anticipez chaque étape, dossier mairie, transcription, visa, titre de séjour, et constituez un dossier complet dès le départ pour éviter les allers-retours. Pour les conjoints concernés par le test civique dans le cadre d'une future naturalisation, nos [entraînements gratuits](/dashboard/entrainement) vous permettent de commencer la préparation dès maintenant.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Peut-on se marier en France si le conjoint étranger est en situation irrégulière ?",
      reponse: "Oui. Le droit au mariage est un droit fondamental. La mairie ne peut pas refuser de célébrer un mariage au motif de la situation administrative de l'un des époux. Cependant, cela ne régularise pas automatiquement la situation.",
    },
    {
      question: "Combien de temps dure la procédure complète du mariage au titre de séjour ?",
      reponse: "Comptez 6 à 12 mois au total : 2 mois pour le dossier mairie, 2 à 6 mois pour la transcription si mariage à l'étranger, puis 2 à 4 mois pour le visa ou le titre de séjour en préfecture.",
    },
    {
      question: "Le conjoint étranger peut-il travailler avec le visa conjoint de Français ?",
      reponse: "Oui. Le visa long séjour conjoint de Français (VLS-TS) autorise à travailler en France dès sa validation auprès de l'OFII, sans avoir besoin d'une autorisation de travail séparée.",
    },
    {
      question: "Faut-il passer le test civique pour obtenir le titre de séjour conjoint ?",
      reponse: "Non. Le test civique n'est pas requis pour le titre de séjour « vie privée et familiale ». Il est en revanche obligatoire si vous souhaitez demander la naturalisation française par la suite.",
    },
  ],
  sources: [
    {
      titre: "Service-Public.fr, Mariage avec un étranger",
      url: "https://www.service-public.fr/particuliers/vosdroits/F930",
      type: "officiel",
      description: "Fiche officielle sur le mariage en France avec un ressortissant étranger",
    },
    {
      titre: "Service-Public.fr, Visa conjoint de Français",
      url: "https://www.service-public.fr/particuliers/vosdroits/F11166",
      type: "officiel",
      description: "Procédure et documents pour le visa long séjour conjoint",
    },
    {
      titre: "Code civil : Articles 63 et 144 à 164",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006136104/",
      type: "juridique",
      description: "Conditions légales du mariage en France",
    },
  ],
  aLireAussi: [
    { slug: "regroupement-familial-france-procedure-2025", ancre: "Regroupement familial en France" },
    {
      slug: "attestation-accueil-inviter-famille-france-2026-mairie-conditions",
      ancre: "Attestation d'accueil pour la famille",
    },
    {
      slug: "titres-de-sejour-france-guide-complet-2026",
      ancre: "Titre de séjour vie privée et familiale",
    },
    {
      slug: "dossier-naturalisation-2026-documents-delais-prefecture-anef",
      ancre: "Naturalisation par mariage (4 ans)",
    },
  ],
};

export default article;
