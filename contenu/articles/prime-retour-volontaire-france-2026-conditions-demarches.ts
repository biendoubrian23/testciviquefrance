import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-generaux-4.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/prime-retour-volontaire-france-2026-conditions-demarches`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "prime-retour-volontaire-france-2026-conditions-demarches",
  titre: "Prime de retour volontaire 2026 : jusqu'à 2 500 € pour rentrer chez soi, conditions, démarches et pièges à éviter",
  titreSeo: "Prime de retour volontaire 2026 : jusqu'à 2 500 € pour rentrer chez soi, conditions, démarches et pièges à éviter",
  resume: "La France paie jusqu'à 2 500 € + billet d'avion pour les étrangers qui souhaitent rentrer dans leur pays. Mais attention : vous perdez votre titre de séjour, vos droits à retraite et votre ancienneté de résidence. Ce que personne ne vous dit avant de signer.",
  chapo: "La France propose une aide financière pour les étrangers qui souhaitent rentrer dans leur pays d'origine, et la plupart des gens qui pourraient en bénéficier ne le savent pas. Cette aide s'appelle l'**Aide au Retour Volontaire (ARV)**. Elle peut aller jusqu'à **2 500 € par adulte** (plus des montants supplémentaires pour les enfants). Elle n'est pas réservée aux sans-papiers : elle est aussi accessible aux personnes en situation régulière qui souhaitent retourner s'installer dans leur pays. Ce guide explique exactement qui peut en bénéficier, combien on reçoit vraiment, comment faire la demande, et surtout les conséquences à long terme sur vos droits en France, que beaucoup de gens découvrent trop tard.",
  publieLe: "2026-04-12",
  modifieLe: "2026-04-12",
  minutes: 19,
  theme: "prime retour volontaire France 2026",
  motsCles: [
    "prime retour volontaire France 2026",
    "aide au retour volontaire ARV France",
    "aide retour pays étranger France",
    "OFII aide retour volontaire montant",
    "retour volontaire sans papiers France 2026",
    "aide financière retour pays France",
    "combien prime retour volontaire France",
    "conditions aide retour OFII",
    "demande aide retour volontaire France",
    "conséquences retour volontaire titre séjour",
    "retour volontaire peut-on revenir France",
    "aide réinsertion pays d'origine France",
    "aide retour volontaire famille enfants",
    "OFII programme retour humanitaire",
    "quitter France aide gouvernement 2026",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
  },
  blocs: [
    {
      type: "h2",
      texte: "C'est quoi exactement l'Aide au Retour Volontaire (ARV) ?",
      id: "cest-quoi-arv",
    },
    {
      type: "p",
      texte: "L'Aide au Retour Volontaire (ARV) est un programme géré par l'**Office Français de l'Immigration et de l'Intégration (OFII)**. Il a été créé en 1984 et existe depuis plus de 40 ans. Ce n'est pas une expulsion déguisée, c'est une démarche volontaire et indemnisée pour aider les personnes qui souhaitent rentrer chez elles à financer ce retour.",
    },
    { type: "h3", texte: "Pourquoi la France fait ça ?" },
    { type: "p", texte: "L'État a plusieurs raisons :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Humanitaire** : aider des personnes qui souhaitent rentrer mais n'ont pas les moyens du billet d'avion",
        "**Budgétaire** : un retour volontaire coûte moins cher qu'une expulsion forcée (qui peut coûter 10 000 € par personne selon la Cour des comptes)",
        "**Social** : permettre une réinsertion digne dans le pays d'origine plutôt qu'une expulsion traumatisante",
      ],
    },
    { type: "h3", texte: "Les deux types d'aide" },
    { type: "p", texte: "L'OFII propose deux types de programmes :" },
    { type: "p", texte: "**1. L'Aide au Retour Humanitaire (ARH)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pour les personnes en situation irrégulière ou en grande précarité",
        "Montant : jusqu'à **1 900 € pour un adulte seul**, plus des suppléments enfants",
      ],
    },
    { type: "p", texte: "**2. L'Aide au Retour Volontaire (ARV)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pour les personnes en situation régulière qui souhaitent retourner s'installer durablement",
        "Montant : jusqu'à **2 500 € pour un adulte**, plus des suppléments",
      ],
    },
    {
      type: "encadre",
      texte: "En pratique, dans les médias et dans les conversations, les deux programmes sont souvent appelés \"prime de retour volontaire\". Ce guide couvre les deux.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Qui peut en bénéficier ? Les conditions exactes",
      id: "conditions-eligibilite",
    },
    { type: "p", texte: "Les conditions varient selon le programme, mais voici les règles générales." },
    { type: "h3", texte: "Conditions communes aux deux programmes" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Être majeur** (ou mineur accompagné d'un adulte)",
        "**Résider en France** au moment de la demande",
        "**Ne pas avoir déjà bénéficié** de l'ARV dans les 3 dernières années (à l'ARH) ou 5 dernières années (à l'ARV réguliers)",
        "**Être ressortissant d'un pays éligible** (liste positive, exclut certains pays de l'UE/EEE)",
        "**Rentrer dans votre pays d'origine** (ou de dernière résidence habituelle)",
      ],
    },
    { type: "h3", texte: "Conditions spécifiques à l'Aide au Retour Humanitaire (ARH)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Être en **situation irrégulière** ou en grande précarité (hébergement d'urgence, etc.)",
        "Demandeur d'asile débouté",
        "Bénéficiaire de la protection temporaire qui souhaite rentrer",
      ],
    },
    {
      type: "p",
      texte: "**Pays éligibles à l'ARH (liste principale) :** Algérie, Maroc, Tunisie, Sénégal, Mali, Côte d'Ivoire, Cameroun, Congo, RDC, Guinée, Burkina Faso, Togo, Bénin, Mauritanie, ainsi que de nombreux pays d'Asie (Arménie, Géorgie, Albanie, Kosovo, etc.)",
    },
    { type: "h3", texte: "Conditions spécifiques à l'ARV \"réguliers\"" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Posséder un **titre de séjour en cours de validité** (carte de séjour, carte de résident)",
        "Être en **situation de chômage longue durée** ou en grande précarité malgré la régularité",
        "Ou souhaiter retourner s'installer définitivement dans le pays d'origine",
      ],
    },
    { type: "h3", texte: "Qui est exclu ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les citoyens de l'Union Européenne et de l'Espace Économique Européen",
        "Les personnes ayant déjà bénéficié de l'aide dans les délais d'exclusion",
        "Les personnes sous le coup d'une procédure pénale en France",
        "Certaines nationalités selon les accords bilatéraux en vigueur",
      ],
    },
    { type: "h2", texte: "Combien exactement ? Les montants 2026", id: "montants-2026" },
    {
      type: "p",
      texte: "Voici les montants officiels en vigueur en 2026, tels que communiqués par l'OFII.",
    },
    { type: "h3", texte: "Aide au Retour Humanitaire (ARH) : personnes en situation irrégulière" },
    {
      type: "tableau",
      entetes: ["Situation", "Montant"],
      lignes: [
        ["Adulte seul", "**700 €**"],
        ["Couple", "**1 400 €**"],
        ["Adulte avec 1 enfant", "**700 € + 200 € = 900 €**"],
        ["Adulte avec 2 enfants", "**700 € + 400 € = 1 100 €**"],
        ["Par enfant supplémentaire", "**+ 200 €**"],
      ],
    },
    {
      type: "encadre",
      texte: "L'ARH \"simple\" est donc inférieure aux 2 500 € souvent cités. Les montants plus élevés s'appliquent au programme ARV pour les résidents réguliers.",
      ton: "bleu",
    },
    { type: "h3", texte: "Aide au Retour Volontaire (ARV) : résidents réguliers en difficulté" },
    {
      type: "tableau",
      entetes: ["Situation", "Montant"],
      lignes: [
        ["Adulte seul", "**Jusqu'à 2 500 €**"],
        ["Par enfant accompagnant", "**+ 500 €**"],
        [
          "Aide à la réinsertion professionnelle",
          "**Jusqu'à 7 000 €** supplémentaires (selon le pays)",
        ],
      ],
    },
    { type: "h3", texte: "L'aide à la réinsertion : le vrai bonus méconnu" },
    {
      type: "p",
      texte: "En plus de l'aide financière directe, certains pays ont conclu des accords avec l'OFII pour une **aide à la réinsertion professionnelle** : formation, achat de matériel, création d'activité. Ces aides peuvent atteindre **7 000 à 10 000 €** supplémentaires selon les pays et les projets.",
    },
    {
      type: "p",
      texte: "Pays avec accords de réinsertion actifs en 2026 : Sénégal, Mali, Bénin, Togo, Arménie, Géorgie, Kosovo, Albanie.",
    },
    { type: "h3", texte: "Ce qui est inclus en dehors de l'argent" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Billet d'avion** pris en charge directement par l'OFII (aller simple)",
        "**Transport vers l'aéroport** si nécessaire",
        "**Accompagnement administratif** dans le pays d'origine (via les partenaires locaux de l'OFII)",
      ],
    },
    {
      type: "h2",
      texte: "Comment faire la demande : les étapes concrètes",
      id: "comment-faire-demande",
    },
    { type: "h3", texte: "Étape 1 : Contacter l'OFII" },
    {
      type: "p",
      texte: "La démarche commence toujours par une prise de contact avec l'OFII (Office Français de l'Immigration et de l'Intégration).",
    },
    { type: "p", texte: "**Comment les contacter :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Téléphone** : 0 806 000 104 (numéro non surtaxé)",
        "**Email** : via le formulaire sur ofii.fr",
        "**En personne** : l'OFII dispose d'antennes dans toutes les grandes villes (Paris, Lyon, Marseille, Bordeaux, Lille, Toulouse, Strasbourg, Nantes...)",
      ],
    },
    { type: "h3", texte: "Étape 2 : L'entretien d'information" },
    { type: "p", texte: "Un agent OFII vous reçoit en entretien confidentiel pour :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vérifier votre éligibilité",
        "Vous informer sur les montants auxquels vous avez droit",
        "Vous expliquer les conséquences (notamment sur vos droits futurs, voir section suivante)",
        "Vous remettre un formulaire de demande",
      ],
    },
    {
      type: "encadre",
      texte: "**Cet entretien est confidentiel.** L'OFII ne peut pas utiliser les informations que vous donnez pour initier une procédure d'expulsion. C'est une garantie légale.",
      ton: "bleu",
    },
    { type: "h3", texte: "Étape 3 : Constitution du dossier" },
    { type: "p", texte: "Documents à fournir :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pièce d'identité ou passeport",
        "Titre de séjour (si vous en avez un)",
        "Justificatif de domicile en France",
        "Actes de naissance des enfants accompagnants",
        "Eventuellement : justificatifs de ressources (pour l'ARV réguliers)",
      ],
    },
    { type: "h3", texte: "Étape 4 : La décision et l'organisation du départ" },
    {
      type: "p",
      texte: "L'OFII traite les dossiers en **2 à 4 semaines**. Une fois le dossier accepté :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "L'OFII achète votre billet d'avion",
        "Vous recevez la moitié de l'aide financière **avant le départ** (en France)",
        "La seconde moitié est versée **à l'arrivée** dans le pays d'origine, via un partenaire local de l'OFII",
      ],
    },
    {
      type: "encadre",
      texte: "La date de départ est fixée d'un commun accord, vous gardez la maîtrise du calendrier dans des limites raisonnables.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Ce qu'on perd en partant : les conséquences sur vos droits futurs",
      id: "consequences-droits-futurs",
    },
    {
      type: "p",
      texte: "C'est la partie la plus importante et la moins bien communiquée. **Avant de prendre une décision, lisez attentivement cette section.**",
    },
    { type: "h3", texte: "Conséquence 1 : La perte du titre de séjour" },
    {
      type: "p",
      texte: "En partant dans le cadre de l'ARV, vous **remettez votre titre de séjour** à l'OFII. Il est annulé. Vous ne pouvez plus revenir en France avec ce titre.",
    },
    { type: "h3", texte: "Conséquence 2 : Le délai de réadmission" },
    {
      type: "p",
      texte: "Si vous avez bénéficié de l'ARH (situation irrégulière), il existe généralement une **interdiction de retour en France implicite** : dans les faits, si vous revenez en France trop rapidement, votre demande de visa sera refusée et votre demande de titre de séjour sera compliquée.",
    },
    { type: "p", texte: "Pour l'ARV réguliers, il n'y a pas d'interdiction formelle de retour, mais :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous devez attendre **3 à 5 ans** avant de pouvoir redemander une aide au retour",
        "Une nouvelle demande de visa pour la France sera examinée normalement, mais vos années d'intégration en France ne comptent plus comme \"durée de résidence\"",
      ],
    },
    { type: "h3", texte: "Conséquence 3 : La perte des droits sociaux accumulés" },
    { type: "p", texte: "En partant, vous perdez :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vos droits à la **retraite française** pour les années cotisées (sauf si une convention bilatérale existe entre la France et votre pays, vérifiez avant de partir)",
        "Votre affiliation à l'**Assurance Maladie** (CPAM)",
        "Vos droits en cours à la **CAF** (APL, allocations familiales)",
        "L'ancienneté que vous aviez accumulée pour une future naturalisation",
      ],
    },
    { type: "h3", texte: "Conséquence 4 : L'impact sur vos enfants" },
    {
      type: "p",
      texte: "Si vos enfants sont **français**, ils peuvent rester en France ou partir avec vous, c'est votre choix. Si vous partez avec un enfant français, vous devrez lui faire établir un passeport français avant le départ et gérer sa scolarisation dans le pays d'origine.",
    },
    {
      type: "p",
      texte: "Si vos enfants sont étrangers comme vous, ils partent avec vous. À leur retour futur en France (pour des études, par exemple), leurs années de scolarisation française seront un atout, mais pas un droit acquis.",
    },
    { type: "h3", texte: "Questions à se poser avant de décider" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Avez-vous des enfants français dont la présence en France vous protégerait en cas de recours OQTF ?",
        "Avez-vous des droits à la retraite française que vous perdriez ?",
        "Existe-t-il une voie de régularisation que vous n'avez pas explorée ?",
        "Votre situation en France est-elle vraiment sans issue, ou est-ce un moment de découragement passager ?",
      ],
    },
    { type: "h2", texte: "Les 5 pièges à éviter", id: "pieges-a-eviter" },
    { type: "h3", texte: "Piège 1 : Confondre l'ARV avec une expulsion" },
    {
      type: "p",
      texte: "L'ARV est **strictement volontaire**. Aucun agent de l'État ne peut vous forcer à signer une demande ARV. Si quelqu'un (préfecture, police, centre de rétention) vous dit que vous \"devez\" signer pour l'ARV, c'est faux ou trompeur. Refusez et demandez à parler à un avocat ou une association.",
    },
    { type: "h3", texte: "Piège 2 : Partir sans vérifier ses droits à la retraite" },
    {
      type: "p",
      texte: "Des dizaines de personnes sont parties avec une prime de retour volontaire sans savoir qu'elles avaient accumulé des droits à retraite en France. Avant de partir, contactez votre **caisse de retraite (CNAV ou MSA)** pour connaître vos droits et les conventions bilatérales applicables.",
    },
    { type: "h3", texte: "Piège 3 : Partir en pensant pouvoir revenir facilement" },
    {
      type: "p",
      texte: "Certains pensent à tort que l'ARV est une \"pause\", qu'ils pourront revenir en France facilement après quelques années. Dans les faits, revenir légalement après une ARV nécessite de reprendre toutes les démarches depuis zéro. Si vous avez des enfants en France, des liens familiaux ou un projet professionnel solide, partez avec un plan précis de retour.",
    },
    { type: "h3", texte: "Piège 4 : Ne pas utiliser l'aide à la réinsertion" },
    {
      type: "p",
      texte: "L'aide à la réinsertion professionnelle (jusqu'à 7 000 €) est sous-utilisée. Beaucoup de bénéficiaires prennent l'argent et partent sans projet. C'est dommage : un projet professionnel préparé en amont (formation, matériel, local commercial) maximise les chances de réussite dans le pays d'origine.",
    },
    { type: "h3", texte: "Piège 5 : Prendre la décision seul sous pression" },
    {
      type: "p",
      texte: "Recevoir une OQTF ou vivre dans la peur constante d'une expulsion crée une pression psychologique intense. Beaucoup de personnes demandent l'ARV dans un moment de découragement, sans avoir vérifié si elles avaient des recours juridiques. **Avant de signer quoi que ce soit, parlez à une association ou un avocat** : au moins pour être sûr de votre décision.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "L'Aide au Retour Volontaire est un outil qui peut être précieux pour les personnes qui ont pris la décision réfléchie de rentrer dans leur pays d'origine, avec un projet, une famille qui les attend, et la conviction que c'est le bon moment. Elle est beaucoup moins adaptée à ceux qui sont dans un moment de détresse et cherchent une sortie rapide. Les conséquences à long terme, perte du titre de séjour, des droits sociaux accumulés, de l'ancienneté pour une naturalisation, sont réelles et durables. Si vous envisagez l'ARV, prenez le temps de consulter une association spécialisée pour explorer toutes vos options avant de vous décider. Et si vous décidez de partir, utilisez pleinement l'aide à la réinsertion pour vous donner les meilleures chances dans votre pays d'origine.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Peut-on revenir en France après avoir pris la prime de retour volontaire ?",
      reponse: "Oui, mais pas facilement. Il faut reprendre toutes les démarches de visa depuis le début, depuis votre pays d'origine. Votre ancienneté en France et votre titre de séjour précédent ne comptent plus. Il n'existe pas d'interdiction légale formelle de retour pour l'ARV (contrairement à une expulsion), mais en pratique, obtenir un nouveau visa est difficile.",
    },
    {
      question: "La prime de retour volontaire est-elle imposable ?",
      reponse: "Non. L'Aide au Retour Volontaire est exonérée d'impôt sur le revenu. Elle ne génère aucune obligation déclarative fiscale.",
    },
    {
      question: "Peut-on demander l'ARV si on est en cours de procédure de naturalisation ?",
      reponse: "Techniquement oui, mais ce serait contraire à votre intérêt. Une demande de naturalisation en cours est abandonnée dès lors que vous quittez le territoire et remettez votre titre de séjour. Si vous avez un dossier de naturalisation solide, il serait dommage de l'abandonner pour une prime de 2 500 €.",
    },
    {
      question: "Peut-on recevoir la prime et rester en France quelques semaines pour organiser son départ ?",
      reponse: "Oui. L'OFII fixe une date de départ d'un commun accord avec vous. Il y a généralement une période de 2 à 6 semaines pour s'organiser entre la décision et le départ. Vous pouvez continuer à résider légalement en France pendant cette période.",
    },
    {
      question: "L'OFII peut-il dénoncer ma situation à la préfecture si je viens me renseigner et décide de ne pas partir ?",
      reponse: "Non. L'entretien d'information avec l'OFII est confidentiel. Si vous venez vous renseigner et décidez finalement de ne pas partir, l'OFII ne peut pas utiliser ces informations pour initier une procédure contre vous. C'est une garantie légale importante.",
    },
  ],
  sources: [
    {
      titre: "OFII : Programme d'aide au retour",
      url: "https://www.ofii.fr/vos-droits-vos-demarches/retour-dans-votre-pays",
      type: "officiel",
      description: "Programme officiel de l'OFII pour l'aide au retour volontaire",
    },
    {
      titre: "Service-public.fr, Aide au retour dans le pays d'origine",
      url: "https://www.service-public.fr/particuliers/vosdroits/F15773",
      type: "officiel",
      description: "Fiche officielle sur les conditions et montants de l'aide au retour",
    },
    {
      titre: "GISTI : Note sur les aides au retour",
      url: "https://www.gisti.org",
      type: "article",
      description: "Analyse critique et juridique des programmes d'aide au retour",
    },
  ],
};

export default article;
