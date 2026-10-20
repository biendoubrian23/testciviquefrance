import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/institutions-francaises-president-assemblee-senat`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "institutions-francaises-president-assemblee-senat",
  titre: "Les institutions françaises expliquées simplement : guide 2025",
  titreSeo: "Les institutions françaises expliquées simplement : guide 2025",
  resume: "Comprendre les institutions de la Ve République : rôle du Président, Assemblée nationale, Sénat, Gouvernement, Conseil constitutionnel. Fiches synthétiques pour le test civique.",
  chapo: "Les institutions françaises organisent les pouvoirs de l'État et garantissent le fonctionnement de la démocratie. Président, gouvernement, Parlement, Conseil constitutionnel : découvrez comment fonctionne la Ve République.",
  publieLe: "2025-12-11",
  modifieLe: "2025-12-11",
  minutes: 16,
  theme: "institutions françaises",
  motsCles: [
    "institutions françaises",
    "président république",
    "premier ministre",
    "assemblée nationale",
    "sénat",
    "ve république",
    "gouvernement français",
  ],
  rubrique: "thematiques",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1555116505-38ab61800975?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1555116505-38ab61800975",
  },
  blocs: [
    { type: "h2", texte: "Le Président de la République", id: "president-republique" },
    { type: "p", texte: "**Chef de l'État**" },
    {
      type: "p",
      texte: "Le Président de la République est le chef de l'État français. Il incarne l'autorité de l'État et veille au respect de la Constitution.",
    },
    { type: "p", texte: "**Élection et mandat**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Élu au **suffrage universel direct** (tous les citoyens votent)",
        "Mandat de **5 ans** (quinquennat depuis 2002)",
        "Rééligible une seule fois (maximum 2 mandats)",
      ],
    },
    { type: "p", texte: "**Pouvoirs du Président**" },
    { type: "p", texte: "*Pouvoirs propres :*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Nommer le Premier ministre",
        "Dissoudre l'Assemblée nationale",
        "Organiser un référendum",
        "Saisir le Conseil constitutionnel",
        "Exercer les pouvoirs exceptionnels (article 16)",
      ],
    },
    { type: "p", texte: "*Pouvoirs partagés (avec le Premier ministre) :*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Nommer les ministres",
        "Signer les ordonnances et décrets",
        "Accréditer les ambassadeurs",
      ],
    },
    { type: "p", texte: "**Chef des armées**" },
    {
      type: "p",
      texte: "Le Président est le chef des armées. Il dispose du pouvoir de déclencher la force nucléaire.",
    },
    { type: "p", texte: "**Résidence officielle**" },
    {
      type: "p",
      texte: "Le palais de l'Élysée (Paris) est la résidence officielle du Président depuis 1848.",
    },
    { type: "h2", texte: "Le Gouvernement et le Premier ministre", id: "gouvernement" },
    { type: "p", texte: "**Le Premier ministre**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Nommé par le Président de la République",
        "Dirige l'action du gouvernement",
        "Responsable devant l'Assemblée nationale",
        "Résidence officielle : Hôtel de Matignon",
      ],
    },
    { type: "p", texte: "**Rôle du Premier ministre**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Coordonner le travail des ministres",
        "Assurer l'exécution des lois",
        "Exercer le pouvoir réglementaire",
        "Proposer les lois au Parlement",
      ],
    },
    { type: "p", texte: "**Le Gouvernement**" },
    { type: "p", texte: "Le Gouvernement est composé :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Du Premier ministre",
        "Des ministres d'État (rang protocolaire supérieur)",
        "Des ministres",
        "Des ministres délégués et secrétaires d'État",
      ],
    },
    { type: "p", texte: "**Responsabilité du Gouvernement**" },
    { type: "p", texte: "Le Gouvernement est responsable devant l'Assemblée nationale :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Motion de censure : l'Assemblée peut renverser le Gouvernement",
        "Question de confiance : le Premier ministre engage sa responsabilité",
      ],
    },
    { type: "p", texte: "**Conseil des ministres**" },
    {
      type: "p",
      texte: "Réunion hebdomadaire (mercredi) présidée par le Président de la République. C'est là que sont adoptés les projets de loi et décrets importants.",
    },
    { type: "h2", texte: "Le Parlement : Assemblée nationale et Sénat", id: "parlement" },
    { type: "p", texte: "**Un Parlement bicaméral**" },
    { type: "p", texte: "Le Parlement français comprend deux chambres :" },
    {
      type: "liste",
      style: "numeros",
      items: ["L'Assemblée nationale (chambre basse)", "Le Sénat (chambre haute)"],
    },
    { type: "p", texte: "**L'Assemblée nationale**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**577 députés** élus au suffrage universel direct",
        "Mandat de **5 ans**",
        "Siège au Palais Bourbon (Paris)",
        "Vote les lois et contrôle le Gouvernement",
        "Peut renverser le Gouvernement (motion de censure)",
      ],
    },
    { type: "p", texte: "**Le Sénat**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**348 sénateurs** élus au suffrage indirect",
        "Élus par les grands électeurs (élus locaux)",
        "Mandat de **6 ans** (renouvelé par moitié tous les 3 ans)",
        "Siège au Palais du Luxembourg (Paris)",
        "Représente les collectivités territoriales",
      ],
    },
    { type: "p", texte: "**Le processus législatif**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Dépôt du projet (Gouvernement) ou proposition de loi (parlementaires)",
        "Examen en commission",
        "Débat et vote en séance plénière",
        "Navette entre Assemblée et Sénat",
        "En cas de désaccord : l'Assemblée a le dernier mot",
        "Promulgation par le Président",
      ],
    },
    { type: "p", texte: "**Sessions parlementaires**" },
    {
      type: "liste",
      style: "puces",
      items: ["Session ordinaire : octobre à juin", "Sessions extraordinaires possibles"],
    },
    { type: "h2", texte: "Les autres institutions de la République", id: "autres-institutions" },
    { type: "p", texte: "**Le Conseil constitutionnel**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vérifie la conformité des lois à la Constitution",
        "9 membres nommés pour 9 ans (+ anciens Présidents de droit)",
        "Valide les élections présidentielles et législatives",
        "Siège au Palais-Royal",
      ],
    },
    { type: "p", texte: "**Le Conseil d'État**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Plus haute juridiction administrative",
        "Conseille le Gouvernement sur les projets de loi",
        "Juge les litiges contre l'administration",
      ],
    },
    { type: "p", texte: "**La Cour de cassation**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Plus haute juridiction judiciaire",
        "Vérifie la bonne application du droit",
        "Ne rejuge pas les faits",
      ],
    },
    { type: "p", texte: "**Le Conseil économique, social et environnemental (CESE)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Assemblée consultative",
        "Représente la société civile",
        "Donne des avis sur les projets de loi",
      ],
    },
    { type: "p", texte: "**Le Défenseur des droits**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Autorité indépendante",
        "Défend les droits des citoyens face à l'administration",
        "Lutte contre les discriminations",
      ],
    },
    { type: "p", texte: "**Les collectivités territoriales**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Communes (maires)",
        "Départements (présidents de conseil départemental)",
        "Régions (présidents de conseil régional)",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Comprendre les institutions françaises est fondamental pour s'intégrer dans la vie civique. Le Président, le Gouvernement, le Parlement et les autres institutions forment l'architecture de notre démocratie. Préparez ces thèmes essentiels du test civique sur Test Civique France.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Qui vote les lois en France ?",
      reponse: "Le Parlement (Assemblée nationale et Sénat) vote les lois. En cas de désaccord persistant, l'Assemblée nationale a le dernier mot.",
    },
    {
      question: "Le Président peut-il gouverner seul ?",
      reponse: "Non, le Président partage le pouvoir exécutif avec le Premier ministre et le Gouvernement. En période de cohabitation, le Premier ministre a une grande autonomie.",
    },
  ],
  videos: [
    { id: "nXimESI0mQo", titre: "Comment fonctionne la Ve République" },
    { id: "8MyAxR3G-fU", titre: "Le Président, le Gouvernement et le Parlement expliqués" },
  ],
  sources: [
    {
      titre: "Élysée - La présidence de la République",
      url: "https://www.elysee.fr/la-presidence",
      type: "officiel",
      description: "Rôle et pouvoirs du Président de la République",
    },
    {
      titre: "Assemblée nationale - Rôle et pouvoirs",
      url: "https://www.assemblee-nationale.fr/decouvrir-l-assemblee/role-et-pouvoirs-de-l-assemblee-nationale",
      type: "officiel",
      description: "Fonctionnement de l'Assemblée nationale",
    },
    {
      titre: "Sénat - Rôle et fonctionnement",
      url: "https://www.senat.fr/role/index.html",
      type: "officiel",
      description: "Mission et organisation du Sénat",
    },
    {
      titre: "Conseil constitutionnel - Présentation",
      url: "https://www.conseil-constitutionnel.fr/le-conseil-constitutionnel",
      type: "officiel",
      description: "Le gardien de la Constitution",
    },
  ],
};

export default article;
