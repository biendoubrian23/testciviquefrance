import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-ants-2026.ts` et
 * `lib/data/seo-articles.ts`, sans changer d'adresse.
 *
 * Réécrit le 20/10/2026 (groupe 8 des doublons). Il n'a pas été fusionné dans
 * `ants-permis-conduire-categorie-b-2026-demande-etapes-tarifs` : celui-ci
 * répond à la première demande (NEPH, code, conduite, prix de la fabrication),
 * celui-ci à un permis qu'on a déjà (perte, vol, détérioration, expiration,
 * suivi). L'échange d'un permis étranger renvoie à
 * `echange-permis-conduire-etranger-france-2026-pays-accords-liste-complete`.
 *
 * Retiré parce que faux ou sans source officielle : l'échange à 45 € (40 €
 * selon service-public), les « 2,5 millions de démarches », les délais
 * d'échange « 3 à 12 mois », le code photo « à 12 chiffres », le prix des
 * cabines, la limite de 2 Mo, le calendrier de fabrication J+0 à J+21, le
 * « duplicata gratuit dans les 30 jours », la demande lancée « par l'auto-école
 * dans les 48 h ».
 */
const article: Article = {
  slug: "ants-permis-conduire-2026-echange-demande-suivi",
  titre: "Permis de conduire perdu, volé, abîmé ou expiré : les démarches sur l'ANTS",
  titreSeo: "ANTS permis de conduire : perte, vol, suivi",
  resume: "Permis perdu ou volé : 25 € et une demande en ligne sur l'ANTS. Permis abîmé ou expiré, suivi de fabrication : chaque démarche, étape par étape.",
  chapo: "Permis perdu ou volé ? Vous demandez un nouveau permis en ligne sur le site de l'ANTS. Il coûte un timbre fiscal de ==25 €== (une taxe payée en ligne ou chez un buraliste). Pour un permis expiré, la démarche est gratuite, hors photo. Après une perte ou un vol, le nouveau permis arrive environ 15 jours après la validation de la demande.",
  publieLe: "2026-04-28",
  modifieLe: "2026-10-20",
  minutes: 6,
  theme: "ANTS permis de conduire perte vol",
  motsCles: [
    "ants permis",
    "ants permis de conduire",
    "permis de conduire perdu",
    "permis de conduire volé",
    "duplicata permis",
    "timbre fiscal permis de conduire",
    "suivi permis ants",
    "renouvellement permis de conduire",
    "permis rose 2033",
    "permis abîmé",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1449965408869-ebd13bc0c637?q=80&w=1200&auto=format&fit=crop",
    alt: "Voiture sur une route de campagne, vue de l'arrière",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1449965408869-ebd13bc0c637",
  },
  blocs: [
    {
      type: "h2",
      texte: "Quelle démarche pour votre situation ?",
      id: "les-demarches-permis",
    },
    {
      type: "p",
      texte: "L'ANTS (France Titres) est le service de l'État qui fabrique les permis. Toutes ses démarches se font en ligne, sur [permisdeconduire.ants.gouv.fr](https://permisdeconduire.ants.gouv.fr). Cherchez votre cas dans ce tableau.",
    },
    {
      type: "tableau",
      entetes: ["Situation", "Prix", "Ce qu'il faut d'abord"],
      lignes: [
        ["Permis perdu", "25 € (12,50 € en Guyane).", "Déclarer la perte sur le site de l'ANTS, dans la même demande."],
        ["Permis volé", "25 € (12,50 € en Guyane).", "Porter plainte au commissariat ou à la gendarmerie."],
        ["Permis abîmé", "Pas de timbre indiqué par service-public.", "Photographier le permis abîmé, recto et verso."],
        ["Permis expiré", "Gratuit, hors photo.", "Lire la date de fin, ligne 4b du permis."],
        ["Permis étranger à échanger", "40 € (20 € en Guyane).", "Vérifier l'accord avec votre pays."],
      ],
      legende: "Sources : service-public, fiches F1727, F1450, F20109, R49276 et F34118, lues le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Vous n'avez encore jamais eu de permis ? Ce n'est pas la même démarche. Notre guide de la [première demande de permis B](/articles/ants-permis-conduire-categorie-b-2026-demande-etapes-tarifs) explique le NEPH, le code et la fabrication gratuite.",
    },
    {
      type: "h2",
      texte: "Permis perdu : comment le refaire ?",
      id: "permis-perdu",
    },
    {
      type: "p",
      texte: "Vous déclarez la perte et vous demandez le nouveau permis en une seule démarche, en ligne ([service-public, F1727](https://www.service-public.gouv.fr/particuliers/vosdroits/F1727)). Préparez ces papiers, photographiés ou scannés :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "une photo-signature numérique de moins de 6 mois, faite chez un photographe ou dans une cabine agréés.",
        "une pièce d'identité.",
        "un justificatif de domicile de moins de 6 mois.",
        "si vous êtes étranger, la preuve que vous vivez en France, par exemple votre titre de séjour (la carte qui vous autorise à vivre en France).",
        "le timbre fiscal de 25 €.",
      ],
    },
    {
      type: "p",
      texte: "Quand l'ANTS a étudié la déclaration, vous recevez un mail ou un SMS. Vous téléchargez alors une ==attestation de perte== dans votre espace. Elle vous permet de conduire pendant 2 mois, en attendant le nouveau permis.",
    },
    {
      type: "h2",
      texte: "Permis volé : par quoi commencer ?",
      id: "permis-vole",
    },
    {
      type: "p",
      texte: "Allez d'abord au commissariat ou à la gendarmerie pour déclarer le vol ([service-public, F1450](https://www.service-public.gouv.fr/particuliers/vosdroits/F1450)). Vous pouvez commencer par une pré-plainte en ligne, puis signer sur place. On vous remet un récépissé de déclaration de vol. Il vous permet de conduire en France pendant ==2 mois==.",
    },
    {
      type: "p",
      texte: "Ensuite, faites la demande en ligne sur le site de l'ANTS. Les papiers sont les mêmes que pour une perte, avec en plus le récépissé de vol. Le timbre coûte aussi 25 €. Si votre titre de séjour a été volé en même temps, la démarche est à part : lisez notre article sur le [titre de séjour perdu ou volé](/articles/titre-sejour-perdu-vole-expire-2026-demarches-urgence).",
    },
    {
      type: "h2",
      texte: "Comment acheter le timbre fiscal ?",
      id: "timbre-fiscal",
    },
    {
      type: "p",
      texte: "Le timbre s'achète de deux façons ([service-public, F34118](https://www.service-public.gouv.fr/particuliers/vosdroits/F34118)) :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "en ligne, sur [timbres.impots.gouv.fr](https://timbres.impots.gouv.fr), ou pendant la démarche sur le site de l'ANTS.",
        "dans un bureau de tabac équipé pour vendre des timbres.",
      ],
    },
    {
      type: "p",
      texte: "Le timbre est valable 1 an après l'achat. Si vous ne l'utilisez pas, vous pouvez demander à être remboursé en ligne, dans les 18 mois qui suivent l'achat. N'achetez jamais sur un site qui vend le timbre plus cher : le prix officiel est de 25 €.",
    },
    {
      type: "h2",
      texte: "Permis abîmé : que faire ?",
      id: "permis-abime",
    },
    {
      type: "p",
      texte: "Un permis abîmé, déchiré ou illisible se remplace aussi en ligne ([service-public, F20109](https://www.service-public.gouv.fr/particuliers/vosdroits/F20109)). Vous envoyez une photo du permis abîmé, en couleur et des deux côtés. Ajoutez la photo-signature, la pièce d'identité et le justificatif de domicile. Quand le nouveau permis arrive, détruisez l'ancien.",
    },
    {
      type: "h2",
      texte: "Permis expiré ou permis rose : faut-il le renouveler ?",
      id: "renouvellement",
    },
    {
      type: "p",
      texte: "Un permis au format carte bancaire est en général valable ==15 ans==. La date de fin est écrite au recto, ligne 4b ([service-public, F31133](https://www.service-public.gouv.fr/particuliers/vosdroits/F31133)). Le vieux permis rose en trois volets reste valable jusqu'au ==19 janvier 2033==. Vous pouvez déjà l'échanger contre une carte.",
    },
    {
      type: "p",
      texte: "Pour le permis B, le renouvellement est une simple démarche en ligne. Vous ne repassez pas l'examen. Elle est gratuite, sauf la photo ([service-public, R49276](https://www.service-public.gouv.fr/particuliers/vosdroits/R49276)). Il faut une pièce d'identité, un justificatif de domicile, la photo-signature et votre permis actuel.",
    },
    {
      type: "p",
      texte: "Une réforme européenne a été votée le 21 octobre 2025. Elle prévoit une validité de 15 ans au plus, ou de 10 ans dans les pays où le permis sert de pièce d'identité, comme la France. Elle n'est pas encore appliquée : les pays ont 3 ans pour l'inscrire dans leur droit, plus 1 an pour la mettre en place ([service-public, A18566](https://www.service-public.gouv.fr/particuliers/actualites/A18566)).",
    },
    {
      type: "h2",
      texte: "Comment suivre la fabrication et conduire en attendant ?",
      id: "suivre-fabrication",
    },
    {
      type: "p",
      texte: "Vous suivez votre demande dans votre espace ANTS, gratuitement ([service-public, R36427](https://www.service-public.gouv.fr/particuliers/vosdroits/R36427)). Le permis est envoyé par Lettre suivie, environ 15 jours après le SMS qui valide la demande. Un lien de suivi arrive par mail à la fin de la fabrication (F1727).",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Attestation de perte** ou **récépissé de vol** : 2 mois pour conduire, en France.",
        "**ADCS** (attestation de droit à conduire sécurisée) : elle se télécharge sur le site Mes points permis et vaut 4 mois, en France.",
        "En cas de contrôle, ces papiers se montrent sur papier ou sur le téléphone.",
      ],
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Le suivi dit que le permis a été livré, mais vous ne l'avez pas reçu ? Contactez l'ANTS par le formulaire en ligne.",
        "Vous pouvez aussi appeler le 34 00 depuis la France, ou le 09 70 83 07 07 depuis l'étranger, du lundi au vendredi, de 9 h à 17 h (F1727).",
      ],
    },
    {
      type: "h2",
      texte: "Et pour échanger un permis étranger ?",
      id: "echange-permis-etranger",
    },
    {
      type: "p",
      texte: "L'échange d'un permis obtenu hors d'Europe dépend de votre pays et de la date de votre installation. Le timbre coûte 40 € (F34118). Notre guide de [l'échange d'un permis étranger](/articles/echange-permis-conduire-etranger-france-2026-pays-accords-liste-complete) donne la liste des pays et les conditions. Pour les autres démarches de l'ANTS, comme la carte grise, voyez notre [guide de l'ANTS](/articles/ants-demarches-en-ligne-2026-guide-complet).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Perdu ou volé : 25 € de timbre, et une demande en ligne sur le site de l'ANTS. Pour un vol, la plainte vient d'abord.\nExpiré : renouvellement gratuit, hors photo. Le permis rose reste valable jusqu'au 19 janvier 2033.\nPour conduire en attendant, gardez l'attestation de perte, le récépissé de vol ou l'ADCS.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien coûte un nouveau permis de conduire après une perte ?",
      reponse: "Un nouveau permis après une perte ou un vol coûte 25 €, en timbre fiscal, selon service-public. En Guyane, le timbre coûte 12,50 €. Vous l'achetez en ligne, pendant la démarche sur le site de l'ANTS, ou dans un bureau de tabac équipé. La photo-signature numérique est à payer en plus.",
    },
    {
      question: "Peut-on conduire sans permis après un vol ?",
      reponse: "Oui, avec le récépissé de déclaration de vol remis par le commissariat ou la gendarmerie. Il permet de conduire en France pendant 2 mois. Vous pouvez aussi télécharger l'ADCS sur le site Mes points permis : elle vaut 4 mois, en France seulement. Faites vite votre demande de nouveau permis.",
    },
    {
      question: "Comment suivre la fabrication de son permis sur l'ANTS ?",
      reponse: "Connectez-vous à votre espace ANTS, avec FranceConnect ou vos identifiants : le suivi est gratuit. Le permis part par Lettre suivie, environ 15 jours après le SMS qui valide la demande. Un lien de suivi arrive par mail à la fin de la fabrication. En cas de souci, appelez le 34 00.",
    },
    {
      question: "Faut-il renouveler son permis rose ?",
      reponse: "Pas tout de suite. Le permis rose en trois volets reste en général valable jusqu'au 19 janvier 2033, selon service-public. Vous pouvez déjà demander en ligne son remplacement par un permis au format carte bancaire. Pour le permis B, le renouvellement ne demande pas de repasser l'examen.",
    },
  ],
  sources: [
    {
      titre: "Service-public : perte du permis de conduire français (F1727)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1727",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : vol du permis de conduire (F1450)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1450",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : détérioration du permis de conduire (F20109)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F20109",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : timbre fiscal pour un permis de conduire (perte, vol, échange) (F34118)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34118",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : durée de validité d'un permis de conduire (F31133)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31133",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : refaire son permis en cas d'expiration (R49276)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R49276",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : suivre l'avancement d'une demande de permis de conduire (R36427)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R36427",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : réforme européenne, bientôt la fin du permis de conduire à vie (A18566)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18566",
      type: "officiel",
      luLe: "2026-10-20",
    },
  ],
};

export default article;
