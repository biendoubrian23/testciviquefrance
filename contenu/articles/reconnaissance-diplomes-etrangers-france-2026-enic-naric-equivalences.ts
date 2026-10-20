import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-reconnaissance-diplomes.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/reconnaissance-diplomes-etrangers-france-2026-enic-naric-equivalences`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "reconnaissance-diplomes-etrangers-france-2026-enic-naric-equivalences",
  titre: "Reconnaissance des diplômes étrangers en France 2026 : ENIC-NARIC, équivalences et démarches complètes",
  titreSeo: "Reconnaissance des diplômes étrangers en France 2026 : ENIC-NARIC, équivalences et démarches complètes",
  resume: "Comment faire reconnaître un diplôme étranger en France ? Attestation de comparabilité ENIC-NARIC (73 €, 3-4 mois), professions réglementées (médecin, avocat, infirmier), VAE, Campus France et conventions bilatérales Maroc-Algérie-Tunisie. Guide complet 2026.",
  chapo: "Vous avez obtenu un diplôme à l'étranger et souhaitez le faire valoir en France ? Que ce soit pour trouver un emploi, poursuivre vos études ou exercer une profession réglementée, la reconnaissance de vos qualifications est une étape incontournable. En France, il n'existe pas de système d'« équivalence automatique » : chaque situation dépend de votre objectif (emploi, études, profession réglementée). Ce guide complet vous explique toutes les démarches, les organismes compétents, les coûts et les délais en 2026, avec les liens officiels et les conseils pratiques pour réussir.",
  publieLe: "2026-04-06",
  modifieLe: "2026-04-06",
  minutes: 22,
  theme: "reconnaissance diplôme étranger France",
  motsCles: [
    "reconnaissance diplôme étranger France",
    "ENIC-NARIC attestation comparabilité",
    "équivalence diplôme France 2026",
    "faire reconnaître diplôme étranger",
    "profession réglementée diplôme étranger",
    "VAE diplôme étranger",
    "diplôme marocain en France",
    "diplôme algérien reconnaissance",
    "Campus France équivalence",
    "traduction assermentée diplôme",
    "autorisation exercice médecin étranger",
    "concours fonction publique diplôme étranger",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c476?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1523050854058-8df90110c476",
  },
  blocs: [
    {
      type: "h2",
      texte: "Reconnaissance des diplômes en France : il n'y a pas d'équivalence automatique",
      id: "pas-equivalence-automatique",
    },
    {
      type: "p",
      texte: "Contrairement à une idée reçue très répandue, **la France ne délivre pas d'équivalence automatique** des diplômes étrangers. Le système français repose sur trois mécanismes distincts selon votre besoin :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**L'attestation de comparabilité** (via France Éducation International / ENIC-NARIC) : un document officiel qui situe votre diplôme étranger dans le système français (niveau et domaine).",
        "**L'autorisation d'exercice** : obligatoire pour les professions réglementées (médecin, avocat, infirmier, architecte, etc.).",
        "**La reconnaissance académique** : pour poursuivre des études dans une université française.",
      ],
    },
    {
      type: "p",
      texte: "**Important** : l'attestation de comparabilité n'est pas une « équivalence » juridique. C'est un **avis** qui aide les employeurs et administrations à comprendre le niveau de votre formation. Pour les professions réglementées, elle ne suffit pas : une autorisation supplémentaire est requise.",
    },
    {
      type: "p",
      texte: "En 2026, la procédure se fait **entièrement en ligne** via le portail de France Éducation International (ex-CIEP).",
    },
    {
      type: "h2",
      texte: "L'attestation de comparabilité ENIC-NARIC : la démarche principale",
      id: "attestation-comparabilite-enic-naric",
    },
    {
      type: "p",
      texte: "L'attestation de comparabilité est le document de référence pour faire reconnaître un diplôme étranger en France. Elle est délivrée par le **centre ENIC-NARIC France**, rattaché à France Éducation International.",
    },
    { type: "h3", texte: "Qu'est-ce que l'attestation de comparabilité ?" },
    {
      type: "p",
      texte: "L'attestation situe votre diplôme étranger par rapport au cadre français (LMD : Licence-Master-Doctorat) et au Cadre européen des certifications (CEC). Par exemple, elle peut indiquer que votre diplôme est « comparable à un Master (Bac+5, niveau 7 CEC) ».",
    },
    { type: "h3", texte: "Comment faire la demande en 2026 ?" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Rendez-vous sur le portail en ligne** : [enic-naric.net](https://www.france-education-international.fr/enic-naric)",
        "**Créez un compte** et remplissez le formulaire",
        "**Téléchargez les documents requis** :",
      ],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Copie du diplôme (original)",
        "Traduction assermentée en français (si le diplôme n'est pas en français)",
        "Relevé de notes / supplément au diplôme",
        "Pièce d'identité",
        "Justificatif de la durée du cursus",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Payez les frais** : **73 €** en 2026 (paiement en ligne par carte bancaire)",
        "**Attendez le traitement** : le délai moyen est de **3 à 4 mois**",
      ],
    },
    { type: "h3", texte: "Résultat" },
    { type: "p", texte: "Vous recevez un document PDF officiel qui mentionne :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le nom de votre diplôme",
        "Le pays et l'établissement d'obtention",
        "Le **niveau français comparable** (ex : Licence, Master)",
        "Le **niveau du Cadre européen des certifications** (CEC)",
      ],
    },
    { type: "h3", texte: "Conseils pour accélérer le traitement" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Fournissez **tous les documents dès la première soumission** (les demandes incomplètes sont mises en attente)",
        "Si votre diplôme est en arabe, chinois ou russe, utilisez un traducteur assermenté spécialisé",
        "Vérifiez que votre traduction inclut les **signatures et cachets** du diplôme original",
      ],
    },
    {
      type: "h2",
      texte: "Professions réglementées : des procédures spécifiques obligatoires",
      id: "professions-reglementees",
    },
    {
      type: "p",
      texte: "En France, environ **230 professions sont réglementées**. Pour les exercer, l'attestation de comparabilité **ne suffit pas** : vous devez obtenir une **autorisation d'exercice** auprès de l'autorité compétente.",
    },
    { type: "h3", texte: "Exemples de professions réglementées et autorités compétentes" },
    {
      type: "tableau",
      entetes: ["Profession", "Autorité compétente", "Conditions principales"],
      lignes: [
        [
          "**Médecin**",
          "Ordre des médecins + Commission PAE",
          "Épreuves de vérification des connaissances (EVC), stage 1 an, inscription à l'Ordre",
        ],
        [
          "**Infirmier(e)**",
          "DREETS (ex-DIRECCTE)",
          "Dossier de reconnaissance, éventuellement stage d'adaptation ou épreuve d'aptitude",
        ],
        [
          "**Avocat**",
          "Conseil national des barreaux",
          "Examen d'aptitude ou certificat d'aptitude à la profession d'avocat (CAPA)",
        ],
        [
          "**Architecte**",
          "Ministère de la Culture",
          "Dossier d'habilitation, formation complémentaire possible",
        ],
        [
          "**Expert-comptable**",
          "Ministère de l'Enseignement supérieur",
          "Certificat préalable, stage de 3 ans",
        ],
        ["**Pharmacien**", "Ordre des pharmaciens", "Autorisation d'exercice, stage"],
        [
          "**Ingénieur (titre protégé)**",
          "Commission des Titres d'Ingénieur (CTI)",
          "Examen du dossier, avis de comparabilité",
        ],
      ],
    },
    { type: "h3", texte: "La procédure générale pour les professions réglementées" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Identifiez votre profession** sur le site [guichet-qualifications.fr](https://www.guichet-qualifications.fr)",
        "**Constituez votre dossier** auprès de l'autorité compétente",
        "**Passez l'épreuve d'aptitude ou le stage d'adaptation** si exigé",
        "**Obtenez l'autorisation d'exercice**",
        "**Inscrivez-vous à l'Ordre professionnel** le cas échéant",
      ],
    },
    { type: "h3", texte: "Cas particulier : les professionnels de santé étrangers" },
    {
      type: "p",
      texte: "Depuis la réforme de 2023, les médecins à diplôme hors UE peuvent passer les **épreuves de vérification des connaissances (EVC)** organisées par le Centre National de Gestion (CNG). En 2026, les sessions ont lieu **deux fois par an** (mars et octobre). Les lauréats effectuent un parcours de consolidation d'un an avant d'obtenir l'autorisation pleine d'exercice.",
    },
    {
      type: "p",
      texte: "**Attention** : travailler sans autorisation dans une profession réglementée est un **délit pénal** (exercice illégal).",
    },
    {
      type: "h2",
      texte: "Reconnaissance académique : poursuivre ses études en France",
      id: "reconnaissance-academique-etudes",
    },
    {
      type: "p",
      texte: "Si votre objectif est de **continuer vos études** dans une université française, la procédure est différente de l'attestation de comparabilité.",
    },
    { type: "h3", texte: "Pour les étudiants hors UE : Campus France et la DAP" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Créez un dossier sur Études en France** (via Campus France) si vous résidez dans l'un des 67 pays couverts par la plateforme",
        "L'université évalue elle-même vos diplômes et décide de votre admission",
        "**Aucune attestation ENIC-NARIC n'est nécessaire** à ce stade (l'université fait sa propre évaluation)",
      ],
    },
    { type: "h3", texte: "Pour les étudiants de l'UE/EEE" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Postulez directement auprès des universités via **Parcoursup** (L1), **Mon Master** (M1) ou les portails des établissements",
        "La reconnaissance des crédits ECTS est facilitée par le **processus de Bologne**",
      ],
    },
    { type: "h3", texte: "Pour les personnes déjà en France" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Contactez directement le **service de scolarité** de l'établissement visé",
        "Fournissez votre diplôme, le relevé de notes et une traduction assermentée",
        "L'établissement peut demander une **validation des acquis** ou vous placer à un niveau différent de celui demandé",
      ],
    },
    { type: "h3", texte: "La Validation des Acquis de l'Expérience (VAE)" },
    {
      type: "p",
      texte: "Si vous n'avez **pas de diplôme formel** mais une expérience professionnelle significative (minimum 1 an en lien avec la certification visée), vous pouvez obtenir un diplôme français via la **VAE** :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Identifiez le diplôme visé sur le **RNCP** (Répertoire National des Certifications Professionnelles)",
        "Déposez un dossier de recevabilité (Livret 1)",
        "Rédigez un dossier détaillé de vos compétences (Livret 2)",
        "Passez devant un jury de validation",
        "Obtenez tout ou partie du diplôme",
      ],
    },
    {
      type: "p",
      texte: "**Coût** : la VAE peut être financée par votre **Compte Personnel de Formation (CPF)** si vous êtes salarié.",
    },
    {
      type: "h2",
      texte: "Reconnaissance des diplômes pour l'emploi dans le secteur privé",
      id: "secteur-prive-emploi",
    },
    {
      type: "p",
      texte: "Pour travailler dans le **secteur privé** (hors professions réglementées), il n'existe **aucune obligation légale** de faire reconnaître votre diplôme. Cependant, l'attestation de comparabilité ENIC-NARIC est un atout majeur.",
    },
    { type: "h3", texte: "Pourquoi demander l'attestation même si ce n'est pas obligatoire ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Elle permet aux **employeurs** de comprendre rapidement votre niveau",
        "Elle est souvent demandée dans les processus de **recrutement des grandes entreprises et de la fonction publique**",
        "Elle facilite la **négociation salariale** (un Master reconnu justifie un salaire de cadre)",
        "Elle figure dans votre dossier de **naturalisation** (preuve d'intégration professionnelle)",
      ],
    },
    { type: "h3", texte: "Conventions collectives et classifications" },
    {
      type: "p",
      texte: "En France, votre poste et votre salaire dépendent souvent de la **convention collective** de votre secteur. L'attestation de comparabilité permet de vous positionner au bon niveau de classification (employé, technicien, cadre).",
    },
    { type: "h3", texte: "Concours de la fonction publique" },
    {
      type: "p",
      texte: "Pour passer un **concours de la fonction publique** avec un diplôme étranger, vous devez obtenir une **attestation de niveau** auprès de la commission de dérogation du concours visé. L'attestation ENIC-NARIC est un document central de ce dossier.",
    },
    {
      type: "h2",
      texte: "Accords bilatéraux et conventions internationales",
      id: "conventions-bilaterales",
    },
    {
      type: "p",
      texte: "La France a signé des **conventions bilatérales de reconnaissance des diplômes** avec plusieurs pays. Ces accords facilitent (mais n'automatisent pas) la reconnaissance.",
    },
    { type: "h3", texte: "Principaux accords en vigueur en 2026" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Pays de l'UE/EEE** : reconnaissance facilitée grâce à la directive 2005/36/CE sur les qualifications professionnelles. Les diplômes des professions réglementées bénéficient d'une **reconnaissance mutuelle**.",
        "**Maroc** : convention franco-marocaine de 1996 sur la coopération universitaire. Facilite la comparabilité des diplômes marocains (Bac, Licence, Master).",
        "**Algérie** : protocole d'accord sur la reconnaissance des diplômes de l'enseignement supérieur.",
        "**Tunisie** : convention de reconnaissance mutuelle des diplômes (Bac+3 et plus).",
        "**Québec** : arrangement de reconnaissance mutuelle (ARM) pour certaines professions (architectes, ingénieurs, comptables).",
        "**Suisse** : accord bilatéral dans le cadre de la libre circulation des personnes.",
      ],
    },
    { type: "h3", texte: "Ce que ces accords changent concrètement" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Délais réduits** pour l'attestation de comparabilité (souvent 2 mois au lieu de 4)",
        "**Facilitation des dossiers** pour les professions réglementées",
        "**Pas d'exemption** de la procédure : vous devez toujours déposer un dossier",
      ],
    },
    { type: "h3", texte: "Lien avec le test civique et la naturalisation" },
    {
      type: "p",
      texte: "Si vous passez le test civique dans le cadre de votre naturalisation, sachez que la **reconnaissance de vos diplômes** est un atout dans votre dossier. Elle démontre votre **intégration professionnelle** en France, l'un des critères évalués par la préfecture.",
    },
    { type: "h2", texte: "Coûts et délais en 2026 : tableau récapitulatif", id: "couts-delais-2026" },
    {
      type: "p",
      texte: "Voici un résumé des frais et délais pour chaque type de reconnaissance en 2026 :",
    },
    {
      type: "tableau",
      entetes: ["Procédure", "Coût", "Délai moyen", "Organisme"],
      lignes: [
        [
          "**Attestation de comparabilité ENIC-NARIC**",
          "73 €",
          "3-4 mois",
          "France Éducation International",
        ],
        [
          "**Traduction assermentée** (par document)",
          "30-80 €",
          "1-2 semaines",
          "Traducteur assermenté",
        ],
        [
          "**Autorisation d'exercice médecin**",
          "Gratuit (EVC)",
          "6-18 mois",
          "CNG + Ordre des médecins",
        ],
        ["**Autorisation d'exercice infirmier**", "Gratuit", "3-6 mois", "DREETS"],
        ["**Examen d'aptitude avocat**", "~800 €", "6-12 mois", "Conseil national des barreaux"],
        ["**Inscription Campus France**", "Gratuit à 200 € selon pays", "2-4 mois", "Campus France"],
        [
          "**VAE (dossier complet)**",
          "500-3 000 € (finançable CPF)",
          "8-18 mois",
          "Établissement certificateur",
        ],
      ],
    },
    { type: "h3", texte: "Comment réduire les coûts ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Traductions** : comparez les prix entre plusieurs traducteurs assermentés (les tarifs varient du simple au triple)",
        "**VAE** : utilisez votre **CPF** ou demandez un financement à Pôle emploi / France Travail",
        "**Professions réglementées** : les épreuves de vérification sont souvent **gratuites** (seuls les frais de dossier s'appliquent)",
      ],
    },
    {
      type: "h2",
      texte: "Checklist pratique : les étapes à suivre selon votre situation",
      id: "demarches-pratiques-checklist",
    },
    {
      type: "h3",
      texte: "Vous cherchez un emploi salarié (secteur privé, hors profession réglementée)",
    },
    { type: "p", texte: "✅ Demandez l'attestation de comparabilité ENIC-NARIC (73 €)" },
    { type: "p", texte: "✅ Faites traduire vos diplômes par un traducteur assermenté" },
    { type: "p", texte: "✅ Valorisez l'attestation dans votre CV et vos entretiens" },
    { type: "p", texte: "✅ Vérifiez la convention collective de votre secteur pour la classification" },
    { type: "h3", texte: "Vous souhaitez exercer une profession réglementée" },
    { type: "p", texte: "✅ Identifiez votre profession sur guichet-qualifications.fr" },
    { type: "p", texte: "✅ Contactez l'autorité compétente pour connaître les conditions" },
    { type: "p", texte: "✅ Demandez l'attestation de comparabilité ENIC-NARIC" },
    { type: "p", texte: "✅ Constituez votre dossier d'autorisation d'exercice" },
    { type: "p", texte: "✅ Préparez l'épreuve d'aptitude ou le stage d'adaptation" },
    { type: "p", texte: "✅ Inscrivez-vous à l'Ordre professionnel" },
    { type: "h3", texte: "Vous voulez poursuivre vos études en France" },
    { type: "p", texte: "✅ Contactez Campus France (si hors UE) ou l'université directement" },
    { type: "p", texte: "✅ Fournissez votre diplôme + relevé de notes + traduction" },
    {
      type: "p",
      texte: "✅ L'université évalue votre dossier (pas besoin d'attestation ENIC-NARIC en général)",
    },
    { type: "p", texte: "✅ Complétez votre dossier de visa étudiant si nécessaire" },
    { type: "h3", texte: "Vous préparez un dossier de naturalisation" },
    {
      type: "p",
      texte: "✅ L'attestation ENIC-NARIC renforce votre dossier (intégration professionnelle)",
    },
    { type: "p", texte: "✅ Joignez vos diplômes français et/ou l'attestation au dossier" },
    {
      type: "p",
      texte: "✅ Préparez le test civique : la rubrique « vie en société » inclut des questions sur l'emploi et la formation en France",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La reconnaissance des diplômes étrangers en France est un parcours qui demande de la patience et de la rigueur, mais qui ouvre des portes considérables. Que vous cherchiez un emploi, souhaitiez exercer votre profession ou poursuivre vos études, les démarches sont bien encadrées et accessibles en ligne. L'attestation de comparabilité ENIC-NARIC reste le document central, obtenu en 3-4 mois pour 73 €. Pour les professions réglementées, des étapes supplémentaires sont nécessaires mais les procédures ont été simplifiées ces dernières années. Si vous préparez également votre naturalisation, sachez que la reconnaissance de vos diplômes est un atout solide dans votre dossier.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien coûte la reconnaissance d'un diplôme étranger en France ?",
      reponse: "L'attestation de comparabilité ENIC-NARIC coûte 73 € en 2026. Il faut ajouter les frais de traduction assermentée (30-80 € par document). Pour les professions réglementées, les épreuves d'aptitude sont généralement gratuites.",
    },
    {
      question: "Combien de temps faut-il pour faire reconnaître son diplôme ?",
      reponse: "L'attestation de comparabilité est délivrée en 3 à 4 mois en moyenne. Pour les professions réglementées, comptez 6 à 18 mois selon la profession et les épreuves à passer.",
    },
    {
      question: "L'attestation ENIC-NARIC est-elle une équivalence officielle ?",
      reponse: "Non. L'attestation de comparabilité est un avis qui situe votre diplôme par rapport au système français. Ce n'est pas une équivalence juridique. Cependant, elle est largement reconnue par les employeurs et les administrations.",
    },
    {
      question: "Puis-je travailler en France sans faire reconnaître mon diplôme ?",
      reponse: "Oui, dans le secteur privé pour les professions non réglementées, aucune reconnaissance n'est obligatoire. Cependant, l'attestation de comparabilité est un atout considérable pour l'embauche et la négociation salariale.",
    },
    {
      question: "Mon diplôme marocain/algérien/tunisien est-il plus facilement reconnu ?",
      reponse: "La France a des conventions bilatérales avec ces pays qui facilitent la comparabilité, mais la procédure reste la même. Le délai peut être réduit (2 mois au lieu de 4) grâce à ces accords.",
    },
    {
      question: "Comment faire si je n'ai pas de diplôme formel mais une longue expérience ?",
      reponse: "Vous pouvez passer par la Validation des Acquis de l'Expérience (VAE) pour obtenir un diplôme français. Il faut justifier d'au moins 1 an d'expérience en lien avec la certification visée. La VAE est finançable via le CPF.",
    },
  ],
  sources: [
    {
      titre: "France Éducation International : Centre ENIC-NARIC",
      url: "https://www.france-education-international.fr/enic-naric",
      type: "officiel",
      description: "Portail officiel pour les demandes d'attestation de comparabilité",
    },
    {
      titre: "Guichet Qualifications : professions réglementées",
      url: "https://www.guichet-qualifications.fr",
      type: "officiel",
      description: "Identifiez la procédure pour votre profession réglementée",
    },
    {
      titre: "Service-public.fr, Reconnaissance d'un diplôme étranger",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2272",
      type: "officiel",
      description: "Page officielle du gouvernement sur la reconnaissance des diplômes",
    },
    {
      titre: "Campus France : Études en France",
      url: "https://www.campusfrance.org",
      type: "officiel",
      description: "Procédure d'inscription pour les étudiants étrangers",
    },
  ],
};

export default article;
