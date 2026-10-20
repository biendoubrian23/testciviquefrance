import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-naturalisation-passeport-talent-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet`).
 *
 * Réécrit le 20/10/2026 (doctrine `docs/seo/ROBOT.md`) et fusionné avec
 * `naturalisation-francaise-conditions-demarches-2025`, qui redirige ici en 301.
 * Chaque règle a été relue sur service-public et Légifrance le 20/10/2026.
 * Retiré parce que faux ou sans source officielle : le tableau des « délais
 * réels par préfecture » et la durée de chaque phase, le niveau B1 (B2 pour
 * les demandes déposées depuis le 1er janvier 2026), la réduction à 2 ans
 * « pour un Bac+5 », le timbre de 55 € et le « dossier gratuit » (255 € depuis
 * le 1er mai 2026), la répartition des questions par thème, les centres
 * « agréés OFII », le recours gracieux « auprès du préfet », le « médiateur de
 * la naturalisation », les prix des traductions et des tests, la cérémonie
 * « 1 à 3 mois » après le décret (6 mois en principe), le « certificat de
 * nationalité » remis après la naturalisation. Les deux vidéos de l'article
 * fusionné (un reportage sur une polémique, une vidéo tierce qui tutoie) n'ont
 * pas été reprises.
 *
 * L'image de couverture vient d'Unsplash (licence Unsplash : usage libre,
 * commercial compris) ; ses dimensions sont nominales.
 */
const article: Article = {
  slug: "naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet",
  titre: "Naturalisation française en 2026 : conditions, délai de 18 mois, dossier et pièges à éviter",
  titreSeo: "Naturalisation 2026 : conditions, délai, dossier",
  resume: "5 ans de résidence, français B2, examen civique, timbre de 255 €, 18 mois d'instruction : les conditions et les étapes de la naturalisation en 2026.",
  chapo: "Pour être naturalisé français en 2026, il faut en général 5 ans de résidence en France et un titre de séjour valide. Il faut aussi des revenus stables, un niveau de français ==B2== et la réussite à l'examen civique. L'administration a ensuite ==18 mois au plus== pour répondre. Voici chaque condition, le dossier, le délai et les erreurs qui font perdre du temps, d'après service-public et les textes officiels.",
  publieLe: "2026-04-05",
  modifieLe: "2026-10-20",
  minutes: 9,
  theme: "naturalisation française 2026",
  motsCles: [
    "naturalisation française 2026",
    "conditions naturalisation France 2026",
    "délai naturalisation 2026",
    "délai naturalisation préfecture 2026",
    "dossier naturalisation documents",
    "refus naturalisation motifs",
    "naturalisation niveau B2",
    "examen civique naturalisation",
    "timbre fiscal naturalisation 255 euros",
    "cérémonie naturalisation France",
    "devenir français",
    "procédure naturalisation",
    "recours naturalisation ministre",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    alt: "Une main qui remplit et signe un document posé sur un bureau",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
  },
  blocs: [
    {
      type: "h2",
      texte: "Quelles sont les conditions pour être naturalisé en 2026 ?",
      id: "conditions-naturalisation",
    },
    {
      type: "p",
      texte: "La naturalisation par décret, c'est la décision de l'État qui vous donne la nationalité française. Elle n'est pas un droit : l'administration peut refuser même si vous remplissez les conditions. Voici celles que fixe [service-public](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213).",
    },
    {
      type: "tableau",
      entetes: ["Condition", "Ce qui est demandé"],
      lignes: [
        ["Âge", "18 ans au moment de la décision. La demande peut se faire dès 17 ans."],
        ["Résidence", "Vivre en France, avec vos intérêts et votre famille, au moment du décret."],
        ["Durée de résidence", "5 ans en règle générale. 2 ans ou aucune durée dans certains cas (voir plus bas)."],
        ["Séjour régulier", "Un titre de séjour valide au dépôt (sauf Suisses et Européens)."],
        ["Revenus", "Des revenus stables et suffisants pour vous et votre foyer. Aucun montant n'est fixé."],
        ["Langue", "Le niveau B2 à l'oral et à l'écrit, pour les demandes déposées depuis le 1er janvier 2026."],
        ["Examen civique", "Une attestation de réussite, jointe au dossier."],
        ["Assimilation", "Vérifiée par l'examen civique et par un entretien."],
        ["Casier", "Aucune condamnation à 6 mois de prison ferme ou plus, ni pour crime ou terrorisme."],
      ],
      legende: "Source : service-public, fiche F2213, vérifiée le 16/07/2026, lue le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Le titre de séjour, c'est la carte qui vous autorise à vivre en France. Il doit être valide le jour du dépôt. Il ne faut pas non plus d'arrêté d'expulsion ni d'interdiction du territoire en cours.",
    },
    {
      type: "h3",
      texte: "Quand la durée de 5 ans est réduite",
    },
    {
      type: "p",
      texte: "La durée tombe à **2 ans** si vous avez un diplôme du supérieur français obtenu après 2 ans d'études. Elle tombe aussi à 2 ans pour des services importants rendus à la France, ou un parcours d'intégration exceptionnel (F2213).",
    },
    {
      type: "p",
      texte: "Aucune durée n'est exigée dans d'autres cas : statut de réfugié, français langue maternelle, 5 ans d'école en français, service dans l'armée française. Notre guide des [raccourcis légaux](/articles/naturalisation-francaise-2-ans-raccourcis-legaux-accelerer-2026) détaille ces situations.",
    },
    {
      type: "h2",
      texte: "Quel niveau de français faut-il depuis le 1er janvier 2026 ?",
      id: "niveau-b2",
    },
    {
      type: "p",
      texte: "Le niveau exigé est le **B2** du cadre européen des langues, à l'oral et à l'écrit. Avant, c'était le B1. Le changement vient du [décret n° 2025-648 du 15 juillet 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051900519). Un décret, c'est un texte signé par le gouvernement. Il vaut pour les demandes **déposées à partir du 1er janvier 2026**.",
    },
    {
      type: "p",
      texte: "Pour le prouver, vous joignez un diplôme français ou un test de langue. Selon [service-public (F11926)](https://www.service-public.gouv.fr/particuliers/vosdroits/F11926), le brevet des collèges est accepté. L'attestation du TCF ou du TEF, deux tests de français reconnus, doit dater de **moins de 2 ans**.",
    },
    {
      type: "p",
      texte: "Deux dispenses existent. La première vise un handicap ou un état de santé qui empêche l'évaluation, avec un certificat médical. La seconde vise les réfugiés et apatrides de plus de 70 ans, en France depuis au moins 15 ans. Pour la liste complète des diplômes et des tests, lisez notre article sur le [niveau B2 pour la naturalisation](/articles/niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation).",
    },
    {
      type: "h2",
      texte: "Comment se passe l'examen civique pour la naturalisation ?",
      id: "examen-civique",
    },
    {
      type: "p",
      texte: "L'examen civique est un QCM en français : un test où vous choisissez la bonne réponse parmi plusieurs. D'après [service-public (F39426)](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426), il compte **40 questions**, de connaissance et de mise en situation. Il dure 45 minutes au plus, sur ordinateur ou tablette.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Pour réussir, il faut au moins **32 bonnes réponses** sur 40.",
        "Vous vous inscrivez dans un centre agréé par la CCI Paris Île-de-France ou par France Éducation international.",
        "Il ne concerne que la naturalisation et la réintégration, pas la nationalité par mariage.",
        "Une dispense est possible si votre santé rend l'évaluation impossible, avec un certificat médical.",
      ],
    },
    {
      type: "p",
      texte: "En cas de fraude, vous ne pouvez pas repasser l'examen pendant 2 ans (F39426). Le ministère publie des fiches gratuites sur [formation-civique.interieur.gouv.fr](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/). Vous pouvez aussi suivre nos [cours par thème](/cours).",
    },
    {
      type: "cta",
      texte: "Testez-vous sur des questions types avant de vous inscrire à l'examen.",
      bouton: "Commencer gratuitement",
    },
    {
      type: "h2",
      texte: "Comment déposer le dossier, et combien ça coûte ?",
      id: "dossier-documents",
    },
    {
      type: "p",
      texte: "La demande se fait en ligne, sur le téléservice « Demande en ligne de naturalisation française ». Si c'est impossible, un dépôt par courrier est permis avec une preuve de l'ANTS ou de la préfecture. La préfecture, c'est le service de l'État dans votre département (F2213).",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**En Guyane** : la demande se dépose à la préfecture de Guyane.",
        "**À Saint-Barthélemy, Saint-Martin, Saint-Pierre-et-Miquelon, Wallis-et-Futuna, en Polynésie française et en Nouvelle-Calédonie** : le téléservice n'est pas ouvert.",
        "**À l'étranger** : la demande se dépose au consulat de France.",
      ],
    },
    {
      type: "p",
      texte: "Le dossier coûte un timbre fiscal de **255 €**, ou 127,50 € en Guyane. Le timbre fiscal, c'est une taxe que vous achetez en ligne ou chez un buraliste. Ce montant vaut depuis le 1er mai 2026 : il était de 55 € avant ([service-public, A18881](https://www.service-public.gouv.fr/particuliers/actualites/A18881)). Les autres frais sont dans notre article sur le [coût de la naturalisation](/articles/cout-naturalisation-francaise-2026-budget-complet-timbre-fiscal).",
    },
    {
      type: "tableau",
      entetes: ["Pièce", "Ce qu'il faut savoir"],
      lignes: [
        ["Timbre fiscal", "255 € (127,50 € en Guyane)."],
        ["Titre de séjour", "Copie recto verso, sauf Suisses et Européens."],
        ["Pièce d'identité", "Passeport ou titre de séjour."],
        ["État civil", "Acte de naissance en copie intégrale, dans la langue d'origine."],
        ["Domicile, revenus, impôts", "Les justificatifs listés par service-public."],
        ["Langue", "Diplôme ou attestation de niveau B2."],
        ["Examen civique", "Attestation de réussite."],
        ["Casier étranger", "Si vous vivez en France depuis moins de 10 ans."],
        ["Couple, enfants", "Les justificatifs, si c'est votre situation."],
      ],
      legende: "Source : service-public, fiche F2213, lue le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Un document en langue étrangère doit être traduit par un traducteur agréé. Notre guide du [dossier de naturalisation](/articles/dossier-naturalisation-2026-documents-delais-prefecture-anef) reprend chaque pièce.",
    },
    {
      type: "h2",
      texte: "Quel est le délai d'une naturalisation en 2026 ?",
      id: "delais-prefecture",
    },
    {
      type: "p",
      texte: "L'administration a **18 mois au plus** pour répondre. Ce délai court à partir du récépissé : le papier qui prouve que votre dossier complet est enregistré (F2213).",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le délai passe à **12 mois** si vous vivez en France depuis au moins 10 ans à la date du récépissé.",
        "Il peut être prolongé une fois de 3 mois, par une décision motivée.",
      ],
    },
    {
      type: "p",
      texte: "Aucune source officielle ne publie de délai par préfecture. Nous n'en donnons donc pas : les tableaux qui circulent en ligne ne sont pas vérifiables. Sur les consignes données en 2026 aux préfectures, lisez notre article sur la [circulaire d'avril 2026](/articles/circulaire-avril-2026-naturalisation-maghreb-maroc-algerie-tunisie).",
    },
    {
      type: "h2",
      texte: "Que se passe-t-il pendant l'instruction ?",
      id: "entretien",
    },
    {
      type: "p",
      texte: "Si le dossier est recevable, vous êtes convoqué à un entretien. Il sert à vérifier votre assimilation à la communauté française. Vous venez avec les originaux demandés. À la fin, vous signez la charte des droits et devoirs du citoyen français (F2213).",
    },
    {
      type: "p",
      texte: "Une absence sans raison valable peut faire classer le dossier sans suite. L'administration mène aussi une enquête sur votre comportement civique, comme le paiement des impôts. Elle vérifie votre passé judiciaire en France et à l'étranger. Pour vous préparer, lisez notre guide de [l'entretien de naturalisation](/articles/entretien-naturalisation-2026-preparation-assimilation-prefecture).",
    },
    {
      type: "h2",
      texte: "Quels pièges font perdre du temps ou refuser un dossier ?",
      id: "motifs-refus",
    },
    {
      type: "p",
      texte: "Service-public décrit trois types de décisions négatives. Les connaître aide à ne pas les provoquer.",
    },
    {
      type: "tableau",
      entetes: ["Décision", "Ce que cela veut dire"],
      lignes: [
        ["Irrecevabilité", "Une condition de la loi manque. Vous pouvez redemander quand elle est remplie."],
        ["Ajournement", "La décision est reportée. Un délai est fixé avant une nouvelle demande."],
        ["Rejet", "L'administration juge la demande inopportune. Une nouvelle demande dans les 5 ans peut être classée sans suite."],
      ],
      legende: "Source : service-public, fiche F2213, lue le 20/10/2026.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Un titre de séjour expiré le jour du dépôt.",
        "Un acte de naissance en simple extrait, et pas en copie intégrale.",
        "Un document étranger sans traduction par un traducteur agréé.",
        "Un test TCF ou TEF de plus de 2 ans, ou de niveau B1 au lieu de B2.",
        "Un dossier sans l'attestation de l'examen civique.",
        "Des revenus irréguliers, ou des impôts non payés.",
        "Une absence à l'entretien sans raison valable.",
      ],
    },
    {
      type: "p",
      texte: "Les raisons d'un refus et la façon de le contester sont détaillées dans notre article sur la [naturalisation refusée](/articles/naturalisation-francaise-refusee-2026-raisons-cachees-contester-recours).",
    },
    {
      type: "h2",
      texte: "Comment contester un refus ?",
      id: "recours",
    },
    {
      type: "p",
      texte: "Vous avez **2 mois** après la notification pour faire un recours auprès du ministre chargé des naturalisations. C'est un recours administratif préalable obligatoire : il faut le faire avant d'aller au tribunal. Si vous avez déposé en ligne, il passe par le formulaire de votre espace personnel (F2213).",
    },
    {
      type: "p",
      texte: "Le ministre a 4 mois pour répondre. S'il refuse, ou ne répond pas, vous avez 2 mois pour saisir le tribunal administratif de Nantes : le juge qui contrôle les décisions de l'État. Pour un cas précis, demandez conseil à un avocat ou à une association comme La Cimade.",
    },
    {
      type: "h2",
      texte: "Après le décret : cérémonie et papiers français",
      id: "apres-naturalisation",
    },
    {
      type: "p",
      texte: "En cas d'accord, un décret est publié au Journal officiel, le journal où l'État publie ses textes. Il prend effet le jour de sa signature (F2213). Vos enfants mineurs qui vivent avec vous peuvent devenir français s'ils sont inscrits dans ce décret.",
    },
    {
      type: "p",
      texte: "Vous êtes ensuite invité à une cérémonie d'accueil dans la citoyenneté française. Le préfet l'organise, en principe dans les 6 mois après la publication du décret ([service-public, F15868](https://www.service-public.gouv.fr/particuliers/vosdroits/F15868)). Vous y recevez une lettre du président de la République, la charte des droits et devoirs et la Déclaration de 1789.",
    },
    {
      type: "p",
      texte: "La loi française n'exige pas de renoncer à votre nationalité d'origine ([service-public, F334](https://www.service-public.gouv.fr/particuliers/vosdroits/F334)). Votre pays, lui, peut avoir d'autres règles : notre article sur la [double nationalité](/articles/double-nationalite-france-2026-pays-interdisent-risques-declaration) fait le point.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "5 ans de résidence en règle générale, un titre de séjour valide, des revenus stables, le niveau B2 et l'examen civique réussi (32 sur 40).\nUn timbre de 255 €, puis 18 mois au plus d'instruction, ou 12 mois après 10 ans en France.\nAvant de lancer le dossier, vérifiez en une minute si l'examen vous concerne avec notre [simulateur d'éligibilité](/eligibilite-examen-civique).",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien de temps faut-il pour être naturalisé en France en 2026 ?",
      reponse: "L'administration a 18 mois au plus pour répondre, à partir du récépissé de votre dossier complet. Ce délai passe à 12 mois si vous vivez en France depuis au moins 10 ans. Il peut être prolongé une fois de 3 mois. Aucune source officielle ne donne de délai moyen par préfecture.",
    },
    {
      question: "Quel niveau de français faut-il pour la naturalisation en 2026 ?",
      reponse: "Il faut le niveau B2, à l'oral et à l'écrit, pour les demandes déposées depuis le 1er janvier 2026. Vous le prouvez avec un diplôme français, comme le brevet, ou un test TCF ou TEF de moins de 2 ans. Des dispenses existent pour raison de santé ou de handicap.",
    },
    {
      question: "Combien coûte une demande de naturalisation ?",
      reponse: "La demande coûte un timbre fiscal de 255 €, ou 127,50 € en Guyane, depuis le 1er mai 2026. Avant cette date, il coûtait 55 €. Il faut y ajouter les frais de traduction des documents, du test de langue et de l'examen civique, qui varient selon les prestataires.",
    },
    {
      question: "Peut-on garder sa nationalité d'origine en devenant français ?",
      reponse: "La loi française n'exige pas de renoncer à votre nationalité d'origine pour être naturalisé. Mais certains pays retirent leur nationalité à ceux qui en prennent une autre. Renseignez-vous auprès du consulat de votre pays avant de déposer votre demande, pour connaître ses règles exactes.",
    },
  ],
  sources: [
    {
      titre: "Service-public : naturalisation française par décret (F2213)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : comment justifier de son niveau en français pour la naturalisation (F11926)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11926",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : naturalisation française, comment passer l'examen civique ? (F39426)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39426",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : titres de séjour et nationalité, hausse des taxes au 1er mai 2026 (A18881)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18881",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : la cérémonie d'accueil dans la citoyenneté française (F15868)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F15868",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : avoir plusieurs nationalités en France (F334)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F334",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Décret n° 2025-648 du 15 juillet 2025 (niveau B2 et examen civique) : Légifrance",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051900519",
      type: "juridique",
      luLe: "2026-10-20",
    },
    {
      titre: "Ministère de l'Intérieur : informations générales sur l'examen civique",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/",
      type: "officiel",
      luLe: "2026-10-20",
    },
  ],
  aLireAussi: [
    {
      slug: "dossier-naturalisation-2026-documents-delais-prefecture-anef",
      ancre: "Dossier de naturalisation 2026",
    },
    {
      slug: "entretien-naturalisation-2026-preparation-assimilation-prefecture",
      ancre: "Préparer l'entretien de naturalisation",
    },
    {
      slug: "niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation",
      ancre: "Niveau de français requis (B2)",
    },
    {
      slug: "droit-de-vote-elections-france-2026-guide-citoyen",
      ancre: "Droits civiques après naturalisation",
    },
  ],
};

export default article;
