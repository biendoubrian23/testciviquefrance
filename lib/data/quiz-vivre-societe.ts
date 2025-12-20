// =====================================================
// QUESTIONS - VIVRE DANS LA SOCIÉTÉ FRANÇAISE
// 4 premiers niveaux (40 questions) - Version hashée côté client
// =====================================================

// Fonction de hash simple (djb2) - identique aux autres quiz
function hashAnswer(questionId: number, answerIndex: number): string {
  const str = `q${questionId}_a${answerIndex}_civique2024`;
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16);
}

export interface QuizQuestion {
  id: number;
  niveau: number;
  question: string;
  options: string[];
  correctHash: string;
  explication: string;
}

// ==================== NIVEAU 1 : INTÉGRATION ET CITOYENNETÉ ====================
const NIVEAU_1: QuizQuestion[] = [
  {
    id: 1001,
    niveau: 1,
    question: "Quel est le contenu obligatoire du Contrat d'Intégration Républicaine (CIR) signé avec l'OFII ?",
    options: [
      "Une formation civique et une formation linguistique si le niveau B1 n'est pas atteint",
      "Uniquement un test de français",
      "Un cours d'histoire de France de 6 mois",
      "Un examen médical et une déclaration de revenus"
    ],
    correctHash: hashAnswer(1001, 0),
    explication: "Le CIR comprend une formation civique obligatoire sur les principes et valeurs de la République, et une formation linguistique pour atteindre le niveau A1 (avec objectif B1 pour la naturalisation)."
  },
  {
    id: 1002,
    niveau: 1,
    question: "Quelle condition de résidence est généralement requise pour demander la naturalisation française ?",
    options: [
      "5 ans de résidence régulière et continue en France",
      "10 ans de résidence en France",
      "2 ans de résidence en France",
      "Aucune durée minimale de résidence"
    ],
    correctHash: hashAnswer(1002, 0),
    explication: "La naturalisation nécessite en général 5 ans de résidence régulière en France. Ce délai peut être réduit dans certains cas (mariage avec un Français, services exceptionnels, niveau d'études...)."
  },
  {
    id: 1003,
    niveau: 1,
    question: "Quel niveau de français est exigé pour la naturalisation depuis les réformes récentes ?",
    options: [
      "Niveau B1 oral et écrit du CECRL",
      "Niveau A1 oral uniquement",
      "Niveau C1 universitaire",
      "Aucun niveau n'est requis"
    ],
    correctHash: hashAnswer(1003, 0),
    explication: "Le niveau B1 du Cadre Européen Commun de Référence pour les Langues (CECRL) est requis à l'oral et à l'écrit. Il correspond à un niveau intermédiaire permettant de s'exprimer de façon autonome."
  },
  {
    id: 1004,
    niveau: 1,
    question: "Comment un enfant né en France de parents étrangers acquiert-il la nationalité française ?",
    options: [
      "Automatiquement à 18 ans s'il a résidé 5 ans en France depuis l'âge de 11 ans",
      "Automatiquement à la naissance (droit du sol absolu)",
      "Uniquement par demande des parents avant 13 ans",
      "Jamais, il reste étranger toute sa vie"
    ],
    correctHash: hashAnswer(1004, 0),
    explication: "C'est le droit du sol différé. L'enfant né en France de parents étrangers devient français automatiquement à 18 ans s'il a vécu en France au moins 5 ans depuis ses 11 ans. Il peut aussi demander la nationalité dès 16 ans ou ses parents dès 13 ans."
  },
  {
    id: 1005,
    niveau: 1,
    question: "Quelle est la différence entre naturalisation et acquisition par déclaration ?",
    options: [
      "La naturalisation est discrétionnaire, la déclaration est un droit si les conditions sont remplies",
      "Ce sont deux termes synonymes",
      "La déclaration concerne uniquement les mineurs",
      "La naturalisation est automatique, la déclaration nécessite une demande"
    ],
    correctHash: hashAnswer(1005, 0),
    explication: "La naturalisation est une décision de l'État qui peut être refusée même si les conditions sont remplies. L'acquisition par déclaration (ex: conjoint de Français) est un droit : l'État ne peut pas la refuser si les conditions légales sont respectées."
  },
  {
    id: 1006,
    niveau: 1,
    question: "Qu'est-ce que la carte de résident de 10 ans et quelles sont les conditions pour l'obtenir ?",
    options: [
      "Un titre de séjour longue durée après 5 ans de résidence régulière avec conditions d'intégration",
      "Une carte d'identité française",
      "Un visa touristique de longue durée",
      "Un permis de travail permanent"
    ],
    correctHash: hashAnswer(1006, 0),
    explication: "La carte de résident est un titre de séjour de 10 ans renouvelable. Elle est accordée après 5 ans de séjour régulier, sous conditions d'intégration républicaine et de ressources. Elle donne le droit de travailler sans restriction."
  },
  {
    id: 1007,
    niveau: 1,
    question: "Quel organisme gère le premier accueil des étrangers et le Contrat d'Intégration Républicaine ?",
    options: [
      "L'OFII (Office Français de l'Immigration et de l'Intégration)",
      "La préfecture uniquement",
      "Pôle Emploi / France Travail",
      "La CAF (Caisse d'Allocations Familiales)"
    ],
    correctHash: hashAnswer(1007, 0),
    explication: "L'OFII est l'opérateur principal de l'État en matière d'intégration. Il fait passer la visite médicale, organise les formations civiques et linguistiques, et assure le suivi du CIR pendant 1 an."
  },
  {
    id: 1008,
    niveau: 1,
    question: "Quels documents constituent le « bloc de preuves » pour une demande de naturalisation ?",
    options: [
      "Justificatifs de résidence, d'intégration, de ressources, casier judiciaire vierge, attestation de niveau B1",
      "Uniquement le passeport et un justificatif de domicile",
      "Le diplôme du baccalauréat français",
      "Un certificat de l'ambassade du pays d'origine"
    ],
    correctHash: hashAnswer(1008, 0),
    explication: "Le dossier de naturalisation comprend : preuves de résidence (5 ans), certificat de niveau B1, casier judiciaire, justificatifs de ressources stables, attestation d'assimilation aux principes républicains, et preuve de connaissance de l'histoire et la culture française."
  },
  {
    id: 1009,
    niveau: 1,
    question: "Qu'est-ce que FranceConnect et quel est son rôle dans les démarches administratives ?",
    options: [
      "Un système d'authentification unique pour accéder aux services publics en ligne",
      "Un réseau social officiel du gouvernement",
      "Une application de traduction pour les étrangers",
      "Un formulaire papier obligatoire"
    ],
    correctHash: hashAnswer(1009, 0),
    explication: "FranceConnect est le système d'identification numérique de l'État. Il permet de se connecter à tous les services publics en ligne (impôts, CAF, Ameli, ANTS...) avec un seul compte, sécurisé par une identité vérifiée."
  },
  {
    id: 1010,
    niveau: 1,
    question: "Quelle est la procédure pour valider un VLS-TS (Visa Long Séjour valant Titre de Séjour) à l'arrivée en France ?",
    options: [
      "Validation en ligne sur le site de l'ANEF dans les 3 mois suivant l'arrivée",
      "Se présenter à la préfecture le jour de l'arrivée",
      "Aucune validation n'est nécessaire",
      "Obtenir un tampon à l'aéroport"
    ],
    correctHash: hashAnswer(1010, 0),
    explication: "Le VLS-TS doit être validé en ligne sur le portail de l'ANEF (Administration Numérique pour les Étrangers en France) dans les 3 mois suivant l'arrivée. Cette validation active le titre de séjour et permet de payer la taxe de séjour."
  }
];

