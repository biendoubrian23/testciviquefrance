import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 17/11/2026 (`docs/seo/ROBOT.md`), passage
 * spécial GTA 6 demandé par Brian (sortie du jeu le 19/11/2026).
 * Requêtes visées : tendance « gta 6 » (100 k à 1 M) et « gta 6 date de
 * sortie » (10 k à 100 k, + 900 % sur trois mois) ; fond « casier judiciaire »
 * (10 k à 100 k), « retrait titre de séjour » (1 k à 10 k), « conduite sans
 * permis » et « alcool au volant » (1 k à 10 k chacune), « naturalisation
 * casier judiciaire » (100 à 1 k). Planificateur, « Obtenir le volume »,
 * France, toutes les langues, 17/11/2026.
 * Sources lues le 17/11/2026 (agents de lecture web) : Code civil art. 21-23
 * et 21-27 ; CESEDA art. L. 432-1, L. 432-3, L. 432-4 ; Code de la route
 * art. L. 221-2 et L. 234-1 (version du 20/08/2026) ; service-public F2213
 * (vérifiée le 16/07/2026) ; rockstargames.com/VI.
 * Non écrit : la classification PEGI (annoncée par la presse, fiche non
 * trouvée sur pegi.info le 17/11) ; la Floride et Miami (la page de Rockstar
 * ne les nomme pas) ; CESEDA L. 412-5 (non lu) ; les peines du vol, des
 * violences et du port d'arme (non relues).
 */
