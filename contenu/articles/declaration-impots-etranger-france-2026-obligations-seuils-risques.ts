import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-impots-etrangers.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/declaration-impots-etranger-france-2026-obligations-seuils-risques`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "declaration-impots-etranger-france-2026-obligations-seuils-risques",
  titre: "Déclaration d'impôts en tant qu'étranger en France 2026 : obligations, seuils, risques légaux",
  titreSeo: "Déclaration d'impôts en tant qu'étranger en France 2026 : obligations, seuils, risques légaux",
  resume: "Guide complet : qui doit déclarer (résidant fiscal), seuils d'exonération (15 547 €), documents obligatoires, pénalités non-déclaration (80 %), conventions fiscales, et aides pour remplir déclaration 2026.",
  chapo: "La déclaration d'impôts en tant qu'étranger en France est une obligation légale que beaucoup d'étrangers méconnaissent ou ignorent. Que vous soyez étudiant, salarié, travailleur indépendant, conjoint de Français ou bénéficiaire du titre de séjour, la France exige une déclaration fiscale annuelle basée sur des critères précis.",
  publieLe: "2026-03-31",
  modifieLe: "2026-03-31",
  minutes: 25,
  theme: "déclaration impôts étranger France",
  motsCles: [
    "déclaration impôts étranger France",
    "obligations fiscales étrangers 2026",
    "résidant fiscal France",
    "seuils exonération impôt",
    "revenus déclaration obligatoire",
    "pénalité non-déclaration",
    "redressement fiscal étranger",
    "convention fiscale double imposition",
    "titre de séjour impôts",
    "micro-entrepreneur étranger",
    "étudiant étranger revenus",
    "bourse cours exonérée",
    "CAF allocations logement étrangers",
    "retraite complémentaire déduction",
    "crédit impôt enfant à charge",
    "expert-comptable étranger",
    "tele-conseil DGFiP",
    "formulaire 2042 étranger",
    "impots.gouv.fr langue étrangère",
    "sanction fraude fiscale résidant",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
  blocs: [
    {
      type: "p",
      texte: "Qui doit déclarer en tant qu'étranger ? Quales sont les seuils d'imposition ? Quelles sont les conséquences du non-respect de cette obligation ? Quelle est la différence entre résidant fiscal et non-résidant ? Quels revenus faut-il déclarer ? Ce guide complet 2026 vous explique vos obligations fiscales, les risques légaux d'une non-déclaration, les aménagements possibles, et les ressources officielles pour vous accompagner.",
    },
    {
      type: "p",
      texte: "Même si vous pensez n'avoir aucun impôt à payer, cette obligation s'impose à tous les résidants fiscaux français. Découvrez comment vous protéger légalement et éviter les redressements fiscaux coûteux.",
    },
    {
      type: "h2",
      texte: "Qui doit déclarer ses impôts en tant qu'étranger en France ?",
      id: "qui-doit-declarer-etranger",
    },
    {
      type: "p",
      texte: "Tous les étrangers résidant fiscalement en France doivent déclarer leur revenu annuel. Le statut de résidant fiscal n'est pas basé sur la nationalité, mais sur des critères objectifs établis par le Code Général des Impôts (CGI).",
    },
    { type: "p", texte: "**Vous êtes résidant fiscal en France si vous :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Avez votre foyer principal en France (domicile habitual), indépendamment du titre de séjour",
        "Avez passé plus de 183 jours en France au cours de l'année civile (même sans titre de séjour)",
        "Travaillez en France depuis plus de 6 mois (sauf exceptions pour expatriés détachés)",
        "Avez placé le siège de vos activités professionnelles en France",
        "Avez des intérêts économiques importants en France (immeubles, entreprise, etc.)",
      ],
    },
    { type: "p", texte: "**Les étrangers concernés incluent :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Étudiants en masters, doctorats ou formations longues (> 6 mois)",
        "Salariés avec titre de séjour (temporaire, pluriannuelle, résident)",
        "Travailleurs indépendants, auto-entrepreneurs, freelancers",
        "Conjoints de Français (résidant obligatoire)",
        "Bénéficiaires de protection internationale (demandeurs d'asile acceptés, réfugiés)",
        "Expatriés détachés par la France (conventions fiscales)",
      ],
    },
    {
      type: "p",
      texte: "**Exception importante :** Les étrangers non-résidants fiscaux (visiteurs, touristes, expatriés avec conventions fiscales) ne déclarent généralement PAS en France, sauf s'ils ont des revenus source française (location d'immeuble, plus-value, etc.).",
    },
    {
      type: "p",
      texte: "La règle de base : si vous avez votre centre des intérêts économiques en France, vous devez déclarer. C'est une obligation légale, même si vous n'avez aucun impôt à payer.",
    },
    {
      type: "h2",
      texte: "Seuils d'exonération et d'imposition pour les étrangers 2026",
      id: "seuils-exoneration-2026",
    },
    {
      type: "p",
      texte: "Bien que la déclaration soit obligatoire pour tous les résidants, certains seuils de revenus d'exonération d'impôt s'appliquent. Comprendre ces seuils vous aide à savoir si vous aurez un impôt à payer.",
    },
    { type: "p", texte: "**Seuils de non-imposition 2026 (revenus nets) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Célibataire, divorcé, veuf : **15 547 €** de revenu net",
        "Couple marié/pacsé : **31 094 €** pour deux personnes",
        "Avec enfants à charge : +7 779 € par enfant",
        "Retraité ou invalide : seuils légèrement différents",
      ],
    },
    { type: "p", texte: "**Barème progressif 2026 :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "De 0 € à 11 294 € : **0 %** (non imposable)",
        "De 11 294 € à 28 797 € : **5 %**",
        "De 28 797 € à 82 341 € : **11 %**",
        "De 82 341 € à 231 867 € : **24 %**",
        "De 231 867 € à 696 445 € : **45 %**",
        "Plus de 696 445 € : **51 %**",
      ],
    },
    { type: "p", texte: "**Revenus exonérés pour certains étrangers (sous conditions) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Bourses d'études : exonérées si octroyées par l'État ou l'UE",
        "Allocations familiales, CAF : exonérées",
        "Aides au COVID-19 (si applicable) : exonérées sous conditions",
        "Indemnités de licenciement légales : partiellement exonérées",
      ],
    },
    { type: "p", texte: "**Attention : Revenus obligatoirement déclarés :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Salaires, traitements, commissions",
        "Revenus professionnels (indépendants, auto-entrepreneurs)",
        "Revenus fonciers (location d'immeuble)",
        "Revenus de placements (intérêts, dividendes, cryptomonnaies)",
        "Plus-values (vente immobilière, actions, etc.)",
        "Revenus étrangers (pensions de pays étranger, revenus source à l'étranger)",
      ],
    },
    {
      type: "p",
      texte: "Même si vos revenus sont sous le seuil, la déclaration reste obligatoire. Elle vous protège et peut vous ouvrir droit à des remboursements (prélèvement à la source trop élevé).",
    },
    {
      type: "h2",
      texte: "Documents obligatoires pour déclarer ses impôts en tant qu'étranger",
      id: "documents-necessaires-declaration",
    },
    {
      type: "p",
      texte: "Pour remplir votre déclaration 2026 (revenus 2025), vous devez avoir en main les justificatifs suivants. Les autorités fiscales peuvent les demander lors d'un contrôle.",
    },
    { type: "p", texte: "**Documents d'identité et de résidence :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Titre de séjour (avant/recto-verso), ou visa de long séjour, ou passeport",
        "Preuves de résidence : facture EDF/gaz/eau, quittance de loyer, certificat d'hébergement, contrat de colocation",
        "Si changement d'adresse : attestation de déménagement, quittance ancienne adresse",
      ],
    },
    { type: "p", texte: "**Documents professionnels :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Fiches de paie (bulletins de salaire) 2025 complets",
        "Certificat de travail ou contrats d'emploi",
        "Pour auto-entrepreneurs/indépendants : factures, justificatifs de charges, carnet d'achats",
        "Attestation Urssaf (micro-entreprise)",
        "Bilan comptable (si EIRL ou SARL)",
      ],
    },
    { type: "p", texte: "**Revenus professionnels détaillés :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Relevé bancaire de virements salaire",
        "Invoices/factures (pour indépendants)",
        "déclarations CAE (revenu minima pour justifier imposition)",
      ],
    },
    { type: "p", texte: "**Revenus fonciers (si propriétaire/bailleur) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Contrats de location",
        "Justificatifs de charges (travaux, taxes, assurance habitation)",
        "Avis de taxation foncière (taxe d'habitation avant suppression)",
      ],
    },
    { type: "p", texte: "**Revenus de placements :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Relevés bancaires d'intérêts, dividendes",
        "Certificats de placements, assurance-vie",
        "Crypto-monnaies : historiques d'achats et ventes",
      ],
    },
    { type: "p", texte: "**Revenus étrangers :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Relevés de pension/rente retraite (si vous cotisiez en pays étranger)",
        "Copy attestations revenus source étrangère",
      ],
    },
    { type: "p", texte: "**Aides et déductions sociales :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Certificats enfants à charge (allocations familiales rejetées ? justification parenté)",
        "Aides au logement : attestation CAF",
        "Documents adhésion mutuelle/assurance maladie",
      ],
    },
    {
      type: "p",
      texte: "**À proximité du 31 mai 2026 :** La DGFiP vous adresse une déclaration pré-remplie. Même si vous la recevez avec erreurs, elle est obligatoire à corriger/envoyer.",
    },
    {
      type: "h2",
      texte: "Conséquences légales de NE PAS déclarer ses impôts",
      id: "consequences-non-declaration",
    },
    {
      type: "p",
      texte: "Ne pas déclarer ses impôts en tant qu'étranger résidant en France n'est pas une infraction mineure. Les pénalités légales sont sévères et peut affecter votre situation.",
    },
    { type: "p", texte: "**Pénalités fiscales applicables :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Majoration de 10 %** si oubli ou retard (déclaration tardive)",
        "**Ajout de 40 %** si insuffisance ou erreur grave",
        "**Ajout de 80 %** si fraude fiscale caractérisée (dissimulation volontaire)",
        "**Intérêts de retard** : calculés au taux annuel (5.80 % en 2026)",
        "**Frais de dossier** : 15 € à 1 000 € selon le type de contrôle",
      ],
    },
    { type: "p", texte: "**Exemple concret :**" },
    {
      type: "p",
      texte: "Vous gagnez 25 000 € mais ne déclarez pas. La taxation vous oblige d'impôt sur 25 000 € = ~2 000 € d'impôt. Si contrôlé et redressement :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Impôt dû : 2 000 €",
        "Pénalité 40 % : **800 €**",
        "Intérêts : **250 €+**",
        "Total : **3 050 €+**",
      ],
    },
    { type: "p", texte: "**Contrôles administratifs possibles :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La DGFiP analyse les déclarations manquantes automatiquement (algorithmes IA)",
        "Vérifications auprès de votre employeur, CAF, banque",
        "Dossiers pris au hasard (2 % des declarations)",
        "Risque : visite d'un vérificateur à votre domicile",
      ],
    },
    { type: "p", texte: "**Impact légal sur votre titre de séjour :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Fraude fiscale avérée = **antécédent criminel** enregistré à la préfecture",
        "Peut compliquer renouvellement titre de séjour",
        "Peut être cause de refus de regroupement familial",
        "Impacte demande naturalisation française (examen moral)",
        "Peut figurer sur casier judiciaire (si poursuite pénale engagée)",
      ],
    },
    {
      type: "p",
      texte: "**Il n'existe AUCUNE amnistie** pour étrangers qui ne déclarent pas. Le délai de prescription est de **6 ans** (4 ans en situation normale). Même années anciennes, vous pouvez être redressé si découvert.",
    },
    {
      type: "p",
      texte: "**Conseil légal :** Si vous avez oublié de déclarer, mieux vaut régulariser avant contrôle volontaire auprès de la DGFiP (possibilité d'amnistie partielle si erreur reconnue sincère).",
    },
    {
      type: "h2",
      texte: "Déclaration sur formulaire simplifié vs déclaration en ligne 2026",
      id: "declaration-simplifiee-vs-normale",
    },
    {
      type: "p",
      texte: "La DGFiP vous propose deux modes de déclaration avec des différences importantes selon votre situation.",
    },
    { type: "p", texte: "**Déclaration sur formulaire papier (2042-S / 2042-C) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Formulaires A4 envoyés par courrier fin avril/début mai",
        "Remplissage manuel ou à l'ordinateur imprimé",
        "À renvoyer sous enveloppe timbrée avant **31 mai 2026**",
        "Délai de réception postale crucial (recommandation : envoyer 1 semaine avant)",
        "Qui peut utiliser : tous les résidants fiscaux",
        "Avantage : simple, physique, preuve d'envoi",
        "Inconvénient : lent, facile perdre, pas de correction en ligne",
      ],
    },
    { type: "p", texte: "**Déclaration en ligne (site impots.gouv.fr) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Accès depuis 13 avril 2026 (ouverture DGFiP)",
        "Saisie directe sur formulaire web ou appli mobile",
        "Délai ultime : **31 mai 2026, 23h59** (heure serveur)",
        "Identifiant : numéro de fiscalité + mot de passe",
        "Qui doit utiliser : obligatoire si revenu > 50 000 € (sauf exceptions)",
        "Avantage : rapide, correction possible, avertissements en temps réel",
        "Inconvénient : accès internet, espace personnel France Connect",
      ],
    },
    { type: "p", texte: "**Étrangers sans numéro fiscal (situation courante) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Demander temporaire = démarche préalable auprès DGFiP (plusieurs semaines)",
        "Ou utiliser numéro titre de séjour si disponible",
        "Sinon : formulaire papier obligatoire (pas accès en ligne)",
      ],
    },
    { type: "p", texte: "**Quels revenus déclarer dans quelle case :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Salaires / primes : encadré \"1AJ\" et \"1BJ\"",
        "Revenus professionnels (indépendants) : encadré \"8TA\" ou \"8WA\"",
        "Revenus fonciers : encadré \"4BA\", \"4BB\", \"4BC\"",
        "Revenus de placements : encadré \"2AB\", \"2AC\", \"2BH\"",
        "Revenus étrangers : annexe 2047 (Cerfa 10330*19)",
      ],
    },
    { type: "p", texte: "**Amendement (correction après déclaration) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Avant 31 déc année N : formulaire 3138 (simple)",
        "Après 31 déc année N : déclaration complémentaire (3138) = mise à jour",
        "Correction en ligne : téléchargement + réenvoi obligatoire",
        "Délai prescription : 3 ans pour correction mineure, 6 ans si contrôle engagé",
      ],
    },
    {
      type: "h2",
      texte: "Conventions fiscales : comment ne pas payer l'impôt deux fois",
      id: "conventions-fiscales-etats-etrangers",
    },
    {
      type: "p",
      texte: "Un risque majeur pour étrangers ayant revenus dans deux pays : l'imposition dans le pays d'origine ET en France. Les conventions fiscales existent pour éviter cela.",
    },
    { type: "p", texte: "**Qu'est-ce qu'une convention fiscale ?**" },
    {
      type: "p",
      texte: "Accord entre France et un autre pays pour éviter la double imposition. Exemple : employeur aux USA, impôts en France = conflit. La convention règle qui taxe quel revenu.",
    },
    { type: "p", texte: "**Pays ayant convention avec France (sélection) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "UE : Allemagne, Belgique, Italie, Espagne, Espagne, Pologne, etc. (**99 conventions**)",
        "Amériques : USA, Canada, Brésil, Mexique",
        "Asie-Océanie : Japon, Singapour, Australie, Inde, Chine, Thaïlande",
        "Afrique : Maroc, Algérie, Sénégal, Cameroun, Mali",
        "Proche-Orient : Israël, Émirats arabes unis",
      ],
    },
    { type: "p", texte: "**Comment fonctionne la convention fiscale :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "France reconnaît imposition du pays-source (où vous travaillez)",
        "Vous êtes crédité des impôts payés à l'étranger (crédit d'impôt)",
        "Vous déclarez en France monté total des revenus",
        "La différence (si impôt français > étranger) = solde à payer France",
        "Si impôt étranger > France = crédit restituable (remboursement)",
      ],
    },
    { type: "p", texte: "**Exemple chiffré :**" },
    { type: "p", texte: "Vous travaillez en Allemagne, résidant en France." },
    {
      type: "liste",
      style: "puces",
      items: [
        "Salaire brut : 40 000 €",
        "Impôt allemand payé : 8 000 €",
        "Déclaration France sur 40 000 € = impôt français 10 000 €",
        "Crédit d'impôt convention : - 8 000 €",
        "Solde dû France : **2 000 €**",
      ],
    },
    { type: "p", texte: "**Documents nécessaires pour invoquer la convention :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Certificat de résidence fiscale (France) : demande auprès DGFiP",
        "Certificat de non-résidence du pays étranger",
        "Preuve impôts payés à l'étranger (avis d'imposition, reçu fiscal)",
        "Formulaire annexe de déclaration convention (2047 ou 2042-4)",
      ],
    },
    { type: "p", texte: "**Situation délicate : vous ne résidez nulle part legalement?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Erreur ! Vous DEVEZ avoir résidence fiscale quelque part (France et/ou étranger)",
        "Si flou = DGFiP vous l'impose d'office (France si présence physique)",
        "Clarifier situation via lettre explicative recommandée à DGFiP",
      ],
    },
    {
      type: "p",
      texte: "**Point crucial :** Même avec convention, obligation de déclarer en France reste entière. La convention règle juste comment créditer impôts étrangers.",
    },
    {
      type: "h2",
      texte: "Qui peut vous aider à déclarer : DGFiP, expert-comptable, associations",
      id: "aide-professionnelle-declaration",
    },
    {
      type: "p",
      texte: "Vous n'êtes pas obligé de déclarer seul. De nombreux services officiels et professionnels peuvent vous assister.",
    },
    { type: "p", texte: "**Services GRATUITS de la DGFiP :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Maison de services Au Publique** : accueil physique dans ma commune pour assistance. Localisez via https://www.mispublique.fr/",
        "**Tele-conseil fiscal** : appel gratuit DGFiP, numéro : **0 809 401 401**. Consultation 30-45 min max sur déclaration.",
        "**Portail impots.gouv.fr** : rubrique \"Aide et contact\", chat live ou FAQ complète",
        "**Associations caritatives** : CIMADE, Secours Catholique, Emmaüs France = aide bénévole gratuite aux étrangers (parfois sur appointement)",
      ],
    },
    { type: "p", texte: "**Services PAYANTS :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Expert-comptable / CGA (Centres de Gestion Agréés)** :",
        "Forfait annuel : 150 € à 500 € selon complexité",
        "Avantage : gestion complète, conseil fiscal, amortissement charges pro",
        "Conseil : indispensable si auto-entrepreneur ou revenus fonciers",
      ],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Conseiller en gestion financière / courtier fiscal** :",
        "Honoraires : 50 € à 150 € l'heure consultation",
        "Risque : certains malhonnêtes (vérifier accréditation Chambre Métier)",
      ],
    },
    { type: "p", texte: "**Attention - escroqueries courantes :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Prétendus \"consultants\" promettant remboursement = frauduleux",
        "Promesses dissimulation revenus = illégal (fraude)",
        "Offres de \"défiscalisation miracle\" = arnaque",
        "Contact par SMS/WhatsApp supposé DGFiP = faux (authentification 2FA unique)",
      ],
    },
    { type: "p", texte: "**Ressources en langue étrangère (multilingues) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Site impots.gouv.fr : traduit en 10 langues (menu \"Autres langues\")",
        "Émeutres FranceTravail intégrateurs : souvent parsonnage multilingue gratuitement",
        "OFII (Office Français Intégration Immigration) : association aide formelle déclaration",
        "Consulat/ambassade votre pays : parfois conseil fiscal bilingue",
      ],
    },
    { type: "p", texte: "**Forces consulaires :**" },
    {
      type: "p",
      texte: "Si ressortissant d'un pays UE, consulat/ambassade possèd souvent secrétariat aide fiscale. Demander \"aide déclaration impôt France pour ressortissants nationaux\" (gratuit souvent)",
    },
    {
      type: "p",
      texte: "**Timing critique :** Demander assistance AVANT le 31 mai 2026 (délai auquel experts surchargés). Anticiper 2-3 semaines prioritaire.",
    },
    {
      type: "h2",
      texte: "Cas particuliers : étudiants, employé au noir, réfugiés, situation mixte",
      id: "cas-particuliers-etrangers",
    },
    {
      type: "p",
      texte: "Certaines situations d'étrangers exigent approche spécifique. Voici les cas les plus courants.",
    },
    { type: "p", texte: "**Cas 1 : Étudiant étranger en France**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Déclaration obligatoire si > 183 jours/an en France (pratiquement tous les étudiants)",
        "Revenu typique : bourse exonérée + petit job (< 4 000 € estimé)",
        "Seuil non-imposition : 15 547 € (seul) atteint rarement",
        "Exonération : bourse d'État français ou UE exonérée totalement",
        "Petit job : à déclarer (étudiant-travailleur = situation mixte régulée)",
        "Quittemps : job étudiant jusqu'à 50 000 € non-affiliation Urssaf si < 900h/an",
        "Conseil : Déclarer proactivement (aide au logement, remboursement santé possible)",
      ],
    },
    { type: "p", texte: "**Cas 2 : Emploi non déclaré (travail au noir)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Situation illégale (infractions code travail + droit fiscal)",
        "Déclaration interdite ? NON ! Vous DEVEZ déclarer même revenus clandestins",
        "Risque non-déclaration : redressement fiscal DOUBLEMENT pénalisé (fraude)",
        "Risque déclaration : employeur pénalisé, vous moins exposé si bon foi",
        "Conseil : Régulariser avec tiers dignitaire (avocat fiscal) = protection partielle",
        "Procédure : courrier recommandé à DGFiP reconnaissant erreur, paiement spontané",
      ],
    },
    { type: "p", texte: "**Cas 3 : Réfugié ou bénéficiaire protection internationale**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Statut = résidant fiscal automatique (France obligation subsidaire)",
        "Revenu RIA (revenu insertion allocation) = exonéré irf si <1 100 € mensuel",
        "Revenu travail : à déclarer intégralement",
        "Aides CAF : vérifier condition résidence fiscale (généralement OK avec statut)",
        "Passeport remplacé par : titre séjour/laissez-passer, suffit pour DGFiP",
        "Conseil : Signaler statut réfugié à DGFiP si nouvelle arrivée (simplifications possibles)",
      ],
    },
    { type: "p", texte: "**Cas 4 : Changement statut en cours d'année**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Ex: arrive mai 2025 en France avec salarié",
        "Déclaration ajustée : revenus 8 mois seulement (mai-décembre 2025)",
        "Revenu proratisé temporellement (pas année complète)",
        "Rattachement foyer : calcul proportion résidence",
        "Pro-rata allocation : aides CAF aussi proportionnées",
        "Conseil : Noter date arrivée officiellement auprès DGFiP + mairie",
      ],
    },
    { type: "p", texte: "**Cas 5 : Situation matrimoniale mixte**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Marié(e) à français(e) = résidant fiscal France automatique (imposition commune option)",
        "Couples binationaux : possibilité déclarer ensemble ou séparé (décision libre)",
        "Avantage déclaration commune : déductions fréquemment plus favorables",
        "Investissements/propriété conjoint : bien indivis = inclusion calcul",
        "Conseil : Étudier impact tax avant mariage (conseil expert-comptable gratuit souvent)",
      ],
    },
    { type: "p", texte: "**Cas 6 : Revenus multiples (salarié + immobilier + placements)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Tous revenus = piscine fiscale unique (progressivité globale)",
        "Pertes d'un revenu = compensation autres (déduction cotisations, charges déductibles)",
        "Micro-entreprise + salaire = forfaitaire ou réel + salariat = cumul possible",
        "Amortissements immobiliers : réduisent base imposable (+ complexe)",
        "Conseil : Expert-comptable fortement recommandé (économies substantielles garanties)",
      ],
    },
    { type: "p", texte: "**Cas 7 : Pas de domicile fixe / sans-abri étrangers**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Résidant fiscal si 183 jours France quand même (critère temporel prime)",
        "Domicile: utiliser adresse service social / centre assistance / mairie d'accueil",
        "Documents: attestation hébergement ou certification mairie",
        "Déclaration: possible, même sans adresse stable (mairie accepte requête confidentialité)",
        "Aide: associations (Emmaüs, Secours Catholique) souvent assistants spécialisés",
      ],
    },
    {
      type: "h2",
      texte: "Déductions, crédits et réductions d'impôt disponibles pour étrangers 2026",
      id: "pistes-reduction-impot",
    },
    {
      type: "p",
      texte: "Vous pouvez réduire légitimement votre impôt via déductions et crédits. Étrangers généralement éligibles mêmes conditions que français.",
    },
    { type: "p", texte: "**Déductions MAJEURES (réduisent revenu imposable) :**" },
    {
      type: "liste",
      style: "numeros",
      items: ["**Cotisations retraite / complémentaire :**"],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Cotisations Urssaf : déductibles automatiquement (salaire net remonte)",
        "Cotisations retraite supplémentaires (Madelin indépendants) : déduction jusqu'à 8 269 €/an",
        "Assurance dépendance : déduction intégrale (~500-800 €/an typique)",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: ["**Frais professionnels (auto-entrepreneurs, indépendants) :**"],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Option micro-entreprise : forfait 34 % déductible (si < 188 700 € chiffre)",
        "Optionnal réel : déduction dépenses réelles (loyer bureau, matériel, formation)",
        "Formation professionnelle : totalement déductible",
        "Cotisations syndicales : déductibles",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: ["**Charges de famille :**"],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Enfant à charge : 1 570 € déduction par enfant (2026 estimé)",
        "Enfant étudiant : surcharge 50 € supplémentaire/an",
        "Frais scolarité : 230 € à 930 € reductions crédit après calcul",
        "Garde enfant < 6 ans : crédit 50 % dépenses (6 000 € max)",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: ["**Intérêts d'emprunts :**"],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Crédit immobilier résidence principale : intérêts partiellement déductibles (pour propriétaires)",
        "Crédit affecté : crédit à la consommation moins avantageux, non déductible",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: ["**Dons et mécénat :**"],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Dons associations caritatives : crédit 75 % jusqu'à 1 000 € (après 75 % cumulé)",
        "Dons politiques : crédit 66 % jusqu'à 20 € (rare pour étrangers)",
      ],
    },
    { type: "p", texte: "**Crédits d'impôt (remboursables, réduisent impôt final) :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Crédit service à la personne** : 50 % dépenses (nettoyage, jardinage, garde enfant) = remboursement",
        "**Crédit emploi direct** : si employer personne à domicile = crédit instantané",
        "**Crédit apprentissage** : si embauchez apprenti = crédit patron peut partager",
        "**Crédit transition énergétique (MaPrimeRénov indirecte)** : rénovation thermique isolant = crédit",
      ],
    },
    { type: "p", texte: "**Réductions d'impôt (réduisent impôt final, non remboursé excédent) :**" },
    {
      type: "liste",
      style: "numeros",
      items: ["**Investissement productif :**"],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "PME jeune innovation : crédit 50 % ISF (1 000 € min)",
        "Souscription venture capital : crédit 25 % (6 000 € max)",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: ["**Charité/mécénat** : voir crédits ci-dessus (meilleure option généralement)"],
    },
    { type: "p", texte: "**Exemple cumul déductions + crédits :**" },
    { type: "p", texte: "Auto-entrepreneur, revenus 35 000 €, enfant à charge, dons caritatifs." },
    {
      type: "liste",
      style: "puces",
      items: [
        "Micro-entreprise forfait 34 % = - 11 900 € : revenu net 23 100 €",
        "Enfant charge = - 1 570 € : revenu net 21 530 €",
        "Impôt théorique 21 530 € x 5 % = 1 076 €",
        "Dons caritatifs 1 000 € x 75 % = - 750 € crédit",
        "**Impôt final dû = 326 €** (au lieu 1 076 € sans déductions)",
      ],
    },
    {
      type: "p",
      texte: "**Conseil critique :** Demander audit fiscal expert-comptable = économies généralement 30-40 % (honoraires investissement rentable).",
    },
    { type: "h2", texte: "À retenir" },
    {
      type: "p",
      texte: "La déclaration d'impôts en tant qu'étranger en France n'est pas optionnelle. C'est une obligation légale pour tous les résidants fiscaux. En la méconnaissant, vous risquez des pénalités coûteuses pouvant attecter votre titre de séjour et votre naturalization.",
    },
    {
      type: "p",
      texte: "Or, la bonne nouvelle : vous avez des droits et des mécanismes de protection. Les conventions fiscales évitent la double imposition. Les déductions et crédits réduisent significativement votre charge. Et des ressources gratuites existent : DGFiP, associations, mairies.",
    },
    { type: "p", texte: "**Action prioritaire :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Avant 31 mai 2026 : rassembler documents justificatifs",
        "Demander assistance si déclaration complexe (avant fin avril = délai)",
        "Déclarer intégralement même si crainte = meilleur moyen protéger légalement",
      ],
    },
    {
      type: "p",
      texte: "La France recense étrangers via fiscalité. Une déclaration régulière = protection légale maximale, crédit pour futurs reglements, et tranquillité administrative. Ne pas déclarer = risque permanent redressement.",
    },
  ],
  faq: [
    {
      question: "Je suis étudiant étranger, dois-je déclarer revenus bourse + petit job ?",
      reponse: "Oui, obligation si vous êtes résidant fiscal (> 183 jours/an = quasi tous étudiants). La bourse d'État français est exonérée, le petit job se déclare. Vous paierez probablement 0 € impôt (seuil non-imposition élevé), mais déclaration reste obligatoire. Elle vous ouvre droit allocations logement CAF.",
    },
    {
      question: "Risque redressement si je ne compte pas déclarer cette année ?",
      reponse: "Risque très élevé. DGFiP utilise algorithmes intelligence artificielle pour déceler non-déclarations. Une fois détecté (2-3 ans ex post facto), pénalité 40-80 % s'ajoute impôt dû + intérêts. Estimation : 35 000 € revenus = 5 000 € redressement minimum. Mieux déclarer même tardivement que se faire redresser.",
    },
    {
      question: "Si j'emploie à titre non-déclaré (salaire noir), comment déclarer ?",
      reponse: "Vous êtes obligé déclarer revenus black par la loi. Ne pas le faire = fraude majorée pénalité 80 %+. Conseil : consulter avocat fiscal avant, déclarer via lettre recommandée \"reconnaissance erreur\" = amnistie partielle possible. Jamais ignorer situation.",
    },
    {
      question: "Je suis réfugié reconnu, mon revenu RIA est exonéré de déclaration ?",
      reponse: "Non, allocation RIA exonérée mais déclaration reste obligatoire (revenu zéro section allocation). Si vous travaillez : salaires travail totalement déclarés. Crédit allocation + salaires = imposition nette réduite souvent. Toujours déclarer proactivement.",
    },
    {
      question: "Quelle différence entre \"résidant fiscal\" et titre de séjour \"résident\" ?",
      reponse: "Concepts différents. \"Résidant fiscal\" = obligation impôt basée sur présence 183j/an, domicile, intérêts économiques. \"Résident\" titre = statut courant (carte 10 ans stabilité). Un non-résidant fiscal doit déclarer si domicile est en France, même avec titre étudiant/salarié.",
    },
    {
      question: "Si je travaille 6 mois étranger + 6 mois France, où je paie impôt ?",
      reponse: "Convention fiscale s'applique : revenu source étranger taxé par pays étranger (crédit France). Vous résidant France = déclaration France obligatoire. Vous invoquez crédit impôt étranger (différence payée France si impôt français > étranger). Conseil absolument : expert-comptable évite doublon.",
    },
    {
      question: "Quand déclarer en ligne, j'ai peur se tromper sur cases. Comment ?",
      reponse: "Utilisez le tele-conseil fiscal gratuit DGFiP (0 809 401 401). Ou assistante DGFiP dans maison des services. Vous remplissez ensemble, vérification cas par cas. Alternative : expert-comptable (100-200 €) remplit à la place, relecture complète. Aucun risque.",
    },
    {
      question: "Impôt trop élevé ? Puis-je négocier avec DGFiP ?",
      reponse: "DGFiP ne négocie pas impôt légal. Mais : 1) Vérifier si toutes déductions appliquées ? (80 % omises) 2) Analyser crédits d'impôt disponibles ? 3) Revoir situation fiscale année N+1 (décisions légales). Si faux calcul = requête correctif (délai 90 jours). Sinon : demander étalement paiement (possible si difficulté).",
    },
    {
      question: "Je gagne 14 000 € seule, passe seuil non-imposition ?",
      reponse: "Oui, seuil 2026 = 15 547 € (célibataire hors enfant). À 14 000 € = 0 € impôt. Mais déclaration obligatoire ! Elle vous ouvre droit allocations logement CAF (200-400 €/mois souvent). Non-déclaration = perte bénéfices allocs + risque redressement futur.",
    },
    {
      question: "Peur perdre titre de séjour si signale impôts à DGFiP ?",
      reponse: "Déclaration fiscale = protégée confidentialité. DGFiP ne communique PAS préfecture données impôt personnelles (sauf cas fraude pénale). Déclarer = RÉDUIT risque, non l'augmente. Seule fraude caractérisée = antécédent possible. Honnêteté fiscale = sécurité statut.",
    },
  ],
  sources: [
    {
      titre: "Service-Public.fr - Déclaration impose sur revenus 2026",
      url: "https://www.service-public.fr/particuliers/vosdroits/F1280",
      type: "officiel",
      description: "Guide officiel complet des obligations fiscales et dates limites.",
    },
    {
      titre: "DGFiP - Impots.gouv.fr portail personnel",
      url: "https://www.impots.gouv.fr/",
      type: "officiel",
      description: "Accès déclaration en ligne, documents, assistance tele-conseil.",
    },
    {
      titre: "CESEDA / Code Généal Impôts - Article L.13 (résidance fiscale)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006295566",
      type: "juridique",
      description: "Cadre légal criteria résidance fiscale résidant France.",
    },
    {
      titre: "Conventions fiscales France - Listes pays accord",
      url: "https://www.impots.gouv.fr/particulier/les-conventions-fiscales-internationales",
      type: "officiel",
      description: "Liste 99 conventions accords double taxation par pays étrangers.",
    },
  ],
  aLireAussi: [
    {
      slug: "residance-fiscale-france-etranger-imposabilite-test-2026",
      ancre: "Qui est résidant fiscal France ?",
    },
    {
      slug: "titre-sejour-declaration-impots-etranger-droits-obligations-2026",
      ancre: "Lien titre de séjour et impôts",
    },
    {
      slug: "changement-statut-etudiant-salarie-2026-demarches-anef",
      ancre: "Changement de statut et impôts",
    },
    {
      slug: "premiers-pas-france-etranger-banque-logement-caf-ameli",
      ancre: "Aides CAF et allocations familiales",
    },
  ],
};

export default article;
