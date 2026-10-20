import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-quotidien-immigration.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/voyager-titre-sejour-francais-2026-pays-sans-visa-schengen`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "voyager-titre-sejour-francais-2026-pays-sans-visa-schengen",
  titre: "Voyager avec un titre de séjour français : pays sans visa, zone Schengen, précautions",
  titreSeo: "Voyager avec un titre de séjour français : pays sans visa, zone Schengen, précautions",
  resume: "Libre circulation dans les 27 pays Schengen, règle des 90 jours, cas des récépissés, précautions avant le départ : le guide complet pour voyager sereinement.",
  chapo: "Vous êtes titulaire d'un titre de séjour français et vous souhaitez voyager ? La question revient chaque jour sur les forums : « Où puis-je aller avec ma carte de séjour ? ». La réponse dépend de votre type de titre, du pays de destination et de la validité de votre passeport. Ce guide complet fait le point sur la circulation en zone Schengen, les pays accessibles sans visa supplémentaire et les précautions indispensables avant de partir.",
  publieLe: "2026-04-02",
  modifieLe: "2026-04-02",
  minutes: 12,
  theme: "voyager avec titre de séjour français",
  motsCles: [
    "voyager avec titre de séjour français",
    "pays sans visa titre séjour France",
    "carte de séjour voyage Schengen",
    "voyager étranger avec carte séjour",
    "titre séjour zone Schengen libre circulation",
    "voyage titre séjour récépissé",
    "pays accessibles carte résident France",
    "transit aéroport titre séjour",
    "voyager sans visa avec titre séjour français",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1436491865332-7a61a109db05",
  },
  blocs: [
    { type: "h2", texte: "La règle de base : libre circulation en zone Schengen", id: "regle-schengen" },
    {
      type: "p",
      texte: "Le principal avantage d'un titre de séjour français est la **libre circulation dans les 27 pays de l'espace Schengen** pour des séjours de courte durée (90 jours maximum sur 180 jours).",
    },
    { type: "h3", texte: "Les 27 pays Schengen accessibles :" },
    {
      type: "p",
      texte: "Allemagne, Autriche, Belgique, Bulgarie, Croatie, Danemark, Espagne, Estonie, Finlande, Grèce, Hongrie, Islande, Italie, Lettonie, Liechtenstein, Lituanie, Luxembourg, Malte, Norvège, Pays-Bas, Pologne, Portugal, République tchèque, Roumanie, Slovaquie, Slovénie, Suède, Suisse.",
    },
    { type: "h3", texte: "Documents requis :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Passeport en cours de validité**",
        "**Titre de séjour français en cours de validité** (carte de séjour, carte de résident ou VLS-TS validé)",
        "Aucun visa supplémentaire n'est nécessaire",
      ],
    },
    {
      type: "p",
      texte: "**Attention** : un récépissé de demande de titre de séjour **ne permet pas** la libre circulation Schengen dans tous les cas. Seul le récépissé de renouvellement (avec l'ancien titre) est généralement accepté.",
    },
    {
      type: "h2",
      texte: "Pays hors Schengen : où peut-on voyager sans visa ?",
      id: "pays-hors-schengen",
    },
    {
      type: "p",
      texte: "En dehors de Schengen, le titre de séjour français **ne remplace pas un visa**. Vos droits de voyage dépendent de votre **nationalité** (passeport) et non de votre titre de séjour.",
    },
    {
      type: "p",
      texte: "Cependant, certains pays accordent un accès facilité aux titulaires d'un titre de séjour d'un pays de l'UE/Schengen :",
    },
    { type: "h3", texte: "Pays accessibles avec titre de séjour français (exemples courants) :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Royaume-Uni** : visa requis pour la plupart des nationalités (Brexit). Le titre de séjour français ne suffit plus.",
        "**Turquie** : e-visa requis pour certaines nationalités, indépendamment du titre français.",
        "**Maroc, Tunisie** : accès selon la nationalité du passeport. Les ressortissants marocains/tunisiens n'ont généralement pas besoin de visa pour rentrer dans leur pays.",
        "**Roumanie/Bulgarie (hors Schengen jusqu'en 2024)** : désormais dans Schengen, libre circulation avec titre français.",
      ],
    },
    {
      type: "p",
      texte: "**Règle d'or** : vérifiez toujours les conditions d'entrée sur le site du consulat du pays de destination **en fonction de votre nationalité**, pas de votre titre de séjour.",
    },
    { type: "h2", texte: "La règle des 90 jours sur 180 jours", id: "duree-sejour-schengen" },
    {
      type: "p",
      texte: "Même avec un titre de séjour français, votre séjour dans un **autre** pays Schengen est limité :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Maximum 90 jours** sur une période de 180 jours glissants dans un même pays Schengen",
        "Le compteur se calcule en cumulant tous vos séjours dans ce pays sur les 6 derniers mois",
        "Au-delà, vous devez quitter le pays ou demander un titre de séjour local",
      ],
    },
    {
      type: "p",
      texte: "En revanche, votre séjour en **France** n'est pas limité tant que votre titre est valide.",
    },
    {
      type: "p",
      texte: "**Exemple concret** : vous pouvez passer 3 mois en Espagne, revenir en France, puis repartir en Espagne 3 mois plus tard. Mais vous ne pouvez pas rester 4 mois consécutifs en Espagne avec votre titre français.",
    },
    { type: "h2", texte: "Précautions indispensables avant de partir", id: "precautions-avant-depart" },
    { type: "p", texte: "Avant tout voyage, vérifiez impérativement ces points :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Validité du titre de séjour.** Votre carte doit être valide pendant toute la durée du voyage ET au retour en France. Un titre expiré = refus d'entrée ou de retour possible.",
        "**Validité du passeport.** La plupart des pays exigent un passeport valide au moins 3 à 6 mois après la date de retour prévue.",
        "**Assurance voyage.** Fortement recommandée, voire obligatoire pour certaines destinations.",
        "**Récépissé ≠ titre de séjour.** Si vous êtes en cours de renouvellement, vérifiez que le récépissé + ancien titre suffisent pour le pays visé.",
        "**Demande de renouvellement en cours.** Si votre titre expire bientôt, déposez votre demande de renouvellement AVANT de partir. ANEF permet de le faire en ligne.",
      ],
    },
    {
      type: "p",
      texte: "**Conseil** : faites une copie numérique de votre titre de séjour et de votre passeport, stockée dans votre email ou un cloud sécurisé. En cas de perte ou vol à l'étranger, cela facilitera les démarches au consulat.",
    },
    {
      type: "h2",
      texte: "Cas particuliers : étudiants, réfugiés, cartes de résident",
      id: "cas-particuliers",
    },
    { type: "p", texte: "Les règles varient selon votre type de titre :" },
    { type: "h3", texte: "Titre de séjour étudiant :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Libre circulation Schengen pendant les vacances universitaires",
        "En période scolaire, vérifiez les obligations de présence de votre établissement",
      ],
    },
    { type: "h3", texte: "Carte de résident (10 ans) :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Même règle Schengen (90/180 jours)",
        "**Attention** : une absence de France de plus de 3 ans consécutifs peut entraîner le retrait de la carte de résident",
      ],
    },
    { type: "h3", texte: "Protection internationale (réfugié, protection subsidiaire) :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous disposez d'un **titre de voyage pour réfugié** (Convention de Genève) qui remplace le passeport",
        "Libre circulation Schengen avec ce titre",
        "**Interdit** : retourner dans votre pays d'origine (risque de perte du statut de réfugié)",
      ],
    },
    { type: "h3", texte: "Récépissé seul (sans ancien titre) :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "En général, **pas de libre circulation Schengen**",
        "Restez en France jusqu'à l'obtention de votre titre définitif",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Voyager avec un titre de séjour français est tout à fait possible, mais les droits varient selon votre destination et votre type de titre. Retenez l'essentiel : libre circulation dans les 27 pays Schengen (90 jours max), et vérification systématique des conditions d'entrée par nationalité pour les pays hors Schengen. Préparez vos documents en amont et ne partez jamais avec un titre sur le point d'expirer.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Puis-je voyager en Europe avec un récépissé de titre de séjour ?",
      reponse: "Un récépissé de renouvellement accompagné de l'ancien titre de séjour est généralement accepté en zone Schengen. Un récépissé de première demande seul n'est pas reconnu pour la libre circulation Schengen.",
    },
    {
      question: "Mon titre de séjour expire dans 2 semaines, puis-je voyager en Espagne ?",
      reponse: "C'est très risqué. Votre titre doit être valide pendant toute la durée du séjour ET au moment du retour en France. Il est fortement recommandé de reporter le voyage ou de renouveler d'abord votre titre.",
    },
    {
      question: "Puis-je aller au Royaume-Uni avec mon titre de séjour français ?",
      reponse: "Non, depuis le Brexit, le Royaume-Uni ne fait plus partie de l'espace Schengen ni de l'UE. Vous devez vérifier si votre nationalité nécessite un visa pour le Royaume-Uni, indépendamment de votre titre de séjour français.",
    },
    {
      question: "Combien de temps puis-je rester dans un autre pays Schengen ?",
      reponse: "Maximum 90 jours sur une période de 180 jours glissants. Au-delà, vous devez soit revenir en France, soit demander un titre de séjour dans le pays concerné.",
    },
  ],
  sources: [
    {
      titre: "EUR-Lex : Règlement Schengen (CE) 562/2006",
      url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=celex%3A32006R0562",
      type: "juridique",
      description: "Code frontières Schengen : conditions de circulation des résidents de longue durée",
    },
    {
      titre: "Service-Public.fr, Voyager à l'étranger avec un titre de séjour",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2728",
      type: "officiel",
      description: "Conditions de voyage pour les titulaires d'un titre de séjour français",
    },
    {
      titre: "France Diplomatie : Conseils aux voyageurs",
      url: "https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/",
      type: "officiel",
      description: "Conditions d'entrée par pays et recommandations de sécurité",
    },
  ],
  aLireAussi: [
    { slug: "recepisse-titre-de-sejour-droits-duree-voyage", ancre: "Voyager avec un récépissé" },
    { slug: "carte-de-sejour-france-2026-guide-complet-types-demarches-renouvellement", ancre: "Types de titres de séjour" },
    {
      slug: "union-europeenne-france-institutions-citoyennete",
      ancre: "L'espace Schengen et la libre circulation",
    },
    {
      slug: "titre-sejour-perdu-vole-expire-2026-demarches-urgence",
      ancre: "Titre perdu ou volé à l'étranger",
    },
  ],
};

export default article;
