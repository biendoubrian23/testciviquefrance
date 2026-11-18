import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 18/11/2026 (`docs/seo/ROBOT.md`).
 * Famille actualité réglementaire (en retard : 2 sur les 10 derniers
 * articles). Pas de texte au Journal officiel sur nos sujets (JORF n° 0268 et
 * 0269) : le sujet vient du vote du Sénat du 17/11/2026 sur l'article 37 du
 * projet de loi de financement de la sécurité sociale pour 2027 (texte n° 138).
 * Ce n'est pas une règle en vigueur : le titre et le chapeau le disent.
 * Volume : Planificateur, « Obtenir le volume », France, toutes les langues,
 * 18/11/2026 : « apl étranger » 100 à 1 k ; « allocations familiales
 * étrangers » 10 à 100 ; « prestations familiales étrangers », « délai de
 * carence prestations familiales » sans donnée (vote de moins de 72 h, que
 * les douze derniers mois ne voient pas encore).
 * Sources lues le 18/11/2026 : texte n° 138 transmis au Sénat (article 37,
 * mot pour mot) ; projet de loi n° 3211 de l'Assemblée nationale (article 37
 * et son exposé des motifs, open data) ; rapport du Sénat n° 144, tome II
 * (commentaire de l'article 37 : droit en vigueur, liste de L. 511-1,
 * chiffrage, position de la commission) ; dossier législatif du Sénat (page
 * du 18/11/2026) ; Conseil constitutionnel, décision n° 2023-863 DC
 * (considérants 91 à 96) ; Public Sénat (17/11/2026, vote de l'article).
 * Non écrit : le résultat du vote solennel du Sénat sur l'ensemble du texte
 * (prévu le 18/11 après-midi) ; le texte exact de L. 512-2 sur Légifrance
 * (404) : le droit en vigueur est pris dans le rapport du Sénat ; le détail de
 * la coordination à Mayotte (II de l'article), que le rapport présente comme
 * une coordination.
 */
const article: Article = {
  slug: "allocations-familiales-etrangers-delai-un-an",
  titre: "Allocations familiales et APL : le Sénat vote un an de résidence pour certains étrangers, qui serait concerné ?",
  titreSeo: "Allocations familiales étrangers : délai d'un an",
  resume: "Le Sénat a voté l'article 37 du budget de la Sécu 2027 : un an de résidence avant certaines aides de la CAF. Qui serait concerné, et à partir de quand.",
  chapo: "Le 17 novembre 2026, le Sénat a adopté l'article 37 du budget de la Sécurité sociale pour 2027. Il prévoit ==un an de résidence régulière== en France avant la plupart des prestations familiales et l'APL. Il viserait une partie des étrangers non européens. **Ce n'est pas encore la loi** : rien ne change aujourd'hui, et le texte prévoit une entrée en vigueur au plus tard le 1er juillet 2027.",
  publieLe: "2026-11-18",
  modifieLe: "2026-11-18",
  minutes: 7,
  theme: "Article 37 du PLFSS 2027 : la condition d'un an de résidence pour les prestations familiales des étrangers",
  motsCles: [
    "allocations familiales étrangers",
    "prestations familiales étrangers",
    "apl étranger",
    "délai de carence prestations familiales",
    "allocation familiale étranger 1 an",
    "plfss 2027 étrangers",
    "article 37 plfss 2027",
    "caf étranger titre de séjour",
  ],
  rubrique: "actualites",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/senat-palais-luxembourg.webp",
    alt: "La façade en pierre du palais du Luxembourg, siège du Sénat à Paris, avec un drapeau français sur le toit",
    largeur: 1200,
    hauteur: 879,
    credit: "Moonik, via Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Facade_of_Palais_du_Luxembourg,_Paris_5th_001.jpg",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que le Sénat a voté le 17 novembre ?",
    },
    {
      type: "p",
      texte: "Chaque automne, le Parlement examine le budget de la Sécurité sociale pour l'année suivante. Son nom officiel est le projet de loi de financement de la sécurité sociale (PLFSS). Celui pour 2027 a été déposé par le gouvernement le 1er octobre 2026 ([dossier législatif du Sénat](https://www.senat.fr/dossier-legislatif/plfss2027.html)).",
    },
    {
      type: "p",
      texte: "Son ==article 37== crée une condition nouvelle. Pour toucher la plupart des prestations familiales, certains étrangers devraient résider en France ==depuis au moins un an==. Les prestations familiales sont les aides versées par la CAF (la caisse d'allocations familiales) pour les enfants et le logement.",
    },
    {
      type: "p",
      texte: "Le Sénat a adopté cet article en séance le 17 novembre 2026. Les amendements qui voulaient porter la durée à trois ou cinq ans ont été rejetés, selon [Public Sénat](https://www.publicsenat.fr/actualites/politique/budget-2027-de-la-secu-apres-des-debats-houleux-le-senat-adopte-le-delai-de-carence-dun-an-pour-lacces-aux-prestations-familiales-des-etrangers) (17/11/2026). La commission des affaires sociales du Sénat avait proposé de l'adopter, avec deux amendements de rédaction ([rapport n° 144, tome II](https://www.senat.fr/rap/l26-144-2/l26-144-2_mono.html)).",
    },
    {
      type: "encadre",
      titre: "Ce qui change aujourd'hui : rien",
      texte: "Un article voté par le Sénat n'est pas une loi. Le texte doit encore finir son parcours au Parlement, puis être publié au Journal officiel. Et même adopté, l'article 37 ne s'appliquerait qu'à une date fixée par décret (un texte du gouvernement), ==au plus tard le 1er juillet 2027==. D'ici là, la CAF applique les règles actuelles.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Quelles aides seraient concernées ?",
    },
    {
      type: "p",
      texte: "La loi range neuf aides parmi les prestations familiales (article L. 511-1 du code de la sécurité sociale, cité par le [rapport du Sénat](https://www.senat.fr/rap/l26-144-2/l26-144-2_mono.html)). Le texte de l'article 37 en garde trois hors de la nouvelle condition ([texte n° 138](https://www.senat.fr/leg/pjl26-138.html)).",
    },
    {
      type: "tableau",
      entetes: ["Aide", "Avec la condition d'un an ?"],
      lignes: [
        ["Allocations familiales", "Oui"],
        ["Prestation d'accueil du jeune enfant (PAJE), pour la naissance et les premières années", "Oui"],
        ["Complément familial", "Oui"],
        ["Aide personnelle au logement (APL)", "Oui"],
        ["Allocation de soutien familial", "Oui"],
        ["Allocation de rentrée scolaire", "Oui"],
        ["Allocation d'éducation de l'enfant handicapé (AEEH)", "Non"],
        ["Allocation forfaitaire en cas de décès d'un enfant", "Non"],
        ["Allocation journalière de présence parentale (AJPP), pour un enfant gravement malade", "Non"],
      ],
    },
    {
      type: "p",
      texte: "L'APL est donc concernée. Elle est versée par la CAF et figure parmi les prestations familiales, même si c'est l'État qui la paie, rappelle le rapport du Sénat.",
    },
    {
      type: "h2",
      texte: "Qui serait concerné, et qui ne le serait pas ?",
    },
    {
      type: "p",
      texte: "La condition viserait les étrangers qui ne sont ni européens, ni d'un pays de l'Espace économique européen, ni suisses. Mais le texte prévoit de larges exceptions.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Les réfugiés**, les bénéficiaires de la **protection subsidiaire** et les **apatrides** ne seraient pas concernés. La protection subsidiaire protège une personne menacée dans son pays. Un apatride est une personne qu'aucun pays ne reconnaît comme son citoyen.",
        "**Les étrangers qui ont droit à l'égalité de traitement** avec les Français, par le droit de l'Union européenne ou par un accord international, non plus. La France a signé 39 conventions bilatérales de sécurité sociale, selon le rapport du Sénat.",
        "**Les titulaires d'une carte de résident** et **d'un titre qui permet de travailler** ne seraient pas concernés, selon l'exposé des motifs du gouvernement ([projet de loi n° 3211](https://www.assemblee-nationale.fr/dyn/17/textes/l17b3211_projet-loi)).",
      ],
    },
    {
      type: "p",
      texte: "Selon le rapport du Sénat, la mesure vise surtout les étrangers ==nouvellement admis au séjour==. Ils n'ont pas de titre qui les autorise à travailler, ni de convention qui les protège. Le gouvernement chiffre l'économie à 1,8 million d'euros par an pour la branche famille, et 60 millions par an pour l'État, qui finance l'APL.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Le texte vise les droits ==ouverts à partir== de la date d'entrée en vigueur. Les règles de passage pour les droits déjà ouverts seraient à lire dans le décret.",
        "L'article 37 change aussi les papiers à fournir pour les enfants. Seuls les étrangers dont le titre ne permet pas de travailler devraient encore prouver la naissance en France ou l'entrée par le regroupement familial.",
      ],
    },
    {
      type: "h2",
      texte: "Quelle est la règle aujourd'hui ?",
    },
    {
      type: "p",
      texte: "Aujourd'hui, un étranger en situation régulière n'a ==aucune durée de résidence minimale== à justifier pour les prestations familiales. Il doit avoir un titre de séjour (la carte qui autorise à vivre en France) et habiter en France de façon stable. Il doit aussi prouver la situation de ses enfants, par exemple leur naissance en France ou leur entrée par le [regroupement familial](/articles/regroupement-familial-france-2026-guide-complet-conditions-documents-delais) (article L. 512-2 du code de la sécurité sociale, résumé par le rapport du Sénat).",
    },
    {
      type: "p",
      texte: "D'autres aides ont déjà une durée de résidence. Le RSA demande cinq ans avec un titre de séjour qui permet de travailler, sauf exceptions. L'allocation de solidarité aux personnes âgées (ASPA) en demande dix. Notre guide des [aides sociales des étrangers](/articles/aides-sociales-etrangers-france-2026-caf-rsa-apl-prime-activite) détaille ces règles en vigueur.",
    },
    {
      type: "h2",
      texte: "Pourquoi un an, et pas cinq ?",
    },
    {
      type: "p",
      texte: "En janvier 2024, la loi immigration prévoyait cinq ans de résidence pour plusieurs aides, dont les prestations familiales et l'APL. Le Conseil constitutionnel l'a censuré comme un « cavalier législatif » : un article sans lien avec le reste de la loi. Il n'a pas jugé le fond ([décision n° 2023-863 DC](https://www.conseil-constitutionnel.fr/decision/2024/2023863DC.htm), considérants 94 à 96).",
    },
    {
      type: "p",
      texte: "En avril 2024, sur une proposition de référendum, le Conseil a jugé le fond. Selon le rapport du Sénat, il admet des règles propres aux étrangers, mais il juge cinq ans de résidence disproportionnés. Le gouvernement dit avoir choisi un an pour respecter cette décision.",
    },
    {
      type: "citation",
      texte: "Pour la commission, le texte « est mesuré et proportionné ». Elle juge la durée d'un an raisonnable. Les aides liées au handicap, à la maladie grave et au décès d'un enfant restent hors de la condition.",
      source: "Commission des affaires sociales du Sénat, rapport n° 144, tome II, 4 novembre 2026",
    },
    {
      type: "citation",
      texte: "Les sénateurs des trois groupes de gauche ont demandé la suppression de l'article ; une sénatrice écologiste y a vu une « préférence nationale déguisée ».",
      source: "Public Sénat, compte rendu de la séance du 17 novembre 2026",
    },
    {
      type: "h2",
      texte: "Et maintenant, quelles étapes ?",
    },
    {
      type: "p",
      texte: "L'Assemblée nationale n'a pas adopté le texte en première lecture : il a été « considéré comme rejeté » le 23 octobre 2026, puis transmis au Sénat, selon le dossier législatif. Le Sénat vote sur l'ensemble du texte le 18 novembre. Les députés et les sénateurs doivent ensuite trouver un texte commun, et le Conseil constitutionnel peut être saisi avant la publication.",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Ne changez rien à vos démarches auprès de la CAF : les règles actuelles s'appliquent.",
        "Gardez vos papiers à jour, et surtout votre titre de séjour : un titre expiré coupe déjà les droits aujourd'hui. Pensez au [délai de 90 jours](/articles/delai-reponse-prefecture-titre-de-sejour-90-jours) de la préfecture pour un renouvellement.",
        "Si la loi est publiée, nous mettrons cette page à jour avec la date exacte et le décret.",
      ],
    },
    {
      type: "p",
      texte: "La carte de résident, que le gouvernement place hors de la condition, demande l'examen civique pour une première demande. Notre article sur [l'examen civique de la carte de résident](/articles/examen-civique-carte-de-resident) vous dit quoi réviser. Le [simulateur d'éligibilité](/eligibilite-examen-civique) vous dit en une minute si l'examen vous concerne.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le Sénat a voté le 17 novembre 2026 ==un an de résidence régulière== avant la plupart des prestations familiales et l'APL, pour une partie des étrangers non européens. Réfugiés, apatrides, titulaires d'une carte de résident ou d'un titre qui permet de travailler ne seraient pas concernés. Le texte n'est pas encore une loi, et il ne s'appliquerait qu'aux droits ouverts ==au plus tard à partir du 1er juillet 2027==.",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Les étrangers ont-ils droit aux allocations familiales ?",
      reponse: "Oui, aujourd'hui, un étranger en situation régulière qui vit en France de façon stable peut toucher les prestations familiales, sans durée minimale de résidence. Il doit avoir un titre de séjour valable et prouver la situation de ses enfants. L'article 37 du budget de la Sécu 2027, voté par le Sénat, ajouterait un an de résidence pour certains.",
    },
    {
      question: "Quand le délai d'un an s'appliquerait-il ?",
      reponse: "Pas avant que la loi soit adoptée et publiée au Journal officiel. Le texte prévoit ensuite une date fixée par décret, au plus tard le 1er juillet 2027, pour les droits ouverts à partir de cette date. Le 18 novembre 2026, rien n'a changé : la CAF applique toujours les règles actuelles.",
    },
    {
      question: "L'APL est-elle concernée par le délai de carence ?",
      reponse: "Oui, selon le texte voté par le Sénat. L'aide personnelle au logement fait partie des prestations familiales du code de la sécurité sociale. Seules trois aides resteraient hors de la condition : l'allocation d'éducation de l'enfant handicapé, l'allocation journalière de présence parentale et l'allocation versée en cas de décès d'un enfant.",
    },
    {
      question: "Les titulaires d'une carte de résident seraient-ils concernés ?",
      reponse: "Non, selon l'exposé des motifs du gouvernement : la condition ne viserait pas les titulaires d'une carte de résident, ni ceux dont le titre permet de travailler. Les réfugiés, les bénéficiaires de la protection subsidiaire et les apatrides seraient aussi exclus. Pour un cas personnel, interrogez votre CAF ou une association.",
    },
  ],
  sources: [
    {
      titre: "Sénat : projet de loi de financement de la sécurité sociale pour 2027, texte n° 138 transmis au Sénat (article 37)",
      url: "https://www.senat.fr/leg/pjl26-138.html",
      type: "officiel",
      luLe: "2026-11-18",
    },
    {
      titre: "Assemblée nationale : projet de loi n° 3211 de financement de la sécurité sociale pour 2027 (article 37 et exposé des motifs)",
      url: "https://www.assemblee-nationale.fr/dyn/17/textes/l17b3211_projet-loi",
      type: "officiel",
      luLe: "2026-11-18",
    },
    {
      titre: "Sénat : rapport n° 144 (2026-2027), tome II, examen des articles, article 37 (4 novembre 2026)",
      url: "https://www.senat.fr/rap/l26-144-2/l26-144-2_mono.html",
      type: "officiel",
      luLe: "2026-11-18",
    },
    {
      titre: "Sénat : dossier législatif du projet de loi de financement de la sécurité sociale pour 2027 (page du 18 novembre 2026)",
      url: "https://www.senat.fr/dossier-legislatif/plfss2027.html",
      type: "officiel",
      luLe: "2026-11-18",
    },
    {
      titre: "Conseil constitutionnel : décision n° 2023-863 DC du 25 janvier 2024, loi pour contrôler l'immigration, améliorer l'intégration (considérants 91 à 96)",
      url: "https://www.conseil-constitutionnel.fr/decision/2024/2023863DC.htm",
      type: "juridique",
      luLe: "2026-11-18",
    },
    {
      titre: "Public Sénat : le Sénat adopte le délai de carence d'un an pour l'accès aux prestations familiales des étrangers (17 novembre 2026)",
      url: "https://www.publicsenat.fr/actualites/politique/budget-2027-de-la-secu-apres-des-debats-houleux-le-senat-adopte-le-delai-de-carence-dun-an-pour-lacces-aux-prestations-familiales-des-etrangers",
      type: "article",
      luLe: "2026-11-18",
    },
  ],
};

export default article;
