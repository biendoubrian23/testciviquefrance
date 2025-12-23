/**
 * Contenu détaillé des articles SEO - Partie 2
 * Articles sur les titres de séjour et le cadre légal
 */

import { ArticleFullContent } from './articles-part1';

// Article 4: Carte de séjour pluriannuelle
export const carteSejourPluriannuelleContent: ArticleFullContent = {
  slug: 'carte-sejour-pluriannuelle-guide-complet-2025',
  introduction: `La carte de séjour pluriannuelle (CSP) est un titre de séjour de 4 ans maximum qui simplifie les démarches administratives des étrangers résidant en France. Depuis janvier 2026, son obtention est conditionnée à la réussite du test civique.`,
  sections: [
    {
      id: 'definition-avantages',
      title: "Qu'est-ce que la carte de séjour pluriannuelle ?",
      content: `La carte de séjour pluriannuelle est un titre de séjour d'une durée de **2 à 4 ans** qui remplace la carte de séjour temporaire d'un an après votre première année de séjour régulier en France.

**Avantages de la CSP**
- Durée de validité de 4 ans (vs 1 an pour la carte temporaire)
- Moins de démarches administratives (renouvellement tous les 4 ans)
- Stabilité pour les démarches bancaires, logement, emploi
- Étape vers la carte de résident de 10 ans

**Qui peut en bénéficier ?**
- Les titulaires d'un visa long séjour valant titre de séjour (VLS-TS)
- Les titulaires d'une carte de séjour temporaire d'un an
- Les bénéficiaires du regroupement familial
- Les étudiants (carte spécifique "étudiant")
- Les travailleurs salariés et non-salariés`,
    },
    {
      id: 'conditions-obtention',
      title: "Conditions d'obtention en 2025-2026",
      content: `**Conditions générales**
- Être en situation régulière en France
- Avoir accompli une première année de séjour avec un VLS-TS ou carte temporaire
- Justifier de ressources suffisantes et stables
- Disposer d'un logement adapté

**Nouvelles conditions depuis janvier 2026** (Décret n°2025-647)
- **Réussir le test civique** avec un score minimum de 80%
- Justifier d'un niveau de français **A2** minimum
- Avoir suivi une formation civique (si première demande)

**Conditions spécifiques selon le motif**
- *Salarié* : CDI ou CDD de plus de 12 mois, salaire conforme au SMIC
- *Vie privée et familiale* : liens personnels et familiaux en France
- *Étudiant* : inscription dans un établissement d'enseignement supérieur
- *Passeport talent* : diplôme de niveau Master ou projet innovant`,
    },
    {
      id: 'documents-demarches',
      title: "Documents et démarches à effectuer",
      content: `**Documents communs à tous les demandeurs**
- Formulaire CERFA de demande
- Passeport en cours de validité
- Justificatif de domicile de moins de 6 mois
- 3 photos d'identité conformes aux normes
- Timbre fiscal (225€ en 2025)
- **Attestation de réussite au test civique**
- Attestation de niveau de français A2

**Documents spécifiques**
*Pour les salariés :*
- Contrat de travail
- 3 derniers bulletins de salaire
- Dernier avis d'imposition

*Pour la vie privée et familiale :*
- Acte de mariage ou PACS
- Actes de naissance des enfants
- Tout justificatif de liens personnels en France

**Procédure de demande**
1. Passer et réussir le test civique
2. Constituer le dossier complet
3. Prendre rendez-vous en préfecture ou sur le site de l'ANEF
4. Déposer le dossier
5. Retirer la carte après instruction (2 à 4 mois)`,
    },
    {
      id: 'renouvellement',
      title: "Renouvellement de la carte pluriannuelle",
      content: `**Quand demander le renouvellement ?**
Vous devez demander le renouvellement **2 à 4 mois avant l'expiration** de votre carte actuelle.

**Conditions de renouvellement**
- Maintien des conditions initiales d'attribution
- Pas de menace à l'ordre public
- Résidence habituelle en France maintenue
- Respect des obligations fiscales

**Le test civique au renouvellement**
- Si vous avez déjà réussi le test civique, vous n'avez pas à le repasser
- Conservez précieusement votre attestation de réussite
- En cas de première demande de renouvellement en 2026+, le test est requis

**Délai de traitement**
Le délai moyen est de 2 à 3 mois. Vous recevez un récépissé vous autorisant à rester en France pendant l'instruction.`,
    },
  ],
  conclusion: `La carte de séjour pluriannuelle offre une stabilité administrative précieuse pour votre vie en France. Avec la nouvelle obligation du test civique depuis janvier 2026, préparez-vous dès maintenant sur Test Civique France pour obtenir votre attestation de réussite.`,
  faq: [
    {
      question: "Puis-je travailler avec une carte de séjour pluriannuelle ?",
      answer: "Oui, la plupart des CSP autorisent l'exercice d'une activité professionnelle. Vérifiez les mentions sur votre carte.",
    },
    {
      question: "Que faire si ma carte expire pendant l'instruction de mon renouvellement ?",
      answer: "Le récépissé de demande de renouvellement vous autorise à rester et travailler en France jusqu'à la décision.",
    },
  ],
  keywords: [
    'carte séjour pluriannuelle',
    'titre séjour 4 ans',
    'renouvellement carte séjour',
    'CSP france',
    'conditions carte séjour',
  ],
  videos: [
    {
      videoId: 'M6Jqed7F16I',
      title: "Guide complet du titre de séjour en France",
    },
  ],
  sources: [
    {
      title: 'Service-Public.fr - Carte de séjour pluriannuelle',
      url: 'https://www.service-public.fr/particuliers/vosdroits/F2209',
      type: 'official',
      description: 'Conditions et démarches pour obtenir une carte de séjour pluriannuelle',
    },
    {
      title: 'ANEF - Demande de titre de séjour en ligne',
      url: 'https://administration-etrangers-en-france.interieur.gouv.fr/',
      type: 'official',
      description: 'Portail officiel pour les démarches en ligne',
    },
    {
      title: 'Légifrance - CESEDA - Titres de séjour',
      url: 'https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006070158/',
      type: 'legal',
      description: 'Code régissant les différents titres de séjour',
    },
  ],
};

