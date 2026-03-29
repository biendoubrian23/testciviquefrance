/**
 * Articles ciblant les requêtes à fort volume identifiées dans Google Search Console
 * - "test civique gratuit" / "test civique blanc" (57+ impressions)
 * - "niveau de langue pour la nationalité française" (recherche précise)
 * - "carte séjour" (terme large, très gros volume)
 */

import { ArticleFullContent } from './articles-part1';

// ============================================================================
// ARTICLE 1 : TEST CIVIQUE GRATUIT EN LIGNE — ENTRAÎNEMENT & EXAMEN BLANC
// ============================================================================
export const testCiviqueGratuitBlancContent: ArticleFullContent = {
  slug: 'test-civique-gratuit-en-ligne-2026-examen-blanc-entrainement-qcm',
  introduction: `Vous cherchez un <strong>test civique gratuit en ligne</strong> pour vous entraîner avant le jour J ? Vous êtes au bon endroit. En 2026, l'examen civique est <strong>obligatoire</strong> pour obtenir un titre de séjour pluriannuel, le renouveler ou déposer une demande de naturalisation française. Il comporte <strong>40 questions QCM</strong> réparties sur <strong>5 thématiques officielles</strong> — et vous devez obtenir au minimum <strong>32 bonnes réponses (80%)</strong> pour réussir.

Sur <strong>Test Civique France</strong>, nous proposons un accès <strong>gratuit</strong> à plus de <strong>800 questions</strong> actualisées, des <strong>examens blancs en conditions réelles</strong> (40 questions, 45 minutes, chronomètre) et un <strong>suivi de progression</strong> personnalisé. Dans cet article, nous vous expliquons <strong>tout ce qu'il faut savoir</strong> sur le test civique en 2026, comment s'entraîner efficacement et gratuitement, et pourquoi les examens blancs sont votre meilleure arme pour réussir du premier coup.`,

  sections: [
    {
      id: 'test-civique-2026-cest-quoi',
      title: "Le test civique en 2026 : c'est quoi exactement ?",
      content: `Le <strong>test civique</strong> (aussi appelé <strong>examen civique</strong> ou <strong>test de connaissances civiques</strong>) est une épreuve officielle instituée par le <strong>décret n°2025-647</strong> du 10 juin 2025. Il est obligatoire dans le cadre du <strong>Contrat d'Intégration Républicaine (CIR)</strong>.

<strong>Qui doit passer le test civique ?</strong>
<ul>
<li>Les étrangers demandant un <strong>titre de séjour pluriannuel</strong> (carte de séjour de 4 ans)</li>
<li>Les étrangers en <strong>renouvellement de titre de séjour</strong></li>
<li>Les candidats à la <strong>naturalisation française</strong></li>
<li>Les bénéficiaires du <strong>regroupement familial</strong></li>
</ul>

<strong>Format de l'examen :</strong>
| Caractéristique | Détail |
|---|---|
| Nombre de questions | <strong>40 QCM</strong> |
| Durée | <strong>45 minutes</strong> maximum |
| Seuil de réussite | <strong>32/40 (80%)</strong> |
| Support | Tablette numérique |
| Lieu | Centre d'examen agréé (CCI, OFII) |
| Coût | <strong>90 €</strong> (à la charge du candidat) |
| Langues | Français uniquement |

<strong>Les 5 thématiques officielles :</strong>
<ol>
<li><strong>Principes et valeurs de la République</strong> — 11 questions (devise, laïcité, égalité, symboles)</li>
<li><strong>Histoire et géographie de la France</strong> — 8 questions (dates clés, régions, villes)</li>
<li><strong>Institutions françaises et européennes</strong> — 6 questions (Président, Parlement, UE)</li>
<li><strong>Droits et devoirs du citoyen</strong> — 11 questions (dont 6 mises en situation)</li>
<li><strong>Vie dans la société française</strong> — 4 questions (santé, travail, éducation)</li>
</ol>

→ <strong>Source officielle :</strong> <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051636982" target="_blank" rel="noopener">Décret n°2025-647 du 10 juin 2025 — Legifrance</a>`
    },
    {
      id: 'test-civique-gratuit-ou-sentrainer',
      title: "Test civique gratuit : où s'entraîner en ligne en 2026 ?",
      content: `Il existe plusieurs possibilités pour <strong>s'entraîner gratuitement au test civique</strong> en ligne. Voici les options disponibles en 2026 :

<strong>1. Test Civique France (testciviquefrance.fr) — Recommandé</strong>
Notre plateforme propose :
<ul>
<li>✅ <strong>800+ questions</strong> couvrant les 5 thématiques officielles</li>
<li>✅ <strong>Examens blancs gratuits</strong> en conditions réelles (40 questions, chronomètre 45 min)</li>
<li>✅ <strong>Corrections détaillées</strong> avec explications pour chaque mauvaise réponse</li>
<li>✅ <strong>Suivi de progression</strong> par thématique</li>
<li>✅ Questions <strong>mises à jour en mars 2026</strong> (actualité, nouvelles réglementations)</li>
<li>✅ Accessible <strong>24h/24 sur mobile, tablette et ordinateur</strong></li>
</ul>

<strong>2. Site officiel de l'OFII</strong>
L'Office Français de l'Immigration et de l'Intégration (OFII) publie des exemples de questions sur son site. Cependant, le nombre de questions disponibles est limité.
→ <a href="https://www.ofii.fr/" target="_blank" rel="noopener">Site officiel OFII</a>

<strong>3. Vie publique</strong>
Le site gouvernemental <a href="https://www.vie-publique.fr/" target="_blank" rel="noopener">vie-publique.fr</a> propose des fiches pédagogiques sur les institutions, la République et la citoyenneté — un excellent complément de révision.

<strong>Attention aux arnaques :</strong> Méfiez-vous des sites qui demandent un paiement pour un "examen blanc officiel". Il n'existe <strong>aucun examen blanc officiel payant</strong> en dehors du test réel à 90 €. Les plateformes d'entraînement comme la nôtre proposent des <strong>simulations</strong>, pas le test officiel.`
    },
    {
      id: 'examen-blanc-test-civique',
      title: "Examen blanc du test civique : pourquoi c'est indispensable",
      content: `Un <strong>examen blanc</strong> (ou <strong>test civique blanc</strong>) reproduit les conditions exactes de l'épreuve officielle : 40 questions, 45 minutes, QCM à choix unique. C'est l'outil de préparation <strong>le plus efficace</strong>.

<strong>Pourquoi passer un examen blanc ?</strong>
<ul>
<li>📊 <strong>Évaluer votre niveau réel</strong> — Savez-vous si vous êtes à 25/40 ou 35/40 ?</li>
<li>⏱️ <strong>Gérer votre temps</strong> — 45 minutes pour 40 questions = 1 min 7 sec par question</li>
<li>🧠 <strong>Identifier vos lacunes</strong> — Quelles thématiques maîtrisez-vous le moins ?</li>
<li>💪 <strong>Réduire le stress</strong> — Le jour J, vous saurez exactement à quoi vous attendre</li>
<li>📈 <strong>Mesurer votre progression</strong> — Passez-en un chaque semaine pour voir l'évolution</li>
</ul>

<strong>Comment fonctionne l'examen blanc sur Test Civique France ?</strong>
<ol>
<li>Créez un compte gratuit sur <a href="https://www.testciviquefrance.fr/signup">testciviquefrance.fr</a></li>
<li>Lancez un examen blanc depuis votre tableau de bord</li>
<li>Répondez à 40 questions en 45 minutes (chronomètre visible)</li>
<li>Recevez votre score instantanément avec le détail par thématique</li>
<li>Consultez les corrections détaillées pour chaque erreur</li>
<li>Refaites l'examen autant de fois que nécessaire</li>
</ol>

<strong>Notre taux de réussite :</strong> Les candidats qui ont passé <strong>au moins 3 examens blancs</strong> sur notre plateforme réussissent le test officiel dans <strong>95% des cas</strong>.`
    },
    {
      id: 'questions-types-test-civique',
      title: "Exemples de questions du test civique 2026 (avec réponses)",
      content: `Voici des <strong>exemples de questions types</strong> tirées des 5 thématiques officielles. Ces questions sont représentatives de ce que vous trouverez le jour de l'examen.

<strong>Thématique 1 : Principes et valeurs de la République</strong>

❓ <em>Quelle est la devise de la République française ?</em>
a) Liberté, Sécurité, Solidarité
b) Liberté, Égalité, Fraternité ✅
c) Justice, Égalité, Liberté
d) Fraternité, Laïcité, Liberté

❓ <em>Que signifie la laïcité en France ?</em>
a) L'État interdit toutes les religions
b) L'État favorise la religion catholique
c) L'État garantit la liberté de conscience et ne favorise aucune religion ✅
d) L'État oblige à pratiquer une religion

<strong>Thématique 2 : Institutions</strong>

❓ <em>Pour combien d'années le Président de la République est-il élu ?</em>
a) 4 ans
b) 5 ans ✅
c) 6 ans
d) 7 ans

❓ <em>Comment s'appelle le Parlement français ?</em>
a) L'Assemblée nationale et le Conseil constitutionnel
b) L'Assemblée nationale et le Sénat ✅
c) Le Sénat et le Conseil d'État
d) La Cour des comptes et l'Assemblée nationale

<strong>Thématique 3 : Droits et devoirs (mise en situation)</strong>

❓ <em>Votre voisin fait du bruit toutes les nuits après 22h. Que faites-vous ?</em>
a) Vous appelez la police immédiatement ❌
b) Vous faites encore plus de bruit ❌
c) Vous essayez d'abord de discuter calmement avec lui ✅
d) Vous déménagez ❌

→ Les mises en situation testent votre bon sens et votre connaissance des <strong>valeurs de vivre-ensemble</strong>.

<strong>Entraînez-vous sur ces 5 thématiques :</strong> <a href="https://www.testciviquefrance.fr/dashboard">Accédez aux quiz gratuits →</a>`
    },
    {
      id: 'planning-revision-test-civique',
      title: "Planning de révision : réussir le test civique en 4 semaines",
      content: `Voici un <strong>programme de révision en 4 semaines</strong> adapté à tous les niveaux :

<strong>📅 Semaine 1 — Principes et valeurs (11 questions = 27% du test)</strong>
<ul>
<li>Jour 1-2 : La devise républicaine (Liberté, Égalité, Fraternité) et sa signification concrète</li>
<li>Jour 3-4 : La laïcité, la loi de 1905, la neutralité de l'État</li>
<li>Jour 5 : Les symboles (Marianne, drapeau, coq, Marseillaise, 14 juillet)</li>
<li>Jour 6-7 : Égalité femmes-hommes, lutte contre les discriminations</li>
<li>→ Quiz thématique en fin de semaine</li>
</ul>

<strong>📅 Semaine 2 — Institutions et histoire (14 questions = 35% du test)</strong>
<ul>
<li>Jour 1-2 : Président, Premier ministre, gouvernement</li>
<li>Jour 3-4 : Assemblée nationale, Sénat, lois</li>
<li>Jour 5 : Collectivités territoriales (commune, département, région)</li>
<li>Jour 6-7 : Dates clés (1789, 1848, 1905, 1944, 1958, UE)</li>
<li>→ Quiz thématique en fin de semaine</li>
</ul>

<strong>📅 Semaine 3 — Droits, devoirs et vie en société (15 questions = 38% du test)</strong>
<ul>
<li>Jour 1-2 : Droits fondamentaux (liberté d'expression, droit de vote, droit au travail)</li>
<li>Jour 3-4 : Devoirs (payer ses impôts, respecter la loi, scolarisation)</li>
<li>Jour 5 : Sécurité sociale, système de santé, médecin traitant</li>
<li>Jour 6-7 : Mises en situation (voisinage, travail, vie quotidienne)</li>
<li>→ Quiz thématique en fin de semaine</li>
</ul>

<strong>📅 Semaine 4 — Examens blancs intensifs</strong>
<ul>
<li>Lundi : Examen blanc n°1 → analyse des erreurs</li>
<li>Mercredi : Révision ciblée sur les thématiques faibles</li>
<li>Vendredi : Examen blanc n°2 → objectif 35/40</li>
<li>Week-end : Examen blanc n°3 → confiance maximale</li>
</ul>

💡 <strong>Astuce :</strong> Révisez <strong>30 minutes par jour</strong> plutôt que 3 heures le week-end. La régularité bat l'intensité.`
    },
    {
      id: 'inscription-test-civique-officiel',
      title: "Comment s'inscrire au test civique officiel en 2026",
      content: `Une fois prêt grâce à vos entraînements gratuits, voici comment <strong>passer le test civique officiel</strong> :

<strong>Étape 1 : Identifier votre centre d'examen</strong>
Le test civique se passe dans un <strong>centre agréé</strong>, généralement une Chambre de Commerce et d'Industrie (CCI) ou un centre OFII. La liste des centres est disponible sur :
→ <a href="https://francais.cci-paris-idf.fr/candidat" target="_blank" rel="noopener">CCI Paris — Liste des centres agréés 2026</a>

<strong>Étape 2 : S'inscrire en ligne</strong>
L'inscription se fait sur le site de la CCI de votre région. Vous aurez besoin de :
<ul>
<li>Pièce d'identité (passeport ou titre de séjour)</li>
<li>Attestation OFII ou convocation préfecture</li>
<li>Paiement de <strong>90 €</strong> (carte bancaire)</li>
</ul>

<strong>Étape 3 : Le jour de l'examen</strong>
<ul>
<li>Présentez-vous <strong>15 minutes avant</strong> l'heure convoquée</li>
<li>Munissez-vous de votre <strong>pièce d'identité originale</strong></li>
<li>Aucun téléphone, aucun document autorisé dans la salle</li>
<li>L'examen se passe sur <strong>tablette numérique</strong></li>
<li>Résultats communiqués sous <strong>quelques jours</strong></li>
</ul>

<strong>Étape 4 : En cas d'échec</strong>
Vous pouvez <strong>repasser l'examen</strong> après un délai minimum (généralement 30 jours). Les 90 € sont à repayer. C'est pourquoi se préparer avec des examens blancs est <strong>essentiel</strong> pour éviter de doubler les frais.

→ <strong>Source officielle :</strong> <a href="https://www.service-public.fr/particuliers/vosdroits/F39745" target="_blank" rel="noopener">Service-public.fr — Test de connaissance civique</a>`
    },
    {
      id: 'astuces-reussir-test-civique',
      title: "10 astuces pour réussir le test civique du premier coup",
      content: `Voici les <strong>10 conseils</strong> des candidats qui ont réussi avec <strong>35/40 ou plus</strong> :

<strong>1. Commencez par les mises en situation</strong>
Les 6 mises en situation sont souvent intuitives si vous comprenez les valeurs françaises. Elles représentent 15% du test — des points "faciles" à décrocher.

<strong>2. Apprenez les chiffres clés par cœur</strong>
<ul>
<li>Mandat présidentiel : <strong>5 ans</strong></li>
<li>Sénateurs : <strong>6 ans</strong></li>
<li>Députés : <strong>5 ans</strong></li>
<li>Municipales : <strong>6 ans</strong></li>
<li>Âge de vote : <strong>18 ans</strong></li>
<li>Régions métropolitaines : <strong>13</strong></li>
<li>Départements : <strong>101</strong></li>
<li>Communes : <strong>≈ 36 000</strong></li>
</ul>

<strong>3. Maîtrisez les dates incontournables</strong>
1789 (Révolution), 1848 (suffrage universel masculin), 1905 (laïcité), 1944 (vote des femmes), 1958 (Ve République), 1992 (traité de Maastricht).

<strong>4. Comprenez la laïcité — c'est LE sujet piège</strong>
La laïcité ne signifie pas "interdiction des religions" mais "neutralité de l'État et liberté de conscience".

<strong>5. Lisez chaque question deux fois</strong>
Beaucoup d'erreurs viennent d'une lecture trop rapide. Prenez 10 secondes pour bien comprendre la question.

<strong>6. Éliminez les réponses absurdes d'abord</strong>
Sur 4 propositions, 2 sont généralement facilement éliminables.

<strong>7. Ne changez pas de réponse sans bonne raison</strong>
Votre première intuition est souvent la bonne.

<strong>8. Gérez votre temps : 1 minute par question</strong>
Ne restez pas bloqué plus de 1 min 30 sur une question. Passez et revenez ensuite.

<strong>9. Passez au moins 3 examens blancs avant le jour J</strong>
C'est statistiquement le facteur n°1 de réussite.

<strong>10. Révisez la veille, mais dormez bien</strong>
Un cerveau reposé performe mieux qu'un cerveau épuisé par une nuit blanche.`
    }
  ],

  conclusion: `Le <strong>test civique</strong> peut sembler intimidant, mais avec une <strong>préparation gratuite et régulière</strong>, il est tout à fait accessible. Les candidats qui s'entraînent sérieusement avec des <strong>examens blancs en conditions réelles</strong> réussissent dans l'immense majorité des cas. Sur <strong>Test Civique France</strong>, vous avez accès à <strong>800+ questions gratuites</strong>, des <strong>examens blancs chronométrés</strong> et un <strong>suivi de progression</strong> pour identifier vos lacunes. Ne laissez pas 90 € et votre dossier de séjour/naturalisation dépendre du hasard — <strong>entraînez-vous dès maintenant</strong>.`,

  faq: [
    {
      question: "Le test civique est-il gratuit ?",
      answer: "Non, le test civique officiel coûte 90 € dans un centre agréé. En revanche, l'entraînement est gratuit sur des plateformes comme Test Civique France qui proposent des examens blancs et des QCM sans frais."
    },
    {
      question: "Où faire un test civique blanc gratuit en ligne ?",
      answer: "Sur testciviquefrance.fr, vous pouvez passer des examens blancs gratuits en conditions réelles : 40 questions, 45 minutes, chronomètre, score détaillé par thématique et corrections expliquées."
    },
    {
      question: "Combien de questions comporte le test civique ?",
      answer: "Le test civique comporte 40 questions QCM réparties en 5 thématiques. Il faut obtenir au minimum 32 bonnes réponses (80%) pour réussir."
    },
    {
      question: "Peut-on repasser le test civique en cas d'échec ?",
      answer: "Oui, vous pouvez repasser le test après un délai minimum (généralement 30 jours). Le coût de 90 € est à nouveau à votre charge."
    },
    {
      question: "Quelle est la durée du test civique ?",
      answer: "Le test civique dure 45 minutes maximum pour 40 questions, soit environ 1 minute par question. La gestion du temps est cruciale."
    },
    {
      question: "Le test civique est-il difficile ?",
      answer: "Le test civique n'est pas particulièrement difficile si vous êtes bien préparé. Les questions portent sur des connaissances de base sur la France. Avec 3 à 4 semaines de révision et des examens blancs, la majorité des candidats réussissent."
    },
    {
      question: "Quelles sont les 5 thématiques du test civique ?",
      answer: "1) Principes et valeurs de la République, 2) Histoire et géographie de la France, 3) Institutions françaises et européennes, 4) Droits et devoirs du citoyen, 5) Vie dans la société française."
    },
    {
      question: "Comment s'inscrire au test civique officiel ?",
      answer: "L'inscription se fait en ligne sur le site de la CCI de votre région. Vous aurez besoin d'une pièce d'identité, d'une attestation OFII et de 90 € pour le paiement."
    }
  ],

  keywords: [
    'test civique gratuit',
    'test civique gratuit en ligne',
    'test civique blanc',
    'examen blanc test civique',
    'examen civique gratuit',
    'test civique 2026',
    'test civique en ligne',
    'QCM test civique',
    'entrainement test civique',
    'questions test civique',
    'test civique naturalisation',
    'test civique titre de séjour',
    'test civique 40 questions',
    'réussir test civique',
    'préparation test civique gratuit',
    'test civique france',
    'examen civique 2026',
    'test civique blanc gratuit',
    'simulation test civique'
  ],

  videos: [
    {
      videoId: 'hkJBU8MjWKs',
      title: 'Les institutions de la Ve République - Vie publique'
    },
    {
      videoId: 'RAvW4z1J7r0',
      title: 'La laïcité en France expliquée simplement'
    },
    {
      videoId: 'scBSHnFjuxo',
      title: 'Les valeurs de la République française'
    }
  ],

  sources: [
    {
      title: 'Décret n°2025-647 — Test de connaissances civiques (Legifrance)',
      url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051636982',
      type: 'legal',
      description: 'Texte officiel instituant le test civique obligatoire.'
    },
    {
      title: 'Service-public.fr — Test de connaissance civique',
      url: 'https://www.service-public.fr/particuliers/vosdroits/F39745',
      type: 'official',
      description: 'Informations officielles sur les modalités du test civique.'
    },
    {
      title: 'OFII — Office Français de l\'Immigration et de l\'Intégration',
      url: 'https://www.ofii.fr/',
      type: 'official',
      description: 'Site officiel de l\'OFII, en charge du parcours d\'intégration.'
    },
    {
      title: 'CCI Paris — Centres agréés examen civique 2026',
      url: 'https://francais.cci-paris-idf.fr/candidat',
      type: 'official',
      description: 'Liste des centres agréés pour passer le test civique.'
    },
    {
      title: 'Vie publique — Les valeurs de la République',
      url: 'https://www.vie-publique.fr/fiches/les-valeurs-de-la-republique',
      type: 'official',
      description: 'Fiches pédagogiques sur les valeurs républicaines.'
    }
  ]
};


