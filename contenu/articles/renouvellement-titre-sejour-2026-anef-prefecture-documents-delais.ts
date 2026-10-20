import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-2026-part3.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "renouvellement-titre-sejour-2026-anef-prefecture-documents-delais",
  titre: "Renouvellement titre de séjour 2026 : délais réels ANEF, 12 documents à fournir et 7 erreurs à éviter (guide pas-à-pas)",
  titreSeo: "Renouvellement titre de séjour 2026 : délais réels ANEF, 12 documents à fournir et 7 erreurs à éviter (guide pas-à-pas)",
  resume: "Tout pour renouveler votre titre de séjour sans erreur en 2026 : quand déposer (4 mois avant !), l'objectif des 55 jours du plan Nuñez face aux délais réels, liste des documents ANEF, récépissé et droits pendant l'instruction, et recours si le délai est dépassé.",
  chapo: "Le **renouvellement du titre de sejour en 2026** est une demarche critique pour tous les etrangers en France. Entre la plateforme **ANEF**, les delais de prefecture, les pieces justificatives et les risques de refus pour dossier incomplet, beaucoup de candidats perdent du temps et se retrouvent en situation administrative fragile. Ce guide pratique vous donne une methode claire: quand deposer, quels documents fournir, comment suivre son dossier, que faire en cas de bug ANEF ou de convocation tardive, et comment eviter les erreurs qui coutent cher.",
  publieLe: "2026-06-25",
  modifieLe: "2026-06-25",
  minutes: 17,
  theme: "renouvellement titre de sejour 2026",
  motsCles: [
    "renouvellement titre de sejour 2026",
    "ANEF renouvellement titre sejour",
    "delais prefecture titre de sejour",
    "documents renouvellement titre de sejour",
    "dossier ANEF bloque",
    "convocation prefecture titre de sejour",
    "erreurs renouvellement titre sejour",
    "comment renouveler titre de sejour en france",
    "guide etrangers prefecture france",
    "demarches administratives etrangers 2026",
    "delai renouvellement titre de sejour 2026",
    "delai titre de sejour 55 jours",
    "instruction nunez titre de sejour",
    "titre de sejour en retard que faire",
    "recepisse titre de sejour droits instruction",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
  },
  blocs: [
    { type: "h2", texte: "Quand renouveler son titre de sejour en 2026 ?", id: "quand-renouveler" },
    { type: "p", texte: "La regle prioritaire est d'anticiper." },
    { type: "p", texte: "**Delai recommande**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Deposez votre demande **entre 2 et 4 mois avant l'expiration** du titre.",
        "En cas de depassement, vous risquez des frais supplementaires et des blocages administratifs.",
      ],
    },
    { type: "p", texte: "**Pourquoi anticiper ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les rendez-vous en prefecture sont variables selon les departements.",
        "Certains dossiers ANEF demandent des pieces complementaires en cours d'instruction.",
        "Le temps de traitement peut depasser plusieurs semaines selon le motif de sejour.",
      ],
    },
    {
      type: "p",
      texte: "→ Mot-cle IA recherche frequente: \"quand renouveler titre de sejour ANEF 2026\".",
    },
    {
      type: "h2",
      texte: "Délais d'instruction en 2026 : l'objectif de 55 jours (plan Nuñez)",
      id: "delais-instruction-nunez-2026",
    },
    {
      type: "p",
      texte: "C'est la question qui revient le plus chez les usagers en attente : **combien de temps faut-il pour renouveler un titre de séjour en 2026 ?** Il faut distinguer le délai recommandé pour déposer, l'objectif annoncé par le ministère, et les délais réellement constatés sur le terrain.",
    },
    { type: "p", texte: "**Le délai pour déposer : 2 à 4 mois avant l'expiration**" },
    {
      type: "p",
      texte: "La règle de prudence ne change pas : déposez votre demande de renouvellement **entre 2 et 4 mois avant la date d'expiration** de votre titre. C'est ce que recommande la fiche [Service-Public.fr sur les titres de séjour (N110)](https://www.service-public.gouv.fr/particuliers/vosdroits/N110). Déposer dans cette fenêtre vous protège : tant que votre demande est en cours d'instruction, vous restez en situation régulière (voir la section suivante sur le récépissé).",
    },
    { type: "p", texte: "**L'objectif annoncé : ramener l'instruction à 55 jours**" },
    {
      type: "p",
      texte: "Le 10 avril 2026, le ministre de l'Intérieur **Laurent Nuñez** a adressé aux préfets une instruction visant à **désengorger les préfectures** sur le traitement des titres de séjour. L'objectif affiché : ramener le délai moyen d'instruction à **55 jours en moyenne**, contre **117 jours** l'année précédente, soit une volonté de « diviser par deux » le temps de traitement (selon les informations rapportées par [InfoMigrants](https://www.infomigrants.net/fr/post/70867/) et l'AFP, reprises par [Maire-info](http://www.maire-info.com/), service de l'Association des maires de France).",
    },
    {
      type: "encadre",
      texte: "⚠️ **À lire avec recul.** Les 55 jours sont un **objectif politique annoncé**, pas un délai légal opposable à l'administration. Aucun texte ne garantit à ce jour ce délai à un usager. Sur le terrain, les écarts restent importants (voir ci-dessous).",
      ton: "bleu",
    },
    {
      type: "p",
      texte: "Les mesures annoncées dans ce plan : le recrutement d'environ **500 vacataires** (hausse de plus de 20 % des effectifs dédiés), une enveloppe de **2 millions d'euros** d'heures supplémentaires pour des opérations de déstockage, des **attestations de prolongation d'instruction délivrées automatiquement** via l'ANEF (jusqu'à plusieurs mois), la fin de l'obligation de déclarer un changement d'adresse pour certains titulaires, et l'allongement de la validité des **empreintes biométriques de 5 à 10 ans**. Ce plan s'inscrit dans le contexte d'un stock de l'ordre de **930 000 dossiers** en attente signalé début 2026.",
    },
    { type: "p", texte: "**Les délais réels par préfecture : un écart fort avec l'objectif**" },
    {
      type: "p",
      texte: "La réalité reste très inégale selon les départements. D'après les chiffres cités par le ministère lui-même au moment du plan, **environ un tiers des préfectures** affichaient encore un délai d'instruction **supérieur à 120 jours** début 2026. Les préfectures les plus engorgées (Île-de-France notamment) dépassent largement la moyenne nationale, tandis que des départements moins peuplés instruisent plus vite.",
    },
    {
      type: "tableau",
      entetes: ["Repère 2026", "Valeur", "Source"],
      lignes: [
        [
          "Objectif annoncé d'instruction",
          "**55 jours** en moyenne",
          "Annonce ministérielle, avril 2026",
        ],
        ["Délai moyen constaté l'an passé", "**117 jours**", "Annonce ministérielle, avril 2026"],
        [
          "Préfectures encore au-dessus de 120 jours",
          "**≈ 1/3**",
          "Ministère de l'Intérieur, avril 2026",
        ],
      ],
    },
    {
      type: "encadre",
      texte: "Ces valeurs sont **indicatives** : elles proviennent d'annonces et de la presse, et non d'un barème officiel par préfecture. Considérez-les comme des ordres de grandeur, pas comme une promesse de délai pour votre dossier.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Récépissé, droits pendant l'instruction et recours si le délai est dépassé",
      id: "recepisse-droits-delai-depasse",
    },
    {
      type: "p",
      texte: "Le vrai enjeu d'un délai long n'est pas l'attente en soi : c'est d'éviter la **rupture de droits** (perte du droit au séjour, du droit au travail, des prestations) entre l'expiration de l'ancien titre et la délivrance du nouveau.",
    },
    { type: "p", texte: "**Le récépissé et l'attestation de prolongation : votre protection**" },
    {
      type: "p",
      texte: "Si vous avez déposé votre demande **avant l'expiration** de votre titre, la préfecture vous délivre, via l'ANEF, un **récépissé** ou une **attestation de prolongation de l'instruction**. Ce document :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "atteste que vous êtes **en situation régulière** pendant l'instruction ;",
        "maintient, dans la plupart des cas de **renouvellement**, votre **droit au travail** (vérifiez la mention portée sur le document) ;",
        "doit être conservé et présenté en cas de contrôle ou à votre employeur.",
      ],
    },
    {
      type: "p",
      texte: "Depuis le plan d'avril 2026, ces attestations de prolongation sont délivrées **automatiquement** dans l'espace ANEF et peuvent couvrir plusieurs mois, justement pour éviter les ruptures de droit pendant les pics d'instruction. Vérifiez régulièrement votre espace personnel et téléchargez l'attestation dès qu'elle est disponible. Pour le détail de vos droits, reportez-vous à la fiche [Service-Public.fr, Titres de séjour (N110)](https://www.service-public.gouv.fr/particuliers/vosdroits/N110).",
    },
    { type: "p", texte: "**Bon à savoir : le silence de l'administration**" },
    {
      type: "p",
      texte: "En matière de titre de séjour, le **silence gardé pendant 4 mois** sur une demande vaut en principe **décision implicite de rejet** (et non d'acceptation). Concrètement, passé ce délai sans réponse, vous pouvez considérer qu'une décision de refus est née et, le cas échéant, la contester. C'est une exception à la règle générale « silence vaut accord », d'où l'importance de suivre activement votre dossier.",
    },
    { type: "p", texte: "**Que faire si le délai est manifestement dépassé**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Relancer par écrit.** Adressez à la préfecture, via l'ANEF ou par courrier recommandé, une relance mentionnant votre **numéro de dossier**, la **date de dépôt** et l'urgence justifiée (emploi, voyage, prestations).",
        "**Saisir le Défenseur des droits.** Cette autorité indépendante peut être saisie **gratuitement** en cas de difficulté avec un service public. Voir [defenseurdesdroits.fr](https://www.defenseurdesdroits.fr/).",
        "**Engager un référé devant le tribunal administratif.** Lorsque l'attente devient excessive et porte atteinte à vos droits, un avocat peut introduire un **référé « mesures utiles »** (article L521-3 du code de justice administrative) pour enjoindre à la préfecture de statuer, voire un **référé-liberté** en cas d'urgence grave. Ces procédures sont rapides et souvent efficaces face à une inertie prolongée.",
      ],
    },
    {
      type: "p",
      texte: "→ En résumé : déposez tôt, téléchargez et conservez votre attestation de prolongation, suivez votre dossier, et n'hésitez pas à activer les voies de recours si l'attente met vos droits en danger.",
    },
    {
      type: "h2",
      texte: "Documents obligatoires pour un renouvellement ANEF reussi",
      id: "documents-obligatoires",
    },
    {
      type: "p",
      texte: "La liste varie selon votre statut (etudiant, salarie, vie privee et familiale, etc.), mais le socle est stable:",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Passeport valide",
        "Titre de sejour actuel",
        "Justificatif de domicile recent",
        "Photos d'identite conformes",
        "Justificatifs de ressources (bulletins, contrat, avis d'imposition)",
        "Pieces specifiques selon la categorie de titre",
      ],
    },
    { type: "p", texte: "**Bonnes pratiques documentaires**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Scans nets, lisibles et complets",
        "Noms de fichiers explicites (ex: \"passeport-page-identite.pdf\")",
        "Coherence des informations (nom, date de naissance, adresse)",
      ],
    },
    {
      type: "p",
      texte: "→ Mot-cle IA recherche frequente: \"liste documents renouvellement titre de sejour 2026\".",
    },
    {
      type: "h2",
      texte: "ANEF en erreur ou dossier bloque : solutions concretes",
      id: "bugs-anef-solutions",
    },
    { type: "p", texte: "Les difficultes techniques sont courantes. Voici les reflexes utiles:" },
    { type: "p", texte: "**Cas 1: impossible de valider le formulaire**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Testez un autre navigateur",
        "Verifiez la taille/format des pieces jointes",
        "Sauvegardez les captures d'ecran d'erreur",
      ],
    },
    { type: "p", texte: "**Cas 2: dossier \"en instruction\" tres longtemps**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Conservez la preuve de depot",
        "Contactez la prefecture via les canaux officiels",
        "Transmettez un message structure (numero dossier, date depot, urgence justifiee)",
      ],
    },
    { type: "p", texte: "**Cas 3: besoin d'une preuve de regularite**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Utilisez les documents justificatifs fournis dans votre espace ANEF",
        "Conservez toutes les preuves d'echange",
      ],
    },
    {
      type: "p",
      texte: "Ces elements sont essentiels pour proteger votre situation en cas de controle employeur ou administratif.",
    },
    {
      type: "h2",
      texte: "Convocation prefecture et remise du nouveau titre : comment se preparer",
      id: "convocation-prefecture",
    },
    { type: "p", texte: "Quand votre dossier avance, la prefecture peut vous convoquer." },
    {
      type: "liste",
      style: "puces",
      items: [
        "Verifiez regulierement votre espace ANEF et vos emails",
        "Preparez les originaux des pieces deja televersees",
        "Arrivez en avance avec une pochette complete",
        "Respectez strictement les consignes de la convocation",
      ],
    },
    { type: "p", texte: "Un oubli de document le jour J peut provoquer un report de remise." },
    {
      type: "h2",
      texte: "Les erreurs qui provoquent le plus de refus ou de retard",
      id: "erreurs-frequentes",
    },
    { type: "p", texte: "**1. Depot trop tardif**" },
    { type: "p", texte: "**2. Piece illisible ou incomplete**" },
    { type: "p", texte: "**3. Adresse non a jour**" },
    { type: "p", texte: "**4. Contradictions entre documents**" },
    { type: "p", texte: "**5. Absence de reponse aux demandes complementaires**" },
    {
      type: "p",
      texte: "La plupart des rejets evitables viennent d'une mauvaise preparation documentaire et non du fond du dossier.",
    },
    { type: "h2", texte: "Checklist finale avant soumission ANEF", id: "checklist-finale" },
    { type: "p", texte: "Avant de cliquer sur \"valider\":" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Toutes les pieces sont televersees et lisibles",
        "Les dates de validite sont coherentes",
        "Vos donnees personnelles sont exactes",
        "Vous avez sauvegarde la preuve de depot",
        "Vous avez note les prochaines etapes de suivi",
      ],
    },
    {
      type: "p",
      texte: "Cette checklist simple augmente fortement vos chances d'un traitement fluide.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le renouvellement de titre de sejour en France est avant tout une question d'anticipation, de preuves et de rigueur documentaire. En structurant votre dossier ANEF, en respectant les delais et en suivant activement votre instruction, vous reduisez les risques de retard et de blocage.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien de temps avant expiration faut-il renouveler un titre de sejour ?",
      reponse: "La fenetre la plus sure est entre 2 et 4 mois avant la date d expiration, selon la procedure applicable.",
    },
    {
      question: "Que faire si ANEF ne fonctionne pas ?",
      reponse: "Conservez des captures d ecran, retentez avec un autre navigateur et contactez la prefecture en fournissant numero de dossier et date de depot.",
    },
    {
      question: "Puis-je travailler pendant l instruction de mon renouvellement ?",
      reponse: "Cela depend du document provisoire et de votre situation. Conservez toujours les justificatifs emis pendant l instruction.",
    },
    {
      question: "Un dossier incomplet peut-il etre rejete directement ?",
      reponse: "Oui, un dossier incomplet ou incoherent peut entrainer un retard important ou un rejet.",
    },
  ],
  videos: [
    { id: "M6Jqed7F16I", titre: "Demarches administratives en France : reperes pratiques" },
    { id: "nXimESI0mQo", titre: "Comprendre ses droits et obligations en France" },
  ],
  sources: [
    {
      titre: "Service-Public.fr - Titre de sejour d un etranger en France",
      url: "https://www.service-public.fr/particuliers/vosdroits/N110",
      type: "officiel",
      description: "Portail officiel des procedures et conditions de sejour.",
    },
    {
      titre: "ANEF - Administration numerique des etrangers en France",
      url: "https://administration-etrangers-en-france.interieur.gouv.fr/",
      type: "officiel",
      description: "Plateforme officielle de depot et suivi des demandes.",
    },
    {
      titre: "Legifrance - CESEDA",
      url: "https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006070158/",
      type: "juridique",
      description: "Base legale du droit des etrangers et du sejour.",
    },
    {
      titre: "InfoMigrants - Plan de réduction des délais de traitement des titres de séjour (avril 2026)",
      url: "https://www.infomigrants.net/fr/post/70867/",
      type: "article",
      description: "Reprise de l'annonce du ministre de l'Intérieur Laurent Nuñez (10 avril 2026) : objectif de 55 jours d'instruction en moyenne contre 117 l'an passé, recrutements et mesures de simplification. Objectif annoncé, non opposable à l'administration.",
    },
    {
      titre: "Défenseur des droits - Saisir l'institution en cas de difficulté avec un service public",
      url: "https://www.defenseurdesdroits.fr/",
      type: "officiel",
      description: "Autorité indépendante pouvant être saisie gratuitement, notamment en cas de délai anormalement long de la préfecture.",
    },
  ],
  aLireAussi: [
    {
      slug: "prix-test-civique-2026-cout-tarif-titre-sejour-prefecture",
      ancre: "Prix du test civique et tarifs des titres de séjour",
    },
    {
      slug: "refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france",
      ancre: "Que faire en cas de refus ou OQTF ?",
    },
    {
      slug: "niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation",
      ancre: "Niveaux de français requis (A2, B1, B2)",
    },
    {
      slug: "titres-de-sejour-france-guide-complet-2026",
      ancre: "Guide complet des titres de séjour en France",
    },
  ],
};

export default article;
