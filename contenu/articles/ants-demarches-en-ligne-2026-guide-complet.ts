import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-ants-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/ants-demarches-en-ligne-2026-guide-complet`). L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont nominales.
 *
 * Le 20/10/2026, `ants-gouv-fr-2026-toutes-demarches-guide-complet` (même sujet) y a été fusionné et
 * redirigé en 301 (docs/seo/JOURNAL.md, geste `fusionne`). Chaque règle et chaque montant ont été relus
 * sur service-public ce jour-là ; les volumes de démarches, les délais « réels », le numéro de téléphone
 * et les tarifs non retrouvés sur une source officielle ont été retirés.
 */
const article: Article = {
  slug: "ants-demarches-en-ligne-2026-guide-complet",
  titre: "ANTS en ligne : carte d'identité, passeport, carte grise et permis, le guide pour ne pas se tromper",
  titreSeo: "ANTS démarches en ligne : le guide 2026",
  resume: "Ce que l'ANTS fait en ligne (carte d'identité, passeport, carte grise, permis), les prix officiels, la différence avec l'ANEF et les faux sites à éviter.",
  chapo: "L'ANTS est le site officiel de l'État pour la carte d'identité, le passeport, la carte grise et le permis de conduire. Beaucoup de démarches se font en ligne, mais pas toutes : pour la carte d'identité et le passeport, vous passez aussi en mairie. Voici quoi faire, où, et à quel prix officiel.",
  publieLe: "2026-04-28",
  modifieLe: "2026-10-20",
  minutes: 7,
  theme: "ants demarches en ligne",
  motsCles: [
    "ants demarches en ligne",
    "ants demarches",
    "ants demarche en ligne 2026",
    "ants gouv",
    "ants.gouv.fr",
    "ants 2026",
    "ants permis",
    "demarches administratives en ligne",
    "titre securise france",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop",
    alt: "Un ordinateur portable ouvert sur un bureau, pour faire une démarche en ligne",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  blocs: [
    { type: "h2", texte: "Qu'est-ce que l'ANTS, et que fait-elle ?", id: "qu-est-ce-que-ants" },
    {
      type: "p",
      texte: "L'ANTS, c'est l'Agence nationale des titres sécurisés. Elle dépend du ministère de l'Intérieur. Elle fabrique les papiers officiels difficiles à falsifier. Son site est [ants.gouv.fr](https://ants.gouv.fr).",
    },
    { type: "p", texte: "Sur ce site, vous trouvez quatre grandes familles de démarches :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "la **carte nationale d'identité** (CNI) : la pré-demande en ligne ;",
        "le **passeport** : la pré-demande en ligne ;",
        "la **carte grise** (le certificat d'immatriculation d'un véhicule) : achat, vente, changement ;",
        "le **permis de conduire** : première demande, perte, vol, échange, suivi de fabrication.",
      ],
    },
    {
      type: "p",
      texte: "Vous pouvez aussi suivre sur le site la fabrication de votre titre. Pour la carte d'identité, un SMS vous prévient quand elle est prête, si vous avez donné un numéro de portable ([service-public, F1341](https://www.service-public.gouv.fr/particuliers/vosdroits/F1341)).",
    },
    { type: "h2", texte: "ANTS ou ANEF : quel site pour les étrangers ?", id: "qui-utilise-ants-2026" },
    {
      type: "p",
      texte: "C'est l'erreur la plus fréquente. L'ANTS ne gère **pas** les titres de séjour. Un titre de séjour, c'est la carte qui vous autorise à vivre en France quand vous êtes étranger.",
    },
    {
      type: "p",
      texte: "Ces démarches passent par l'ANEF, qui est l'administration numérique des étrangers en France. Selon [service-public (R59398)](https://www.service-public.gouv.fr/particuliers/vosdroits/R59398), l'ANEF sert à valider un visa long séjour et à demander certains titres de séjour. Elle sert aussi pour la naturalisation, une autorisation de travail ou un document de voyage.",
    },
    {
      type: "tableau",
      entetes: ["Votre besoin", "Le bon site"],
      lignes: [
        ["Carte d'identité ou passeport (si vous êtes français, naturalisé compris)", "ANTS, puis la mairie"],
        ["Carte grise : achat, vente, changement", "ANTS"],
        ["Permis de conduire, échange d'un permis étranger", "ANTS"],
        ["Titre de séjour : premier titre, renouvellement", "ANEF"],
        ["Validation du visa long séjour", "ANEF"],
        ["Naturalisation", "ANEF"],
      ],
    },
    {
      type: "p",
      texte: "Pour l'ANEF, lisez notre guide [créer son compte ANEF pas à pas](/articles/compte-anef-creer-2026-guide-pas-a-pas). Pour échanger un permis obtenu à l'étranger, lisez [l'échange du permis de conduire étranger](/articles/echange-permis-conduire-etranger-france-2026-pays-accords-liste-complete).",
    },
    { type: "h2", texte: "Carte d'identité et passeport : en ligne, puis en mairie", id: "demarches-identite" },
    {
      type: "p",
      texte: "Pour ces deux papiers, tout ne se fait pas en ligne. Votre présence est obligatoire en mairie pour la prise d'empreintes ([F1341](https://www.service-public.gouv.fr/particuliers/vosdroits/F1341), [F14929](https://www.service-public.gouv.fr/particuliers/vosdroits/F14929)).",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Pré-demande sur le site de l'ANTS.** Elle est facultative, mais elle fait gagner du temps. Vous recevez un numéro ou un QR code à montrer en mairie.",
        "**Rendez-vous dans une mairie équipée.** Vous pouvez choisir n'importe quelle mairie équipée d'une station d'enregistrement, même loin de chez vous. Le moteur de recherche de l'ANTS donne les mairies et souvent les rendez-vous.",
        "**Dépôt en mairie.** Vous apportez les pièces, on prend vos empreintes.",
        "**Fabrication.** Elle prend plusieurs semaines, et plus avant l'été.",
        "**Retrait en personne.** Pour la carte d'identité, vous avez 3 mois. Après, elle est détruite.",
      ],
    },
    {
      type: "p",
      texte: "Le paiement se fait par un timbre fiscal : c'est une taxe que vous achetez en ligne ou dans un bureau de tabac agréé. Pour le passeport, vous pouvez l'acheter à la fin de la pré-demande ([F34752](https://www.service-public.gouv.fr/particuliers/vosdroits/F34752)).",
    },
    {
      type: "tableau",
      entetes: ["Papier", "Prix en France (timbre fiscal)", "Source"],
      lignes: [
        ["Carte d'identité, première demande ou renouvellement", "Gratuit", "service-public F1341, vérifié le 08/04/2026"],
        ["Carte d'identité perdue ou volée", "25 € (12,50 € en Guyane)", "service-public F1344"],
        ["Passeport d'un majeur", "86 €", "service-public F34752, vérifié le 05/08/2026"],
        ["Passeport d'un mineur de 15 à 17 ans", "42 €", "service-public F34752"],
        ["Passeport d'un mineur de moins de 15 ans", "17 €", "service-public F34752"],
      ],
      legende: "Prix lus le 20/10/2026. En Guyane et à Mayotte, certains montants diffèrent : vérifiez la fiche service-public.",
    },
    { type: "h2", texte: "Carte grise : acheter, vendre, déclarer en ligne", id: "demarches-vehicule" },
    {
      type: "p",
      texte: "**Vous achetez un véhicule d'occasion.** Vous avez 1 mois pour demander la nouvelle carte grise. Vous pouvez le faire sur le site de l'ANTS, sur l'application Simplimmat (pour certains véhicules) ou chez un professionnel habilité, qui facture ses frais en plus ([F1050](https://www.service-public.gouv.fr/particuliers/vosdroits/F1050)).",
    },
    {
      type: "p",
      texte: "Le prix de la carte grise varie selon le véhicule et la région. Service-public propose un simulateur. Vous payez par carte bancaire. Un certificat provisoire, à imprimer, vous permet de rouler en France pendant 1 mois.",
    },
    {
      type: "p",
      texte: "**Vous vendez ou donnez votre véhicule.** Vous déclarez la cession dans les 15 jours après la signature du certificat de cession. Vous recevez un code de cession, valable 15 jours, à donner à l'acheteur ([F1707](https://www.service-public.gouv.fr/particuliers/vosdroits/F1707)).",
    },
    { type: "h2", texte: "Permis de conduire : quelles démarches sur l'ANTS ?", id: "permis" },
    {
      type: "p",
      texte: "Le permis a ses propres pages, plus détaillées. Pour une première demande, lisez [les étapes et le prix du permis B sur l'ANTS](/articles/ants-permis-conduire-categorie-b-2026-demande-etapes-tarifs). Pour un permis perdu, volé, abîmé ou expiré, lisez [les démarches sur l'ANTS après une perte ou un vol](/articles/ants-permis-conduire-2026-echange-demande-suivi).",
    },
    { type: "h2", texte: "Comment éviter les faux sites de l'ANTS ?", id: "eviter-arnaques" },
    {
      type: "p",
      texte: "Des sites privés imitent l'ANTS et font payer une aide en plus du prix officiel. Ces sites ne sont pas interdits s'ils le disent clairement, mais vous n'en avez pas besoin.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Le site officiel finit par **ants.gouv.fr** (par exemple passeport.ants.gouv.fr).",
        "Tapez l'adresse vous-même. Ne cliquez pas sur une publicité en haut des résultats de recherche.",
        "Ne payez que le prix officiel : timbre fiscal ou taxes de la carte grise.",
        "Un professionnel de l'automobile habilité peut faire la carte grise pour vous, mais il fixe ses frais lui-même.",
      ],
    },
    {
      type: "p",
      texte: "Les arnaques visent aussi les étrangers, avec de faux sites de préfecture ou de faux avocats. Notre article [sur les arnaques qui visent les étrangers](/articles/arnaques-etrangers-france-2026-faux-avocats-prefecture-anef) donne les signes d'alerte.",
    },
    { type: "h2", texte: "Où trouver de l'aide gratuite ?", id: "support-aide" },
    {
      type: "p",
      texte: "Le site de l'ANTS a une aide en ligne et un formulaire de contact. Vous pouvez aussi aller dans un espace France services. Ce sont des guichets publics où un agent vous aide gratuitement à faire vos démarches en ligne.",
    },
    {
      type: "p",
      texte: "Si vous cherchez un rendez-vous en préfecture qui n'existe pas en ligne, lisez [que faire quand aucun rendez-vous n'est disponible](/articles/ants-rdv-indisponible-prefecture-2026-alternatives-solutions).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "L'ANTS gère la carte d'identité, le passeport, la carte grise et le permis. L'ANEF gère le séjour des étrangers et la naturalisation. Pour la carte d'identité et le passeport, la pré-demande en ligne est facultative, mais le passage en mairie est obligatoire. Payez seulement les prix officiels, sur un site qui finit par ants.gouv.fr.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quelle est la différence entre ANTS et ANEF ?",
      reponse: "L'ANTS gère les papiers sécurisés : carte d'identité, passeport, carte grise et permis de conduire. L'ANEF est le site des démarches des étrangers en France : validation du visa long séjour, titre de séjour, autorisation de travail, naturalisation. Ce sont deux sites officiels différents, et un compte sur l'un ne sert pas sur l'autre.",
    },
    {
      question: "Le service ANTS est-il gratuit ?",
      reponse: "L'accès au site de l'ANTS est gratuit. Vous payez seulement les frais officiels. Par exemple : 86 € de timbre fiscal pour le passeport d'un majeur, 25 € pour une carte d'identité perdue ou volée, et les taxes de la carte grise. Une première carte d'identité ou son renouvellement est gratuit selon service-public.",
    },
    {
      question: "Peut-on faire sa carte d'identité entièrement en ligne ?",
      reponse: "Non. La pré-demande se fait en ligne sur le site de l'ANTS, et elle est facultative. Ensuite, vous devez aller dans une mairie équipée d'une station d'enregistrement, pour la prise d'empreintes. Vous pouvez choisir n'importe quelle mairie équipée, même si elle n'est pas dans votre commune.",
    },
    {
      question: "Combien de temps pour déclarer la vente d'une voiture ?",
      reponse: "Vous avez 15 jours après la signature du certificat de cession pour déclarer la vente, sur le site de l'ANTS, sur l'application Simplimmat ou chez un professionnel habilité. Un code de cession, valable 15 jours, vous est donné à la fin : vous le transmettez à l'acheteur pour sa nouvelle carte grise.",
    },
  ],
  sources: [
    { titre: "Carte d'identité d'un majeur : première demande (F1341)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1341", type: "officiel", luLe: "2026-10-20" },
    { titre: "Carte d'identité perdue (F1344)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1344", type: "officiel", luLe: "2026-10-20" },
    { titre: "Passeport d'un majeur : première demande (F14929)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F14929", type: "officiel", luLe: "2026-10-20" },
    { titre: "Combien coûte un passeport ? (F34752)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34752", type: "officiel", luLe: "2026-10-20" },
    { titre: "Immatriculer un véhicule d'occasion (F1050)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1050", type: "officiel", luLe: "2026-10-20" },
    { titre: "Vendre ou donner son véhicule (F1707)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1707", type: "officiel", luLe: "2026-10-20" },
    { titre: "Administration numérique pour les étrangers en France, ANEF (R59398)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R59398", type: "officiel", luLe: "2026-10-20" },
  ],
};

export default article;
