/**
 * Moteur de décision — « Suis-je concerné par l'examen civique ? »
 *
 * Sources officielles :
 * - Service-Public, fiche F39530 (carte de séjour pluriannuelle et carte de résident)
 *   https://www.service-public.gouv.fr/particuliers/vosdroits/F39530
 * - Ministère de l'Intérieur, portail de la formation civique
 *   https://formation-civique.interieur.gouv.fr/examen-civique/informations-generales-sur-lexamen-civique/
 * - Décret n° 2025-648 du 15 juillet 2025, complété par l'arrêté du 10 octobre 2025
 * - CESEDA, art. L. 413-5 (dispenses de contrat d'intégration républicaine)
 * - Accord franco-algérien du 27 décembre 1968 (régime autonome)
 *
 * Règles structurantes retenues :
 * 1. L'obligation ne vise que les ressortissants NON européens.
 * 2. Pour la carte de séjour pluriannuelle, seules sont visées les PREMIÈRES
 *    demandes de titre SOUMIS au contrat d'intégration républicaine (CIR).
 *    Les titres dispensés de CIR (étudiant, stagiaire, visiteur, travailleur
 *    temporaire, passeport talent et famille) ne sont donc pas concernés.
 * 3. Les renouvellements ne sont jamais concernés.
 * 4. La naturalisation relève du CODE CIVIL : aucune dispense tirée d'un accord
 *    de séjour (accord franco-algérien) ni du statut de protection ne s'y applique.
 * 5. Les dispenses « 65 ans » et « santé/handicap » sont documentées pour les
 *    TITRES DE SÉJOUR. Leur transposition à la naturalisation n'est pas établie
 *    par les sources officielles consultées : le moteur reste prudent et invite
 *    à confirmer auprès de la préfecture plutôt que d'affirmer une dispense.
 */

export type Nationalite = 'ue' | 'britannique' | 'algerienne' | 'autre';

export type Demarche =
  | 'naturalisation'
  | 'carte_resident'
  | 'carte_pluriannuelle'
  | 'renouvellement'
  | 'titre_temporaire';

export type MentionCsp = 'soumise_cir' | 'dispensee_cir';

export type Protection = 'aucune' | 'protection_internationale';

export type Verdict = 'concerne' | 'non_concerne' | 'a_confirmer';

export interface Reponses {
  nationalite?: Nationalite;
  demarche?: Demarche;
  mentionCsp?: MentionCsp;
  age65?: boolean;
  protection?: Protection;
  santeEmpeche?: boolean;
}

export interface Resultat {
  verdict: Verdict;
  titre: string;
  resume: string;
  /** Raisons qui fondent la conclusion, affichées sous forme de liste. */
  motifs: string[];
  /** Point de vigilance affiché en encadré, le cas échéant. */
  avertissement?: string;
  /** Référence officielle citée en bas de résultat. */
  reference: string;
}

// ---------------------------------------------------------------------------
// Définition des étapes du questionnaire
// ---------------------------------------------------------------------------

export interface Option<T extends string = string> {
  valeur: T;
  label: string;
  description?: string;
}

/** Champ 1 — boutons radio. */
export const NATIONALITES: Option<Nationalite>[] = [
  {
    valeur: 'autre',
    label: 'Autre nationalité (hors UE)',
    description: "Maroc, Tunisie, Sénégal, Côte d'Ivoire, Turquie, Chine, Brésil…",
  },
  {
    valeur: 'algerienne',
    label: 'Algérienne',
    description: "Régime particulier de l'accord franco-algérien du 27 décembre 1968",
  },
  {
    valeur: 'ue',
    label: 'Union européenne, EEE ou Suisse',
    description: 'Allemagne, Espagne, Italie, Portugal, Roumanie, Norvège, Suisse…',
  },
  {
    valeur: 'britannique',
    label: 'Britannique (accord de retrait)',
    description: 'Ressortissant du Royaume-Uni installé en France avant le Brexit',
  },
];

/** Champ 2 — liste déroulante. */
export const DEMARCHES: Option<Demarche>[] = [
  {
    valeur: 'naturalisation',
    label: 'Naturalisation française (décret ou mariage)',
  },
  {
    valeur: 'carte_resident',
    label: 'Première carte de résident (10 ans)',
  },
  {
    valeur: 'carte_pluriannuelle',
    label: 'Première carte de séjour pluriannuelle',
  },
  {
    valeur: 'renouvellement',
    label: "Renouvellement d'un titre que je détiens déjà",
  },
  {
    valeur: 'titre_temporaire',
    label: 'Titre de séjour temporaire (1 an) ou VLS-TS',
  },
];