// Article 5: Carte de résident 10 ans
export const carteResident10AnsContent: ArticleFullContent = {
  slug: 'carte-resident-10-ans-obtention-2025',
  introduction: `La carte de résident est le titre de séjour le plus stable accordé aux étrangers en France. Valable 10 ans et renouvelable de plein droit, elle offre des droits étendus et une sécurité juridique maximale.`,
  sections: [
    {
      id: 'presentation',
      title: "Qu'est-ce que la carte de résident ?",
      content: `La carte de résident est un titre de séjour d'une durée de **10 ans**, renouvelable automatiquement sous conditions. Elle représente l'aboutissement du parcours d'intégration en France.

**Avantages de la carte de résident**
- Durée de 10 ans (stabilité maximale)
- Renouvellement de plein droit
- Droit au travail sans restriction
- Facilitation des démarches administratives
- Accès facilité à la naturalisation
- Possibilité de demander un titre pour sa famille

**Types de cartes de résident**
- Carte de résident classique (10 ans)
- Carte de résident longue durée-UE
- Carte de résident permanent (après 2 renouvellements)`,
    },
    {
      id: 'conditions-2025',
      title: "Conditions d'obtention en 2025-2026",
      content: `**Conditions générales requises**
- Résider en France de manière **régulière depuis 5 ans** minimum
- Disposer de **ressources stables et suffisantes**
- Ne pas constituer une menace pour l'ordre public
- **Réussir le test civique** (obligation depuis 2026)
- Justifier d'un niveau de français **B1** (oral)

**Cas d'attribution de plein droit** (sans condition de durée)
- Conjoint de Français (après 3 ans de mariage et de séjour)
- Parent d'enfant français résidant en France
- Réfugié statutaire et sa famille
- Apatride et sa famille
- Ancien combattant
- Étranger ayant servi dans la Légion étrangère

**Cas d'attribution sur demande**
- Après 5 ans de séjour régulier continu
- Avec justification d'intégration républicaine
- Avec ressources suffisantes (SMIC minimum)`,
    },
    {
      id: 'procedure-complete',
      title: "Procédure complète de demande",
      content: `**1. Vérifiez votre éligibilité**
Confirmez que vous remplissez toutes les conditions requises.

**2. Passez le test civique**
Inscrivez-vous dans un centre agréé et obtenez votre attestation de réussite (80% minimum).

**3. Justifiez votre niveau de français B1**
Passez un test reconnu (DELF B1, TCF, etc.) ou fournissez un diplôme équivalent.

**4. Constituez votre dossier**
Documents requis :
- Formulaire CERFA
- Passeport valide
- Titre de séjour actuel
- Justificatif de domicile
- Justificatifs de ressources (3 derniers mois)
- Attestation de test civique
- Attestation de niveau B1
- Timbre fiscal (225€)
- 3 photos d'identité

**5. Déposez votre demande**
En préfecture ou via le portail ANEF selon votre département.

**6. Attendez la décision**
Délai : 4 à 8 mois en moyenne. Vous recevez un récépissé pendant l'instruction.`,
    },
    {
      id: 'renouvellement-permanent',
      title: "Renouvellement et carte de résident permanent",
      content: `**Renouvellement de la carte de résident**
Le renouvellement est automatique si vous :
- Avez résidé habituellement en France
- N'avez pas été absent plus de 3 ans consécutifs
- N'avez pas commis d'infraction grave

**Carte de résident permanent**
Après **2 renouvellements** de carte de résident (soit 20 ans), vous pouvez demander la carte de résident permanent :
- Durée illimitée
- Ne nécessite plus de renouvellement
- Mêmes droits que la carte de résident

**Attention : perte du droit au renouvellement**
Vous perdez votre carte de résident si :
- Vous résidez hors de France plus de 3 ans
- Vous avez obtenu la carte par fraude
- Vous représentez une menace grave pour l'ordre public`,
    },
  ],
  conclusion: `La carte de résident de 10 ans est l'objectif ultime pour de nombreux étrangers souhaitant s'établir durablement en France. Avec le test civique désormais obligatoire, commencez votre préparation dès maintenant sur Test Civique France.`,
  keywords: [
    'carte résident 10 ans',
    'titre séjour 10 ans',
    'carte résident france',
    'conditions carte résident',
    'renouvellement carte résident',
  ],
  videos: [
    {
      videoId: 'nXimESI0mQo',
      title: "Comment obtenir la carte de résident 10 ans",
    },
  ],
  sources: [
    {
      title: 'Service-Public.fr - Carte de résident',
      url: 'https://www.service-public.fr/particuliers/vosdroits/F11217',
      type: 'official',
      description: 'Conditions et démarches pour la carte de résident de 10 ans',
    },
    {
      title: 'Légifrance - Articles L414-1 à L414-14 du CESEDA',
      url: 'https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006070158/',
      type: 'legal',
      description: 'Textes juridiques régissant la carte de résident',
    },
    {
      title: 'Préfecture de Police - Carte de résident',
      url: 'https://www.prefecturedepolice.interieur.gouv.fr/',
      type: 'official',
      description: 'Informations pour les demandes en Île-de-France',
    },
  ],
};

