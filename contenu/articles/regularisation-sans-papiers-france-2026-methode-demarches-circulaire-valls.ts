import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-generaux-5.ts`
 * et `lib/data/seo-articles.ts`, sans changer d'adresse.
 *
 * Corrigé et réécrit en entier par le robot éditorial le 24/10/2026
 * (`docs/seo/ROBOT.md`, liste « à revérifier » de `docs/seo/MOTS-CLES.md`) :
 * l'article présentait comme applicable la circulaire du 28/11/2012, dite
 * « circulaire Valls », que Légifrance classe parmi les circulaires qui ne
 * sont plus applicables depuis la circulaire du 23/01/2025 (NOR
 * INTK2435521J). Retirés : les durées de présence « 5 ans » tirées de la
 * circulaire de 2012, « 8 mois de travail » (12 mois selon L. 435-4), les
 * délais moyens, « 90 % du résultat », « 35 % des recours », les
 * préfectures « plus ouvertes », les chiffres sans source. Requêtes :
 * « circulaire retailleau » (1 k à 10 k) et « régularisation sans papiers »
 * (100 à 1 k), Planificateur de mots clés, France, 24/10 et 21/10/2026.
 */
const article: Article = {
  slug: "regularisation-sans-papiers-france-2026-methode-demarches-circulaire-valls",
  titre: "Régularisation des sans-papiers : ce que dit la circulaire du 23 janvier 2025, qui a remplacé la circulaire Valls",
  titreSeo: "Circulaire Retailleau : la régularisation en 2026",
  resume: "La circulaire Valls ne s'applique plus : depuis le 23 janvier 2025, une autre circulaire guide les préfets. Conditions, dossier, frais et recours.",
  chapo: "La circulaire Valls de 2012 ==ne s'applique plus== : la circulaire du 23 janvier 2025 l'a remplacée. La régularisation reste possible, au cas par cas, sur le fondement de la loi. Mais la préfecture peut demander ==au moins 7 ans== de présence en France, un bon niveau de français et l'engagement de respecter les principes de la République.",
  publieLe: "2026-04-28",
  modifieLe: "2026-10-30",
  minutes: 7,
  theme: "régularisation sans papiers",
  motsCles: [
    "régularisation sans papiers",
    "circulaire retailleau",
    "circulaire 23 janvier 2025",
    "circulaire Valls abrogée",
    "admission exceptionnelle au séjour",
    "L435-1 CESEDA",
    "régularisation 7 ans de présence",
    "régularisation par le travail",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/regularisation-drapeau-arles.webp",
    alt: "Drapeau français flottant devant la façade sculptée de l'hôtel de ville d'Arles",
    largeur: 1024,
    hauteur: 768,
    credit: "ell brown, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/39415781@N06/5800674214",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Correction du 24 octobre 2026",
      texte: "La première version de cet article présentait la circulaire Valls de 2012 comme la règle en vigueur. C'était faux : elle ne s'applique plus depuis le 23 janvier 2025. Nous avons réécrit l'article en entier sur les textes officiels, et retiré les chiffres que nous n'avons pas retrouvés dans une source officielle.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "La circulaire Valls est-elle encore appliquée ?",
    },
    {
      type: "p",
      texte: "Non. Une circulaire, c'est une instruction du ministre aux préfets, qui leur dit comment appliquer la loi. La circulaire du 28 novembre 2012, dite « circulaire Valls », est classée par Légifrance parmi les circulaires qui ==ne sont plus applicables== ([Légifrance](https://www.legifrance.gouv.fr/circulaire/id/45584)). Légifrance, c'est le site officiel qui publie le droit français.",
    },
    {
      type: "p",
      texte: "Elle a été remplacée par la **circulaire du 23 janvier 2025** sur « l'admission exceptionnelle au séjour ». On l'appelle souvent « circulaire Retailleau », du nom du ministre de l'Intérieur qui l'a signée. Elle s'applique depuis le jour de sa signature.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Une circulaire ne crée pas de droit. La règle vient de la loi : l'article L. 435-1 du CESEDA. Le préfet garde un pouvoir d'appréciation : il décide au cas par cas, même si toutes les conditions semblent réunies.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Qu'est-ce que l'admission exceptionnelle au séjour ?",
    },
    {
      type: "p",
      texte: "C'est le nom officiel de la régularisation. Elle est prévue par l'article L. 435-1 du **CESEDA**, le code qui regroupe les règles sur l'entrée et le séjour des étrangers ([Légifrance](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042772028)). Une personne sans papiers peut recevoir un titre de séjour pour des « considérations humanitaires » ou des « motifs exceptionnels ».",
    },
    {
      type: "p",
      texte: "Le titre de séjour, c'est la carte qui vous autorise à vivre en France. Ici, c'est une carte de séjour temporaire « salarié », « travailleur temporaire » ou « vie privée et familiale ». Le visa de long séjour n'est pas exigé.",
    },
    {
      type: "p",
      texte: "Un point protège les personnes présentes depuis longtemps. Vous prouvez ==plus de dix ans== de résidence en France ? Si le préfet envisage un refus, il doit d'abord demander l'avis de la commission du titre de séjour. C'est une commission départementale qui donne son avis au préfet (article L. 435-1).",
    },
    {
      type: "h2",
      texte: "Que demande la circulaire du 23 janvier 2025 ?",
    },
    {
      type: "p",
      texte: "Le texte, lu sur Légifrance, fixe trois orientations aux préfets ([circulaire du 23 janvier 2025](https://www.legifrance.gouv.fr/circulaire/id/45584)) :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Garder un caractère exceptionnel.** Quand la loi prévoit une voie précise pour votre situation, le préfet doit la privilégier. Pour le travail, il doit utiliser d'abord la voie des métiers en tension (article L. 435-4).",
        "**Regarder l'intégration.** Une présence en France d'==au moins 7 ans== est « l'un des indices d'intégration pertinent ». Un diplôme français ou une certification de langue délivrée par un organisme agréé doit être apprécié favorablement. Une demande sans le contrat d'engagement à respecter les principes de la République est incomplète.",
        "**Protéger l'ordre public.** Une personne qui menace l'ordre public, ou qui vit en situation de polygamie en France, est exclue. Une OQTF (obligation de quitter le territoire français) non exécutée peut justifier un refus, surtout si elle date de moins de 3 ans.",
      ],
    },
    {
      type: "p",
      texte: "La circulaire demande aussi d'assortir ==systématiquement== un refus d'une OQTF. Service-public le confirme : le refus est en principe accompagné d'une OQTF ([F16053](https://www.service-public.gouv.fr/particuliers/vosdroits/F16053)). Ne déposez donc pas un dossier sans l'avoir préparé avec soin.",
    },
    {
      type: "h2",
      texte: "Quelles autres voies la loi prévoit-elle ?",
    },
    {
      type: "p",
      texte: "La circulaire rappelle que certaines situations ont leur propre article dans le CESEDA. Pour elles, le préfet doit d'abord appliquer ces articles :",
    },
    {
      type: "tableau",
      entetes: ["Situation", "Article du CESEDA"],
      lignes: [
        ["Victime de traite des êtres humains", "L. 425-1 et L. 425-4"],
        ["Victime de violences conjugales", "L. 425-6 et L. 425-7"],
        ["Travail dans un métier en tension", "L. 435-4 (jusqu'au 31 décembre 2026)"],
        ["Liens personnels et familiaux en France", "L. 423-23"],
        ["Accueil par un organisme d'accueil communautaire et d'activités solidaires", "L. 435-2"],
        ["Jeune confié à l'aide sociale à l'enfance entre 16 et 18 ans", "L. 435-3"],
      ],
      legende: "Liste reprise de la circulaire du 23 janvier 2025 (note 1), lue sur Légifrance le 24 octobre 2026.",
    },
    {
      type: "p",
      texte: "Pour le travail, lisez notre article sur [la régularisation par les métiers en tension](/articles/regularisation-metiers-en-tension). Il faut 12 mois de travail sur les 24 derniers mois et 3 ans de présence. Cette règle est limitée au 31 décembre 2026. Pour une maladie grave, lisez notre page sur [le titre de séjour pour soins](/articles/titre-sejour-etranger-malade-raisons-sante-2026).",
    },
    {
      type: "h2",
      texte: "Comment déposer une demande, et combien coûte-t-elle ?",
    },
    {
      type: "p",
      texte: "Vous déposez un dossier à la **préfecture** de votre lieu de résidence. La préfecture, c'est l'administration de l'État dans le département, qui délivre les titres de séjour. Certaines sous-préfectures ne traitent pas ces demandes ([service-public, F16053](https://www.service-public.gouv.fr/particuliers/vosdroits/F16053)). Les pièces les plus importantes sont :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "un passeport, ou à défaut une attestation consulaire ou une carte consulaire avec photo ;",
        "un acte de naissance complet, un justificatif de domicile de moins de 6 mois et 3 photos ;",
        "des preuves de votre présence en France, année par année : avis d'impôt, attestation d'aide médicale de l'État, courriers officiels ;",
        "des preuves d'intégration : niveau de français, activité, bénévolat, liens familiaux ;",
        "le contrat d'engagement à respecter les principes de la République, signé.",
      ],
    },
    {
      type: "p",
      texte: "Depuis le 1er mai 2026, une régularisation coûte ==650 €== au total. Vous payez un timbre fiscal de 350 € pour le premier titre. Vous payez aussi un droit de visa de régularisation de 300 €. Sur ces 300 €, 100 € se paient au dépôt et ne sont pas remboursés, même en cas de refus ([service-public, A18881](https://www.service-public.gouv.fr/particuliers/actualites/A18881)). Notre article sur [les taxes des titres de séjour](/articles/hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances) détaille le barème.",
    },
    {
      type: "h2",
      texte: "Que faire en cas de refus ?",
    },
    {
      type: "p",
      texte: "Si la préfecture ne répond pas pendant ==90 jours== après le dépôt d'une demande complète, c'est un refus implicite. Ce délai était de 4 mois jusqu'au 29 octobre 2026 ; le [décret n° 2026-1001](/articles/delai-reponse-prefecture-titre-de-sejour-90-jours) l'a raccourci. Vous avez alors 2 mois pour agir ([F16053](https://www.service-public.gouv.fr/particuliers/vosdroits/F16053)). Vous pouvez faire un recours gracieux, c'est-à-dire écrire au préfet pour lui demander de revoir sa décision. Vous pouvez aussi saisir le tribunal administratif, le juge des litiges avec l'administration.",
    },
    {
      type: "p",
      texte: "Si le refus est accompagné d'une OQTF, les délais pour la contester sont souvent plus courts. Lisez vite notre guide sur [le refus de titre de séjour et l'OQTF](/articles/refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france), et faites-vous aider sans attendre.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Chaque situation est différente. Pour votre cas, demandez conseil à un avocat, à une association comme La Cimade ou le Gisti, ou à une permanence d'accès au droit.",
        "Le Défenseur des droits (une autorité indépendante de l'État) peut être saisi gratuitement si vous pensez qu'une administration ne respecte pas vos droits.",
        "Méfiez-vous des personnes qui promettent une régularisation contre de l'argent : personne ne peut la garantir.",
      ],
    },
    {
      type: "p",
      texte: "Après un premier titre d'un an, une carte pluriannuelle demande, depuis le 1er janvier 2026, la réussite à l'examen civique ([service-public, F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)). Vérifiez en une minute si l'examen vous concernera avec le [simulateur d'éligibilité](/eligibilite-examen-civique).",
    },
  ],
  faq: [
    {
      question: "La circulaire Valls est-elle toujours valable ?",
      reponse: "Non. La circulaire Valls du 28 novembre 2012 est classée par Légifrance parmi les circulaires qui ne sont plus applicables. Elle a été remplacée par la circulaire du 23 janvier 2025 sur l'admission exceptionnelle au séjour. La règle de fond reste l'article L. 435-1 du CESEDA, appliquée au cas par cas par le préfet.",
    },
    {
      question: "Quelle est la nouvelle circulaire pour la régularisation ?",
      reponse: "C'est la circulaire du 23 janvier 2025 (NOR INTK2435521J), souvent appelée circulaire Retailleau. Elle demande aux préfets de garder un caractère exceptionnel à la régularisation. Ils regardent l'intégration, dont au moins 7 ans de présence et le niveau de français. Toute menace à l'ordre public est exclue.",
    },
    {
      question: "Combien d'années pour être régularisé en France ?",
      reponse: "Aucun texte ne fixe une durée qui donne droit à un titre. La circulaire du 23 janvier 2025 fait d'une présence d'au moins 7 ans un indice d'intégration. Pour un métier en tension, la loi demande 3 ans de présence. Au-delà de 10 ans, un refus envisagé passe d'abord par la commission du titre de séjour.",
    },
    {
      question: "Comment se faire régulariser en France ?",
      reponse: "Il faut déposer un dossier à la préfecture de votre lieu de résidence, avec des preuves de présence année par année, des preuves d'intégration et le contrat d'engagement républicain signé. Depuis le 1er mai 2026, la régularisation coûte 650 € au total, dont 100 € payés au dépôt et non remboursés.",
    },
  ],
  sources: [
    {
      titre: "Légifrance : circulaire du 23 janvier 2025, orientations générales relatives à l'admission exceptionnelle au séjour (NOR INTK2435521J)",
      url: "https://www.legifrance.gouv.fr/circulaire/id/45584",
      type: "officiel",
      luLe: "2026-10-24",
    },
    {
      titre: "Légifrance : CESEDA, articles L. 435-1 à L. 435-4 (admission exceptionnelle au séjour), version en vigueur au 24 octobre 2026",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042772028",
      type: "officiel",
      luLe: "2026-10-24",
    },
    {
      titre: "Service-public : qu'est-ce que la régularisation d'un étranger par le travail ? (F16053)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16053",
      type: "officiel",
      luLe: "2026-10-24",
    },
    {
      titre: "Service-public : titres de séjour, augmentation des taxes à compter du 1er mai 2026 (A18881)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18881",
      type: "officiel",
      luLe: "2026-10-24",
    },
    {
      titre: "Service-public : carte de séjour pluriannuelle et carte de résident, l'examen civique (F39530)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530",
      type: "officiel",
      luLe: "2026-10-21",
    },
  ],
};

export default article;
