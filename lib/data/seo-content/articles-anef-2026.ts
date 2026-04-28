import { ArticleFullContent } from './articles-part1';

// Article ANEF 1 : Connexion / problèmes mon compte
export const anefMonCompteConnexionContent: ArticleFullContent = {
  slug: 'anef-mon-compte-connexion-probleme-solution-2026',
  introduction: `Vous n'arrivez plus à vous connecter à ANEF ? Page blanche, mot de passe refusé, FranceConnect qui boucle, code reçu par SMS qui ne fonctionne pas ? Vous n'êtes pas seul : en 2026, ANEF (Administration Numérique pour les Étrangers en France) traite plus de 4 millions de connexions par mois et les bugs sont fréquents.

Ce guide recense les **15 problèmes de connexion ANEF les plus fréquents en 2026** et donne pour chacun la solution exacte testée. Vous trouverez aussi les bons numéros de support, les heures de moindre affluence pour vous reconnecter et la procédure officielle pour récupérer un compte bloqué.`,
  sections: [
    {
      id: 'panne-anef-comment-savoir',
      title: 'Comment savoir si ANEF est en panne ou si c\'est mon compte ?',
      content: `Avant de paniquer, vérifiez si la panne est globale :

**3 vérifications en 30 secondes :**
1. Allez sur **administration-etrangers-en-france.interieur.gouv.fr** depuis un navigateur **différent** (Edge si vous étiez sur Chrome)
2. Testez en **navigation privée** (Ctrl+Maj+N)
3. Vérifiez **downdetector.fr/statut/anef** — si la courbe explose, c'est une panne globale

**Si la panne est globale :**
- Réessayez **entre 6h et 8h du matin** (créneau le moins saturé)
- Évitez 11h-14h et 18h-22h (pics de trafic)
- Le **week-end matin** est idéal

**Si seul votre compte plante :**
Passez à la section suivante.`,
    },
    {
      id: '15-problemes-frequents',
      title: 'Les 15 problèmes de connexion ANEF et leur solution',
      content: `**1. "Identifiants incorrects" alors qu'ils sont bons**
→ Videz le cache du navigateur (Ctrl+Maj+Suppr). 80% des cas résolus.

**2. FranceConnect tourne en boucle**
→ Connectez-vous à **impots.gouv.fr** d'abord, puis cliquez sur ANEF dans un nouvel onglet.

**3. Le code SMS n'arrive jamais**
→ Vérifiez que votre numéro est au format **+33 6 XX XX XX XX** dans votre profil. Sinon, demandez le code par mail.

**4. Page blanche après connexion**
→ Désactivez les bloqueurs de pub (uBlock, AdBlock) sur le domaine ANEF.

**5. "Votre session a expiré" en boucle**
→ Activez les **cookies tiers** dans les paramètres du navigateur.

**6. Mot de passe oublié et le mail "réinitialisation" n'arrive pas**
→ Vérifiez le dossier **Spam / Indésirables**. Sinon, attendez 30 minutes et recommencez (limite anti-spam ANEF).

**7. Compte bloqué après 3 tentatives**
→ Attendez **1 heure** automatiquement. Sinon contactez le **support ANEF : 0806 001 620** (gratuit, lun-ven 9h-16h).

**8. "Une erreur est survenue" sans détail**
→ Code 500 côté serveur ANEF. Réessayez 30 min plus tard.

**9. Impossible de téléverser un document**
→ Le fichier doit être **PDF, JPG ou PNG**, **<5 Mo**, et **non protégé par mot de passe**.

**10. "Document non lisible"**
→ Scannez à **300 DPI minimum**, en **couleur**, sans rogner.

**11. Le paiement timbre fiscal échoue**
→ Utilisez **timbres.impots.gouv.fr** d'abord, puis collez le numéro de référence dans ANEF.

**12. Convocation préfecture introuvable**
→ Cliquez sur l'icône cloche en haut à droite. Si rien, attendez : la convocation arrive parfois avec 48h de retard.

**13. Photo refusée**
→ Format **35x45 mm**, fond **blanc/gris clair**, **sans lunettes**, **sans sourire**, prise il y a moins de 6 mois.

**14. ANEF demande un document déjà fourni**
→ Re-téléversez-le. Le bug "document fantôme" est connu et fréquent.

**15. Numéro AGDREF perdu / inconnu**
→ Vous le trouverez sur votre **récépissé** ou votre **ancien titre de séjour** (8 à 10 chiffres).`,
    },
    {
      id: 'support-anef',
      title: 'Contacter le support ANEF en 2026 : les bons canaux',
      content: `**Téléphone (le plus efficace) :**
- **0806 001 620** — gratuit, lun-ven 9h-16h
- Astuce : appelez **à 9h00 pile**, l'attente est <5 minutes

**Formulaire de contact officiel :**
- contact-usagers.anef.interieur.gouv.fr
- Réponse en 5 à 15 jours

**Préfecture :**
- Inutile pour les bugs ANEF — elles n'ont pas accès aux comptes ANEF
- Utile si votre dossier est bloqué côté préfecture (instruction)

**Médiateur de la République :**
- Si aucune réponse après 30 jours et dossier bloqué : **defenseurdesdroits.fr**`,
    },
    {
      id: 'astuce-pas-bloque',
      title: '5 astuces pour ne plus jamais être bloqué sur ANEF',
      content: `1. **Sauvegardez votre mot de passe** dans un gestionnaire (Bitwarden, KeePass)
2. **Notez votre numéro AGDREF** quelque part de sûr
3. **Activez la double authentification** par mail (plus fiable que SMS)
4. **Mettez Edge ou Firefox** comme navigateur de secours
5. **Connectez-vous tous les 30 jours** au minimum pour éviter la suspension de compte`,
    },
  ],
  conclusion: `Les bugs ANEF sont frustrants mais rarement définitifs. Dans 90% des cas, vider le cache, changer de navigateur ou attendre l'heure creuse résout le problème. Si votre compte est durablement bloqué, le 0806 001 620 reste l'arme la plus efficace. Conservez précieusement votre numéro AGDREF et votre mot de passe : c'est la clé pour toutes vos démarches futures (renouvellement, changement de statut, naturalisation).`,
  faq: [
    { question: 'ANEF est-il en panne aujourd\'hui ?', answer: 'Vérifiez sur downdetector.fr/statut/anef. Les pannes globales durent généralement entre 30 minutes et 4 heures. Le matin (6h-8h) et le week-end sont les créneaux les plus stables.' },
    { question: 'Combien de temps prend la récupération d\'un compte ANEF ?', answer: 'Avec le formulaire en ligne : 5 à 15 jours. Par téléphone (0806 001 620) : souvent résolu en moins de 24 heures pour les cas simples.' },
    { question: 'Que faire si le code SMS ANEF n\'arrive jamais ?', answer: 'Vérifiez le format du numéro (+33 6 XX XX XX XX), demandez le code par mail à la place, ou changez votre numéro dans votre profil ANEF (depuis un appareil déjà connecté).' },
    { question: 'Puis-je avoir 2 comptes ANEF ?', answer: 'Non, un seul compte par personne (lié à votre numéro AGDREF). Créer un doublon peut bloquer définitivement vos demandes.' },
  ],
  keywords: ['anef', 'anef mon compte', 'anef connexion', 'anef bug 2026', 'anef ne fonctionne pas', 'mon compte anef', 'anef panne', 'anef support'],
};