/** Champ 3 — liste déroulante conditionnelle (carte pluriannuelle uniquement). */
export const MENTIONS_CSP: Option<MentionCsp>[] = [
  {
    valeur: 'soumise_cir',
    label: 'Salarié, vie privée et familiale, entrepreneur, autre',
    description: "Mentions soumises au contrat d'intégration républicaine",
  },
  {
    valeur: 'dispensee_cir',
    label: 'Passeport talent, étudiant, visiteur, stagiaire, travailleur temporaire',
    description: 'Mentions dispensées de CIR (art. L. 413-5 du CESEDA), famille incluse',
  },
];

/** Champ 4 — cases à cocher. */
export const DISPENSES: { id: 'age65' | 'protection' | 'santeEmpeche'; label: string; description: string }[] = [
  {
    id: 'age65',
    label: "J'aurai 65 ans révolus à la date du dépôt",
    description: "C'est la date de dépôt du dossier qui compte, pas celle de son instruction.",
  },
  {
    id: 'protection',
    label: "Je bénéficie d'une protection internationale",
    description: 'Statut de réfugié, protection subsidiaire ou apatridie reconnue.',
  },
  {
    id: 'santeEmpeche',
    label: "Un handicap ou mon état de santé m'empêche de passer un examen",
    description: 'Une dispense ou un aménagement suppose un certificat médical circonstancié.',
  },
];

// ---------------------------------------------------------------------------
// Moteur de décision
// ---------------------------------------------------------------------------

const REF_SEJOUR =
  'Service-Public, fiche F39530 — décret n° 2025-648 du 15 juillet 2025';
const REF_CIR = 'CESEDA, art. L. 413-5 — dispenses de contrat d\'intégration républicaine';
const REF_ALGERIE = 'Accord franco-algérien du 27 décembre 1968';
const REF_NATIONALITE = 'Code civil — décret n° 2025-648 du 15 juillet 2025';

