import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-part5.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/culture-francaise-patrimoine-monuments-artistes`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "culture-francaise-patrimoine-monuments-artistes",
  titre: "La culture française : patrimoine, monuments et artistes célèbres",
  titreSeo: "La culture française : patrimoine, monuments et artistes célèbres",
  resume: "Découvrez le patrimoine culturel français : monuments historiques, musées, artistes, écrivains et musiciens célèbres. Thématique essentielle du test civique.",
  chapo: "La culture française fait partie des thématiques officielles du test civique. Riche de plusieurs millénaires d'histoire, le patrimoine culturel français est l'un des plus importants au monde. Des châteaux de la Loire à la Tour Eiffel, des œuvres du Louvre aux écrits de Victor Hugo, la France rayonne culturellement sur tous les continents.",
  publieLe: "2025-12-04",
  modifieLe: "2025-12-04",
  minutes: 15,
  theme: "culture française test civique",
  motsCles: [
    "culture française test civique",
    "patrimoine france",
    "monuments français",
    "musée louvre",
    "victor hugo",
    "tour eiffel histoire",
    "artistes français célèbres",
    "gastronomie française",
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
      texte: "Ce guide vous présente les éléments essentiels de la culture française pour réussir le test civique : **monuments historiques**, **musées**, **artistes célèbres**, **écrivains**, **musiciens** et **traditions**.",
    },
    { type: "h2", texte: "Le patrimoine mondial de la France", id: "patrimoine-mondial" },
    {
      type: "p",
      texte: "La France possède l'un des patrimoines culturels les plus riches au monde, reconnu par l'**UNESCO** :",
    },
    { type: "p", texte: "**Sites français classés au patrimoine mondial :**" },
    {
      type: "p",
      texte: "La France compte **49 sites** inscrits au patrimoine mondial de l'UNESCO, dont :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Mont-Saint-Michel et sa baie** (1979)",
        "**Château de Versailles** (1979)",
        "**Cathédrale de Chartres** (1979)",
        "**Palais et parc de Fontainebleau** (1981)",
        "**Rives de la Seine à Paris** (1991)",
        "**Cathédrale Notre-Dame de Paris** (1991)",
        "**Cité épiscopale d'Albi** (2010)",
        "**Bassin minier du Nord-Pas-de-Calais** (2012)",
      ],
    },
    { type: "p", texte: "**Les monuments les plus visités :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**La Tour Eiffel** - Symbole de Paris, construite en 1889",
        "**Le château de Versailles** - Résidence des rois de France",
        "**Le musée du Louvre** - Plus grand musée du monde",
        "**L'Arc de Triomphe** - Hommage aux soldats français",
        "**Le Mont-Saint-Michel** - Abbaye médiévale en Normandie",
      ],
    },
    { type: "p", texte: "**À retenir :**" },
    {
      type: "p",
      texte: "La France est le **1er pays touristique mondial** avec près de 90 millions de visiteurs par an avant la pandémie.",
    },
    { type: "h2", texte: "Les grands musées français", id: "musees" },
    { type: "p", texte: "La France abrite certains des musées les plus prestigieux au monde :" },
    { type: "p", texte: "**Le Louvre - Paris :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Plus grand musée du monde** (72 735 m² d'exposition)",
        "Ancien palais royal, devenu musée en 1793",
        "Œuvres célèbres : **La Joconde** (Mona Lisa) de Léonard de Vinci, la **Vénus de Milo**, la **Victoire de Samothrace**",
        "Plus de **10 millions de visiteurs** par an",
      ],
    },
    { type: "p", texte: "**Musée d'Orsay - Paris :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Installé dans une ancienne gare (1900)",
        "Spécialisé dans l'**impressionnisme** et le post-impressionnisme",
        "Œuvres de Monet, Renoir, Van Gogh, Cézanne",
      ],
    },
    { type: "p", texte: "**Centre Pompidou - Paris :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Art moderne et contemporain",
        "Architecture audacieuse (Renzo Piano et Richard Rogers)",
        "Ouvert en 1977",
      ],
    },
    { type: "p", texte: "**Autres musées importants :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Musée Picasso** - Paris (œuvres du peintre espagnol)",
        "**Musée Rodin** - Paris (sculptures)",
        "**MUCEM** - Marseille (civilisations méditerranéennes)",
        "**Musée des Confluences** - Lyon (sciences et sociétés)",
      ],
    },
    { type: "p", texte: "**Gratuité des musées :**" },
    {
      type: "p",
      texte: "Les musées nationaux sont **gratuits le premier dimanche du mois** et pour les moins de 26 ans résidents européens.",
    },
    { type: "h2", texte: "La littérature française", id: "litterature" },
    {
      type: "p",
      texte: "La France a produit certains des plus grands écrivains de l'histoire universelle :",
    },
    { type: "p", texte: "**Moyen Âge et Renaissance :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Chrétien de Troyes** - Romans de la Table Ronde",
        "**François Rabelais** - Gargantua, Pantagruel",
        "**Michel de Montaigne** - Les Essais (fondateur de l'essai littéraire)",
      ],
    },
    { type: "p", texte: "**Le Grand Siècle (XVIIe) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Molière** (1622-1673) - Le Tartuffe, Le Misanthrope, L'Avare (comédie)",
        "**Jean Racine** - Phèdre, Andromaque (tragédie)",
        "**Pierre Corneille** - Le Cid (tragédie)",
        "**Jean de La Fontaine** - Les Fables",
      ],
    },
    { type: "p", texte: "**Les Lumières (XVIIIe) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Voltaire** - Candide, Traité sur la tolérance",
        "**Jean-Jacques Rousseau** - Du contrat social, Émile",
        "**Denis Diderot** - L'Encyclopédie",
        "**Montesquieu** - De l'esprit des lois",
      ],
    },
    { type: "p", texte: "**XIXe siècle - L'âge d'or :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Victor Hugo** (1802-1885) - Les Misérables, Notre-Dame de Paris",
        "**Alexandre Dumas** - Les Trois Mousquetaires",
        "**Honoré de Balzac** - La Comédie humaine",
        "**Émile Zola** - Les Rougon-Macquart, J'accuse",
        "**Gustave Flaubert** - Madame Bovary",
      ],
    },
    { type: "p", texte: "**XXe siècle :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Marcel Proust** - À la recherche du temps perdu",
        "**Albert Camus** - L'Étranger, La Peste (Prix Nobel 1957)",
        "**Jean-Paul Sartre** - L'existentialisme",
        "**Simone de Beauvoir** - Le Deuxième Sexe",
      ],
    },
    { type: "h2", texte: "Les arts plastiques et visuels", id: "arts" },
    { type: "p", texte: "La France a été au cœur des grands mouvements artistiques européens :" },
    { type: "p", texte: "**La peinture française :**" },
    { type: "p", texte: "*Classicisme (XVIIe) :*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Nicolas Poussin** - Peintre classique par excellence",
        "**Claude Lorrain** - Paysages idéalisés",
      ],
    },
    { type: "p", texte: "*Romantisme et Réalisme (XIXe) :*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Eugène Delacroix** - La Liberté guidant le peuple (1830)",
        "**Gustave Courbet** - Réalisme",
      ],
    },
    { type: "p", texte: "*Impressionnisme (fin XIXe) :*" },
    { type: "p", texte: "Mouvement né en France qui révolutionna l'art :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Claude Monet** - Impression, soleil levant (1872) donna son nom au mouvement",
        "**Pierre-Auguste Renoir** - Le Moulin de la Galette",
        "**Edgar Degas** - Les danseuses",
        "**Camille Pissarro** - Paysages",
      ],
    },
    { type: "p", texte: "*Post-impressionnisme et avant-gardes :*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Paul Cézanne** - Père de l'art moderne",
        "**Henri Matisse** - Fauvisme",
        "**Fernand Léger** - Cubisme",
      ],
    },
    { type: "p", texte: "**La sculpture :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Auguste Rodin** (1840-1917) - Le Penseur, Les Bourgeois de Calais",
        "**Camille Claudel** - Sculptrice et compagne de Rodin",
      ],
    },
    { type: "p", texte: "**L'architecture :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Le Corbusier** - Architecte moderne (Cité radieuse de Marseille)",
        "**Gustave Eiffel** - Ingénieur (Tour Eiffel, 1889)",
      ],
    },
    { type: "h2", texte: "La musique française", id: "musique" },
    { type: "p", texte: "La France a contribué de manière significative à l'histoire de la musique :" },
    { type: "p", texte: "**Musique classique :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Jean-Baptiste Lully** (1632-1687) - Compositeur de Louis XIV",
        "**Jean-Philippe Rameau** (1683-1764) - Opéras baroques",
        "**Hector Berlioz** (1803-1869) - Symphonie fantastique",
        "**Claude Debussy** (1862-1918) - Clair de Lune, impressionnisme musical",
        "**Maurice Ravel** (1875-1937) - Boléro",
      ],
    },
    { type: "p", texte: "**La chanson française :**" },
    { type: "p", texte: "Genre musical typiquement français :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Édith Piaf** (1915-1963) - « La Môme », La Vie en rose, Non, je ne regrette rien",
        "**Charles Aznavour** (1924-2018) - La Bohème, Emmenez-moi",
        "**Jacques Brel** (1929-1978) - Ne me quitte pas (belge francophone)",
        "**Georges Brassens** (1921-1981) - Les Copains d'abord",
        "**Serge Gainsbourg** (1928-1991) - Je t'aime... moi non plus",
      ],
    },
    { type: "p", texte: "**La Fête de la Musique :**" },
    {
      type: "p",
      texte: "Créée en **1982** par Jack Lang (ministre de la Culture), elle a lieu chaque **21 juin** (solstice d'été). C'est devenu un événement mondial.",
    },
    { type: "p", texte: "**Hymne national :**" },
    {
      type: "p",
      texte: "**La Marseillaise**, composée en 1792 par Rouget de Lisle, est l'hymne national depuis 1795.",
    },
    { type: "h2", texte: "Traditions et gastronomie", id: "traditions" },
    {
      type: "p",
      texte: "La culture française comprend aussi des traditions et un art de vivre reconnus mondialement :",
    },
    { type: "p", texte: "**La gastronomie française :**" },
    { type: "p", texte: "Inscrite au **patrimoine immatériel de l'UNESCO** en 2010." },
    { type: "p", texte: "*Spécialités régionales :*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Bouillabaisse** - Marseille (soupe de poissons)",
        "**Cassoulet** - Toulouse (haricots, viandes)",
        "**Choucroute** - Alsace",
        "**Crêpes** - Bretagne",
        "**Fondue/Raclette** - Savoie",
        "**Bœuf bourguignon** - Bourgogne",
      ],
    },
    { type: "p", texte: "*Fromages :*" },
    { type: "p", texte: "Plus de **400 variétés** de fromages (Camembert, Roquefort, Comté, Brie...)" },
    { type: "p", texte: "*Vins :*" },
    {
      type: "p",
      texte: "Régions viticoles célèbres : Bordeaux, Bourgogne, Champagne, Alsace, Vallée du Rhône",
    },
    { type: "p", texte: "**Fêtes et traditions :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**14 juillet** - Fête nationale (prise de la Bastille)",
        "**1er mai** - Fête du travail (muguet)",
        "**21 juin** - Fête de la musique",
        "**Épiphanie** - Galette des rois",
        "**Chandeleur** - Crêpes (2 février)",
      ],
    },
    { type: "p", texte: "**Le Tour de France :**" },
    { type: "p", texte: "Course cycliste créée en **1903**, emblème sportif français." },
    { type: "p", texte: "**Le cinéma français :**" },
    { type: "p", texte: "La France est le berceau du cinéma :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Frères Lumière** - Inventeurs du cinématographe (1895)",
        "**Festival de Cannes** - Créé en 1946",
        "César du cinéma français (équivalent des Oscars)",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La culture française est d'une richesse exceptionnelle et constitue une thématique importante du test civique. Retenez les grands **monuments** (Tour Eiffel, Versailles, Louvre), les **artistes célèbres** (Monet, Victor Hugo, Molière, Édith Piaf) et les **traditions** (gastronomie, fêtes nationales).\nCes connaissances culturelles témoignent de votre intégration et de votre attachement à la France, valeurs essentielles pour la naturalisation et l'obtention d'un titre de séjour de longue durée.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Qui a peint la Joconde ?",
      reponse: "La Joconde (Mona Lisa) a été peinte par Léonard de Vinci au début du XVIe siècle. Ce tableau est exposé au musée du Louvre à Paris et est l'œuvre d'art la plus visitée au monde.",
    },
    {
      question: "Qui a écrit Les Misérables ?",
      reponse: "Les Misérables a été écrit par Victor Hugo et publié en 1862. Ce roman épique raconte l'histoire de Jean Valjean et est une critique sociale de la France du XIXe siècle.",
    },
    {
      question: "Quand a lieu la Fête de la Musique ?",
      reponse: "La Fête de la Musique a lieu chaque 21 juin, jour du solstice d'été. Elle a été créée en 1982 par le ministre de la Culture Jack Lang.",
    },
    {
      question: "Quel est l'hymne national français ?",
      reponse: "L'hymne national français est La Marseillaise, composée en 1792 par Rouget de Lisle à Strasbourg. Elle est l'hymne officiel depuis 1795.",
    },
  ],
  videos: [
    { id: "faTI6V7m5Tk", titre: "La culture et le patrimoine français" },
    { id: "M6Jqed7F16I", titre: "Les monuments et artistes français à connaître" },
  ],
  sources: [
    {
      titre: "Ministère de la Culture",
      url: "https://www.culture.gouv.fr/",
      type: "officiel",
      description: "Actualités et ressources culturelles officielles",
    },
    {
      titre: "UNESCO - Sites français au patrimoine mondial",
      url: "https://whc.unesco.org/fr/etatsparties/fr",
      type: "officiel",
      description: "Liste des sites français classés par l'UNESCO",
    },
    {
      titre: "Louvre - Collections et histoire",
      url: "https://www.louvre.fr/",
      type: "officiel",
      description: "Site officiel du musée du Louvre",
    },
  ],
  aLireAussi: [
    { slug: "geographie-france-regions-departements-villes", ancre: "Géographie de la France" },
    { slug: "valeurs-republique-francaise-liberte-egalite-fraternite", ancre: "Valeurs républicaines" },
  ],
};

export default article;