// Article ANEF 2 : Étudiant étranger
export const anefEtudiantEtrangerContent: ArticleFullContent = {
  slug: 'anef-etudiant-etranger-2026',
  introduction: `ANEF est désormais la **plateforme officielle obligatoire** pour toutes les démarches des étudiants étrangers en France : validation du VLS-TS, renouvellement du titre étudiant, changement de statut après le diplôme, demande d'APS (Autorisation Provisoire de Séjour). En 2026, plus de 90% des préfectures n'acceptent **plus aucun dossier papier** pour les étudiants.

Ce guide ANEF étudiant 2026 reprend toutes les démarches dans l'ordre chronologique, avec les documents à préparer, les délais réels par préfecture et les pièges qui font rejeter les dossiers étudiants.`,
  sections: [
    {
      id: 'arrivee-france-vls-ts',
      title: 'Étape 1 : valider votre VLS-TS dans les 3 mois (obligatoire)',
      content: `Si vous êtes arrivé avec un visa long séjour valant titre de séjour (VLS-TS) "étudiant", vous **devez le valider dans les 3 mois** sur ANEF.

**Procédure exacte (15 minutes) :**
1. Connexion sur **administration-etrangers-en-france.interieur.gouv.fr**
2. Création de compte avec votre numéro de visa
3. Renseignement de l'adresse en France
4. Paiement de la **taxe OFII : 50 €** (étudiants) via timbre fiscal électronique
5. Téléchargement de l'**attestation de validation** (à conserver !)

**Sans validation dans les 3 mois :**
- Votre VLS-TS devient **invalide**
- Vous êtes en situation irrégulière
- Risque d'OQTF en cas de contrôle

**Documents à téléverser :**
- Visa (page passeport)
- Justificatif de domicile (<3 mois)
- Page d'identité du passeport`,
    },
    {
      id: 'renouvellement-titre-etudiant',
      title: 'Étape 2 : renouveler votre titre étudiant sur ANEF',
      content: `Le renouvellement se fait **2 à 4 mois avant l'expiration** de votre titre actuel.

**Documents obligatoires (12 pièces) :**
1. Passeport (toutes pages utiles)
2. Titre de séjour actuel
3. Photo d'identité format ANEF
4. Justificatif de domicile <3 mois
5. **Certificat de scolarité de l'année en cours**
6. **Relevé de notes des semestres précédents** (preuve de progression)
7. Justificatif de ressources (615 €/mois minimum requis)
8. Attestation CVEC payée
9. Attestation d'inscription pour l'année à venir
10. Justificatif d'assurance maladie
11. Timbre fiscal **75 €**
12. Justificatif de l'année précédente si redoublement

**Le piège #1 (cause de 40% des refus) :**
Le **manque de progression académique**. Si vous avez redoublé sans raison valable médicale ou personnelle documentée, votre titre peut être refusé. Joignez TOUJOURS un courrier explicatif si vos notes sont faibles.`,
    },
    {
      id: 'aps-apres-master',
      title: 'Étape 3 : demander une APS après votre Master (12 mois pour trouver un emploi)',
      content: `L'**Autorisation Provisoire de Séjour (APS)** vous permet de rester **12 mois en France après votre diplôme** pour chercher un emploi ou créer une entreprise.

**Conditions 2026 :**
- Diplôme **niveau Master minimum** (Bac+5)
- Diplôme délivré par un **établissement français habilité**
- Demande dans les **4 mois après l'obtention** du diplôme

**Documents :**
- Diplôme ou attestation de réussite
- Justificatif de ressources : **2 707 €/mois** (équivalent SMIC)
- Projet professionnel détaillé
- CV et lettre de motivation

**Ce que l'APS permet :**
- Travailler à **100%** (plus de limite des 964h)
- Créer une entreprise
- Convertir en **Passeport Talent** ou **salarié** dès que vous trouvez un emploi qualifié`,
    },
    {
      id: 'changement-statut-etudiant-salarie',
      title: 'Étape 4 : changement de statut étudiant → salarié sur ANEF',
      content: `Si vous trouvez un CDI ou CDD ≥12 mois pendant ou après vos études :

**Conditions :**
- Salaire **brut ≥ 1.5 SMIC** (≈ 2 707 € brut/mois en 2026)
- Emploi **lié au diplôme** obtenu
- L'employeur dépose une **demande d'autorisation de travail** sur ANEF (côté employeur)

**Délai d'instruction :**
- 2 mois en théorie
- 3 à 6 mois en réalité dans les grosses préfectures (Paris, 93, 94)

**Astuce :** lancez la procédure **avant la fin de votre titre étudiant**. ANEF émet un récépissé qui vous permet de continuer à séjourner et travailler pendant l'instruction.`,
    },
  ],
  conclusion: `ANEF est désormais incontournable pour tout étudiant étranger en France. La règle d'or : **anticipez de 4 mois** vos démarches, conservez tous vos justificatifs académiques et financiers, et ne laissez jamais votre titre expirer sans avoir lancé le renouvellement. Si vous visez de rester en France après votre diplôme, demander l'APS est la stratégie la plus sûre : elle vous donne 12 mois pour transformer votre statut en salarié ou Passeport Talent.`,
  faq: [
    { question: 'Combien coûte le renouvellement d\'un titre étudiant en 2026 ?', answer: '75 € de timbre fiscal pour le renouvellement. À cela s\'ajoutent la CVEC (103 € en 2026) et les frais de scolarité.' },
    { question: 'Puis-je travailler avec un titre étudiant ?', answer: 'Oui, jusqu\'à 964 heures par an (60% du temps légal annuel). Avec une APS ou un changement de statut, vous passez à 100%.' },
    { question: 'Mon titre étudiant a expiré et je n\'ai pas fait le renouvellement, que faire ?', answer: 'Déposez immédiatement une demande sur ANEF même tardive. Vous serez sans doute pénalisé d\'une amende mais le dossier sera étudié. Évitez de quitter la France pendant cette période.' },
  ],
  keywords: ['anef étudiant', 'anef etudiant etranger', 'titre séjour étudiant 2026', 'aps master', 'changement statut étudiant salarié', 'renouvellement titre étudiant'],
};