// Article 6: Titre de séjour étudiant
export const titreSejourEtudiantContent: ArticleFullContent = {
  slug: 'titre-sejour-etudiant-france-guide-2025',
  introduction: `Le titre de séjour étudiant permet aux ressortissants étrangers de poursuivre leurs études supérieures en France. Ce guide complet vous accompagne dans toutes les démarches, du visa initial au changement de statut après les études.`,
  sections: [
    {
      id: 'types-titres',
      title: "Types de titres de séjour pour étudiants",
      content: `**Visa long séjour valant titre de séjour (VLS-TS) "étudiant"**
- Durée : jusqu'à 1 an
- Délivré avant l'arrivée en France
- Doit être validé en ligne dans les 3 mois suivant l'arrivée

**Carte de séjour pluriannuelle "étudiant"**
- Durée : correspond à la durée des études restantes
- Délivrée après la première année avec VLS-TS
- Maximum 4 ans

**Carte de séjour "étudiant-programme de mobilité"**
- Pour les étudiants en échange universitaire
- Durée selon le programme

**Carte "passeport talent - chercheur"**
- Pour les doctorants et chercheurs
- Durée de 4 ans maximum`,
    },
    {
      id: 'demarches-initiales',
      title: "Démarches pour étudier en France",
      content: `**Étape 1 : Inscription via Campus France**
Si vous venez d'un pays à procédure "Études en France" :
- Créez un compte sur le portail Campus France
- Constituez votre dossier pédagogique
- Passez l'entretien Campus France
- Obtenez l'accord préalable

**Étape 2 : Demande de visa long séjour**
- Déposez votre demande au consulat de France
- Fournissez votre attestation Campus France
- Justifiez vos ressources (615€/mois minimum)
- Attestation d'hébergement ou réservation

**Étape 3 : Validation du VLS-TS**
Dans les 3 mois suivant votre arrivée :
- Connectez-vous sur le site de l'ANEF
- Payez la taxe (50€)
- Téléchargez vos justificatifs

**Étape 4 : Inscription à la Sécurité sociale étudiante**
- Via le site ameli.fr
- Gratuit pour les étudiants`,
    },
    {
      id: 'renouvellement-etudiant',
      title: "Renouvellement du titre étudiant",
      content: `**Conditions de renouvellement**
- Être inscrit dans un établissement d'enseignement supérieur
- Progression dans les études (pas de redoublement excessif)
- Ressources suffisantes maintenues
- Présence effective aux cours

**Depuis janvier 2026 : test civique requis**
Pour obtenir une carte de séjour pluriannuelle "étudiant", vous devez désormais :
- **Réussir le test civique** (80% minimum)
- Justifier d'un niveau de français A2

**Documents pour le renouvellement**
- Attestation d'inscription universitaire
- Relevés de notes
- Justificatifs de ressources
- Justificatif de domicile
- Attestation de test civique (si première CSP)
- Timbre fiscal (75€ pour étudiants)

**Délai de demande**
Demandez le renouvellement 2 mois avant l'expiration de votre titre actuel.`,
    },
    {
      id: 'apres-etudes',
      title: "Après les études : changement de statut",
      content: `**Autorisation Provisoire de Séjour (APS) "recherche d'emploi"**
À la fin de vos études (Master minimum), vous pouvez demander une APS de 12 mois pour :
- Chercher un emploi en lien avec vos études
- Créer une entreprise

**Changement vers "salarié"**
Conditions :
- Emploi en lien avec le diplôme obtenu
- Salaire minimum 1,5 SMIC (pour un Master)
- CDI ou CDD de plus de 12 mois
- Autorisation de travail accordée

**Changement vers "passeport talent"**
Si vous obtenez un emploi qualifié :
- Salaire minimum 2 SMIC
- Ou poste de cadre avec diplôme Master
- Carte de 4 ans

**Changement vers "entrepreneur"**
Si vous créez votre entreprise :
- Projet économique viable
- Ressources suffisantes
- Carte "entrepreneur/profession libérale"`,
    },
  ],
  conclusion: `Étudier en France est une opportunité exceptionnelle. Avec les nouvelles règles 2026, le test civique devient une étape importante de votre parcours. Préparez-vous dès maintenant sur Test Civique France pour sécuriser votre avenir en France.`,
  faq: [
    {
      question: "Puis-je travailler avec un titre de séjour étudiant ?",
      answer: "Oui, vous pouvez travailler jusqu'à 964 heures par an (soit 60% du temps plein), sans autorisation de travail spécifique.",
    },
    {
      question: "Le test civique est-il obligatoire pour tous les étudiants ?",
      answer: "Depuis janvier 2026, le test civique est requis pour l'obtention d'une carte de séjour pluriannuelle, y compris pour les étudiants.",
    },
  ],
  keywords: [
    'titre séjour étudiant',
    'visa étudiant france',
    'carte séjour étudiant',
    'études france étranger',
    'campus france',
    'changement statut étudiant salarié',
  ],
  videos: [
    {
      videoId: 'faTI6V7m5Tk',
      title: "Étudier en France : guide pour les étudiants étrangers",
    },
  ],
  sources: [
    {
      title: 'Campus France - Étudier en France',
      url: 'https://www.campusfrance.org/fr',
      type: 'official',
      description: 'Portail officiel pour les étudiants internationaux',
    },
    {
      title: 'Service-Public.fr - Carte de séjour étudiant',
      url: 'https://www.service-public.fr/particuliers/vosdroits/F2231',
      type: 'official',
      description: 'Conditions et démarches pour le titre de séjour étudiant',
    },
    {
      title: 'France Diplomatie - Venir étudier en France',
      url: 'https://www.diplomatie.gouv.fr/fr/venir-en-france/etudier-en-france/',
      type: 'official',
      description: 'Informations sur les visas étudiants',
    },
  ],
};

