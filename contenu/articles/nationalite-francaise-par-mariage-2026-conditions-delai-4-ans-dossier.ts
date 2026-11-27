import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 sans changer d'adresse, puis réécrit en entier par le
 * robot éditorial le 27/11/2026 (`docs/seo/ROBOT.md`, optimisation : erreur
 * factuelle découverte en écrivant `nationalite-francaise-par-declaration`).
 * La version migrée exigeait le niveau B1 (service-public F11926 : B2 à l'oral
 * et à l'écrit), donnait des « délais réels par juridiction » sans aucune
 * source, envoyait le dossier à une « juridiction » (c'est la plateforme
 * d'accès à la nationalité de la préfecture), citait « 800+ questions » et
 * une ancienne adresse du site.
 * Sources lues le 27/11/2026 : service-public F2726 (vérifiée le 01/05/2026,
 * onglets « en France » et « à l'étranger »), F11926 (01/01/2026), F39426
 * (16/07/2026).
 * Non écrit faute de source lue : un délai moyen de traitement, la règle de
 * présomption de fraude en cas de séparation après l'enregistrement.
 */
const article: Article = {
  slug: "nationalite-francaise-par-mariage-2026-conditions-delai-4-ans-dossier",
  titre: "Nationalité française par mariage : 4 ans de mariage, niveau B2, 255 €, et l'entretien à préparer",
  titreSeo: "Nationalité française par mariage : conditions",
  resume: "Les conditions de la nationalité française par mariage : 4 ou 5 ans de mariage, vie commune, niveau B2, dossier, prix de 255 € et délais.",
  chapo: "Après ==4 ans de mariage== avec une personne française, vous pouvez demander la nationalité française par déclaration, si votre vie commune n'a jamais cessé. Il faut aussi le niveau ==B2== de français, un dossier complet et un timbre de ==255 €==. Il n'y a pas d'examen civique, mais un entretien, en couple.",
  publieLe: "2026-04-06",
  modifieLe: "2026-11-27",
  minutes: 7,
  theme: "La nationalité française par mariage : conditions, niveau de langue, dossier, prix, entretien et délais",
  motsCles: [
    "nationalité française par mariage",
    "nationalité française mariage",
    "demande de nationalité française par mariage",
    "déclaration nationalité mariage",
    "conditions nationalité française mariage",
    "nationalité par mariage niveau b2",
    "entretien nationalité mariage",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/nationalite-francaise-par-mariage.webp",
    alt: "La façade d'une mairie au soleil du soir, avec des drapeaux français et un monument aux morts devant l'entrée",
    largeur: 1024,
    hauteur: 683,
    credit: "©HTO3, via Flickr",
    licence: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/33534994@N00/4970760544",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Article corrigé le 27/11/2026",
      texte: "Une version précédente indiquait le niveau B1 de français. Selon service-public, le niveau exigé est le ==B2==, à l'oral et à l'écrit. Elle donnait aussi des délais « par juridiction » qu'aucune source officielle ne publie : ils ont été retirés.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Qu'est-ce que la nationalité par mariage ?",
    },
    {
      type: "p",
      texte: "C'est une ==déclaration de nationalité==. Vous la signez devant un agent de l'État, et elle est enregistrée si vous remplissez les conditions de la loi. Ce n'est pas une naturalisation par décret, où l'État décide librement. Notre guide sur [la nationalité par déclaration](/articles/nationalite-francaise-par-declaration) présente les autres cas.",
    },
    {
      type: "p",
      texte: "Vous devenez français à la ==date de la déclaration==, appelée date de souscription, une fois qu'elle est enregistrée ([service-public, F2726](https://www.service-public.gouv.fr/particuliers/vosdroits/F2726)).",
    },
    {
      type: "h2",
      texte: "Quelles sont les conditions ?",
    },
    {
      type: "p",
      texte: "Service-public les liste ainsi. Toutes doivent être remplies le jour de la déclaration.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**4 ans de mariage** au moins. C'est ==5 ans== si vous avez vécu moins de 3 ans en France depuis le mariage. Sauf si votre époux ou épouse était inscrit pendant ce temps au registre des Français établis hors de France.",
        "**Un époux ou une épouse français** depuis le jour du mariage, sans interruption.",
        "**Une communauté de vie** qui n'a pas cessé depuis le mariage : vivre ensemble, matériellement et affectivement.",
        "**Un mariage célébré à l'étranger transcrit** sur les registres de l'état civil français.",
        "**Un titre de séjour valide** (la carte qui permet de vivre en France) le jour du dépôt, sauf pour les ressortissants de l'Espace économique européen et les Suisses.",
        "**Le niveau B2 de français**, à l'oral et à l'écrit.",
      ],
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Une condamnation en France à 6 mois de prison ferme ou plus** empêche la déclaration, sauf réhabilitation ou effacement de la mention au bulletin n° 2 du casier judiciaire.",
        "**Une condamnation pour terrorisme** ou pour une atteinte aux intérêts fondamentaux de la Nation l'empêche aussi.",
        "**Un arrêté d'expulsion** (une décision écrite qui oblige à quitter la France) **ou une interdiction du territoire** encore en vigueur bloque la démarche.",
      ],
    },
    {
      type: "h2",
      texte: "Quel niveau de français faut-il ?",
    },
    {
      type: "p",
      texte: "Selon [service-public (F11926)](https://www.service-public.gouv.fr/particuliers/vosdroits/F11926), il faut ==le niveau B2== du cadre européen des langues, à l'oral et à l'écrit. B2, c'est le niveau d'une personne qui suit une discussion sur un sujet courant et donne son avis avec des arguments.",
    },
    {
      type: "p",
      texte: "Vous le prouvez avec un diplôme français, comme le brevet ou un diplôme de niveau 3 tel que le CAP. Un diplôme qui atteste au moins le B2 convient aussi. Sinon, une attestation de réussite au TCF ou au TEF de ==moins de 2 ans==. Seul un handicap ou un état de santé qui rend toute évaluation impossible dispense de cette preuve, avec un certificat médical. Notre article sur [les niveaux de français A2, B1 et B2](/articles/niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation) explique ce que chaque niveau demande.",
    },
    {
      type: "h2",
      texte: "Comment déposer le dossier ?",
    },
    {
      type: "p",
      texte: "En France, vous déposez le dossier à la ==plateforme d'accès à la nationalité française== de votre département : c'est le service de la préfecture qui s'occupe de la nationalité. Le dépôt se fait au guichet ou par lettre recommandée, selon la plateforme. À l'étranger, vous passez par l'ambassade ou le consulat.",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Le formulaire cerfa n° 15277**, en 2 exemplaires, signé aussi par votre époux ou épouse.",
        "**Un timbre fiscal de 255 €** (127,50 € en Guyane), acheté en ligne ou dans un bureau de tabac. À l'étranger, la somme se paie au consulat.",
        "**Les actes d'état civil** : votre acte de naissance et l'acte de mariage, de moins de 3 mois. Ajoutez les actes de vos anciens mariages et de leur fin, et les actes de naissance de vos enfants.",
        "**La preuve que votre époux ou épouse est français**, par exemple un certificat de nationalité française.",
        "**Les preuves de vie commune** depuis le mariage, comme un avis d'impôt commun.",
        "**Le diplôme ou l'attestation de français**, votre titre de séjour, un justificatif de domicile et 2 photos.",
        "**Un casier judiciaire étranger**, si vous avez vécu plus de 6 mois dans un autre pays pendant les 10 dernières années.",
      ],
    },
    {
      type: "p",
      texte: "Les actes étrangers doivent être traduits par un traducteur agréé, et parfois légalisés ou apostillés. Un amendement au Sénat propose de porter le droit de timbre de la naturalisation à 1 000 €. Rien n'est voté : notre article sur [l'amendement du Sénat](/articles/timbre-naturalisation-1000-euros-senat) suit le texte.",
    },
    {
      type: "h2",
      texte: "Comment se passe l'entretien ?",
    },
    {
      type: "p",
      texte: "Vous êtes ==convoqués tous les deux==. L'entretien vérifie la réalité de votre vie commune et votre assimilation à la société française. L'assimilation, c'est être d'accord avec les principes et les valeurs essentiels de la République. Vous apportez les originaux de vos papiers d'identité, et vous signez une attestation sur l'honneur : votre vie commune n'a pas cessé depuis le mariage.",
    },
    {
      type: "p",
      texte: "À la fin, on vous remet un récépissé. C'est le papier qui prouve que votre déclaration est déposée, et c'est à partir de lui que courent les délais.",
    },
    {
      type: "p",
      texte: "Il n'y a ==pas d'examen civique== : selon [service-public (F39426)](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426), il concerne uniquement la naturalisation par décret. Mais l'entretien peut aborder les valeurs de la République. Les questions types sur la laïcité, l'égalité ou les institutions sont une bonne façon de s'y préparer.",
    },
    {
      type: "cta",
      texte: "Pour revoir les valeurs et les institutions avant l'entretien, entraînez-vous sur des questions types corrigées, thème par thème. L'inscription sur Test Civique France est gratuite.",
    },
    {
      type: "h2",
      texte: "Combien de temps pour la réponse ?",
    },
    {
      type: "p",
      texte: "Si toutes les conditions sont remplies, la déclaration est enregistrée. Sinon, le dossier part au ministère dans les ==6 mois== après la signature. Le ministère a ==1 an== pour refuser l'enregistrement. Ce délai passe à ==2 ans== si une procédure d'opposition est engagée. Ces délais courent à partir du récépissé remis à l'entretien.",
    },
    {
      type: "p",
      texte: "L'opposition, c'est une décision du gouvernement, par décret en Conseil d'État, qui empêche l'acquisition. Elle repose sur l'indignité ou sur un défaut d'assimilation autre que linguistique. Si tout va bien, la préfecture vous remet un exemplaire de la déclaration, marqué ==« enregistrée »==. Gardez-le : il prouve votre nationalité.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Contre un refus d'enregistrement** : un recours devant le tribunal judiciaire, dans les 6 mois, avec un avocat obligatoire.",
        "**Contre une opposition** : un recours devant le Conseil d'État, dans les 2 mois, avec un avocat obligatoire.",
        "**Signalez tout changement de situation** pendant l'instruction, par exemple une séparation ou un déménagement.",
      ],
    },
    {
      type: "h2",
      texte: "Et après ?",
    },
    {
      type: "p",
      texte: "Une fois français, vous pouvez demander une carte d'identité et un passeport. Entre 16 et 25 ans, vous devez aussi faire votre recensement dans le mois qui suit. Vous pouvez vous inscrire sur les listes électorales : notre article sur [le vote après la nationalité](/articles/inscription-listes-electorales-naturalise) explique comment.",
    },
    {
      type: "encadre",
      titre: "Le bon réflexe",
      texte: "Avant de déposer, vérifiez chaque condition sur la [fiche F2726](https://www.service-public.gouv.fr/particuliers/vosdroits/F2726), surtout la durée du mariage et la date de votre test de français. Un doute (une condamnation, une période de séparation, un mariage à l'étranger non transcrit) ? Demandez conseil à un avocat, à une association comme La Cimade ou à une permanence d'accès au droit.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien de temps de mariage faut-il pour demander la nationalité française ?",
      reponse: "Il faut 4 ans de mariage le jour de la déclaration. C'est 5 ans si vous avez vécu moins de 3 ans en France depuis le mariage. Sauf si votre époux ou épouse était inscrit au registre des Français établis hors de France pendant ce temps. La vie commune ne doit pas avoir cessé.",
    },
    {
      question: "Quel niveau de français pour la nationalité par mariage ?",
      reponse: "Selon service-public, il faut le niveau B2 à l'oral et à l'écrit. Vous le prouvez par un diplôme français comme le brevet, ou par un diplôme qui atteste au moins le B2. Une attestation de réussite au TCF ou au TEF de moins de 2 ans convient aussi. Seul un handicap ou un problème de santé peut en dispenser.",
    },
    {
      question: "Faut-il passer l'examen civique pour la nationalité par mariage ?",
      reponse: "Non. Selon service-public, l'examen civique concerne uniquement la naturalisation par décret. La déclaration par mariage passe par un entretien, en couple. Il vérifie votre vie commune et votre assimilation, c'est-à-dire votre accord avec les valeurs essentielles de la République.",
    },
    {
      question: "Combien coûte la demande de nationalité française par mariage ?",
      reponse: "La démarche coûte 255 €, payés par timbre fiscal en France, ou 127,50 € en Guyane, selon service-public. À l'étranger, les 255 € se paient au consulat. Prévoyez aussi le prix du test de français et des traductions. Un amendement au Sénat sur ce timbre est en discussion, mais rien n'est voté.",
    },
  ],
  sources: [
    {
      titre: "Service-public : nationalité française par mariage (F2726, vérifiée le 01/05/2026), conditions, dossier, entretien, délais et recours",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2726",
      type: "officiel",
      luLe: "2026-11-27",
    },
    {
      titre: "Service-public : niveau de langue française exigé pour acquérir la nationalité (F11926, vérifiée le 01/01/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11926",
      type: "officiel",
      luLe: "2026-11-27",
    },
    {
      titre: "Service-public : examen civique (F39426, vérifiée le 16/07/2026), procédures concernées",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39426",
      type: "officiel",
      luLe: "2026-11-27",
    },
  ],
};

export default article;
