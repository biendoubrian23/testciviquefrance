import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026, sans changer d'adresse. Réécrit en entier par le robot
 * éditorial le 24/11/2026 (liste « à revérifier » de `docs/seo/MOTS-CLES.md`) :
 * la version migrée affirmait que « 90 % des candidats » font ces erreurs,
 * donnait des seuils de revenus (1 200 € par mois), un niveau B1, un
 * ajournement de « 1 à 2 ans », « 50 questions » et un recours gracieux puis
 * contentieux, sans aucune source. Tout est réécrit sur le code civil
 * (21-17, 21-23, 21-24, 21-25-1, 21-27, lus le 24/11), service-public F2213
 * (lu le 24/11), F11926 et le décret n° 93-1362 (lus le 23/11).
 */
const article: Article = {
  slug: "refus-naturalisation-7-erreurs-90-pourcent-candidats",
  titre: "Refus de naturalisation : 7 erreurs à éviter avant de déposer votre dossier",
  titreSeo: "Refus de naturalisation : 7 erreurs à éviter",
  resume: "Résidence, français B2, examen civique, ressources, impôts, casier, traductions : les 7 points qui font refuser une naturalisation, et le recours.",
  chapo: "Une demande de naturalisation est refusée ou reportée quand une ==condition de la loi n'est pas remplie==, ou quand le dossier ne la prouve pas. Les conditions sont écrites dans le code civil : résidence, français, examen civique, ressources, impôts, casier judiciaire. Voici les 7 erreurs à éviter, condition par condition, et ce que vous pouvez faire après une réponse négative.",
  publieLe: "2026-04-30",
  modifieLe: "2026-11-24",
  minutes: 8,
  theme: "Refus de naturalisation : les erreurs à éviter",
  motsCles: [
    "refus naturalisation",
    "naturalisation refusée",
    "ajournement naturalisation",
    "erreurs dossier naturalisation",
    "refus naturalisation recours",
    "naturalisation irrecevable",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/decret-de-naturalisation-avignon.webp",
    alt: "Façade en pierre de l'hôtel de ville d'Avignon, avec des drapeaux français aux fenêtres",
    largeur: 1024,
    hauteur: 768,
    credit: "ell brown, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/39415781@N06/5818917417",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Article corrigé le 24 novembre 2026",
      texte: "La version précédente disait que « 90 % des candidats » font ces erreurs. Elle donnait aussi des revenus minimum « non officiels », un niveau de français B1 et un recours faux. Aucune de ces affirmations ne venait d'une source officielle, et plusieurs sont fausses. Cet article est réécrit sur le code civil et service-public.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Refus, ajournement, irrecevabilité : de quoi parle-t-on ?",
    },
    {
      type: "p",
      texte: "La naturalisation par décret, c'est la demande que vous faites à l'État pour devenir français. L'État peut l'accepter ou non. Le [décret n° 93-1362](https://www.legifrance.gouv.fr/codes/section_lc/JORFTEXT000000699753/LEGISCTA000006083937/), articles 43 et 44, prévoit trois réponses négatives :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**L'irrecevabilité** : une condition de la loi manque. Le fond du dossier n'est pas examiné.",
        "**L'ajournement** : la demande est reportée. La décision fixe un délai ou des conditions à remplir avant de redemander.",
        "**Le rejet** : la demande est refusée.",
      ],
    },
    {
      type: "p",
      texte: "Aucun chiffre officiel ne dit quelle part des refus vient de quelle erreur. Les chiffres publiés sont dans [notre article sur les naturalisations en chiffres](/articles/1-etranger-sur-3-nationalite-francaise-chiffres-officiels-2026). Ce qui suit reprend donc les conditions de la loi, une par une.",
    },
    {
      type: "h2",
      texte: "Les 7 erreurs qui font refuser ou reporter une demande",
    },
    {
      type: "h3",
      texte: "1. Déposer avant d'avoir 5 ans de résidence",
    },
    {
      type: "p",
      texte: "Il faut en principe une ==résidence habituelle en France pendant les 5 ans== qui précèdent la demande ([code civil, article 21-17](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006165459/)). La résidence habituelle, c'est le lieu où vous vivez vraiment, avec votre famille et votre travail. La durée est réduite à 2 ans dans certains cas, par exemple après 2 ans d'études supérieures réussies en France ([service-public, F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)). Il faut aussi résider en France le jour où le décret est signé (article 21-16).",
    },
    {
      type: "h3",
      texte: "2. Ne pas avoir le niveau de français B2",
    },
    {
      type: "p",
      texte: "Depuis le 1er janvier 2026, l'article 21-24 du code civil demande un niveau qui permet de comprendre un texte complexe et de parler avec spontanéité. Service-public parle du ==niveau B2==, à l'oral et à l'écrit ([F11926](https://www.service-public.gouv.fr/particuliers/vosdroits/F11926)). Il se prouve par un diplôme ou une attestation de test reconnus. Le B1, qui suffisait avant 2026, ne suffit plus.",
    },
    {
      type: "h3",
      texte: "3. Oublier l'examen civique",
    },
    {
      type: "p",
      texte: "L'assimilation, c'est-à-dire votre intégration dans la société française, est vérifiée par ==la réussite à l'examen civique et un entretien en préfecture== (F2213). L'attestation de réussite fait partie des pièces du dossier. Notre article [examen civique et naturalisation](/articles/examen-civique-naturalisation) explique quel examen passer, et quand.",
    },
    {
      type: "h3",
      texte: "4. Ne pas prouver des ressources stables",
    },
    {
      type: "p",
      texte: "Service-public demande « des revenus stables et suffisants » pour vous et votre foyer fiscal. ==Aucun montant minimum officiel n'existe==. Les chiffres qui circulent sur Internet ne viennent d'aucun texte. Joignez des preuves claires de vos revenus sur plusieurs années : bulletins de salaire, contrat, avis d'imposition.",
    },
    {
      type: "h3",
      texte: "5. Laisser une dette ou une déclaration d'impôts en retard",
    },
    {
      type: "p",
      texte: "Une enquête vérifie votre « comportement civique », manifesté par exemple « par le paiement des impôts », selon F2213. Avant de déposer, vérifiez que toutes vos déclarations sont faites et vos impôts payés. Votre espace sur impots.gouv.fr permet de le voir.",
    },
    {
      type: "h3",
      texte: "6. Cacher ou ignorer une condamnation",
    },
    {
      type: "p",
      texte: "Il faut être « de bonnes vie et mœurs » (article 21-23). Certaines condamnations ==empêchent la naturalisation== ([article 21-27](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006165744/)). C'est le cas d'une peine de 6 mois de prison ou plus sans sursis, quelle que soit l'infraction. C'est aussi le cas d'une condamnation pour terrorisme ou pour atteinte aux intérêts fondamentaux de la Nation. Cette règle ne s'applique pas après une réhabilitation, ni si la condamnation a été retirée du bulletin n° 2 du casier judiciaire. Le bulletin n° 2 est l'extrait du casier que l'administration peut consulter.",
    },
    {
      type: "p",
      texte: "Si une condamnation figure à votre casier, ne cachez rien : l'administration consulte le casier. Faites-vous conseiller par un avocat avant de déposer. Nous expliquons aussi [le lien entre casier judiciaire et titre de séjour](/articles/gta-6-casier-judiciaire-titre-de-sejour).",
    },
    {
      type: "h3",
      texte: "7. Envoyer des pièces non traduites ou incomplètes",
    },
    {
      type: "p",
      texte: "Chaque document en langue étrangère doit être ==traduit en français par un traducteur agréé==, et parfois légalisé ou apostillé, selon F2213. Légaliser ou apostiller, c'est faire certifier qu'un document étranger est authentique. Le dossier comprend aussi un timbre fiscal de 255 € (127,50 € en Guyane) et une copie de votre titre de séjour. Il faut encore vos actes d'état civil et vos justificatifs de domicile, de ressources et d'impôts. Le détail du budget est dans [notre article sur le coût de la naturalisation](/articles/cout-naturalisation-francaise-2026-budget-complet-timbre-fiscal).",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Comptez vos 5 ans de résidence à partir de dates que vous pouvez prouver.",
        "Passez votre test de français B2 et votre examen civique avant le dépôt.",
        "Vérifiez vos impôts et demandez votre casier judiciaire avant de déposer.",
        "Faites traduire chaque document étranger par un traducteur agréé.",
      ],
    },
    {
      type: "h2",
      texte: "Que vérifie l'entretien en préfecture ?",
    },
    {
      type: "p",
      texte: "L'entretien vérifie « votre adhésion aux principes et aux valeurs essentiels de la République », selon F2213. À la fin du contrôle, vous signez la charte des droits et devoirs du citoyen français (article 21-24). Les valeurs, la laïcité et les institutions y reviennent souvent : ce sont aussi les thèmes de l'examen civique.",
    },
    {
      type: "cta",
      texte: "L'examen civique et l'entretien portent sur les mêmes notions. Sur Test Civique France, les cours des 5 thématiques sont gratuits, et les examens blancs de 40 questions vous donnent votre score et la correction de chaque question. L'inscription est gratuite.",
    },
    {
      type: "h2",
      texte: "Que faire après un refus ou un ajournement ?",
    },
    {
      type: "p",
      texte: "L'administration doit répondre dans les ==18 mois== après la remise d'un dossier complet, ou 12 mois si vous résidez en France depuis au moins 10 ans ([article 21-25-1](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006419662)). Après une réponse négative, vous pouvez la contester.",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Faites d'abord un **recours auprès du ministre chargé des naturalisations, dans les 2 mois** après la notification. Ce recours est obligatoire avant le tribunal (décret n° 93-1362, article 45 ; F2213).",
        "Sans réponse du ministre pendant 4 mois, le recours est considéré comme rejeté.",
        "Vous avez alors 2 mois pour saisir le tribunal administratif de Nantes, le tribunal qui juge les litiges avec l'administration.",
      ],
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Un recours « gracieux » à la préfecture ne remplace pas le recours au ministre : c'est le ministre qu'il faut saisir.",
        "Après un ajournement, lisez bien le délai et les conditions écrits dans la décision : ils disent quand redemander.",
      ],
    },
    {
      type: "p",
      texte: "Pour votre cas précis, faites-vous aider par un avocat ou une association, comme La Cimade. Et si vous ne savez pas encore si l'examen civique vous concerne, [vérifiez-le en une minute](/eligibilite-examen-civique).",
    },
  ],
  faq: [
    {
      question: "Quelles sont les causes de refus de naturalisation ?",
      reponse: "La demande est refusée ou reportée quand une condition du code civil manque ou n'est pas prouvée. Il faut 5 ans de résidence habituelle, le français de niveau B2, la réussite à l'examen civique et l'adhésion aux valeurs de la République. Il faut aussi des revenus stables, des impôts payés, et aucune condamnation grave, comme 6 mois de prison ferme ou plus.",
    },
    {
      question: "Quelle est la différence entre ajournement et refus de naturalisation ?",
      reponse: "Le refus, ou rejet, met fin à la demande. L'ajournement la reporte : la décision fixe un délai ou des conditions à remplir avant de redemander, par exemple améliorer vos ressources. L'irrecevabilité, elle, veut dire qu'une condition de la loi manquait dès le départ, et que le fond du dossier n'a pas été examiné.",
    },
    {
      question: "Comment contester un refus de naturalisation ?",
      reponse: "Vous devez d'abord faire un recours auprès du ministre chargé des naturalisations, dans les 2 mois après la notification. Ce recours est obligatoire. Sans réponse pendant 4 mois, il est rejeté, et vous avez 2 mois pour saisir le tribunal administratif de Nantes. Un avocat ou une association peut vous aider pour votre cas.",
    },
    {
      question: "Faut-il un salaire minimum pour être naturalisé ?",
      reponse: "Non, aucun montant minimum n'est fixé par un texte officiel. Service-public demande des revenus stables et suffisants pour subvenir à vos besoins et à ceux de votre foyer fiscal. L'administration regarde votre situation dans son ensemble : la régularité de vos revenus, leur origine, et le paiement de vos impôts.",
    },
  ],
  sources: [
    {
      titre: "Service-public.gouv.fr : Naturalisation par décret (F2213), vérifiée le 16/07/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      luLe: "2026-11-24",
    },
    {
      titre: "Légifrance : code civil, articles 21-16, 21-17, 21-23 et 21-24 (conditions de la naturalisation)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006165459/",
      type: "juridique",
      luLe: "2026-11-24",
    },
    {
      titre: "Légifrance : code civil, article 21-27 (condamnations qui empêchent l'acquisition de la nationalité)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006165744/",
      type: "juridique",
      luLe: "2026-11-24",
    },
    {
      titre: "Légifrance : code civil, article 21-25-1 (délai de réponse)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006419662",
      type: "juridique",
      luLe: "2026-11-24",
    },
    {
      titre: "Légifrance : décret n° 93-1362 du 30 décembre 1993, articles 43 à 45 (irrecevabilité, ajournement, rejet, recours)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/JORFTEXT000000699753/LEGISCTA000006083937/",
      type: "juridique",
      luLe: "2026-11-23",
    },
    {
      titre: "Service-public.gouv.fr : niveau de langue française exigé pour la naturalisation (F11926)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11926",
      type: "officiel",
      luLe: "2026-11-23",
    },
  ],
};

export default article;
