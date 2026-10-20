import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-demande-asile.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/demande-asile-france-2026-ofpra-cnda-procedure-delais`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "demande-asile-france-2026-ofpra-cnda-procedure-delais",
  titre: "Demande d'asile en France 2026 : procédure OFPRA, recours CNDA, droits et délais",
  titreSeo: "Demande d'asile en France 2026 : procédure OFPRA, recours CNDA, droits et délais",
  resume: "Guide complet de la demande d'asile 2026 : enregistrement GUDA, dossier OFPRA, entretien, ADA, droits pendant la procédure, recours CNDA et statut de réfugié.",
  chapo: "La demande d'asile en France est un droit fondamental garanti par la Convention de Genève de 1951 et la Constitution française. Chaque année, des dizaines de milliers de personnes fuient les persécutions, la guerre ou les violences dans leur pays d'origine pour trouver refuge en France. En 2026, la procédure d'asile reste encadrée par l'OFPRA (Office Français de Protection des Réfugiés et Apatrides) et la CNDA (Cour Nationale du Droit d'Asile).",
  publieLe: "2026-03-30",
  modifieLe: "2026-03-30",
  minutes: 20,
  theme: "demande asile France 2026",
  motsCles: [
    "demande asile France 2026",
    "procédure asile France",
    "OFPRA demande asile",
    "CNDA recours asile",
    "statut réfugié France",
    "protection subsidiaire France",
    "procédure Dublin",
    "GUDA guichet unique asile",
    "SPADA premier accueil asile",
    "récit de vie OFPRA",
    "entretien OFPRA",
    "ADA allocation demandeur asile",
    "CADA centre accueil asile",
    "droits demandeur asile France",
    "recours CNDA rejet",
    "carte résident réfugié",
    "regroupement familial réfugié",
    "aide juridictionnelle asile",
    "Convention Genève réfugié",
    "France Terre Asile",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b",
  },
  blocs: [
    {
      type: "p",
      texte: "Ce guide complet détaille chaque étape de la demande d'asile en 2026 : l'enregistrement en GUDA, le dépôt du dossier OFPRA, l'entretien, les délais, les droits pendant la procédure, les recours en cas de rejet, et les droits une fois le statut de réfugié obtenu. Que vous soyez demandeur d'asile, accompagnant ou travailleur social, cet article vous donnera une vision claire de la procédure et des ressources disponibles.",
    },
    { type: "h2", texte: "Qui peut demander l'asile en France ?", id: "qui-peut-demander-asile" },
    {
      type: "p",
      texte: "La demande d'asile est ouverte à toute personne qui craint des persécutions dans son pays d'origine :",
    },
    { type: "p", texte: "**Le statut de réfugié (Convention de Genève) :**" },
    {
      type: "p",
      texte: "Vous pouvez obtenir le statut de réfugié si vous prouvez que vous êtes persécuté en raison de :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Votre race ou origine ethnique",
        "Votre religion",
        "Votre nationalité",
        "Votre appartenance à un groupe social particulier",
        "Vos opinions politiques",
      ],
    },
    { type: "p", texte: "**La protection subsidiaire :**" },
    {
      type: "p",
      texte: "Si vous ne remplissez pas les conditions du statut de réfugié, vous pouvez obtenir la protection subsidiaire si vous êtes exposé dans votre pays :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "À la peine de mort ou une exécution",
        "À la torture ou des traitements inhumains",
        "À une menace grave liée à un conflit armé",
      ],
    },
    { type: "p", texte: "**L'apatridie :**" },
    {
      type: "p",
      texte: "Une personne qu'aucun État ne reconnaît comme citoyen peut demander le statut d'apatride auprès de l'OFPRA.",
    },
    { type: "p", texte: "**Qui ne peut PAS demander l'asile ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Une personne qui a commis un crime de guerre, un crime contre l'humanité ou un crime grave de droit commun",
        "Une personne qui constitue une menace grave pour l'ordre public",
        "Une personne dont la demande relève d'un autre État européen (procédure Dublin)",
      ],
    },
    { type: "p", texte: "**Important :**" },
    {
      type: "p",
      texte: "La demande d'asile est un droit. Vous ne pouvez pas être refoulé à la frontière sans que votre demande soit examinée. Même sin vous êtes en situation irrégulière, vous pouvez déposer une demande d'asile.",
    },
    { type: "h2", texte: "Les étapes de la procédure d'asile en 2026", id: "etapes-procedure-asile" },
    { type: "p", texte: "Voici le parcours complet du demandeur d'asile en France :" },
    { type: "p", texte: "**Étape 1 : Pré-accueil SPADA (1-3 jours)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Présentez-vous à la SPADA (Structure de Premier Accueil des Demandeurs d'Asile) de votre département",
        "La SPADA est gérée par des associations (France Terre d'Asile, Coallia, CASP)",
        "On vous fixe un rendez-vous au GUDA",
      ],
    },
    { type: "p", texte: "**Étape 2 : Enregistrement au GUDA (1 jour)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "GUDA = Guichet Unique pour Demandeurs d'Asile",
        "Situé en préfecture",
        "L'OFII évalue votre situation (hébergement, vulnérabilité)",
        "La préfecture enregistre votre demande et vous délivre une attestation de demande d'asile",
        "Prise d'empreintes digitales",
      ],
    },
    { type: "p", texte: "**Étape 3 : Dépôt du dossier OFPRA (21 jours)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous avez 21 jours pour envoyer votre dossier complet à l'OFPRA (formulaire + récit + pièces)",
        "Le dossier est en français (faites-vous aider si nécessaire)",
        "Ce dossier est CRUCIAL : c'est la base de votre demande",
      ],
    },
    { type: "p", texte: "**Étape 4 : Entretien OFPRA**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Convocation à Fontenay-sous-Bois (siège de l'OFPRA) ou en visioconférence",
        "Durée : 45 minutes à 2 heures",
        "Un officier de protection vous interroge sur votre parcours et vos craintes",
        "Un interprète est présent si nécessaire",
        "Vous pouvez être accompagné par un avocat ou un représentant associatif",
      ],
    },
    { type: "p", texte: "**Étape 5 : Décision de l'OFPRA**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Délai : 2 à 6 mois (objectif : 2 mois en procédure accélérée, 6 mois en procédure normale)",
        "3 issues possibles : accord (réfugié ou protection subsidiaire), rejet, irrecevabilité",
      ],
    },
    { type: "p", texte: "**Étape 6 : Recours CNDA (si rejet)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Délai : 1 mois pour saisir la CNDA",
        "Audience devant une formation de jugement",
        "Décision en quelques semaines à plusieurs mois",
      ],
    },
    { type: "h2", texte: "Rédiger son dossier OFPRA : le récit de vie", id: "dossier-ofpra-recit" },
    { type: "p", texte: "Le récit de vie est l'élément central de votre demande d'asile :" },
    { type: "p", texte: "**Qu'est-ce que le récit de vie ?**" },
    { type: "p", texte: "C'est un texte personnel dans lequel vous expliquez :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pourquoi vous avez quitté votre pays",
        "Les persécutions ou menaces subies",
        "Ce que vous craignez en cas de retour",
        "Votre parcours depuis votre départ jusqu'en France",
      ],
    },
    { type: "p", texte: "**Conseils pour rédiger un bon récit :**" },
    { type: "p", texte: "**1. Soyez précis et chronologique :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Datez les événements autant que possible",
        "Indiquez les lieux exacts",
        "Nommez les personnes impliquées (si vous les connaissez)",
      ],
    },
    { type: "p", texte: "**2. Décrivez les persécutions concrètement :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Qui vous a persécuté ? (État, milice, famille, groupe armé)",
        "Comment ? (violences physiques, menaces, emprisonnement, discrimination)",
        "Pourquoi ? (religion, opinion politique, orientation sexuelle, ethnie)",
      ],
    },
    { type: "p", texte: "**3. Expliquez pourquoi vous ne pouvez pas être protégé dans votre pays :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'État ne vous protège pas (il est l'auteur des persécutions ou il est défaillant)",
        "Vous ne pouvez pas vous réfugier dans une autre région de votre pays",
      ],
    },
    { type: "p", texte: "**4. Soyez cohérent :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le récit écrit doit être cohérent avec ce que vous direz à l'entretien OFPRA",
        "Toute contradiction majeure affaiblit votre crédibilité",
      ],
    },
    { type: "p", texte: "**5. Joignez des preuves si possible :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Certificats médicaux attestant de violences",
        "Articles de presse sur la situation dans votre pays",
        "Convocations judiciaires, mandats d'arrêt",
        "Témoignages écrits de proches",
        "Carte de parti politique, preuve d'engagement associatif",
      ],
    },
    { type: "p", texte: "**Faites-vous aider :**" },
    {
      type: "p",
      texte: "Les associations spécialisées (Forum Réfugiés, CIMADE, Secours Catholique) proposent des permanences juridiques gratuites pour vous aider à rédiger votre récit.",
    },
    {
      type: "h2",
      texte: "Droits du demandeur d'asile pendant la procédure",
      id: "droits-pendant-procedure",
    },
    { type: "p", texte: "En tant que demandeur d'asile, vous bénéficiez de droits importants :" },
    { type: "p", texte: "**Droit au séjour :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'attestation de demande d'asile vous autorise à rester en France pendant toute la procédure",
        "Valide d'abord 1 mois, renouvelée de 6 mois en 6 mois",
        "Vous ne pouvez pas être expulsé tant que la procédure est en cours (y compris le recours CNDA)",
      ],
    },
    { type: "p", texte: "**Conditions matérielles d'accueil (CMA) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Hébergement en CADA (Centre d'Accueil pour Demandeurs d'Asile) ou hébergement d'urgence",
        "ADA (Allocation pour Demandeurs d'Asile) : environ 6,80 €/jour pour une personne seule + 7,40 €/jour si pas d'hébergement",
        "Les CMA sont gérées par l'OFII",
        "Versement sur une carte de paiement ADA",
      ],
    },
    { type: "p", texte: "**Accès aux soins :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Couverture maladie via la PUMA (Protection Universelle Maladie)",
        "En attendant, l'AME (Aide Médicale de l'État) ou la prise en charge des soins urgents",
        "Bilan de santé proposé par l'OFII",
      ],
    },
    { type: "p", texte: "**Scolarisation des enfants :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Obligatoire et gratuite pour les enfants de 3 à 16 ans",
        "Inscription auprès de la mairie ou du rectorat",
        "L'école ne peut pas refuser un enfant au motif de l'absence de titre de séjour des parents",
      ],
    },
    { type: "p", texte: "**Droit au travail :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Interdit pendant les 6 premiers mois de la procédure",
        "Après 6 mois sans décision de l'OFPRA : vous pouvez demander une autorisation de travail",
        "L'autorisation de travail est accordée selon les règles de droit commun",
      ],
    },
    { type: "p", texte: "**Accès à l'aide juridictionnelle :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Aide gratuite pour être assisté par un avocat",
        "Disponible à l'OFPRA et surtout devant la CNDA",
        "Demandez-la dès la réception de la convocation CNDA",
      ],
    },
    {
      type: "h2",
      texte: "La procédure Dublin : quand un autre pays européen est responsable",
      id: "procedure-dublin",
    },
    {
      type: "p",
      texte: "Le règlement Dublin III détermine quel État européen est responsable de l'examen de votre demande :",
    },
    { type: "p", texte: "**Le principe :**" },
    {
      type: "p",
      texte: "Un seul État de l'UE examine votre demande d'asile. C'est généralement le premier pays européen où vous avez été enregistré (prise d'empreintes digitales dans la base Eurodac).",
    },
    { type: "p", texte: "**Comment savoir si vous êtes \"dubliné\" ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Lors de votre enregistrement au GUDA, vos empreintes sont comparées dans Eurodac",
        "Si elles correspondent à un enregistrement dans un autre pays, la France peut demander votre transfert",
      ],
    },
    { type: "p", texte: "**Conséquences de la procédure Dublin :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous recevez une attestation de demande d'asile mention \"procédure Dublin\"",
        "La France demande à l'État responsable de vous reprendre",
        "L'État responsable a 2 mois pour répondre (silence = acceptation)",
        "Si le transfert est accepté, vous avez 6 mois pour être transféré",
      ],
    },
    { type: "p", texte: "**Recours contre un transfert Dublin :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous pouvez contester le transfert devant le tribunal administratif",
        "Délai : 15 jours après la notification de la décision de transfert",
        "Le recours est suspensif (le transfert est suspendu pendant l'examen)",
      ],
    },
    { type: "p", texte: "**Cas où la France examine la demande malgré Dublin :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "\"Clause de souveraineté\" : la France décide d'examiner elle-même la demande",
        "Clauses humanitaires : liens familiaux en France, vulnérabilité particulière",
        "Défaillances systémiques dans le pays responsable (exemple historique : Grèce)",
        "Dépassement du délai de transfert de 6 mois (la France devient responsable)",
      ],
    },
    { type: "p", texte: "**Conseil :**" },
    {
      type: "p",
      texte: "Si vous êtes en procédure Dublin, faites-vous accompagner par un avocat ou une association. La procédure est technique et les délais sont courts.",
    },
    { type: "h2", texte: "Le recours devant la CNDA en cas de rejet par l'OFPRA", id: "recours-cnda" },
    { type: "p", texte: "En cas de rejet par l'OFPRA, vous pouvez saisir la CNDA :" },
    { type: "p", texte: "**Qu'est-ce que la CNDA ?**" },
    {
      type: "p",
      texte: "La Cour Nationale du Droit d'Asile est la juridiction spécialisée qui réexamine votre demande d'asile en cas de rejet par l'OFPRA.",
    },
    { type: "p", texte: "**Délai pour saisir la CNDA :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "1 mois à compter de la notification de la décision de l'OFPRA",
        "Le recours est suspensif : vous ne pouvez pas être expulsé pendant la procédure",
      ],
    },
    { type: "p", texte: "**Comment former le recours :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Rédigez un recours écrit en français (avec l'aide d'un avocat recommandé)",
        "Envoyez-le par courrier recommandé à la CNDA",
        "Joignez la décision de rejet de l'OFPRA et les pièces nouvelles",
        "Demandez l'aide juridictionnelle pour bénéficier d'un avocat gratuit",
      ],
    },
    { type: "p", texte: "**L'audience devant la CNDA :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Convocation à Montreuil (siège de la CNDA) ou par visioconférence",
        "Durée : environ 30-45 minutes",
        "Vous êtes interrogé par un juge (ou une formation collégiale)",
        "Un interprète est présent",
        "Votre avocat plaide votre cause",
        "Vous pouvez apporter de nouveaux éléments de preuve",
      ],
    },
    { type: "p", texte: "**Les issues possibles :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Annulation du rejet et reconnaissance du statut de réfugié ou de la protection subsidiaire",
        "Confirmation du rejet",
        "Renvoi à l'OFPRA pour réexamen (rare)",
      ],
    },
    { type: "p", texte: "**Délai de décision de la CNDA :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Objectif : 5 mois en formation collégiale, 5 semaines en juge unique",
        "En pratique : souvent 6 à 12 mois",
      ],
    },
    { type: "p", texte: "**Après un rejet CNDA :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pourvoi en cassation devant le Conseil d'État possible (dans les 2 mois)",
        "Mais le pourvoi n'est PAS suspensif",
        "Vous pouvez faire une demande de réexamen à l'OFPRA si vous avez de nouveaux éléments",
      ],
    },
    { type: "h2", texte: "Une fois reconnu réfugié : quels droits ?", id: "statut-refugie-droits" },
    { type: "p", texte: "Le statut de réfugié ouvre de nombreux droits en France :" },
    { type: "p", texte: "**Titre de séjour :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Carte de résident valable 10 ans (réfugiés)",
        "Carte de séjour pluriannuelle de 4 ans (protection subsidiaire), renouvelable",
        "Droit au travail immédiat sans restriction",
      ],
    },
    { type: "p", texte: "**Regroupement familial facilité :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les réfugiés peuvent faire venir leur famille (conjoint et enfants mineurs) sans condition de ressources ni de logement",
        "Procédure simplifiée par rapport au regroupement familial classique",
        "Demande auprès de l'OFPRA",
      ],
    },
    { type: "p", texte: "**Droits sociaux complets :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Affiliation à la Sécurité sociale",
        "Accès à toutes les aides CAF (APL, RSA, allocations familiales, prime d'activité)",
        "Accès au logement social",
        "Inscription à France Travail",
        "Formation professionnelle",
      ],
    },
    { type: "p", texte: "**Document de voyage :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les réfugiés reçoivent un titre de voyage (équivalent du passeport) délivré par la préfecture",
        "Permet de voyager dans la plupart des pays (sauf le pays d'origine)",
        "Valable 5 ans",
      ],
    },
    { type: "p", texte: "**Accès à la nationalité française :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pas de condition de durée de résidence : vous pouvez demander la naturalisation dès la reconnaissance du statut (en pratique, souvent après 2-3 ans)",
        "Conditions : intégration républicaine, connaissance du français, casier judiciaire vierge",
        "Le test civique fait partie des critères d'intégration",
      ],
    },
    { type: "p", texte: "**Protection contre le refoulement :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous ne pouvez pas être renvoyé dans votre pays d'origine",
        "Protection absolue tant que le statut est maintenu",
        "Le statut peut être retiré en cas de fraude ou de changement fondamental dans le pays d'origine",
      ],
    },
    { type: "p", texte: "**Préparation à l'intégration :**" },
    {
      type: "p",
      texte: "Dès l'obtention de votre statut, vous signerez le CIR (Contrat d'Intégration Républicaine) à l'OFII, incluant la formation civique et, si nécessaire, des cours de français. Préparez votre test civique sur testciviquefrance.fr.",
    },
    {
      type: "h2",
      texte: "Associations et ressources pour les demandeurs d'asile",
      id: "associations-aide-asile",
    },
    { type: "p", texte: "Des structures spécialisées vous accompagnent à chaque étape :" },
    { type: "p", texte: "**Associations nationales :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**France Terre d'Asile** : accueil, hébergement, accompagnement juridique (france-terre-asile.org)",
        "**Forum Réfugiés - Cosi** : aide juridique, hébergement, intégration (forumrefugies.org)",
        "**CIMADE** : permanences juridiques gratuites, accompagnement des étrangers (cimade.org)",
        "**Secours Catholique** : accueil, aide alimentaire, accompagnement social",
        "**Médecins Sans Frontières** : soins médicaux et psychologiques",
      ],
    },
    { type: "p", texte: "**Aide juridique :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Permanences juridiques gratuites en SPADA et CADA",
        "Aide juridictionnelle pour l'avocat (devant la CNDA)",
        "Barreaux locaux : permanences spécialisées en droit d'asile",
      ],
    },
    { type: "p", texte: "**Aide psychologique :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Centre Primo Levi (Paris) : soins aux victimes de torture et de violences politiques",
        "Comede : santé des exilés",
        "PASS hospitalières : soins gratuits",
      ],
    },
    { type: "p", texte: "**Aide à l'intégration (après obtention du statut) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "OFII : CIR, cours de français, orientation professionnelle",
        "France Travail : inscription, formation, recherche d'emploi",
        "Centres sociaux : aide aux démarches quotidiennes",
        "Programmes de parrainage citoyen : Singa, Wintegreat",
      ],
    },
    { type: "p", texte: "**Plateformes d'information :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Réfugiés.info (refugees.info/fr) : fiches pratiques multilingues sur les démarches en France",
        "InfoMigrants (infomigrants.net) : actualités sur les migrations en plusieurs langues",
        "Guide du demandeur d'asile (distribué au GUDA)",
      ],
    },
    { type: "p", texte: "**En cas d'urgence :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "115 : hébergement d'urgence",
        "112 : urgences européennes",
        "01 43 14 88 50 : Centre Primo Levi (victimes de torture)",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La demande d'asile en France est un parcours complexe mais encadré par le droit. De l'enregistrement en GUDA au recours devant la CNDA, chaque étape est déterminante. Le récit de vie, l'entretien OFPRA et les preuves que vous apportez sont les clés de la réussite de votre demande. Si votre demande aboutit, vous bénéficierez d'une protection complète et de droits étendus pour refaire votre vie en France. Faites-vous toujours accompagner par une association ou un avocat spécialisé, et une fois le statut obtenu, préparez votre intégration en passant le test civique sur testciviquefrance.fr.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Comment demander l'asile en France en 2026 ?",
      reponse: "Présentez-vous d'abord à une SPADA (Structure de Premier Accueil) qui vous orientera vers le GUDA en préfecture. Vous aurez ensuite 21 jours pour envoyer votre dossier à l'OFPRA.",
    },
    {
      question: "Combien de temps dure la procédure d'asile ?",
      reponse: "En moyenne, l'OFPRA statue en 2 à 6 mois. Si vous faites un recours CNDA, comptez 6 à 12 mois supplémentaires. En procédure accélérée, l'OFPRA vise 15 jours à 2 mois.",
    },
    {
      question: "Un demandeur d'asile peut-il travailler en France ?",
      reponse: "Pas pendant les 6 premiers mois. Après 6 mois sans décision de l'OFPRA, vous pouvez demander une autorisation de travail auprès de la préfecture.",
    },
    {
      question: "Qu'est-ce que l'ADA (Allocation pour Demandeurs d'Asile) ?",
      reponse: "L'ADA est une allocation financière d'environ 6,80 €/jour pour une personne seule, versée par l'OFII sur une carte de paiement. Un supplément de 7,40 €/jour est versé si aucun hébergement n'est proposé.",
    },
    {
      question: "Que faire en cas de rejet par l'OFPRA ?",
      reponse: "Vous avez 1 mois pour saisir la CNDA (Cour Nationale du Droit d'Asile). Le recours est suspensif : vous ne pouvez pas être expulsé pendant l'examen. Demandez l'aide juridictionnelle pour un avocat gratuit.",
    },
    {
      question: "Qu'est-ce que la procédure Dublin ?",
      reponse: "Le règlement Dublin détermine quel pays européen est responsable de votre demande d'asile (généralement le premier pays d'enregistrement). La France peut demander votre transfert vers ce pays.",
    },
    {
      question: "Quels droits pour les réfugiés reconnus en France ?",
      reponse: "Carte de résident 10 ans, droit au travail, regroupement familial facilité, accès à toutes les aides sociales (CAF, RSA, APL), titre de voyage, et possibilité de naturalisation accélérée.",
    },
    {
      question: "Comment rédiger le récit de vie pour l'OFPRA ?",
      reponse: "Soyez précis, chronologique et cohérent. Décrivez les persécutions subies, nommez les auteurs, expliquez pourquoi l'État ne vous protège pas. Joignez toutes les preuves disponibles et faites-vous aider par une association.",
    },
    {
      question: "Quelle différence entre statut de réfugié et protection subsidiaire ?",
      reponse: "Le statut de réfugié (Convention de Genève) donne une carte de résident 10 ans pour persécutions liées à la race, religion, nationalité, groupe social ou opinions politiques. La protection subsidiaire donne une carte de 4 ans pour risque de mort, torture ou conflit armé.",
    },
    {
      question: "Les enfants de demandeurs d'asile doivent-ils aller à l'école ?",
      reponse: "Oui. La scolarisation est obligatoire et gratuite pour tous les enfants de 3 à 16 ans résidant en France, quelle que soit la situation administrative des parents. L'école ne peut pas refuser un enfant.",
    },
  ],
  sources: [
    {
      titre: "OFPRA - Demander l'asile en France",
      url: "https://www.ofpra.gouv.fr/fr/asile/la-procedure-de-demande-d-asile/demander-l-asile-en-france",
      type: "officiel",
      description: "Site officiel de l'OFPRA avec la procédure de demande d'asile.",
    },
    {
      titre: "Service-Public.fr - Demande d'asile",
      url: "https://www.service-public.fr/particuliers/vosdroits/N106",
      type: "officiel",
      description: "Portail officiel des démarches pour les demandeurs d'asile.",
    },
    {
      titre: "CNDA - La Cour Nationale du Droit d'Asile",
      url: "https://www.cnda.fr/",
      type: "officiel",
      description: "Site officiel de la CNDA, juridiction de recours en matière d'asile.",
    },
    {
      titre: "France Terre d'Asile - Guide du demandeur d'asile",
      url: "https://www.france-terre-asile.org/",
      type: "article",
      description: "Association de référence pour l'accompagnement des demandeurs d'asile.",
    },
  ],
  aLireAussi: [
    {
      slug: "premiers-pas-france-etranger-banque-logement-caf-ameli",
      ancre: "Premiers pas en France après obtention du statut",
    },
    {
      slug: "contrat-engagement-republicain-2026-obligations-formation-civique",
      ancre: "Le CER pour les réfugiés reconnus",
    },
    {
      slug: "titre-sejour-etranger-malade-raisons-sante-2026",
      ancre: "Titre de séjour pour raisons de santé",
    },
    {
      slug: "recepisse-titre-de-sejour-droits-duree-voyage",
      ancre: "L'attestation de demande d'asile et le récépissé",
    },
  ],
};

export default article;
