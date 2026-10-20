import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-actu-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/espagne-regularisation-500000-sans-papiers-2026-pourquoi-pas-france`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "espagne-regularisation-500000-sans-papiers-2026-pourquoi-pas-france",
  titre: "L'Espagne régularise 500 000 sans-papiers en 2026 : pourquoi la France ne le fait pas",
  titreSeo: "L'Espagne régularise 500 000 sans-papiers en 2026 : pourquoi la France ne le fait pas",
  resume: "L'Espagne ouvre ses guichets pour régulariser 500 000 personnes en situation irrégulière. Pendant ce temps, la France durcit ses conditions. Comparaison des politiques, conditions du programme espagnol, et voies légales en France pour les sans-papiers.",
  chapo: "En avril 2026, l'Espagne ouvre officiellement ses guichets pour régulariser près de 500 000 personnes en situation irrégulière sur son territoire. Un programme massif, inédit dans l'Union européenne depuis l'opération espagnole de 2005. Pendant ce temps, en France, la politique migratoire va dans le sens opposé : hausse des taxes, durcissement des conditions, 930 000 dossiers bloqués en préfecture. Pourquoi deux pays européens voisins font-ils des choix aussi radicalement différents ? Qui peut bénéficier de la régularisation espagnole ? Et qu'est-ce que cela révèle de la situation des sans-papiers en France ?",
  publieLe: "2026-04-21",
  modifieLe: "2026-04-21",
  minutes: 20,
  theme: "Espagne régularisation sans-papiers 2026",
  motsCles: [
    "Espagne régularisation sans-papiers 2026",
    "régularisation massive Espagne 2026",
    "Espagne 500000 sans-papiers régularisation",
    "pourquoi France ne régularise pas sans-papiers",
    "régularisation sans-papiers France 2026",
    "politique immigration France Espagne comparaison",
    "sans-papiers en France droits 2026",
    "circulaire Valls régularisation France",
    "régularisation travail France conditions",
    "immigration Europe 2026 comparaison",
    "Espagne immigration légale programme 2026",
    "régularisation France impossible",
    "GISTI régularisation sans-papiers",
    "titre séjour France sans papiers 2026",
  ],
  rubrique: "actualites",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
  },
  blocs: [
    {
      type: "h2",
      texte: "Ce que l'Espagne propose : le plus grand programme de régularisation depuis 2005",
      id: "ce-que-lespagne-propose",
    },
    {
      type: "p",
      texte: "En avril 2026, le gouvernement espagnol de Pedro Sánchez a officiellement lancé un programme de régularisation permettant à des centaines de milliers de personnes en situation irrégulière de demander un titre de séjour légal.",
    },
    { type: "h3", texte: "Les chiffres du programme espagnol" },
    {
      type: "p",
      texte: "Le gouvernement espagnol estime que **482 000 personnes** seraient éligibles à ce programme, un chiffre qui en fait la plus grande opération de régularisation de l'UE depuis l'amnistie espagnole de 2005 (qui avait régularisé 700 000 personnes).",
    },
    { type: "h3", texte: "Les conditions pour être régularisé en Espagne" },
    { type: "p", texte: "Le programme espagnol prévoit des critères stricts mais accessibles :" },
    {
      type: "tableau",
      entetes: ["Condition", "Détail"],
      lignes: [
        ["Durée de présence", "3 ans minimum sur le territoire espagnol"],
        ["Absence de casier judiciaire", "En Espagne ET dans le pays d'origine"],
        ["Contrat de travail", "Offre d'emploi ou attestation d'employeur"],
        ["Ressources minimales", "Revenus équivalents à ~80% du SMIC espagnol"],
        ["Demande faite de l'intérieur", "La personne doit être présente sur le sol espagnol"],
      ],
    },
    {
      type: "p",
      texte: "La demande est déposée auprès des **Oficinas de Extranjería** (équivalent espagnol des préfectures). Le traitement est prévu en **3 à 6 mois**.",
    },
    { type: "h3", texte: "Qui sont les bénéficiaires potentiels ?" },
    {
      type: "p",
      texte: "Selon les associations espagnoles, les principales communautés concernées sont :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Marocains et Algériens (33% des dossiers estimés)",
        "Latino-Américains (27%)",
        "Subsahariens (18%)",
        "Asiatiques (12%)",
        "Autres (10%)",
      ],
    },
    {
      type: "p",
      texte: "Les secteurs d'activité les plus représentés : **agriculture, construction, services à domicile, restauration**.",
    },
    {
      type: "h2",
      texte: "Pourquoi l'Espagne prend cette décision maintenant : économie et démographie",
      id: "pourquoi-lespagne-le-fait",
    },
    {
      type: "p",
      texte: "Ce programme n'est pas un acte de générosité gratuit. L'Espagne fait face à des défis économiques et démographiques très concrets.",
    },
    { type: "h3", texte: "Le vieillissement de la population espagnole" },
    {
      type: "p",
      texte: "L'Espagne vieillit rapidement. Le ratio actifs/retraités se dégrade chaque année. Le gouvernement Sánchez a commandé plusieurs rapports montrant que :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'Espagne a besoin de **300 000 travailleurs supplémentaires par an** dans les secteurs agricole, hôtelier et de soins à la personne",
        "La natalité espagnole est l'une des plus basses d'Europe (1,19 enfant par femme en 2024)",
        "Sans immigration légale active, le système de retraites sera en déficit structurel d'ici 2030",
      ],
    },
    { type: "h3", texte: "L'argument économique : les sans-papiers travaillent déjà" },
    {
      type: "p",
      texte: "L'argument central du gouvernement espagnol est pragmatique : ces 500 000 personnes **travaillent déjà en Espagne**, souvent au noir, sans cotiser à la Sécurité sociale. Les régulariser permet :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "D'encaisser **des milliards d'euros de cotisations sociales** supplémentaires",
        "De réduire le travail dissimulé et l'exploitation des travailleurs précaires",
        "De stabiliser des familles qui contribuent depuis des années à l'économie locale",
      ],
    },
    { type: "h3", texte: "La réaction politique : un sujet divisé" },
    {
      type: "p",
      texte: "La droite espagnole (PP et Vox) s'y oppose vigoureusement, parlant de \"prime à l'illégalité\". La gauche et les syndicats y voient une nécessité économique. Le débat ressemble étrangement à celui qui se joue en France, mais avec une décision différente.",
    },
    {
      type: "h2",
      texte: "La France fait le contraire : pourquoi la régularisation massive est impossible ici",
      id: "la-france-fait-le-contraire",
    },
    {
      type: "p",
      texte: "Pendant que l'Espagne ouvre ses guichets, la France durcit systématiquement ses conditions et augmente ses taxes. Comprendre pourquoi nécessite de regarder les différences politiques et institutionnelles.",
    },
    {
      type: "h3",
      texte: "La France n'a pas de \"programme de régularisation\", elle a une \"circulaire\"",
    },
    {
      type: "p",
      texte: "En France, il n'existe pas de loi permettant une régularisation automatique. Les sans-papiers peuvent tenter une **admission exceptionnelle au séjour (AES)**, encadrée par la **circulaire Valls de 2012**, qui pose des critères stricts :",
    },
    {
      type: "tableau",
      entetes: ["Critère", "Condition française"],
      lignes: [
        ["Durée de présence", "5 ans (ou 3 ans avec enfant scolarisé depuis 3 ans)"],
        ["Travail", "Promesse d'embauche + accord de l'inspection du travail"],
        ["Intégration", "Français parlé, pas d'OQTF récente"],
        ["Appréciation", "Entièrement discrétionnaire du préfet"],
      ],
    },
    {
      type: "p",
      texte: "Le mot clé : **discrétionnaire**. Même si vous remplissez tous les critères, le préfet peut refuser. C'est l'opposé du droit, c'est une faveur.",
    },
    { type: "h3", texte: "Le poids politique du sujet en France" },
    {
      type: "p",
      texte: "En France, la question de la régularisation est politiquement explosive depuis la montée du Rassemblement national. Aucun gouvernement depuis 2012 n'a voulu prendre le risque politique d'annoncer une \"régularisation massive\". La circulaire Valls, régulièrement durcis dans son application, est le seul filet de sécurité, et il est troué.",
    },
    { type: "h3", texte: "Ce que vivent les sans-papiers en France en 2026" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Environ 600 000 à 800 000 personnes** en situation irrégulière sur le territoire (estimation ONG, données officielles non publiées)",
        "Délai moyen pour obtenir un rendez-vous en préfecture : **entre 6 et 18 mois** selon les régions",
        "Taux de régularisation exceptionnelle : **en baisse depuis 2021** selon la CIMADE",
        "Nouvelle taxe au 1er mai 2026 : **650 euros** pour un premier titre, payés même en cas de refus (100 euros non remboursables)",
      ],
    },
    { type: "h3", texte: "La comparaison qui choque" },
    {
      type: "tableau",
      entetes: ["Critère", "France", "Espagne"],
      lignes: [
        [
          "Programme de régularisation",
          "Non : décision préfectorale discrétionnaire",
          "Oui : droit formalisé avec critères précis",
        ],
        ["Durée de présence requise", "5 ans", "3 ans"],
        ["Coût de la démarche", "~650 € (dont 100 € non remboursables)", "~70 à 120 €"],
        ["Délai de traitement", "4 à 6 mois (voire plus)", "3 à 6 mois prévus"],
        ["Nombre de régularisations/an", "~35 000", "~482 000 (programme 2026)"],
      ],
    },
    {
      type: "h2",
      texte: "Peut-on aller en Espagne pour se régulariser ? Ce que la loi dit",
      id: "peut-on-aller-en-espagne-pour-se-regulariser",
    },
    {
      type: "p",
      texte: "C'est la question que beaucoup se posent. La réponse est nuancée, et comporte des pièges sérieux.",
    },
    { type: "h3", texte: "La condition rédhibitoire : être présent en Espagne depuis 3 ans" },
    {
      type: "p",
      texte: "Le programme espagnol exige une **présence sur le sol espagnol** de 3 ans minimum, avec des preuves (contrats, factures, attestations). Impossible de partir de France aujourd'hui et de prétendre être en Espagne depuis 3 ans.",
    },
    { type: "h3", texte: "L'espace Schengen ne suffit pas" },
    {
      type: "p",
      texte: "Certains pensent que la liberté de circulation Schengen permet de se déplacer et de changer de pays de résidence. C'est partiellement vrai pour les citoyens européens, mais pour les ressortissants de pays tiers en situation irrégulière, **traverser la frontière franco-espagnole sans titre de séjour est un risque réel** : contrôles renforcés, retours forcés, signalement au fichier Schengen.",
    },
    { type: "h3", texte: "Si vous avez des attaches des deux côtés" },
    {
      type: "p",
      texte: "Si vous résidez parfois en Espagne, avez travaillé là-bas, avez des preuves de présence sur le sol espagnol depuis 3 ans, le programme peut s'appliquer à votre situation. Rapprochez-vous d'une association de défense des droits des étrangers espagnole : **ACCEM**, **CEAR** (Comisión Española de Ayuda al Refugiado) ou les **Cáritas diocésanas** sont les principaux acteurs.",
    },
    { type: "h3", texte: "Ce que cela change pour les demandeurs en France" },
    {
      type: "p",
      texte: "Pour ceux qui sont en France depuis moins de 5 ans, ce programme espagnol n'est pas une porte de sortie directe. Mais il montre qu'un autre modèle est possible, et renforce les arguments des associations qui réclament une réforme de la politique de régularisation française.",
    },
    {
      type: "h2",
      texte: "Ce que réclament les associations en France face au modèle espagnol",
      id: "que-demandent-les-associations-en-france",
    },
    {
      type: "p",
      texte: "Face au choix espagnol, les associations françaises de défense des droits des étrangers ont intensifié leurs appels à une réforme profonde de la politique française.",
    },
    { type: "h3", texte: "La demande principale : transformer la circulaire en droit" },
    {
      type: "p",
      texte: "La Cimade, le GISTI, France terre d'asile et une vingtaine d'autres organisations réclament qu'on remplace la circulaire Valls (décision discrétionnaire) par un **droit opposable à la régularisation** : si vous remplissez les critères, vous avez droit au titre, le préfet ne peut pas refuser.",
    },
    { type: "h3", texte: "Les critères que les associations proposent" },
    {
      type: "tableau",
      entetes: ["Critère", "Proposition des associations"],
      lignes: [
        ["Durée de présence", "3 ans (aligné sur l'Espagne)"],
        ["Travail", "Pas d'emploi obligatoire : une intégration sociale suffit"],
        ["Langue", "Niveau A1 suffit (abandon du B1 pour la naturalisation)"],
        ["Décision", "Liée (pas de marge discrétionnaire pour le préfet)"],
      ],
    },
    { type: "h3", texte: "La réponse du gouvernement français" },
    {
      type: "p",
      texte: "Le gouvernement actuel n'a pas répondu favorablement à ces demandes. La loi Asile et Immigration de 2024 est allée dans le sens contraire, durcissement des conditions, hausse des taxes, extensions de la rétention en CRA. La dynamique politique française reste hostile à toute mesure perçue comme un \"appel d'air\".",
    },
    { type: "h3", texte: "L'argument économique ignoré" },
    {
      type: "p",
      texte: "Plusieurs économistes français (dont ceux de l'OCDE) ont pourtant montré que la France fait face aux mêmes défis démographiques que l'Espagne : vieillissement, pénuries de main-d'œuvre dans les secteurs agricole, du bâtiment et du soin. La régularisation pourrait générer **plusieurs milliards d'euros de cotisations sociales supplémentaires** par an. Cet argument économique reste peu entendu dans le débat politique français.",
    },
    {
      type: "h2",
      texte: "Que faire si vous êtes en situation irrégulière en France en 2026 ?",
      id: "que-faire-si-vous-etes-sans-papiers-en-france",
    },
    {
      type: "p",
      texte: "L'exemple espagnol ne change rien immédiatement à votre situation en France. Mais voici les voies légales disponibles.",
    },
    { type: "h3", texte: "Voie 1 : L'admission exceptionnelle au séjour (AES)" },
    { type: "p", texte: "C'est la voie principale en France. Elle est possible si :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous êtes en France depuis **5 ans** (ou 3 ans avec un enfant scolarisé depuis 3 ans en France)",
        "Vous avez une **promesse d'embauche** signée + accord de l'inspection du travail (pour le motif travail)",
        "Ou vous avez des **attaches familiales profondes** (enfant français, conjoint français depuis au moins 2 ans)",
      ],
    },
    {
      type: "p",
      texte: "La demande est déposée directement en préfecture. Le délai de réponse est de 4 à 6 mois.",
    },
    { type: "h3", texte: "Voie 2 : La protection internationale (demande d'asile)" },
    {
      type: "p",
      texte: "Si vous risquez des persécutions dans votre pays d'origine, la demande d'asile auprès de l'**OFPRA** est une voie distincte. Elle offre un titre de séjour pendant l'instruction (attestation de demande d'asile) et, en cas de succès, le statut de réfugié.",
    },
    { type: "h3", texte: "Voie 3 : Le titre pour raisons médicales" },
    {
      type: "p",
      texte: "Si vous souffrez d'une pathologie grave et que les soins ne sont pas disponibles dans votre pays, vous pouvez demander un titre de séjour pour **raisons médicales** (article L425-9 du CESEDA). Ce titre est exonéré de taxes.",
    },
    { type: "h3", texte: "Voie 4 : Rapprochez-vous d'une association" },
    {
      type: "p",
      texte: "Avant toute démarche, consultez une association qui fait des permanences juridiques gratuites :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**La Cimade** : lacimade.org, permanences dans toute la France",
        "**GISTI** : gisti.org, ressources juridiques et orientation",
        "**Secours catholique** : aide matérielle et accompagnement administratif",
        "**France Fraternités** : accompagnement des personnes isolées",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "L'Espagne régularise 500 000 sans-papiers en 2026. La France durcit ses conditions et hausse ses taxes à 650 euros. Ces deux pays font des choix politiques opposés face au même défi européen. Pour les personnes en situation irrégulière en France, rien ne change dans l'immédiat, mais l'exemple espagnol montre qu'une autre voie est possible. Si vous êtes concerné, ne restez pas seul : les associations de défense des droits des étrangers peuvent vous aider à identifier la meilleure voie légale pour votre situation.",
      ton: "bleu",
    },
  ],
};

export default article;