const article: Article = {
  slug: "gta-6-casier-judiciaire-titre-de-sejour",
  titre: "GTA 6 : dans le jeu, tout est permis. En France, une condamnation peut peser sur votre titre de séjour",
  titreSeo: "GTA 6 : casier judiciaire et titre de séjour",
  resume: "GTA 6 sort le 19 novembre. Dans le jeu, tout est permis ; en vrai, une condamnation peut peser sur un titre de séjour ou une naturalisation. Les règles.",
  chapo: "GTA 6 sort le 19 novembre 2026. Dans le jeu, conduire sans permis ou après avoir bu ne coûte rien. En France, ce sont des délits. Une condamnation peut alors peser sur un titre de séjour (la carte qui permet de vivre en France), une carte de résident (la carte de 10 ans) ou une naturalisation. Voici les vraies règles, texte par texte, et ce que vous pouvez faire.",
  publieLe: "2026-11-17",
  modifieLe: "2026-11-17",
  minutes: 7,
  theme: "Les infractions du quotidien et leurs effets sur un titre de séjour, une carte de résident ou une naturalisation, à l'occasion de la sortie de GTA 6",
  motsCles: [
    "gta 6",
    "gta 6 date de sortie",
    "casier judiciaire titre de séjour",
    "naturalisation casier judiciaire",
    "retrait titre de séjour",
    "conduite sans permis",
    "alcool au volant",
    "condamnation naturalisation",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/gta-6-casier-judiciaire-titre-de-sejour.webp",
    alt: "Un vieux joystick de jeu vidéo noir avec des boutons rouges, posé sur une table en bois clair",
    largeur: 1200,
    hauteur: 797,
    credit: "Nilo Velez, via wordpress",
    licence: "CC0",
    source: "https://wordpress.org/photos/photo/15065be0e7/",
  },
  blocs: [
    {
      type: "encadre",
      titre: "GTA 6 en bref",
      texte: "Grand Theft Auto VI, le jeu de Rockstar Games, sort le ==19 novembre 2026== sur PlayStation 5 et Xbox Series X|S, selon la [page officielle du jeu](https://www.rockstargames.com/VI) lue le 17/11/2026. L'histoire suit Jason et Lucia à Vice City, dans l'État imaginaire de Leonida. Rockstar affiche la classification américaine « Mature 17+ » ; en Europe, vérifiez l'âge conseillé sur [pegi.info](https://pegi.info/).",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Une infraction peut-elle bloquer votre dossier ?",
    },
    {
      type: "p",
      texte: "Oui, dans certains cas. Les règles de la route et du Code pénal s'appliquent à ==tout le monde==, Français ou non. Mais pour une personne étrangère, une condamnation peut avoir un effet de plus. Elle peut compter quand la préfecture (le service de l'État qui délivre les titres de séjour) examine un dossier, ou quand l'État examine une demande de nationalité.",
    },
    {
      type: "p",
      texte: "Un titre de séjour, c'est la carte qui vous autorise à vivre en France. Ces deux démarches ne suivent pas la même règle. La naturalisation a des seuils écrits dans la loi. Le titre de séjour dépend surtout de la notion de menace pour l'ordre public.",
    },
    {
      type: "h2",
      texte: "Naturalisation : quelle condamnation l'empêche ?",
    },
    {
      type: "p",
      texte: "La naturalisation, c'est la décision de l'État qui vous donne la nationalité française. L'article 21-27 du Code civil fixe deux interdictions, quelle que soit l'infraction ([Code civil, art. 21-27](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006419888)) :",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "une condamnation pour un crime ou un délit qui porte atteinte aux intérêts fondamentaux de la Nation, ou pour un acte de terrorisme ;",
        "une condamnation à ==6 mois de prison ou plus, sans sursis==. Le sursis, c'est quand le juge décide que la peine de prison ne sera pas faite tout de suite, sauf nouvelle faute.",
      ],
    },
    {
      type: "p",
      texte: "La loi prévoit une exception. Ces interdictions ne s'appliquent pas après une **réhabilitation**, ni si la condamnation a été retirée du **bulletin n° 2** du casier judiciaire (même article). Le casier judiciaire, c'est le fichier qui garde la trace des condamnations ; le bulletin n° 2 est la version que lisent certaines administrations.",
    },
    {
      type: "p",
      texte: "Il existe aussi une condition plus large : être « de bonnes vie et mœurs » ([Code civil, art. 21-23](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006419654)). La [fiche service-public sur la naturalisation](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213) (vérifiée le 16 juillet 2026) précise qu'une enquête est faite sur votre comportement civique. Une amende ou une condamnation avec sursis n'interdit donc pas la naturalisation, mais elle peut être prise en compte.",
    },
    {
      type: "h2",
      texte: "Titre de séjour et carte de résident : la menace pour l'ordre public",
    },
    {
      type: "p",
      texte: "Pour le titre de séjour, la règle vient du CESEDA, le code qui réunit les règles d'entrée et de séjour des étrangers. Il ne donne pas de liste d'amendes interdites. Il parle de ==menace pour l'ordre public== : la préfecture regarde les faits, leur gravité, leur date et votre situation.",
    },
    {
      type: "tableau",
      entetes: ["Ce que la préfecture peut faire", "Pour quel titre", "Texte"],
      lignes: [
        ["Refuser la carte, par une décision motivée, si votre présence est une menace pour l'ordre public", "Carte temporaire, pluriannuelle ou carte de résident", "CESEDA, art. L. 432-1"],
        ["Retirer la carte, par une décision motivée, pour une menace pour l'ordre public", "Carte temporaire ou pluriannuelle", "CESEDA, art. L. 432-4"],
        ["Retirer ou refuser de renouveler la carte pour une menace ==grave== pour l'ordre public", "Carte de résident", "CESEDA, art. L. 432-3 et L. 432-4"],
      ],
      legende: "Sources : CESEDA sur Légifrance, versions en vigueur lues le 17/11/2026 (L. 432-3 et L. 432-4 modifiés par la loi n° 2024-42 du 26 janvier 2024).",
    },
    {
      type: "p",
      texte: "Le mot « peut » compte : rien n'est automatique. Une décision motivée, c'est une décision qui doit dire pourquoi elle est prise. Vous pouvez la contester. Les textes sont sur Légifrance : [L. 432-1](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042776402), [L. 432-3](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049059490) et [L. 432-4](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049059485). Pour la carte de 10 ans, lisez aussi notre guide sur le [renouvellement de la carte de résident](/articles/renouvellement-carte-resident-10-ans-2026-conditions-documents-anef).",
    },
    {
      type: "h2",
      texte: "Les scènes de GTA 6, version française",
    },
    {
      type: "p",
      texte: "Dans GTA VI, on prend une voiture sans permis et on roule sans limite. Sur une vraie route française, deux de ces gestes sont des délits, c'est-à-dire des infractions jugées par le tribunal correctionnel :",
    },
    {
      type: "tableau",
      entetes: ["Dans le jeu", "En France", "Peine maximale prévue"],
      lignes: [
        ["Conduire sans permis", "Délit (Code de la route, art. L. 221-2)", "1 an de prison et 15 000 € d'amende"],
        ["Conduire après avoir bu", "Délit à partir de 0,80 g d'alcool par litre de sang, ou 0,40 mg par litre d'air expiré (art. L. 234-1)", "3 ans de prison et 9 000 € d'amende"],
      ],
      legende: "Sources : Code de la route sur Légifrance, lu le 17/11/2026. L'article L. 234-1 est en vigueur dans cette version depuis le 20 août 2026.",
    },
    {
      type: "p",
      texte: "Ce sont des maximums : le juge décide de la peine selon chaque cas. Les textes sont sur Légifrance : [article L. 221-2](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039099784) et [article L. 234-1](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000054724895). Si vous conduisez avec un permis obtenu à l'étranger, vérifiez s'il est valable en France grâce à notre article sur l'[échange du permis de conduire](/articles/echange-permis-conduire-etranger-france-2026-pays-accords-liste-complete).",
    },
    {
      type: "h2",
      texte: "Que faire en cas de condamnation passée ?",
    },
    {
      type: "p",
      texte: "Une condamnation passée ne ferme pas toutes les portes. Voici les gestes utiles avant de déposer un dossier :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Rassemblez les jugements et les preuves que la peine est faite (amende payée, fin de la peine).",
        "Regardez si une réhabilitation ou un retrait de la mention du bulletin n° 2 est possible : c'est l'exception prévue par l'article 21-27.",
        "Répondez avec franchise aux questions du dossier et de l'entretien : une omission découverte plus tard pèse plus lourd.",
        "Pour un cas personnel, demandez l'avis d'un avocat ou d'une association comme La Cimade avant de déposer.",
      ],
    },
    {
      type: "p",
      texte: "Si votre demande est refusée, les délais de recours sont courts. Nos guides expliquent les étapes : [naturalisation refusée](/articles/naturalisation-francaise-refusee-2026-raisons-cachees-contester-recours) et [refus de titre de séjour ou OQTF](/articles/refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france). Une OQTF, c'est une obligation de quitter le territoire français.",
    },
    {
      type: "h2",
      texte: "Respecter la loi, une notion de l'examen civique",
    },
    {
      type: "p",
      texte: "Le respect des lois fait partie des droits et devoirs que l'examen civique fait réviser. Notre article sur les [valeurs de la République](/articles/valeurs-republique-francaise-liberte-egalite-fraternite) rappelle les principes qui les fondent.",
    },
    {
      type: "qcm",
      thematique: "Droits et devoirs",
      question: "En France, les règles du Code de la route s'appliquent :",
      choix: [
        "Seulement aux citoyens français",
        "À toute personne qui conduit en France",
        "Seulement aux personnes qui ont un permis français",
        "Seulement sur l'autoroute",
      ],
      reponse: 1,
      explication: "La loi s'applique à toute personne présente en France, quelle que soit sa nationalité. Respecter la loi est un des devoirs de chaque personne qui vit en France.",
    },
    {
      type: "cta",
      texte: "Les droits et devoirs sont une des cinq thématiques de l'examen civique. Testez-vous sur 40 questions types : l'inscription à Test Civique France est gratuite.",
      bouton: "Tester mes connaissances",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Pour la naturalisation, la loi écarte toute personne condamnée à ==6 mois de prison ferme ou plus==, sauf réhabilitation ou retrait du bulletin n° 2. Pour un titre de séjour, la préfecture apprécie une menace pour l'ordre public, au cas par cas, par une décision motivée que vous pouvez contester. Dans GTA 6, on recharge la partie ; dans la vraie vie, un jugement reste.",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Quand sort GTA 6 ?",
      reponse: "Selon la page officielle de Rockstar Games, lue le 17 novembre 2026, GTA 6 sort le 19 novembre 2026 sur PlayStation 5 et Xbox Series X|S. Aucune version PC n'est annoncée sur cette page. L'histoire se passe à Vice City, dans l'État imaginaire de Leonida, avec deux héros, Jason et Lucia.",
    },
    {
      question: "Peut-on être naturalisé avec un casier judiciaire ?",
      reponse: "Cela dépend de la condamnation. L'article 21-27 du Code civil interdit la naturalisation après une peine de 6 mois de prison ou plus sans sursis, ou après certains crimes graves. Il y a une exception : la réhabilitation ou le retrait du bulletin n° 2. Une condamnation plus légère n'est pas une interdiction, mais elle peut compter dans l'enquête sur votre comportement.",
    },
    {
      question: "Peut-on perdre son titre de séjour après une condamnation ?",
      reponse: "C'est possible, mais jamais automatique. Le CESEDA permet à la préfecture de retirer ou de refuser une carte de séjour si votre présence est une menace pour l'ordre public. Pour une carte de résident, il faut une menace grave. La décision doit être motivée et peut être contestée devant le tribunal administratif.",
    },
    {
      question: "Quelle est la peine pour conduite sans permis ?",
      reponse: "Selon l'article L. 221-2 du Code de la route, lu sur Légifrance le 17 novembre 2026, conduire sans le permis qui correspond au véhicule est un délit. La peine maximale est d'un an de prison et de 15 000 euros d'amende. Le juge fixe la peine réelle selon chaque situation.",
    },
  ],
  sources: [
    {
      titre: "Légifrance : Code civil, article 21-27 (en vigueur depuis le 27 novembre 2003)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006419888",
      type: "officiel",
      luLe: "2026-11-17",
    },
    {
      titre: "Légifrance : Code civil, article 21-23 (en vigueur depuis le 23 juillet 1993)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006419654",
      type: "officiel",
      luLe: "2026-11-17",
    },
    {
      titre: "Service-public : Naturalisation française par décret (vérifiée le 16 juillet 2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      luLe: "2026-11-17",
    },
    {
      titre: "Légifrance : CESEDA, article L. 432-1 (en vigueur depuis le 1er mai 2021)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042776402",
      type: "officiel",
      luLe: "2026-11-17",
    },
    {
      titre: "Légifrance : CESEDA, article L. 432-3 (en vigueur depuis le 28 janvier 2024)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049059490",
      type: "officiel",
      luLe: "2026-11-17",
    },
    {
      titre: "Légifrance : CESEDA, article L. 432-4 (en vigueur depuis le 28 janvier 2024)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000049059485",
      type: "officiel",
      luLe: "2026-11-17",
    },
    {
      titre: "Légifrance : Code de la route, article L. 221-2 (en vigueur depuis le 30 septembre 2021)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039099784",
      type: "officiel",
      luLe: "2026-11-17",
    },
    {
      titre: "Légifrance : Code de la route, article L. 234-1 (en vigueur depuis le 20 août 2026)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000054724895",
      type: "officiel",
      luLe: "2026-11-17",
    },
    {
      titre: "Rockstar Games : Grand Theft Auto VI, page officielle (sortie le 19 novembre 2026)",
      url: "https://www.rockstargames.com/VI",
      type: "article",
      luLe: "2026-11-17",
    },
  ],
};

export default article;