// ==================== NIVEAU 2 : DÉMARCHES ADMINISTRATIVES ====================
const NIVEAU_2: QuizQuestion[] = [
  {
    id: 1011,
    niveau: 2,
    question: "Quel site internet permet d'effectuer la plupart des démarches administratives en ligne ?",
    options: [
      "service-public.fr",
      "google.fr",
      "amazon.fr",
      "facebook.com"
    ],
    correctHash: hashAnswer(1011, 0),
    explication: "Le site service-public.fr est le portail officiel de l'administration française. On y trouve toutes les informations et démarches en ligne."
  },
  {
    id: 1012,
    niveau: 2,
    question: "Quel document permet de justifier son identité et sa nationalité française ?",
    options: [
      "La carte nationale d'identité ou le passeport",
      "Le permis de conduire",
      "La carte Vitale",
      "La carte de transport"
    ],
    correctHash: hashAnswer(1012, 0),
    explication: "La carte nationale d'identité et le passeport sont les seuls documents officiels prouvant la nationalité française. Le permis de conduire n'est pas une pièce d'identité."
  },
  {
    id: 1013,
    niveau: 2,
    question: "Où doit-on déclarer une naissance en France ?",
    options: [
      "À la mairie du lieu de naissance",
      "À la préfecture",
      "À l'hôpital",
      "À l'école"
    ],
    correctHash: hashAnswer(1013, 0),
    explication: "La naissance doit être déclarée à la mairie du lieu de naissance dans les 5 jours suivant l'accouchement (hors week-ends et jours fériés)."
  },
  {
    id: 1014,
    niveau: 2,
    question: "Quel est le délai pour déclarer un changement d'adresse après un déménagement ?",
    options: [
      "Le faire dans les meilleurs délais (pas de délai légal précis)",
      "Exactement 24 heures",
      "1 an",
      "Jamais"
    ],
    correctHash: hashAnswer(1014, 0),
    explication: "Il n'y a pas de délai légal précis, mais il est recommandé de signaler son changement d'adresse rapidement aux différents organismes (impôts, CAF, assurance maladie...)."
  },
  {
    id: 1015,
    niveau: 2,
    question: "Quelle administration gère les impôts en France ?",
    options: [
      "La Direction Générale des Finances Publiques (DGFiP)",
      "La CAF",
      "Pôle Emploi",
      "La CPAM"
    ],
    correctHash: hashAnswer(1015, 0),
    explication: "La DGFiP (Direction Générale des Finances Publiques) gère le calcul et le recouvrement des impôts. Les déclarations se font sur impots.gouv.fr."
  },
  {
    id: 1016,
    niveau: 2,
    question: "Comment s'appelle l'identité numérique officielle de l'État français ?",
    options: [
      "FranceConnect",
      "GoogleConnect",
      "AppleID",
      "LinkedInConnect"
    ],
    correctHash: hashAnswer(1016, 0),
    explication: "FranceConnect est le système d'identification numérique de l'État. Il permet de se connecter à de nombreux services publics avec un seul compte."
  },
  {
    id: 1017,
    niveau: 2,
    question: "Où peut-on obtenir un extrait d'acte de naissance ?",
    options: [
      "À la mairie du lieu de naissance ou en ligne",
      "À la préfecture uniquement",
      "À l'hôpital",
      "Au commissariat"
    ],
    correctHash: hashAnswer(1017, 0),
    explication: "L'extrait d'acte de naissance s'obtient à la mairie du lieu de naissance ou en ligne sur le site service-public.fr. C'est gratuit."
  },
  {
    id: 1018,
    niveau: 2,
    question: "Quel est le numéro d'urgence européen valable dans toute l'UE ?",
    options: [
      "112",
      "911",
      "999",
      "000"
    ],
    correctHash: hashAnswer(1018, 0),
    explication: "Le 112 est le numéro d'urgence européen, gratuit et accessible 24h/24. Il fonctionne dans tous les pays de l'Union Européenne."
  },
  {
    id: 1019,
    niveau: 2,
    question: "Quel organisme gère les allocations familiales et les aides au logement ?",
    options: [
      "La CAF (Caisse d'Allocations Familiales)",
      "Pôle Emploi",
      "L'URSSAF",
      "La banque"
    ],
    correctHash: hashAnswer(1019, 0),
    explication: "La CAF verse les allocations familiales, les APL (Aide Personnalisée au Logement), le RSA, la prime d'activité et d'autres aides sociales."
  },
  {
    id: 1020,
    niveau: 2,
    question: "Que signifie CPAM ?",
    options: [
      "Caisse Primaire d'Assurance Maladie",
      "Centre de Prévention des Accidents Médicaux",
      "Comité de Protection des Assurés Malades",
      "Caisse de Paiement des Aides Médicales"
    ],
    correctHash: hashAnswer(1020, 0),
    explication: "La CPAM (Caisse Primaire d'Assurance Maladie) gère l'assurance maladie au niveau local. Elle rembourse les frais de santé et délivre la carte Vitale."
  }
];

