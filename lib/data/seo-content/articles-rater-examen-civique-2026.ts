/**
 * Article — J'ai raté l'examen civique : repasser, délais, coût, thèmes qui font échouer
 * Requête en croissance : l'examen n'existe que depuis le 01/01/2026, la première
 * vague de recalés arrive à l'été 2026. Aucun concurrent solidement installé.
 * Angle différenciant : données internes réelles (3 208 sessions d'entraînement
 * complétées sur la plateforme) sur les thèmes qui font échouer.
 * Rédigé le 24/08/2026.
 */

import type { ArticleFullContent } from './articles-part1';
import type { Article } from '../articles';

export const raterExamenCiviqueContent: ArticleFullContent = {
  slug: 'rater-examen-civique-2026-repasser-delai-cout-themes-echec',

  introduction: `Vous avez ouvert votre résultat, et le compte n'y est pas. 28/40, 30/40, peut-être 31/40 — à une question du seuil. La première réaction est presque toujours la même : **est-ce que ma demande de titre de séjour ou de naturalisation est fichue ?**

Non. Et c'est le point le plus important de cet article : **l'échec à l'examen civique n'est pas éliminatoire**. Vous pouvez le repasser **autant de fois que nécessaire**, sans limite de tentatives et sans délai d'attente réglementaire. Aucun texte ne vous ferme la porte.

Ce qui vous coûte cher, en revanche, ce n'est pas l'échec en lui-même : c'est **le temps et l'argent** que chaque nouvelle tentative consomme. Un créneau, c'est souvent **4 à 8 semaines** d'attente. Une inscription, c'est **65 à 90 €** à repayer intégralement. Pendant ce temps, la date d'expiration de votre titre, elle, continue d'avancer.

L'enjeu n'est donc pas « puis-je repasser ? » — vous pouvez. C'est **« comment je réussis à la prochaine tentative »**. Et pour ça, nous avons une donnée que personne d'autre ne publie : sur **3 208 sessions d'entraînement complétées** sur notre plateforme, nous savons précisément **quel thème fait chuter les candidats**. Le résultat est contre-intuitif.

> ✅ **En une phrase :** repassable sans limite, sans délai imposé, mais chaque tentative coûte un créneau et une inscription. La seule vraie exception, c'est la fraude — qui, elle, ferme la porte pour **deux ans**.`,

  sections: [
    {
      id: 'echec-pas-eliminatoire',
      title: "Rassurez-vous : l'échec n'est pas éliminatoire",
      content: `Commençons par lever l'angoisse principale.

**Un échec à l'examen civique ne rejette pas votre demande.** Il signifie simplement que vous ne disposez pas encore de l'attestation exigée à l'appui de votre dossier. Ce n'est pas une décision défavorable de la préfecture, ce n'est pas une mention qui vous suivra, et cela n'entre pas en compte dans l'appréciation de votre dossier.

**Ce qu'il faut avoir en tête :**
- 📄 L'attestation est une **pièce du dossier**, au même titre qu'un justificatif de domicile ou un diplôme de langue. Tant qu'elle manque, le dossier est incomplet — pas refusé.
- ♾️ **L'attestation, une fois obtenue, n'a pas de durée de validité** ([source officielle](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/)). Vous ne jouez donc pas contre une horloge de péremption : vous jouez contre le calendrier de votre titre de séjour.
- 🔁 Une attestation obtenue pour la **carte de résident (CR)** vaut attestation pour la **carte de séjour pluriannuelle (CSP)**. Un seul succès peut couvrir plusieurs démarches.

**Rappel du barème** — pour savoir exactement ce qui vous a manqué :
- **40 questions** : 28 questions de connaissance + 12 mises en situation
- **45 minutes** maximum, sur tablette ou ordinateur
- **32 bonnes réponses sur 40**, soit **80 %**

Ce seuil de 80 % est élevé : il ne laisse que **8 erreurs**. Autrement dit, une lacune sur un seul thème suffit à faire basculer un candidat par ailleurs solide. C'est très exactement ce que montrent nos données (voir plus bas).

> 💡 **Le bon état d'esprit :** vous n'avez pas « échoué à un concours ». Vous avez identifié, à moindres frais, les 8 à 12 questions qui vous manquent. C'est une information exploitable — à condition de savoir où elles se trouvent.`,
    },
    {
      id: 'combien-de-fois-repasser',
      title: 'Combien de fois peut-on repasser ? Et sous quel délai ?',
      content: `La réponse officielle est simple et généreuse.

**Nombre de tentatives : illimité.** Les candidats peuvent repasser l'examen **« à tout moment et autant de fois que nécessaire »**, selon le portail officiel de la formation civique du ministère de l'Intérieur. Aucun texte ne plafonne le nombre de passages.

**Délai d'attente réglementaire : aucun.** Il n'existe **pas de délai minimum imposé** entre deux tentatives. En théorie, vous pourriez vous réinscrire dès le lendemain de votre échec.

**En pratique, deux contraintes s'imposent malgré tout :**

**1. La disponibilité des créneaux** ⏳
Deux opérateurs seulement sont agréés pour toute la France — la **CCI Paris Île-de-France (CCIP)** et **France Éducation International (FEI)**. Résultat : les délais réels de réinscription tournent souvent autour de **4 à 8 semaines** selon le centre et la région. C'est cette contrainte-là, et non le règlement, qui fixe votre calendrier réel.

**2. Le temps de préparation** 📚
Se réinscrire immédiatement, sans avoir rien changé à sa préparation, revient le plus souvent à repayer pour le même résultat. Le seuil de 80 % ne pardonne pas les révisions approximatives.

> 📅 **Le calcul à faire dès maintenant :** posez côte à côte la **date d'expiration de votre titre** et le **délai de créneau de votre centre**. Si l'écart est inférieur à trois mois, réinscrivez-vous **immédiatement** — vous réviserez pendant l'attente. Si vous avez de la marge, prenez trois semaines pour combler vos lacunes avant de réserver.

Pour trouver le centre le plus proche et comparer les délais, consultez notre [liste des centres agréés](/articles/nouveaux-centres-test-civique-mai-2026-liste-complete) et notre guide d'[inscription pas à pas](/articles/inscription-test-civique-2026-ou-quand-comment-sinscrire).`,
    },
    {
      id: 'cout-reel-echec',
      title: "Le coût réel d'un échec : ce que personne ne vous dit avant",
      content: `C'est la partie que les candidats découvrent trop tard.

**Chaque tentative se paie intégralement.** Il n'existe **pas de tarif réduit** pour un deuxième passage, ni de rattrapage inclus. Une nouvelle tentative = une nouvelle inscription = un nouveau paiement, de l'ordre de **65 à 90 €** selon le centre (le tarif est fixé par chaque organisme, il n'est pas national).

**Le coût cumulé d'un parcours à trois tentatives :**

| Poste | Une tentative | Trois tentatives |
|---|---|---|
| 💶 Inscription | 65 à 90 € | **195 à 270 €** |
| ⏳ Délai de créneau | 4 à 8 semaines | **3 à 6 mois** |
| 🚗 Déplacement au centre | variable | ×3 |

**Mais le coût le plus lourd n'est pas financier — il est calendaire.** Trois tentatives espacées de six semaines, c'est **quatre à six mois** consommés. Sur un titre de séjour qui expire, ce délai peut suffire à vous faire basculer en situation irrégulière, avec les conséquences en chaîne que cela entraîne : difficultés d'emploi, rupture de droits sociaux, dépôt tardif pénalisé.

**Ce qu'il faut en retirer :** l'écart de coût entre « je révise sérieusement trois semaines » et « je retente à l'aveugle » se chiffre en **centaines d'euros et en mois de procédure**. C'est précisément pour cette raison que cibler la bonne lacune, plutôt que tout réviser au hasard, change tout.

Pour le détail des tarifs par centre, voir notre article [Prix du test civique 2026](/articles/prix-test-civique-2026-cout-tarif-titre-sejour-prefecture).

> ⚠️ **Ne vous laissez pas vendre un « rattrapage garanti ».** Aucun organisme ne peut garantir votre réussite ni accélérer l'obtention d'un créneau officiel. Les seuls canaux d'inscription valables sont la CCIP et FEI. Méfiez-vous des offres qui promettent l'un ou l'autre.`,
    },
    {
      id: 'exception-fraude',
      title: "La seule vraie exception : la fraude ferme la porte pour deux ans",
      content: `Une situation, et une seule, transforme un échec en blocage durable.

**En cas de fraude ou de tentative de fraude détectée pendant l'épreuve, l'interdiction de repasser l'examen est de deux ans.** C'est la seule limitation réelle à la règle des tentatives illimitées — et elle est sévère, parce que deux ans d'immobilisation sur une procédure de séjour ou de nationalité, c'est considérable.

**Ce qui peut être qualifié de fraude :**
- 📱 Utiliser un téléphone, une montre connectée ou tout appareil non autorisé pendant l'épreuve ;
- 👥 Communiquer avec un autre candidat ou consulter un document ;
- 🪪 Se présenter à la place d'un autre candidat, ou faire composer quelqu'un à sa place — les épreuves sont **nominatives** et l'identité est contrôlée à l'entrée ;
- 📝 Tenter de sortir ou de photographier le contenu des questions.

**Le réflexe à avoir le jour J :** déposez **tous** vos appareils électroniques là où le centre vous l'indique, avant d'entrer en salle. Un téléphone oublié dans une poche, même éteint et jamais consulté, peut être qualifié de tentative de fraude. Ce n'est pas un risque à prendre pour un objet dont vous n'avez pas besoin pendant 45 minutes.

Notre guide [Documents à apporter le jour du test civique](/articles/documents-test-civique-2026-convocation-piece-identite) détaille ce que vous devez — et ne devez pas — avoir sur vous.

> 🚨 **À retenir :** un échec honnête se rattrape en quelques semaines. Une fraude vous coûte **deux ans**. Le rapport bénéfice/risque ne penche jamais du bon côté.`,
    },
    {
      id: 'themes-qui-font-echouer',
      title: 'Les thèmes qui font vraiment échouer — nos données sur 3 208 sessions',
      content: `Voici la partie que vous ne trouverez nulle part ailleurs.

Nous avons analysé **3 208 sessions d'entraînement complétées** sur notre plateforme, réparties sur les grands thèmes du programme officiel. Pour chacun, nous avons mesuré le **score moyen** et la **part de candidats passant sous le seuil de 80 %** — le seuil réel de l'examen.

| Thème | Sessions | Score moyen | Sous le seuil de 80 % |
|---|---|---|---|
| ⚠️ **Principes et valeurs de la République** | 842 | **76,8 %** | **39,8 %** |
| Histoire, géographie et culture | 598 | 82,3 % | 30,3 % |
| Système institutionnel et politique | 441 | 82,5 % | 27,7 % |
| Symboles de la France | 383 | 81,6 % | 26,1 % |
| Droits et devoirs | 354 | 83,5 % | 24,3 % |
| Vivre dans la société française | 590 | 84,6 % | 24,1 % |

**Le résultat est contre-intuitif — et c'est tout l'intérêt.**

Le thème le plus meurtrier est **« Principes et valeurs de la République »**, avec un score moyen de **76,8 %** : c'est le seul thème dont la moyenne se situe **sous le seuil de réussite**. Près de **4 candidats sur 10 (39,8 %)** y passent sous les 80 %, contre **moins d'1 sur 4** sur « Vivre dans la société française ».

**Pourquoi ce thème piège autant de monde :**
- 🧠 **C'est celui que tout le monde croit maîtriser.** Liberté, Égalité, Fraternité, la laïcité, la devise — tout paraît familier, donc personne ne le révise sérieusement. C'est exactement là que se creuse l'écart.
- 📖 **Les questions portent sur des définitions précises**, pas sur des impressions générales. Savoir que la France est une République laïque ne suffit pas : il faut savoir ce que la laïcité **implique concrètement**, ce qu'elle autorise et ce qu'elle interdit.
- 🎭 **C'est le thème le plus représenté dans les 12 mises en situation.** Les scénarios pratiques de l'examen mobilisent en priorité les principes républicains appliqués à des cas concrets — pas la simple récitation.

À l'inverse, « Vivre dans la société française » et « Droits et devoirs » sont les mieux réussis : ce sont des thèmes du quotidien, que les candidats vivent réellement et révisent par réflexe.

> 🎯 **Votre plan d'action immédiat, si vous venez d'échouer :** ne recommencez pas tout le programme. Statistiquement, votre lacune est sur les **principes et valeurs de la République**. Attaquez ce thème en premier, sur des mises en situation plutôt que sur des fiches de définitions. C'est le meilleur rendement révision/points de tout le programme.

Nos articles [Erreurs fréquentes au test civique : les pièges du QCM](/articles/erreurs-frequentes-test-civique-2026-pieges-qcm) et [Statistiques du test civique 2026](/articles/statistiques-test-civique-2026-taux-reussite-72-pourcent) complètent cette analyse.`,
    },
    {
      id: 'plan-rattrapage-3-semaines',
      title: 'Plan de rattrapage en 3 semaines',
      content: `Ce plan suppose que vous vous soyez déjà réinscrit (ou que vous le fassiez cette semaine), et que votre créneau tombe dans 4 à 8 semaines.

**Semaine 1 — Diagnostiquer, pas réviser** 🔍
Ne rouvrez aucun cours cette semaine. Faites d'abord **deux examens blancs complets** en conditions réelles : 40 questions, 45 minutes, chronomètre lancé, sans interruption. L'objectif n'est pas le score, c'est la **carte de vos lacunes**. Notez pour chaque erreur le thème concerné. À la fin de la semaine, vous saurez exactement où vous perdez vos 8 à 12 points.
→ [Test civique gratuit en conditions réelles](/articles/test-civique-gratuit-en-ligne-2026-examen-blanc-entrainement-qcm)

**Semaine 2 — Frapper là où ça fait mal** 🎯
Consacrez **70 % de votre temps** à vos deux thèmes les plus faibles. Si vous n'avez pas de diagnostic clair, commencez par **« Principes et valeurs de la République »** : c'est statistiquement le plus probable. Travaillez sur des **mises en situation**, pas sur des listes à mémoriser — c'est le format qui pèse 12 questions sur 40.

**Semaine 3 — Retrouver les conditions de l'examen** ⏱️
Un examen blanc complet **tous les deux jours**, à la même heure que votre convocation si possible. Objectif : dépasser **35/40** de façon régulière, pas une seule fois par chance. Une marge de 3 points au-dessus du seuil, c'est ce qui absorbe le stress et les questions inattendues du jour J.

**La veille** 🌙
Aucune révision de fond. Relisez uniquement vos fiches d'erreurs. Vérifiez votre convocation, votre pièce d'identité, l'adresse et l'heure du centre. Couchez-vous tôt : 45 minutes de QCM chronométré demandent de la concentration, pas des connaissances de dernière minute.

> 📈 **Le seuil à viser n'est pas 32/40, c'est 35/40.** Un candidat qui plafonne à 32 en entraînement passe sous la barre le jour de l'examen, où le stress coûte systématiquement deux à trois points. Visez 35 pour sécuriser 32.

Voir aussi notre méthode complète : [Comment réussir le test civique du premier coup](/articles/comment-reussir-test-civique-premier-coup).`,
    },
    {
      id: 'dossier-pendant-ce-temps',
      title: 'Et votre dossier, pendant ce temps ?',
      content: `Question légitime : que devient votre démarche administrative pendant que vous repassez l'examen ?

**Le principe :** l'attestation d'examen civique est une **pièce exigée à l'appui de votre demande**. Sans elle, votre dossier est **incomplet** — ce qui n'est pas la même chose qu'un refus, mais bloque l'instruction.

**Les trois réflexes à avoir :**

**1. Surveillez la date d'expiration de votre titre** 📅
C'est votre véritable contrainte. Les fenêtres de dépôt sur l'ANEF sont strictes — généralement **entre 4 et 2 mois** avant l'échéance du titre — et un dépôt tardif peut entraîner une pénalité. Ne laissez pas l'attente d'un créneau d'examen vous faire manquer votre fenêtre de dépôt. Notre guide [Renouvellement de titre de séjour 2026](/articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais) détaille ces délais.

**2. Documentez votre démarche** 📎
Conservez la preuve de votre inscription à la prochaine session (confirmation, convocation, justificatif de paiement). Face à une préfecture, pouvoir démontrer que la démarche est **engagée** et datée vaut mieux qu'une simple déclaration d'intention.

**3. Ne déposez pas un dossier volontairement incomplet en espérant régulariser plus tard** ⚠️
Sauf indication contraire de votre préfecture, mieux vaut déposer un dossier complet. Un dossier incomplet peut être classé sans suite, vous faisant repartir de zéro — et perdre bien plus de temps que l'attente d'un créneau.

> 💡 **Si votre titre expire pendant l'attente :** ne restez pas passif. Contactez votre préfecture par écrit en expliquant votre situation, preuve d'inscription à l'examen à l'appui. Une trace écrite datée est toujours utile en cas de contestation ultérieure.`,
    },
  ],

  conclusion: `Récapitulons ce qui compte vraiment.

**L'échec n'est pas éliminatoire.** Vous pouvez repasser l'examen civique **autant de fois que nécessaire**, sans délai réglementaire. Aucun texte ne vous ferme la porte — à une exception près : la **fraude**, qui vous interdit de repasser pendant **deux ans**.

**Ce qui coûte cher, c'est le temps.** Chaque tentative, c'est **65 à 90 €** et **4 à 8 semaines** d'attente de créneau. Trois tentatives, c'est potentiellement **six mois** de procédure — sur un titre de séjour qui, lui, n'attend pas.

**La lacune est probablement là où vous ne l'attendez pas.** Nos données sur **3 208 sessions** sont sans ambiguïté : le thème **« Principes et valeurs de la République »** est le seul dont le score moyen (**76,8 %**) tombe sous le seuil de réussite, et **près de 4 candidats sur 10** y échouent. C'est le thème que tout le monde croit maîtriser — et c'est précisément pour ça qu'il fait tomber.

Alors ne repartez pas réviser tout le programme au hasard. **Diagnostiquez, ciblez, puis retentez.** Un candidat qui atteint régulièrement 35/40 en entraînement passe l'examen ; celui qui plafonne à 32 repaie une inscription.

👉 **Commencez par le diagnostic.** Faites un [examen blanc gratuit en conditions réelles](/articles/test-civique-gratuit-en-ligne-2026-examen-blanc-entrainement-qcm) — 40 questions, 45 minutes, chronomètre. En une session, vous saurez exactement où sont vos 8 points manquants.`,

  faq: [
    {
      question: "Combien de fois peut-on repasser l'examen civique ?",
      answer: "Autant de fois que nécessaire. Le portail officiel de la formation civique indique que les candidats peuvent repasser l'examen « à tout moment et autant de fois que nécessaire ». Aucun texte ne plafonne le nombre de tentatives. La seule exception concerne la fraude, qui entraîne une interdiction de deux ans.",
    },
    {
      question: "Y a-t-il un délai d'attente entre deux tentatives ?",
      answer: "Aucun délai minimum n'est imposé par la réglementation : vous pourriez théoriquement vous réinscrire dès le lendemain. En pratique, la disponibilité des créneaux dans les centres agréés (CCIP et FEI) impose souvent 4 à 8 semaines d'attente selon la région.",
    },
    {
      question: "Faut-il repayer pour repasser l'examen civique ?",
      answer: "Oui, intégralement. Il n'existe pas de tarif réduit ni de rattrapage inclus : chaque tentative nécessite une nouvelle inscription et un nouveau paiement, de l'ordre de 65 à 90 € selon le centre (le tarif est fixé par chaque organisme, il n'est pas national).",
    },
    {
      question: "Un échec à l'examen civique fait-il rejeter ma demande de titre de séjour ?",
      answer: "Non. L'attestation est une pièce du dossier : tant qu'elle manque, votre dossier est incomplet, mais il n'est pas refusé et l'échec n'est pas retenu contre vous. La vraie contrainte est calendaire — veillez à ne pas manquer votre fenêtre de dépôt sur l'ANEF pendant que vous attendez un créneau.",
    },
    {
      question: "Quel thème fait le plus échouer à l'examen civique ?",
      answer: "D'après nos données sur 3 208 sessions d'entraînement complétées, c'est « Principes et valeurs de la République » : score moyen de 76,8 %, soit sous le seuil de réussite, avec 39,8 % des candidats sous les 80 %. C'est contre-intuitif, car c'est le thème que tout le monde croit maîtriser — les questions portent sur des définitions précises et il pèse lourd dans les 12 mises en situation.",
    },
    {
      question: "Mon attestation expire-t-elle si je mets du temps à obtenir mon titre ?",
      answer: "Non. L'attestation d'examen civique n'a pas de durée de validité définie : une fois obtenue, elle est acquise. Une attestation délivrée pour la carte de résident (CR) vaut également attestation pour la carte de séjour pluriannuelle (CSP).",
    },
    {
      question: "Que se passe-t-il en cas de fraude à l'examen ?",
      answer: "Une fraude ou une tentative de fraude détectée pendant l'épreuve entraîne une interdiction de repasser l'examen pendant deux ans. Attention : un téléphone oublié dans une poche, même éteint, peut être qualifié de tentative de fraude. Déposez tous vos appareils électroniques avant d'entrer en salle.",
    },
    {
      question: "Quel score viser en entraînement pour être sûr de réussir ?",
      answer: "Visez 35/40, pas 32/40. Le seuil officiel est de 32 bonnes réponses sur 40 (80 %), mais le stress du jour J coûte généralement deux à trois points. Un candidat qui plafonne à 32 en entraînement passe souvent sous la barre le jour de l'examen ; une marge de 3 points sécurise le résultat.",
    },
  ],

  keywords: [
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

  sources: [
    {
      title: "Ministère de l'Intérieur — Informations générales sur l'examen civique",
      url: 'https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/',
      type: 'official',
      description: "Portail officiel : format (28 questions de connaissance et 12 mises en situation, 45 minutes), seuil de 32/40, possibilité de repasser « à tout moment et autant de fois que nécessaire », validité illimitée de l'attestation, opérateurs agréés CCIP et FEI.",
    },
    {
      title: "Service-Public — Carte de séjour pluriannuelle et carte de résident : comment passer l'examen civique ?",
      url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F39530?lang=fr',
      type: 'official',
      description: "Fiche officielle : public concerné, dispenses, format de l'épreuve et conditions de délivrance de l'attestation.",
    },
    {
      title: "Ministère de l'Intérieur — L'examen civique pour demander un titre de séjour",
      url: 'https://www.immigration.interieur.gouv.fr/limmigration-en-france/sejour-des-etrangers/lexamen-civique-pour-demander-titre-de-sejour',
      type: 'official',
      description: "Page de la Direction générale des étrangers en France sur la place de l'attestation dans le dossier de demande de titre.",
    },
    {
      title: 'Légifrance — Décret n° 2025-648 du 15 juillet 2025',
      url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051925434',
      type: 'legal',
      description: "Texte instituant l'examen civique, applicable aux demandes déposées à compter du 1er janvier 2026.",
    },
    {
      title: 'Le Test Civique — Données internes de la plateforme',
      url: 'https://www.testciviquefrance.fr/articles/statistiques-test-civique-2026-taux-reussite-72-pourcent',
      type: 'article',
      description: "Analyse de 3 208 sessions d'entraînement complétées : score moyen et taux de passage sous le seuil de 80 % par thème du programme officiel.",
    },
  ],
};

// =====================================================================
// Métadonnées Article
// =====================================================================
export const raterExamenCiviqueMetadata: Article = {
  id: 'seo-rater-examen-civique-2026',
  slug: 'rater-examen-civique-2026-repasser-delai-cout-themes-echec',
  title: "Rater l'examen civique 2026 : repasser, délais et coût",
  excerpt: "Vous avez échoué à l'examen civique ? Ce n'est pas éliminatoire : repassable sans limite ni délai réglementaire. Combien ça coûte, sous quel délai réel, ce que devient votre dossier — et, données à l'appui sur 3 208 sessions, le thème qui fait chuter 4 candidats sur 10.",
  content: '',
  category: 'Préparation',
  categorySlug: 'preparation',
  author: 'Brian B',
  date: '24/08/2026',
  readTime: 11,
  views: 0,
  image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop',
  featured: true,
};
