import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-vls-ts-passeport-talent.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/passeport-talent-2026-conditions-metiers-demarches`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "passeport-talent-2026-conditions-metiers-demarches",
  titre: "Passeport talent 2026 : conditions, 13 catégories, métiers et démarches ANEF",
  titreSeo: "Passeport talent 2026 : conditions, 13 catégories, métiers et démarches ANEF",
  resume: "Guide complet du passeport talent 2026 : les 13 catégories (salarié qualifié, chercheur, artiste...), conditions salariales, avantages, démarches ANEF et carte bleue européenne.",
  chapo: "Le passeport talent est le titre de séjour le plus avantageux pour les travailleurs hautement qualifiés en France. Délivré pour une durée de 4 ans (contre 1 an pour un titre salarié classique), il offre une stabilité professionnelle et des avantages uniques : pas de besoin d'autorisation de travail séparée, possibilité de changer d'employeur, et un titre de séjour \"famille\" pour votre conjoint et vos enfants.",
  publieLe: "2026-03-31",
  modifieLe: "2026-03-31",
  minutes: 16,
  theme: "passeport talent 2026",
  motsCles: [
    "passeport talent 2026",
    "passeport talent conditions",
    "passeport talent salaire minimum",
    "passeport talent salarié qualifié",
    "passeport talent jeune entreprise innovante",
    "passeport talent chercheur",
    "passeport talent création entreprise",
    "passeport talent famille conjoint",
    "passeport talent renouvellement",
    "passeport talent vs carte bleue européenne",
    "passeport talent ANEF demande",
    "passeport talent 4 ans",
    "passeport talent avantages",
    "titre séjour hautement qualifié",
    "passeport talent changement employeur",
    "carte bleue européenne France",
    "passeport talent métiers",
    "passeport talent investisseur",
    "passeport talent artiste",
    "travailler en France qualifié étranger",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  blocs: [
    {
      type: "p",
      texte: "En 2026, le passeport talent concerne plus de 10 catégories de profils : salariés qualifiés, chercheurs, créateurs d'entreprise, artistes, sportifs, investisseurs, et bien d'autres. La clé est de remplir les conditions de diplôme et/ou de salaire spécifiques à chaque catégorie.",
    },
    {
      type: "p",
      texte: "Ce guide détaille les conditions d'éligibilité, les métiers concernés, les démarches sur ANEF, les documents nécessaires et les avantages concrets de ce titre prisé. Si vous êtes un professionnel qualifié ou un entrepreneur, le passeport talent est probablement le meilleur titre de séjour pour vous.",
    },
    {
      type: "h2",
      texte: "Les 13 catégories du passeport talent en 2026",
      id: "categories-passeport-talent",
    },
    { type: "p", texte: "Le passeport talent regroupe 13 profils différents. Voici les principaux :" },
    { type: "p", texte: "**1. Salarié qualifié (L421-9)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Diplôme de master ou équivalent",
        "Salaire ≥ 2 fois le SMIC (environ 45 240 €/an en 2026)",
        "CDI ou CDD de plus de 3 mois",
      ],
    },
    { type: "p", texte: "**2. Jeune entreprise innovante - JEI (L421-10)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Recruté par une entreprise labellisée JEI ou une startup accréditée",
        "Salaire ≥ 2 fois le SMIC",
      ],
    },
    { type: "p", texte: "**3. Salarié en mission (L421-13)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Mobilité intra-groupe : détaché par une entreprise étrangère vers une filiale en France",
        "Salaire ≥ 1,8 fois le SMIC",
      ],
    },
    { type: "p", texte: "**4. Chercheur (L421-14)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Convention d'accueil avec un organisme de recherche agréé",
        "Niveau doctorat ou activité de recherche/enseignement",
      ],
    },
    { type: "p", texte: "**5. Création d'entreprise (L421-16)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Projet économique viable en France",
        "Investissement minimum (variable)",
        "Business plan solide",
      ],
    },
    { type: "p", texte: "**6. Projet économique innovant (L421-17)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Projet reconnu innovant par un organisme public",
        "Bénéficiaire d'un soutien officiel (BPI, incubateur agréé)",
      ],
    },
    { type: "p", texte: "**7. Investisseur (L421-18)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Investissement économique direct ≥ 300 000 € en France",
        "Création ou maintien d'emplois",
      ],
    },
    { type: "p", texte: "**8. Artiste-interprète (L421-20)**" },
    {
      type: "liste",
      style: "puces",
      items: ["Artiste, auteur, interprète", "Contrat avec un organisme culturel français"],
    },
    { type: "p", texte: "**9. Réputation internationale (L421-21)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Reconnaissance internationale dans votre domaine",
        "Scientifique, sportif, artiste de renommée",
      ],
    },
    { type: "p", texte: "**10-13. Autres catégories :**" },
    {
      type: "p",
      texte: "Carte bleue européenne, mandataire social, profession juridique ou comptable, et recrutement par une entreprise innovante.",
    },
    {
      type: "h2",
      texte: "Focus : le passeport talent \"salarié qualifié\" (le plus courant)",
      id: "conditions-salarie-qualifie",
    },
    {
      type: "p",
      texte: "Le passeport talent \"salarié qualifié\" est le profil le plus demandé. Voici les conditions détaillées :",
    },
    { type: "p", texte: "**Conditions cumulatives :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Diplôme :** master (bac+5) ou équivalent reconnu, obtenu en France ou à l'étranger",
        "**Contrat de travail :** CDI ou CDD de plus de 3 mois avec une entreprise en France",
        "**Salaire :** ≥ 2 fois le SMIC annuel brut (environ 45 240 € en 2026, soit ~3 770 €/mois brut)",
        "**Emploi qualifié :** en adéquation avec votre diplôme et vos compétences",
      ],
    },
    { type: "p", texte: "**Avantages spécifiques :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Durée : 4 ans",
        "Pas d'opposabilité de la situation de l'emploi",
        "Pas besoin d'autorisation de travail séparée",
        "Changement d'employeur autorisé (notification à la préfecture)",
        "Titre \"famille\" pour conjoint et enfants mineurs",
      ],
    },
    { type: "p", texte: "**Ce que signifie \"pas d'opposabilité\" :**" },
    {
      type: "p",
      texte: "La DREETS ne peut pas refuser votre demande au motif qu'un demandeur d'emploi français pourrait occuper le poste. C'est un avantage majeur par rapport au titre salarié classique.",
    },
    { type: "p", texte: "**Équivalence de diplôme :**" },
    {
      type: "p",
      texte: "Si votre diplôme a été obtenu à l'étranger, il doit être au minimum de niveau master. La reconnaissance se fait au cas par cas par la préfecture. Vous pouvez obtenir une attestation de comparabilité auprès de France Éducation International (ENIC-NARIC).",
    },
    { type: "p", texte: "**Le piège du salaire :**" },
    {
      type: "p",
      texte: "Attention : le seuil de 2 fois le SMIC est calculé sur le salaire brut ANNUEL, pas mensuel. Vérifiez que votre contrat indique bien un salaire annuel ≥ 45 240 € (montant 2026 estimé). Les primes variables ne comptent que si elles sont garanties.",
    },
    {
      type: "h2",
      texte: "Démarches pour obtenir le passeport talent sur ANEF",
      id: "demarches-anef-passeport-talent",
    },
    { type: "p", texte: "La demande de passeport talent se fait sur ANEF :" },
    { type: "p", texte: "**Si vous êtes à l'étranger (première demande) :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Demandez un VLS-TS \"passeport talent\" auprès du consulat de France",
        "Le consulat examinera votre éligibilité",
        "À votre arrivée en France, validez votre VLS-TS sur ANEF",
        "Votre passeport talent est valable 4 ans directement",
      ],
    },
    { type: "p", texte: "**Si vous êtes déjà en France (changement de statut) :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Connectez-vous à ANEF",
        "Nouvelle demande → \"Changement de statut\"",
        "Sélectionnez \"Passeport talent\" et la catégorie correspondante",
        "Remplissez le formulaire",
        "Téléchargez les pièces justificatives",
        "Payez les frais (250 €)",
        "Soumettez et attendez",
      ],
    },
    { type: "p", texte: "**Documents nécessaires :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Passeport en cours de validité",
        "Diplôme de master (ou équivalent) + traduction assermentée si nécessaire",
        "Contrat de travail signé mentionnant le salaire",
        "Kbis de l'entreprise (moins de 3 mois)",
        "Justificatif de domicile",
        "3 photos d'identité",
        "Timbre fiscal de 25 €",
        "Attestation de test civique (si renouvellement d'une carte pluriannuelle)",
      ],
    },
    { type: "p", texte: "**Délai de traitement :**" },
    {
      type: "p",
      texte: "Le délai varie de 2 à 5 mois selon la préfecture. Vous recevez un récépissé autorisant le travail pendant l'instruction.",
    },
    {
      type: "p",
      texte: "**Conseil :** soumettez un dossier complet et bien organisé dès la première fois. Les demandes de pièces complémentaires rallongent considérablement le délai.",
    },
    {
      type: "h2",
      texte: "Les avantages concrets du passeport talent",
      id: "avantages-passeport-talent",
    },
    {
      type: "p",
      texte: "Le passeport talent offre des avantages significatifs par rapport aux autres titres :",
    },
    { type: "p", texte: "**1. Durée de 4 ans**" },
    {
      type: "p",
      texte: "Contre 1 an pour un titre salarié classique. Moins de démarches, moins de stress administratif, plus de stabilité pour vous et votre famille.",
    },
    { type: "p", texte: "**2. Titre \"famille\" pour conjoint et enfants**" },
    {
      type: "p",
      texte: "Votre conjoint reçoit automatiquement un titre de séjour \"famille de bénéficiaire du passeport talent\" de même durée. Ce titre autorise le travail sans restriction.",
    },
    { type: "p", texte: "**3. Liberté de changement d'employeur**" },
    {
      type: "p",
      texte: "Vous pouvez changer d'employeur sans demander une nouvelle autorisation de travail. Notifiez simplement la préfecture du changement.",
    },
    { type: "p", texte: "**4. Pas d'opposabilité de la situation de l'emploi**" },
    {
      type: "p",
      texte: "L'administration ne peut pas refuser votre titre au motif que le poste pourrait être occupé par un résident.",
    },
    { type: "p", texte: "**5. Renouvellement facilité**" },
    {
      type: "p",
      texte: "Le renouvellement est quasi automatique si vous remplissez toujours les conditions (emploi qualifié, salaire ≥ 2 SMIC).",
    },
    { type: "p", texte: "**6. Accès facilité à la carte de résident**" },
    {
      type: "p",
      texte: "Après 5 ans de résidence en France avec un passeport talent, vous pouvez demander la carte de résident (10 ans) en passant le test civique.",
    },
    { type: "p", texte: "**7. Comparaison avec le titre salarié classique :**" },
    {
      type: "tableau",
      entetes: ["Critère", "Salarié classique", "Passeport talent"],
      lignes: [
        ["Durée", "1 an", "4 ans"],
        ["Salaire minimum", "1,5 SMIC", "2 SMIC"],
        ["Changement employeur", "Nouvelle autorisation", "Notification simple"],
        ["Titre famille", "Non automatique", "Automatique"],
        ["Opposabilité emploi", "Oui (sauf master)", "Non"],
      ],
    },
    {
      type: "h2",
      texte: "Métiers et secteurs porteurs pour le passeport talent",
      id: "metiers-secteurs",
    },
    {
      type: "p",
      texte: "Tous les métiers sont éligibles au passeport talent dès lors que les conditions de diplôme et de salaire sont remplies. Voici les secteurs les plus représentés :",
    },
    { type: "p", texte: "**Technologie et informatique :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Développeurs, ingénieurs logiciel, data scientists",
        "Chefs de projet IT, architectes systèmes",
        "Experts en cybersécurité, intelligence artificielle",
        "Salaires moyens : 50 000 - 80 000 €/an → bien au-dessus du seuil",
      ],
    },
    { type: "p", texte: "**Ingénierie et industrie :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Ingénieurs aéronautique, automobile, énergie",
        "Ingénieurs BTP, génie civil",
        "Salaires moyens : 45 000 - 70 000 €/an",
      ],
    },
    { type: "p", texte: "**Finance et conseil :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Analystes financiers, traders, gestionnaires de risques",
        "Consultants en stratégie, audit",
        "Salaires moyens : 50 000 - 100 000 €/an",
      ],
    },
    { type: "p", texte: "**Santé et sciences :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Chercheurs, post-doctorants",
        "Médecins spécialistes (après reconnaissance du diplôme)",
        "Pharmaciens, biologistes",
        "Salaires variables selon le domaine",
      ],
    },
    { type: "p", texte: "**Création et culture :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Artistes, designers, architectes",
        "Réalisateurs, producteurs",
        "Via la catégorie \"artiste-interprète\" ou \"réputation internationale\"",
      ],
    },
    { type: "p", texte: "**Entrepreneuriat :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Créateurs de startup avec soutien BPI ou incubateur agréé",
        "Investisseurs avec un apport ≥ 300 000 €",
      ],
    },
    { type: "p", texte: "**Secteurs où le passeport talent est rare :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Hôtellerie-restauration (salaires souvent sous le seuil)",
        "Commerce de détail",
        "Aide à la personne",
      ],
    },
    { type: "p", texte: "Pour ces secteurs, le titre salarié classique est plus adapté." },
    { type: "h2", texte: "Renouvellement du passeport talent", id: "renouvellement-passeport-talent" },
    { type: "p", texte: "Le renouvellement se fait 2-3 mois avant l'expiration de votre carte :" },
    { type: "p", texte: "**Conditions de renouvellement :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Être toujours en activité professionnelle qualifiée",
        "Salaire toujours ≥ 2 fois le SMIC",
        "Situation fiscale et sociale régulière",
        "Test civique réussi (obligatoire en 2026 pour le renouvellement)",
      ],
    },
    { type: "p", texte: "**Procédure sur ANEF :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Connectez-vous à ANEF",
        "Nouvelle demande → \"Renouvellement de titre de séjour\"",
        "Sélectionnez \"Passeport talent\"",
        "Fournissez les pièces justificatives à jour :",
      ],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Contrat de travail en cours ou nouveau contrat",
        "3 dernières fiches de paie",
        "Dernier avis d'imposition",
        "Justificatif de domicile",
        "Attestation de test civique",
      ],
    },
    { type: "p", texte: "**Coût du renouvellement :**" },
    {
      type: "p",
      texte: "250 € (225 € taxe + 25 € timbre fiscal) + 90 € pour le test civique si pas encore passé",
    },
    { type: "p", texte: "**Délai de renouvellement :**" },
    { type: "p", texte: "2-4 mois selon la préfecture. Un récépissé vous est délivré en attendant." },
    { type: "p", texte: "**Si vous avez changé d'employeur :**" },
    {
      type: "p",
      texte: "Le changement d'employeur est autorisé, mais vous devez avoir notifié la préfecture. Lors du renouvellement, fournissez le contrat de travail avec le nouvel employeur.",
    },
    { type: "p", texte: "**Si votre salaire est passé sous le seuil :**" },
    {
      type: "p",
      texte: "Si votre salaire est descendu sous 2 fois le SMIC, vous ne pourrez pas renouveler en passeport talent. Vous pouvez demander un titre \"salarié\" classique à la place (conditions de salaire plus basses).",
    },
    {
      type: "h2",
      texte: "La carte bleue européenne : l'alternative européenne",
      id: "carte-bleue-europeenne",
    },
    {
      type: "p",
      texte: "La carte bleue européenne est un titre similaire au passeport talent, mais avec une dimension européenne :",
    },
    { type: "p", texte: "**Qu'est-ce que la carte bleue européenne ?**" },
    {
      type: "p",
      texte: "C'est un titre de séjour harmonisé au niveau de l'Union européenne pour les travailleurs hautement qualifiés. En France, elle est intégrée dans le dispositif \"passeport talent\".",
    },
    { type: "p", texte: "**Conditions :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Diplôme de l'enseignement supérieur (au moins bac+3)",
        "Contrat de travail d'au moins 12 mois",
        "Salaire ≥ 1,5 fois le salaire brut moyen national (environ 53 000 €/an en France)",
      ],
    },
    { type: "p", texte: "**Avantages par rapport au passeport talent classique :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Mobilité intra-européenne : après 12 mois, possibilité de travailler dans un autre pays de l'UE",
        "Regroupement familial facilité",
        "Accès au résident longue durée UE après 5 ans",
      ],
    },
    { type: "p", texte: "**Inconvénients :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Seuil de salaire plus élevé que le passeport talent \"salarié qualifié\"",
        "Moins de flexibilité pour le changement d'employeur dans les 12 premiers mois",
      ],
    },
    { type: "p", texte: "**Qui devrait choisir la carte bleue européenne ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les professionnels qui envisagent une mobilité au sein de l'UE",
        "Les profils très qualifiés avec un salaire élevé",
        "Les personnes visant le statut de résident longue durée UE",
      ],
    },
    { type: "p", texte: "**Qui devrait préférer le passeport talent classique ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les professionnels qui souhaitent rester en France",
        "Les profils avec un salaire entre 2 SMIC et le seuil carte bleue",
        "Les chercheurs, artistes, créateurs d'entreprise (catégories non couvertes par la carte bleue)",
      ],
    },
    {
      type: "h2",
      texte: "Faire venir sa famille avec le passeport talent",
      id: "famille-passeport-talent",
    },
    { type: "p", texte: "L'un des grands avantages du passeport talent est le titre \"famille\" :" },
    { type: "p", texte: "**Qui peut en bénéficier ?**" },
    {
      type: "liste",
      style: "puces",
      items: ["Votre conjoint (marié ou pacsé)", "Vos enfants mineurs"],
    },
    { type: "p", texte: "**Le titre \"famille de bénéficiaire du passeport talent\" :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Même durée que votre passeport talent (jusqu'à 4 ans)",
        "Autorisation de travailler à temps plein (pour le conjoint)",
        "Délivré sans condition de ressources supplémentaires",
        "Pas besoin de passer par la procédure de regroupement familial",
      ],
    },
    { type: "p", texte: "**Comment l'obtenir :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Votre conjoint demande un visa D \"famille de bénéficiaire du passeport talent\" au consulat",
        "Il/elle arrive en France et valide ce visa sur ANEF",
        "Le titre de séjour \"famille\" est délivré",
      ],
    },
    { type: "p", texte: "**Si votre famille est déjà en France :**" },
    {
      type: "p",
      texte: "Votre conjoint peut demander un changement de statut vers \"famille de bénéficiaire du passeport talent\" sur ANEF.",
    },
    { type: "p", texte: "**Droits du conjoint :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Droit de travailler sans restriction",
        "Accès à l'assurance maladie (CPAM)",
        "Accès aux prestations CAF",
        "Inscription à France Travail",
      ],
    },
    { type: "p", texte: "**Scolarisation des enfants :**" },
    {
      type: "p",
      texte: "Les enfants sont scolarisés normalement dans les écoles françaises, gratuitement (école publique). Les enfants ne parlant pas français bénéficient de dispositifs d'accueil spécifiques (UPE2A).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le passeport talent est le titre de séjour idéal pour les professionnels qualifiés en France. Sa durée de 4 ans, le titre famille automatique et la liberté de changement d'employeur en font le meilleur choix si votre salaire dépasse 2 fois le SMIC. Les démarches sur ANEF sont similaires aux autres titres, mais n'oubliez pas le test civique obligatoire pour le renouvellement en 2026. Préparez-vous sur testciviquefrance.fr pour passer cette étape sans difficulté.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quel salaire minimum pour le passeport talent en 2026 ?",
      reponse: "Le salaire minimum est de 2 fois le SMIC annuel brut, soit environ 45 240 € par an (3 770 €/mois brut) pour la catégorie \"salarié qualifié\". D'autres catégories ont des seuils différents.",
    },
    {
      question: "Combien de temps dure le passeport talent ?",
      reponse: "Le passeport talent est délivré pour 4 ans maximum. C'est 4 fois plus long qu'un titre salarié classique (1 an).",
    },
    {
      question: "Mon conjoint peut-il travailler avec le passeport talent famille ?",
      reponse: "Oui, le titre \"famille de bénéficiaire du passeport talent\" autorise le conjoint à travailler à temps plein, sans restriction de secteur ou d'heures.",
    },
    {
      question: "Puis-je changer d'employeur avec un passeport talent ?",
      reponse: "Oui, vous pouvez changer d'employeur librement. Il suffit de notifier la préfecture du changement. Aucune nouvelle autorisation de travail n'est nécessaire.",
    },
    {
      question: "Faut-il un diplôme de master pour le passeport talent ?",
      reponse: "Pour la catégorie \"salarié qualifié\", oui (master ou équivalent bac+5). D'autres catégories comme \"création d'entreprise\" ou \"investisseur\" n'exigent pas de diplôme spécifique.",
    },
    {
      question: "Combien coûte le passeport talent ?",
      reponse: "Le coût est de 250 € (225 € de taxe + 25 € de timbre fiscal). Pour le renouvellement, ajoutez 90 € pour le test civique obligatoire.",
    },
    {
      question: "Le test civique est-il obligatoire pour le passeport talent ?",
      reponse: "Le test civique est obligatoire pour le renouvellement du passeport talent (carte pluriannuelle). Il n'est pas requis pour la première demande avec un VLS-TS.",
    },
    {
      question: "Quelle différence entre passeport talent et carte bleue européenne ?",
      reponse: "La carte bleue européenne offre une mobilité intra-UE mais exige un salaire plus élevé. Le passeport talent est plus flexible avec plus de catégories et un seuil de salaire plus bas.",
    },
    {
      question: "Un étranger peut-il créer une entreprise en France avec le passeport talent ?",
      reponse: "Oui, la catégorie \"création d'entreprise\" du passeport talent est dédiée aux entrepreneurs. Il faut un projet économique viable et un soutien d'un organisme reconnu (BPI, incubateur).",
    },
    {
      question: "Après combien de temps peut-on demander la carte de résident avec un passeport talent ?",
      reponse: "Après 5 ans de résidence continue en France, vous pouvez demander la carte de résident (10 ans) en passant le test civique et en prouvant votre intégration.",
    },
  ],
  sources: [
    {
      titre: "Service-Public.fr - Passeport talent",
      url: "https://www.service-public.fr/particuliers/vosdroits/F35495",
      type: "officiel",
      description: "Toutes les catégories et conditions du passeport talent.",
    },
    {
      titre: "CESEDA - Articles L421-9 à L421-24",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042771682/",
      type: "juridique",
      description: "Dispositions légales du passeport talent.",
    },
    {
      titre: "Business France - Passeport talent",
      url: "https://www.businessfrance.fr/passeport-talent-titre-de-sejour",
      type: "officiel",
      description: "Informations de Business France pour les talents étrangers.",
    },
    {
      titre: "Welcome to France - Passeport talent guide",
      url: "https://www.welcometofrance.com/fiche/le-passeport-talent",
      type: "officiel",
      description: "Guide pratique pour les professionnels internationaux.",
    },
  ],
  aLireAussi: [
    {
      slug: "changement-statut-etudiant-salarie-2026-demarches-anef",
      ancre: "Changement de statut étudiant à passeport talent",
    },
    { slug: "visa-long-sejour-vls-ts-validation-ofii-2026", ancre: "VLS-TS et validation OFII" },
    {
      slug: "hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances",
      ancre: "Timbre fiscal du titre de séjour : les tarifs 2026",
    },
    {
      slug: "guide-anef-complet-2026-creer-compte-deposer-demande",
      ancre: "Démarches passeport talent sur ANEF",
    },
  ],
};

export default article;
