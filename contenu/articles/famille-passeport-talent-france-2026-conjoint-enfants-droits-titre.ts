import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 sans changer d'adresse, puis réécrit par le robot
 * éditorial le 18/11/2026 (`docs/seo/ROBOT.md`, optimisation de priorité 1 :
 * liste « à revérifier » de `MOTS-CLES.md`, 383 impressions, position 9,3).
 * Erreurs corrigées : le PACS présenté comme ouvrant droit à la carte (F35792
 * ne vise que l'époux ou l'épouse) ; une taxe de 225 € (350 €) ; une durée
 * « alignée, jusqu'à 4 ans » (la durée restante de la carte du titulaire) ;
 * une condition de ressources « 2 fois le Smic » et un seuil carte bleue de
 * 53 836 € sans source ; une taxe OFII de 250 € et 50 € et un visa de 99 €
 * sans source ; des délais d'instruction et de consulat inventés ; un
 * maintien « systématique » du titre en cas de violences et une règle des
 * « 3 ans » au divorce sans source ; la naturalisation au niveau B1, un
 * « test civique » à 32 sur 40 et « 1 candidat sur 3 échoue » (81 % de
 * réussite selon la QE n° 11488) ; « 1500+ questions officielles ».
 * Requêtes : « passeport talent famille » 100 à 1 k ; « carte de séjour talent
 * famille », « talent famille », « passeport talent conjoint » 10 à 100
 * (Planificateur, France, toutes les langues, 18/11/2026).
 * Sources lues le 18/11/2026 : service-public F35792 (vérifiée le 01/05/2026),
 * F16922 (vérifiée le 01/06/2026), A18881 (mise à jour le 12/05/2026), F2213
 * (vérifiée le 16/07/2026, par un agent de lecture web) ; décret
 * n° 2026-1001 (lu le 30/10/2026, article dédié). Non écrit : le texte de
 * L. 421-22 du CESEDA (Légifrance en 404 pour l'agent) ; la dispense d'examen
 * civique de la carte talent-famille (non relue) ; le niveau de langue exact
 * de la naturalisation (renvoyé à l'article dédié).
 */
const article: Article = {
  slug: "famille-passeport-talent-france-2026-conjoint-enfants-droits-titre",
  titre: "Famille d'un passeport talent : la carte « talent-famille » pour votre époux ou épouse et vos enfants",
  titreSeo: "Passeport talent famille : la carte talent-famille",
  resume: "Carte talent-famille : qui peut l'avoir (époux, enfants), démarche, documents, 350 €, durée, travail et renouvellement. Le guide vérifié sur service-public.",
  chapo: "Si vous avez une carte de séjour « talent » (l'ancien passeport talent), ==votre époux ou votre épouse== et vos enfants peuvent vous rejoindre sans regroupement familial. Ils obtiennent une carte « talent-famille », qui permet de travailler et dure ==le temps qui reste sur votre carte==. Elle coûte 350 €, et elle ne vise pas le partenaire de PACS.",
  publieLe: "2026-05-09",
  modifieLe: "2026-11-18",
  minutes: 7,
  theme: "La carte de séjour talent-famille : bénéficiaires, démarche, coût, durée et renouvellement",
  motsCles: [
    "passeport talent famille",
    "carte de séjour talent famille",
    "talent famille",
    "passeport talent conjoint",
    "famille accompagnante passeport talent",
    "talent famille travail",
    "talent famille renouvellement",
    "passeport talent enfants",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/famille-carte-talent.webp",
    alt: "Une aire de jeux en bois sous les arbres d'un parc parisien, en été",
    largeur: 1200,
    hauteur: 833,
    credit: "CHABERT Louis, via Wikimedia Commons",
    licence: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Parc_commune_de_Paris_Aire_de_jeux.jpg",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Cet article a été corrigé le 18 novembre 2026",
      texte: "L'ancienne version contenait plusieurs erreurs. Le PACS n'ouvre pas droit à la carte : seul le mariage compte. La taxe est de 350 €, pas de 225 €. La carte ne dure pas « jusqu'à 4 ans » : elle dure le temps qui reste sur la carte du titulaire. Des montants, des délais et un taux d'échec à l'examen sans source ont été retirés. Tout est maintenant vérifié sur service-public.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Qu'est-ce que la carte « talent-famille » ?",
    },
    {
      type: "p",
      texte: "Un titre de séjour est la carte qui autorise un étranger à vivre en France. La carte « talent-famille » est le titre de séjour de la famille d'une personne qui a une carte « talent ». Elle passe par une procédure simple, appelée « famille accompagnante ». Votre famille peut ainsi venir ==sans faire de regroupement familial==, la procédure plus longue des autres titres ([service-public, F16922](https://www.service-public.gouv.fr/particuliers/vosdroits/F16922)).",
    },
    {
      type: "p",
      texte: "Le passeport talent s'appelle carte « talent » depuis la loi du 26 janvier 2024. Les deux noms désignent la même famille de cartes. Notre article sur [la carte talent](/articles/passeport-talent-2026-conditions-metiers-demarches) présente les différentes cartes et leurs conditions.",
    },
    {
      type: "h2",
      texte: "Qui peut obtenir la carte talent-famille ?",
    },
    {
      type: "p",
      texte: "Service-public cite quatre cas ([F35792](https://www.service-public.gouv.fr/particuliers/vosdroits/F35792)) :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Vous avez **plus de 18 ans** et vous êtes **marié ou mariée** à une personne qui a une carte « talent ».",
        "Vous êtes un **enfant du couple**, vous êtes entré en France mineur et vous êtes devenu majeur.",
        "Vous êtes un **enfant du couple de 16 à 18 ans** et vous voulez travailler.",
        "Vous êtes l'époux, l'épouse ou l'enfant d'une personne qui a une carte « talent-carte bleue européenne », et votre famille vivait déjà dans un autre pays de l'Union européenne. Vous demandez alors la carte dans le mois qui suit votre entrée en France.",
      ],
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Le PACS et l'union libre ne suffisent pas** : la fiche vise « votre époux ou votre épouse ». Un couple pacsé doit chercher un autre titre.",
        "**Vos parents ne sont pas concernés** : la famille accompagnante, c'est l'époux ou l'épouse et les enfants mineurs.",
        "**Un enfant de moins de 16 ans n'est pas visé par la fiche** : avant 18 ans, il n'a une carte que s'il veut travailler dès 16 ans. Pour voyager hors de France et revenir, il peut avoir un document de circulation pour étranger mineur ([DCEM](/articles/dcem-document-circulation-mineur)).",
      ],
    },
    {
      type: "h2",
      texte: "Quels sont les droits de la carte talent-famille ?",
    },
    {
      type: "p",
      texte: "La carte « talent-famille » ==permet de travailler==, comme salarié ou à son compte. L'employeur n'a pas d'autorisation de travail à demander, et il ne paie pas la taxe due pour l'emploi d'un étranger (F35792).",
    },
    {
      type: "p",
      texte: "Elle dure ==le temps qui reste== sur la carte « talent » de votre époux ou de votre parent. Si la carte talent expire dans deux ans, la carte talent-famille aussi. Pour savoir combien de temps dure la carte du titulaire, regardez sa date de fin : la carte talent dure 4 ans au plus (F16922).",
    },
    {
      type: "h2",
      texte: "Comment demander la carte, depuis l'étranger ou en France ?",
    },
    {
      type: "p",
      texte: "L'ANEF est le site du ministère de l'Intérieur pour les demandes de titre de séjour. Le VLS-TS est un visa long séjour qui vaut titre de séjour la première année.",
    },
    {
      type: "tableau",
      entetes: ["Votre situation", "Ce que vous faites"],
      lignes: [
        ["Vous vivez à l'étranger", "Vous demandez un visa « talent-famille » au consulat de France (le service des visas de l'ambassade). En France, vous demandez ensuite la carte en ligne, sur l'ANEF."],
        ["Vous êtes en France avec un visa long séjour", "Vous faites la demande sur l'ANEF dans les 2 mois qui suivent votre entrée en France."],
        ["Vous êtes en France avec un VLS-TS ou une carte de séjour", "Vous faites la demande sur l'ANEF au plus tôt 4 mois et au plus tard 2 mois avant la fin de votre document."],
      ],
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Le visa « talent-famille » ou votre titre de séjour en cours de validité.",
        "Votre passeport (pages d'état civil, dates, cachets et visas), ou une pièce d'identité avec photo prévue par la fiche.",
        "Un justificatif de domicile de moins de 6 mois et le code de votre e-photo.",
        "La carte de séjour de votre époux, épouse ou parent.",
        "Un extrait d'acte de mariage récent, ou la copie intégrale de votre acte de naissance avec filiation pour un enfant.",
        "L'engagement signé à respecter les principes de la République.",
      ],
    },
    {
      type: "h2",
      texte: "Combien coûte la carte, et quel délai de réponse ?",
    },
    {
      type: "p",
      texte: "La carte coûte ==350 €== en timbres fiscaux : 50 € de droit de timbre et 300 € de taxe (F35792). C'est le tarif d'une première carte depuis le 1er mai 2026 ([service-public, A18881](https://www.service-public.gouv.fr/particuliers/actualites/A18881)). Vous payez seulement si la carte est accordée, au moment de la remise.",
    },
    {
      type: "p",
      texte: "Depuis le 30 octobre 2026, la préfecture a ==90 jours== pour répondre. Sans réponse, la demande est refusée de façon implicite (décret n° 2026-1001). La fiche F35792 dit encore 4 mois, car elle est en cours de mise à jour. Notre article sur le [délai de 90 jours](/articles/delai-reponse-prefecture-titre-de-sejour-90-jours) explique ce qui change.",
    },
    {
      type: "p",
      texte: "Un refus écrit est souvent accompagné d'une OQTF (une obligation de quitter le territoire français). Vous pouvez le contester devant le tribunal administratif. Pour un cas personnel, faites-vous aider par un avocat ou une association.",
    },
    {
      type: "h2",
      texte: "Comment renouveler la carte talent-famille ?",
    },
    {
      type: "p",
      texte: "Vous la renouvelez sur l'ANEF, de 4 à 2 mois avant sa fin. Après ==5 ans== de séjour en France avec la carte talent-famille, le renouvellement ne peut pas vous être refusé : la nouvelle carte dure 4 ans (F35792).",
    },
    {
      type: "p",
      texte: "Pour la famille d'un titulaire de la carte bleue européenne, la règle est proche. Le renouvellement est garanti après 5 ans de séjour légal et sans interruption dans des pays de l'Union, dont les 2 dernières années en France.",
    },
    {
      type: "encadre",
      titre: "Le vote du Sénat sur les allocations familiales",
      texte: "Le 17 novembre 2026, le Sénat a voté un an de résidence avant certaines aides de la CAF pour une partie des étrangers. Selon le gouvernement, la condition ne viserait pas les titres qui permettent de travailler, comme la carte talent-famille. Ce n'est pas encore une loi : tout est expliqué dans notre article sur [le délai d'un an des allocations familiales](/articles/allocations-familiales-etrangers-delai-un-an).",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Et la naturalisation pour la famille ?",
    },
    {
      type: "p",
      texte: "La carte talent-famille ne donne pas de raccourci propre vers la nationalité française. La règle commune est de ==5 ans de résidence== en France. Ce délai passe à 2 ans dans certains cas, par exemple après un diplôme d'un établissement supérieur français obtenu après 2 ans d'études ([service-public, F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)).",
    },
    {
      type: "p",
      texte: "Il faut aussi une connaissance suffisante du français et la réussite à l'examen civique, puis un entretien en préfecture (F2213). Notre article sur [les niveaux de français](/articles/niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation) donne le niveau exigé, et celui sur [l'examen civique de la naturalisation](/articles/examen-civique-naturalisation) dit quand le passer.",
    },
    {
      type: "cta",
      texte: "L'examen civique compte 40 questions sur cinq thématiques. Pour savoir où vous en êtes avant de déposer un dossier de naturalisation, testez-vous sur des questions types : l'inscription est gratuite.",
      bouton: "Me tester gratuitement",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La carte talent-famille est pour ==l'époux ou l'épouse== de plus de 18 ans et pour les enfants du couple qui deviennent majeurs, ou qui veulent travailler dès 16 ans. Elle permet de travailler, coûte 350 € et dure le temps qui reste sur la carte talent du titulaire. Après 5 ans, son renouvellement ne peut plus être refusé. Le PACS ne suffit pas.",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Mon conjoint peut-il travailler avec la carte talent-famille ?",
      reponse: "Oui. La carte talent-famille permet d'exercer toute activité professionnelle, comme salarié ou à son compte. L'employeur n'a pas à demander d'autorisation de travail et ne paie pas la taxe due pour l'emploi d'un étranger, selon la fiche F35792 de service-public. La carte concerne l'époux ou l'épouse de plus de 18 ans.",
    },
    {
      question: "Un partenaire de PACS peut-il avoir la carte talent-famille ?",
      reponse: "Non, selon service-public. La procédure famille accompagnante vise l'époux ou l'épouse du titulaire de la carte talent, et les enfants du couple. Un partenaire pacsé ou en union libre doit demander un autre titre de séjour, selon sa propre situation. Pour un cas personnel, renseignez-vous auprès de la préfecture ou d'une association.",
    },
    {
      question: "Combien coûte la carte de séjour talent-famille ?",
      reponse: "La carte talent-famille coûte 350 € en timbres fiscaux : 50 € de droit de timbre et 300 € de taxe, selon la fiche F35792 de service-public. Vous payez seulement si la carte est accordée, au moment où la préfecture vous la remet. Le visa demandé à l'étranger a ses propres frais, fixés par le consulat.",
    },
    {
      question: "Combien de temps dure la carte talent-famille ?",
      reponse: "La carte talent-famille dure le temps de validité qui reste sur la carte talent de votre époux ou de votre parent. Après 5 ans de séjour en France avec cette carte, son renouvellement ne peut plus être refusé. La nouvelle carte dure alors 4 ans, selon la fiche F35792 de service-public.",
    },
  ],
  sources: [
    {
      titre: "Service-public : carte de séjour pluriannuelle « talent-famille » (F35792, vérifiée le 1er mai 2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F35792",
      type: "officiel",
      luLe: "2026-11-18",
    },
    {
      titre: "Service-public : carte talent, carte de séjour pluriannuelle d'un étranger en France (F16922, vérifiée le 1er juin 2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16922",
      type: "officiel",
      luLe: "2026-11-18",
    },
    {
      titre: "Service-public : timbre fiscal des titres de séjour depuis le 1er mai 2026 (A18881, mise à jour le 12 mai 2026)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18881",
      type: "officiel",
      luLe: "2026-11-18",
    },
    {
      titre: "Service-public : naturalisation par décret (F2213, vérifiée le 16 juillet 2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      luLe: "2026-11-18",
    },
    {
      titre: "Légifrance : décret n° 2026-1001 du 26 octobre 2026 (refus implicite à 90 jours, JORF n° 0253 du 29 octobre 2026)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000055023061",
      type: "officiel",
      luLe: "2026-10-30",
    },
  ],
};

export default article;
