/**
 * Article 02 — Inscription à l'examen civique 2026 : centres agréés, prix, étapes
 * Priorité Haute — pilier transactionnel
 * Réécriture complète le 01/06/2026 à partir du brief 02 (sources officielles citées).
 * NB : le slug d'origine est conservé pour préserver les liens internes et l'historique SEO.
 */

import { ArticleFullContent } from './articles-part1';

export const inscriptionTestCiviqueContent: ArticleFullContent = {
  slug: 'inscription-test-civique-2026-ou-quand-comment-sinscrire',

  introduction: `Vous avez compris que **l'examen civique** est obligatoire depuis le 1er janvier 2026 pour obtenir une carte de séjour pluriannuelle, une carte de résident de 10 ans ou la nationalité française. Vient maintenant la question concrète : **où s'inscrire, combien ça coûte, et combien de temps faut-il prévoir ?** Ce guide vous explique pas à pas la procédure officielle telle qu'elle est décrite par [Service-Public.fr](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426) et par les deux opérateurs agréés — **France Éducation international (FEI)** et la **CCI Paris Île-de-France** — pour réserver votre place sans mauvaise surprise. Vous saurez quel document indispensable préparer (le **numéro AGDREF**), à quoi vous attendre côté tarif (autour de **70 € à 90 €** selon le centre) et pourquoi il faut vous y prendre **au moins deux mois à l'avance** si vous tenez à votre calendrier administratif. Un conseil de méthode : **entraînez-vous gratuitement avant de payer la session officielle** — on vous explique pourquoi à la fin.`,

  sections: [
    {
      id: 'centres-agrees-examen-civique',
      title: 'Où passer l\'examen civique : les centres agréés en 2026',
      content: `L'examen civique n'est pas organisé directement par les préfectures ni par l'OFII. Selon [Service-Public.fr](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426), il est passé dans un **centre agréé** par l'État, qui gère l'inscription, le passage de l'épreuve et la délivrance de l'attestation.

**Les deux opérateurs agréés au niveau national**

Deux organismes sont agréés en 2026 pour faire passer l'examen civique sur l'ensemble du territoire :

1. **France Éducation international (FEI)** — opérateur public déjà bien connu pour ses certifications de français (DELF, DILF, TCF). Le portail dédié regroupe l'ensemble des informations pratiques pour les candidats : [france-education-international.fr — examen civique](https://www.france-education-international.fr/examen-civique/examen-civique-informations-pour-les-candidats).
2. **CCI Paris Île-de-France** — la Chambre de commerce et d'industrie de Paris Île-de-France, agréée pour faire passer l'examen dans ses centres en région parisienne.

Concrètement, chaque opérateur dispose d'un **réseau de centres partenaires** répartis dans plusieurs régions. Vous choisissez librement le centre où vous souhaitez passer l'examen — **vous n'êtes pas tenu de passer l'examen dans le département où vous résidez**.

**Comment trouver le centre le plus proche**

- Consultez d'abord la page candidats du **FEI** (lien ci-dessus) : la liste à jour des centres y est tenue par l'opérateur lui-même.
- Pour Paris et l'Île-de-France, vérifiez également l'offre de la **CCI Paris Île-de-France**.
- La fiche [Service-Public.fr — comment passer l'examen civique (F39426)](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426) renvoie vers la documentation officielle et tient à jour les conditions générales.

**Bon réflexe**

Si votre centre de rattachement naturel est saturé (cas fréquent en Île-de-France), élargissez votre recherche à un département voisin ou à une métropole régionale. Les délais y sont souvent plus courts, et l'attestation a la **même valeur juridique** quel que soit le centre.`
    },
    {
      id: 'creer-espace-personnel',
      title: 'Étape 1 — Créer votre espace personnel « Examen civique »',
      content: `L'inscription se fait **en ligne**, via un espace personnel ouvert sur le portail de l'opérateur agréé. La procédure est décrite par [Service-Public.fr — pré-inscription à l'examen civique (R75549)](https://www.service-public.gouv.fr/particuliers/vosdroits/R75549).

**Le déroulé type**

1. **Accéder au portail** de France Éducation international ou de la CCI Paris IDF selon le centre visé.
2. **Saisir une adresse e-mail valide** — celle qui recevra votre convocation, vos résultats et votre attestation.
3. **Recevoir un lien de confirmation** envoyé sur cette adresse.
4. **Définir un mot de passe** pour accéder à votre espace personnel.
5. **Compléter votre profil candidat** avec votre identité (nom, prénom, date de naissance, nationalité).

**Préparez ces informations avant de commencer**

- Une adresse e-mail à laquelle vous accédez régulièrement (les convocations partent par mail).
- Votre identité telle qu'elle figure sur votre titre de séjour ou votre passeport.
- Votre **numéro AGDREF** (on y revient dans la section suivante).
- Un moyen de paiement (carte bancaire, en règle générale).

**Astuce calendrier**

Pensez à utiliser une adresse e-mail **stable** — pas une adresse temporaire. L'attestation est valable longtemps et vous pourriez avoir besoin de la retélécharger depuis votre espace personnel des mois plus tard, par exemple si la préfecture demande un duplicata.

> ⚠️ La plateforme exacte et son URL peuvent évoluer. Avant de créer un compte, vérifiez systématiquement le point d'entrée officiel sur [Service-Public.fr — F39426](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426) ou sur le site de l'opérateur agréé.`
    },
    {
      id: 'numero-agdref',
      title: 'Étape 2 — Le document indispensable : votre numéro AGDREF',
      content: `Pour s'inscrire à l'examen civique, vous devez fournir votre **numéro AGDREF**. Sans ce numéro, l'inscription n'est tout simplement pas possible. C'est l'identifiant qui relie votre passage de l'examen à votre dossier administratif d'étranger en France.

**Qu'est-ce que le numéro AGDREF ?**

**AGDREF** signifie **Application de Gestion des Dossiers des Ressortissants Étrangers en France**. C'est le fichier de référence du ministère de l'Intérieur qui contient le dossier individuel de chaque étranger ayant déposé une demande de titre de séjour.

Le numéro AGDREF, c'est **votre identifiant unique** dans ce système. Il vous suit pendant toute la durée de votre séjour en France, même si vous changez de titre, de département ou de situation.

**Où trouver votre numéro AGDREF**

Le numéro est imprimé sur **plusieurs documents officiels** que vous avez probablement déjà :

| Document | Où exactement |
|---|---|
| Carte de séjour (toutes catégories) | En bas du titre, libellé « N° AGDREF » ou « N° étranger » |
| Récépissé de demande de titre de séjour | Sur la première page, sous votre identité |
| Attestation de prolongation d'instruction | Dans l'en-tête du document |
| Espace personnel ANEF | Dans la rubrique « Mon profil » |
| Visa long séjour valant titre (VLS-TS) validé | Numéro communiqué après validation OFII |

**Format du numéro**

Le numéro AGDREF comporte généralement **10 chiffres**. Notez-le **sans espaces ni tirets** lors de la saisie en ligne — c'est la cause la plus fréquente d'erreurs d'inscription.

**Si vous ne le trouvez pas**

- Cherchez dans votre espace personnel sur la plateforme [ANEF](https://administration-etrangers-en-france.interieur.gouv.fr/) — il y est toujours indiqué.
- À défaut, contactez votre préfecture de rattachement pour le récupérer.
- Ne « devinez » jamais un numéro : une erreur empêchera la délivrance de votre attestation au bon nom.`
    },
    {
      id: 'cout-paiement',
      title: 'Étape 3 — Combien ça coûte et comment payer',
      content: `Contrairement à un timbre fiscal, **le tarif de l'examen civique n'est pas fixé uniformément par l'État**. C'est l'opérateur agréé qui fixe son tarif, encadré par l'administration. En 2026, le prix observé se situe **généralement autour de 70 € à 90 €** selon le centre.

**Pourquoi cette variation**

Chaque centre agréé applique son propre barème pour couvrir l'organisation de la session : location de la salle, matériel (tablettes ou ordinateurs), surveillance, correction et délivrance de l'attestation. Le tarif exact vous est communiqué **au moment de la pré-inscription**, avant tout paiement.

**Ce que le tarif couvre**

- L'organisation de l'épreuve dans un centre agréé.
- La passation des **40 questions** en conditions surveillées.
- La correction et le calcul de votre score.
- La délivrance de l'**attestation de réussite** si vous obtenez le score requis.

**Modalités de paiement**

Le paiement se fait **à l'inscription**, le plus souvent **en ligne par carte bancaire** au moment où vous validez le créneau choisi. Certains centres acceptent d'autres moyens (virement, paiement sur place) — c'est l'opérateur qui en précise les modalités sur sa page candidats.

**En cas d'échec : il faut repayer**

Si vous n'atteignez pas le score requis (32 bonnes réponses sur 40, soit 80 %), vous pouvez vous réinscrire — mais **chaque nouvelle session est payante**. C'est précisément pour cela que la préparation en amont est cruciale (voir la dernière section).

**Aides possibles**

Il n'existe pas d'aide nationale pour financer l'examen civique. En cas de difficulté financière, contactez le CCAS de votre commune ou les associations d'aide aux étrangers (CIMADE, France Terre d'Asile, La Cimade locale) : certaines ont des dispositifs ponctuels.

> ⚠️ Vérifiez le prix exact **avant** de valider votre paiement sur la page candidats de votre centre. Les sources officielles évoluent et le tarif peut être ajusté chaque année.`
    },
    {
      id: 'delais-anticiper',
      title: 'Étape 4 — Délais et disponibilité : anticipez au moins deux mois',
      content: `L'erreur classique : s'inscrire à l'examen civique **trop tard**, juste avant le dépôt du dossier en préfecture. Les places sont limitées et les délais peuvent dépasser plusieurs semaines selon les régions.

**Combien de temps avant le dépôt de votre dossier ?**

Le minimum raisonnable, c'est **2 mois entre votre inscription et le dépôt de votre dossier** auprès de la préfecture ou via [ANEF](https://administration-etrangers-en-france.interieur.gouv.fr/). Pourquoi 2 mois ?

1. Il faut **3 à 6 semaines** d'attente pour obtenir un créneau dans un centre agréé, surtout en Île-de-France.
2. Il faut compter **quelques jours** pour recevoir l'attestation de réussite après l'épreuve.
3. Il faut une marge en cas d'imprévu (maladie le jour J, échec, formulaire administratif à corriger).

**Pourquoi la pression est forte sur les centres parisiens**

L'Île-de-France concentre une part très significative des demandes de titres pluriannuels. Les créneaux se remplissent rapidement, en particulier :

- À la **rentrée de septembre** (renouvellements massifs).
- En **janvier-février** (déposants qui démarrent leur année administrative).
- Avant les **vacances scolaires** (les candidats anticipent leurs absences).

**Stratégies pour obtenir un créneau rapidement**

1. **Élargir la zone géographique** — Paris saturé ? Essayez la grande couronne, Rouen, Reims, Orléans. L'attestation a la même valeur partout.
2. **Consulter plusieurs centres** — chaque opérateur a son propre planning. Ouvrez un compte dans plusieurs et comparez.
3. **Surveiller les ouvertures de créneaux** — beaucoup de centres publient leurs nouvelles dates en début de semaine.
4. **Activer les notifications** si la plateforme le permet.
5. **Préférer l'après-midi ou le samedi** — les créneaux du matin sont les plus disputés.

**Quand passer l'examen par rapport à votre projet**

| Votre objectif | Passez l'examen civique idéalement |
|---|---|
| 1ʳᵉ carte pluriannuelle | Dès le 8ᵉ-9ᵉ mois de votre premier titre temporaire |
| Carte de résident 10 ans | Au moins 2 mois avant le dépôt |
| Naturalisation française | Avant la constitution du dossier — l'attestation est une pièce obligatoire |

Pour aller plus loin sur la chronologie des démarches, voir notre guide [Examen civique obligatoire — carte de séjour pluriannuelle 2026](/articles/examen-civique-obligatoire-carte-sejour-pluriannuelle-2026).`
    },
    {
      id: 'jour-de-examen',
      title: 'Étape 5 — Le jour J : déroulé, format, ce qu\'il faut apporter',
      content: `Une fois votre créneau réservé, vous recevez une **convocation par e-mail** précisant la date, l'heure, l'adresse exacte du centre et les documents à présenter. Voici à quoi vous attendre.

**Le format de l'épreuve**

Selon la fiche officielle [Service-Public.fr — F39426](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426) et la documentation [France Éducation international](https://www.france-education-international.fr/examen-civique/examen-civique-informations-pour-les-candidats) :

- **40 questions à choix multiple** (QCM), entièrement en français.
- L'épreuve porte sur **5 thèmes** : valeurs et symboles de la République, institutions, droits et devoirs, histoire de France, vie en société.
- **Score requis : 32 bonnes réponses sur 40**, soit **80 %**.
- L'épreuve se déroule **sur tablette ou ordinateur**, en conditions surveillées.
- La **durée précise** est indiquée par votre centre dans votre convocation (compter environ 45 minutes utiles).

> ⚠️ La durée exacte de l'épreuve peut varier d'un centre à l'autre. Référez-vous à votre convocation officielle, pas aux estimations qui circulent en ligne.

**Documents à apporter le jour J**

- **Une pièce d'identité en cours de validité** (passeport, titre de séjour ou récépissé). C'est **obligatoire** et non négociable — sans pièce d'identité valide, l'accès à la salle est refusé.
- **Votre convocation** (imprimée ou sur smartphone selon ce que demande le centre).
- Le **justificatif de paiement** si votre centre l'exige.

**Ce qui est interdit pendant l'épreuve**

- Téléphone portable, même éteint sur la table.
- Notes manuscrites, livres, fiches.
- Calculatrice, montre connectée.
- Tout appareil électronique personnel.

**Le résultat**

Le score est calculé automatiquement. Selon les centres, vous l'obtenez **à l'issue de l'épreuve** ou dans les **jours qui suivent**, par e-mail dans votre espace personnel.

**Si vous réussissez (≥ 32/40)**

Vous recevez votre **attestation de réussite à l'examen civique**, en format PDF, à télécharger depuis votre espace personnel. C'est ce document que vous joindrez à votre dossier de carte pluriannuelle, de carte de résident ou de naturalisation.

> ⚠️ La durée exacte de validité de l'attestation peut être précisée selon votre démarche. Vérifiez-la sur [Service-Public.fr — F39426](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426) ou demandez confirmation à votre préfecture avant le dépôt du dossier.`
    },
    {
      id: 'preparation-reussir-premier-coup',
      title: 'Étape 6 — Bien se préparer pour réussir du premier coup',
      content: `C'est la partie la plus stratégique de votre démarche, et celle où vous pouvez **éviter de payer une deuxième session**. Quelques heures d'entraînement bien menées suffisent à transformer un passage hasardeux en passage maîtrisé.

**Pourquoi s'entraîner avant de payer la session officielle**

Imaginez le scénario : vous payez 70 € à 90 €, vous bloquez une demi-journée, vous patientez 6 semaines pour votre créneau, vous découvrez l'épreuve au moment du test… et vous obtenez 28/40. **Vous devez tout recommencer** : payer à nouveau, attendre un nouveau créneau, retarder votre dépôt en préfecture.

C'est le scénario que la grande majorité des candidats peut **éviter** en faisant un seul examen blanc en conditions réelles **avant** de payer la session officielle.

**Notre méthode en 4 étapes**

1. **Faites un examen blanc complet** (40 questions, 45 minutes chronométrées) — vous identifiez immédiatement vos points faibles parmi les 5 thèmes.
2. **Révisez ciblé** sur les 1 ou 2 thèmes les plus fragiles — pas la peine de tout réviser uniformément.
3. **Refaites un examen blanc** une fois la révision faite. Si vous atteignez 34/40 ou plus en conditions blanches, vous êtes prêt avec une marge de sécurité.
4. **Réservez votre session officielle** seulement à ce stade-là.

**Combien de temps de préparation prévoir**

| Votre niveau de départ | Temps d'entraînement |
|---|---|
| Bonne connaissance de la France et des institutions | 2 à 3 semaines (≈ 1 h/jour) |
| Connaissance moyenne, quelques lacunes en histoire | 4 à 6 semaines (≈ 1 h/jour) |
| Peu familier avec les institutions françaises | 6 à 8 semaines (≈ 1 h 30/jour) |

**Préparez-vous gratuitement sur testciviquefrance.fr**

Notre plateforme propose **800+ questions** organisées par thème, des **examens blancs en conditions réelles** (40 questions, chronomètre, score immédiat), et des **corrections détaillées** pour chaque question. L'accès de base est **gratuit** — vous pouvez situer votre niveau avant de payer la session officielle.

> 🎯 **Avant de payer 70 € à 90 € votre session officielle, testez-vous gratuitement.** → [Commencer l'entraînement gratuit](/signup)

Pour approfondir le contenu du programme, voir aussi notre guide [Examen civique obligatoire 2026 : qui est concerné, format, dispenses](/articles/examen-civique-obligatoire-carte-sejour-pluriannuelle-2026).`
    }
  ],

  conclusion: `S'inscrire à l'examen civique en 2026, c'est une démarche **en ligne**, qui passe par un **centre agréé** (France Éducation international ou CCI Paris Île-de-France), qui exige votre **numéro AGDREF**, et qui coûte **généralement entre 70 € et 90 €** selon le centre. Le piège classique, c'est le retard : **prévoyez au moins deux mois** entre l'inscription et le dépôt de votre dossier en préfecture. Et avant de payer la session officielle, faites-vous un cadeau de bon sens : **entraînez-vous gratuitement** pour valider votre niveau. C'est la différence entre une session unique réussie et une série de tentatives coûteuses. Commencez maintenant sur [testciviquefrance.fr](/signup) — examen blanc en conditions réelles, score immédiat, et bilan par thème pour cibler vos révisions.`,

  faq: [
    {
      question: 'Combien coûte l\'inscription à l\'examen civique en 2026 ?',
      answer: 'Le tarif est fixé par chaque centre agréé et n\'est pas uniforme à l\'échelle nationale. En 2026, il se situe généralement entre 70 € et 90 €. Le prix exact est communiqué au moment de la pré-inscription en ligne, avant tout paiement. Le tarif couvre l\'inscription, le passage de l\'épreuve et la délivrance de l\'attestation de réussite.'
    },
    {
      question: 'Où peut-on passer l\'examen civique ?',
      answer: 'Dans un centre agréé par l\'État. Les deux opérateurs agréés au niveau national sont **France Éducation international (FEI)** et la **CCI Paris Île-de-France**, qui disposent chacun d\'un réseau de centres partenaires. Vous pouvez vous inscrire dans n\'importe quel centre, indépendamment de votre département de résidence. Consultez la liste à jour sur la fiche [Service-Public.fr F39426](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426).'
    },
    {
      question: 'Faut-il le numéro AGDREF pour s\'inscrire à l\'examen civique ?',
      answer: 'Oui, le numéro AGDREF est obligatoire à l\'inscription. C\'est votre identifiant unique dans le système d\'information du ministère de l\'Intérieur. Vous le trouverez sur votre titre de séjour, votre récépissé, votre attestation de prolongation d\'instruction, ou dans votre espace personnel ANEF. Il comporte généralement 10 chiffres.'
    },
    {
      question: 'Combien de temps à l\'avance faut-il s\'inscrire à l\'examen civique ?',
      answer: 'Au minimum deux mois avant le dépôt de votre dossier en préfecture (ou via ANEF). Le délai d\'attente pour obtenir un créneau peut aller de 3 à 6 semaines en Île-de-France, plus court en province. Ajoutez quelques jours pour la réception de l\'attestation après l\'épreuve, et prévoyez une marge en cas d\'imprévu (échec, maladie, formulaire à corriger).'
    },
    {
      question: 'Peut-on s\'inscrire à l\'examen civique sans dossier de naturalisation déjà déposé ?',
      answer: 'Oui. L\'inscription à l\'examen civique est **indépendante** du dépôt de votre dossier. Il est même recommandé de passer l\'examen **avant** de constituer votre dossier complet, car l\'attestation de réussite est une **pièce obligatoire** pour la naturalisation, la carte de résident et la première carte pluriannuelle. L\'attestation pourra ensuite être jointe à votre dossier dans votre espace ANEF ou lors du rendez-vous en préfecture.'
    },
    {
      question: 'Que se passe-t-il si j\'échoue à l\'examen civique ?',
      answer: 'Vous pouvez vous réinscrire à une nouvelle session. Il n\'y a pas de limite au nombre de tentatives, mais **chaque nouvelle session est payante**. Un délai minimal peut être imposé entre deux passages — vérifiez les conditions exactes en vigueur sur [Service-Public.fr F39426](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426). En attendant, votre titre de séjour en cours reste valide, mais votre dossier de titre pluriannuel ou de naturalisation ne pourra pas être instruit sans l\'attestation de réussite.'
    },
    {
      question: 'Peut-on passer l\'examen civique dans un département autre que celui où on réside ?',
      answer: 'Oui. Vous êtes libre de choisir le centre agréé qui vous convient, où que vous résidiez en France. L\'attestation de réussite a la même valeur juridique quel que soit le centre. Si votre département est saturé (cas fréquent en Île-de-France), élargir votre recherche à une métropole régionale ou à un département voisin peut diviser le délai d\'attente par deux ou trois.'
    },
    {
      question: 'L\'inscription se fait-elle directement sur ANEF ?',
      answer: 'Non. **L\'inscription à l\'examen civique se fait sur le portail de l\'opérateur agréé** (France Éducation international ou CCI Paris IDF), pas sur ANEF. ANEF est la plateforme où vous **déposez votre demande de titre de séjour** et où vous **joindrez ensuite votre attestation de réussite** comme pièce justificative. Les deux démarches sont distinctes.'
    },
    {
      question: 'Peut-on annuler une session payée et se faire rembourser ?',
      answer: 'Les conditions d\'annulation et de remboursement dépendent du centre agréé qui organise votre session. Elles sont précisées dans les conditions générales acceptées au moment du paiement. En règle générale, une annulation suffisamment anticipée donne droit à un remboursement ou à un report ; une absence non justifiée le jour J n\'est pas remboursée. Vérifiez les modalités précises de votre centre avant de payer.'
    },
    {
      question: 'Comment maximiser mes chances de réussite du premier coup ?',
      answer: 'Faites un examen blanc complet **avant** de payer la session officielle pour identifier vos points faibles parmi les 5 thèmes. Révisez ensuite de manière ciblée pendant 2 à 6 semaines selon votre niveau de départ. Refaites un examen blanc 48 h avant la session officielle : si vous obtenez 34/40 ou plus en conditions chronométrées, vous êtes prêt avec une marge de sécurité. Vous pouvez vous entraîner gratuitement sur [testciviquefrance.fr](/signup) avec 800+ questions et des examens blancs en conditions réelles.'
    }
  ],

  keywords: [
    'inscription examen civique 2026',
    'inscription test civique 2026',
    's\'inscrire examen civique',
    'centre agréé examen civique',
    'où passer examen civique',
    'France Éducation international examen civique',
    'CCI Paris examen civique',
    'prix examen civique 2026',
    'coût examen civique',
    'numéro AGDREF examen civique',
    'pré-inscription examen civique',
    'espace personnel examen civique',
    'délai inscription examen civique',
    'convocation examen civique',
    'examen civique naturalisation inscription',
    'examen civique carte de séjour inscription',
    'inscription test civique en ligne',
    'créneau examen civique Paris',
    'centres agréés FEI',
    'attestation examen civique téléchargement',
    'modalités paiement examen civique',
    '40 questions QCM examen civique inscription',
    'examen civique combien à l\'avance',
    'examen civique anticiper deux mois',
    'examen civique sans rendez-vous préfecture'
  ],

  sources: [
    {
      title: 'Service-Public.fr — Comment passer l\'examen civique (fiche F39426)',
      url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F39426',
      type: 'official',
      description: 'Fiche officielle Service-Public.fr décrivant les conditions, centres agréés, modalités d\'inscription et déroulé de l\'examen civique.'
    },
    {
      title: 'Service-Public.fr — Pré-inscription mention naturalisation et examen civique (R75549)',
      url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/R75549',
      type: 'official',
      description: 'Téléservice et procédure officielle de pré-inscription en ligne à l\'examen civique.'
    },
    {
      title: 'France Éducation international — Examen civique, informations pour les candidats',
      url: 'https://www.france-education-international.fr/examen-civique/examen-civique-informations-pour-les-candidats',
      type: 'official',
      description: 'Page candidats de l\'opérateur agréé France Éducation international : centres, calendrier, modalités pratiques.'
    },
    {
      title: 'Administration Numérique pour les Étrangers en France (ANEF)',
      url: 'https://administration-etrangers-en-france.interieur.gouv.fr/',
      type: 'official',
      description: 'Plateforme officielle du ministère de l\'Intérieur pour déposer les demandes de titre de séjour et joindre les pièces justificatives, dont l\'attestation d\'examen civique.'
    }
  ]
};
