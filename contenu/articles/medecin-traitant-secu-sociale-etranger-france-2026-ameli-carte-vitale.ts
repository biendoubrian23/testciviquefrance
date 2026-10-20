import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-vie-pratique-2.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/medecin-traitant-secu-sociale-etranger-france-2026-ameli-carte-vitale`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "medecin-traitant-secu-sociale-etranger-france-2026-ameli-carte-vitale",
  titre: "Médecin traitant, Sécurité sociale et carte Vitale pour les étrangers en France 2026",
  titreSeo: "Médecin traitant, Sécurité sociale et carte Vitale pour les étrangers en France 2026",
  resume: "Comment s'affilier à la CPAM avec un récépissé, déclarer un médecin traitant (et pourquoi c'est vital pour vos remboursements), obtenir la CSS gratuite et consulter en attendant sa carte Vitale.",
  chapo: "Arriver en France et ne pas savoir comment voir un médecin, obtenir sa carte Vitale ou comprendre le système de remboursement : c'est la réalité de la majorité des personnes qui s'installent en France pour la première fois. Le système de santé français est l'un des meilleurs du monde, mais il est aussi l'un des plus complexes à comprendre de l'extérieur. Ce guide vous explique pas à pas comment vous affilier à l'Assurance maladie, trouver un médecin traitant, obtenir votre carte Vitale et être remboursé de vos soins, quel que soit votre statut.",
  publieLe: "2026-04-10",
  modifieLe: "2026-04-10",
  minutes: 17,
  theme: "médecin traitant étranger France",
  motsCles: [
    "médecin traitant étranger France",
    "Sécurité sociale étranger France 2026",
    "carte Vitale étranger France",
    "Ameli inscription étranger France",
    "affiliation Assurance maladie étranger",
    "CPAM étranger France",
    "remboursement médecin étranger France",
    "médecin sans carte Vitale France",
    "CSS complémentaire santé solidaire étranger",
    "AME aide médicale état sans-papiers",
    "médecin secteur 1 étranger France",
    "carte Vitale titre de séjour",
    "inscription CPAM délai étranger",
    "médecin généraliste sans rendez-vous France",
    "docteur étranger France comment consulter",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  },
  blocs: [
    { type: "h2", texte: "Qui a droit à la Sécurité sociale en France ?", id: "qui-a-droit-secu" },
    {
      type: "p",
      texte: "La Sécurité sociale française est l'une des plus généreuses au monde, et ses conditions d'accès pour les étrangers sont souvent mieux connues des avocats que des personnes concernées.",
    },
    { type: "h3", texte: "La règle principale : résider en France de manière stable et régulière" },
    {
      type: "p",
      texte: "Depuis la réforme de 2016 (Protection Universelle Maladie, PUMA), toute personne qui réside en France de manière **stable et régulière** a droit à la prise en charge de ses frais de santé, indépendamment de son activité professionnelle.",
    },
    { type: "p", texte: "**Sont couverts par la PUMA :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les titulaires d'un titre de séjour valide (toute catégorie)",
        "Les titulaires d'un récépissé de demande ou de renouvellement de titre",
        "Les ressortissants européens résidant en France",
        "Les réfugiés et bénéficiaires de la protection subsidiaire",
        "Les demandeurs d'asile (via la Permanence d'Accès aux Soins de Santé, PASS)",
      ],
    },
    { type: "h3", texte: "Les sans-papiers : l'AME (Aide Médicale de l'État)" },
    {
      type: "p",
      texte: "Si vous êtes en France depuis plus de **3 mois consécutifs** sans titre de séjour, vous pouvez bénéficier de l'**AME** (Aide Médicale de l'État), qui couvre les soins essentiels à 100% sans avance de frais. L'AME est déposée auprès de votre CPAM avec une preuve de résidence de 3 mois (quittances de loyer, courriers reçus…).",
    },
    { type: "h3", texte: "Les soins d'urgence : aucune condition" },
    {
      type: "p",
      texte: "En cas d'urgence médicale (SAMU : 15, ou passage aux urgences), tout être humain présent sur le territoire français a droit aux soins, indépendamment de sa situation administrative. C'est une obligation légale pour tous les établissements de santé.",
    },
    {
      type: "h2",
      texte: "S'inscrire à l'Assurance maladie (CPAM) : la procédure étape par étape",
      id: "inscription-ameli",
    },
    {
      type: "p",
      texte: "L'inscription se fait auprès de votre CPAM (Caisse Primaire d'Assurance Maladie), en ligne ou en agence.",
    },
    { type: "h3", texte: "Documents à fournir selon votre situation" },
    { type: "p", texte: "**Salarié :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Titre de séjour ou récépissé valide",
        "Contrat de travail ou bulletins de salaire",
        "Votre RIB",
        "Justificatif de domicile",
      ],
    },
    { type: "p", texte: "**Non-salarié (inactif, étudiant, conjoint…) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Titre de séjour valide (au moins 3 mois de résidence)",
        "Justificatif de domicile de moins de 3 mois",
        "Votre RIB",
        "Justificatif de votre situation (acte de naissance, livret de famille…)",
      ],
    },
    { type: "p", texte: "**Demandeur d'asile :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Attestation de demande d'asile (ADA) en cours de validité",
        "Justificatif de domicile ou attestation d'hébergement CADA/CADA",
      ],
    },
    { type: "h3", texte: "Comment s'inscrire" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**En ligne** sur ameli.fr : créez un compte, remplissez le formulaire d'affiliation, joignez vos documents scannés",
        "**En agence CPAM** : prenez rendez-vous sur ameli.fr ou appelez le **3646** (service Ameli, gratuit)",
        "**Par courrier** : envoyez votre dossier à votre CPAM locale (adresse sur ameli.fr)",
      ],
    },
    { type: "h3", texte: "Délai de traitement" },
    {
      type: "p",
      texte: "Comptez **2 à 4 semaines** pour l'ouverture de vos droits. Vous recevrez une attestation de droits par email ou courrier avant votre carte Vitale. Cette attestation est suffisante pour consulter un médecin et être remboursé en attendant la carte physique.",
    },
    { type: "h3", texte: "La carte Vitale" },
    {
      type: "p",
      texte: "La carte Vitale est envoyée par courrier environ **3 à 6 semaines** après l'ouverture de vos droits. Elle est à votre nom et contient votre numéro de Sécurité sociale (numéro de 15 chiffres). En attendant, téléchargez l'**appli Carte Vitale** sur votre smartphone, elle fait office de carte Vitale numérique acceptée dans tous les cabinets médicaux.",
    },
    {
      type: "h2",
      texte: "Déclarer un médecin traitant : pourquoi c'est indispensable",
      id: "medecin-traitant",
    },
    {
      type: "p",
      texte: "Le médecin traitant est le pivot du système de santé français. Sans lui, vos remboursements sont réduits.",
    },
    { type: "h3", texte: "Qu'est-ce que le médecin traitant ?" },
    {
      type: "p",
      texte: "Le médecin traitant est un médecin généraliste (rarement un spécialiste) que vous choisissez librement et que vous déclarez auprès de votre CPAM. Il est votre interlocuteur de premier recours pour tous les problèmes de santé courants.",
    },
    { type: "h3", texte: "Pourquoi le déclarer : l'impact sur les remboursements" },
    {
      type: "tableau",
      entetes: ["Situation", "Remboursement Sécu (secteur 1)"],
      lignes: [
        ["Consulter votre médecin traitant", "70% du tarif conventionné (23 €) = 16,10 €"],
        ["Consulter un spécialiste sur orientation du MT", "70%"],
        ["Consulter un spécialiste SANS passer par le MT", "30% seulement"],
        ["Consulter un généraliste qui n'est pas votre MT", "30%"],
      ],
    },
    {
      type: "p",
      texte: "Sans médecin traitant déclaré, chaque consultation est remboursée à 30% au lieu de 70%. Sur une année, la différence peut représenter plusieurs centaines d'euros.",
    },
    { type: "h3", texte: "Comment trouver un médecin traitant" },
    {
      type: "p",
      texte: "Trouver un médecin traitant est devenu difficile dans de nombreuses zones de France (déserts médicaux). Voici les méthodes les plus efficaces :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Ameli.fr → Trouver un médecin** : carte interactive de tous les médecins qui acceptent de nouveaux patients",
        "**Doctolib.fr** : beaucoup de médecins indiquent s'ils acceptent de nouveaux patients",
        "**Maison de santé pluridisciplinaire** : les cabinets collectifs acceptent plus souvent de nouveaux patients",
        "**Mairies** : certaines mairies maintiennent une liste de médecins qui acceptent de nouveaux patients",
        "**Bouche à oreille communautaire** : souvent la méthode la plus efficace",
      ],
    },
    { type: "h3", texte: "Comment le déclarer" },
    {
      type: "p",
      texte: "Une fois que le médecin accepte d'être votre médecin traitant, il vous fait signer un formulaire Cerfa. Il l'envoie lui-même à la CPAM. La déclaration est immédiate, vous bénéficiez du taux de remboursement à 70% dès la consultation suivante.",
    },
    { type: "h3", texte: "Si vous ne trouvez pas de médecin traitant" },
    {
      type: "p",
      texte: "En attendant, vous pouvez consulter n'importe quel médecin généraliste. Signalez la situation à votre CPAM, elle peut vous orienter vers une structure de soins primaires ou une maison médicale de garde.",
    },
    {
      type: "h2",
      texte: "La Complémentaire Santé Solidaire (CSS) : la mutuelle gratuite que vous ignorez peut-être",
      id: "css-complémentaire",
    },
    {
      type: "p",
      texte: "La **CSS** (Complémentaire Santé Solidaire, anciennement CMU-C et ACS) est une mutuelle santé entièrement gratuite ou quasi-gratuite financée par l'État, destinée aux personnes aux revenus modestes.",
    },
    { type: "h3", texte: "Qui peut en bénéficier ?" },
    {
      type: "p",
      texte: "La CSS est accordée sous conditions de ressources. En 2026, les plafonds approximatifs pour une personne seule sont autour de **900 €/mois de revenus nets**. Pour une famille de 4 personnes, le plafond est d'environ **1 800 €/mois**.",
    },
    { type: "h3", texte: "Deux niveaux" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**CSS gratuite** : pour les foyers en dessous du plafond → mutuelle à 0 €, tiers payant intégral, pas d'avance de frais chez le médecin, dentiste, opticien",
        "**CSS avec participation** : pour les foyers légèrement au-dessus du plafond → participation de **30 à 60 €/an** maximum",
      ],
    },
    { type: "h3", texte: "Comment faire la demande" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Connectez-vous sur ameli.fr ou rendez-vous en agence CPAM",
        "Téléchargez le formulaire CSS (S3711)",
        "Joignez vos justificatifs de ressources des 12 derniers mois",
        "La CSS est accordée pour **1 an renouvelable**",
      ],
    },
    { type: "h3", texte: "Pourquoi c'est si important pour les étrangers" },
    {
      type: "p",
      texte: "Beaucoup de personnes n'osent pas consulter par peur du coût. Avec la CSS, une consultation chez le médecin, une ordonnance, des soins dentaires ou des lunettes ne vous coûtent rien. C'est un droit, utilisez-le.",
    },
    {
      type: "h2",
      texte: "Consulter un médecin en pratique : les situations courantes",
      id: "consultations-pratiques",
    },
    { type: "p", texte: "Quelques situations pratiques que vous pouvez rencontrer." },
    { type: "h3", texte: "Urgences ou médecin de garde" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**SAMU : 15** : urgences vitales (accident, douleur thoracique intense, perte de connaissance)",
        "**Pompiers : 18** ou **112** (numéro européen)",
        "**Médecin de garde** : appelez le **15** ou consultez le site de votre CPAM pour trouver le médecin de garde le week-end",
        "**Urgences hospitalières** : pour toute situation qui ne peut pas attendre mais n'est pas vitale. Attention aux délais d'attente (2 à 8 heures en moyenne)",
      ],
    },
    { type: "h3", texte: "Consultation sans rendez-vous" },
    {
      type: "p",
      texte: "Les **cabinets de médecine générale sans rendez-vous** se développent (MedCity, Livi, Doctolib Express). Ces structures acceptent les patients le jour même, avec carte Vitale. Pratiques pour les situations non urgentes.",
    },
    { type: "h3", texte: "Téléconsultation" },
    {
      type: "p",
      texte: "Depuis 2020, la téléconsultation est remboursée par la Sécurité sociale au même tarif qu'une consultation en présentiel (70% du tarif de 25 €). Plateformes reconnues : Doctolib, Livi, Qare, Medadom. Vous avez besoin d'une carte Vitale et d'une connexion internet.",
    },
    { type: "h3", texte: "Pharmacie sans ordonnance" },
    {
      type: "p",
      texte: "Les pharmaciens français ont depuis 2023 le droit de dispenser certains traitements courants (angine, cystite, grippe, urticaire, conjonctivite) sans ordonnance médicale, et ces dispensations sont remboursées par la Sécu si vous avez votre carte Vitale.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le système de santé français est conçu pour être universel, et pour les étrangers en situation régulière, les droits sont presque identiques à ceux des Français. La clé est de s'affilier rapidement à la CPAM dès votre arrivée, de déclarer un médecin traitant pour bénéficier des remboursements à 70%, et de vérifier si vous êtes éligible à la CSS gratuite qui efface le reste à charge. En cas d'urgence, les soins sont garantis sans aucune condition administrative. Ce système, souvent incompris, est en réalité l'un des atouts majeurs de la vie en France.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Puis-je consulter un médecin en France avant d'avoir ma carte Vitale ?",
      reponse: "Oui. Dès que vos droits sont ouverts à la CPAM, vous recevez une attestation de droits (sur ameli.fr ou par courrier). Cette attestation suffit pour consulter un médecin et être remboursé. Vous pouvez aussi télécharger l'appli Carte Vitale sur votre smartphone, qui fait office de carte Vitale numérique acceptée partout.",
    },
    {
      question: "J'ai un récépissé de titre de séjour, puis-je m'inscrire à la CPAM ?",
      reponse: "Oui. Le récépissé de demande ou de renouvellement de titre de séjour suffit pour s'affilier à l'Assurance maladie. Vous n'avez pas besoin d'attendre votre titre de séjour définitif.",
    },
    {
      question: "Qu'est-ce que la CSS et est-ce que je peux en bénéficier ?",
      reponse: "La CSS (Complémentaire Santé Solidaire) est une mutuelle gratuite ou quasi-gratuite pour les personnes aux revenus modestes. Si vos revenus sont inférieurs à environ 900 €/mois pour une personne seule (plafond 2026), vous pouvez en bénéficier gratuitement : plus d'avance de frais chez le médecin, dentiste ou opticien. Faites la demande sur ameli.fr ou en agence CPAM.",
    },
    {
      question: "Que faire si je ne trouve pas de médecin traitant dans ma région ?",
      reponse: "Les déserts médicaux touchent beaucoup de régions. En attendant : consultez sur Ameli.fr (carte des médecins acceptant de nouveaux patients), contactez les maisons de santé pluridisciplinaires de votre secteur, et signalez la situation à votre CPAM. Pour les soins courants, la téléconsultation remboursée (Doctolib, Livi) est une alternative pratique qui ne nécessite pas de médecin traitant.",
    },
  ],
  sources: [
    {
      titre: "Ameli.fr, Inscription à l'Assurance maladie",
      url: "https://www.ameli.fr/assure/droits-demarches/etrangers-france/inscription-assurance-maladie",
      type: "officiel",
      description: "Procédure officielle d'affiliation à la CPAM pour les étrangers",
    },
    {
      titre: "Service-Public.fr, Protection universelle maladie (PUMA)",
      url: "https://www.service-public.fr/particuliers/vosdroits/F34044",
      type: "officiel",
      description: "Conditions d'accès à la PUMA pour les résidents en France",
    },
    {
      titre: "Ameli.fr, Complémentaire Santé Solidaire",
      url: "https://www.ameli.fr/assure/droits-demarches/difficulte-acces-droits-soins/complementaire-sante-solidaire/complementaire-sante-solidaire",
      type: "officiel",
      description: "Conditions et démarche pour la CSS gratuite",
    },
    {
      titre: "Service-Public.fr, Aide médicale de l'État (AME)",
      url: "https://www.service-public.fr/particuliers/vosdroits/F3079",
      type: "officiel",
      description: "AME pour les personnes en situation irrégulière présentes depuis 3 mois",
    },
  ],
};

export default article;
