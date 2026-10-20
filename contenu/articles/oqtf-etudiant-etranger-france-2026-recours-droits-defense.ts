import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-batch-mai-2026-3.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/oqtf-etudiant-etranger-france-2026-recours-droits-defense`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "oqtf-etudiant-etranger-france-2026-recours-droits-defense",
  titre: "OQTF étudiant étranger en France 2026 : recours, droits, délais (guide juridique complet)",
  titreSeo: "OQTF étudiant étranger en France 2026 : recours, droits, délais (guide juridique complet)",
  resume: "Vous êtes étudiant étranger et vous recevez une OQTF ? Vous avez 48h pour réagir. 7 motifs de recours en 2026, procédure devant le tribunal administratif, aide juridictionnelle, et stratégie pour obtenir l'annulation ou un nouveau titre.",
  chapo: "Vous êtes étudiant étranger en France et vous venez de recevoir une **OQTF (Obligation de Quitter le Territoire Français)** ? Ne paniquez pas, mais agissez **immédiatement**. Vous avez **48 heures** pour saisir le tribunal administratif en référé liberté, et **30 jours maximum** pour le recours au fond. Au-delà, l'OQTF devient quasi définitive et vous risquez l'éloignement forcé. La bonne nouvelle : en 2026, **7 motifs juridiques solides** permettent d'obtenir l'annulation de l'OQTF ou la délivrance d'un nouveau titre. Le taux de succès devant le tribunal administratif pour les OQTF étudiants atteint **35 à 45%** selon les juridictions et la qualité du dossier, bien plus élevé que pour les autres types d'OQTF. Ce guide juridique complet 2026 détaille les délais critiques, les 7 motifs de recours, la procédure devant le tribunal administratif, l'aide juridictionnelle gratuite, et les voies de régularisation alternatives. Lisez attentivement : chaque heure compte.",
  publieLe: "2026-05-09",
  modifieLe: "2026-05-09",
  minutes: 17,
  theme: "OQTF étudiant 2026",
  motsCles: [
    "OQTF étudiant 2026",
    "recours OQTF étudiant tribunal administratif",
    "OQTF refus renouvellement étudiant",
    "48 heures recours OQTF",
    "référé liberté OQTF",
    "aide juridictionnelle OQTF",
    "OQTF échec universitaire",
    "régularisation étudiant OQTF",
    "CESEDA L611 OQTF",
    "OQTF avocat gratuit",
    "OQTF article 8 CEDH",
    "défense OQTF étudiant",
    "changement statut étudiant OQTF",
    "annulation OQTF tribunal",
    "OQTF étudiant droits 2026",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce qu'une OQTF étudiant et pourquoi vous l'avez reçue ?",
      id: "qu-est-ce-qu-oqtf-etudiant",
    },
    {
      type: "p",
      texte: "L'**OQTF (Obligation de Quitter le Territoire Français)** est une décision préfectorale prise sur le fondement des articles **L611-1 et suivants du CESEDA**. Elle ordonne au ressortissant étranger de quitter la France dans un délai de 30 jours (parfois sans délai en cas de menace à l'ordre public). Pour les étudiants étrangers, **3 motifs** principaux conduisent à une OQTF en 2026.",
    },
    { type: "p", texte: "**Motif n°1 : Refus de renouvellement du titre étudiant**" },
    {
      type: "p",
      texte: "C'est la cause **la plus fréquente** (environ 60% des OQTF étudiants en 2026). La préfecture refuse de renouveler votre carte étudiante pour l'un de ces motifs :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Échec universitaire** : pas de réussite aux examens ou progression insuffisante (article R435-9 CESEDA)",
        "**Absence de réinscription** dans un établissement reconnu",
        "**Ressources insuffisantes** : la préfecture demande **615 € / mois minimum** en 2026 (allocation universitaire de référence)",
        "**Défaut d'assiduité** signalé par l'université",
        "**Changement non autorisé** d'établissement ou de filière dans des conditions douteuses",
      ],
    },
    { type: "p", texte: "**Motif n°2 : Sortie du dispositif étudiant**" },
    { type: "p", texte: "Vous étiez étudiant et :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous avez fini votre cursus mais n'avez pas obtenu de titre alternatif (APS, salarié, etc.)",
        "Vous avez interrompu vos études sans changement de statut",
        "Vous avez dépassé la durée maximale autorisée (généralement 8 ans pour un cursus complet)",
      ],
    },
    { type: "p", texte: "**Motif n°3 : Séjour irrégulier après expiration du titre**" },
    {
      type: "p",
      texte: "Si votre titre étudiant a expiré et que vous n'avez pas demandé de renouvellement à temps (2 mois avant l'expiration), vous êtes en séjour irrégulier. La préfecture peut alors prendre une OQTF directe, parfois sans délai.",
    },
    { type: "p", texte: "**Les 3 types d'OQTF possibles**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**OQTF avec délai de 30 jours** : la plus fréquente pour les étudiants. Vous avez 30 jours pour partir et 30 jours pour faire un recours au fond.",
        "**OQTF sans délai (article L612-2 CESEDA)** : applicable en cas de menace à l'ordre public ou de risque de fuite. Vous avez **48 heures** pour faire un référé liberté !",
        "**Interdiction de retour sur le territoire français (IRTF)** : peut être ajoutée pour 1 à 5 ans, vous interdit de revenir en France/Schengen.",
      ],
    },
    { type: "p", texte: "**Bon réflexe immédiat**" },
    { type: "p", texte: "Dès réception de l'OQTF :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Notez la **date exacte** de notification (cachet, recommandé, signature)",
        "Identifiez le **type d'OQTF** : avec ou sans délai ?",
        "Prenez rendez-vous **sous 48 heures** avec un avocat ou une association spécialisée (la Cimade, GISTI, syndicat étudiant)",
        "Préparez votre dossier de recours (voir sections suivantes)",
      ],
    },
    {
      type: "h2",
      texte: "Les délais critiques : 48 heures pour le référé, 30 jours pour le fond",
      id: "delais-critiques",
    },
    {
      type: "p",
      texte: "Le droit français des étrangers fonctionne avec des **délais très courts et très stricts**. Une heure de retard peut rendre votre recours irrecevable. Voici les délais à connaître absolument en 2026.",
    },
    { type: "p", texte: "**Délai n°1-48 heures pour le référé liberté (OQTF sans délai uniquement)**" },
    {
      type: "p",
      texte: "Si l'OQTF est notifiée **sans délai** (souvent à la suite d'un contrôle d'identité ou d'une garde à vue), vous avez **48 heures** pour saisir le tribunal administratif en **référé liberté** (article L521-2 du code de justice administrative). Le juge se prononce dans **72 heures** sur la suspension de l'éloignement.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Recours accepté → suspension de l'OQTF jusqu'au jugement au fond",
        "Recours rejeté → vous pouvez encore faire un recours au fond mais sans suspension automatique",
      ],
    },
    { type: "p", texte: "**Délai n°2-30 jours pour le recours au fond (OQTF avec délai)**" },
    {
      type: "p",
      texte: "Pour les OQTF classiques avec délai de départ volontaire de 30 jours, vous avez **30 jours à compter de la notification** pour saisir le tribunal administratif d'un **recours au fond contre l'OQTF**. Ce recours est **suspensif** : vous ne pouvez pas être éloigné tant que le juge n'a pas statué.",
    },
    { type: "p", texte: "**Délai n°3-48 heures pour le contentieux d'éloignement (placement en CRA)**" },
    {
      type: "p",
      texte: "Si vous êtes placé en **Centre de Rétention Administrative (CRA)** ou assigné à résidence, vous avez **48 heures** pour contester :",
    },
    {
      type: "liste",
      style: "puces",
      items: ["Le placement en CRA", "Et l'OQTF si elle n'a pas encore été contestée"],
    },
    { type: "p", texte: "**Délai n°4-1 mois pour faire appel**" },
    {
      type: "p",
      texte: "Après le jugement du tribunal administratif, vous avez **1 mois** pour faire appel devant la Cour administrative d'appel. L'appel n'est généralement **pas suspensif** (sauf demande spéciale).",
    },
    { type: "p", texte: "**Tableau récapitulatif des délais 2026**" },
    {
      type: "tableau",
      entetes: ["Action", "Délai", "Tribunal", "Effet"],
      lignes: [
        ["Référé liberté (OQTF sans délai)", "48h", "TA", "Suspensif"],
        ["Recours au fond (OQTF avec délai)", "30 jours", "TA", "Suspensif"],
        ["Contestation placement CRA", "48h", "TA", "Suspensif"],
        ["Appel après jugement TA", "1 mois", "CAA", "Non suspensif"],
        ["Pourvoi en cassation", "2 mois", "Conseil d'État", "Non suspensif"],
      ],
    },
    { type: "p", texte: "**Comment compter les délais ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le délai commence à courir **le lendemain** de la notification (jour J = jour de notification, le délai court à partir du J+1)",
        "Si le dernier jour est un samedi, dimanche ou jour férié, le délai est prorogé au **premier jour ouvrable suivant**",
        "Pour le référé liberté : compter en heures, pas en jours",
      ],
    },
    {
      type: "p",
      texte: "**Conseil critique** : ne JAMAIS attendre le dernier jour. Si vous recevez une OQTF un vendredi soir, traitez-la le samedi matin. Les services d'aide juridictionnelle sont saturés le lundi.",
    },
    {
      type: "h2",
      texte: "Les 7 motifs juridiques de recours qui font annuler l'OQTF",
      id: "sept-motifs-recours",
    },
    {
      type: "p",
      texte: "Le tribunal administratif annule régulièrement les OQTF étudiants pour des motifs juridiques précis. Voici les **7 motifs principaux** qui fonctionnent en 2026, classés par taux de succès.",
    },
    { type: "p", texte: "**Motif n°1 : Vice de procédure (taux de succès : 60-70%)**" },
    { type: "p", texte: "Le motif le plus efficace. La préfecture commet régulièrement des erreurs :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "OQTF non motivée ou motivation insuffisante (article L211-2 CRPA)",
        "Absence de signature du préfet ou délégation invalide",
        "Défaut d'examen sérieux et particulier de la situation",
        "Notification irrégulière (mauvaise adresse, défaut de traduction si nécessaire)",
        "Absence d'avis de la commission du titre de séjour quand requis",
      ],
    },
    { type: "p", texte: "**Motif n°2 : Droit à l'instruction et au cursus (taux de succès : 40-50%)**" },
    {
      type: "p",
      texte: "Si vous êtes en cours de cursus universitaire, vous avez le droit à la continuité de la formation :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Article L412-1 CESEDA** : droit au séjour pendant la durée des études",
        "Convention de Lisbonne sur la reconnaissance des diplômes",
        "Si vous êtes inscrit à l'examen de fin d'année à venir, c'est un argument fort",
        "Échec ponctuel **n'équivaut pas** à abandon : la jurisprudence reconnaît le droit à un redoublement",
      ],
    },
    {
      type: "p",
      texte: "**Motif n°3 : Vie privée et familiale (article 8 CEDH) (taux de succès : 35-45%)**",
    },
    { type: "p", texte: "Si vous avez des liens forts en France :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Conjoint français ou en situation régulière",
        "Enfants français ou scolarisés en France",
        "Famille proche (frères, sœurs, parents) en situation régulière",
        "Communauté d'amis, engagement associatif, vie sociale développée",
        "Article 8 de la **Convention européenne des droits de l'homme** : droit au respect de la vie privée et familiale",
      ],
    },
    { type: "p", texte: "**Motif n°4 : Erreur manifeste d'appréciation (taux de succès : 30-40%)**" },
    { type: "p", texte: "La préfecture a manifestement mal apprécié votre situation :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Ressources jugées insuffisantes alors qu'elles dépassent le seuil",
        "Échec universitaire considéré comme non sérieux alors qu'il est dû à une maladie, un deuil, etc.",
        "Décision disproportionnée par rapport aux faits",
      ],
    },
    {
      type: "p",
      texte: "**Motif n°5 : Garanties procédurales du droit de l'UE (taux de succès : 30-40%)**",
    },
    { type: "p", texte: "Le droit européen offre des protections supplémentaires :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Directive 2008/115/CE \"retour\"** : exigences de procédure équitable",
        "**Article 41 de la Charte des droits fondamentaux de l'UE** : droit d'être entendu avant toute décision défavorable",
        "Si la préfecture ne vous a pas convoqué pour vous entendre : argument fort",
      ],
    },
    {
      type: "p",
      texte: "**Motif n°6 : Risques en cas de retour (article 3 CEDH) (taux de succès : 25-35%)**",
    },
    { type: "p", texte: "Si vous risquez des traitements inhumains ou dégradants dans votre pays :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Conflit armé",
        "Persécutions politiques, religieuses ou ethniques",
        "Risque pour votre santé (maladie incurable non traitable au pays)",
        "Article 3 CEDH (interdiction des traitements inhumains)",
      ],
    },
    {
      type: "p",
      texte: "**Motif n°7 : Cas particulier : maladie grave (article L425-9 CESEDA) (taux de succès : 50-60% si dossier solide)**",
    },
    {
      type: "p",
      texte: "Si vous souffrez d'une pathologie grave nécessitant un traitement non disponible dans votre pays d'origine, vous pouvez prétendre à un **titre étranger malade**. Le dossier médical doit être solide et examiné par le **collège médical de l'OFII**.",
    },
    { type: "p", texte: "**Combinez plusieurs motifs**" },
    {
      type: "p",
      texte: "La meilleure stratégie est de **combiner plusieurs motifs** dans un même recours. Par exemple : vice de procédure + droit à l'instruction + vie privée familiale. Cela maximise les chances qu'au moins un argument convainque le juge.",
    },
    {
      type: "h2",
      texte: "Procédure devant le tribunal administratif : référé et fond",
      id: "procedure-tribunal",
    },
    {
      type: "p",
      texte: "Le **tribunal administratif (TA)** territorialement compétent est celui du lieu où se situe la préfecture qui a pris la décision. Voici la procédure pratique en 2026.",
    },
    { type: "p", texte: "**Procédure 1 : Le référé liberté (OQTF sans délai)**" },
    {
      type: "p",
      texte: "Saisine du TA via la plateforme **Télérecours citoyens** ([www.telerecours.conseil-etat.fr](https://www.telerecours.conseil-etat.fr)) ou par dépôt papier au greffe.",
    },
    { type: "p", texte: "Pièces à joindre :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "OQTF contestée (copie)",
        "Récépissé étudiant ou ancienne carte",
        "Certificat de scolarité de l'année en cours",
        "Bulletins de notes",
        "Justificatifs de ressources",
        "Attestations de proches (vie en France, famille, amis)",
        "Tout document utile pour les motifs invoqués",
      ],
    },
    {
      type: "p",
      texte: "**Le juge des référés statue en 72 heures maximum**. Audience souvent en visio-conférence ou par écrit. Décision communiquée par email/courrier.",
    },
    { type: "p", texte: "**Procédure 2 : Le recours au fond (OQTF avec délai)**" },
    { type: "p", texte: "Saisine du TA dans les **30 jours** :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Requête écrite (modèle disponible sur les sites des associations comme la Cimade)",
        "Mêmes pièces que pour le référé",
        "Mémoire détaillé exposant les **7 motifs de recours** que vous invoquez",
      ],
    },
    {
      type: "p",
      texte: "**Audience publique**, généralement **2 à 6 mois** après le dépôt en 2026. Le juge examine **le fond** : annulation possible de l'OQTF avec injonction à la préfecture de réexaminer ou de délivrer un titre.",
    },
    { type: "p", texte: "**Procédure 3 : Le recours en cas de placement en CRA**" },
    {
      type: "p",
      texte: "Si vous êtes placé en Centre de Rétention Administrative, vous avez 48 heures pour contester. Procédure express : audience sous 96 heures maximum, décision dans la foulée.",
    },
    { type: "p", texte: "**Audience pratique**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'audience dure **15 à 30 minutes** pour les OQTF étudiants",
        "Vous pouvez parler vous-même OU être représenté par un avocat",
        "La préfecture est généralement représentée par un agent",
        "Le juge pose des questions précises",
        "Décision rendue **sous 1 à 7 jours** en moyenne",
      ],
    },
    { type: "p", texte: "**Si vous gagnez**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'OQTF est **annulée**",
        "Le juge peut **enjoindre à la préfecture** de vous délivrer un titre de séjour ou de réexaminer votre situation",
        "Vous obtenez un **récépissé** dans les jours qui suivent",
        "Vous pouvez demander le **paiement des frais d'avocat** (article L761-1 CJA, environ 1500-2500 €)",
      ],
    },
    { type: "p", texte: "**Si vous perdez**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Faites appel sous 1 mois devant la Cour administrative d'appel",
        "Préparez un plan B : régularisation par autre voie, retour digne avec préparation",
      ],
    },
    {
      type: "p",
      texte: "Pour aller plus loin sur la régularisation, voir notre [article sur le changement de statut étudiant vers salarié](/articles/changement-statut-etudiant-salarie-2026-demarches-anef).",
    },
    {
      type: "h2",
      texte: "L'aide juridictionnelle gratuite : comment l'obtenir en 24 heures",
      id: "aide-juridictionnelle",
    },
    {
      type: "p",
      texte: "Vous n'avez pas les moyens de payer un avocat ? L'**aide juridictionnelle (AJ)** vous permet d'avoir un avocat **gratuitement** pour défendre votre OQTF. C'est un droit, et la procédure est plus rapide qu'on ne le pense en 2026.",
    },
    { type: "p", texte: "**Conditions d'éligibilité 2026**" },
    {
      type: "p",
      texte: "L'aide juridictionnelle totale (gratuité 100%) est accordée si vos ressources sont **inférieures à environ 1 100 € / mois** (seuils 2026). Elle est partielle (prise en charge 25 à 90%) jusqu'à environ 1 700 € / mois. Au-dessus, vous payez l'avocat de votre poche.",
    },
    {
      type: "p",
      texte: "Comme étudiant étranger, vos ressources sont généralement très basses → **vous êtes presque toujours éligible** à l'AJ totale.",
    },
    { type: "p", texte: "**Pièces à fournir**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Formulaire CERFA n° 16146*03 (rempli)",
        "Pièce d'identité (passeport)",
        "Avis d'imposition (ou attestation de non-imposition)",
        "3 derniers relevés de compte bancaire",
        "Justificatif de ressources (allocations, bourses, etc.)",
        "Justificatif de domicile",
        "L'OQTF que vous contestez (copie)",
      ],
    },
    { type: "p", texte: "**Procédure d'urgence pour OQTF (procédure dite \"à bref délai\")**" },
    {
      type: "p",
      texte: "Pour les OQTF avec délai de 48h ou 30 jours, l'aide juridictionnelle bénéficie d'une **procédure d'urgence** :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Dépôt du dossier au **bureau d'aide juridictionnelle** du tribunal compétent",
        "Décision rendue en **24 à 72 heures** maximum",
        "L'avocat est désigné automatiquement et peut commencer immédiatement",
      ],
    },
    { type: "p", texte: "**Comment trouver un avocat ?**" },
    { type: "p", texte: "3 options :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Demander la désignation d'office** : le bâtonnier vous attribue un avocat. Rapide mais qualité variable.",
        "**Choisir vous-même un avocat spécialisé** en droit des étrangers qui accepte l'AJ. Vérifiez sur le site de l'Ordre des avocats de votre département.",
        "**Passer par une association** : la Cimade, GISTI, syndicat étudiant (UNEF, FAGE, FSE), Médecins du Monde. Elles ont des avocats partenaires qui acceptent l'AJ.",
      ],
    },
    { type: "p", texte: "**Que paie l'aide juridictionnelle ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Honoraires de l'avocat (intégralement si AJ totale)",
        "Frais d'huissier",
        "Expertises éventuelles",
        "Frais de procédure devant le TA",
      ],
    },
    { type: "p", texte: "**Ce qu'elle ne paie PAS**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les frais d'avocat de la partie adverse (la préfecture) si vous perdez et que le juge vous y condamne (rare)",
        "Vos frais personnels (transport, hébergement)",
      ],
    },
    {
      type: "p",
      texte: "**Conseil pratique** : ne dépendez pas uniquement de l'avocat désigné d'office. Trouvez si possible un avocat spécialisé en **droit des étrangers** (mention \"droit des étrangers\" sur sa fiche professionnelle). Le gain de chances peut être considérable.",
    },
    {
      type: "h2",
      texte: "Régularisation possible : changement de statut, vie privée, salarié",
      id: "regularisation-possible",
    },
    {
      type: "p",
      texte: "Même avec une OQTF, plusieurs voies de **régularisation** sont possibles en 2026, parfois en parallèle du recours contentieux. Voici les principales.",
    },
    { type: "p", texte: "**Voie 1 : Changement de statut \"salarié\"**" },
    {
      type: "p",
      texte: "Si vous avez **terminé vos études** et obtenu un **CDI ou CDD long** (au moins 12 mois) en France, vous pouvez demander un **changement de statut \"salarié\"** sur l'ANEF, même avec une OQTF en cours.",
    },
    { type: "p", texte: "Conditions :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Diplôme français ou européen reconnu",
        "Salaire au moins égal à 1,5 SMIC brut (environ **2 700 € brut / mois en 2026**)",
        "Adéquation entre la formation et l'emploi",
        "Avis favorable de la DREETS (ex-Direccte)",
      ],
    },
    { type: "p", texte: "**Voie 2 : Autorisation Provisoire de Séjour (APS) \"recherche d'emploi\"**" },
    {
      type: "p",
      texte: "Article **L422-10 CESEDA** : si vous avez obtenu un **diplôme au moins équivalent au master** en France, vous pouvez demander une APS de **12 mois renouvelable une fois**, vous permettant de chercher un emploi ou créer une entreprise.",
    },
    { type: "p", texte: "Conditions :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Diplôme master, doctorat, école d'ingénieur, école de commerce reconnue",
        "Demande à faire **avant l'expiration** du titre étudiant (mais possible si OQTF récente)",
        "Pas de condition de salaire ou d'embauche immédiate",
      ],
    },
    { type: "p", texte: "**Voie 3 : Titre \"passeport talent\"**" },
    {
      type: "p",
      texte: "Si vous avez un projet entrepreneurial sérieux, un contrat avec une entreprise innovante, ou un statut de chercheur, le **passeport talent** peut être une excellente alternative au titre étudiant. Voir notre guide complet du passeport talent en France 2026.",
    },
    { type: "p", texte: "**Voie 4 : Titre \"vie privée et familiale\"**" },
    { type: "p", texte: "Si vous avez :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Un conjoint français ou en situation régulière (mariage, PACS, ou concubinage de plus de 3 ans)",
        "Des enfants français ou scolarisés en France",
        "Des liens familiaux forts en France",
        "Plus de 10 ans de présence en France (article L423-23 CESEDA)",
      ],
    },
    {
      type: "p",
      texte: "Vous pouvez demander un titre \"vie privée et familiale\" en parallèle du recours contre l'OQTF.",
    },
    { type: "p", texte: "**Voie 5 : Titre \"étranger malade\"**" },
    {
      type: "p",
      texte: "Article **L425-9 CESEDA** : si vous souffrez d'une pathologie grave nécessitant un traitement non disponible dans votre pays d'origine, et que votre situation médicale est attestée par le **collège médical de l'OFII**, vous pouvez obtenir un titre \"étranger malade\".",
    },
    { type: "p", texte: "**Voie 6 : Réinscription universitaire stratégique**" },
    {
      type: "p",
      texte: "Si l'OQTF est due à un échec universitaire, vous pouvez **vous réinscrire dans une autre filière ou un autre établissement** pour montrer votre engagement. Cela peut aider votre recours et faciliter l'obtention d'un nouveau titre étudiant.",
    },
    { type: "p", texte: "**Voie 7 : Régularisation \"circulaire Valls\" (2012, toujours appliquée)**" },
    {
      type: "p",
      texte: "Pour les étudiants présents en France depuis plus de 5 ans, exerçant un emploi (même partiel), avec un projet d'intégration solide, une régularisation au cas par cas est possible. Démarche directe auprès de la préfecture, sans passer par le tribunal.",
    },
    { type: "p", texte: "**Stratégie : combinez recours et régularisation**" },
    { type: "p", texte: "L'idéal est de **mener en parallèle** :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Le **recours contentieux** contre l'OQTF (suspensif)",
        "Une **demande de titre alternatif** (changement de statut, APS, vie privée familiale, etc.)",
      ],
    },
    {
      type: "p",
      texte: "Si le juge annule l'OQTF, vous bénéficiez de l'annulation. Si la préfecture délivre le nouveau titre, le recours devient sans objet. Dans les deux cas, vous régularisez votre situation.",
    },
    {
      type: "h2",
      texte: "Si tout échoue : retour digne et alternatives à long terme",
      id: "si-echec-retour-digne",
    },
    {
      type: "p",
      texte: "Si toutes les voies de recours et de régularisation échouent, il est essentiel d'envisager un **retour digne** dans votre pays d'origine, plutôt que de basculer dans la clandestinité (situation très précaire et dangereuse).",
    },
    { type: "p", texte: "**L'aide au retour volontaire de l'OFII**" },
    {
      type: "p",
      texte: "L'**Office Français de l'Immigration et de l'Intégration (OFII)** propose une **aide au retour volontaire (ARV)** :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Billet d'avion gratuit jusqu'à votre pays d'origine",
        "Allocation de retour : **300 € par adulte, 100 € par enfant** en 2026",
        "Possibilité d'aide à la réinsertion (jusqu'à **1 200 € par adulte**) pour un projet de retour (formation, création d'entreprise, etc.)",
      ],
    },
    { type: "p", texte: "Conditions :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pas de menace à l'ordre public",
        "Accepter de signer un engagement de retour",
        "Présence en France au moins 3 mois",
      ],
    },
    {
      type: "p",
      texte: "Pour faire la demande : direction territoriale de l'OFII de votre département.",
    },
    { type: "p", texte: "**L'aide à la réinsertion économique**" },
    { type: "p", texte: "Pour un retour avec projet professionnel, l'OFII propose :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Aide à la réinsertion par l'emploi (ARE)** : jusqu'à 2 500 € pour un projet professionnel solide",
        "**Aide à la réinsertion par la création d'entreprise** : jusqu'à 6 300 € selon le pays et le projet",
      ],
    },
    { type: "p", texte: "**Préparer un retour digne**" },
    { type: "p", texte: "Avant le départ :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Régler tous vos comptes (dettes, abonnements, baux)",
        "Récupérer tous vos diplômes français (légalisation et apostille pour utilisation à l'étranger)",
        "Demander une **attestation de fin de scolarité** auprès de votre université",
        "Récupérer vos cotisations URSSAF et retraite éventuelles (cotisations + assurance retraite)",
        "Demander un certificat de retour à votre consulat français",
      ],
    },
    { type: "p", texte: "**Alternatives à long terme : revenir en France légalement**" },
    {
      type: "p",
      texte: "Un retour ne signifie pas un échec définitif. Vous pouvez **revenir en France** plus tard :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Avec un nouveau visa étudiant (master, doctorat) si vous trouvez une admission",
        "Avec un visa salarié si une entreprise française vous embauche",
        "Avec un passeport talent si votre profil est qualifié",
        "Avec un visa de regroupement familial si vous épousez un Français ou un titulaire de titre",
      ],
    },
    { type: "p", texte: "**Attention aux IRTF (Interdictions de Retour)**" },
    {
      type: "p",
      texte: "Si votre OQTF est assortie d'une **Interdiction de Retour sur le Territoire Français (IRTF)**, vous ne pouvez pas revenir en France ni dans l'espace Schengen pendant 1 à 5 ans. Une demande de relevé d'IRTF est possible à l'expiration du délai, ou plus tôt par voie de recours.",
    },
    { type: "p", texte: "**Le rôle des associations**" },
    { type: "p", texte: "Plusieurs associations peuvent vous accompagner même après un retour :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**La Cimade** (cimade.org) : accompagnement juridique avant et après le retour",
        "**GISTI** (gisti.org) : conseils et publications",
        "**Forum Réfugiés** : aide aux personnes en situation précaire",
        "Syndicats étudiants (UNEF, FAGE, FSE) : soutien spécifique aux étudiants étrangers",
      ],
    },
    {
      type: "p",
      texte: "**Conseil final** : ne sous-estimez jamais la valeur d'une **régularisation réussie**. Si vous parvenez à obtenir un nouveau titre, capitalisez dessus : stabilisez votre emploi, apprenez encore mieux le français, intégrez-vous à la vie locale. Dans 5 ans, vous pourrez prétendre à la **naturalisation française**, qui demande un test civique exigeant. Préparez-vous dès aujourd'hui sur des plateformes spécialisées avec QCM et simulations chronométrées.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Recevoir une **OQTF en tant qu'étudiant étranger** est un choc, mais ce n'est **jamais une fin de partie**. En 2026, le droit français vous offre **48 heures pour réagir en référé liberté**, **30 jours pour le recours au fond**, et **7 motifs juridiques solides** pour obtenir l'annulation. Le taux de succès devant le tribunal administratif atteint 35 à 45% pour les OQTF étudiantes, bien plus élevé que pour les autres profils. La clé : **agir vite**, déposer une demande d'**aide juridictionnelle gratuite** dans les premières 24 heures, et **combiner recours contentieux et demande de régularisation** (changement de statut salarié, APS recherche d'emploi, passeport talent, vie privée familiale). Si malgré tout l'éloignement devient inévitable, choisissez le **retour volontaire OFII** (billet payé, allocation de réinsertion) plutôt que la clandestinité. Et surtout, gardez l'espoir : un retour préparé permet souvent de revenir en France légalement quelques années plus tard, avec un meilleur statut. Si vous régularisez votre situation et restez en France, pensez **à long terme** : dans 5 ans, vous pourrez demander la **naturalisation française**. Le test civique est devenu en 2026 le principal facteur de blocage (1 candidat sur 3 échoue). Inscrivez-vous gratuitement sur [testciviquefrance.fr](/signup) pour préparer dès aujourd'hui votre future demande de nationalité, avec 1500+ questions officielles, simulations chronométrées et fiches de révision. Transformez l'épreuve d'aujourd'hui en ressort de votre projet d'avenir.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "J'ai reçu une OQTF il y a 2 jours, est-il trop tard pour faire un recours ?",
      reponse: "Non, vous avez encore le temps. Si l'OQTF est avec délai de 30 jours, vous avez encore 28 jours pour saisir le tribunal administratif au fond. Si elle est sans délai, vous avez normalement 48h pour le référé, mais après ce délai un recours au fond reste possible (sans suspension automatique). Contactez immédiatement un avocat ou une association comme la Cimade.",
    },
    {
      question: "Puis-je continuer mes études pendant le recours contre l'OQTF ?",
      reponse: "Oui, le recours au fond contre l'OQTF est suspensif : vous ne pouvez pas être éloigné. Vous pouvez théoriquement continuer vos études, vous présenter aux examens, etc. En revanche, votre titre étudiant peut être expiré : signalez à votre université votre situation pour obtenir un certificat de scolarité provisoire et négocier votre maintien.",
    },
    {
      question: "L'aide juridictionnelle est-elle vraiment gratuite et combien de temps prend-elle ?",
      reponse: "Oui, totalement gratuite si vos ressources sont inférieures à environ 1 100 €/mois (seuils 2026). Pour les OQTF, il existe une procédure d'urgence qui permet d'obtenir la décision en 24 à 72 heures. Vous pouvez choisir votre avocat spécialisé en droit des étrangers, qui sera payé par l'État.",
    },
    {
      question: "Mon OQTF est due à un échec universitaire, ai-je une chance ?",
      reponse: "Oui, surtout si l'échec est dû à un événement particulier (maladie, deuil, difficultés financières) ou si vous êtes en passe de redoubler. La jurisprudence reconnaît le droit au redoublement et à un parcours universitaire non linéaire. Préparez un dossier solide avec certificats médicaux, attestations, projet de réorientation, et invoquez le droit à l'instruction.",
    },
    {
      question: "Si je gagne mon recours et obtiens un nouveau titre, puis-je naturaliser français un jour ?",
      reponse: "Absolument. Une OQTF annulée par le juge n'a aucun effet sur votre future demande de naturalisation, à condition de bien stabiliser votre situation après. Comptez 5 ans de résidence régulière en France après l'annulation pour pouvoir demander la nationalité française. Préparez dès maintenant le test civique, qui est exigeant : 80% de bonnes réponses (32/40) au minimum.",
    },
  ],
};

export default article;
