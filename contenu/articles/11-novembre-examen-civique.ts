import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 11/11/2026 (`docs/seo/ROBOT.md`).
 * Requêtes visées : « 11 novembre 1918 », « armistice 11 novembre »,
 * « première guerre mondiale » (10 k à 100 k recherches par mois), « armistice
 * 1918 » (1 k à 10 k) ; Planificateur de mots clés, France, French,
 * 11/11/2026. Famille examen civique : la Première Guerre mondiale est citée
 * mot pour mot par le référentiel officiel (thématique « Histoire, géographie
 * et culture », 8 questions sur 40).
 * Sources lues le 11/11/2026 : les deux fiches officielles « La Première
 * Guerre mondiale » de formation-civique.interieur.gouv.fr ; Légifrance, loi
 * n° 2012-273 du 28/02/2012 (art. 1 et 3), code du travail L. 3133-1, loi
 * n° 2018-607 du 13/07/2018 (art. 65). Chiffres de l'examen : arrêté du
 * 10/10/2025, art. 3 (lu fin octobre, repris de preparer-examen-civique).
 * Non écrits faute de source officielle lisible ce jour (Chemins de mémoire
 * et vie-publique.fr inaccessibles) : l'heure et le lieu de la signature, le
 * nombre de morts français, le bleuet, le Soldat inconnu.
 */
