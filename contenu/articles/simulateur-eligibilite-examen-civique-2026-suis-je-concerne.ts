import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-simulateur-eligibilite-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/simulateur-eligibilite-examen-civique-2026-suis-je-concerne`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "simulateur-eligibilite-examen-civique-2026-suis-je-concerne",
  titre: "Simulateur examen civique 2026 : suis-je concerné ?",
  titreSeo: "Simulateur examen civique 2026 : suis-je concerné ?",
  resume: "Suis-je concerné par l'examen civique ? Notre simulateur gratuit applique les critères officiels dans le bon ordre : nationalité, démarche, mention du titre et contrat d'intégration républicaine, dispenses. Réponse motivée en moins d'une minute, sans inscription.",
  chapo: "Depuis le **1er janvier 2026**, l'examen civique conditionne la carte de séjour pluriannuelle, la carte de résident et la naturalisation française. Et depuis janvier, la même question revient dans tous les groupes d'entraide, toutes les files d'attente de préfecture et toutes les boîtes mail de notre service lecteurs : **« est-ce que ça me concerne, moi ? »**",
  publieLe: "2026-08-24",
  modifieLe: "2026-08-24",
  minutes: 10,
  theme: "simulateur examen civique",
  motsCles: [
    "simulateur examen civique",
    "suis-je concerné par examen civique",
    "éligibilité examen civique 2026",
    "dois-je passer examen civique",
    "test éligibilité examen civique",
    "examen civique obligatoire pour moi",
    "simulateur éligibilité titre de séjour",
    "qui doit passer examen civique 2026",
    "dispense examen civique simulateur",
    "vérifier examen civique obligatoire",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
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
      texte: "La réponse n'est pas évidente, et c'est précisément le problème. Elle dépend de **quatre facteurs qui se combinent** : votre nationalité, votre démarche, la mention exacte de votre titre, et votre situation personnelle. Se tromper coûte cher dans les deux sens : des candidats paient 90 € et révisent six semaines pour un examen dont ils étaient dispensés ; d'autres, persuadés d'en être exemptés, voient leur dossier de naturalisation déclaré incomplet et perdent des mois.",
    },
    {
      type: "p",
      texte: "Nous avons donc construit un **simulateur d'éligibilité gratuit**, qui applique les critères officiels dans le bon ordre et vous donne une réponse motivée en moins d'une minute : [tester mon éligibilité](/eligibilite-examen-civique).",
    },
    {
      type: "p",
      texte: "Cet article explique **comment il raisonne**. Pas pour faire joli : parce que vous devez pouvoir vérifier chaque étape, et parce qu'un outil dont on ne peut pas contrôler le raisonnement ne vaut pas grand-chose sur un sujet où l'erreur se paie en mois de procédure.",
    },
    {
      type: "encadre",
      texte: "⚡ **Le résumé, si vous êtes pressé :** l'examen ne vise que les ressortissants **non européens**, uniquement pour les **premières demandes**, et seulement pour les titres **soumis au contrat d'intégration républicaine**. Et surtout : une dispense obtenue pour le **séjour** ne vaut **jamais** pour la **naturalisation**.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Pourquoi une simple liste de critères ne suffit pas",
      id: "pourquoi-un-simulateur",
    },
    {
      type: "p",
      texte: "On trouve partout des listes « qui est concerné / qui est dispensé ». Elles sont utiles, mais elles échouent sur un point : **les critères ne s'additionnent pas, ils se hiérarchisent**.",
    },
    { type: "p", texte: "Prenons trois personnes réelles dans leur configuration :" },
    { type: "p", texte: "**Cas 1 : Amina, réfugiée statutaire, demande sa carte de résident.**" },
    {
      type: "p",
      texte: "Elle lit « les bénéficiaires d'une protection internationale sont dispensés ». Conclusion : elle n'a rien à faire. **C'est exact.** Trois ans plus tard, elle dépose un dossier de naturalisation en appliquant la même règle. **C'est faux** : la nationalité relève du code civil, sa dispense ne joue plus. Dossier incomplet.",
    },
    { type: "p", texte: "**Cas 2 : Karim, Algérien, veut la nationalité française.**" },
    {
      type: "p",
      texte: "Il lit « les Algériens sont dispensés en vertu de l'accord de 1968 ». Vrai pour son certificat de résidence. **Faux pour la naturalisation**, qui échappe à l'accord.",
    },
    {
      type: "p",
      texte: "**Cas 3 : Wei, titulaire d'un passeport talent, demande sa première carte pluriannuelle.**",
    },
    {
      type: "p",
      texte: "Elle lit « toute première carte pluriannuelle est concernée ». Elle s'inscrit, paie, révise. **Elle n'était pas concernée** : le passeport talent est dispensé de contrat d'intégration républicaine, et l'obligation ne vise que les titres qui y sont soumis.",
    },
    {
      type: "p",
      texte: "Dans les trois cas, la personne a lu une information **exacte** et en a tiré une conclusion **fausse** : parce qu'il manquait l'ordre dans lequel appliquer les règles. C'est exactement ce qu'un simulateur fait bien : il pose les questions dans le bon ordre et n'applique un critère qu'une fois les précédents tranchés.",
    },
    {
      type: "encadre",
      texte: "💡 C'est aussi pour cela que notre simulateur affiche **les motifs** de sa réponse, et pas seulement un « oui » ou un « non ». Vous devez pouvoir vérifier le raisonnement, et le montrer à un agent de préfecture si besoin.",
      ton: "bleu",
    },
    { type: "h2", texte: "Facteur 1 : La nationalité : le premier filtre", id: "facteur-1-nationalite" },
    { type: "p", texte: "C'est la première question, parce qu'elle peut clore le sujet immédiatement." },
    { type: "p", texte: "**🇪🇺 Union européenne, EEE et Suisse : hors champ.**" },
    {
      type: "p",
      texte: "L'obligation ne vise que les **ressortissants de pays tiers**. Un Espagnol, un Roumain, un Norvégien ou un Suisse n'a jamais à passer l'examen civique pour son droit au séjour, qui relève d'un régime entièrement distinct.",
    },
    {
      type: "p",
      texte: "**🇬🇧 Britanniques sous accord de retrait : hors champ également**, pour la même raison.",
    },
    { type: "p", texte: "**🇩🇿 Algériens : régime autonome.**" },
    {
      type: "p",
      texte: "L'**accord franco-algérien du 27 décembre 1968** (avenants de 1985, 1994 et 2001) crée un système parallèle au CESEDA. Les Algériens reçoivent un **certificat de résidence**, pas une carte de séjour de droit commun. Or les dispositions du CESEDA ne leur sont applicables **que si l'accord le prévoit expressément** : et l'accord, antérieur de plus d'un demi-siècle, ne mentionne évidemment pas l'examen civique. Ils en sont donc dispensés **pour le séjour**.",
    },
    { type: "p", texte: "**🇲🇦🇹🇳 Marocains et Tunisiens : pleinement concernés.**" },
    {
      type: "p",
      texte: "Attention au raccourci « le Maghreb est dispensé ». La convention franco-marocaine du **9 octobre 1987** et la convention franco-tunisienne du **17 mars 1988** ne créent **pas** de régime autonome et n'exemptent pas des obligations du CESEDA.",
    },
    {
      type: "p",
      texte: "**🌍 Autres nationalités hors UE : concernées**, sous réserve des facteurs suivants.",
    },
    {
      type: "encadre",
      texte: "⚠️ **La nuance qui piège tout le monde :** aucune de ces dispenses de nationalité ne joue pour la **naturalisation**. Un Algérien qui demande la nationalité française doit passer l'examen civique, comme tout le monde. Notre article dédié détaille le raisonnement : [Algériens et examen civique : ce que dit vraiment l'accord de 1968](/articles/algeriens-examen-civique-2026-accord-1968-dispense-sejour-mais-pas-naturalisation).",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Facteur 2 : La démarche : séjour et nationalité obéissent à des règles opposées",
      id: "facteur-2-demarche",
    },
    { type: "p", texte: "C'est le facteur le plus déterminant, et le plus mal compris." },
    { type: "p", texte: "**Deux corpus juridiques différents s'appliquent :**" },
    {
      type: "tableau",
      entetes: ["Texte applicable", "Effet des accords bilatéraux"],
      lignes: [
        ["🪪 **Titre de séjour**", "CESEDA", "Peuvent écarter l'obligation"],
        ["🇫🇷 **Naturalisation**", "**Code civil**", "**Sans effet**"],
      ],
    },
    {
      type: "p",
      texte: "L'accord franco-algérien régit « la circulation, l'emploi et le séjour ». Il ne traite pas de l'acquisition de la nationalité. Le statut de réfugié ouvre des droits au séjour, pas une dérogation au code civil. **Aucune dispense tirée du droit au séjour ne se transporte vers la nationalité.**",
    },
    { type: "p", texte: "**Les démarches hors champ, quelle que soit votre nationalité :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "✅ **Le renouvellement d'un titre que vous détenez déjà.** L'examen ne vise que les **premières demandes**. Si vous renouvelez à l'identique, il ne vous est pas demandé.",
        "✅ **Le titre temporaire d'un an, et la validation du VLS-TS.** L'obligation porte sur les titres pluriannuels, les cartes de résident et la nationalité.",
      ],
    },
    {
      type: "p",
      texte: "⚠️ **Le faux ami :** un **changement de statut**, ou le passage d'un titre annuel à votre **première** carte pluriannuelle, constitue bien une **première demande** de ce titre. Vivre en France depuis dix ans n'y change rien.",
    },
    {
      type: "encadre",
      texte: "📌 Si votre démarche est la naturalisation, vous pouvez arrêter votre lecture ici sur ce point : **vous êtes concerné**, sauf situation personnelle particulière (facteur 4). Le niveau **B2** en français est également exigé depuis le 1er janvier 2026, avec un certificat de moins de deux ans au dépôt.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Facteur 3 : La mention du titre : le critère que presque personne ne mentionne",
      id: "facteur-3-mention-cir",
    },
    {
      type: "p",
      texte: "C'est le facteur le plus technique : et celui sur lequel la quasi-totalité des contenus en ligne se trompe ou reste vague.",
    },
    {
      type: "p",
      texte: "**L'obligation ne vise pas « toutes les cartes pluriannuelles ».** La fiche officielle est précise : seules sont concernées les **premières demandes de carte de séjour pluriannuelle soumise au contrat d'intégration républicaine (CIR)**.",
    },
    {
      type: "p",
      texte: "Or l'**article L. 413-5 du CESEDA** dispense de CIR toute une série de titres. Ne sont donc **pas** concernés par l'examen civique :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "🎓 **Étudiant** et programme de mobilité étudiante",
        "💼 **Passeport talent**, dans toutes ses déclinaisons, carte bleue européenne, chercheur, mobilité chercheur, **et le passeport talent (famille)**",
        "🧳 **Visiteur**",
        "📋 **Stagiaire**",
        "⏳ **Travailleur temporaire**",
      ],
    },
    {
      type: "p",
      texte: "Sont également dispensées de CIR les personnes ayant suivi **au moins trois années de scolarité secondaire** dans un établissement français, ou **au moins une année d'études supérieures** en France.",
    },
    {
      type: "p",
      texte: "À l'inverse, sont bien concernées les premières demandes portant les mentions **salarié**, **vie privée et familiale**, **entrepreneur / profession libérale**, et les autres mentions soumises au CIR.",
    },
    {
      type: "p",
      texte: "**Pourquoi c'est important :** un chercheur étranger ou un cadre en passeport talent qui lit « toute première carte pluriannuelle est concernée » va s'inscrire, payer et réviser pour rien. Notre simulateur pose la question de la mention, et c'est, à notre connaissance, le seul à le faire.",
    },
    {
      type: "encadre",
      texte: "🔍 **Vérifiez la mention exacte portée sur votre titre**, pas votre situation générale. C'est elle qui détermine l'obligation. En cas de doute, demandez confirmation écrite à votre préfecture : la formulation exacte de votre carte fait foi.",
      ton: "bleu",
    },
    { type: "h2", texte: "Facteur 4 : Les dispenses personnelles", id: "facteur-4-dispenses" },
    { type: "p", texte: "Dernier étage du raisonnement, une fois les trois précédents tranchés." },
    { type: "p", texte: "**🎂 65 ans révolus à la date du dépôt**" },
    {
      type: "p",
      texte: "Les personnes de 65 ans révolus **au moment du dépôt** sont dispensées pour leur titre de séjour. La date retenue est bien celle du **dépôt**, pas celle de l'instruction : à 64 ans et 10 mois, vous êtes concerné.",
    },
    { type: "p", texte: "**🛡️ Protection internationale**" },
    {
      type: "p",
      texte: "Réfugiés statutaires, bénéficiaires de la protection subsidiaire et apatrides reconnus sont dispensés **pour le titre de séjour**. Leurs conditions d'intégration sont appréciées séparément. **Cette dispense tombe pour la naturalisation.**",
    },
    { type: "p", texte: "**🩺 État de santé et handicap**" },
    {
      type: "p",
      texte: "Lorsque l'état de santé ou le handicap rend le passage impossible, une **dispense** peut être accordée sur **certificat médical circonstancié**. Lorsque l'examen reste possible mais que les conditions standard sont inadaptées, c'est un **aménagement** qui s'applique : temps majoré, matériel adapté, assistance.",
    },
    { type: "p", texte: "**Pourquoi notre simulateur répond parfois « à confirmer »**" },
    {
      type: "p",
      texte: "Sur deux points, les sources officielles ne tranchent pas clairement, et nous avons refusé d'inventer une réponse :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "La **dispense d'âge en matière de naturalisation** : elle est documentée pour les titres de séjour, pas pour la nationalité ;",
        "La **dispense pour raison de santé**, qui dépend de l'appréciation d'un certificat médical par l'administration.",
      ],
    },
    {
      type: "p",
      texte: "Dans ces cas, le simulateur affiche **« à confirmer auprès de la préfecture »** plutôt qu'un « non » rassurant mais hasardeux. Un outil qui prétend trancher là où le droit est incertain vous expose à un dossier incomplet, c'est exactement ce que nous cherchons à éviter.",
    },
    {
      type: "p",
      texte: "Le détail complet de chaque dispense figure dans notre guide : [Dispense examen civique 2026 : qui est vraiment exempté ?](/articles/dispense-examen-civique-2026-qui-est-exempte-age-refugie-accords).",
    },
    { type: "h2", texte: "Ce qui distingue notre simulateur", id: "ce-qui-distingue-notre-simulateur" },
    {
      type: "p",
      texte: "Plusieurs sites proposent aujourd'hui des pages « êtes-vous concerné ». Voici, factuellement, ce que le nôtre fait différemment.",
    },
    { type: "p", texte: "**1. Il intègre le critère du contrat d'intégration républicaine** 🎯" },
    {
      type: "p",
      texte: "C'est le point technique décisif pour les cartes pluriannuelles, et il est presque systématiquement omis. Sans lui, un titulaire de passeport talent ou un étudiant reçoit une réponse fausse.",
    },
    { type: "p", texte: "**2. Il sépare strictement séjour et naturalisation** ⚖️" },
    {
      type: "p",
      texte: "Chaque résultat précise pour quelle démarche il vaut, et vous avertit explicitement quand la réponse s'inversera pour l'autre. C'est la première cause de dossiers incomplets en 2026 ; le simulateur en fait un avertissement systématique.",
    },
    { type: "p", texte: "**3. Il distingue les trois régimes du Maghreb** 🌍" },
    {
      type: "p",
      texte: "Algériens dispensés pour le séjour, Marocains et Tunisiens pleinement concernés. Les trois ne sont pas interchangeables, et les traiter en bloc produit des réponses fausses pour deux nationalités sur trois.",
    },
    { type: "p", texte: "**4. Il assume l'incertitude quand elle existe** 🤝" },
    {
      type: "p",
      texte: "Trois issues possibles : concerné, non concerné, à confirmer, plutôt qu'un binaire trompeur. Là où le droit est incertain, il le dit.",
    },
    { type: "p", texte: "**5. Il motive chaque réponse et cite sa source** 📚" },
    {
      type: "p",
      texte: "Vous ne recevez pas un verdict, mais un raisonnement : les règles appliquées, le point de vigilance, et la référence officielle (fiche Service-Public F39530, décret n° 2025-648, article L. 413-5 du CESEDA, accord de 1968). Vérifiable, et opposable dans une discussion avec un guichet.",
    },
    { type: "p", texte: "**6. Il est gratuit, sans inscription et sans collecte de données** 🔓" },
    {
      type: "p",
      texte: "Aucun compte à créer, aucune adresse e-mail demandée, aucune donnée personnelle enregistrée. Vous remplissez, vous obtenez votre réponse.",
    },
    {
      type: "encadre",
      texte: "👉 **[Tester mon éligibilité maintenant](/eligibilite-examen-civique)** : un formulaire court, une réponse motivée en moins d'une minute.",
      ton: "bleu",
    },
    { type: "h2", texte: "Et après le résultat ?", id: "et-apres" },
    { type: "p", texte: "**Si vous n'êtes pas concerné** ✅" },
    {
      type: "p",
      texte: "Vérifiez tout de même deux choses. D'abord la **mention exacte** de votre titre auprès de votre préfecture, car c'est elle qui commande. Ensuite votre **projet à moyen terme** : si la naturalisation figure dans vos plans, l'examen redeviendra obligatoire. Et comme **l'attestation n'a aucune durée de validité**, la passer aujourd'hui sécurise définitivement un dossier que vous déposerez dans cinq ans.",
    },
    { type: "p", texte: "**Si vous êtes concerné** 📚" },
    { type: "p", texte: "Trois choses à enclencher, dans cet ordre :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Évaluez votre niveau réel, gratuitement.** Avant de payer une inscription (65 à 90 € selon le centre), faites un [examen blanc en conditions réelles](/articles/test-civique-gratuit-en-ligne-2026-examen-blanc-entrainement-qcm) : 40 questions, 45 minutes, seuil à 80 %.",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Ciblez le bon thème.** Sur **3 208 sessions d'entraînement complétées** sur notre plateforme, « **Principes et valeurs de la République** » est le seul thème dont le score moyen (**76,8 %**) tombe **sous le seuil de réussite** : **39,8 %** des candidats y passent sous les 80 %, contre 24 % sur « Vivre dans la société française ». C'est le thème que tout le monde croit maîtriser, commencez par lui.",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Inscrivez-vous tôt.** Deux opérateurs agréés seulement pour toute la France (CCIP et FEI) : comptez souvent **4 à 8 semaines** pour un créneau. Voir notre [guide d'inscription](/articles/inscription-test-civique-2026-ou-quand-comment-sinscrire) et la [liste des centres agréés](/articles/centres-agrees-examen-civique-2026).",
      ],
    },
    { type: "p", texte: "**Si le résultat est « à confirmer »** 📩" },
    {
      type: "p",
      texte: "Écrivez à votre préfecture pour obtenir une confirmation, et **préparez-vous en parallèle**. Réviser pour un examen dont vous êtes finalement dispensé ne coûte rien ; découvrir trois semaines avant le dépôt que vous n'étiez pas dispensé peut coûter plusieurs mois.",
    },
    {
      type: "encadre",
      texte: "💰 **Le calcul qui doit vous décider :** rater l'examen, c'est reperdre le montant de l'inscription **et** 4 à 8 semaines d'attente pour un nouveau créneau, pendant que votre titre continue de courir vers sa date d'expiration. Voir [Rater l'examen civique : repasser, délais et coût](/articles/rater-examen-civique-2026-repasser-delai-cout-themes-echec).",
      ton: "bleu",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "L'examen civique repose sur des règles simples prises une par une, mais dont la **combinaison** produit des réponses contre-intuitives. Un réfugié dispensé pour son titre de séjour ne l'est plus pour la nationalité. Un Algérien dispensé pour son certificat de résidence doit passer l'examen pour devenir Français. Un titulaire de passeport talent n'est pas concerné, là où un salarié l'est. Et un Marocain n'a pas le même régime qu'un Algérien.\nAucune de ces règles n'est cachée : elles figurent dans le décret du 15 juillet 2025, le CESEDA et la fiche Service-Public F39530. Ce qui manque, c'est **l'ordre dans lequel les appliquer**. C'est tout ce que fait notre simulateur, et il vous montre son raisonnement, pour que vous puissiez le vérifier plutôt que le croire sur parole.\n**Deux minutes de vérification aujourd'hui** valent mieux que 90 € dépensés pour rien, ou qu'un dossier de naturalisation renvoyé pour pièce manquante.\n👉 **[Vérifier si je dois passer l'examen civique](/eligibilite-examen-civique)** : gratuit, sans inscription, réponse motivée immédiate.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Le simulateur est-il gratuit ?",
      reponse: "Oui, entièrement gratuit et sans inscription. Aucun compte à créer, aucune adresse e-mail demandée, aucune donnée personnelle enregistrée. Vous remplissez le formulaire et obtenez votre réponse immédiatement.",
    },
    {
      question: "Sur quoi le simulateur se fonde-t-il ?",
      reponse: "Sur les sources officielles : la fiche Service-Public F39530, le portail de la formation civique du ministère de l'Intérieur, le décret n° 2025-648 du 15 juillet 2025 complété par l'arrêté du 10 octobre 2025, l'article L. 413-5 du CESEDA pour les dispenses de contrat d'intégration républicaine, et l'accord franco-algérien du 27 décembre 1968. Chaque résultat affiche la référence qui le fonde.",
    },
    {
      question: "Le résultat a-t-il une valeur officielle ?",
      reponse: "Non. Le simulateur donne une indication fondée sur les textes en vigueur, mais il ne remplace pas une réponse de l'administration. En cas de doute, et notamment sur la mention exacte de votre titre, demandez une confirmation écrite à votre préfecture.",
    },
    {
      question: "Pourquoi le simulateur me répond parfois « à confirmer » ?",
      reponse: "Parce que sur deux points, les sources officielles ne tranchent pas clairement : la dispense liée à l'âge de 65 ans en matière de naturalisation (documentée pour les titres de séjour seulement), et la dispense pour raison de santé, qui dépend de l'appréciation d'un certificat médical. Nous préférons vous le dire plutôt que d'afficher une réponse rassurante mais hasardeuse.",
    },
    {
      question: "Pourquoi me demander la mention de mon titre de séjour ?",
      reponse: "Parce que l'examen civique ne vise que les premières cartes pluriannuelles soumises au contrat d'intégration républicaine. L'article L. 413-5 du CESEDA en dispense les mentions passeport talent (et famille), étudiant, visiteur, stagiaire et travailleur temporaire. Sans cette question, un titulaire de passeport talent recevrait une réponse fausse.",
    },
    {
      question: "Je suis Algérien : le simulateur en tient-il compte ?",
      reponse: "Oui. L'accord franco-algérien du 27 décembre 1968 crée un régime autonome au CESEDA, qui dispense d'examen civique pour le certificat de résidence. Le simulateur applique cette règle, et vous avertit qu'elle ne vaut pas pour une demande de naturalisation, qui relève du code civil.",
    },
    {
      question: "Combien de temps prend le simulateur ?",
      reponse: "Moins d'une minute. Le formulaire comporte 3 à 4 champs selon votre situation : nationalité, démarche, mention du titre le cas échéant, et cas de dispense éventuels.",
    },
  ],
  sources: [
    {
      titre: "Service-Public : Carte de séjour pluriannuelle et carte de résident : comment passer l'examen civique ?",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530?lang=fr",
      type: "officiel",
      description: "Fiche officielle : liste exhaustive des titres concernés, condition de contrat d'intégration républicaine, dispenses (65 ans, santé, handicap), non-application aux renouvellements.",
    },
    {
      titre: "Ministère de l'Intérieur : Informations générales sur l'examen civique",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/",
      type: "officiel",
      description: "Portail officiel : 28 questions de connaissance et 12 mises en situation, 45 minutes, seuil de 32/40, opérateurs agréés CCIP et FEI, validité illimitée de l'attestation.",
    },
    {
      titre: "Ministère de l'Intérieur : L'examen civique pour demander un titre de séjour",
      url: "https://www.immigration.interieur.gouv.fr/limmigration-en-france/sejour-des-etrangers/lexamen-civique-pour-demander-titre-de-sejour",
      type: "officiel",
      description: "Page de la Direction générale des étrangers en France sur le champ d'application de l'obligation.",
    },
    {
      titre: "Légifrance : Décret n° 2025-648 du 15 juillet 2025",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051925434",
      type: "juridique",
      description: "Texte instituant l'examen civique et relevant l'exigence linguistique au niveau B2, applicable aux demandes déposées à compter du 1er janvier 2026.",
    },
    {
      titre: "Ministère de l'Intérieur : Communiqué du 1er janvier 2026",
      url: "https://www.interieur.gouv.fr/actualites/communiques-de-presse/a-partir-du-1er-janvier-2026-reussite-a-lexamen-civique-sera-necessaire-pour-obtenir-carte-de-sejour",
      type: "officiel",
      description: "Communiqué officiel sur l'entrée en vigueur de l'obligation pour la carte de séjour pluriannuelle, la carte de résident et la naturalisation.",
    },
  ],
};

export default article;
