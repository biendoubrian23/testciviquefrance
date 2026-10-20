import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-ressources-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/ressources-utiles-etrangers-france-2026-outils-associations-aides`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "ressources-utiles-etrangers-france-2026-outils-associations-aides",
  titre: "Ressources utiles pour les étrangers en France 2026 : 50 outils, associations et aides gratuites",
  titreSeo: "Ressources utiles pour les étrangers en France 2026 : 50 outils, associations et aides gratuites",
  resume: "La boîte à outils complète des étrangers en France 2026 : 12 sites officiels, 15 associations gratuites (Cimade, GISTI, Secours Catholique), outils numériques, permanences France Services, numéros utiles. À garder en favori.",
  chapo: "Naviguer dans le système administratif français quand on est étranger peut être complexe. Heureusement, **des dizaines d'organismes officiels, associations et outils gratuits** existent pour vous accompagner. Cette page de ressources rassemble **les 50 outils les plus utiles en 2026** pour les étrangers en France : démarches, hébergement, emploi, santé, juridique, intégration.",
  publieLe: "2026-04-28",
  modifieLe: "2026-04-28",
  minutes: 16,
  theme: "ressources etrangers france",
  motsCles: [
    "ressources etrangers france",
    "aide etrangers france",
    "associations etrangers france",
    "numeros utiles etrangers",
    "sites officiels france",
    "maisons france services",
    "aide gratuite demarches",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
  blocs: [
    {
      type: "p",
      texte: "Mettez cette page en favori : c'est votre boîte à outils complète pour vivre en France sereinement.",
    },
    { type: "h2", texte: "Les 12 sites officiels indispensables", id: "sites-officiels" },
    { type: "p", texte: "**Démarches administratives :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**service-public.fr** : Le portail unique de l'administration française",
        "**administration-etrangers-en-france.interieur.gouv.fr (ANEF)** : Titres de séjour et naturalisation",
        "**ants.gouv.fr** : Permis, carte grise, CNI, passeport",
        "**impots.gouv.fr** : Déclaration et paiement des impôts",
        "**france-visas.gouv.fr** : Demandes de visa",
        "**francenum.gouv.fr** : Aides numériques",
      ],
    },
    { type: "p", texte: "**Études et professionnel :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**pastel.diplomatie.gouv.fr/etudesenfrance** : Campus France",
        "**pole-emploi.fr** : Emploi et formations",
        "**bpifrance-creation.fr** : Création d'entreprise",
      ],
    },
    { type: "p", texte: "**Santé et social :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**ameli.fr** : Sécurité sociale",
        "**caf.fr** : Allocations familiales et logement (APL)",
        "**solidarite-numerique.fr** : Aide gratuite aux démarches en ligne",
      ],
    },
    {
      type: "p",
      texte: "**Important :** Tous ces sites sont en **.gouv.fr** ou domaines officiels. Méfiez-vous des sites pirates en .com qui imitent ces services.",
    },
    {
      type: "h2",
      texte: "15 associations qui aident les étrangers gratuitement",
      id: "associations-accueil",
    },
    { type: "p", texte: "**Aide juridique et accompagnement administratif :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**La Cimade** (lacimade.org) : Accompagnement juridique étrangers, permanences dans 70+ villes",
        "**GISTI** (gisti.org) : Conseils juridiques sur le droit des étrangers",
        "**France Terre d'Asile** (france-terre-asile.org) : Demande d'asile",
        "**Forum Réfugiés** (forumrefugies.org) : Asile et intégration",
        "**Secours Catholique** (secours-catholique.org) : Aide globale",
        "**Médecins du Monde** (medecinsdumonde.org) : Santé sans condition",
      ],
    },
    { type: "p", texte: "**Hébergement :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Samusocial** (15 ou 115) : Hébergement urgence",
        "**Emmaüs Solidarité** (emmaus-solidarite.org) : Logement transitoire",
      ],
    },
    { type: "p", texte: "**Intégration et apprentissage du français :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**OFII** (ofii.fr) : Office français de l'immigration et de l'intégration",
        "**AEFTI** (aefti.fr) : Cours de français pour adultes",
        "**Réseau Alpha** (reseau-alpha.org) : Annuaire des cours de français en Île-de-France",
        "**Bibliothèques municipales** : Cours de FLE gratuits dans la plupart des villes",
      ],
    },
    { type: "p", texte: "**Emploi et insertion :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Singa** (singafrance.com) : Réseau professionnel pour personnes réfugiées",
        "**Each One** (each-one.co) : Insertion professionnelle des réfugiés",
        "**Konexio** (konexio.eu) : Formation numérique gratuite",
      ],
    },
    { type: "h2", texte: "10 outils numériques pour vos démarches", id: "outils-numeriques" },
    { type: "p", texte: "**Identité numérique :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**FranceConnect** (franceconnect.gouv.fr) : Connexion unique aux 1 200+ services publics",
        "**Identité Numérique La Poste** (lidentitenumerique.laposte.fr) : Validation d'identité officielle gratuite",
        "**France Identité** (france-identite.gouv.fr) : Application mobile officielle CNI",
      ],
    },
    { type: "p", texte: "**Documents et traduction :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Cabines Photomaton ANTS** : Photo + signature numérique pour permis (5-7 €)",
        "**DeepL** (deepl.com) : Traduction de qualité (gratuit jusqu'à 5 000 caractères)",
        "**Google Translate** : Traduction d'images (caméra)",
        "**CamScanner / Microsoft Lens** : Scanner mobile pour PDF haute qualité",
      ],
    },
    { type: "p", texte: "**Aide aux démarches :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Aidants Connect** (aidantsconnect.beta.gouv.fr) : Trouver un aidant numérique professionnel",
        "**Mes Aides** (mesdroitssociaux.gouv.fr) : Simulateur d'aides sociales",
        "**Mon Compte Formation** (moncompteformation.gouv.fr) : Formations finançables",
      ],
    },
    { type: "h2", texte: "Trouver une permanence d'aide près de chez vous", id: "permanences-france" },
    { type: "p", texte: "**Maisons France Services (>2 700 en France) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Aide gratuite à toutes démarches administratives",
        "Présentes dans toutes les régions (rurales et urbaines)",
        "Localisez la plus proche : **france-services.gouv.fr**",
        "Horaires : 9h-12h / 14h-17h en moyenne, lundi-vendredi",
      ],
    },
    { type: "p", texte: "**Accueils Préfecture pour étrangers :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Selon votre département de résidence",
        "Liste : préfectures.gouv.fr → votre département → \"Étrangers\"",
      ],
    },
    { type: "p", texte: "**Permanences juridiques gratuites (associations) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**CIDFF** (Centre d'Information sur les Droits des Femmes et Familles) : cidff.info",
        "**Maisons de Justice et du Droit** : annuaires.justice.gouv.fr",
      ],
    },
    { type: "p", texte: "**Universités et CROUS pour étudiants :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Bureaux internationaux** dans toutes les grandes universités",
        "**CROUS** : aide logement, restauration, démarches",
      ],
    },
    { type: "h2", texte: "Documents et formulaires à télécharger", id: "documents-types" },
    { type: "p", texte: "**Formulaires CERFA officiels :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Tous disponibles sur **service-public.fr** (gratuit)",
        "À ne télécharger nulle part ailleurs (sites pirates)",
      ],
    },
    { type: "p", texte: "**Documents les plus utilisés en 2026 :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Cerfa 16030*02** : Convention d'accueil chercheur",
        "**Cerfa 13409*06** : Demande de naturalisation",
        "**Cerfa 14571*05** : Pièces à fournir titre séjour",
        "**Cerfa 12100*02** : Regroupement familial",
      ],
    },
    { type: "p", texte: "**Modèles de lettres :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**service-public.fr/particuliers/vosdroits/N363** : Modèles administratifs",
        "Lettres types contestation, recours, demande gracieuse",
      ],
    },
    {
      type: "p",
      texte: "**Astuce :** N'achetez **JAMAIS** de formulaires CERFA sur Internet. Ils sont **tous gratuits** sur service-public.fr et impots.gouv.fr.",
    },
    { type: "h2", texte: "Les numéros de téléphone à connaître", id: "numeros-utiles" },
    { type: "p", texte: "**Numéros gratuits ou faible coût :**" },
    {
      type: "tableau",
      entetes: ["Service", "Numéro", "Coût"],
      lignes: [
        ["ANTS (permis, carte grise)", "**34 00**", "Gratuit fixe"],
        ["Service Public", "**39 39**", "0.15 €/min"],
        ["Allô Service Public Étrangers", "**+33 1 49 93 27 27**", "Tarif standard"],
        ["Préfecture de Police Paris", "**+33 1 53 71 53 71**", "Standard"],
        ["OFII (immigration / intégration)", "**+33 1 41 17 70 00**", "Standard"],
        ["Caisse d'Allocations Familiales (CAF)", "**3230**", "0.06 €/min"],
        ["Sécurité Sociale (Ameli)", "**3646**", "Gratuit fixe"],
        ["Pôle Emploi", "**3949**", "0.06 €/min"],
        ["Impôts non-résidents (SIPNR)", "**+33 1 72 95 20 42**", "Standard"],
        ["115 : Urgence sociale (hébergement)", "**115**", "Gratuit"],
        ["17 : Police", "**17**", "Gratuit"],
        ["15 : SAMU médical", "**15**", "Gratuit"],
      ],
    },
    {
      type: "p",
      texte: "**Astuce :** Enregistrez les numéros essentiels (34 00, 3939, 3230, 115) dans vos contacts dès votre arrivée.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La France met à disposition **un écosystème riche et majoritairement gratuit** d'organismes pour accompagner les étrangers. La règle d'or : **toujours passer par les sites officiels (.gouv.fr)** et les **associations reconnues**, jamais par des intermédiaires payants qui facturent des services gratuits. Que vous soyez étudiant, salarié, demandeur d'asile, entrepreneur ou retraité, vous trouverez ici votre point d'entrée. Mettez cette page en favori et partagez-la, vous gagnerez du temps, de l'argent et de la sérénité.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quels services peuvent vraiment m'aider gratuitement en tant qu'étranger ?",
      reponse: "Maisons France Services (présentes partout), associations comme la Cimade ou GISTI pour le juridique, OFII pour l'intégration, et l'ensemble des sites .gouv.fr.",
    },
    {
      question: "Comment éviter les arnaques aux démarches administratives ?",
      reponse: "Trois règles : 1) URL en .gouv.fr uniquement, 2) Tarifs officiels uniquement (jamais 60-100 € pour un duplicata permis à 25 €), 3) Méfiance vis-à-vis des intermédiaires payants qui proposent des services gratuits.",
    },
    {
      question: "Existe-t-il une aide juridique gratuite pour les étrangers ?",
      reponse: "Oui : aide juridictionnelle (justice.gouv.fr), permanences associatives Cimade/GISTI, Maisons de Justice et du Droit, et avocats commis d'office en cas de procédure.",
    },
    {
      question: "Où apprendre le français gratuitement ?",
      reponse: "OFII (CIR), associations AEFTI/Réseau Alpha, bibliothèques municipales, universités (DU FLE), associations locales. Pour le diplôme, viser le DELF B1 (naturalisation) ou B2 (études).",
    },
  ],
};

export default article;
