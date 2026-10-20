import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-preparer-depart-france-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/preparer-depart-france-2026-checklist-documents-avant-avion`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "preparer-depart-france-2026-checklist-documents-avant-avion",
  titre: "Préparer son départ pour la France 2026 : la checklist complète avant l'avion",
  titreSeo: "Préparer son départ pour la France 2026 : la checklist complète avant l'avion",
  resume: "Acte de naissance, traductions assermentées, apostille, argent, assurance santé, logement : la checklist de pré-départ pour arriver en France sans galère administrative. Tout ce qu'il faut régler dans votre pays avant de décoller.",
  chapo: "Le visa est dans le passeport, le billet est réservé, et soudain, le grand saut approche. Les semaines avant le départ pour la France sont décisives : ce que vous **préparez et emportez** depuis votre pays vous évitera des mois de galère administrative une fois sur place. Un acte de naissance non traduit, un diplôme resté au pays, une assurance oubliée, et la moindre démarche en France peut se transformer en parcours du combattant.",
  publieLe: "2026-06-25",
  modifieLe: "2026-06-25",
  minutes: 13,
  theme: "préparer départ france",
  motsCles: [
    "préparer départ france",
    "checklist avant de partir en france",
    "documents à emporter en france",
    "traduction assermentée documents france",
    "apostille acte de naissance france",
    "que faire avant de partir en france",
    "premiers jours en france étranger",
    "budget arrivée france étudiant",
    "assurance santé arrivée france",
    "logement étudiant france arrivée",
    "bagage administratif france",
    "s'installer en france étranger 2026",
    "acte de naissance traduction france",
    "arnaque logement france étranger",
    "préparer voyage études france",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
  },
  blocs: [
    {
      type: "p",
      texte: "Ce guide est une **checklist pratique de pré-départ**, pensée pour les étudiants, salariés et nouveaux arrivants en France en 2026. Documents originaux et traductions assermentées, copies à prévoir, argent et moyens de paiement, assurance, logement, et le fameux « bagage administratif » : voici tout ce qu'il faut régler **avant de monter dans l'avion**, dans le bon ordre.",
    },
    {
      type: "h2",
      texte: "Les documents officiels à emporter absolument",
      id: "documents-officiels-emporter",
    },
    {
      type: "p",
      texte: "Certains documents sont **impossibles ou très longs à obtenir depuis la France**. Récupérez-les dans votre pays, en plusieurs exemplaires, avant de partir.",
    },
    { type: "p", texte: "**À emporter en original + copies :**" },
    { type: "p", texte: "✅ **Passeport** avec le visa (VLS-TS) + anciens passeports" },
    {
      type: "p",
      texte: "✅ **Acte de naissance** récent (idéalement copie intégrale) : pièce maîtresse pour quasiment toutes les démarches",
    },
    { type: "p", texte: "✅ **Diplômes et relevés de notes** (originaux)" },
    { type: "p", texte: "✅ **Attestation d'admission** ou contrat de travail" },
    {
      type: "p",
      texte: "✅ **Acte de mariage** / livret de famille si vous êtes marié ou avez des enfants",
    },
    { type: "p", texte: "✅ **Carnet de vaccination** et dossier médical (ordonnances, antécédents)" },
    { type: "p", texte: "✅ **Permis de conduire** (utile pour un éventuel échange)" },
    { type: "p", texte: "✅ Photos d'identité **aux normes françaises** (plusieurs jeux)" },
    {
      type: "encadre",
      texte: "💡 **Règle d'or :** pour chaque document important, prévoyez **l'original + 2 photocopies**, et une **version scannée** stockée dans le cloud et sur votre téléphone. Vous serez surpris du nombre de fois où on vous demandera une copie.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Faire traduire ses documents : la traduction assermentée",
      id: "traductions-assermentees",
    },
    {
      type: "p",
      texte: "Les administrations françaises exigent que les documents rédigés dans une langue étrangère soient accompagnés d'une **traduction en français par un traducteur assermenté** (traducteur agréé près une cour d'appel).",
    },
    { type: "p", texte: "**Documents à faire traduire en priorité :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Acte de naissance",
        "Acte de mariage / livret de famille",
        "Diplômes (pour une équivalence ENIC-NARIC ou une inscription)",
        "Permis de conduire (pour l'échange)",
      ],
    },
    { type: "p", texte: "**Deux options :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Faire traduire dans votre pays** par un traducteur reconnu (parfois moins cher) : mais certaines préfectures préfèrent un traducteur assermenté **français**.",
        "**Faire traduire en France** par un traducteur inscrit sur la liste d'une cour d'appel (liste consultable sur le site de la **Cour de cassation**). Plus sûr pour être accepté partout.",
      ],
    },
    {
      type: "encadre",
      texte: "⚠️ Selon votre pays et le document, une **légalisation** ou une **apostille** peut être exigée pour authentifier l'original avant traduction. Renseignez-vous auprès du consulat de France de votre pays **avant** de partir : l'apostille s'obtient dans le pays d'origine, pas en France.",
      ton: "bleu",
    },
    {
      type: "p",
      texte: "**Conseil budget :** comptez quelques dizaines d'euros par document. Faites traduire au moins l'acte de naissance avant de partir, c'est celui qu'on vous réclamera le plus vite.",
    },
    { type: "h2", texte: "Argent, moyens de paiement et premier budget", id: "argent-banque" },
    {
      type: "p",
      texte: "Les premières semaines coûtent cher (caution de logement, premiers achats, transports) **avant** d'avoir un compte bancaire français opérationnel. Anticipez.",
    },
    { type: "p", texte: "**Avant de partir :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Prévenez votre **banque d'origine** de votre départ pour que votre carte fonctionne à l'étranger.",
        "Emportez une **carte bancaire internationale** (Visa/Mastercard) utilisable en France.",
        "Gardez un **peu d'espèces en euros** pour les premiers jours (transport, repas).",
        "Préparez vos **justificatifs de ressources** (attestation bancaire, bourse) : utiles aussi pour ouvrir un compte et louer un logement.",
      ],
    },
    {
      type: "p",
      texte: "**Budget de démarrage à prévoir :** au-delà du loyer, comptez **le premier loyer + la caution (souvent 1 mois)**, soit fréquemment **2 mois de loyer d'avance**, plus quelques centaines d'euros pour les frais d'installation (literie, courses, carte SIM, transport).",
    },
    {
      type: "encadre",
      texte: "💡 Des **néo-banques** (comptes ouvrables en ligne, parfois avant l'arrivée ou très vite après) peuvent dépanner les premiers jours, le temps d'ouvrir un compte dans une banque traditionnelle avec justificatif de domicile.",
      ton: "bleu",
    },
    { type: "h2", texte: "Assurance et santé : se couvrir dès l'arrivée", id: "assurance-sante" },
    {
      type: "p",
      texte: "Vous ne serez **pas immédiatement** couvert par la Sécurité sociale française à votre arrivée : l'affiliation prend du temps. Il faut donc un filet de sécurité.",
    },
    { type: "p", texte: "**Avant le départ :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Souscrivez une **assurance santé / voyage** couvrant vos **premières semaines** en France (souvent exigée pour le visa).",
        "Étudiants : vous vous affilierez **gratuitement à la Sécurité sociale étudiante** une fois sur place, mais prévoyez une couverture pour la période de transition.",
        "Faites un **bilan médical et dentaire** dans votre pays (les soins sont parfois moins chers et vous gagnez du temps).",
        "Emportez vos **ordonnances** (avec la dénomination internationale des médicaments) et une réserve de vos traitements en cours.",
      ],
    },
    {
      type: "p",
      texte: "**À l'arrivée :** affiliez-vous à l'**Assurance maladie** (ameli.fr) pour obtenir un numéro de Sécurité sociale puis votre **carte Vitale**, et pensez à une **complémentaire santé (mutuelle)** pour les frais non remboursés.",
    },
    {
      type: "h2",
      texte: "Logement et premiers jours : ne pas arriver les mains vides",
      id: "logement-arrivee",
    },
    {
      type: "p",
      texte: "Arriver sans solution d'hébergement est la pire situation. Même provisoire, sécurisez un toit avant de décoller.",
    },
    { type: "p", texte: "**Options à préparer avant le départ :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Logement CROUS** (étudiants) : à demander très tôt, les places sont limitées.",
        "**Foyer, résidence étudiante, colocation** réservée à distance.",
        "**Hébergement temporaire** (chez un proche, auberge, location courte durée) pour les premiers jours, le temps de visiter.",
        "**Attestation d'hébergement / attestation d'accueil** si vous logez chez quelqu'un.",
      ],
    },
    {
      type: "encadre",
      texte: "⚠️ Méfiez-vous des **arnaques au logement à distance** : ne versez jamais de caution avant d'avoir une vraie preuve (bail, contact vérifié). Un « propriétaire » qui réclame de l'argent par virement avant toute visite, sans jamais être joignable, est un signal d'alerte classique.",
      ton: "bleu",
    },
    { type: "p", texte: "**À prévoir aussi :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Un **adaptateur de prise** électrique (prises françaises type E).",
        "Votre **téléphone débloqué** pour mettre une carte SIM française (Free, Orange, SFR, Bouygues).",
        "Une trousse de première installation (quelques affaires pour tenir une semaine sans tout racheter).",
      ],
    },
    { type: "h2", texte: "La checklist finale des 7 derniers jours", id: "checklist-finale" },
    { type: "p", texte: "Avant de fermer la valise, ce dernier passage en revue :" },
    { type: "p", texte: "**Documents (dans le bagage à main, jamais en soute) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "[ ] Passeport + visa VLS-TS",
        "[ ] Acte de naissance (+ traduction assermentée) et copies",
        "[ ] Diplômes, relevés, attestation d'admission / contrat de travail",
        "[ ] Justificatifs de ressources",
        "[ ] Attestation d'assurance santé",
        "[ ] Réservation de logement / attestation d'hébergement",
        "[ ] Photos d'identité aux normes",
        "[ ] Versions scannées de tout, dans le cloud",
      ],
    },
    { type: "p", texte: "**Argent & téléphone :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "[ ] Carte bancaire internationale + espèces en euros",
        "[ ] Banque d'origine prévenue du départ",
        "[ ] Téléphone débloqué + adaptateur de prise",
      ],
    },
    { type: "p", texte: "**À l'esprit, pour l'arrivée :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "[ ] Valider le **VLS-TS sur ANEF dans les 3 mois**",
        "[ ] Ouvrir un compte bancaire, prendre une SIM",
        "[ ] S'affilier à l'Assurance maladie, demander l'APL (CAF)",
      ],
    },
    {
      type: "encadre",
      texte: "📋 Pour la suite, enchaînez avec notre guide des **papiers à obtenir une fois en France** et, si vous passez par un consulat, nos conseils pour **réussir votre rendez-vous visa**.",
      ton: "bleu",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Bien préparer son départ, c'est s'épargner des semaines de blocage administratif une fois en France. La logique tient en une phrase : **tout ce qui est difficile à obtenir à distance, récupérez-le dans votre pays** : actes d'état civil, diplômes, traductions assermentées, apostilles. Ajoutez un filet de sécurité financier pour les premières semaines, une assurance santé pour la transition, et une solution de logement même provisoire. Gardez tous vos documents en bagage à main, jamais en soute, et une copie scannée dans le cloud. Avec cette checklist cochée, vous arrivez en France serein, prêt à enchaîner les bonnes démarches, à commencer par la validation de votre VLS-TS dans les trois mois.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quels documents faut-il absolument emporter en venant en France ?",
      reponse: "En priorité : passeport avec visa, acte de naissance récent (avec traduction assermentée), diplômes et relevés de notes, attestation d'admission ou contrat de travail, justificatifs de ressources, attestation d'assurance santé et justificatif de logement. Emportez les originaux + copies, et gardez une version scannée dans le cloud.",
    },
    {
      question: "Faut-il faire traduire ses documents avant de partir ?",
      reponse: "Oui, au moins l'acte de naissance, car les administrations françaises exigent une traduction en français par un traducteur assermenté. Selon votre pays, une apostille ou une légalisation de l'original peut aussi être nécessaire, et elle s'obtient dans le pays d'origine, pas en France. Renseignez-vous auprès du consulat de France avant le départ.",
    },
    {
      question: "Combien d'argent prévoir pour les premières semaines en France ?",
      reponse: "Au-delà du loyer, prévoyez souvent l'équivalent de 2 mois de loyer (premier loyer + caution) plus quelques centaines d'euros de frais d'installation. Emportez une carte bancaire internationale et un peu d'espèces en euros, le temps d'ouvrir un compte bancaire français.",
    },
    {
      question: "Suis-je couvert par la Sécurité sociale dès mon arrivée ?",
      reponse: "Non, l'affiliation à l'Assurance maladie prend du temps après l'arrivée. Souscrivez une assurance santé couvrant vos premières semaines (souvent exigée pour le visa), puis affiliez-vous sur ameli.fr pour obtenir votre numéro de Sécurité sociale et votre carte Vitale. Les étudiants bénéficient de la Sécurité sociale étudiante gratuite une fois affiliés.",
    },
    {
      question: "Comment éviter les arnaques au logement avant d'arriver ?",
      reponse: "Ne versez jamais de caution par virement à un « propriétaire » jamais joignable et qui refuse toute visite. Privilégiez les logements CROUS, les résidences étudiantes reconnues ou un hébergement temporaire vérifié pour les premiers jours, puis visitez sur place avant de signer un bail.",
    },
  ],
  sources: [
    {
      titre: "Service-Public.fr, Traduction de documents pour une démarche administrative",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34922",
      type: "officiel",
      description: "Règles officielles sur la traduction par un traducteur assermenté et la légalisation / apostille des documents étrangers.",
    },
    {
      titre: "Service-Public.fr, Légalisation et apostille d'un document",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1402",
      type: "officiel",
      description: "Explications officielles sur l'authentification (apostille, légalisation) des actes établis à l'étranger.",
    },
    {
      titre: "Campus France : Préparer son séjour et son arrivée",
      url: "https://www.campusfrance.org/fr/preparer-son-depart-pour-la-france",
      type: "officiel",
      description: "Conseils officiels de Campus France pour préparer son départ : documents, logement, budget et formalités.",
    },
    {
      titre: "Ameli.fr, Assurance maladie pour les personnes arrivant en France",
      url: "https://www.ameli.fr/assure/droits-demarches/situations-particulieres/personnes-nees-etranger",
      type: "officiel",
      description: "Démarches d'affiliation à l'Assurance maladie pour une personne arrivant de l'étranger.",
    },
  ],
  aLireAussi: [
    {
      slug: "entretien-visa-consulat-ambassade-france-2026-reussir-visa-long-sejour",
      ancre: "Réussir son rendez-vous visa au consulat",
    },
    {
      slug: "papiers-documents-obtenir-arrivee-france-2026-ou-comment-demander",
      ancre: "Tous les papiers à obtenir en arrivant",
    },
    {
      slug: "reconnaissance-diplomes-etrangers-france-2026-enic-naric-equivalences",
      ancre: "Faire reconnaître son diplôme (ENIC-NARIC)",
    },
    {
      slug: "premiers-pas-france-etranger-banque-logement-caf-ameli",
      ancre: "Premiers pas en France : banque, CAF, Ameli",
    },
  ],
};

export default article;
