import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-actualites-avril-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/prefectures-delais-rendez-vous-avril-2026-solutions`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "prefectures-delais-rendez-vous-avril-2026-solutions",
  titre: "Préfectures : les délais de rendez-vous explosent en avril 2026, voici les solutions",
  titreSeo: "Préfectures : les délais de rendez-vous explosent en avril 2026, voici les solutions",
  resume: "Les délais atteignent 22 semaines à Paris, 20 en Seine-Saint-Denis. Causes de l'engorgement, alternatives (ANEF, sous-préfectures) et recommandations du Défenseur des droits.",
  chapo: "Les délais de rendez-vous en préfecture atteignent des niveaux record en avril 2026 : 22 semaines à Paris, 20 en Seine-Saint-Denis. Une enquête du GISTI révèle que 25 départements dépassent les 16 semaines d'attente. Voici les causes et les solutions disponibles.",
  publieLe: "2026-04-02",
  modifieLe: "2026-04-02",
  minutes: 8,
  theme: "délais préfecture 2026",
  motsCles: [
    "délais préfecture 2026",
    "rendez-vous préfecture titre de séjour",
    "attente préfecture 2026",
    "renouvellement titre séjour délai",
    "ANEF préfecture rendez-vous",
  ],
  rubrique: "actualites",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
  blocs: [
    { type: "h2", texte: "Des délais record dans plusieurs préfectures", id: "delais-record" },
    {
      type: "p",
      texte: "Selon une enquête menée par l'association GISTI publiée le 2 avril 2026, **les délais moyens d'obtention d'un rendez-vous en préfecture pour un titre de séjour atteignent 16 semaines** (environ 4 mois) dans 25 départements, contre 10 semaines il y a un an.",
    },
    { type: "p", texte: "Les préfectures les plus engorgées :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Paris (75)** : 22 semaines en moyenne",
        "**Seine-Saint-Denis (93)** : 20 semaines",
        "**Bouches-du-Rhône (13)** : 18 semaines",
        "**Rhône (69)** : 16 semaines",
        "**Haute-Garonne (31)** : 15 semaines",
      ],
    },
    { type: "h2", texte: "Pourquoi cette explosion des délais ?", id: "causes-explosion" },
    { type: "p", texte: "Trois facteurs convergent :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Hausse des demandes.** Le nombre de primo-demandes et de renouvellements a augmenté de 18 % en un an, selon la DGEF.",
        "**Transition numérique inachevée.** La plateforme ANEF traite désormais 70 % des demandes, mais les 30 % restantes (dossiers complexes, changements de statut) nécessitent toujours un passage en préfecture.",
        "**Manque d'effectifs.** Malgré les recrutements annoncés, les préfectures fonctionnent en sous-effectif de 15 % en moyenne.",
      ],
    },
    { type: "h2", texte: "Les solutions disponibles", id: "solutions" },
    { type: "p", texte: "Pour raccourcir votre attente :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Privilégiez ANEF.** Si votre démarche est éligible (renouvellement, changement d'adresse), faites-la en ligne. Le traitement est 2 à 3 fois plus rapide.",
        "**Préfectures limitrophes.** Certaines sous-préfectures acceptent les dossiers des communes voisines avec des délais moindres.",
        "**Créneaux de dernière minute.** Consultez la plateforme de prise de rendez-vous chaque matin à 8h : des annulations libèrent régulièrement des créneaux.",
        "**Récépissé automatique.** Si votre demande de renouvellement a été déposée via ANEF, un récépissé numérique est généré automatiquement, vous permettant de rester en situation régulière.",
      ],
    },
    { type: "h2", texte: "Que dit le Défenseur des droits ?", id: "defenseur-droits" },
    {
      type: "p",
      texte: "Le Défenseur des droits a renouvelé ses recommandations publiées en janvier 2026, exigeant :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Un **délai maximal de 8 semaines** pour tout rendez-vous préfecture.",
        "La mise en place d'un **guichet d'urgence** pour les situations de rupture de droits.",
        "Un **indicateur public de délais** par préfecture, mis à jour chaque mois.",
      ],
    },
    {
      type: "p",
      texte: "Le ministère de l'Intérieur a indiqué travailler sur un « plan de désengorgement » attendu pour mai 2026.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Face à l'engorgement des préfectures, la solution la plus efficace reste de privilégier les démarches en ligne via ANEF quand c'est possible, et de vérifier régulièrement les créneaux disponibles. Le récépissé automatique protège vos droits pendant l'attente.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quel est le délai moyen pour un rendez-vous en préfecture en 2026 ?",
      reponse: "En avril 2026, le délai moyen atteint 16 semaines (4 mois) dans 25 départements, avec des pics à 22 semaines à Paris.",
    },
    {
      question: "Mon titre de séjour expire pendant l'attente, suis-je en situation irrégulière ?",
      reponse: "Non. Si vous avez déposé votre demande de renouvellement avant l'expiration (via ANEF ou en préfecture), le récépissé vous maintient en situation régulière.",
    },
  ],
  aLireAussi: [
    {
      slug: "guide-anef-complet-2026-creer-compte-deposer-demande",
      ancre: "Démarches en ligne via ANEF",
    },
    {
      slug: "renouvellement-titre-sejour-2026-anef-prefecture-documents-delais",
      ancre: "Renouvellement titre de séjour",
    },
    { slug: "recepisse-titre-de-sejour-droits-duree-voyage", ancre: "Le récépissé pendant l'attente" },
    {
      slug: "circulaire-avril-2026-naturalisation-maghreb-maroc-algerie-tunisie",
      ancre: "Naturalisation et Maghreb : ce que disent les textes",
    },
  ],
};

export default article;