export function evaluer(reponses: Reponses): Resultat | null {
  const { nationalite, demarche, mentionCsp, protection, age65, santeEmpeche } = reponses;

  if (!nationalite) return null;

  // 1. Ressortissants européens, EEE, Suisse et britanniques sous accord de retrait.
  if (nationalite === 'ue' || nationalite === 'britannique') {
    return {
      verdict: 'non_concerne',
      titre: "Vous n'avez pas à passer l'examen civique",
      resume:
        "L'examen civique ne vise que les ressortissants non européens. Votre droit au séjour relève d'un régime distinct, qui ne prévoit pas cette obligation.",
      motifs: [
        nationalite === 'ue'
          ? 'Vous êtes ressortissant de l\'Union européenne, de l\'EEE ou de Suisse.'
          : "Vous relevez de l'accord de retrait du Royaume-Uni.",
        "L'obligation d'examen civique ne s'applique qu'aux ressortissants de pays tiers.",
      ],
      avertissement:
        "Si vous demandez un jour la naturalisation française, la règle change : la nationalité relève du code civil et l'examen civique devient exigible.",
      reference: REF_SEJOUR,
    };
  }

  if (!demarche) return null;

  // 2. Naturalisation — le code civil s'applique à tous, sans dérogation bilatérale.
  if (demarche === 'naturalisation') {
    if (age65 === undefined || santeEmpeche === undefined) return null;

    if (santeEmpeche || age65) {
      return {
        verdict: 'a_confirmer',
        titre: 'À confirmer auprès de la préfecture',
        resume:
          "L'examen civique est en principe exigé pour toute demande de naturalisation. Votre situation peut ouvrir droit à une dispense ou à un aménagement, mais celle-ci doit être confirmée.",
        motifs: [
          'La naturalisation relève du code civil : elle est soumise à l\'examen civique depuis le 1er janvier 2026.',
          age65
            ? 'La dispense liée à l\'âge de 65 ans est documentée pour les titres de séjour ; son application à la naturalisation doit être vérifiée.'
            : 'Une dispense ou un aménagement pour raison de santé suppose un certificat médical circonstancié.',
          'Le niveau B2 en français reste exigé, avec un certificat de moins de deux ans au dépôt.',
        ],
        avertissement:
          "Tant que la dispense n'est pas confirmée par écrit, préparez-vous : un dossier déposé sans attestation est déclaré incomplet.",
        reference: REF_NATIONALITE,
      };
    }

    const motifs = [
      'La naturalisation relève du code civil, et non du CESEDA ni des accords bilatéraux de séjour.',
      'Il vous faut 32 bonnes réponses sur 40 (80 %) pour obtenir l\'attestation.',
      'Le niveau B2 en français est également exigé, avec un certificat de moins de deux ans au dépôt.',
    ];

    if (nationalite === 'algerienne') {
      motifs.splice(
        1,
        0,
        "L'accord franco-algérien de 1968 ne couvre que la circulation, l'emploi et le séjour : il ne vous dispense pas pour la nationalité."
      );
    }
    if (protection === 'protection_internationale') {
      motifs.splice(
        1,
        0,
        'Votre protection internationale vous dispense pour le titre de séjour, mais pas pour la nationalité.'
      );
    }

    return {
      verdict: 'concerne',
      titre: "Oui, vous devez passer l'examen civique",
      resume:
        "Toute demande de naturalisation — par décret comme par mariage — suppose la réussite de l'examen civique depuis le 1er janvier 2026.",
      motifs,
      avertissement:
        "Anticipez : entre l'inscription et le créneau disponible, comptez souvent 4 à 8 semaines. Un dossier déposé sans attestation est déclaré incomplet.",
      reference: REF_NATIONALITE,
    };
  }

  // 3. Démarches de séjour hors champ.
  if (demarche === 'renouvellement') {
    return {
      verdict: 'non_concerne',
      titre: "Vous n'avez pas à passer l'examen civique",
      resume:
        "L'examen civique ne vise que les premières demandes de carte pluriannuelle et de carte de résident. Les renouvellements en sont exclus.",
      motifs: [
        'Vous renouvelez un titre que vous détenez déjà : l\'obligation ne s\'applique pas.',
        "L'attestation n'est pas exigée au renouvellement d'une carte précédemment obtenue.",
      ],
      avertissement:
        "Attention : un changement de statut, ou le passage d'un titre annuel à votre PREMIÈRE carte pluriannuelle, compte comme une première demande et déclenche l'obligation.",
      reference: REF_SEJOUR,
    };
  }

  if (demarche === 'titre_temporaire') {
    return {
      verdict: 'non_concerne',
      titre: "Vous n'avez pas à passer l'examen civique",
      resume:
        "L'examen civique ne conditionne que la carte de séjour pluriannuelle, la carte de résident et la naturalisation. Un titre temporaire d'un an n'est pas concerné.",
      motifs: [
        'Votre démarche porte sur un titre temporaire ou la validation d\'un VLS-TS.',
        "L'obligation vise les titres pluriannuels, les cartes de résident et la nationalité.",
      ],
      avertissement:
        "Anticipez la suite : lorsque vous demanderez votre première carte pluriannuelle, l'examen pourra devenir exigible selon la mention du titre.",
      reference: REF_SEJOUR,
    };
  }

  // 4. Régime algérien pour les démarches de séjour.
  if (nationalite === 'algerienne') {
    return {
      verdict: 'non_concerne',
      titre: "Vous n'avez pas à passer l'examen civique",
      resume:
        "L'accord franco-algérien du 27 décembre 1968 crée un régime autonome, séparé du CESEDA. Il ne prévoit pas d'examen civique pour le certificat de résidence.",
      motifs: [
        'Votre séjour est régi par l\'accord de 1968, et non par le droit commun des étrangers.',
        "Le CESEDA ne s'applique aux ressortissants algériens que si l'accord le prévoit expressément — ce qui n'est pas le cas de l'examen civique.",
        'Vous recevez un certificat de résidence algérien, et non une carte de séjour de droit commun.',
      ],
      avertissement:
        "Si vous visez la naturalisation française, la réponse s'inverse : la nationalité relève du code civil et l'examen civique devient obligatoire.",
      reference: REF_ALGERIE,
    };
  }

  // 5. Première carte pluriannuelle dispensée de CIR.
  if (demarche === 'carte_pluriannuelle') {
    if (!mentionCsp) return null;
    if (mentionCsp === 'dispensee_cir') {
      return {
        verdict: 'non_concerne',
        titre: "Vous n'avez pas à passer l'examen civique",
        resume:
          "L'obligation ne vise que les premières cartes pluriannuelles soumises au contrat d'intégration républicaine. Votre mention en est dispensée.",
        motifs: [
          "Les mentions passeport talent, étudiant, visiteur, stagiaire et travailleur temporaire sont dispensées de CIR (art. L. 413-5 du CESEDA).",
          "L'examen civique ne conditionne que les premières cartes pluriannuelles soumises au CIR.",
        ],
        avertissement:
          "Vérifiez la mention exacte portée sur votre titre auprès de votre préfecture : c'est elle, et non votre situation générale, qui détermine l'obligation. En cas de changement de statut vers une mention soumise au CIR, l'examen redevient exigible.",
        reference: REF_CIR,
      };
    }
  }

  // 6. Protection internationale — dispense pour le séjour.
  if (protection === 'protection_internationale') {
    return {
      verdict: 'non_concerne',
      titre: "Vous n'avez pas à passer l'examen civique",
      resume:
        "Les bénéficiaires d'une protection internationale ne sont pas soumis à l'examen civique pour la délivrance de leur titre de séjour.",
      motifs: [
        'Réfugiés, bénéficiaires de la protection subsidiaire et apatrides sont dispensés pour le séjour.',
        'Vos conditions d\'intégration sont appréciées séparément.',
      ],
      avertissement:
        "Cette dispense ne vaut PAS pour la naturalisation. Si vous visez la nationalité française, l'examen civique redevient obligatoire — c'est l'erreur la plus fréquente dans les dossiers.",
      reference: REF_SEJOUR,
    };
  }

  // 7. Dispenses transversales pour le séjour.
  if (age65 === undefined || santeEmpeche === undefined) return null;

  if (age65) {
    return {
      verdict: 'non_concerne',
      titre: "Vous n'avez pas à passer l'examen civique",
      resume:
        'Les personnes âgées de 65 ans révolus à la date du dépôt sont dispensées de l\'examen civique pour leur titre de séjour.',
      motifs: [
        'Vous aurez 65 ans révolus au moment du dépôt de votre demande.',
        'La préfecture applique cette dispense sans démarche particulière de votre part.',
      ],
      avertissement:
        "La date retenue est celle du DÉPÔT, pas celle de l'instruction. Si vous déposez avant votre anniversaire, vous restez concerné par l'examen.",
      reference: REF_SEJOUR,
    };
  }

  if (santeEmpeche) {
    return {
      verdict: 'a_confirmer',
      titre: 'Une dispense est possible, à faire confirmer',
      resume:
        "Lorsque l'état de santé ou le handicap rend le passage de l'examen impossible, une dispense peut être accordée. Un aménagement des conditions d'examen est également possible.",
      motifs: [
        'Votre démarche entre dans le champ de l\'obligation d\'examen civique.',
        'Un certificat médical circonstancié peut ouvrir droit à une dispense ou à un aménagement (temps majoré, matériel adapté, assistance).',
        'Le certificat doit établir en quoi votre état empêche concrètement de composer.',
      ],
      avertissement:
        "Formulez la demande le plus tôt possible : auprès du centre à l'inscription pour un aménagement, dès le dépôt pour une dispense. Une demande présentée après un examen manqué est bien plus difficile à faire valoir.",
      reference: REF_SEJOUR,
    };
  }

  // 8. Cas général : obligation.
  return {
    verdict: 'concerne',
    titre: "Oui, vous devez passer l'examen civique",
    resume:
      demarche === 'carte_resident'
        ? "Toute première demande de carte de résident par un ressortissant non européen suppose la réussite de l'examen civique depuis le 1er janvier 2026."
        : "Toute première demande de carte de séjour pluriannuelle soumise au contrat d'intégration républicaine suppose la réussite de l'examen civique depuis le 1er janvier 2026.",
    motifs: [
      'Vous êtes ressortissant d\'un pays tiers et votre démarche est une première demande.',
      demarche === 'carte_resident'
        ? 'Les premières cartes de résident sont visées par l\'obligation.'
        : 'Votre mention de titre est soumise au contrat d\'intégration républicaine.',
      'Il vous faut 32 bonnes réponses sur 40 (80 %) pour obtenir l\'attestation.',
    ],
    avertissement:
      "Bonne nouvelle : l'attestation n'a pas de durée de validité. Obtenue une fois, elle vaut pour vos démarches futures — une attestation « carte de résident » vaut aussi pour la carte pluriannuelle.",
    reference: REF_SEJOUR,
  };
}
