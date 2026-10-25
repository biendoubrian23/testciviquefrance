import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-cout-naturalisation-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/cout-naturalisation-francaise-2026-budget-complet-timbre-fiscal`).
 *
 * Réécrit par le robot éditorial le 25/10/2026 (`docs/seo/ROBOT.md`), liste
 * « à revérifier » : l'article annonçait un niveau de français B1 (B2 pour les
 * demandes déposées depuis le 01/01/2026, F11926 et décret n° 93-1362,
 * art. 37), un examen civique à 70 à 90 € (60 à 80 € selon la réponse
 * ministérielle à la QE n° 11488), une dispense « pour raison d'âge » que les
 * textes ne prévoient pas, et des prix de tests, de traductions et de photos
 * sans source. Le timbre de 255 € était juste (F32952, A18881). Sources lues
 * le 25/10/2026.
 */
const article: Article = {
  slug: "cout-naturalisation-francaise-2026-budget-complet-timbre-fiscal",
  titre: "Coût de la naturalisation française en 2026 : le timbre de 255 € et les autres frais à prévoir",
  titreSeo: "Coût de la naturalisation en 2026 : 255 € et plus",
  resume: "Naturalisation en 2026 : le timbre fiscal de 255 € (127,50 € en Guyane), l'examen civique, le test de français B2 et les traductions, sources officielles.",
  chapo: "Une demande de naturalisation coûte ==255 €== de timbre fiscal depuis le 1er mai 2026 (127,50 € en Guyane). À ce montant s'ajoutent des frais qui dépendent de votre situation : l'examen civique, le justificatif de français de niveau B2 et la traduction de vos documents. Voici chaque poste, avec sa source officielle.",
  publieLe: "2026-06-04",
  modifieLe: "2026-10-25",
  minutes: 7,
  theme: "coût naturalisation 2026",
  motsCles: [
    "coût naturalisation 2026",
    "timbre fiscal naturalisation",
    "timbre fiscal naturalisation 255 euros",
    "combien coûte la naturalisation française",
    "prix dossier naturalisation",
    "timbre fiscal naturalisation comment acheter",
    "frais naturalisation française 2026",
    "naturalisation 55 euros 255 euros",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/cout-naturalisation-euros.webp",
    alt: "Billets de 10 et 20 euros et pièces de monnaie posés sur une table",
    largeur: 960,
    hauteur: 640,
    credit: "Martin Vorel, via StockSnap",
    licence: "CC0",
    source: "https://stocksnap.io/photo/money-euros-WX191DV28C",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Correction du 25 octobre 2026",
      texte: "Une version précédente de cet article indiquait un niveau de français B1 : pour une demande déposée depuis le 1er janvier 2026, c'est le niveau ==B2==. Elle donnait aussi un prix de l'examen civique de 70 à 90 € et une dispense de test « pour raison d'âge ». Elle chiffrait enfin des tests, des traductions et des photos sans source officielle. Ces points sont corrigés ou retirés ci-dessous.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Combien coûte le timbre fiscal de naturalisation ?",
    },
    {
      type: "p",
      texte: "La naturalisation par décret, c'est la décision de l'État qui donne la nationalité française à une personne étrangère qui la demande. Le timbre fiscal est une taxe que vous payez à l'État pour déposer cette demande. Pour une demande de nationalité française, il coûte ==255 €==, et 127,50 € en Guyane ([service-public, F32952](https://www.service-public.gouv.fr/particuliers/vosdroits/F32952)). Ce montant vaut pour la naturalisation, la réintégration et les déclarations de nationalité : par mariage, comme ascendant, frère ou sœur d'une personne française.",
    },
    {
      type: "p",
      texte: "Avant le 1er mai 2026, ce timbre coûtait 55 € (27,50 € en Guyane). La hausse vient de l'article 128 de la loi de finances pour 2026, la loi qui fixe chaque année les impôts et les dépenses de l'État ([service-public, actualité A18881](https://www.service-public.gouv.fr/particuliers/actualites/A18881)). La même loi a relevé les taxes des titres de séjour : notre article sur [les taxes des titres de séjour](/articles/hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances) les détaille.",
    },
    {
      type: "tableau",
      entetes: ["Votre situation", "Ce que vous payez"],
      lignes: [
        ["Vous vivez en France (hors Guyane)", "Un timbre fiscal de 255 €."],
        ["Vous vivez en Guyane", "Un timbre fiscal de 127,50 €."],
        ["Vous vivez à l'étranger", "Des « droits de chancellerie », payés au consulat lors du dépôt. Le consulat dit quels moyens de paiement il accepte."],
      ],
    },
    {
      type: "h2",
      texte: "Comment acheter le timbre, et que faire s'il ne sert pas ?",
    },
    {
      type: "p",
      texte: "En France, le timbre est **électronique**. Vous l'achetez en ligne sur [timbres.impots.gouv.fr](https://timbres.impots.gouv.fr), ou dans un bureau de tabac agréé. Pour une naturalisation ou une réintégration, vous pouvez aussi payer pendant la démarche en ligne ([F32952](https://www.service-public.gouv.fr/particuliers/vosdroits/F32952)).",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Le timbre électronique est ==valable 1 an== à partir de son achat.",
        "S'il n'a pas servi, vous pouvez demander son remboursement en ligne dans les 18 mois qui suivent l'achat ([F32952](https://www.service-public.gouv.fr/particuliers/vosdroits/F32952)).",
        "Choisissez bien la catégorie « nationalité » : un timbre acheté pour un titre de séjour ne correspond pas à cette démarche.",
        "Gardez le justificatif d'achat et son numéro jusqu'à la fin de la procédure.",
      ],
    },
    {
      type: "p",
      texte: "Le remboursement prévu par service-public concerne un timbre ==non utilisé==. Achetez-le donc quand votre dossier est complet, juste avant le dépôt.",
    },
    {
      type: "h2",
      texte: "Combien coûte l'examen civique ?",
    },
    {
      type: "p",
      texte: "Pour une demande de naturalisation déposée depuis le 1er janvier 2026, il faut avoir réussi l'**examen civique**. C'est un questionnaire de 40 questions sur la France, ses valeurs et ses institutions ([service-public, F39426](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426)). L'attestation de réussite fait partie des pièces du dossier.",
    },
    {
      type: "p",
      texte: "L'État ne fixe pas un prix unique. Selon le ministère de l'Intérieur, chaque centre agréé fixe le sien, ==entre 60 et 80 €== ([réponse ministérielle publiée le 11 août 2026](https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488)). L'examen peut être repassé « autant de fois que nécessaire », mais chaque passage se paie. Notre article sur [l'examen civique pour la naturalisation](/articles/examen-civique-naturalisation) explique l'inscription et la préparation.",
    },
    {
      type: "h2",
      texte: "Combien coûte le justificatif de français ?",
    },
    {
      type: "p",
      texte: "Pour une demande déposée depuis le 1er janvier 2026, il faut prouver le niveau ==B2== en français, à l'oral et à l'écrit ([décret n° 93-1362, article 37](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000051906771)). B2 est un niveau du cadre européen des langues : il permet de comprendre l'essentiel d'un texte complexe et de discuter avec aisance.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Sans frais nouveaux** si vous avez déjà un diplôme accepté ([service-public, F11926](https://www.service-public.gouv.fr/particuliers/vosdroits/F11926)). Par exemple : le brevet, un diplôme d'État de niveau 3 au moins, ou une certification professionnelle de niveau 3 au moins enregistrée au répertoire national.",
        "**Le prix d'un test** sinon : le TCF (France Éducation international) ou le TEF (CCI Paris Île-de-France). L'attestation doit avoir moins de 2 ans. Le prix est fixé par le centre de test : demandez-le avant de vous inscrire.",
      ],
    },
    {
      type: "p",
      texte: "Certaines personnes sont dispensées du justificatif de français. C'est le cas si un handicap ou un état de santé rend l'évaluation impossible, avec un certificat médical. C'est aussi le cas d'une personne réfugiée ou apatride de plus de 70 ans qui réside en France depuis au moins 15 ans : les trois conditions sont obligatoires ([F11926](https://www.service-public.gouv.fr/particuliers/vosdroits/F11926)). L'âge seul ne suffit pas. Notre article sur [les niveaux de français exigés](/articles/niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation) détaille les justificatifs.",
    },
    {
      type: "h2",
      texte: "Quels autres frais prévoir ?",
    },
    {
      type: "p",
      texte: "Le reste dépend de vos documents. Service-public ne donne pas de prix pour ces postes : demandez un devis avant de commander.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Les traductions.** Chaque document rédigé dans une langue étrangère doit être traduit en français par un traducteur agréé. Vous joignez l'original de la traduction ([F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)). Un extrait plurilingue d'acte de naissance ou de mariage qui comporte le français n'a pas besoin d'être traduit.",
        "**La légalisation ou l'apostille.** Certains documents étrangers doivent être légalisés ou apostillés, c'est-à-dire authentifiés par une autorité, pour être acceptés en France (même fiche F2213).",
        "**Les déplacements**, vers le centre d'examen puis vers la préfecture pour l'entretien d'assimilation. La préfecture, c'est l'administration de l'État dans votre département.",
      ],
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Aucun intermédiaire ne peut acheter une décision ou « accélérer » un dossier contre paiement. La démarche se fait sur le téléservice officiel ou auprès de l'administration. Notre page sur [les arnaques visant les étrangers](/articles/arnaques-etrangers-france-2026-faux-avocats-prefecture-anef) en décrit plusieurs.",
        "Un dossier incomplet peut être classé sans suite. Vérifiez la liste des pièces sur service-public avant d'acheter le timbre.",
      ],
    },
    {
      type: "h2",
      texte: "Quel budget prévoir, poste par poste ?",
    },
    {
      type: "tableau",
      entetes: ["Poste", "Montant", "Source"],
      lignes: [
        ["Timbre fiscal", "255 € (127,50 € en Guyane)", "Service-public, F32952"],
        ["Examen civique", "60 à 80 € par passage, selon le centre", "Ministère de l'Intérieur, réponse du 11/08/2026"],
        ["Test de français B2", "Prix du centre de test, ou aucun si vous avez un diplôme accepté", "Service-public, F11926"],
        ["Traductions, légalisation", "Selon le nombre de documents et le traducteur", "Service-public, F2213"],
      ],
    },
    {
      type: "p",
      texte: "Les deux montants officiels, timbre et examen, font déjà entre 315 € et 335 € pour une personne qui vit hors de Guyane et réussit l'examen du premier coup. Le reste varie trop d'une personne à l'autre pour être chiffré ici.",
    },
    {
      type: "encadre",
      titre: "Le poste que vous pouvez réduire",
      texte: "Le seul frais que la préparation peut faire baisser, c'est l'examen civique : chaque échec se repaie. Avant de vous inscrire, testez-vous sur des questions types et repérez la thématique qui vous fait perdre des points. Pour savoir en une minute si l'examen vous concerne, utilisez la [page d'éligibilité](/eligibilite-examen-civique). Pour toutes les étapes de la demande, lisez notre [guide complet de la naturalisation](/articles/naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet).",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Combien coûte la naturalisation française en 2026 ?",
      reponse: "Le timbre fiscal coûte 255 €, ou 127,50 € en Guyane, depuis le 1er mai 2026. Il faut ajouter l'examen civique : de 60 à 80 € selon le centre, d'après le ministère de l'Intérieur. Prévoyez aussi un test de français B2 si vous n'avez pas de diplôme accepté, et la traduction de vos documents étrangers.",
    },
    {
      question: "Où acheter le timbre fiscal pour la naturalisation ?",
      reponse: "En France, le timbre est électronique. Vous l'achetez sur le site timbres.impots.gouv.fr ou dans un bureau de tabac agréé. Pour une naturalisation par décret, vous pouvez aussi payer pendant la démarche en ligne. À l'étranger, vous payez des droits de chancellerie au consulat, au moment du dépôt du dossier.",
    },
    {
      question: "Le timbre fiscal de naturalisation est-il remboursable ?",
      reponse: "Selon service-public, un timbre électronique non utilisé peut être remboursé : la demande se fait en ligne, dans les 18 mois qui suivent l'achat. Le timbre est valable 1 an. Le remboursement vise un timbre qui n'a pas servi : achetez-le quand votre dossier est complet, juste avant le dépôt.",
    },
    {
      question: "Pourquoi le timbre de naturalisation est-il passé de 55 à 255 euros ?",
      reponse: "L'article 128 de la loi de finances pour 2026, du 19 février 2026, a relevé ce droit de timbre. Le nouveau montant s'applique depuis le 1er mai 2026, selon service-public. Il vaut pour la naturalisation, la réintégration et les déclarations de nationalité. En Guyane, il est passé de 27,50 € à 127,50 €.",
    },
  ],
  sources: [
    {
      titre: "Service-public : timbre fiscal pour une demande de nationalité française (F32952)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F32952",
      type: "officiel",
      luLe: "2026-10-25",
    },
    {
      titre: "Service-public : titres de séjour et nationalité, hausse des taxes au 1er mai 2026 (actualité A18881)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18881",
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
      titre: "Service-public : naturalisation française, comment passer l'examen civique ? (F39426)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39426",
      type: "officiel",
      luLe: "2026-10-25",
    },
    {
      titre: "Légifrance : décret n° 93-1362 du 30 décembre 1993, article 37, version en vigueur",
      url: "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000051906771",
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
