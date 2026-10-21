import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 21/10/2026 (`docs/seo/ROBOT.md`).
 * Requêtes visées : « métiers en tension » et « admission exceptionnelle au
 * séjour » (1 k à 10 k recherches par mois chacune, Planificateur de mots
 * clés, 21/10/2026). L'article L. 435-4 du CESEDA, lu sur Légifrance le
 * 21/10/2026, est « en vigueur du 28 janvier 2024 au 31 décembre 2026 » :
 * aucune version plus récente n'y figure à cette date.
 */
const article: Article = {
  slug: "regularisation-metiers-en-tension",
  titre: "Métiers en tension : pouvez-vous encore demander votre régularisation avant le 31 décembre 2026 ?",
  titreSeo: "Régularisation métiers en tension avant fin 2026",
  resume: "La régularisation par un métier en tension (CESEDA L. 435-4) s'applique jusqu'au 31 décembre 2026 : conditions, pièces, taxes et recours, sources officielles.",
  chapo: "Oui, jusqu'au ==31 décembre 2026==. La régularisation par le travail dans un métier en tension est une règle provisoire : la loi la limite à cette date. Au 21 octobre 2026, aucun texte voté et publié ne la prolonge. Voici les conditions, le dossier et les frais, d'après les textes officiels.",
  publieLe: "2026-10-21",
  modifieLe: "2026-10-21",
  minutes: 8,
  theme: "régularisation métiers en tension",
  motsCles: [
    "métiers en tension",
    "régularisation métier en tension",
    "admission exceptionnelle au séjour",
    "régularisation par le travail",
    "titre de séjour métier en tension",
    "liste des métiers en tension 2026",
    "L435-4 CESEDA",
    "métiers en tension 31 décembre 2026",
  ],
  rubrique: "actualites",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/regularisation-metiers-en-tension.webp",
    alt: "Deux grues jaunes et des armatures métalliques sur un chantier, sous un ciel bleu",
    largeur: 1024,
    hauteur: 768,
    credit: "andrechinn, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/16167252@N00/3525054487",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que la régularisation par les métiers en tension ?",
    },
    {
      type: "p",
      texte: "C'est une façon d'obtenir un titre de séjour (la carte qui vous autorise à vivre en France) quand vous travaillez sans papiers dans un métier qui manque de bras. On parle de « métier en tension » : un métier où les employeurs ont du mal à recruter.",
    },
    {
      type: "p",
      texte: "La règle est écrite à l'article L. 435-4 du CESEDA, le code qui regroupe les règles sur l'entrée et le séjour des étrangers ([Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049044146)). Elle a été créée par la loi du 26 janvier 2024. Elle fait partie de « l'admission exceptionnelle au séjour » : une régularisation au cas par cas.",
    },
    {
      type: "encadre",
      titre: "La date à retenir",
      texte: "Légifrance indique que l'article L. 435-4 est en vigueur ==jusqu'au 31 décembre 2026==. Service-public le dit aussi ([fiche F16053](https://www.service-public.gouv.fr/particuliers/vosdroits/F16053)). Le 21 octobre 2026, aucun texte publié ne prolonge cette date.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Quelles sont les conditions à remplir ?",
    },
    {
      type: "p",
      texte: "La loi fixe trois conditions principales ([CESEDA, article L. 435-4](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049044146)) :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "avoir travaillé comme salarié au moins **12 mois**, de suite ou non, pendant les **24 derniers mois**, dans un métier en tension.",
        "occuper, au moment de la demande, un emploi dans un de ces métiers, dans une région où il est en tension.",
        "vivre en France sans interruption depuis au moins **3 ans**.",
      ],
    },
    {
      type: "p",
      texte: "Certaines périodes ne comptent pas. Ce sont le travail fait avec une carte « étudiant » ou « travailleur saisonnier », et le temps passé avec une attestation de demande d'asile. Le travail comme entrepreneur ou en profession libérale ne compte pas non plus ([service-public, F16053](https://www.service-public.gouv.fr/particuliers/vosdroits/F16053)).",
    },
    {
      type: "p",
      texte: "La préfecture regarde aussi votre vie en France. La préfecture, c'est le service de l'État qui gère les titres de séjour dans votre département. Elle tient compte de votre insertion sociale et familiale, du respect de l'ordre public et de votre adhésion aux principes de la République.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Ce n'est pas un droit. La loi dit que les conditions ne sont « pas opposables » : la préfecture peut refuser même si vous les remplissez.",
        "Une condamnation inscrite au bulletin n° 2 du casier judiciaire empêche la délivrance de cette carte.",
        "Il n'est pas nécessaire d'être entré en France avec un visa de long séjour (L. 435-4).",
      ],
    },
    {
      type: "h2",
      texte: "Quels sont les métiers en tension ?",
    },
    {
      type: "p",
      texte: "La liste est fixée par un arrêté (une décision écrite des ministres) du 21 mai 2025. Il a été publié le 22 mai 2025 au Journal officiel, le journal où l'État publie ses textes ([Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051643488)). La liste change **d'une région à l'autre**.",
    },
    {
      type: "p",
      texte: "Par exemple, en Île-de-France, la liste comprend les aides à domicile, les aides-soignants, les cuisiniers et les couvreurs. Un métier en tension en Bretagne ne l'est pas forcément à Paris. C'est la région où vous travaillez qui compte.",
    },
    {
      type: "p",
      texte: "Le 21 octobre 2026, l'arrêté couvre les régions de l'Hexagone et la Corse. Aucune région d'outre-mer n'y figure. Si vous vivez en Guadeloupe, en Martinique, en Guyane, à La Réunion ou à Mayotte, renseignez-vous auprès de la préfecture de votre territoire.",
    },
    {
      type: "h2",
      texte: "Comment déposer la demande ?",
    },
    {
      type: "p",
      texte: "Vous déposez un dossier à la préfecture de votre lieu de résidence. Vous remplissez **vous-même** la demande d'autorisation de travail, sans votre employeur ([service-public, F16053](https://www.service-public.gouv.fr/particuliers/vosdroits/F16053)). Voici les principales pièces demandées :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "une copie intégrale de votre acte de naissance.",
        "votre passeport, ou une autre pièce d'identité avec photo (carte consulaire, par exemple).",
        "3 photos et un justificatif de domicile de moins de 6 mois.",
        "le formulaire de demande d'autorisation de travail au titre des métiers en tension, rempli et signé.",
        "des preuves de votre présence en France depuis votre arrivée : avis d'imposition ou attestation d'aide médicale de l'État, par exemple.",
        "des preuves de votre travail : bulletins de salaire, virements, certificat de travail, avis d'imposition.",
        "des preuves de votre insertion : vie associative, bénévolat, école des enfants.",
        "le contrat d'engagement à respecter les principes de la République, signé.",
      ],
    },
    {
      type: "p",
      texte: "Si le dossier est complet, la préfecture vous remet un récépissé : le papier qui prouve que votre demande est en cours. Pour cette démarche, ce récépissé vous autorise à travailler (F16053). Notre article sur le [récépissé](/articles/recepisse-titre-de-sejour-droits-duree-voyage) détaille vos droits pendant l'attente.",
    },
    {
      type: "h2",
      texte: "Quelle carte obtenez-vous, et combien coûte-t-elle ?",
    },
    {
      type: "p",
      texte: "Si la préfecture accepte, vous recevez une carte de séjour temporaire. Avec un CDI, c'est une carte « salarié » valable 1 an et renouvelable. Avec un CDD, c'est une carte « travailleur temporaire », valable le temps du contrat (F16053).",
    },
    {
      type: "p",
      texte: "Au moment de la remise, vous payez un timbre fiscal, une somme due à l'État. Depuis le 1er mai 2026, il coûte ==350 €== pour un premier titre au tarif normal ([service-public, A18881](https://www.service-public.gouv.fr/particuliers/actualites/A18881)).",
    },
    {
      type: "p",
      texte: "S'y ajoute parfois le droit de visa de régularisation. Il est dû en cas d'entrée en France sans visa, ou sans titre demandé dans les délais. Il coûte ==300 €==, dont 100 € payés au dépôt et non remboursables (A18881). Notre page sur le [timbre fiscal du titre de séjour](/articles/hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances) donne tout le barème.",
    },
    {
      type: "h2",
      texte: "Que se passe-t-il après le 31 décembre 2026 ?",
    },
    {
      type: "p",
      texte: "À cette date, l'article L. 435-4 cesse de s'appliquer, sauf si une loi le prolonge avant. Le texte ne dit pas ce que deviennent les demandes déposées avant et encore à l'étude. Si vous êtes dans ce cas, posez la question à votre préfecture.",
    },
    {
      type: "p",
      texte: "Une proposition de loi « visant à régulariser les étrangers travaillant dans un métier essentiel ou en tension » a été déposée à l'Assemblée nationale le 6 octobre 2026 ([texte n° 3266](https://www.assemblee-nationale.fr/dyn/17/textes/l17b3266_proposition-loi)). Elle a été renvoyée à la commission des lois. Une proposition de loi est un texte déposé par des députés : elle ne change rien tant qu'elle n'est pas votée et publiée.",
    },
    {
      type: "p",
      texte: "Une autre voie reste ouverte : l'admission exceptionnelle « cas général » (article L. 435-1 du CESEDA). Les conditions y sont plus larges, mais la préfecture peut demander jusqu'à **7 ans** de présence en France. Elle suit pour cela une circulaire, une instruction du ministre aux préfets, datée du 23 janvier 2025 ([service-public, F16053](https://www.service-public.gouv.fr/particuliers/vosdroits/F16053)).",
    },
    {
      type: "p",
      texte: "Pour les autres façons de travailler légalement en France, voyez notre guide sur l'[autorisation de travail](/articles/travailler-france-etranger-autorisation-droits).",
    },
    {
      type: "h2",
      texte: "Que faire en cas de refus ?",
    },
    {
      type: "p",
      texte: "Si la préfecture ne répond pas pendant 4 mois, c'est un refus, dit implicite. Vous avez alors 2 mois pour agir (F16053). Vous pouvez faire un recours gracieux : une demande au préfet de revoir sa décision. Vous pouvez aussi saisir le tribunal administratif, le juge qui contrôle les décisions de l'État.",
    },
    {
      type: "p",
      texte: "Un refus écrit est souvent accompagné d'une OQTF (obligation de quitter le territoire français). Les délais de recours sont alors très courts. Notre guide des [recours contre un refus de titre et une OQTF](/articles/refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france) les explique.",
    },
    {
      type: "p",
      texte: "Après une première carte d'un an, la suite du parcours mène souvent à une carte pluriannuelle. Depuis le 1er janvier 2026, une première carte pluriannuelle demande la réussite à l'examen civique ([service-public, F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)). Vérifiez en une minute si l'examen vous concernera avec le [simulateur d'éligibilité](/eligibilite-examen-civique).",
    },
    {
      type: "cta",
      texte: "Préparez dès maintenant l'examen civique de votre future carte pluriannuelle : testez-vous sur 40 questions types.",
      bouton: "Faire un examen blanc gratuit",
    },
    {
      type: "encadre",
      titre: "Le geste utile",
      texte: "Rassemblez vos bulletins de salaire et vos preuves de présence dès maintenant, puis prenez rendez-vous en préfecture sans attendre décembre. Pour votre cas précis, faites-vous aider gratuitement par une association comme La Cimade, ou par un avocat.",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Est-ce que les métiers en tension vont s'arrêter ?",
      reponse: "La régularisation par un métier en tension (article L. 435-4 du CESEDA) s'applique jusqu'au 31 décembre 2026, selon Légifrance et service-public. Au 21 octobre 2026, aucun texte publié ne la prolonge. La liste des métiers en tension, elle, continue de servir pour les autorisations de travail demandées par les employeurs.",
    },
    {
      question: "Comment se faire régulariser par le travail ?",
      reponse: "Il faut déposer un dossier à la préfecture de votre lieu de résidence. Dans un métier en tension, il faut 12 mois de travail sur les 24 derniers mois, un emploi actuel dans ce métier et 3 ans de présence en France. Hors métier en tension, la préfecture peut demander 7 ans de présence.",
    },
    {
      question: "Quelle est la liste des métiers en tension en 2026 ?",
      reponse: "C'est la liste de l'arrêté du 21 mai 2025, publiée au Journal officiel du 22 mai 2025. Elle change selon la région : en Île-de-France, on y trouve par exemple les aides-soignants, les cuisiniers et les couvreurs. Les régions d'outre-mer n'y figurent pas au 21 octobre 2026.",
    },
    {
      question: "Quel titre de séjour pour un métier en tension ?",
      reponse: "La préfecture délivre une carte de séjour temporaire. Avec un CDI, c'est une carte « salarié » valable 1 an et renouvelable. Avec un CDD, c'est une carte « travailleur temporaire » valable le temps du contrat. Au premier titre, le timbre fiscal coûte 350 € depuis le 1er mai 2026.",
    },
  ],
  sources: [
    {
      titre: "Assemblée nationale : proposition de loi n° 3266 visant à régulariser les étrangers travaillant dans un métier essentiel ou en tension (déposée le 06/10/2026)",
      url: "https://www.assemblee-nationale.fr/dyn/17/textes/l17b3266_proposition-loi",
      type: "officiel",
      luLe: "2026-10-21",
    },
    {
      titre: "Légifrance : CESEDA, article L. 435-4 (version en vigueur du 28 janvier 2024 au 31 décembre 2026)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049044146",
      type: "officiel",
      luLe: "2026-10-21",
    },
    {
      titre: "Légifrance : arrêté du 21 mai 2025 fixant la liste des métiers et zones géographiques caractérisés par des difficultés de recrutement",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051643488",
      type: "officiel",
      luLe: "2026-10-21",
    },
    {
      titre: "Service-public : qu'est-ce que la régularisation d'un étranger par le travail ? (F16053)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16053",
      type: "officiel",
      luLe: "2026-10-21",
    },
    {
      titre: "Service-public : titres de séjour, augmentation des taxes à compter du 1er mai 2026 (A18881)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18881",
      type: "officiel",
      luLe: "2026-10-21",
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