// ============================================================================
// ARTICLE 2 : NIVEAU DE LANGUE FRANÇAIS — NATIONALITÉ, TITRE DE SÉJOUR, TCF
// ============================================================================
export const niveauLangueNationaliteFrancaiseContent: ArticleFullContent = {
  slug: 'niveau-de-langue-francais-nationalite-titre-sejour-a2-b1-2026',
  introduction: `Quel <strong>niveau de français</strong> faut-il pour obtenir la <strong>nationalité française</strong> ? Et pour un <strong>titre de séjour</strong> ? En 2026, la maîtrise de la langue française est un <strong>critère légal incontournable</strong> dans presque toutes les démarches d'immigration en France. Selon votre situation (naturalisation, carte de séjour pluriannuelle, carte de résident, regroupement familial), le <strong>niveau requis varie de A2 à B1</strong> sur l'échelle du <strong>CECRL</strong> (Cadre Européen Commun de Référence pour les Langues).

Cet article vous explique <strong>précisément</strong> quel niveau est exigé pour chaque démarche, <strong>quels diplômes et tests sont acceptés</strong> (TCF, DELF, TEF), <strong>où et comment passer ces tests</strong>, <strong>combien ça coûte</strong>, et comment atteindre le niveau requis même si vous partez de zéro.`,

  sections: [
    {
      id: 'niveaux-cecrl-expliques',
      title: "Les niveaux de français A1, A2, B1, B2 : comprendre le CECRL",
      content: `Le <strong>CECRL</strong> (Cadre Européen Commun de Référence pour les Langues) est le standard international pour évaluer la maîtrise d'une langue. Voici les niveaux qui concernent les démarches d'immigration en France :

| Niveau | Description | Capacité |
|---|---|---|
| <strong>A1</strong> | Débutant | Comprendre et utiliser des phrases très simples (se présenter, acheter) |
| <strong>A2</strong> | Élémentaire | Communiquer sur des sujets familiers (famille, travail, courses) |
| <strong>B1</strong> | Intermédiaire | Comprendre l'essentiel sur des sujets courants, donner son avis, raconter un événement |
| <strong>B2</strong> | Avancé | Comprendre des textes complexes, s'exprimer avec aisance et spontanéité |

<strong>En résumé pour l'immigration :</strong>
<ul>
<li><strong>A2</strong> → Minimum pour la plupart des titres de séjour</li>
<li><strong>B1 oral</strong> → Obligatoire pour la naturalisation</li>
<li><strong>B1 écrit + oral</strong> → Recommandé pour la naturalisation (certaines préfectures l'exigent)</li>
</ul>

→ <strong>Source :</strong> <a href="https://www.coe.int/fr/web/common-european-framework-reference-languages" target="_blank" rel="noopener">Conseil de l'Europe — CECRL</a>`
    },
    {
      id: 'niveau-langue-naturalisation',
      title: "Niveau de français pour la naturalisation : B1 obligatoire",
      content: `Pour obtenir la <strong>nationalité française par naturalisation</strong>, vous devez justifier d'un <strong>niveau B1 oral minimum</strong>. C'est une condition légale fixée par le <strong>Code civil (article 21-24)</strong>.

<strong>Ce que B1 oral signifie concrètement :</strong>
<ul>
<li>Vous pouvez <strong>comprendre l'essentiel</strong> d'une conversation en français courant</li>
<li>Vous pouvez <strong>exprimer votre opinion</strong>, raconter une expérience, parler de vos projets</li>
<li>Vous pouvez <strong>participer à l'entretien d'assimilation</strong> à la préfecture en français</li>
</ul>

<strong>Comment prouver votre niveau B1 ?</strong>
Vous devez fournir l'un de ces documents :
<ol>
<li><strong>DELF B1</strong> — Diplôme d'Études en Langue Française (valable à vie)</li>
<li><strong>TCF ANF</strong> — Test de Connaissance du Français pour l'Accès à la Nationalité Française (valable 2 ans)</li>
<li><strong>TEF Naturalisation</strong> — Test d'Évaluation de Français (valable 2 ans)</li>
<li><strong>Diplôme français</strong> — Un diplôme obtenu en France (bac, BTS, licence…) dispense du test de langue</li>
</ol>

<strong>⚠️ Attention :</strong> Le niveau B1 est évalué sur les <strong>4 compétences</strong> : compréhension orale, expression orale, compréhension écrite, expression écrite. Certaines préfectures exigent B1 sur <strong>toutes les compétences</strong>, pas uniquement l'oral.

→ <strong>Source officielle :</strong> <a href="https://www.service-public.fr/particuliers/vosdroits/F2213" target="_blank" rel="noopener">Service-public.fr — Condition de connaissance de la langue française</a>`
    },
    {
      id: 'niveau-langue-titre-sejour',
      title: "Niveau de français pour le titre de séjour : A2 minimum",
      content: `Pour obtenir ou renouveler un <strong>titre de séjour pluriannuel</strong>, le niveau <strong>A2</strong> est exigé depuis le <strong>décret du 1er janvier 2019</strong>.

<strong>Détail par type de titre de séjour :</strong>

| Titre de séjour | Niveau requis | Justificatif |
|---|---|---|
| <strong>Carte de séjour pluriannuelle</strong> (1re délivrance) | A2 | DELF A2, TCF, ou attestation CIR |
| <strong>Carte de séjour pluriannuelle</strong> (renouvellement) | A2 | Maintien du niveau |
| <strong>Carte de résident 10 ans</strong> | A2 | DELF A2, TCF, TEF |
| <strong>Carte de séjour "vie privée et familiale"</strong> | A2 | Après le CIR |
| <strong>Carte de séjour "salarié/travailleur temporaire"</strong> | Non exigé (mais recommandé) | — |
| <strong>Carte de séjour "étudiant"</strong> | Non exigé | Inscription universitaire suffit |
| <strong>Naturalisation</strong> | <strong>B1</strong> | DELF B1, TCF ANF, TEF |

<strong>Le rôle du CIR (Contrat d'Intégration Républicaine) :</strong>
Lors de votre premier titre de séjour, vous signez un <strong>CIR</strong> avec l'OFII. Ce contrat inclut :
<ul>
<li>Un <strong>test de positionnement linguistique</strong> (gratuit)</li>
<li>Si votre niveau est inférieur à A1 : <strong>jusqu'à 600 heures de cours de français gratuits</strong></li>
<li>Une <strong>formation civique</strong> de 4 jours</li>
<li>Un <strong>entretien personnalisé</strong></li>
</ul>

→ <strong>Source officielle :</strong> <a href="https://www.ofii.fr/le-contrat-d-integration-republicaine/" target="_blank" rel="noopener">OFII — Le Contrat d'Intégration Républicaine</a>`
    },
    {
      id: 'tests-langue-tcf-delf-tef',
      title: "TCF, DELF, TEF : quel test de français choisir en 2026 ?",
      content: `Il existe <strong>3 principaux tests de français</strong> reconnus pour les démarches d'immigration. Voici le comparatif complet :

<strong>1. DELF (Diplôme d'Études en Langue Française)</strong>
<ul>
<li>✅ <strong>Valable à vie</strong> — c'est un diplôme, pas un test</li>
<li>✅ Reconnu partout dans le monde</li>
<li>💰 Prix : 100 à 200 € selon le centre et le niveau</li>
<li>📍 Où passer : Centres d'examen agréés (Alliance Française, universités)</li>
<li>⏱️ Résultats : 4 à 6 semaines</li>
<li>🎯 Recommandé pour : naturalisation (DELF B1), titre de séjour (DELF A2)</li>
</ul>

<strong>2. TCF (Test de Connaissance du Français)</strong>
<ul>
<li>⚠️ <strong>Valable 2 ans</strong></li>
<li>✅ Résultats plus rapides (2-3 semaines)</li>
<li>💰 Prix : 80 à 150 € selon la version</li>
<li>📍 Où passer : Centres agréés par France Éducation international</li>
<li>🎯 Versions spécifiques : TCF ANF (naturalisation), TCF IRN (intégration/naturalisation)</li>
</ul>

<strong>3. TEF (Test d'Évaluation de Français)</strong>
<ul>
<li>⚠️ <strong>Valable 2 ans</strong></li>
<li>✅ Disponible en format numérique</li>
<li>💰 Prix : 120 à 180 €</li>
<li>📍 Où passer : CCI (Chambre de Commerce et d'Industrie)</li>
<li>🎯 Version spécifique : TEF Naturalisation</li>
</ul>

<strong>Notre recommandation :</strong>
<ul>
<li>Pour la <strong>naturalisation</strong> → passez le <strong>DELF B1</strong> (valable à vie, pas besoin de le repasser)</li>
<li>Pour un <strong>titre de séjour urgent</strong> → passez le <strong>TCF</strong> (résultats plus rapides)</li>
<li>Si vous avez un <strong>bon niveau</strong> → visez le <strong>DELF B2</strong> directement (plus valorisant dans le dossier)</li>
</ul>

→ <strong>Source officielle :</strong> <a href="https://www.france-education-international.fr/hub/diplomes-tests" target="_blank" rel="noopener">France Éducation International — Diplômes et tests</a>`
    },
    {
      id: 'comment-atteindre-niveau-requis',
      title: "Comment atteindre le niveau A2 ou B1 : méthodes et ressources gratuites",
      content: `Que vous partiez de zéro ou que vous ayez déjà des bases, voici un <strong>plan concret</strong> pour atteindre le niveau requis :

<strong>De 0 à A2 (6 à 12 mois)</strong>
<ul>
<li>📚 <strong>Cours OFII gratuits</strong> : jusqu'à 600 heures de français si votre niveau initial est inférieur à A1</li>
<li>📱 <strong>Applications gratuites</strong> : Duolingo (gratuit), TV5 Monde "Apprendre le français" (gratuit)</li>
<li>🎥 <strong>YouTube</strong> : chaîne "Français avec Pierre", "Français Authentique"</li>
<li>🏫 <strong>Associations</strong> : cours de français gratuits en mairie ou en association (Croix-Rouge, Secours populaire, Emmaüs)</li>
</ul>

<strong>De A2 à B1 (3 à 6 mois supplémentaires)</strong>
<ul>
<li>📰 <strong>Lire l'actualité</strong> en français simplifié : <a href="https://francaisfacile.rfi.fr/" target="_blank" rel="noopener">RFI — Journal en français facile</a></li>
<li>📺 <strong>Regarder la télé française</strong> avec sous-titres (France 2, Arte, TF1)</li>
<li>🗣️ <strong>Pratiquer l'oral</strong> : conversation avec des Français, groupes de discussion Meetup</li>
<li>📝 <strong>Écrire quotidiennement</strong> : journal personnel, messages, résumés d'articles</li>
<li>🏫 <strong>Alliance Française</strong> : cours intensifs (payants mais très efficaces)</li>
</ul>

<strong>Ressources 100% gratuites :</strong>
<ul>
<li><a href="https://apprendre.tv5monde.com/" target="_blank" rel="noopener">TV5 Monde — Apprendre le français</a> — Exercices interactifs gratuits</li>
<li><a href="https://francaisfacile.rfi.fr/" target="_blank" rel="noopener">RFI — Français facile</a> — Journal en français simplifié</li>
<li><a href="https://www.fun-mooc.fr/" target="_blank" rel="noopener">FUN-MOOC</a> — Cours en ligne gratuits des universités françaises</li>
<li>Bibliothèques municipales — Livres, journaux et parfois cours de conversation gratuits</li>
</ul>

💡 <strong>Conseil :</strong> Combinez votre apprentissage du français avec votre préparation au test civique. En révisant les valeurs de la République, les institutions et l'histoire de France, vous améliorez votre français ET vous préparez l'examen civique en même temps.`
    },
    {
      id: 'dispenses-niveau-langue',
      title: "Dispenses de test de langue : qui est concerné ?",
      content: `Certaines personnes sont <strong>dispensées</strong> de fournir un justificatif de niveau de français :

<strong>Dispenses pour la naturalisation :</strong>
<ul>
<li>✅ Titulaire d'un <strong>diplôme français</strong> de niveau CAP minimum (brevet, bac, BTS, licence, master…)</li>
<li>✅ Titulaire d'un diplôme de <strong>français langue étrangère</strong> (FLE) de niveau B1 minimum</li>
<li>✅ Personnes de plus de <strong>65 ans</strong> (dispense partielle, appréciation au cas par cas)</li>
<li>✅ Personnes souffrant d'un <strong>handicap ou d'un état de santé</strong> rendant impossible la passation du test (certificat médical requis)</li>
</ul>

<strong>Dispenses pour le titre de séjour :</strong>
<ul>
<li>✅ Étudiants (la carte "étudiant" n'exige pas de niveau de français)</li>
<li>✅ Passeport talent / salarié en mission (pas d'exigence linguistique formelle)</li>
<li>✅ Titulaire d'un diplôme français</li>
</ul>

<strong>⚠️ Important :</strong> Même si vous êtes dispensé du test de langue, la <strong>maîtrise orale du français</strong> sera évaluée lors de l'<strong>entretien d'assimilation</strong> à la préfecture. Un agent vérifiera que vous pouvez communiquer en français. Si votre français est insuffisant, votre dossier peut être <strong>ajourné</strong>.

→ <strong>Source officielle :</strong> <a href="https://www.service-public.fr/particuliers/vosdroits/F2213" target="_blank" rel="noopener">Service-public.fr — Naturalisation et langue française</a>`
    }
  ],

  conclusion: `Le <strong>niveau de français</strong> est un pilier de votre parcours d'intégration en France. Que vous visiez un <strong>titre de séjour (A2)</strong> ou la <strong>nationalité française (B1)</strong>, le plus important est de <strong>commencer tôt</strong> et de <strong>pratiquer régulièrement</strong>. Les ressources gratuites existent (OFII, TV5 Monde, RFI, associations) — profitez-en. Et n'oubliez pas : en préparant votre <strong>test civique sur Test Civique France</strong>, vous améliorez aussi votre français, puisque toutes les questions et cours sont en français. C'est un double investissement gagnant.`,

  faq: [
    {
      question: "Quel niveau de français faut-il pour la nationalité française ?",
      answer: "Il faut justifier d'un niveau B1 minimum sur le CECRL, en compréhension et expression orales. Certaines préfectures exigent aussi le B1 à l'écrit. Vous devez fournir un DELF B1, un TCF ANF ou un TEF naturalisation."
    },
    {
      question: "Quel niveau de français pour un titre de séjour pluriannuel ?",
      answer: "Le niveau A2 est requis pour obtenir une carte de séjour pluriannuelle et pour la carte de résident de 10 ans. Vous pouvez prouver ce niveau avec un DELF A2, un TCF ou une attestation du CIR."
    },
    {
      question: "Le DELF ou le TCF : lequel choisir ?",
      answer: "Le DELF est un diplôme valable à vie, idéal pour la naturalisation. Le TCF est un test valable 2 ans, avec des résultats plus rapides. Pour la naturalisation, le DELF B1 est recommandé car vous n'aurez jamais à le repasser."
    },
    {
      question: "Combien coûte le test de français pour la naturalisation ?",
      answer: "Le DELF B1 coûte entre 100 et 200 € selon le centre. Le TCF ANF coûte entre 80 et 150 €. Le TEF naturalisation coûte entre 120 et 180 €."
    },
    {
      question: "Peut-on être dispensé du test de français ?",
      answer: "Oui, si vous avez un diplôme français (CAP minimum), un diplôme FLE de niveau B1+, si vous avez plus de 65 ans, ou si un handicap rend la passation impossible (certificat médical nécessaire)."
    },
    {
      question: "Où prendre des cours de français gratuits en France ?",
      answer: "L'OFII propose jusqu'à 600 heures gratuites dans le cadre du CIR. Les mairies, la Croix-Rouge, le Secours populaire et les associations locales offrent aussi des cours gratuits. En ligne : TV5 Monde, RFI Français Facile, Duolingo."
    },
    {
      question: "Le test civique et le test de français sont-ils différents ?",
      answer: "Oui. Le test civique (40 QCM, 90 €) évalue vos connaissances sur la République, les institutions et la vie en France. Le test de langue (DELF, TCF, TEF) évalue votre maîtrise du français. Les deux sont nécessaires."
    },
    {
      question: "Combien de temps pour passer de A2 à B1 ?",
      answer: "En moyenne 3 à 6 mois avec une pratique régulière (minimum 5 heures par semaine). Avec des cours intensifs à l'Alliance Française, cela peut aller plus vite."
    }
  ],

  keywords: [
    'niveau de langue nationalité française',
    'niveau français naturalisation',
    'niveau B1 français naturalisation',
    'niveau A2 titre de séjour',
    'DELF B1 naturalisation',
    'TCF nationalité française',
    'test de français naturalisation',
    'niveau de français pour carte de séjour',
    'CECRL niveau français immigration',
    'cours de français gratuit étranger',
    'TCF ANF',
    'TEF naturalisation',
    'niveau langue carte de résident',
    'dispense test langue naturalisation',
    'français pour étrangers France',
    'apprendre français naturalisation',
    'Alliance Française niveau B1',
    'OFII cours français gratuit'
  ],

  videos: [
    {
      videoId: '3qVP23bP6ck',
      title: 'DELF B1 : tout ce qu\'il faut savoir'
    },
    {
      videoId: 'hkJBU8MjWKs',
      title: 'Les institutions de la Ve République - Vie publique'
    }
  ],

  sources: [
    {
      title: 'Service-public.fr — Condition de connaissance de la langue française',
      url: 'https://www.service-public.fr/particuliers/vosdroits/F2213',
      type: 'official',
      description: 'Conditions linguistiques pour la naturalisation.'
    },
    {
      title: 'OFII — Le Contrat d\'Intégration Républicaine',
      url: 'https://www.ofii.fr/le-contrat-d-integration-republicaine/',
      type: 'official',
      description: 'Cours de français gratuits dans le cadre du CIR.'
    },
    {
      title: 'France Éducation International — Diplômes et tests',
      url: 'https://www.france-education-international.fr/hub/diplomes-tests',
      type: 'official',
      description: 'Informations sur le TCF, DELF et les certifications de français.'
    },
    {
      title: 'Conseil de l\'Europe — CECRL',
      url: 'https://www.coe.int/fr/web/common-european-framework-reference-languages',
      type: 'official',
      description: 'Cadre européen de référence pour les niveaux de langue.'
    },
    {
      title: 'TV5 Monde — Apprendre le français',
      url: 'https://apprendre.tv5monde.com/',
      type: 'article',
      description: 'Ressources gratuites pour apprendre le français en ligne.'
    },
    {
      title: 'RFI — Français facile',
      url: 'https://francaisfacile.rfi.fr/',
      type: 'article',
      description: 'Actualités en français simplifié pour progresser.'
    }
  ]
};


