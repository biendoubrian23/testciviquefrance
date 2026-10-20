import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-ants-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/ants-demarches-en-ligne-2026-guide-complet`). L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 *
 * Réécrit le 20/10/2026 (fusion de doublons) : l'article
 * `ants-gouv-fr-2026-toutes-demarches-guide-complet` y a été fusionné (son
 * adresse redirige ici en 301). Repris de lui : les portails officiels, les
 * règles contre les arnaques, le cas des étrangers en France (ANTS ou ANEF).
 * Retiré des deux articles faute de source officielle, ou parce que la source
 * officielle dit autre chose : le « top 10 » et ses volumes annuels, les
 * « 32 millions d'usagers », tous les délais (carte grise, permis, CNI,
 * passeport, échange), les montants non relus (duplicata permis 25 €, échange
 * 45 €, duplicata carte grise 30 €, passeport mineur 17 et 42 €, passeport
 * d'urgence 30 €), le visa long séjour (il ne se demande pas sur l'ANTS),
 * « 100 % en ligne » (la CNI et le passeport exigent un passage en mairie),
 * les horaires du 34 00 (ants.gouv.fr indique 9 h à 17 h en semaine, pas
 * 7 h 45 à 19 h ni le samedi), la réponse « en 5 à 10 jours » (le site dit
 * moins de 48 heures), le « médiateur ANTS » et les « 2 700 France Services ».
 * Chaque fait restant est sourcé, lu le 20/10/2026.
 */
const article: Article = {
  slug: "ants-demarches-en-ligne-2026-guide-complet",
  titre: "ANTS en 2026 : vos démarches en ligne, les vrais prix et les pièges à éviter",
  titreSeo: "ANTS démarches en ligne : le guide 2026",
  resume: "Permis, carte grise, carte d'identité, passeport : les sites officiels de l'ANTS, les prix vérifiés, l'aide gratuite et les faux sites à éviter en 2026.",
  chapo: "L'ANTS, devenue **France Titres**, gère en ligne vos démarches de **permis de conduire**, de **carte grise**, de **carte d'identité** et de **passeport**. Le site officiel est ==ants.gouv.fr==, et vous n'y payez que les taxes prévues par l'État. Voici les bons sites, les prix vérifiés, l'aide gratuite et les pièges à éviter.",
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
    "ants france titres",
    "ants permis",
    "ants carte grise",
    "ants telephone 3400",
    "faux site ants",
    "ants ou anef",
    "titre securise france",
    "demarches administratives en ligne",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop",
    alt: "Une personne travaille sur un ordinateur portable posé sur une table",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  blocs: [
    { type: "h2", texte: "Qu'est-ce que l'ANTS, et que fait-on sur son site ?", id: "qu-est-ce-que-ants" },
    {
      type: "p",
      texte: "L'ANTS, c'est l'Agence nationale des titres sécurisés. Elle porte aujourd'hui le nom de **France Titres**. Un titre sécurisé, c'est un document officiel difficile à copier : permis, carte grise, carte d'identité, passeport. Son [site d'accueil](https://ants.gouv.fr/) annonce quatre familles de démarches.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**L'immatriculation** : la carte grise de votre véhicule.",
        "**Le permis de conduire** : inscription à l'examen, fabrication du permis, échange d'un permis étranger.",
        "**La carte d'identité et le passeport** : une pré-demande en ligne, puis un passage en mairie.",
        "**L'application France Identité** : votre carte d'identité sur le téléphone.",
      ],
    },
    {
      type: "p",
      texte: "Tout ne se fait donc pas en ligne de bout en bout. Pour la carte d'identité et le passeport, vous devez aller au guichet d'une mairie. La pré-demande en ligne fait gagner du temps, mais elle n'est pas obligatoire, selon [service-public](https://www.service-public.gouv.fr/particuliers/vosdroits/F1342).",
    },
    { type: "h2", texte: "Quels sont les vrais sites de l'ANTS ?", id: "les-bons-sites-ants" },
    {
      type: "p",
      texte: "Le portail [ants.gouv.fr](https://ants.gouv.fr/) renvoie vers trois sites, un par famille de démarches. Leur adresse se termine toujours par **.ants.gouv.fr**.",
    },
    {
      type: "tableau",
      entetes: ["Site officiel", "À quoi il sert"],
      lignes: [
        ["ants.gouv.fr", "Le portail d'entrée, l'aide et le contact."],
        ["immatriculation.ants.gouv.fr", "La carte grise : achat, vente, changement d'adresse."],
        ["permisdeconduire.ants.gouv.fr", "Le permis : inscription, fabrication, échange, permis international."],
        ["passeport.ants.gouv.fr", "La pré-demande de carte d'identité et de passeport."],
        ["france-identite.gouv.fr", "L'application France Identité."],
      ],
      legende: "Source : liens du portail ants.gouv.fr, lus le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Sur le site du permis, la [liste des démarches en ligne](https://permisdeconduire.ants.gouv.fr/demarches-en-ligne) comprend six démarches. Vous pouvez vous inscrire à l'examen, demander la fabrication du permis ou un permis international. Vous pouvez aussi échanger un permis étranger, signaler une erreur et obtenir le permis numérique.",
    },
    {
      type: "p",
      texte: "Pour le détail du permis B, lisez notre guide [demande de permis B sur l'ANTS](/articles/ants-permis-conduire-categorie-b-2026-demande-etapes-tarifs). Pour un permis obtenu hors de France, voyez la [liste des pays qui ont un accord d'échange](/articles/echange-permis-conduire-etranger-france-2026-pays-accords-liste-complete).",
    },
    { type: "h2", texte: "Combien coûtent les démarches en 2026 ?", id: "couts-officiels" },
    {
      type: "p",
      texte: "Le service de l'ANTS ne coûte rien. Vous payez seulement les taxes fixées par l'État. Un timbre fiscal, c'est une taxe que vous achetez à l'avance, en ligne ou chez un buraliste agréé. Il existe seulement sous forme électronique, selon [service-public](https://www.service-public.gouv.fr/particuliers/vosdroits/F21258).",
    },
    {
      type: "tableau",
      entetes: ["Démarche", "Ce que vous payez", "Source"],
      lignes: [
        ["Carte d'identité, première demande", "Gratuit.", "service-public, fiche F1342"],
        ["Carte d'identité perdue (majeur)", "Timbre fiscal de 25 € (12,50 € en Guyane).", "service-public, fiche F1344"],
        ["Passeport d'un majeur, première demande", "Timbre fiscal de 86 € (43 € en Guyane).", "service-public, fiche F14929"],
        ["Carte grise", "Quatre taxes, dont une taxe régionale et une taxe fixe de 11 €, plus 2,76 € d'acheminement.", "service-public, fiche F19211"],
      ],
      legende: "Montants lus sur service-public le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Le prix d'une carte grise dépend de votre région et du véhicule. Le [simulateur officiel](https://www.service-public.fr/simulateur/calcul/cout-certificat-immatriculation) le calcule pour vous. Sur le site de l'ANTS, vous payez par carte bancaire ([fiche F19211](https://www.service-public.gouv.fr/particuliers/vosdroits/F19211)).",
    },
    {
      type: "p",
      texte: "Pour la carte d'identité perdue, le timbre de 25 € est indiqué sur la [fiche F1344](https://www.service-public.gouv.fr/particuliers/vosdroits/F1344). Pour le passeport d'un majeur, le timbre de 86 € figure sur la [fiche F14929](https://www.service-public.gouv.fr/particuliers/vosdroits/F14929). Si vous faites la pré-demande en ligne, vous achetez le timbre à la fin de la démarche.",
    },
    {
      type: "p",
      texte: "Un garage ou un professionnel agréé peut aussi faire votre carte grise. Il facture alors un service en plus des taxes, et il fixe ce prix librement. C'est légal, mais ce n'est pas obligatoire : la démarche en ligne sur l'ANTS reste possible sans ce surcoût.",
    },
    { type: "h2", texte: "Comment créer votre compte et faire une démarche ?", id: "compte-ants" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Ouvrez ants.gouv.fr en tapant l'adresse vous-même.",
        "Connectez-vous avec FranceConnect, le bouton qui reprend un compte que vous avez déjà (impots.gouv.fr, ameli.fr…), ou créez un compte ANTS.",
        "Choisissez votre démarche et préparez vos pièces en format numérique.",
        "Payez les taxes en ligne si la démarche en demande.",
        "Suivez votre dossier dans votre espace, avec « Suivre ma démarche en ligne ».",
      ],
    },
    {
      type: "p",
      texte: "Pour la carte d'identité et le passeport, il reste une étape : le rendez-vous en mairie. Vous pouvez aller dans n'importe quelle mairie équipée, même loin de chez vous ([fiche F14929](https://www.service-public.gouv.fr/particuliers/vosdroits/F14929)). Beaucoup de mairies demandent un rendez-vous. Si vous n'en trouvez pas, nos pistes sont dans l'article sur les [rendez-vous introuvables](/articles/ants-rdv-indisponible-prefecture-2026-alternatives-solutions).",
    },
    {
      type: "p",
      texte: "Service-public ne donne pas de délai chiffré pour la carte d'identité. Il indique qu'il faut compter plusieurs semaines, et plus encore avant l'été. Faites donc votre demande tôt si vous prévoyez un voyage.",
    },
    { type: "h2", texte: "Étranger en France : ANTS ou ANEF ?", id: "etrangers-ants-anef" },
    {
      type: "p",
      texte: "Les deux sites sont officiels, mais ils ne font pas la même chose. L'ANTS gère le permis et la carte grise de toute personne qui vit en France. L'ANEF (Administration numérique pour les étrangers en France) est le site du ministère de l'Intérieur pour le séjour des étrangers.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Sur l'ANTS** : échanger votre permis étranger, faire la carte grise d'une voiture achetée en France, demander une carte d'identité ou un passeport français une fois devenu Français.",
        "**Sur l'ANEF** : demander ou renouveler un titre de séjour, la carte qui vous autorise à vivre en France, et demander la naturalisation, c'est-à-dire la nationalité française.",
      ],
    },
    {
      type: "p",
      texte: "Le titre de séjour ne se demande jamais sur l'ANTS. Pour commencer côté séjour, suivez notre guide [créer votre compte ANEF](/articles/compte-anef-creer-2026-guide-pas-a-pas). Pour la nationalité, voyez le [guide de la naturalisation](/articles/naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet). Une fois Français, vous demandez votre carte d'identité comme tout le monde, en mairie.",
    },
    { type: "h2", texte: "Comment éviter les faux sites et les arnaques ?", id: "eviter-arnaques" },
    {
      type: "p",
      texte: "Des sites privés imitent l'ANTS et font payer des démarches que vous pouvez faire seul. D'autres messages se font passer pour l'ANTS afin de voler vos données. Quelques réflexes simples vous protègent.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Tapez l'adresse ants.gouv.fr vous-même, au lieu de cliquer sur une publicité.",
        "Vérifiez que l'adresse se termine par .ants.gouv.fr ou .gouv.fr.",
        "Comparez le prix demandé avec les taxes officielles ci-dessus.",
        "Ne donnez jamais vos codes de connexion par téléphone, SMS ou courriel.",
      ],
    },
    {
      type: "p",
      texte: "Cette vigilance compte d'autant plus depuis avril 2026. Le 15 avril 2026, l'ANTS a détecté un incident de sécurité sur son portail. Selon son [point d'étape du 21 avril 2026](https://permisdeconduire.ants.gouv.fr/toute-l-actualite/incident-de-securite-relatif-au-portail-antsgouvfr-point-detape-du-21-avril-2026), 11,7 millions de comptes seraient concernés. Il s'agit de données d'identité : nom, adresse électronique, date de naissance.",
    },
    {
      type: "p",
      texte: "L'ANTS précise que les pièces jointes et les données biométriques ne sont pas touchées. Elle demande de changer votre mot de passe à la prochaine connexion. Elle conseille aussi de se méfier des SMS, appels et courriels qui semblent venir d'elle.",
    },
    {
      type: "p",
      texte: "Les arnaques visent souvent les étrangers en France, avec de faux conseillers ou de faux sites de préfecture. Notre article sur les [arnaques qui visent les étrangers](/articles/arnaques-etrangers-france-2026-faux-avocats-prefecture-anef) décrit les signaux d'alerte.",
    },
    { type: "h2", texte: "Où trouver une aide gratuite ?", id: "support-aide" },
    {
      type: "p",
      texte: "La page [Aide et contact](https://ants.gouv.fr/contactez-nous) de l'ANTS donne trois canaux, tous gratuits.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Le formulaire en ligne** : c'est le moyen le plus efficace, selon l'ANTS, avec une réponse en moins de 48 heures.",
        "**Le téléphone** : le **3400** en France métropolitaine (numéro non surtaxé), ou le 09 70 83 07 07 depuis l'outre-mer et l'étranger. Le centre répond du lundi au vendredi, de 9 h à 17 h.",
        "**L'aide sur place** : un agent d'un point numérique ou d'un espace France Services vous aide à faire la démarche en ligne.",
      ],
    },
    {
      type: "p",
      texte: "Les personnes sourdes ou malentendantes ont aussi un accès adapté au téléphone, signalé sur la même page. Aucune aide officielle n'est payante.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Passez toujours par **ants.gouv.fr**, que vous tapez vous-même. Ne payez que les taxes officielles. Pour la carte d'identité et le passeport, prévoyez un passage en mairie. Pour un titre de séjour, ce n'est pas l'ANTS mais l'ANEF. En cas de doute, appelez le 3400 ou allez dans un espace France Services.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Le site de l'ANTS est-il gratuit ?",
      reponse: "Oui. Le service de l'ANTS ne coûte rien. Vous payez seulement les taxes prévues par l'État : par exemple 86 € de timbre fiscal pour un passeport de majeur, ou les taxes de la carte grise. Un site qui facture en plus des frais de dossier n'est pas le site officiel, même s'il en a l'apparence.",
    },
    {
      question: "Comment joindre l'ANTS par téléphone ?",
      reponse: "Composez le 3400 depuis la France métropolitaine : le numéro n'est pas surtaxé. Depuis l'outre-mer ou l'étranger, composez le 09 70 83 07 07. Le centre répond du lundi au vendredi, de 9 h à 17 h, heure de Paris. L'ANTS conseille aussi son formulaire en ligne, avec une réponse en moins de 48 heures.",
    },
    {
      question: "Quelle est la différence entre l'ANTS et l'ANEF ?",
      reponse: "L'ANTS gère le permis de conduire, la carte grise, la carte d'identité et le passeport. L'ANEF gère le séjour des étrangers : le titre de séjour, son renouvellement et la naturalisation. Un étranger qui échange son permis va donc sur l'ANTS, mais il demande son titre de séjour sur l'ANEF.",
    },
    {
      question: "Peut-on faire sa carte d'identité entièrement en ligne ?",
      reponse: "Non. Vous pouvez faire une pré-demande en ligne sur le site de l'ANTS, ce qui fait gagner du temps. Mais vous devez ensuite déposer le dossier en personne dans une mairie équipée. Beaucoup de mairies demandent un rendez-vous. La première carte d'identité est gratuite ; une carte perdue coûte 25 €.",
    },
  ],
  sources: [
    {
      titre: "France Titres (ANTS) : page d'accueil et sites des démarches",
      url: "https://ants.gouv.fr/",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "France Titres (ANTS) : Aide et contact",
      url: "https://ants.gouv.fr/contactez-nous",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "France Titres (ANTS) : démarches en ligne du permis de conduire",
      url: "https://permisdeconduire.ants.gouv.fr/demarches-en-ligne",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "France Titres (ANTS) : incident de sécurité, point d'étape du 21 avril 2026",
      url: "https://permisdeconduire.ants.gouv.fr/toute-l-actualite/incident-de-securite-relatif-au-portail-antsgouvfr-point-detape-du-21-avril-2026",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte d'identité, première demande (fiche F1342)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1342",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte d'identité d'un majeur, renouvellement en cas de perte (fiche F1344)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1344",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : passeport d'un majeur, première demande (fiche F14929)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F14929",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : passeport, comment acheter un timbre fiscal ? (fiche F21258)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F21258",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : quel est le coût du certificat d'immatriculation ? (fiche F19211)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F19211",
      type: "officiel",
      luLe: "2026-10-20",
    },
  ],
};

export default article;
