import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-anef-2026.ts` et
 * `lib/data/seo-articles.ts`, sans changer d'adresse.
 * Réécrit par le robot éditorial le 21/11/2026 (`docs/seo/ROBOT.md`) : liste
 * « à revérifier » de `docs/seo/MOTS-CLES.md` et page non indexée
 * (« Explorée, actuellement non indexée »). La version migrée était fausse
 * sur la taxe de validation du VLS-TS (50 € écrits, 100 €), le coût du
 * renouvellement (75 €, 100 € ou 150 € selon la carte), les ressources
 * (615 €, 877,5 €), l'« APS » de 12 mois après un master (aujourd'hui la carte
 * « recherche d'emploi ou création d'entreprise », l'APS ne restant que pour
 * certains pays), le salaire exigé (« 1,5 Smic », 2 800,53 € brut par mois
 * sur F17319), la fenêtre de renouvellement (« 2 à 4 mois » sans source :
 * au plus tôt 4 mois et au plus tard 2 mois avant la fin), et donnait des
 * chiffres sans source (« 40 % des refus », « 90 % des préfectures »,
 * délais par préfecture). Tout ce qui n'avait pas de source a été retiré.
 * Sources lues le 21/11/2026 : service-public F2231 (vérifiée le
 * 01/08/2026), F17319 (vérifiée le 01/06/2026), F2713 (vérifiée le
 * 07/10/2025).
 */
const article: Article = {
  slug: "anef-etudiant-etranger-2026",
  titre: "ANEF pour les étudiants étrangers : valider le VLS-TS, renouveler la carte, et l'erreur de date qui coûte 180 €",
  titreSeo: "ANEF étudiant : valider le VLS-TS et renouveler",
  resume: "Étudiant étranger : valider le VLS-TS sur l'ANEF (100 €), renouveler votre carte au bon moment, 877,5 € par mois, et la carte après le master.",
  chapo: "Sur l'ANEF (le site officiel des démarches de séjour), un étudiant étranger fait deux démarches clés. D'abord, ==valider son VLS-TS (son visa de long séjour) dans les 3 mois== après son arrivée. Ensuite, ==demander sa carte « étudiant » entre 4 et 2 mois avant la fin== de son document. Une demande hors délai peut coûter 180 € de plus. Voici les étapes, les montants officiels et la suite après le diplôme.",
  publieLe: "2026-04-28",
  modifieLe: "2026-11-21",
  minutes: 7,
  theme: "anef étudiant",
  motsCles: [
    "anef étudiant",
    "anef etudiant etranger",
    "validation vls-ts étudiant",
    "renouvellement titre de séjour étudiant",
    "titre de séjour étudiant anef",
    "carte de séjour pluriannuelle étudiant",
    "carte recherche d'emploi création d'entreprise",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/anef-etudiant-bibliotheque-bordeaux.webp",
    alt: "La salle de lecture d'une bibliothèque universitaire à Bordeaux, avec des rayonnages de livres, des tables et un sol orange",
    largeur: 1200,
    hauteur: 795,
    credit: "Lantus, via Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Biblioth%C3%A8que_universitaire_de_Lettres_et_Sciences_humaines_de_l%27universit%C3%A9_Bordeaux_3,_Salle_de_lecture_2024.jpg",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Article corrigé le 21/11/2026",
      texte: "La version précédente contenait des erreurs. La validation du VLS-TS coûte 100 €, et non 50 €. Les ressources à prouver sont de 877,5 € par mois, et non de 615 €. Après un master, la carte à demander est la carte « recherche d'emploi ou création d'entreprise ». Les chiffres sans source officielle ont été retirés.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Qu'est-ce que l'ANEF, et quelles démarches d'étudiant s'y font ?",
    },
    {
      type: "p",
      texte: "L'ANEF (administration numérique des étrangers en France) est le site officiel du ministère de l'Intérieur pour les démarches de séjour. Un étudiant y fait deux démarches : la validation du visa, puis la demande de sa carte « étudiant ». Ces deux démarches se font ==uniquement sur internet== ([service-public, F2231](https://www.service-public.gouv.fr/particuliers/vosdroits/F2231)).",
    },
    {
      type: "p",
      texte: "Pas encore de compte ? Notre [guide pour créer un compte ANEF](/articles/compte-anef-creer-2026-guide-pas-a-pas) l'explique pas à pas. Et si le site bloque, lisez notre article sur [les erreurs courantes de l'ANEF](/articles/anef-erreurs-courantes-2026-page-blanche-session-expiree-500).",
    },
    {
      type: "h2",
      texte: "Étape 1 : comment valider votre VLS-TS « étudiant » ?",
    },
    {
      type: "p",
      texte: "Le VLS-TS est un visa de long séjour qui vaut titre de séjour, c'est-à-dire le document qui vous autorise à vivre en France. Le VLS-TS « étudiant » dure de 4 mois à 1 an. Mais il ne vaut titre de séjour qu'une fois validé.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Dans les 3 mois après votre arrivée**, validez-le en ligne sur l'ANEF.",
        "**Payez la taxe de 100 €** au moment de la validation. Elle s'ajoute aux droits de visa déjà payés.",
        "**Gardez la preuve de validation.** Elle montre que votre séjour est régulier, et elle vous permet de repasser la frontière de l'espace Schengen.",
      ],
    },
    {
      type: "h2",
      texte: "Étape 2 : quand et comment renouveler votre carte « étudiant » ?",
    },
    {
      type: "p",
      texte: "Faites votre demande sur l'ANEF ==au plus tôt 4 mois et au plus tard 2 mois avant la fin== de votre document (visa, VLS-TS ou carte). Si vous la faites hors délai, vous payez en plus un droit de visa de régularisation de ==180 €==, sauf cas de force majeure ou visa valide (F2231).",
    },
    {
      type: "p",
      texte: "Au dépôt, vous recevez tout de suite une attestation de dépôt en ligne. ++Attention : ce n'est pas un document provisoire de séjour.++ Vous suivez ensuite votre dossier sur l'ANEF, et vous répondez aux demandes de pièces. La préfecture, le service de l'État qui délivre les titres de séjour, peut vous convoquer pour prendre vos empreintes.",
    },
    {
      type: "tableau",
      entetes: ["Carte demandée", "Durée", "Coût (timbres fiscaux)"],
      lignes: [
        ["Carte de séjour « étudiant »", "1 an, renouvelable", "100 €"],
        ["Carte pluriannuelle « étudiant », après 1 an en France sous VLS-TS ou carte « étudiant »", "les années qui restent dans votre cycle d'études", "150 € (100 € de taxe et 50 € de droit de timbre)"],
      ],
      legende: "Source : service-public, fiche F2231 (vérifiée le 01/08/2026), lue le 21/11/2026.",
    },
    {
      type: "p",
      texte: "Un timbre fiscal, c'est un paiement en ligne de l'impôt dû pour un document officiel. Pour la carte pluriannuelle, si vous avez fini votre 1re année de licence, vous recevez une carte de 2 ans.",
    },
    {
      type: "h2",
      texte: "Quelles conditions et quelles pièces pour le renouvellement ?",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Être inscrit**, ou préinscrit, dans un établissement d'enseignement supérieur, public ou privé.",
        "**Prouver au moins 877,5 € de ressources par mois** : bourse, fiches de paie, virements réguliers d'un proche, ou solde bancaire suffisant.",
        "**Montrer des études réelles et sérieuses** : assiduité, résultats, diplômes, explications si vous changez de cursus.",
        "**Joindre vos relevés de notes de l'année écoulée**, votre dernier diplôme obtenu en France, une e-photo et le contrat d'engagement à respecter les principes de la République, signé.",
      ],
    },
    {
      type: "p",
      texte: "Vous avez redoublé ? Service-public est clair : ==un redoublement par cycle d'études ne remet pas en cause, à lui seul, le sérieux de vos études== (F2231). Expliquez quand même tout changement de cursus dans votre dossier.",
    },
    {
      type: "h2",
      texte: "Pouvez-vous travailler pendant vos études ?",
    },
    {
      type: "p",
      texte: "Oui. Avec une carte « étudiant », vous pouvez travailler ==964 heures par an== sans autorisation de travail, soit 60 % de la durée légale du travail ([service-public, F2713](https://www.service-public.gouv.fr/particuliers/vosdroits/F2713)). Les étudiants algériens suivent d'autres règles, données à part sur la même fiche. Un contrat d'apprentissage validé permet d'aller au-delà.",
    },
    {
      type: "h2",
      texte: "Que demander après votre diplôme ?",
    },
    {
      type: "p",
      texte: "Avec un master, une licence professionnelle ou un diplôme équivalent obtenu en France dans les 12 derniers mois, vous pouvez demander la carte « recherche d'emploi ou création d'entreprise » ([service-public, F17319](https://www.service-public.gouv.fr/particuliers/vosdroits/F17319)). Cette carte ne concerne pas les étudiants algériens.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Où ?** À la préfecture ou à la sous-préfecture de votre domicile, dans les 2 mois avant la fin de votre carte « étudiant ».",
        "**Combien ?** 150 € en timbres fiscaux. Elle vaut ==1 an== et ne se renouvelle pas.",
        "**Pour quoi faire ?** Chercher un emploi ou créer une entreprise. Vous pouvez travailler sans la limite des 964 heures, sans autorisation de travail, si l'emploi est lié à vos études et payé plus de 2 800,53 € brut par mois.",
      ],
    },
    {
      type: "p",
      texte: "L'ancienne « APS » ne reste que pour les étudiants de certains pays qui ont signé avec la France un accord sur les flux migratoires (F17319). Ensuite, un emploi trouvé ouvre une autre carte. Lisez nos guides sur [le changement de statut étudiant vers salarié](/articles/changement-statut-etudiant-salarie-2026-demarches-anef), sur [le titre de séjour salarié](/articles/titre-de-sejour-salarie) et sur [le passeport talent](/articles/passeport-talent-2026-conditions-metiers-demarches).",
    },
    {
      type: "encadre",
      titre: "Le geste à faire aujourd'hui",
      texte: "Regardez la date de fin de votre VLS-TS ou de votre carte. Notez dans votre agenda le jour qui tombe 4 mois avant : c'est le premier jour où vous pouvez déposer sur l'ANEF. Le dernier jour sans frais en plus tombe 2 mois avant. Et si vous pensez rester en France après vos études, [vérifiez en une minute si l'examen civique vous concernera un jour](/eligibilite-examen-civique).",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Comment valider son visa étudiant sur l'ANEF ?",
      reponse: "Dans les 3 mois qui suivent votre arrivée en France, vous validez votre VLS-TS « étudiant » en ligne, sur le site de l'ANEF, et vous payez une taxe de 100 €. Cette validation rend votre séjour régulier et vous permet de repasser la frontière de l'espace Schengen. Gardez bien la preuve de validation.",
    },
    {
      question: "Quand faire le renouvellement du titre de séjour étudiant ?",
      reponse: "Au plus tôt 4 mois et au plus tard 2 mois avant la fin de votre visa, de votre VLS-TS ou de votre carte, et uniquement sur internet. Une demande faite hors délai coûte 180 € de plus en droit de visa de régularisation, sauf cas de force majeure ou présentation d'un visa valide.",
    },
    {
      question: "Combien coûte le renouvellement d'un titre de séjour étudiant ?",
      reponse: "Selon service-public, la carte de séjour « étudiant » d'un an coûte 100 € en timbres fiscaux. La carte pluriannuelle « étudiant », possible après un an en France, coûte 150 € : 100 € de taxe et 50 € de droit de timbre. Il faut aussi prouver au moins 877,5 € de ressources par mois.",
    },
    {
      question: "L'APS existe-t-elle encore pour les étudiants ?",
      reponse: "Elle ne reste que pour les étudiants originaires de pays qui ont signé un accord sur les flux migratoires avec la France. Pour les autres, après un master ou une licence professionnelle obtenu en France, la carte à demander est la carte « recherche d'emploi ou création d'entreprise », valable un an.",
    },
  ],
  sources: [
    {
      titre: "Service-public : étudiant étranger en France, visa de long séjour ou titre de séjour, fiche F2231 (vérifiée le 01/08/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2231",
      type: "officiel",
      luLe: "2026-11-21",
    },
    {
      titre: "Service-public : carte de séjour ou VLS-TS recherche d'emploi ou création d'entreprise, fiche F17319 (vérifiée le 01/06/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F17319",
      type: "officiel",
      luLe: "2026-11-21",
    },
    {
      titre: "Service-public : un étudiant non européen peut-il travailler en France ?, fiche F2713 (vérifiée le 07/10/2025)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2713",
      type: "officiel",
      luLe: "2026-11-21",
    },
  ],
};

export default article;
