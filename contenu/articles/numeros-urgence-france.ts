import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 22/10/2026 (`docs/seo/ROBOT.md`).
 * Requête visée : « numéro urgence france » (1 k à 10 k recherches par mois,
 * Planificateur de mots clés, 20/10/2026). Famille « vie en France et culture
 * civique ». Le référentiel de l'examen civique cite « les numéros d'urgence »
 * dans la thématique « Vivre dans la société française » (accès aux soins).
 * Liste et règles relues sur service-public (F33954, vérifiée le 25/08/2026)
 * le 22/10/2026.
 */
const article: Article = {
  slug: "numeros-urgence-france",
  titre: "Numéros d'urgence en France : 15, 17, 18 ou 112, lequel appeler et que dire ?",
  titreSeo: "Numéros d'urgence en France : 15, 17, 18 ou 112 ?",
  resume: "15, 17, 18, 112, 114, 115, 119 : quel numéro d'urgence appeler en France, que dire au téléphone, et ce qu'en attend l'examen civique.",
  chapo: "Pour une urgence médicale, appelez le ==15==. Pour un danger ou une agression, le ==17==. Pour un incendie ou un accident, le ==18==. Le ==112== marche partout en Europe et vous oriente vers le bon service. Ces appels sont gratuits, même sans forfait.",
  publieLe: "2026-10-22",
  modifieLe: "2026-10-22",
  minutes: 7,
  theme: "numéros d'urgence en France",
  motsCles: [
    "numéro urgence france",
    "numéros d'urgence",
    "numéro d'urgence 112",
    "15 17 18 112",
    "numéro samu",
    "0800 112 112",
    "appel d'urgence sans forfait",
    "numéros d'urgence examen civique",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/numeros-urgence-france.webp",
    alt: "Deux véhicules rouges de sapeurs-pompiers garés dans une rue, devant des maisons",
    largeur: 1023,
    hauteur: 575,
    credit: "Mic V., via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/33756577@N08/18884633743",
  },
  blocs: [
    {
      type: "h2",
      texte: "Quel numéro appeler, selon la situation ?",
    },
    {
      type: "p",
      texte: "En France, chaque grand service de secours a son numéro court. Ces numéros sont gratuits et répondent jour et nuit. Voici les principaux, d'après la fiche officielle de service-public ([F33954](https://www.service-public.gouv.fr/particuliers/vosdroits/F33954)).",
    },
    {
      type: "tableau",
      entetes: ["Numéro", "Qui répond", "Quand l'appeler"],
      lignes: [
        ["15", "Le Samu", "Un problème de santé grave : malaise, douleur dans la poitrine, personne qui ne respire plus"],
        ["17", "La police ou la gendarmerie", "Une agression, des violences, un vol, un cambriolage, un accident de la route"],
        ["18", "Les sapeurs-pompiers", "Un incendie, un accident, une noyade, une inondation, une fuite de gaz"],
        ["112", "Le numéro d'urgence européen", "Toute urgence, en France comme dans les autres pays de l'Union européenne"],
        ["114", "Le service pour les personnes sourdes ou malentendantes", "Une urgence, par SMS, tchat, visio ou application"],
        ["115", "Le Samu social", "Une personne sans abri qui a besoin d'aide"],
        ["119", "Allô enfance en danger", "Un enfant victime de violences, ou une inquiétude pour un enfant"],
      ],
      legende: "Source : service-public, fiche F33954, lue le 22/10/2026.",
    },
    {
      type: "p",
      texte: "Le Samu, c'est le service d'aide médicale d'urgence. Depuis 2026, le 15 sert aussi à joindre un soignant vite quand votre médecin traitant n'est pas disponible (F33954).",
    },
    {
      type: "encadre",
      titre: "Si vous hésitez entre deux numéros",
      texte: "Appelez le ==112==. Il fonctionne depuis un téléphone fixe ou portable et vous oriente vers le bon service (F33954).",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Que dire quand vous appelez les secours ?",
    },
    {
      type: "p",
      texte: "Restez calme et répondez aux questions. La personne au téléphone a besoin de trois informations pour envoyer de l'aide au bon endroit.",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Où vous êtes** : la ville, la rue, le numéro, l'étage, le code de la porte.",
        "**Ce qui se passe** : un malaise, un feu, un accident, une agression.",
        "**Qui est concerné** : combien de personnes, leur âge, si elles respirent et si elles répondent.",
      ],
    },
    {
      type: "p",
      texte: "Ne raccrochez pas le premier. Attendez qu'on vous dise que l'appel est terminé. On peut vous donner des gestes à faire en attendant les secours.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Ces numéros servent aux **urgences**. Pour un problème qui peut attendre, appelez le commissariat ou la brigade de gendarmerie (F33954).",
        "Une fausse alerte est un délit, puni par la loi (article 322-14 du code pénal, cité par la fiche F33954).",
        "Pour un empoisonnement, un centre antipoison répond jour et nuit. Mais si la personne ne respire pas ou ne répond plus, appelez le 15.",
      ],
    },
    {
      type: "h2",
      texte: "Peut-on appeler sans forfait ou sans crédit ?",
    },
    {
      type: "p",
      texte: "Oui. Service-public indique que les appels d'urgence fonctionnent si une carte SIM est dans le téléphone, même quand le forfait est épuisé ou résilié ([F33954](https://www.service-public.gouv.fr/particuliers/vosdroits/F33954)). L'appel est gratuit et n'apparaît pas sur votre facture.",
    },
    {
      type: "h3",
      texte: "Le 0 800 112 112 : ce n'est pas un faux numéro",
    },
    {
      type: "p",
      texte: "Depuis le 1er octobre 2024, les secours vous rappellent depuis le ==0 800 112 112== si l'appel a été coupé ou s'ils ont besoin d'une précision ([service-public, A17758](https://www.service-public.gouv.fr/particuliers/actualites/A17758)). Décrocher est gratuit. Ce numéro ne prend pas les appels d'urgence : il sert seulement à vous rappeler.",
    },
    {
      type: "p",
      texte: "Service-public conseille de l'enregistrer dans vos contacts sous le nom « Services d'urgence ». Ainsi, vous saurez tout de suite que ce n'est pas une publicité.",
    },
    {
      type: "h2",
      texte: "Et si vous ne pouvez pas parler ?",
    },
    {
      type: "p",
      texte: "Le ==114== est fait pour les personnes sourdes, malentendantes ou qui ne peuvent pas parler. Vous pouvez le joindre par SMS, par tchat, en visio ou en langue des signes française (LSF), avec l'application « urgence 114 » (F33954). Donnez votre nom, votre adresse précise et ce qui se passe.",
    },
    {
      type: "h2",
      texte: "Quels numéros d'écoute connaître, en dehors des urgences ?",
    },
    {
      type: "p",
      texte: "Certains numéros ne sont pas des services de secours. Ce sont des lignes d'écoute, gratuites, pour parler à quelqu'un et être orienté (F33954).",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**3919** : pour les femmes victimes de violences et pour les témoins, jour et nuit. Ce numéro ne traite pas les urgences : en danger immédiat, appelez le 17.",
        "**3114** : pour une personne en détresse ou qui pense au suicide, et pour ses proches, jour et nuit.",
        "**3018** : pour les jeunes victimes de harcèlement à l'école ou sur internet, tous les jours de 9 h à 23 h.",
        "**116 000** : pour signaler un enfant disparu, jour et nuit.",
      ],
    },
    {
      type: "h2",
      texte: "Ces numéros marchent-ils aussi en outre-mer ?",
    },
    {
      type: "p",
      texte: "Dans les départements d'outre-mer (Guadeloupe, Martinique, Guyane, La Réunion, Mayotte), service-public précise que le 115 est gratuit comme en métropole, et le 3919 aussi (F33954). La fiche donne aussi des horaires propres aux Antilles, à la Guyane, à Mayotte et à La Réunion pour certaines lignes d'écoute.",
    },
    {
      type: "p",
      texte: "En Nouvelle-Calédonie, en Polynésie française, à Wallis-et-Futuna ou à Saint-Pierre-et-Miquelon, l'organisation des secours peut être différente. La fiche nationale n'en parle pas. Vérifiez les numéros sur le site du haut-commissariat ou de la préfecture de votre territoire (le service local de l'État), et notez-les dès votre arrivée.",
    },
    {
      type: "h2",
      texte: "Pourquoi l'examen civique en parle-t-il ?",
    },
    {
      type: "p",
      texte: "L'examen civique est un QCM de 40 questions. Il est demandé pour trois démarches : une première carte de séjour pluriannuelle (un titre de séjour de plusieurs années), une première carte de résident (10 ans) et la naturalisation. Son programme officiel, le référentiel, cite « les numéros d'urgence » dans la thématique « Vivre dans la société française », au chapitre de l'accès aux soins.",
    },
    {
      type: "p",
      texte: "Le site officiel de la formation civique a une fiche « Accès aux soins : services et numéros d'urgence » dans sa thématique [Santé](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/sante/). Pour le reste du parcours de soins, lisez nos guides sur le [médecin traitant et la carte Vitale](/articles/medecin-traitant-secu-sociale-etranger-france-2026-ameli-carte-vitale) et sur le [système de santé en France](/articles/systeme-sante-france-etranger-securite-sociale).",
    },
    {
      type: "qcm",
      thematique: "Vivre dans la société française",
      question: "Une personne fait un malaise dans la rue et ne répond plus. Quel numéro appelez-vous en priorité ?",
      choix: ["Le 15", "Le 17", "Le 115", "Le 3919"],
      reponse: 0,
      explication: "Le 15 est le numéro du Samu, pour les urgences médicales. Le 17 est celui de la police, le 115 celui du Samu social, et le 3919 une ligne d'écoute pour les femmes victimes de violences. Le 112, numéro européen, aurait aussi transmis l'appel.",
    },
    {
      type: "qcm",
      thematique: "Vivre dans la société française",
      question: "Quel numéro d'urgence fonctionne dans tous les pays de l'Union européenne ?",
      choix: ["Le 18", "Le 112", "Le 119", "Le 0 800 112 112"],
      reponse: 1,
      explication: "Le 112 est le numéro d'urgence européen. Le 0 800 112 112 ne reçoit pas d'appel : c'est le numéro qui vous rappelle après un appel aux secours.",
    },
    {
      type: "cta",
      texte: "Les questions sur la vie quotidienne en France font partie de l'examen. Testez-vous sur 40 questions types, avec la correction.",
      bouton: "Faire un examen blanc gratuit",
    },
    {
      type: "p",
      texte: "Vous ne savez pas encore si l'examen vous concerne ? Le [simulateur d'éligibilité](/eligibilite-examen-civique) répond en une minute. Et si vous venez d'arriver en France, notre guide des [premiers pas : banque, logement, CAF et Ameli](/articles/premiers-pas-france-etranger-banque-logement-caf-ameli) vous aide pour la suite.",
    },
    {
      type: "encadre",
      titre: "Le geste utile, dès aujourd'hui",
      texte: "Enregistrez dans votre téléphone le 15, le 17, le 18, le 112 et le 0 800 112 112 (« Services d'urgence »). Apprenez à vos enfants à dire votre adresse complète. Le jour où il faut appeler, ces deux gestes font gagner de précieuses minutes.",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Quel est le numéro d'urgence en France ?",
      reponse: "Il y en a plusieurs. Le 15 pour une urgence médicale (Samu), le 17 pour la police ou la gendarmerie, le 18 pour les pompiers. Le 112, numéro européen, marche aussi partout en France et vous oriente vers le bon service. Tous ces appels sont gratuits, jour et nuit.",
    },
    {
      question: "Quelle est la différence entre le 112 et le 15 ?",
      reponse: "Le 15 vous met directement en relation avec le Samu, pour un problème de santé. Le 112 est le numéro d'urgence européen : il reçoit tous les types d'urgence et vous oriente vers le bon service. En France, pour un malaise, le 15 reste le plus direct ; si vous hésitez, le 112 convient.",
    },
    {
      question: "Peut-on appeler le 112 sans forfait ?",
      reponse: "Oui. Selon service-public, les appels d'urgence fonctionnent si une carte SIM est présente dans le téléphone, même avec un forfait épuisé ou résilié. L'appel est gratuit et n'apparaît pas sur la facture. Gardez donc toujours votre téléphone chargé, même sans abonnement.",
    },
    {
      question: "C'est quoi le numéro 0800 112 112 ?",
      reponse: "C'est le numéro que les services d'urgence utilisent depuis le 1er octobre 2024 pour vous rappeler, par exemple si l'appel a été coupé. Décrocher est gratuit. Il ne reçoit pas d'appel d'urgence. Service-public conseille de l'enregistrer sous « Services d'urgence » pour le reconnaître.",
    },
  ],
  sources: [
    {
      titre: "Service-public : quels sont les numéros en cas d'urgence (Samu, pompiers...) et les numéros d'écoute ? (F33954, vérifiée le 25/08/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33954",
      type: "officiel",
      luLe: "2026-10-22",
    },
    {
      titre: "Service-public : numéros d'urgence, les secours vous rappellent avec le 0 800 112 112 (A17758)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A17758",
      type: "officiel",
      luLe: "2026-10-22",
    },
    {
      titre: "Ministère de l'Intérieur, formation civique : fiches « Santé » de la thématique « Vivre dans la société française »",
      url: "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/sante/",
      type: "officiel",
      luLe: "2026-10-22",
    },
    {
      titre: "Service-public : carte de séjour pluriannuelle et carte de résident, l'examen civique (F39530)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530",
      type: "officiel",
      luLe: "2026-10-22",
    },
  ],
};

export default article;
