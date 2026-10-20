import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-logement-etudiant-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/logement-etudiant-etranger-france-2026-crous-visale-garant-dossier`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "logement-etudiant-etranger-france-2026-crous-visale-garant-dossier",
  titre: "Logement étudiant en France 2026 : CROUS, Visale, garant, le guide pour étrangers",
  titreSeo: "Logement étudiant en France 2026 : CROUS, Visale, garant, le guide pour étrangers",
  resume: "Comment trouver et sécuriser un logement quand on arrive de l'étranger : logement CROUS, garantie Visale (sans garant français), dossier de location, dépôt de garantie et arnaques à éviter. Le guide pratique 2026.",
  chapo: "Quand on arrive de l'étranger pour étudier en France, trouver un logement est souvent le premier grand obstacle, avant même la carte de séjour ou l'ouverture d'un compte bancaire. Le blocage n°1 est presque toujours le même : **les bailleurs réclament un garant français**, que la plupart des étudiants internationaux n'ont pas. Résultat, des dossiers pourtant solides sont refusés.",
  publieLe: "2026-07-09",
  modifieLe: "2026-07-09",
  minutes: 13,
  theme: "logement étudiant étranger france",
  motsCles: [
    "logement étudiant étranger france",
    "garantie visale étudiant étranger",
    "logement crous étudiant international",
    "louer sans garant français",
    "caution logement étudiant france",
    "dossier location étudiant étranger",
    "visale plafond loyer étudiant 2026",
    "dépôt de garantie location france",
    "trouver logement étudiant france arrivée",
    "apl étudiant étranger caf",
    "arnaque location étudiant étranger",
    "résidence crous demande dse 2026",
    "colocation étudiant france étranger",
    "budget logement étudiant france",
    "s'installer étudiant étranger france 2026",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  blocs: [
    {
      type: "p",
      texte: "Bonne nouvelle : il existe des solutions pensées exactement pour ça, à commencer par le **logement CROUS** et la **garantie Visale** (une caution de l'État, gratuite, qui remplace le garant). Ce guide 100 % pratique vous montre, étape par étape, comment **trouver et sécuriser** un logement étudiant en arrivant de l'étranger : les types de logement et leurs prix, comment postuler au CROUS, comment obtenir Visale sans garant français, comment monter un dossier de location béton, à quoi vous attendre pour la caution, et comment éviter les arnaques.",
    },
    {
      type: "encadre",
      texte: "ℹ️ Cet article traite de la **recherche pratique** d'un logement. Si vous pensez avoir été **refusé de façon discriminatoire** (à cause de votre nationalité, de votre nom ou de votre statut d'étranger), voyez plutôt notre guide dédié : « Louer un appartement quand on est étranger : refus illégaux et discrimination ».",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Les types de logement étudiant (et les prix à prévoir)",
      id: "types-logement-etudiant",
    },
    {
      type: "p",
      texte: "Avant de chercher, il faut savoir ce qui existe et à quel prix, car le budget conditionne tout le reste.",
    },
    { type: "p", texte: "**Les principales options :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "🏛️ **Résidence CROUS** : logements universitaires publics, les moins chers, mais places limitées et très demandées (voir la section suivante).",
        "🏢 **Résidence étudiante privée** : studios meublés avec services (laverie, salle d'étude) ; plus chers que le CROUS, plus faciles à obtenir.",
        "👥 **Colocation** : le meilleur rapport qualité/prix dans les grandes villes ; attention au type de bail (bail unique ou baux individuels).",
        "🏠 **Parc privé (studio/appartement)** : le plus de choix, mais c'est là que le garant et le dossier sont les plus exigeants.",
        "🛏️ **Foyer / résidence sociale (type CROUS conventionné)** : souvent éligibles à l'aide au logement.",
      ],
    },
    { type: "p", texte: "**Ordres de grandeur de loyer (studio/chambre) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Paris / Île-de-France** : nettement plus élevé (souvent 700 €-1 000 €+ pour un studio privé).",
        "**Grandes métropoles** (Lyon, Toulouse, Marseille, Bordeaux, Lille…) : intermédiaire.",
        "**Villes moyennes** : les loyers les plus abordables.",
      ],
    },
    {
      type: "encadre",
      texte: "💡 Le loyer maximum « raisonnable » dépend aussi des **plafonds Visale** si vous comptez utiliser cette garantie (voir plus bas) : viser un loyer sous le plafond de votre zone vous ouvre plus de solutions.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Le logement CROUS : la piste la moins chère (mais à demander tôt)",
      id: "logement-crous",
    },
    {
      type: "p",
      texte: "Les résidences des **CROUS** (Centres régionaux des œuvres universitaires et scolaires) proposent les logements étudiants les plus abordables. La demande est **gratuite** mais la demande dépasse largement l'offre : il faut s'y prendre **tôt**.",
    },
    { type: "p", texte: "**Comment ça marche :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Vous constituez votre **Dossier social étudiant (DSE)** sur [messervices.etudiant.gouv.fr](https://www.messervices.etudiant.gouv.fr/) : c'est le même dossier qui sert à la bourse. La campagne s'ouvre en général **de début mars à fin mai** pour la rentrée suivante (campagne 2026 : jusqu'au **31 mai**).",
        "Vous déposez ensuite vos **vœux de logement** sur la plateforme [trouverunlogement.lescrous.fr](https://trouverunlogement.lescrous.fr/) (plusieurs vœux possibles).",
        "L'attribution se fait en **deux phases** : une **phase principale** (priorité aux boursiers et critères sociaux) puis une **phase complémentaire ouverte à tous** les étudiants, y compris internationaux, dans la limite des places disponibles.",
      ],
    },
    {
      type: "p",
      texte: "**Étudiants internationaux :** vous pouvez candidater au logement CROUS. Les boursiers du gouvernement français et certains programmes d'échange sont prioritaires, mais des logements restent accessibles en phase complémentaire. Voir les modalités officielles sur [le Dossier social étudiant (lescrous.fr/dse)](https://www.lescrous.fr/dse/).",
    },
    {
      type: "encadre",
      texte: "⚠️ Les dates de campagne changent chaque année : **vérifiez le calendrier exact** sur messervices.etudiant.gouv.fr et lescrous.fr avant de vous organiser. Si vous arrivez hors campagne, visez la phase complémentaire et les résidences privées en parallèle.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Le problème du garant : pourquoi les bailleurs le réclament",
      id: "probleme-du-garant",
    },
    {
      type: "p",
      texte: "En France, la plupart des propriétaires demandent un **garant** (ou « caution ») : une personne qui s'engage à payer le loyer si le locataire ne paie pas. Le cadre est fixé par [service-public.fr, Caution du locataire](https://www.service-public.gouv.fr/particuliers/vosdroits/F31267).",
    },
    {
      type: "p",
      texte: "Le hic pour un étudiant étranger : les bailleurs exigent souvent un **garant résidant en France avec des revenus français** : ce que vous n'avez généralement pas en arrivant. C'est la première cause de refus.",
    },
    { type: "p", texte: "**Les solutions quand on n'a pas de garant français :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "✅ **La garantie Visale** : une caution de l'État, gratuite, qui joue le rôle du garant (section suivante). C'est la solution reine pour les étudiants internationaux.",
        "🏢 **Les résidences CROUS et beaucoup de résidences privées** : n'exigent souvent **pas** de garant classique.",
        "🏦 **La caution bancaire** : vous bloquez une somme sur un compte ; sûr pour le bailleur, mais immobilise de l'argent.",
        "🤝 **Un garant payant privé** (organisme se portant caution contre commission) : à comparer avec Visale, qui est gratuit.",
      ],
    },
    {
      type: "encadre",
      texte: "💡 Réflexe à retenir : **avant** de chercher un garant payant, testez Visale, c'est gratuit et conçu exactement pour votre situation.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "La garantie Visale : la caution gratuite de l'État (sans garant français)",
      id: "garantie-visale",
    },
    {
      type: "p",
      texte: "**Visale** est une garantie locative **gratuite** proposée par **Action Logement**. Elle remplace le garant : en cas de loyers impayés, Action Logement paie le bailleur, puis vous remboursez ensuite. C'est **la** solution la plus adaptée aux étudiants qui arrivent sans garant en France. Référence officielle : [service-public.fr, Garantie Visale](https://www.service-public.gouv.fr/particuliers/vosdroits/F33453).",
    },
    { type: "p", texte: "**Ce qu'il faut savoir :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "💶 **C'est 100 % gratuit** pour le locataire comme pour le bailleur.",
        "🎓 Elle vise notamment **les jeunes (moins de 30 ans) et les étudiants** : testez votre éligibilité précise (dont le cas des étudiants internationaux) avec le simulateur officiel : [Tester son éligibilité à Visale](https://www.service-public.gouv.fr/particuliers/vosdroits/R57639).",
        "🧾 **Plafonds de loyer garantis pour les étudiants** (barème en vigueur depuis janvier 2026, charges comprises) : **1 000 €/mois en Île-de-France**, **840 €** dans les communes de plus de 100 000 habitants, en Corse et dans les DROM / Saint-Martin, et **680 €** dans les autres communes.",
        "⏱️ La demande doit être faite **avant la signature du bail** : vous obtenez d'abord votre **visa Visale**, puis le **bailleur doit accepter** le dispositif.",
        "🎁 Bon à savoir : un bailleur **ne peut pas** exiger de garant supplémentaire d'un **étudiant boursier** de l'enseignement supérieur.",
      ],
    },
    { type: "p", texte: "**Comment l'obtenir :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Créez votre espace et faites votre demande sur le site officiel d'Action Logement, [visale.fr](https://www.visale.fr/).",
        "Obtenez votre **visa Visale** (attestation) : à présenter dans votre dossier de location.",
        "Une fois le logement trouvé, le bailleur valide le contrat de cautionnement Visale.",
      ],
    },
    {
      type: "encadre",
      texte: "⚠️ Les **plafonds** et conditions peuvent évoluer : confirmez le plafond de **votre** zone et votre éligibilité directement sur visale.fr avant de viser un logement.",
      ton: "bleu",
    },
    { type: "h2", texte: "Constituer un dossier de location béton", id: "dossier-location" },
    {
      type: "p",
      texte: "Un bon dossier rassure le bailleur et fait la différence, surtout quand on arrive de l'étranger. Préparez-le **à l'avance et en version numérique** (PDF), prêt à envoyer en quelques minutes.",
    },
    { type: "p", texte: "**Les pièces habituellement demandées :**" },
    { type: "p", texte: "✅ Pièce d'identité / passeport (+ visa VLS-TS si vous l'avez déjà)" },
    {
      type: "p",
      texte: "✅ Justificatif de statut étudiant : **attestation d'inscription** ou d'admission",
    },
    { type: "p", texte: "✅ **Garantie Visale** (visa Visale) ou justificatif de garant" },
    {
      type: "p",
      texte: "✅ Justificatifs de ressources : bourse, attestation bancaire, revenus des parents (avec traduction si besoin)",
    },
    {
      type: "p",
      texte: "✅ **RIB** (dès que vous avez un compte français) et, si possible, une attestation d'assurance habitation",
    },
    {
      type: "p",
      texte: "✅ Éventuellement une **lettre de présentation** expliquant votre projet d'études",
    },
    { type: "p", texte: "**Conseils qui rassurent un bailleur à distance :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Regroupez tout dans **un seul PDF clair**, nommé proprement.",
        "Mettez en avant **Visale** dès le premier message : beaucoup de bailleurs connaissent et acceptent.",
        "Proposez une **visite en visio** si vous ne pouvez pas vous déplacer.",
      ],
    },
    {
      type: "encadre",
      texte: "💡 Astuce anti-galère : au moment de signer, vous devrez souvent fournir une **assurance habitation** (obligatoire pour le locataire) : souscrivez-la en ligne juste avant la remise des clés, c'est rapide et peu coûteux.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Caution, dépôt de garantie et premier loyer : à quoi s'attendre",
      id: "caution-depot-premier-loyer",
    },
    {
      type: "p",
      texte: "Les premières semaines coûtent cher : il faut souvent avancer plusieurs mois d'un coup. Anticipez ce budget **avant** de partir.",
    },
    {
      type: "p",
      texte: "**Le dépôt de garantie (souvent appelé « caution ») : plafonds légaux :** d'après [service-public.fr, Dépôt de garantie](https://www.service-public.gouv.fr/particuliers/vosdroits/F31269) :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Location vide : 1 mois de loyer maximum** (hors charges).",
        "**Location meublée : 2 mois de loyer maximum** (hors charges) : c'est le cas le plus fréquent pour les étudiants.",
        "Avec un **bail mobilité** (bail court de 1 à 10 mois), le dépôt de garantie est **interdit**.",
      ],
    },
    {
      type: "p",
      texte: "**Sa restitution :** le bailleur doit vous rendre le dépôt sous **1 mois** si l'état des lieux de sortie est conforme à celui d'entrée, et sous **2 mois** en cas de différences.",
    },
    { type: "p", texte: "**À prévoir concrètement pour l'entrée dans les lieux :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le **1er mois de loyer** + le **dépôt de garantie** (souvent 1 à 2 mois) → soit fréquemment **2 à 3 mois de loyer d'avance**.",
        "Parfois des **frais d'agence** (encadrés et plafonnés) si vous passez par une agence.",
        "L'**assurance habitation** (obligatoire).",
      ],
    },
    {
      type: "encadre",
      texte: "💡 Faites votre **état des lieux d'entrée** avec soin (photos datées, moindre défaut noté) : c'est ce qui protège votre dépôt de garantie au départ.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Éviter les arnaques à la location (surtout à distance)",
      id: "eviter-arnaques",
    },
    {
      type: "p",
      texte: "Les étudiants étrangers qui cherchent **avant d'arriver** sont une cible classique des escrocs. Les fausses annonces et faux propriétaires sont fréquents. Quelques réflexes qui évitent l'arnaque :",
    },
    {
      type: "p",
      texte: "🚩 **Ne versez JAMAIS d'argent (caution, « réservation ») avant** d'avoir visité et signé un vrai bail. C'est le signal d'alerte n°1.",
    },
    {
      type: "p",
      texte: "🚩 Méfiance si le « propriétaire » est **injoignable**, refuse toute visite (même en visio) et vous presse de payer par **virement urgent** ou en cryptomonnaie.",
    },
    {
      type: "p",
      texte: "🚩 Une annonce **trop belle et trop peu chère** pour la ville → probablement fausse.",
    },
    {
      type: "p",
      texte: "🚩 On vous demande des **documents personnels sensibles** (scan de carte bancaire, photo de passeport recto-verso) avant tout engagement.",
    },
    { type: "p", texte: "**Les bons réflexes :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "✅ Privilégiez les canaux fiables : **CROUS**, résidences étudiantes reconnues, plateformes avec identité vérifiée.",
        "✅ Demandez une **visite** (sur place ou en visio en direct, pas une vidéo pré-enregistrée).",
        "✅ Exigez un **bail écrit** en bonne et due forme avant tout paiement.",
        "✅ Pour un hébergement des premiers jours, passez par un **acteur identifié** (auberge, résidence, réservation traçable).",
      ],
    },
    {
      type: "encadre",
      texte: "⚠️ Règle d'or : **pas de visite ni de bail = pas d'argent.** Un vrai bailleur comprend cette prudence.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Les aides au logement (APL) : réduisez votre loyer",
      id: "aides-au-logement-apl",
    },
    {
      type: "p",
      texte: "Une fois installé, vous pouvez souvent bénéficier d'une **aide personnalisée au logement (APL)** ou d'une autre aide au logement de la **CAF**, y compris en résidence CROUS ou étudiante. Les étudiants étrangers en séjour régulier peuvent y avoir droit, voir [service-public.fr, Aide au logement d'un étudiant](https://www.service-public.gouv.fr/particuliers/vosdroits/F1563).",
    },
    { type: "p", texte: "**Ce qu'il faut savoir :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La demande se fait en ligne sur **caf.fr**, après votre emménagement (il faut le bail et un RIB français).",
        "Le montant dépend du **loyer**, de la **zone géographique** et de vos **ressources**.",
        "L'aide peut être versée directement au bailleur (tiers payant) selon les cas.",
      ],
    },
    {
      type: "encadre",
      texte: "💡 Faites la demande **dès l'entrée dans le logement** : l'aide n'est en général pas rétroactive au-delà du mois de la demande. Pour organiser toutes vos démarches d'arrivée (banque, Sécu, CAF), voyez notre guide des **papiers à obtenir en arrivant en France**.",
      ton: "bleu",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Trouver un logement étudiant en arrivant de l'étranger n'est pas une question de chance mais de **méthode** : commencez tôt (surtout pour le CROUS), sécurisez une **garantie Visale** pour remplacer le garant français que vous n'avez pas, préparez un **dossier numérique complet** prêt à envoyer, et budgétez **2 à 3 mois de loyer** pour l'entrée dans les lieux. Gardez en tête les plafonds Visale pour cibler le bon loyer, ne payez **jamais** avant d'avoir visité et signé, et demandez vos **APL** dès l'emménagement. Avec cette feuille de route, vous transformez le plus gros obstacle de l'arrivée en une démarche maîtrisée, et vous pouvez vous concentrer sur l'essentiel : vos études et votre installation durable en France.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Peut-on louer un logement en France sans garant français ?",
      reponse: "Oui. La solution la plus adaptée est la garantie Visale, une caution gratuite d'Action Logement qui remplace le garant : le bailleur est couvert en cas d'impayé. Les résidences CROUS et de nombreuses résidences étudiantes privées n'exigent par ailleurs pas de garant classique. La caution bancaire est une autre option, mais elle immobilise de l'argent.",
    },
    {
      question: "La garantie Visale est-elle accessible aux étudiants étrangers ?",
      reponse: "Visale vise notamment les jeunes de moins de 30 ans et les étudiants, et beaucoup d'étudiants internationaux y sont éligibles. La demande, gratuite, se fait sur visale.fr et doit être réalisée avant la signature du bail ; le bailleur doit accepter le dispositif. Testez votre situation précise avec le simulateur d'éligibilité officiel de service-public.fr.",
    },
    {
      question: "Comment obtenir un logement CROUS quand on est étudiant international ?",
      reponse: "Constituez votre Dossier social étudiant (DSE) sur messervices.etudiant.gouv.fr (campagne généralement de mars à fin mai), puis déposez vos vœux de logement sur trouverunlogement.lescrous.fr. L'attribution se fait en une phase principale (priorité aux boursiers et critères sociaux) puis une phase complémentaire ouverte à tous. Vérifiez les dates exactes chaque année, car elles changent.",
    },
    {
      question: "Quel budget prévoir pour la caution et le premier loyer ?",
      reponse: "Prévoyez souvent 2 à 3 mois de loyer pour entrer dans les lieux : le premier mois de loyer plus le dépôt de garantie (1 mois maximum pour une location vide, 2 mois pour un meublé, hors charges), auxquels peuvent s'ajouter des frais d'agence et l'assurance habitation obligatoire. Avec un bail mobilité, aucun dépôt de garantie ne peut être exigé.",
    },
    {
      question: "Comment repérer une arnaque à la location à distance ?",
      reponse: "Ne versez jamais d'argent avant d'avoir visité (au moins en visio en direct) et signé un vrai bail. Méfiez-vous d'un propriétaire injoignable, d'un loyer anormalement bas, d'une demande de virement urgent ou de documents sensibles avant tout engagement. Privilégiez le CROUS, les résidences reconnues et les plateformes à identité vérifiée.",
    },
  ],
  sources: [
    {
      titre: "Service-Public.fr, Garantie Visale (caution locative gratuite)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33453",
      type: "officiel",
      description: "Conditions officielles de la garantie Visale, plafonds de loyer pour les étudiants et modalités de demande.",
    },
    {
      titre: "Service-Public.fr, Tester son éligibilité à la garantie Visale",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/R57639",
      type: "officiel",
      description: "Simulateur officiel pour vérifier son éligibilité à Visale (utile pour les étudiants internationaux).",
    },
    {
      titre: "Visale.fr (Action Logement) : Demande de garantie",
      url: "https://www.visale.fr/",
      type: "officiel",
      description: "Site officiel d'Action Logement pour créer sa demande et obtenir le visa Visale avant la signature du bail.",
    },
    {
      titre: "Service-Public.fr, Dépôt de garantie d'un logement",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31269",
      type: "officiel",
      description: "Montants maximums du dépôt de garantie (1 mois en location vide, 2 mois en meublé, hors charges) et délais de restitution.",
    },
    {
      titre: "Service-Public.fr, Caution du locataire",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31267",
      type: "officiel",
      description: "Cadre légal du garant / de la caution demandé par le bailleur.",
    },
    {
      titre: "Lescrous.fr, Dossier social étudiant (DSE) et logement",
      url: "https://www.lescrous.fr/dse/",
      type: "officiel",
      description: "Procédure officielle de demande de logement en résidence CROUS via le DSE (messervices.etudiant.gouv.fr) et les vœux sur trouverunlogement.lescrous.fr.",
    },
    {
      titre: "Service-Public.fr, Aide au logement (APL) d'un étudiant",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1563",
      type: "officiel",
      description: "Droit des étudiants (y compris étrangers en séjour régulier) aux aides au logement de la CAF.",
    },
  ],
};

export default article;
