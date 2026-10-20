import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-rater-examen-civique-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/rater-examen-civique-2026-repasser-delai-cout-themes-echec`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "rater-examen-civique-2026-repasser-delai-cout-themes-echec",
  titre: "Rater l'examen civique 2026 : repasser, délais et coût",
  titreSeo: "Rater l'examen civique 2026 : repasser, délais et coût",
  resume: "Vous avez échoué à l'examen civique ? Ce n'est pas éliminatoire : repassable sans limite ni délai réglementaire. Combien ça coûte, sous quel délai réel, ce que devient votre dossier, et, données à l'appui sur 3 208 sessions, le thème qui fait chuter 4 candidats sur 10.",
  chapo: "Vous avez ouvert votre résultat, et le compte n'y est pas. 28/40, 30/40, peut-être 31/40, à une question du seuil. La première réaction est presque toujours la même : **est-ce que ma demande de titre de séjour ou de naturalisation est fichue ?**",
  publieLe: "2026-08-24",
  modifieLe: "2026-08-24",
  minutes: 11,
  theme: "rater examen civique",
  motsCles: [
    "rater examen civique",
    "j'ai raté l'examen civique",
    "repasser examen civique",
    "échec examen civique",
    "examen civique combien de fois",
    "délai repasser examen civique",
    "prix repasser examen civique",
    "que faire si on rate l'examen civique",
    "examen civique 32 sur 40",
    "thèmes examen civique difficiles",
    "fraude examen civique",
    "seconde tentative examen civique",
  ],
  rubrique: "preparation",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
  },
  blocs: [
    {
      type: "p",
      texte: "Non. Et c'est le point le plus important de cet article : **l'échec à l'examen civique n'est pas éliminatoire**. Vous pouvez le repasser **autant de fois que nécessaire**, sans limite de tentatives et sans délai d'attente réglementaire. Aucun texte ne vous ferme la porte.",
    },
    {
      type: "p",
      texte: "Ce qui vous coûte cher, en revanche, ce n'est pas l'échec en lui-même : c'est **le temps et l'argent** que chaque nouvelle tentative consomme. Un créneau, c'est souvent **4 à 8 semaines** d'attente. Une inscription, c'est **65 à 90 €** à repayer intégralement. Pendant ce temps, la date d'expiration de votre titre, elle, continue d'avancer.",
    },
    {
      type: "p",
      texte: "L'enjeu n'est donc pas « puis-je repasser ? », vous pouvez. C'est **« comment je réussis à la prochaine tentative »**. Et pour ça, nous avons une donnée que personne d'autre ne publie : sur **3 208 sessions d'entraînement complétées** sur notre plateforme, nous savons précisément **quel thème fait chuter les candidats**. Le résultat est contre-intuitif.",
    },
    {
      type: "encadre",
      texte: "✅ **En une phrase :** repassable sans limite, sans délai imposé, mais chaque tentative coûte un créneau et une inscription. La seule vraie exception, c'est la fraude, qui, elle, ferme la porte pour **deux ans**.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Rassurez-vous : l'échec n'est pas éliminatoire",
      id: "echec-pas-eliminatoire",
    },
    { type: "p", texte: "Commençons par lever l'angoisse principale." },
    {
      type: "p",
      texte: "**Un échec à l'examen civique ne rejette pas votre demande.** Il signifie simplement que vous ne disposez pas encore de l'attestation exigée à l'appui de votre dossier. Ce n'est pas une décision défavorable de la préfecture, ce n'est pas une mention qui vous suivra, et cela n'entre pas en compte dans l'appréciation de votre dossier.",
    },
    { type: "p", texte: "**Ce qu'il faut avoir en tête :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "📄 L'attestation est une **pièce du dossier**, au même titre qu'un justificatif de domicile ou un diplôme de langue. Tant qu'elle manque, le dossier est incomplet, pas refusé.",
        "♾️ **L'attestation, une fois obtenue, n'a pas de durée de validité** ([source officielle](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/)). Vous ne jouez donc pas contre une horloge de péremption : vous jouez contre le calendrier de votre titre de séjour.",
        "🔁 Une attestation obtenue pour la **carte de résident (CR)** vaut attestation pour la **carte de séjour pluriannuelle (CSP)**. Un seul succès peut couvrir plusieurs démarches.",
      ],
    },
    { type: "p", texte: "**Rappel du barème** : pour savoir exactement ce qui vous a manqué :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**40 questions** : 28 questions de connaissance + 12 mises en situation",
        "**45 minutes** maximum, sur tablette ou ordinateur",
        "**32 bonnes réponses sur 40**, soit **80 %**",
      ],
    },
    {
      type: "p",
      texte: "Ce seuil de 80 % est élevé : il ne laisse que **8 erreurs**. Autrement dit, une lacune sur un seul thème suffit à faire basculer un candidat par ailleurs solide. C'est très exactement ce que montrent nos données (voir plus bas).",
    },
    {
      type: "encadre",
      texte: "💡 **Le bon état d'esprit :** vous n'avez pas « échoué à un concours ». Vous avez identifié, à moindres frais, les 8 à 12 questions qui vous manquent. C'est une information exploitable, à condition de savoir où elles se trouvent.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Combien de fois peut-on repasser ? Et sous quel délai ?",
      id: "combien-de-fois-repasser",
    },
    { type: "p", texte: "La réponse officielle est simple et généreuse." },
    {
      type: "p",
      texte: "**Nombre de tentatives : illimité.** Les candidats peuvent repasser l'examen **« à tout moment et autant de fois que nécessaire »**, selon le portail officiel de la formation civique du ministère de l'Intérieur. Aucun texte ne plafonne le nombre de passages.",
    },
    {
      type: "p",
      texte: "**Délai d'attente réglementaire : aucun.** Il n'existe **pas de délai minimum imposé** entre deux tentatives. En théorie, vous pourriez vous réinscrire dès le lendemain de votre échec.",
    },
    { type: "p", texte: "**En pratique, deux contraintes s'imposent malgré tout :**" },
    { type: "p", texte: "**1. La disponibilité des créneaux** ⏳" },
    {
      type: "p",
      texte: "Deux opérateurs seulement sont agréés pour toute la France, la **CCI Paris Île-de-France (CCIP)** et **France Éducation International (FEI)**. Résultat : les délais réels de réinscription tournent souvent autour de **4 à 8 semaines** selon le centre et la région. C'est cette contrainte-là, et non le règlement, qui fixe votre calendrier réel.",
    },
    { type: "p", texte: "**2. Le temps de préparation** 📚" },
    {
      type: "p",
      texte: "Se réinscrire immédiatement, sans avoir rien changé à sa préparation, revient le plus souvent à repayer pour le même résultat. Le seuil de 80 % ne pardonne pas les révisions approximatives.",
    },
    {
      type: "encadre",
      texte: "📅 **Le calcul à faire dès maintenant :** posez côte à côte la **date d'expiration de votre titre** et le **délai de créneau de votre centre**. Si l'écart est inférieur à trois mois, réinscrivez-vous **immédiatement** : vous réviserez pendant l'attente. Si vous avez de la marge, prenez trois semaines pour combler vos lacunes avant de réserver.",
      ton: "bleu",
    },
    {
      type: "p",
      texte: "Pour trouver le centre le plus proche et comparer les délais, consultez notre [liste des centres agréés](/articles/nouveaux-centres-test-civique-mai-2026-liste-complete) et notre guide d'[inscription pas à pas](/articles/inscription-test-civique-2026-ou-quand-comment-sinscrire).",
    },
    {
      type: "h2",
      texte: "Le coût réel d'un échec : ce que personne ne vous dit avant",
      id: "cout-reel-echec",
    },
    { type: "p", texte: "C'est la partie que les candidats découvrent trop tard." },
    {
      type: "p",
      texte: "**Chaque tentative se paie intégralement.** Il n'existe **pas de tarif réduit** pour un deuxième passage, ni de rattrapage inclus. Une nouvelle tentative = une nouvelle inscription = un nouveau paiement, de l'ordre de **65 à 90 €** selon le centre (le tarif est fixé par chaque organisme, il n'est pas national).",
    },
    { type: "p", texte: "**Le coût cumulé d'un parcours à trois tentatives :**" },
    {
      type: "tableau",
      entetes: ["Poste", "Une tentative", "Trois tentatives"],
      lignes: [
        ["💶 Inscription", "65 à 90 €", "**195 à 270 €**"],
        ["⏳ Délai de créneau", "4 à 8 semaines", "**3 à 6 mois**"],
        ["🚗 Déplacement au centre", "variable", "×3"],
      ],
    },
    {
      type: "p",
      texte: "**Mais le coût le plus lourd n'est pas financier, il est calendaire.** Trois tentatives espacées de six semaines, c'est **quatre à six mois** consommés. Sur un titre de séjour qui expire, ce délai peut suffire à vous faire basculer en situation irrégulière, avec les conséquences en chaîne que cela entraîne : difficultés d'emploi, rupture de droits sociaux, dépôt tardif pénalisé.",
    },
    {
      type: "p",
      texte: "**Ce qu'il faut en retirer :** l'écart de coût entre « je révise sérieusement trois semaines » et « je retente à l'aveugle » se chiffre en **centaines d'euros et en mois de procédure**. C'est précisément pour cette raison que cibler la bonne lacune, plutôt que tout réviser au hasard, change tout.",
    },
    {
      type: "p",
      texte: "Pour le détail des tarifs par centre, voir notre article [Prix du test civique 2026](/articles/prix-test-civique-2026-cout-tarif-titre-sejour-prefecture).",
    },
    {
      type: "encadre",
      texte: "⚠️ **Ne vous laissez pas vendre un « rattrapage garanti ».** Aucun organisme ne peut garantir votre réussite ni accélérer l'obtention d'un créneau officiel. Les seuls canaux d'inscription valables sont la CCIP et FEI. Méfiez-vous des offres qui promettent l'un ou l'autre.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "La seule vraie exception : la fraude ferme la porte pour deux ans",
      id: "exception-fraude",
    },
    { type: "p", texte: "Une situation, et une seule, transforme un échec en blocage durable." },
    {
      type: "p",
      texte: "**En cas de fraude ou de tentative de fraude détectée pendant l'épreuve, l'interdiction de repasser l'examen est de deux ans.** C'est la seule limitation réelle à la règle des tentatives illimitées, et elle est sévère, parce que deux ans d'immobilisation sur une procédure de séjour ou de nationalité, c'est considérable.",
    },
    { type: "p", texte: "**Ce qui peut être qualifié de fraude :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "📱 Utiliser un téléphone, une montre connectée ou tout appareil non autorisé pendant l'épreuve ;",
        "👥 Communiquer avec un autre candidat ou consulter un document ;",
        "🪪 Se présenter à la place d'un autre candidat, ou faire composer quelqu'un à sa place, les épreuves sont **nominatives** et l'identité est contrôlée à l'entrée ;",
        "📝 Tenter de sortir ou de photographier le contenu des questions.",
      ],
    },
    {
      type: "p",
      texte: "**Le réflexe à avoir le jour J :** déposez **tous** vos appareils électroniques là où le centre vous l'indique, avant d'entrer en salle. Un téléphone oublié dans une poche, même éteint et jamais consulté, peut être qualifié de tentative de fraude. Ce n'est pas un risque à prendre pour un objet dont vous n'avez pas besoin pendant 45 minutes.",
    },
    {
      type: "p",
      texte: "Notre guide [Documents à apporter le jour du test civique](/articles/documents-test-civique-2026-convocation-piece-identite) détaille ce que vous devez, et ne devez pas, avoir sur vous.",
    },
    {
      type: "encadre",
      texte: "🚨 **À retenir :** un échec honnête se rattrape en quelques semaines. Une fraude vous coûte **deux ans**. Le rapport bénéfice/risque ne penche jamais du bon côté.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Les thèmes qui font vraiment échouer : nos données sur 3 208 sessions",
      id: "themes-qui-font-echouer",
    },
    { type: "p", texte: "Voici la partie que vous ne trouverez nulle part ailleurs." },
    {
      type: "p",
      texte: "Nous avons analysé **3 208 sessions d'entraînement complétées** sur notre plateforme, réparties sur les grands thèmes du programme officiel. Pour chacun, nous avons mesuré le **score moyen** et la **part de candidats passant sous le seuil de 80 %** : le seuil réel de l'examen.",
    },
    {
      type: "tableau",
      entetes: ["Thème", "Sessions", "Score moyen", "Sous le seuil de 80 %"],
      lignes: [
        ["⚠️ **Principes et valeurs de la République**", "842", "**76,8 %**", "**39,8 %**"],
        ["Histoire, géographie et culture", "598", "82,3 %", "30,3 %"],
        ["Système institutionnel et politique", "441", "82,5 %", "27,7 %"],
        ["Symboles de la France", "383", "81,6 %", "26,1 %"],
        ["Droits et devoirs", "354", "83,5 %", "24,3 %"],
        ["Vivre dans la société française", "590", "84,6 %", "24,1 %"],
      ],
    },
    { type: "p", texte: "**Le résultat est contre-intuitif : et c'est tout l'intérêt.**" },
    {
      type: "p",
      texte: "Le thème le plus meurtrier est **« Principes et valeurs de la République »**, avec un score moyen de **76,8 %** : c'est le seul thème dont la moyenne se situe **sous le seuil de réussite**. Près de **4 candidats sur 10 (39,8 %)** y passent sous les 80 %, contre **moins d'1 sur 4** sur « Vivre dans la société française ».",
    },
    { type: "p", texte: "**Pourquoi ce thème piège autant de monde :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "🧠 **C'est celui que tout le monde croit maîtriser.** Liberté, Égalité, Fraternité, la laïcité, la devise, tout paraît familier, donc personne ne le révise sérieusement. C'est exactement là que se creuse l'écart.",
        "📖 **Les questions portent sur des définitions précises**, pas sur des impressions générales. Savoir que la France est une République laïque ne suffit pas : il faut savoir ce que la laïcité **implique concrètement**, ce qu'elle autorise et ce qu'elle interdit.",
        "🎭 **C'est le thème le plus représenté dans les 12 mises en situation.** Les scénarios pratiques de l'examen mobilisent en priorité les principes républicains appliqués à des cas concrets, pas la simple récitation.",
      ],
    },
    {
      type: "p",
      texte: "À l'inverse, « Vivre dans la société française » et « Droits et devoirs » sont les mieux réussis : ce sont des thèmes du quotidien, que les candidats vivent réellement et révisent par réflexe.",
    },
    {
      type: "encadre",
      texte: "🎯 **Votre plan d'action immédiat, si vous venez d'échouer :** ne recommencez pas tout le programme. Statistiquement, votre lacune est sur les **principes et valeurs de la République**. Attaquez ce thème en premier, sur des mises en situation plutôt que sur des fiches de définitions. C'est le meilleur rendement révision/points de tout le programme.",
      ton: "bleu",
    },
    {
      type: "p",
      texte: "Nos articles [Erreurs fréquentes au test civique : les pièges du QCM](/articles/erreurs-frequentes-test-civique-2026-pieges-qcm) et [Statistiques du test civique 2026](/articles/statistiques-test-civique-2026-taux-reussite-72-pourcent) complètent cette analyse.",
    },
    { type: "h2", texte: "Plan de rattrapage en 3 semaines", id: "plan-rattrapage-3-semaines" },
    {
      type: "p",
      texte: "Ce plan suppose que vous vous soyez déjà réinscrit (ou que vous le fassiez cette semaine), et que votre créneau tombe dans 4 à 8 semaines.",
    },
    { type: "p", texte: "**Semaine 1 : Diagnostiquer, pas réviser** 🔍" },
    {
      type: "p",
      texte: "Ne rouvrez aucun cours cette semaine. Faites d'abord **deux examens blancs complets** en conditions réelles : 40 questions, 45 minutes, chronomètre lancé, sans interruption. L'objectif n'est pas le score, c'est la **carte de vos lacunes**. Notez pour chaque erreur le thème concerné. À la fin de la semaine, vous saurez exactement où vous perdez vos 8 à 12 points.",
    },
    {
      type: "p",
      texte: "→ [Test civique gratuit en conditions réelles](/articles/test-civique-gratuit-en-ligne-2026-examen-blanc-entrainement-qcm)",
    },
    { type: "p", texte: "**Semaine 2 : Frapper là où ça fait mal** 🎯" },
    {
      type: "p",
      texte: "Consacrez **70 % de votre temps** à vos deux thèmes les plus faibles. Si vous n'avez pas de diagnostic clair, commencez par **« Principes et valeurs de la République »** : c'est statistiquement le plus probable. Travaillez sur des **mises en situation**, pas sur des listes à mémoriser, c'est le format qui pèse 12 questions sur 40.",
    },
    { type: "p", texte: "**Semaine 3 : Retrouver les conditions de l'examen** ⏱️" },
    {
      type: "p",
      texte: "Un examen blanc complet **tous les deux jours**, à la même heure que votre convocation si possible. Objectif : dépasser **35/40** de façon régulière, pas une seule fois par chance. Une marge de 3 points au-dessus du seuil, c'est ce qui absorbe le stress et les questions inattendues du jour J.",
    },
    { type: "p", texte: "**La veille** 🌙" },
    {
      type: "p",
      texte: "Aucune révision de fond. Relisez uniquement vos fiches d'erreurs. Vérifiez votre convocation, votre pièce d'identité, l'adresse et l'heure du centre. Couchez-vous tôt : 45 minutes de QCM chronométré demandent de la concentration, pas des connaissances de dernière minute.",
    },
    {
      type: "encadre",
      texte: "📈 **Le seuil à viser n'est pas 32/40, c'est 35/40.** Un candidat qui plafonne à 32 en entraînement passe sous la barre le jour de l'examen, où le stress coûte systématiquement deux à trois points. Visez 35 pour sécuriser 32.",
      ton: "bleu",
    },
    {
      type: "p",
      texte: "Voir aussi notre méthode complète : [Comment réussir le test civique du premier coup](/articles/comment-reussir-test-civique-premier-coup).",
    },
    { type: "h2", texte: "Et votre dossier, pendant ce temps ?", id: "dossier-pendant-ce-temps" },
    {
      type: "p",
      texte: "Question légitime : que devient votre démarche administrative pendant que vous repassez l'examen ?",
    },
    {
      type: "p",
      texte: "**Le principe :** l'attestation d'examen civique est une **pièce exigée à l'appui de votre demande**. Sans elle, votre dossier est **incomplet** : ce qui n'est pas la même chose qu'un refus, mais bloque l'instruction.",
    },
    { type: "p", texte: "**Les trois réflexes à avoir :**" },
    { type: "p", texte: "**1. Surveillez la date d'expiration de votre titre** 📅" },
    {
      type: "p",
      texte: "C'est votre véritable contrainte. Les fenêtres de dépôt sur l'ANEF sont strictes, généralement **entre 4 et 2 mois** avant l'échéance du titre, et un dépôt tardif peut entraîner une pénalité. Ne laissez pas l'attente d'un créneau d'examen vous faire manquer votre fenêtre de dépôt. Notre guide [Renouvellement de titre de séjour 2026](/articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais) détaille ces délais.",
    },
    { type: "p", texte: "**2. Documentez votre démarche** 📎" },
    {
      type: "p",
      texte: "Conservez la preuve de votre inscription à la prochaine session (confirmation, convocation, justificatif de paiement). Face à une préfecture, pouvoir démontrer que la démarche est **engagée** et datée vaut mieux qu'une simple déclaration d'intention.",
    },
    {
      type: "p",
      texte: "**3. Ne déposez pas un dossier volontairement incomplet en espérant régulariser plus tard** ⚠️",
    },
    {
      type: "p",
      texte: "Sauf indication contraire de votre préfecture, mieux vaut déposer un dossier complet. Un dossier incomplet peut être classé sans suite, vous faisant repartir de zéro, et perdre bien plus de temps que l'attente d'un créneau.",
    },
    {
      type: "encadre",
      texte: "💡 **Si votre titre expire pendant l'attente :** ne restez pas passif. Contactez votre préfecture par écrit en expliquant votre situation, preuve d'inscription à l'examen à l'appui. Une trace écrite datée est toujours utile en cas de contestation ultérieure.",
      ton: "bleu",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Récapitulons ce qui compte vraiment.\n**L'échec n'est pas éliminatoire.** Vous pouvez repasser l'examen civique **autant de fois que nécessaire**, sans délai réglementaire. Aucun texte ne vous ferme la porte, à une exception près : la **fraude**, qui vous interdit de repasser pendant **deux ans**.\n**Ce qui coûte cher, c'est le temps.** Chaque tentative, c'est **65 à 90 €** et **4 à 8 semaines** d'attente de créneau. Trois tentatives, c'est potentiellement **six mois** de procédure, sur un titre de séjour qui, lui, n'attend pas.\n**La lacune est probablement là où vous ne l'attendez pas.** Nos données sur **3 208 sessions** sont sans ambiguïté : le thème **« Principes et valeurs de la République »** est le seul dont le score moyen (**76,8 %**) tombe sous le seuil de réussite, et **près de 4 candidats sur 10** y échouent. C'est le thème que tout le monde croit maîtriser, et c'est précisément pour ça qu'il fait tomber.\nAlors ne repartez pas réviser tout le programme au hasard. **Diagnostiquez, ciblez, puis retentez.** Un candidat qui atteint régulièrement 35/40 en entraînement passe l'examen ; celui qui plafonne à 32 repaie une inscription.\n👉 **Commencez par le diagnostic.** Faites un [examen blanc gratuit en conditions réelles](/articles/test-civique-gratuit-en-ligne-2026-examen-blanc-entrainement-qcm) : 40 questions, 45 minutes, chronomètre. En une session, vous saurez exactement où sont vos 8 points manquants.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien de fois peut-on repasser l'examen civique ?",
      reponse: "Autant de fois que nécessaire. Le portail officiel de la formation civique indique que les candidats peuvent repasser l'examen « à tout moment et autant de fois que nécessaire ». Aucun texte ne plafonne le nombre de tentatives. La seule exception concerne la fraude, qui entraîne une interdiction de deux ans.",
    },
    {
      question: "Y a-t-il un délai d'attente entre deux tentatives ?",
      reponse: "Aucun délai minimum n'est imposé par la réglementation : vous pourriez théoriquement vous réinscrire dès le lendemain. En pratique, la disponibilité des créneaux dans les centres agréés (CCIP et FEI) impose souvent 4 à 8 semaines d'attente selon la région.",
    },
    {
      question: "Faut-il repayer pour repasser l'examen civique ?",
      reponse: "Oui, intégralement. Il n'existe pas de tarif réduit ni de rattrapage inclus : chaque tentative nécessite une nouvelle inscription et un nouveau paiement, de l'ordre de 65 à 90 € selon le centre (le tarif est fixé par chaque organisme, il n'est pas national).",
    },
    {
      question: "Un échec à l'examen civique fait-il rejeter ma demande de titre de séjour ?",
      reponse: "Non. L'attestation est une pièce du dossier : tant qu'elle manque, votre dossier est incomplet, mais il n'est pas refusé et l'échec n'est pas retenu contre vous. La vraie contrainte est calendaire, veillez à ne pas manquer votre fenêtre de dépôt sur l'ANEF pendant que vous attendez un créneau.",
    },
    {
      question: "Quel thème fait le plus échouer à l'examen civique ?",
      reponse: "D'après nos données sur 3 208 sessions d'entraînement complétées, c'est « Principes et valeurs de la République » : score moyen de 76,8 %, soit sous le seuil de réussite, avec 39,8 % des candidats sous les 80 %. C'est contre-intuitif, car c'est le thème que tout le monde croit maîtriser, les questions portent sur des définitions précises et il pèse lourd dans les 12 mises en situation.",
    },
    {
      question: "Mon attestation expire-t-elle si je mets du temps à obtenir mon titre ?",
      reponse: "Non. L'attestation d'examen civique n'a pas de durée de validité définie : une fois obtenue, elle est acquise. Une attestation délivrée pour la carte de résident (CR) vaut également attestation pour la carte de séjour pluriannuelle (CSP).",
    },
    {
      question: "Que se passe-t-il en cas de fraude à l'examen ?",
      reponse: "Une fraude ou une tentative de fraude détectée pendant l'épreuve entraîne une interdiction de repasser l'examen pendant deux ans. Attention : un téléphone oublié dans une poche, même éteint, peut être qualifié de tentative de fraude. Déposez tous vos appareils électroniques avant d'entrer en salle.",
    },
    {
      question: "Quel score viser en entraînement pour être sûr de réussir ?",
      reponse: "Visez 35/40, pas 32/40. Le seuil officiel est de 32 bonnes réponses sur 40 (80 %), mais le stress du jour J coûte généralement deux à trois points. Un candidat qui plafonne à 32 en entraînement passe souvent sous la barre le jour de l'examen ; une marge de 3 points sécurise le résultat.",
    },
  ],
  sources: [
    {
      titre: "Ministère de l'Intérieur : Informations générales sur l'examen civique",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/",
      type: "officiel",
      description: "Portail officiel : format (28 questions de connaissance et 12 mises en situation, 45 minutes), seuil de 32/40, possibilité de repasser « à tout moment et autant de fois que nécessaire », validité illimitée de l'attestation, opérateurs agréés CCIP et FEI.",
    },
    {
      titre: "Service-Public : Carte de séjour pluriannuelle et carte de résident : comment passer l'examen civique ?",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530?lang=fr",
      type: "officiel",
      description: "Fiche officielle : public concerné, dispenses, format de l'épreuve et conditions de délivrance de l'attestation.",
    },
    {
      titre: "Ministère de l'Intérieur : L'examen civique pour demander un titre de séjour",
      url: "https://www.immigration.interieur.gouv.fr/limmigration-en-france/sejour-des-etrangers/lexamen-civique-pour-demander-titre-de-sejour",
      type: "officiel",
      description: "Page de la Direction générale des étrangers en France sur la place de l'attestation dans le dossier de demande de titre.",
    },
    {
      titre: "Légifrance : Décret n° 2025-648 du 15 juillet 2025",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051925434",
      type: "juridique",
      description: "Texte instituant l'examen civique, applicable aux demandes déposées à compter du 1er janvier 2026.",
    },
    {
      titre: "Le Test Civique : Données internes de la plateforme",
      url: "https://www.testciviquefrance.fr/articles/statistiques-test-civique-2026-taux-reussite-72-pourcent",
      type: "article",
      description: "Analyse de 3 208 sessions d'entraînement complétées : score moyen et taux de passage sous le seuil de 80 % par thème du programme officiel.",
    },
  ],
};

export default article;
