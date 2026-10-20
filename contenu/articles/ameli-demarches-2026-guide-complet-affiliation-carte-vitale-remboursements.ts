import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-ameli-demarches-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/ameli-demarches-2026-guide-complet-affiliation-carte-vitale-remboursements`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "ameli-demarches-2026-guide-complet-affiliation-carte-vitale-remboursements",
  titre: "Démarches Ameli 2026 : le guide complet pour les étrangers",
  titreSeo: "Démarches Ameli 2026 : le guide complet pour les étrangers",
  resume: "Affiliation à l'Assurance Maladie, formulaire S1106, numéro provisoire puis définitif, compte ameli, carte Vitale, remboursements, CSS et AME : toutes les démarches, les pièces exactes, les délais réels et les blocages fréquents. Avec le raccourci qui vous évite d'avancer les frais avant de recevoir votre carte.",
  chapo: "Vous venez d'arriver en France, ou vous vivez ici depuis des mois sans avoir encore de carte Vitale. Vous avancez les frais chez le médecin, vous ne savez pas si vous avez des droits ouverts, et le site ameli.fr vous demande un numéro de sécurité sociale que vous n'avez pas.",
  publieLe: "2026-08-27",
  modifieLe: "2026-08-27",
  minutes: 16,
  theme: "démarches ameli étranger",
  motsCles: [
    "démarches ameli étranger",
    "créer compte ameli 2026",
    "numéro sécurité sociale étranger",
    "formulaire S1106",
    "carte vitale étranger France",
    "attestation de droits ameli",
    "affiliation sécurité sociale étranger",
    "PUMa protection universelle maladie",
    "AME 2026 conditions",
    "complémentaire santé solidaire CSS",
    "numéro provisoire NIA sécurité sociale",
    "remboursement ameli délai",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
  },
  blocs: [
    {
      type: "p",
      texte: "C'est l'un des parcours administratifs les plus déroutants pour les étrangers en France, pas parce qu'il est difficile, mais parce qu'il est **long et séquentiel** : chaque étape conditionne la suivante, et une pièce manquante au départ vous coûte des mois.",
    },
    {
      type: "p",
      texte: "La bonne nouvelle, c'est qu'il existe un raccourci que presque personne n'utilise : **dès l'ouverture de vos droits, avant même de recevoir votre carte Vitale, vous pouvez télécharger une attestation de droits qui vous dispense d'avancer les frais.** Beaucoup de gens paient plein tarif pendant des mois alors que leurs droits sont déjà ouverts.",
    },
    {
      type: "p",
      texte: "Ce guide couvre la totalité du parcours : qui a droit à quoi, le formulaire à remplir, les pièces exactes, les délais réels, la création du compte ameli, la carte Vitale physique et son application, les remboursements, la mutuelle gratuite, l'AME, et ce qu'il faut faire quand ça bloque.",
    },
    {
      type: "encadre",
      texte: "⏱️ **Les délais réels, pour poser le cadre :** 2 à 3 mois entre le dépôt d'un dossier complet et l'ouverture effective des droits, puis 2 à 8 semaines pour recevoir votre première carte Vitale. Commencez dès votre arrivée, pas quand vous tombez malade.",
      ton: "bleu",
    },
    { type: "h2", texte: "① Qui a droit à l'Assurance Maladie en France", id: "qui-a-droit" },
    {
      type: "p",
      texte: "Avant toute démarche, situez-vous. Le système français distingue plusieurs régimes selon votre situation.",
    },
    { type: "p", texte: "**La PUMa : Protection universelle maladie** 🏥" },
    {
      type: "p",
      texte: "C'est le régime de droit commun. Vous y avez droit si vous résidez en France de manière **stable et régulière** :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Stable** : vous résidez en France depuis **plus de 3 mois** de façon ininterrompue (certaines situations ouvrent les droits immédiatement, voir ci-dessous) ;",
        "**Régulière** : vous détenez un titre de séjour en cours de validité, un récépissé, ou tout document attestant de la régularité de votre séjour.",
      ],
    },
    { type: "p", texte: "**Les cas d'ouverture immédiate, sans attendre 3 mois** ⚡" },
    { type: "p", texte: "La condition de 3 mois ne s'applique pas si vous êtes :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "💼 **Salarié ou travailleur indépendant** en France, votre affiliation découle de votre activité, dès l'embauche ;",
        "🎓 **Étudiant** inscrit dans un établissement d'enseignement supérieur ;",
        "👶 **Mineur** ;",
        "🛡️ **Demandeur d'asile**, réfugié ou bénéficiaire de la protection subsidiaire ;",
        "👨‍👩‍👧 **Ayant droit** d'une personne déjà affiliée (dans certains cas familiaux).",
      ],
    },
    {
      type: "p",
      texte: "**Si vous êtes en situation irrégulière** → ce n'est pas la Sécurité sociale mais l'**AME** (Aide médicale de l'État) qui s'applique. Voir la section dédiée plus bas.",
    },
    {
      type: "p",
      texte: "**Si vous venez d'un pays de l'UE/EEE/Suisse** → votre **carte européenne d'assurance maladie (CEAM)** vous couvre pour les soins temporaires. Pour une installation durable, vous basculez sur le régime français.",
    },
    {
      type: "encadre",
      texte: "💡 **Le point qui débloque beaucoup de situations :** si vous travaillez, même à temps partiel, même depuis peu, vous n'avez **pas** à attendre 3 mois. Votre employeur déclare votre embauche, ce qui déclenche votre affiliation. Beaucoup de nouveaux arrivants attendent inutilement.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "② Obtenir votre numéro de sécurité sociale : le formulaire S1106",
      id: "numero-securite-sociale",
    },
    {
      type: "p",
      texte: "C'est la clé de tout le reste. Sans numéro de sécurité sociale, pas de compte ameli, pas de carte Vitale, pas de remboursement.",
    },
    {
      type: "p",
      texte: "**Le formulaire de référence : le Cerfa S1106**, intitulé « Demande d'ouverture des droits à l'assurance maladie ». Il se télécharge sur [ameli.fr](https://www.ameli.fr/assure/adresses-et-contacts/l-obtention-d-un-document/telecharger-un-formulaire) ou se retire à l'accueil de votre CPAM.",
    },
    { type: "p", texte: "**Les pièces à joindre : la liste qui fait la différence :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "📄 Le formulaire **S1106** complété et signé",
        "🪪 Une **pièce d'identité** (passeport)",
        "🛂 Votre **titre de séjour** en cours de validité, votre récépissé, ou votre VLS-TS validé",
        "🏠 Un **justificatif de domicile** de moins de 6 mois (quittance de loyer, facture d'énergie, attestation d'hébergement accompagnée de la pièce d'identité de l'hébergeant)",
        "👶 Votre **acte de naissance**, en original avec **traduction assermentée** si nécessaire",
        "🏦 Un **RIB** à votre nom",
        "💼 Le cas échéant : contrat de travail, bulletins de salaire, certificat de scolarité",
      ],
    },
    {
      type: "p",
      texte: "**⚠️ L'acte de naissance est le point de blocage n° 1.** Il doit être traduit par un **traducteur assermenté** auprès d'une cour d'appel française, une traduction ordinaire est refusée. Comptez plusieurs semaines et 30 à 60 € par document. **Lancez cette démarche en premier**, avant même de constituer le reste du dossier.",
    },
    {
      type: "p",
      texte: "**Où déposer :** à la CPAM de votre lieu de résidence, par courrier ou au guichet. Gardez une **copie complète** de tout ce que vous envoyez, et privilégiez le recommandé avec accusé de réception.",
    },
    {
      type: "encadre",
      texte: "📌 Si vous êtes salarié, votre employeur effectue la déclaration préalable à l'embauche, qui peut déclencher l'attribution d'un numéro. Vérifiez auprès de votre service RH avant de déposer un dossier en doublon.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "③ Numéro provisoire (NIA) puis définitif : les deux temps à comprendre",
      id: "numero-provisoire-definitif",
    },
    {
      type: "p",
      texte: "C'est la subtilité qui déroute le plus, et personne ne l'explique clairement.",
    },
    { type: "p", texte: "**Temps 1 : Le numéro provisoire (NIA)** 🕐" },
    {
      type: "p",
      texte: "Dès l'enregistrement de votre dossier, la CPAM vous attribue un **numéro d'identification d'attente (NIA)**. Il commence généralement par 7 ou 8. Il est valable jusqu'à environ **neuf mois**.",
    },
    { type: "p", texte: "Avec ce numéro provisoire :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "✅ **Vos droits peuvent être ouverts** et vos soins remboursés",
        "✅ Vous pouvez obtenir une **attestation de droits**",
        "❌ Vous ne pouvez pas encore commander de **carte Vitale**",
        "❌ La création du **compte ameli** peut être refusée",
      ],
    },
    { type: "p", texte: "**Temps 2 : Le numéro définitif** ✅" },
    {
      type: "p",
      texte: "Votre état civil est transmis à l'**INSEE**, qui vérifie et attribue votre numéro définitif (le NIR à 15 chiffres, commençant par 1 pour les hommes et 2 pour les femmes). C'est ce numéro qui ouvre l'accès au compte ameli et à la carte Vitale.",
    },
    { type: "p", texte: "**Les délais réels, sans enjolivement :**" },
    {
      type: "tableau",
      entetes: ["Étape", "Délai constaté"],
      lignes: [
        ["Dépôt du dossier → numéro provisoire (NIA)", "Quelques semaines"],
        ["Dossier complet → ouverture effective des droits", "**2 à 3 mois**"],
        ["Numéro provisoire → numéro définitif (INSEE)", "**2 mois minimum**, souvent bien plus"],
        ["Commande → réception de la carte Vitale", "**2 à 8 semaines**"],
      ],
    },
    {
      type: "p",
      texte: "Pour les personnes nées à l'étranger, la vérification INSEE est plus longue : les délais dépassant six mois ne sont pas rares, surtout si l'acte de naissance présente la moindre discordance (orthographe du nom, date, lieu).",
    },
    {
      type: "encadre",
      texte: "🎯 **Ce qu'il faut retenir absolument :** n'attendez pas votre numéro définitif pour vous faire soigner. **Dès que vos droits sont ouverts, même sous numéro provisoire, demandez une attestation de droits à votre CPAM.** Ce document suffit chez le médecin et en pharmacie pour bénéficier du tiers payant. C'est l'erreur la plus coûteuse du parcours : des gens avancent des centaines d'euros pendant des mois alors qu'ils avaient déjà des droits.",
      ton: "bleu",
    },
    { type: "h2", texte: "④ Créer et utiliser votre compte ameli", id: "compte-ameli" },
    {
      type: "p",
      texte: "Une fois votre numéro définitif obtenu, ouvrez votre compte : c'est là que tout se pilote.",
    },
    { type: "p", texte: "**La création, étape par étape :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Rendez-vous sur [ameli.fr](https://www.ameli.fr) et cliquez sur « Créer un compte »",
        "Renseignez votre **numéro de sécurité sociale** (15 chiffres) et votre **date de naissance**",
        "Saisissez votre **code postal**",
        "Vous recevez un **code provisoire** par courriel ou SMS",
        "Définissez votre mot de passe définitif",
      ],
    },
    {
      type: "p",
      texte: "Vous pouvez aussi vous connecter via **FranceConnect** si vous disposez déjà d'un compte impots.gouv.fr, ANTS ou l'Assurance retraite.",
    },
    { type: "p", texte: "**Ce que vous y faites concrètement :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "📄 Télécharger votre **attestation de droits** (rubrique « Mes démarches » ou « Mes documents »)",
        "💶 Suivre vos **remboursements** en temps réel",
        "💳 **Commander ou suivre** votre carte Vitale (« Mes démarches → Vos cartes »)",
        "👨‍⚕️ Déclarer votre **médecin traitant**",
        "🏦 Mettre à jour votre **RIB** et votre adresse",
        "✉️ Contacter votre CPAM par **messagerie sécurisée** : c'est le canal le plus efficace, bien plus que le 36 46",
      ],
    },
    { type: "p", texte: "**Si la création échoue** ⚠️" },
    {
      type: "p",
      texte: "Le motif le plus fréquent est que vous utilisez encore un **numéro provisoire**, ou que vos données (nom, date de naissance) ne correspondent pas exactement à celles enregistrées par la CPAM. Une différence d'accent ou un nom composé mal saisi suffit. Dans ce cas, contactez directement votre CPAM pour faire corriger votre état civil.",
    },
    { type: "p", texte: "**Ne confondez pas avec « Mon espace santé »** 🗂️" },
    {
      type: "p",
      texte: "Ce sont deux services distincts : **ameli** gère vos droits et vos remboursements ; **Mon espace santé** est votre carnet de santé numérique (documents médicaux, résultats d'analyses, messagerie avec les soignants). Les deux sont utiles, et l'un n'ouvre pas l'autre.",
    },
    {
      type: "p",
      texte: "Pour déclarer votre médecin traitant et comprendre le parcours de soins, voir notre guide [Médecin traitant et Sécurité sociale pour les étrangers](/articles/medecin-traitant-secu-sociale-etranger-france-2026-ameli-carte-vitale).",
    },
    { type: "h2", texte: "⑤ La carte Vitale : physique, application, mise à jour", id: "carte-vitale" },
    {
      type: "p",
      texte: "La carte Vitale n'ouvre pas vos droits : elle les **atteste** et automatise vos remboursements.",
    },
    { type: "p", texte: "**Obtenir votre première carte** 💳" },
    {
      type: "p",
      texte: "Elle se commande depuis votre compte ameli, ou vous est envoyée automatiquement après validation de votre dossier. Il faut fournir une **photo d'identité** et une pièce d'identité. Comptez **2 à 8 semaines** de délai, suivi possible dans « Mes démarches → Vos cartes ».",
    },
    { type: "p", texte: "**L'application carte Vitale (apCV)** 📱" },
    {
      type: "p",
      texte: "Depuis mars 2025, l'application carte Vitale est disponible dans toute la France pour les assurés majeurs, via **France Identité**. En 2026, elle intègre aussi les informations de votre **mutuelle**, ce qui permet la télétransmission directe de la part complémentaire chez les professionnels équipés.",
    },
    {
      type: "p",
      texte: "Elle nécessite un titre d'identité compatible avec France Identité, ce qui la rend, en pratique, difficilement accessible à une partie des ressortissants étrangers. La carte physique reste donc la voie principale.",
    },
    { type: "p", texte: "**Mettre à jour votre carte** 🔄" },
    {
      type: "p",
      texte: "À faire **au moins une fois par an**, et surtout après tout changement de situation (déménagement, naissance, changement de régime, nouvelle mutuelle). Deux moyens :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Dans une **pharmacie**, en insérant la carte dans la borne verte (possible depuis novembre 2025) ;",
        "Dans une **borne en CPAM**.",
      ],
    },
    {
      type: "p",
      texte: "Une carte non mise à jour entraîne des refus de tiers payant et des remboursements incorrects.",
    },
    { type: "p", texte: "**Carte perdue ou volée** 🚨" },
    {
      type: "p",
      texte: "Déclarez-la immédiatement depuis votre compte ameli ou au 36 46, puis commandez-en une nouvelle. En attendant, votre **attestation de droits** prend le relais.",
    },
    {
      type: "encadre",
      texte: "💡 **Le réflexe qui vous évite d'avancer les frais :** téléchargez votre attestation de droits **maintenant**, imprimez-la et gardez-en une copie sur votre téléphone. Elle fait foi auprès de tous les professionnels de santé et vaut carte Vitale pour le tiers payant, y compris pendant les semaines d'attente de la carte physique.",
      ton: "bleu",
    },
    { type: "h2", texte: "⑥ Comprendre vos remboursements", id: "remboursements" },
    { type: "p", texte: "Une fois vos droits ouverts, voici la mécanique." },
    { type: "p", texte: "**Le principe du parcours de soins** 🩺" },
    {
      type: "p",
      texte: "Déclarez un **médecin traitant** : c'est ce qui conditionne le taux de remboursement normal. Sans médecin traitant déclaré, ou en consultant directement un spécialiste sans passer par lui, votre remboursement est fortement minoré. La déclaration est gratuite et se fait en ligne depuis votre compte ameli, ou sur formulaire signé par le médecin.",
    },
    { type: "p", texte: "**Les deux étages du remboursement :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "🏥 **L'Assurance Maladie** rembourse une part du tarif de convention",
        "🛡️ **Votre mutuelle** (complémentaire santé) prend tout ou partie du reste",
      ],
    },
    {
      type: "p",
      texte: "Reste à votre charge la **participation forfaitaire** et les éventuels **dépassements d'honoraires**, qui ne sont pas remboursés par la Sécurité sociale.",
    },
    { type: "p", texte: "**Avec ou sans carte Vitale : la vraie différence** ⏳" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Avec carte Vitale** (ou tiers payant via attestation) : télétransmission automatique, remboursement en **3 à 5 jours ouvrés**",
        "**Avec feuille de soins papier** : vous avancez les frais, vous envoyez la feuille à votre CPAM, et le remboursement peut prendre **jusqu'à 30 jours**",
      ],
    },
    { type: "p", texte: "**Vérifier vos remboursements** 💶" },
    {
      type: "p",
      texte: "Tout est visible dans votre compte ameli, rubrique « Mes paiements », en général sous 48 h après la transmission. Vérifiez que votre **RIB est à jour** : un RIB erroné est la cause la plus fréquente de remboursements qui « n'arrivent pas ».",
    },
    {
      type: "p",
      texte: "**En cas d'erreur ou d'absence de remboursement :** passez par la **messagerie sécurisée** de votre compte ameli, en joignant les justificatifs. C'est plus rapide et surtout cela laisse une trace écrite datée, contrairement à un appel téléphonique.",
    },
    {
      type: "h2",
      texte: "⑦ La Complémentaire santé solidaire : une mutuelle gratuite ou à 1 €/jour",
      id: "css-mutuelle",
    },
    {
      type: "p",
      texte: "Beaucoup d'étrangers en France paient une mutuelle privée alors qu'ils ont droit à la **Complémentaire santé solidaire (CSS)**.",
    },
    {
      type: "p",
      texte: "**Ce que c'est :** une complémentaire santé prise en charge par l'État, **gratuite** ou à participation réduite (de l'ordre de **1 € par jour et par personne** selon l'âge et les revenus). Elle couvre le ticket modérateur, le forfait hospitalier, et des soins souvent mal remboursés, lunettes, prothèses dentaires, audioprothèses.",
    },
    {
      type: "p",
      texte: "**Qui peut l'obtenir :** toute personne affiliée à l'Assurance Maladie, résidant en France de manière stable et régulière, dont les **ressources sont inférieures à un plafond** revalorisé chaque année au 1er avril.",
    },
    {
      type: "p",
      texte: "**Comment demander :** en ligne depuis votre compte ameli, ou par formulaire papier auprès de votre CPAM, avec vos justificatifs de ressources des 12 derniers mois.",
    },
    { type: "p", texte: "**Un droit largement sous-utilisé** 📉" },
    {
      type: "p",
      texte: "Le non-recours à la CSS est massif, particulièrement chez les personnes étrangères, souvent par méconnaissance ou par crainte, infondée, d'un effet sur le titre de séjour. **La CSS est un droit social, elle ne conditionne pas votre séjour.**",
    },
    {
      type: "p",
      texte: "Notre guide compare les options en détail : [Mutuelle santé pour étrangers : CSS, comparer et choisir](/articles/mutuelle-sante-etranger-france-2026-css-comparer-choisir-obligation).",
    },
    {
      type: "encadre",
      texte: "💰 **Faites la simulation avant de souscrire une mutuelle privée.** Si vous êtes étudiant, en début de carrière, à temps partiel ou sans emploi, il y a de bonnes chances que vous soyez éligible. L'écart peut représenter plusieurs centaines d'euros par an.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "⑧ L'AME pour les personnes en situation irrégulière, ce qui a changé en 2026",
      id: "ame",
    },
    {
      type: "p",
      texte: "Si vous êtes en situation irrégulière, vous ne relevez pas de la Sécurité sociale mais de l'**Aide médicale de l'État (AME)**.",
    },
    { type: "p", texte: "**Les conditions :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "🗓️ Résider en France de manière **ininterrompue depuis plus de 3 mois** ;",
        "💶 Disposer de **ressources inférieures au plafond** de la Complémentaire santé solidaire (de l'ordre de **10 421 € par an** pour une personne seule, plafonds revalorisés au 1er avril 2026) ;",
        "👶 **Les mineurs y ont droit sans condition de durée de résidence.**",
      ],
    },
    {
      type: "p",
      texte: "**⚠️ Ce qui a changé en 2026.** Deux décrets publiés le **6 février 2026** ont modifié les conditions d'accès : **présentation obligatoire d'un titre d'identité avec photographie depuis le 1er mars 2026**, exigences renforcées sur les justificatifs de résidence, et encadrement de la prise en charge rétroactive. Si votre demande a été déposée avant ces dates, ou si elle a été refusée récemment, faites vérifier votre situation : les règles ne sont plus les mêmes.",
    },
    {
      type: "p",
      texte: "**Comment demander :** dossier à déposer à la CPAM, ou via une structure accompagnante, permanence d'accès aux soins de santé (PASS) d'un hôpital, association, centre communal d'action sociale. **Ces structures connaissent les évolutions récentes et sécurisent le dossier** : passez par elles plutôt que de déposer seul.",
    },
    { type: "p", texte: "**Ce que l'AME couvre : et ne couvre pas :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "✅ Prise en charge des soins médicaux et hospitaliers, dans les conditions prévues par les textes",
        "❌ **Elle ne donne droit ni à la carte Vitale ni à la carte européenne d'assurance maladie.** Vous recevez une attestation AME nominative, à présenter aux professionnels de santé.",
      ],
    },
    {
      type: "encadre",
      texte: "🏥 **En cas d'urgence, quelle que soit votre situation :** les services d'urgence hospitaliers prennent en charge les urgences vitales sans condition. Les **PASS**, présentes dans de nombreux hôpitaux, assurent l'accès aux soins des personnes sans couverture et vous aident à ouvrir vos droits. N'attendez pas d'avoir un dossier complet pour vous faire soigner.",
      ton: "bleu",
    },
    { type: "h2", texte: "⑨ Quand ça bloque : les situations les plus fréquentes", id: "blocages" },
    { type: "p", texte: "Neuf blocages sur dix relèvent de ces cinq cas." },
    { type: "p", texte: "**« Ma demande est sans nouvelles depuis des mois »** 📭" },
    {
      type: "p",
      texte: "Écrivez via la **messagerie sécurisée** de votre compte ameli, ou par courrier recommandé à votre CPAM, en rappelant la date de dépôt et en joignant vos justificatifs d'envoi. Demandez explicitement un **accusé de réception et un état d'avancement**. Une demande écrite datée oblige à une réponse et sert de preuve ensuite.",
    },
    { type: "p", texte: "**« Mon acte de naissance est refusé »** 📄" },
    {
      type: "p",
      texte: "Presque toujours pour l'une de ces raisons : traduction non assermentée, document trop ancien, ou discordance d'état civil (orthographe du nom, date, lieu) avec votre titre de séjour. Faites établir une traduction par un **traducteur assermenté auprès d'une cour d'appel** et vérifiez que votre nom est écrit **exactement** comme sur votre titre de séjour.",
    },
    { type: "p", texte: "**« Je ne peux pas créer mon compte ameli »** 🔐" },
    {
      type: "p",
      texte: "Vous êtes probablement encore sous **numéro provisoire**, ou vos données d'état civil ne correspondent pas à celles enregistrées. Contactez la CPAM pour faire corriger, et n'ouvrez surtout pas un second dossier, cela crée des doublons qui rallongent tout.",
    },
    { type: "p", texte: "**« Mon employeur ne m'a pas déclaré »** 💼" },
    {
      type: "p",
      texte: "Votre affiliation dépend de la déclaration préalable à l'embauche. Réclamez à votre employeur une copie de la DPAE et vos bulletins de salaire. En cas de refus, vous pouvez saisir l'URSSAF ou l'inspection du travail, travailler sans être déclaré vous prive de droits sociaux et vous expose.",
    },
    { type: "p", texte: "**« On me refuse des soins »** ⚖️" },
    {
      type: "p",
      texte: "Le refus de soins fondé sur le fait d'être bénéficiaire de la CSS ou de l'AME est **illégal**. Vous pouvez le signaler à votre CPAM, à l'ordre professionnel concerné, ou saisir le **[Défenseur des droits](https://www.defenseurdesdroits.fr/)** : dont la saisine est gratuite.",
    },
    {
      type: "encadre",
      texte: "🚩 **Ne payez jamais un intermédiaire** qui promet d'accélérer l'obtention d'un numéro de sécurité sociale ou d'une carte Vitale. Ces démarches sont **gratuites** et aucun tiers n'a le pouvoir de les accélérer. Voir [Arnaques visant les étrangers en France](/articles/arnaques-etrangers-france-2026-faux-avocats-prefecture-anef).",
      ton: "bleu",
    },
    { type: "h2", texte: "La check-list, dans l'ordre", id: "checklist" },
    { type: "p", texte: "À suivre séquentiellement : chaque étape conditionne la suivante." },
    { type: "p", texte: "**Dès votre arrivée** 🔴" },
    {
      type: "liste",
      style: "puces",
      items: [
        "[ ] Faire traduire votre **acte de naissance** par un traducteur assermenté (**commencez par là** : c'est le plus long)",
        "[ ] Réunir : passeport, titre de séjour ou récépissé, justificatif de domicile de moins de 6 mois, RIB",
        "[ ] Si vous travaillez : demander à votre employeur la copie de la **DPAE**",
      ],
    },
    { type: "p", texte: "**Le dossier** 🟠" },
    {
      type: "liste",
      style: "puces",
      items: [
        "[ ] Télécharger et remplir le **formulaire S1106**",
        "[ ] Déposer à la CPAM en **recommandé avec accusé de réception**, en gardant une copie complète",
        "[ ] Noter la **date de dépôt** : elle vous servira pour toute relance",
      ],
    },
    { type: "p", texte: "**Dès l'ouverture des droits** 🟢" },
    {
      type: "liste",
      style: "puces",
      items: [
        "[ ] Demander votre **attestation de droits**, même sous numéro provisoire → **vous n'avancez plus les frais**",
        "[ ] Créer votre **compte ameli** dès l'obtention du numéro définitif",
        "[ ] **Commander la carte Vitale** et suivre la commande",
        "[ ] **Déclarer un médecin traitant** : sans lui, vos remboursements sont minorés",
        "[ ] Vérifier que votre **RIB** est bien enregistré",
        "[ ] Tester votre éligibilité à la **CSS** avant de souscrire une mutuelle privée",
      ],
    },
    { type: "p", texte: "**En routine** 🔵" },
    {
      type: "liste",
      style: "puces",
      items: [
        "[ ] Mettre à jour la carte Vitale **une fois par an** et après chaque changement de situation",
        "[ ] Signaler tout changement d'adresse, de situation familiale ou professionnelle",
      ],
    },
    { type: "p", texte: "**Pendant toute l'attente** ⏳" },
    {
      type: "liste",
      style: "puces",
      items: [
        "[ ] Conserver **toutes vos factures de soins** : vous pourrez demander le remboursement rétroactif une fois vos droits ouverts",
      ],
    },
    { type: "h2", texte: "À retenir" },
    {
      type: "p",
      texte: "Le parcours Ameli est long, mais il est linéaire : **acte de naissance traduit → formulaire S1106 → numéro provisoire → droits ouverts → numéro définitif → compte ameli → carte Vitale**. Chaque étape dépend de la précédente, ce qui explique pourquoi une pièce manquante au départ coûte des mois.",
    },
    { type: "p", texte: "Trois choses à retenir si vous ne devez en garder que trois :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "📄 **Commencez par la traduction assermentée de votre acte de naissance.** C'est le poste le plus long et le motif de refus n° 1.",
        "🎫 **N'attendez pas la carte Vitale pour vous faire soigner.** Dès vos droits ouverts, même sous numéro provisoire, l'**attestation de droits** vous dispense d'avancer les frais. C'est l'erreur la plus coûteuse du parcours.",
        "💰 **Testez la CSS avant de souscrire une mutuelle privée.** Le non-recours est massif, et l'écart se chiffre en centaines d'euros par an.",
      ],
    },
    {
      type: "p",
      texte: "Et gardez ce réflexe pour toute la suite : privilégiez la **messagerie sécurisée** de votre compte ameli aux appels téléphoniques. Une trace écrite datée vaut infiniment mieux qu'une conversation dont il ne reste rien.",
    },
    {
      type: "p",
      texte: "👉 **Vos autres démarches d'installation :** consultez notre guide [Premiers pas en France : banque, logement, CAF, Ameli](/articles/premiers-pas-france-etranger-banque-logement-caf-ameli) et le [calendrier des démarches de la rentrée](/articles/rentree-septembre-2026-etrangers-france-calendrier-demarches-delais).",
    },
  ],
  faq: [
    {
      question: "Combien de temps faut-il pour obtenir un numéro de sécurité sociale quand on est étranger ?",
      reponse: "Comptez 2 à 3 mois entre le dépôt d'un dossier complet et l'ouverture effective des droits. Un numéro provisoire (NIA) vous est attribué en quelques semaines, mais le numéro définitif suppose une vérification de votre état civil par l'INSEE, qui prend au minimum 2 mois et dépasse fréquemment 6 mois pour les personnes nées à l'étranger.",
    },
    {
      question: "Puis-je me faire soigner avant de recevoir ma carte Vitale ?",
      reponse: "Oui, et c'est le point le plus important de ce guide. Dès que vos droits sont ouverts, même sous numéro provisoire, demandez une attestation de droits à votre CPAM ou téléchargez-la depuis votre compte ameli. Ce document fait foi auprès de tous les professionnels de santé et vous permet de bénéficier du tiers payant sans avancer les frais.",
    },
    {
      question: "Quels documents faut-il pour s'affilier à l'Assurance Maladie ?",
      reponse: "Le formulaire Cerfa S1106, une pièce d'identité, votre titre de séjour ou récépissé en cours de validité, un justificatif de domicile de moins de 6 mois, votre acte de naissance avec traduction assermentée si nécessaire, et un RIB à votre nom. Si vous travaillez ou étudiez, ajoutez votre contrat de travail, vos bulletins de salaire ou votre certificat de scolarité.",
    },
    {
      question: "Pourquoi mon acte de naissance est-il refusé ?",
      reponse: "Trois causes principales : une traduction non assermentée (elle doit être réalisée par un traducteur agréé auprès d'une cour d'appel française), un document trop ancien, ou une discordance d'état civil avec votre titre de séjour, une différence d'orthographe du nom, de date ou de lieu de naissance suffit à bloquer le dossier. Vérifiez que votre nom est écrit exactement comme sur votre titre.",
    },
    {
      question: "Faut-il attendre 3 mois de résidence pour avoir la Sécurité sociale ?",
      reponse: "Pas toujours. La condition de résidence de plus de 3 mois ne s'applique pas si vous êtes salarié ou travailleur indépendant en France, étudiant inscrit dans l'enseignement supérieur, mineur, demandeur d'asile, réfugié ou bénéficiaire de la protection subsidiaire. Si vous travaillez, même à temps partiel, votre affiliation découle de votre activité dès l'embauche.",
    },
    {
      question: "Je n'arrive pas à créer mon compte ameli, pourquoi ?",
      reponse: "Le plus souvent parce que vous utilisez encore un numéro provisoire (NIA), qui ne permet pas la création du compte, ou parce que vos données d'état civil ne correspondent pas exactement à celles enregistrées par la CPAM. Contactez votre CPAM pour faire corriger votre état civil, et n'ouvrez surtout pas un second dossier : cela crée des doublons qui rallongent tout le traitement.",
    },
    {
      question: "L'AME donne-t-elle droit à une carte Vitale ?",
      reponse: "Non. L'Aide médicale de l'État ne donne droit ni à la carte Vitale ni à la carte européenne d'assurance maladie. Vous recevez une attestation AME nominative à présenter aux professionnels de santé. À noter : deux décrets du 6 février 2026 ont durci les conditions d'accès, avec présentation obligatoire d'un titre d'identité avec photographie depuis le 1er mars 2026.",
    },
    {
      question: "Demander la CSS ou l'AME peut-il nuire à ma demande de titre de séjour ?",
      reponse: "La Complémentaire santé solidaire est un droit social ouvert aux personnes affiliées résidant régulièrement en France ; elle ne conditionne pas votre droit au séjour. Le non-recours par crainte est très répandu et prive des milliers de personnes d'une couverture à laquelle elles ont droit. Si votre situation est complexe, faites-vous accompagner par une association spécialisée avant de renoncer.",
    },
  ],
  sources: [
    {
      titre: "Ameli.fr, Vous êtes né à l'étranger et vous demandez votre numéro de sécurité sociale",
      url: "https://www.ameli.fr/assure/droits-demarches/europe-international/protection-sociale-france/ne-etranger-demander-numero-securite-sociale",
      type: "officiel",
      description: "Page officielle de l'Assurance Maladie détaillant la procédure d'attribution du numéro de sécurité sociale pour les personnes nées à l'étranger.",
    },
    {
      titre: "Ameli.fr, Le numéro de sécurité sociale",
      url: "https://www.ameli.fr/assure/droits-demarches/principes/numero-securite-sociale",
      type: "officiel",
      description: "Composition du numéro, différence entre numéro provisoire (NIA) et numéro définitif attribué après vérification INSEE.",
    },
    {
      titre: "Ameli.fr, Télécharger un formulaire",
      url: "https://www.ameli.fr/assure/adresses-et-contacts/l-obtention-d-un-document/telecharger-un-formulaire",
      type: "officiel",
      description: "Accès au Cerfa S1106 « Demande d'ouverture des droits à l'assurance maladie » et aux autres formulaires officiels.",
    },
    {
      titre: "Ameli.fr, Carte Vitale et application : présentation et utilisation",
      url: "https://www.ameli.fr/assure/remboursements/etre-bien-rembourse/carte-vitale/carte-vitale",
      type: "officiel",
      description: "Commande, mise à jour et usage de la carte Vitale, et fonctionnement de l'application carte Vitale (apCV).",
    },
    {
      titre: "Ameli.fr, Aide médicale de l'État (AME) : vos démarches",
      url: "https://www.ameli.fr/assure/droits-demarches/situations-particulieres/situation-irreguliere-ame",
      type: "officiel",
      description: "Conditions d'accès à l'AME, pièces à fournir et modalités de dépôt du dossier auprès de la CPAM.",
    },
    {
      titre: "Justice.fr, Qu'est-ce que l'aide médicale de l'État (AME) ?",
      url: "https://www.justice.fr/fiche/aide-medicale-etat-ame",
      type: "officiel",
      description: "Fiche officielle sur les conditions de résidence et de ressources ouvrant droit à l'AME, et les droits qu'elle confère.",
    },
    {
      titre: "Défenseur des droits",
      url: "https://www.defenseurdesdroits.fr/",
      type: "officiel",
      description: "Autorité indépendante à saisir gratuitement en cas de refus de soins ou de rupture de droits liée à l'accès à l'Assurance Maladie.",
    },
  ],
};

export default article;
