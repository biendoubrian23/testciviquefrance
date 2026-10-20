import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-vie-pratique-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/aides-sociales-etrangers-france-2026-caf-rsa-apl-prime-activite`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "aides-sociales-etrangers-france-2026-caf-rsa-apl-prime-activite",
  titre: "Aides sociales pour les étrangers en France 2026 : CAF, RSA, APL, prime d'activité, guide complet",
  titreSeo: "Aides sociales pour les étrangers en France 2026 : CAF, RSA, APL, prime d'activité, guide complet",
  resume: "Quelles aides un étranger peut-il toucher en France ? RSA (5 ans de carence), APL (dès l'arrivée), allocations familiales, prime d'activité : conditions par titre de séjour, montants 2026 et démarches CAF.",
  chapo: "Quelles aides sociales un étranger peut-il percevoir en France en 2026 ? RSA, APL, allocations familiales, prime d'activité, AAH… Les conditions varient selon votre titre de séjour, votre ancienneté en France et votre situation familiale. Entre idées reçues et réalité juridique, ce guide fait le point complet sur les droits réels des étrangers en situation régulière, les délais de carence, les démarches CAF et les pièges à éviter.",
  publieLe: "2026-04-03",
  modifieLe: "2026-04-03",
  minutes: 22,
  theme: "aides sociales étrangers France 2026",
  motsCles: [
    "aides sociales étrangers France 2026",
    "CAF étranger titre de séjour",
    "RSA étranger conditions",
    "APL étranger France",
    "prime activité étranger",
    "allocations familiales étranger",
    "AAH étranger",
    "droits sociaux étrangers France",
    "CAF carte de séjour",
    "aides CAF titre de séjour",
    "délai carence RSA étranger",
    "étranger droit RSA France",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  blocs: [
    {
      type: "h2",
      texte: "Le principe : des droits conditionnés au titre de séjour",
      id: "principe-general",
    },
    {
      type: "p",
      texte: "En France, les aides sociales ne sont **pas réservées aux seuls Français**. Les étrangers en situation régulière y ont accès, mais sous conditions strictes liées à leur **titre de séjour** et à leur **ancienneté de résidence**.",
    },
    { type: "h3", texte: "La règle de base :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Séjour régulier obligatoire** : vous devez détenir un titre de séjour en cours de validité (carte de séjour temporaire, pluriannuelle, de résident, récépissé avec droit au travail, ou VLS-TS validé).",
        "**Résidence stable et effective** : vous devez résider en France de manière habituelle (au moins 6 mois par an sur le territoire).",
        "**Certaines aides imposent un délai de carence** : notamment le RSA (5 ans de séjour régulier pour les non-européens).",
      ],
    },
    {
      type: "p",
      texte: "**Important** : les demandeurs d'asile en cours de procédure ne relèvent pas du droit commun, ils bénéficient de l'ADA (Allocation pour Demandeur d'Asile) versée par l'OFII, pas de la CAF.",
    },
    {
      type: "p",
      texte: "**Lien avec le test civique** : la thématique « Vivre dans la société française » du test civique couvre les droits sociaux, la solidarité nationale et le fonctionnement de la Sécurité sociale. Connaître ces dispositifs est utile pour l'examen.",
    },
    {
      type: "h2",
      texte: "APL et aides au logement : conditions pour les étrangers",
      id: "apl-aide-logement",
    },
    {
      type: "p",
      texte: "Les **aides au logement** (APL, ALS, ALF) sont les plus accessibles pour les étrangers en situation régulière.",
    },
    { type: "h3", texte: "Conditions d'éligibilité :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Titre de séjour en cours de validité** (tous types acceptés, y compris récépissé)",
        "**Pas de condition d'ancienneté** : vous pouvez demander l'APL dès votre arrivée en France",
        "**Logement décent** conforme aux normes de surface et d'habitabilité",
        "**Ressources** : sous conditions de revenus (plafonds variables selon la zone géographique)",
      ],
    },
    { type: "h3", texte: "Les 3 types d'aides au logement :" },
    {
      type: "tableau",
      entetes: ["Aide", "Pour qui", "Montant moyen"],
      lignes: [
        [
          "**APL** (Aide Personnalisée au Logement)",
          "Locataires d'un logement conventionné",
          "150 à 350 €/mois",
        ],
        [
          "**ALS** (Allocation de Logement Sociale)",
          "Locataires d'un logement non conventionné",
          "100 à 280 €/mois",
        ],
        [
          "**ALF** (Allocation de Logement Familiale)",
          "Familles avec enfants à charge",
          "150 à 400 €/mois",
        ],
      ],
    },
    {
      type: "p",
      texte: "**Démarche** : créez votre compte sur **caf.fr** avec votre numéro de titre de séjour, puis faites la demande en ligne. Délai de traitement : 1 à 2 mois. Les droits sont ouverts rétroactivement au mois suivant la demande.",
    },
    {
      type: "p",
      texte: "**Cas particulier des étudiants étrangers** : les étudiants titulaires d'un VLS-TS « étudiant » ont droit à l'APL aux mêmes conditions que les étudiants français.",
    },
    { type: "h2", texte: "Allocations familiales et prestations enfants", id: "allocations-familiales" },
    {
      type: "p",
      texte: "Les **allocations familiales** sont versées automatiquement dès le 2e enfant à charge, sans condition de revenus (mais le montant varie selon les ressources depuis 2015).",
    },
    { type: "h3", texte: "Conditions pour les étrangers :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Titre de séjour en cours de validité**",
        "**Enfants résidant en France** (les enfants restés au pays ne sont pas éligibles)",
        "**Pas de délai de carence** pour les allocations familiales",
      ],
    },
    { type: "h3", texte: "Montants 2026 (par mois) :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**2 enfants** : 141,99 € (revenus modestes) à 35,50 € (revenus élevés)",
        "**3 enfants** : 323,91 € à 80,98 €",
        "**Par enfant supplémentaire** : +181,92 € à +45,48 €",
      ],
    },
    { type: "h3", texte: "Autres prestations enfants accessibles :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**PAJE** (Prestation d'Accueil du Jeune Enfant) : prime à la naissance (1 019 €) + allocation de base mensuelle",
        "**Complément mode de garde** : aide pour la crèche ou assistante maternelle",
        "**ARS** (Allocation de Rentrée Scolaire) : 416 à 454 € par enfant selon l'âge, versée en août",
      ],
    },
    {
      type: "p",
      texte: "**Attention** : pour les enfants arrivés par **regroupement familial**, les droits s'ouvrent à la date d'arrivée effective en France, pas à la date de la demande.",
    },
    {
      type: "h2",
      texte: "RSA : le délai de carence de 5 ans pour les étrangers non européens",
      id: "rsa-conditions",
    },
    {
      type: "p",
      texte: "Le **Revenu de Solidarité Active (RSA)** est l'aide la plus encadrée pour les étrangers. Depuis la réforme de 2011, un **délai de carence de 5 ans** s'applique aux ressortissants non européens.",
    },
    { type: "h3", texte: "Conditions cumulatives :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Avoir 25 ans ou plus** (ou être parent isolé, ou avoir travaillé 2 ans sur les 3 dernières années si moins de 25 ans)",
        "**Résider en France de manière stable et effective**",
        "**Détenir un titre de séjour autorisant le travail** depuis au moins **5 ans**",
        "**Ressources inférieures au montant du RSA** : 635,71 € pour une personne seule en 2026",
      ],
    },
    { type: "h3", texte: "Exceptions au délai de 5 ans :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Réfugiés statutaires et bénéficiaires de la protection subsidiaire** : pas de délai de carence",
        "**Apatrides** : pas de délai",
        "**Citoyens européens (UE/EEE/Suisse)** : 3 mois de résidence suffisent (mais doivent prouver un droit au séjour)",
        "**Titulaires de la carte de résident de 10 ans** : le délai de 5 ans est généralement déjà atteint",
      ],
    },
    { type: "p", texte: "**Montant du RSA 2026** :" },
    {
      type: "tableau",
      entetes: ["Situation", "Montant mensuel"],
      lignes: [
        ["Personne seule", "635,71 €"],
        ["Couple sans enfant", "953,56 €"],
        ["Personne seule + 1 enfant", "953,56 €"],
        ["Couple + 2 enfants", "1 335,00 €"],
      ],
    },
    {
      type: "p",
      texte: "**Démarche** : demande en ligne sur caf.fr ou en mairie/CCAS. Depuis 2025, le RSA est conditionné à **15 heures d'activité hebdomadaire** (inscription France Travail obligatoire).",
    },
    {
      type: "h2",
      texte: "Prime d'activité : l'aide la plus demandée par les étrangers qui travaillent",
      id: "prime-activite",
    },
    {
      type: "p",
      texte: "La **prime d'activité** est le complément de revenus le plus sollicité par les étrangers en emploi. Elle concerne les travailleurs modestes (salariés, indépendants, étudiants salariés).",
    },
    { type: "h3", texte: "Conditions :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Avoir 18 ans ou plus**",
        "**Exercer une activité professionnelle** (salariée ou indépendante)",
        "**Résider en France de manière stable**",
        "**Titre de séjour autorisant le travail en cours de validité**",
        "**Pas de délai de carence de 5 ans** (contrairement au RSA)",
        "**Revenus mensuels nets** inférieurs à environ 1 900 € net (personne seule)",
      ],
    },
    { type: "h3", texte: "Montant :" },
    {
      type: "p",
      texte: "Le montant est calculé automatiquement par la CAF en fonction de vos revenus, de la composition du foyer et du loyer. En moyenne, la prime d'activité représente **150 à 280 €/mois** pour un salarié au SMIC.",
    },
    {
      type: "p",
      texte: "**Astuce** : faites une simulation sur **caf.fr/aides-et-services/s-informer-sur-les-aides/prime-d-activite** pour connaître votre montant exact. La déclaration trimestrielle de revenus est obligatoire pour maintenir le versement.",
    },
    {
      type: "p",
      texte: "**Étudiants étrangers** : si vous travaillez au moins 78 heures par mois (environ 18h/semaine), vous pouvez être éligible à la prime d'activité même avec un titre de séjour étudiant.",
    },
    { type: "h2", texte: "AAH et prestations handicap pour les étrangers", id: "aah-handicap" },
    {
      type: "p",
      texte: "L'**Allocation aux Adultes Handicapés (AAH)** est accessible aux étrangers en situation régulière, sous conditions spécifiques.",
    },
    { type: "h3", texte: "Conditions :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Taux d'incapacité** reconnu par la MDPH d'au moins 80 % (ou entre 50 % et 79 % avec restriction substantielle d'accès à l'emploi)",
        "**Titre de séjour en cours de validité**",
        "**Résider en France de manière permanente**",
        "**Pas de condition de durée de séjour préalable**",
        "**Ressources** inférieures au plafond (1 016 € pour une personne seule en 2026)",
      ],
    },
    {
      type: "p",
      texte: "**Montant maximal** : 1 016,05 €/mois (2026). L'AAH est non imposable et cumulable sous conditions avec un salaire.",
    },
    {
      type: "p",
      texte: "**Démarche** : constituer un dossier MDPH (Maison Départementale des Personnes Handicapées) auprès de votre département. Délai moyen de traitement : 4 à 6 mois.",
    },
    { type: "h2", texte: "Comment ouvrir un compte CAF et faire ses demandes", id: "demarches-caf" },
    {
      type: "p",
      texte: "La **Caisse d'Allocations Familiales (CAF)** gère la majorité des aides sociales. Voici comment procéder étape par étape :",
    },
    { type: "h3", texte: "Étape 1 : Créer votre compte en ligne" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Rendez-vous sur **caf.fr** > « Mon compte » > « Créer mon espace »",
        "Renseignez votre **numéro de Sécurité sociale** (si vous en avez un) ou demandez la création d'un dossier allocataire",
        "Fournissez votre **titre de séjour** (recto-verso), passeport, justificatif de domicile",
      ],
    },
    { type: "h3", texte: "Étape 2 : Faire votre demande de prestation" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Connectez-vous > « Faire une demande de prestation » > Sélectionnez l'aide souhaitée",
        "Remplissez le formulaire en ligne avec vos revenus et votre situation familiale",
        "Uploadez les justificatifs demandés (titre de séjour, avis d'imposition, RIB, bail)",
      ],
    },
    { type: "h3", texte: "Documents indispensables :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Titre de séjour** recto-verso (ou récépissé)",
        "**Avis d'imposition** ou de non-imposition (ou déclaration de revenus à l'étranger pour la 1re année)",
        "**RIB** à votre nom",
        "**Bail** ou attestation d'hébergement",
        "**Actes de naissance des enfants** (traduits et apostillés si nés à l'étranger)",
      ],
    },
    {
      type: "p",
      texte: "**Délai de traitement** : comptez 1 à 3 mois. Vous pouvez suivre l'avancement de votre dossier en ligne. Si vous n'avez pas de réponse après 2 mois, contactez votre CAF locale par téléphone au **3230**.",
    },
    {
      type: "h2",
      texte: "Tableau récapitulatif : quelle aide pour quel titre de séjour",
      id: "tableau-recapitulatif",
    },
    { type: "p", texte: "Ce tableau résume les droits aux principales aides selon votre situation :" },
    {
      type: "tableau",
      entetes: [
        "Aide",
        "Carte temporaire (1 an)",
        "Carte pluriannuelle",
        "Carte résident 10 ans",
        "Réfugié / Protection sub.",
        "Délai de carence",
      ],
      lignes: [
        ["**APL / ALS / ALF**", "✅ Oui", "✅ Oui", "✅ Oui", "✅ Oui", "Aucun"],
        ["**Allocations familiales**", "✅ Oui", "✅ Oui", "✅ Oui", "✅ Oui", "Aucun"],
        [
          "**Prime d'activité**",
          "✅ Si travail",
          "✅ Si travail",
          "✅ Si travail",
          "✅ Si travail",
          "Aucun",
        ],
        ["**RSA**", "❌ Avant 5 ans", "❌ Avant 5 ans", "✅ Oui", "✅ Oui", "**5 ans**"],
        ["**AAH**", "✅ Oui (MDPH)", "✅ Oui", "✅ Oui", "✅ Oui", "Aucun"],
        ["**ARS (rentrée)**", "✅ Oui", "✅ Oui", "✅ Oui", "✅ Oui", "Aucun"],
        ["**PAJE (naissance)**", "✅ Oui", "✅ Oui", "✅ Oui", "✅ Oui", "Aucun"],
      ],
    },
    {
      type: "p",
      texte: "**À retenir** : la plupart des aides CAF sont accessibles **sans délai de carence** dès lors que vous avez un titre de séjour valide. Le RSA est l'exception notable avec ses 5 ans d'ancienneté pour les non-européens.",
    },
    {
      type: "h2",
      texte: "Vrai ou faux : les 5 idées reçues sur les aides aux étrangers",
      id: "idees-recues",
    },
    { type: "p", texte: "Démêlons le vrai du faux sur un sujet souvent instrumentalisé :" },
    { type: "h3", texte: "❌ FAUX : « Les étrangers touchent le RSA dès leur arrivée »" },
    {
      type: "p",
      texte: "Les étrangers non européens doivent attendre **5 ans de séjour régulier** avant de pouvoir demander le RSA. Seuls les réfugiés en sont exemptés.",
    },
    { type: "h3", texte: "✅ VRAI : « Les étrangers ont droit à l'APL »" },
    {
      type: "p",
      texte: "Oui, dès lors qu'ils ont un titre de séjour valide et un logement éligible. **Aucun délai de carence**.",
    },
    {
      type: "h3",
      texte: "❌ FAUX : « Les étrangers en situation irrégulière touchent des allocations CAF »",
    },
    {
      type: "p",
      texte: "Non. La CAF exige un titre de séjour valide. Les personnes sans papiers n'ont accès qu'à l'**AME** (Aide Médicale d'État) pour les soins et à l'hébergement d'urgence (115).",
    },
    { type: "h3", texte: "✅ VRAI : « Un étudiant étranger peut toucher l'APL »" },
    {
      type: "p",
      texte: "Oui. Le VLS-TS étudiant donne accès aux aides au logement dans les mêmes conditions qu'un étudiant français.",
    },
    { type: "h3", texte: "❌ FAUX : « Les aides sont plus élevées pour les étrangers »" },
    {
      type: "p",
      texte: "Faux. Les montants sont identiques pour tous, calculés selon les mêmes barèmes de revenus et de composition familiale. Il n'existe aucune majoration liée à la nationalité.",
    },
    { type: "h2", texte: "Ce qu'il faut savoir pour le test civique", id: "lien-test-civique" },
    {
      type: "p",
      texte: "Le test civique aborde la **solidarité nationale** et le **système de protection sociale** dans la thématique « Vivre dans la société française ». Voici les points clés :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "La **Sécurité sociale** a été créée en **1945** : elle couvre maladie, retraite, famille et accidents du travail.",
        "Le principe de **solidarité nationale** est inscrit dans la Constitution : chacun contribue selon ses moyens et reçoit selon ses besoins.",
        "Les **cotisations sociales** prélevées sur les salaires financent le système (pas uniquement les impôts).",
        "La **CAF** est l'organisme qui gère les prestations familiales et les aides au logement.",
        "Le **RSA** est le filet de sécurité minimal pour les personnes sans ressources.",
      ],
    },
    {
      type: "p",
      texte: "Entraînez-vous sur les questions liées à la protection sociale dans nos [QCM gratuits](/dashboard/entrainement).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Les étrangers en situation régulière ont accès à la grande majorité des aides sociales en France, souvent sans délai de carence (APL, allocations familiales, prime d'activité, AAH). Le RSA fait exception avec un délai de 5 ans pour les non-européens. Créez votre compte CAF dès l'obtention de votre titre de séjour pour faire valoir vos droits sans attendre. Et pour préparer votre naturalisation, la connaissance du système de protection sociale fait partie des thématiques du test civique, entraînez-vous gratuitement sur [notre plateforme](/dashboard/entrainement).",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Un étranger avec un récépissé peut-il toucher des aides CAF ?",
      reponse: "Oui, à condition que le récépissé porte la mention « autorise son titulaire à travailler » ou qu'il s'agisse d'un récépissé de renouvellement. Le récépissé de première demande peut être insuffisant pour certaines aides.",
    },
    {
      question: "Faut-il un numéro de Sécurité sociale pour s'inscrire à la CAF ?",
      reponse: "Non obligatoirement. La CAF peut créer votre dossier avec votre titre de séjour et votre passeport. Votre numéro de Sécurité sociale sera attribué par la CPAM et transmis ensuite à la CAF.",
    },
    {
      question: "Les aides CAF comptent-elles dans les ressources pour le renouvellement du titre de séjour ?",
      reponse: "En principe non. Les aides sociales (APL, allocations familiales) ne sont pas considérées comme des \"ressources suffisantes\" pour le renouvellement d'un titre de séjour salarié. La préfecture examine vos revenus d'activité.",
    },
    {
      question: "Peut-on cumuler prime d'activité et APL ?",
      reponse: "Oui. La prime d'activité et l'APL sont deux aides distinctes et cumulables. En revanche, vos aides au logement sont prises en compte dans le calcul du RSA (forfait logement déduit).",
    },
    {
      question: "Un étranger en France depuis moins de 5 ans n'a vraiment aucune aide si pas de travail ?",
      reponse: "Il n'a pas droit au RSA, mais il peut percevoir l'APL (aide au logement), l'ARS pour les enfants, et en cas de difficulté, solliciter les aides d'urgence du CCAS de sa commune ou des associations (Secours populaire, Restos du Cœur).",
    },
  ],
  sources: [
    {
      titre: "Service-Public.fr, RSA conditions pour les étrangers",
      url: "https://www.service-public.fr/particuliers/vosdroits/F24585",
      type: "officiel",
      description: "Conditions d'accès au RSA pour les personnes étrangères",
    },
    {
      titre: "CAF.fr, Simulateur de droits",
      url: "https://www.caf.fr/aides-et-services/les-services-en-ligne/estimateur",
      type: "officiel",
      description: "Simulateur officiel pour estimer vos droits aux aides CAF",
    },
    {
      titre: "Code de l'action sociale et des familles : Article L262-4",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031686793/",
      type: "juridique",
      description: "Conditions de résidence pour le RSA",
    },
    {
      titre: "Service-Public.fr, Aides au logement",
      url: "https://www.service-public.fr/particuliers/vosdroits/F12006",
      type: "officiel",
      description: "Conditions et démarches pour les aides au logement (APL, ALS, ALF)",
    },
  ],
};

export default article;