// ==================== NIVEAU 3 : ACCÈS À LA NATIONALITÉ ====================
const NIVEAU_3: QuizQuestion[] = [
  {
    id: 1021,
    niveau: 3,
    question: "Après combien d'années de résidence en France peut-on demander la naturalisation ?",
    options: [
      "5 ans en général",
      "1 an",
      "10 ans",
      "2 ans"
    ],
    correctHash: hashAnswer(1021, 0),
    explication: "En règle générale, il faut 5 ans de résidence régulière en France pour demander la naturalisation. Ce délai peut être réduit dans certains cas (mariage, service militaire...)."
  },
  {
    id: 1022,
    niveau: 3,
    question: "Quel niveau de français est requis pour la naturalisation ?",
    options: [
      "Niveau B1 oral et écrit",
      "Niveau A1",
      "Aucun niveau requis",
      "Niveau C2"
    ],
    correctHash: hashAnswer(1022, 0),
    explication: "Le niveau B1 du CECRL (oral et écrit) est exigé pour la naturalisation. Il peut être attesté par un diplôme ou un test de langue."
  },
  {
    id: 1023,
    niveau: 3,
    question: "Comment un enfant né en France de parents étrangers peut-il devenir français ?",
    options: [
      "Automatiquement à 18 ans s'il a résidé 5 ans en France depuis ses 11 ans",
      "Il doit toujours faire une demande",
      "Jamais, il reste étranger",
      "Seulement par mariage"
    ],
    correctHash: hashAnswer(1023, 0),
    explication: "Un enfant né en France de parents étrangers devient automatiquement français à 18 ans s'il a résidé 5 ans en France (continus ou non) depuis l'âge de 11 ans."
  },
  {
    id: 1024,
    niveau: 3,
    question: "Comment s'appelle l'examen que doivent passer les candidats à la naturalisation ?",
    options: [
      "L'examen civique (sur l'histoire, la culture et les valeurs de la France)",
      "Le baccalauréat",
      "Le permis de conduire",
      "Le TOEFL"
    ],
    correctHash: hashAnswer(1024, 0),
    explication: "Depuis 2025, un examen civique portant sur l'histoire, la géographie, la culture et les valeurs de la France est obligatoire pour obtenir la nationalité française."
  },
  {
    id: 1025,
    niveau: 3,
    question: "Quelle est la différence entre naturalisation et acquisition par déclaration ?",
    options: [
      "La naturalisation est une décision de l'État, la déclaration est un droit si conditions remplies",
      "Ce sont deux termes identiques",
      "La naturalisation est plus rapide",
      "La déclaration concerne uniquement les mineurs"
    ],
    correctHash: hashAnswer(1025, 0),
    explication: "La naturalisation est une décision discrétionnaire de l'État. L'acquisition par déclaration (ex: conjoint de Français) est un droit si les conditions légales sont remplies."
  },
  {
    id: 1026,
    niveau: 3,
    question: "Un étranger marié avec un(e) Français(e) peut demander la nationalité après combien de temps ?",
    options: [
      "4 ans de mariage avec une communauté de vie",
      "1 mois",
      "10 ans",
      "Immédiatement"
    ],
    correctHash: hashAnswer(1026, 0),
    explication: "Le conjoint étranger d'un(e) Français(e) peut demander la nationalité après 4 ans de mariage et de communauté de vie effective. Il doit aussi avoir le niveau B1 en français."
  },
  {
    id: 1027,
    niveau: 3,
    question: "Où dépose-t-on une demande de naturalisation ?",
    options: [
      "À la préfecture ou sous-préfecture de son domicile",
      "À la mairie",
      "À l'ambassade",
      "Au tribunal"
    ],
    correctHash: hashAnswer(1027, 0),
    explication: "La demande de naturalisation se dépose à la préfecture ou sous-préfecture de votre domicile, ou en ligne via le portail de l'ANEF."
  },
  {
    id: 1028,
    niveau: 3,
    question: "Que reçoit-on lors de la cérémonie d'accueil dans la nationalité française ?",
    options: [
      "Un livret de citoyenneté et la Marseillaise est jouée",
      "De l'argent",
      "Un passeport automatiquement",
      "Un logement"
    ],
    correctHash: hashAnswer(1028, 0),
    explication: "Lors de la cérémonie d'accueil organisée par la préfecture, les nouveaux citoyens reçoivent un livret de citoyenneté. La Marseillaise est jouée et la Déclaration des droits de l'homme est remise."
  },
  {
    id: 1029,
    niveau: 3,
    question: "Peut-on conserver sa nationalité d'origine en devenant français ?",
    options: [
      "Oui, la France autorise la double nationalité",
      "Non, jamais",
      "Seulement pour les européens",
      "Seulement pour certains pays"
    ],
    correctHash: hashAnswer(1029, 0),
    explication: "La France autorise la double nationalité. Vous pouvez conserver votre nationalité d'origine en devenant français, sauf si le pays d'origine ne l'autorise pas."
  },
  {
    id: 1030,
    niveau: 3,
    question: "Qu'est-ce que le droit du sol ?",
    options: [
      "Le droit d'acquérir la nationalité du pays où l'on est né",
      "Le droit de posséder un terrain",
      "Le droit de cultiver la terre",
      "Le droit de choisir son lieu de résidence"
    ],
    correctHash: hashAnswer(1030, 0),
    explication: "Le droit du sol permet d'acquérir la nationalité d'un pays par le fait d'y être né. En France, c'est un droit du sol différé (à 18 ans sous conditions)."
  }
];

