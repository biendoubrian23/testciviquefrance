import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-batch-mai-2026-3.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/naturalisation-enfant-mineur-france-2026-effet-collectif-declaration`).
 * Réécrit en entier par le robot éditorial le 05/11/2026 (liste « à revérifier » : article cité par Copilot sur
 * « naturalisation mineur arrivé à 13 ans »). Faux dans la version migrée : la condition de résidence à 16 ou 17 ans
 * (depuis 11 ans, pas 8), une « demande anticipée » prêtée à l'article 21-7, des refus pour « condamnation des parents »
 * ou « défaut d'assimilation », un « taux d'échec d'un candidat sur trois » à l'examen, des délais sans source.
 * Sources lues le 05/11/2026 : Légifrance, code civil (articles 21-7 à 21-11, 21-12, 22-1 à 22-3, 26 à 26-5, versions
 * en vigueur) ; service-public F295, F3068, F2213 et F1051.
 * Couverture : Wikimedia Commons (CC BY-SA 4.0), prise avec `seo:photo`.
 */
const article: Article = {
  slug: "naturalisation-enfant-mineur-france-2026-effet-collectif-declaration",
  titre: "Nationalité française d'un enfant mineur : les 3 voies, selon son âge et son lieu de naissance",
  titreSeo: "Naturalisation enfant mineur : les 3 voies",
  resume: "Comment un enfant mineur devient français : avec un parent naturalisé, par déclaration dès 13 ans s'il est né en France, ou à 18 ans.",
  chapo: "Un enfant mineur peut devenir français de trois façons. Il le devient ==avec son parent== qui obtient la nationalité, si son nom figure dans le décret. S'il est né en France, il peut aussi la réclamer ==dès 13 ans== par une déclaration au tribunal, ou la recevoir automatiquement ==à 18 ans==. Voici les conditions exactes de chaque voie, tirées du code civil.",
  publieLe: "2026-05-09",
  modifieLe: "2026-11-05",
  minutes: 7,
  theme: "nationalité française d'un enfant mineur",
  motsCles: [
    "naturalisation enfant mineur",
    "effet collectif naturalisation",
    "nationalité française enfant né en France",
    "déclaration de nationalité 13 ans",
    "article 21-11 code civil",
    "article 22-1 code civil",
    "nationalité française 18 ans droit du sol",
    "naturalisation mineur arrivé en France",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/nationalite-enfant-mineur.webp",
    alt: "La devise Liberté, Égalité, Fraternité gravée en lettres blanches sur la façade en brique d'une école",
    largeur: 1200,
    hauteur: 857,
    credit: "Polymagou, via Wikimedia Commons",
    licence: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:%C3%89cole_%C3%A9l%C3%A9mentaire_T%C3%A9l%C3%A9graphe,_Paris_20_3-2.jpg",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Article corrigé le 5 novembre 2026",
      texte: "La version précédente contenait des erreurs. À 16 ou 17 ans, la résidence exigée court depuis l'âge de 11 ans, et non de 8 ans. L'article 21-7 ne prévoit pas de demande avant 18 ans. Le casier judiciaire des parents ne fait pas refuser la déclaration d'un enfant. Les délais et le taux d'échec à l'examen n'avaient pas de source. Le texte ci-dessous suit le code civil et service-public, lus le 05/11/2026.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Quelles sont les 3 voies pour qu'un enfant mineur devienne français ?",
      id: "trois-voies",
    },
    {
      type: "p",
      texte: "La nationalité française se transmet d'abord par la naissance : un enfant dont un parent est français à sa naissance est français. Cet article parle des autres enfants, ceux dont les deux parents sont étrangers. Pour eux, le code civil prévoit trois voies ([service-public, F3068](https://www.service-public.gouv.fr/particuliers/vosdroits/F3068)).",
    },
    {
      type: "tableau",
      entetes: ["Voie", "Pour quel enfant", "Démarche"],
      lignes: [
        ["L'effet collectif (article 22-1)", "Un mineur qui vit avec un parent qui devient français", "Son nom est inscrit dans le décret ou la déclaration du parent"],
        ["La déclaration (article 21-11)", "Un mineur né en France, de 13 à 17 ans", "Une déclaration au tribunal judiciaire"],
        ["L'acquisition à 18 ans (article 21-7)", "Un jeune né en France", "Aucune : elle est automatique"],
      ],
      legende: "Sources : code civil (Légifrance) et service-public, fiches F3068 et F295, lus le 05/11/2026.",
    },
    {
      type: "p",
      texte: "Un enfant ==né à l'étranger== ne peut utiliser que la première voie, ou une naturalisation à son nom (voir plus bas). Les deux voies du droit du sol sont réservées aux enfants nés en France.",
    },
    {
      type: "h2",
      texte: "L'effet collectif : l'enfant devient français avec son parent",
      id: "effet-collectif",
    },
    {
      type: "p",
      texte: "L'effet collectif, c'est la règle qui rend français un enfant mineur en même temps que son parent. Selon l'article 22-1 du code civil, cet enfant « devient français de plein droit ». Il doit avoir la même résidence habituelle que ce parent ([Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006149953)).",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**L'enfant vit avec ce parent**, ou en résidence alternée avec lui en cas de séparation ou de divorce.",
        "**Son nom figure dans le décret** de naturalisation du parent, ou dans sa déclaration de nationalité (par mariage, par exemple). Sans son nom, l'effet collectif ne joue pas (article 22-1).",
        "**Il est encore mineur** au jour où le décret est signé, et il n'est pas marié (article 22-2 et [service-public, F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)).",
      ],
    },
    {
      type: "p",
      texte: "Le décret de naturalisation, c'est le texte signé par le Premier ministre et publié au Journal officiel qui accorde la nationalité. Au moment de votre demande, signalez donc ==chacun de vos enfants mineurs== qui vit avec vous. Notre article sur [le décret de naturalisation](/articles/decret-de-naturalisation-trouver-et-apres) explique comment le retrouver.",
    },
    {
      type: "p",
      texte: "Né hors de France, un enfant devenu français par l'effet collectif peut refuser cette nationalité. Il le fait dans les 6 mois avant sa majorité ou les 12 mois après (article 22-3). Si l'enfant est déjà majeur quand le parent devient français, il n'y a aucun effet sur lui (F3068).",
    },
    {
      type: "h2",
      texte: "La déclaration dès 13 ans, pour un enfant né en France",
      id: "declaration-anticipee",
    },
    {
      type: "p",
      texte: "Un enfant né en France de parents étrangers peut réclamer la nationalité avant 18 ans, par une déclaration. Les conditions changent avec l'âge (article 21-11 du code civil, [Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006165743) ; [service-public, F295](https://www.service-public.gouv.fr/particuliers/vosdroits/F295)).",
    },
    {
      type: "tableau",
      entetes: ["Âge", "Qui fait la déclaration", "Résidence habituelle en France exigée"],
      lignes: [
        ["13, 14 ou 15 ans", "Les parents, au nom de l'enfant, avec son accord", "5 ans au moins depuis l'âge de 8 ans"],
        ["16 ou 17 ans", "Le jeune lui-même", "5 ans au moins depuis l'âge de 11 ans"],
      ],
      legende: "Dans les deux cas, l'enfant doit être né en France et vivre en France le jour de la déclaration. Les 5 ans peuvent être continus ou non. Source : article 21-11 et F295, lus le 05/11/2026.",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Écrivez la demande sur papier libre** et réunissez les preuves : acte de naissance, et preuves de résidence pour chaque année exigée (certificats de scolarité, par exemple).",
        "**Déposez-la ou envoyez-la** au tribunal judiciaire ou de proximité de votre domicile. Le tribunal judiciaire, c'est le tribunal qui traite les affaires de nationalité. Son greffe, le service administratif, reçoit la déclaration (article 26 du code civil).",
        "**L'enfant est reçu en entretien.** Entre 13 et 15 ans, il doit dire s'il est d'accord pour devenir français, sauf si un handicap l'en empêche (F295).",
        "**Attendez la réponse.** Sans réponse ==dans les 6 mois== qui suivent le récépissé (le reçu du dossier complet), la déclaration est enregistrée, c'est-à-dire acceptée (F295, article 26-3).",
      ],
    },
    {
      type: "p",
      texte: "Le greffe ne peut refuser que si les conditions de la loi ne sont pas remplies. Un refus se conteste devant le tribunal judiciaire dans les 6 mois, avec un avocat (article 26-3 et F295). Dès 16 ans, le jeune peut agir lui-même.",
    },
    {
      type: "image",
      src: "/images/articles/nationalite-enfant-mineur.webp",
      alt: "Devise de la République gravée au-dessus des fenêtres d'une école élémentaire",
      legende: "Les certificats de scolarité sont souvent la meilleure preuve des années de résidence en France.",
      credit: "Polymagou, via Wikimedia Commons",
      licence: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:%C3%89cole_%C3%A9l%C3%A9mentaire_T%C3%A9l%C3%A9graphe,_Paris_20_3-2.jpg",
      largeur: 1200,
      hauteur: 857,
    },
    {
      type: "h2",
      texte: "La nationalité automatique à 18 ans",
      id: "droit-du-sol",
    },
    {
      type: "p",
      texte: "Un jeune né en France de parents étrangers devient français ==le jour de ses 18 ans==, sans aucune démarche, s'il remplit deux conditions (article 21-7 du code civil) :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Vivre en France à 18 ans.**",
        "**Avoir vécu en France au moins 5 ans depuis l'âge de 11 ans**, de façon continue ou non.",
      ],
    },
    {
      type: "p",
      texte: "Cette règle ne s'applique pas aux enfants des diplomates et consuls étrangers (article 21-10). Le jeune qui a une autre nationalité peut refuser la nationalité française, dans les 6 mois avant ses 18 ans ou les 12 mois après (article 21-8).",
    },
    {
      type: "p",
      texte: "Rien n'est écrit sur l'acte de naissance. Pour une première carte d'identité ou un premier passeport, le jeune devra souvent prouver sa nationalité avec un certificat de nationalité française. Notre guide du [certificat de nationalité française](/articles/certificat-nationalite-francaise) détaille les pièces et le délai.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**À Mayotte**, les deux voies du droit du sol ont une condition de plus : le séjour régulier des parents à la naissance. Voir notre article sur [le droit du sol à Mayotte](/articles/droit-du-sol-mayotte).",
        "**Gardez les preuves de chaque année** passée en France : elles servent pour la déclaration comme pour le certificat. Elles se perdent vite avec les déménagements.",
      ],
    },
    {
      type: "h2",
      texte: "Et un enfant né à l'étranger, arrivé en France plus tard ?",
      id: "cas-particuliers",
    },
    {
      type: "p",
      texte: "Un enfant né à l'étranger n'a pas accès au droit du sol, même s'il a grandi en France. Il lui reste trois possibilités.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**L'effet collectif**, si un parent devient français pendant sa minorité et qu'il vit avec lui.",
        "**Une naturalisation à son nom, encore mineur**, s'il est resté étranger alors qu'un parent est devenu français. Il doit avoir vécu en France avec ce parent pendant les 5 ans avant la demande (F2213).",
        "**Une naturalisation par décret après 18 ans**, aux conditions des adultes : durée de résidence, niveau de français, et réussite à l'examen civique. Notre article sur [l'examen civique de la naturalisation](/articles/examen-civique-naturalisation) dit quand le passer.",
      ],
    },
    {
      type: "p",
      texte: "Certains enfants peuvent aussi faire une déclaration avant 18 ans, s'ils vivent en France. C'est le cas de l'enfant adopté en adoption simple par un Français. C'est aussi le cas de l'enfant recueilli par décision de justice depuis au moins 3 ans et élevé par un Français. La règle figure à l'article 21-12 du code civil ([Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006165458)). Pour une situation de ce type, un avocat ou une permanence d'accès au droit peut vous aider à vérifier les conditions.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Aucune de ces trois voies ne demande d'examen civique ni de test de français à l'enfant. L'examen ne concerne que la naturalisation par décret, demandée par un adulte.\nSi votre enfant approche 18 ans sans être français, [vérifiez en une minute si l'examen le concerne](/eligibilite-examen-civique).",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Mon enfant est arrivé en France à 13 ans, peut-il devenir français ?",
      reponse: "S'il est né à l'étranger, il ne peut pas utiliser le droit du sol, réservé aux enfants nés en France. Il devient français avec vous par l'effet collectif si vous obtenez la naturalisation pendant sa minorité, qu'il vit avec vous et que son nom figure dans le décret. Sinon, il pourra demander la naturalisation après 18 ans, examen civique compris.",
    },
    {
      question: "Comment faire la déclaration de nationalité française pour un enfant de 13 ans ?",
      reponse: "L'enfant doit être né en France, y vivre, et y avoir vécu au moins 5 ans depuis l'âge de 8 ans. Les parents font la demande sur papier libre au tribunal judiciaire de leur domicile, avec l'accord de l'enfant. Il est reçu en entretien. Sans réponse dans les 6 mois après le récépissé, la déclaration est enregistrée.",
    },
    {
      question: "Mes enfants deviennent-ils français si j'obtiens la naturalisation ?",
      reponse: "Oui, à trois conditions. Ils sont mineurs et non mariés à la date de signature du décret. Ils vivent avec vous, même en résidence alternée. Leur nom figure dans le décret. C'est l'effet collectif, prévu par l'article 22-1 du code civil. Un enfant déjà majeur à cette date ne devient pas français par votre décret.",
    },
    {
      question: "Un enfant né en France devient-il français automatiquement ?",
      reponse: "Un enfant né en France de parents étrangers devient français à 18 ans, sans démarche. Il doit vivre en France à cette date, et y avoir vécu au moins 5 ans depuis l'âge de 11 ans. Il peut aussi réclamer la nationalité plus tôt, dès 13 ans, par une déclaration. À Mayotte, une condition de plus s'applique aux parents.",
    },
  ],
  sources: [
    {
      titre: "Légifrance : code civil, articles 21-7 à 21-11 (naissance et résidence en France), versions en vigueur",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006165743",
      type: "officiel",
      luLe: "2026-11-05",
    },
    {
      titre: "Légifrance : code civil, articles 22 à 22-3 (effets de l'acquisition de la nationalité), versions en vigueur",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006149953",
      type: "officiel",
      luLe: "2026-11-05",
    },
    {
      titre: "Légifrance : code civil, articles 21-12 à 21-14 (déclaration de l'enfant adopté ou recueilli), versions en vigueur",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006165458",
      type: "officiel",
      luLe: "2026-11-05",
    },
    {
      titre: "Légifrance : code civil, articles 26 à 26-5 (déclarations de nationalité), versions en vigueur",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006149961",
      type: "officiel",
      luLe: "2026-11-05",
    },
    {
      titre: "Service-public : nationalité française d'un enfant né en France de parents étrangers, fiche F295",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F295",
      type: "officiel",
      luLe: "2026-11-05",
    },
    {
      titre: "Service-public : dans quels cas un enfant est-il français ?, fiche F3068",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F3068",
      type: "officiel",
      luLe: "2026-11-05",
    },
    {
      titre: "Service-public : naturalisation française par décret, fiche F2213, vérifiée le 16/07/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      luLe: "2026-11-05",
    },
  ],
};

export default article;