// Article 7: Regroupement familial
export const regroupementFamilialContent: ArticleFullContent = {
  slug: 'regroupement-familial-france-procedure-2025',
  introduction: `Le regroupement familial permet à un étranger résidant légalement en France de faire venir son conjoint et ses enfants mineurs. Cette procédure est encadrée par des conditions strictes de ressources et de logement.`,
  sections: [
    {
      id: 'principe-beneficiaires',
      title: "Principe et bénéficiaires du regroupement familial",
      content: `**Définition**
Le regroupement familial est le droit pour un étranger en situation régulière de faire venir en France les membres de sa famille restés dans le pays d'origine.

**Qui peut demander le regroupement familial ?**
L'étranger "demandeur" doit :
- Séjourner régulièrement en France depuis **au moins 18 mois**
- Détenir un titre de séjour d'au moins **1 an**
- Ne pas être polygame

**Qui peut rejoindre le demandeur ?**
- Le conjoint (époux/épouse) majeur
- Les enfants mineurs de moins de 18 ans
- Les enfants du conjoint (avec autorisation de l'autre parent)

**Qui est exclu ?**
- Les partenaires de PACS (autre procédure)
- Les parents du demandeur
- Les enfants majeurs
- Le second conjoint en cas de polygamie`,
    },
    {
      id: 'conditions-ressources-logement',
      title: "Conditions de ressources et de logement",
      content: `**Conditions de ressources**
Le demandeur doit justifier de ressources stables et suffisantes :
- **Minimum : SMIC net** pour une famille de 2-3 personnes
- Revenus pris en compte : salaires, allocations chômage, pensions
- Revenus exclus : RSA, ASS, allocations familiales

*Barème 2025 :*
| Taille famille | Ressources minimales |
|----------------|---------------------|
| 2-3 personnes  | 1 426€/mois (SMIC)  |
| 4-5 personnes  | 1 569€/mois         |
| 6+ personnes   | 1 711€/mois         |

**Conditions de logement**
Le logement doit être :
- Considéré comme "normal" pour une famille comparable
- Superficie minimale : 22m² pour 2 personnes, +10m² par personne supplémentaire
- Répondre aux normes de salubrité et de sécurité
- Disponible à la date d'arrivée de la famille`,
    },
    {
      id: 'procedure-detaillee',
      title: "Procédure de demande étape par étape",
      content: `**Étape 1 : Dépôt de la demande**
- Déposez le dossier à l'OFII (Office Français de l'Immigration et de l'Intégration)
- Formulaire CERFA n°11436*06
- Justificatifs d'identité, de ressources et de logement

**Étape 2 : Instruction par le maire**
Le maire de votre commune vérifie :
- La réalité et la conformité du logement
- L'enquête est obligatoire dans les 2 mois

**Étape 3 : Décision de l'OFII**
L'OFII rend sa décision dans un délai de **6 mois** :
- Accord : l'OFII délivre une attestation de regroupement familial
- Refus : motivé et susceptible de recours

**Étape 4 : Demande de visa par la famille**
Les membres de la famille demandent un visa long séjour au consulat de France dans leur pays.

**Étape 5 : Arrivée en France**
À leur arrivée, les membres de la famille :
- Passent la visite médicale OFII
- Signent le Contrat d'Intégration Républicaine (CIR)
- Reçoivent leur titre de séjour`,
    },
    {
      id: 'test-civique-famille',
      title: "Test civique et intégration de la famille",
      content: `**Formation civique obligatoire**
Les membres de la famille doivent suivre une formation civique dispensée par l'OFII comprenant :
- Présentation des institutions françaises
- Valeurs de la République
- Accès aux droits
- Vie quotidienne en France

**Test civique pour la famille**
Depuis janvier 2026, pour obtenir une **carte de séjour pluriannuelle**, les membres de la famille devront également :
- **Réussir le test civique** (80% minimum)
- Justifier d'un niveau de français A2

Cette obligation s'applique lors du premier renouvellement du titre de séjour, après la période initiale d'un an.

**Préparation sur Test Civique France**
Notre plateforme propose des cours et des tests adaptés pour préparer tous les membres de la famille au test civique.`,
    },
  ],
  conclusion: `Le regroupement familial est un droit fondamental encadré par des conditions précises. Avec les nouvelles obligations du test civique, anticipez la préparation de toute votre famille sur Test Civique France.`,
  keywords: [
    'regroupement familial france',
    'faire venir sa famille en france',
    'conditions regroupement familial',
    'visa famille france',
    'OFII regroupement familial',
  ],
  videos: [
    {
      videoId: '8MyAxR3G-fU',
      title: "Le regroupement familial en France expliqué",
    },
  ],
  sources: [
    {
      title: 'Service-Public.fr - Regroupement familial',
      url: 'https://www.service-public.fr/particuliers/vosdroits/F11166',
      type: 'official',
      description: 'Conditions et démarches du regroupement familial',
    },
    {
      title: 'OFII - Le regroupement familial',
      url: 'https://www.ofii.fr/procedure/le-regroupement-familial/',
      type: 'official',
      description: 'Procédure officielle auprès de l\'OFII',
    },
    {
      title: 'Légifrance - Articles L434-1 à L434-8 du CESEDA',
      url: 'https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006070158/',
      type: 'legal',
      description: 'Cadre juridique du regroupement familial',
    },
  ],
};
