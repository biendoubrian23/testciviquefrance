import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-requetes-fortes-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/carte-de-sejour-france-2026-guide-complet-types-demarches-renouvellement`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "carte-de-sejour-france-2026-guide-complet-types-demarches-renouvellement",
  titre: "Carte de séjour en France 2026 : tous les types, documents, ANEF, renouvellement et recours, guide ultra-complet",
  titreSeo: "Carte de séjour en France 2026 : tous les types, documents, ANEF, renouvellement et recours, guide ultra-complet",
  resume: "Les 15+ types de carte de séjour en France expliqués : temporaire, pluriannuelle, résident 10 ans, passeport talent. Documents, coûts (75-244 €), procédure ANEF en ligne, délais préfecture et recours en cas de refus.",
  chapo: "Vous vivez en France ou vous prévoyez de vous y installer ? La **carte de séjour** est le document administratif central de votre vie en France. En 2026, il existe **plus de 15 types de titres de séjour** différents, chacun avec ses conditions, sa durée et ses droits spécifiques. Entre la **carte de séjour temporaire** (1 an), la **carte de séjour pluriannuelle** (jusqu'à 4 ans), la **carte de résident** (10 ans) et les **cartes spéciales** (passeport talent, ICT, salarié en mission), il est facile de se perdre.",
  publieLe: "2026-03-29",
  modifieLe: "2026-03-29",
  minutes: 25,
  theme: "carte de séjour France",
  motsCles: [
    "carte de séjour France",
    "carte de séjour 2026",
    "titre de séjour France",
    "carte de séjour pluriannuelle",
    "carte de résident 10 ans",
    "renouvellement carte de séjour",
    "demande carte de séjour en ligne",
    "ANEF titre de séjour",
    "carte de séjour salarié",
    "carte de séjour étudiant",
    "carte de séjour vie privée familiale",
    "carte de séjour conjoint de Français",
    "documents carte de séjour",
    "prix titre de séjour 2026",
    "timbres fiscaux carte de séjour",
    "refus carte de séjour recours",
    "changement de statut titre de séjour",
    "passeport talent France",
    "carte séjour",
    "titre séjour France guide",
    "préfecture carte de séjour",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
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
      type: "p",
      texte: "Ce guide **ultra-complet** vous explique **tous les types de carte de séjour** qui existent en France, les **conditions d'obtention**, les **documents nécessaires**, la **procédure ANEF** en ligne, les **délais en préfecture**, le **renouvellement**, et le lien avec le **test civique**. Que vous soyez étudiant, salarié, conjoint de Français, réfugié ou entrepreneur, ce guide est fait pour vous.",
    },
    {
      type: "h2",
      texte: "Tous les types de carte de séjour en France (liste complète 2026)",
      id: "types-carte-sejour-france",
    },
    { type: "p", texte: "En France, les titres de séjour se divisent en **3 grandes catégories** :" },
    { type: "p", texte: "**1. Carte de séjour temporaire (CST) : Durée : 1 an maximum**" },
    {
      type: "tableau",
      entetes: ["Type", "Motif", "Durée"],
      lignes: [
        ["CST \"étudiant\"", "Études supérieures en France", "1 an (renouvelable)"],
        ["CST \"salarié\"", "Contrat de travail en France", "1 an"],
        ["CST \"travailleur temporaire\"", "Mission temporaire", "Durée de la mission"],
        ["CST \"vie privée et familiale\"", "Liens familiaux, conjoint de Français", "1 an"],
        ["CST \"visiteur\"", "Séjour sans travailler (ressources suffisantes)", "1 an"],
        [
          "CST \"recherche d'emploi / création d'entreprise\"",
          "Après études",
          "1 an (non renouvelable)",
        ],
        ["CST \"stagiaire\"", "Stage professionnel", "Durée du stage"],
      ],
    },
    { type: "p", texte: "**2. Carte de séjour pluriannuelle (CSP) : Durée : 2 à 4 ans**" },
    {
      type: "tableau",
      entetes: ["Type", "Conditions", "Durée"],
      lignes: [
        ["CSP générale", "Après 1 an de CST + CIR validé + test civique réussi", "4 ans"],
        ["CSP \"passeport talent\"", "Compétences/talents exceptionnels", "4 ans"],
        ["CSP \"salarié détaché ICT\"", "Transfert intra-groupe", "3 ans"],
        ["CSP \"travailleur saisonnier\"", "Emploi saisonnier", "3 ans"],
        ["CSP \"étudiant\"", "Après 1re année en France", "Durée des études (max 4 ans)"],
      ],
    },
    { type: "p", texte: "**3. Carte de résident (CR) : Durée : 10 ans**" },
    {
      type: "tableau",
      entetes: ["Type", "Conditions", "Durée"],
      lignes: [
        [
          "CR de plein droit",
          "Conjoint de Français (3 ans de mariage), parent d'enfant français",
          "10 ans",
        ],
        ["CR longue durée UE", "5 ans de séjour régulier + ressources stables", "10 ans"],
        ["CR permanent", "Après 1re carte de résident", "10 ans (renouvelable automatiquement)"],
        ["CR \"retraité\"", "Retraité ayant vécu en France", "10 ans"],
      ],
    },
    {
      type: "p",
      texte: "→ **Source officielle complète :** [Service-public.fr, Titres de séjour des étrangers en France](https://www.service-public.fr/particuliers/vosdroits/N110)",
    },
    {
      type: "h2",
      texte: "Documents nécessaires pour une carte de séjour en 2026",
      id: "documents-carte-sejour",
    },
    {
      type: "p",
      texte: "Les documents à fournir dépendent du type de titre, mais voici le **tronc commun** valable pour presque toutes les demandes :",
    },
    { type: "p", texte: "**Documents obligatoires (tous les titres) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "📄 **Passeport en cours de validité** (+ copie de toutes les pages)",
        "📄 **Visa long séjour** (VLS-TS ou VLS pour 1re demande)",
        "📷 **3 photos d'identité** aux normes françaises (fond blanc, récentes)",
        "📄 **Justificatif de domicile** de moins de 6 mois (facture EDF/eau, quittance de loyer, attestation d'hébergement)",
        "💰 **Timbres fiscaux** (montant variable selon le titre)",
        "📄 **Acte de naissance** (traduit par un traducteur assermenté si nécessaire)",
      ],
    },
    { type: "p", texte: "**Documents spécifiques selon le titre :**" },
    { type: "p", texte: "*Pour \"salarié\" :*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Contrat de travail visé par la DREETS",
        "Autorisation de travail",
        "3 derniers bulletins de salaire (pour un renouvellement)",
      ],
    },
    { type: "p", texte: "*Pour \"étudiant\" :*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Inscription dans un établissement d'enseignement supérieur",
        "Justificatif de ressources (minimum 615 €/mois en 2026)",
      ],
    },
    { type: "p", texte: "*Pour \"vie privée et familiale\" (conjoint de Français) :*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Acte de mariage (ou PACS) transcrit",
        "CNI du conjoint français",
        "Justificatif de vie commune",
      ],
    },
    { type: "p", texte: "*Pour \"carte de séjour pluriannuelle\" :*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Attestation de **réussite au test civique** (80% minimum)",
        "Attestation de **niveau de français A2**",
        "Attestation de suivi du **CIR**",
      ],
    },
    { type: "p", texte: "**Coût des timbres fiscaux (2026) :**" },
    {
      type: "tableau",
      entetes: ["Titre", "Taxe", "Timbre OFII", "Total"],
      lignes: [
        ["CST \"étudiant\"", "75 €", "", "**75 €**"],
        ["CST \"salarié\"", "225 €", "", "**225 €**"],
        ["CST \"vie privée/familiale\"", "225 €", "", "**225 €**"],
        ["CSP générale (4 ans)", "225 €", "", "**225 €**"],
        ["Carte de résident 10 ans", "225 €", "19 €", "**244 €**"],
      ],
    },
    {
      type: "p",
      texte: "→ **Source officielle :** [Service-public.fr, Prix du titre de séjour](https://www.service-public.fr/particuliers/vosdroits/F17281)",
    },
    {
      type: "h2",
      texte: "Procédure ANEF 2026 : demander sa carte de séjour en ligne",
      id: "procedure-anef-prefecture",
    },
    {
      type: "p",
      texte: "Depuis 2023, la plupart des premières demandes et renouvellements de titre de séjour se font en ligne via la plateforme **ANEF** (Administration Numérique pour les Étrangers en France).",
    },
    { type: "p", texte: "**Comment faire sa demande sur ANEF :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Créez un compte sur [administration-etrangers-en-france.interieur.gouv.fr](https://administration-etrangers-en-france.interieur.gouv.fr/)",
        "Sélectionnez votre type de demande (première demande, renouvellement, changement de statut)",
        "Remplissez le formulaire en ligne",
        "Téléversez vos pièces justificatives (format PDF ou JPEG)",
        "Payez les timbres fiscaux en ligne",
        "Recevez une **attestation de dépôt** (valant autorisation de séjour provisoire)",
        "Suivez l'avancement de votre dossier dans votre espace personnel",
        "Rendez-vous en préfecture pour la **remise du titre** (prise de photo et empreintes)",
      ],
    },
    { type: "p", texte: "**Délais moyens de traitement en 2026 :**" },
    {
      type: "tableau",
      entetes: ["Type de demande", "Délai moyen"],
      lignes: [
        ["Renouvellement simple", "2 à 4 mois"],
        ["Changement de statut", "3 à 6 mois"],
        ["Première demande (après visa)", "1 à 3 mois"],
        ["Carte de résident", "4 à 8 mois"],
        ["Naturalisation", "12 à 18 mois"],
      ],
    },
    { type: "p", texte: "**⚠️ Conseils importants :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Déposez votre demande de renouvellement **2 à 4 mois avant l'expiration** de votre titre actuel",
        "L'**attestation de dépôt ANEF** vous autorise à rester et travailler en France pendant le traitement",
        "Vérifiez bien que **tous vos documents sont lisibles** : un scan flou = rejet du dossier",
        "Conservez **tous les récépissés et attestations** : ils prouvent votre séjour régulier",
      ],
    },
    {
      type: "p",
      texte: "→ **Plateforme officielle :** [ANEF, Ministère de l'Intérieur](https://administration-etrangers-en-france.interieur.gouv.fr/)",
    },
    {
      type: "h2",
      texte: "Renouveler sa carte de séjour en 2026 : calendrier et erreurs à éviter",
      id: "renouvellement-carte-sejour",
    },
    {
      type: "p",
      texte: "Le **renouvellement** de votre carte de séjour est une étape critique. Un renouvellement raté peut entraîner une **situation irrégulière** ou un **refus de séjour**.",
    },
    { type: "p", texte: "**Calendrier idéal de renouvellement :**" },
    {
      type: "tableau",
      entetes: ["Moment", "Action"],
      lignes: [
        ["**4 mois avant expiration**", "Rassemblez tous les documents"],
        ["**3 mois avant expiration**", "Déposez la demande sur ANEF"],
        ["**2 mois avant expiration**", "Vérifiez que le dossier est complet (alerte ANEF)"],
        ["**1 mois avant expiration**", "Si pas de réponse : contactez la préfecture"],
        ["**Jour d'expiration**", "Votre attestation de dépôt vous protège"],
      ],
    },
    { type: "p", texte: "**Les 7 erreurs qui bloquent un renouvellement :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "❌ **Demander trop tard** : Déposer 1 semaine avant l'expiration crée un risque de rupture de séjour",
        "❌ **Documents illisibles** : Scans flous, photos de mauvaise qualité",
        "❌ **Justificatif de domicile périmé** : Plus de 6 mois = rejeté",
        "❌ **Oublier le test civique** : Pour la carte pluriannuelle, l'attestation de réussite est obligatoire",
        "❌ **Timbres fiscaux manquants** : Le dossier est bloqué tant que le paiement n'est pas effectué",
        "❌ **Changement d'adresse non déclaré** : Vous devez signaler tout changement à la préfecture",
        "❌ **Ne pas répondre aux demandes de pièces complémentaires** : Si la préfecture demande un document et que vous ne répondez pas sous 1 mois, le dossier est classé sans suite",
      ],
    },
    { type: "p", texte: "**En cas de problème :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "📞 **Numéro vert étrangers en France** : 0 806 001 620 (gratuit)",
        "📧 **Contact préfecture** : via votre espace ANEF",
        "⚖️ **Recours** : en cas de refus, vous avez 2 mois pour saisir le tribunal administratif",
      ],
    },
    {
      type: "h2",
      texte: "Carte de séjour et test civique : le lien en 2026",
      id: "carte-sejour-test-civique-lien",
    },
    {
      type: "p",
      texte: "Depuis 2025, le **test civique** est devenu une condition obligatoire pour plusieurs types de cartes de séjour. Voici le détail :",
    },
    { type: "p", texte: "**Quand le test civique est-il obligatoire ?**" },
    {
      type: "tableau",
      entetes: ["Titre de séjour", "Test civique obligatoire ?"],
      lignes: [
        ["CST 1 an (1re délivrance)", "❌ Non"],
        ["**CSP pluriannuelle 4 ans**", "✅ **OUI**"],
        ["**Renouvellement de CSP**", "✅ **OUI** (si pas encore passé)"],
        ["Carte de résident 10 ans", "✅ **OUI**"],
        ["**Naturalisation**", "✅ **OUI** (+ test de langue B1)"],
        ["CST \"étudiant\"", "❌ Non"],
        ["Passeport talent", "❌ Non"],
      ],
    },
    { type: "p", texte: "**Le parcours type d'un étranger en France :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "🛬 **Arrivée en France** avec un visa long séjour",
        "📋 **Signature du CIR** (Contrat d'Intégration Républicaine) avec l'OFII",
        "🗣️ **Cours de français** (si nécessaire) et formation civique (4 jours)",
        "📄 **Carte de séjour temporaire** (1 an)",
        "✅ **Test civique réussi** (32/40) + niveau français A2",
        "📄 **Carte de séjour pluriannuelle** (4 ans)",
        "🗣️ **Niveau français B1** atteint (pour naturalisation)",
        "📄 **Demande de naturalisation** (après 5 ans de résidence)",
        "🇫🇷 **Nationalité française**",
      ],
    },
    {
      type: "p",
      texte: "**Préparez votre test civique dès maintenant :** Chaque étape du parcours d'intégration est liée. En commençant à réviser le test civique tôt, vous gagnerez du temps sur toutes les démarches futures. Sur [Test Civique France](/signup), accédez gratuitement à 800+ questions et des examens blancs en conditions réelles.",
    },
    {
      type: "h2",
      texte: "Refus de carte de séjour : que faire ? Vos recours en 2026",
      id: "refus-carte-sejour-recours",
    },
    {
      type: "p",
      texte: "Si votre demande de carte de séjour est **refusée**, ne paniquez pas. Vous avez des **droits et des recours** :",
    },
    { type: "p", texte: "**Les motifs fréquents de refus :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "📋 Dossier **incomplet** (pièces manquantes)",
        "💰 **Ressources insuffisantes** pour le type de titre demandé",
        "❌ **Menace à l'ordre public** (condamnation pénale)",
        "🗣️ **Échec au test civique** ou **niveau de français insuffisant**",
        "📄 **Fraude documentaire** (faux documents = interdiction de séjour)",
      ],
    },
    { type: "p", texte: "**Vos recours après un refus :**" },
    { type: "p", texte: "**1. Recours gracieux (à la préfecture)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Délai : **2 mois** après la notification du refus",
        "Adressez un courrier recommandé au préfet en expliquant votre situation",
        "Joignez les pièces manquantes ou correctrices",
        "La préfecture a 2 mois pour répondre. Silence = rejet implicite",
      ],
    },
    { type: "p", texte: "**2. Recours contentieux (tribunal administratif)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Délai : **2 mois** après le refus (ou après le rejet du recours gracieux)",
        "Saisie du tribunal administratif de votre lieu de résidence",
        "L'aide d'un **avocat en droit des étrangers** est fortement recommandée",
        "L'aide juridictionnelle (AJ) peut couvrir les frais si vous avez des revenus modestes",
      ],
    },
    { type: "p", texte: "**3. Référé-liberté (urgence)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si vous êtes menacé d'expulsion (OQTF) et que vos droits fondamentaux sont en danger",
        "Le juge statue sous **48 heures**",
      ],
    },
    { type: "p", texte: "**Ressources d'aide juridique :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "⚖️ [Aide juridictionnelle : justice.fr](https://www.justice.fr/themes/aide-juridictionnelle)",
        "📞 [CIDFF : Centre d'information sur les droits des femmes et des familles](https://www.cidff.info/)",
        "📞 [La Cimade : Aide aux étrangers](https://www.lacimade.org/)",
        "📞 **Numéro vert** : 0 806 001 620 (information étrangers en France)",
      ],
    },
    {
      type: "p",
      texte: "→ **Source officielle :** [Service-public.fr, Étranger en France : recours après refus](https://www.service-public.fr/particuliers/vosdroits/F11891)",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La **carte de séjour** est bien plus qu'un simple document, c'est la clé de votre vie en France : travail, logement, soins, études, et à terme, la **nationalité française**. En 2026, avec la plateforme **ANEF**, la plupart des démarches se font en ligne, mais il est crucial de **bien préparer son dossier**, de **respecter les délais** et de **réussir le test civique** pour accéder à la carte pluriannuelle. N'attendez pas le dernier moment pour vous préparer : chaque jour de révision sur [Test Civique France](/dashboard) vous rapproche de votre objectif.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quelle est la différence entre carte de séjour temporaire et pluriannuelle ?",
      reponse: "La carte temporaire dure 1 an maximum. La carte pluriannuelle dure jusqu'à 4 ans et nécessite d'avoir réussi le test civique, atteint le niveau A2 en français et suivi le CIR. La pluriannuelle est renouvelable.",
    },
    {
      question: "Comment obtenir une carte de séjour de 10 ans en France ?",
      reponse: "La carte de résident de 10 ans est accessible après 5 ans de séjour régulier avec des ressources stables, ou automatiquement pour certains profils (conjoint de Français après 3 ans de mariage, parent d'enfant français, réfugié).",
    },
    {
      question: "Combien coûte une carte de séjour en France en 2026 ?",
      reponse: "Le coût varie selon le type : 75 € pour étudiant, 225 € pour salarié/vie privée et familiale/pluriannuelle, 244 € pour la carte de résident. Ce sont des timbres fiscaux à payer en ligne ou en bureau de tabac.",
    },
    {
      question: "Peut-on travailler avec un récépissé de demande de carte de séjour ?",
      reponse: "Oui, si le récépissé porte la mention 'autorise son titulaire à travailler'. C'est le cas pour les renouvellements de cartes de séjour 'salarié', 'vie privée et familiale', et pluriannuelles.",
    },
    {
      question: "Que se passe-t-il si ma carte de séjour expire pendant le traitement ?",
      reponse: "L'attestation de dépôt ANEF ou le récépissé de renouvellement vous autorisent à rester et travailler en France en attendant la nouvelle carte. Conservez bien ces documents sur vous.",
    },
    {
      question: "Le test civique est-il obligatoire pour la carte de séjour ?",
      reponse: "Oui, pour la carte de séjour pluriannuelle (4 ans), la carte de résident (10 ans) et la naturalisation. Il n'est pas obligatoire pour la première carte temporaire d'1 an ni pour les cartes étudiant ou passeport talent.",
    },
    {
      question: "Comment faire un changement de statut (ex: étudiant vers salarié) ?",
      reponse: "Le changement de statut se fait sur la plateforme ANEF. Il faut avoir une promesse d'embauche ou un contrat de travail, une autorisation de travail DREETS, et déposer la demande avant l'expiration de votre titre actuel.",
    },
    {
      question: "Quels sont les délais pour obtenir une carte de séjour en 2026 ?",
      reponse: "Les délais varient selon la préfecture : 1 à 3 mois pour une première demande après visa, 2 à 4 mois pour un renouvellement, 3 à 6 mois pour un changement de statut, 4 à 8 mois pour une carte de résident.",
    },
  ],
  videos: [
    { id: "hkJBU8MjWKs", titre: "Les institutions de la Ve République - Vie publique" },
    { id: "scBSHnFjuxo", titre: "Les valeurs de la République française" },
  ],
  sources: [
    {
      titre: "Service-public.fr, Titres de séjour des étrangers en France",
      url: "https://www.service-public.fr/particuliers/vosdroits/N110",
      type: "officiel",
      description: "Guide officiel complet des titres de séjour.",
    },
    {
      titre: "ANEF : Administration Numérique pour les Étrangers en France",
      url: "https://administration-etrangers-en-france.interieur.gouv.fr/",
      type: "officiel",
      description: "Plateforme officielle de demande de titre de séjour en ligne.",
    },
    {
      titre: "Service-public.fr, Prix du titre de séjour",
      url: "https://www.service-public.fr/particuliers/vosdroits/F17281",
      type: "officiel",
      description: "Tarifs des timbres fiscaux pour les titres de séjour.",
    },
    {
      titre: "Service-public.fr, Recours après refus de titre de séjour",
      url: "https://www.service-public.fr/particuliers/vosdroits/F11891",
      type: "officiel",
      description: "Vos droits en cas de refus de carte de séjour.",
    },
    {
      titre: "La Cimade : Accompagnement des étrangers",
      url: "https://www.lacimade.org/",
      type: "article",
      description: "Association d'aide et de conseil juridique pour les étrangers en France.",
    },
    {
      titre: "OFII : Office Français de l'Immigration et de l'Intégration",
      url: "https://www.ofii.fr/",
      type: "officiel",
      description: "Organisme en charge du CIR et de l'intégration des étrangers.",
    },
  ],
};

export default article;
