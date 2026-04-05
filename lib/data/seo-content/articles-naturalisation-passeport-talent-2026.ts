/**
 * Articles SEO – Avril 2026
 * 1. Naturalisation française 2026 : délais, conditions, dossier complet et pièges à éviter
 * 2. Passeport Talent France 2026 : guide complet des 10 catégories, famille et naturalisation
 */

import type { ArticleFullContent } from './articles-part1';

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 1 : Naturalisation française 2026
// ─────────────────────────────────────────────────────────────────────────────
export const naturalisation2026Content: ArticleFullContent = {
  slug: 'naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet',
  introduction: `Obtenir la nationalité française est l'aboutissement d'un parcours d'intégration. Mais en 2026, entre la nouvelle loi immigration qui durcit les conditions, les délais qui s'allongent dans certaines préfectures et les dossiers souvent refusés pour des raisons évitables, beaucoup de candidats se retrouvent perdus. Ce guide vous donne toutes les informations concrètes : les 5 conditions à remplir, les délais réels par ville, la liste exacte des documents à fournir, les 7 motifs de refus les plus fréquents et les clés pour maximiser vos chances de succès dès le premier dépôt.`,
  keywords: [
    'naturalisation française 2026',
    'conditions naturalisation France 2026',
    'délai naturalisation préfecture 2026',
    'dossier naturalisation documents',
    'refus naturalisation motifs',
    'naturalisation nouvelle loi immigration',
    'exposé des motifs naturalisation',
    'test civique naturalisation',
    'niveau B1 naturalisation',
    'cérémonie naturalisation France',
    'nationalité française demarches 2026',
    'naturalisation préfecture paris lyon marseille délai',
  ],
  sections: [
    {
      id: 'conditions-naturalisation',
      title: 'Les 5 conditions pour être naturalisé en France en 2026',
      content: `<p>Depuis la <strong>loi immigration du 26 janvier 2024</strong> et le <strong>décret 2025-647</strong>, les conditions de naturalisation sont plus strictes. Voici les 5 critères cumulatifs à remplir absolument.</p>

<h4>Vue d'ensemble des conditions</h4>
<table>
<tr><th>Condition</th><th>Exigence 2026</th><th>Remarques</th></tr>
<tr><td>Résidence en France</td><td>5 ans minimum (résidence stable et régulière)</td><td>Réduit à 2 ans si diplôme français Bac+5, service militaire ou mérite particulier</td></tr>
<tr><td>Niveau de français</td><td>B1 minimum (CECRL)</td><td>DELF B1, TCF, TEF ou diplôme français. Nouveauté 2024 : niveau B1 obligatoirement certifié</td></tr>
<tr><td>Test civique</td><td>Réussir à 80% (32/40 questions)</td><td>Conforme au décret 2025-647 — préparez-vous sur TestCiviqueFrance.fr</td></tr>
<tr><td>Intégration républicaine</td><td>Adhérer aux valeurs de la République</td><td>Évaluée lors de l'entretien préfectoral et via CIR/OFII</td></tr>
<tr><td>Absence de condamnations</td><td>Casier judiciaire vierge (B2)</td><td>Condamnations supérieures à 6 mois ferme = refus automatique</td></tr>
</table>

<h4>Cas particuliers avec délai réduit à 2 ans</h4>
<ul>
<li>Diplôme national de niveau Bac+5 (master, ingénieur, doctorat) délivré par un établissement français</li>
<li>Service dans les forces armées françaises</li>
<li>Contribution exceptionnelle dans un domaine scientifique, culturel, sportif ou économique</li>
<li>Réfugiés reconnus par l'OFPRA (délai non applicable dans certains cas)</li>
</ul>

<h4>Lien avec le test civique</h4>
<p>Le test civique est désormais une étape <strong>incontournable</strong> pour la naturalisation. Il évalue vos connaissances sur les valeurs de la République, les institutions françaises et les droits et devoirs du citoyen. En dessous de 80% (32/40), votre dossier sera refusé automatiquement.</p>`,
    },
    {
      id: 'delais-prefecture',
      title: 'Délais réels par préfecture en 2026 : le tableau complet',
      content: `<p>L'un des sujets qui angoisse le plus les candidats à la naturalisation : <strong>combien de temps ça prend vraiment ?</strong> Les délais officiels sont rarement respectés. Voici les données constatées en 2026.</p>

<h4>Délais moyens constatés en 2026 (de la remise du dossier à la décision)</h4>
<table>
<tr><th>Préfecture / Zone</th><th>Délai moyen 2026</th><th>Tendance</th></tr>
<tr><td>Paris (75)</td><td>18 à 24 mois</td><td>Stable (délai structurellement long)</td></tr>
<tr><td>Seine-Saint-Denis (93)</td><td>20 à 28 mois</td><td>En hausse — fort volume de dossiers</td></tr>
<tr><td>Val-de-Marne (94)</td><td>16 à 22 mois</td><td>Stable</td></tr>
<tr><td>Lyon / Rhône (69)</td><td>12 à 18 mois</td><td>En légère amélioration</td></tr>
<tr><td>Marseille / Bouches-du-Rhône (13)</td><td>15 à 22 mois</td><td>Stable</td></tr>
<tr><td>Toulouse / Haute-Garonne (31)</td><td>10 à 14 mois</td><td>Parmi les plus rapides</td></tr>
<tr><td>Bordeaux / Gironde (33)</td><td>10 à 16 mois</td><td>Stable</td></tr>
<tr><td>Lille / Nord (59)</td><td>14 à 20 mois</td><td>En légère hausse</td></tr>
<tr><td>Nantes / Loire-Atlantique (44)</td><td>8 à 12 mois</td><td>Un des meilleurs délais nationaux</td></tr>
<tr><td>Strasbourg / Bas-Rhin (67)</td><td>10 à 15 mois</td><td>Stable</td></tr>
<tr><td>Nice / Alpes-Maritimes (06)</td><td>12 à 18 mois</td><td>Délais variables selon période</td></tr>
<tr><td>Départements ruraux (hors IDF)</td><td>6 à 10 mois</td><td>Souvent meilleurs délais</td></tr>
</table>

<h4>Les 3 phases du traitement de votre dossier</h4>
<ul>
<li><strong>Phase 1 — Instruction préfectorale</strong> (3 à 9 mois) : vérification de la complétude du dossier, enquête de moralité, convocation pour entretien</li>
<li><strong>Phase 2 — Contrôle central</strong> (3 à 8 mois) : transmission au ministère de l'Intérieur ou à la sous-direction de l'accès à la nationalité française (SDANF) pour décision</li>
<li><strong>Phase 3 — Notification et cérémonie</strong> (1 à 3 mois) : vous recevez le décret, puis êtes convoqué à la cérémonie</li>
</ul>

<p><strong>Astuce :</strong> Si vous n'avez aucune nouvelle après 18 mois, vous pouvez envoyer un courrier recommandé à la préfecture pour demander un point sur l'avancement de votre dossier. Vous pouvez également saisir le médiateur national de la naturalisation.</p>`,
    },
    {
      id: 'dossier-documents',
      title: 'La checklist complète des documents à fournir',
      content: `<p>Un dossier incomplet est la première cause de rejet ou de délai supplémentaire. Voici la liste exhaustive des pièces à préparer.</p>

<h4>Documents d'identité et d'état civil</h4>
<ul>
<li>Formulaire CERFA n°12753*05 (demande de naturalisation), dûment rempli et signé</li>
<li>Copie intégrale de l'acte de naissance (moins de 3 mois), traduite et apostillée si besoin</li>
<li>Copie de votre titre de séjour en cours de validité (recto-verso)</li>
<li>4 photos d'identité récentes (moins de 6 mois, fond blanc, normes ICAO)</li>
<li>Extrait du casier judiciaire de votre pays d'origine (B2 ou équivalent), traduit</li>
<li>Si marié : acte de mariage intégral (et livret de famille si enfants)</li>
</ul>

<h4>Preuves de résidence (5 ans)</h4>
<ul>
<li>Tous vos titres de séjour successifs (ou justificatifs d'entrée régulière)</li>
<li>Justificatifs de domicile sur toute la période (quittances de loyer, factures EDF…)</li>
<li>Si changements d'adresse : justificatifs pour chaque adresse</li>
</ul>

<h4>Preuves de ressources et d'intégration professionnelle</h4>
<ul>
<li>3 derniers avis d'imposition (ou déclarations de revenus)</li>
<li>3 derniers bulletins de salaire ou justificatifs de revenus</li>
<li>Contrat de travail ou extrait Kbis si indépendant</li>
</ul>

<h4>Preuves d'intégration et de connaissances</h4>
<table>
<tr><th>Preuve</th><th>Document accepté</th></tr>
<tr><td>Niveau de français B1</td><td>DELF B1, TCF niveau B1, TEF, ou diplôme français (Brevet, Bac, Titre professionnel...)</td></tr>
<tr><td>Test civique</td><td>Attestation de réussite au test civique officiel (score ≥ 80%)</td></tr>
<tr><td>Intégration républicaine</td><td>Attestation OFII (CIR), relevés des formations civiques suivies</td></tr>
</table>

<h4>L'exposé des motifs (pièce décisive)</h4>
<p>Lettre manuscrite ou dactylographiée de 1 à 2 pages où vous exprimez <strong>pourquoi vous souhaitez devenir français</strong> : votre parcours, votre attachement aux valeurs de la République, vos projets en France, votre intégration. C'est la pièce que l'agent de préfecture lit en premier et qui conditionne souvent l'issue de l'entretien.</p>`,
    },
    {
      id: 'motifs-refus',
      title: 'Les 7 motifs de refus les plus fréquents (et comment les éviter)',
      content: `<p>Connaître les raisons de refus les plus fréquentes vous permet d'anticiper et de consolider votre dossier avant le dépôt.</p>

<h4>Les 7 raisons de refus les plus courantes en 2026</h4>
<table>
<tr><th>Motif</th><th>Explication</th><th>Comment l'éviter</th></tr>
<tr><td>1. Dossier incomplet</td><td>Pièce manquante ou périmée à la date du dépôt</td><td>Vérifier chaque pièce 1 semaine avant le dépôt, faire certifier les traductions</td></tr>
<tr><td>2. Niveau de français insuffisant</td><td>Pas de certification B1 valide ou certification expirée (plus de 2 ans)</td><td>Passer le DELF B1 ou TCF avant de déposer le dossier</td></tr>
<tr><td>3. Score test civique inférieur à 80%</td><td>Attestation manquante ou score insuffisant</td><td>Se préparer sur TestCiviqueFrance.fr, viser 35+/40 pour avoir de la marge</td></tr>
<tr><td>4. Continuité de résidence non prouvée</td><td>Trous dans les preuves de domicile ou absences longues</td><td>Conserver tous les justificatifs d'adresse depuis 5 ans, signaler les séjours à l'étranger</td></tr>
<tr><td>5. Condamnation pénale</td><td>Condamnation signalée par l'enquête de moralité</td><td>Vérifier son casier judiciaire B3 avant le dépôt, consulter un avocat si besoin</td></tr>
<tr><td>6. Défaut d'assimilation</td><td>Réponses insuffisantes lors de l'entretien sur les valeurs républicaines</td><td>Préparer l'entretien, connaître les institutions, la devise, les droits et devoirs</td></tr>
<tr><td>7. Revenus insuffisants</td><td>Ressources considérées comme instables ou insuffisantes</td><td>Attendre une période de stabilité professionnelle (CDI, 3 ans de revenus constants)</td></tr>
</table>

<p><strong>Bon à savoir :</strong> En cas de rejet, vous pouvez déposer un recours gracieux auprès du préfet dans les 2 mois, puis un recours contentieux devant le tribunal administratif si nécessaire.</p>`,
    },
    {
      id: 'test-civique-b1',
      title: 'Test civique et niveau B1 : les deux nouveaux prérequis expliqués',
      content: `<p>Depuis la réforme de 2024-2025, le test civique et la certification B1 sont devenus des <strong>conditions sine qua non</strong> pour la naturalisation. Voici ce qu'il faut savoir concrètement.</p>

<h4>Le test civique : comment ça fonctionne</h4>
<ul>
<li><strong>Format :</strong> 40 questions QCM, 45 minutes, 5 thématiques officielles</li>
<li><strong>Seuil de réussite :</strong> 80% minimum, soit 32 bonnes réponses sur 40</li>
<li><strong>Où le passer :</strong> Centres agréés OFII — votre préfecture vous indiquera le centre le plus proche</li>
<li><strong>Validité de l'attestation :</strong> Renseignez-vous auprès de votre préfecture pour la durée exacte de validité</li>
</ul>

<h4>Les 5 thématiques du test civique</h4>
<table>
<tr><th>Thématique</th><th>Nombre de questions</th><th>Exemples de sujets</th></tr>
<tr><td>Principes et valeurs de la République</td><td>11</td><td>Laïcité, liberté, égalité, fraternité, devise, drapeau</td></tr>
<tr><td>Système institutionnel et politique</td><td>6</td><td>Président, Assemblée nationale, Sénat, Conseil d'État</td></tr>
<tr><td>Droits et devoirs</td><td>11</td><td>Déclaration des droits, droits sociaux, impôts, service civique</td></tr>
<tr><td>Histoire, géographie et culture</td><td>8</td><td>Révolution française, régions, patrimoine UNESCO</td></tr>
<tr><td>Vivre dans la société française</td><td>4</td><td>École, santé, logement, vie associative</td></tr>
</table>

<h4>Le niveau B1 de français : ce qui est accepté</h4>
<ul>
<li><strong>DELF B1</strong> (Alliance Française, CIEP) — la certification la plus reconnue</li>
<li><strong>TCF (Test de Connaissance du Français)</strong> niveau B1</li>
<li><strong>TEF (Test d'Évaluation du Français)</strong> équivalent B1</li>
<li><strong>Diplôme scolaire français</strong> : Brevet des collèges, Baccalauréat, BTS, Licence dispense du test de langue</li>
</ul>
<p><em>Attention : un simple cours de langue ou une attestation d'employeur ne suffit pas — seule la certification officielle est acceptée.</em></p>`,
    },
    {
      id: 'apres-naturalisation',
      title: 'Après la décision : cérémonie, CNI et passeport français',
      content: `<p>Votre naturalisation est accordée ! Voici ce qui se passe ensuite, étape par étape.</p>

<h4>Les étapes après l'accord de naturalisation</h4>
<ul>
<li><strong>Réception du décret :</strong> La naturalisation est officialisée par décret publié au Journal officiel. Vous en recevez une copie.</li>
<li><strong>Cérémonie d'accueil dans la citoyenneté française :</strong> Obligatoire et organisée par la préfecture ou la mairie. Vous prononcez solennellement votre attachement aux valeurs de la République. Délai habituel : 1 à 3 mois après le décret.</li>
<li><strong>Demande de Carte Nationale d'Identité (CNI) :</strong> Dès le lendemain de la cérémonie, vous pouvez déposer votre demande de CNI en mairie.</li>
<li><strong>Demande de passeport français :</strong> Simultanément à la CNI, vous pouvez demander un passeport biométrique.</li>
<li><strong>Inscription sur les listes électorales :</strong> Vous pouvez désormais voter aux élections françaises et européennes.</li>
</ul>

<h4>Coûts à prévoir</h4>
<table>
<tr><th>Démarche</th><th>Coût</th></tr>
<tr><td>Dossier de naturalisation</td><td>Gratuit</td></tr>
<tr><td>Traductions/apostilles de documents</td><td>50 à 200 € selon le pays et le nombre de pièces</td></tr>
<tr><td>Certification DELF B1 ou TCF</td><td>100 à 150 €</td></tr>
<tr><td>Test civique officiel</td><td>Environ 50 € dans les centres agréés</td></tr>
<tr><td>Carte Nationale d'Identité</td><td>Gratuite</td></tr>
<tr><td>Passeport français</td><td>86 € (adulte)</td></tr>
</table>`,
    },
    {
      id: 'faq-naturalisation',
      title: 'FAQ – Vos questions fréquentes sur la naturalisation 2026',
      content: `<h4>Peut-on conserver sa nationalité d'origine en se naturalisant français ?</h4>
<p>Dans la majority des cas, oui. La France accepte la double nationalité sans restriction. Cependant, votre pays d'origine peut exiger que vous renonciez à sa nationalité si vous devenez citoyen d'un autre pays — vérifiez la législation de votre pays natal.</p>

<h4>Peut-on déposer une demande de naturalisation si on est en CDD ?</h4>
<p>Oui, un CDD est accepté mais la préfecture analysera la stabilité de vos revenus sur les 3 dernières années. Un CDI récent ou 5+ ans d'activité régulière sont des éléments très favorables.</p>

<h4>Comment savoir si mon dossier avance ?</h4>
<p>Vous pouvez appeler la sous-direction de l'accès à la nationalité française (SDANF) au numéro dédié à votre préfecture, ou envoyer un courrier recommandé pour demander un état d'avancement. En l'absence de réponse au-delà de 18 mois, un recours pour excès de pouvoir est possible.</p>

<h4>Le test civique est-il valable pour la naturalisation et le titre de séjour ?</h4>
<p>Oui, la même attestation de réussite au test civique peut être utilisée pour plusieurs démarches : naturalisation, carte de séjour pluriannuelle, carte de résident. Conservez-la précieusement.</p>

<h4>Peut-on être naturalisé sans avoir passé le Contrat d'Intégration Républicaine (CIR) ?</h4>
<p>Si vous n'êtes pas passé par le CIR (personnes entrées en France avant sa généralisation, ou entrées autrement que par le OFII), d'autres preuves d'intégration sont acceptées : ancienneté en France, emploi stable, participation à la vie associative, bénévolat, etc.</p>

<h4>Que se passe-t-il si je suis en cours de renouvellement de titre de séjour lors du dépôt ?</h4>
<p>Vous pouvez déposer votre dossier avec votre récépissé de renouvellement. Cependant, la préfecture attendra souvent que votre titre soit renouvelé avant d'instruire définitivement. Il vaut mieux attendre la délivrance du nouveau titre pour déposer.</p>`,
    },
  ],
  faq: [
    {
      question: 'Combien de temps faut-il attendre pour être naturalisé en France en 2026 ?',
      answer: 'Les délais varient de 6 à 28 mois selon la préfecture. Nantes et Toulouse traitent les dossiers en 8-14 mois. Paris et la Seine-Saint-Denis peuvent dépasser 24 mois. Il faut compter en moyenne 12 à 18 mois sur l\'ensemble du territoire.',
    },
    {
      question: 'Quel score faut-il avoir au test civique pour la naturalisation ?',
      answer: 'Vous devez obtenir au minimum 80% soit 32 bonnes réponses sur 40. Le test civique couvre 5 thématiques officielles. Préparez-vous sur TestCiviqueFrance.fr pour maximiser vos chances.',
    },
    {
      question: 'Quelle certification de français est acceptée pour la naturalisation en 2026 ?',
      answer: 'Le niveau B1 minimum est requis. Les certifications acceptées sont : DELF B1, TCF niveau B1, TEF équivalent B1. Un diplôme scolaire français (Brevet, Bac et au-delà) dispense de la certification.',
    },
    {
      question: 'Peut-on garder sa nationalité d\'origine après naturalisation française ?',
      answer: 'Oui, la France autorise la double nationalité sans restriction. Mais votre pays d\'origine peut avoir des règles différentes — vérifiez auprès de votre consulat.',
    },
    {
      question: 'Peut-on être recalé à l\'entretien de naturalisation ?',
      answer: 'Oui. L\'entretien évalue votre intégration et votre connaissance des valeurs républicaines. Des réponses imprécises sur les institutions, la laïcité ou les droits et devoirs peuvent entraîner un avis défavorable. Préparez-vous avec les thématiques du test civique.',
    },
    {
      question: 'Comment accélérer sa demande de naturalisation ?',
      answer: 'Quatre leviers : 1) Déposer un dossier parfait dès le premier dépôt (zéro pièce manquante). 2) Choisir si possible une préfecture moins engorgée. 3) Réussir le test civique avec un score élevé. 4) Rédiger un exposé des motifs sincère et détaillé.',
    },
  ],
  conclusion: `La naturalisation française est un parcours long mais accessible à qui s'y prépare sérieusement. Les nouvelles conditions de 2024 — test civique à 80%, niveau B1 certifié, entretien d'assimilation — sont contraignantes mais prévisibles. Constituez votre dossier sans lacune, rédigez un exposé des motifs sincère et préparez-vous au test civique dès maintenant sur TestCiviqueFrance.fr. La nationalité française est à portée de main pour qui met toutes les chances de son côté.`,
  sources: [
    {
      title: 'Conditions de la naturalisation – Service-Public.fr',
      url: 'https://www.service-public.fr/particuliers/vosdroits/F2213',
      type: 'official' as const,
      description: 'Conditions officielles pour demander la naturalisation française',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 2 : Passeport Talent France 2026 – Guide complet enrichi
// ─────────────────────────────────────────────────────────────────────────────
export const passeportTalent2026GuideContent: ArticleFullContent = {
  slug: 'passeport-talent-france-2026-guide-complet-10-categories-famille-naturalisation',
  introduction: `Le Passeport Talent est l'un des titres de séjour les moins connus mais les plus avantageux que la France propose aux étrangers qualifiés. Un titre de séjour de 4 ans (au lieu d'1 an renouvelable), une carte famille immédiate pour le conjoint, une voie directe vers la carte de résident — et pourtant, des milliers de personnes éligibles passent à côté faute d'information. Que vous soyez salarié qualifié, chercheur, artiste, entrepreneur ou investisseur, ce guide complet vous explique les 10 catégories, les conditions précises, la procédure à suivre et comment ce titre peut mener à la nationalité française.`,
  keywords: [
    'passeport talent France 2026',
    'passeport talent conditions eligibilite',
    'passeport talent salarié qualifié',
    'passeport talent chercheur',
    'passeport talent entrepreneur',
    'titre de séjour 4 ans qualifié',
    'passeport talent famille conjoint',
    'passeport talent naturalisation',
    'passeport talent salaire minimum',
    'carte séjour profil qualifié France',
    'Welcome to France étranger qualifié',
    'passeport talent renouvellement carte résident',
  ],
  sections: [
    {
      id: 'passeport-talent-cest-quoi',
      title: 'Qu\'est-ce que le Passeport Talent ? Les 4 avantages clés',
      content: `<p>Le <strong>Passeport Talent</strong> est un titre de séjour pluriannuel créé en 2016 et renforcé par les lois successives de 2018 et 2024. Il s'adresse aux étrangers présentant un <strong>profil qualifié</strong> ou une valeur ajoutée particulière pour la France.</p>

<h4>Pourquoi c'est un titre exceptionnel : comparaison directe</h4>
<table>
<tr><th>Critère</th><th>Titre classique (CST 1 an)</th><th>Passeport Talent (4 ans)</th></tr>
<tr><td>Durée de validité</td><td>1 an renouvelable</td><td>4 ans directement</td></tr>
<tr><td>Démarches de renouvellement</td><td>Chaque année à la préfecture → stress + ANEF</td><td>Seulement 1 renouvellement en 4 ans</td></tr>
<tr><td>Conjoint et enfants</td><td>Procédure regroupement familial (18 mois + conditions revenus)</td><td>Carte "famille du titulaire du PT" délivrée quasi-simultanément</td></tr>
<tr><td>Droit au travail du conjoint</td><td>Conjoint doit demander une autorisation de travail séparée</td><td>Conjoint autorisé à travailler sans démarche supplémentaire</td></tr>
<tr><td>Accès à la carte de résident</td><td>Après 5 ans de séjour régulier</td><td>Après 3 ans de Passeport Talent (mesure incitative)</td></tr>
<tr><td>Lien avec la naturalisation</td><td>Après 5 ans de résidence</td><td>Possible dès 2 ans si diplôme Bac+5 français</td></tr>
</table>

<h4>Qui est concerné ?</h4>
<p>Les 10 catégories du Passeport Talent couvrent des profils très variés : du salarié d'une grande entreprise au réfugié ayant une qualification reconnue, en passant par les artistes et les investisseurs. Une chose en commun : <strong>vous apportez quelque chose à la France</strong>.</p>`,
    },
    {
      id: 'les-10-categories',
      title: 'Les 10 catégories du Passeport Talent : conditions précises',
      content: `<p>Chaque catégorie a ses propres critères. Voici le tableau complet avec les conditions exactes en 2026.</p>

<table>
<tr><th>Catégorie</th><th>Conditions principales</th><th>Salaire minimum</th></tr>
<tr><td>1. Salarié qualifié</td><td>Diplôme Bac+3 minimum + contrat CDI ou CDD ≥ 3 mois dans une entreprise en France</td><td>1,5× le SMIC (environ 2 139 € nets/mois en 2026)</td></tr>
<tr><td>2. Jeune diplômé qualifié</td><td>Diplôme Bac+5 obtenu en France depuis moins de 4 ans + contrat de travail</td><td>1,5× le SMIC</td></tr>
<tr><td>3. Chercheur - enseignant-chercheur</td><td>Convention d'accueil avec un établissement de recherche ou d'enseignement supérieur français</td><td>Pas de minimum fixé (revenus de la convention)</td></tr>
<tr><td>4. Porteur de projet innovant</td><td>Projet reconnu par un organisme public (BPI France, incubateur labellisé, collectivité) ou levée de fonds ≥ 30 000 €</td><td>Pas de minimum fixé</td></tr>
<tr><td>5. Investisseur économique</td><td>Investissement direct ≥ 300 000 € en France + création ou préservation d'emplois</td><td>Sans objet</td></tr>
<tr><td>6. Représentant d'une entreprise étrangère</td><td>Mission en France pour le compte d'une entreprise étrangère (ICT – Intra-Corporate Transfer) + salaire ≥ 1,5× SMIC</td><td>1,5× le SMIC</td></tr>
<tr><td>7. Artiste-interprète</td><td>Contrat de travail ou engagement artistique avec une structure française (théâtre, label, agence...)</td><td>Pas de minimum fixé</td></tr>
<tr><td>8. Profession médicale et paramédicale</td><td>Autorisation d'exercice délivrée par le ministère de la Santé + emploi dans un établissement de soins</td><td>Rémunération conforme à la grille hospitalière</td></tr>
<tr><td>9. Réfugié qualifié / protection subsidiaire</td><td>Statut OFPRA + diplôme équivalent à Bac+3 + projet professionnel validé</td><td>1,5× le SMIC</td></tr>
<tr><td>10. Mandataire social</td><td>Dirigeant (PDG, DG, gérant) d'une entreprise française créatrice de valeur + rémunération significative</td><td>Variable selon entreprise</td></tr>
</table>

<h4>La catégorie la plus utilisée : le salarié qualifié (catégorie 1)</h4>
<p>C'est de loin la plus courante. Les conditions à retenir :</p>
<ul>
<li>Votre diplôme doit être équivalent à <strong>Bac+3 minimum</strong> (licence, bachelor, BTS + expérience…). La plateforme ENIC-NARIC permet de faire reconnaître un diplôme étranger.</li>
<li>Votre contrat doit prévoir une rémunération d'au moins <strong>1,5 fois le SMIC mensuel net</strong>, soit environ 2 139 € nets en 2026 (base SMIC 1 426 € net)</li>
<li>Le contrat peut être un CDI ou un CDD d'au moins 3 mois</li>
</ul>`,
    },
    {
      id: 'procedure-passeport-talent',
      title: 'La procédure pas à pas pour obtenir le Passeport Talent',
      content: `<p>La demande se fait soit depuis l'étranger (en même temps que le visa long séjour), soit en France depuis une autre catégorie de titre de séjour.</p>

<h4>Étape 1 — Rassembler les pièces du dossier</h4>
<ul>
<li>Formulaire CERFA n°15605 (demande de premier titre de séjour) ou demande sur ANEF</li>
<li>Passeport en cours de validité + copie de toutes les pages visées</li>
<li>Diplôme(s) + traduction certifiée si non francophone</li>
<li>Contrat de travail signé ou convention d'accueil (chercheur)</li>
<li>Justificatif de salaire ≥ 1,5× SMIC (lettre d'offre, contrat, grille de rémunération)</li>
<li>Extrait Kbis de l'entreprise employeuse + attestation d'établissement URSSAF</li>
<li>Photo d'identité récente conforme aux normes ICAO</li>
</ul>

<h4>Étape 2 — Déposer la demande</h4>
<ul>
<li><strong>Si vous êtes à l'étranger :</strong> Demandez un visa long séjour « passeport talent » au consulat français de votre pays. Une fois en France, validez le VLS-TS sur le site de l'ANEF dans les 3 premiers mois.</li>
<li><strong>Si vous êtes déjà en France :</strong> Déposez votre demande sur l'ANEF (anef.interieur.gouv.fr) ou en préfecture selon les démarches de votre département.</li>
</ul>

<h4>Étape 3 — Délais de traitement</h4>
<table>
<tr><th>Situation</th><th>Délai moyen</th></tr>
<tr><td>Visa long séjour depuis l'étranger</td><td>3 à 8 semaines consulat + 2 à 4 semaines ANEF validation</td></tr>
<tr><td>Changement de statut en France (sur ANEF)</td><td>2 à 4 mois selon la préfecture</td></tr>
<tr><td>Premier renouvellement au bout de 4 ans</td><td>2 à 3 mois</td></tr>
</table>

<h4>Étape 4 — Récupération du titre</h4>
<p>Le Passeport Talent est délivré sous forme de <strong>carte de séjour pluriannuelle</strong> portant la mention « Passeport Talent » suivie de la catégorie (ex : « Passeport Talent — Salarié qualifié »). Elle est valable 4 ans.</p>`,
    },
    {
      id: 'famille-passeport-talent',
      title: 'Faire venir sa famille avec le Passeport Talent : le régime « famille »',
      content: `<p>C'est l'un des grands avantages du Passeport Talent : vos proches peuvent vous rejoindre beaucoup plus facilement qu'avec un titre ordinaire.</p>

<h4>Qui peut bénéficier de la carte « famille du titulaire du Passeport Talent » ?</h4>
<ul>
<li><strong>Le conjoint marié</strong> (pas le partenaire de PACS ni le concubin, sauf certains cas)</li>
<li><strong>Les enfants mineurs</strong> du titulaire et du conjoint</li>
</ul>

<h4>Comparaison avec le regroupement familial classique</h4>
<table>
<tr><th>Critère</th><th>Regroupement familial classique</th><th>Famille Passeport Talent</th></tr>
<tr><td>Conditions de revenus préalables</td><td>Oui (1,2× SMIC + logement)</td><td>Non (le fait d'avoir le PT suffit)</td></tr>
<tr><td>Délai d'attente avant de faire venir la famille</td><td>18 mois de résidence régulière</td><td>Immédiat dès l'obtention du PT</td></tr>
<tr><td>Autorisation de travail du conjoint</td><td>Nécessite une démarche séparée</td><td>Automatique — le conjoint peut travailler immédiatement</td></tr>
<tr><td>Type de titre délivré au conjoint</td><td>Carte « vie privée et familiale »</td><td>Carte « famille du titulaire PT » (même durée que le PT)</td></tr>
<tr><td>Passage par OFII obligatoire</td><td>Oui (visite médicale + formation)</td><td>Non (procédure simplifiée)</td></tr>
</table>

<h4>Démarche pour faire venir son conjoint</h4>
<ul>
<li>Votre conjoint fait une demande de visa long séjour mention « famille de ressortissant étranger (PT) » au consulat français de son pays</li>
<li>Pièces à fournir côté conjoint : passeport, acte de mariage (traduit + apostille), photo identité, lettre d'invitation du titulaire PT</li>
<li>Une fois en France, le conjoint valide son VLS-TS sur l'ANEF et obtient sa carte « famille du titulaire PT »</li>
</ul>`,
    },
    {
      id: 'carte-resident-naturalisation',
      title: 'Du Passeport Talent à la carte de résident et la naturalisation',
      content: `<p>Le Passeport Talent est bien plus qu'un titre de séjour — c'est une <strong>voie accélérée vers la stabilité permanente en France</strong>.</p>

<h4>La carte de résident 10 ans après 3 ans de Passeport Talent</h4>
<p>Contrairement aux autres titres qui nécessitent 5 ans de séjour régulier pour accéder à la carte de résident, les titulaires du Passeport Talent peuvent la demander après seulement <strong>3 ans de PT</strong>, sous réserve :</p>
<ul>
<li>D'être toujours dans la catégorie qui a justifié l'attribution du PT</li>
<li>D'attester de leur intégration (niveau de français, test civique si applicable)</li>
<li>D'avoir une situation professionnelle stable et des ressources suffisantes</li>
</ul>

<h4>La naturalisation : quand et comment</h4>
<table>
<tr><th>Profil</th><th>Délai de résidence pour naturalisation</th></tr>
<tr><td>Titulaire PT avec diplôme Bac+5 français</td><td>2 ans de résidence (délai réduit)</td></tr>
<tr><td>Titulaire PT sans diplôme français ou Bac+3</td><td>5 ans de résidence régulière</td></tr>
<tr><td>Conjoint français</td><td>4 ans de mariage + 3 ans de vie commune en France</td></tr>
</table>

<h4>Lien avec le test civique</h4>
<p>Pour la naturalisation, vous devrez passer le <strong>test civique avec un score ≥ 80%</strong> (32/40 questions sur les valeurs de la République, les institutions, l'histoire). Le Passeport Talent ne dispense pas du test civique — au contraire, c'est l'occasion de se préparer tôt avec TestCiviqueFrance.fr pour être prêt le moment venu.</p>

<h4>Synthèse du parcours type</h4>
<ul>
<li><strong>Année 0 :</strong> Obtention du Passeport Talent (+ carte famille pour conjoint)</li>
<li><strong>Années 1-3 :</strong> Exercice de l'activité professionnelle, intégration, préparation test civique et DELF B1</li>
<li><strong>Année 3 :</strong> Demande de carte de résident 10 ans possible</li>
<li><strong>Année 4 :</strong> Renouvellement du PT si carte de résident pas encore obtenue</li>
<li><strong>Années 2-5 :</strong> Demande de naturalisation selon profil</li>
</ul>`,
    },
    {
      id: 'erreurs-pieges-pt',
      title: '5 erreurs à ne pas faire avec le Passeport Talent',
      content: `<p>Beaucoup de candidats éligibles ratent leur demande ou perdent leurs droits à cause de ces erreurs courantes.</p>

<h4>Erreur 1 — Ne pas vérifier l'équivalence de son diplôme</h4>
<p>Un diplôme étranger n'est pas automatiquement reconnu comme Bac+3 en France. Utilisez la plateforme <strong>ENIC-NARIC</strong> avant de déposer votre dossier pour obtenir une attestation de comparabilité (délai : 4 à 8 semaines, gratuit).</p>

<h4>Erreur 2 — Attendre que le salaire soit négocié à la baisse</h4>
<p>Certains employeurs proposent un salaire légèrement inférieur au seuil de 1,5× SMIC. <strong>Ne signez jamais un contrat en dessous du seuil</strong> — votre demande sera automatiquement refusée. Négociez ou choisissez une autre catégorie de PT.</p>

<h4>Erreur 3 — Oublier de faire venir le conjoint dans les 3 premiers mois</h4>
<p>Si votre conjoint arrive en France après l'obtention de votre PT mais ne fait pas sa demande de titre dans les 3 mois suivant son entrée, il perdra l'avantage du régime famille PT et devra passer par le regroupement familial classique.</p>

<h4>Erreur 4 — Changer d'employeur sans vérifier les conditions</h4>
<p>Avec la catégorie « salarié qualifié », changer d'emploi est autorisé mais votre nouveau contrat doit toujours respecter le seuil de 1,5× SMIC. Si votre salaire baisse en dessous, votre renouvellement peut être refusé.</p>

<h4>Erreur 5 — Négliger la préparation au test civique pour la naturalisation ultérieure</h4>
<p>De nombreux titulaires d'un Passeport Talent arrivent à l'étape de naturalisation sans avoir préparé le test civique. Or, c'est une condition bloquante — commencez à vous entraîner dès votre première année en France sur TestCiviqueFrance.fr.</p>`,
    },
    {
      id: 'faq-passeport-talent',
      title: 'FAQ – Vos questions sur le Passeport Talent 2026',
      content: `<h4>Puis-je demander le Passeport Talent si je suis déjà en France avec un visa touriste ?</h4>
<p>Non, un visa de court séjour (touriste, visiteur) ne permet pas de changer de statut en France. Vous devez soit retourner dans votre pays pour obtenir un visa long séjour « Passeport Talent », soit être en situation régulière avec un autre titre de séjour (étudiant, salarié, etc.).</p>

<h4>Le Passeport Talent permet-il de travailler librement en France ?</h4>
<p>Oui, il n'y a pas de restriction de secteur ou d'employeur — vous pouvez travailler pour n'importe quelle entreprise française dans n'importe quel secteur, à condition que le contrat respecte les conditions de votre catégorie (salaire, type de poste).</p>

<h4>Puis-je créer ma propre entreprise avec un Passeport Talent salarié qualifié ?</h4>
<p>Pas directement avec la catégorie « salarié qualifié » (vous devez avoir un contrat de travail). Si vous souhaitez créer une entreprise, vous devez demander la catégorie « porteur de projet innovant » ou « investisseur économique », avec les justificatifs correspondants.</p>

<h4>Que se passe-t-il si je perds mon emploi en cours de Passeport Talent ?</h4>
<p>Vous bénéficiez d'une période de protection de 6 mois pendant laquelle vous pouvez chercher un nouvel emploi sans perdre votre titre. Au-delà, si vous n'avez pas retrouvé un emploi conforme aux conditions PT, votre titre peut ne pas être renouvelé.</p>

<h4>Le Passeport Talent est-il compatible avec le statut de micro-entrepreneur ?</h4>
<p>La catégorie « porteur de projet innovant » peut être compatible avec le statut auto-entrepreneur si votre projet est reconnu par un organisme agréé. Mais le chiffre d'affaires seul ne suffit généralement pas — il faut prouver l'innovation et la création de valeur.</p>

<h4>Mon conjoint avec une carte « famille PT » peut-il travailler immédiatement en France ?</h4>
<p>Oui, la carte « famille du titulaire du Passeport Talent » donne automatiquement le droit de travailler en France, sans démarche supplémentaire. C'est l'un des grands avantages du régime famille PT par rapport au regroupement familial classique.</p>`,
    },
  ],
  faq: [
    {
      question: 'Qu\'est-ce que le Passeport Talent en France et qui peut l\'obtenir ?',
      answer: 'Le Passeport Talent est un titre de séjour de 4 ans destiné aux étrangers qualifiés : salariés avec diplôme Bac+3 et salaire ≥ 1,5× SMIC, chercheurs, artistes, porteurs de projets innovants, investisseurs, médecins, etc. Il existe 10 catégories différentes.',
    },
    {
      question: 'Quel est le salaire minimum pour obtenir un Passeport Talent salarié qualifié en 2026 ?',
      answer: 'Le salaire minimum est de 1,5 fois le SMIC mensuel net, soit environ 2 139 € nets par mois en 2026 (base SMIC 1 426 € net). Ce seuil s\'applique aux catégories salarié qualifié, jeune diplômé qualifié et représentant d\'entreprise étrangère.',
    },
    {
      question: 'Le Passeport Talent permet-il de faire venir son conjoint facilement ?',
      answer: 'Oui, c\'est l\'un de ses grands avantages. Votre conjoint peut obtenir une carte « famille du titulaire PT » sans condition de revenus préalables ni délai d\'attente de 18 mois. Il peut travailler immédiatement sans démarche supplémentaire.',
    },
    {
      question: 'Peut-on obtenir la carte de résident 10 ans plus rapidement avec un Passeport Talent ?',
      answer: 'Oui. Après 3 ans de Passeport Talent (au lieu de 5 ans pour les autres titres), vous pouvez demander la carte de résident 10 ans, sous réserve de maintenir votre activité et de justifier votre intégration.',
    },
    {
      question: 'Faut-il passer le test civique pour obtenir le Passeport Talent ?',
      answer: 'Non, le test civique n\'est pas requis pour le Passeport Talent lui-même. Mais il sera obligatoire si vous demandez ensuite la naturalisation française ou une carte de séjour pluriannuelle dans d\'autres contextes. Commencez à vous préparer tôt sur TestCiviqueFrance.fr.',
    },
    {
      question: 'Quel diplôme faut-il pour le Passeport Talent salarié qualifié ?',
      answer: 'Un diplôme équivalent à Bac+3 minimum. Les diplômes étrangers doivent être reconnus via la plateforme ENIC-NARIC (attestation de comparabilité, délai 4-8 semaines, gratuit). La catégorie « jeune diplômé qualifié » requiert un Bac+5 obtenu en France depuis moins de 4 ans.',
    },
  ],
  conclusion: `Le Passeport Talent est l'un des titres de séjour les plus avantageux que la France propose : 4 ans de validité, famille immédiate, droit au travail du conjoint, accès accéléré à la carte de résident. Si vous avez un profil qualifié, vérifiez votre éligibilité dès aujourd'hui. Et si votre objectif final est la nationalité française, commencez à vous préparer au test civique sur TestCiviqueFrance.fr — cette étape sera incontournable sur votre chemin vers la naturalisation.`,
  sources: [
    {
      title: 'Passeport Talent – Service-Public.fr',
      url: 'https://www.service-public.fr/particuliers/vosdroits/F16922',
      type: 'official' as const,
      description: 'Conditions officielles du Passeport Talent par catégorie',
    },
  ],
};
