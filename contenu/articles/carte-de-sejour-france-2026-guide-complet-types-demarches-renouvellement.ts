import type { Article } from "@/contenu/articles";

/**
 * Publié le 29/03/2026, migré le 20/10/2026 sans changer d'adresse.
 *
 * Le 20/10/2026, l'article doublon `titres-de-sejour-france-guide-complet-2026`
 * (29/01/2026, même intention : le guide général des titres de séjour) y a été
 * fusionné ; son adresse redirige ici en 301. Les deux textes ont été réécrits
 * sur les fiches service-public, l'actualité A18881 (barème du 1er mai 2026),
 * A18713 (examen civique) et les textes publiés (loi n° 2024-42, décret
 * n° 2025-647, CESEDA R. 431-5 et R. 431-15-1), tous lus le 20/10/2026.
 * Retirés faute de source ou parce que faux : les anciens tarifs (75 €, 225 €,
 * 244 €), les « délais moyens » par démarche, le « numéro vert », la taxe de
 * retard de 180 €, la « CR retraité », le seuil étudiant de 615 €, les deux
 * vidéos (identifiants introuvables sur YouTube).
 */
const article: Article = {
  slug: "carte-de-sejour-france-2026-guide-complet-types-demarches-renouvellement",
  titre: "Carte de séjour en France : quel titre pour vous, comment le renouveler, et ce qui s'applique en 2026",
  titreSeo: "Carte de séjour en France : types et démarches",
  resume: "Les titres de séjour en France : VLS-TS, carte temporaire, pluriannuelle, résident. Durées, examen civique, tarifs 2026, renouvellement sur l'ANEF et recours.",
  chapo: "Un titre de séjour, c'est le document qui vous autorise à vivre en France. Il en existe quatre grandes familles. Il y a le visa long séjour qui vaut titre la première année, puis la carte temporaire d'un an. Viennent ensuite la carte pluriannuelle et la carte de résident de dix ans. Depuis le 1er janvier 2026, une **première** carte pluriannuelle ou de résident demande aussi un niveau de français et la réussite à un examen civique.",
  publieLe: "2026-03-29",
  modifieLe: "2026-10-20",
  minutes: 9,
  theme: "carte de séjour France",
  motsCles: [
    "carte de séjour France",
    "titre de séjour France",
    "titres de séjour France guide",
    "types de titre de séjour",
    "carte de séjour pluriannuelle",
    "carte de résident 10 ans",
    "renouvellement carte de séjour",
    "renouvellement titre de séjour 2026",
    "premier titre de séjour France",
    "titre de séjour 4 ans",
    "titre de séjour 10 ans",
    "ANEF titre de séjour",
    "VLS-TS",
    "prix titre de séjour 2026",
    "refus carte de séjour recours",
    "loi immigration titre de séjour",
    "examen civique titre de séjour",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop",
    alt: "Documents administratifs posés sur un bureau",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1568992687947-868a62a9f521",
  },
  blocs: [
    {
      type: "h2",
      texte: "Quels sont les types de titres de séjour en France ?",
      id: "types-carte-sejour-france",
    },
    {
      type: "p",
      texte: "La liste officielle des titres se trouve sur [service-public, fiche N110](https://www.service-public.gouv.fr/particuliers/vosdroits/N110). Chaque titre porte un motif : travail, études, famille, retraite. Ce motif décide des droits, de la durée et des pièces à fournir.",
    },
    {
      type: "p",
      texte: "Quatre mots reviennent partout. Le VLS-TS, c'est le visa de long séjour qui vaut titre de séjour la première année. La carte temporaire dure en général un an. La carte de séjour pluriannuelle est une carte de plusieurs années, qui vient après la première. La carte de résident, enfin, dure dix ans.",
    },
    {
      type: "tableau",
      entetes: ["Titre", "Durée", "Source"],
      lignes: [
        ["VLS-TS (visa qui vaut titre de séjour)", "La durée du visa. À valider en ligne dans les 3 mois après l'arrivée.", "F15898"],
        ["Carte temporaire « salarié », « vie privée et familiale », « visiteur »…", "1 an, renouvelable.", "F15898, F2209"],
        ["Carte pluriannuelle générale", "4 ans en général. 2 ans au plus pour « vie privée et familiale ». La durée des études pour un étudiant.", "F35799"],
        ["Carte « talent »", "La durée du contrat ou du projet, 4 ans au plus.", "F16922"],
        ["Carte « retraité »", "10 ans, pour une personne qui vit surtout à l'étranger.", "F2710"],
        ["Carte de résident", "10 ans, renouvelable.", "F2208"],
        ["Carte de résident de longue durée-UE", "10 ans, après 5 ans de séjour régulier.", "F17359"],
        ["Carte de résident permanent", "10 ans. Proposée après 2 cartes de résident de suite.", "F11201"],
        ["Certificat de résidence pour Algérien", "1 an ou 10 ans.", "N110"],
      ],
      legende: "Sources : fiches service-public citées, lues le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Il existe aussi l'APS (autorisation provisoire de séjour) : un document de courte durée, pour des cas précis, comme le parent d'un enfant malade ([N110](https://www.service-public.gouv.fr/particuliers/vosdroits/N110)). Les Algériens relèvent d'un accord à part, d'où leur certificat de résidence.",
    },
    {
      type: "h2",
      texte: "Comment passe-t-on d'un titre à l'autre ?",
      id: "parcours-titres",
    },
    {
      type: "p",
      texte: "Le parcours suit souvent quatre étapes. Chacune a ses conditions, et la préfecture décide. La préfecture, c'est le service de l'État qui gère les titres de séjour dans votre département.",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Le VLS-TS.** Vous le validez sur l'ANEF dans les 3 mois après votre arrivée ([F15898](https://www.service-public.gouv.fr/particuliers/vosdroits/F15898)). L'ANEF, c'est le site officiel des démarches des étrangers en France.",
        "**La carte temporaire.** Elle dure 1 an et se renouvelle ([F2209](https://www.service-public.gouv.fr/particuliers/vosdroits/F2209)).",
        "**La carte pluriannuelle.** Elle n'est délivrée qu'après une carte temporaire ou un VLS-TS ([F35799](https://www.service-public.gouv.fr/particuliers/vosdroits/F35799)).",
        "**La carte de résident.** Elle est délivrée dans des situations prévues par la loi : époux de Français, parent d'enfant français, réfugié, par exemple ([F2208](https://www.service-public.gouv.fr/particuliers/vosdroits/F2208)).",
      ],
    },
    {
      type: "p",
      texte: "Certaines cartes ne mènent pas à la pluriannuelle pour le même motif : « travailleur temporaire », « visiteur », « jeune au pair » ou « stagiaire », par exemple (F35799). Pour le détail, lisez nos guides de la [carte pluriannuelle](/articles/carte-sejour-pluriannuelle-guide-complet-2025) et de la [carte de résident de 10 ans](/articles/carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture).",
    },
    {
      type: "h2",
      texte: "Examen civique et français : qu'exige-t-on depuis le 1er janvier 2026 ?",
      id: "carte-sejour-test-civique-lien",
    },
    {
      type: "p",
      texte: "La loi du 26 janvier 2024 a créé l'examen civique ([loi n° 2024-42, article 20](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049040245)). Un décret (un texte du gouvernement qui applique une loi) en a fixé la date. Le décret n° 2025-647 du 15 juillet 2025 est [entré en vigueur le 1er janvier 2026](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000051900489/).",
    },
    {
      type: "tableau",
      entetes: ["Première demande de", "Niveau de français", "Examen civique"],
      lignes: [
        ["Carte pluriannuelle", "A2", "Réussite exigée"],
        ["Carte de résident", "B1", "Réussite exigée"],
        ["Renouvellement de ces deux cartes", "Pas exigé à nouveau", "Pas concerné"],
      ],
      legende: "Sources : service-public F35799 et F2208 (niveaux), actualité A18713 (renouvellement), lues le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Les personnes de plus de 65 ans ne sont pas concernées par ces deux exigences (F35799, F2208). Les bénéficiaires d'une protection internationale sont aussi exemptés de l'examen ([A18713](https://www.service-public.gouv.fr/particuliers/actualites/A18713)).",
    },
    {
      type: "p",
      texte: "L'examen se passe **avant** de déposer la demande. C'est un questionnaire de 40 questions, en 45 minutes au plus. Il faut au moins 32 bonnes réponses. L'attestation de réussite n'a pas de date de fin (A18713).",
    },
    {
      type: "p",
      texte: "Le simulateur d'[éligibilité à l'examen civique](/eligibilite-examen-civique) vous dit en une minute s'il vous concerne. Pour le français, notre guide des [niveaux A2, B1 et B2](/articles/niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation) détaille les diplômes acceptés.",
    },
    {
      type: "cta",
      texte: "L'examen se passe avant le dépôt du dossier : entraînez-vous sur les questions types des cinq thématiques.",
    },
    {
      type: "h2",
      texte: "Combien coûte une carte de séjour en 2026 ?",
      id: "documents-carte-sejour",
    },
    {
      type: "p",
      texte: "Vous payez un timbre fiscal : une taxe due à l'État, que vous achetez en ligne ou chez un buraliste. Son montant a changé le 1er mai 2026, avec la loi de finances pour 2026 ([service-public, A18881](https://www.service-public.gouv.fr/particuliers/actualites/A18881)).",
    },
    {
      type: "tableau",
      entetes: ["Démarche", "Tarif normal", "Tarif minoré"],
      lignes: [
        ["Première carte (temporaire, pluriannuelle, résident)", "350 €", "150 €"],
        ["Renouvellement", "250 €", "100 €"],
        ["Duplicata", "350 €", "150 €"],
        ["Validation du VLS-TS", "300 €", "100 €"],
        ["APS, délivrance ou renouvellement", "100 €", "Exonérations dans certains cas"],
      ],
      legende: "Source : service-public, actualité A18881 (barème au 1er mai 2026), lue le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Le tarif minoré vaut par exemple pour les étudiants, les travailleurs saisonniers et le regroupement familial (A18881). Les réfugiés ne paient pas leur carte de résident (F2208). Un dépôt hors délai peut ajouter un droit de visa de régularisation (F2208). Tous les montants et les exceptions sont dans notre article sur le [timbre fiscal du titre de séjour](/articles/hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances).",
    },
    {
      type: "h2",
      texte: "Quand et comment renouveler sa carte de séjour ?",
      id: "renouvellement-carte-sejour",
    },
    {
      type: "p",
      texte: "Le CESEDA, c'est le code qui regroupe les règles sur le séjour des étrangers. Son [article R. 431-5](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043292776) fixe deux fenêtres de dépôt, selon le titre :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Pour un titre qui se demande sur l'ANEF : entre le 120e et le 60e jour avant la fin de votre titre, soit entre 4 et 2 mois avant.",
        "Pour un titre qui se demande encore en préfecture : dans les 2 mois avant la fin de votre titre.",
      ],
    },
    {
      type: "p",
      texte: "La règle des « deux mois avant » est donc juste, mais pas pour tous. Sur l'ANEF, la fenêtre se ferme 60 jours avant la fin du titre. La fiche de votre carte dit quelle voie s'applique : par exemple la [carte de résident de longue durée-UE](https://www.service-public.gouv.fr/particuliers/vosdroits/F17359) cite les deux.",
    },
    {
      type: "p",
      texte: "Sur l'ANEF, vous pouvez valider un VLS-TS, faire certaines demandes de titre, demander la naturalisation ou signaler un changement d'adresse ([service-public, R59398](https://www.service-public.gouv.fr/particuliers/vosdroits/R59398)). Notre guide pour [déposer et suivre une demande sur l'ANEF](/articles/guide-anef-complet-2026-creer-compte-deposer-demande) montre chaque écran.",
    },
    {
      type: "p",
      texte: "Si votre dossier, complet et déposé à temps, n'est pas traité quand votre carte expire, le préfet vous remet une attestation qui prolonge l'examen. Elle dure 3 mois au plus et se renouvelle ([CESEDA, article R. 431-15-1](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043288895)). Le simple accusé de dépôt en ligne, lui, ne prouve pas que votre séjour est régulier.",
    },
    {
      type: "p",
      texte: "Hors ANEF, la préfecture remet souvent un récépissé : le papier qui prouve que votre demande est en cours. Ses effets sont expliqués dans notre article sur le [récépissé de titre de séjour](/articles/recepisse-titre-de-sejour-droits-duree-voyage). Pour les pièces à fournir, voyez le [renouvellement de titre de séjour](/articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais).",
    },
    {
      type: "h2",
      texte: "Que faire si la préfecture refuse votre carte ?",
      id: "refus-carte-sejour-recours",
    },
    {
      type: "p",
      texte: "Un refus peut être écrit ou venir d'un silence. Pour la carte de résident, l'absence de réponse au bout de 4 mois vaut refus ([F2208](https://www.service-public.gouv.fr/particuliers/vosdroits/F2208)). Ce délai change selon les titres : la fiche de votre carte le donne.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Le recours gracieux** : une lettre au préfet, qui lui demande de revoir sa décision. Délai : 2 mois après le refus.",
        "**Le recours hiérarchique** : la même demande, adressée au ministre de l'Intérieur. Délai : 2 mois.",
        "**Le recours contentieux** : une demande au juge, devant le tribunal administratif (le tribunal qui juge les décisions de l'administration). Délai : 2 mois.",
      ],
    },
    {
      type: "p",
      texte: "Un refus écrit est souvent assorti d'une OQTF : une obligation de quitter le territoire français. Le délai pour saisir le juge tombe alors à 48 heures, 15 jours ou 30 jours, selon le type d'OQTF (F2208). Lisez vite la lettre : le délai y est écrit.",
    },
    {
      type: "p",
      texte: "Pour votre cas précis, faites-vous aider : un avocat, une association comme La Cimade, ou le Défenseur des droits, qui est une autorité indépendante et gratuite. Notre guide du [refus de titre de séjour](/articles/refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france) détaille chaque étape.",
    },
    {
      type: "h2",
      texte: "Qu'a changé la loi immigration du 26 janvier 2024 ?",
      id: "loi-immigration",
    },
    {
      type: "p",
      texte: "On lit souvent « loi immigration 2026 ». Ce texte n'existe pas. La loi en vigueur est la [loi n° 2024-42 du 26 janvier 2024](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049040245), avec ses décrets. En 2026, ce sont ses mesures qui s'appliquent, et la loi de finances a changé les tarifs.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**L'examen civique et le niveau de français** (article 20) : en vigueur depuis le 1er janvier 2026, pour une première carte pluriannuelle ou de résident.",
        "**Le contrat d'engagement au respect des principes de la République** (article 46) : sans signature, aucun titre n'est délivré. Un manquement peut faire refuser un renouvellement.",
        "**Les métiers en tension** : une carte « salarié » ou « travailleur temporaire » peut être demandée jusqu'au 31 décembre 2026. Il faut 3 ans de séjour et 12 mois de travail sur 24 dans un métier en tension ([F16053](https://www.service-public.gouv.fr/particuliers/vosdroits/F16053)). Le préfet reste libre de sa décision.",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Notez dans votre agenda la date de fin de votre carte, moins 4 mois. C'est le jour où la fenêtre de l'ANEF s'ouvre. Si une première carte pluriannuelle ou de résident vous attend, passez l'examen civique avant, car il se demande au dépôt du dossier.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quels sont les différents titres de séjour en France ?",
      reponse: "Il existe quatre grandes familles. Le visa long séjour valant titre de séjour (VLS-TS) sert la première année. Viennent ensuite la carte temporaire d'un an, la carte pluriannuelle de deux à quatre ans et la carte de résident de dix ans. Chaque carte porte un motif, comme salarié, étudiant, vie privée et familiale ou talent.",
    },
    {
      question: "Quand faut-il demander le renouvellement de son titre de séjour ?",
      reponse: "Pour un titre qui se demande sur l'ANEF, entre 4 et 2 mois avant la fin de validité, soit entre le 120e et le 60e jour. Pour un titre qui se demande en préfecture, dans les 2 mois avant la fin. C'est l'article R. 431-5 du code des étrangers qui le prévoit.",
    },
    {
      question: "Quel niveau de français pour la carte de séjour pluriannuelle et la carte de résident ?",
      reponse: "Depuis le 1er janvier 2026, une première carte pluriannuelle demande le niveau A2, et une première carte de résident le niveau B1. Il faut aussi avoir réussi l'examen civique. Ces conditions ne s'appliquent pas au renouvellement de ces cartes, ni aux personnes de plus de 65 ans.",
    },
    {
      question: "Combien coûte une carte de séjour en 2026 ?",
      reponse: "Depuis le 1er mai 2026, une première carte coûte 350 € au tarif normal et 150 € au tarif minoré. Un renouvellement coûte 250 €, ou 100 € au tarif minoré. La validation du VLS-TS coûte 300 €, ou 100 €. Ces montants sont publiés par service-public, actualité A18881.",
    },
  ],
  sources: [
    {
      titre: "Service-public : titres, cartes de séjour et documents de circulation pour étranger en France (N110)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/N110",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : titres de séjour, hausse du montant des taxes à partir du 1er mai 2026 (A18881)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18881",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : un nouvel examen civique pour les étrangers souhaitant s'installer en France (A18713)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18713",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte de séjour pluriannuelle générale (F35799)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F35799",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte de résident de 10 ans (F2208)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2208",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte de résident de longue durée-UE (F17359)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F17359",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte de résident permanent (F11201)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11201",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte de séjour « salarié » ou « travailleur temporaire » (F15898)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F15898",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte de séjour « vie privée et familiale » (F2209)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2209",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte de séjour « talent » (F16922)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16922",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte de séjour « retraité » (F2710)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2710",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : régularisation d'un étranger par le travail (F16053)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16053",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : faire une demande sur l'ANEF (R59398)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R59398",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Loi n° 2024-42 du 26 janvier 2024 pour contrôler l'immigration, améliorer l'intégration",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049040245",
      type: "juridique",
      luLe: "2026-10-20",
    },
    {
      titre: "Décret n° 2025-647 du 15 juillet 2025 relatif aux dispositions de l'article 20 de la loi n° 2024-42",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000051900489/",
      type: "juridique",
      luLe: "2026-10-20",
    },
    {
      titre: "CESEDA, article R. 431-5 (délais de dépôt d'une demande de titre)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043292776",
      type: "juridique",
      luLe: "2026-10-20",
    },
    {
      titre: "CESEDA, article R. 431-15-1 (attestation de prolongation d'instruction)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043288895",
      type: "juridique",
      luLe: "2026-10-20",
    },
  ],
};

export default article;