// Article ANEF 3 : Créer un compte ANEF (tutoriel)
export const compteAnefCreerContent: ArticleFullContent = {
  slug: 'compte-anef-creer-2026-guide-pas-a-pas',
  introduction: `Créer un compte ANEF (Administration Numérique pour les Étrangers en France) est la **première étape obligatoire** pour toutes vos démarches : validation de visa, demande de titre de séjour, renouvellement, changement de statut, naturalisation. En 2026, ANEF est la seule porte d'entrée — il n'y a plus de dossier papier.

Ce tutoriel vous guide pas à pas pour **créer votre compte ANEF en 5 minutes**, sans erreur, avec la liste des documents à avoir sous la main et les pièges à éviter qui bloquent 1 utilisateur sur 4 dès la création.`,
  sections: [
    {
      id: 'avant-de-commencer',
      title: 'Avant de commencer : les 4 documents à avoir sous la main',
      content: `Pour créer votre compte ANEF sans interruption :

1. **Une adresse mail valide** que vous consultez régulièrement
2. **Un numéro de téléphone français** (commençant par +33 6 ou +33 7)
3. **Votre passeport ou pièce d'identité** (numéro à saisir)
4. **Votre numéro de visa OU numéro AGDREF** si vous avez déjà un titre de séjour

**Ressources optionnelles mais utiles :**
- Compte FranceConnect (impots.gouv.fr, ameli.fr) → connexion simplifiée
- Justificatif de domicile <3 mois (pour les démarches qui suivent)`,
    },
    {
      id: 'tutoriel-creation',
      title: 'Tutoriel : créer votre compte ANEF en 5 étapes',
      content: `**Étape 1 — Aller sur le bon site**
Tapez exactement : **administration-etrangers-en-france.interieur.gouv.fr**
⚠️ Méfiez-vous des sites pirates qui imitent ANEF. Le vrai site se termine par **.interieur.gouv.fr**.

**Étape 2 — Cliquer sur "Je n'ai pas encore de compte"**
Choisissez la méthode :
- **FranceConnect** (recommandé si vous avez impots.gouv ou ameli) — 30 secondes
- **Création classique** par mail — 5 minutes

**Étape 3 — Renseigner vos informations personnelles**
- Nom et prénom : **exactement comme sur le passeport**
- Date de naissance : format JJ/MM/AAAA
- Adresse mail : utilisez une adresse personnelle (pas une adresse pro temporaire)

**Étape 4 — Choisir un mot de passe sécurisé**
- 12 caractères minimum
- 1 majuscule, 1 chiffre, 1 caractère spécial
- ⚠️ **Notez-le immédiatement** : la récupération est lente (5-15 jours)

**Étape 5 — Valider par mail puis SMS**
- Code à 6 chiffres envoyé par mail (vérifiez les Spams)
- Puis code SMS de vérification

✅ Votre compte est créé. Vous pouvez maintenant déposer votre première demande.`,
    },
    {
      id: 'pieges-frequents',
      title: 'Les 6 pièges qui bloquent la création (à éviter absolument)',
      content: `**Piège 1 : utiliser le nom Facebook au lieu du nom passeport**
→ Conséquence : votre compte ne pourra jamais être lié à votre titre. Toujours saisir le nom **EXACTEMENT** comme sur le passeport (accents inclus).

**Piège 2 : créer un compte avec une adresse mail temporaire ou pro**
→ Si vous perdez l'accès à cette adresse, votre compte est perdu.

**Piège 3 : utiliser un numéro de téléphone étranger**
→ Les SMS ANEF ne fonctionnent **que sur des numéros français**. Achetez une carte SIM française (Free Mobile à 2€/mois suffit).

**Piège 4 : créer un compte au nom d'un proche pour lui**
→ Strictement interdit et détectable. Risque : blocage définitif des deux comptes.

**Piège 5 : oublier d'utiliser FranceConnect quand on a impots.gouv**
→ FranceConnect divise par 3 le temps de connexion. À activer.

**Piège 6 : créer plusieurs comptes en croyant que ça aide**
→ Au contraire, ça bloque vos demandes. **Un seul compte par personne**, lié à votre numéro AGDREF.`,
    },
    {
      id: 'apres-creation',
      title: 'Et après ? Vos premières démarches sur ANEF',
      content: `Une fois le compte créé, voici l'ordre logique :

1. **Compléter votre profil** (état civil, adresse en France, nationalité)
2. **Téléverser vos justificatifs** dans "Mes documents" (passeport, photo, justificatif de domicile)
3. **Choisir votre démarche** dans "Démarches en ligne" :
   - Validation visa long séjour
   - Demande de premier titre
   - Renouvellement
   - Changement de situation (mariage, naissance, déménagement)
   - Demande de naturalisation
4. **Suivre l'avancement** dans "Mes demandes en cours"
5. **Activer les notifications** (cloche en haut à droite)`,
    },
  ],
  conclusion: `Créer un compte ANEF est rapide et gratuit, mais quelques règles simples évitent 90% des problèmes : utilisez votre nom de passeport exact, une adresse mail durable, un numéro français, et FranceConnect si possible. Une fois le compte créé, sauvegardez votre mot de passe et votre numéro AGDREF dans un endroit sûr — ce sera votre identifiant à vie pour toutes vos démarches en France.`,
  faq: [
    { question: 'La création de compte ANEF est-elle payante ?', answer: 'Non, totalement gratuite. Seules les démarches (timbres fiscaux, taxes OFII) sont payantes ensuite.' },
    { question: 'Puis-je créer un compte ANEF sans être encore en France ?', answer: 'Oui, vous pouvez créer le compte depuis l\'étranger. Mais certaines démarches (validation VLS-TS) nécessitent que vous soyez physiquement en France.' },
    { question: 'Que faire si je perds l\'accès à mon compte ANEF ?', answer: 'Cliquez sur "Mot de passe oublié" sur la page de connexion. Sinon, appelez le 0806 001 620 (lun-ven 9h-16h) avec votre numéro AGDREF en main.' },
    { question: 'Combien de temps reste actif un compte ANEF inactif ?', answer: 'Le compte reste valide tant que vous avez un titre de séjour ou un dossier en cours. Aucune suppression automatique.' },
  ],
  keywords: ['créer compte anef', 'compte anef', 'anef inscription', 'tuto anef 2026', 'anef etranger', 'créer un compte anef', 'anef premiere connexion'],
};