// ==================== NIVEAU 4 : LE SYSTÈME DE SANTÉ ====================
const NIVEAU_4: QuizQuestion[] = [
  {
    id: 1031,
    niveau: 4,
    question: "Comment s'appelle la carte qui permet le remboursement des soins en France ?",
    options: [
      "La carte Vitale",
      "La carte Bleue",
      "La carte de séjour",
      "La carte d'identité"
    ],
    correctHash: hashAnswer(1031, 0),
    explication: "La carte Vitale est la carte d'assurance maladie. Elle contient les informations nécessaires au remboursement des frais de santé."
  },
  {
    id: 1032,
    niveau: 4,
    question: "Quel est le numéro pour appeler le SAMU (urgences médicales) ?",
    options: [
      "15",
      "17",
      "18",
      "112"
    ],
    correctHash: hashAnswer(1032, 0),
    explication: "Le 15 est le numéro du SAMU (Service d'Aide Médicale Urgente). Le 17 est la police, le 18 les pompiers, et le 112 le numéro d'urgence européen."
  },
  {
    id: 1033,
    niveau: 4,
    question: "Qu'est-ce que le médecin traitant ?",
    options: [
      "Le médecin généraliste que vous choisissez comme référent pour votre suivi médical",
      "Un médecin qui ne soigne que les enfants",
      "Un médecin qui travaille uniquement à l'hôpital",
      "Un médecin spécialiste"
    ],
    correctHash: hashAnswer(1033, 0),
    explication: "Le médecin traitant est le médecin que vous choisissez comme premier interlocuteur pour votre santé. Il coordonne votre parcours de soins et vous oriente vers les spécialistes si nécessaire."
  },
  {
    id: 1034,
    niveau: 4,
    question: "Que signifie AME ?",
    options: [
      "Aide Médicale de l'État",
      "Assurance Maladie Européenne",
      "Association Médicale d'Entraide",
      "Allocation Mensuelle d'Entretien"
    ],
    correctHash: hashAnswer(1034, 0),
    explication: "L'AME (Aide Médicale de l'État) permet aux étrangers en situation irrégulière de bénéficier d'un accès aux soins sous conditions de résidence et de ressources."
  },
  {
    id: 1035,
    niveau: 4,
    question: "Qu'est-ce que la Complémentaire Santé Solidaire (CSS) ?",
    options: [
      "Une aide pour payer la mutuelle destinée aux personnes à faibles revenus",
      "Une carte de fidélité santé",
      "Un abonnement à la salle de sport",
      "Une assurance automobile"
    ],
    correctHash: hashAnswer(1035, 0),
    explication: "La CSS (Complémentaire Santé Solidaire) aide les personnes à revenus modestes à payer leur complémentaire santé. Elle peut être gratuite ou payante selon les revenus."
  },
  {
    id: 1036,
    niveau: 4,
    question: "Où peut-on se faire vacciner gratuitement ?",
    options: [
      "Dans les centres de vaccination, PMI, ou certains centres de santé",
      "Uniquement chez les médecins privés",
      "À la pharmacie exclusivement",
      "Seulement à l'étranger"
    ],
    correctHash: hashAnswer(1036, 0),
    explication: "Les vaccinations peuvent être faites gratuitement dans les centres de vaccination, les PMI (Protection Maternelle et Infantile) pour les enfants, ou certains centres de santé municipaux."
  },
  {
    id: 1037,
    niveau: 4,
    question: "Quel est le taux de remboursement habituel de la Sécurité sociale pour une consultation chez un médecin généraliste ?",
    options: [
      "70% du tarif conventionné",
      "100%",
      "50%",
      "0%"
    ],
    correctHash: hashAnswer(1037, 0),
    explication: "La Sécurité sociale rembourse généralement 70% du tarif conventionné pour une consultation chez un médecin généraliste. Le reste est à la charge du patient ou de sa mutuelle."
  },
  {
    id: 1038,
    niveau: 4,
    question: "Qu'est-ce que le parcours de soins coordonnés ?",
    options: [
      "Le système où l'on consulte d'abord son médecin traitant avant un spécialiste",
      "Une course d'obstacles médicale",
      "Un voyage organisé dans les hôpitaux",
      "Une randonnée santé"
    ],
    correctHash: hashAnswer(1038, 0),
    explication: "Le parcours de soins coordonnés consiste à consulter d'abord son médecin traitant qui vous orientera vers un spécialiste si besoin. Cela permet un meilleur remboursement."
  },
  {
    id: 1039,
    niveau: 4,
    question: "Qu'est-ce que la PMI ?",
    options: [
      "Protection Maternelle et Infantile, service de santé pour les mères et enfants",
      "Police Municipale d'Investigation",
      "Pension Minimum d'Invalidité",
      "Prévention des Maladies Infectieuses"
    ],
    correctHash: hashAnswer(1039, 0),
    explication: "La PMI (Protection Maternelle et Infantile) est un service départemental gratuit qui accompagne les femmes enceintes et les familles avec enfants de moins de 6 ans."
  },
  {
    id: 1040,
    niveau: 4,
    question: "Quelle est la fonction d'une pharmacie en France ?",
    options: [
      "Délivrer les médicaments sur ordonnance et conseiller les patients",
      "Uniquement vendre des parfums",
      "Faire des opérations chirurgicales",
      "Délivrer des visas"
    ],
    correctHash: hashAnswer(1040, 0),
    explication: "Les pharmacies délivrent les médicaments prescrits par les médecins, vendent des médicaments sans ordonnance et conseillent les patients sur leur santé."
  }
];

