import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-vie-pratique-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/scolariser-enfants-etranger-france-2026-inscription-ecole-droits`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "scolariser-enfants-etranger-france-2026-inscription-ecole-droits",
  titre: "Scolariser ses enfants en France quand on est étranger : inscription, UPE2A, aides et recours 2026",
  titreSeo: "Scolariser ses enfants en France quand on est étranger : inscription, UPE2A, aides et recours 2026",
  resume: "L'école est un droit pour TOUS les enfants en France, même sans papiers. Inscription maternelle au lycée, classes allophones UPE2A, bourses, ARS et que faire si la mairie refuse.",
  chapo: "Vous venez d'arriver en France avec vos enfants ou vous êtes sur le point de les faire venir ? L'inscription à l'école est une étape cruciale et un droit fondamental garanti par la loi française, même si vous êtes en situation irrégulière. Maternelle, primaire, collège, lycée : ce guide explique les procédures d'inscription, les classes spécialisées pour les enfants allophones, les aides financières disponibles et les droits que la mairie ne peut pas vous refuser.",
  publieLe: "2026-04-03",
  modifieLe: "2026-04-03",
  minutes: 19,
  theme: "scolariser enfants étranger France 2026",
  motsCles: [
    "scolariser enfants étranger France 2026",
    "inscription école étranger France",
    "enfant étranger école maternelle",
    "enfant allophone UPE2A",
    "inscription école sans papiers",
    "CASNAV inscription scolaire",
    "droits scolaires enfants étrangers",
    "bourse scolaire étranger",
    "école obligatoire étranger France",
    "refus inscription école étranger mairie",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
  blocs: [
    {
      type: "h2",
      texte: "Un droit fondamental : l'école est obligatoire pour TOUS les enfants",
      id: "droit-fondamental",
    },
    {
      type: "p",
      texte: "En France, l'**instruction est obligatoire pour tous les enfants de 3 à 16 ans** (loi du 26 juillet 2019 sur l'école de la confiance), quelle que soit leur nationalité ou leur situation administrative.",
    },
    { type: "h3", texte: "Ce que dit la loi :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Article L131-1 du Code de l'éducation** : « L'instruction est obligatoire pour chaque enfant dès l'âge de trois ans et jusqu'à l'âge de seize ans. »",
        "**Aucune condition de nationalité** : un enfant étranger, même en situation irrégulière, a le droit d'être scolarisé",
        "**Aucune condition de titre de séjour des parents** : la mairie et l'école ne peuvent pas exiger le titre de séjour des parents pour inscrire un enfant",
        "**Formation obligatoire de 16 à 18 ans** : depuis 2020, les jeunes de 16 à 18 ans doivent être en formation (scolaire, professionnelle ou en emploi)",
      ],
    },
    {
      type: "p",
      texte: "**Point important** : si une mairie refuse d'inscrire votre enfant (situation hélas courante), c'est **illégal**. Vous pouvez saisir le Défenseur des droits, le DASEN (Directeur Académique des Services de l'Éducation Nationale) ou le tribunal administratif.",
    },
    {
      type: "p",
      texte: "**Lien avec le test civique** : le test civique comporte des questions sur l'**obligation scolaire**, la **laïcité à l'école** et le **système éducatif français**. C'est un sujet incontournable.",
    },
    {
      type: "h2",
      texte: "Inscription en maternelle et primaire (3-10 ans)",
      id: "inscription-maternelle-primaire",
    },
    {
      type: "p",
      texte: "L'inscription en école maternelle ou élémentaire se fait en **deux étapes** :",
    },
    { type: "h3", texte: "Étape 1 : Inscription en mairie" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Rendez-vous au **service scolaire de votre mairie** de résidence",
        "Documents à fournir : Livret de famille ou acte de naissance de l'enfant (traduit si nécessaire) Justificatif de domicile Carnet de vaccination (ou certificat médical attestant des vaccinations obligatoires : DTP)",
        "**La mairie ne peut PAS exiger** : titre de séjour des parents, certificat de scolarité du pays d'origine, ou preuve de régularité du séjour",
      ],
    },
    { type: "h3", texte: "Étape 2 : Admission à l'école" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Avec le **certificat d'inscription** délivré par la mairie, présentez-vous à l'**école désignée**",
        "Le directeur procède à l'**admission** et détermine la classe adaptée à l'âge et au niveau de l'enfant",
        "Si l'enfant ne parle pas français, le directeur oriente vers le **CASNAV** pour une évaluation",
      ],
    },
    {
      type: "p",
      texte: "**Calendrier** : les inscriptions pour la rentrée de septembre se font entre **janvier et juin**. Mais un enfant arrivant en cours d'année doit être scolarisé **immédiatement** (pas d'attente de la rentrée suivante).",
    },
    {
      type: "h2",
      texte: "Inscription au collège et au lycée (11-18 ans)",
      id: "inscription-college-lycee",
    },
    { type: "p", texte: "Pour le secondaire, la procédure diffère légèrement :" },
    { type: "h3", texte: "Collège (11-15 ans) :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Contactez le **DASEN** (Direction Académique) de votre département ou le collège de secteur directement",
        "Un **test de positionnement** peut être organisé pour évaluer le niveau scolaire et linguistique",
        "L'enfant est orienté dans la classe correspondant à son âge (avec un an d'écart possible selon le niveau)",
      ],
    },
    { type: "h3", texte: "Lycée (15-18 ans) :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pour les **moins de 16 ans** : inscription obligatoire, mêmes droits qu'au collège",
        "Pour les **16-18 ans** : obligation de formation (scolarité, apprentissage ou mission locale). Le lycée peut inscrire l'élève en classe adaptée",
        "Pour les **plus de 16 ans arrivant en France** : orientation possible vers un lycée professionnel, un CAP, ou une Mission de Lutte contre le Décrochage Scolaire (MLDS)",
      ],
    },
    { type: "h3", texte: "Le cas des mineurs non accompagnés (MNA) :" },
    {
      type: "p",
      texte: "Les mineurs isolés étrangers pris en charge par l'Aide Sociale à l'Enfance (ASE) ont les mêmes droits scolaires. Le département assure leur scolarisation et leur hébergement.",
    },
    {
      type: "h2",
      texte: "Classes UPE2A : le dispositif pour les enfants qui ne parlent pas français",
      id: "classes-allophones",
    },
    {
      type: "p",
      texte: "Les enfants qui arrivent en France sans maîtriser le français bénéficient de dispositifs spécifiques :",
    },
    { type: "h3", texte: "Qu'est-ce que l'UPE2A ?" },
    {
      type: "p",
      texte: "L'**UPE2A** (Unité Pédagogique pour Élèves Allophones Arrivants) est une classe spécialisée qui propose :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**12 à 15 heures de français par semaine** (FLE, Français Langue Étrangère)",
        "**Intégration progressive** dans la classe ordinaire pour les matières non linguistiques (maths, sport, arts)",
        "Durée moyenne : **1 an**, renouvelable si nécessaire",
        "Disponible en **élémentaire, collège et lycée**",
      ],
    },
    { type: "h3", texte: "Le rôle du CASNAV :" },
    {
      type: "p",
      texte: "Le **CASNAV** (Centre Académique pour la Scolarisation des élèves Allophones Nouvellement Arrivés et des enfants issus de familles itinérantes et de Voyageurs) :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Évalue le niveau scolaire et linguistique de l'enfant",
        "Propose une orientation adaptée (UPE2A ou classe ordinaire avec soutien)",
        "Accompagne les familles dans les démarches d'inscription",
      ],
    },
    {
      type: "p",
      texte: "**Conseil** : contactez le CASNAV de votre académie dès votre arrivée. Il peut accélérer l'inscription et orienter vers l'école la mieux adaptée.",
    },
    { type: "h2", texte: "Aides financières pour la scolarité", id: "aides-financieres" },
    {
      type: "p",
      texte: "Scolariser ses enfants en France est **gratuit dans le public**, mais des frais annexes existent. Voici les aides disponibles :",
    },
    { type: "h3", texte: "Allocation de Rentrée Scolaire (ARS) :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Versée par la **CAF** chaque année en août",
        "Condition : titre de séjour valide + enfant scolarisé de 6 à 18 ans",
        "Montants 2026 : **416 €** (6-10 ans), **440 €** (11-14 ans), **454 €** (15-18 ans)",
        "Sous conditions de revenus (plafond environ 27 000 € par an pour 1 enfant)",
      ],
    },
    { type: "h3", texte: "Bourse des collèges et lycées :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Demande en ligne sur **Scolarité Services** ou au secrétariat de l'établissement",
        "Montant : **108 à 486 €/an** au collège, **441 à 960 €/an** au lycée",
        "Les élèves étrangers en situation régulière y ont droit",
      ],
    },
    { type: "h3", texte: "Cantine scolaire :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les tarifs sont fixés par la mairie et sont souvent **modulés selon les revenus**",
        "Aucune école ne peut refuser l'accès à la cantine au motif de la nationalité ou du titre de séjour",
        "En cas de difficulté financière, demandez une aide au **CCAS** de votre commune",
      ],
    },
    { type: "h3", texte: "Fournitures scolaires :" },
    {
      type: "p",
      texte: "De nombreuses associations (Secours populaire, Emmaüs, Croix-Rouge) distribuent des kits de fournitures gratuites avant la rentrée.",
    },
    { type: "h2", texte: "Que faire si la mairie refuse d'inscrire votre enfant ?", id: "refus-mairie" },
    {
      type: "p",
      texte: "Le refus d'inscription scolaire par une mairie est **illégal**, mais cela arrive encore. Voici les recours :",
    },
    { type: "h3", texte: "Motifs illégaux de refus :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "« Vous n'avez pas de titre de séjour » → **Illégal**. Le titre de séjour des parents n'est pas une condition",
        "« Vous n'avez pas de justificatif de domicile à votre nom » → Illégal. Une **attestation d'hébergement + facture de l'hébergeant** suffit",
        "« Il n'y a plus de place » → Peut être invoqué mais la mairie doit proposer une **école alternative dans la commune ou dans une commune voisine**",
        "« L'enfant ne parle pas français » → **Illégal**. C'est précisément le rôle de l'UPE2A",
      ],
    },
    { type: "h3", texte: "Vos recours :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Demandez un refus écrit** à la mairie (ils refusent souvent quand on le demande par écrit…)",
        "**Saisissez le DASEN** (Directeur Académique) par courrier recommandé, il a le pouvoir de contraindre la mairie",
        "**Contactez le Défenseur des droits** (defenseurdesdroits.fr) : institution gratuite qui intervient en cas de discrimination",
        "**Saisissez le tribunal administratif** en référé-liberté (procédure sous 48h) pour contraindre l'inscription",
        "**Contactez une association** : RESF (Réseau Éducation Sans Frontières), Ligue des droits de l'Homme, FCPE",
      ],
    },
    {
      type: "h2",
      texte: "Le système éducatif au test civique : ce qu'il faut retenir",
      id: "systeme-educatif-test-civique",
    },
    {
      type: "p",
      texte: "Le test civique pose régulièrement des questions sur l'éducation. Points clés :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**L'instruction est obligatoire de 3 à 16 ans** en France (pas l'école : l'instruction à domicile est possible sous conditions strictes)",
        "**L'école publique est gratuite et laïque** : pas de signes religieux ostensibles pour les élèves (loi du 15 mars 2004)",
        "**Jules Ferry** a rendu l'école primaire gratuite et obligatoire (lois de 1881-1882)",
        "**L'autorité parentale** est partagée entre les deux parents, même non mariés ou séparés",
        "**Le redoublement** est devenu exceptionnel (décision du conseil de classe, pas du parent)",
        "Le système : **maternelle (3-6)** → **élémentaire (6-11)** → **collège (11-15)** → **lycée (15-18)** → **études supérieures**",
      ],
    },
    {
      type: "p",
      texte: "Entraînez-vous sur ces questions dans nos [QCM gratuits](/dashboard/entrainement) catégorie « Vivre dans la société française ».",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "En France, chaque enfant a le droit d'être scolarisé, quels que soient la nationalité ou le statut administratif de ses parents. Ne laissez jamais une mairie vous refuser l'inscription, c'est illégal et des recours efficaces existent. Profitez des dispositifs UPE2A pour les enfants allophones et des aides financières (ARS, bourses, cantine). L'éducation est un pilier des valeurs républicaines françaises, un sujet clé du test civique, préparez-vous avec nos [entraînements gratuits](/dashboard/entrainement).",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Mon enfant ne parle pas du tout français, peut-il aller à l'école ?",
      reponse: "Oui, absolument. L'école est obligatoire pour tous les enfants de 3 à 16 ans, quelle que soit leur langue. Votre enfant sera orienté vers une classe UPE2A (Unité Pédagogique pour Élèves Allophones) où il recevra 12 à 15 heures de français intensif par semaine tout en suivant certains cours en classe ordinaire.",
    },
    {
      question: "La mairie me demande mon titre de séjour pour inscrire mon enfant, est-ce normal ?",
      reponse: "Non. La mairie n'a pas le droit d'exiger le titre de séjour des parents comme condition d'inscription scolaire. Seuls sont nécessaires : l'acte de naissance de l'enfant, un justificatif de domicile et les certificats de vaccination. Si la mairie insiste, demandez un refus écrit et saisissez le DASEN.",
    },
    {
      question: "Mon enfant de 17 ans vient d'arriver en France, peut-il aller au lycée ?",
      reponse: "Oui. Depuis 2020, les jeunes de 16 à 18 ans sont soumis à l'obligation de formation. Contactez le CASNAV de votre académie qui évaluera le niveau de votre enfant et l'orientera : classe d'accueil lycée, lycée professionnel, CAP, ou Mission Locale.",
    },
    {
      question: "Faut-il traduire les bulletins scolaires du pays d'origine ?",
      reponse: "Ce n'est pas obligatoire pour l'inscription, mais c'est recommandé pour aider l'école à évaluer le niveau de l'enfant. Le CASNAV réalise de toute façon un test de positionnement indépendant.",
    },
  ],
  sources: [
    {
      titre: "Code de l'éducation : Article L131-1",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000038901832/",
      type: "juridique",
      description: "Instruction obligatoire de 3 à 16 ans pour tous les enfants",
    },
    {
      titre: "Éduscol : Scolarisation des élèves allophones",
      url: "https://eduscol.education.fr/1191/ressources-pour-l-accueil-et-la-scolarisation-des-eleves-allophones",
      type: "officiel",
      description: "Dispositifs UPE2A et CASNAV pour les enfants allophones",
    },
    {
      titre: "Défenseur des droits : Accès à l'école",
      url: "https://www.defenseurdesdroits.fr/fr/guides/lacces-lecole-pour-tous",
      type: "officiel",
      description: "Guide sur le droit à la scolarisation et les recours en cas de refus",
    },
    {
      titre: "Service-Public.fr, Inscription à l'école primaire",
      url: "https://www.service-public.fr/particuliers/vosdroits/F1864",
      type: "officiel",
      description: "Procédure d'inscription en école maternelle et élémentaire",
    },
  ],
};

export default article;
