import type { Article } from "@/contenu/articles";

/**
 * Publié le 01/04/2026, migré le 20/10/2026 sans changer d'adresse.
 *
 * Réécrit le 20/10/2026 (`docs/seo/ROBOT.md`, liste « à revérifier » de
 * `docs/seo/MOTS-CLES.md`) : l'ancienne version présentait une « circulaire
 * INT/D/26/00024/C du 15 avril 2026 » née d'un « accord de Rabat du 12 mars
 * 2026 », avec des délais réduits à 12 mois, des quotas, 15 nouveaux centres,
 * un seuil de revenus à 0,9 SMIC, des citations d'associations et des
 * témoignages. Aucun de ces textes n'existe sur Légifrance, interieur.gouv.fr
 * ni service-public au 20/10/2026 : tout a été retiré. Le slug garde
 * « circulaire-avril-2026 » pour répondre juste à ceux qui la cherchent.
 *
 * Le même jour, le doublon `circulaire-avril-2026-delais-naturalisation-reduits-12-mois-maghreb`
 * (02/04/2026, « circulaire du 1er avril 2026 ») y a été fusionné et redirige
 * ici en 301. Il n'en a été repris que ses requêtes (`motsCles`) et ses liens
 * « À lire aussi » : ses chiffres (45 000 dossiers, 38 %, 12 000 dossiers en
 * attente selon le Défenseur des droits) n'avaient aucune source officielle.
 *
 * Couverture : Unsplash (licence Unsplash : usage libre, commercial compris),
 * dimensions nominales.
 */