// ==================== NIVEAU 5 : TRAVAILLER EN FRANCE ====================
const NIVEAU_5: QuizQuestion[] = [
  {
    id: 1041,
    niveau: 5,
    question: "Quel est l'âge minimum légal pour travailler en France ?",
    options: [
      "16 ans (avec des restrictions)",
      "14 ans",
      "18 ans",
      "21 ans"
    ],
    correctHash: hashAnswer(1041, 0),
    explication: "L'âge minimum légal pour travailler est 16 ans, avec des protections particulières pour les mineurs. L'apprentissage peut commencer à 15 ans sous conditions."
  },
  {
    id: 1042,
    niveau: 5,
    question: "Quel organisme aide les demandeurs d'emploi à trouver du travail ?",
    options: [
      "France Travail (ex-Pôle Emploi)",
      "La CAF",
      "La CPAM",
      "L'URSSAF"
    ],
    correctHash: hashAnswer(1042, 0),
    explication: "France Travail (anciennement Pôle Emploi) accompagne les demandeurs d'emploi dans leur recherche de travail et verse les allocations chômage."
  },
  {
    id: 1043,
    niveau: 5,
    question: "Qu'est-ce que le SMIC ?",
    options: [
      "Le Salaire Minimum Interprofessionnel de Croissance",
      "Un syndicat de travailleurs",
      "Une assurance maladie",
      "Un type de contrat de travail"
    ],
    correctHash: hashAnswer(1043, 0),
    explication: "Le SMIC est le salaire horaire minimum légal en France. Il est revalorisé chaque année et aucun salarié ne peut être payé en dessous."
  },
  {
    id: 1044,
    niveau: 5,
    question: "Quelle est la durée légale du travail en France par semaine ?",
    options: [
      "35 heures",
      "40 heures",
      "30 heures",
      "45 heures"
    ],
    correctHash: hashAnswer(1044, 0),
    explication: "La durée légale du travail est de 35 heures par semaine depuis 2000. Les heures au-delà sont des heures supplémentaires majorées."
  },
  {
    id: 1045,
    niveau: 5,
    question: "Quel document doit obligatoirement être remis au salarié lors de l'embauche ?",
    options: [
      "Le contrat de travail",
      "Un passeport",
      "Un diplôme",
      "Une carte de crédit"
    ],
    correctHash: hashAnswer(1045, 0),
    explication: "Le contrat de travail écrit est obligatoire pour les CDD et recommandé pour les CDI. Il précise les conditions d'emploi : poste, salaire, horaires, etc."
  }
];

