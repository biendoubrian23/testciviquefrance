import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-vie-pratique-2.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/mutuelle-sante-etranger-france-2026-css-comparer-choisir-obligation`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "mutuelle-sante-etranger-france-2026-css-comparer-choisir-obligation",
  titre: "Mutuelle santé pour les étrangers en France 2026 : CSS gratuite, mutuelle d'entreprise ou individuelle ?",
  titreSeo: "Mutuelle santé pour les étrangers en France 2026 : CSS gratuite, mutuelle d'entreprise ou individuelle ?",
  resume: "La CSS est gratuite si vos revenus sont en dessous du plafond, vérifiez avant de payer une mutuelle. Mutuelle d'entreprise obligatoire dès le 1er jour, portabilité gratuite après licenciement, et comment comparer les offres individuelles.",
  chapo: "La Sécurité sociale française rembourse en moyenne 70% des frais médicaux courants, mais les 30% restants (le \"reste à charge\") peuvent représenter des centaines d'euros par an, surtout pour les soins dentaires, optiques ou les médicaments peu remboursés. La mutuelle santé couvre tout ou partie de ce reste à charge. Pour les étrangers installés en France, la question se pose différemment : êtes-vous obligé d'en avoir une ? Que couvre exactement la CSS gratuite ? Comment comparer les offres sans se faire piéger ? Ce guide répond à tout.",
  publieLe: "2026-04-10",
  modifieLe: "2026-04-10",
  minutes: 15,
  theme: "mutuelle santé étranger France 2026",
  motsCles: [
    "mutuelle santé étranger France 2026",
    "mutuelle obligatoire étranger salarié France",
    "CSS complémentaire santé solidaire étranger",
    "mutuelle pas chère étranger France",
    "reste à charge médecin étranger France",
    "mutuelle d'entreprise étranger France",
    "complémentaire santé titre de séjour",
    "meilleure mutuelle étranger France",
    "remboursement dentaire étranger France",
    "remboursement lunettes étranger France",
    "mutuelle étudiant étranger France",
    "sans mutuelle médecin France",
    "mutuelle famille étrangère France",
    "MGEN MAIF mutuelle étranger",
    "choisir mutuelle étranger France",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144",
  },
  blocs: [
    {
      type: "h2",
      texte: "Ce que la Sécurité sociale rembourse (et ce qu'elle ne rembourse pas)",
      id: "secu-remboursement",
    },
    {
      type: "p",
      texte: "Avant de choisir une mutuelle, il faut comprendre exactement ce que la Sécu prend en charge, et où se situent les trous.",
    },
    { type: "h3", texte: "Les taux de remboursement de la Sécu (secteur 1, médecin traitant déclaré)" },
    {
      type: "tableau",
      entetes: ["Type de soin", "Tarif conventionné", "Remboursement Sécu", "Reste à charge"],
      lignes: [
        ["Médecin généraliste (MT)", "26 €", "18,20 € (70%)", "7,80 €"],
        ["Médecin spécialiste (accès direct)", "30-50 €", "9-15 € (30%)", "21-35 €"],
        ["Dentiste (détartrage)", "28,92 €", "20,24 € (70%)", "8,68 €"],
        ["Couronne dentaire", "122,50 €", "73,50 € (60%)", "49 €"],
        ["Lunettes (verres + monture)", "Variable", "Environ 5-15 €", "Le reste"],
        ["Médicament (vignette bleue)", "Variable", "35%", "65%"],
        ["Médicament (vignette blanche)", "Variable", "65%", "35%"],
        ["Hospitalisation", "Variable", "80% + forfait journalier", "Forfait journalier 20 €/jour"],
      ],
    },
    { type: "h3", texte: "Les postes de dépense non couverts par la Sécu" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Soins dentaires complexes** (prothèses, implants, orthodontie adulte) : remboursement Sécu dérisoire (5 à 20€ pour des soins à 500-3000€)",
        "**Optique** : remboursement Sécu entre 5 et 14,90 € seulement pour des lunettes qui coûtent 200 à 800 €",
        "**Soins d'ostéopathie, psychologue libéral** : non remboursés par la Sécu du tout (sauf accès direct psychologue depuis 2022)",
        "**Médicaments à vignette blanche ou orangée** : remboursement partiel ou nul",
        "**Dépassements d'honoraires** (secteur 2 et 3) : non remboursés par la Sécu",
      ],
    },
    {
      type: "h2",
      texte: "La CSS : la mutuelle gratuite de l'État, vérifiez si vous êtes éligible",
      id: "css-gratuite",
    },
    {
      type: "p",
      texte: "Avant de payer une mutuelle, vérifiez toujours votre éligibilité à la **Complémentaire Santé Solidaire (CSS)**.",
    },
    { type: "h3", texte: "Plafonds de ressources 2026 (net mensuel)" },
    {
      type: "tableau",
      entetes: ["Composition du foyer", "CSS gratuite", "CSS avec participation (~35 €/an)"],
      lignes: [
        ["1 personne", "jusqu'à 900 €/mois", "900 à 1 260 €/mois"],
        ["2 personnes", "jusqu'à 1 350 €/mois", "1 350 à 1 890 €/mois"],
        ["3 personnes", "jusqu'à 1 620 €/mois", "1 620 à 2 268 €/mois"],
        ["4 personnes", "jusqu'à 1 890 €/mois", "1 890 à 2 646 €/mois"],
      ],
    },
    { type: "p", texte: "*Ces plafonds sont approximatifs : vérifiez sur ameli.fr le simulateur CSS.*" },
    { type: "h3", texte: "Ce que couvre la CSS" },
    { type: "p", texte: "La CSS est une très bonne couverture complémentaire :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Tiers payant intégral** : zéro avance de frais chez le médecin, à la pharmacie, aux urgences",
        "**Remboursement dentaire** renforcé (couronnes, prothèses)",
        "**Optique** : prise en charge de montures et verres selon un panier \"100% Santé\"",
        "**Audiologie** : appareils auditifs selon le panier 100% Santé",
        "**Aucune sélection médicale** : pas de questionnaire de santé",
      ],
    },
    { type: "h3", texte: "Comment faire la demande" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Simulateur sur ameli.fr → \"Tester mon droit à la CSS\"",
        "Si éligible : formulaire S3711 + justificatifs de ressources des 12 derniers mois",
        "Dépôt en ligne sur ameli.fr, en agence CPAM ou par courrier",
        "Délai de traitement : 2 à 4 semaines",
        "Durée : 1 an, renouvelable",
      ],
    },
    {
      type: "h2",
      texte: "La mutuelle d'entreprise : obligatoire et souvent avantageuse",
      id: "mutuelle-entreprise",
    },
    {
      type: "p",
      texte: "Si vous travaillez en France, votre employeur est légalement obligé de vous proposer une complémentaire santé collective.",
    },
    { type: "h3", texte: "L'obligation légale (loi du 1er janvier 2016)" },
    {
      type: "p",
      texte: "Depuis le 1er janvier 2016, tout employeur privé doit proposer une **mutuelle d'entreprise** à tous ses salariés, indépendamment de leur statut (CDI, CDD, temps partiel). La cotisation est prise en charge **au moins à 50% par l'employeur**. En pratique, beaucoup d'entreprises prennent en charge 60 à 80%.",
    },
    { type: "h3", texte: "Exemple concret" },
    { type: "p", texte: "Mutuelle d'entreprise à 60 €/mois :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'employeur paie : 30 € minimum (50%)",
        "Vous payez : 30 € maximum",
        "Vous avez une bonne mutuelle pour 30 €/mois : moins cher qu'une mutuelle individuelle équivalente qui coûterait 60-80 €/mois",
      ],
    },
    { type: "h3", texte: "Peut-on refuser la mutuelle d'entreprise ?" },
    { type: "p", texte: "Oui, dans certains cas limités :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si vous êtes déjà couvert par la mutuelle de votre conjoint",
        "Si vous êtes en CDD de moins de 3 mois",
        "Si vous êtes à temps très partiel et que la cotisation représente plus de 10% de votre salaire",
      ],
    },
    { type: "h3", texte: "Portabilité : garder la mutuelle d'entreprise après la fin du contrat" },
    {
      type: "p",
      texte: "Si vous perdez votre emploi et percevez l'allocation chômage (ARE), vous pouvez garder votre mutuelle d'entreprise **gratuitement** pendant 12 mois maximum (portabilité de la prévoyance, article L911-8 du CSS). C'est automatique, vous n'avez rien à demander, votre ancien employeur doit vous en informer.",
    },
    {
      type: "h2",
      texte: "Comment choisir une mutuelle individuelle si vous n'êtes pas salarié",
      id: "choisir-mutuelle-individuelle",
    },
    {
      type: "p",
      texte: "Si vous n'êtes pas salarié (étudiant, auto-entrepreneur, inactif, conjoint sans activité) et que vous ne bénéficiez pas de la CSS, vous devrez souscrire une mutuelle individuelle.",
    },
    { type: "h3", texte: "Les 4 niveaux de garanties" },
    {
      type: "tableau",
      entetes: ["Niveau", "Pour qui", "Prix moyen/mois", "Ce que ça couvre"],
      lignes: [
        [
          "Entrée de gamme",
          "Jeunes en bonne santé",
          "25 à 40 €",
          "Remboursement de base (hospitalisation, généraliste)",
        ],
        [
          "Intermédiaire",
          "Famille sans besoins particuliers",
          "50 à 80 €",
          "+ optique et dentaire corrects",
        ],
        [
          "Confort",
          "Porteurs de lunettes, soins dentaires réguliers",
          "80 à 120 €",
          "+ prothèses dentaires, soins spécialisés",
        ],
        [
          "Premium",
          "Familles, personnes âgées",
          "120 à 200 €",
          "Remboursements maximaux tous postes",
        ],
      ],
    },
    { type: "h3", texte: "Les critères à comparer" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Le remboursement dentaire** : c'est souvent le poste le plus coûteux. Vérifiez le remboursement pour une couronne (minimum : 200% du tarif Sécu soit 245 €)",
        "**Le remboursement optique** : combien pour des verres progressifs ? Tous les 2 ans ou chaque année ?",
        "**Le délai de carence** : certaines mutuelles imposent un délai de 3 à 12 mois avant de rembourser les soins dentaires ou optiques, vérifiez ce délai avant de souscrire",
        "**Le tiers payant** : votre mutuelle pratique-t-elle le tiers payant (pas d'avance de frais) ?",
        "**La résiliation** : depuis 2020 (loi Hamon), vous pouvez résilier votre mutuelle individuelle à tout moment après 1 an, sans frais",
      ],
    },
    { type: "h3", texte: "Comparateurs recommandés" },
    {
      type: "liste",
      style: "puces",
      items: ["**Meilleurtaux.com** (section mutuelle)", "**LeLynx.fr**", "**Hyperassur.com**"],
    },
    {
      type: "p",
      texte: "Ces sites comparent des centaines d'offres en quelques minutes. Renseignez votre situation, vos besoins prioritaires (dentaire, optique, hospitalisation) et votre budget.",
    },
    { type: "h2", texte: "La mutuelle pour les étudiants étrangers", id: "mutuelle-etudiants" },
    { type: "p", texte: "Les étudiants étrangers ont des options spécifiques." },
    { type: "h3", texte: "L'obligation d'assurance santé pour le visa étudiant" },
    {
      type: "p",
      texte: "Pour obtenir un visa étudiant (VLS-TS étudiant) ou le renouveler, vous devez justifier d'une **couverture santé** valide. Deux options :",
    },
    { type: "p", texte: "**Option 1 : La Sécurité sociale étudiante**" },
    {
      type: "p",
      texte: "Tous les étudiants de moins de 28 ans inscrits dans un établissement d'enseignement supérieur français sont automatiquement affiliés à la CPAM (gratuit). Vous obtenez une carte Vitale et les remboursements standard.",
    },
    { type: "p", texte: "**Option 2 : Assurance privée reconnue**" },
    {
      type: "p",
      texte: "Si vous êtes inscrit dans une grande école ou université privée qui n'est pas reconnue par la Sécu, ou si vous avez plus de 28 ans, vous devrez souscrire une assurance privée. Les assurances reconnues pour le visa étudiant incluent : Allianz, AXA, MGEN, April, SMERRA, MGEL.",
    },
    { type: "h3", texte: "La LMDE et les mutuelles étudiantes" },
    {
      type: "p",
      texte: "La LMDE (La Mutuelle Des Étudiants) propose des complémentaires santé adaptées aux étudiants, à partir de 5 €/mois pour les étudiants bénéficiaires de la CSS. Même chose avec la SMERRA, la MGEL et d'autres mutuelles régionales.",
    },
    { type: "h3", texte: "Campus France et les assurances intégrées" },
    {
      type: "p",
      texte: "Certains programmes Campus France incluent une assurance santé dans les frais de dossier. Vérifiez les garanties offertes, elles sont souvent minimales (hospitalisation uniquement) et nécessitent un complément.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La couverture santé en France est un système à deux étages : la Sécurité sociale (obligatoire, pour tous les résidents réguliers) et la complémentaire santé (mutuelle) qui couvre le reste à charge. Avant toute chose, vérifiez votre éligibilité à la CSS gratuite, c'est la meilleure mutuelle possible à zéro euro. Si vous travaillez, votre employeur doit vous proposer une mutuelle d'entreprise cofinancée. Si vous êtes étudiant, la Sécu étudiante + une mutuelle à 5-10 €/mois suffit pour la plupart des besoins. La santé en France est un droit, assurez-vous d'en profiter pleinement.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Suis-je obligé d'avoir une mutuelle en France ?",
      reponse: "Pas obligatoirement pour les particuliers (sauf pour les salariés qui doivent accepter ou refuser la mutuelle d'entreprise). Cependant, sans mutuelle, vous payez 30% des frais médicaux de votre poche (secteur 1), et bien plus pour les soins dentaires et optiques. Si vos revenus sont modestes, vérifiez d'abord votre éligibilité à la CSS gratuite sur ameli.fr.",
    },
    {
      question: "Mon employeur doit-il me proposer une mutuelle même si je suis en CDD ?",
      reponse: "Oui. Depuis 2016, la mutuelle d'entreprise est obligatoire pour TOUS les salariés, y compris en CDD. Votre employeur doit prendre en charge au moins 50% de la cotisation. Vous pouvez la refuser si vous êtes déjà couvert par la mutuelle de votre conjoint ou si vous êtes en CDD de moins de 3 mois.",
    },
    {
      question: "La CSS couvre-t-elle les soins dentaires et les lunettes ?",
      reponse: "Oui, la CSS offre une bonne couverture dentaire (prothèses, couronnes) et optique dans le cadre du \"100% Santé\", des lunettes sans reste à charge. C'est une des meilleures couvertures complémentaires disponibles, et elle est gratuite si vos revenus sont en dessous du plafond.",
    },
    {
      question: "Je quitte mon emploi, que devient ma mutuelle d'entreprise ?",
      reponse: "Si vous perdez votre emploi et percevez l'allocation chômage (ARE), vous avez droit à la portabilité gratuite de votre mutuelle d'entreprise pendant 12 mois maximum. Votre ancien employeur doit vous en informer automatiquement. Après 12 mois ou si vous ne percevez plus l'ARE, la portabilité s'arrête et vous devez souscrire une mutuelle individuelle.",
    },
  ],
  sources: [
    {
      titre: "Ameli.fr, Complémentaire Santé Solidaire (CSS)",
      url: "https://www.ameli.fr/assure/droits-demarches/difficulte-acces-droits-soins/complementaire-sante-solidaire/complementaire-sante-solidaire",
      type: "officiel",
      description: "Conditions, plafonds et démarche pour la CSS 2026",
    },
    {
      titre: "Service-Public.fr, Mutuelle d'entreprise obligatoire",
      url: "https://www.service-public.fr/particuliers/vosdroits/F20739",
      type: "officiel",
      description: "Obligations de l'employeur concernant la complémentaire santé collective",
    },
    {
      titre: "Code de la Sécurité sociale : Article L911-8 (portabilité)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000019617023/",
      type: "juridique",
      description: "Droit à la portabilité de la mutuelle d'entreprise après fin du contrat de travail",
    },
    {
      titre: "Ministère de la Santé : Réforme 100% Santé",
      url: "https://sante.gouv.fr/systeme-de-sante/100pourcent-sante/",
      type: "officiel",
      description: "Panier 100% Santé optique, dentaire et auditif sans reste à charge",
    },
  ],
};

export default article;
