import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-actu-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/930000-dossiers-bloques-prefecture-2026-droits-recours-etrangers-france`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "930000-dossiers-bloques-prefecture-2026-droits-recours-etrangers-france",
  titre: "930 000 dossiers bloqués en préfecture : vos droits quand l'administration ne répond pas",
  titreSeo: "930 000 dossiers bloqués en préfecture : vos droits quand l'administration ne répond pas",
  resume: "Chiffre officiel : 930 000 dossiers de titres de séjour sont en attente dans les préfectures françaises, pour un délai moyen de 117 jours. Que faire quand votre titre expire, comment relancer votre dossier, et quels recours légaux activer pour ne pas perdre vos droits.",
  chapo: "Le chiffre est officiel et il est accablant : au 1er avril 2026, **930 000 dossiers de titres de séjour sont en attente de traitement** dans les préfectures françaises. Cela représente l'équivalent de la population entière d'une grande ville comme Bordeaux, des personnes qui attendent, souvent depuis des mois, un simple rendez-vous ou une réponse de l'administration. Pendant ce temps, leurs récépissés expirent, certains perdent leur emploi, leurs droits à la Sécurité sociale, ou se retrouvent en situation irrégulière sans l'avoir voulu. Quels sont vos droits quand la préfecture ne répond pas ? Que faire légalement pour débloquer votre dossier ? Ce guide complet vous donne toutes les réponses.",
  publieLe: "2026-04-21",
  modifieLe: "2026-04-21",
  minutes: 21,
  theme: "dossiers bloqués préfecture titre de séjour 2026",
  motsCles: [
    "dossiers bloqués préfecture titre de séjour 2026",
    "930000 dossiers en attente préfecture",
    "préfecture ne répond pas titre de séjour",
    "droits étranger préfecture délai",
    "recours préfecture titre de séjour",
    "récépissé expiré préfecture",
    "ANEF dysfonctionnement recours",
    "délai préfecture titre de séjour 2026",
    "plan Nuñez désengorger préfecture",
    "silence administration titre de séjour",
    "référé préfecture titre de séjour",
    "médiateur préfecture étranger",
    "Défenseur des droits préfecture",
    "tribunal administratif préfecture titre de séjour",
  ],
  rubrique: "actualites",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1568992687947-868a62a9f521",
  },
  blocs: [
    {
      type: "h2",
      texte: "L'ampleur du blocage : 930 000 dossiers, 117 jours d'attente en moyenne",
      id: "l-ampleur-du-blocage",
    },
    {
      type: "p",
      texte: "Les chiffres officiels publiés par le ministère de l'Intérieur en avril 2026 sont sans précédent dans l'histoire récente de l'administration française.",
    },
    { type: "h3", texte: "Les données officielles (avril 2026)" },
    {
      type: "tableau",
      entetes: ["Indicateur", "Chiffre"],
      lignes: [
        ["Dossiers en attente", "**930 000**"],
        ["Délai moyen de traitement", "**117 jours**"],
        ["Délai dans les pires préfectures", "**180 à 240 jours**"],
        ["Délai dans les meilleures préfectures", "**45 à 60 jours**"],
        ["Objectif du plan Nuñez", "**55 jours**"],
      ],
    },
    { type: "h3", texte: "Les préfectures les plus embouteillées" },
    { type: "p", texte: "Les grandes agglomérations sont les plus touchées :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Paris (préfecture de police)** : délais parmi les plus longs, entre 5 et 8 mois selon la procédure",
        "**Seine-Saint-Denis** : situation catastrophique depuis 2021, régulièrement épinglée par le tribunal administratif",
        "**Bouches-du-Rhône** : délais de 4 à 6 mois pour les renouvellements",
        "**Rhône (Lyon)** : entre 3 et 5 mois",
      ],
    },
    { type: "h3", texte: "Qui est le plus touché ?" },
    {
      type: "p",
      texte: "Toutes les catégories sont concernées, mais les situations les plus précaires sont :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les personnes dont le récépissé expire pendant l'attente → risque de perdre le droit au travail",
        "Les étudiants dont le titre expire en fin d'année universitaire → risque de perdre la carte étudiante et les droits associés",
        "Les salariés en contrat à durée déterminée → les employeurs réticents à renouveler sans titre valide",
        "Les parents d'enfants malades → délais pour les APS (autorisations provisoires de séjour) aussi impactés",
      ],
    },
    {
      type: "h2",
      texte: "Pourquoi la préfecture ne traite pas vos dossiers : les vraies raisons",
      id: "pourquoi-ces-blocages",
    },
    {
      type: "p",
      texte: "Le blocage de 930 000 dossiers n'est pas un accident. Il est le résultat de plusieurs décisions structurelles accumulées sur plusieurs années.",
    },
    { type: "h3", texte: "Raison 1 : La numérisation ratée par ANEF" },
    {
      type: "p",
      texte: "La plateforme **ANEF (Administration Numérique pour les Étrangers en France)** a été déployée entre 2020 et 2023 pour remplacer les guichets physiques. Résultat :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Des milliers de dossiers \"perdus\" ou bloqués dans des états d'erreur informatique",
        "Une interface inaccessible pour les personnes peu à l'aise avec le numérique",
        "Des délais de résolution d'erreurs de plusieurs semaines",
        "Le 10 avril 2026, le Conseil d'État a examiné une requête de **dix associations** (dont le Secours catholique et Emmaüs) contre ces dysfonctionnements",
      ],
    },
    { type: "h3", texte: "Raison 2 : La baisse des effectifs dans les préfectures" },
    {
      type: "p",
      texte: "Entre 2010 et 2023, les préfectures ont perdu **30% de leurs effectifs** dans les services des étrangers (source : rapport parlementaire 2023). Les agents restants traitent des volumes de dossiers impossibles à absorber.",
    },
    { type: "h3", texte: "Raison 3 : La multiplication des pièces demandées" },
    {
      type: "p",
      texte: "Chaque préfecture a développé ses propres listes de pièces justificatives, souvent bien au-delà de ce que la loi exige. Résultat : des dossiers incomplets selon des critères locaux, des va-et-vient administratifs qui rallongent les délais.",
    },
    { type: "h3", texte: "Raison 4 : La demande qui explose" },
    {
      type: "p",
      texte: "L'immigration légale en France a augmenté de **+38%** entre 2018 et 2024 (source : INSEE). Les préfectures n'ont pas été dimensionnées pour cette croissance.",
    },
    { type: "h3", texte: "Ce que dit le plan Nuñez" },
    {
      type: "p",
      texte: "Face à ce constat, le ministre de l'Intérieur **Laurent Nuñez** a annoncé en avril 2026 :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Recrutement de **500 vacataires** dans les préfectures (renfort de ~20%)",
        "Budget de **2 millions d'euros d'heures supplémentaires**",
        "Instruction aux préfets : **liste de pièces simplifiée**, plus de demandes abusives",
        "Automatisation des récépissés : plus de trou dans les droits pendant l'attente",
        "Objectif : **55 jours** de délai moyen d'ici fin 2026",
      ],
    },
    {
      type: "p",
      texte: "Les associations accueillent le plan avec prudence : des objectifs similaires avaient été annoncés en 2021 et 2023 sans être atteints.",
    },
    {
      type: "h2",
      texte: "Votre titre de séjour expire pendant l'attente : que faire exactement ?",
      id: "que-se-passe-t-il-si-votre-titre-expire",
    },
    {
      type: "p",
      texte: "C'est la situation la plus angoissante : et la plus commune. Votre carte expire, votre récépissé n'arrive pas, et vous vous retrouvez dans un vide juridique apparent.",
    },
    { type: "h3", texte: "Avant tout : le récépissé vous protège légalement" },
    {
      type: "p",
      texte: "Si vous avez **déposé votre dossier avant l'expiration** de votre titre (ou dans les délais légaux), vous bénéficiez du **maintien de plein droit** de votre statut jusqu'à la décision. Ce maintien est automatique, il n'est pas conditionné à la délivrance du récépissé par la préfecture.",
    },
    { type: "p", texte: "En pratique :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Conservez **toute preuve de dépôt** de votre dossier (accusé de réception ANEF, récépissé postal, confirmation par email)",
        "Si vous travaillez, montrez ces preuves à votre employeur, elles valent titre de séjour provisoire",
        "Si l'AMELI ou la CAF vous bloque, montrez ces mêmes preuves, elles doivent maintenir vos droits",
      ],
    },
    { type: "h3", texte: "Si la préfecture ne vous a pas délivré de récépissé" },
    {
      type: "p",
      texte: "Envoyez un **courrier recommandé avec accusé de réception** au préfet, en demandant la délivrance de votre récépissé dans les 15 jours. Joignez toutes vos preuves de dépôt.",
    },
    {
      type: "p",
      texte: "Si pas de réponse : saisir le **Défenseur des droits** (formulaire en ligne, gratuit) ET déposer un **référé-liberté** devant le tribunal administratif.",
    },
    { type: "h3", texte: "Les modèles de lettres à utiliser" },
    { type: "p", texte: "**Pour demander votre récépissé :**" },
    {
      type: "encadre",
      texte: "\"Je soussigné(e) [Nom Prénom], né(e) le [date] à [lieu], de nationalité [pays], actuellement en possession d'un dossier déposé le [date] sur la plateforme ANEF / en préfecture (numéro de suivi : [numéro]), vous demande formellement la délivrance de mon récépissé dans un délai de 15 jours à compter de la réception de ce courrier, conformément aux articles R431-17 et suivants du CESEDA.\"",
      ton: "bleu",
    },
    { type: "p", texte: "**Pour demander l'avancement de votre dossier :**" },
    {
      type: "encadre",
      texte: "\"Conformément à la loi n° 2000-321 du 12 avril 2000, tout silence de l'administration pendant plus de 2 mois vaut décision implicite de rejet, que je me réserve le droit de contester. Je vous demande de me confirmer l'état de traitement de mon dossier et de m'indiquer le délai prévisionnel de décision.\"",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Vos recours légaux : 5 voies pour débloquer votre dossier",
      id: "vos-recours-legaux",
    },
    {
      type: "p",
      texte: "L'administration a des obligations légales vis-à-vis de vous. Voici comment les faire valoir, du recours le plus simple au plus technique.",
    },
    { type: "h3", texte: "Recours 1 : La relance administrative (gratuit, premier réflexe)" },
    {
      type: "p",
      texte: "Envoyez un email ET un courrier recommandé à la préfecture, en mettant en copie :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le sous-préfet si possible",
        "La section des étrangers de la préfecture",
        "Le député ou sénateur de votre circonscription (ils ont des relations directes avec les préfets)",
      ],
    },
    {
      type: "p",
      texte: "Un email envoyé via l'adresse d'un parlementaire déclenche souvent une réponse en quelques jours, là où un particulier attend des mois.",
    },
    { type: "h3", texte: "Recours 2 : Le Défenseur des droits (gratuit, très efficace)" },
    {
      type: "p",
      texte: "Le **Défenseur des droits** peut être saisi en ligne (defenseursdesdroits.fr) pour tout dysfonctionnement de l'administration. Il dispose d'un pouvoir d'injonction et ses interventions débloquent régulièrement des situations.",
    },
    {
      type: "p",
      texte: "Délai moyen d'intervention : **4 à 8 semaines**. Très efficace pour les cas de récépissés manquants ou de dossiers perdus dans ANEF.",
    },
    { type: "h3", texte: "Recours 3 : Le recours gracieux auprès du préfet (gratuit)" },
    {
      type: "p",
      texte: "Un recours gracieux est un courrier formel au préfet lui demandant de réexaminer votre dossier. Il doit être rédigé avec soin et argumenté. Les associations peuvent vous aider à le rédiger.",
    },
    { type: "h3", texte: "Recours 4 : Le tribunal administratif, recours pour excès de pouvoir" },
    {
      type: "p",
      texte: "Si la préfecture a **refusé** votre demande de titre, vous avez **2 mois** pour saisir le tribunal administratif. Ce délai est impératif, si vous le laissez passer, le refus devient définitif.",
    },
    {
      type: "p",
      texte: "Le tribunal peut **annuler** la décision et enjoindre la préfecture de vous délivrer le titre ou de réexaminer votre dossier.",
    },
    { type: "h3", texte: "Recours 5 : Le référé-liberté ou référé-mesures utiles (urgent)" },
    {
      type: "p",
      texte: "Si votre situation est critique (risque d'expulsion imminent, perte d'emploi imminente, maladie grave), vous pouvez demander un **référé** devant le tribunal administratif. Le juge doit statuer en **48 heures**.",
    },
    {
      type: "p",
      texte: "Conditions : urgence réelle, atteinte grave à une liberté fondamentale. Ce recours nécessite impérativement un avocat, et l'aide juridictionnelle est accessible.",
    },
    { type: "h3", texte: "Récapitulatif des recours" },
    {
      type: "tableau",
      entetes: ["Recours", "Coût", "Délai", "Efficacité"],
      lignes: [
        ["Relance administrative", "Gratuit", "Variable", "Modérée"],
        ["Défenseur des droits", "Gratuit", "4-8 semaines", "Bonne"],
        ["Recours gracieux", "Gratuit", "2 mois", "Modérée"],
        ["Tribunal administratif", "Aide juridictionnelle possible", "6-18 mois", "Excellente"],
        ["Référé", "Aide juridictionnelle possible", "48 heures", "Excellente (urgences)"],
      ],
    },
    {
      type: "h2",
      texte: "Le plan de décongestionnement des préfectures : ce qui change concrètement pour vous en 2026",
      id: "le-plan-prefectures-ce-qui-change-pour-vous",
    },
    {
      type: "p",
      texte: "Le ministre Laurent Nuñez a présenté un plan en 8 points en avril 2026. Voici ce qui peut changer concrètement pour les personnes en attente.",
    },
    { type: "h3", texte: "Mesure 1 : La liste des pièces simplifiée (applicable immédiatement)" },
    {
      type: "p",
      texte: "Une instruction préfectorale impose désormais aux préfectures de respecter la **liste officielle des pièces** : et seulement elle. Plus question de demander un justificatif de domicile de moins de 3 mois si vous êtes hébergé chez un tiers, ou une attestation bancaire non prévue par la loi.",
    },
    {
      type: "p",
      texte: "Si une préfecture vous demande une pièce non prévue par la liste officielle, vous pouvez le signaler au Défenseur des droits.",
    },
    { type: "h3", texte: "Mesure 2 : Renouvellement automatique des récépissés" },
    {
      type: "p",
      texte: "La nouvelle instruction prévoit que les récépissés doivent être **automatiquement renouvelés** tant que votre dossier est en cours d'instruction. Plus de trou dans vos droits en théorie, mais l'application concrète dépend de chaque préfecture.",
    },
    { type: "h3", texte: "Mesure 3 : 500 vacataires recrutés" },
    {
      type: "p",
      texte: "500 agents supplémentaires dans les services des étrangers d'ici fin 2026. Cela représente une augmentation de ~20% des effectifs. L'impact devrait commencer à se faire sentir à partir de l'été 2026.",
    },
    { type: "h3", texte: "Mesure 4 : Opérations de \"déstockage\"" },
    {
      type: "p",
      texte: "Des opérations ciblées de traitement accéléré des dossiers les plus anciens sont prévues. Certaines préfectures organiseront des journées de traitement intensif sur les stocks accumulés.",
    },
    { type: "h3", texte: "Ce que le plan ne règle pas" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les dysfonctionnements de la plateforme ANEF ne sont pas résolus à court terme",
        "La hausse des taxes du 1er mai 2026 renchérit les démarches pour tout le monde",
        "Les 930 000 dossiers en attente ne seront pas tous traités avant fin 2026",
        "Les préfectures les plus embouteillées (Paris, Seine-Saint-Denis) ont besoin de réformes structurelles plus profondes",
      ],
    },
    {
      type: "h2",
      texte: "Que faire maintenant si votre dossier est bloqué : checklist pratique",
      id: "que-faire-maintenant",
    },
    { type: "p", texte: "Voici les actions concrètes à mener selon votre situation." },
    { type: "h3", texte: "Si votre titre est encore valide et votre renouvellement en attente" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Ne paniquez pas** : votre dépôt vous protège légalement",
        "Gardez precieusement votre **accusé de réception** de dossier",
        "Notez la date d'expiration de votre titre et calculez les 2 mois de silence (au-delà = rejet implicite contestable)",
        "Si vous n'avez pas encore de récépissé : envoyez un **courrier recommandé** à la préfecture dans les 10 jours suivant l'expiration de votre titre",
      ],
    },
    { type: "h3", texte: "Si votre récépissé a expiré sans nouveau titre" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Contactez immédiatement une **association** (Cimade, GISTI, association locale)",
        "Demandez un **rendez-vous d'urgence** en préfecture en expliquant votre situation par écrit",
        "Saisissez le **Défenseur des droits** en ligne",
        "Si vous risquez de perdre votre emploi, parlez-en à votre employeur et montrez-lui vos preuves de dépôt, il est légalement protégé s'il maintient votre emploi sur cette base",
      ],
    },
    { type: "h3", texte: "Si vous avez reçu un refus" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous avez **2 mois** pour attaquer au tribunal administratif",
        "Consultez un avocat ou une association **dès la réception du refus**",
        "Ne laissez pas passer ce délai : après, le refus devient définitif et vos options se réduisent considérablement",
      ],
    },
    { type: "h3", texte: "Ressources clés" },
    {
      type: "tableau",
      entetes: ["Ressource", "Pour quoi", "Lien"],
      lignes: [
        ["**La Cimade**", "Permanences juridiques, orientation", "lacimade.org"],
        [
          "**Défenseur des droits**",
          "Blocages administratifs, abus préfectoraux",
          "defenseursdesdroits.fr",
        ],
        ["**GISTI**", "Ressources juridiques, modèles de lettres", "gisti.org"],
        [
          "**ANEF (portail officiel)**",
          "Suivi de dossier en ligne",
          "administration-etrangers-en-france.interieur.gouv.fr",
        ],
        [
          "**Tribunal administratif**",
          "Recours contre les décisions préfectorales",
          "conseil-etat.fr (pour trouver le TA compétent)",
        ],
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "930 000 dossiers bloqués, 117 jours d'attente en moyenne, une plateforme ANEF dysfonctionnelle, des taxes qui augmentent : la crise des préfectures françaises touche des centaines de milliers de familles. Face à cette situation, vous n'êtes pas sans recours. La loi vous protège, les associations peuvent vous aider, et les tribunaux administratifs annulent régulièrement des décisions préfectorales abusives. L'essentiel est d'agir vite, de garder toutes vos preuves, et de ne pas rester seul face à l'administration.",
      ton: "bleu",
    },
  ],
};

export default article;
