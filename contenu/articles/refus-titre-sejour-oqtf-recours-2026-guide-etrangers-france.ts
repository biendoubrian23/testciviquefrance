import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-2026-part3.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france",
  titre: "Refus de titre de sejour et OQTF en 2026 : recours, delais legaux et plan d action pour les etrangers en France",
  titreSeo: "Refus de titre de sejour et OQTF en 2026 : recours, delais legaux et plan d action pour les etrangers en France",
  resume: "Comment reagir apres un refus prefecture ou une OQTF: delais de recours, dossier de defense, recours gracieux/contentieux et strategie pour proteger votre situation administrative.",
  chapo: "Recevoir un **refus de titre de sejour** ou une **OQTF** est une situation difficile, mais il existe des voies de recours et des strategies legales pour proteger votre dossier. Ce guide 2026 explique clairement les types de decisions, les delais a ne pas manquer, les recours possibles (gracieux, hierarchique, contentieux), et les documents a preparer pour defendre vos droits.",
  publieLe: "2026-03-25",
  modifieLe: "2026-03-25",
  minutes: 18,
  theme: "refus titre de sejour recours 2026",
  motsCles: [
    "refus titre de sejour recours 2026",
    "OQTF recours etrangers france",
    "contester refus prefecture",
    "tribunal administratif titre de sejour",
    "recours gracieux titre de sejour",
    "delais recours OQTF",
    "dossier defense etrangers france",
    "guide legal etrangers prefecture",
    "que faire en cas de refus titre sejour",
    "droits etrangers france 2026",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
  },
  blocs: [
    {
      type: "h2",
      texte: "Refus, OQTF, ajournement : comprendre la decision recue",
      id: "comprendre-decision",
    },
    { type: "p", texte: "Toutes les decisions administratives n ont pas les memes effets." },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Refus simple** : la demande est rejetee",
        "**Refus avec OQTF** : obligation de quitter le territoire",
        "**Ajournement/demande complementaire** : dossier non clos mais incomplet ou insuffisant",
      ],
    },
    {
      type: "p",
      texte: "La premiere etape est de lire precisement les motifs et la date de notification.",
    },
    { type: "h2", texte: "Delais de recours : ne ratez pas la fenetre legale", id: "delais-recours" },
    { type: "p", texte: "En contentieux des etrangers, les delais sont souvent courts." },
    {
      type: "liste",
      style: "puces",
      items: [
        "Verifiez le delai exact mentionne dans la decision",
        "Preparez les preuves immediatement",
        "Consultez rapidement un professionnel si la mesure est lourde (ex: OQTF)",
      ],
    },
    {
      type: "p",
      texte: "Un recours hors delai est souvent irrecevable, meme avec de bons arguments sur le fond.",
    },
    { type: "h2", texte: "Quels recours utiliser selon votre situation ?", id: "types-recours" },
    { type: "p", texte: "**Recours gracieux**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Adresse a l administration qui a rendu la decision",
        "Utile si vous apportez des elements nouveaux",
      ],
    },
    { type: "p", texte: "**Recours hierarchique**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Adresse a l autorite superieure",
        "Pertinent dans certains cas de contestation administrative",
      ],
    },
    { type: "p", texte: "**Recours contentieux**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Devant le tribunal administratif",
        "A privilegier en cas d urgence, d OQTF ou de consequences graves",
      ],
    },
    {
      type: "p",
      texte: "La bonne strategie depend du motif de refus et de votre historique de sejour.",
    },
    { type: "h2", texte: "Comment construire un dossier de defense solide", id: "dossier-defense" },
    { type: "p", texte: "Un recours efficace repose sur des preuves utiles:" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Justificatifs de vie privee et familiale",
        "Insertion professionnelle (contrat, fiches de paie, attestations)",
        "Anciennete et continuite de presence",
        "Pieces medicales ou humanitaires selon le cas",
        "Argumentation juridique ciblee",
      ],
    },
    {
      type: "p",
      texte: "Evitez les recours generiques sans lien direct avec les motifs de la decision.",
    },
    { type: "h2", texte: "Plan d action en 72h apres notification", id: "actions-72h" },
    { type: "p", texte: "**Heure 0 a 24**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Lire la decision integralement",
        "Identifier le delai legal",
        "Rassembler les pieces vitales",
      ],
    },
    { type: "p", texte: "**Heure 24 a 48**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Structurer l argumentaire",
        "Preparer le recours adapte",
        "Solliciter un accompagnement juridique si besoin",
      ],
    },
    { type: "p", texte: "**Heure 48 a 72**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Deposer dans les formes et delais",
        "Conserver toutes preuves d envoi/depot",
        "Planifier la suite administrative",
      ],
    },
    { type: "p", texte: "Ce timing est crucial pour conserver vos droits." },
    {
      type: "h2",
      texte: "Comment reduire le risque de refus sur une future demande",
      id: "prevention-refus-futur",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Anticiper les depots",
        "Soigner la coherence documentaire",
        "Mettre a jour chaque changement de situation",
        "Preparer la dimension integration (langue, civique, projet)",
        "Conserver un historique administratif propre",
      ],
    },
    { type: "p", texte: "La prevention reste le meilleur moyen d eviter un nouveau blocage." },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Un refus ou une OQTF n est pas la fin du parcours: c est une phase ou la reactivite et la qualite du dossier font la difference. En respectant les delais, en choisissant le bon type de recours et en documentant votre situation de facon rigoureuse, vous maximisez vos chances de defendre efficacement vos droits.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Que faire en premier apres un refus de titre de sejour ?",
      reponse: "Lire la decision, noter le delai de recours et reunir immediatement les pieces utiles.",
    },
    {
      question: "Peut-on contester une OQTF ?",
      reponse: "Oui, des recours existent, mais les delais sont stricts et necessitent une action rapide.",
    },
    {
      question: "Un recours gracieux suffit-il ?",
      reponse: "Pas toujours. Selon la gravite et l urgence, un recours contentieux peut etre necessaire.",
    },
    {
      question: "Quels documents renforcent un recours ?",
      reponse: "Tout justificatif pertinent de vie familiale, d insertion professionnelle, d anciennete et de stabilite en France.",
    },
  ],
  videos: [
    { id: "8MyAxR3G-fU", titre: "Droits et devoirs en France : points essentiels" },
    { id: "faTI6V7m5Tk", titre: "Reperes institutions et procedures administratives" },
  ],
  sources: [
    {
      titre: "Service-Public.fr - Etranger en France : recours",
      url: "https://www.service-public.fr/particuliers/vosdroits/N110",
      type: "officiel",
      description: "Informations officielles sur le sejour et les voies administratives.",
    },
    {
      titre: "Legifrance - Code de justice administrative",
      url: "https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006070933/",
      type: "juridique",
      description: "Cadre legal des recours devant le juge administratif.",
    },
    {
      titre: "Vie-publique.fr - Immigration et droit des etrangers",
      url: "https://www.vie-publique.fr/fiches/23849-immigration-asile-etrangers-en-france-les-regles-en-vigueur",
      type: "article",
      description: "Synthese pedagogique sur les regles et evolutions.",
    },
  ],
  aLireAussi: [
    {
      slug: "renouvellement-titre-sejour-2026-anef-prefecture-documents-delais",
      ancre: "Renouveler correctement son titre de séjour",
    },
    {
      slug: "dossier-naturalisation-2026-documents-delais-prefecture-anef",
      ancre: "Constituer un dossier de naturalisation solide",
    },
    {
      slug: "prix-test-civique-2026-cout-tarif-titre-sejour-prefecture",
      ancre: "Tarifs des titres de séjour et test civique",
    },
    {
      slug: "titres-de-sejour-france-guide-complet-2026",
      ancre: "Tous les types de titres de séjour expliqués",
    },
  ],
};

export default article;
