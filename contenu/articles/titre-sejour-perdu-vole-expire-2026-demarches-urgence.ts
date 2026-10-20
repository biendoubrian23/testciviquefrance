import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-quotidien-immigration.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/titre-sejour-perdu-vole-expire-2026-demarches-urgence`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "titre-sejour-perdu-vole-expire-2026-demarches-urgence",
  titre: "Titre de séjour perdu, volé ou expiré : que faire en urgence, démarches et délais 2026",
  titreSeo: "Titre de séjour perdu, volé ou expiré : que faire en urgence, démarches et délais 2026",
  resume: "Déclaration de perte ou vol, demande de duplicata, titre expiré : vos droits pendant l'attente et les démarches à suivre immédiatement.",
  chapo: "Perte, vol ou expiration de votre titre de séjour : c'est une situation stressante qui concerne des milliers de personnes chaque année en France. Que faire en urgence ? Pouvez-vous continuer à travailler ? Risquez-vous l'expulsion ? Ce guide vous donne les démarches exactes à suivre en 2026, les délais à connaître et vos droits pendant la période d'attente.",
  publieLe: "2026-04-02",
  modifieLe: "2026-04-02",
  minutes: 11,
  theme: "titre de séjour perdu que faire",
  motsCles: [
    "titre de séjour perdu que faire",
    "carte de séjour volée démarches",
    "titre de séjour expiré France",
    "perte titre séjour urgence",
    "déclaration perte titre séjour",
    "duplicata titre de séjour",
    "titre séjour volé commissariat",
    "renouvellement titre séjour expiré",
    "travailler avec titre séjour expiré",
    "récépissé après perte titre séjour",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  blocs: [
    { type: "h2", texte: "Titre de séjour perdu : les démarches immédiates", id: "titre-perdu" },
    {
      type: "p",
      texte: "Si vous avez perdu votre titre de séjour, voici les étapes à suivre **dans les 48 heures** :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Déclaration de perte.** Rendez-vous en préfecture ou sous-préfecture pour remplir une **déclaration de perte**. Certaines préfectures acceptent la déclaration en ligne via ANEF.",
        "**Demande de duplicata.** Immédiatement après la déclaration de perte, déposez une demande de duplicata : Via **ANEF** (Administration numérique des étrangers en France) pour la plupart des titres Ou en préfecture si votre type de titre n'est pas encore dématérialisé",
        "**Documents requis** : Déclaration de perte Passeport en cours de validité 3 photos d'identité conformes Justificatif de domicile récent Timbre fiscal de **25 €** (montant 2026)",
      ],
    },
    {
      type: "p",
      texte: "**Vous recevrez un récépissé** en attendant la fabrication du nouveau titre. Ce récépissé vous maintient en situation régulière et vous autorise à travailler.",
    },
    { type: "h2", texte: "Titre de séjour volé : la procédure spécifique", id: "titre-vole" },
    {
      type: "p",
      texte: "En cas de vol, la procédure est légèrement différente car elle nécessite un **dépôt de plainte** :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Déposez plainte** au commissariat de police ou à la gendarmerie. Vous recevrez un **récépissé de dépôt de plainte** mentionnant le vol du titre de séjour.",
        "**Demandez un duplicata** en préfecture ou via ANEF, comme pour une perte.",
      ],
    },
    { type: "h3", texte: "Documents requis (en plus de la procédure perte) :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Récépissé de dépôt de plainte** (original)",
        "Tout autre document volé avec le titre (à mentionner dans la plainte)",
      ],
    },
    {
      type: "p",
      texte: "**Bon à savoir** : le dépôt de plainte peut aussi se faire en ligne via la **pré-plainte en ligne** sur pre-plainte-en-ligne.gouv.fr, mais vous devrez vous déplacer en commissariat pour signer.",
    },
    {
      type: "p",
      texte: "**Coût du duplicata** : 25 € (timbre fiscal) pour un vol comme pour une perte.",
    },
    {
      type: "h2",
      texte: "Titre de séjour expiré : êtes-vous en situation irrégulière ?",
      id: "titre-expire",
    },
    {
      type: "p",
      texte: "C'est la question qui stresse le plus. La réponse dépend de votre situation :",
    },
    { type: "h3", texte: "✅ Vous avez déposé une demande de renouvellement AVANT l'expiration :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous êtes en **situation régulière**",
        "Vous recevez un **récépissé de demande de renouvellement** qui prolonge vos droits",
        "Vous pouvez continuer à travailler, bénéficier de la Sécu, etc.",
      ],
    },
    { type: "h3", texte: "⚠️ Vous n'avez PAS déposé de demande avant l'expiration :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous êtes techniquement en **situation irrégulière**",
        "**Mais** : dans la pratique, les préfectures acceptent les demandes tardives si le retard est raisonnable (quelques semaines)",
        "Déposez votre demande le plus vite possible via ANEF ou en préfecture",
        "Plus le retard est long, plus le risque de refus augmente",
      ],
    },
    { type: "h3", texte: "❌ Votre titre a expiré depuis plus de 3-6 mois sans demande :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La situation est plus complexe",
        "Consultez un avocat en droit des étrangers ou une association spécialisée (CIMADE, GISTI)",
        "Un titre de séjour expiré ne signifie pas automatiquement une OQTF, mais le risque existe",
      ],
    },
    { type: "h2", texte: "Vos droits pendant la période d'attente", id: "droits-pendant-attente" },
    {
      type: "p",
      texte: "Avec un récépissé (que ce soit pour perte, vol ou renouvellement), vous conservez vos droits :",
    },
    {
      type: "tableau",
      entetes: ["Droit", "Avec récépissé", "Sans récépissé (titre expiré)"],
      lignes: [
        ["Séjour régulier en France", "✅ Oui", "❌ Non"],
        ["Droit au travail", "✅ Oui (si mention « autorise à travailler »)", "❌ Non"],
        ["Sécurité sociale / Ameli", "✅ Oui", "⚠️ Droits maintenus temporairement"],
        ["Allocations CAF", "✅ Oui", "⚠️ Suspension possible"],
        ["Voyage Schengen", "⚠️ Risqué (récépissé pas toujours accepté)", "❌ Non"],
        ["Ouverture de compte bancaire", "✅ Oui", "⚠️ Difficile"],
      ],
    },
    {
      type: "p",
      texte: "**Important** : informez votre employeur immédiatement en cas de perte/vol. Fournissez-lui une copie du récépissé dès réception. Un employeur ne peut pas vous licencier pour une perte de titre si vous êtes en cours de renouvellement.",
    },
    { type: "h2", texte: "Délais et coûts en 2026", id: "delais-couts" },
    { type: "h3", texte: "Délais moyens de délivrance du duplicata :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Récépissé** : immédiat à quelques jours après la demande",
        "**Nouveau titre (duplicata)** : 3 à 8 semaines en moyenne",
        "**Renouvellement (titre expiré)** : 2 à 4 mois en préfecture, variable selon les régions",
      ],
    },
    { type: "h3", texte: "Coûts :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Duplicata (perte/vol)** : 25 € (timbre fiscal)",
        "**Renouvellement** : variable selon le type de titre (75 € à 225 €)",
        "**Déclaration de perte/vol** : gratuite",
        "**Dépôt de plainte** : gratuit",
      ],
    },
    {
      type: "p",
      texte: "Le timbre fiscal s'achète en ligne sur **timbres.impots.gouv.fr** ou chez un buraliste agréé.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Perdre ou se faire voler son titre de séjour n'est pas une catastrophe si vous réagissez vite. Déclarez la perte ou le vol immédiatement, demandez un duplicata et conservez précieusement le récépissé. En cas de titre expiré, le dépôt rapide d'une demande de renouvellement vous protège. L'essentiel : ne restez jamais sans document opposable, le récépissé est votre bouclier juridique.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien coûte un duplicata de titre de séjour ?",
      reponse: "Le duplicata coûte 25 € sous forme de timbre fiscal, que ce soit pour une perte ou un vol. La déclaration de perte et le dépôt de plainte sont gratuits.",
    },
    {
      question: "Puis-je travailler avec un récépissé ?",
      reponse: "Oui, si votre récépissé porte la mention « autorise son titulaire à travailler ». C'est le cas pour les récépissés de renouvellement et de duplicata des titres autorisant le travail.",
    },
    {
      question: "Mon titre a expiré depuis 2 mois, que faire ?",
      reponse: "Déposez immédiatement une demande de renouvellement via ANEF ou en préfecture. Un retard raisonnable est généralement toléré. Plus vous attendez, plus la situation se complique. En cas de doute, consultez une association comme la CIMADE.",
    },
    {
      question: "Est-ce que je risque l'expulsion si mon titre est expiré ?",
      reponse: "Un titre expiré ne déclenche pas automatiquement une procédure d'expulsion. Cependant, vous êtes techniquement en situation irrégulière. Si vous êtes contrôlé, vous risquez une OQTF. Régularisez votre situation le plus rapidement possible.",
    },
  ],
  sources: [
    {
      titre: "Service-Public.fr, Perte ou vol de carte de séjour",
      url: "https://www.service-public.fr/particuliers/vosdroits/F11991",
      type: "officiel",
      description: "Procédure officielle en cas de perte ou vol de titre de séjour",
    },
    {
      titre: "ANEF : Démarches en ligne",
      url: "https://administration-etrangers-en-france.interieur.gouv.fr/",
      type: "officiel",
      description: "Plateforme de demande de duplicata et renouvellement en ligne",
    },
    {
      titre: "Pré-plainte en ligne",
      url: "https://www.pre-plainte-en-ligne.gouv.fr/",
      type: "officiel",
      description: "Service de pré-plainte en ligne du ministère de l'Intérieur",
    },
  ],
  aLireAussi: [
    { slug: "recepisse-titre-de-sejour-droits-duree-voyage", ancre: "Le récépissé de renouvellement" },
    {
      slug: "renouvellement-titre-sejour-2026-anef-prefecture-documents-delais",
      ancre: "Renouveler son titre de séjour",
    },
    {
      slug: "guide-anef-complet-2026-creer-compte-deposer-demande",
      ancre: "Signaler la perte sur ANEF",
    },
    {
      slug: "refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france",
      ancre: "Recours en cas de refus",
    },
  ],
};

export default article;
