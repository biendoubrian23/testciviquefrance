import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-batch-mai-2026-1.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/anef-dossier-bloque-en-attente-2026-debloquer-relancer`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "anef-dossier-bloque-en-attente-2026-debloquer-relancer",
  titre: "ANEF dossier bloqué ou en attente 2026 : 9 raisons et comment débloquer (guide complet)",
  titreSeo: "ANEF dossier bloqué ou en attente 2026 : 9 raisons et comment débloquer (guide complet)",
  resume: "Votre dossier ANEF est en attente depuis des mois ? Statut figé sur \"en cours d'instruction\" ? 9 causes réelles de blocage en 2026 et la procédure étape par étape pour relancer la préfecture, contacter le défenseur des droits et débloquer votre demande.",
  chapo: "Vous avez déposé votre demande sur l'**ANEF** (Administration Numérique des Étrangers en France) il y a 3, 6, parfois 12 mois. Le statut est figé sur \"**en cours d'instruction**\" ou pire, \"**en attente de complétude**\". Vous n'avez aucune nouvelle, aucun contact direct possible, et la préfecture ne répond ni au téléphone ni aux mails. En 2026, plus de **930 000 dossiers étrangers** sont bloqués dans les préfectures françaises selon le rapport annuel de la Cimade, un chiffre historique qui explique l'engorgement massif de l'ANEF. Mais derrière chaque blocage, il y a une **cause identifiable** et, dans la plupart des cas, une **procédure de déblocage**. Ce guide complet recense les **9 raisons réelles** de blocage observées en 2026, la procédure exacte pour relancer la préfecture, saisir le défenseur des droits, déposer un référé liberté au tribunal administratif, et préserver vos droits (travail, voyage, séjour) pendant l'attente. Si vous lisez ces lignes, vous êtes à la bonne adresse pour reprendre la main sur votre dossier.",
  publieLe: "2026-05-06",
  modifieLe: "2026-05-06",
  minutes: 16,
  theme: "anef dossier bloqué 2026",
  motsCles: [
    "anef dossier bloqué 2026",
    "anef en attente instruction",
    "anef relancer préfecture",
    "dossier anef figé",
    "anef délai instruction 2026",
    "défenseur des droits anef",
    "référé liberté préfecture étranger",
    "anef en cours instruction longtemps",
    "récépissé anef droits",
    "préfecture ne répond pas anef",
    "débloquer dossier anef",
    "anef titre séjour bloqué",
    "attente anef que faire",
    "anef recours tribunal administratif",
    "anef demande complétude",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
  },
  blocs: [
    {
      type: "h2",
      texte: "Reconnaître les statuts ANEF qui signalent un blocage réel",
      id: "reconnaitre-statuts-anef",
    },
    {
      type: "p",
      texte: "Tous les statuts ANEF ne se valent pas. Certains sont **normaux** (votre dossier avance), d'autres signalent un **blocage caché** que la préfecture ne vous communiquera jamais explicitement.",
    },
    { type: "p", texte: "**Les 6 statuts ANEF que vous pouvez voir en 2026 :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**\"En cours de création\"** : vous n'avez pas encore validé l'envoi. Pas de blocage, finalisez votre dépôt.",
        "**\"Demande déposée\"** : statut initial après validation. Normal pendant 1 à 4 semaines.",
        "**\"En cours d'instruction\"** : la préfecture examine votre dossier. **Normal jusqu'à 4 mois**, **blocage probable au-delà de 6 mois**.",
        "**\"En attente de complétude\"** : il manque une pièce. **Vous devez agir immédiatement** : sinon le dossier est gelé indéfiniment.",
        "**\"Décision prise\"** : décision rendue (favorable ou défavorable). Vous serez notifié sous 15 jours.",
        "**\"Convoqué en préfecture\"** : un rendez-vous est fixé pour récupérer votre titre, signer ou remettre des originaux.",
      ],
    },
    { type: "p", texte: "**Signaux d'alerte d'un dossier réellement bloqué :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Aucun changement de statut depuis **plus de 4 mois**",
        "Statut \"en attente de complétude\" sans courriel précis sur la pièce manquante",
        "Récépissé non renouvelé alors que votre titre a expiré",
        "Aucune réponse à vos messages internes ANEF depuis plus de **30 jours**",
      ],
    },
    {
      type: "p",
      texte: "Selon le **CESEDA (article R.431-12)**, l'administration dispose en principe de **4 mois** pour statuer sur une demande de titre de séjour. Au-delà, le silence vaut **rejet implicite** : mais ce rejet implicite est lui-même attaquable, ce qui ouvre des recours puissants.",
    },
    {
      type: "h2",
      texte: "Les 9 causes réelles de blocage d'un dossier ANEF en 2026",
      id: "neuf-causes-blocage",
    },
    {
      type: "p",
      texte: "Voici les **9 causes** identifiées par les associations spécialisées (Cimade, Gisti, Asti) et confirmées par les retours utilisateurs en 2026. Vérifiez chacune méthodiquement.",
    },
    { type: "p", texte: "**1. Pièce manquante non signalée clairement**" },
    {
      type: "p",
      texte: "C'est la cause n°1. L'ANEF affiche \"en attente de complétude\" sans préciser **quelle pièce** manque. Connectez-vous, cliquez sur votre demande, descendez tout en bas : un message interne caché précise souvent la pièce. Sinon, envoyez un message via la messagerie ANEF.",
    },
    { type: "p", texte: "**2. Incohérence dans les dates ou identités**" },
    {
      type: "p",
      texte: "Date de naissance différente entre passeport et acte de naissance, nom de famille mal orthographié, prénoms inversés. Ces incohérences déclenchent un blocage automatique du système.",
    },
    { type: "p", texte: "**3. Doublon de dossier**" },
    {
      type: "p",
      texte: "Vous avez déposé deux fois la même demande (par erreur, ou en pensant que la première n'avait pas abouti). Le système bloque le second dossier et **gèle parfois les deux**.",
    },
    { type: "p", texte: "**4. Justificatif de domicile non conforme**" },
    {
      type: "p",
      texte: "Le justificatif doit dater de **moins de 3 mois**, être à votre nom (ou avec attestation d'hébergement + pièce d'identité de l'hébergeant + justificatif à son nom). Une simple facture mobile n'est pas acceptée, il faut une facture EDF, eau, gaz, internet fixe ou avis de taxe d'habitation.",
    },
    { type: "p", texte: "**5. Photo d'identité non conforme aux normes ANTS**" },
    {
      type: "p",
      texte: "Photos floues, lunettes, sourire, fond non blanc : refus systématique. Utilisez un photomaton agréé ANTS avec **e-photo signée** (code à 22 chiffres).",
    },
    { type: "p", texte: "**6. Bulletin n°2 du casier judiciaire non fourni ou périmé**" },
    {
      type: "p",
      texte: "Pour certaines demandes (naturalisation, carte résident), le **bulletin n°2** est exigé. Il doit dater de moins de 3 mois.",
    },
    { type: "p", texte: "**7. Situation fiscale non à jour**" },
    {
      type: "p",
      texte: "La préfecture interroge la **DGFIP** automatiquement. Si vos déclarations d'impôts des 3 dernières années sont incomplètes, ou si vous avez une dette fiscale non régularisée, votre dossier est mis en \"attente de vérification\" sans notification.",
    },
    {
      type: "p",
      texte: "**8. Vérification consulaire en cours (Maghreb, Afrique sub-saharienne, Asie)**",
    },
    {
      type: "p",
      texte: "Pour certaines nationalités, la préfecture demande une **vérification d'authenticité** des documents (acte de naissance, casier) auprès du consulat français du pays d'origine. Ces vérifications peuvent prendre **6 à 18 mois**.",
    },
    { type: "p", texte: "**9. Saturation pure du service préfectoral**" },
    {
      type: "p",
      texte: "Avec 930 000 dossiers en attente en 2026, certaines préfectures (Bobigny, Créteil, Lyon, Bordeaux) ont des files d'attente de **8 à 14 mois** sans aucun blocage technique sur votre dossier, juste un manque d'agents instructeurs.",
    },
    {
      type: "h2",
      texte: "Procédure de relance préfecture : étape par étape",
      id: "procedure-relance-prefecture",
    },
    {
      type: "p",
      texte: "Avant tout recours juridique, **épuisez la voie amiable**. La relance correctement formulée débloque environ **35 % des dossiers** selon les statistiques de la Cimade 2026.",
    },
    { type: "p", texte: "**Étape 1 : Relance via la messagerie interne ANEF**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Connectez-vous sur **administration-etrangers-en-france.interieur.gouv.fr**",
        "Ouvrez votre demande",
        "Cliquez sur \"**Contacter le service**\" ou \"Messagerie\"",
        "Rédigez un message **précis et bref** :",
      ],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Numéro de dossier",
        "Date de dépôt",
        "Statut actuel",
        "Demande explicite : \"Pouvez-vous m'indiquer la pièce manquante ou la date prévisionnelle de décision ?\"",
      ],
    },
    { type: "p", texte: "Délai de réponse moyen : **15 à 30 jours**." },
    { type: "p", texte: "**Étape 2 : Courrier recommandé avec accusé de réception (LRAR)**" },
    {
      type: "p",
      texte: "Si pas de réponse sous 30 jours, envoyez un courrier en LRAR à votre préfecture. **Adressez-le au préfet en personne**, pas au service étrangers. Indiquez :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Identité complète, nationalité, adresse",
        "Numéro de dossier ANEF",
        "Date de dépôt et statut actuel",
        "Rappel du délai légal de **4 mois** (article R.431-12 CESEDA)",
        "Demande de **décision motivée** sous 15 jours",
        "Mention : \"À défaut, je saisirai le défenseur des droits et le tribunal administratif\"",
      ],
    },
    {
      type: "p",
      texte: "Conservez précieusement l'**accusé de réception**. Il est essentiel pour la suite.",
    },
    { type: "p", texte: "**Étape 3 : Demande de RDV physique en préfecture**" },
    {
      type: "p",
      texte: "Certaines préfectures permettent de prendre un RDV \"**point d'étape dossier**\" via leur site. C'est rare mais efficace : un agent peut consulter votre dossier en direct et vous indiquer le blocage exact.",
    },
    {
      type: "p",
      texte: "**Délai global : prévoyez 6 à 8 semaines** entre les 3 étapes avant de passer aux recours juridiques.",
    },
    {
      type: "h2",
      texte: "Décision du Conseil d'État du 5 mai 2026 (n° 502860) : l'État sommé de corriger l'ANEF",
      id: "decision-conseil-etat-mai-2026",
    },
    {
      type: "p",
      texte: "Le **5 mai 2026**, le Conseil d'État : réuni en formation d'**Assemblée**, sa formation la plus solennelle, a rendu une décision historique pour tous les usagers dont le dossier est bloqué sur l'ANEF. Saisi par **neuf associations** (Cimade, France Terre d'Asile, Secours Catholique, Forum Réfugiés, JRS France, Emmaüs Solidarité, Groupe SOS Solidarités, Fédération des Acteurs de la Solidarité, Coallia), le Conseil d'État a **enjoint à l'État de prendre les mesures nécessaires pour mettre fin aux dysfonctionnements de la plateforme** portant atteinte au droit au séjour des ressortissants étrangers.",
    },
    { type: "p", texte: "**Les 4 injonctions concrètes de la décision n° 502860 :**" },
    {
      type: "tableau",
      entetes: ["Injonction", "Délai accordé à l'État"],
      lignes: [
        [
          "**1. Délivrer les attestations de prolongation d'instruction** en temps utile pour éviter toute rupture dans le droit au séjour",
          "6 mois",
        ],
        [
          "**2. Faire figurer clairement** sur les attestations les droits sociaux et professionnels attachés (droit au travail, CAF, Sécurité sociale)",
          "6 mois",
        ],
        [
          "**3. Permettre de signaler et corriger les erreurs** du dossier (adresse, pièce manquante, titre précédent non enregistré) pendant l'instruction",
          "6 mois",
        ],
        [
          "**4. Permettre le dépôt de plusieurs demandes simultanées** ou successives pour différents motifs, actuellement bloqué techniquement",
          "12 mois",
        ],
      ],
    },
    { type: "p", texte: "**Ce que cette décision confirme sur vos droits actuels :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**L'État reconnaît ses dysfonctionnements**. Le Conseil d'État a posé un principe à portée générale : tout service public numérique doit garantir un accès effectif aux droits des usagers. Les blocages techniques de l'ANEF ne sont **pas une excuse légale** pour dépasser les délais d'instruction légaux.",
        "**Le non-renouvellement des attestations de prolongation est illégal**. Si votre attestation n'est pas renouvelée en temps utile alors que votre dossier est toujours en cours, vous pouvez vous appuyer sur cette décision pour exiger une régularisation immédiate.",
        "**L'impossibilité de corriger un dossier est reconnue comme une atteinte à vos droits**. Si vous êtes bloqué en « attente de complétude » sans pouvoir modifier les informations ni ajouter de pièces, la décision consolide votre recours.",
      ],
    },
    { type: "p", texte: "**Modèle de paragraphe à insérer dans votre courrier LRAR au préfet :**" },
    {
      type: "encadre",
      texte: "*\"Je me permets de porter à votre attention la décision du Conseil d'État du 5 mai 2026 (n° 502860, Assemblée), par laquelle la haute juridiction administrative a enjoint à l'État de mettre fin aux dysfonctionnements de l'ANEF portant atteinte au droit au séjour. Cette décision consacre l'illégalité de tout dépassement injustifié des délais légaux d'instruction (4 mois, article R.431-12 du CESEDA) et l'obligation de délivrer ou renouveler les attestations de prolongation d'instruction en temps utile. Mon dossier, déposé le [DATE], est en attente depuis [N] mois sans décision motivée [/ sans renouvellement de mon attestation]. Je vous demande d'y statuer ou de me délivrer l'attestation requise sans délai supplémentaire. À défaut de réponse sous 15 jours, je saisirai le Défenseur des droits et envisagerai un référé liberté devant le tribunal administratif.\"*",
      ton: "bleu",
    },
    { type: "p", texte: "**Où consulter la décision :**" },
    {
      type: "p",
      texte: "Téléchargez gratuitement le texte intégral sur [conseil-etat.fr](https://www.conseil-etat.fr/fr/arianeweb/CE/decision/2026-05-05/502860) (décision n° 502860, 5 mai 2026). Joignez une copie à votre dossier de recours pour renforcer vos arguments devant la préfecture ou le tribunal administratif.",
    },
    {
      type: "p",
      texte: "**Sources :** [Conseil d'État, décision n° 502860](https://www.conseil-etat.fr/actualites/services-publics-le-conseil-d-etat-enjoint-a-l-etat-de-garantir-un-acces-normal-a-la-plateforme-en-ligne-de-l-anef) · [Défenseur des droits, réaction à la décision](https://www.defenseurdesdroits.fr/anef-une-decision-majeure-du-conseil-detat-qui-converge-avec-les-analyses-du-defenseur-des-droits)",
    },
    {
      type: "h2",
      texte: "Saisir le Défenseur des droits : gratuit et souvent efficace",
      id: "defenseur-des-droits",
    },
    {
      type: "p",
      texte: "Le **Défenseur des droits** est une **autorité administrative indépendante** créée par la Constitution (article 71-1). Il intervient gratuitement quand l'administration manque à ses obligations. En 2026, le défenseur a traité plus de **18 000 saisines** liées aux préfectures, avec un **taux de résolution amiable de 62 %**.",
    },
    { type: "p", texte: "**Quand saisir le Défenseur des droits ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Délai d'instruction supérieur à **6 mois** sans justification",
        "Absence de réponse à vos relances LRAR",
        "Difficultés répétées d'accès au service préfectoral",
        "Refus implicite non motivé",
      ],
    },
    { type: "p", texte: "**Comment saisir (3 méthodes) :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**En ligne** : formulaire sur **defenseurdesdroits.fr** (le plus rapide)",
        "**Par courrier** : Défenseur des droits, 7 rue Saint-Florentin, 75409 Paris cedex 08 (gratuit, pas besoin de timbre)",
        "**Via un délégué local** : 550 délégués territoriaux dans les préfectures, mairies et maisons France Services",
      ],
    },
    { type: "p", texte: "**Pièces à joindre :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Copie de votre titre de séjour ou récépissé",
        "Capture d'écran du statut ANEF",
        "Courrier LRAR de relance + accusé de réception",
        "Réponse de la préfecture (ou absence de réponse)",
        "Bref récit chronologique des faits",
      ],
    },
    {
      type: "p",
      texte: "Le Défenseur des droits ne peut pas **annuler** une décision préfectorale, mais il peut envoyer une **demande d'explication** à la préfecture, qui débouche très souvent sur le déblocage du dossier sous 2 à 4 mois.",
    },
    {
      type: "h2",
      texte: "Référé liberté au tribunal administratif : l'arme ultime en cas d'urgence",
      id: "refere-liberte-tribunal",
    },
    {
      type: "p",
      texte: "Si votre situation est **urgente** (titre expiré, perte d'emploi imminente, voyage médical, regroupement familial bloqué), le **référé liberté** (article L.521-2 du Code de justice administrative) est l'arme la plus puissante.",
    },
    { type: "p", texte: "**Conditions cumulatives :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Urgence caractérisée** : vous démontrez un préjudice grave et immédiat",
        "**Atteinte grave et manifestement illégale à une liberté fondamentale** : droit au respect de la vie privée et familiale, droit au travail, liberté d'aller et venir",
      ],
    },
    { type: "p", texte: "**Délai de jugement : 48 heures** (oui, c'est aussi rapide que ça)." },
    { type: "p", texte: "**Procédure :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Saisissez le tribunal administratif **du ressort de votre préfecture** (téléservice **telerecours.fr** pour les avocats, formulaire papier pour les particuliers)",
        "Joignez : pièce d'identité, titre de séjour, capture ANEF, LRAR de relance, justificatifs d'urgence (avis médical, courrier employeur, etc.)",
        "Le juge fixe une **audience publique** sous 48h",
        "La décision est rendue immédiatement",
      ],
    },
    {
      type: "p",
      texte: "**Coût** : gratuit si vous bénéficiez de l'**aide juridictionnelle** (plafond de ressources 2026 : 1 263 €/mois pour aide totale). Sinon, comptez **800 à 1 500 €** pour un avocat.",
    },
    {
      type: "p",
      texte: "**Référé \"mesures utiles\" (L.521-3)** : alternative moins exigeante si vous n'avez pas d'urgence vitale mais besoin d'une **injonction** à la préfecture (par exemple : \"délivrer un récépissé\"). Délai : 1 à 4 semaines.",
    },
    {
      type: "p",
      texte: "Important : le **référé suspension (L.521-1)** ne s'applique que si une décision a été prise (refus). Pour un dossier simplement bloqué sans décision, c'est le référé liberté ou mesures utiles qu'il faut viser.",
    },
    {
      type: "h2",
      texte: "Pendant l'attente : préserver vos droits (récépissé, travail, voyage)",
      id: "preserver-vos-droits-attente",
    },
    {
      type: "p",
      texte: "Un dossier bloqué ne doit **jamais** vous priver de vos droits fondamentaux. Voici comment les sécuriser.",
    },
    { type: "p", texte: "**1. Obtenir un récépissé valide**" },
    {
      type: "p",
      texte: "Si votre titre expire pendant l'instruction, vous avez **droit à un récépissé** (article R.431-12 CESEDA). Demandez-le explicitement via ANEF ou en préfecture. Le récépissé :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vaut **autorisation de séjour** sur le territoire français",
        "**Autorise à travailler** (mention \"autorise son titulaire à travailler\")",
        "Doit être **renouvelé tous les 4 ou 6 mois** tant que le dossier est en cours",
      ],
    },
    { type: "p", texte: "**2. Voyager pendant l'attente : prudence**" },
    { type: "p", texte: "Un récépissé **ne vaut pas visa**. Pour quitter et rentrer en France :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si récépissé seul : **aucun voyage** hors espace Schengen sans **visa de retour** (à demander en préfecture, gratuit)",
        "Si ancien titre encore valide : voyages possibles mais retour avant expiration",
        "Voyage Schengen : autorisé avec récépissé pour des séjours de moins de 90 jours, **mais pas recommandé** (refoulement aux frontières fréquent en 2026)",
      ],
    },
    { type: "p", texte: "**3. Maintenir votre emploi**" },
    {
      type: "p",
      texte: "Présentez le récépissé à votre employeur. En cas de refus, rappelez l'article **L.5221-5 du Code du travail** : un récépissé portant la mention \"autorise à travailler\" suffit légalement.",
    },
    { type: "p", texte: "**4. Maintenir vos droits sociaux**" },
    {
      type: "p",
      texte: "CAF, Sécurité sociale, Pôle emploi (France Travail) : transmettez le récépissé pour ne pas perdre **APL, RSA, allocations chômage**. En 2026, plusieurs CAF refusent à tort les récépissés, saisissez le **médiateur CAF** et le défenseur des droits si besoin.",
    },
    {
      type: "h2",
      texte: "Prévention : sécuriser votre prochaine demande (et préparer le test civique)",
      id: "prevention-prochaine-demande",
    },
    {
      type: "p",
      texte: "Une fois débloqué, votre dossier doit être **bétonné** pour éviter toute récidive. Voici la check-list 2026 :",
    },
    { type: "p", texte: "**Avant tout dépôt :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Numérisez en **PDF couleur** (pas JPG) tous vos documents",
        "Vérifiez les dates de validité (titre, passeport, justificatifs < 3 mois)",
        "Faites traduire tout document étranger par un **traducteur assermenté**",
        "Apostillez les actes étrangers (cour d'appel du pays émetteur)",
        "Demandez une **attestation de régularité fiscale** à la DGFIP avant dépôt",
      ],
    },
    { type: "p", texte: "**Pendant l'instruction :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Connectez-vous sur ANEF **toutes les 2 semaines**",
        "Conservez TOUS les courriers, mails, captures d'écran",
        "Tenez un **journal de bord daté** des relances",
      ],
    },
    { type: "p", texte: "**Profitez du temps d'attente pour préparer la suite**" },
    {
      type: "p",
      texte: "Si votre objectif final est la **naturalisation française**, profitez de ces mois d'attente pour préparer le **test civique de naturalisation** (obligatoire depuis le décret du 1er janvier 2026). Le test comprend **40 questions** sur les valeurs, l'histoire, la géographie et les institutions françaises, avec un seuil de **80 % de réussite** (32/40). Une préparation sérieuse de 4 à 8 semaines avec [notre guide officiel](/articles/comment-reussir-test-civique-premier-coup) vous permettra d'arriver serein le jour J. De plus, [le niveau B1 obligatoire](/articles/niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation) doit être validé en parallèle.",
    },
    { type: "p", texte: "**Connaître vos recours d'avance**" },
    {
      type: "p",
      texte: "Lisez [notre guide sur les 930 000 dossiers bloqués en préfecture](/articles/930000-dossiers-bloques-prefecture-2026-droits-recours-etrangers-france) pour anticiper. Préparez à l'avance vos modèles de LRAR et identifiez votre tribunal administratif compétent.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Un dossier ANEF bloqué n'est jamais une fatalité en 2026. Entre les 9 causes identifiables, la procédure de relance amiable, et surtout la **décision historique du Conseil d'État du 5 mai 2026 (n° 502860)** : qui contraint l'État à corriger les dysfonctionnements de l'ANEF et à garantir les attestations de prolongation -, vous disposez désormais d'un **arsenal juridique renforcé** pour reprendre la main. La règle d'or : agissez **méthodiquement**, **par écrit**, en citant cette décision dans toutes vos relances, et **conservez toutes les preuves**. Pendant l'attente, sécurisez votre récépissé, votre emploi et vos droits sociaux. Et si la naturalisation est votre objectif final, mettez à profit ces mois pour **préparer le test civique** : 40 questions, 80 % de réussite exigée, des connaissances précises sur les valeurs, institutions et histoire de France. Notre [plateforme d'entraînement](/signup) vous propose des QCM officiels, des fiches révisions et un suivi personnalisé pour transformer cette attente subie en **préparation active** vers votre nationalité.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Mon dossier ANEF est en attente depuis 8 mois sans réponse. Est-ce normal ?",
      reponse: "Non. Le délai légal d'instruction est de 4 mois selon l'article R.431-12 du CESEDA. Au-delà de 6 mois sans nouvelles, vous devez relancer la préfecture par LRAR, puis saisir le Défenseur des droits si pas de réponse sous 30 jours. En cas d'urgence, un référé liberté au tribunal administratif peut être jugé en 48 heures.",
    },
    {
      question: "Puis-je travailler avec un récépissé ANEF en attente de décision ?",
      reponse: "Oui, à condition que votre récépissé porte la mention \"autorise son titulaire à travailler\". Cette mention est automatique pour les renouvellements de titres salariés ou les premières demandes salariées. L'article L.5221-5 du Code du travail oblige les employeurs à reconnaître ce récépissé comme un titre de séjour valide.",
    },
    {
      question: "Combien coûte un référé liberté au tribunal administratif ?",
      reponse: "La procédure est gratuite (pas de frais de greffe). L'aide juridictionnelle est accessible si vos ressources sont inférieures à 1 263 €/mois (plafond 2026 pour l'aide totale). Sans avocat, comptez environ 0 €. Avec avocat, prévoyez 800 à 1 500 € selon la complexité, souvent pris en charge intégralement par l'aide juridictionnelle.",
    },
    {
      question: "Le Défenseur des droits peut-il vraiment débloquer mon dossier ?",
      reponse: "Oui, dans 62 % des cas selon le rapport 2026. Le Défenseur des droits envoie une demande d'explication formelle à la préfecture, qui doit y répondre dans un délai contraint. Cette pression administrative débloque la majorité des dossiers en 2 à 4 mois. La saisine est gratuite et peut se faire en ligne sur defenseurdesdroits.fr.",
    },
    {
      question: "Que change concrètement la décision du Conseil d'État du 5 mai 2026 pour mon dossier ANEF bloqué ?",
      reponse: "La décision n° 502860 du 5 mai 2026 contraint l'État à corriger quatre dysfonctionnements dans des délais de 6 à 12 mois : délivrance des attestations de prolongation d'instruction en temps utile, mention claire des droits sociaux et professionnels sur ces attestations, possibilité de corriger les erreurs du dossier pendant l'instruction, et possibilité de déposer plusieurs demandes simultanées. Concrètement, vous pouvez citer cette décision dans vos courriers de relance au préfet et dans vos recours devant le tribunal administratif, elle renforce considérablement votre position juridique. Le texte intégral est disponible sur conseil-etat.fr (recherche : 502860).",
    },
  ],
};

export default article;
