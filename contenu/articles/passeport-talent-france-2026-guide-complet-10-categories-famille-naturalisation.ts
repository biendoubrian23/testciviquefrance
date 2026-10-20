import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-naturalisation-passeport-talent-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/passeport-talent-france-2026-guide-complet-10-categories-famille-naturalisation`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "passeport-talent-france-2026-guide-complet-10-categories-famille-naturalisation",
  titre: "Passeport Talent France 2026 : les 10 catégories, salaires, famille et chemin vers la naturalisation",
  titreSeo: "Passeport Talent France 2026 : les 10 catégories, salaires, famille et chemin vers la naturalisation",
  resume: "Passeport Talent 2026 : titre de séjour 4 ans pour profils qualifiés. Tableau des 10 catégories avec conditions précises, salaire minimum (1,5× SMIC), comment faire venir son conjoint immédiatement, accès à la carte de résident en 3 ans et naturalisation.",
  chapo: "Le Passeport Talent est l'un des titres de séjour les moins connus mais les plus avantageux que la France propose aux étrangers qualifiés. Un titre de séjour de 4 ans (au lieu d'1 an renouvelable), une carte famille immédiate pour le conjoint, une voie directe vers la carte de résident, et pourtant, des milliers de personnes éligibles passent à côté faute d'information. Que vous soyez salarié qualifié, chercheur, artiste, entrepreneur ou investisseur, ce guide complet vous explique les 10 catégories, les conditions précises, la procédure à suivre et comment ce titre peut mener à la nationalité française.",
  publieLe: "2026-04-05",
  modifieLe: "2026-04-05",
  minutes: 20,
  theme: "passeport talent France 2026",
  motsCles: [
    "passeport talent France 2026",
    "passeport talent conditions eligibilite",
    "passeport talent salarié qualifié",
    "passeport talent chercheur",
    "passeport talent entrepreneur",
    "titre de séjour 4 ans qualifié",
    "passeport talent famille conjoint",
    "passeport talent naturalisation",
    "passeport talent salaire minimum",
    "carte séjour profil qualifié France",
    "Welcome to France étranger qualifié",
    "passeport talent renouvellement carte résident",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que le Passeport Talent ? Les 4 avantages clés",
      id: "passeport-talent-cest-quoi",
    },
    {
      type: "p",
      texte: "Le **Passeport Talent** est un titre de séjour pluriannuel créé en 2016 et renforcé par les lois successives de 2018 et 2024. Il s'adresse aux étrangers présentant un **profil qualifié** ou une valeur ajoutée particulière pour la France.",
    },
    { type: "h3", texte: "Pourquoi c'est un titre exceptionnel : comparaison directe" },
    {
      type: "tableau",
      entetes: ["Critère", "Titre classique (CST 1 an)", "Passeport Talent (4 ans)"],
      lignes: [
        ["Durée de validité", "1 an renouvelable", "4 ans directement"],
        [
          "Démarches de renouvellement",
          "Chaque année à la préfecture → stress + ANEF",
          "Seulement 1 renouvellement en 4 ans",
        ],
        [
          "Conjoint et enfants",
          "Procédure regroupement familial (18 mois + conditions revenus)",
          "Carte \"famille du titulaire du PT\" délivrée quasi-simultanément",
        ],
        [
          "Droit au travail du conjoint",
          "Conjoint doit demander une autorisation de travail séparée",
          "Conjoint autorisé à travailler sans démarche supplémentaire",
        ],
        [
          "Accès à la carte de résident",
          "Après 5 ans de séjour régulier",
          "Après 3 ans de Passeport Talent (mesure incitative)",
        ],
        [
          "Lien avec la naturalisation",
          "Après 5 ans de résidence",
          "Possible dès 2 ans si diplôme Bac+5 français",
        ],
      ],
    },
    { type: "h3", texte: "Qui est concerné ?" },
    {
      type: "p",
      texte: "Les 10 catégories du Passeport Talent couvrent des profils très variés : du salarié d'une grande entreprise au réfugié ayant une qualification reconnue, en passant par les artistes et les investisseurs. Une chose en commun : **vous apportez quelque chose à la France**.",
    },
    {
      type: "h2",
      texte: "Les 10 catégories du Passeport Talent : conditions précises",
      id: "les-10-categories",
    },
    {
      type: "p",
      texte: "Chaque catégorie a ses propres critères. Voici le tableau complet avec les conditions exactes en 2026.",
    },
    {
      type: "tableau",
      entetes: ["Catégorie", "Conditions principales", "Salaire minimum"],
      lignes: [
        [
          "1. Salarié qualifié",
          "Diplôme Bac+3 minimum + contrat CDI ou CDD ≥ 3 mois dans une entreprise en France",
          "1,5× le SMIC (environ 2 139 € nets/mois en 2026)",
        ],
        [
          "2. Jeune diplômé qualifié",
          "Diplôme Bac+5 obtenu en France depuis moins de 4 ans + contrat de travail",
          "1,5× le SMIC",
        ],
        [
          "3. Chercheur - enseignant-chercheur",
          "Convention d'accueil avec un établissement de recherche ou d'enseignement supérieur français",
          "Pas de minimum fixé (revenus de la convention)",
        ],
        [
          "4. Porteur de projet innovant",
          "Projet reconnu par un organisme public (BPI France, incubateur labellisé, collectivité) ou levée de fonds ≥ 30 000 €",
          "Pas de minimum fixé",
        ],
        [
          "5. Investisseur économique",
          "Investissement direct ≥ 300 000 € en France + création ou préservation d'emplois",
          "Sans objet",
        ],
        [
          "6. Représentant d'une entreprise étrangère",
          "Mission en France pour le compte d'une entreprise étrangère (ICT, Intra-Corporate Transfer) + salaire ≥ 1,5× SMIC",
          "1,5× le SMIC",
        ],
        [
          "7. Artiste-interprète",
          "Contrat de travail ou engagement artistique avec une structure française (théâtre, label, agence...)",
          "Pas de minimum fixé",
        ],
        [
          "8. Profession médicale et paramédicale",
          "Autorisation d'exercice délivrée par le ministère de la Santé + emploi dans un établissement de soins",
          "Rémunération conforme à la grille hospitalière",
        ],
        [
          "9. Réfugié qualifié / protection subsidiaire",
          "Statut OFPRA + diplôme équivalent à Bac+3 + projet professionnel validé",
          "1,5× le SMIC",
        ],
        [
          "10. Mandataire social",
          "Dirigeant (PDG, DG, gérant) d'une entreprise française créatrice de valeur + rémunération significative",
          "Variable selon entreprise",
        ],
      ],
    },
    { type: "h3", texte: "La catégorie la plus utilisée : le salarié qualifié (catégorie 1)" },
    { type: "p", texte: "C'est de loin la plus courante. Les conditions à retenir :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Votre diplôme doit être équivalent à **Bac+3 minimum** (licence, bachelor, BTS + expérience…). La plateforme ENIC-NARIC permet de faire reconnaître un diplôme étranger.",
        "Votre contrat doit prévoir une rémunération d'au moins **1,5 fois le SMIC mensuel net**, soit environ 2 139 € nets en 2026 (base SMIC 1 426 € net)",
        "Le contrat peut être un CDI ou un CDD d'au moins 3 mois",
      ],
    },
    {
      type: "h2",
      texte: "La procédure pas à pas pour obtenir le Passeport Talent",
      id: "procedure-passeport-talent",
    },
    {
      type: "p",
      texte: "La demande se fait soit depuis l'étranger (en même temps que le visa long séjour), soit en France depuis une autre catégorie de titre de séjour.",
    },
    { type: "h3", texte: "Étape 1 : Rassembler les pièces du dossier" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Formulaire CERFA n°15605 (demande de premier titre de séjour) ou demande sur ANEF",
        "Passeport en cours de validité + copie de toutes les pages visées",
        "Diplôme(s) + traduction certifiée si non francophone",
        "Contrat de travail signé ou convention d'accueil (chercheur)",
        "Justificatif de salaire ≥ 1,5× SMIC (lettre d'offre, contrat, grille de rémunération)",
        "Extrait Kbis de l'entreprise employeuse + attestation d'établissement URSSAF",
        "Photo d'identité récente conforme aux normes ICAO",
      ],
    },
    { type: "h3", texte: "Étape 2 : Déposer la demande" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Si vous êtes à l'étranger :** Demandez un visa long séjour « passeport talent » au consulat français de votre pays. Une fois en France, validez le VLS-TS sur le site de l'ANEF dans les 3 premiers mois.",
        "**Si vous êtes déjà en France :** Déposez votre demande sur l'ANEF (anef.interieur.gouv.fr) ou en préfecture selon les démarches de votre département.",
      ],
    },
    { type: "h3", texte: "Étape 3 : Délais de traitement" },
    {
      type: "tableau",
      entetes: ["Situation", "Délai moyen"],
      lignes: [
        [
          "Visa long séjour depuis l'étranger",
          "3 à 8 semaines consulat + 2 à 4 semaines ANEF validation",
        ],
        ["Changement de statut en France (sur ANEF)", "2 à 4 mois selon la préfecture"],
        ["Premier renouvellement au bout de 4 ans", "2 à 3 mois"],
      ],
    },
    { type: "h3", texte: "Étape 4 : Récupération du titre" },
    {
      type: "p",
      texte: "Le Passeport Talent est délivré sous forme de **carte de séjour pluriannuelle** portant la mention « Passeport Talent » suivie de la catégorie (ex : « Passeport Talent, Salarié qualifié »). Elle est valable 4 ans.",
    },
    {
      type: "h2",
      texte: "Faire venir sa famille avec le Passeport Talent : le régime « famille »",
      id: "famille-passeport-talent",
    },
    {
      type: "p",
      texte: "C'est l'un des grands avantages du Passeport Talent : vos proches peuvent vous rejoindre beaucoup plus facilement qu'avec un titre ordinaire.",
    },
    {
      type: "h3",
      texte: "Qui peut bénéficier de la carte « famille du titulaire du Passeport Talent » ?",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Le conjoint marié** (pas le partenaire de PACS ni le concubin, sauf certains cas)",
        "**Les enfants mineurs** du titulaire et du conjoint",
      ],
    },
    { type: "h3", texte: "Comparaison avec le regroupement familial classique" },
    {
      type: "tableau",
      entetes: ["Critère", "Regroupement familial classique", "Famille Passeport Talent"],
      lignes: [
        [
          "Conditions de revenus préalables",
          "Oui (1,2× SMIC + logement)",
          "Non (le fait d'avoir le PT suffit)",
        ],
        [
          "Délai d'attente avant de faire venir la famille",
          "18 mois de résidence régulière",
          "Immédiat dès l'obtention du PT",
        ],
        [
          "Autorisation de travail du conjoint",
          "Nécessite une démarche séparée",
          "Automatique : le conjoint peut travailler immédiatement",
        ],
        [
          "Type de titre délivré au conjoint",
          "Carte « vie privée et familiale »",
          "Carte « famille du titulaire PT » (même durée que le PT)",
        ],
        [
          "Passage par OFII obligatoire",
          "Oui (visite médicale + formation)",
          "Non (procédure simplifiée)",
        ],
      ],
    },
    { type: "h3", texte: "Démarche pour faire venir son conjoint" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Votre conjoint fait une demande de visa long séjour mention « famille de ressortissant étranger (PT) » au consulat français de son pays",
        "Pièces à fournir côté conjoint : passeport, acte de mariage (traduit + apostille), photo identité, lettre d'invitation du titulaire PT",
        "Une fois en France, le conjoint valide son VLS-TS sur l'ANEF et obtient sa carte « famille du titulaire PT »",
      ],
    },
    {
      type: "h2",
      texte: "Du Passeport Talent à la carte de résident et la naturalisation",
      id: "carte-resident-naturalisation",
    },
    {
      type: "p",
      texte: "Le Passeport Talent est bien plus qu'un titre de séjour, c'est une **voie accélérée vers la stabilité permanente en France**.",
    },
    { type: "h3", texte: "La carte de résident 10 ans après 3 ans de Passeport Talent" },
    {
      type: "p",
      texte: "Contrairement aux autres titres qui nécessitent 5 ans de séjour régulier pour accéder à la carte de résident, les titulaires du Passeport Talent peuvent la demander après seulement **3 ans de PT**, sous réserve :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "D'être toujours dans la catégorie qui a justifié l'attribution du PT",
        "D'attester de leur intégration (niveau de français, test civique si applicable)",
        "D'avoir une situation professionnelle stable et des ressources suffisantes",
      ],
    },
    { type: "h3", texte: "La naturalisation : quand et comment" },
    {
      type: "tableau",
      entetes: ["Profil", "Délai de résidence pour naturalisation"],
      lignes: [
        ["Titulaire PT avec diplôme Bac+5 français", "2 ans de résidence (délai réduit)"],
        ["Titulaire PT sans diplôme français ou Bac+3", "5 ans de résidence régulière"],
        ["Conjoint français", "4 ans de mariage + 3 ans de vie commune en France"],
      ],
    },
    { type: "h3", texte: "Lien avec le test civique" },
    {
      type: "p",
      texte: "Pour la naturalisation, vous devrez passer le **test civique avec un score ≥ 80%** (32/40 questions sur les valeurs de la République, les institutions, l'histoire). Le Passeport Talent ne dispense pas du test civique, au contraire, c'est l'occasion de se préparer tôt avec TestCiviqueFrance.fr pour être prêt le moment venu.",
    },
    { type: "h3", texte: "Synthèse du parcours type" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Année 0 :** Obtention du Passeport Talent (+ carte famille pour conjoint)",
        "**Années 1-3 :** Exercice de l'activité professionnelle, intégration, préparation test civique et DELF B1",
        "**Année 3 :** Demande de carte de résident 10 ans possible",
        "**Année 4 :** Renouvellement du PT si carte de résident pas encore obtenue",
        "**Années 2-5 :** Demande de naturalisation selon profil",
      ],
    },
    { type: "h2", texte: "5 erreurs à ne pas faire avec le Passeport Talent", id: "erreurs-pieges-pt" },
    {
      type: "p",
      texte: "Beaucoup de candidats éligibles ratent leur demande ou perdent leurs droits à cause de ces erreurs courantes.",
    },
    { type: "h3", texte: "Erreur 1 : Ne pas vérifier l'équivalence de son diplôme" },
    {
      type: "p",
      texte: "Un diplôme étranger n'est pas automatiquement reconnu comme Bac+3 en France. Utilisez la plateforme **ENIC-NARIC** avant de déposer votre dossier pour obtenir une attestation de comparabilité (délai : 4 à 8 semaines, gratuit).",
    },
    { type: "h3", texte: "Erreur 2 : Attendre que le salaire soit négocié à la baisse" },
    {
      type: "p",
      texte: "Certains employeurs proposent un salaire légèrement inférieur au seuil de 1,5× SMIC. **Ne signez jamais un contrat en dessous du seuil** : votre demande sera automatiquement refusée. Négociez ou choisissez une autre catégorie de PT.",
    },
    { type: "h3", texte: "Erreur 3 : Oublier de faire venir le conjoint dans les 3 premiers mois" },
    {
      type: "p",
      texte: "Si votre conjoint arrive en France après l'obtention de votre PT mais ne fait pas sa demande de titre dans les 3 mois suivant son entrée, il perdra l'avantage du régime famille PT et devra passer par le regroupement familial classique.",
    },
    { type: "h3", texte: "Erreur 4 : Changer d'employeur sans vérifier les conditions" },
    {
      type: "p",
      texte: "Avec la catégorie « salarié qualifié », changer d'emploi est autorisé mais votre nouveau contrat doit toujours respecter le seuil de 1,5× SMIC. Si votre salaire baisse en dessous, votre renouvellement peut être refusé.",
    },
    {
      type: "h3",
      texte: "Erreur 5 : Négliger la préparation au test civique pour la naturalisation ultérieure",
    },
    {
      type: "p",
      texte: "De nombreux titulaires d'un Passeport Talent arrivent à l'étape de naturalisation sans avoir préparé le test civique. Or, c'est une condition bloquante, commencez à vous entraîner dès votre première année en France sur TestCiviqueFrance.fr.",
    },
    {
      type: "h2",
      texte: "FAQ : Vos questions sur le Passeport Talent 2026",
      id: "faq-passeport-talent",
    },
    {
      type: "h3",
      texte: "Puis-je demander le Passeport Talent si je suis déjà en France avec un visa touriste ?",
    },
    {
      type: "p",
      texte: "Non, un visa de court séjour (touriste, visiteur) ne permet pas de changer de statut en France. Vous devez soit retourner dans votre pays pour obtenir un visa long séjour « Passeport Talent », soit être en situation régulière avec un autre titre de séjour (étudiant, salarié, etc.).",
    },
    { type: "h3", texte: "Le Passeport Talent permet-il de travailler librement en France ?" },
    {
      type: "p",
      texte: "Oui, il n'y a pas de restriction de secteur ou d'employeur, vous pouvez travailler pour n'importe quelle entreprise française dans n'importe quel secteur, à condition que le contrat respecte les conditions de votre catégorie (salaire, type de poste).",
    },
    {
      type: "h3",
      texte: "Puis-je créer ma propre entreprise avec un Passeport Talent salarié qualifié ?",
    },
    {
      type: "p",
      texte: "Pas directement avec la catégorie « salarié qualifié » (vous devez avoir un contrat de travail). Si vous souhaitez créer une entreprise, vous devez demander la catégorie « porteur de projet innovant » ou « investisseur économique », avec les justificatifs correspondants.",
    },
    { type: "h3", texte: "Que se passe-t-il si je perds mon emploi en cours de Passeport Talent ?" },
    {
      type: "p",
      texte: "Vous bénéficiez d'une période de protection de 6 mois pendant laquelle vous pouvez chercher un nouvel emploi sans perdre votre titre. Au-delà, si vous n'avez pas retrouvé un emploi conforme aux conditions PT, votre titre peut ne pas être renouvelé.",
    },
    {
      type: "h3",
      texte: "Le Passeport Talent est-il compatible avec le statut de micro-entrepreneur ?",
    },
    {
      type: "p",
      texte: "La catégorie « porteur de projet innovant » peut être compatible avec le statut auto-entrepreneur si votre projet est reconnu par un organisme agréé. Mais le chiffre d'affaires seul ne suffit généralement pas, il faut prouver l'innovation et la création de valeur.",
    },
    {
      type: "h3",
      texte: "Mon conjoint avec une carte « famille PT » peut-il travailler immédiatement en France ?",
    },
    {
      type: "p",
      texte: "Oui, la carte « famille du titulaire du Passeport Talent » donne automatiquement le droit de travailler en France, sans démarche supplémentaire. C'est l'un des grands avantages du régime famille PT par rapport au regroupement familial classique.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le Passeport Talent est l'un des titres de séjour les plus avantageux que la France propose : 4 ans de validité, famille immédiate, droit au travail du conjoint, accès accéléré à la carte de résident. Si vous avez un profil qualifié, vérifiez votre éligibilité dès aujourd'hui. Et si votre objectif final est la nationalité française, commencez à vous préparer au test civique sur TestCiviqueFrance.fr, cette étape sera incontournable sur votre chemin vers la naturalisation.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Qu'est-ce que le Passeport Talent en France et qui peut l'obtenir ?",
      reponse: "Le Passeport Talent est un titre de séjour de 4 ans destiné aux étrangers qualifiés : salariés avec diplôme Bac+3 et salaire ≥ 1,5× SMIC, chercheurs, artistes, porteurs de projets innovants, investisseurs, médecins, etc. Il existe 10 catégories différentes.",
    },
    {
      question: "Quel est le salaire minimum pour obtenir un Passeport Talent salarié qualifié en 2026 ?",
      reponse: "Le salaire minimum est de 1,5 fois le SMIC mensuel net, soit environ 2 139 € nets par mois en 2026 (base SMIC 1 426 € net). Ce seuil s'applique aux catégories salarié qualifié, jeune diplômé qualifié et représentant d'entreprise étrangère.",
    },
    {
      question: "Le Passeport Talent permet-il de faire venir son conjoint facilement ?",
      reponse: "Oui, c'est l'un de ses grands avantages. Votre conjoint peut obtenir une carte « famille du titulaire PT » sans condition de revenus préalables ni délai d'attente de 18 mois. Il peut travailler immédiatement sans démarche supplémentaire.",
    },
    {
      question: "Peut-on obtenir la carte de résident 10 ans plus rapidement avec un Passeport Talent ?",
      reponse: "Oui. Après 3 ans de Passeport Talent (au lieu de 5 ans pour les autres titres), vous pouvez demander la carte de résident 10 ans, sous réserve de maintenir votre activité et de justifier votre intégration.",
    },
    {
      question: "Faut-il passer le test civique pour obtenir le Passeport Talent ?",
      reponse: "Non, le test civique n'est pas requis pour le Passeport Talent lui-même. Mais il sera obligatoire si vous demandez ensuite la naturalisation française ou une carte de séjour pluriannuelle dans d'autres contextes. Commencez à vous préparer tôt sur TestCiviqueFrance.fr.",
    },
    {
      question: "Quel diplôme faut-il pour le Passeport Talent salarié qualifié ?",
      reponse: "Un diplôme équivalent à Bac+3 minimum. Les diplômes étrangers doivent être reconnus via la plateforme ENIC-NARIC (attestation de comparabilité, délai 4-8 semaines, gratuit). La catégorie « jeune diplômé qualifié » requiert un Bac+5 obtenu en France depuis moins de 4 ans.",
    },
  ],
  sources: [
    {
      titre: "Passeport Talent : Service-Public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/F16922",
      type: "officiel",
      description: "Conditions officielles du Passeport Talent par catégorie",
    },
  ],
};

export default article;