const article: Article = {
  slug: "circulaire-avril-2026-naturalisation-maghreb-maroc-algerie-tunisie",
  titre: "Naturalisation des Marocains, Algériens et Tunisiens en 2026 : pas de circulaire d'avril, ce que disent vraiment les textes",
  titreSeo: "Circulaire avril 2026 naturalisation Maghreb",
  resume: "Aucune circulaire d'avril 2026 ne vise les Marocains, Algériens ou Tunisiens. Les règles de naturalisation sont les mêmes pour tous : le point, sources en main.",
  chapo: "Au 20 octobre 2026, aucune circulaire d'avril 2026 ne prévoit de règles de naturalisation propres aux Marocains, aux Algériens ou aux Tunisiens. Une circulaire, c'est une consigne écrite du ministre aux préfets. Celles du ministère de l'Intérieur sont publiées sur Légifrance (le site officiel du droit), et nous n'y en avons trouvé aucune de ce type. Les conditions sont les mêmes pour toutes les nationalités : voici celles qui s'appliquent en 2026.",
  publieLe: "2026-04-01",
  modifieLe: "2026-10-20",
  minutes: 7,
  theme: "circulaire naturalisation 2026",
  motsCles: [
    "circulaire avril 2026",
    "circulaire naturalisation 2026",
    "ministère intérieur circulaire avril 2026",
    "accord rabat mars 2026",
    "naturalisation maghreb",
    "naturalisation marocains",
    "naturalisation algériens",
    "naturalisation tunisiens",
    "délai naturalisation maghrébin",
    "délai naturalisation réduit",
    "test civique maroc algérie tunisie",
    "circulaire 2 mai 2025 naturalisation",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?q=80&w=1200&auto=format&fit=crop",
    alt: "Un vélo garé au pied d'un escalier, devant un immeuble parisien aux balcons fleuris",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1471623320832-752e8bbf8413",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Correction du 20 octobre 2026",
      texte: "Une version précédente de cet article décrivait une « circulaire du 15 avril 2026 » liée à un « accord de Rabat ». Elle annonçait des délais réduits à 12 mois, des quotas et 15 nouveaux centres d'examen. Nous n'avons trouvé aucun de ces textes sur les sites officiels. Ces informations ont donc été retirées.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Existe-t-il une circulaire d'avril 2026 pour les Maghrébins ?",
      id: "circulaire-avril-2026",
    },
    {
      type: "p",
      texte: "Non, pas à la date du 20 octobre 2026. Nous avons cherché sur Légifrance, sur le site du ministère de l'Intérieur et sur service-public. Aucune circulaire d'avril 2026 ne vise la naturalisation des personnes du Maroc, de l'Algérie ou de la Tunisie. Aucun « accord de Rabat » de mars 2026 n'y figure non plus.",
    },
    {
      type: "p",
      texte: "En avril 2026, le ministère a bien publié un texte : une instruction du 7 avril 2026. Elle donne aux préfets les priorités de l'année pour l'intégration des nouveaux arrivants : cours de français, formation civique, accès à l'emploi ([Légifrance](https://www.legifrance.gouv.fr/circulaire/id/45657)). Son résumé ne parle pas de naturalisation, ni d'un pays en particulier.",
    },
    {
      type: "p",
      texte: "Fin avril 2026, des sites ont aussi parlé d'une nouvelle circulaire plus stricte sur la naturalisation, pour tous les demandeurs. Ce texte n'est pas en ligne sur Légifrance au 20 octobre 2026. Tant qu'il n'est pas publié, nous ne pouvons pas en décrire le contenu.",
    },
    {
      type: "h2",
      texte: "Quel texte guide les préfectures aujourd'hui ?",
      id: "circulaire-2-mai-2025",
    },
    {
      type: "p",
      texte: "La préfecture, c'est le service de l'État qui reçoit et étudie votre demande dans votre département. Sa consigne en vigueur est la circulaire du 2 mai 2025, signée par le ministre de l'Intérieur de l'époque, Bruno Retailleau. Elle s'applique depuis le 5 mai 2025 ([Légifrance](https://www.legifrance.gouv.fr/circulaire/id/45604)).",
    },
    {
      type: "p",
      texte: "Son résumé rappelle que la naturalisation est une faveur accordée par l'État. Le candidat doit montrer :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "son assimilation, en particulier une bonne maîtrise du français et l'adhésion aux principes de la République.",
        "un comportement exemplaire, notamment le respect des règles sur le séjour.",
        "une insertion professionnelle stable.",
        "des ressources stables et suffisantes.",
      ],
    },
    {
      type: "p",
      texte: "Ce résumé ne prévoit aucune règle selon le pays d'origine. Le 28 janvier 2026, au Sénat, le ministre de l'Intérieur, Laurent Nuñez, a été interrogé sur ce texte. Il a répondu que les préfectures devaient l'appliquer, sans aller au-delà ([Sénat](https://www.senat.fr/questions/base/2026/qSEQ26010677G.html)).",
    },
    {
      type: "h2",
      texte: "Quelles conditions pour un Marocain, un Algérien ou un Tunisien ?",
      id: "conditions",
    },
    {
      type: "p",
      texte: "Les mêmes que pour toute autre nationalité. La naturalisation par décret, c'est la demande de nationalité que l'État accepte ou refuse par un texte signé. La fiche [service-public F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213), vérifiée le 16 juillet 2026, ne prévoit aucune condition propre à un pays. Voici les principales :",
    },
    {
      type: "tableau",
      entetes: ["Condition", "Ce que demande la règle"],
      lignes: [
        ["Durée en France", "5 ans en général. 2 ans dans certains cas, par exemple après 2 ans d'études réussies dans le supérieur en France."],
        ["Droit au séjour", "Un titre de séjour valide au dépôt (sauf Suisses et citoyens de l'Union européenne ou de l'EEE)."],
        ["Vie en France", "Vos intérêts et votre famille en France, au moment où le décret est signé."],
        ["Français", "Niveau B2 à l'oral et à l'écrit, pour une demande déposée depuis le 1er janvier 2026."],
        ["Examen civique", "Réussite exigée : 40 questions, 32 bonnes réponses au moins, en 45 minutes."],
        ["Entretien", "Un entretien en préfecture sur votre adhésion aux principes de la République."],
        ["Ressources", "Des revenus stables et suffisants. La fiche ne fixe aucun montant."],
        ["Casier judiciaire", "Pas de condamnation à 6 mois de prison ferme ou plus, entre autres cas."],
      ],
      legende: "Source : service-public, fiches F2213, F11926 et F39426, lues le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Le titre de séjour, c'est la carte qui vous autorise à vivre en France. Il doit être valide le jour du dépôt. Pour un Algérien, ce titre est un certificat de résidence, comme expliqué plus bas.",
    },
    {
      type: "p",
      texte: "Pour prouver ce niveau, service-public cite trois moyens ([F11926](https://www.service-public.gouv.fr/particuliers/vosdroits/F11926)). Le premier est un diplôme français, comme le brevet. Le deuxième est un diplôme de niveau B2. Le troisième est le TCF ou le TEF (des tests de français reconnus par l'État), passé il y a moins de 2 ans. Notre article sur [les niveaux A2, B1 et B2](/articles/niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation) compare les exigences selon les démarches.",
    },
    {
      type: "p",
      texte: "L'examen civique est un questionnaire à choix multiple sur la France et ses valeurs ([F39426](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426)). Il se passe dans un centre agréé : la liste est dans notre page sur les [centres agréés](/articles/centres-agrees-examen-civique-2026). Pour vous entraîner, le [simulateur d'éligibilité](/eligibilite-examen-civique) vous dit d'abord en une minute s'il vous concerne.",
    },
    {
      type: "p",
      texte: "Le timbre fiscal, c'est la taxe que vous payez à l'État pour la demande. Depuis le 1er mai 2026, il coûte 255 € (127,50 € en Guyane), contre 55 € avant ([service-public, A18881](https://www.service-public.gouv.fr/particuliers/actualites/A18881)). Le [budget complet de la naturalisation](/articles/cout-naturalisation-francaise-2026-budget-complet-timbre-fiscal) détaille les autres frais.",
    },
    {
      type: "h2",
      texte: "L'accord franco-algérien de 1968 change-t-il quelque chose ?",
      id: "accord-franco-algerien",
    },
    {
      type: "p",
      texte: "Non, pas pour la nationalité. L'accord du 27 décembre 1968 règle la venue, le séjour et le travail des Algériens en France. Son troisième avenant, signé en 2001, porte sur les certificats de résidence, le regroupement familial et le travail ([Légifrance](https://www.legifrance.gouv.fr/loda/article_lc/JORFARTI000002046688)). Il ne dit rien de la façon de devenir français.",
    },
    {
      type: "p",
      texte: "Un Algérien reçoit donc un certificat de résidence, et non une carte de séjour ordinaire. Le certificat de 10 ans est délivré gratuitement ([service-public, F2257](https://www.service-public.gouv.fr/particuliers/vosdroits/F2257)). Pour la nationalité, il suit la même procédure que tout le monde, examen civique compris. Notre article sur [les Algériens et l'examen civique](/articles/algeriens-examen-civique-2026-accord-1968-dispense-sejour-mais-pas-naturalisation) détaille ce point.",
    },
    {
      type: "h2",
      texte: "Peut-on garder sa nationalité d'origine ?",
      id: "double-nationalite",
    },
    {
      type: "p",
      texte: "Côté français, oui. La loi française n'exige pas qu'un étranger devenu Français renonce à sa nationalité d'origine ([service-public, F334](https://www.service-public.gouv.fr/particuliers/vosdroits/F334)). Mais la loi de votre pays d'origine peut avoir ses propres règles. Renseignez-vous auprès de son consulat. Notre article sur [la double nationalité](/articles/double-nationalite-france-2026-pays-interdisent-risques-declaration) donne plus de détails.",
    },
    {
      type: "h2",
      texte: "Combien de temps dure l'instruction du dossier ?",
      id: "delai-instruction",
    },
    {
      type: "p",
      texte: "L'instruction, c'est l'étude de votre dossier par l'administration. Elle a 18 mois au plus pour vous répondre. Ce délai part du récépissé : le document qui confirme le dépôt de votre dossier complet ([F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)).",
    },
    {
      type: "p",
      texte: "Le délai passe à **12 mois** si vous résidez en France depuis au moins 10 ans à cette date. Il peut être prolongé une seule fois de 3 mois, avec une décision motivée. Ces règles valent pour toutes les nationalités. C'est le seul délai de 12 mois que prévoient les textes officiels.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Déposez votre demande en ligne, avec le service « Demande en ligne de naturalisation » indiqué par service-public.",
        "Préparez une preuve du niveau B2 de moins de 2 ans, si vous n'avez pas de diplôme français.",
        "Passez l'examen civique et gardez bien votre attestation de réussite.",
        "Préparez l'entretien : notre guide de [l'entretien de naturalisation](/articles/entretien-naturalisation-2026-preparation-assimilation-prefecture) explique son déroulé.",
      ],
    },
    {
      type: "p",
      texte: "Pour la liste des pièces et les pièges à éviter, lisez notre [guide complet de la naturalisation](/articles/naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet). Pour un cas personnel, adressez-vous à la préfecture, à un avocat ou à une association comme La Cimade.",
    },
    {
      type: "h2",
      texte: "Comment vérifier une annonce sur la naturalisation ?",
      id: "verifier-une-annonce",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Une vraie circulaire a une date, un signataire et un numéro NOR (son code d'identification). Celle du 2 mai 2025 porte le numéro INTK2513256J.",
        "Cherchez le texte sur Légifrance, rubrique des circulaires. S'il n'y est pas, restez prudent.",
        "Méfiez-vous des annonces de délais « réservés » à une nationalité : les textes officiels n'en prévoient pas.",
        "Ne payez jamais pour un « dossier prioritaire » : selon service-public, la démarche est gratuite, en dehors du timbre fiscal.",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Aucune circulaire d'avril 2026 ne vise la naturalisation des Marocains, Algériens ou Tunisiens. La consigne en vigueur reste la circulaire du 2 mai 2025, la même pour tous.\nLe délai légal est de 18 mois, ou 12 mois après 10 ans de résidence en France. Le meilleur moyen de gagner du temps reste un dossier complet : niveau B2 prouvé, examen civique réussi.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Y a-t-il une nouvelle circulaire de naturalisation en avril 2026 ?",
      reponse: "Au 20 octobre 2026, aucune circulaire d'avril 2026 sur la naturalisation n'est publiée sur Légifrance. Le seul texte d'avril trouvé est une instruction du 7 avril 2026 sur l'intégration des nouveaux arrivants. La consigne en vigueur pour la naturalisation reste la circulaire du 2 mai 2025, qui vaut pour toutes les nationalités.",
    },
    {
      question: "Le délai de naturalisation est-il réduit à 12 mois pour les Maghrébins ?",
      reponse: "Non, aucun texte officiel ne prévoit de délai propre aux Marocains, Algériens ou Tunisiens. Pour tous, l'administration a 18 mois au plus pour répondre, à partir du récépissé. Ce délai passe à 12 mois si vous résidez en France depuis au moins 10 ans. Il peut être prolongé une fois de 3 mois.",
    },
    {
      question: "Quel niveau de français faut-il pour la naturalisation en 2026 ?",
      reponse: "Pour une demande déposée depuis le 1er janvier 2026, il faut le niveau B2 à l'oral et à l'écrit. Vous le prouvez par un diplôme français comme le brevet, un diplôme de niveau B2, ou une attestation TCF ou TEF de moins de 2 ans. Des dispenses existent, notamment pour raison de santé.",
    },
    {
      question: "Un Algérien doit-il passer l'examen civique pour être naturalisé ?",
      reponse: "Oui. L'accord franco-algérien de 1968 porte sur le séjour et le travail, pas sur la nationalité. Pour devenir français, un Algérien suit la même procédure que tout le monde. Il doit réussir l'examen civique : 32 bonnes réponses sur 40 au moins. Il doit aussi prouver le niveau B2 et passer l'entretien en préfecture.",
    },
  ],
  sources: [
    {
      titre: "Légifrance : circulaire du 2 mai 2025, orientations relatives à l'acquisition de la nationalité française par décision de l'autorité publique (NOR INTK2513256J)",
      url: "https://www.legifrance.gouv.fr/circulaire/id/45604",
      type: "juridique",
      luLe: "2026-10-20",
    },
    {
      titre: "Légifrance : instruction du 7 avril 2026 relative aux priorités pour 2026 de la politique d'intégration des étrangers primo-arrivants (NOR INTV2607925J)",
      url: "https://www.legifrance.gouv.fr/circulaire/id/45657",
      type: "juridique",
      luLe: "2026-10-20",
    },
    {
      titre: "Sénat : question d'actualité n° 0677G et réponse du ministre de l'Intérieur sur la circulaire de mai 2025 (JO Sénat du 29/01/2026)",
      url: "https://www.senat.fr/questions/base/2026/qSEQ26010677G.html",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : naturalisation française par décret (F2213)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : nationalité française, comment justifier de son niveau en français ? (F11926)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11926",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : naturalisation française, comment passer l'examen civique ? (F39426)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39426",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : hausse du montant des taxes à partir du 1er mai 2026 (A18881)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18881",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Légifrance : troisième avenant du 11 juillet 2001 à l'accord franco-algérien du 27 décembre 1968",
      url: "https://www.legifrance.gouv.fr/loda/article_lc/JORFARTI000002046688",
      type: "juridique",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : certificat de résidence de 10 ans, personne de nationalité algérienne (F2257)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2257",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : peut-on avoir plusieurs nationalités en France ? (F334)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F334",
      type: "officiel",
      luLe: "2026-10-20",
    },
  ],
  aLireAussi: [
    {
      slug: "dossier-naturalisation-2026-documents-delais-prefecture-anef",
      ancre: "Constituer son dossier de naturalisation",
    },
    {
      slug: "entretien-naturalisation-2026-preparation-assimilation-prefecture",
      ancre: "Préparer l'entretien de naturalisation",
    },
    {
      slug: "niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation",
      ancre: "Niveaux de français A2, B1 et B2",
    },
  ],
};

export default article;
