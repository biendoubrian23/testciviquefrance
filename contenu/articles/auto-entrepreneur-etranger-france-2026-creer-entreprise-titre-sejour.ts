import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-vie-pratique-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/auto-entrepreneur-etranger-france-2026-creer-entreprise-titre-sejour`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "auto-entrepreneur-etranger-france-2026-creer-entreprise-titre-sejour",
  titre: "Auto-entrepreneur étranger en France 2026 : quels titres, procédure, fiscalité et pièges à éviter",
  titreSeo: "Auto-entrepreneur étranger en France 2026 : quels titres, procédure, fiscalité et pièges à éviter",
  resume: "Créer une micro-entreprise en tant qu'étranger : titres de séjour compatibles, changement de statut, immatriculation URSSAF, cotisations et les 5 erreurs qui mettent en danger votre titre.",
  chapo: "Vous êtes étranger en France et vous voulez devenir auto-entrepreneur ou créer votre entreprise ? La question est plus complexe qu'il n'y paraît : tous les titres de séjour ne permettent pas d'exercer une activité indépendante, et les démarches varient selon votre situation. Ce guide complet détaille les conditions juridiques, les titres de séjour compatibles, la procédure d'immatriculation, les erreurs à éviter et les aides disponibles pour les entrepreneurs étrangers en 2026.",
  publieLe: "2026-04-03",
  modifieLe: "2026-04-03",
  minutes: 21,
  theme: "auto-entrepreneur étranger France 2026",
  motsCles: [
    "auto-entrepreneur étranger France 2026",
    "créer entreprise étranger France",
    "titre de séjour auto-entrepreneur",
    "micro-entreprise étranger",
    "étranger activité indépendante France",
    "carte de séjour entrepreneur",
    "passeport talent création entreprise",
    "URSSAF étranger",
    "auto-entrepreneur carte de séjour salarié",
    "devenir livreur uber étranger titre séjour",
    "créer entreprise sans papiers France",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
  },
  blocs: [
    {
      type: "h2",
      texte: "Quels titres de séjour permettent de devenir auto-entrepreneur ?",
      id: "quels-titres-permettent",
    },
    {
      type: "p",
      texte: "Tous les titres de séjour ne donnent **pas** le droit d'exercer une activité indépendante (commerciale, artisanale ou libérale). Voici le récapitulatif :",
    },
    { type: "h3", texte: "✅ Titres qui autorisent l'activité indépendante :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Carte de résident (10 ans)** : autorise toute activité salariée ou indépendante sans restriction",
        "**Carte de séjour pluriannuelle « passeport talent, création d'entreprise »** : titre spécifique pour les créateurs d'entreprise",
        "**Carte de séjour « vie privée et familiale »** : autorise toute activité professionnelle, y compris indépendante",
        "**Carte de résident longue durée-UE** : mêmes droits que la carte de résident",
        "**Carte de séjour « entrepreneur/profession libérale »** : titre spécifique (ancienne APS commerçant)",
        "**Visa « vacances-travail »** (Working Holiday Visa) : autorise une activité indépendante dans certains cas",
      ],
    },
    { type: "h3", texte: "❌ Titres qui n'autorisent PAS l'activité indépendante :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Carte de séjour temporaire « salarié »** : autorise UNIQUEMENT le travail salarié",
        "**Carte de séjour temporaire « travailleur temporaire »** : limitée au contrat spécifique",
        "**VLS-TS étudiant** : autorise le travail salarié (964h/an) mais **pas l'activité indépendante**",
        "**Récépissé de demande de titre** : dépend de la mention portée (vérifiez « autorise à travailler »)",
      ],
    },
    {
      type: "p",
      texte: "**⚠️ Attention piège courant** : de nombreux étrangers titulaires d'une carte « salarié » créent un statut auto-entrepreneur pensant être en règle. C'est **illégal** et peut entraîner le refus de renouvellement du titre de séjour. Si votre carte porte la mention « salarié », vous devez d'abord demander un **changement de statut** en préfecture.",
    },
    { type: "h2", texte: "Comment changer de statut pour devenir indépendant", id: "changement-statut" },
    {
      type: "p",
      texte: "Si votre titre de séjour actuel ne permet pas l'activité indépendante, vous devez demander un **changement de statut** auprès de la préfecture.",
    },
    { type: "h3", texte: "Procédure de changement de statut :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Identifiez le titre adapté** : « entrepreneur/profession libérale » ou « passeport talent, création d'entreprise »",
        "**Constituez votre dossier** via la plateforme ANEF : Business plan détaillé (prévisionnel sur 3 ans) Justificatif d'investissement : au moins 30 000 € pour le passeport talent Diplôme ou expérience professionnelle dans le domaine Justificatif de domicile Titre de séjour en cours",
        "**Déposez la demande** au moins 2 mois avant l'expiration de votre titre actuel",
        "**Délai de traitement** : 2 à 4 mois en moyenne",
      ],
    },
    { type: "h3", texte: "Le passeport talent « création d'entreprise » :" },
    { type: "p", texte: "C'est le titre le plus avantageux pour les entrepreneurs étrangers :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Durée** : jusqu'à 4 ans, renouvelable",
        "**Conditions** : investissement d'au moins 30 000 €, projet économique viable, diplôme de niveau master ou expérience équivalente",
        "**Avantage** : votre famille bénéficie automatiquement d'un titre de séjour",
      ],
    },
    {
      type: "h2",
      texte: "Créer sa micro-entreprise : la procédure étape par étape",
      id: "procedure-creation",
    },
    {
      type: "p",
      texte: "Une fois votre titre de séjour compatible en main, voici comment devenir auto-entrepreneur :",
    },
    { type: "h3", texte: "Étape 1 : Déclaration d'activité" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Rendez-vous sur le **Guichet unique** des formalités d'entreprise : **formalites.entreprises.gouv.fr**",
        "Créez votre compte et remplissez le formulaire de déclaration de micro-entreprise",
        "Sélectionnez votre activité (code APE/NAF)",
      ],
    },
    { type: "h3", texte: "Étape 2 : Documents à fournir" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Titre de séjour** autorisant l'activité indépendante (recto-verso)",
        "**Pièce d'identité** (passeport)",
        "**Justificatif de domicile**",
        "**Déclaration de non-condamnation** et de filiation",
      ],
    },
    { type: "h3", texte: "Étape 3 : Immatriculation" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous recevez votre **numéro SIRET** sous 1 à 4 semaines",
        "Inscription automatique à l'**URSSAF** pour les cotisations sociales",
        "Pour les commerçants : inscription au **Registre du Commerce (RCS)**",
        "Pour les artisans : inscription au **Répertoire des Métiers (RM)**",
      ],
    },
    { type: "h3", texte: "Étape 4 : Ouvrir un compte bancaire dédié" },
    {
      type: "p",
      texte: "Obligatoire si votre chiffre d'affaires dépasse 10 000 € pendant 2 années consécutives. Recommandé dès le début pour séparer vos finances personnelles et professionnelles.",
    },
    {
      type: "h2",
      texte: "Fiscalité et cotisations de l'auto-entrepreneur étranger",
      id: "fiscalite-cotisations",
    },
    {
      type: "p",
      texte: "Le régime micro-entrepreneur est **identique pour les Français et les étrangers**. Pas de régime spécifique lié à la nationalité.",
    },
    { type: "h3", texte: "Cotisations sociales URSSAF :" },
    {
      type: "tableau",
      entetes: ["Type d'activité", "Taux de cotisation", "Plafond CA annuel 2026"],
      lignes: [
        ["Vente de marchandises", "12,3 %", "188 700 €"],
        ["Prestations de services (BIC)", "21,2 %", "77 700 €"],
        ["Prestations de services (BNC)", "21,1 %", "77 700 €"],
        ["Professions libérales (CIPAV)", "21,2 %", "77 700 €"],
      ],
    },
    {
      type: "p",
      texte: "Les cotisations se paient **mensuellement ou trimestriellement** sur le site autoentrepreneur.urssaf.fr, uniquement sur le chiffre d'affaires encaissé. Pas de CA = pas de cotisation.",
    },
    { type: "h3", texte: "Impôts :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Impôt sur le revenu** : déclaration annuelle obligatoire. Deux options : régime classique ou versement libératoire (1 % à 2,2 % du CA)",
        "**CFE** (Cotisation Foncière des Entreprises) : due à partir de la 2e année, entre 75 € et 600 € selon la commune",
        "**TVA** : exonéré en dessous des plafonds (franchise en base de TVA)",
      ],
    },
    {
      type: "p",
      texte: "**Point important pour le titre de séjour** : vos revenus d'auto-entrepreneur comptent comme ressources pour le renouvellement. Conservez vos déclarations URSSAF et avis d'imposition comme justificatifs.",
    },
    {
      type: "h2",
      texte: "Les activités les plus exercées par les auto-entrepreneurs étrangers",
      id: "activites-populaires",
    },
    {
      type: "p",
      texte: "Voici les secteurs où les étrangers sont les plus représentés en auto-entreprise en France :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Livraison à vélo/scooter** (Uber Eats, Deliveroo, Stuart) : attention, nécessite un titre autorisant l'activité indépendante !",
        "**VTC** (chauffeur LOTI/VTC) : nécessite en plus la carte VTC ou la licence LOTI",
        "**BTP et artisanat** : peinture, plomberie, électricité, attention aux qualifications obligatoires",
        "**Services à la personne** : ménage, garde d'enfants, aide aux personnes âgées",
        "**Restauration et traiteur** : vente ambulante, food truck, traiteur à domicile",
        "**Commerce en ligne** : e-commerce, dropshipping, vente sur marketplaces",
        "**Freelance digital** : développement web, graphisme, traduction, rédaction",
        "**Formation et conseil** : cours de langues, coaching, consulting",
      ],
    },
    {
      type: "p",
      texte: "**⚠️ Rappel** : certaines activités nécessitent des **qualifications professionnelles** (diplôme ou expérience de 3 ans) : coiffure, bâtiment, alimentation, mécanique auto, esthétique… Renseignez-vous auprès de la Chambre des Métiers de votre département.",
    },
    {
      type: "h2",
      texte: "Les 5 erreurs qui mettent en danger votre titre de séjour",
      id: "erreurs-pieges",
    },
    {
      type: "p",
      texte: "Créer une auto-entreprise en tant qu'étranger comporte des risques spécifiques :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Créer une entreprise avec un titre « salarié »** : c'est illégal. La préfecture peut refuser le renouvellement de votre titre et vous mettre en demeure de régulariser.",
        "**Ne pas déclarer son chiffre d'affaires** : même si vous n'avez pas de revenus, la déclaration URSSAF est obligatoire (déclarez 0 €). Les défauts de déclaration entraînent des pénalités.",
        "**Travailler comme « faux indépendant »** : si vous n'avez qu'un seul client qui vous impose horaires et lieu de travail, c'est du salariat déguisé. Risque de requalification et de sanctions.",
        "**Négliger la CFE** : cette taxe surprend beaucoup d'auto-entrepreneurs la 2e année. Provisionnez-la pour éviter les impayés.",
        "**Oublier l'impact sur les aides sociales** : vos revenus d'auto-entrepreneur sont pris en compte pour le calcul de la prime d'activité, de l'APL et du RSA. Déclarez-les correctement à la CAF chaque trimestre.",
      ],
    },
    {
      type: "h2",
      texte: "Aides et accompagnement pour les entrepreneurs étrangers",
      id: "aides-entrepreneurs-etrangers",
    },
    {
      type: "p",
      texte: "Plusieurs dispositifs soutiennent les créateurs d'entreprise, y compris étrangers :",
    },
    { type: "h3", texte: "Aides financières :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**ACRE** (Aide à la Création ou Reprise d'Entreprise) : exonération partielle de cotisations sociales la 1re année (-50 %)",
        "**ARCE** : si vous percevez l'ARE (allocation chômage), vous pouvez recevoir 60 % de vos droits restants en capital",
        "**Prêt d'honneur** : prêt à taux zéro via Initiative France ou Réseau Entreprendre (5 000 à 50 000 €)",
        "**Microcrédit professionnel** : via l'ADIE (Association pour le Droit à l'Initiative Économique), jusqu'à 12 000 €",
      ],
    },
    { type: "h3", texte: "Accompagnement gratuit :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**BGE** (réseau national d'accompagnement) : conseil gratuit, formations à la gestion",
        "**CCI** (Chambre de Commerce et d'Industrie) : ateliers création d'entreprise",
        "**CMA** (Chambre des Métiers et de l'Artisanat) : pour les artisans",
        "**ADIE** : microcrédit + accompagnement pour les projets modestes",
        "**Pôle emploi / France Travail** : ateliers, formations, conseiller dédié création d'entreprise",
      ],
    },
    { type: "h2", texte: "L'entrepreneuriat et le test civique", id: "lien-test-civique-entrepreneur" },
    {
      type: "p",
      texte: "Le test civique couvre la thématique « **Travailler en France** » et les valeurs économiques de la République :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "La **liberté d'entreprendre** est un principe constitutionnel en France",
        "L'**obligation de payer des impôts et des cotisations sociales** fait partie des devoirs de tout résident",
        "Le **droit du travail** français protège les salariés, en tant qu'employeur, vous devez le respecter",
        "La **contribution fiscale** finance les services publics (santé, éducation, sécurité) : c'est un acte de solidarité nationale",
      ],
    },
    { type: "p", texte: "Préparez ces questions avec nos [QCM gratuits](/dashboard/entrainement)." },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Devenir auto-entrepreneur en tant qu'étranger en France est tout à fait possible, mais cela exige de bien vérifier que votre titre de séjour autorise l'activité indépendante. Les titres « vie privée et familiale », « carte de résident » et « passeport talent » le permettent, les titres « salarié » et « étudiant » ne le permettent pas sans changement de statut. Respectez vos obligations fiscales et sociales (URSSAF, CFE, impôts) et profitez des aides disponibles (ACRE, ADIE, BGE). Pour votre naturalisation, sachez que l'entrepreneuriat démontre une forte intégration économique, et préparez le test civique sur [notre plateforme gratuite](/dashboard/entrainement).",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Peut-on être auto-entrepreneur avec un titre de séjour étudiant ?",
      reponse: "Non. Le titre de séjour étudiant autorise uniquement le travail salarié (964 heures par an). Pour exercer une activité indépendante, vous devez demander un changement de statut en préfecture vers un titre « entrepreneur/profession libérale » ou « passeport talent ».",
    },
    {
      question: "Faut-il un capital minimum pour créer une auto-entreprise en France ?",
      reponse: "Non. Le régime de la micro-entreprise ne nécessite aucun capital minimum. Vous pouvez démarrer avec 0 € de capital. En revanche, le passeport talent « création d'entreprise » exige un investissement d'au moins 30 000 €.",
    },
    {
      question: "Un sans-papiers peut-il créer une entreprise en France ?",
      reponse: "Non. L'immatriculation d'une entreprise nécessite un titre de séjour valide autorisant l'activité indépendante. Sans titre de séjour, l'URSSAF et le Guichet unique refuseront l'inscription.",
    },
    {
      question: "Mes revenus d'auto-entrepreneur comptent-ils pour le renouvellement de mon titre de séjour ?",
      reponse: "Oui. Vos revenus d'activité indépendante sont pris en compte comme ressources. Présentez vos déclarations URSSAF et vos avis d'imposition à la préfecture. Un chiffre d'affaires stable est un argument positif pour le renouvellement.",
    },
  ],
  sources: [
    {
      titre: "Service-Public.fr, Étranger créateur d'entreprise",
      url: "https://www.service-public.fr/particuliers/vosdroits/F36241",
      type: "officiel",
      description: "Conditions pour les étrangers souhaitant créer une entreprise en France",
    },
    {
      titre: "URSSAF : Devenir auto-entrepreneur",
      url: "https://www.autoentrepreneur.urssaf.fr/",
      type: "officiel",
      description: "Portail officiel de déclaration et gestion de la micro-entreprise",
    },
    {
      titre: "CESEDA : Articles L421-5 à L421-10 (commerçant/artisan)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042776012/",
      type: "juridique",
      description: "Conditions de délivrance du titre entrepreneur/profession libérale",
    },
    {
      titre: "ADIE : Microcrédit professionnel",
      url: "https://www.adie.org/",
      type: "officiel",
      description: "Accompagnement et microcrédit pour les créateurs d'entreprise",
    },
  ],
};

export default article;
