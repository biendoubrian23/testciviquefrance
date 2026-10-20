import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-2026-additions.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation`). L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont nominales.
 *
 * Le 20/10/2026, l'article doublon `niveau-de-langue-francais-nationalite-titre-sejour-a2-b1-2026`
 * (29/03/2026) y a été fusionné : son adresse redirige ici en 301 (`next.config.js`). On en a repris
 * le guide général (niveau par titre, CIR, ressources gratuites pour progresser), mais pas ses
 * affirmations périmées ou non sourcées : « B1 obligatoire pour la naturalisation » (B2 depuis le
 * 1er janvier 2026, décret n° 2025-648), « A2 pour la carte de résident » (B1 depuis la même date,
 * service-public F34501), le « TCF ANF », la dispense « plus de 65 ans » pour la nationalité, les prix
 * des tests, et deux vidéos YouTube qui ne sont plus en ligne. Tout le texte a été relu sur les
 * sources officielles le 20/10/2026.
 */
const article: Article = {
  slug: "niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation",
  titre: "Niveau de français en 2026 : A2, B1 ou B2 selon votre titre de séjour ou la nationalité",
  titreSeo: "Niveau de français 2026 : A2, B1 ou B2, pour qui ?",
  resume: "A2 pour la carte pluriannuelle, B1 pour la carte de résident, B2 pour la nationalité : les niveaux exigés depuis 2026, les preuves acceptées et les dispenses.",
  chapo: "Depuis le 1er janvier 2026, il faut le niveau **A2** de français pour une première carte de séjour pluriannuelle, **B1** pour une première carte de résident, **B2** pour la nationalité. Ces niveaux suivent une échelle européenne : A2 est un niveau de base, B2 un niveau avancé. Voici qui est concerné, comment prouver votre niveau, qui en est dispensé, et comment progresser gratuitement.",
  publieLe: "2026-06-15",
  modifieLe: "2026-10-20",
  minutes: 8,
  theme: "niveau de français titre de séjour et naturalisation",
  motsCles: [
    "niveau de français naturalisation 2026",
    "niveau B2 naturalisation",
    "niveau A2 carte de séjour pluriannuelle",
    "niveau B1 carte de résident",
    "niveau de langue nationalité française",
    "niveau de français pour carte de séjour",
    "TCF naturalisation",
    "TEF IRN",
    "DELF B2 naturalisation",
    "DELF B1 carte de résident",
    "justificatif niveau de français naturalisation",
    "dispense niveau français naturalisation",
    "validité test TCF TEF",
    "CECRL niveau français immigration",
    "cours de français gratuit étranger",
    "OFII cours de français",
    "niveau de langue et examen civique",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070",
    alt: "Une personne écrit dans un cahier ouvert, posé sur une table, à côté d'un livre",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
  },
  blocs: [
    {
      type: "h2",
      texte: "Quel niveau de français pour quelle démarche ?",
      id: "tableau-niveau-par-titre",
    },
    {
      type: "p",
      texte: "Les niveaux A1 à C2 viennent du CECRL : c'est le cadre européen qui mesure le niveau dans une langue. A1 veut dire débutant, C2 veut dire presque comme un natif. Le niveau exigé dépend de la carte ou de la démarche que vous demandez.",
    },
    {
      type: "tableau",
      entetes: ["Démarche", "Niveau exigé", "Depuis quand"],
      lignes: [
        ["Première carte de séjour pluriannuelle", "**A2**", "1er janvier 2026"],
        ["Première carte de résident (certaines catégories)", "**B1**", "1er janvier 2026"],
        ["Naturalisation par décret (demande de nationalité)", "**B2**, à l'oral et à l'écrit", "demandes déposées depuis le 1er janvier 2026"],
        ["Nationalité par mariage", "**B2**, à l'oral et à l'écrit", "déclarations faites depuis le 1er janvier 2026"],
        ["Renouvellement d'une carte pluriannuelle", "pas de nouvelle preuve", "seule la première demande est visée"],
      ],
      legende: "Sources : service-public, fiches F34501 et F11926 ; décret n° 2025-648 du 15 juillet 2025. Lus le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Ces règles viennent de la [loi n° 2024-42 du 26 janvier 2024](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049040245), dite loi immigration. Elle a créé l'examen civique et renforcé la condition de langue. Les niveaux précis ont ensuite été fixés par des décrets et des arrêtés. Un décret, c'est une règle écrite par le gouvernement ; un arrêté, c'est une règle plus précise prise par un ministre.",
    },
    { type: "p", texte: "**Ce que veulent dire ces niveaux**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**A2** : vous comprenez des phrases simples du quotidien et vous parlez de vos besoins.",
        "**B1** : vous comprenez l'essentiel d'une discussion claire et vous donnez un avis simple.",
        "**B2** : vous comprenez des textes complexes et vous argumentez avec aisance.",
      ],
    },
    {
      type: "h2",
      texte: "Carte pluriannuelle et carte de résident : A2 ou B1",
      id: "titre-sejour-a2-b1",
    },
    {
      type: "p",
      texte: "Un titre de séjour, c'est la carte qui vous autorise à vivre en France. La carte de séjour pluriannuelle (une carte de plusieurs années) demande le niveau A2. La carte de résident (une carte de 10 ans) demande le niveau B1. C'est ce que dit la fiche [service-public F34501](https://www.service-public.gouv.fr/particuliers/vosdroits/F34501), vérifiée le 10 février 2026.",
    },
    { type: "p", texte: "**Qui est concerné**" },
    {
      type: "liste",
      style: "coches",
      items: [
        "Les personnes de pays hors Union européenne.",
        "Les personnes de moins de 65 ans.",
        "Une **première** demande seulement : le renouvellement n'est pas visé.",
        "Pour la carte de résident : par exemple le conjoint de Français, le parent d'enfant français, ou la famille venue par regroupement familial.",
      ],
    },
    {
      type: "p",
      texte: "Certaines personnes ne sont pas concernées pour la carte pluriannuelle. Ce sont les titres qui ne passent pas par le CIR, les bénéficiaires de la protection subsidiaire, les apatrides et leur famille. Le CIR (contrat d'intégration républicaine) est le contrat signé avec l'OFII, l'office qui accueille les nouveaux arrivants.",
    },
    {
      type: "p",
      texte: "Pour le reste du dossier, voyez nos guides sur la [carte de résident de 10 ans](/articles/carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture) et sur les [différentes cartes de séjour](/articles/carte-de-sejour-france-2026-guide-complet-types-demarches-renouvellement).",
    },
    {
      type: "h2",
      texte: "Naturalisation : le niveau B2 depuis le 1er janvier 2026",
      id: "ce-qui-change-2026",
    },
    {
      type: "p",
      texte: "La naturalisation par décret, c'est la demande de nationalité française faite après plusieurs années en France. Jusqu'à fin 2025, le niveau B1 suffisait. Le [décret n° 2025-648 du 15 juillet 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051900519) remplace B1 par B2.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pour la **naturalisation par décret** : B2 pour les demandes déposées à partir du 1er janvier 2026.",
        "Pour la **nationalité par mariage** avec une personne française : B2 pour les déclarations faites à partir de la même date.",
        "Le même décret ajoute une autre condition : réussir l'**examen civique**.",
      ],
    },
    {
      type: "p",
      texte: "Le niveau B2 vaut à l'oral **et** à l'écrit, selon la fiche [service-public F11926](https://www.service-public.gouv.fr/particuliers/vosdroits/F11926). Une demande déposée avant le 1er janvier 2026 reste sous les anciens textes, dit l'[arrêté du 22 décembre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053164463). Le consulat de France au Canada ajoute un point : selon lui, un dossier déposé avant mais incomplet suit les nouvelles règles ([France Diplomatie, 18 décembre 2025](https://ca.diplomatie.gouv.fr/fr/le-niveau-b2-en-francais-devient-obligatoire-pour-les-demandes-dacquisition-de-la-nationalite)). En cas de doute, demandez à votre préfecture, le service de l'État qui instruit votre dossier.",
    },
    {
      type: "p",
      texte: "Pour préparer le reste du dossier, lisez notre guide de la [naturalisation française](/articles/naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet).",
    },
    {
      type: "h2",
      texte: "Comment prouver votre niveau : diplôme ou test ?",
      id: "comment-justifier",
    },
    {
      type: "p",
      texte: "Il y a deux sortes de preuves. Un **diplôme** ne périme pas. Une **attestation de test** n'est valable que 2 ans. Pour la nationalité, cette durée de 2 ans est fixée par l'arrêté du 22 décembre 2025. Pour les cartes de séjour, la fiche F34501 donne la même durée de 2 ans.",
    },
    {
      type: "p",
      texte: "Le DELF (diplôme d'études en langue française) est un diplôme de France Éducation international. Le TCF (test de connaissance du français) vient du même organisme. Le TEF (test d'évaluation de français) vient de la CCI Paris Île-de-France. Ce sont les deux seuls tests reconnus, selon l'[arrêté sur les tests linguistiques](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053164492).",
    },
    {
      type: "tableau",
      entetes: ["Preuve", "Pour une carte de séjour (A2 ou B1)", "Pour la nationalité (B2)"],
      lignes: [
        ["Diplôme de langue", "DELF, DALF, DELF Pro, DCL, DFP, ou DUEF au niveau demandé", "tout diplôme qui atteste au moins le B2"],
        ["Diplôme français", "brevet, CAP, BEP, CFG, ou diplôme de niveau 3 au moins", "brevet, ou diplôme d'État de niveau 3 au moins"],
        ["Certification professionnelle", "inscrite au RNCP, niveau 3 au moins", "inscrite au RNCP, niveau 3 au moins"],
        ["Test de langue", "TCF ou TEF de moins de 2 ans", "TCF ou TEF de moins de 2 ans"],
      ],
      legende: "Sources : service-public F34501 et F11926 ; arrêtés du 22 décembre 2025. Lus le 20/10/2026.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Pour les cartes de séjour, un diplôme délivré à l'étranger n'est pas accepté, même dans un pays francophone (F34501).",
        "Pour une carte de séjour, le test se passe en centre d'examen, en une seule journée, avec quatre épreuves : écrire, parler, lire et écouter.",
        "L'attestation doit porter votre photo et votre identité, vérifiée sur un passeport ou un titre de séjour valide.",
        "Une attestation de plus de 2 ans n'est plus acceptée : vérifiez sa date avant de déposer.",
      ],
    },
    {
      type: "h2",
      texte: "TCF, TEF ou DELF : lequel choisir ?",
      id: "comparatif-tcf-tef-delf",
    },
    {
      type: "tableau",
      entetes: ["Critère", "TCF ou TEF", "DELF"],
      lignes: [
        ["Nature", "test de niveau", "diplôme"],
        ["Durée de validité", "2 ans", "sans limite"],
        ["Résultat", "un niveau sur l'échelle européenne", "réussi ou raté, au niveau choisi"],
        ["Organisme", "France Éducation international (TCF), CCI Paris (TEF)", "France Éducation international"],
      ],
    },
    {
      type: "p",
      texte: "Le test convient si vous déposez bientôt. Il donne votre niveau, même si vous ne visez pas le bon du premier coup. Le diplôme convient si vous voulez une preuve qui dure. C'est utile si vous visez la carte de résident puis la nationalité. Pour le TEF, demandez la version IRN (intégration, résidence, nationalité), qui évalue jusqu'au B2 selon la [CCI Paris Île-de-France](https://www.lefrancaisdesaffaires.fr/le-tef-integration-residence-et-nationalite-un-test-adaptatif/). Les prix varient d'un centre à l'autre : demandez-les au centre.",
    },
    { type: "h2", texte: "Qui est dispensé de prouver son niveau ?", id: "dispenses" },
    { type: "p", texte: "**Pour une carte de séjour** (F34501) :" },
    {
      type: "liste",
      style: "coches",
      items: [
        "les personnes de 65 ans ou plus ;",
        "les personnes dont le handicap ou une maladie chronique empêche le test, avec un certificat du médecin traitant. Des aménagements du test sont aussi possibles.",
      ],
    },
    { type: "p", texte: "**Pour la nationalité** (F11926) :" },
    {
      type: "liste",
      style: "coches",
      items: [
        "les personnes dont le handicap ou l'état de santé rend le test impossible, avec un certificat médical ;",
        "par décret seulement : les réfugiés et apatrides de plus de 70 ans, en France depuis au moins 15 ans avec un titre valide. Les trois conditions comptent ensemble.",
      ],
    },
    {
      type: "p",
      texte: "Pour la nationalité, l'âge seul ne dispense pas. Pour votre cas précis, adressez-vous à la préfecture, à un avocat ou à une association comme La Cimade.",
    },
    {
      type: "h2",
      texte: "Langue et examen civique : deux conditions séparées",
      id: "langue-vs-civique",
    },
    {
      type: "p",
      texte: "Le niveau de français et l'examen civique sont deux conditions différentes. Il faut les deux, depuis le 1er janvier 2026, pour la carte pluriannuelle, la carte de résident et la nationalité ([service-public, A18713](https://www.service-public.gouv.fr/particuliers/actualites/A18713)). Réussir l'une ne dispense pas de l'autre.",
    },
    {
      type: "tableau",
      entetes: ["", "Niveau de français", "Examen civique"],
      lignes: [
        ["Ce qui est évalué", "votre français : lire, écrire, écouter, parler", "vos connaissances sur la République, l'histoire, les droits"],
        ["Comment le prouver", "diplôme ou test TCF, TEF", "QCM de 40 questions, 32 bonnes réponses au moins"],
        ["Durée de la preuve", "2 ans pour un test, sans limite pour un diplôme", "sans limite"],
      ],
      legende: "Source : service-public, actualité A18713 et fiche F17048, lues le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Pour savoir si l'examen vous concerne, faites le [test d'éligibilité](/eligibilite-examen-civique). Pour voir le format, lisez nos [exemples de questions corrigées](/articles/examen-civique-2026-exemples-questions-corrigees).",
    },
    {
      type: "cta",
      texte: "Les questions de l'examen civique sont en français : vous entraîner sur les questions types fait aussi travailler votre langue.",
      bouton: "Essayer gratuitement",
    },
    {
      type: "h2",
      texte: "Comment progresser gratuitement ?",
      id: "comment-atteindre-niveau-requis",
    },
    {
      type: "p",
      texte: "Si vous signez le CIR, l'OFII évalue votre français à l'accueil. Si votre niveau est sous l'A2, une formation de 600 heures vous est proposée, sur place ou en ligne ([service-public, F17048](https://www.service-public.gouv.fr/particuliers/vosdroits/F17048)). Si vous l'acceptez, elle devient obligatoire. Notre guide du [contrat d'intégration républicaine](/articles/contrat-integration-republicaine-cir-2026-formation-civique) détaille ce parcours.",
    },
    { type: "p", texte: "**Des ressources gratuites en ligne**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "[TV5Monde, Apprendre le français](https://apprendre.tv5monde.com/) : des exercices classés par niveau.",
        "[RFI, Français facile](https://francaisfacile.rfi.fr/) : l'actualité racontée en français simple.",
        "[FUN-MOOC](https://www.fun-mooc.fr/) : des cours en ligne gratuits d'universités françaises.",
        "La bibliothèque de votre ville : des livres, des journaux, parfois des ateliers de conversation.",
      ],
    },
    { type: "p", texte: "**Un plan simple sur douze semaines**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Semaines 1 à 4 : lire 30 minutes par jour et parler en français trois fois par semaine.",
        "Semaines 5 à 8 : travailler le format du test, à l'écrit comme à l'oral.",
        "Semaines 9 à 12 : faire des tests blancs chronométrés, puis revoir vos points faibles.",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "A2 pour une première carte pluriannuelle, B1 pour une première carte de résident, B2 pour la nationalité : c'est la règle depuis le 1er janvier 2026. Un diplôme ne périme pas, un test vaut 2 ans. Et le niveau de langue ne remplace jamais l'examen civique.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quel niveau de français pour la naturalisation en 2026 ?",
      reponse: "Il faut le niveau B2, à l'oral et à l'écrit, pour une demande de naturalisation déposée depuis le 1er janvier 2026. C'est aussi le cas pour une déclaration de nationalité par mariage faite depuis cette date. Avant, le niveau B1 suffisait. Le décret n° 2025-648 du 15 juillet 2025 a fait ce changement.",
    },
    {
      question: "Quel niveau de français pour une carte de résident ?",
      reponse: "Depuis le 1er janvier 2026, une première carte de résident demande le niveau B1 pour les personnes de moins de 65 ans, dans certaines catégories, comme le conjoint de Français. Une première carte de séjour pluriannuelle demande le niveau A2. Le renouvellement d'une carte pluriannuelle ne demande pas de nouvelle preuve, selon service-public.",
    },
    {
      question: "Combien de temps un test TCF ou TEF est-il valable ?",
      reponse: "L'attestation d'un test TCF ou TEF est valable 2 ans, pour une carte de séjour comme pour la nationalité. Passé ce délai, elle n'est plus acceptée et il faut repasser le test. Un diplôme, comme le DELF ou le brevet, n'a pas de limite de durée. Vérifiez la date avant de déposer votre dossier.",
    },
    {
      question: "Le test de français et l'examen civique, c'est la même chose ?",
      reponse: "Non. Le test de français mesure votre maîtrise de la langue : lire, écrire, écouter, parler. L'examen civique vérifie vos connaissances sur la République, sous la forme d'un QCM de 40 questions, avec 32 bonnes réponses au moins. Depuis 2026, il faut les deux pour la carte pluriannuelle, la carte de résident et la nationalité.",
    },
  ],
  sources: [
    {
      titre: "Service-public : carte de résident et carte pluriannuelle, comment justifier de sa connaissance du français ? (F34501)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34501",
      type: "officiel",
      description: "A2 pour une première carte pluriannuelle, B1 pour une première carte de résident, depuis le 1er janvier 2026 ; preuves acceptées, validité de 2 ans, dispenses. Vérifiée le 10 février 2026.",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : nationalité française, comment justifier de son niveau en français ? (F11926)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11926",
      type: "officiel",
      description: "Niveau B2 à l'oral et à l'écrit, diplômes et tests admis, dispenses (santé, réfugiés et apatrides de plus de 70 ans).",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : examen civique obligatoire depuis le 1er janvier 2026 (actualité A18713)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18713",
      type: "officiel",
      description: "Examen civique exigé pour la carte pluriannuelle, la carte de résident et la naturalisation ; QCM de 40 questions, 32 bonnes réponses.",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : le contrat d'intégration républicaine (F17048)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F17048",
      type: "officiel",
      description: "Test de positionnement à l'OFII, formation linguistique de 600 heures sous le niveau A2, formation civique.",
      luLe: "2026-10-20",
    },
    {
      titre: "Loi n° 2024-42 du 26 janvier 2024 pour contrôler l'immigration, améliorer l'intégration (Légifrance)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049040245",
      type: "juridique",
      description: "Article 20 : connaissance du français pour la carte de résident et la naturalisation, création de l'examen civique.",
      luLe: "2026-10-20",
    },
    {
      titre: "Décret n° 2025-648 du 15 juillet 2025 (Légifrance)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051900519",
      type: "juridique",
      description: "Remplace B1 par B2 pour la nationalité et instaure l'examen civique, pour les demandes déposées et déclarations faites depuis le 1er janvier 2026 (article 11).",
      luLe: "2026-10-20",
    },
    {
      titre: "Arrêté du 22 décembre 2025 relatif à la justification du niveau de maîtrise du français requis des candidats à la nationalité française (Légifrance)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053164463",
      type: "juridique",
      description: "Diplômes et certifications admis, validité de 2 ans des tests, entrée en vigueur le 1er janvier 2026.",
      luLe: "2026-10-20",
    },
    {
      titre: "Arrêté du 22 décembre 2025 relatif aux tests linguistiques (nationalité française, Légifrance)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053164492",
      type: "juridique",
      description: "Seuls le TCF (France Éducation international) et le TEF (CCI Paris) sont admis.",
      luLe: "2026-10-20",
    },
    {
      titre: "France Diplomatie, consulat au Canada : le niveau B2 devient obligatoire pour l'acquisition de la nationalité",
      url: "https://ca.diplomatie.gouv.fr/fr/le-niveau-b2-en-francais-devient-obligatoire-pour-les-demandes-dacquisition-de-la-nationalite",
      type: "officiel",
      description: "Actualité du 18 décembre 2025 : B2 pour le mariage et le décret, dossiers incomplets déposés avant 2026.",
      luLe: "2026-10-20",
    },
    {
      titre: "CCI Paris Île-de-France, Le français des affaires : le TEF IRN, un test adaptatif",
      url: "https://www.lefrancaisdesaffaires.fr/le-tef-integration-residence-et-nationalite-un-test-adaptatif/",
      type: "article",
      description: "Le TEF IRN évalue de A1 à B2 (page du 10 juin 2025).",
      luLe: "2026-10-20",
    },
    {
      titre: "TV5Monde : Apprendre le français",
      url: "https://apprendre.tv5monde.com/",
      type: "article",
      description: "Exercices gratuits par niveau.",
      luLe: "2026-10-20",
    },
    {
      titre: "RFI : Français facile",
      url: "https://francaisfacile.rfi.fr/",
      type: "article",
      description: "Actualité en français simple.",
      luLe: "2026-10-20",
    },
  ],
  aLireAussi: [
    {
      slug: "dossier-naturalisation-2026-documents-delais-prefecture-anef",
      ancre: "Dossier de naturalisation : les pièces à fournir",
    },
    {
      slug: "renouvellement-titre-sejour-2026-anef-prefecture-documents-delais",
      ancre: "Renouveler son titre de séjour",
    },
    {
      slug: "contrat-integration-republicaine-cir-2026-formation-civique",
      ancre: "Le CIR et la formation linguistique",
    },
    {
      slug: "titre-sejour-etudiant-france-guide-2025",
      ancre: "Guide du titre de séjour étudiant",
    },
  ],
};

export default article;
