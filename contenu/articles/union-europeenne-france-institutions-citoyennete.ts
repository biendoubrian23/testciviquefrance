import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-part5.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/union-europeenne-france-institutions-citoyennete`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "union-europeenne-france-institutions-citoyennete",
  titre: "La France et l'Union européenne : institutions et citoyenneté européenne",
  titreSeo: "La France et l'Union européenne : institutions et citoyenneté européenne",
  resume: "Comprendre le rôle de la France dans l'UE : institutions européennes, citoyenneté européenne, droits des citoyens européens. Questions fréquentes au test civique.",
  chapo: "L'Union européenne et le rôle de la France dans les institutions européennes font partie des thématiques du test civique. La France est l'un des **6 pays fondateurs** de la construction européenne et joue un rôle majeur dans l'UE. Comprendre le fonctionnement de l'Union et les droits liés à la citoyenneté européenne est essentiel pour votre examen.",
  publieLe: "2025-12-03",
  modifieLe: "2025-12-03",
  minutes: 13,
  theme: "union européenne test civique",
  motsCles: [
    "union européenne test civique",
    "citoyenneté européenne",
    "institutions UE",
    "euro france",
    "parlement européen strasbourg",
    "france pays fondateur UE",
    "schengen libre circulation",
    "construction européenne histoire",
  ],
  rubrique: "thematiques",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=2096",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda",
  },
  blocs: [
    {
      type: "p",
      texte: "Ce guide vous présente tout ce qu'il faut savoir sur l'UE pour le test civique : **histoire de la construction européenne**, **institutions**, **citoyenneté européenne** et **rôle de la France**.",
    },
    { type: "h2", texte: "Histoire de la construction européenne", id: "histoire-construction" },
    {
      type: "p",
      texte: "La construction européenne est née de la volonté de garantir la **paix** après les deux guerres mondiales :",
    },
    { type: "p", texte: "**Les étapes clés :**" },
    { type: "p", texte: "*1950 - Déclaration Schuman (9 mai) :*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Robert Schuman**, ministre français des Affaires étrangères",
        "Propose de mettre en commun la production de charbon et d'acier",
        "Le **9 mai** est devenu la **Journée de l'Europe**",
      ],
    },
    { type: "p", texte: "*1951 - Traité de Paris :*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Création de la **CECA** (Communauté européenne du charbon et de l'acier)",
        "**6 pays fondateurs** : France, Allemagne, Italie, Belgique, Pays-Bas, Luxembourg",
      ],
    },
    { type: "p", texte: "*1957 - Traités de Rome :*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Création de la **CEE** (Communauté économique européenne)",
        "Création d'**Euratom** (énergie atomique)",
        "Objectif : marché commun",
      ],
    },
    { type: "p", texte: "*1992 - Traité de Maastricht :*" },
    {
      type: "liste",
      style: "puces",
      items: ["Création de l'**Union européenne**", "Citoyenneté européenne", "Préparation de l'euro"],
    },
    { type: "p", texte: "*2002 - L'Euro :*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Mise en circulation des pièces et billets en euros",
        "Remplace le franc français (et autres monnaies nationales)",
      ],
    },
    { type: "p", texte: "*2007 - Traité de Lisbonne :*" },
    {
      type: "liste",
      style: "puces",
      items: ["Réforme des institutions", "Création du poste de Président du Conseil européen"],
    },
    { type: "p", texte: "**Aujourd'hui :**" },
    { type: "p", texte: "L'UE compte **27 États membres** (après le Brexit du Royaume-Uni en 2020)." },
    { type: "h2", texte: "Les institutions européennes", id: "institutions-europeennes" },
    { type: "p", texte: "L'Union européenne fonctionne avec plusieurs institutions complémentaires :" },
    { type: "p", texte: "**Le Parlement européen :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Siège à **Strasbourg** (France) - sessions plénières",
        "Bureaux à Bruxelles et Luxembourg",
        "**705 députés** élus au suffrage universel direct (tous les 5 ans)",
        "Vote les lois européennes et le budget",
        "La France élit **79 députés** européens",
      ],
    },
    { type: "p", texte: "**Le Conseil européen :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Réunit les **chefs d'État et de gouvernement** des 27 pays",
        "Définit les grandes orientations politiques",
        "Présidé par un Président élu pour 2,5 ans (renouvelable)",
        "Se réunit à Bruxelles",
      ],
    },
    { type: "p", texte: "**Le Conseil de l'Union européenne (Conseil des ministres) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Réunit les **ministres** des 27 pays selon les thèmes",
        "Adopte les lois avec le Parlement",
        "Siège à Bruxelles",
      ],
    },
    { type: "p", texte: "**La Commission européenne :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Siège à **Bruxelles**",
        "**27 commissaires** (1 par pays) dont un Président",
        "Propose les lois, veille à leur application",
        "Gardienne des traités",
      ],
    },
    { type: "p", texte: "**La Cour de Justice de l'UE :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Siège à **Luxembourg**",
        "Interprète le droit européen",
        "Veille à son application uniforme",
      ],
    },
    { type: "p", texte: "**La Banque centrale européenne (BCE) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Siège à **Francfort** (Allemagne)",
        "Gère l'euro et la politique monétaire",
        "Indépendante des gouvernements",
      ],
    },
    {
      type: "p",
      texte: "**À retenir :** Strasbourg accueille le Parlement européen et le **Conseil de l'Europe** (47 pays, droits de l'Homme).",
    },
    { type: "h2", texte: "La citoyenneté européenne", id: "citoyennete-europeenne" },
    {
      type: "p",
      texte: "La citoyenneté européenne confère des **droits** supplémentaires à tous les ressortissants des pays membres :",
    },
    { type: "p", texte: "**Définition :**" },
    {
      type: "p",
      texte: "Est citoyen européen toute personne ayant la **nationalité d'un État membre** de l'UE. La citoyenneté européenne s'ajoute à la citoyenneté nationale, elle ne la remplace pas.",
    },
    { type: "p", texte: "**Les droits du citoyen européen :**" },
    { type: "p", texte: "*Liberté de circulation :*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Circuler librement** dans tous les pays de l'UE",
        "**Séjourner** dans n'importe quel pays membre",
        "**Travailler** sans permis de travail dans l'UE",
        "**S'installer** dans le pays de son choix",
      ],
    },
    { type: "p", texte: "*Droits civiques :*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Voter et être élu** aux élections municipales et européennes dans son pays de résidence",
        "**Droit de pétition** au Parlement européen",
        "**Saisir le Médiateur européen**",
      ],
    },
    { type: "p", texte: "*Protection consulaire :*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Protection diplomatique** par les ambassades de tout pays de l'UE si son propre pays n'est pas représenté",
      ],
    },
    { type: "p", texte: "**Espace Schengen :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**27 pays** (dont 23 de l'UE) sans contrôle aux frontières intérieures",
        "Libre circulation des personnes",
        "Contrôles aux frontières extérieures communes",
        "Créé par les accords de Schengen (1985, Luxembourg)",
      ],
    },
    { type: "p", texte: "**Important pour le test civique :**" },
    {
      type: "p",
      texte: "La naturalisation française vous confère automatiquement la citoyenneté européenne et tous ces droits.",
    },
    { type: "h2", texte: "Le rôle de la France dans l'UE", id: "role-france" },
    {
      type: "p",
      texte: "La France est un acteur majeur de la construction et du fonctionnement de l'Union européenne :",
    },
    { type: "p", texte: "**Pays fondateur :**" },
    {
      type: "p",
      texte: "La France fait partie des **6 pays fondateurs** (1951-1957) avec l'Allemagne, l'Italie et les pays du Benelux.",
    },
    { type: "p", texte: "**Poids politique :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**2e pays le plus peuplé** de l'UE (après l'Allemagne)",
        "**2e économie** de l'UE",
        "Membre permanent du Conseil de sécurité de l'ONU",
        "Puissance nucléaire",
      ],
    },
    { type: "p", texte: "**Personnalités françaises clés :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Robert Schuman** - Père fondateur, déclaration de 1950",
        "**Jean Monnet** - Premier président de la CECA",
        "**Jacques Delors** - Président de la Commission (1985-1995), Acte unique, euro",
        "**Valéry Giscard d'Estaing** - A présidé la Convention sur la Constitution européenne",
      ],
    },
    { type: "p", texte: "**Le couple franco-allemand :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Moteur de la construction européenne",
        "Réconciliation après les guerres mondiales",
        "**Traité de l'Élysée** (1963) - Coopération franco-allemande",
        "**Traité d'Aix-la-Chapelle** (2019) - Renforce la coopération",
      ],
    },
    { type: "p", texte: "**Strasbourg - Ville européenne :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Siège du **Parlement européen** (sessions plénières)",
        "Siège du **Conseil de l'Europe** (47 pays, droits de l'Homme)",
        "Siège de la **Cour européenne des droits de l'Homme**",
        "Symbole de la réconciliation franco-allemande",
      ],
    },
    { type: "h2", texte: "L'euro, monnaie commune", id: "euro-monnaie" },
    { type: "p", texte: "L'euro est la monnaie unique de 20 pays de l'Union européenne (zone euro) :" },
    { type: "p", texte: "**Histoire de l'euro :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**1992** - Traité de Maastricht prévoit la monnaie unique",
        "**1999** - Création de l'euro (monnaie virtuelle pour les marchés)",
        "**1er janvier 2002** - Mise en circulation des billets et pièces",
        "En France, l'euro a remplacé le **franc français**",
      ],
    },
    { type: "p", texte: "**Les pays de la zone euro (20 pays) :**" },
    {
      type: "p",
      texte: "Allemagne, Autriche, Belgique, Chypre, Croatie, Espagne, Estonie, Finlande, France, Grèce, Irlande, Italie, Lettonie, Lituanie, Luxembourg, Malte, Pays-Bas, Portugal, Slovaquie, Slovénie.",
    },
    { type: "p", texte: "**Symbole et gestion :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Symbole : **€**",
        "Géré par la **Banque centrale européenne (BCE)** à Francfort",
        "Billets identiques dans tous les pays",
        "Pièces : face commune + face nationale spécifique à chaque pays",
      ],
    },
    { type: "p", texte: "**Avantages de l'euro :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Plus de frais de change entre pays de la zone",
        "Comparaison des prix facilitée",
        "Stabilité monétaire",
        "Renforcement des échanges commerciaux",
      ],
    },
    { type: "p", texte: "**À retenir pour le test civique :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le franc français a été remplacé par l'euro le 1er janvier 2002",
        "1 euro = 6,55957 francs (taux de conversion fixe)",
        "La BCE est indépendante des gouvernements",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "L'Union européenne est une thématique importante du test civique. Retenez les **dates clés** (1950 Schuman, 1957 Rome, 1992 Maastricht, 2002 euro), les **institutions** (Parlement à Strasbourg, Commission à Bruxelles) et les **droits de la citoyenneté européenne** (libre circulation, vote).\nLa France, en tant que pays fondateur et acteur majeur de l'UE, est au cœur de la construction européenne. Ces connaissances démontrent votre compréhension de la place de la France en Europe.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quand la France a-t-elle adopté l'euro ?",
      reponse: "L'euro a été mis en circulation en France le 1er janvier 2002, remplaçant le franc français. La conversion était de 1 euro = 6,55957 francs.",
    },
    {
      question: "Où siège le Parlement européen ?",
      reponse: "Le Parlement européen siège officiellement à Strasbourg (France) pour les sessions plénières. Il a également des bureaux à Bruxelles et à Luxembourg.",
    },
    {
      question: "Combien de pays font partie de l'Union européenne ?",
      reponse: "L'Union européenne compte 27 États membres depuis le Brexit (sortie du Royaume-Uni en 2020). La France est l'un des 6 pays fondateurs.",
    },
    {
      question: "Quels droits confère la citoyenneté européenne ?",
      reponse: "La citoyenneté européenne donne le droit de circuler, séjourner et travailler librement dans tous les pays de l'UE, de voter aux élections municipales et européennes dans son pays de résidence, et de bénéficier de la protection consulaire.",
    },
  ],
  videos: [
    { id: "nXimESI0mQo", titre: "L'Union européenne et la France expliquées" },
  ],
  sources: [
    {
      titre: "Union européenne - Site officiel",
      url: "https://european-union.europa.eu/index_fr",
      type: "officiel",
      description: "Portail officiel de l'Union européenne",
    },
    {
      titre: "Parlement européen - Rôle et pouvoirs",
      url: "https://www.europarl.europa.eu/portal/fr",
      type: "officiel",
      description: "Site officiel du Parlement européen",
    },
    {
      titre: "Toute l'Europe - La France dans l'UE",
      url: "https://www.touteleurope.eu/",
      type: "officiel",
      description: "Ressources pédagogiques sur la construction européenne",
    },
    {
      titre: "Vie publique - Citoyenneté européenne",
      url: "https://www.vie-publique.fr/fiches/20377-quest-ce-que-la-citoyennete-europeenne",
      type: "officiel",
      description: "Comprendre les droits des citoyens européens",
    },
  ],
  aLireAussi: [
    { slug: "institutions-francaises-president-assemblee-senat", ancre: "Les institutions nationales" },
    { slug: "geographie-france-regions-departements-villes", ancre: "La France en Europe" },
    {
      slug: "droit-de-vote-elections-france-2026-guide-citoyen",
      ancre: "Élections européennes et vote",
    },
    {
      slug: "voyager-titre-sejour-francais-2026-pays-sans-visa-schengen",
      ancre: "Voyager dans l'espace Schengen",
    },
  ],
};

export default article;