// ==================== NIVEAU 6 : LE DROIT DU TRAVAIL ====================
const NIVEAU_6: QuizQuestion[] = [
  {
    id: 1046,
    niveau: 6,
    question: "Que signifie CDI ?",
    options: [
      "Contrat à Durée Indéterminée",
      "Contrat de Durée Initiale",
      "Centre de Documentation et d'Information",
      "Certificat de Diplôme International"
    ],
    correctHash: hashAnswer(1046, 0),
    explication: "Le CDI (Contrat à Durée Indéterminée) est un contrat de travail sans date de fin. C'est la forme normale du contrat de travail en France."
  },
  {
    id: 1047,
    niveau: 6,
    question: "Combien de semaines de congés payés minimum un salarié a-t-il droit par an ?",
    options: [
      "5 semaines",
      "2 semaines",
      "3 semaines",
      "8 semaines"
    ],
    correctHash: hashAnswer(1047, 0),
    explication: "Tout salarié a droit à 5 semaines de congés payés minimum par an (2,5 jours ouvrables par mois travaillé)."
  },
  {
    id: 1048,
    niveau: 6,
    question: "Qu'est-ce qu'un syndicat ?",
    options: [
      "Une organisation qui défend les droits des travailleurs",
      "Une entreprise privée",
      "Un type de contrat de travail",
      "Une assurance maladie"
    ],
    correctHash: hashAnswer(1048, 0),
    explication: "Un syndicat est une organisation qui représente et défend les intérêts des salariés. Les principaux en France sont la CGT, la CFDT, FO, etc."
  },
  {
    id: 1049,
    niveau: 6,
    question: "Quelle est la durée maximale d'un CDD (Contrat à Durée Déterminée) ?",
    options: [
      "18 mois en général (renouvellements compris)",
      "6 mois",
      "5 ans",
      "Illimitée"
    ],
    correctHash: hashAnswer(1049, 0),
    explication: "Un CDD peut durer 18 mois maximum en général, renouvellements compris. Il ne peut être renouvelé que 2 fois."
  },
  {
    id: 1050,
    niveau: 6,
    question: "Qu'est-ce que les Prud'hommes ?",
    options: [
      "Le tribunal qui juge les litiges entre employeurs et salariés",
      "Une entreprise de recrutement",
      "Un syndicat patronal",
      "Une assurance chômage"
    ],
    correctHash: hashAnswer(1050, 0),
    explication: "Le Conseil de Prud'hommes est une juridiction paritaire qui règle les conflits individuels du travail entre employeurs et salariés."
  }
];

// ==================== NIVEAU 7 : AUTORITÉ PARENTALE ====================
const NIVEAU_7: QuizQuestion[] = [
  {
    id: 1051,
    niveau: 7,
    question: "Qu'est-ce que l'autorité parentale ?",
    options: [
      "L'ensemble des droits et devoirs des parents envers leurs enfants",
      "Le droit de punir physiquement ses enfants",
      "L'autorisation de travailler donnée aux mineurs",
      "Un document administratif"
    ],
    correctHash: hashAnswer(1051, 0),
    explication: "L'autorité parentale comprend les droits et devoirs des parents pour protéger, éduquer et assurer le développement de l'enfant dans son intérêt."
  },
  {
    id: 1052,
    niveau: 7,
    question: "Jusqu'à quel âge les parents sont-ils responsables de leurs enfants ?",
    options: [
      "Jusqu'à 18 ans (majorité)",
      "Jusqu'à 16 ans",
      "Jusqu'à 21 ans",
      "Jusqu'à 25 ans"
    ],
    correctHash: hashAnswer(1052, 0),
    explication: "Les parents exercent l'autorité parentale jusqu'à la majorité de l'enfant (18 ans). Après, l'enfant devient juridiquement autonome."
  },
  {
    id: 1053,
    niveau: 7,
    question: "L'école est-elle obligatoire en France ?",
    options: [
      "Oui, l'instruction est obligatoire de 3 à 16 ans",
      "Non, c'est un choix",
      "Seulement à partir de 6 ans",
      "Seulement jusqu'à 12 ans"
    ],
    correctHash: hashAnswer(1053, 0),
    explication: "L'instruction est obligatoire de 3 à 16 ans. Elle peut se faire à l'école ou à domicile. La formation est obligatoire jusqu'à 18 ans."
  },
  {
    id: 1054,
    niveau: 7,
    question: "Les châtiments corporels sur les enfants sont-ils autorisés en France ?",
    options: [
      "Non, ils sont interdits par la loi",
      "Oui, si c'est éducatif",
      "Oui, jusqu'à 10 ans",
      "Seulement à l'école"
    ],
    correctHash: hashAnswer(1054, 0),
    explication: "Depuis 2019, la loi interdit les violences éducatives ordinaires (fessées, gifles). L'autorité parentale s'exerce sans violence."
  },
  {
    id: 1055,
    niveau: 7,
    question: "En cas de séparation des parents, qui décide de la garde des enfants ?",
    options: [
      "Les parents d'un commun accord ou le juge aux affaires familiales",
      "Automatiquement la mère",
      "Le maire de la commune",
      "Les grands-parents"
    ],
    correctHash: hashAnswer(1055, 0),
    explication: "Les parents peuvent décider ensemble de la garde. En cas de désaccord, c'est le Juge aux Affaires Familiales (JAF) qui tranche dans l'intérêt de l'enfant."
  }
];

