import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 08/11/2026 (`docs/seo/ROBOT.md`).
 * Requêtes visées : « examen civique conjoint de français », « titre de
 * séjour conjoint de français » (100 à 1 k recherches par mois, Planificateur
 * de mots clés, France, toutes les langues, 07/11/2026). Famille examen
 * civique. Aucune page du site ne suit le parcours du conjoint de Français
 * carte par carte.
 * Sources lues le 08/11/2026 : service-public F2209 (vérifiée le 06/11/2026),
 * F2208 (01/07/2026), F39530 (10/02/2026), F34501 (10/02/2026), F2726
 * (01/05/2026), F2213 (16/07/2026) ; Légifrance, CESEDA L. 413-7, L. 433-4
 * et L. 433-6, code civil art. 21-2. Chiffres de l'examen : arrêté du
 * 10/10/2025, page officielle de l'examen, QE n° 11488 (lus fin octobre).
 */
const article: Article = {
  slug: "examen-civique-conjoint-de-francais",
  titre: "Conjoint de Français : l'examen civique arrive dès la 2e année, voici quand le passer",
  titreSeo: "Examen civique conjoint de Français : quand ?",
  resume: "Conjoint de Français : l'examen civique est exigé pour la carte pluriannuelle et la carte de résident, pas pour le 1er titre. Le calendrier, carte par carte.",
  chapo: "Si vous êtes en couple marié avec une personne française, votre premier titre de séjour (la carte qui vous autorise à vivre en France) ne demande ==pas d'examen civique==. L'examen arrive avec la ==première carte pluriannuelle==, en général la 2e année, puis avec la carte de résident, un titre de 10 ans. En passant tout de suite le niveau « carte de résident », vous couvrez les deux.",
  publieLe: "2026-11-08",
  modifieLe: "2026-11-08",
  minutes: 7,
  theme: "examen civique conjoint de Français",
  motsCles: [
    "examen civique conjoint de français",
    "conjoint de français examen civique",
    "titre de séjour conjoint de français",
    "carte de résident conjoint de français examen civique",
    "carte de séjour pluriannuelle conjoint de français",
    "examen civique mariage",
    "nationalité par mariage examen civique",
    "vls-ts conjoint de français",
  ],
  rubrique: "preparation",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/examen-civique-conjoint-de-francais.webp",
    alt: "La façade en briques roses d'une petite mairie du Sud-Ouest, avec un balcon en fer forgé et des drapeaux français et européen",
    largeur: 1200,
    hauteur: 892,
    credit: "Didier Descouens, via Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Saint-C%C3%A9zert_Mairie.jpg",
  },
  blocs: [
    {
      type: "h2",
      texte: "Le conjoint de Français doit-il passer l'examen civique ?",
    },
    {
      type: "p",
      texte: "Oui, mais pas tout de suite. L'examen civique est un test de 40 questions sur la France et ses valeurs. Depuis le 1er janvier 2026, il est exigé pour ==la première carte de séjour pluriannuelle== et pour ==la première carte de résident== ([service-public, F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)). Une carte pluriannuelle, c'est un titre de séjour valable plusieurs années. La carte de résident, c'est un titre de 10 ans.",
    },
    {
      type: "p",
      texte: "La fiche F39530 ne prévoit pas d'exception pour le conjoint de Français. Votre parcours compte donc trois étapes, et l'examen en touche deux.",
    },
    {
      type: "tableau",
      entetes: ["Étape", "Quand", "Examen civique", "Français exigé"],
      lignes: [
        ["Visa long séjour (VLS-TS) ou carte temporaire « vie privée et familiale »", "La 1re année", "Non", "Non"],
        ["Première carte de séjour pluriannuelle", "En général la 2e année", "Oui, mention « carte de séjour pluriannuelle »", "A2"],
        ["Première carte de résident", "Après 3 ans de mariage (1 an pour un conjoint tunisien)", "Oui, mention « carte de résident »", "B1"],
      ],
      legende: "Sources : service-public F2209, F2208, F39530 et F34501 ; CESEDA L. 433-4 et L. 413-7. Lus le 08/11/2026.",
    },
    {
      type: "h2",
      texte: "La 1re année : quel titre, et sans examen ?",
    },
    {
      type: "p",
      texte: "La plupart des conjoints de Français arrivent avec un VLS-TS « vie privée et familiale ». Le VLS-TS, c'est un visa de long séjour qui vaut titre de séjour pendant ==1 an== ([service-public, F2209](https://www.service-public.gouv.fr/particuliers/vosdroits/F2209)). Autre cas : le mariage a eu lieu en France, après une entrée avec un visa court. Une carte temporaire d'un an est alors possible après 6 mois de vie commune en France (F2209).",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Une vie commune réelle** avec votre époux ou votre épouse (F2209).",
        "**Un conjoint qui a gardé la nationalité française** depuis le mariage.",
        "**Un mariage transcrit** sur les registres de l'état civil français s'il a été célébré à l'étranger. La transcription, c'est la copie de l'acte de mariage étranger dans les registres français.",
      ],
    },
    {
      type: "p",
      texte: "À ce stade, aucun examen civique n'est demandé. Pensez seulement à valider votre VLS-TS en ligne dès votre arrivée : notre guide sur [la validation du VLS-TS](/articles/visa-long-sejour-vls-ts-validation-ofii-2026) l'explique. Pour les papiers du mariage lui-même, voyez notre article sur [le mariage avec un étranger en France](/articles/mariage-etranger-france-2026-papiers-visa-conjoint-titre-sejour).",
    },
    {
      type: "h2",
      texte: "La 2e année : la carte pluriannuelle exige l'examen et le niveau A2",
    },
    {
      type: "p",
      texte: "La fiche F2209 le dit : la carte pluriannuelle se demande ==la 2e année==, en renouvellement du VLS-TS. Or l'article L. 433-4 du CESEDA fixe les conditions de cette première carte pluriannuelle ([Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042771972/), version en vigueur lue le 08/11/2026). Le CESEDA, c'est le code qui regroupe les règles de séjour des étrangers.",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Avoir suivi sérieusement le contrat d'intégration républicaine (CIR).** Le CIR, c'est l'engagement signé avec l'État à l'arrivée. Il prévoit une formation civique et, si besoin, des cours de français, organisés par l'OFII (l'office public chargé de l'accueil des étrangers).",
        "**Réussir l'examen civique**, avec un résultat au moins égal au seuil fixé par décret : ==32 bonnes réponses sur 40== (F39530).",
        "**Prouver un niveau de français A2**, le niveau qui permet de comprendre les phrases de la vie courante ([service-public, F34501](https://www.service-public.gouv.fr/particuliers/vosdroits/F34501)).",
        "**Remplir toujours les conditions** de votre premier titre : vie commune, conjoint resté français.",
      ],
    },
    {
      type: "encadre",
      titre: "Le bon moment pour passer l'examen",
      texte: "Le résultat doit être joint à la demande de carte. Passez donc l'examen ==pendant votre 1re année==, quelques mois avant la fin du VLS-TS. Il dure 45 minutes, se passe sur ordinateur dans un centre agréé et coûte de 60 à 80 € selon le ministère ([question écrite n° 11488](https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488)). En cas d'échec, vous pouvez le repasser après 24 heures.",
      ton: "vert",
    },
    {
      type: "p",
      texte: "Notre article [préparer l'examen civique en 4 semaines](/articles/preparer-examen-civique) donne un plan de révision, et [résultat de l'examen civique](/articles/resultat-examen-civique) dit où télécharger l'attestation.",
    },
    {
      type: "h2",
      texte: "Après 3 ans de mariage : la carte de résident et le niveau B1",
    },
    {
      type: "p",
      texte: "Après ==3 ans de mariage==, vous pouvez demander la carte de résident de 10 ans ([service-public, F2208](https://www.service-public.gouv.fr/particuliers/vosdroits/F2208)). Pour un conjoint tunisien, le délai est d'1 an. La vie commune doit être réelle, et votre conjoint doit avoir gardé la nationalité française.",
    },
    {
      type: "p",
      texte: "Pour une première carte de résident, la préfecture vérifie votre intégration. Il faut ==réussir l'examen civique, mention « carte de résident »==, et prouver un niveau de français ==B1== (F2208 ; article L. 413-7 du CESEDA, [Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042771492/)). La préfecture, c'est le service de l'État qui délivre les titres dans votre département. La carte coûte ==350 €== en timbres fiscaux, la taxe payée à l'État (F2208, lue le 08/11/2026).",
    },
    {
      type: "p",
      texte: "Les deux examens n'ont pas le même niveau de difficulté. Notre article sur [l'examen civique pour la carte de résident](/articles/examen-civique-carte-de-resident) compare les deux listes officielles de questions.",
    },
    {
      type: "image",
      src: "/images/articles/examen-civique-conjoint-de-francais.webp",
      alt: "Une mairie de village en briques, avec deux portes en bois, des volets blancs et un balcon où flottent des drapeaux",
      legende: "Le mariage civil se célèbre à la mairie. Pour la préfecture, c'est ensuite la vie commune réelle qui compte, à chaque carte.",
      credit: "Didier Descouens, via Wikimedia Commons",
      licence: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Saint-C%C3%A9zert_Mairie.jpg",
      largeur: 1200,
      hauteur: 892,
    },
    {
      type: "h2",
      texte: "Quel examen choisir pour ne le passer qu'une fois ?",
    },
    {
      type: "p",
      texte: "Selon le ministère de l'Intérieur, la réussite à l'examen « carte de résident » ==vaut aussi pour la carte pluriannuelle==. Et l'attestation n'a ==pas de durée de validité== ([page officielle de l'examen](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/)). L'inverse n'est pas vrai.",
    },
    {
      type: "p",
      texte: "Vous visez la carte de résident après 3 ans de mariage ? Préparez directement l'examen de niveau « carte de résident » pendant la 1re année. Une seule attestation servira à vos deux demandes. Si le temps manque avant la fin du VLS-TS, passez d'abord le niveau « carte pluriannuelle » : c'est le plus sûr pour ne pas retarder la carte.",
    },
    {
      type: "qcm",
      thematique: "Droits et devoirs",
      question: "En France, les deux époux ont-ils les mêmes droits et les mêmes devoirs dans le mariage ?",
      choix: [
        "Oui, ils ont les mêmes droits et les mêmes devoirs",
        "Non, le mari décide seul pour la famille",
        "Non, seul l'époux français a des droits",
        "Cela dépend de la religion du couple",
      ],
      reponse: 0,
      explication: "Le code civil fixe les mêmes droits et devoirs pour les deux époux : respect, fidélité, secours, assistance, et direction commune de la famille. L'égalité entre les femmes et les hommes fait partie des principes de l'examen. Ceci est une question type, écrite par nous, pas une question de l'examen officiel.",
    },
    {
      type: "cta",
      texte: "Le niveau « carte de résident » couvre aussi la carte pluriannuelle. Sur Test Civique France, les cours des 5 thématiques sont gratuits, et les examens blancs de 40 questions vous montrent votre résultat par thématique. L'inscription est gratuite.",
      bouton: "Tester mon niveau",
    },
    {
      type: "h2",
      texte: "Et pour devenir français par mariage ?",
    },
    {
      type: "p",
      texte: "La nationalité par mariage se demande par ==déclaration==, après ==4 ans de mariage==, ou 5 ans si vous n'avez pas vécu assez longtemps en France. C'est la règle de l'article 21-2 du code civil ([Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006165440)). Une déclaration est une démarche différente de la naturalisation par décret, où l'État décide.",
    },
    {
      type: "p",
      texte: "Au 8 novembre 2026, la fiche de service-public sur la déclaration par mariage ([F2726](https://www.service-public.gouv.fr/particuliers/vosdroits/F2726)) ==ne cite pas l'examen civique==. Elle l'exige en revanche pour la naturalisation par décret ([F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)). Pour la déclaration, il faut un niveau de français ==B2== depuis le 1er janvier 2026 ([décret n° 2025-648](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051900519)). Un entretien vérifie aussi votre assimilation, dont l'adhésion aux principes et valeurs de la République. La démarche coûte 255 € (F2726).",
    },
    {
      type: "p",
      texte: "Le détail est dans notre article sur [la nationalité française par mariage](/articles/nationalite-francaise-par-mariage-2026-conditions-delai-4-ans-dossier), et le niveau de langue dans [A2, B1, B2 : quel niveau de français](/articles/niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation).",
    },
    {
      type: "h2",
      texte: "Qui est dispensé, et les cas à part",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Plus de 65 ans** : vous n'êtes pas soumis à l'examen civique (F39530), ni à la condition de langue (article L. 413-7).",
        "**Handicap ou maladie** : l'épreuve peut être aménagée. Une dispense est possible si votre état de santé rend l'évaluation impossible, avec un certificat médical (F39530).",
        "**Conjoint algérien** : l'accord franco-algérien de 1968 fixe d'autres règles de séjour. Lisez notre article sur [les Algériens et l'examen civique](/articles/algeriens-examen-civique-2026-accord-1968-dispense-sejour-mais-pas-naturalisation).",
        "**Séparation, divorce, violences conjugales** : la vie commune peut avoir cessé en cas de décès ou de violences conjugales (F2209). Votre cas se discute avec la préfecture, un avocat ou une association comme La Cimade.",
      ],
    },
    {
      type: "p",
      texte: "Notre article sur [les dispenses de l'examen civique](/articles/dispense-examen-civique-2026-qui-est-exempte-age-refugie-accords) détaille les autres cas.",
    },
    {
      type: "encadre",
      titre: "Le geste à faire dès maintenant",
      texte: "Notez la date de fin de votre VLS-TS et la date de vos 3 ans de mariage. Inscrivez-vous à l'examen quelques mois avant la première. Gardez votre attestation de réussite et votre diplôme ou test de français : ils serviront à chaque carte. Vous doutez de votre situation ? [Vérifiez en une minute si l'examen vous concerne](/eligibilite-examen-civique).",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Le conjoint de Français doit-il passer l'examen civique ?",
      reponse: "Oui, pour la première carte de séjour pluriannuelle, en général demandée la 2e année, et pour la première carte de résident, après 3 ans de mariage. Le premier titre, le VLS-TS ou la carte temporaire d'un an, ne demande pas d'examen. Les personnes de plus de 65 ans sont dispensées, selon service-public (F39530).",
    },
    {
      question: "Quel niveau de français pour un conjoint de Français ?",
      reponse: "Il faut le niveau A2 pour la première carte de séjour pluriannuelle et le niveau B1 pour la première carte de résident. Pour devenir français par déclaration de mariage, le niveau B2 est exigé depuis le 1er janvier 2026. Les personnes de plus de 65 ans ne sont pas soumises à la condition de langue pour les cartes de séjour.",
    },
    {
      question: "Quand demander la carte de résident quand on est marié à un Français ?",
      reponse: "Après au moins 3 ans de mariage, ou 1 an pour un conjoint tunisien, selon la fiche F2208 de service-public. La vie commune doit être réelle et le conjoint doit avoir gardé la nationalité française. Un mariage célébré à l'étranger doit être transcrit en France. Il faut aussi réussir l'examen civique « carte de résident » et prouver le niveau B1.",
    },
    {
      question: "Faut-il l'examen civique pour la nationalité par mariage ?",
      reponse: "Au 8 novembre 2026, la fiche service-public de la déclaration par mariage (F2726) ne cite pas l'examen civique, qui est exigé pour la naturalisation par décret. La déclaration demande 4 ans de mariage, le niveau de français B2 et un entretien sur l'assimilation. Vérifiez la fiche le jour de votre dépôt, car les règles changent souvent.",
    },
  ],
  sources: [
    {
      titre: "Service-public : carte de séjour « vie privée et familiale », section époux de Français (F2209), vérifiée le 06/11/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2209",
      type: "officiel",
      luLe: "2026-11-08",
    },
    {
      titre: "Service-public : carte de résident de 10 ans, section époux de Français (F2208), vérifiée le 01/07/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2208",
      type: "officiel",
      luLe: "2026-11-08",
    },
    {
      titre: "Service-public : examen civique pour une carte de séjour pluriannuelle ou une carte de résident (F39530), vérifiée le 10/02/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530",
      type: "officiel",
      luLe: "2026-11-08",
    },
    {
      titre: "Service-public : niveau de français exigé pour un titre de séjour (F34501), vérifiée le 10/02/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34501",
      type: "officiel",
      luLe: "2026-11-08",
    },
    {
      titre: "Service-public : nationalité française par mariage, déclaration (F2726), vérifiée le 01/05/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2726",
      type: "officiel",
      luLe: "2026-11-08",
    },
    {
      titre: "Service-public : naturalisation française par décret (F2213), vérifiée le 16/07/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      luLe: "2026-11-08",
    },
    {
      titre: "Légifrance : CESEDA, articles L. 433-1 à L. 433-6 (première carte de séjour pluriannuelle : CIR, examen, langue), version en vigueur",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042771972/",
      type: "officiel",
      luLe: "2026-11-08",
    },
    {
      titre: "Légifrance : CESEDA, article L. 413-7 (première carte de résident et intégration républicaine), en vigueur depuis le 01/01/2026",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042771492/",
      type: "officiel",
      luLe: "2026-11-08",
    },
    {
      titre: "Légifrance : code civil, article 21-2 (nationalité par mariage)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000006165440",
      type: "officiel",
      luLe: "2026-11-08",
    },
    {
      titre: "Légifrance : décret n° 2025-648 du 15 juillet 2025 (niveau B2 pour la nationalité à compter du 01/01/2026)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051900519",
      type: "officiel",
      luLe: "2026-11-08",
    },
    {
      titre: "Ministère de l'Intérieur : informations générales sur l'examen civique (32 sur 40, attestation sans durée de validité, CR valant CSP)",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/",
      type: "officiel",
      luLe: "2026-11-06",
    },
    {
      titre: "Assemblée nationale : question écrite n° 11488, réponse du ministère de l'Intérieur publiée le 11/08/2026 (prix de 60 à 80 €)",
      url: "https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488",
      type: "officiel",
      luLe: "2026-10-28",
    },
  ],
};

export default article;
