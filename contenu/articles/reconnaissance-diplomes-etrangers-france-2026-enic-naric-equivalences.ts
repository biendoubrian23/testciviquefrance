import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-reconnaissance-diplomes.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/reconnaissance-diplomes-etrangers-france-2026-enic-naric-equivalences`).
 *
 * Réécrit par le robot éditorial le 26/10/2026 (`docs/seo/ROBOT.md`), à la
 * même adresse : la page la plus citée par Copilot (Bing Webmaster Tools,
 * 25/10/2026) annonçait une attestation à 73 € en 3 à 4 mois et renvoyait vers
 * une fiche service-public sans rapport (F2272, sur le recouvrement de
 * créances). Service-public indique 120 € (20 € de recevabilité, puis 100 €
 * d'expertise), une réponse en 4 mois au plus, et la gratuité pour les
 * demandeurs d'asile et les réfugiés. Retirés faute de source officielle :
 * « 230 professions réglementées », les délais et prix par profession,
 * l'examen d'avocat à 800 €, les délais réduits par les conventions
 * bilatérales, la traduction à 30 à 80 €, la VAE à 500 à 3 000 €, et
 * l'attestation présentée comme un atout du dossier de naturalisation.
 * Sources lues le 26/10/2026 : service-public F463, R38515, F2863, F3141 ;
 * France VAE (vae.gouv.fr).
 */
const article: Article = {
  slug: "reconnaissance-diplomes-etrangers-france-2026-enic-naric-equivalences",
  titre: "Reconnaissance d'un diplôme étranger en France : l'attestation ENIC-NARIC, son vrai prix et ses limites",
  titreSeo: "Reconnaissance diplôme étranger : ENIC-NARIC",
  resume: "Faire reconnaître un diplôme étranger en France : l'attestation ENIC-NARIC (120 €, 4 mois au plus), les études, les métiers réglementés, sources officielles.",
  chapo: "En France, il n'existe pas d'équivalence pour un diplôme obtenu à l'étranger. Le document qui s'en approche est l'**attestation de comparabilité** du centre ENIC-NARIC : elle coûte ==120 €== et arrive en 4 mois au plus, selon service-public. Voici à quoi elle sert, comment la demander, et quand elle ne suffit pas.",
  publieLe: "2026-04-06",
  modifieLe: "2026-10-26",
  minutes: 7,
  theme: "reconnaissance diplôme étranger France",
  motsCles: [
    "reconnaissance diplôme étranger France",
    "enic naric reconnaissance des diplômes",
    "attestation de comparabilité",
    "équivalence diplôme étranger",
    "enic naric prix",
    "enic naric délai",
    "profession réglementée diplôme étranger",
    "VAE diplôme étranger",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/reconnaissance-diplomes-etrangers.webp",
    alt: "Une allée de bibliothèque bordée de rayonnages remplis de livres, vue en perspective",
    largeur: 1023,
    hauteur: 681,
    credit: "The City of Toronto, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/34608255@N08/10056355054",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Article corrigé le 26 octobre 2026",
      texte: "La version précédente annonçait une attestation à 73 € en 3 à 4 mois. Service-public indique ==120 €== et une réponse en 4 mois au plus. Nous avons aussi retiré des prix, des délais et des chiffres qu'aucune source officielle ne confirme.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Peut-on obtenir une équivalence d'un diplôme étranger ?",
      id: "pas-equivalence-automatique",
    },
    {
      type: "p",
      texte: "Non. Pour un diplôme obtenu à l'étranger, il n'existe pas d'équivalence en France. Le centre ENIC-NARIC peut seulement délivrer une **attestation de comparabilité** ([service-public, F463](https://www.service-public.gouv.fr/particuliers/vosdroits/F463)). Le centre ENIC-NARIC France est le service public chargé de comparer les diplômes étrangers. Il dépend de France Éducation international, un établissement public.",
    },
    {
      type: "p",
      texte: "Ce que vous devez faire dépend de votre projet :",
    },
    {
      type: "tableau",
      entetes: ["Votre projet", "Qui décide", "Ce qu'il faut demander"],
      lignes: [
        ["Travailler dans un métier non réglementé", "L'employeur", "Rien d'obligatoire ; l'attestation de comparabilité peut aider"],
        ["Exercer un métier réglementé (médecin, avocat, infirmier…)", "L'autorité de la profession", "Une autorisation d'exercice, selon une procédure propre au métier"],
        ["Poursuivre des études", "L'établissement d'accueil", "Une inscription : l'établissement évalue lui-même vos diplômes"],
      ],
      legende: "D'après service-public, fiche F463, vérifiée le 17 avril 2025, lue le 26 octobre 2026.",
    },
    {
      type: "h2",
      texte: "Qu'est-ce que l'attestation de comparabilité ?",
      id: "attestation-comparabilite-enic-naric",
    },
    {
      type: "p",
      texte: "C'est un ==avis== : il situe votre diplôme par rapport à un niveau de formation en France. Il n'a pas de valeur juridique et il n'est pas obligatoire. La décision finale appartient à l'employeur ou à l'établissement de formation ([F463](https://www.service-public.gouv.fr/particuliers/vosdroits/F463)).",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Tous les diplômes ne sont pas concernés.** Seuls les diplômes reconnus par le pays qui les a délivrés, et les formations qui mènent à un diplôme, peuvent être comparés.",
        "**Les diplômes de langue sont exclus**, comme les diplômes qui donnent accès à une profession réglementée (même fiche F463).",
        "**Ce n'est pas une autorisation de travail.** Pour travailler en France, votre titre de séjour (la carte qui vous autorise à vivre en France) doit aussi le permettre. Notre article sur [le travail des étrangers en France](/articles/travailler-france-etranger-autorisation-droits) fait le point.",
      ],
    },
    {
      type: "h2",
      texte: "Comment demander l'attestation, et combien coûte-t-elle ?",
      id: "couts-delais-2026",
    },
    {
      type: "p",
      texte: "La demande se fait ==en ligne uniquement==, sur le site du centre ENIC-NARIC, en deux étapes ([service-public, R38515](https://www.service-public.gouv.fr/particuliers/vosdroits/R38515)) :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**La préinscription.** Vous recevez sous 24 heures un courriel avec votre numéro de dossier, et un lien pour le compléter.",
        "**L'examen de la recevabilité**, pour 20 €. Le centre vérifie que votre diplôme peut être comparé.",
        "**L'expertise**, pour 100 €, si le dossier est déclaré recevable. Vous recevez ensuite l'attestation par courriel.",
      ],
    },
    {
      type: "tableau",
      entetes: ["Étape", "Prix", "Source"],
      lignes: [
        ["Recevabilité", "20 €", "Service-public, R38515"],
        ["Expertise", "100 €", "Service-public, R38515"],
        ["Total", "120 €", "Service-public, F463"],
        ["Demandeur d'asile ou réfugié", "Gratuit", "Service-public, F463"],
      ],
    },
    {
      type: "p",
      texte: "Le centre doit répondre ==dans les 4 mois au plus== après le paiement ([F463](https://www.service-public.gouv.fr/particuliers/vosdroits/F463)). Si votre dossier est jugé irrecevable, vous avez 2 mois pour contester. Écrivez une demande argumentée, avec vos justificatifs, à l'adresse recours-enicnaric@france-education-international.fr ([R38515](https://www.service-public.gouv.fr/particuliers/vosdroits/R38515)).",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Préparez une copie lisible de chaque diplôme et de vos relevés de notes avant de commencer.",
        "Si vos documents ne sont pas en français, demandez au centre quelle traduction il accepte avant de payer un traducteur.",
        "Gardez l'attestation reçue par courriel : vous pouvez la joindre à chaque candidature.",
      ],
    },
    {
      type: "h2",
      texte: "Et pour un métier réglementé ?",
      id: "professions-reglementees",
    },
    {
      type: "p",
      texte: "Un métier réglementé est un métier que la loi réserve aux personnes qui ont un diplôme ou une autorisation précise. C'est le cas d'un médecin, d'un avocat ou d'un architecte, mais aussi d'un coiffeur ou d'un mécanicien. L'attestation de comparabilité ne suffit pas pour ces métiers. La procédure dépend de la profession, et du pays où vous avez obtenu le diplôme : dans l'Union européenne ou en dehors ([F463](https://www.service-public.gouv.fr/particuliers/vosdroits/F463)).",
    },
    {
      type: "p",
      texte: "Pour certains métiers de la santé, comme les métiers paramédicaux, un diplôme obtenu hors d'Europe ne permet pas, en principe, d'exercer en France. Une formation d'adaptation peut alors mener au diplôme français ([service-public, F3141](https://www.service-public.gouv.fr/particuliers/vosdroits/F3141)). Pour votre métier, le centre ENIC-NARIC indique la marche à suivre et l'autorité à contacter.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Exercer un métier réglementé sans l'autorisation exigée n'est pas possible, même avec une attestation de comparabilité. Renseignez-vous **avant** de signer un contrat de travail.",
      ton: "rouge",
    },
    {
      type: "h2",
      texte: "Et pour reprendre des études en France ?",
      id: "reconnaissance-academique-etudes",
    },
    {
      type: "p",
      texte: "C'est l'établissement d'accueil qui reconnaît vos diplômes, au moment de votre demande d'inscription. Il fixe ses propres critères ([F463](https://www.service-public.gouv.fr/particuliers/vosdroits/F463)). L'attestation de comparabilité n'est donc pas la porte d'entrée des études.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Vous vivez dans un des 73 pays de la procédure « Études en France »** : passez par cette plateforme ([service-public, F2863](https://www.service-public.gouv.fr/particuliers/vosdroits/F2863)). Notre article sur [Campus France](/articles/campus-france-etude-france-2026-visa-inscription-procedure) détaille les étapes.",
        "**Vous vivez déjà en Europe** : pour une première année de licence, faites une demande d'admission préalable (DAP), en général d'octobre à mi-décembre. Pour un master, passez par la plateforme Mon Master (F2863).",
        "**Vous êtes réfugié, apatride ou bénéficiaire de la protection subsidiaire** : vous pouvez candidater directement à l'université, sans DAP ni test de français. Un récépissé, c'est-à-dire le papier qui prouve que la demande de protection est en cours, ne suffit pas pour cette dispense (F2863).",
      ],
    },
    {
      type: "p",
      texte: "Pour le séjour pendant vos études, lisez notre [guide du titre de séjour étudiant](/articles/titre-sejour-etudiant-france-guide-2025).",
    },
    {
      type: "h2",
      texte: "Sans diplôme, mais avec de l'expérience ?",
    },
    {
      type: "p",
      texte: "La **validation des acquis de l'expérience** (VAE) permet d'obtenir un diplôme français grâce à votre expérience. Le service public France VAE la présente comme ouverte à toute personne qui a une expérience professionnelle, personnelle ou bénévole en lien avec le diplôme visé ([vae.gouv.fr](https://vae.gouv.fr)). Les démarches et les aides au financement se trouvent sur ce site.",
    },
    {
      type: "p",
      texte: "Vous préparez aussi un titre de séjour ou une naturalisation ? Le niveau de français demandé est un autre justificatif, sans lien avec la reconnaissance du diplôme. Notre article sur [les niveaux A2, B1 et B2](/articles/niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation) explique lequel fournir.",
    },
  ],
  faq: [
    {
      question: "Combien coûte une attestation de comparabilité ENIC-NARIC ?",
      reponse: "Selon service-public, l'attestation coûte 120 € au total : 20 € pour l'examen de la recevabilité, puis 100 € pour l'expertise si le dossier est recevable. Le paiement se fait en ligne au moment de la demande. Elle est gratuite pour un demandeur d'asile ou une personne réfugiée.",
    },
    {
      question: "Quel est le délai pour obtenir une attestation ENIC-NARIC ?",
      reponse: "Le centre ENIC-NARIC doit répondre dans un délai de 4 mois au plus après le paiement, selon service-public. L'attestation arrive par courriel. Si le dossier est jugé irrecevable, vous avez 2 mois pour former un recours écrit, avec vos justificatifs, auprès du centre.",
    },
    {
      question: "Comment faire une équivalence de diplôme en France ?",
      reponse: "Pour un diplôme obtenu à l'étranger, il n'existe pas d'équivalence en France. Le centre ENIC-NARIC peut délivrer une attestation de comparabilité, qui situe le diplôme par rapport à un niveau français. C'est un avis, sans valeur juridique : l'employeur ou l'établissement de formation décide.",
    },
    {
      question: "L'attestation ENIC-NARIC est-elle obligatoire pour travailler ?",
      reponse: "Non. Pour un métier non réglementé, l'employeur évalue vos qualifications et peut vous demander l'attestation, sans obligation légale. Pour un métier réglementé, comme médecin ou avocat, elle ne suffit pas : il faut une autorisation d'exercice, selon une procédure propre à la profession.",
    },
  ],
  sources: [
    {
      titre: "Service-public : faire reconnaître en France un diplôme obtenu à l'étranger (F463)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F463",
      type: "officiel",
      description: "Attestation de comparabilité : 120 €, gratuite pour les demandeurs d'asile et réfugiés, réponse en 4 mois au plus",
      luLe: "2026-10-26",
    },
    {
      titre: "Service-public : demander une attestation de comparabilité d'un diplôme étranger (R38515)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R38515",
      type: "officiel",
      description: "Recevabilité 20 €, expertise 100 €, recours en 2 mois",
      luLe: "2026-10-26",
    },
    {
      titre: "Service-public : inscription d'un étranger dans l'enseignement supérieur (F2863)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2863",
      type: "officiel",
      luLe: "2026-10-26",
    },
    {
      titre: "Service-public : exercer une profession paramédicale avec un diplôme étranger (F3141)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F3141",
      type: "officiel",
      luLe: "2026-10-26",
    },
    {
      titre: "France VAE, le service public de la validation des acquis de l'expérience",
      url: "https://vae.gouv.fr",
      type: "officiel",
      luLe: "2026-10-26",
    },
  ],
};

export default article;