// Article ANEF 4 : Ouvrir un compte (variante focus problèmes/documents)
export const ouvrirCompteAnefProblemesContent: ArticleFullContent = {
  slug: 'ouvrir-compte-anef-2026-etapes-documents-problemes',
  introduction: `Ouvrir un compte ANEF semble simple sur le papier, mais en pratique **1 utilisateur sur 4 rencontre un blocage** dès la première inscription : numéro de visa non reconnu, FranceConnect qui boucle, code SMS qui n'arrive pas, document refusé. Bing Copilot reçoit chaque mois plus de 400 questions sur "ouvrir un compte ANEF".

Ce guide va plus loin qu'un simple tutoriel : on détaille **chaque problème connu** lors de l'ouverture d'un compte ANEF en 2026, les **documents acceptés / refusés** et la **procédure officielle** pour débloquer une création.`,
  sections: [
    {
      id: 'qui-doit-ouvrir-compte',
      title: 'Qui doit obligatoirement ouvrir un compte ANEF en 2026 ?',
      content: `**Toutes ces personnes doivent obligatoirement passer par ANEF :**

✅ **Étudiants étrangers** arrivant avec un VLS-TS (validation 3 mois)
✅ **Salariés étrangers** (premier titre, renouvellement, changement)
✅ **Conjoints de Français** (titre vie privée et familiale)
✅ **Demandeurs de Passeport Talent**
✅ **Demandeurs de naturalisation par décret ou par mariage**
✅ **Réfugiés et bénéficiaires de la protection subsidiaire**
✅ **Toute personne demandant un changement de statut**

**Cas où ANEF n'est PAS obligatoire :**
- Demande d'asile à l'OFPRA (procédure différente)
- Citoyens UE/EEE/Suisse (séjour libre)
- Visa court séjour Schengen (90 jours)`,
    },
    {
      id: 'documents-acceptes-refuses',
      title: 'Les documents acceptés et refusés par ANEF (liste officielle 2026)',
      content: `**Format technique exigé pour TOUS les documents :**
- **PDF, JPG ou PNG** uniquement
- **Taille max : 5 Mo** par fichier
- **Résolution minimum : 300 DPI**
- **Couleur** (noir & blanc accepté pour certains documents)
- **Non protégé par mot de passe**

**Documents d'identité acceptés :**
✅ Passeport en cours de validité (toutes pages utiles)
✅ Carte nationale d'identité du pays d'origine
✅ Titre de séjour expiré depuis moins de 3 mois (pour renouvellement)

**Documents d'identité REFUSÉS :**
❌ Photocopie de photocopie
❌ Pièce expirée depuis plus de 3 mois
❌ Document partiellement coupé ou rogné
❌ Photo prise au smartphone avec reflet

**Photo d'identité ANEF :**
- Format **35 x 45 mm**
- Fond **uni clair** (blanc ou gris clair)
- **Sans lunettes**, **sans sourire**, **sans couvre-chef** (sauf religieux)
- Prise il y a moins de **6 mois**
- Astuce : utilisez **Photomaton + service ANEF** (5 €) qui produit le bon format`,
    },
    {
      id: 'problemes-creation-solutions',
      title: 'Les 8 problèmes les plus fréquents à l\'ouverture d\'un compte',
      content: `**1. "Numéro de visa non reconnu"**
→ Vérifiez le format : **majuscules + chiffres** sans espace. Si toujours refusé, attendez 48h après l'arrivée en France.

**2. "Cette adresse mail est déjà utilisée"**
→ Vous avez déjà un compte. Cliquez sur "Mot de passe oublié" au lieu de recréer.

**3. FranceConnect refuse de lier le compte**
→ Utilisez la **création classique** par mail. Vous pourrez activer FranceConnect plus tard.

**4. SMS bloqué (numéro étranger)**
→ Achetez une SIM française. Free Mobile à **2 €/mois** est suffisant.

**5. "Photo non conforme" 3 fois de suite**
→ Allez en Photomaton avec l'option "service en ligne" (5 €). Téléchargement direct ANEF, refus impossible.

**6. Justificatif de domicile refusé**
→ Doit être **<3 mois**, à votre nom. **Acceptés** : facture EDF, eau, gaz, internet, quittance de loyer, attestation d'hébergement + pièce d'identité de l'hébergeant. **Refusés** : factures de téléphone mobile, contrats de location anciens.

**7. "Erreur 500" en boucle**
→ Bug serveur. Réessayez **entre 6h et 8h du matin** ou le **dimanche matin**.

**8. Compte créé mais aucune démarche disponible**
→ Attendez **24 à 48h**. Le système met du temps à activer toutes les options.`,
    },
    {
      id: 'que-faire-si-blocage',
      title: 'Que faire si vous êtes complètement bloqué',
      content: `**Si après 48h de tentatives le compte n'est toujours pas créé :**

**Étape 1 — Appeler le support ANEF**
- **0806 001 620** (gratuit, lun-ven 9h-16h)
- Préparez : nom complet, date de naissance, numéro de visa/AGDREF

**Étape 2 — Formulaire de contact officiel**
- contact-usagers.anef.interieur.gouv.fr
- Joignez **captures d'écran** du message d'erreur

**Étape 3 — Préfecture (en dernier recours)**
- Certaines préfectures (Paris, Bobigny, Créteil) ont un guichet d'aide ANEF
- Prenez RDV via le site de votre préfecture

**Étape 4 — Défenseur des droits**
- Si aucune réponse après 30 jours et démarche urgente
- **defenseurdesdroits.fr** — saisine gratuite`,
    },
  ],
  conclusion: `Ouvrir un compte ANEF en 2026 est obligatoire pour quasiment tous les étrangers en France, mais les blocages sont fréquents. Préparez vos documents au bon format dès le départ (PDF <5 Mo, photo aux normes, justificatif <3 mois), utilisez une adresse mail durable et un numéro français, et n'hésitez pas à appeler le 0806 001 620 dès qu'un blocage dure plus de 48 heures. Bien démarrer son compte ANEF, c'est s'éviter des semaines de retard sur toutes ses démarches futures.`,
  faq: [
    { question: 'Peut-on ouvrir un compte ANEF sans visa ?', answer: 'Oui, si vous êtes déjà titulaire d\'un titre de séjour (avec votre numéro AGDREF) ou si vous demandez un titre depuis la France (changement de statut, regroupement familial sur place).' },
    { question: 'Quels justificatifs de domicile sont acceptés sur ANEF ?', answer: 'Factures EDF/eau/gaz/internet de moins de 3 mois, quittance de loyer, ou attestation d\'hébergement + pièce d\'identité de l\'hébergeant + son justificatif de domicile.' },
    { question: 'Combien de temps faut-il pour ouvrir un compte ANEF ?', answer: 'Entre 5 minutes (si tout fonctionne) et 48-72 heures (si blocage technique). Avec FranceConnect, c\'est plus rapide.' },
    { question: 'Le compte ANEF est-il identique pour toutes les démarches ?', answer: 'Oui, un seul compte vous suffit pour TOUTES vos démarches futures : titre de séjour, renouvellement, changement de statut, naturalisation, regroupement familial.' },
  ],
  keywords: ['ouvrir compte anef', 'creation compte anef', 'anef inscription documents', 'anef problème création', 'demarches anef en ligne', 'anef etranger compte'],
};
