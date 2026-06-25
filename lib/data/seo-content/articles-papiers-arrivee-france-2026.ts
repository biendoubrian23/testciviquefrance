/**
 * Article — Tous les papiers à obtenir en arrivant en France (et où / comment les demander) 2026
 * Cluster « Venir & s'installer en France » — angle DOCUMENT-CENTRÉ (≠ premiers-pas chronologique)
 * Rédigé le 25/06/2026
 */

import type { ArticleFullContent } from './articles-part1';
import type { Article } from '../articles';

export const papiersArriveeFranceContent: ArticleFullContent = {
  slug: 'papiers-documents-obtenir-arrivee-france-2026-ou-comment-demander',

  introduction: `Vous venez d'arriver en France ? Très vite, vous allez découvrir une règle locale : **ici, tout fonctionne avec des papiers**. Pour louer, travailler, vous soigner, ouvrir un compte ou toucher une aide, on vous réclamera systématiquement un justificatif. Et le piège classique, c'est que ces documents se débloquent **en chaîne** : sans l'un, impossible d'obtenir l'autre.

Cet article est une **checklist des papiers indispensables** à obtenir dès l'arrivée, classés non pas par date mais **par document** : à quoi il sert, **où** et **comment** le demander, et dans quel ordre les enchaîner pour éviter les blocages. De la validation du visa au numéro de Sécurité sociale, en passant par le justificatif de domicile et le RIB, voici votre feuille de route documentaire pour 2026.`,

  sections: [
    {
      id: 'ordre-logique',
      title: 'L\'ordre logique : pourquoi les papiers se débloquent en chaîne',
      content: `Le plus grand piège de l'arrivée en France, c'est l'**effet domino** : chaque document en exige un autre. Comprendre la chaîne vous fait gagner des semaines.

**La chaîne typique :**
1. **Validation du VLS-TS** → vous êtes en séjour régulier.
2. **Carte SIM + adresse** (même provisoire) → vous devenez joignable et « localisable ».
3. **Justificatif de domicile** → la clé qui ouvre presque tout.
4. **Compte bancaire + RIB** → indispensable pour le loyer, le salaire, les aides.
5. **Numéro de Sécurité sociale → carte Vitale** → pour vous soigner et être remboursé.
6. **CAF (APL), France Travail, école des enfants** → selon votre situation.

> 💡 Le **justificatif de domicile** et le **RIB** sont les deux pièces qu'on vous redemandera le plus. Obtenez-les en priorité : ils déverrouillent la plupart des autres démarches.`,
    },
    {
      id: 'titre-sejour-vls',
      title: '1. Valider son visa (VLS-TS) — le document fondateur',
      content: `**À quoi ça sert :** prouver que vous êtes en **séjour régulier**. Sans validation, votre visa perd sa valeur de titre de séjour et vous basculez en situation irrégulière.

**Où / comment :** en ligne sur la plateforme **ANEF (administration-etrangers.interieur.gouv.fr)**, dans un **délai de 3 mois** après l'arrivée.

**Ce qu'il faut :**
- Votre visa VLS-TS
- Votre adresse en France
- Le paiement de la **taxe OFII** (par exemple **60 €** pour les étudiants ; **225 €** pour la plupart des autres motifs — salarié, conjoint de Français, visiteur, regroupement familial)

**Résultat :** une **confirmation de validation** qui vaut titre de séjour. Conservez-la précieusement (PDF + impression).

> ⚠️ C'est la démarche n°1, à ne jamais repousser. Tout le reste en découle.`,
    },
    {
      id: 'domicile-banque',
      title: '2. Justificatif de domicile et compte bancaire (RIB)',
      content: `**Le justificatif de domicile**
**À quoi ça sert :** prouver où vous habitez. Réclamé pour le compte bancaire, la Sécu, la CAF, l'inscription des enfants…
**Comment l'obtenir :** facture d'électricité/internet à votre nom, **quittance de loyer**, **attestation d'hébergement** (si vous logez chez quelqu'un, accompagnée de sa pièce d'identité et d'un justificatif à son nom), ou attestation de la résidence/CROUS.

**Le compte bancaire et le RIB**
**À quoi ça sert :** le **RIB** (relevé d'identité bancaire) est exigé pour percevoir un salaire, une bourse, les aides CAF, et payer le loyer.
**Comment l'ouvrir :** dans une banque traditionnelle ou une néo-banque, généralement avec : pièce d'identité/passeport, titre de séjour ou visa validé, et justificatif de domicile.
**En cas de refus :** vous avez un **droit au compte**. Si plusieurs banques refusent, saisissez la **Banque de France**, qui désignera d'office un établissement tenu de vous ouvrir un compte de base gratuit.

> 💡 Pas encore de justificatif de domicile ? Certaines néo-banques ouvrent un compte avec une simple adresse déclarée — utile pour démarrer, en attendant un compte classique.`,
    },
    {
      id: 'securite-sociale-vitale',
      title: '3. Numéro de Sécurité sociale et carte Vitale',
      content: `**À quoi ça sert :** être remboursé de vos frais de santé. Le **numéro de Sécurité sociale** est aussi demandé par de nombreuses administrations.

**Comment l'obtenir :**
- **Étudiants** : affiliation **gratuite** à la Sécurité sociale étudiante, via le portail dédié, dès votre arrivée et votre inscription.
- **Salariés** : votre employeur déclenche votre affiliation ; vous obtenez un numéro provisoire puis définitif.
- **Autres situations** : demande d'affiliation auprès de la **CPAM** (Assurance maladie) sur **ameli.fr**, avec pièce d'identité, titre de séjour, acte de naissance traduit et RIB.

**La carte Vitale :** une fois votre numéro de Sécu définitif attribué, vous demandez votre **carte Vitale** (photo + justificatif). Comptez quelques semaines. En attendant, une **attestation de droits** téléchargeable sur ameli.fr fait foi.

**À ne pas oublier :** une **complémentaire santé (mutuelle)** pour la part non remboursée par la Sécu. Sous conditions de revenus, la **Complémentaire santé solidaire (CSS)** peut être gratuite.`,
    },
    {
      id: 'caf-france-travail-ecole',
      title: '4. CAF, France Travail et école des enfants',
      content: `**La CAF (allocations familiales / logement)**
**À quoi ça sert :** toucher l'**APL** (aide au logement) et d'autres aides.
**Comment :** créez un compte sur **caf.fr**, demandez un **numéro d'allocataire**, et déposez votre demande d'APL avec RIB, bail et justificatifs. L'APL peut représenter **100 à 250 €/mois** selon le logement et les ressources.

**France Travail (ex-Pôle emploi)**
**À quoi ça sert :** si vous cherchez un emploi et que votre titre vous y autorise.
**Comment :** inscription en ligne sur **francetravail.fr**, avec titre de séjour autorisant le travail, RIB et CV.

**L'école des enfants**
**À quoi ça sert :** l'instruction est **obligatoire de 3 à 16 ans**, quelle que soit la situation administrative des parents.
**Comment :** inscription en **mairie** (école maternelle/élémentaire) ou auprès de l'établissement / du rectorat (collège, lycée), avec justificatif de domicile, livret de famille ou acte de naissance, et carnet de vaccinations.

**Le Contrat d'Intégration Républicaine (CIR)**
La plupart des primo-arrivants signent un **CIR** à l'**OFII** : formation civique, et formation linguistique si besoin. C'est une obligation pour beaucoup de titres de séjour.`,
    },
    {
      id: 'documents-utiles-complementaires',
      title: '5. Les papiers complémentaires utiles à prévoir',
      content: `Une fois le socle en place, quelques documents vous simplifieront la vie au quotidien :

- **Carte étudiante** (étudiants) : accès au restaurant universitaire, réductions, preuve de statut.
- **Abonnement de transport** : souvent à tarif réduit pour les étudiants et jeunes.
- **Assurance habitation** : **obligatoire** pour tout locataire — à souscrire dès la signature du bail.
- **Échange du permis de conduire** : selon votre pays d'origine et les accords de réciprocité, via l'**ANTS**. Attention aux délais : la demande doit souvent être faite dans **l'année** suivant l'établissement de votre titre de séjour.
- **Reconnaissance de diplôme (ENIC-NARIC)** : pour faire reconnaître l'équivalence d'un diplôme étranger, utile pour un emploi ou une poursuite d'études.

> 📋 Gardez un **classeur (physique + numérique)** avec une copie de chaque document : passeport, visa validé, acte de naissance traduit, justificatif de domicile, RIB, attestation de Sécu. Vous le ressortirez à chaque démarche.`,
    },
  ],

  conclusion: `S'installer en France, c'est d'abord constituer **un socle de papiers** dans le bon ordre. Validez votre VLS-TS dans les 3 mois — c'est la pièce fondatrice — puis sécurisez le duo qui débloque tout le reste : **justificatif de domicile** et **compte bancaire / RIB**. Enchaînez avec le **numéro de Sécurité sociale** et la **carte Vitale** pour vous soigner, puis la **CAF**, **France Travail** et l'**école** selon votre situation. Gardez en tête l'effet domino : chaque document en appelle un autre, alors avancez méthodiquement et conservez une copie de tout. Avec ce socle, vous passez du statut de « nouvel arrivant » à celui de résident pleinement intégré dans la vie administrative française — et vous serez prêt, le moment venu, pour les démarches de titre pluriannuel, voire de naturalisation.`,

  faq: [
    {
      question: 'Quel est le tout premier papier à régler en arrivant en France ?',
      answer: 'La validation de votre visa VLS-TS, en ligne sur la plateforme ANEF, dans les 3 mois suivant votre arrivée. C\'est ce qui vous place en séjour régulier et conditionne toutes les autres démarches. Elle implique le paiement de la taxe OFII (60 € pour les étudiants, 225 € pour la plupart des autres motifs).',
    },
    {
      question: 'Quels documents sont les plus souvent demandés en France ?',
      answer: 'Le justificatif de domicile et le RIB (relevé d\'identité bancaire) sont les deux pièces réclamées en permanence. Viennent ensuite la pièce d\'identité/titre de séjour, l\'acte de naissance (traduit) et l\'attestation de droits à l\'Assurance maladie. Obtenez le justificatif de domicile et le compte bancaire en priorité : ils déverrouillent presque tout le reste.',
    },
    {
      question: 'Comment obtenir un numéro de Sécurité sociale et une carte Vitale ?',
      answer: 'Les étudiants s\'affilient gratuitement à la Sécurité sociale étudiante ; les salariés sont affiliés via leur employeur ; les autres situations passent par la CPAM sur ameli.fr (avec pièce d\'identité, titre de séjour, acte de naissance traduit et RIB). Une fois le numéro définitif attribué, vous demandez votre carte Vitale. En attendant, l\'attestation de droits téléchargeable sur ameli.fr fait foi.',
    },
    {
      question: 'Une banque peut-elle refuser de m\'ouvrir un compte ?',
      answer: 'Une banque peut refuser, mais vous bénéficiez d\'un droit au compte. Si plusieurs banques refusent, saisissez la Banque de France : elle désignera d\'office un établissement tenu de vous ouvrir un compte de base gratuit. Certaines néo-banques permettent aussi d\'ouvrir un compte rapidement, parfois sans justificatif de domicile classique.',
    },
    {
      question: 'Mes enfants peuvent-ils être scolarisés même sans titre de séjour définitif ?',
      answer: 'Oui. L\'instruction est obligatoire de 3 à 16 ans pour tous les enfants présents en France, quelle que soit la situation administrative des parents. L\'inscription se fait en mairie pour la maternelle et l\'élémentaire, et auprès de l\'établissement ou du rectorat pour le collège et le lycée, avec un justificatif de domicile et le carnet de vaccinations.',
    },
  ],

  keywords: [
    'papiers à obtenir en arrivant en france',
    'documents arrivée france étranger',
    'démarches administratives nouvel arrivant france',
    'numéro sécurité sociale france étranger',
    'carte vitale étranger france',
    'justificatif de domicile france',
    'ouvrir compte bancaire étranger france',
    'droit au compte banque de france',
    'valider VLS-TS anef',
    'CAF APL étranger 2026',
    'inscrire enfant école france étranger',
    'contrat intégration républicaine CIR',
    'premiers papiers france 2026',
    'taxe OFII validation visa',
    's\'installer en france démarches papiers',
  ],

  sources: [
    {
      title: 'ANEF — Administration numérique pour les étrangers en France',
      url: 'https://administration-etrangers-en-france.interieur.gouv.fr/',
      type: 'official',
      description: 'Plateforme officielle pour valider son VLS-TS et gérer ses démarches de titre de séjour en ligne.',
    },
    {
      title: 'Ameli.fr — S\'affilier à l\'Assurance maladie en arrivant en France',
      url: 'https://www.ameli.fr/assure/droits-demarches/situations-particulieres/personnes-nees-etranger',
      type: 'official',
      description: 'Démarche officielle d\'affiliation, obtention du numéro de Sécurité sociale et de la carte Vitale.',
    },
    {
      title: 'Service-Public.fr — Droit au compte bancaire',
      url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F1741',
      type: 'official',
      description: 'Procédure officielle du droit au compte via la Banque de France en cas de refus d\'ouverture par les banques.',
    },
    {
      title: 'Service-Public.fr — Inscription à l\'école d\'un enfant',
      url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F1864',
      type: 'official',
      description: 'Règles d\'inscription scolaire et obligation d\'instruction de 3 à 16 ans, quelle que soit la situation des parents.',
    },
    {
      title: 'OFII — Le Contrat d\'Intégration Républicaine (CIR)',
      url: 'https://www.ofii.fr/',
      type: 'official',
      description: 'Présentation officielle du parcours d\'intégration et du CIR pour les primo-arrivants.',
    },
  ],
};

// =====================================================================
// Métadonnées Article
// =====================================================================
export const papiersArriveeFranceMetadata: Article = {
  id: 'venir-france-03',
  slug: 'papiers-documents-obtenir-arrivee-france-2026-ou-comment-demander',
  title: 'Tous les papiers à obtenir en arrivant en France 2026 : où et comment les demander',
  excerpt: 'La checklist des papiers indispensables quand on vient d\'arriver en France : validation du VLS-TS, justificatif de domicile, compte bancaire et RIB, numéro de Sécurité sociale et carte Vitale, CAF, école des enfants. À quoi sert chaque document, où et comment l\'obtenir.',
  content: '',
  category: 'Conseils pratiques',
  categorySlug: 'conseils',
  author: 'Équipe Le Test Civique',
  date: '25/06/2026',
  readTime: 15,
  views: 0,
  image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
  featured: false,
};
