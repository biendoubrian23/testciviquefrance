import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 sans changer d'adresse. Réécrit le 20/10/2026 au niveau
 * de la doctrine (`docs/seo/ROBOT.md`) et différencié de
 * `compte-anef-creer-2026-guide-pas-a-pas` : celui-ci répond à « créer son
 * compte », celui-là à « déposer et suivre sa demande de titre de séjour ».
 * La création du compte n'y tient plus que quelques lignes, avec un lien.
 *
 * Chaque règle vient de la FAQ officielle de l'ANEF, de service-public et du
 * communiqué du Conseil d'État du 5 mai 2026, lus le 20/10/2026. Ont été
 * retirés parce que faux ou sans source officielle : le paiement par carte
 * « sur la plateforme » au dépôt (la FAQ de l'ANEF dit que le timbre fiscal se
 * paie à la remise du titre), le montant « 100 € à 250 € », les formats et
 * tailles de fichiers (PDF, JPEG, 10 Mo, 300 dpi), les listes de pièces par
 * motif, le délai de réponse « d'un mois » à une demande de complément, la
 * décision implicite « après 4 mois », la maintenance « de 22 h à 6 h », les
 * heures creuses, les règles de mot de passe et les 10 questions de FAQ non
 * sourcées.
 */
const article: Article = {
  slug: "guide-anef-complet-2026-creer-compte-deposer-demande",
  titre: "Déposer et suivre sa demande de titre de séjour sur l'ANEF : le guide étape par étape",
  titreSeo: "Déposer sa demande de titre de séjour sur l'ANEF",
  resume: "Quand déposer, quelles étapes, comment suivre sa demande de titre de séjour sur l'ANEF, répondre à un complément et payer le timbre à la remise.",
  chapo: "Sur l'ANEF, vous déposez votre demande de titre de séjour en 5 ou 6 étapes, avec vos justificatifs et une e-photo, puis vous suivez son avancement depuis votre compte. Pour un renouvellement, déposez-la entre 4 mois et 2 mois avant la fin de validité de votre document. L'ANEF, c'est le site officiel du ministère de l'Intérieur pour les démarches de séjour.",
  publieLe: "2026-03-31",
  modifieLe: "2026-10-20",
  minutes: 7,
  theme: "déposer demande titre de séjour ANEF",
  motsCles: [
    "déposer demande ANEF",
    "demande titre de séjour ANEF",
    "suivi demande ANEF",
    "ANEF titre de séjour",
    "renouvellement titre séjour en ligne",
    "ANEF pièces justificatives",
    "ANEF demande de complément",
    "attestation de prolongation d'instruction",
    "ANEF instruction en cours",
    "ANEF titre de séjour disponible",
    "ANEF timbre fiscal",
    "ANEF changement d'adresse",
    "demande en ligne titre séjour",
    "comment utiliser ANEF",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    alt: "Écran d'ordinateur affichant des graphiques de suivi, sur un bureau",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  blocs: [
    {
      type: "h2",
      texte: "Avant de déposer : avez-vous un compte ANEF ?",
      id: "avant-de-deposer",
    },
    {
      type: "p",
      texte: "Pour déposer une demande, il faut un compte sur [administration-etrangers-en-france.interieur.gouv.fr](https://administration-etrangers-en-france.interieur.gouv.fr/). Vous en avez déjà un si vous avez déjà fait une démarche sur ce site ([FAQ de l'ANEF](https://administration-etrangers-en-france.interieur.gouv.fr/usagers/#/faq)). Sinon, vous le créez avec votre numéro étranger ou votre numéro de visa, et les dates de validité du document.",
    },
    {
      type: "p",
      texte: "Toutes les étapes sont détaillées dans notre guide [créer son compte ANEF](/articles/compte-anef-creer-2026-guide-pas-a-pas). Si la connexion ne marche pas, lisez [connexion impossible à l'ANEF](/articles/anef-mon-compte-connexion-probleme-solution-2026).",
    },
    {
      type: "h2",
      texte: "Quand déposer sa demande de titre de séjour ?",
      id: "quand-deposer",
    },
    {
      type: "p",
      texte: "Un titre de séjour, c'est la carte qui vous autorise à vivre en France. Pour les motifs de séjour accessibles en ligne, la [FAQ de l'ANEF](https://administration-etrangers-en-france.interieur.gouv.fr/usagers/#/faq) fixe une fenêtre précise :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "au plus tôt 4 mois avant la date de fin de validité de votre document de séjour.",
        "au plus tard 2 mois avant cette date.",
      ],
    },
    {
      type: "p",
      texte: "Déposer dans cette fenêtre compte. Pour un renouvellement, l'attestation de prolongation d'instruction est délivrée quand le dossier complet est déposé dans le délai imposé ([service-public, F36206](https://www.service-public.gouv.fr/particuliers/vosdroits/F36206)). Notre guide du [renouvellement de titre de séjour](/articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais) détaille ce cas.",
    },
    {
      type: "h2",
      texte: "Comment se passe le dépôt de la demande ?",
      id: "deposer-demande-anef",
    },
    {
      type: "p",
      texte: "Selon la FAQ de l'ANEF, le dépôt se fait en 5 ou 6 étapes, selon le motif choisi. Voici le parcours :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Sur la page d'accueil, choisissez « Je demande ou renouvelle un titre de séjour ».",
        "Choisissez votre motif de séjour. La liste des pièces justificatives s'affiche sur la page d'accueil de la demande : notez-la.",
        "Remplissez le formulaire et vérifiez les informations déjà inscrites.",
        "Joignez vos justificatifs et votre e-photo, une photo d'identité numérique avec un code.",
        "Validez. Une confirmation du dépôt arrive par e-mail et dans votre compte.",
      ],
    },
    {
      type: "p",
      texte: "Cette confirmation est l'attestation de dépôt. Attention : ce n'est pas un document de séjour, et elle ne vous autorise pas à travailler ([service-public, F36206](https://www.service-public.gouv.fr/particuliers/vosdroits/F36206)). Gardez-la quand même : elle prouve la date de votre demande.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Ne vous fiez pas à une liste de pièces trouvée ailleurs : seule celle affichée par l'ANEF pour votre motif fait foi.",
        "Un document manque ? La FAQ de l'ANEF permet de joindre un courrier écrit à la main, photographié ou scanné, qui explique votre situation.",
      ],
    },
    {
      type: "h2",
      texte: "Comment suivre sa demande sur l'ANEF ?",
      id: "suivi-demande",
    },
    {
      type: "p",
      texte: "Votre demande est instruite, c'est-à-dire étudiée, par la préfecture ou la sous-préfecture de votre adresse. La préfecture, c'est le service de l'État qui gère les titres de séjour dans votre département. Les délais de traitement varient d'une préfecture à l'autre (FAQ de l'ANEF).",
    },
    {
      type: "p",
      texte: "Pour suivre votre dossier, connectez-vous, cliquez sur votre nom en haut à droite, puis sur « Accéder à mon compte ». La section « Mes demandes en cours » affiche l'une de ces étapes :",
    },
    {
      type: "tableau",
      entetes: ["Statut affiché", "Ce qu'il veut dire"],
      lignes: [
        ["Dépôt de la demande", "Votre dépôt a bien été pris en compte."],
        ["Instruction en cours", "L'administration a pris connaissance de votre demande et la traite."],
        ["Décision prise", "Votre demande a été traitée et une décision a été prise."],
        ["Titre de séjour disponible", "En cas de décision favorable, le titre est fabriqué et prêt. Un SMS indique comment le retirer."],
      ],
      legende: "Source : FAQ de l'ANEF, « Comment savoir où en est le traitement de ma demande ? », lue le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Si vous ne recevez aucun SMS, l'ANEF conseille de consulter le site internet de votre préfecture de résidence pour savoir comment retirer le titre. Si le statut ne bouge plus depuis longtemps, lisez notre article [dossier ANEF bloqué ou en attente](/articles/anef-dossier-bloque-en-attente-2026-debloquer-relancer).",
    },
    {
      type: "h2",
      texte: "Que faire si la préfecture demande un complément ?",
      id: "demande-de-complement",
    },
    {
      type: "p",
      texte: "Si un justificatif manque ou ne convient pas, vous recevez un e-mail qui vous demande de vous connecter. Dans votre compte, cliquez sur la notification pour lire la demande. Vous pouvez garder le document ou le remplacer par un nouveau justificatif. Une fois le dossier complété et transmis, la préfecture reprend l'instruction ([FAQ de l'ANEF](https://administration-etrangers-en-france.interieur.gouv.fr/usagers/#/faq)).",
    },
    {
      type: "p",
      texte: "Répondez sans attendre : tant que la pièce manque, le dossier ne peut pas avancer.",
    },
    {
      type: "h2",
      texte: "Quels documents recevez-vous pendant l'attente ?",
      id: "attestations",
    },
    {
      type: "p",
      texte: "Service-public décrit trois attestations numériques, délivrées sur l'ANEF ([F36206](https://www.service-public.gouv.fr/particuliers/vosdroits/F36206)) :",
    },
    {
      type: "tableau",
      entetes: ["Attestation", "Quand", "Ce qu'elle prouve"],
      lignes: [
        ["Attestation de dépôt", "Tout de suite après le dépôt", "La date de la demande. Ce n'est pas un document de séjour."],
        ["Attestation de prolongation d'instruction (ADP)", "Si le dossier complet est déposé dans le délai", "Un séjour régulier. Valable 3 mois au plus, renouvelée tant qu'aucune décision n'est prise."],
        ["Attestation de décision favorable (ADF)", "Après une décision favorable", "Un séjour régulier, en attendant la carte."],
      ],
      legende: "Source : service-public, fiche F36206, lue le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Selon la FAQ de l'ANEF, si votre document actuel arrive en fin de validité, l'ADP est générée dès que le service a pris connaissance de votre demande. Elle apparaît dans votre espace personnel. Le droit de travailler avec l'ADP ou l'ADF dépend du titre demandé ou renouvelé (F36206). Notre article sur le [récépissé de titre de séjour](/articles/recepisse-titre-de-sejour-droits-duree-voyage) explique les droits pendant l'attente.",
    },
    {
      type: "h2",
      texte: "Quand payer le timbre fiscal, la taxe qui accompagne le titre ?",
      id: "payer-timbre-fiscal",
    },
    {
      type: "p",
      texte: "Vous ne payez pas au moment du dépôt. Le montant vous est demandé à la remise du titre. Le timbre fiscal, c'est la taxe due à l'État pour la carte. Selon la [FAQ de l'ANEF](https://administration-etrangers-en-france.interieur.gouv.fr/usagers/#/faq), vous l'achetez dans un bureau de tabac, dans un centre des impôts ou sur timbres.impots.gouv.fr.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Achetez un timbre électronique, avec un numéro à 16 chiffres. Les timbres papier ne marchent pas sur le portail.",
        "Vérifiez que le montant correspond à votre motif de séjour.",
        "Sans carte bancaire, vous pouvez payer en espèces au bureau de tabac ou au centre des impôts.",
      ],
    },
    {
      type: "p",
      texte: "Les montants sont dans notre article sur le [timbre fiscal du titre de séjour](/articles/hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances).",
    },
    {
      type: "h2",
      texte: "Que faire en cas de bug ou de changement d'adresse ?",
      id: "problemes-et-changements",
    },
    {
      type: "p",
      texte: "En cas de problème technique, appelez le centre de contact citoyens au **0 806 001 620**, ou écrivez par le formulaire « Nous contacter ». Joignez des captures d'écran avec l'adresse de la page, la date, l'heure et le message d'erreur. Sans solution, votre préfecture vous indique comment accéder à son point d'accueil numérique (FAQ de l'ANEF). Pour la page blanche ou la session expirée, voyez nos [solutions aux erreurs de l'ANEF](/articles/anef-erreurs-courantes-2026-page-blanche-session-expiree-500).",
    },
    {
      type: "p",
      texte: "Après un déménagement, passez par « Je déclare un changement de situation », puis « Domicile ». Une nouvelle carte, qui est payante, n'est pas obligatoire. Pour un titre de moins d'un an, la déclaration n'est pas obligatoire (FAQ de l'ANEF).",
    },
    {
      type: "p",
      texte: "Le 5 mai 2026, le Conseil d'État a relevé plusieurs limites de l'ANEF. Il a ordonné à l'État de permettre, sous six mois, de corriger un dossier, de signaler une erreur et d'ajouter des pièces. Sous douze mois, l'ANEF doit aussi accepter plusieurs demandes pour des motifs différents ([communiqué du Conseil d'État](https://www.conseil-etat.fr/content/download/238995/document/Communique%CC%81%20de%20presse%20-%20ANEF%20-%20web.pdf)).",
    },
    {
      type: "p",
      texte: "Pour votre cas personnel, adressez-vous à la préfecture, à un avocat ou à une association comme La Cimade. Si votre démarche mène à une carte pluriannuelle ou de résident, vérifiez en une minute si [l'examen civique vous concerne](/eligibilite-examen-civique).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Déposez entre 4 mois et 2 mois avant la fin de votre document. Gardez l'attestation de dépôt, surveillez « Mes demandes en cours » et répondez vite à un complément. Le timbre fiscal se paie à la remise du titre, jamais au dépôt.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quand faut-il déposer sa demande de titre de séjour sur l'ANEF ?",
      reponse: "La FAQ de l'ANEF fixe une fenêtre pour les motifs accessibles en ligne. Déposez au plus tôt 4 mois et au plus tard 2 mois avant la fin de validité de votre document. Pour un renouvellement, un dossier complet déposé dans le délai ouvre droit à une attestation de prolongation d'instruction.",
    },
    {
      question: "Comment suivre sa demande sur l'ANEF ?",
      reponse: "Connectez-vous, cliquez sur votre nom en haut à droite, puis sur « Accéder à mon compte ». La section « Mes demandes en cours » affiche le statut : dépôt de la demande, instruction en cours, décision prise, puis titre de séjour disponible. Un SMS vous dit ensuite comment retirer votre carte.",
    },
    {
      question: "Faut-il payer en ligne au moment du dépôt sur l'ANEF ?",
      reponse: "Non. Selon la FAQ de l'ANEF, le montant vous est demandé à la remise du titre de séjour. Vous achetez alors un timbre fiscal électronique à 16 chiffres, dans un bureau de tabac, un centre des impôts ou sur timbres.impots.gouv.fr. Les timbres papier ne sont pas acceptés sur le portail.",
    },
    {
      question: "Que veut dire « instruction en cours » sur l'ANEF ?",
      reponse: "Ce statut signifie que l'administration a pris connaissance de votre demande et la traite. Il faut attendre une décision ou la clôture de la demande. Les délais dépendent de la préfecture. Si votre document arrive en fin de validité, une attestation de prolongation d'instruction apparaît dans votre espace personnel.",
    },
  ],
  sources: [
    {
      titre: "ANEF : FAQ officielle, rubrique « Votre demande de titre de séjour »",
      url: "https://administration-etrangers-en-france.interieur.gouv.fr/usagers/#/faq",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "ANEF : page d'accueil et liste des démarches en ligne",
      url: "https://administration-etrangers-en-france.interieur.gouv.fr/",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : qu'est-ce qu'une attestation de demande de carte de séjour ? (F36206)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F36206",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Conseil d'État : communiqué du 5 mai 2026 sur l'accès à l'ANEF (décision n° 502860)",
      url: "https://www.conseil-etat.fr/content/download/238995/document/Communique%CC%81%20de%20presse%20-%20ANEF%20-%20web.pdf",
      type: "juridique",
      luLe: "2026-10-20",
    },
  ],
  aLireAussi: [
    {
      slug: "compte-anef-creer-2026-guide-pas-a-pas",
      ancre: "Créer son compte ANEF, étape par étape",
    },
    {
      slug: "recepisse-titre-de-sejour-droits-duree-voyage",
      ancre: "Comprendre le récépissé de titre de séjour",
    },
    {
      slug: "changement-statut-etudiant-salarie-2026-demarches-anef",
      ancre: "Changer de statut étudiant à salarié via l'ANEF",
    },
    {
      slug: "renouvellement-titre-sejour-2026-anef-prefecture-documents-delais",
      ancre: "Renouveler son titre de séjour",
    },
  ],
};

export default article;
