import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-campus-france-2026.ts`
 * et `lib/data/seo-articles.ts`, sans changer d'adresse.
 * Réécrit par le robot éditorial le 13/11/2026 (`docs/seo/ROBOT.md`), liste
 * « à revérifier » de `docs/seo/MOTS-CLES.md` : la version migrée présentait
 * l'APL comme ouverte aux étudiants étrangers (faux depuis le 01/07/2026),
 * des ressources de 615 € par mois (877,5 € sur F2231), 65 pays (75 selon
 * Campus France), une « APS » (carte « recherche d'emploi ou création
 * d'entreprise » aujourd'hui), un seuil du passeport talent faux, un niveau
 * B1 pour la naturalisation, et des chiffres sans source (frais, coût de la
 * vie, « 48 400 recherches »). Tout ce qui n'avait pas de source a été retiré.
 * Sources lues le 13/11/2026 : Campus France (procédure « Études en France »,
 * mise à jour le 28/09/2026) ; service-public F2231, F2713, F17319, F1563,
 * F39426 ; Légifrance, code civil art. 21-18.
 */
const article: Article = {
  slug: "campus-france-etude-france-2026-visa-inscription-procedure",
  titre: "Campus France : la procédure « Études en France » pas à pas, et l'argent à prouver pour le visa",
  titreSeo: "Campus France : la procédure Études en France",
  resume: "Campus France pas à pas : les 75 pays concernés, la plateforme Études en France, le calendrier 2027, le visa étudiant, 877,5 € par mois, le travail.",
  chapo: "Si vous vivez dans l'un des ==75 pays== de la procédure « Études en France », votre inscription dans le supérieur français passe par Campus France, jusqu'à la demande de visa. Pour une 1re année de licence en 2027, le dépôt ferme le ==15 décembre 2026==. Pour le visa, vous devez prouver au moins ==877,5 € par mois==.",
  publieLe: "2026-04-28",
  modifieLe: "2026-11-13",
  minutes: 7,
  theme: "campus france",
  motsCles: [
    "campus france",
    "campus france 2026",
    "études en france",
    "procédure études en france",
    "pastel diplomatie",
    "visa étudiant france",
    "demande d'admission préalable",
    "entretien campus france",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/campus-france-sorbonne.webp",
    alt: "La façade de la Sorbonne à Paris, avec ses portes en arc, et les drapeaux français et européen au balcon",
    largeur: 1200,
    hauteur: 794,
    credit: "NonOmnisMoriar, via Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Sorbonne_university_main_building_entrance.jpg",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Article corrigé le 13/11/2026",
      texte: "La version précédente contenait des erreurs. Les étudiants étrangers non boursiers n'ont plus droit à l'APL depuis le 1er juillet 2026, sauf exceptions. Les ressources à prouver sont de 877,5 € par mois, et non de 615 €. La procédure concerne 75 pays, et non 65. Les chiffres sans source officielle ont été retirés.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Qui doit passer par Campus France ?",
    },
    {
      type: "p",
      texte: "Campus France est l'agence publique qui accompagne les étudiants étrangers qui veulent étudier en France. La procédure « Études en France » est sa procédure de référence pour les pays hors Union européenne ([Campus France](https://www.campusfrance.org/fr/candidature-procedure-etudes-en-france), page mise à jour le 28/09/2026).",
    },
    {
      type: "p",
      texte: "Elle concerne les étudiants qui ==résident== dans l'un des 75 pays ou territoires de la liste. En Afrique, on y trouve l'Algérie, le Maroc, la Tunisie, le Sénégal, la Côte d'Ivoire, le Cameroun et Madagascar. Ailleurs, la Chine, l'Inde, le Vietnam, le Brésil, le Canada, les États-Unis, le Royaume-Uni, la Turquie et l'Ukraine. La liste complète est sur la page de Campus France.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Le doctorat n'est pas concerné.** Vous contactez directement les écoles doctorales, puis vous demandez un visa « passeport talent chercheur » (Campus France).",
        "**Un ressortissant européen qui vit dans un de ces pays** passe seulement par Parcoursup, la plateforme d'inscription en 1re année du supérieur.",
        "**Vous vivez déjà en France avec un titre de séjour ?** La procédure vise les étudiants qui résident dans un des 75 pays. Renseignez-vous auprès de l'établissement visé.",
      ],
    },
    {
      type: "h2",
      texte: "Comment se passe la procédure « Études en France » ?",
    },
    {
      type: "p",
      texte: "Tout se fait sur une seule plateforme en ligne, [Études en France](https://pastel.diplomatie.gouv.fr/etudesenfrance/dyn/public/authentification/login.html). Vous créez un dossier personnel, vous déposez vos demandes d'inscription, vous échangez avec l'espace Campus France de votre pays et avec les établissements. La démarche va ==jusqu'à la demande de visa==. Une participation financière est demandée pour ce service : son montant dépend de votre pays, et l'espace Campus France local vous l'indique.",
    },
    {
      type: "p",
      texte: "Pour une 1re année de licence, vous faites une demande d'admission préalable (DAP) sur la même plateforme. Si vous préparez un baccalauréat français ou européen, vous passez aussi par Parcoursup. Pour la 2e ou la 3e année de licence, ou pour un master, vous suivez aussi la procédure « Études en France ». Le calendrier est alors donné par l'espace Campus France de votre pays.",
    },
    {
      type: "tableau",
      entetes: ["Étape de la DAP (rentrée 2027)", "Date"],
      lignes: [
        ["Ouverture des inscriptions", "1er octobre 2026"],
        ["Clôture des inscriptions", "15 décembre 2026"],
        ["Réponse des universités", "avant le 30 avril 2027"],
        ["Votre réponse", "avant le 31 mai 2027"],
      ],
      legende: "Source : Campus France, procédure « Études en France », page lue le 13/11/2026.",
    },
    {
      type: "p",
      texte: "Votre dossier de DAP est examiné en même temps par les 3 universités que vous avez demandées. ==Sans réponse de votre part avant le 31 mai 2027==, votre silence vaut refus. Les universités peuvent aussi vous proposer une exonération des droits d'inscription : regardez bien leur réponse.",
    },
    {
      type: "h2",
      texte: "Quel visa demander, et combien d'argent prouver ?",
    },
    {
      type: "p",
      texte: "Une fois accepté, vous demandez un visa de long séjour « étudiant ». C'est souvent un VLS-TS, un visa de long séjour qui vaut titre de séjour. Le titre de séjour, c'est le document qui vous autorise à vivre en France. Le VLS-TS « étudiant » vaut ==de 4 mois à 1 an== ([service-public, F2231](https://www.service-public.gouv.fr/particuliers/vosdroits/F2231), vérifiée le 01/08/2026).",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Être inscrit ou préinscrit** dans un établissement d'enseignement supérieur, public ou privé.",
        "**Prouver au moins 877,5 € de ressources par mois.** Cette condition ne s'applique pas si vous avez réussi le concours d'entrée d'un établissement qui a signé une convention avec l'État.",
        "**Valider le VLS-TS une fois en France** et payer la taxe de 100 €. Sans validation, le visa ne vaut pas titre de séjour.",
      ],
    },
    {
      type: "p",
      texte: "Après 1 an, vous pouvez demander une carte de séjour « étudiant » d'un an, ou une carte pluriannuelle de 2 à 4 ans (F2231). Le renouvellement se demande en ligne sur l'ANEF, le site officiel des démarches des étrangers en France. Notre [guide pour créer un compte ANEF](/articles/compte-anef-creer-2026-guide-pas-a-pas) l'explique pas à pas.",
    },
    {
      type: "h2",
      texte: "Pouvez-vous travailler et toucher l'APL pendant vos études ?",
    },
    {
      type: "p",
      texte: "Oui pour le travail, dans une limite. Un étudiant étranger non européen peut travailler ==964 heures par an== sans autorisation de travail, soit 60 % de la durée légale annuelle du travail ([service-public, F2713](https://www.service-public.gouv.fr/particuliers/vosdroits/F2713)). Les règles des étudiants algériens sont différentes : la fiche les donne à part.",
    },
    {
      type: "p",
      texte: "Pour l'APL, l'aide au logement de la CAF, la règle a changé le 1er juillet 2026. Elle vise les étudiants d'un pays hors Union européenne, avec un titre de séjour « étudiant » ([service-public, F1563](https://www.service-public.gouv.fr/particuliers/vosdroits/F1563)). Ils n'y ont droit que dans 3 cas : la bourse sur critères sociaux, une activité professionnelle, ou un contrat d'apprentissage ou de professionnalisation. Notre article sur [l'APL des étudiants étrangers](/articles/apl-etudiant-etranger) explique ces cas un par un.",
    },
    {
      type: "p",
      texte: "Ne comptez donc pas sur l'APL dans votre budget sans vérifier votre cas. Pour trouver un logement, lisez notre article sur [le logement des étudiants étrangers](/articles/logement-etudiant-etranger-france-2026-crous-visale-garant-dossier), corrigé lui aussi.",
    },
    {
      type: "h2",
      texte: "Et après le diplôme ?",
    },
    {
      type: "p",
      texte: "Avec un master ou un diplôme équivalent obtenu en France, vous pouvez demander une carte de séjour « recherche d'emploi ou création d'entreprise ». Elle vaut ==1 an== ([service-public, F17319](https://www.service-public.gouv.fr/particuliers/vosdroits/F17319), vérifiée le 01/06/2026). Si vous êtes en France, la demande se fait dans les 12 mois qui suivent le diplôme, sous carte de séjour « étudiant ». La licence professionnelle ouvre aussi ce droit.",
    },
    {
      type: "p",
      texte: "Un emploi qualifié peut ensuite ouvrir une carte « talent ». Notre article sur [le passeport talent](/articles/passeport-talent-2026-conditions-metiers-demarches) donne les seuils officiels, vérifiés le 08/11/2026.",
    },
    {
      type: "p",
      texte: "Pour devenir français par naturalisation, il faut en principe 5 ans de résidence (le « stage »). Ce délai est ==réduit à 2 ans== si vous avez réussi deux années d'études supérieures en France, en vue d'un diplôme français (article 21-18 du code civil, [Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000024197095)). La naturalisation passe aussi par un examen civique sur l'histoire, la culture et la société françaises ([service-public, F39426](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426)).",
    },
    {
      type: "encadre",
      titre: "Le geste à faire dès maintenant",
      texte: "Pour une 1re année de licence à la rentrée 2027, créez votre dossier sur Études en France avant le 15 décembre 2026. Préparez en même temps la preuve de vos ressources : 877,5 € par mois. Et si vous pensez déjà à la suite, [vérifiez en une minute si l'examen civique vous concernera](/eligibilite-examen-civique).",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Quels sont les pays concernés par Campus France ?",
      reponse: "La procédure « Études en France » concerne les étudiants qui résident dans l'un des 75 pays ou territoires listés par Campus France. On y trouve notamment l'Algérie, le Maroc, la Tunisie, le Sénégal, la Côte d'Ivoire, le Cameroun, la Chine, l'Inde, le Canada et les États-Unis. La liste complète est sur campusfrance.org.",
    },
    {
      question: "Quelle est la date limite pour Campus France ?",
      reponse: "Pour une 1re année de licence à la rentrée 2027, la demande d'admission préalable ouvre le 1er octobre 2026 et ferme le 15 décembre 2026. Les universités répondent avant le 30 avril 2027, et vous avant le 31 mai 2027. Pour la licence 2, la licence 3 ou le master, le calendrier dépend de votre pays.",
    },
    {
      question: "Combien d'argent faut-il pour un visa étudiant en France ?",
      reponse: "Service-public indique qu'il faut justifier de ressources d'au moins 877,5 € par mois pour un visa ou un titre de séjour « étudiant ». Cette condition ne s'applique pas si vous avez réussi le concours d'entrée d'un établissement conventionné avec l'État. La validation du VLS-TS en France coûte 100 €.",
    },
    {
      question: "Un étudiant étranger a-t-il droit à l'APL ?",
      reponse: "La règle a changé le 1er juillet 2026 pour les étudiants d'un pays hors Union européenne, avec un titre de séjour « étudiant ». L'aide au logement ne leur est ouverte que dans 3 cas : la bourse sur critères sociaux, une activité professionnelle, ou un contrat d'apprentissage ou de professionnalisation. Vérifiez votre situation sur la fiche F1563 de service-public avant de compter sur cette aide.",
    },
  ],
  sources: [
    {
      titre: "Campus France : candidater si vous résidez dans un pays relevant de la procédure « Études en France » (mise à jour le 28/09/2026)",
      url: "https://www.campusfrance.org/fr/candidature-procedure-etudes-en-france",
      type: "officiel",
      luLe: "2026-11-13",
    },
    {
      titre: "Service-public : étudiant étranger en France, visa de long séjour ou titre de séjour, fiche F2231 (vérifiée le 01/08/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2231",
      type: "officiel",
      luLe: "2026-11-13",
    },
    {
      titre: "Service-public : un étudiant non européen peut-il travailler en France ?, fiche F2713 (vérifiée le 07/10/2025)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2713",
      type: "officiel",
      luLe: "2026-11-13",
    },
    {
      titre: "Service-public : un étudiant peut-il bénéficier d'une aide au logement ?, fiche F1563 (vérifiée le 01/07/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1563",
      type: "officiel",
      luLe: "2026-11-13",
    },
    {
      titre: "Service-public : carte de séjour ou VLS-TS recherche d'emploi ou création d'entreprise, fiche F17319 (vérifiée le 01/06/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F17319",
      type: "officiel",
      luLe: "2026-11-13",
    },
    {
      titre: "Légifrance : code civil, article 21-18 (stage de naturalisation réduit à deux ans)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000024197095",
      type: "officiel",
      luLe: "2026-11-13",
    },
    {
      titre: "Service-public : naturalisation française, comment passer l'examen civique ?, fiche F39426 (vérifiée le 16/07/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39426",
      type: "officiel",
      luLe: "2026-11-13",
    },
  ],
};

export default article;