// ==================== NIVEAU 8 : LE SYSTÈME ÉDUCATIF ====================
const NIVEAU_8: QuizQuestion[] = [
  {
    id: 1056,
    niveau: 8,
    question: "L'école publique en France est-elle gratuite ?",
    options: [
      "Oui, l'école publique est gratuite et laïque",
      "Non, il faut payer des frais d'inscription",
      "Seulement pour les français",
      "Seulement au primaire"
    ],
    correctHash: hashAnswer(1056, 0),
    explication: "L'école publique est gratuite, laïque et obligatoire. Ces trois principes fondamentaux datent des lois Jules Ferry (1881-1882)."
  },
  {
    id: 1057,
    niveau: 8,
    question: "Quel est le diplôme qui sanctionne la fin du collège ?",
    options: [
      "Le Diplôme National du Brevet (DNB)",
      "Le Baccalauréat",
      "Le CAP",
      "La Licence"
    ],
    correctHash: hashAnswer(1057, 0),
    explication: "Le Brevet (DNB) est passé en fin de 3ème. Il évalue les connaissances acquises au collège mais n'est pas obligatoire pour passer au lycée."
  },
  {
    id: 1058,
    niveau: 8,
    question: "À quel âge entre-t-on généralement à l'école maternelle ?",
    options: [
      "3 ans",
      "2 ans",
      "5 ans",
      "6 ans"
    ],
    correctHash: hashAnswer(1058, 0),
    explication: "L'école maternelle accueille les enfants dès 3 ans (instruction obligatoire). Elle comprend la petite, moyenne et grande section."
  },
  {
    id: 1059,
    niveau: 8,
    question: "Quel diplôme permet d'accéder à l'université ?",
    options: [
      "Le Baccalauréat",
      "Le Brevet",
      "Le CAP",
      "Le BEP"
    ],
    correctHash: hashAnswer(1059, 0),
    explication: "Le Baccalauréat (bac) est le diplôme de fin d'études secondaires. Il ouvre l'accès à l'enseignement supérieur (université, BTS, etc.)."
  },
  {
    id: 1060,
    niveau: 8,
    question: "Qu'est-ce que Parcoursup ?",
    options: [
      "La plateforme d'inscription dans l'enseignement supérieur",
      "Un réseau social pour étudiants",
      "Une application de sport",
      "Un site de recherche d'emploi"
    ],
    correctHash: hashAnswer(1060, 0),
    explication: "Parcoursup est la plateforme nationale d'admission dans l'enseignement supérieur. Les lycéens y formulent leurs vœux d'orientation."
  }
];

// ==================== NIVEAU 9 : LOGEMENT ET VIE QUOTIDIENNE ====================
const NIVEAU_9: QuizQuestion[] = [
  {
    id: 1061,
    niveau: 9,
    question: "Qu'est-ce que l'APL ?",
    options: [
      "L'Aide Personnalisée au Logement",
      "L'Assurance Protection Logement",
      "L'Allocation Pour le Loyer",
      "L'Agence de Prêt Logement"
    ],
    correctHash: hashAnswer(1061, 0),
    explication: "L'APL (Aide Personnalisée au Logement) est une aide financière versée par la CAF pour réduire le montant du loyer selon les revenus."
  },
  {
    id: 1062,
    niveau: 9,
    question: "Qu'est-ce qu'un bail de location ?",
    options: [
      "Le contrat entre le propriétaire et le locataire",
      "Une facture d'électricité",
      "Un certificat de propriété",
      "Une assurance habitation"
    ],
    correctHash: hashAnswer(1062, 0),
    explication: "Le bail est le contrat de location signé entre le propriétaire (bailleur) et le locataire. Il fixe les conditions : durée, loyer, charges, etc."
  },
  {
    id: 1063,
    niveau: 9,
    question: "L'assurance habitation est-elle obligatoire pour un locataire ?",
    options: [
      "Oui, elle est obligatoire",
      "Non, c'est facultatif",
      "Seulement pour les maisons",
      "Seulement si on a des enfants"
    ],
    correctHash: hashAnswer(1063, 0),
    explication: "L'assurance habitation est obligatoire pour tout locataire. Elle couvre les risques locatifs (incendie, dégât des eaux, etc.)."
  },
  {
    id: 1064,
    niveau: 9,
    question: "Qu'est-ce que le dépôt de garantie ?",
    options: [
      "Une somme versée au propriétaire à la signature du bail",
      "Un cadeau au propriétaire",
      "Une taxe payée à l'État",
      "Les premiers loyers"
    ],
    correctHash: hashAnswer(1064, 0),
    explication: "Le dépôt de garantie (souvent appelé 'caution') est versé au propriétaire à l'entrée. Il est restitué à la fin, déduction faite des éventuelles réparations."
  },
  {
    id: 1065,
    niveau: 9,
    question: "Quel est le délai de préavis pour quitter un logement en zone tendue ?",
    options: [
      "1 mois",
      "3 mois",
      "6 mois",
      "2 semaines"
    ],
    correctHash: hashAnswer(1065, 0),
    explication: "En zone tendue (grandes villes), le préavis pour un logement non meublé est de 1 mois. Ailleurs, il est de 3 mois."
  }
];

