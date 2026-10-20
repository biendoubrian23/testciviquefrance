import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-batch-mai-2026-4.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/renouvellement-carte-resident-10-ans-2026-conditions-documents-anef`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "renouvellement-carte-resident-10-ans-2026-conditions-documents-anef",
  titre: "Renouvellement carte de résident 10 ans 2026 : démarches ANEF, conditions et timeline complète",
  titreSeo: "Renouvellement carte de résident 10 ans 2026 : démarches ANEF, conditions et timeline complète",
  resume: "Votre carte de résident 10 ans expire ? Renouvellement automatique sous conditions en 2026 : 2 mois avant échéance via ANEF, dossier réduit (par rapport à la 1re demande), récépissé immédiat. Documents, motifs de refus rares et procédure pas-à-pas.",
  chapo: "Votre **carte de résident de 10 ans** approche de sa date d'expiration ? Bonne nouvelle : contrairement à la **première délivrance** (qui est le parcours le plus difficile du droit des étrangers), le **renouvellement** est en 2026 une procédure **largement simplifiée et de plein droit**, c'est-à-dire **automatique sauf motif grave**. Près de **350 000 étrangers** renouvellent chaque année leur carte de résident en France selon les chiffres du ministère de l'Intérieur. Depuis 2022, toute la démarche se fait en ligne sur **ANEF** (Administration Numérique des Étrangers en France) : pas de rendez-vous préfecture, pas de dossier papier, **récépissé délivré immédiatement**, et un coût stable de **75 €**. Ce guide 2026 détaille en 6 étapes : le principe du renouvellement de plein droit, le bon timing (2 à 6 mois avant expiration), la procédure ANEF pas-à-pas, les documents nécessaires (drastiquement réduits), les rares motifs de refus, et vos droits pendant l'attente du nouveau titre.",
  publieLe: "2026-05-10",
  modifieLe: "2026-05-10",
  minutes: 15,
  theme: "renouvellement carte résident 10 ans 2026",
  motsCles: [
    "renouvellement carte résident 10 ans 2026",
    "carte résident expirée que faire",
    "ANEF renouvellement carte résident",
    "carte résident plein droit",
    "récépissé carte résident",
    "documents renouvellement carte résident",
    "tarif renouvellement carte résident 75 euros",
    "refus renouvellement carte résident",
    "CESEDA L426 carte résident",
    "voyage carte résident expirée",
    "récépissé travail droits",
    "délai renouvellement carte résident",
    "carte résident menace ordre public",
    "longue absence carte résident",
    "naturalisation après carte résident",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
  },
  blocs: [
    {
      type: "h2",
      texte: "Le principe : renouvellement de plein droit, sauf motif grave",
      id: "principe-plein-droit",
    },
    {
      type: "p",
      texte: "Contrairement à la **première carte de résident** dont l'attribution dépend du pouvoir d'appréciation du préfet (article L.426-1 et suivants du CESEDA), le **renouvellement** est juridiquement **un droit acquis**, sauf cas exceptionnels.",
    },
    { type: "p", texte: "**Base légale 2026**" },
    {
      type: "p",
      texte: "L'article **L.433-4 du CESEDA** (Code de l'entrée et du séjour des étrangers et du droit d'asile) prévoit explicitement : *\"La carte de résident est renouvelée de plein droit, sauf en cas de menace pour l'ordre public ou de fraude établie.\"*",
    },
    { type: "p", texte: "**Concrètement**, cela signifie :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Vous n'avez pas à reprouver** que vous avez des ressources suffisantes (sauf cas particulier).",
        "**Vous n'avez pas à reprouver** votre niveau de français.",
        "**Vous n'avez pas à passer** le **test civique** (qui n'est pas exigé pour la carte de résident, contrairement à la naturalisation).",
        "**Vous n'avez pas à justifier** d'une intégration républicaine renouvelée.",
      ],
    },
    { type: "p", texte: "**Le préfet ne peut refuser que dans 3 cas** :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Menace caractérisée pour l'ordre public** (terrorisme, criminalité grave, fichage S documenté).",
        "**Fraude** dans l'obtention de la précédente carte (mariage blanc, faux documents).",
        "**Rupture du lien avec la France** : absence prolongée de plus de 3 ans consécutifs hors de France (article L.426-22 CESEDA), sauf justification.",
      ],
    },
    {
      type: "p",
      texte: "Statistiquement, **moins de 2% des renouvellements** sont refusés en 2026 selon les données de la Direction générale des étrangers en France (DGEF). C'est l'une des procédures les plus sûres du droit des étrangers.",
    },
    { type: "p", texte: "**Différence majeure avec la première délivrance**" },
    {
      type: "tableau",
      entetes: ["Critère", "1re délivrance", "Renouvellement"],
      lignes: [
        ["Examen au fond", "Approfondi", "Limité"],
        ["Niveau A2 français", "Exigé", "Non re-exigé"],
        ["Ressources", "Vérifiées", "Non re-vérifiées (sauf famille)"],
        ["Engagement républicain", "Vérifié", "Présumé"],
        ["Taux d'acceptation", "~70%", "~98%"],
      ],
    },
    {
      type: "p",
      texte: "Pour bien comprendre les conditions de la première délivrance, consultez notre guide : [carte de résident 10 ans en France](/articles/carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture).",
    },
    { type: "h2", texte: "Quand déposer : timing optimal et limites", id: "quand-deposer-timing" },
    {
      type: "p",
      texte: "Le timing est crucial : déposer trop tard expose à une **rupture de droits** (récépissé refusé, séjour irrégulier théorique). Déposer trop tôt entraîne un **rejet pour irrecevabilité**.",
    },
    { type: "p", texte: "**Le calendrier idéal 2026**" },
    {
      type: "p",
      texte: "La législation autorise le dépôt **dans les 6 mois précédant l'expiration** de la carte. Le ministère de l'Intérieur recommande **2 mois avant** au minimum.",
    },
    {
      type: "tableau",
      entetes: ["Délai avant expiration", "Statut juridique"],
      lignes: [
        ["Plus de 6 mois", "Trop tôt → rejet probable"],
        ["4 à 6 mois", "Possible mais pas idéal"],
        ["**2 à 4 mois**", "**Période optimale**"],
        ["1 mois", "Risque de rupture de droits"],
        ["Moins de 15 jours", "Procédure d'urgence"],
        ["Après expiration", "Séjour irrégulier théorique, mais régularisable sous conditions"],
      ],
    },
    { type: "p", texte: "**Pourquoi 2 à 4 mois est optimal ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le délai d'instruction préfectoral 2026 est de **6 à 14 semaines** selon le département.",
        "Vous obtenez votre **récépissé immédiatement** lors du dépôt sur ANEF (preuve numérique).",
        "Vous avez le temps de réagir si un complément est demandé.",
        "Vous évitez les périodes saturées (rentrée scolaire, été).",
      ],
    },
    { type: "p", texte: "**Délais constatés par département en 2026**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Île-de-France** : 10 à 14 semaines",
        "**PACA, Auvergne-Rhône-Alpes** : 8 à 12 semaines",
        "**Régions rurales** : 6 à 10 semaines",
        "**Outre-mer** : 12 à 18 semaines",
      ],
    },
    { type: "p", texte: "**Que faire si la carte expire avant la nouvelle ?**" },
    {
      type: "p",
      texte: "Le **récépissé** numérique sur ANEF prolonge automatiquement vos droits **jusqu'à 6 mois renouvelables**. Vous restez en séjour régulier, vous pouvez **travailler** et **voyager** dans Schengen avec ce récépissé + passeport (mais retour pays d'origine plus délicat, voir section dédiée).",
    },
    {
      type: "h2",
      texte: "Procédure ANEF étape par étape (compte, formulaire, paiement 75 €)",
      id: "procedure-anef-etapes",
    },
    {
      type: "p",
      texte: "Depuis 2022, **toutes les démarches** de renouvellement passent par ANEF (administration-etrangers-en-france.interieur.gouv.fr). Plus aucun rendez-vous préfecture pour cette procédure.",
    },
    { type: "p", texte: "**Étape 1 : créer ou retrouver son compte ANEF**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Allez sur administration-etrangers-en-france.interieur.gouv.fr.",
        "Cliquez sur **\"Créer un compte\"** ou **\"Me connecter\"** si vous en avez déjà un.",
        "Renseignez : email valide, mot de passe sécurisé, nom, prénom, date de naissance, **numéro de votre carte de séjour actuelle**.",
        "Vérifiez votre email (lien d'activation valable 48 heures).",
      ],
    },
    { type: "p", texte: "**Étape 2 : choisir la démarche**" },
    {
      type: "p",
      texte: "Sur le tableau de bord → **\"Renouveler mon titre de séjour\"** → sélectionnez le motif **\"Carte de résident, article L.426-X\"** (X selon votre cas : conjoint de Français L.426-5, parent d'enfant français L.426-6, etc.).",
    },
    { type: "p", texte: "**Étape 3 : remplir le formulaire en ligne**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Confirmation des informations personnelles (état civil, adresse).",
        "Mise à jour des informations familiales (mariage, divorce, enfants nés depuis).",
        "Mise à jour des informations professionnelles (employeur actuel, situation).",
        "Évolution de votre situation depuis la dernière carte.",
      ],
    },
    { type: "p", texte: "**Étape 4 : téléverser les pièces justificatives**" },
    {
      type: "p",
      texte: "Format : PDF, JPG, PNG. Taille max : **3 Mo par fichier**, **20 Mo au total**.",
    },
    { type: "p", texte: "**Étape 5 : payer la taxe de renouvellement**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Tarif 2026 : 75 €** (timbre fiscal numérique acheté directement sur ANEF ou sur timbres.impots.gouv.fr).",
        "Paiement par carte bancaire en ligne.",
        "Justificatif téléchargeable immédiatement.",
      ],
    },
    { type: "p", texte: "**À noter** : si vous demandez en parallèle un duplicata, ajout 25 €." },
    { type: "p", texte: "**Étape 6 : recevoir le récépissé**" },
    {
      type: "p",
      texte: "Dès la validation du dossier (généralement **immédiate** ou sous 48 heures), un **récépissé numérique** est généré dans votre espace ANEF. Téléchargez-le, imprimez-le si besoin. **Validité 6 mois renouvelables**.",
    },
    { type: "p", texte: "**Étape 7 : suivi et notification**" },
    { type: "p", texte: "Vous recevez par email :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Confirmation du dépôt",
        "Demandes éventuelles de pièces complémentaires",
        "Notification de la décision",
        "Convocation pour la **remise physique** de la nouvelle carte (en préfecture ou sous-préfecture, **30 minutes maximum**).",
      ],
    },
    { type: "h2", texte: "Documents nécessaires : un dossier réduit", id: "documents-necessaires" },
    {
      type: "p",
      texte: "Le grand avantage du renouvellement par rapport à la première demande : **moins de pièces** sont exigées car votre situation est déjà connue de l'administration.",
    },
    { type: "p", texte: "**Pièces obligatoires (toutes situations)**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Passeport** en cours de validité (toutes pages utiles + page d'identité).",
        "**Carte de résident actuelle** (recto/verso scannée).",
        "**Justificatif de domicile** récent (moins de 6 mois) : facture EDF, quittance de loyer, attestation d'hébergement + pièce d'identité de l'hébergeant.",
        "**3 photos d'identité numériques** au format ANEF (code 22 caractères depuis cabine ou photographe agréé).",
        "**Timbre fiscal numérique** de **75 €**.",
        "**Acte de naissance** de moins de 3 mois (avec traduction certifiée si étranger).",
      ],
    },
    { type: "p", texte: "**Pièces selon situation**" },
    { type: "p", texte: "**Si vous avez la carte au titre du conjoint de Français (L.426-5)** :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Acte de mariage français de moins de 3 mois",
        "Justificatif de **communauté de vie effective** (factures communes, déclaration d'impôts commune, quittances).",
      ],
    },
    { type: "p", texte: "**Si vous avez la carte au titre de parent d'enfant français (L.426-6)** :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Acte de naissance de l'enfant",
        "Justificatif de **contribution effective** à l'entretien et à l'éducation : versements bancaires, factures, attestation école.",
      ],
    },
    { type: "p", texte: "**Si vous avez la carte au titre du regroupement familial (L.434-X)** :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Justificatifs de communauté de vie avec le regroupant.",
        "Si décès ou divorce : pièces relatives à votre situation actuelle.",
      ],
    },
    {
      type: "p",
      texte: "**Si vous avez la carte au titre de la résidence de longue durée UE (L.426-17)** :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Justificatifs de **non-rupture du lien avec la France** : impôts, sécurité sociale, présence physique.",
      ],
    },
    {
      type: "p",
      texte: "**Pièces NON exigées en renouvellement (différence clé avec la 1re demande)** :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Test du **niveau A2 français** (non re-vérifié)",
        "Test civique (non requis pour la carte de résident)",
        "Justificatifs de **5 ans de séjour régulier** (déjà acquis)",
        "Casier judiciaire récent (sauf demande spécifique)",
        "Bulletins de salaire et avis d'imposition détaillés (sauf cas particulier)",
      ],
    },
    {
      type: "h2",
      texte: "Les rares motifs de refus (menace, fraude, longue absence)",
      id: "motifs-refus-rares",
    },
    {
      type: "p",
      texte: "Moins de 2% des renouvellements sont refusés. Voici les **3 motifs légaux exclusifs** qui permettent au préfet de refuser et leur encadrement strict.",
    },
    { type: "p", texte: "**Motif n°1 : menace pour l'ordre public**" },
    {
      type: "p",
      texte: "Article **L.432-1 CESEDA**. Le préfet doit prouver une menace **caractérisée et actuelle**, pas une simple suspicion.",
    },
    { type: "p", texte: "Cas typiques :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Condamnation pénale grave (terrorisme, trafic, violences aggravées)",
        "Fichage S avec éléments tangibles",
        "Activités prosélytes incompatibles avec les valeurs républicaines",
        "Récidive d'infractions graves",
      ],
    },
    {
      type: "p",
      texte: "Une **infraction mineure** (excès de vitesse, contravention) **ne peut pas** justifier un refus. Le Conseil d'État sanctionne régulièrement les préfets qui invoquent l'ordre public sans preuves solides.",
    },
    { type: "p", texte: "**Motif n°2 : fraude établie**" },
    { type: "p", texte: "Article **L.412-7 CESEDA**. La fraude doit être :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Documentée (preuves matérielles)",
        "Significative (pas une simple omission)",
        "Imputable au requérant (pas à un tiers)",
      ],
    },
    {
      type: "p",
      texte: "Cas typiques : mariage blanc révélé, faux acte de naissance, fausse identité, faux contrat de travail. La **prescription** est de **3 ans** pour les fraudes constatables (article 7-1 du Code civil par analogie), mais la fraude à la nationalité est imprescriptible.",
    },
    { type: "p", texte: "**Motif n°3 : rupture du lien avec la France (absence prolongée)**" },
    {
      type: "p",
      texte: "Article **L.426-22 CESEDA**. Si vous avez résidé **plus de 3 ans consécutifs hors de France** (sans présence d'au moins quelques jours par an), le préfet peut considérer que vous avez **perdu la résidence habituelle** en France.",
    },
    { type: "p", texte: "**Exceptions importantes** :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Mission professionnelle pour entreprise française : durée non décompté",
        "Études de longue durée à l'étranger reconnues",
        "Soins médicaux nécessaires hors France",
        "Force majeure documentée (conflits, pandémie, etc.)",
      ],
    },
    {
      type: "p",
      texte: "**Comment éviter ce risque ?** Conservez **toutes les preuves** de présence en France : factures, billets d'avion aller-retour, déclarations d'impôts, bulletins de salaire, scolarité des enfants.",
    },
    { type: "p", texte: "**Recours en cas de refus**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Recours gracieux** auprès du préfet : 2 mois.",
        "**Recours hiérarchique** auprès du ministre de l'Intérieur : 2 mois.",
        "**Recours contentieux** au tribunal administratif territorialement compétent : 2 mois.",
      ],
    },
    {
      type: "p",
      texte: "Une **OQTF** (Obligation de quitter le territoire) accompagne parfois le refus → délais de recours raccourcis à **48 heures, 7 ou 15 jours** selon le cas. Avocat indispensable.",
    },
    {
      type: "h2",
      texte: "Récépissé : vos droits pendant l'attente du nouveau titre",
      id: "recepisse-droits-attente",
    },
    {
      type: "p",
      texte: "Le récépissé numérique délivré sur ANEF dès le dépôt est un **véritable titre de séjour temporaire** qui maintient l'intégralité de vos droits.",
    },
    { type: "p", texte: "**Validité 2026**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**6 mois renouvelables** automatiquement.",
        "En 2026, le ministère a réduit les délais : la plupart des renouvellements aboutissent en moins de **4 mois**, donc un seul récépissé suffit généralement.",
      ],
    },
    { type: "p", texte: "**Droit au travail**" },
    {
      type: "p",
      texte: "Le récépissé de renouvellement de carte de résident **autorise pleinement le travail** salarié et indépendant, sans aucune restriction. Article **R.431-15 CESEDA**. Votre employeur peut continuer à vous employer normalement. Si recrutement pendant cette période, présenter le récépissé suffit.",
    },
    { type: "p", texte: "**Voyage dans l'espace Schengen**" },
    {
      type: "p",
      texte: "Avec le récépissé de carte de résident, vous pouvez **circuler librement** dans les 27 pays de l'espace Schengen pour des séjours de **moins de 90 jours** sur 180 jours, à condition de présenter :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le récépissé numérique (impression conseillée)",
        "Votre passeport en cours de validité",
        "Votre ancienne carte de résident (même expirée, à titre justificatif)",
      ],
    },
    { type: "p", texte: "**Voyage hors Schengen et retour en France : ATTENTION**" },
    {
      type: "p",
      texte: "Le récépissé **ne garantit PAS** systématiquement le **retour en France** depuis un pays tiers. Les compagnies aériennes peuvent **refuser l'embarquement** par méconnaissance du récépissé numérique. Pour sécuriser un voyage hors Schengen :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Demandez un visa de retour (DCEM)** auprès de votre préfecture **avant le départ** (gratuit, valable 3 mois).",
        "**Imprimez** le récépissé en plusieurs exemplaires.",
        "**Vérifiez** auprès du consulat de France de votre pays de destination si nécessaire.",
        "**Évitez** les voyages longs (plus de 30 jours) pendant la procédure.",
      ],
    },
    { type: "p", texte: "**Retour pays d'origine**" },
    {
      type: "p",
      texte: "Mêmes règles. **Particulièrement risqué** si votre pays a des relations administratives complexes avec la France. En cas de doute, **reportez le voyage** après réception de la nouvelle carte.",
    },
    { type: "p", texte: "**Droits sociaux et bancaires**" },
    { type: "p", texte: "Le récépissé maintient :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Couverture sécurité sociale (Ameli)",
        "CAF, allocations familiales",
        "Compte bancaire (à présenter lors du contrôle annuel KYC)",
        "Permis de conduire français",
        "Mutuelle, assurance santé",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le renouvellement de la carte de résident 10 ans est en 2026 l'une des démarches **les plus accessibles** du droit des étrangers en France : entièrement dématérialisé sur ANEF, **récépissé immédiat**, dossier réduit, **75 € seulement**, et un taux d'acceptation supérieur à **98%**. Il vous suffit de respecter le timing (2 à 4 mois avant expiration), de fournir les documents demandés, et d'éviter les rares motifs de refus (menace ordre public, fraude, longue absence). Une fois votre nouvelle carte en main pour 10 ans, **l'étape logique suivante** est souvent la **naturalisation française** : avec une carte de résident solide, vous pouvez désormais postuler à la nationalité française si vous remplissez les conditions (5 ans de résidence, B1 français, intégration). Et le passage obligé de cette dernière étape, c'est le **test civique de naturalisation** : 40 questions sur les valeurs, les institutions, l'histoire de France. Préparez-le sereinement, gratuitement, avec des QCM officiels et l'attestation finale directement sur [testciviquefrance.fr](/signup) : la passerelle naturelle entre votre carte de résident et votre nationalité française.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien coûte le renouvellement de la carte de résident en 2026 ?",
      reponse: "75 € de timbre fiscal numérique payé directement sur ANEF ou sur timbres.impots.gouv.fr. Aucun autre frais sauf duplicata éventuel (25 €). Pas de frais de dossier supplémentaires.",
    },
    {
      question: "Puis-je renouveler ma carte de résident si elle est déjà expirée depuis 1 mois ?",
      reponse: "Oui, mais c'est plus risqué : votre séjour est théoriquement irrégulier. Déposez immédiatement votre demande sur ANEF en expliquant le retard. Dans la majorité des cas, le récépissé sera délivré et la situation régularisée. Au-delà de 6 mois post-expiration, contactez un avocat spécialisé.",
    },
    {
      question: "Mon récépissé expire avant que je reçoive ma nouvelle carte. Que faire ?",
      reponse: "Le récépissé est renouvelable automatiquement sur ANEF. Connectez-vous, demandez le renouvellement (généralement validé en 48 heures). Si la procédure prend plus de 8 mois, contactez votre préfecture par mail ou via le formulaire ANEF \"Signaler un retard\".",
    },
    {
      question: "Mon mari/épouse français(e) est décédé(e) ou nous avons divorcé. Cela impacte-t-il le renouvellement ?",
      reponse: "Pas en principe, car la carte de résident est un titre de longue durée détaché de la situation matrimoniale. Toutefois, si vous l'avez obtenue récemment au titre du mariage (moins de 5 ans), informez l'administration et joignez les justificatifs (acte de décès, jugement de divorce). Le renouvellement reste de plein droit.",
    },
    {
      question: "Après le renouvellement de ma carte de résident, puis-je demander la naturalisation immédiatement ?",
      reponse: "Oui si vous remplissez les conditions générales : 5 ans de résidence régulière (la carte de résident en compte), niveau B1 de français certifié, intégration républicaine, ressources stables, casier vierge. Le test civique (40 questions, 32/40 minimum) est obligatoire et constitue souvent la dernière étape avant le dépôt.",
    },
  ],
};

export default article;
