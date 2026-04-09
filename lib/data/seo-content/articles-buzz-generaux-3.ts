/**
 * Articles Buzz Généraux (Batch 3) - Avril 2026
 * 1. Les 7 arnaques qui ciblent les étrangers en France
 * 2. Contrôle de police : tes droits quand tu es étranger
 * 3. Louer un appartement quand on est étranger : refus illégaux
 */

import type { ArticleFullContent } from './articles-part1';

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 1 : Les 7 arnaques qui ciblent les étrangers en France
// ─────────────────────────────────────────────────────────────────────────────
export const arnaquesEtrangersFranceContent: ArticleFullContent = {
  slug: 'arnaques-etrangers-france-2026-faux-avocats-prefecture-anef',
  introduction: `Chaque année, des milliers d'étrangers en France perdent des centaines — parfois des milliers — d'euros à cause d'arnaques qui les visent spécifiquement. Faux avocats en immigration, faux sites préfecture, fausses promesses de régularisation… Les escrocs savent que vous êtes pressé, stressé par vos papiers, et parfois isolé. Ils exploitent votre méconnaissance du système administratif français pour vous soutirer de l'argent. Le pire ? La plupart des victimes n'osent pas porter plainte — par peur de se retrouver "dans le radar" de l'administration. Ce guide expose les 7 arnaques les plus courantes en 2026, comment les reconnaître en 30 secondes, et surtout quoi faire si vous êtes déjà tombé dans le piège.`,
  keywords: [
    'arnaques étrangers France',
    'faux avocat immigration France',
    'arnaque préfecture titre de séjour',
    'faux site ANEF arnaque',
    'arnaque régularisation sans papiers France',
    'escroquerie étranger France 2026',
    'fausse convocation préfecture mail',
    'arnaque logement étranger',
    'arnaque Western Union étranger',
    'faux contrat de travail régularisation',
    'signaler arnaque étranger France',
    'porter plainte arnaque immigration',
    'arnaque titre de séjour',
    'arnaque papiers France',
    'se protéger arnaques étranger',
  ],
  sections: [
    {
      id: 'arnaque-1-faux-avocats',
      title: 'Arnaque n°1 : Les faux avocats en immigration',
      content: `C'est l'arnaque la plus répandue et la plus destructrice. Des individus se présentent comme "avocats spécialisés en immigration" ou "consultants en droit des étrangers" et promettent de régulariser votre situation moyennant 1 500 à 5 000 €.

### Comment ils opèrent

- Ils vous contactent via Facebook, WhatsApp, TikTok ou des groupes communautaires
- Ils ont un site web professionnel avec de faux avis clients
- Ils promettent des résultats "garantis" (un vrai avocat ne garantit jamais un résultat)
- Ils demandent un paiement cash ou par virement avant toute démarche
- Ils disparaissent une fois l'argent encaissé, ou déposent un dossier vide à la préfecture

### Comment vérifier en 30 secondes

1. **Vérifiez sur l'annuaire du Barreau** : tout avocat inscrit est consultable sur [annuaire.cnb.avocat.fr](https://annuaire.cnb.avocat.fr). Si son nom n'apparaît pas, c'est un faux
2. **Un vrai avocat a un numéro de Toque** (ex: "Toque D1234 — Barreau de Paris")
3. **Un vrai avocat ne fait JAMAIS de démarchage** sur les réseaux sociaux
4. **Un vrai avocat émet une convention d'honoraires** signée avant tout paiement

### Ce que dit la loi

Exercer le droit sans être avocat inscrit au Barreau est un délit pénal (article 72 de la loi du 31 décembre 1971) puni de 2 ans de prison et 30 000 € d'amende.`,
    },
    {
      id: 'arnaque-2-faux-sites-prefecture',
      title: 'Arnaque n°2 : Les faux sites préfecture et ANEF',
      content: `Des sites web imitent parfaitement les sites officiels de la préfecture ou de l'ANEF (Administration Numérique des Étrangers en France) et vous facturent des "frais de dossier" inexistants.

### Comment ils opèrent

- L'URL ressemble au site officiel mais avec des variantes subtiles : "prefecture-paris.com" au lieu de "prefecture-de-police.interieur.gouv.fr"
- Ils apparaissent parfois en publicité sponsorisée sur Google (au-dessus des vrais résultats)
- Ils demandent vos données personnelles (numéro de titre, passeport, adresse) puis un paiement de 50 à 200 € pour "traitement accéléré"
- Certains volent vos données pour usurper votre identité

### Les vrais sites officiels à connaître

| Service | URL officielle | Ce qu'il faut vérifier |
|---------|---------------|----------------------|
| ANEF | administration-etrangers-en-france.interieur.gouv.fr | Toujours en .gouv.fr |
| Préfectures | www.prefectures-regions.gouv.fr | Toujours en .gouv.fr |
| Timbres fiscaux | timbres.impots.gouv.fr | Toujours en .gouv.fr |
| Service public | www.service-public.fr | Toujours en .gouv.fr |

### La règle d'or

**Aucun site officiel français ne se termine autrement que par .gouv.fr**. Si l'URL finit par .com, .fr, .org, .net — c'est un faux. Jamais un site .gouv.fr ne vous demandera un paiement par carte pour "accélérer" un dossier de titre de séjour.`,
    },
    {
      id: 'arnaque-3-fausse-convocation',
      title: 'Arnaque n°3 : Les fausses convocations par email ou SMS',
      content: `Vous recevez un email ou un SMS qui semble venir de la préfecture ou de l'OFII, vous demandant de "confirmer votre rendez-vous" ou de "mettre à jour votre dossier" en cliquant sur un lien.

### Les signaux d'alerte

- L'email vient d'une adresse Gmail, Outlook ou Yahoo (jamais d'un .gouv.fr)
- Le SMS contient un lien raccourci (bit.ly, tinyurl)
- On vous demande de payer en ligne "pour confirmer" ou "sous peine d'annulation"
- Les fautes d'orthographe (même si les escrocs s'améliorent)
- Un sentiment d'urgence extrême : "Vous avez 24h pour répondre sinon votre dossier sera supprimé"

### Ce que fait réellement la préfecture

- Les convocations officielles arrivent par **courrier postal** (lettre simple ou recommandée) ou sur votre **espace ANEF**
- La préfecture ne vous envoie **jamais de SMS** avec un lien
- La préfecture ne demande **jamais de paiement** par email
- Si vous avez un doute, appelez directement le standard de votre préfecture

### Que faire si vous avez cliqué

1. Ne rentrez aucune donnée personnelle
2. Si vous avez donné des informations, changez immédiatement vos mots de passe ANEF
3. Signalez sur **signal-spam.fr** et **internet-signalement.gouv.fr** (plateforme Pharos)
4. Prévenez votre banque si vous avez communiqué des coordonnées bancaires`,
    },
    {
      id: 'arnaque-4-faux-logement',
      title: 'Arnaque n°4 : Les faux logements et le piège du garant',
      content: `La recherche de logement est un cauchemar pour beaucoup d'étrangers en France — et les escrocs le savent très bien. Ils exploitent votre désespoir pour vous arnaquer.

### Les formes les plus courantes

- **L'appartement trop beau, trop pas cher** : photos magnifiques d'un appartement à 500 €/mois en plein Paris. Le "propriétaire" est "à l'étranger" et vous demande un virement pour "réserver" le logement
- **Le faux garant payant** : quelqu'un vous propose de "se porter garant" moyennant 500 à 2 000 €, avec de faux bulletins de salaire. Si le propriétaire vérifie, vous perdez le logement ET l'argent
- **La sous-location illégale** : on vous loue une chambre à prix fort dans un logement social — sans contrat, sans droits, et risque d'expulsion immédiate
- **Le faux bail** : on vous fait signer un "contrat de location" pour un logement qui n'appartient pas à la personne. Vous payez un dépôt de garantie à quelqu'un qui n'est pas le propriétaire

### Comment vous protéger

1. **Ne payez JAMAIS avant de visiter** — aucune exception
2. **Vérifiez l'identité du propriétaire** : demandez une pièce d'identité et un titre de propriété ou un mandat de gestion
3. **Utilisez Visale** (garantie gratuite d'Action Logement) plutôt qu'un garant payant — c'est gratuit et reconnu par tous les propriétaires
4. **Passez par des plateformes sécurisées** : agences immobilières, leboncoin avec paiement sécurisé, CROUS pour les étudiants
5. **Si c'est trop beau pour être vrai, c'est faux**

### Logements d'urgence si vous êtes en difficulté

- **115** (SAMU social) : numéro gratuit pour hébergement d'urgence 24h/24
- **ADOMA** : résidences sociales pour travailleurs étrangers
- **CADA** : centres d'accueil pour demandeurs d'asile`,
    },
    {
      id: 'arnaque-5-faux-contrat-travail',
      title: 'Arnaque n°5 : Les faux contrats de travail pour régularisation',
      content: `Cette arnaque est particulièrement dangereuse car elle peut ruiner définitivement vos chances de régularisation.

### Le schéma classique

Un "intermédiaire" vous propose un contrat de travail d'un employeur fictif ou complice pour monter un dossier de régularisation (article L435-1 du CESEDA, ex "admission exceptionnelle au séjour"). Le prix : entre 2 000 et 10 000 €.

### Pourquoi c'est un piège mortel

- La préfecture **vérifie systématiquement** la réalité de l'emploi : appel à l'employeur, visite DIRECCTE, vérification URSSAF
- Si la fraude est détectée, votre dossier est **rejeté définitivement** et vous êtes fiché pour fraude documentaire
- L'article L823-1 du CESEDA prévoit jusqu'à **5 ans de prison** et **20 000 € d'amende** pour l'usage de faux documents dans une procédure de titre de séjour
- L'intermédiaire, lui, s'en sort souvent indemne — c'est VOUS qui portez le risque

### Ce que la préfecture vérifie vraiment

- Existence de l'entreprise au registre du commerce (RCS) ou au répertoire des métiers
- Déclarations URSSAF et bulletins de salaire réels
- Cohérence entre le poste, le secteur, et votre profil
- Appel téléphonique direct à l'employeur
- Parfois, visite sur le lieu de travail

### L'alternative légale

Si vous cherchez une régularisation par le travail, adressez-vous à une **association d'aide juridique** (La Cimade, GISTI, Ligue des Droits de l'Homme) qui vous accompagnera gratuitement dans une démarche légale.`,
    },
    {
      id: 'arnaque-6-transfert-argent',
      title: 'Arnaque n°6 : Les arnaques aux transferts d\'argent',
      content: `Les transferts d'argent vers le pays d'origine sont un terrain fertile pour les escrocs, surtout dans les communautés où le hawala (transfert informel) est courant.

### Les arnaques les plus fréquentes

- **Le faux agent de transfert** : un individu dans une épicerie ou un commerce propose des transferts "moins chers" que Western Union ou MoneyGram. L'argent part mais n'arrive jamais
- **Le hawala non fiable** : le système hawala repose sur la confiance. Certains "agents" encaissent l'argent et disparaissent, surtout quand il s'agit de gros montants
- **L'arnaque par WhatsApp** : un "proche" vous contacte (numéro piraté ou voix clonée par IA) en urgence pour demander un virement immédiat
- **Les faux sites de transfert** : des sites imitent Wise, Remitly ou WorldRemit avec des taux attractifs

### Comment transférer en sécurité

1. **Utilisez uniquement des services agréés** par l'ACPR (Autorité de Contrôle Prudentiel et de Résolution) : Wise, Western Union, MoneyGram, Remitly, WorldRemit
2. **Comparez les frais** sur des comparateurs légitimes comme Monito.com
3. **Gardez TOUJOURS un reçu** de chaque transfert
4. **Ne transférez jamais via des particuliers** — même un "ami d'un ami"
5. **Méfiez-vous des taux trop beaux** : si c'est 15% moins cher que partout, c'est suspect

### Les montants à ne pas dépasser sans déclaration

- Au-delà de **10 000 €** par an en transferts, votre banque est tenue de signaler à Tracfin
- Si vous transportez **10 000 € ou plus en espèces** à la frontière, vous DEVEZ les déclarer aux douanes sous peine de **50% de saisie** + amende`,
    },
    {
      id: 'arnaque-7-promesse-regularisation',
      title: 'Arnaque n°7 : Les "promesses de régularisation rapide"',
      content: `Des individus ou des "associations" (souvent non déclarées) promettent une régularisation "garantie" en échange d'argent. C'est la plus cruelle des arnaques parce qu'elle exploite l'espoir des personnes les plus vulnérables.

### Les signaux d'alerte immédiats

- "Nous avons des contacts à la préfecture" → FAUX. Aucun agent préfectoral ne vend des faveurs
- "Régularisation garantie en 3 mois" → FAUX. Aucune procédure ne peut être garantie
- "On s'occupe de tout, vous n'avez rien à faire" → FAUX. Votre présence et vos documents sont toujours nécessaires
- Paiement uniquement en espèces, pas de facture, pas de reçu
- Pas de numéro SIRET, pas de site web officiel, pas d'adresse fixe

### Les vrais organismes gratuits qui aident

| Organisme | Ce qu'il fait | Contact |
|-----------|--------------|---------|
| La Cimade | Accompagnement juridique gratuit, permanences en préfecture | lacimade.org |
| GISTI | Conseil juridique, formations, publications sur le droit des étrangers | gisti.org |
| Ligue des Droits de l'Homme | Permanences juridiques gratuites | ldh-france.org |
| ADDE | Avocats spécialisés droit des étrangers (consultations gratuites) | adde.fr |
| Centre Primo Levi | Accompagnement demandeurs d'asile victimes de torture | primolevi.org |
| Aide juridictionnelle | Prise en charge totale des frais d'avocat si revenus modestes | service-public.fr |

### Le vrai processus de régularisation

La régularisation est une procédure **administrative et juridique**. Elle dépend de critères objectifs (durée de séjour, emploi, liens familiaux, intégration). Aucune somme d'argent ne peut accélérer ou garantir le résultat.`,
    },
    {
      id: 'que-faire-victime',
      title: 'Vous êtes victime d\'une arnaque : les 5 étapes à suivre immédiatement',
      content: `Si vous êtes déjà tombé dans l'un de ces pièges, ne restez pas silencieux. Porter plainte ne mettra **PAS** en danger votre titre de séjour. Au contraire, cela peut vous protéger.

### Étape 1 : Conservez toutes les preuves

- Captures d'écran des messages, emails, sites web
- Reçus de paiement, relevés bancaires
- Photos des documents reçus
- Numéros de téléphone, noms, adresses

### Étape 2 : Portez plainte

- En ligne sur **pre-plainte-en-ligne.gouv.fr** puis au commissariat
- Ou directement au commissariat ou à la gendarmerie
- Demandez un **interprète** si besoin (c'est votre droit et c'est gratuit)
- Vous recevrez un récépissé de plainte — conservez-le précieusement

### Étape 3 : Signalez l'arnaque

- **Pharos** (internet-signalement.gouv.fr) pour les arnaques en ligne
- **Signal Conso** (signal.conso.gouv.fr) pour les arnaques commerciales
- **DGCCRF** (economie.gouv.fr) pour les pratiques commerciales frauduleuses
- **Votre banque** : demandez un chargeback si paiement par carte

### Étape 4 : Prévenez votre communauté

Beaucoup d'arnaques fonctionnent par le bouche-à-oreille dans les communautés. Si vous avez été victime, parlez-en autour de vous. Publiez un avertissement dans les groupes Facebook/WhatsApp de votre communauté.

### Étape 5 : Consultez une association

La Cimade, le GISTI ou l'ADDE peuvent vous aider à évaluer les dégâts (surtout si l'escroc a déposé un faux dossier en votre nom à la préfecture) et à régulariser la situation.`,
    },
  ],
  conclusion: `Les arnaques ciblant les étrangers en France sont industrialisées et rapportent des millions d'euros chaque année aux escrocs. Les 7 arnaques présentées ici — faux avocats, faux sites préfecture, fausses convocations, faux logements, faux contrats de travail, arnaques aux transferts d'argent, et fausses promesses de régularisation — suivent toutes le même schéma : exploiter votre stress, votre urgence et votre isolement. La meilleure protection ? L'information. Partagez ce guide avec les personnes de votre entourage qui pourraient en avoir besoin. Et rappelez-vous : les vrais sites officiels finissent toujours par .gouv.fr, un vrai avocat figure au barreau, et aucune régularisation ne se vend.`,
  faq: [
    {
      question: 'Est-ce que je risque quelque chose si je porte plainte en tant qu\'étranger en situation irrégulière ?',
      answer: 'Non, porter plainte est un droit fondamental en France, quel que soit votre statut administratif. La police a l\'obligation de prendre votre plainte (circulaire du 5 mars 2012). Elle ne peut pas vous signaler à la préfecture pour votre situation administrative. Si un agent refuse de prendre votre plainte, insistez et demandez le responsable du commissariat, ou écrivez directement au Procureur de la République.',
    },
    {
      question: 'Comment vérifier qu\'un avocat en immigration est bien inscrit au Barreau ?',
      answer: 'Consultez l\'annuaire national des avocats sur annuaire.cnb.avocat.fr. Tapez le nom de l\'avocat et vérifiez qu\'il apparaît avec sa spécialisation et son barreau d\'inscription. Tout avocat doit avoir un numéro de Toque. Si la personne n\'apparaît pas dans cet annuaire, elle n\'est pas avocat.',
    },
    {
      question: 'J\'ai payé un faux avocat, est-ce que je peux récupérer mon argent ?',
      answer: 'Oui, potentiellement. Portez plainte pour escroquerie (article 313-1 du Code pénal). Si vous avez payé par carte bancaire, demandez un chargeback à votre banque dans les 13 mois suivant le paiement. Si vous avez payé en espèces, la récupération sera plus difficile mais la plainte peut mener à une condamnation et des dommages et intérêts.',
    },
    {
      question: 'Un site me demande de payer pour prendre un rendez-vous en préfecture, est-ce normal ?',
      answer: 'Non, c\'est une arnaque. Les rendez-vous en préfecture sont entièrement gratuits et se prennent uniquement sur le site officiel de votre préfecture (en .gouv.fr) ou via l\'ANEF (administration-etrangers-en-france.interieur.gouv.fr). Aucun site officiel ne facture la prise de rendez-vous.',
    },
    {
      question: 'Quelqu\'un m\'a proposé un faux contrat de travail pour me régulariser, que faire ?',
      answer: 'Refusez catégoriquement. L\'utilisation de faux documents est un délit pénal puni de 5 ans de prison et 20 000 € d\'amende. Si la fraude est détectée par la préfecture, cela annulera définitivement vos chances. Contactez plutôt La Cimade (lacimade.org) ou le GISTI (gisti.org) pour un accompagnement juridique gratuit vers une régularisation légale.',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 2 : Contrôle de police — tes droits quand tu es étranger
// ─────────────────────────────────────────────────────────────────────────────
export const controlePoliceEtrangerDroitsContent: ArticleFullContent = {
  slug: 'controle-police-etranger-france-droits-2026',
  introduction: `Se faire contrôler par la police quand on est étranger en France, c'est souvent un moment de stress intense. Cœur qui s'accélère, mains qui tremblent, peur de dire la mauvaise chose. Pourtant, même en situation irrégulière, vous avez des droits fondamentaux que la police DOIT respecter — et que 90% des gens ignorent. Droit de ne pas être fouillé sans motif, droit à un interprète, droit de filmer, obligation de présenter son titre ou non, contrôle au faciès interdit par la loi... Ce guide détaille vos droits concrets, les limites légales de la police, et les recours si vos droits sont violés. À lire, à sauvegarder et à partager.`,
  keywords: [
    'contrôle police étranger France droits',
    'contrôle identité étranger France',
    'droits étranger contrôle de police',
    'refus fouille police France',
    'contrôle au faciès France illégal',
    'garde à vue étranger droits',
    'rétention administrative droits',
    'porter titre de séjour obligatoire France',
    'filmer police France légal',
    'IGPN plainte police',
    'droit interprète garde à vue',
    'vérification titre séjour police',
    'rétention CRA droits',
    'OQTF contrôle police',
    'recours contrôle abusif étranger',
  ],
  sections: [
    {
      id: 'controle-identite-cadre-legal',
      title: 'Le contrôle d\'identité : ce que la police a le droit de faire (et ce qu\'elle n\'a pas le droit)',
      content: `En France, un contrôle d'identité est encadré par des règles strictes. La police ne peut pas vous arrêter "comme ça" sans raison.

### Les 3 types de contrôle légaux

1. **Contrôle judiciaire** (art. 78-2 du Code de procédure pénale) : la police a un indice qu'une infraction a été commise ou va être commise. Exemple : vous correspondez à la description d'un suspect
2. **Contrôle administratif** (art. 78-2 alinéa 7) : sur réquisition du procureur de la République, dans une zone et un créneau horaire précis. C'est le plus courant
3. **Contrôle aux frontières** (art. 78-2 alinéa 9) : dans une zone de 20 km autour d'une frontière Schengen, dans les ports, gares et aéroports internationaux

### Ce que la police N'A PAS le droit de faire

- Vous contrôler **uniquement en raison de votre apparence physique, votre couleur de peau ou votre nom** — c'est un contrôle au faciès, interdit par la loi et condamné par la Cour de cassation (2016)
- Vous fouiller sans votre consentement (sauf flagrant délit ou réquisition du procureur)
- Vous retenir plus de **4 heures** pour une simple vérification d'identité
- Vous insulter, vous frapper ou vous menacer — même si vous êtes en situation irrégulière

### Votre droit fondamental

Vous pouvez demander le **motif du contrôle**. L'agent doit pouvoir vous expliquer pourquoi il vous contrôle. Si le motif est flou ("contrôle de routine"), notez l'heure, le lieu et le matricule de l'agent (RIO — Référentiel des Identités et de l'Organisation, visible sur l'uniforme).`,
    },
    {
      id: 'titre-sejour-obligation',
      title: 'Faut-il toujours avoir son titre de séjour sur soi ?',
      content: `C'est LA question que tous les étrangers se posent. La réponse est nuancée.

### Ce que dit la loi

L'article L812-1 du CESEDA impose aux étrangers de pouvoir **justifier de la régularité de leur séjour** en cas de contrôle. Cela signifie que vous devez pouvoir présenter :

- Votre titre de séjour (carte, récépissé, VLS-TS)
- Votre passeport avec visa valide
- Votre attestation de demande d'asile

### En pratique : que se passe-t-il si vous ne l'avez pas sur vous ?

- Si vous avez un titre valide mais pas sur vous → la police peut vérifier dans le fichier AGDREF. Vous pouvez être retenu **jusqu'à 4 heures** pour vérification
- Le temps de vérification ne peut **pas dépasser 4 heures** (art. 78-3 CPP)
- Pendant cette vérification, vous avez le droit de **prévenir quelqu'un** (famille, ami, avocat)
- Vous ne pouvez PAS être placé en garde à vue juste pour absence de titre sur vous

### Notre conseil pratique

- Gardez une **photocopie ou une photo** de votre titre de séjour sur votre téléphone
- Conservez l'original dans un endroit sûr chez vous
- Si vous avez un récépissé ANEF (numérique), gardez le PDF accessible hors ligne sur votre téléphone
- En cas de contrôle, montrez la copie et indiquez que l'original est chez vous`,
    },
    {
      id: 'fouille-droits',
      title: 'Fouille corporelle et fouille du sac : vos droits',
      content: `La fouille est l'un des moments les plus intrusifs d'un contrôle. Beaucoup de personnes croient à tort qu'elles doivent accepter automatiquement.

### Les 3 types de fouille et vos droits

| Type | Qui décide | Votre droit |
|------|-----------|------------|
| Palpation de sécurité | L'agent, pour sa sécurité | Vous pouvez exiger que ce soit fait par un agent de même sexe |
| Fouille du sac/affaires | L'agent, si motif raisonnable | Vous pouvez refuser. Seul un OPJ (Officier de Police Judiciaire) peut ordonner une fouille |
| Fouille corporelle complète | Uniquement un OPJ, sur ordre | Doit se faire dans un local fermé, par une personne de même sexe |

### Ce que vous pouvez dire

- "Je refuse la fouille de mon sac" — c'est votre droit dans le cadre d'un simple contrôle d'identité
- "Je souhaite connaître votre matricule (RIO)" — c'est votre droit
- "Je souhaite que la fouille soit faite par un agent du même sexe" — c'est votre droit

### Attention

Si vous refusez une fouille et que l'agent insiste, ne résistez pas physiquement. Notez le matricule, l'heure et le lieu, et portez plainte après. La résistance physique peut être requalifiée en "outrage" ou "rébellion" (même si le contrôle est illégal).`,
    },
    {
      id: 'garde-a-vue-retention',
      title: 'Garde à vue et rétention administrative : la différence et vos droits',
      content: `Beaucoup d'étrangers confondent garde à vue et rétention administrative. Ce sont deux procédures très différentes, avec des droits différents.

### Garde à vue (GAV)

- **Pourquoi** : vous êtes soupçonné d'avoir commis un délit (vol, violence, séjour irrégulier)
- **Durée** : 24h, renouvelable une fois (48h max en général)
- **Vos droits** :
  - Droit à un **avocat** dès la première heure (gratuit si vous n'en avez pas → avocat commis d'office)
  - Droit à un **interprète** gratuit si vous ne parlez pas français
  - Droit de **prévenir un proche** par téléphone
  - Droit d'être **examiné par un médecin**
  - Droit de **garder le silence** — vous n'êtes pas obligé de répondre aux questions

### Rétention administrative (CRA)

- **Pourquoi** : vous faites l'objet d'une mesure d'éloignement (OQTF) et la préfecture vous place en Centre de Rétention Administrative en attendant l'exécution
- **Durée** : 48h initiales, prolongeables par un juge jusqu'à **90 jours maximum**
- **Vos droits** :
  - Droit de contester devant le **Juge des Libertés et de la Détention (JLD)** dans les 48h
  - Droit à un **avocat** (associations présentes sur place : La Cimade, France Terre d'Asile, Forum Réfugiés)
  - Droit à un **interprète**
  - Droit de **téléphoner** et de recevoir des visites
  - Droit de déposer une **demande d'asile** même en rétention
  - Droit de contester l'OQTF devant le tribunal administratif

### Ce qu'il faut retenir

Dans les deux cas, vous avez le droit à un avocat et à un interprète **gratuits**. Ne signez RIEN sans comprendre le document. Demandez systématiquement la traduction.`,
    },
    {
      id: 'filmer-police',
      title: 'Filmer la police : est-ce légal en France ?',
      content: `La question revient constamment, surtout depuis la polémique autour de la loi "sécurité globale" en 2021.

### La réponse est OUI

Filmer la police dans l'exercice de ses fonctions est **légal en France**. Le Conseil constitutionnel a confirmé ce droit le 20 mai 2021 en censurant l'article 24 de la loi "sécurité globale" qui tentait de l'interdire.

### Les conditions

- Vous pouvez filmer depuis l'espace public (trottoir, rue, transport)
- Vous ne devez pas **entraver** l'opération de police (rester à distance raisonnable)
- Vous pouvez publier la vidéo en ligne (sauf si c'est dans une intention de nuire personnelle, comme publier l'adresse privée d'un agent)
- L'agent ne peut **PAS** exiger que vous effaciez la vidéo
- L'agent ne peut **PAS** saisir votre téléphone pour effacer la vidéo (sauf sur décision d'un magistrat)

### Ce qu'un agent peut vous demander

- De reculer si vous gênez l'opération → c'est légitime, reculez
- De ne pas diffuser en direct si c'est une opération sensible en cours → discutable, mais préférez obtempérer et diffuser après

### En cas de saisie illégale du téléphone

Si un agent saisit votre téléphone ou vous oblige à effacer :
1. Notez son matricule RIO
2. Notez l'heure et le lieu exact
3. Portez plainte auprès de l'**IGPN** (Inspection Générale de la Police Nationale) sur igpn.interieur.gouv.fr
4. Contactez le **Défenseur des droits** sur defenseurdesdroits.fr`,
    },
    {
      id: 'recours-controle-abusif',
      title: 'Contrôle abusif : les 4 recours possibles',
      content: `Si vous estimez avoir été victime d'un contrôle abusif, discriminatoire ou violent, vous avez des recours concrets.

### Recours n°1 : Le Défenseur des droits

Le Défenseur des droits est une autorité indépendante qui peut enquêter sur les discriminations et les manquements à la déontologie policière. C'est le recours le plus accessible.
- En ligne : defenseurdesdroits.fr
- Par téléphone : 09 69 39 00 00 (gratuit)
- Par courrier : Défenseur des droits, Libre réponse 71120, 75342 Paris CEDEX 07

### Recours n°2 : Plainte à l'IGPN ou l'IGGN

- **IGPN** (pour la police nationale) : signalement en ligne sur igpn.interieur.gouv.fr
- **IGGN** (pour la gendarmerie) : par courrier à la Direction générale de la Gendarmerie nationale

### Recours n°3 : Plainte pénale

Si vous avez subi des violences, des insultes à caractère raciste, ou une fouille abusive :
- Portez plainte au commissariat ou par courrier au Procureur de la République
- Faites constater les blessures par un médecin (certificat médical)
- Conservez tous les témoignages et vidéos

### Recours n°4 : Recours en annulation

Si vous avez été placé en rétention suite à un contrôle illégal :
- Votre avocat peut demander au JLD l'annulation de la rétention pour **irrégularité de la procédure**
- Un contrôle discriminatoire rend toute la procédure qui en découle nulle
- Le tribunal administratif peut annuler l'OQTF si le contrôle initial était illégal`,
    },
  ],
  conclusion: `Que vous soyez en situation régulière ou non, vous avez des droits fondamentaux lors d'un contrôle de police en France. Le droit de connaître le motif du contrôle, le droit à un avocat et un interprète gratuits, le droit de refuser une fouille abusive, le droit de filmer, le droit de porter plainte sans risque pour votre dossier de séjour. Ces droits existent parce que la France est un État de droit — et c'est justement ce que le test civique vous demande de connaître. Sauvegardez ce guide, partagez-le, et n'oubliez jamais : la connaissance de vos droits, c'est votre meilleure protection.`,
  faq: [
    {
      question: 'La police peut-elle me demander mes papiers dans la rue sans raison ?',
      answer: 'Non, un contrôle d\'identité doit toujours être motivé : soit il existe des indices d\'infraction, soit il y a une réquisition du procureur pour une zone et un créneau précis, soit vous êtes dans une zone frontalière (20 km). Un contrôle "parce que vous avez l\'air étranger" est illégal et constitue un contrôle au faciès condamné par la justice.',
    },
    {
      question: 'Est-ce que je suis obligé de porter mon titre de séjour sur moi en permanence ?',
      answer: 'La loi (article L812-1 du CESEDA) demande de pouvoir justifier de la régularité de votre séjour. En pratique, une photocopie ou une photo sur votre téléphone suffit pour un premier contrôle. Si la police veut vérifier, elle peut vous retenir maximum 4 heures pour vérification dans le fichier AGDREF. Gardez l\'original en sécurité chez vous.',
    },
    {
      question: 'Que faire si un policier refuse de me donner son matricule RIO ?',
      answer: 'Le port et l\'affichage du numéro RIO sont obligatoires depuis 2014. Si un agent refuse de vous le communiquer, notez son nom (si visible), le lieu, l\'heure et la description physique. Signalez le manquement à l\'IGPN (igpn.interieur.gouv.fr) ou au Défenseur des droits.',
    },
    {
      question: 'Est-ce que porter plainte contre la police peut mettre en danger mon titre de séjour ?',
      answer: 'Non. Le droit de porter plainte est un droit fondamental protégé par la Constitution. La police et la préfecture sont deux administrations distinctes. Votre plainte ne sera pas transmise au service des titres de séjour. Au contraire, exercer vos droits montre votre connaissance du système juridique français.',
    },
    {
      question: 'La police peut-elle m\'obliger à effacer une vidéo de mon téléphone ?',
      answer: 'Non. Filmer la police est légal en France (confirmé par le Conseil constitutionnel le 20 mai 2021). Un agent ne peut ni exiger l\'effacement ni saisir votre téléphone sans décision d\'un magistrat. Si cela se produit, notez le matricule RIO et portez plainte à l\'IGPN.',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 3 : Louer un appartement quand on est étranger
// ─────────────────────────────────────────────────────────────────────────────
export const logementEtrangerRefusIllegauxContent: ArticleFullContent = {
  slug: 'louer-appartement-etranger-france-discrimination-refus-illegaux-2026',
  introduction: `"Ah, finalement l'appartement vient d'être pris." Cette phrase, des centaines de milliers d'étrangers en France l'entendent chaque année... souvent après avoir donné leur nom au téléphone. La discrimination au logement est le problème quotidien n°1 des étrangers installés en France — et c'est un délit pénal puni de 3 ans de prison. Refus à cause du nom, exigences abusives de CDI, récépissé refusé comme justificatif, garant demandé en plus de Visale... Ce guide expose les pratiques illégales, les astuces concrètes pour contourner les blocages, et les recours gratuits si vous êtes discriminé. Les propriétaires ne savent souvent pas qu'ils sont dans l'illégalité — et vous ne savez souvent pas que la loi vous protège.`,
  keywords: [
    'louer appartement étranger France',
    'discrimination logement étranger',
    'refus location étranger France',
    'Visale garant gratuit étranger',
    'récépissé justificatif logement',
    'discrimination nom logement France',
    'trouver logement sans CDI étranger',
    'louer sans garant étranger France',
    'Défenseur des droits logement',
    'Action Logement étranger',
    'DALO droit logement opposable',
    'titre de séjour louer appartement',
    'ADIL aide logement étranger',
    'refus location récépissé titre séjour',
    'testing discrimination logement',
  ],
  sections: [
    {
      id: 'discriminations-courantes',
      title: 'Les 5 discriminations les plus courantes (et pourquoi elles sont illégales)',
      content: `La discrimination au logement est un délit pénal prévu par les articles 225-1 et 225-2 du Code pénal, puni de **3 ans d'emprisonnement** et **45 000 € d'amende**. Voici les formes les plus fréquentes.

### 1. Le refus basé sur le nom ou l'origine

"L'appartement est déjà pris" — sauf qu'un candidat français rappelle 10 minutes après et obtient une visite. C'est la forme de discrimination la plus documentée par les études (testing SOS Racisme, étude IFOP 2023 : les candidats à consonance étrangère reçoivent **30% de réponses en moins**).

### 2. L'exigence abusive de CDI

Un propriétaire peut légitimement demander une preuve de revenus, mais **exiger un CDI est interdit** quand d'autres preuves de solvabilité existent (CDD long, bulletins de salaire, attestation employeur, revenus indépendants). La loi ALUR interdit de refuser un locataire au seul motif de son type de contrat.

### 3. Le refus du récépissé comme justificatif

Un récépissé de titre de séjour est un **document officiel** qui prouve la régularité de votre séjour. Un propriétaire ne peut pas exiger un titre de séjour "définitif". Le récépissé donne les mêmes droits qu'un titre pour louer un logement.

### 4. L'exigence de garant en plus de Visale

Si vous avez une garantie Visale (garantie de l'État via Action Logement), le propriétaire **ne peut pas** exiger un garant supplémentaire. La garantie Visale couvre les impayés et dégradations — c'est plus sûr qu'un garant physique.

### 5. La demande de documents interdits

Le décret du 5 novembre 2015 liste les documents que le propriétaire peut demander. Il est **interdit** de demander :
- Un relevé de compte bancaire (seuls les 3 derniers bulletins de salaire et le dernier avis d'imposition sont autorisés)
- Une photo d'identité
- Un extrait de casier judiciaire
- Un certificat de bonne conduite
- Une attestation de l'ancien propriétaire`,
    },
    {
      id: 'visale-action-logement',
      title: 'Visale et Action Logement : le garant gratuit que 80% des étrangers ne connaissent pas',
      content: `Visale est une **garantie locative gratuite** fournie par Action Logement (organisme d'État). C'est votre meilleure arme pour trouver un logement.

### Qu'est-ce que Visale ?

- Un **garant gratuit de l'État** qui se porte caution pour vous auprès du propriétaire
- Couvre les **impayés de loyer** jusqu'à 36 mois
- Couvre les **dégradations locatives** jusqu'à 2 mois de loyer
- **Entièrement gratuit** pour le locataire ET le propriétaire
- Reconnu par tous les propriétaires et agences

### Qui est éligible ?

| Profil | Éligible Visale ? |
|--------|------------------|
| Salarié de moins de 30 ans | Oui |
| Salarié de plus de 30 ans en mobilité professionnelle | Oui |
| Salarié en CDD, intérim, contrat aidé | Oui |
| Étudiant (avec titre de séjour ou récépissé) | Oui |
| Alternant | Oui |
| Demandeur d'emploi | Sous conditions |
| Réfugié ou bénéficiaire de la protection subsidiaire | Oui |

### Comment obtenir Visale en 5 étapes

1. Allez sur **visale.fr**
2. Créez un compte avec votre email
3. Remplissez votre profil (revenus, situation professionnelle)
4. Recevez votre **visa certifié** en 24-48h
5. Envoyez ce visa au propriétaire avec votre dossier de candidature

### L'effet magique de Visale

Quand vous présentez Visale, le propriétaire n'a plus aucune raison de vous refuser pour des raisons financières. Visale est **plus fiable qu'un garant physique** — le propriétaire est assuré de recevoir son loyer quoi qu'il arrive.`,
    },
    {
      id: 'astuces-trouver-logement',
      title: 'Les 8 astuces concrètes pour trouver un logement quand on est étranger',
      content: `Au-delà des recours juridiques, voici des stratégies pratiques et éprouvées.

### 1. Constituez un dossier béton AVANT de chercher

Préparez un dossier PDF propre contenant :
- Pièce d'identité ou titre de séjour
- 3 derniers bulletins de salaire
- Dernier avis d'imposition (ou avis de non-imposition)
- Attestation Visale
- Lettre de motivation courte et personnelle

### 2. Utilisez les plateformes avec dossier numérique

- **DossierFacile** (dossierfacile.logement.gouv.fr) : service gratuit de l'État qui certifie votre dossier. Les propriétaires font confiance à un dossier "certifié DossierFacile"
- **Flatlooker**, **Studapart** (étudiants) : plateformes qui sécurisent les deux parties

### 3. Passez par les logements sociaux

- **Demande en mairie** ou sur demande-logement-social.gouv.fr
- Délai : 6 mois à 3 ans selon la zone
- Priorité pour les réfugiés statutaires et les familles

### 4. Ciblez les résidences CROUS (étudiants)

- Demande via trouverunlogement.lescrous.fr
- Loyers entre 200 et 500 €/mois
- APL éligible

### 5. Explorez les colocations

- Plateformes : Appartager, LaCarteDesColocs, Facebook groupes
- Moins de formalisme, moins de discrimination
- Solution idéale pour les premiers mois

### 6. Contactez les ADIL

Les **ADIL** (Agences Départementales d'Information sur le Logement) offrent des **conseils gratuits** sur vos droits et vous orientent vers les dispositifs adaptés. Trouvez votre ADIL sur anil.org.

### 7. Utilisez le 1% logement (Action Logement)

Si vous êtes salarié d'une entreprise de plus de 10 personnes, vous pouvez bénéficier :
- D'un **prêt à 1%** pour le dépôt de garantie (aide MOBILI-PASS)
- D'une **avance Loca-Pass** (dépôt de garantie avancé sans intérêt)
- De Visale (vu plus haut)

### 8. Faites jouer le réseau communautaire

Les associations communautaires, les lieux de culte, les centres sociaux connaissent souvent des propriétaires ouverts et des logements disponibles. N'hésitez pas à vous y rendre.`,
    },
    {
      id: 'recepisse-droits-logement',
      title: 'Récépissé de titre de séjour : vos droits pour le logement',
      content: `Le récépissé est le document le plus souvent refusé à tort par les propriétaires et agences. Voici vos droits.

### Ce que dit la loi

Le récépissé de demande ou de renouvellement de titre de séjour est un **document officiel** délivré par la préfecture (art. R431-1 du CESEDA). Il prouve la régularité de votre séjour pendant la durée de sa validité.

### Vos droits avec un récépissé

- **Louer un logement** : le propriétaire ne peut pas exiger un titre "définitif"
- **Ouvrir un compte bancaire** : les banques sont tenues de vous accepter (droit au compte, article L312-1 du Code monétaire)
- **Travailler** : si le récépissé porte la mention "autorise son titulaire à travailler"
- **Recevoir des aides** : CAF, APL, RSA (selon le type de récépissé)

### Que faire si un propriétaire refuse votre récépissé

1. Demandez le refus **par écrit** (email ou SMS) — c'est votre preuve
2. Rappelez que le récépissé est un document officiel de la préfecture
3. Si le refus persiste, saisissez le **Défenseur des droits** (defenseurdesdroits.fr)
4. Contactez l'ADIL de votre département pour un conseil juridique gratuit
5. Vous pouvez aussi saisir la **commission départementale de conciliation** (CDC)

### Le cas du récépissé ANEF (numérique)

Depuis la dématérialisation, beaucoup de récépissés sont au format numérique (PDF téléchargeable depuis l'ANEF). Ce document a la **même valeur juridique** qu'un récépissé papier avec tampon. Imprimez-le ou présentez-le en PDF — il est tout aussi valide.`,
    },
    {
      id: 'dalo-logement-opposable',
      title: 'DALO : le droit au logement opposable (votre dernier recours puissant)',
      content: `Si après des mois de recherche vous ne trouvez toujours pas de logement, la France offre un droit unique en Europe : le **DALO** (Droit Au Logement Opposable).

### Qu'est-ce que le DALO ?

Le DALO (loi du 5 mars 2007) oblige l'État à vous proposer un logement adapté si vous remplissez certains critères. Ce n'est pas une aide sociale — c'est un **droit juridiquement opposable**, c'est-à-dire que vous pouvez aller au tribunal pour l'obtenir.

### Qui peut faire une demande DALO ?

- Vous êtes sans logement (à la rue, en hébergement d'urgence)
- Vous êtes menacé d'expulsion sans solution de relogement
- Vous êtes hébergé chez un tiers depuis plus de 6 mois
- Votre logement est insalubre ou dangereux
- Vous avez des enfants et votre logement est surpeuplé
- Votre demande de logement social est sans réponse depuis un délai anormalement long

### Conditions pour les étrangers

- Vous devez être en **séjour régulier** en France (titre de séjour, récépissé, attestation d'asile)
- Les réfugiés et les bénéficiaires de la protection subsidiaire sont éligibles
- La demande se fait auprès de la **commission de médiation** de votre département

### La procédure

1. Déposez un dossier DALO à la commission de médiation (formulaire CERFA 15036)
2. La commission a **3 mois** (logement) ou **6 semaines** (hébergement) pour répondre
3. Si votre dossier est reconnu prioritaire, le préfet a **6 mois** pour vous proposer un logement
4. Si rien n'est proposé → saisissez le **tribunal administratif** qui condamnera l'État à vous loger
5. En attendant, l'État doit vous verser une **astreinte** (indemnité financière) pour chaque mois de retard`,
    },
    {
      id: 'testing-signaler-discrimination',
      title: 'Comment prouver et signaler la discrimination au logement',
      content: `Si vous pensez être victime de discrimination, vous pouvez agir concrètement — et la loi est de votre côté.

### Le testing : prouver la discrimination

Le **testing** consiste à envoyer deux candidatures identiques (mêmes revenus, même profil) avec un nom "français" et un nom "étranger". Si seul le candidat au nom français obtient une réponse positive, c'est une preuve de discrimination.

### Comment faire un testing simple

1. Envoyez votre candidature réelle à une annonce
2. Demandez à un ami français (ou avec un nom à consonance française) d'envoyer une candidature similaire au même propriétaire
3. Comparez les réponses
4. Conservez tous les échanges (emails, SMS, messages plateformes)

### Le testing est admis comme preuve par la justice

Les tribunaux français acceptent le testing comme preuve de discrimination (Cour de cassation, arrêt du 11 décembre 2000). Des associations comme **SOS Racisme** organisent régulièrement des opérations de testing à grande échelle.

### Où signaler

| Organisme | Type d'action | Contact |
|-----------|--------------|---------|
| Défenseur des droits | Enquête, médiation, saisine justice | defenseurdesdroits.fr |
| SOS Racisme | Testing, accompagnement juridique | sos-racisme.org |
| LICRA | Aide juridique anti-discrimination | licra.org |
| Procureur de la République | Plainte pénale | Tribunal de votre ville |
| ADIL | Conseil juridique logement | anil.org |

### Les sanctions pour le propriétaire

- **3 ans de prison** et **45 000 € d'amende** pour discrimination (art. 225-2 du Code pénal)
- Dommages et intérêts au profit de la victime
- Publication de la condamnation (naming and shaming)`,
    },
  ],
  conclusion: `Trouver un logement quand on est étranger en France reste un parcours du combattant — mais la loi est clairement de votre côté. La discrimination est un délit punissable de 3 ans de prison. Le récépissé vaut un titre de séjour pour louer. Visale offre un garant gratuit et infaillible. DossierFacile certifie votre dossier gratuitement. Le DALO peut obliger l'État à vous loger. Toutes ces armes existent et sont gratuites — le problème est qu'elles sont trop peu connues. Partagez ce guide avec toute personne qui galère à trouver un logement. Un étranger informé est un étranger protégé.`,
  faq: [
    {
      question: 'Un propriétaire peut-il refuser de me louer parce que j\'ai un récépissé et pas un titre de séjour définitif ?',
      answer: 'Non, c\'est illégal. Le récépissé est un document officiel qui prouve la régularité de votre séjour. Un propriétaire ne peut pas exiger un titre "définitif". Si vous essuyez un refus, demandez-le par écrit et saisissez le Défenseur des droits (defenseurdesdroits.fr) ou l\'ADIL de votre département.',
    },
    {
      question: 'Qu\'est-ce que Visale et comment l\'obtenir gratuitement ?',
      answer: 'Visale est une garantie locative gratuite de l\'État (via Action Logement). Elle se porte caution pour vous auprès du propriétaire, couvrant jusqu\'à 36 mois d\'impayés. Inscrivez-vous sur visale.fr, remplissez votre profil et recevez votre visa certifié en 24-48h. C\'est gratuit, sans engagement et accepté par tous les propriétaires.',
    },
    {
      question: 'Comment prouver qu\'un propriétaire m\'a discriminé ?',
      answer: 'Le testing est la méthode la plus efficace : envoyez votre candidature et demandez à un ami avec un profil similaire mais un nom français d\'envoyer la même candidature. Si les réponses diffèrent, c\'est une preuve. Conservez tous les échanges écrits (emails, SMS). Le testing est admis comme preuve par les tribunaux français.',
    },
    {
      question: 'Quels documents un propriétaire n\'a pas le droit de me demander ?',
      answer: 'Le propriétaire n\'a pas le droit de demander : un relevé de compte bancaire, une photo d\'identité, un extrait de casier judiciaire, une attestation de l\'employeur sur votre statut (CDI/CDD), un certificat de bonne conduite. La liste des documents autorisés est fixée par le décret du 5 novembre 2015.',
    },
    {
      question: 'Je suis à la rue et je suis étranger en situation régulière, quels sont mes recours ?',
      answer: 'En urgence : appelez le 115 (SAMU social, gratuit 24h/24). Pour une solution durable : déposez un dossier DALO auprès de la commission de médiation de votre département (formulaire CERFA 15036). Si vous êtes reconnu prioritaire, le préfet a 6 mois pour vous proposer un logement. Contactez aussi l\'ADIL de votre département pour un accompagnement gratuit.',
    },
  ],
};