const article: Article = {
  slug: "11-novembre-examen-civique",
  titre: "11 novembre 1918 : l'armistice expliqué simplement, et ce que l'examen civique vous demande",
  titreSeo: "11 novembre 1918 : l'armistice expliqué simplement",
  resume: "Que commémore-t-on le 11 novembre ? L'armistice de 1918, la Grande Guerre en 6 dates et son bilan, avec deux questions types de l'examen civique.",
  chapo: "Le 11 novembre, la France se souvient de ==l'armistice du 11 novembre 1918==, l'accord qui a arrêté les combats de la Première Guerre mondiale (1914-1918). C'est un jour férié, et depuis 2012, le jour où l'on rend hommage à ==tous les morts pour la France==. Cette guerre fait partie du programme officiel de l'examen civique : voici l'essentiel, en mots simples.",
  publieLe: "2026-11-11",
  modifieLe: "2026-11-11",
  minutes: 7,
  theme: "11 novembre et Première Guerre mondiale à l'examen civique",
  motsCles: [
    "11 novembre",
    "11 novembre 1918",
    "armistice 11 novembre",
    "armistice 1918",
    "première guerre mondiale",
    "première guerre mondiale examen civique",
    "11 novembre jour férié",
    "histoire examen civique",
  ],
  rubrique: "thematiques",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/11-novembre-examen-civique.webp",
    alt: "Le monument aux morts en pierre blanche d'un village d'Île-de-France, devant le mur d'une église, avec une gerbe de fleurs posée sur la dalle",
    largeur: 1200,
    hauteur: 800,
    credit: "Lionel Allorge, via Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Monuments_aux_morts_de_Grosrouvre_en_mars_2014_1.jpg",
  },
  blocs: [
    {
      type: "h2",
      texte: "Que commémore-t-on le 11 novembre ?",
    },
    {
      type: "p",
      texte: "Commémorer, c'est se souvenir ensemble d'un événement, en public. Le 11 novembre, on se souvient de ==l'armistice de 1918==. Un armistice, c'est un accord pour arrêter les combats. Celui du 11 novembre 1918 a été signé entre les deux camps de la Première Guerre mondiale ([fiche officielle de la formation civique](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/histoire-geographie-et-culture/les-conflits-mondiaux-et-le-nouvel-ordre-mondial/la-premiere-guerre-mondiale-1/)).",
    },
    {
      type: "p",
      texte: "La loi du 28 février 2012 a élargi le sens de ce jour. Le 11 novembre reste l'anniversaire de l'armistice et de « la victoire et de la Paix ». Mais ce jour-là, la France rend aussi hommage à ==tous les morts pour la France==, de toutes les guerres ([loi n° 2012-273, article 1](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000025413468)). Cette loi vaut sur tout le territoire de la République, outre-mer compris (article 3).",
    },
    {
      type: "p",
      texte: "Les militaires morts pour la France dans l'année ne sont pas oubliés. Le ministère des Armées envoie leur liste aux communes. Leur nom, leur âge et leur unité sont lus pendant les cérémonies du 11 novembre ([loi n° 2018-607, article 65](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000037194585)).",
    },
    {
      type: "h2",
      texte: "Le 11 novembre est-il un jour férié ?",
    },
    {
      type: "p",
      texte: "Oui. Un jour férié, c'est un jour de fête fixé par la loi. Le code du travail en compte 11, et le 11 novembre en fait partie ([code du travail, article L. 3133-1](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033020901)). Deux de ces jours rappellent une guerre :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "le **8 mai**, pour la fin de la Seconde Guerre mondiale en Europe ;",
        "le **11 novembre**, pour l'armistice de la Première Guerre mondiale.",
      ],
    },
    {
      type: "p",
      texte: "Ne confondez pas ces deux dates : c'est une erreur fréquente. Le 14 juillet, lui, est la fête nationale. Pour les autres symboles de la République, lisez notre article sur [Marianne, le coq et le drapeau](/articles/symboles-france-marianne-coq-drapeau-tricolore).",
    },
    {
      type: "h2",
      texte: "La Première Guerre mondiale en 6 dates",
    },
    {
      type: "p",
      texte: "Voici les repères donnés par les fiches officielles du ministère de l'Intérieur, celles qui servent à préparer l'examen civique :",
    },
    {
      type: "tableau",
      entetes: ["Date", "Ce qui se passe"],
      lignes: [
        ["28 juin 1914", "L'archiduc François-Ferdinand, héritier de l'Autriche-Hongrie, est tué à Sarajevo. C'est le point de départ du conflit."],
        ["Août 1914", "La guerre est officiellement déclarée."],
        ["Novembre 1914 à mars 1918", "Les soldats s'enterrent dans les tranchées : c'est une guerre de position."],
        ["Avril 1917", "Les États-Unis entrent en guerre, du côté de la France."],
        ["11 novembre 1918", "L'armistice est signé : les combats s'arrêtent."],
        ["28 juin 1919", "Le traité de Versailles, signé notamment par Georges Clemenceau, met officiellement fin à la guerre."],
      ],
    },
    {
      type: "encadre",
      titre: "La phrase à retenir",
      texte: "L'armistice du ==11 novembre 1918== arrête les combats. Le traité de Versailles du ==28 juin 1919== met fin à la guerre. Les deux dates sont différentes, et l'examen peut vous demander l'une ou l'autre.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Pourquoi parle-t-on de guerre « mondiale » et « totale » ?",
    },
    {
      type: "p",
      texte: "La guerre est ==mondiale== parce qu'elle touche des pays de tous les continents. Les États-Unis entrent en guerre en 1917, le Moyen-Orient est aussi touché. Et des soldats venus d'Afrique et d'Asie, alors colonies de la France, combattent sur le front ([fiche officielle, les conséquences](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/histoire-geographie-et-culture/les-conflits-mondiaux-et-le-nouvel-ordre-mondial/la-premiere-guerre-mondiale-2/)).",
    },
    {
      type: "p",
      texte: "La guerre est ==totale== parce qu'elle mobilise toute la société, pas seulement les armées. L'économie, la culture et la propagande servent le conflit. La propagande, c'est l'effort pour influencer ce que pense la population.",
    },
    {
      type: "h2",
      texte: "Quel est le bilan de la Première Guerre mondiale ?",
    },
    {
      type: "p",
      texte: "Selon la fiche officielle, la guerre a fait ==plus de 10 millions de morts==, dont 9 millions de soldats. Elle laisse aussi des millions de blessés, des veuves et des orphelins.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Sur le plan économique** : les pays sont endettés, et le Nord-Est de la France est dévasté.",
        "**Sur le plan politique** : le traité de Versailles rend l'Allemagne responsable de la guerre. Elle perd des territoires et doit payer de lourdes réparations.",
        "**Pour la paix** : le traité crée la Société des Nations, une organisation chargée de maintenir la paix dans le monde. Ne la confondez pas avec l'ONU, créée plus tard, en 1945.",
      ],
    },
    {
      type: "p",
      texte: "Dans presque chaque commune de France, un monument aux morts porte les noms des habitants tués. C'est devant ce monument qu'a lieu la cérémonie du 11 novembre. Elle est publique : vous pouvez y assister, quelle que soit votre nationalité.",
    },
    {
      type: "h2",
      texte: "Que demande l'examen civique sur la Première Guerre mondiale ?",
    },
    {
      type: "p",
      texte: "Le référentiel officiel de l'examen, la liste de ce que vous devez savoir, cite « les conflits mondiaux : Première Guerre mondiale (1914-1918) ». Il cite aussi les grandes fêtes célébrées en France. Ces repères entrent dans la thématique « Histoire, géographie et culture », qui compte ==8 questions sur 40==, selon l'[arrêté du 10 octobre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620), article 3.",
    },
    {
      type: "p",
      texte: "Huit questions, c'est 20 % de l'examen. Vous n'avez pas besoin de tout savoir sur la guerre : les dates du tableau, le sens des mots « mondiale » et « totale », et le bilan suffisent pour ce chapitre. Pour organiser vos révisions, suivez notre [plan en 4 semaines](/articles/preparer-examen-civique), et lisez les fiches gratuites du ministère avec notre [mode d'emploi du site officiel](/articles/formation-civique-site-officiel).",
    },
    {
      type: "qcm",
      thematique: "Histoire, géographie et culture",
      question: "Que commémore-t-on en France le 11 novembre ?",
      choix: [
        "La prise de la Bastille",
        "L'armistice de la Première Guerre mondiale",
        "La fin de la Seconde Guerre mondiale en Europe",
        "La création de l'Union européenne",
      ],
      reponse: 1,
      explication: "Le 11 novembre rappelle l'armistice du 11 novembre 1918, et depuis 2012, il rend hommage à tous les morts pour la France. La fin de la Seconde Guerre mondiale en Europe se commémore le 8 mai, la prise de la Bastille le 14 juillet. Ceci est une question type, écrite par nous, pas une question de l'examen officiel.",
    },
    {
      type: "qcm",
      thematique: "Histoire, géographie et culture",
      question: "Quel traité met officiellement fin à la Première Guerre mondiale ?",
      choix: [
        "Le traité de Rome",
        "Le traité de Maastricht",
        "Le traité de Versailles",
        "Le traité de Lisbonne",
      ],
      reponse: 2,
      explication: "Le traité de Versailles, signé le 28 juin 1919, met officiellement fin à la guerre. Il crée aussi la Société des Nations. Les traités de Rome, Maastricht et Lisbonne concernent la construction européenne. Ceci est une question type, écrite par nous, pas une question de l'examen officiel.",
    },
    {
      type: "cta",
      texte: "L'histoire compte pour 8 questions sur 40. Sur Test Civique France, les cours des 5 thématiques sont gratuits, et les examens blancs de 40 questions vous montrent votre résultat par thématique. L'inscription est gratuite.",
    },
    {
      type: "p",
      texte: "Vous ne savez pas encore si l'examen vous concerne ? [Vérifiez-le en une minute](/eligibilite-examen-civique). Et pour voir d'autres questions types corrigées, toutes thématiques confondues, lisez nos [exemples de questions de l'examen civique](/articles/examen-civique-2026-exemples-questions-corrigees).",
    },
  ],
  faq: [
    {
      question: "Pourquoi le 11 novembre est un jour férié ?",
      reponse: "Le 11 novembre est l'anniversaire de l'armistice signé le 11 novembre 1918, qui a arrêté les combats de la Première Guerre mondiale. Le code du travail le range parmi les 11 jours fériés (article L. 3133-1). Depuis la loi du 28 février 2012, ce jour rend aussi hommage à tous les morts pour la France, de toutes les guerres.",
    },
    {
      question: "Que fête-t-on le 11 novembre ?",
      reponse: "On ne fête pas, on commémore : on se souvient ensemble. Le 11 novembre rappelle l'armistice de 1918 et la paix revenue. Depuis 2012, c'est aussi la journée d'hommage à tous les morts pour la France. Des cérémonies ont lieu devant les monuments aux morts des communes, et elles sont ouvertes à tous.",
    },
    {
      question: "Quand a fini la Première Guerre mondiale ?",
      reponse: "Les combats s'arrêtent avec l'armistice du 11 novembre 1918. La guerre prend fin officiellement avec le traité de Versailles, signé le 28 juin 1919. Les fiches officielles de l'examen civique donnent ces deux dates : retenez que l'armistice arrête les combats, et que le traité met fin à la guerre.",
    },
    {
      question: "Combien de morts pendant la Première Guerre mondiale ?",
      reponse: "Selon la fiche officielle de l'examen civique, la Première Guerre mondiale a fait plus de 10 millions de morts, dont 9 millions de soldats. Elle a aussi laissé des millions de blessés, des veuves et des orphelins, et dévasté le Nord-Est de la France.",
    },
  ],
  sources: [
    {
      titre: "Formation civique (ministère de l'Intérieur) : « La Première Guerre mondiale (1914-1918) : le contexte »",
      url: "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/histoire-geographie-et-culture/les-conflits-mondiaux-et-le-nouvel-ordre-mondial/la-premiere-guerre-mondiale-1/",
      type: "officiel",
      luLe: "2026-11-11",
    },
    {
      titre: "Formation civique (ministère de l'Intérieur) : « La Première Guerre mondiale (1914-1918) : les conséquences »",
      url: "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/histoire-geographie-et-culture/les-conflits-mondiaux-et-le-nouvel-ordre-mondial/la-premiere-guerre-mondiale-2/",
      type: "officiel",
      luLe: "2026-11-11",
    },
    {
      titre: "Légifrance : loi n° 2012-273 du 28 février 2012 fixant au 11 novembre la commémoration de tous les morts pour la France (articles 1 et 3)",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000025413468",
      type: "juridique",
      luLe: "2026-11-11",
    },
    {
      titre: "Légifrance : code du travail, article L. 3133-1 (liste des fêtes légales), en vigueur au 11/11/2026",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000033020901",
      type: "juridique",
      luLe: "2026-11-11",
    },
    {
      titre: "Légifrance : loi n° 2018-607 du 13 juillet 2018 relative à la programmation militaire, article 65",
      url: "https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000037194585",
      type: "juridique",
      luLe: "2026-11-11",
    },
    {
      titre: "Légifrance : arrêté du 10 octobre 2025 relatif à l'examen civique (article 3, répartition des questions par thématique)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620",
      type: "juridique",
      luLe: "2026-10-28",
    },
  ],
};

export default article;
