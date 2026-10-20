import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-part5.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/geographie-france-regions-departements-villes`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "geographie-france-regions-departements-villes",
  titre: "Géographie de la France : régions, départements et grandes villes",
  titreSeo: "Géographie de la France : régions, départements et grandes villes",
  resume: "Maîtrisez la géographie française pour le test civique : les 13 régions métropolitaines, les départements, les grandes villes et les territoires d'outre-mer.",
  chapo: "La géographie de la France est une thématique essentielle du test civique. Avec ses **551 500 km²** en métropole et ses **120 000 km²** de territoires d'outre-mer, la France est le **plus grand pays d'Europe occidentale**. Comprendre son organisation territoriale, ses régions, départements et grandes villes est indispensable pour réussir l'examen.",
  publieLe: "2025-12-05",
  modifieLe: "2025-12-05",
  minutes: 14,
  theme: "géographie france test civique",
  motsCles: [
    "géographie france test civique",
    "régions françaises 2025",
    "départements france liste",
    "grandes villes france",
    "territoires outre-mer",
    "organisation territoriale france",
    "carte france régions",
    "chef-lieu région france",
  ],
  rubrique: "thematiques",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
  },
  blocs: [
    {
      type: "p",
      texte: "Ce guide complet vous présente tout ce que vous devez savoir sur la géographie française pour le test civique : les **13 régions métropolitaines**, les **101 départements** (96 en métropole + 5 outre-mer), les grandes villes et les territoires ultramarins.",
    },
    { type: "h2", texte: "L'organisation territoriale française", id: "organisation-territoriale" },
    {
      type: "p",
      texte: "La France est divisée en plusieurs niveaux administratifs qui forment un **maillage territorial** unique en Europe :",
    },
    { type: "p", texte: "**Les 4 niveaux d'organisation :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**L'État central** - Représenté par le Président et le gouvernement",
        "**Les régions** - 18 au total (13 métropolitaines + 5 outre-mer)",
        "**Les départements** - 101 au total (96 + 5)",
        "**Les communes** - Plus de 35 000 communes",
      ],
    },
    { type: "p", texte: "**Le rôle des préfets :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le **préfet de région** représente l'État au niveau régional",
        "Le **préfet de département** représente l'État au niveau départemental",
        "Ils sont nommés par le Président de la République",
      ],
    },
    { type: "p", texte: "**La décentralisation :**" },
    {
      type: "p",
      texte: "Depuis 1982 (lois Defferre), les collectivités territoriales ont gagné en autonomie :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les régions gèrent les lycées, les transports régionaux, le développement économique",
        "Les départements gèrent les collèges, l'action sociale, les routes départementales",
        "Les communes gèrent les écoles primaires, l'urbanisme, l'état civil",
      ],
    },
    { type: "h2", texte: "Les 13 régions métropolitaines", id: "regions-metropolitaines" },
    {
      type: "p",
      texte: "Depuis la réforme territoriale de **2016**, la France métropolitaine compte **13 régions** (contre 22 auparavant) :",
    },
    { type: "p", texte: "**Les 13 régions et leurs chefs-lieux :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Auvergne-Rhône-Alpes** - Lyon",
        "**Bourgogne-Franche-Comté** - Dijon",
        "**Bretagne** - Rennes",
        "**Centre-Val de Loire** - Orléans",
        "**Corse** - Ajaccio (statut particulier)",
        "**Grand Est** - Strasbourg",
        "**Hauts-de-France** - Lille",
        "**Île-de-France** - Paris",
        "**Normandie** - Rouen",
        "**Nouvelle-Aquitaine** - Bordeaux",
        "**Occitanie** - Toulouse",
        "**Pays de la Loire** - Nantes",
        "**Provence-Alpes-Côte d'Azur** - Marseille",
      ],
    },
    { type: "p", texte: "**À retenir pour le test civique :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La **plus grande région** en superficie : Nouvelle-Aquitaine (84 000 km²)",
        "La **plus peuplée** : Île-de-France (12 millions d'habitants)",
        "La **Corse** a un statut de collectivité territoriale unique",
      ],
    },
    { type: "h2", texte: "Les départements français", id: "departements" },
    {
      type: "p",
      texte: "La France compte **101 départements** : 96 en métropole et 5 en outre-mer. Chaque département est identifié par un **numéro** (de 01 à 976).",
    },
    { type: "p", texte: "**Les départements les plus peuplés :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Nord (59)** - Lille - environ 2,6 millions d'habitants",
        "**Paris (75)** - environ 2,1 millions d'habitants",
        "**Bouches-du-Rhône (13)** - Marseille - environ 2 millions d'habitants",
        "**Rhône (69)** - Lyon - environ 1,9 million d'habitants",
      ],
    },
    { type: "p", texte: "**Numérotation à connaître :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**01 à 95** : départements métropolitains (ordre alphabétique historique)",
        "**2A et 2B** : Corse-du-Sud et Haute-Corse",
        "**971** : Guadeloupe",
        "**972** : Martinique",
        "**973** : Guyane",
        "**974** : La Réunion",
        "**976** : Mayotte",
      ],
    },
    { type: "p", texte: "**Le Conseil départemental :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Élu au suffrage universel direct",
        "Présidé par un(e) président(e) élu(e) par les conseillers",
        "Compétences : action sociale, collèges, routes départementales, RSA",
      ],
    },
    { type: "h2", texte: "Les grandes villes françaises", id: "grandes-villes" },
    {
      type: "p",
      texte: "Le test civique peut vous interroger sur les principales agglomérations françaises :",
    },
    { type: "p", texte: "**Les 10 plus grandes villes (population communale) :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Paris** - 2,1 millions (chef-lieu d'Île-de-France)",
        "**Marseille** - 870 000 (chef-lieu PACA)",
        "**Lyon** - 520 000 (chef-lieu Auvergne-Rhône-Alpes)",
        "**Toulouse** - 490 000 (chef-lieu Occitanie)",
        "**Nice** - 340 000",
        "**Nantes** - 320 000 (chef-lieu Pays de la Loire)",
        "**Montpellier** - 295 000",
        "**Strasbourg** - 290 000 (chef-lieu Grand Est)",
        "**Bordeaux** - 260 000 (chef-lieu Nouvelle-Aquitaine)",
        "**Lille** - 235 000 (chef-lieu Hauts-de-France)",
      ],
    },
    { type: "p", texte: "**Paris - Capitale de la France :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Siège des institutions : Élysée, Assemblée nationale, Sénat",
        "Ville et département à la fois (75)",
        "Divisée en 20 arrondissements",
        "Maire actuel : Anne Hidalgo (depuis 2014)",
      ],
    },
    { type: "p", texte: "**Villes sièges d'institutions européennes :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Strasbourg** : Parlement européen, Conseil de l'Europe",
        "Cette ville symbolise la réconciliation franco-allemande",
      ],
    },
    { type: "h2", texte: "Les territoires d'outre-mer", id: "outre-mer" },
    {
      type: "p",
      texte: "La France possède de nombreux **territoires ultramarins** répartis sur tous les océans du monde, ce qui lui confère le **2e domaine maritime mondial**.",
    },
    { type: "p", texte: "**Les 5 DROM (Départements et Régions d'Outre-Mer) :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Guadeloupe** (971) - Antilles, Caraïbes",
        "**Martinique** (972) - Antilles, Caraïbes",
        "**Guyane** (973) - Amérique du Sud (seul territoire français continental hors Europe)",
        "**La Réunion** (974) - Océan Indien",
        "**Mayotte** (976) - Océan Indien (département depuis 2011)",
      ],
    },
    { type: "p", texte: "**Les COM (Collectivités d'Outre-Mer) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Polynésie française** - Océan Pacifique",
        "**Saint-Pierre-et-Miquelon** - Atlantique Nord",
        "**Wallis-et-Futuna** - Océan Pacifique",
        "**Saint-Martin et Saint-Barthélemy** - Caraïbes",
      ],
    },
    { type: "p", texte: "**Statuts particuliers :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Nouvelle-Calédonie** - Statut sui generis, référendums d'autodétermination",
        "**Terres australes et antarctiques françaises (TAAF)** - Pas de population permanente",
      ],
    },
    { type: "p", texte: "**À retenir :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La Guyane est le plus grand département français (84 000 km²)",
        "La France est présente sur les 5 continents grâce à ses outre-mer",
      ],
    },
    { type: "h2", texte: "Reliefs, fleuves et frontières", id: "reliefs-fleuves" },
    {
      type: "p",
      texte: "La géographie physique de la France peut faire l'objet de questions au test civique :",
    },
    { type: "p", texte: "**Les principaux massifs montagneux :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Les Alpes** - Plus haute montagne : Mont Blanc (4 809 m), point culminant d'Europe occidentale",
        "**Les Pyrénées** - Frontière naturelle avec l'Espagne",
        "**Le Massif central** - Centre de la France",
        "**Les Vosges** - Est de la France",
        "**Le Jura** - Frontière avec la Suisse",
      ],
    },
    { type: "p", texte: "**Les 5 grands fleuves français :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**La Loire** - 1 006 km (le plus long de France)",
        "**Le Rhône** - 812 km en France (source en Suisse)",
        "**La Seine** - 777 km (traverse Paris)",
        "**La Garonne** - 647 km (source en Espagne)",
        "**Le Rhin** - Frontière avec l'Allemagne",
      ],
    },
    { type: "p", texte: "**Les frontières terrestres (6 pays) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Belgique, Luxembourg, Allemagne, Suisse, Italie, Espagne",
        "Andorre et Monaco sont enclavés",
      ],
    },
    { type: "p", texte: "**Les façades maritimes (4) :**" },
    {
      type: "liste",
      style: "puces",
      items: ["Manche, Mer du Nord, Océan Atlantique, Mer Méditerranée"],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Maîtriser la géographie française est essentiel pour le test civique. Retenez les **13 régions métropolitaines** et leurs chefs-lieux, les principaux **départements**, les **grandes villes** et les **territoires d'outre-mer**. N'oubliez pas les éléments physiques : le **Mont Blanc** (plus haut sommet), la **Loire** (plus long fleuve) et les **6 pays frontaliers**.\nCes connaissances géographiques s'intègrent dans la thématique « Histoire, géographie et culture françaises » qui représente une part importante des 40 questions de l'examen.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien de régions compte la France ?",
      reponse: "La France compte 18 régions : 13 en métropole et 5 outre-mer (DROM). Depuis la réforme de 2016, le nombre de régions métropolitaines est passé de 22 à 13.",
    },
    {
      question: "Quel est le plus grand département français ?",
      reponse: "La Guyane (973) est le plus grand département français avec environ 84 000 km². En métropole, le plus grand est la Gironde (33) avec environ 10 000 km².",
    },
    {
      question: "Quels sont les pays frontaliers de la France ?",
      reponse: "La France partage des frontières terrestres avec 6 pays : la Belgique, le Luxembourg, l'Allemagne, la Suisse, l'Italie et l'Espagne. Elle a aussi des micro-frontières avec Andorre et Monaco.",
    },
    {
      question: "Quelle est la capitale de la France ?",
      reponse: "Paris est la capitale de la France. C'est le siège des principales institutions : l'Élysée (Président), l'Assemblée nationale, le Sénat, et les ministères.",
    },
  ],
  videos: [
    { id: "8dKBT22FrKk", titre: "La géographie de la France pour le test civique" },
  ],
  sources: [
    {
      titre: "INSEE - Régions et départements",
      url: "https://www.insee.fr/fr/information/2114819",
      type: "officiel",
      description: "Données officielles sur les régions et départements",
    },
    {
      titre: "Vie publique - Organisation territoriale",
      url: "https://www.vie-publique.fr/fiches/19616-comment-est-organise-le-territoire-francais",
      type: "officiel",
      description: "Comprendre l'organisation administrative française",
    },
    {
      titre: "Gouvernement - Les territoires d'outre-mer",
      url: "https://www.outre-mer.gouv.fr/",
      type: "officiel",
      description: "Informations sur les DROM-COM",
    },
  ],
  aLireAussi: [
    {
      slug: "culture-francaise-patrimoine-monuments-artistes",
      ancre: "Patrimoine et monuments français",
    },
    { slug: "union-europeenne-france-institutions-citoyennete", ancre: "La France en Europe" },
    {
      slug: "institutions-francaises-president-assemblee-senat",
      ancre: "Collectivités et institutions",
    },
  ],
};

export default article;