// ============================================================================
// ARTICLE 3 : CARTE DE SÉJOUR EN FRANCE 2026 — GUIDE ULTRA-COMPLET
// ============================================================================
export const carteSejourFranceGuideCompletContent: ArticleFullContent = {
  slug: 'carte-de-sejour-france-2026-guide-complet-types-demarches-renouvellement',
  introduction: `Vous vivez en France ou vous prévoyez de vous y installer ? La <strong>carte de séjour</strong> est le document administratif central de votre vie en France. En 2026, il existe <strong>plus de 15 types de titres de séjour</strong> différents, chacun avec ses conditions, sa durée et ses droits spécifiques. Entre la <strong>carte de séjour temporaire</strong> (1 an), la <strong>carte de séjour pluriannuelle</strong> (jusqu'à 4 ans), la <strong>carte de résident</strong> (10 ans) et les <strong>cartes spéciales</strong> (passeport talent, ICT, salarié en mission), il est facile de se perdre.

Ce guide <strong>ultra-complet</strong> vous explique <strong>tous les types de carte de séjour</strong> qui existent en France, les <strong>conditions d'obtention</strong>, les <strong>documents nécessaires</strong>, la <strong>procédure ANEF</strong> en ligne, les <strong>délais en préfecture</strong>, le <strong>renouvellement</strong>, et le lien avec le <strong>test civique</strong>. Que vous soyez étudiant, salarié, conjoint de Français, réfugié ou entrepreneur — ce guide est fait pour vous.`,

  sections: [
    {
      id: 'types-carte-sejour-france',
      title: "Tous les types de carte de séjour en France (liste complète 2026)",
      content: `En France, les titres de séjour se divisent en <strong>3 grandes catégories</strong> :

<strong>1. Carte de séjour temporaire (CST) — Durée : 1 an maximum</strong>
| Type | Motif | Durée |
|---|---|---|
| CST "étudiant" | Études supérieures en France | 1 an (renouvelable) |
| CST "salarié" | Contrat de travail en France | 1 an |
| CST "travailleur temporaire" | Mission temporaire | Durée de la mission |
| CST "vie privée et familiale" | Liens familiaux, conjoint de Français | 1 an |
| CST "visiteur" | Séjour sans travailler (ressources suffisantes) | 1 an |
| CST "recherche d'emploi / création d'entreprise" | Après études | 1 an (non renouvelable) |
| CST "stagiaire" | Stage professionnel | Durée du stage |

<strong>2. Carte de séjour pluriannuelle (CSP) — Durée : 2 à 4 ans</strong>
| Type | Conditions | Durée |
|---|---|---|
| CSP générale | Après 1 an de CST + CIR validé + test civique réussi | 4 ans |
| CSP "passeport talent" | Compétences/talents exceptionnels | 4 ans |
| CSP "salarié détaché ICT" | Transfert intra-groupe | 3 ans |
| CSP "travailleur saisonnier" | Emploi saisonnier | 3 ans |
| CSP "étudiant" | Après 1re année en France | Durée des études (max 4 ans) |

<strong>3. Carte de résident (CR) — Durée : 10 ans</strong>
| Type | Conditions | Durée |
|---|---|---|
| CR de plein droit | Conjoint de Français (3 ans de mariage), parent d'enfant français | 10 ans |
| CR longue durée UE | 5 ans de séjour régulier + ressources stables | 10 ans |
| CR permanent | Après 1re carte de résident | 10 ans (renouvelable automatiquement) |
| CR "retraité" | Retraité ayant vécu en France | 10 ans |

→ <strong>Source officielle complète :</strong> <a href="https://www.service-public.fr/particuliers/vosdroits/N110" target="_blank" rel="noopener">Service-public.fr — Titres de séjour des étrangers en France</a>`
    },
    {
      id: 'documents-carte-sejour',
      title: "Documents nécessaires pour une carte de séjour en 2026",
      content: `Les documents à fournir dépendent du type de titre, mais voici le <strong>tronc commun</strong> valable pour presque toutes les demandes :

<strong>Documents obligatoires (tous les titres) :</strong>
<ul>
<li>📄 <strong>Passeport en cours de validité</strong> (+ copie de toutes les pages)</li>
<li>📄 <strong>Visa long séjour</strong> (VLS-TS ou VLS pour 1re demande)</li>
<li>📷 <strong>3 photos d'identité</strong> aux normes françaises (fond blanc, récentes)</li>
<li>📄 <strong>Justificatif de domicile</strong> de moins de 6 mois (facture EDF/eau, quittance de loyer, attestation d'hébergement)</li>
<li>💰 <strong>Timbres fiscaux</strong> (montant variable selon le titre)</li>
<li>📄 <strong>Acte de naissance</strong> (traduit par un traducteur assermenté si nécessaire)</li>
</ul>

<strong>Documents spécifiques selon le titre :</strong>

<em>Pour "salarié" :</em>
<ul>
<li>Contrat de travail visé par la DREETS</li>
<li>Autorisation de travail</li>
<li>3 derniers bulletins de salaire (pour un renouvellement)</li>
</ul>

<em>Pour "étudiant" :</em>
<ul>
<li>Inscription dans un établissement d'enseignement supérieur</li>
<li>Justificatif de ressources (minimum 615 €/mois en 2026)</li>
</ul>

<em>Pour "vie privée et familiale" (conjoint de Français) :</em>
<ul>
<li>Acte de mariage (ou PACS) transcrit</li>
<li>CNI du conjoint français</li>
<li>Justificatif de vie commune</li>
</ul>

<em>Pour "carte de séjour pluriannuelle" :</em>
<ul>
<li>Attestation de <strong>réussite au test civique</strong> (80% minimum)</li>
<li>Attestation de <strong>niveau de français A2</strong></li>
<li>Attestation de suivi du <strong>CIR</strong></li>
</ul>

<strong>Coût des timbres fiscaux (2026) :</strong>
| Titre | Taxe | Timbre OFII | Total |
|---|---|---|---|
| CST "étudiant" | 75 € | — | <strong>75 €</strong> |
| CST "salarié" | 225 € | — | <strong>225 €</strong> |
| CST "vie privée/familiale" | 225 € | — | <strong>225 €</strong> |
| CSP générale (4 ans) | 225 € | — | <strong>225 €</strong> |
| Carte de résident 10 ans | 225 € | 19 € | <strong>244 €</strong> |

→ <strong>Source officielle :</strong> <a href="https://www.service-public.fr/particuliers/vosdroits/F17281" target="_blank" rel="noopener">Service-public.fr — Prix du titre de séjour</a>`
    },
    {
      id: 'procedure-anef-prefecture',
      title: "Procédure ANEF 2026 : demander sa carte de séjour en ligne",
      content: `Depuis 2023, la plupart des premières demandes et renouvellements de titre de séjour se font en ligne via la plateforme <strong>ANEF</strong> (Administration Numérique pour les Étrangers en France).

<strong>Comment faire sa demande sur ANEF :</strong>
<ol>
<li>Créez un compte sur <a href="https://administration-etrangers-en-france.interieur.gouv.fr/" target="_blank" rel="noopener">administration-etrangers-en-france.interieur.gouv.fr</a></li>
<li>Sélectionnez votre type de demande (première demande, renouvellement, changement de statut)</li>
<li>Remplissez le formulaire en ligne</li>
<li>Téléversez vos pièces justificatives (format PDF ou JPEG)</li>
<li>Payez les timbres fiscaux en ligne</li>
<li>Recevez une <strong>attestation de dépôt</strong> (valant autorisation de séjour provisoire)</li>
<li>Suivez l'avancement de votre dossier dans votre espace personnel</li>
<li>Rendez-vous en préfecture pour la <strong>remise du titre</strong> (prise de photo et empreintes)</li>
</ol>

<strong>Délais moyens de traitement en 2026 :</strong>
| Type de demande | Délai moyen |
|---|---|
| Renouvellement simple | 2 à 4 mois |
| Changement de statut | 3 à 6 mois |
| Première demande (après visa) | 1 à 3 mois |
| Carte de résident | 4 à 8 mois |
| Naturalisation | 12 à 18 mois |

<strong>⚠️ Conseils importants :</strong>
<ul>
<li>Déposez votre demande de renouvellement <strong>2 à 4 mois avant l'expiration</strong> de votre titre actuel</li>
<li>L'<strong>attestation de dépôt ANEF</strong> vous autorise à rester et travailler en France pendant le traitement</li>
<li>Vérifiez bien que <strong>tous vos documents sont lisibles</strong> — un scan flou = rejet du dossier</li>
<li>Conservez <strong>tous les récépissés et attestations</strong> : ils prouvent votre séjour régulier</li>
</ul>

→ <strong>Plateforme officielle :</strong> <a href="https://administration-etrangers-en-france.interieur.gouv.fr/" target="_blank" rel="noopener">ANEF — Ministère de l'Intérieur</a>`
    },
    {
      id: 'renouvellement-carte-sejour',
      title: "Renouveler sa carte de séjour en 2026 : calendrier et erreurs à éviter",
      content: `Le <strong>renouvellement</strong> de votre carte de séjour est une étape critique. Un renouvellement raté peut entraîner une <strong>situation irrégulière</strong> ou un <strong>refus de séjour</strong>.

<strong>Calendrier idéal de renouvellement :</strong>
| Moment | Action |
|---|---|
| <strong>4 mois avant expiration</strong> | Rassemblez tous les documents |
| <strong>3 mois avant expiration</strong> | Déposez la demande sur ANEF |
| <strong>2 mois avant expiration</strong> | Vérifiez que le dossier est complet (alerte ANEF) |
| <strong>1 mois avant expiration</strong> | Si pas de réponse : contactez la préfecture |
| <strong>Jour d'expiration</strong> | Votre attestation de dépôt vous protège |

<strong>Les 7 erreurs qui bloquent un renouvellement :</strong>
<ol>
<li>❌ <strong>Demander trop tard</strong> — Déposer 1 semaine avant l'expiration crée un risque de rupture de séjour</li>
<li>❌ <strong>Documents illisibles</strong> — Scans flous, photos de mauvaise qualité</li>
<li>❌ <strong>Justificatif de domicile périmé</strong> — Plus de 6 mois = rejeté</li>
<li>❌ <strong>Oublier le test civique</strong> — Pour la carte pluriannuelle, l'attestation de réussite est obligatoire</li>
<li>❌ <strong>Timbres fiscaux manquants</strong> — Le dossier est bloqué tant que le paiement n'est pas effectué</li>
<li>❌ <strong>Changement d'adresse non déclaré</strong> — Vous devez signaler tout changement à la préfecture</li>
<li>❌ <strong>Ne pas répondre aux demandes de pièces complémentaires</strong> — Si la préfecture demande un document et que vous ne répondez pas sous 1 mois, le dossier est classé sans suite</li>
</ol>

<strong>En cas de problème :</strong>
<ul>
<li>📞 <strong>Numéro vert étrangers en France</strong> : 0 806 001 620 (gratuit)</li>
<li>📧 <strong>Contact préfecture</strong> : via votre espace ANEF</li>
<li>⚖️ <strong>Recours</strong> : en cas de refus, vous avez 2 mois pour saisir le tribunal administratif</li>
</ul>`
    },
    {
      id: 'carte-sejour-test-civique-lien',
      title: "Carte de séjour et test civique : le lien en 2026",
      content: `Depuis 2025, le <strong>test civique</strong> est devenu une condition obligatoire pour plusieurs types de cartes de séjour. Voici le détail :

<strong>Quand le test civique est-il obligatoire ?</strong>
| Titre de séjour | Test civique obligatoire ? |
|---|---|
| CST 1 an (1re délivrance) | ❌ Non |
| <strong>CSP pluriannuelle 4 ans</strong> | ✅ <strong>OUI</strong> |
| <strong>Renouvellement de CSP</strong> | ✅ <strong>OUI</strong> (si pas encore passé) |
| Carte de résident 10 ans | ✅ <strong>OUI</strong> |
| <strong>Naturalisation</strong> | ✅ <strong>OUI</strong> (+ test de langue B1) |
| CST "étudiant" | ❌ Non |
| Passeport talent | ❌ Non |

<strong>Le parcours type d'un étranger en France :</strong>
<ol>
<li>🛬 <strong>Arrivée en France</strong> avec un visa long séjour</li>
<li>📋 <strong>Signature du CIR</strong> (Contrat d'Intégration Républicaine) avec l'OFII</li>
<li>🗣️ <strong>Cours de français</strong> (si nécessaire) et formation civique (4 jours)</li>
<li>📄 <strong>Carte de séjour temporaire</strong> (1 an)</li>
<li>✅ <strong>Test civique réussi</strong> (32/40) + niveau français A2</li>
<li>📄 <strong>Carte de séjour pluriannuelle</strong> (4 ans)</li>
<li>🗣️ <strong>Niveau français B1</strong> atteint (pour naturalisation)</li>
<li>📄 <strong>Demande de naturalisation</strong> (après 5 ans de résidence)</li>
<li>🇫🇷 <strong>Nationalité française</strong></li>
</ol>

<strong>Préparez votre test civique dès maintenant :</strong> Chaque étape du parcours d'intégration est liée. En commençant à réviser le test civique tôt, vous gagnerez du temps sur toutes les démarches futures. Sur <a href="https://www.testciviquefrance.fr/signup">Test Civique France</a>, accédez gratuitement à 800+ questions et des examens blancs en conditions réelles.`
    },
    {
      id: 'refus-carte-sejour-recours',
      title: "Refus de carte de séjour : que faire ? Vos recours en 2026",
      content: `Si votre demande de carte de séjour est <strong>refusée</strong>, ne paniquez pas. Vous avez des <strong>droits et des recours</strong> :

<strong>Les motifs fréquents de refus :</strong>
<ul>
<li>📋 Dossier <strong>incomplet</strong> (pièces manquantes)</li>
<li>💰 <strong>Ressources insuffisantes</strong> pour le type de titre demandé</li>
<li>❌ <strong>Menace à l'ordre public</strong> (condamnation pénale)</li>
<li>🗣️ <strong>Échec au test civique</strong> ou <strong>niveau de français insuffisant</strong></li>
<li>📄 <strong>Fraude documentaire</strong> (faux documents = interdiction de séjour)</li>
</ul>

<strong>Vos recours après un refus :</strong>

<strong>1. Recours gracieux (à la préfecture)</strong>
<ul>
<li>Délai : <strong>2 mois</strong> après la notification du refus</li>
<li>Adressez un courrier recommandé au préfet en expliquant votre situation</li>
<li>Joignez les pièces manquantes ou correctrices</li>
<li>La préfecture a 2 mois pour répondre. Silence = rejet implicite</li>
</ul>

<strong>2. Recours contentieux (tribunal administratif)</strong>
<ul>
<li>Délai : <strong>2 mois</strong> après le refus (ou après le rejet du recours gracieux)</li>
<li>Saisie du tribunal administratif de votre lieu de résidence</li>
<li>L'aide d'un <strong>avocat en droit des étrangers</strong> est fortement recommandée</li>
<li>L'aide juridictionnelle (AJ) peut couvrir les frais si vous avez des revenus modestes</li>
</ul>

<strong>3. Référé-liberté (urgence)</strong>
<ul>
<li>Si vous êtes menacé d'expulsion (OQTF) et que vos droits fondamentaux sont en danger</li>
<li>Le juge statue sous <strong>48 heures</strong></li>
</ul>

<strong>Ressources d'aide juridique :</strong>
<ul>
<li>⚖️ <a href="https://www.justice.fr/themes/aide-juridictionnelle" target="_blank" rel="noopener">Aide juridictionnelle — justice.fr</a></li>
<li>📞 <a href="https://www.cidff.info/" target="_blank" rel="noopener">CIDFF — Centre d'information sur les droits des femmes et des familles</a></li>
<li>📞 <a href="https://www.lacimade.org/" target="_blank" rel="noopener">La Cimade — Aide aux étrangers</a></li>
<li>📞 <strong>Numéro vert</strong> : 0 806 001 620 (information étrangers en France)</li>
</ul>

→ <strong>Source officielle :</strong> <a href="https://www.service-public.fr/particuliers/vosdroits/F11891" target="_blank" rel="noopener">Service-public.fr — Étranger en France : recours après refus</a>`
    }
  ],

  conclusion: `La <strong>carte de séjour</strong> est bien plus qu'un simple document — c'est la clé de votre vie en France : travail, logement, soins, études, et à terme, la <strong>nationalité française</strong>. En 2026, avec la plateforme <strong>ANEF</strong>, la plupart des démarches se font en ligne, mais il est crucial de <strong>bien préparer son dossier</strong>, de <strong>respecter les délais</strong> et de <strong>réussir le test civique</strong> pour accéder à la carte pluriannuelle. N'attendez pas le dernier moment pour vous préparer : chaque jour de révision sur <a href="https://www.testciviquefrance.fr/dashboard">Test Civique France</a> vous rapproche de votre objectif.`,

  faq: [
    {
      question: "Quelle est la différence entre carte de séjour temporaire et pluriannuelle ?",
      answer: "La carte temporaire dure 1 an maximum. La carte pluriannuelle dure jusqu'à 4 ans et nécessite d'avoir réussi le test civique, atteint le niveau A2 en français et suivi le CIR. La pluriannuelle est renouvelable."
    },
    {
      question: "Comment obtenir une carte de séjour de 10 ans en France ?",
      answer: "La carte de résident de 10 ans est accessible après 5 ans de séjour régulier avec des ressources stables, ou automatiquement pour certains profils (conjoint de Français après 3 ans de mariage, parent d'enfant français, réfugié)."
    },
    {
      question: "Combien coûte une carte de séjour en France en 2026 ?",
      answer: "Le coût varie selon le type : 75 € pour étudiant, 225 € pour salarié/vie privée et familiale/pluriannuelle, 244 € pour la carte de résident. Ce sont des timbres fiscaux à payer en ligne ou en bureau de tabac."
    },
    {
      question: "Peut-on travailler avec un récépissé de demande de carte de séjour ?",
      answer: "Oui, si le récépissé porte la mention 'autorise son titulaire à travailler'. C'est le cas pour les renouvellements de cartes de séjour 'salarié', 'vie privée et familiale', et pluriannuelles."
    },
    {
      question: "Que se passe-t-il si ma carte de séjour expire pendant le traitement ?",
      answer: "L'attestation de dépôt ANEF ou le récépissé de renouvellement vous autorisent à rester et travailler en France en attendant la nouvelle carte. Conservez bien ces documents sur vous."
    },
    {
      question: "Le test civique est-il obligatoire pour la carte de séjour ?",
      answer: "Oui, pour la carte de séjour pluriannuelle (4 ans), la carte de résident (10 ans) et la naturalisation. Il n'est pas obligatoire pour la première carte temporaire d'1 an ni pour les cartes étudiant ou passeport talent."
    },
    {
      question: "Comment faire un changement de statut (ex: étudiant vers salarié) ?",
      answer: "Le changement de statut se fait sur la plateforme ANEF. Il faut avoir une promesse d'embauche ou un contrat de travail, une autorisation de travail DREETS, et déposer la demande avant l'expiration de votre titre actuel."
    },
    {
      question: "Quels sont les délais pour obtenir une carte de séjour en 2026 ?",
      answer: "Les délais varient selon la préfecture : 1 à 3 mois pour une première demande après visa, 2 à 4 mois pour un renouvellement, 3 à 6 mois pour un changement de statut, 4 à 8 mois pour une carte de résident."
    }
  ],

  keywords: [
    'carte de séjour France',
    'carte de séjour 2026',
    'titre de séjour France',
    'carte de séjour pluriannuelle',
    'carte de résident 10 ans',
    'renouvellement carte de séjour',
    'demande carte de séjour en ligne',
    'ANEF titre de séjour',
    'carte de séjour salarié',
    'carte de séjour étudiant',
    'carte de séjour vie privée familiale',
    'carte de séjour conjoint de Français',
    'documents carte de séjour',
    'prix titre de séjour 2026',
    'timbres fiscaux carte de séjour',
    'refus carte de séjour recours',
    'changement de statut titre de séjour',
    'passeport talent France',
    'carte séjour',
    'titre séjour France guide',
    'préfecture carte de séjour'
  ],

  videos: [
    {
      videoId: 'hkJBU8MjWKs',
      title: 'Les institutions de la Ve République - Vie publique'
    },
    {
      videoId: 'scBSHnFjuxo',
      title: 'Les valeurs de la République française'
    }
  ],

  sources: [
    {
      title: 'Service-public.fr — Titres de séjour des étrangers en France',
      url: 'https://www.service-public.fr/particuliers/vosdroits/N110',
      type: 'official',
      description: 'Guide officiel complet des titres de séjour.'
    },
    {
      title: 'ANEF — Administration Numérique pour les Étrangers en France',
      url: 'https://administration-etrangers-en-france.interieur.gouv.fr/',
      type: 'official',
      description: 'Plateforme officielle de demande de titre de séjour en ligne.'
    },
    {
      title: 'Service-public.fr — Prix du titre de séjour',
      url: 'https://www.service-public.fr/particuliers/vosdroits/F17281',
      type: 'official',
      description: 'Tarifs des timbres fiscaux pour les titres de séjour.'
    },
    {
      title: 'Service-public.fr — Recours après refus de titre de séjour',
      url: 'https://www.service-public.fr/particuliers/vosdroits/F11891',
      type: 'official',
      description: 'Vos droits en cas de refus de carte de séjour.'
    },
    {
      title: 'La Cimade — Accompagnement des étrangers',
      url: 'https://www.lacimade.org/',
      type: 'article',
      description: 'Association d\'aide et de conseil juridique pour les étrangers en France.'
    },
    {
      title: 'OFII — Office Français de l\'Immigration et de l\'Intégration',
      url: 'https://www.ofii.fr/',
      type: 'official',
      description: 'Organisme en charge du CIR et de l\'intégration des étrangers.'
    }
  ]
};
