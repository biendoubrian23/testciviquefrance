import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 25/10/2026 (`docs/seo/ROBOT.md`).
 * Requête visée : « examen civique naturalisation » (1 k à 10 k recherches
 * par mois, + 900 % sur trois mois, Planificateur de mots clés, France,
 * 25/10/2026), avec « examen civique naturalisation inscription » et
 * « examen civique naturalisation questions » (100 à 1 k chacune). Famille
 * examen civique. Sources lues le 25/10/2026 : décret n° 93-1362, articles 37
 * et 37-1 (Légifrance) ; arrêtés du 10/10/2025 et du 30/12/2025 ;
 * service-public F39426, F2213, F11926, F39530 ; ministère de l'Intérieur
 * (DGEF), page des procédures et liste officielle des questions ; réponse
 * ministérielle à la question écrite n° 11488.
 */
const article: Article = {
  slug: "examen-civique-naturalisation",
  titre: "Examen civique pour la naturalisation : pourquoi le passer avant de déposer votre dossier ?",
  titreSeo: "Examen civique naturalisation : quand et comment",
  resume: "Examen civique pour la naturalisation : qui le passe, pourquoi avant le dépôt du dossier, le format, l'inscription et la préparation, sources officielles.",
  chapo: "Pour une demande de naturalisation déposée depuis le 1er janvier 2026, la réussite à l'examen civique est obligatoire. L'attestation de réussite fait partie des ==pièces du dossier== : il faut donc passer l'examen **avant** de déposer votre demande. Voici qui est concerné, comment se passe l'épreuve et comment s'y préparer, d'après les textes officiels.",
  publieLe: "2026-10-25",
  modifieLe: "2026-10-25",
  minutes: 8,
  theme: "examen civique naturalisation",
  motsCles: [
    "examen civique naturalisation",
    "examen civique naturalisation inscription",
    "examen civique naturalisation questions",
    "liste questions examen civique naturalisation",
    "examen civique mention naturalisation",
    "examen civique nationalité française",
    "niveau B2 naturalisation",
  ],
  rubrique: "preparation",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/examen-civique-naturalisation.webp",
    alt: "Buste en bronze de Marianne, coiffée du bonnet phrygien, dans une salle aux boiseries",
    largeur: 1023,
    hauteur: 680,
    credit: "zigazou76, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/38712296@N07/8186809986",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qui doit passer l'examen civique pour la naturalisation ?",
    },
    {
      type: "p",
      texte: "La naturalisation, c'est la décision de l'État qui donne la nationalité française à une personne étrangère qui la demande. Elle prend la forme d'un **décret**, un texte signé par le gouvernement. La réintégration suit la même voie : elle concerne une personne qui a déjà été française et qui a perdu cette nationalité.",
    },
    {
      type: "p",
      texte: "Pour ces deux demandes, l'examen civique est obligatoire si votre dossier a été ==déposé à compter du 1er janvier 2026==. La règle est écrite dans le décret n° 93-1362, article 37, modifié en juillet 2025 ([Légifrance](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000051906771)). Le ministère de l'Intérieur le rappelle sur sa [page des procédures](https://www.immigration.interieur.gouv.fr/devenir-francais/procedures-dacces-a-nationalite-francaise).",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Concernés** : la naturalisation par décret et la réintégration par décret ([service-public, F39426](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426)).",
        "**Pas concernés** : les déclarations de nationalité, par exemple après un mariage avec une personne française, ou comme ascendant, frère ou sœur d'une personne française (même fiche F39426).",
        "**Attention** : la déclaration par mariage n'a pas d'examen civique, mais elle demande aussi le niveau de français B2 depuis le 1er janvier 2026 ([ministère de l'Intérieur](https://www.immigration.interieur.gouv.fr/devenir-francais/procedures-dacces-a-nationalite-francaise)).",
      ],
    },
    {
      type: "p",
      texte: "Vous visez d'abord une carte de séjour ou une carte de résident ? L'examen existe aussi pour ces titres, avec d'autres règles : notre article sur [l'examen civique pour la carte de résident](/articles/examen-civique-carte-de-resident) les compare.",
    },
    {
      type: "h2",
      texte: "Pourquoi faut-il le passer avant de déposer votre dossier ?",
    },
    {
      type: "p",
      texte: "Parce que l'attestation de réussite à l'examen civique est une ==pièce obligatoire du dossier==. Le décret n° 93-1362 la range parmi les documents à fournir, à côté du justificatif de niveau de français ([article 37-1](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000051906775)). Service-public la place dans la liste des pièces, pour une demande en ligne comme par courrier ([F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)).",
    },
    {
      type: "p",
      texte: "Un dossier incomplet ne part pas en instruction. La plateforme de naturalisation, le service de l'État qui étudie votre demande, peut vous demander les pièces qui manquent. Si vous ne les envoyez pas à temps, elle peut classer le dossier sans suite ([ministère de l'Intérieur](https://www.immigration.interieur.gouv.fr/devenir-francais/procedures-dacces-a-nationalite-francaise)).",
    },
    {
      type: "encadre",
      titre: "Deux preuves différentes, à ne pas confondre",
      texte: "L'examen civique vérifie vos connaissances sur la France. Il ne prouve pas votre niveau de français.\nPour la naturalisation, il faut **aussi** le niveau ==B2== à l'oral et à l'écrit. B2 est un niveau du cadre européen des langues : il permet de comprendre l'essentiel d'un texte complexe et de discuter avec aisance. Il se prouve par un diplôme français ou par un test TCF ou TEF de moins de 2 ans ([service-public, F11926](https://www.service-public.gouv.fr/particuliers/vosdroits/F11926)). Notre article sur [les niveaux de français exigés](/articles/niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation) détaille ces justificatifs.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Comment se passe l'épreuve ?",
    },
    {
      type: "p",
      texte: "L'examen est un **QCM**, un questionnaire à choix multiples : pour chaque question, vous choisissez une réponse parmi quatre. Il se passe sur ordinateur, en français. Son format est fixé par l'arrêté du 10 octobre 2025 ([Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620)) :",
    },
    {
      type: "tableau",
      entetes: ["Point", "Ce que prévoit l'arrêté"],
      lignes: [
        ["Nombre de questions", "40, dont 28 questions de connaissance et 12 mises en situation."],
        ["Durée", "45 minutes au plus, sauf aménagement pour raison médicale."],
        ["Pour réussir", "80 % de bonnes réponses, soit 32 sur 40."],
        ["Notation", "1 point par bonne réponse, 0 pour une erreur ou une absence de réponse."],
      ],
    },
    {
      type: "p",
      texte: "Une **mise en situation** est une question qui décrit un cas de la vie courante et vous demande la bonne réaction. Les 40 questions sont réparties entre cinq thématiques, toujours de la même façon :",
    },
    {
      type: "tableau",
      entetes: ["Thématique", "Questions", "Dont mises en situation"],
      lignes: [
        ["Principes et valeurs de la République", "11", "6"],
        ["Système institutionnel et politique", "6", "0"],
        ["Droits et devoirs", "11", "6"],
        ["Histoire, géographie et culture", "8", "0"],
        ["Vivre dans la société française", "4", "0"],
      ],
    },
    {
      type: "p",
      texte: "Les deux premières lignes du tableau pèsent lourd : 22 questions sur 40. Les mises en situation y sont toutes. Notre page d'[exemples de questions corrigées](/articles/examen-civique-2026-exemples-questions-corrigees) vous montre à quoi elles ressemblent.",
    },
    {
      type: "h2",
      texte: "Où et comment s'inscrire ?",
    },
    {
      type: "p",
      texte: "Deux organismes sont agréés par le ministère de l'Intérieur pour l'examen avec la mention « naturalisation » ([ministère de l'Intérieur](https://www.immigration.interieur.gouv.fr/devenir-francais/procedures-dacces-a-nationalite-francaise)). Le premier est la **CCI Paris Île-de-France**, la chambre de commerce et d'industrie. Le second est **France Éducation international** (FEI), un établissement public.",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Cherchez un centre près de chez vous sur la carte des centres de la [CCI Paris Île-de-France](https://www.service-public.gouv.fr/particuliers/vosdroits/R74875) ou sur celle de [FEI](https://www.service-public.gouv.fr/particuliers/vosdroits/R75684).",
        "Pour FEI, remplissez d'abord la [préinscription en ligne](https://www.service-public.gouv.fr/particuliers/vosdroits/R75549). Le centre vous contacte ensuite pour la date.",
        "Payez le prix demandé par le centre. Selon le ministère de l'Intérieur, il va de ==60 à 80 €== et chaque centre fixe le sien ([réponse ministérielle publiée le 11 août 2026](https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488)).",
        "Venez le jour J avec la pièce d'identité demandée par le centre, et gardez précieusement l'attestation de réussite.",
      ],
    },
    {
      type: "p",
      texte: "Si vous vivez à l'étranger, adressez-vous à un institut français, à une alliance française ou au consulat ([F39426](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426)). Pour en savoir plus sur les centres, lisez notre article sur les [centres agréés](/articles/centres-agrees-examen-civique-2026).",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Un nom proche n'est pas un centre d'examen.** Test Civique France, le site que vous lisez, est une plateforme de préparation. Il ne fait pas passer l'examen officiel et ne délivre pas d'attestation.",
        "**La fraude coûte cher.** Une tentative de fraude interdit de repasser l'examen pendant 2 ans ([arrêté du 10 octobre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620)).",
        "**Un échec n'est pas définitif.** Le ministère indique que l'examen peut être repassé « autant de fois que nécessaire » (réponse du 11 août 2026). Chaque passage se paie. Notre article sur [l'échec à l'examen](/articles/rater-examen-civique-2026-repasser-delai-cout-themes-echec) donne la marche à suivre.",
      ],
    },
    {
      type: "h2",
      texte: "Comment vous préparer avec les documents officiels ?",
    },
    {
      type: "p",
      texte: "Le ministère de l'Intérieur publie une ==liste officielle des questions de connaissance== pour la mention « naturalisation », mise en ligne le 12 janvier 2026 ([télécharger la liste](https://www.immigration.interieur.gouv.fr/documentation/guides-textes-et-brochures/questions-de-connaissance-pour-lexamen-civique-nationalite-francaise.html)). Elle compte près de 250 questions, rangées par thématique. Les mises en situation, elles, ne sont pas publiées.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Le livret du citoyen**, approuvé par un arrêté du 3 juillet 2026 : il résume l'histoire, les institutions et les valeurs à connaître ([F39426](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426)).",
        "**La charte des droits et devoirs du citoyen français** : elle sert de base aux questions sur la citoyenneté.",
        "**La liste officielle des questions** : lisez-la par thématique, en commençant par les principes et valeurs, puis les droits et devoirs.",
        "**Des mises en situation d'entraînement** : comme les vraies ne sont pas publiées, entraînez-vous sur des cas types, avec la correction.",
      ],
    },
    {
      type: "qcm",
      thematique: "Système institutionnel et politique",
      question: "À qui appartient la souveraineté nationale en France ?",
      choix: [
        "Au président de la République",
        "Au peuple",
        "Au Parlement",
        "Au gouvernement",
      ],
      reponse: 1,
      explication: "L'article 3 de la Constitution dit que « la souveraineté nationale appartient au peuple ». Le peuple l'exerce par ses représentants élus et par le référendum. Cette question type reprend une notion de la liste officielle de la mention « naturalisation ».",
    },
    {
      type: "cta",
      texte: "La liste officielle ne contient pas les mises en situation. Testez-vous sur 40 questions types, mises en situation comprises, et voyez quelle thématique vous fait perdre des points.",
      bouton: "Faire un examen blanc gratuit",
    },
    {
      type: "h2",
      texte: "Et si vous ne pouvez pas passer l'examen ?",
    },
    {
      type: "p",
      texte: "Un handicap ou un état de santé peut demander un **aménagement** de l'épreuve, par exemple plus de temps. S'il rend toute évaluation impossible, il peut ouvrir une **dispense** de l'attestation. Dans les deux cas, il faut un certificat médical sur le modèle fixé par l'arrêté du 30 décembre 2025 ([Légifrance](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000053227374)). Ce texte dispense aussi de l'examen les personnes qui ne lisent que le braille.",
    },
    {
      type: "p",
      texte: "Les textes que nous avons lus ne prévoient ==pas de dispense liée à l'âge== pour l'examen de la naturalisation. Ne la confondez pas avec la règle des titres de séjour. Pour une carte de séjour pluriannuelle ou une carte de résident, les personnes de plus de 65 ans sont dispensées ([service-public, F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)). Pour votre cas précis, interrogez la plateforme de naturalisation ou le Centre de contact citoyens Nationalité française, au 0806 001 620.",
    },
    {
      type: "encadre",
      titre: "Outre-mer : le dépôt n'est pas toujours en ligne",
      texte: "En Guyane, le dossier se dépose à la préfecture. La préfecture, c'est l'administration de l'État dans le département. À Saint-Barthélemy, Saint-Martin, Saint-Pierre-et-Miquelon, Wallis-et-Futuna, en Polynésie française et en Nouvelle-Calédonie, le dépôt en ligne n'est pas possible ([F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)). L'attestation de réussite à l'examen reste une pièce du dossier : demandez au centre le plus proche les dates de session.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Dans quel ordre faire les choses ?",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Vérifiez les conditions de la naturalisation (5 ans de résidence en règle générale, titre de séjour valable) dans notre [guide complet de la naturalisation](/articles/naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet).",
        "Obtenez votre justificatif de français B2, si vous ne l'avez pas déjà. Un test TCF ou TEF doit avoir moins de 2 ans.",
        "Préparez puis passez l'examen civique, et gardez l'attestation.",
        "Prévoyez le timbre fiscal de 255 € et les autres frais : notre article sur [le coût de la naturalisation](/articles/cout-naturalisation-francaise-2026-budget-complet-timbre-fiscal) les détaille.",
        "Déposez le dossier complet, puis préparez l'[entretien d'assimilation](/articles/entretien-naturalisation-2026-preparation-assimilation-prefecture) à la préfecture.",
      ],
    },
    {
      type: "p",
      texte: "Après une réponse positive, votre nom paraît dans un décret au Journal officiel. Notre article sur [le décret de naturalisation](/articles/decret-de-naturalisation-trouver-et-apres) explique comment le trouver et les démarches qui suivent.",
    },
  ],
  faq: [
    {
      question: "Comment s'inscrire à l'examen civique pour la naturalisation ?",
      reponse: "Deux organismes agréés font passer l'examen mention « naturalisation » : la CCI Paris Île-de-France et France Éducation international. Cherchez un centre sur leur carte, sur service-public. Pour France Éducation international, faites d'abord la préinscription en ligne ; le centre vous recontacte. Le prix est fixé par chaque centre, de 60 à 80 € selon le ministère.",
    },
    {
      question: "Combien de questions à l'examen civique pour la naturalisation ?",
      reponse: "L'épreuve compte 40 questions : 28 questions de connaissance et 12 mises en situation, en 45 minutes au plus. Il faut 32 bonnes réponses pour réussir. Pour réviser, le ministère de l'Intérieur publie une liste officielle des questions de connaissance de la mention « naturalisation » ; les mises en situation ne sont pas publiées.",
    },
    {
      question: "Faut-il passer l'examen civique pour une naturalisation par mariage ?",
      reponse: "Non. Selon service-public, l'examen civique concerne la naturalisation et la réintégration par décret. La déclaration de nationalité après un mariage avec une personne française n'en relève pas. En revanche, depuis le 1er janvier 2026, cette déclaration demande un niveau de français B2 à l'oral et à l'écrit.",
    },
    {
      question: "Quel niveau de français pour la naturalisation en 2026 ?",
      reponse: "Pour une demande de naturalisation déposée depuis le 1er janvier 2026, il faut le niveau B2 à l'oral et à l'écrit. Il se prouve par un diplôme français, comme le brevet, ou par une attestation TCF ou TEF de moins de 2 ans. Ce justificatif s'ajoute à l'attestation de réussite à l'examen civique.",
    },
  ],
  sources: [
    {
      titre: "Légifrance : décret n° 93-1362 du 30 décembre 1993, article 37 (niveau B2, examen civique), version en vigueur",
      url: "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000051906771",
      type: "officiel",
      luLe: "2026-10-25",
    },
    {
      titre: "Légifrance : décret n° 93-1362 du 30 décembre 1993, article 37-1 (pièces du dossier), version en vigueur",
      url: "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000051906775",
      type: "officiel",
      luLe: "2026-10-25",
    },
    {
      titre: "Légifrance : arrêté du 10 octobre 2025 relatif au programme, aux épreuves et aux modalités d'organisation de l'examen civique",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620",
      type: "officiel",
      luLe: "2026-10-25",
    },
    {
      titre: "Légifrance : arrêté du 30 décembre 2025 fixant les modalités de dispense des justificatifs de français et de réussite à l'examen civique",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000053227374",
      type: "officiel",
      luLe: "2026-10-25",
    },
    {
      titre: "Service-public : naturalisation française, comment passer l'examen civique ? (F39426)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39426",
      type: "officiel",
      luLe: "2026-10-25",
    },
    {
      titre: "Service-public : naturalisation française par décret (F2213)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      luLe: "2026-10-25",
    },
    {
      titre: "Service-public : nationalité française, justifier de son niveau de français (F11926)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11926",
      type: "officiel",
      luLe: "2026-10-25",
    },
    {
      titre: "Service-public : examen civique pour une carte de séjour pluriannuelle ou une carte de résident (F39530)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530",
      type: "officiel",
      luLe: "2026-10-25",
    },
    {
      titre: "Ministère de l'Intérieur (DGEF) : les procédures d'accès à la nationalité française",
      url: "https://www.immigration.interieur.gouv.fr/devenir-francais/procedures-dacces-a-nationalite-francaise",
      type: "officiel",
      luLe: "2026-10-25",
    },
    {
      titre: "Ministère de l'Intérieur (DGEF) : questions de connaissance pour l'examen civique, nationalité française (publié le 12/01/2026)",
      url: "https://www.immigration.interieur.gouv.fr/documentation/guides-textes-et-brochures/questions-de-connaissance-pour-lexamen-civique-nationalite-francaise.html",
      type: "officiel",
      luLe: "2026-10-25",
    },
    {
      titre: "Assemblée nationale : question écrite n° 11488, réponse du ministère de l'Intérieur publiée le 11/08/2026",
      url: "https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488",
      type: "officiel",
      luLe: "2026-10-25",
    },
  ],
};

export default article;