// ==================== NIVEAU 10 : MAÎTRE DE LA VIE EN FRANCE ====================
const NIVEAU_10: QuizQuestion[] = [
  {
    id: 1066,
    niveau: 10,
    question: "Quelle valeur permet de vivre ensemble malgré les différences de religion ou d'opinion ?",
    options: [
      "La laïcité et le respect mutuel",
      "L'uniformité obligatoire",
      "L'isolement communautaire",
      "La compétition sociale"
    ],
    correctHash: hashAnswer(1066, 0),
    explication: "La laïcité garantit la liberté de conscience et le respect des croyances de chacun. Elle permet le vivre-ensemble dans la diversité."
  },
  {
    id: 1067,
    niveau: 10,
    question: "Qu'est-ce qui caractérise la protection sociale en France ?",
    options: [
      "Un système solidaire où chacun contribue selon ses moyens",
      "Chacun paie uniquement pour lui-même",
      "Seuls les riches sont protégés",
      "Il n'existe pas de protection sociale"
    ],
    correctHash: hashAnswer(1067, 0),
    explication: "La protection sociale française repose sur la solidarité : les cotisations de tous financent les prestations (maladie, retraite, chômage, famille)."
  },
  {
    id: 1068,
    niveau: 10,
    question: "Pourquoi payer ses impôts est-il un devoir citoyen ?",
    options: [
      "Pour financer les services publics (écoles, hôpitaux, routes)",
      "Pour enrichir les politiciens",
      "C'est facultatif",
      "Uniquement pour les étrangers"
    ],
    correctHash: hashAnswer(1068, 0),
    explication: "Les impôts financent les services publics : éducation, santé, sécurité, infrastructures. C'est un devoir civique qui profite à tous."
  },
  {
    id: 1069,
    niveau: 10,
    question: "Comment participer à la vie démocratique en France ?",
    options: [
      "Voter, s'engager dans des associations, respecter les lois",
      "Uniquement en étant élu",
      "En refusant de payer ses impôts",
      "En ignorant les lois"
    ],
    correctHash: hashAnswer(1069, 0),
    explication: "La participation citoyenne se fait par le vote, l'engagement associatif, le respect des lois et la contribution à la vie collective."
  },
  {
    id: 1070,
    niveau: 10,
    question: "Quel est le principe fondamental pour bien vivre ensemble en France ?",
    options: [
      "Le respect des droits et devoirs de chacun",
      "La loi du plus fort",
      "L'individualisme total",
      "Ignorer les autres"
    ],
    correctHash: hashAnswer(1070, 0),
    explication: "Vivre ensemble repose sur l'équilibre entre droits et devoirs : respecter les lois, les autres, et participer à la vie de la société."
  }
];

// ==================== EXPORT ====================

// Toutes les questions groupées par niveau
export const QUESTIONS_VIVRE_SOCIETE: Record<number, QuizQuestion[]> = {
  1: NIVEAU_1,
  2: NIVEAU_2,
  3: NIVEAU_3,
  4: NIVEAU_4,
  5: NIVEAU_5,
  6: NIVEAU_6,
  7: NIVEAU_7,
  8: NIVEAU_8,
  9: NIVEAU_9,
  10: NIVEAU_10
};

// Fonction pour obtenir les questions d'un niveau
export function getQuestionsVivreSociete(niveau: number): QuizQuestion[] {
  return QUESTIONS_VIVRE_SOCIETE[niveau] || [];
}

// Fonction de vérification (identique aux autres quiz)
export function verifyQuizAnswer(questionId: number, userAnswerIndex: number, correctHash: string): boolean {
  return hashAnswer(questionId, userAnswerIndex) === correctHash;
}

// Fonction pour trouver l'index correct à partir du hash
export function findCorrectAnswerIndex(questionId: number, correctHash: string): number {
  for (let i = 0; i < 4; i++) {
    if (hashAnswer(questionId, i) === correctHash) {
      return i;
    }
  }
  return 0;
}

// Catégorie ID pour "Vivre dans la société française"
export const CATEGORIE_VIVRE_SOCIETE_ID = '5a452914-91fc-4e4d-aa3f-5318eb95fb0a';

// Vérifier si un niveau est disponible en mode local
export function isLocalLevelVivreSociete(niveau: number): boolean {
  return niveau >= 1 && niveau <= 10;
}

// Nombre max de niveaux disponibles en local
export const MAX_LOCAL_LEVEL_VIVRE_SOCIETE = 10;
