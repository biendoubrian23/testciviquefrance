import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 17/11/2026 (`docs/seo/ROBOT.md`).
 * Requêtes visées : « défenseur des droits » (10 k à 100 k recherches par
 * mois) et « saisir le défenseur des droits » (100 à 1 k) ; Planificateur de
 * mots clés, « Obtenir le volume », France, toutes les langues (bouton de
 * langue désactivé), 17/11/2026. Famille vie en France (en retard : 0 sur les
 * 10 derniers articles). Pont vers l'examen : le Défenseur des droits est cité
 * par le référentiel officiel (« autres institutions »), thématique « Système
 * institutionnel et politique ».
 * Sources lues le 17/11/2026 (agent de lecture web) : Constitution, art. 71-1
 * (Légifrance) ; loi organique n° 2011-333, art. 1, 2, 4, 5, 6, 10 et 33
 * (Légifrance) ; defenseurdesdroits.fr (« Nous contacter », 04/08/2023 ;
 * « Demander de l'aide », 05/10/2023 ; « Le Défenseur des droits et ses
 * adjoints », 16/11/2026) ; antidiscriminations.fr.
 * Non écrit : le rôle des délégués outre-mer et l'art. 37 (non relus) ; la
 * fiche service-public F2482 (404) ; la gratuité du 3928 (le site du
 * Défenseur dit « gratuit », antidiscriminations.fr dit « prix d'un appel
 * local » : on n'écrit ni l'un ni l'autre).
 */
const article: Article = {
  slug: "defenseur-des-droits",
  titre: "Défenseur des droits : ce qu'il peut faire pour vous, et comment le saisir gratuitement",
  titreSeo: "Défenseur des droits : rôle et comment le saisir",
  resume: "Défenseur des droits : ses 5 missions, qui peut le saisir, comment le faire gratuitement, et ce qu'il ne peut pas faire. Le guide simple.",
  chapo: "Le Défenseur des droits est une autorité indépendante qui vous aide ==gratuitement== quand une administration, une discrimination ou un agent de sécurité porte atteinte à vos droits. Toute personne peut le saisir, en ligne, par courrier sans timbre ou auprès d'un délégué. Mais il ne remplace ni un avocat ni un recours devant le tribunal.",
  publieLe: "2026-11-17",
  modifieLe: "2026-11-17",
  minutes: 7,
  theme: "Le Défenseur des droits : ses missions, qui peut le saisir, comment, et ses limites",
  motsCles: [
    "défenseur des droits",
    "saisir le défenseur des droits",
    "défenseur des droits rôle",
    "défenseur des droits discrimination",
    "défenseur des droits préfecture",
    "défenseur des droits délégué",
    "défenseur des droits examen civique",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/defenseur-des-droits.webp",
    alt: "La devise Liberté Égalité Fraternité gravée en lettres rouges sur la façade en pierre de l'hôtel de ville d'Avignon",
    largeur: 1024,
    hauteur: 768,
    credit: "ell brown, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/39415781@N06/5819482486",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que le Défenseur des droits ?",
    },
    {
      type: "p",
      texte: "Le Défenseur des droits est une institution de la République. Son rôle est écrit dans la Constitution, à l'article 71-1 : il « veille au respect des droits et libertés » par les administrations et les services publics ([Constitution, art. 71-1](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000019241106)).",
    },
    {
      type: "p",
      texte: "C'est une ==autorité administrative indépendante==. Cela veut dire qu'il ne reçoit d'ordre de personne, ni du gouvernement ni d'un ministre (article 2 de la [loi organique n° 2011-333](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000023781167)). Une loi organique est une loi qui précise l'organisation d'une institution prévue par la Constitution.",
    },
    {
      type: "p",
      texte: "Le Défenseur des droits est nommé par le président de la République pour ==6 ans==. Son mandat ne peut pas être renouvelé. Depuis le 23 juillet 2026, c'est François-Noël Buffet, selon le [site du Défenseur des droits](https://www.defenseurdesdroits.fr/le-defenseur-des-droits-et-ses-adjoints-215). Il travaille avec des adjoints, dont la Défenseure des enfants.",
    },
    {
      type: "h2",
      texte: "Quelles sont ses 5 missions ?",
    },
    {
      type: "p",
      texte: "La loi lui donne cinq missions, et seulement cinq (article 4 de la loi organique). Le Défenseur des droits le rappelle lui-même : il « ne peut agir que dans les cinq domaines d'intervention » prévus par la loi.",
    },
    {
      type: "tableau",
      entetes: ["Mission", "Exemples de situations"],
      lignes: [
        ["1. Vos droits face aux services publics", "Une préfecture, une CAF ou une caisse de retraite qui ne répond pas, bloque un dossier ou refuse sans raison"],
        ["2. Les droits de l'enfant", "Un enfant privé d'école, de soins, ou mal protégé"],
        ["3. La lutte contre les discriminations", "Un logement, un emploi ou un service refusé à cause de l'origine, du nom, du handicap, de la religion…"],
        ["4. La déontologie des forces de sécurité", "Le comportement d'un policier, d'un gendarme ou d'un agent de sécurité privée"],
        ["5. Les lanceurs d'alerte", "Une personne qui signale des faits graves et a besoin de protection"],
      ],
      legende: "Source : loi organique n° 2011-333, article 4, lue sur Légifrance le 17/11/2026.",
    },
    {
      type: "p",
      texte: "Pour un étranger en France, les deux premières lignes comptent souvent le plus. Pensez à un dossier de titre de séjour qui n'avance pas, ou à un refus de location à cause de l'origine. Notre article sur les [refus de logement illégaux](/articles/louer-appartement-etranger-france-discrimination-refus-illegaux-2026) donne des exemples.",
    },
    {
      type: "h2",
      texte: "Qui peut saisir le Défenseur des droits ?",
    },
    {
      type: "p",
      texte: "Saisir le Défenseur des droits, c'est lui demander d'examiner votre situation. La loi dit qu'il peut être saisi par ==toute personne== qui s'estime lésée dans ses droits par une administration (article 5). C'est aussi le cas de toute personne victime d'une discrimination interdite par la loi. Elle ne demande ni la nationalité française ni un titre de séjour.",
    },
    {
      type: "p",
      texte: "Le Défenseur des droits peut aussi agir de lui-même, sans être saisi, quand il apprend une situation grave (article 5).",
    },
    {
      type: "h2",
      texte: "Comment le saisir gratuitement ?",
    },
    {
      type: "p",
      texte: "La saisine est ==gratuite== (article 6). Le [site du Défenseur des droits](https://www.defenseurdesdroits.fr/nous-contacter-355) propose trois façons de le faire :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**En ligne**, avec le [formulaire de saisine](https://formulaire.defenseurdesdroits.fr/formulaire_saisine/) : vous décrivez votre situation et vous joignez vos documents.",
        "**Par courrier gratuit, sans timbre**, à cette adresse : Défenseur des droits, Libre réponse 71120, 75342 Paris CEDEX 07.",
        "**Auprès d'un délégué**, près de chez vous. Le site annonce 650 délégués, qui vous reçoivent gratuitement sur rendez-vous.",
      ],
    },
    {
      type: "p",
      texte: "Pour un simple renseignement, vous pouvez appeler le ==09 69 39 00 00==, du lundi au vendredi de 8 h 30 à 19 h 30, au coût d'un appel local. Si vous pensez être victime d'une discrimination, il existe aussi le ==3928== et le site [antidiscriminations.fr](https://antidiscriminations.fr/). Des juristes y répondent par téléphone ou par messagerie, du lundi au vendredi de 9 h 30 à 19 h.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Écrivez les faits dans l'ordre, avec les dates.",
        "Joignez les copies de vos documents : courriers, captures d'écran de l'ANEF, preuves de dépôt, refus écrits.",
        "Gardez les originaux et une copie de ce que vous envoyez.",
        "Notez le nom du service en cause et vos numéros de dossier.",
      ],
    },
    {
      type: "h2",
      texte: "Faut-il d'abord contacter l'administration ?",
    },
    {
      type: "p",
      texte: "Oui, pour un problème avec un service public. La loi demande des ==démarches préalables== auprès de l'administration en cause avant de saisir le Défenseur des droits (article 6). Par exemple : écrire à la préfecture, relancer par le formulaire de contact de l'ANEF, garder la preuve de vos demandes. L'ANEF, c'est le site du ministère de l'Intérieur où se font les demandes de titre de séjour.",
    },
    {
      type: "p",
      texte: "Cette condition ne vaut pas pour les quatre autres missions : discrimination, droits de l'enfant, forces de sécurité et lanceurs d'alerte. Dans ces cas, vous pouvez le saisir directement.",
    },
    {
      type: "p",
      texte: "Si votre dossier de titre de séjour est bloqué, lisez d'abord notre guide [ANEF : dossier bloqué ou en attente](/articles/anef-dossier-bloque-en-attente-2026-debloquer-relancer). Il explique les relances à faire avant tout autre recours.",
    },
    {
      type: "h2",
      texte: "Ce que le Défenseur des droits ne fait pas",
    },
    {
      type: "p",
      texte: "Il vous aide, mais il a des limites que la loi et son propre site disent clairement.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Il ne suspend pas vos délais de recours.** La saisine « n'interrompt ni ne suspend » les délais des recours administratifs ou devant le tribunal (article 6). Si vous contestez un refus de titre de séjour ou une OQTF (une obligation de quitter le territoire), le délai continue de courir.",
        "**Il ne change pas une décision de justice.** « Le Défenseur des droits ne peut remettre en cause une décision juridictionnelle » (article 33).",
        "**Il n'est pas votre avocat.** Son site le dit en ces mots. Devant un tribunal, vous devez être accompagné d'un avocat quand la procédure l'exige.",
        "**Il n'agit pas sans votre accord**, et l'examen d'une demande « prend parfois du temps », prévient son site.",
      ],
    },
    {
      type: "p",
      texte: "Le bon réflexe est donc double. Saisissez le Défenseur des droits si vos droits ne sont pas respectés. Et, en même temps, respectez vos délais de recours, avec l'aide d'un avocat ou d'une association comme La Cimade. Notre article sur le [refus de titre de séjour et l'OQTF](/articles/refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france) rappelle ces délais.",
    },
    {
      type: "encadre",
      titre: "Préfecture qui ne répond pas : le délai à connaître",
      texte: "Depuis le 30 octobre 2026, la préfecture a ==90 jours== pour répondre à une demande de titre de séjour complète. Sans réponse, la demande est refusée de façon implicite. Ce refus ouvre un délai de recours, que la saisine du Défenseur des droits ne suspend pas. Tout est expliqué dans notre article sur le [délai de 90 jours](/articles/delai-reponse-prefecture-titre-de-sejour-90-jours).",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Le Défenseur des droits à l'examen civique",
    },
    {
      type: "p",
      texte: "Le référentiel officiel de l'examen civique cite le Défenseur des droits parmi les « autres institutions », avec le Conseil constitutionnel et la Banque de France. Il fait partie de la thématique sur le système institutionnel et politique. Pour réviser les autres institutions, lisez notre article sur les [institutions françaises](/articles/institutions-francaises-president-assemblee-senat).",
    },
    {
      type: "qcm",
      thematique: "Système institutionnel et politique",
      question: "Qui peut saisir le Défenseur des droits ?",
      choix: [
        "Seulement les citoyens français",
        "Toute personne qui s'estime lésée dans ses droits",
        "Seulement un avocat",
        "Seulement le président de la République",
      ],
      reponse: 1,
      explication: "La loi organique du 29 mars 2011 (article 5) permet à toute personne qui s'estime lésée dans ses droits, ou victime d'une discrimination, de saisir le Défenseur des droits. La saisine est gratuite.",
    },
    {
      type: "cta",
      texte: "Les institutions sont une des cinq thématiques de l'examen civique. Testez-vous sur 40 questions types : l'inscription à Test Civique France est gratuite.",
      bouton: "Tester mes connaissances",
    },
    {
      type: "p",
      texte: "Vous ne savez pas encore si l'examen vous concerne ? Vérifiez-le en une minute avec notre [simulateur d'éligibilité](/eligibilite-examen-civique).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le Défenseur des droits est ==gratuit== et ouvert à ==toute personne==, quelle que soit sa nationalité. Pour un problème avec une administration, contactez-la d'abord et gardez les preuves. Puis saisissez-le en ligne, par courrier sans timbre ou auprès d'un délégué. Mais ne comptez jamais sur lui pour arrêter un délai de recours : ce délai continue de courir.",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Quel est le rôle du Défenseur des droits ?",
      reponse: "Le Défenseur des droits veille au respect des droits et libertés, selon l'article 71-1 de la Constitution. La loi organique du 29 mars 2011 lui donne cinq missions. Il défend vos droits face aux services publics et les droits de l'enfant. Il lutte contre les discriminations, contrôle la déontologie des forces de sécurité et protège les lanceurs d'alerte.",
    },
    {
      question: "Comment saisir le Défenseur des droits ?",
      reponse: "Vous pouvez le saisir gratuitement de trois façons. Utilisez le formulaire en ligne sur defenseurdesdroits.fr, ou écrivez sans timbre à : Défenseur des droits, Libre réponse 71120, 75342 Paris CEDEX 07. Vous pouvez aussi rencontrer un délégué près de chez vous. Pour un problème avec une administration, contactez-la d'abord et gardez les preuves.",
    },
    {
      question: "Le Défenseur des droits peut-il m'aider avec la préfecture ?",
      reponse: "Oui, si la préfecture ne respecte pas vos droits, par exemple un dossier bloqué sans réponse. La loi demande d'abord des démarches auprès de la préfecture. Attention : saisir le Défenseur des droits ne suspend pas les délais de recours. Si vous contestez un refus, faites aussi votre recours à temps, avec un avocat ou une association.",
    },
    {
      question: "Le Défenseur des droits est-il gratuit ?",
      reponse: "Oui. La loi organique du 29 mars 2011 dit que la saisine du Défenseur des droits est gratuite. Le courrier s'envoie sans timbre et les délégués vous reçoivent gratuitement sur rendez-vous. Seul le numéro de renseignement 09 69 39 00 00 est au coût d'un appel local, selon le site du Défenseur des droits.",
    },
  ],
  sources: [
    {
      titre: "Légifrance : Constitution du 4 octobre 1958, article 71-1 (en vigueur depuis le 25 juillet 2008)",
      url: "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000019241106",
      type: "officiel",
      luLe: "2026-11-17",
    },
    {
      titre: "Légifrance : loi organique n° 2011-333 du 29 mars 2011 relative au Défenseur des droits (articles 1, 2, 4, 5, 6, 10 et 33)",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000023781167",
      type: "officiel",
      luLe: "2026-11-17",
    },
    {
      titre: "Défenseur des droits : Nous contacter (page du 4 août 2023)",
      url: "https://www.defenseurdesdroits.fr/nous-contacter-355",
      type: "officiel",
      luLe: "2026-11-17",
    },
    {
      titre: "Défenseur des droits : Demander de l'aide au Défenseur des droits (page du 5 octobre 2023)",
      url: "https://www.defenseurdesdroits.fr/demander-de-laide-au-defenseur-des-droits-146",
      type: "officiel",
      luLe: "2026-11-17",
    },
    {
      titre: "Défenseur des droits : Le Défenseur des droits et ses adjoints (page du 16 novembre 2026)",
      url: "https://www.defenseurdesdroits.fr/le-defenseur-des-droits-et-ses-adjoints-215",
      type: "officiel",
      luLe: "2026-11-17",
    },
    {
      titre: "Antidiscriminations.fr : la plateforme du Défenseur des droits (3928, horaires)",
      url: "https://antidiscriminations.fr/",
      type: "officiel",
      luLe: "2026-11-17",
    },
  ],
};

export default article;
