/**
 * Articles additionnels 2026 - Partie 2
 * Entretien de naturalisation + Droit de vote et élections
 */

import { ArticleFullContent } from './articles-part1';

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 1 : Entretien de naturalisation 2026
// ─────────────────────────────────────────────────────────────────────────────
export const entretienNaturalisationContent: ArticleFullContent = {
  slug: 'entretien-naturalisation-2026-preparation-assimilation-prefecture',
  introduction: `L'**entretien d'assimilation en préfecture** est l'une des étapes les plus redoutées du parcours de naturalisation française. Contrairement au **test civique** qui évalue vos connaissances par QCM, l'entretien est un **échange oral direct** avec un agent de préfecture qui juge votre **assimilation à la communauté française**. Durée moyenne : **20 à 40 minutes** face à face. C'est lors de cet entretien que se joue souvent la décision finale. Ce guide complet vous explique tout : le déroulement, les **questions les plus posées**, les **critères d'évaluation**, les **erreurs fatales** à éviter, et un plan de préparation concret pour arriver confiant le jour J.`,

  sections: [
    {
      id: 'role-entretien-naturalisation',
      title: "Quel est le rôle de l'entretien dans le processus de naturalisation ?",
      content: `L'entretien d'assimilation est prévu par l'**article 21-24 du Code civil** et le **décret n° 93-1362 du 30 décembre 1993**. Il vise à évaluer votre **degré d'assimilation à la communauté française**.

**Ce que l'agent évalue lors de l'entretien :**

**1. Votre maîtrise de la langue française**
L'entretien se déroule intégralement en français. L'agent observe votre capacité à comprendre les questions, à formuler des réponses claires et à vous exprimer spontanément. Le niveau attendu est **B1 minimum** (oral).

**2. Votre connaissance des valeurs républicaines**
L'agent vérifie que vous comprenez et adhérez aux principes de la République : **laïcité**, **égalité femmes-hommes**, **liberté d'expression**, **fraternité**.

**3. Votre intégration dans la société française**
L'agent s'intéresse à votre vie quotidienne en France : travail, vie sociale, engagement associatif, scolarisation des enfants, relations avec le voisinage.

**4. Vos motivations pour devenir français**
Pourquoi souhaitez-vous acquérir la nationalité française ? L'agent cherche des motivations sincères et un **attachement réel** à la France.

**5. Votre connaissance de l'histoire et de la culture française**
Des questions sur l'histoire, la géographie, les institutions et la culture française peuvent être posées pour compléter l'évaluation du test civique.

→ L'entretien n'est **pas un examen de connaissances** mais une **évaluation globale** de votre intégration. Le naturel et la sincérité sont vos meilleurs atouts.`
    },
    {
      id: 'deroulement-entretien',
      title: "Déroulement concret de l'entretien : de la convocation à la sortie",
      content: `Voici ce qui vous attend, étape par étape, le jour de l'entretien en préfecture :

**1. La convocation**
Vous recevez une **lettre de convocation** de votre préfecture, généralement 2 à 4 semaines avant la date. La convocation précise :
- La date et l'heure de l'entretien
- L'adresse exacte du bureau
- Les documents à apporter
- Le nom de l'agent qui vous recevra (parfois)

**2. L'accueil en préfecture**
Arrivez **15 à 20 minutes en avance**. Présentez-vous à l'accueil avec votre convocation et votre pièce d'identité. Vous serez dirigé vers une salle d'attente.

**3. Le début de l'entretien**
L'agent vous accueille dans son bureau. Il commence généralement par vérifier votre identité et les documents de votre dossier. Il vous met à l'aise avec des questions simples sur votre parcours.

**4. Le cœur de l'entretien (20 à 30 minutes)**
L'agent pose des questions ouvertes sur :
- Votre parcours personnel et professionnel en France
- Votre vie quotidienne et vos habitudes
- Vos connaissances sur la France (histoire, institutions, valeurs)
- Vos motivations pour la naturalisation
- Votre compréhension des droits et devoirs du citoyen

**5. La fin de l'entretien**
L'agent vous demande si vous avez des questions. Il vous explique la suite de la procédure. Il ne communique **jamais sa décision** sur place — elle sera notifiée par courrier.

**Durée moyenne :** entre **20 et 40 minutes** selon les préfectures et la complexité de votre dossier.`
    },
    {
      id: 'questions-frequentes-entretien',
      title: "Les 30 questions les plus posées à l'entretien de naturalisation",
      content: `Voici les questions que les agents de préfecture posent le plus fréquemment, classées par thème :

**Questions sur votre parcours personnel**
- « Présentez-vous : d'où venez-vous, quand êtes-vous arrivé en France ? »
- « Pourquoi avez-vous quitté votre pays d'origine ? »
- « Quel est votre parcours professionnel en France ? »
- « Êtes-vous marié(e) ? Avez-vous des enfants ? Sont-ils scolarisés ? »
- « Où habitez-vous ? Depuis combien de temps ? »

**Questions sur vos motivations**
- « Pourquoi souhaitez-vous devenir français ? »
- « Qu'est-ce que la France représente pour vous ? »
- « Que signifie pour vous être citoyen français ? »
- « Retournez-vous souvent dans votre pays d'origine ? »
- « Envisagez-vous de rester en France définitivement ? »

**Questions sur les valeurs républicaines**
- « Quelle est la devise de la République française ? »
- « Que signifie la laïcité pour vous ? »
- « Que pensez-vous de l'égalité entre les femmes et les hommes ? »
- « Est-ce que la liberté d'expression a des limites ? Lesquelles ? »
- « Qu'est-ce que la fraternité au quotidien ? »

**Questions sur les institutions**
- « Qui est le Président de la République ? »
- « Qui est le Premier ministre actuel ? »
- « Quel est le rôle de l'Assemblée nationale ? »
- « Qui fait les lois en France ? »
- « Qui est le maire de votre ville ? »

**Questions sur l'histoire et la culture**
- « Quelle est la date de la Révolution française ? »
- « Connaissez-vous des personnages célèbres de l'histoire de France ? »
- « Pourquoi célèbre-t-on le 14 Juillet ? »
- « Citez un monument emblématique de la France »
- « Quelle est la fête nationale française ? »

**Questions sur votre vie quotidienne**
- « Suivez-vous l'actualité française ? Comment ? »
- « Participez-vous à des activités associatives ou sportives ? »
- « Avez-vous des amis français ? »
- « Comment se passent vos relations avec vos voisins ? »
- « Voteriez-vous si vous étiez français ? Pour quel type d'élection ? »

→ **Conseil clé** : Préparez des réponses sincères et personnelles. L'agent repère immédiatement les réponses récitées par cœur.`
    },
    {
      id: 'criteres-evaluation',
      title: "Les critères d'évaluation utilisés par l'agent de préfecture",
      content: `L'agent rédige un **rapport d'assimilation** qui sera transmis au ministère de l'Intérieur. Ce rapport évalue plusieurs critères :

**Grille d'évaluation type :**

| Critère | Ce que l'agent observe | Note indicative |
|---|---|---|
| **Langue française** | Fluidité, compréhension, vocabulaire | Favorable / Défavorable |
| **Connaissance des valeurs** | Adhésion aux principes républicains | Favorable / Défavorable |
| **Intégration sociale** | Vie quotidienne, relations, activités | Favorable / Défavorable |
| **Intégration professionnelle** | Emploi stable, autonomie financière | Favorable / Défavorable |
| **Motivations** | Sincérité, attachement à la France | Favorable / Défavorable |
| **Connaissances générales** | Histoire, géographie, institutions | Favorable / Défavorable |

**Ce qui pèse le plus dans l'évaluation :**
- La **spontanéité** de vos réponses (pas récitées)
- La **cohérence** entre votre dossier écrit et vos déclarations orales
- Votre **attitude générale** : respect, ouverture, calme
- Des preuves concrètes d'intégration : engagement associatif, vie sociale active, connaissance de votre environnement local

**Ce qui peut déclencher un avis défavorable :**
- Incapacité à soutenir une conversation en français
- Méconnaissance totale des valeurs de la République
- Réponses incohérentes ou contradictoires avec le dossier
- Refus explicite de certains principes républicains (égalité femmes-hommes, laïcité)
- Absence de projet de vie en France`
    },
    {
      id: 'erreurs-fatales-entretien',
      title: "Les 10 erreurs fatales à éviter absolument",
      content: `Des milliers de candidats voient leur demande reportée ou refusée à cause de ces erreurs :

**1. Arriver en retard**
Un retard, même de quelques minutes, donne une très mauvaise impression. Arrivez **15-20 minutes en avance**.

**2. Réciter des réponses apprises par cœur**
L'agent le détecte immédiatement. Vos réponses doivent être **personnelles et naturelles**. Comprenez les concepts, ne les mémorisez pas mot pour mot.

**3. Ne pas connaître son propre dossier**
L'agent a votre dossier sous les yeux. Si vos réponses orales contredisent vos documents écrits, c'est un signal d'alerte majeur.

**4. Avouer ne pas suivre l'actualité française**
C'est un indicateur fort de non-intégration. Suivez les actualités dans les semaines précédant l'entretien : journal télévisé, radio, presse écrite.

**5. Ne pas connaître le nom du Président ou du maire de sa ville**
Ces questions basiques sont quasi systématiques. Ne pas y répondre est perçu comme un manque flagrant d'intérêt.

**6. Hésiter sur les valeurs républicaines**
La laïcité, l'égalité femmes-hommes, la liberté d'expression : ce sont des **piliers non négociables**. Toute ambiguïté est rédhibitoire.

**7. Montrer du stress excessif ou de l'agressivité**
L'entretien n'est pas un interrogatoire. L'agent cherche un échange cordial. Restez calme, souriant et respectueux.

**8. Amener un interprète ou un accompagnant**
L'entretien se déroule **impérativement en français**, seul(e) face à l'agent. Aucun accompagnant n'est autorisé dans le bureau.

**9. Ne pas préparer ses motivations**
« Pourquoi voulez-vous devenir français ? » est LA question centrale. Une réponse vague (« pour les papiers », « pour le travail ») est insuffisante.

**10. Ignorer son environnement local**
L'agent peut demander le nom de votre département, votre région, votre commune. Ne pas le savoir trahit un manque d'ancrage.

→ La préparation est la clé. En évitant ces erreurs, vous maximisez vos chances d'obtenir un **avis favorable**.`
    },
    {
      id: 'plan-preparation-entretien',
      title: "Plan de préparation en 4 semaines avant l'entretien",
      content: `Voici un plan structuré pour arriver serein et confiant à votre entretien d'assimilation :

**Semaine 1 : Rassemblez vos connaissances de base**
- Révisez les **symboles de la République** : devise, drapeau, Marianne, hymne
- Apprenez le nom du **Président de la République**, du **Premier ministre** et du **maire de votre ville**
- Révisez les **5 thématiques du test civique** (les mêmes sujets sont abordés à l'entretien)
- Commencez à suivre l'actualité française quotidiennement (20 minutes/jour)

**Semaine 2 : Préparez vos réponses personnelles**
- Rédigez votre **parcours personnel** : arrivée en France, études, emplois, vie familiale
- Formulez vos **motivations** pour la naturalisation (3 raisons sincères et concrètes)
- Préparez des exemples concrets de votre **intégration** : activités, amis, engagement
- Entraînez-vous à répondre **à voix haute** pendant 15 minutes par jour

**Semaine 3 : Simulez des entretiens**
- Demandez à un(e) ami(e) francophone de vous poser les **30 questions types**
- Enregistrez-vous pour évaluer votre **fluidité** et votre **clarté**
- Identifiez les questions qui vous mettent mal à l'aise et travaillez-les
- Révisez votre **dossier de naturalisation** pour assurer la cohérence

**Semaine 4 : Derniers réglages**
- Préparez vos **vêtements** (tenue correcte, sobre et soignée)
- Vérifiez le **trajet** jusqu'à la préfecture (repérez l'itinéraire, le parking, le bureau)
- Relisez une dernière fois les **valeurs républicaines** et l'**actualité récente**
- La veille : reposez-vous, mangez bien, préparez vos documents

→ En combinant cet entretien avec vos révisions pour le **test civique**, vous doublez votre efficacité. Entraînez-vous sur [LeTestCivique.fr](/dashboard) pour consolider vos connaissances.`
    },
    {
      id: 'lien-test-civique-entretien',
      title: "Entretien d'assimilation et test civique : deux épreuves complémentaires",
      content: `Depuis le **décret n° 2025-647 du 15 juillet 2025**, le parcours de naturalisation comprend **deux évaluations distinctes** :

| | Test civique | Entretien d'assimilation |
|---|---|---|
| **Format** | QCM (40 questions écrites) | Échange oral (20-40 min) |
| **Lieu** | Centre agréé (CCI, etc.) | Préfecture |
| **Seuil de réussite** | 32/40 (80 %) | Avis favorable de l'agent |
| **Ce qui est évalué** | Connaissances factuelles | Intégration globale |
| **Type de questions** | Fermées (choix multiples) | Ouvertes (conversation) |
| **Langue** | Compréhension écrite | Expression orale spontanée |
| **Résultat** | Attestation de réussite | Rapport d'assimilation |

**Pourquoi les préparer ensemble ?**
Les deux épreuves couvrent les **mêmes thématiques** : valeurs républicaines, institutions, droits et devoirs, histoire, géographie. Ce que vous révisez pour le test civique vous sert directement à l'entretien, et inversement.

**La différence clé :**
- Le test civique évalue des **connaissances précises** (dates, chiffres, noms)
- L'entretien évalue votre **compréhension profonde** et votre **vécu personnel**

→ La meilleure stratégie : passez d'abord le test civique pour solidifier vos connaissances, puis préparez l'entretien en ajoutant la dimension personnelle et l'expression orale.`
    },
    {
      id: 'apres-entretien',
      title: "Après l'entretien : suite de la procédure et délais",
      content: `Vous avez passé l'entretien. Voici ce qui se passe ensuite :

**Le rapport de l'agent**
L'agent de préfecture rédige un **rapport d'assimilation** qui résume ses observations et formule un avis : favorable, réservé ou défavorable. Ce rapport est transmis au **ministère de l'Intérieur**.

**L'instruction ministérielle**
Le ministère de l'Intérieur examine l'ensemble du dossier :
- Rapport d'assimilation
- Attestation de réussite au test civique
- Attestation de niveau de français B1
- Enquête administrative (casier judiciaire, fichiers)
- Vérification des conditions de résidence et de ressources

**Les délais standards**
- Réponse après entretien : **6 à 18 mois** en moyenne
- Délai total (dépôt initial → décision) : **18 à 24 mois**
- Certains dossiers complexes : jusqu'à **3 ans**

**Les issues possibles :**
- **Accord** : Décret de naturalisation publié au Journal officiel → Vous êtes français !
- **Ajournement** : Le ministère reporte sa décision et demande des compléments
- **Refus** : La demande est rejetée avec motifs (recours possible)

**En cas d'avis favorable :**
Vous recevez une convocation pour la **cérémonie d'accueil dans la citoyenneté française**, organisée par la préfecture. C'est un moment solennel où vous recevez votre décret de naturalisation et prononcez l'engagement républicain.

**En cas de refus :**
- Vous pouvez former un **recours gracieux** auprès du ministère (dans les 2 mois)
- Puis un **recours contentieux** devant le tribunal administratif de Nantes (dans les 2 mois suivants)
- Il est recommandé de consulter un avocat spécialisé en droit des étrangers`
    }
  ],

  conclusion: `L'**entretien de naturalisation** est un moment décisif de votre parcours vers la nationalité française. Contrairement au test civique qui évalue des connaissances objectives, l'entretien mesure votre **intégration réelle** dans la société française. La clé de la réussite : une préparation méthodique combinant révisions des connaissances civiques, préparation de vos réponses personnelles, et entraînement à l'expression orale. Commencez dès maintenant à consolider vos bases sur **LeTestCivique.fr** — chaque connaissance acquise pour le test civique est un atout pour votre entretien.`,

  faq: [
    {
      question: "Combien de temps dure l'entretien de naturalisation en préfecture ?",
      answer: "L'entretien dure en moyenne 20 à 40 minutes. La durée dépend de la préfecture, de la complexité de votre dossier et de la fluidité de la conversation. Certains entretiens peuvent durer jusqu'à 1 heure dans les cas particuliers."
    },
    {
      question: "Peut-on se faire accompagner à l'entretien de naturalisation ?",
      answer: "Non. L'entretien se déroule impérativement seul(e) face à l'agent de préfecture. Aucun accompagnant, interprète ou avocat n'est autorisé dans le bureau pendant l'entretien. La maîtrise du français est évaluée directement."
    },
    {
      question: "Quels documents apporter à l'entretien de naturalisation ?",
      answer: "Apportez votre convocation, une pièce d'identité en cours de validité (passeport ou titre de séjour), et éventuellement une copie de votre dossier de naturalisation. Certaines préfectures demandent des documents complémentaires précisés dans la convocation."
    },
    {
      question: "L'entretien de naturalisation est-il le même que le test civique ?",
      answer: "Non, ce sont deux épreuves différentes. Le test civique est un QCM écrit de 40 questions passé dans un centre agréé. L'entretien est un échange oral en préfecture qui évalue votre intégration globale. Les deux sont obligatoires pour la naturalisation."
    },
    {
      question: "Que se passe-t-il si l'entretien se passe mal ?",
      answer: "Si l'agent émet un avis défavorable, cela ne signifie pas automatiquement un refus de naturalisation. Le ministère de l'Intérieur examine l'ensemble du dossier. Cependant, un mauvais entretien réduit considérablement vos chances. En cas de refus, vous pouvez déposer un recours."
    },
    {
      question: "Peut-on repasser l'entretien de naturalisation ?",
      answer: "Il n'existe pas de « repassage » de l'entretien à proprement parler. Si votre demande est refusée ou ajournée, vous devez redéposer un nouveau dossier complet de naturalisation, ce qui inclut un nouvel entretien."
    },
    {
      question: "L'agent pose-t-il toujours les mêmes questions ?",
      answer: "Il n'y a pas de liste fixe officielle. Les questions varient selon l'agent, la préfecture et votre profil. Cependant, les thèmes sont récurrents : parcours personnel, motivations, valeurs républicaines, connaissances sur la France, vie quotidienne."
    },
    {
      question: "Faut-il s'habiller de façon particulière pour l'entretien ?",
      answer: "Il n'y a pas de code vestimentaire officiel, mais une tenue correcte et soignée est recommandée. Cela montre du respect pour l'institution et contribue à une bonne première impression. Évitez les tenues trop décontractées."
    },
    {
      question: "Quel niveau de français faut-il pour l'entretien ?",
      answer: "Le niveau minimum attendu est B1 oral du CECRL : capacité à comprendre les questions, s'exprimer de façon claire sur des sujets familiers, et donner son opinion. Vous devez déjà avoir obtenu votre attestation B1 avant l'entretien."
    },
    {
      question: "Combien de temps après l'entretien reçoit-on la réponse ?",
      answer: "Le délai moyen entre l'entretien et la réponse du ministère est de 6 à 18 mois. Certains dossiers peuvent prendre jusqu'à 2-3 ans. Vous pouvez suivre l'avancement de votre dossier sur la plateforme ANEF."
    }
  ],

  keywords: [
    'entretien naturalisation', 'entretien assimilation préfecture', 'entretien naturalisation 2026',
    'questions entretien naturalisation', 'entretien préfecture naturalisation',
    'préparation entretien naturalisation', 'entretien assimilation france',
    'rapport assimilation naturalisation', 'questions posées entretien naturalisation',
    'comment réussir entretien naturalisation', 'entretien préfecture devenir français',
    'critères évaluation entretien naturalisation', 'avis favorable naturalisation',
    'durée entretien naturalisation', 'test civique et entretien naturalisation',
    'naturalisation française 2026', 'devenir français entretien',
    'erreurs entretien naturalisation', 'conseils entretien naturalisation',
    'LeTestCivique.fr', 'examen civique naturalisation'
  ],
};


// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 2 : Droit de vote et élections en France 2026
// ─────────────────────────────────────────────────────────────────────────────
export const droitVoteElectionsContent: ArticleFullContent = {
  slug: 'droit-de-vote-elections-france-2026-guide-citoyen',
  introduction: `Le **droit de vote** est l'un des droits fondamentaux du citoyen français et une thématique majeure du **test civique de naturalisation**. Pourtant, beaucoup de candidats et de nouveaux citoyens méconnaissent les rouages du système électoral français : comment s'inscrire sur les listes, quels sont les différents types d'élections, comment se déroule un scrutin, et quel est le rôle du citoyen dans la démocratie française. Ce guide complet vous donne toutes les clés pour **comprendre le système électoral**, **exercer votre droit de vote** et **réussir les questions du test civique** sur cette thématique essentielle.`,

  sections: [
    {
      id: 'droit-vote-fondement',
      title: "Le droit de vote en France : un pilier de la démocratie",
      content: `Le droit de vote est un **droit fondamental** inscrit dans la **Constitution de la Ve République** (article 3). Il garantit la souveraineté du peuple français.

**Les grands principes du suffrage en France :**

**1. Le suffrage est universel**
Tout citoyen français majeur (18 ans) dispose du droit de vote, sans distinction de sexe, de revenu, d'éducation ou d'origine. Ce n'a pas toujours été le cas :
- **1848** : Suffrage universel masculin (abolition du suffrage censitaire)
- **1944** : Droit de vote des femmes (ordonnance du 21 avril 1944)
- **1974** : Abaissement de l'âge de vote de 21 à 18 ans
- **1992** : Droit de vote des citoyens européens aux élections municipales et européennes

**2. Le vote est libre et secret**
Chaque électeur vote dans un **isoloir** et place son bulletin dans une **enveloppe** avant de le déposer dans l'**urne**. Le vote est personnel : nul ne peut voter à votre place (sauf procuration).

**3. Le vote n'est pas obligatoire en France**
Contrairement à certains pays (Belgique, Luxembourg), le vote n'est **pas obligatoire** en France. C'est un **droit** et un **devoir civique**, mais l'abstention n'est pas sanctionnée par la loi.

**4. Le vote est égalitaire**
Chaque voix a la même valeur : **un citoyen = une voix**. Ce principe d'égalité est au cœur de la devise républicaine.

→ **Pour le test civique** : Les questions sur le droit de vote portent souvent sur l'âge requis (18 ans), le caractère non obligatoire du vote, et les grandes dates du suffrage universel.`
    },
    {
      id: 'types-elections',
      title: "Les différents types d'élections en France",
      content: `La France organise **6 types d'élections** auxquelles les citoyens sont appelés à participer :

**1. L'élection présidentielle** 🏛️
- **Fréquence** : tous les 5 ans (quinquennat depuis 2000)
- **Mode de scrutin** : suffrage universel direct, à 2 tours
- **Qui élit-on ?** : Le Président de la République
- **Particularité** : Pour être élu au 1er tour, il faut obtenir la majorité absolue (> 50 %). Sinon, les 2 candidats arrivés en tête s'affrontent au 2e tour
- **Dernière** : 2022 → Prochaine : 2027

**2. Les élections législatives** 📜
- **Fréquence** : tous les 5 ans (après la présidentielle)
- **Mode de scrutin** : uninominal à 2 tours, par circonscription
- **Qui élit-on ?** : Les 577 députés de l'Assemblée nationale
- **Particularité** : Chaque département est divisé en circonscriptions. Chaque circonscription élit un député

**3. Les élections sénatoriales** 🏛️
- **Fréquence** : renouvellement par moitié tous les 3 ans
- **Mode de scrutin** : suffrage universel **indirect** (les sénateurs sont élus par les grands électeurs : maires, conseillers municipaux, etc.)
- **Qui élit-on ?** : Les 348 sénateurs
- **Particularité** : Le citoyen ordinaire ne vote **pas** directement pour les sénateurs

**4. Les élections municipales** 🏘️
- **Fréquence** : tous les 6 ans
- **Mode de scrutin** : scrutin de liste à 2 tours (communes > 1 000 hab.)
- **Qui élit-on ?** : Les conseillers municipaux (qui élisent ensuite le maire)
- **Particularité** : Les citoyens de l'UE résidant en France peuvent voter aux municipales

**5. Les élections départementales** 🗺️
- **Fréquence** : tous les 6 ans
- **Mode de scrutin** : binominal à 2 tours (un homme + une femme par canton)
- **Qui élit-on ?** : Les conseillers départementaux
- **Particularité** : Scrutin paritaire obligatoire

**6. Les élections européennes** 🇪🇺
- **Fréquence** : tous les 5 ans
- **Mode de scrutin** : proportionnel de liste, à un seul tour
- **Qui élit-on ?** : Les députés français au Parlement européen (81 sièges)
- **Particularité** : Les citoyens de l'UE résidant en France peuvent voter

→ **Pour le test civique** : Connaître le nombre de députés (577), de sénateurs (348), la durée du mandat présidentiel (5 ans) et le mode de scrutin (direct/indirect) est essentiel.`
    },
    {
      id: 'inscription-listes-electorales',
      title: "Comment s'inscrire sur les listes électorales ?",
      content: `Pour voter, vous devez être **inscrit sur les listes électorales** de votre commune. Voici les démarches :

**Qui peut s'inscrire ?**
- Tout citoyen français de 18 ans ou plus
- Les citoyens européens résidant en France (pour les municipales et européennes uniquement)
- Les personnes naturalisées — dès réception du **décret de naturalisation**

**Les 3 moyens de s'inscrire :**

**1. En ligne sur Service-Public.fr**
- Rendez-vous sur le site officiel service-public.fr
- Remplissez le formulaire d'inscription
- Joignez un justificatif d'identité et un justificatif de domicile
- Réponse par courrier ou par mail

**2. En mairie**
- Présentez-vous au guichet de votre mairie
- Apportez votre carte d'identité ou passeport + justificatif de domicile
- L'inscription est immédiate

**3. Par courrier**
- Envoyez le formulaire CERFA n° 12669 à la mairie de votre commune
- Joignez les photocopies de vos justificatifs

**Dates limites d'inscription :**
- Inscription possible **toute l'année** depuis la réforme de 2019
- Pour voter à une élection, vous devez être inscrit au moins **6 semaines avant** le scrutin
- Les jeunes de 18 ans sont inscrits **automatiquement** grâce au recensement

**Après naturalisation :**
Si vous venez d'être naturalisé, vous êtes normalement inscrit d'office. Vérifiez toutefois auprès de votre mairie que vous figurez bien sur les listes.

→ **Pour le test civique** : La question « Le vote est-il obligatoire en France ? » revient très souvent. La réponse est **non**, mais c'est un devoir civique fortement encouragé.`
    },
    {
      id: 'deroulement-scrutin',
      title: "Comment se déroule un jour d'élection en France ?",
      content: `Le jour du scrutin est un moment important de la vie démocratique. Voici son déroulement :

**Avant le vote**
- Le scrutin a lieu le **dimanche**, de 8h à 18h (19h ou 20h dans les grandes villes)
- Vous recevez votre **carte électorale** par courrier (elle n'est pas obligatoire pour voter, mais recommandée)
- Les **professions de foi** et **bulletins de vote** des candidats sont envoyés à votre domicile

**Le jour du vote — étape par étape**

**1. Rendez-vous à votre bureau de vote**
Votre bureau de vote est indiqué sur votre carte électorale. Présentez-vous avec une **pièce d'identité** (obligatoire dans les communes de 1 000 habitants et plus).

**2. Prenez les bulletins de vote et une enveloppe**
Sur la table à l'entrée du bureau, vous trouvez les bulletins de tous les candidats et les enveloppes officielles. Vous devez prendre **au moins deux bulletins** différents (pour garantir le secret du vote).

**3. Passez dans l'isoloir**
Le passage par l'isoloir est **obligatoire**. C'est là que vous glissez le bulletin de votre choix dans l'enveloppe, à l'abri des regards.

**4. Votez**
Présentez-vous devant l'urne. L'assesseur vérifie votre identité et vous annonce : « A voté ! ». Vous glissez votre enveloppe dans l'urne.

**5. Signez**
Émargez (signez) en face de votre nom sur la liste d'émargement. Cette signature prouve que vous avez voté.

**Le dépouillement**
- À la fermeture du bureau, les assesseurs ouvrent l'urne et comptent les bulletins
- Le dépouillement est **public** : tout citoyen peut y assister
- Les résultats sont transmis à la préfecture

**La procuration**
Si vous ne pouvez pas vous déplacer, vous pouvez donner **procuration** à un autre électeur inscrit dans la même commune. La procuration se fait en ligne, au tribunal ou au commissariat/gendarmerie.`
    },
    {
      id: 'referendum',
      title: "Le référendum : quand le peuple décide directement",
      content: `En plus des élections, les citoyens français peuvent être consultés par **référendum**. C'est un outil de **démocratie directe** prévu par la Constitution.

**Qu'est-ce qu'un référendum ?**
Le référendum est une consultation populaire où les citoyens répondent par **OUI** ou **NON** à une question posée par le Président de la République ou le Parlement.

**Les types de référendum en France :**

**1. Référendum législatif (article 11 de la Constitution)**
- Organisé par le **Président de la République** sur proposition du Gouvernement ou du Parlement
- Porte sur un projet de loi relatif à l'organisation des pouvoirs publics, aux réformes économiques ou sociales, ou à la ratification d'un traité
- Exemple : Référendum sur le quinquennat (2000)

**2. Référendum constituant (article 89)**
- Organisé pour modifier la **Constitution**
- Le projet de révision doit d'abord être voté dans les mêmes termes par l'Assemblée nationale et le Sénat

**3. Référendum d'initiative partagée (article 11, alinéa 3)**
- Introduit par la réforme constitutionnelle de 2008
- Peut être déclenché par **1/5 des parlementaires** soutenu par **1/10 des électeurs inscrits** (environ 4,8 millions de signatures)
- N'a jamais été utilisé avec succès à ce jour

**Les référendums historiques :**
- **1958** : Adoption de la Constitution de la Ve République (**79,2 % de OUI**)
- **1962** : Élection du Président au suffrage universel direct (**62,3 % de OUI**)
- **1992** : Ratification du Traité de Maastricht (**51,0 % de OUI**)
- **2000** : Passage au quinquennat (**73,2 % de OUI**)
- **2005** : Constitution européenne (**54,7 % de NON**)

→ **Pour le test civique** : On peut vous demander ce qu'est un référendum, qui peut l'organiser, et citer un exemple historique. Le référendum de 1958 et celui de 2000 sont les plus fréquemment cités.`
    },
    {
      id: 'devoir-civique-abstention',
      title: "Le vote comme devoir civique : comprendre l'abstention et l'engagement",
      content: `Si le vote n'est pas obligatoire en France, il est considéré comme un **devoir civique fondamental**. Comprendre cette distinction est essentiel pour le test civique et pour votre vie de citoyen.

**Pourquoi voter est un devoir civique ?**
- Le droit de vote a été **conquis par des luttes** : Révolution de 1789, suffrage universel en 1848, vote des femmes en 1944
- C'est la **seule façon légale et directe** pour un citoyen d'influencer les décisions politiques
- L'abstention affaiblit la **légitimité démocratique** des élus

**L'abstention en France — un phénomène préoccupant :**
- L'abstention aux élections législatives a dépassé les **50 %** ces dernières années
- Les élections municipales restent les plus mobilisatrices (surtout dans les petites communes)
- L'élection présidentielle reste l'élection avec le plus fort taux de participation

**Le vote blanc et le vote nul :**
- **Vote blanc** : Vous déposez une enveloppe vide ou un bulletin blanc. Depuis 2014, les votes blancs sont **comptabilisés** séparément mais ne comptent pas dans les suffrages exprimés
- **Vote nul** : Bulletin déchiré, annoté, ou portant un signe distinctif → Non comptabilisé

**Au-delà du vote — l'engagement citoyen :**
Le vote n'est qu'une des formes de l'engagement civique. Vous pouvez aussi :
- **Adhérer à un parti politique** ou un syndicat
- **Participer à la vie associative** de votre commune
- **Être assesseur** ou président de bureau de vote le jour des élections
- **Signer des pétitions** et participer aux **consultations publiques**
- **Se présenter comme candidat** aux élections

→ **Pour le test civique** : La distinction entre vote obligatoire (non) et devoir civique (oui) est l'un des **pièges les plus fréquents** du QCM. De même, savoir que le vote blanc est comptabilisé depuis 2014 mais ne change pas le résultat.`
    },
    {
      id: 'questions-test-civique-vote',
      title: "Les questions du test civique sur le droit de vote : ce qu'il faut retenir",
      content: `Voici une **fiche de révision synthétique** avec les informations essentielles à connaître pour le test civique sur cette thématique :

**Chiffres et dates clés :**
- Âge minimum pour voter : **18 ans**
- Suffrage universel masculin : **1848**
- Droit de vote des femmes : **1944** (premières élections en 1945)
- Abaissement à 18 ans : **1974**
- Mandat présidentiel : **5 ans** (quinquennat depuis 2000)
- Nombre de députés : **577**
- Nombre de sénateurs : **348**
- Vote blanc comptabilisé : depuis **2014**

**Les distinctions essentielles :**
- Suffrage **direct** : le citoyen vote directement pour le candidat (Président, députés, maires, conseillers départementaux, députés européens)
- Suffrage **indirect** : ce sont des grands électeurs qui votent (sénateurs)
- Vote **obligatoire** : NON en France (contrairement à la Belgique)
- Vote **secret** : OUI, passage par l'isoloir obligatoire

**Questions pièges fréquentes :**
- « Le vote est-il obligatoire en France ? » → **Non**, c'est un devoir civique
- « Les étrangers peuvent-ils voter en France ? » → **Les citoyens de l'UE** peuvent voter aux municipales et européennes. Les étrangers non-européens **ne peuvent pas voter** (sauf après naturalisation)
- « Les sénateurs sont-ils élus au suffrage direct ? » → **Non**, au suffrage indirect
- « À quel âge peut-on se présenter à l'élection présidentielle ? » → **18 ans** (depuis 2011)
- « Combien de tours comporte l'élection présidentielle ? » → **2 tours** maximum

→ Entraînez-vous sur ces questions avec les **QCM thématiques** disponibles sur [LeTestCivique.fr](/dashboard).`
    }
  ],

  conclusion: `Le **droit de vote** est bien plus qu'une formalité : c'est le **pilier de la démocratie française** et un thème central du test civique de naturalisation. En comprenant le fonctionnement du système électoral — des élections présidentielles aux municipales, du suffrage direct au référendum — vous vous préparez efficacement au test civique tout en acquérant les connaissances essentielles pour exercer pleinement votre citoyenneté. Après votre naturalisation, voter sera votre premier acte de citoyen français. Préparez-vous dès maintenant sur **LeTestCivique.fr** pour maîtriser cette thématique et toutes les autres.`,

  faq: [
    {
      question: "Le vote est-il obligatoire en France ?",
      answer: "Non, le vote n'est pas obligatoire en France. C'est un droit et un devoir civique, mais l'abstention n'est pas sanctionnée par la loi. Cependant, il est fortement encouragé : voter est considéré comme un acte fondamental de la citoyenneté."
    },
    {
      question: "À quel âge peut-on voter en France ?",
      answer: "Le droit de vote est acquis à 18 ans, l'âge de la majorité civile en France. Depuis 1974 (abaissement de 21 à 18 ans). Les jeunes de 18 ans sont inscrits automatiquement sur les listes électorales."
    },
    {
      question: "Les étrangers peuvent-ils voter en France ?",
      answer: "Les citoyens de l'Union européenne résidant en France peuvent voter aux élections municipales et européennes. Les étrangers non-européens ne peuvent pas voter, sauf après avoir obtenu la nationalité française par naturalisation."
    },
    {
      question: "Comment s'inscrire sur les listes électorales après naturalisation ?",
      answer: "Après naturalisation, vous êtes normalement inscrit d'office sur les listes électorales. Vérifiez toutefois auprès de votre mairie. Vous pouvez aussi vous inscrire en ligne sur service-public.fr, en mairie ou par courrier."
    },
    {
      question: "Quelle est la différence entre suffrage direct et indirect ?",
      answer: "Le suffrage direct signifie que les citoyens votent directement pour le candidat (Président, députés, maires). Le suffrage indirect signifie que ce sont des grands électeurs qui votent au nom des citoyens (cas des sénateurs)."
    },
    {
      question: "Qu'est-ce qu'un référendum en France ?",
      answer: "Un référendum est une consultation populaire où les citoyens répondent par OUI ou NON à une question posée par le Président ou le Parlement. Il peut porter sur un projet de loi ou une révision constitutionnelle."
    },
    {
      question: "Combien y a-t-il de députés et de sénateurs en France ?",
      answer: "L'Assemblée nationale compte 577 députés élus au suffrage direct. Le Sénat compte 348 sénateurs élus au suffrage indirect. Ensemble, ils forment le Parlement français qui vote les lois."
    },
    {
      question: "Le vote blanc est-il comptabilisé en France ?",
      answer: "Depuis la loi du 21 février 2014, les votes blancs sont comptabilisés séparément dans les résultats. Cependant, ils ne sont pas pris en compte dans les suffrages exprimés et n'ont donc aucun effet sur le résultat de l'élection."
    },
    {
      question: "Peut-on voter par procuration en France ?",
      answer: "Oui, si vous ne pouvez pas vous déplacer le jour du vote, vous pouvez donner procuration à un autre électeur inscrit dans la même commune. La procuration peut être établie en ligne, au tribunal ou au commissariat/gendarmerie."
    },
    {
      question: "Quelles élections concernent les citoyens européens en France ?",
      answer: "Les citoyens de l'UE résidant en France peuvent voter aux élections municipales et aux élections européennes, à condition d'être inscrits sur les listes électorales complémentaires de leur commune de résidence."
    }
  ],

  keywords: [
    'droit de vote France', 'élections France 2026', 'système électoral français',
    'vote obligatoire France', 'suffrage universel France', 'élection présidentielle France',
    'élections législatives', 'inscription listes électorales', 'comment voter en France',
    'droit de vote naturalisation', 'nouveau citoyen français vote',
    'élections municipales France', 'élections européennes France', 'référendum France',
    'suffrage direct indirect', 'procuration vote France', 'vote blanc France',
    'test civique droit de vote', 'questions test civique élections',
    'devoir civique France', 'abstention France',
    '577 députés', '348 sénateurs', 'quinquennat',
    'droit de vote femmes 1944', 'suffrage universel 1848',
    'LeTestCivique.fr', 'préparation test civique'
  ],
};
