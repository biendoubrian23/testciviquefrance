import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-batch-mai-2026-4.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/dossier-naturalisation-refuse-sans-motif-2026-recours-cada-tribunal`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "dossier-naturalisation-refuse-sans-motif-2026-recours-cada-tribunal",
  titre: "Naturalisation refusée sans motif 2026 : obtenir l'explication via la CADA et faire un recours efficace",
  titreSeo: "Naturalisation refusée sans motif 2026 : obtenir l'explication via la CADA et faire un recours efficace",
  resume: "La préfecture ou le ministère vous refuse la naturalisation sans motif clair ? Vous pouvez obtenir le dossier complet via la CADA, comprendre les vraies raisons cachées et déposer un recours gracieux ou contentieux. Procédure 2026, délais et modèle de demande.",
  chapo: "Vous recevez une lettre laconique de votre préfecture ou du ministère de l'Intérieur : \"Votre demande de naturalisation est rejetée.\" Aucune explication détaillée, juste une formule administrative comme **\"défaut d'assimilation\"**, **\"insuffisance des ressources\"** ou **\"opportunité\"**. Vous restez sans comprendre ce qui s'est réellement passé. Cette frustration est partagée par environ **35 000 candidats déboutés chaque année** en France selon les chiffres 2026 de la Sous-direction de l'accès à la nationalité française (SDANF). La bonne nouvelle : vous avez **le droit légal d'obtenir l'intégralité de votre dossier**, de comprendre les vraies raisons cachées du refus et de **contester la décision** par un recours gracieux ou contentieux. Ce guide complet 2026 vous explique la procédure exacte : différencier ajournement, refus et irrecevabilité ; saisir la **CADA** (Commission d'accès aux documents administratifs) pour récupérer les pièces ; rédiger un recours efficace ; saisir le **tribunal administratif de Nantes** ; et préparer une nouvelle demande qui aboutira.",
  publieLe: "2026-05-10",
  modifieLe: "2026-05-10",
  minutes: 17,
  theme: "naturalisation refusée sans motif 2026",
  motsCles: [
    "naturalisation refusée sans motif 2026",
    "refus naturalisation recours",
    "CADA naturalisation dossier",
    "recours gracieux naturalisation",
    "tribunal administratif Nantes naturalisation",
    "naturalisation ajournée",
    "naturalisation irrecevable",
    "demande accès dossier naturalisation",
    "délai recours naturalisation",
    "avocat naturalisation refus",
    "aide juridictionnelle naturalisation",
    "refaire demande naturalisation après refus",
    "défaut assimilation refus",
    "naturalisation refus motif caché",
    "recours contentieux nationalité française",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
  },
  blocs: [
    {
      type: "h2",
      texte: "Ajournement, refus, irrecevabilité : ne confondez pas les trois",
      id: "ajournement-refus-irrecevabilite",
    },
    {
      type: "p",
      texte: "Avant tout recours, vous devez identifier précisément la nature de la décision reçue. Trois types de décisions négatives existent et **la stratégie de recours diffère pour chacune**.",
    },
    { type: "p", texte: "**1. L'irrecevabilité (article 21-15 du Code civil)**" },
    {
      type: "p",
      texte: "Votre dossier ne remplit pas une **condition légale** (durée de séjour insuffisante, niveau de français manquant, casier non vierge, condition d'âge). La SDANF considère que vous ne pouviez juridiquement pas demander la naturalisation. Conséquence : la procédure n'a même pas été instruite sur le fond. Vous recevez une lettre type **\"votre demande est déclarée irrecevable au titre de l'article X\"**.",
    },
    { type: "p", texte: "**2. L'ajournement (article 21-25-1 du Code civil)**" },
    {
      type: "p",
      texte: "L'administration estime que vous remplissez les conditions légales **mais que votre dossier n'est pas mûr**. Elle fixe un délai (souvent **2 ans**) avant lequel vous ne pouvez pas redéposer. Motifs typiques : **emploi instable**, niveau B1 limite, dette fiscale récente, casier ancien.",
    },
    { type: "p", texte: "**3. Le refus (rejet définitif, article 21-25 du Code civil)**" },
    {
      type: "p",
      texte: "C'est la décision la plus grave. L'administration refuse au nom de l'**\"opportunité\"** ou de l'**absence d'assimilation**. Aucun délai d'attente n'est imposé légalement, mais redéposer immédiatement avec le même dossier est inutile.",
    },
    {
      type: "tableau",
      entetes: ["Décision", "Base légale", "Délai pour redéposer", "Recours possible"],
      lignes: [
        ["Irrecevabilité", "Art. 21-15 C. civ.", "Dès régularisation", "Oui (2 mois)"],
        ["Ajournement", "Art. 21-25-1 C. civ.", "Délai imposé (souvent 2 ans)", "Oui (2 mois)"],
        ["Refus", "Art. 21-25 C. civ.", "Aucun, mais déconseillé sans changement", "Oui (2 mois)"],
      ],
    },
    {
      type: "p",
      texte: "**Lisez attentivement votre lettre** : la base légale citée (article 21-15, 21-25 ou 21-25-1) vous dit immédiatement à quel cas vous appartenez.",
    },
    {
      type: "h2",
      texte: "Les motifs réellement utilisés (souvent en code administratif)",
      id: "motifs-codes-cachees",
    },
    {
      type: "p",
      texte: "Les lettres de refus utilisent des **formulations standardisées** qui dissimulent les vraies raisons. Voici les codes les plus fréquents et leur signification réelle :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**\"Défaut d'assimilation à la communauté française\"** : c'est le motif le plus large. Il peut viser un niveau de français jugé insuffisant à l'entretien, une mauvaise connaissance des valeurs (laïcité, égalité), un attachement perçu trop fort au pays d'origine, ou même des positions exprimées sur les réseaux sociaux. Statistiquement, **40% des refus** tombent dans cette catégorie en 2026.",
      ],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**\"Ressources insuffisantes ou instables\"** : revenus inférieurs au SMIC mensuel net (**1 426,30 € en 2026**), CDD à répétition sans perspective, périodes de chômage non indemnisé, dépendance aux prestations sociales (RSA notamment).",
      ],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**\"Comportement incompatible avec l'acquisition de la nationalité\"** : casier judiciaire non vierge (B2), même pour des infractions anciennes ; suspicion de fraude fiscale ; signalements **\"S\"** ou fichage TAJ.",
      ],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**\"Situation fiscale non régulière\"** : dette envers la DGFIP, déclarations manquantes pour une ou plusieurs années, incohérence entre revenus déclarés et niveau de vie.",
      ],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**\"Opportunité\"** : c'est le motif le plus opaque. L'administration a **un pouvoir discrétionnaire** confirmé par le Conseil d'État. Elle peut refuser sans justifier précisément, mais **doit malgré tout pouvoir produire les éléments factuels** ayant motivé sa décision si vous le demandez.",
      ],
    },
    {
      type: "p",
      texte: "**Pourquoi les motifs sont vagues ?** Parce que la naturalisation est juridiquement une **faveur**, pas un droit. L'administration n'a aucune obligation détaillée de motivation. C'est précisément pour cela que la procédure CADA est cruciale : elle vous donne accès aux **vraies notes internes** des fonctionnaires.",
    },
    {
      type: "p",
      texte: "Si vous avez reçu un refus pour défaut d'assimilation et que vous aviez **réussi le test civique** avec un bon score, ce résultat doit être au cœur de votre recours : il prouve objectivement votre connaissance des valeurs et institutions de la République.",
    },
    {
      type: "h2",
      texte: "Saisir la CADA pour obtenir votre dossier complet",
      id: "cada-acceder-dossier",
    },
    {
      type: "p",
      texte: "La **Commission d'accès aux documents administratifs (CADA)** est une autorité administrative indépendante qui garantit votre droit légal de consulter tout document vous concernant détenu par l'administration française (loi du 17 juillet 1978, codifiée au Code des relations entre le public et l'administration).",
    },
    { type: "p", texte: "**Étape 1 : demande directe à la SDANF**" },
    {
      type: "p",
      texte: "Avant de saisir la CADA, vous devez d'abord demander **directement** votre dossier à l'autorité qui détient les pièces. Adressez votre courrier en **lettre recommandée avec accusé de réception** à :",
    },
    {
      type: "encadre",
      texte: "Ministère de l'Intérieur : Sous-direction de l'accès à la nationalité française (SDANF) : 12 rue Francis Le Carval, 44404 Rezé Cedex",
      ton: "bleu",
    },
    { type: "p", texte: "**Modèle de courrier** :" },
    { type: "encadre", texte: "Madame, Monsieur,", ton: "bleu" },
    { type: "p", texte: ">" },
    {
      type: "encadre",
      texte: "Conformément aux articles L.300-1 et L.311-1 du Code des relations entre le public et l'administration, je vous demande la communication de l'intégralité de mon dossier de demande de naturalisation enregistré sous le numéro [XXXXX], y compris : la note de synthèse, le procès-verbal d'entretien, l'avis du préfet, l'avis de la SDANF, ainsi que toutes les pièces ayant fondé la décision de [refus / ajournement] notifiée le [date].",
      ton: "bleu",
    },
    { type: "p", texte: ">" },
    { type: "encadre", texte: "Je vous prie d'agréer mes salutations distinguées.", ton: "bleu" },
    { type: "p", texte: "**Étape 2 : silence de 1 mois = refus implicite**" },
    {
      type: "p",
      texte: "L'administration a **1 mois** pour répondre. Au-delà, son silence vaut refus. Vous pouvez alors saisir la CADA.",
    },
    { type: "p", texte: "**Étape 3 : saisine de la CADA**" },
    {
      type: "p",
      texte: "Vous disposez de **2 mois** après le refus implicite ou explicite pour saisir la CADA. Saisine **gratuite**, par courrier postal ou via le formulaire en ligne sur cada.fr. La CADA rend un **avis sous 1 mois** (consultatif mais très souvent suivi).",
    },
    { type: "p", texte: "**Étape 4 : nouvelle demande à l'administration**" },
    {
      type: "p",
      texte: "Avec l'avis favorable CADA, vous renvoyez la demande à la SDANF. Dans 90% des cas, le dossier vous est alors communiqué. Délai total réaliste : **3 à 5 mois** entre la première demande et la réception effective des pièces.",
    },
    {
      type: "p",
      texte: "Une fois votre dossier en main, vous découvrirez les **vraies notes** rédigées par les agents : remarques sur l'entretien, perception du niveau de français, éléments sur votre conjoint, vos voyages, votre activité en ligne, etc. Ces notes deviennent **la matière de votre recours**.",
    },
    {
      type: "h2",
      texte: "Le recours gracieux : votre première ligne de défense",
      id: "recours-gracieux-ministere",
    },
    {
      type: "p",
      texte: "Le **recours gracieux** consiste à demander à l'autorité qui a pris la décision de la **réexaminer**. C'est gratuit, simple, et **suspensif** sur le délai du recours contentieux.",
    },
    { type: "p", texte: "**Délai : 2 mois à compter de la notification**" },
    {
      type: "p",
      texte: "Le délai court à partir du **jour de réception** de la lettre de refus (cachet postal de l'accusé de réception, pas la date d'envoi). Exemple : refus reçu le 15 mai 2026 → recours possible jusqu'au **15 juillet 2026 à minuit**.",
    },
    { type: "p", texte: "**Destinataire** :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si refus de naturalisation : **ministre de l'Intérieur** (Place Beauvau, 75800 Paris Cedex 08), à l'attention de la SDANF.",
        "Si décision préfectorale (rare en naturalisation, fréquent pour titre de séjour) : **préfet** du département.",
      ],
    },
    { type: "p", texte: "**Modèle de courrier de recours gracieux** :" },
    { type: "encadre", texte: "Monsieur le Ministre de l'Intérieur,", ton: "bleu" },
    { type: "p", texte: ">" },
    {
      type: "encadre",
      texte: "Par décision du [date], notifiée le [date], vous avez prononcé le refus de ma demande de naturalisation enregistrée sous le numéro [XXXXX], au motif de [motif invoqué]. Par la présente, je sollicite respectueusement le réexamen de ma demande pour les raisons suivantes :",
      ton: "bleu",
    },
    { type: "p", texte: ">" },
    {
      type: "encadre",
      texte: "1. **Sur le motif d'assimilation** : j'ai obtenu le test civique avec [score]/40, ce qui démontre objectivement ma connaissance des valeurs républicaines. Je joins l'attestation officielle.\n2. **Sur le niveau de français** : je présente un DELF B1 daté du [date], ainsi que des attestations professionnelles confirmant ma maîtrise opérationnelle.\n3. **Sur les ressources** : je joins mes 12 derniers bulletins de salaire et mes 3 derniers avis d'imposition démontrant la stabilité de mes revenus.\n4. **Sur l'intégration** : je joins des attestations associatives, professionnelles et de voisinage.",
      ton: "bleu",
    },
    { type: "p", texte: ">" },
    {
      type: "encadre",
      texte: "Veuillez agréer, Monsieur le Ministre, l'expression de ma considération distinguée.",
      ton: "bleu",
    },
    { type: "p", texte: "**Que joindre obligatoirement** :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Copie de la décision de refus",
        "Pièces nouvelles ou complémentaires (preuves récentes d'intégration, justificatifs fiscaux à jour, attestation test civique)",
        "Le cas échéant : avis CADA et pièces du dossier obtenues",
      ],
    },
    {
      type: "p",
      texte: "**Réponse** : la SDANF a **2 mois** pour répondre. Silence = rejet implicite. Vous gardez alors **2 mois** pour saisir le tribunal administratif de Nantes.",
    },
    {
      type: "h2",
      texte: "Le recours contentieux devant le tribunal administratif de Nantes",
      id: "tribunal-administratif-nantes",
    },
    {
      type: "p",
      texte: "Si le recours gracieux échoue (ou en parallèle), le **recours contentieux** est l'arme juridique ultime. En matière de naturalisation, **un seul tribunal est compétent en France** : le **tribunal administratif de Nantes** (article R.312-3 du Code de justice administrative).",
    },
    {
      type: "p",
      texte: "**Pourquoi Nantes ?** Parce que la SDANF, qui instruit toutes les demandes nationales, est implantée à Rezé (banlieue de Nantes). Toutes les décisions de naturalisation sont donc considérées comme prises à Nantes.",
    },
    { type: "p", texte: "**Adresse** :" },
    {
      type: "encadre",
      texte: "Tribunal administratif de Nantes : 6 allée de l'Île Gloriette, 44041 Nantes Cedex 01",
      ton: "bleu",
    },
    { type: "p", texte: "**Délai : 2 mois**" },
    { type: "p", texte: "À compter :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "soit de la notification du refus initial (si pas de recours gracieux) ;",
        "soit de la réponse au recours gracieux (ou de l'expiration du délai de 2 mois en cas de silence).",
      ],
    },
    { type: "p", texte: "**Comment saisir le tribunal**" },
    {
      type: "p",
      texte: "La saisine se fait via **Télérecours citoyens** (application gratuite : citoyens.telerecours.fr) ou par **courrier recommandé**. Coût : **gratuit** (pas de droit de timbre depuis 2014).",
    },
    { type: "p", texte: "**Contenu de la requête** :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Identité du requérant et de l'avocat éventuel",
        "Décision attaquée (joindre copie)",
        "Exposé des faits",
        "**Moyens de droit** (les arguments juridiques) :",
      ],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Erreur manifeste d'appréciation",
        "Erreur de droit",
        "Détournement de pouvoir",
        "Violation du principe de motivation suffisante",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Demandes : annulation de la décision, injonction de réexamen, condamnation aux frais (article L.761-1 CJA)",
      ],
    },
    {
      type: "p",
      texte: "**Délai de jugement réaliste : 12 à 24 mois** selon l'encombrement du tribunal. Le contentieux naturalisation représente environ **5 000 dossiers par an** à Nantes en 2026.",
    },
    {
      type: "p",
      texte: "**Statistiques 2026** : environ **18% des recours** aboutissent à une annulation pleine ou partielle. Les chances augmentent significativement avec un avocat spécialisé.",
    },
    {
      type: "h2",
      texte: "Aide juridictionnelle et avocats spécialisés",
      id: "aide-juridictionnelle-avocats",
    },
    {
      type: "p",
      texte: "Un avocat n'est **pas obligatoire** devant le tribunal administratif (sauf appel devant la cour administrative d'appel), mais il est **fortement recommandé** vu la technicité du contentieux nationalité.",
    },
    { type: "p", texte: "**Coût d'un avocat en droit de la nationalité (2026)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Consultation initiale : **80 à 200 €**",
        "Recours gracieux : forfait **600 à 1 200 €**",
        "Recours contentieux complet : **1 500 à 3 500 €**",
        "Honoraires de résultat éventuels : 5 à 15% en cas de succès",
      ],
    },
    { type: "p", texte: "**Aide juridictionnelle (AJ)**" },
    {
      type: "p",
      texte: "Si vos revenus sont modestes, vous pouvez bénéficier de l'AJ qui prend en charge tout ou partie des honoraires d'avocat. Plafonds 2026 (revenu fiscal de référence par mois pour une personne seule) :",
    },
    {
      type: "tableau",
      entetes: ["Niveau d'AJ", "RFR mensuel max", "Prise en charge"],
      lignes: [
        ["AJ totale", "≤ 1 095 €", "100%"],
        ["AJ partielle 55%", "1 096 à 1 295 €", "55%"],
        ["AJ partielle 25%", "1 296 à 1 642 €", "25%"],
      ],
    },
    {
      type: "p",
      texte: "Le formulaire **Cerfa 16146*03** se demande au tribunal de votre domicile (pas à Nantes). Le bureau d'aide juridictionnelle décide en **3 à 6 semaines**.",
    },
    { type: "p", texte: "**Trouver un avocat spécialisé** :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Annuaire du Conseil national des barreaux (cnb.avocat.fr)",
        "Mention de spécialisation **\"droit des étrangers et de la nationalité\"**",
        "Permanences gratuites des Maisons de Justice et du Droit (MJD)",
        "Associations : la Cimade, GISTI, ADDE",
      ],
    },
    {
      type: "h2",
      texte: "Refaire une demande après refus : combien attendre, comment renforcer",
      id: "redeposer-renforcer-dossier",
    },
    {
      type: "p",
      texte: "Après un refus, déposer immédiatement la même demande est inutile. Voici la stratégie 2026 pour maximiser vos chances au second tour.",
    },
    { type: "p", texte: "**Délai d'attente conseillé**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Irrecevabilité** : dès que la condition manquante est remplie (durée de séjour, B1, etc.).",
        "**Ajournement** : respectez **strictement** le délai imposé (souvent 2 ans). Toute demande prématurée sera rejetée d'office.",
        "**Refus pour opportunité ou assimilation** : attendez **18 à 24 mois minimum**, le temps d'apporter des changements visibles dans votre dossier.",
      ],
    },
    { type: "p", texte: "**Ce qu'il faut renforcer**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**L'assimilation aux valeurs françaises** : c'est l'élément n°1 que les agents évaluent. Repassez le **test civique** avec un score élevé (36/40 et plus) si vous ne l'aviez pas, ou repassez-le pour avoir une attestation **récente**. Une attestation de moins d'un an pèse lourd dans la balance car elle prouve que vos connaissances sont fraîches et solides. Vous pouvez préparer le test civique gratuitement sur testciviquefrance.fr et obtenir l'attestation officielle.",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Le niveau de français** : DELF B2 (au-dessus du minimum requis) impressionne les agents. Coût ~250 €.",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**L'engagement civique et associatif** : bénévolat documenté pendant **12 mois minimum**, attestations signées avec tampons d'association.",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**La stabilité professionnelle** : CDI continu de **2 ans minimum**, augmentation de salaire, fiches de paie cohérentes.",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**La régularité fiscale** : 5 dernières déclarations propres, attestation de régularité fiscale à jour.",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**L'enracinement** : achat immobilier, mariage avec un Français, enfants scolarisés, lien associatif local.",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Lettre de motivation refondue** : structurée, sincère, en français impeccable, qui répond directement aux motifs du précédent refus.",
      ],
    },
    {
      type: "p",
      texte: "Pour aller plus loin sur les conditions d'obtention de la **carte de résident 10 ans** (souvent la première étape avant la naturalisation), consultez notre guide dédié : [carte de résident 10 ans en France](/articles/carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Un refus de naturalisation n'est jamais la fin de l'histoire, c'est le début d'une procédure dans laquelle vous avez **des droits réels et puissants**. Identifiez précisément la nature de la décision (irrecevabilité, ajournement, refus). Obtenez votre dossier via la **CADA** pour comprendre les vraies raisons. Engagez un **recours gracieux** dans les 2 mois, puis si nécessaire un **recours contentieux** devant le tribunal administratif de Nantes. Bénéficiez de l'**aide juridictionnelle** si vos revenus le permettent. Surtout, **renforcez votre dossier** en attendant : un test civique réussi avec un score élevé est un argument objectif et factuel qui rassure l'administration sur votre **assimilation aux valeurs républicaines**, justement le motif n°1 des refus. Préparez votre test civique gratuitement, passez l'examen blanc et obtenez votre attestation officielle directement sur [testciviquefrance.fr](/signup) : c'est la pièce qui peut faire basculer votre nouvelle demande du bon côté.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien de temps pour obtenir mon dossier via la CADA en 2026 ?",
      reponse: "Comptez 3 à 5 mois au total : 1 mois pour la première demande à la SDANF, 1 mois pour l'avis CADA en cas de silence, puis 1 à 3 mois pour la communication effective des pièces après l'avis favorable.",
    },
    {
      question: "Puis-je faire un recours gracieux ET un recours contentieux en même temps ?",
      reponse: "Oui, juridiquement c'est possible. Mais en pratique, mieux vaut commencer par le recours gracieux : il est gratuit, plus rapide (2 mois max) et suspend le délai de saisine du tribunal. Si le gracieux échoue, vous gardez vos 2 mois pour Nantes.",
    },
    {
      question: "L'avocat est-il obligatoire pour saisir le tribunal administratif de Nantes ?",
      reponse: "Non, en première instance vous pouvez saisir Nantes seul via Télérecours citoyens. Mais le contentieux nationalité est très technique (motifs d'opportunité, contrôle restreint du juge) : un avocat spécialisé augmente les chances de succès de 18% à environ 35-40%.",
    },
    {
      question: "Si mon recours est rejeté à Nantes, puis-je faire appel ?",
      reponse: "Oui. Vous avez 2 mois pour saisir la cour administrative d'appel de Nantes. Cette fois, l'avocat est obligatoire. Au-delà, possibilité de cassation devant le Conseil d'État dans des conditions très restrictives.",
    },
    {
      question: "Mon refus mentionne \"défaut d'assimilation\" mais j'ai réussi le test civique. Que faire ?",
      reponse: "C'est un argument majeur de recours. Joignez votre attestation officielle de réussite au test civique au recours gracieux et insistez : votre score prouve objectivement votre connaissance des valeurs républicaines. Combinez avec un DELF B1/B2 récent et des attestations d'engagement local.",
    },
  ],
};

export default article;
