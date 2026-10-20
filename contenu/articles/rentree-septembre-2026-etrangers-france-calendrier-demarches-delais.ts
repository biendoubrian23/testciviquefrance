import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-rentree-septembre-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/rentree-septembre-2026-etrangers-france-calendrier-demarches-delais`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "rentree-septembre-2026-etrangers-france-calendrier-demarches-delais",
  titre: "Rentrée septembre 2026 : le calendrier des démarches",
  titreSeo: "Rentrée septembre 2026 : le calendrier des démarches",
  resume: "Septembre est le mois le plus dense pour les démarches des étrangers en France. VLS-TS à valider sous 3 mois, fenêtre de renouvellement 4 à 2 mois (pénalité de 180 € en cas de retard), créneaux d'examen civique à 4-8 semaines, CVEC et inscription scolaire : le calendrier complet avec les délais à ne pas rater.",
  chapo: "Septembre est le mois le plus dense de l'année pour les démarches des étrangers en France. Les préfectures rouvrent après les congés d'été avec un arriéré considérable, des dizaines de milliers d'étudiants arrivent et doivent valider leur visa, et les titres arrivés à expiration pendant l'été deviennent urgents tous en même temps.",
  publieLe: "2026-08-27",
  modifieLe: "2026-08-27",
  minutes: 12,
  theme: "rentrée 2026 étranger France",
  motsCles: [
    "rentrée 2026 étranger France",
    "démarches septembre 2026 titre de séjour",
    "calendrier démarches étrangers",
    "validation VLS-TS 3 mois",
    "renouvellement titre de séjour délai",
    "CVEC 2026 étudiant étranger",
    "pénalité 180 euros titre de séjour",
    "inscription école enfant étranger",
    "examen civique créneau septembre",
    "ANEF rentrée 2026",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
  },
  blocs: [
    {
      type: "p",
      texte: "Le problème n'est presque jamais le dossier lui-même. **C'est le calendrier.** Une fenêtre de dépôt manquée sur l'ANEF, une validation de visa oubliée, un créneau d'examen réservé trop tard : chacune de ces erreurs se paie en semaines de retard, en pénalités financières, et parfois en rupture de droit au séjour.",
    },
    {
      type: "p",
      texte: "Ce guide rassemble **les échéances de septembre 2026**, avec pour chacune le délai exact, le coût, et ce qui arrive si vous la ratez. Gardez-le sous la main : c'est un calendrier, pas une lecture.",
    },
    {
      type: "encadre",
      texte: "⏰ **Les trois urgences absolues de septembre :** valider votre VLS-TS dans les **3 mois** suivant votre arrivée, déposer votre renouvellement dans la fenêtre **4 à 2 mois** avant expiration, et réserver votre créneau d'examen civique **maintenant** si vous déposez un dossier cet automne.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "① Étudiants et primo-arrivants : valider votre VLS-TS sous 3 mois",
      id: "valider-vls-ts",
    },
    {
      type: "p",
      texte: "C'est l'oubli le plus lourd de conséquences, et le plus fréquent chez les nouveaux arrivants.",
    },
    {
      type: "p",
      texte: "**La règle :** un visa de long séjour valant titre de séjour (VLS-TS) doit être **validé dans les 3 mois suivant votre arrivée en France**, en ligne sur l'[ANEF](https://administration-etrangers-en-france.interieur.gouv.fr/). Tant qu'il n'est pas validé, il ne produit pas les effets d'un titre de séjour.",
    },
    {
      type: "p",
      texte: "**Ce que ça coûte :** une taxe de **150 €** pour le VLS-TS étudiant, payable exclusivement en ligne par carte bancaire au moment de la validation.",
    },
    { type: "p", texte: "**Ce qu'il vous faut sous la main :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "📄 Votre numéro de visa et vos dates d'entrée en France",
        "🏠 Votre adresse en France (même provisoire)",
        "💳 Une carte bancaire",
      ],
    },
    { type: "p", texte: "**Si vous ne validez pas** ⚠️" },
    {
      type: "p",
      texte: "Vous vous retrouvez en **séjour irrégulier** alors même que vous êtes entré légalement. Les conséquences se voient vite : impossibilité de vous inscrire à certains services, blocage à la CAF, difficultés bancaires, et un problème sérieux si vous quittez le territoire puis tentez d'y revenir.",
    },
    {
      type: "p",
      texte: "**Arrivé fin août ou début septembre ?** Votre échéance tombe fin novembre ou début décembre. Ne repoussez pas : la plateforme connaît des pics de charge à la rentrée, et un blocage technique en fin de délai est un très mauvais scénario.",
    },
    {
      type: "p",
      texte: "Guides détaillés : [Validation du VLS-TS](/articles/visa-long-sejour-vls-ts-validation-ofii-2026) et [ANEF étudiant étranger 2026](/articles/anef-etudiant-etranger-2026).",
    },
    {
      type: "h2",
      texte: "② La fenêtre de renouvellement : entre 4 et 2 mois avant expiration",
      id: "renouvellement-fenetre",
    },
    {
      type: "p",
      texte: "C'est la règle qui piège le plus de monde, parce qu'elle a **deux bornes** : et que la plupart ne connaissent que la seconde.",
    },
    {
      type: "p",
      texte: "**La règle :** une demande de renouvellement se dépose **au plus tôt 4 mois** et **au plus tard 2 mois** avant la date d'expiration de votre titre.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "⛔ **Trop tôt** (plus de 4 mois avant) : l'ANEF **n'accepte pas** votre dossier. Vous croyez avoir pris de l'avance, vous n'avez rien déposé.",
        "⛔ **Trop tard** (moins de 2 mois avant) : vous vous exposez à une **pénalité de 180 €**, en plus des droits habituels.",
      ],
    },
    {
      type: "p",
      texte: "**Faites le calcul tout de suite.** Sortez votre titre, regardez la date d'expiration :",
    },
    {
      type: "tableau",
      entetes: ["Votre titre expire en", "Déposez entre"],
      lignes: [
        ["Novembre 2026", "juillet → septembre 2026 (**c'est maintenant**)"],
        ["Décembre 2026", "août → octobre 2026"],
        ["Janvier 2027", "septembre → novembre 2026"],
        ["Février 2027", "octobre → décembre 2026"],
      ],
    },
    {
      type: "p",
      texte: "**Le coût :** environ **150 €** pour un renouvellement (100 € de taxe + 50 € de droit de timbre), variable selon le titre.",
    },
    {
      type: "p",
      texte: "**Et si aucun créneau n'est disponible ?** La saturation des préfectures n'est pas une excuse recevable, mais elle n'est pas non plus une fatalité : des recours existent, et ils fonctionnent. Voir notre guide [RDV préfecture introuvable : les solutions légales](/articles/rdv-prefecture-titre-sejour-introuvable-2026-creneaux-marche-noir).",
    },
    {
      type: "encadre",
      texte: "📅 **Posez un rappel dans votre téléphone dès aujourd'hui**, à 4 mois avant l'expiration de votre titre. C'est trente secondes qui vous économisent 180 € et plusieurs semaines de stress.",
      ton: "bleu",
    },
    {
      type: "p",
      texte: "Guide complet : [Renouvellement de titre de séjour 2026](/articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais).",
    },
    {
      type: "h2",
      texte: "③ Examen civique : réservez votre créneau maintenant, pas en novembre",
      id: "examen-civique-creneau",
    },
    {
      type: "p",
      texte: "Si vous déposez un dossier cet automne : première carte pluriannuelle, première carte de résident ou naturalisation, l'attestation d'examen civique est **la pièce la plus longue à obtenir** de tout votre dossier.",
    },
    {
      type: "p",
      texte: "**Pourquoi c'est le goulot d'étranglement :** deux opérateurs agréés seulement pour toute la France, la **CCI Paris Île-de-France (CCIP)** et **France Éducation International (FEI)**. Les délais réels de créneau tournent autour de **4 à 8 semaines**, et la rentrée est une période de forte demande.",
    },
    { type: "p", texte: "**Faites le calcul à rebours :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Dépôt de dossier visé : **novembre 2026**",
        "Créneau d'examen nécessaire : **octobre**",
        "Inscription à faire : **maintenant**",
        "Et si vous échouez au premier passage : ajoutez **4 à 8 semaines** de plus",
      ],
    },
    {
      type: "p",
      texte: "**Le format**, pour savoir ce qui vous attend : 40 questions à choix multiples (28 de connaissance + 12 mises en situation), **45 minutes**, et **32 bonnes réponses sur 40** pour réussir. Comptez **65 à 90 €** par passage selon le centre.",
    },
    { type: "p", texte: "**Mais d'abord : êtes-vous seulement concerné ?** 🎯" },
    {
      type: "p",
      texte: "Ne payez rien avant de l'avoir vérifié. Les ressortissants européens, les renouvellements, les titres dispensés de contrat d'intégration républicaine (passeport talent, étudiant, visiteur…) et plusieurs cas de dispense personnelle n'ont pas à passer l'examen. Notre [simulateur d'éligibilité](/eligibilite-examen-civique) vous le dit en une minute, gratuitement.",
    },
    {
      type: "p",
      texte: "Pour aller plus loin : [Dispenses de l'examen civique](/articles/dispense-examen-civique-2026-qui-est-exempte-age-refugie-accords) · [Inscription à l'examen](/articles/inscription-test-civique-2026-ou-quand-comment-sinscrire) · [Rater l'examen : repasser, délais, coût](/articles/rater-examen-civique-2026-repasser-delai-cout-themes-echec).",
    },
    {
      type: "encadre",
      texte: "💡 **L'attestation n'a aucune durée de validité.** Si vous savez que vous en aurez besoin un jour, la passer maintenant est un placement sûr, et vous éliminez le poste le plus long de votre futur dossier.",
      ton: "bleu",
    },
    { type: "h2", texte: "④ Étudiants : CVEC, inscription et logement", id: "etudiants-rentree" },
    { type: "p", texte: "Trois démarches à boucler avant ou pendant la rentrée universitaire." },
    { type: "p", texte: "**La CVEC : sans elle, pas d'inscription** 🎓" },
    {
      type: "p",
      texte: "La Contribution de vie étudiante et de campus coûte **105 €** et se paie sur [cvec.etudiant.gouv.fr](https://cvec.etudiant.gouv.fr). **Sans l'attestation CVEC, l'université refuse purement et simplement votre inscription administrative.** Certains profils en sont exonérés (boursiers notamment), mais l'attestation reste à obtenir, même à montant nul.",
    },
    { type: "p", texte: "**Le logement** 🏠" },
    {
      type: "p",
      texte: "La rentrée est le pire moment du marché locatif, et les dossiers étrangers se heurtent souvent à l'exigence d'un garant français. Deux dispositifs à connaître : le **CROUS** et la garantie **Visale**, gratuite et acceptée par un nombre croissant de bailleurs. Voir [Logement étudiant étranger 2026 : CROUS, Visale, garant](/articles/logement-etudiant-etranger-france-2026-crous-visale-garant-dossier).",
    },
    { type: "p", texte: "**Les aides** 💶" },
    {
      type: "p",
      texte: "Vous pouvez prétendre aux **APL** sous conditions, même en tant qu'étudiant étranger. La demande se fait sur caf.fr et se calcule à partir du mois de dépôt : **déposez dès votre entrée dans le logement**, pas trois mois après. Voir [Aides sociales pour étrangers](/articles/aides-sociales-etrangers-france-2026-caf-rsa-apl-prime-activite).",
    },
    { type: "p", texte: "**Et pour la suite** 🔮" },
    {
      type: "p",
      texte: "Si vous êtes en dernière année, commencez dès maintenant à préparer votre après-diplôme : APS, changement de statut vers salarié, passeport talent. Le changement de statut demande de l'anticipation, et il déclenche l'obligation d'examen civique. Voir [Changement de statut étudiant → salarié](/articles/changement-statut-etudiant-salarie-2026-demarches-anef) et [Étudiant étranger : les 5 voies pour rester après les études](/articles/titre-sejour-etudiant-france-guide-2025).",
    },
    {
      type: "h2",
      texte: "⑤ Scolariser vos enfants : un droit, quel que soit votre statut",
      id: "enfants-ecole",
    },
    { type: "p", texte: "Un rappel qui reste nécessaire chaque année." },
    {
      type: "p",
      texte: "**L'instruction est obligatoire en France pour tous les enfants de 3 à 16 ans, sans condition de nationalité ni de régularité du séjour des parents.** Une mairie ne peut pas refuser d'inscrire un enfant au motif que ses parents seraient en situation irrégulière ou ne détiendraient pas encore leur titre.",
    },
    {
      type: "p",
      texte: "**Ce qu'on peut légitimement vous demander :** un justificatif de domicile, l'identité de l'enfant, et les documents relatifs aux vaccinations obligatoires.",
    },
    {
      type: "p",
      texte: "**Ce qu'on ne peut pas exiger comme condition à l'inscription :** votre titre de séjour.",
    },
    { type: "p", texte: "**Si l'inscription vous est refusée** ⚖️" },
    {
      type: "p",
      texte: "Ne repartez pas sans rien. Demandez un **refus écrit et motivé** : cette seule demande suffit souvent à débloquer la situation. Si le blocage persiste, saisissez le **Défenseur des droits**, dont la saisine est gratuite, ou l'inspection académique (DSDEN) de votre département.",
    },
    {
      type: "p",
      texte: "**Enfant arrivé récemment et non francophone ?** Le système prévoit des dispositifs d'accueil spécifiques (UPE2A). Signalez-le à l'école dès l'inscription pour que l'évaluation soit faite rapidement, les places s'organisent en début d'année.",
    },
    {
      type: "p",
      texte: "Guide complet : [Scolariser ses enfants en France : inscription et droits](/articles/scolariser-enfants-etranger-france-2026-inscription-ecole-droits).",
    },
    { type: "h2", texte: "La check-list de septembre", id: "checklist-septembre" },
    { type: "p", texte: "À parcourir en cinq minutes, une fois. Cochez ce qui vous concerne." },
    { type: "p", texte: "**Cette semaine** 🔴" },
    {
      type: "liste",
      style: "puces",
      items: [
        "[ ] Sortir mon titre de séjour et **noter sa date d'expiration**",
        "[ ] Calculer ma fenêtre de dépôt (4 à 2 mois avant) et **poser un rappel téléphone**",
        "[ ] Si arrivé récemment : **valider mon VLS-TS** sur l'ANEF (délai : 3 mois, 150 €)",
        "[ ] Vérifier si je suis concerné par l'examen civique → [simulateur gratuit](/eligibilite-examen-civique)",
      ],
    },
    { type: "p", texte: "**Ce mois-ci** 🟠" },
    {
      type: "liste",
      style: "puces",
      items: [
        "[ ] Si concerné et dépôt prévu cet automne : **réserver mon créneau d'examen** (4 à 8 semaines d'attente)",
        "[ ] Étudiants : **payer la CVEC** (105 €) et finaliser l'inscription",
        "[ ] Inscrire mes enfants à l'école si ce n'est pas fait",
        "[ ] Vérifier que mon **compte ANEF** fonctionne, ne pas découvrir un blocage de connexion la veille de l'échéance ([solutions ici](/articles/anef-mon-compte-connexion-probleme-solution-2026))",
      ],
    },
    { type: "p", texte: "**À anticiper d'ici la fin de l'année** 🟢" },
    {
      type: "liste",
      style: "puces",
      items: [
        "[ ] Rassembler les pièces de mon prochain dossier (actes d'état civil, traductions : comptez plusieurs semaines)",
        "[ ] Si je vise la naturalisation : **certificat de langue B2** (valable 2 ans, ne pas le passer trop tôt) et **examen civique**",
        "[ ] Dernière année d'études : préparer mon changement de statut",
      ],
    },
    {
      type: "encadre",
      texte: "🚩 **Deux réflexes de sécurité.** Ne payez **jamais** un rendez-vous en préfecture : c'est gratuit et nominatif, et les revendeurs sont des escrocs. Et méfiez-vous des « accompagnements » qui promettent des délais accélérés : voir [Arnaques visant les étrangers](/articles/arnaques-etrangers-france-2026-faux-avocats-prefecture-anef).",
      ton: "bleu",
    },
    { type: "h2", texte: "À retenir" },
    {
      type: "p",
      texte: "Septembre ne pardonne pas l'improvisation. Les préfectures rouvrent saturées, l'ANEF connaît ses pics d'affluence, et les échéances tombent en même temps pour tout le monde.",
    },
    { type: "p", texte: "Si vous ne retenez que trois choses de ce guide, retenez celles-ci :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "🗓️ **Votre fenêtre de renouvellement a deux bornes** : ni avant 4 mois, ni après 2 mois. Vérifiez la date d'expiration de votre titre **aujourd'hui**, et posez un rappel.",
        "⏳ **Le VLS-TS se valide dans les 3 mois** suivant l'arrivée. Passé ce délai, vous êtes en séjour irrégulier alors que vous êtes entré légalement.",
        "📚 **L'examen civique est la pièce la plus longue** de votre dossier, 4 à 8 semaines pour un créneau. Si vous déposez cet automne, inscrivez-vous maintenant.",
      ],
    },
    {
      type: "p",
      texte: "La plupart des dossiers qui échouent ne butent pas sur le fond, mais sur une date manquée. Cinq minutes de calendrier aujourd'hui valent mieux que trois mois de rattrapage.",
    },
    {
      type: "p",
      texte: "👉 **Commencez par le plus rapide :** vérifiez en une minute si l'examen civique vous concerne avec notre [simulateur d'éligibilité gratuit](/eligibilite-examen-civique). Si la réponse est non, vous venez d'économiser 90 € et six semaines de révisions.",
    },
  ],
  faq: [
    {
      question: "Quand dois-je déposer ma demande de renouvellement de titre de séjour ?",
      reponse: "Entre 4 mois et 2 mois avant la date d'expiration de votre titre. Attention aux deux bornes : déposé plus de 4 mois avant, l'ANEF n'accepte pas le dossier ; déposé à moins de 2 mois, vous vous exposez à une pénalité de 180 €. Comptez environ 150 € pour un renouvellement standard.",
    },
    {
      question: "J'arrive en France en septembre : quel est mon premier délai ?",
      reponse: "Valider votre VLS-TS sur l'ANEF dans les 3 mois suivant votre arrivée. Pour un VLS-TS étudiant, la taxe est de 150 €, payable en ligne par carte bancaire. Sans cette validation, votre visa ne produit pas les effets d'un titre de séjour et vous êtes en situation irrégulière malgré une entrée légale.",
    },
    {
      question: "Combien coûte la CVEC en 2026 et est-elle obligatoire ?",
      reponse: "La CVEC coûte 105 € et se paie sur cvec.etudiant.gouv.fr. Elle est obligatoire : sans l'attestation, l'université refuse votre inscription administrative. Certains profils, notamment les boursiers, en sont exonérés, mais doivent tout de même obtenir l'attestation.",
    },
    {
      question: "Quand dois-je m'inscrire à l'examen civique si je dépose un dossier cet automne ?",
      reponse: "Maintenant. Deux opérateurs seulement sont agréés pour toute la France (CCIP et France Éducation International), et les délais de créneau tournent autour de 4 à 8 semaines. Pour un dépôt en novembre, il vous faut un examen en octobre, donc une inscription en août ou début septembre, et davantage de marge si vous devez le repasser.",
    },
    {
      question: "La mairie peut-elle refuser d'inscrire mon enfant à l'école si je n'ai pas de titre de séjour ?",
      reponse: "Non. L'instruction est obligatoire pour tous les enfants de 3 à 16 ans présents sur le territoire, sans condition de nationalité ni de régularité du séjour des parents. Si l'inscription vous est refusée, demandez un refus écrit et motivé, puis saisissez le Défenseur des droits (saisine gratuite) ou l'inspection académique de votre département.",
    },
    {
      question: "Je n'arrive pas à obtenir de rendez-vous en préfecture avant l'expiration de mon titre. Que faire ?",
      reponse: "Ne payez jamais un créneau à un revendeur : les rendez-vous sont gratuits et nominatifs. Vérifiez d'abord si votre démarche peut se faire entièrement en ligne sur l'ANEF. Si un passage physique est indispensable et qu'aucun créneau n'apparaît malgré des tentatives répétées et documentées, un référé devant le tribunal administratif peut contraindre la préfecture à vous fixer un rendez-vous.",
    },
  ],
  sources: [
    {
      titre: "ANEF : Administration numérique des étrangers en France",
      url: "https://administration-etrangers-en-france.interieur.gouv.fr/",
      type: "officiel",
      description: "Téléservice officiel : validation du VLS-TS, renouvellements, changements de statut et suivi des demandes.",
    },
    {
      titre: "CVEC : Contribution de vie étudiante et de campus",
      url: "https://cvec.etudiant.gouv.fr",
      type: "officiel",
      description: "Plateforme officielle de paiement de la CVEC et de délivrance de l'attestation exigée à l'inscription universitaire.",
    },
    {
      titre: "Service-Public : Carte de séjour pluriannuelle et carte de résident : comment passer l'examen civique ?",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530?lang=fr",
      type: "officiel",
      description: "Fiche officielle sur le périmètre de l'obligation d'examen civique et les cas de dispense.",
    },
    {
      titre: "Ministère de l'Intérieur : Informations générales sur l'examen civique",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/",
      type: "officiel",
      description: "Format de l'épreuve (40 questions, 45 minutes, 32/40) et opérateurs agréés CCIP et FEI.",
    },
    {
      titre: "Défenseur des droits",
      url: "https://www.defenseurdesdroits.fr/",
      type: "officiel",
      description: "Autorité indépendante à saisir gratuitement en cas de refus d'inscription scolaire ou de rupture de droits liée aux démarches administratives.",
    },
  ],
};

export default article;
