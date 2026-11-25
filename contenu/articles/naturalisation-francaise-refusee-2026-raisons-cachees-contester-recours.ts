import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026, sans changer d'adresse. Réécrit en entier par le robot
 * éditorial le 25/11/2026 (liste « à revérifier » de `docs/seo/MOTS-CLES.md`) :
 * la version migrée annonçait « environ 45 % » de refus, un ajournement de
 * « 2 ans depuis le décret de 2024 », un niveau B1, un recours « gracieux »
 * puis contentieux, des taux de succès des recours (10 à 55 %), un plafond
 * d'aide juridictionnelle et une interdiction de 10 ans, sans aucune source.
 * Réécrit sur le décret n° 93-1362 (art. 43, 44, 45 et 49, lus le 25/11),
 * service-public F2213 (lue le 25/11), le code civil (21-25-1, lu le 24/11)
 * et F11926 (lue le 23/11).
 */
const article: Article = {
  slug: "naturalisation-francaise-refusee-2026-raisons-cachees-contester-recours",
  titre: "Naturalisation refusée ou ajournée : que faire, et dans quels délais ?",
  titreSeo: "Naturalisation refusée : recours et délais",
  resume: "Rejet, ajournement ou irrecevabilité : lire la décision, faire le recours obligatoire au ministre en 2 mois, puis le tribunal de Nantes.",
  chapo: "Après une naturalisation refusée ou ajournée, vous avez ==2 mois== pour faire un recours auprès du ministre chargé des naturalisations. Ce recours est obligatoire avant d'aller devant le juge. Voici comment lire la décision et faire le recours. Puis comment saisir le tribunal administratif de Nantes (le juge des litiges avec l'administration), ou redemander plus tard.",
  publieLe: "2026-04-28",
  modifieLe: "2026-11-25",
  minutes: 7,
  theme: "Naturalisation refusée : que faire ?",
  motsCles: [
    "naturalisation refusée",
    "naturalisation refusée que faire",
    "recours refus naturalisation",
    "ajournement naturalisation",
    "naturalisation ajournée",
    "recours ministre naturalisation",
    "tribunal administratif nantes naturalisation",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/tribunal-administratif-nantes.webp",
    alt: "Façade de l'hôtel Deurbroucq à Nantes, bâtiment du XVIIIe siècle qui abrite le tribunal administratif",
    largeur: 1200,
    hauteur: 798,
    credit: "Pymouss, via Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Nantes_-_H%C3%B4tel_Deurbroucq.jpg",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Article corrigé le 25 novembre 2026",
      texte: "La version précédente donnait un taux de refus, des « taux de succès » des recours, un ajournement toujours fixé à 2 ans, un niveau de français B1 et un recours « gracieux ». Rien de cela ne venait d'une source officielle, et plusieurs points sont faux. Cet article est réécrit sur le décret qui encadre la naturalisation et sur service-public.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Quelles décisions négatives pouvez-vous recevoir ?",
    },
    {
      type: "p",
      texte: "La naturalisation par décret, c'est la demande que vous faites à l'État pour devenir français. C'est la préfecture, le service de l'État dans votre département, qui instruit votre dossier. Elle peut aussi prendre la décision négative. Le [décret n° 93-1362](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000699753), articles 43 et 44, prévoit trois cas :",
    },
    {
      type: "tableau",
      entetes: ["Décision", "Ce qu'elle veut dire", "Et ensuite ?"],
      lignes: [
        ["**Irrecevabilité**", "Une condition de la loi manque (résidence, langue, casier…). Le fond du dossier n'est pas examiné, et l'entretien n'a pas lieu.", "Une nouvelle demande est possible quand le motif a disparu (article 43)."],
        ["**Ajournement**", "La demande est reportée. La décision ==impose un délai ou des conditions==.", "À la fin du délai, ou une fois les conditions remplies, vous pouvez redemander (article 44)."],
        ["**Rejet**", "Les conditions sont remplies, mais l'administration refuse de vous accorder la nationalité.", "Recours, ou nouvelle demande plus tard si votre situation change."],
      ],
    },
    {
      type: "p",
      texte: "La durée d'un ajournement n'est pas fixée par la loi : c'est la décision qui la donne. Lisez-la avec attention. Un ajournement de « 2 ans dans tous les cas » n'existe dans aucun texte.",
    },
    {
      type: "h2",
      texte: "Comment lire la lettre de refus ?",
    },
    {
      type: "p",
      texte: "Toute décision d'irrecevabilité, d'ajournement ou de rejet ==doit être motivée== (décret n° 93-1362, article 49). Motivée veut dire qu'elle explique pourquoi. Avant de répondre, repérez quatre choses :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**La date de notification**, c'est-à-dire le jour où vous avez reçu la décision : vos 2 mois partent de là.",
        "**Le type de décision** : irrecevabilité, ajournement ou rejet.",
        "**Chaque motif** écrit dans la lettre, un par un.",
        "**Le délai ou les conditions** fixés, s'il s'agit d'un ajournement.",
      ],
    },
    {
      type: "p",
      texte: "Les motifs reprennent souvent les conditions du code civil : la résidence, le niveau de français B2, l'examen civique, les ressources, les impôts, le casier judiciaire. Nous les expliquons une par une dans [les 7 erreurs qui font refuser une naturalisation](/articles/refus-naturalisation-7-erreurs-90-pourcent-candidats).",
    },
    {
      type: "h2",
      texte: "Le recours auprès du ministre : obligatoire, en 2 mois",
    },
    {
      type: "p",
      texte: "Dans les ==2 mois== après la notification, vous pouvez faire un recours auprès du ministre chargé des naturalisations. C'est le seul recours administratif possible : ni recours gracieux (une demande adressée au préfet qui a décidé), ni autre démarche ne le remplace. Et il est ==obligatoire== avant d'aller devant le juge. Sans lui, le tribunal refusera d'examiner votre demande (décret n° 93-1362, article 45). Une seule exception : le classement sans suite d'un dossier (F2213).",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Si vous avez déposé votre demande en ligne, faites le recours **sur le même téléservice**, le site de l'État où vous avez déposé le dossier (article 45).",
        "Répondez à chaque motif de la décision, avec des preuves : un diplôme de français obtenu depuis, un avis d'imposition, un contrat de travail, une attestation de réussite à l'examen civique.",
        "Gardez la preuve de l'envoi et sa date.",
        "Attendez la réponse : si le ministre ne répond pas pendant ==plus de 4 mois==, son silence vaut rejet du recours (article 45).",
      ],
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Le délai de 2 mois est court. Ne l'attendez pas pour rassembler vos preuves : envoyez le recours dans le délai, avec ce que vous avez.",
        "Personne ne peut « acheter » une décision favorable. Une personne qui promet une naturalisation contre de l'argent vous trompe.",
      ],
    },
    {
      type: "h2",
      texte: "Et si le ministre rejette votre recours ?",
    },
    {
      type: "p",
      texte: "Vous pouvez alors saisir le ==tribunal administratif de Nantes==, dans les 2 mois, selon service-public ([F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)). Le tribunal administratif, c'est le tribunal qui juge les litiges entre une personne et l'administration. Pour les naturalisations, c'est celui de Nantes, quelle que soit la préfecture qui a pris la décision.",
    },
    {
      type: "p",
      texte: "Le juge vérifie que la décision respecte la loi et qu'elle ne repose pas sur une erreur. Il ne vous donne pas la nationalité lui-même. Aucun chiffre officiel ne dit combien de recours réussissent : méfiez-vous des pourcentages qui circulent.",
    },
    {
      type: "p",
      texte: "Pour ce recours, faites-vous aider. Un avocat en droit des étrangers, une association comme La Cimade ou le Gisti, ou une permanence d'accès au droit de votre ville peuvent regarder votre dossier. Si vos revenus sont faibles, l'aide juridictionnelle, c'est-à-dire la prise en charge par l'État des frais d'avocat, peut couvrir tout ou partie des frais : renseignez-vous sur [service-public, F18074](https://www.service-public.gouv.fr/particuliers/vosdroits/F18074).",
    },
    {
      type: "h2",
      texte: "Faut-il plutôt redemander plus tard ?",
    },
    {
      type: "p",
      texte: "Le recours n'est pas toujours la seule voie. Après une **irrecevabilité**, vous pouvez déposer une nouvelle demande dès que la condition manquante est remplie. Après un **ajournement**, vous pouvez redemander quand le délai est passé ou les conditions remplies. Le décret dit qu'il vous « appartient » alors de formuler une nouvelle demande, « si vous le jugez opportun » (article 44).",
    },
    {
      type: "p",
      texte: "Un nouveau dossier doit montrer ce qui a changé. Par exemple :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Le niveau de français B2, prouvé par un diplôme ou un test reconnu ([F11926](https://www.service-public.gouv.fr/particuliers/vosdroits/F11926)).",
        "L'attestation de réussite à l'examen civique : voir [quel examen passer pour la naturalisation](/articles/examen-civique-naturalisation).",
        "Des revenus stables sur plusieurs années, et des impôts déclarés et payés.",
      ],
    },
    {
      type: "cta",
      texte: "Si votre décision parle de la connaissance des valeurs ou des institutions, entraînez-vous avant de redemander. Sur Test Civique France, les examens blancs de 40 questions vous donnent votre score et la correction de chaque question. L'inscription est gratuite.",
    },
    {
      type: "h2",
      texte: "Quel est le délai de réponse à une demande ?",
    },
    {
      type: "p",
      texte: "L'administration doit répondre dans les ==18 mois== après la remise d'un dossier complet, ou 12 mois si vous résidez en France depuis au moins 10 ans ([code civil, article 21-25-1](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006419662)). Les chiffres publiés sur les naturalisations accordées sont dans [notre article sur les chiffres officiels](/articles/1-etranger-sur-3-nationalite-francaise-chiffres-officiels-2026). Et si la réponse est positive, voici [comment trouver votre décret, et la suite](/articles/decret-de-naturalisation-trouver-et-apres).",
    },
    {
      type: "p",
      texte: "Vous préparez un dossier pour un proche ? [Vérifiez en une minute si l'examen civique le concerne](/eligibilite-examen-civique).",
    },
  ],
  faq: [
    {
      question: "Que faire en cas de refus de naturalisation ?",
      reponse: "Lisez la décision et sa date de notification. Dans les 2 mois, faites un recours auprès du ministre chargé des naturalisations : il est obligatoire avant le tribunal. Si le ministre rejette le recours, ou ne répond pas pendant plus de 4 mois, vous pouvez saisir le tribunal administratif de Nantes. Un avocat ou une association peut vous aider.",
    },
    {
      question: "Combien de temps dure un ajournement de naturalisation ?",
      reponse: "Aucun texte ne fixe une durée unique. Le décret n° 93-1362 prévoit que l'ajournement impose un délai ou des conditions, écrits dans la décision. Quand le délai est passé ou les conditions remplies, vous pouvez déposer une nouvelle demande. Lisez donc votre décision : c'est elle qui dit quand redemander.",
    },
    {
      question: "Le recours gracieux est-il possible après un refus de naturalisation ?",
      reponse: "Non. Le seul recours administratif possible est le recours auprès du ministre chargé des naturalisations, dans les 2 mois après la notification. Le décret exclut tout autre recours administratif. Ce recours est obligatoire : sans lui, le tribunal administratif refusera d'examiner votre demande, sauf pour un classement sans suite.",
    },
    {
      question: "Quel tribunal pour contester un refus de naturalisation ?",
      reponse: "C'est le tribunal administratif de Nantes, pour toute la France et l'outre-mer, selon service-public. Il se saisit après le recours obligatoire auprès du ministre, dans les 2 mois qui suivent son rejet. Le juge vérifie que la décision respecte la loi ; il ne vous accorde pas lui-même la nationalité.",
    },
  ],
  sources: [
    {
      titre: "Légifrance : décret n° 93-1362 du 30 décembre 1993, articles 43, 44, 45 et 49 (irrecevabilité, ajournement, rejet, recours, motivation)",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000699753",
      type: "juridique",
      luLe: "2026-11-25",
    },
    {
      titre: "Service-public.gouv.fr : Naturalisation par décret (F2213), vérifiée le 16/07/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      luLe: "2026-11-25",
    },
    {
      titre: "Légifrance : code civil, article 21-25-1 (délai de réponse)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006419662",
      type: "juridique",
      luLe: "2026-11-24",
    },
    {
      titre: "Service-public.gouv.fr : niveau de langue française exigé pour la naturalisation (F11926)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11926",
      type: "officiel",
      luLe: "2026-11-23",
    },
    {
      titre: "Service-public.gouv.fr : aide juridictionnelle (F18074), vérifiée le 12/06/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F18074",
      type: "officiel",
      luLe: "2026-11-25",
    },
  ],
};

export default article;
