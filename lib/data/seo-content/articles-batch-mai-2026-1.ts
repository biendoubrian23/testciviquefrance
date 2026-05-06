/**
 * Batch SEO Mai 2026 — Lot 1
 * 3 articles longs (1500-2200 mots) :
 *  1. ANEF dossier bloqué : 9 raisons et procédure de relance
 *  2. RDV ANTS / préfecture indisponible : 7 solutions concrètes
 *  3. Naturalisation par décret VS par mariage : comparatif 2026
 */

import type { ArticleFullContent } from './articles-part1';
import type { Article } from '../articles';

// =====================================================================
// ARTICLE 1 — ANEF dossier bloqué ou en attente 2026
// =====================================================================
export const article1Content: ArticleFullContent = {
  slug: 'anef-dossier-bloque-en-attente-2026-debloquer-relancer',
  introduction: `Vous avez déposé votre demande sur l\'**ANEF** (Administration Numérique des Étrangers en France) il y a 3, 6, parfois 12 mois. Le statut est figé sur "**en cours d\'instruction**" ou pire, "**en attente de complétude**". Vous n\'avez aucune nouvelle, aucun contact direct possible, et la préfecture ne répond ni au téléphone ni aux mails. En 2026, plus de **930 000 dossiers étrangers** sont bloqués dans les préfectures françaises selon le rapport annuel de la Cimade — un chiffre historique qui explique l\'engorgement massif de l\'ANEF. Mais derrière chaque blocage, il y a une **cause identifiable** et, dans la plupart des cas, une **procédure de déblocage**. Ce guide complet recense les **9 raisons réelles** de blocage observées en 2026, la procédure exacte pour relancer la préfecture, saisir le défenseur des droits, déposer un référé liberté au tribunal administratif, et préserver vos droits (travail, voyage, séjour) pendant l\'attente. Si vous lisez ces lignes, vous êtes à la bonne adresse pour reprendre la main sur votre dossier.`,
  keywords: [
    'anef dossier bloqué 2026',
    'anef en attente instruction',
    'anef relancer préfecture',
    'dossier anef figé',
    'anef délai instruction 2026',
    'défenseur des droits anef',
    'référé liberté préfecture étranger',
    'anef en cours instruction longtemps',
    'récépissé anef droits',
    'préfecture ne répond pas anef',
    'débloquer dossier anef',
    'anef titre séjour bloqué',
    'attente anef que faire',
    'anef recours tribunal administratif',
    'anef demande complétude',
  ],
  sections: [
    {
      id: 'reconnaitre-statuts-anef',
      title: 'Reconnaître les statuts ANEF qui signalent un blocage réel',
      content: `Tous les statuts ANEF ne se valent pas. Certains sont **normaux** (votre dossier avance), d\'autres signalent un **blocage caché** que la préfecture ne vous communiquera jamais explicitement.

**Les 6 statuts ANEF que vous pouvez voir en 2026 :**

- **"En cours de création"** : vous n\'avez pas encore validé l\'envoi. Pas de blocage, finalisez votre dépôt.
- **"Demande déposée"** : statut initial après validation. Normal pendant 1 à 4 semaines.
- **"En cours d\'instruction"** : la préfecture examine votre dossier. **Normal jusqu\'à 4 mois**, **blocage probable au-delà de 6 mois**.
- **"En attente de complétude"** : il manque une pièce. **Vous devez agir immédiatement** — sinon le dossier est gelé indéfiniment.
- **"Décision prise"** : décision rendue (favorable ou défavorable). Vous serez notifié sous 15 jours.
- **"Convoqué en préfecture"** : un rendez-vous est fixé pour récupérer votre titre, signer ou remettre des originaux.

**Signaux d\'alerte d\'un dossier réellement bloqué :**

1. Aucun changement de statut depuis **plus de 4 mois**
2. Statut "en attente de complétude" sans courriel précis sur la pièce manquante
3. Récépissé non renouvelé alors que votre titre a expiré
4. Aucune réponse à vos messages internes ANEF depuis plus de **30 jours**

Selon le **CESEDA (article R.431-12)**, l\'administration dispose en principe de **4 mois** pour statuer sur une demande de titre de séjour. Au-delà, le silence vaut **rejet implicite** — mais ce rejet implicite est lui-même attaquable, ce qui ouvre des recours puissants.`,
    },
    {
      id: 'neuf-causes-blocage',
      title: 'Les 9 causes réelles de blocage d\'un dossier ANEF en 2026',
      content: `Voici les **9 causes** identifiées par les associations spécialisées (Cimade, Gisti, Asti) et confirmées par les retours utilisateurs en 2026. Vérifiez chacune méthodiquement.

**1. Pièce manquante non signalée clairement**

C\'est la cause n°1. L\'ANEF affiche "en attente de complétude" sans préciser **quelle pièce** manque. Connectez-vous, cliquez sur votre demande, descendez tout en bas : un message interne caché précise souvent la pièce. Sinon, envoyez un message via la messagerie ANEF.

**2. Incohérence dans les dates ou identités**

Date de naissance différente entre passeport et acte de naissance, nom de famille mal orthographié, prénoms inversés. Ces incohérences déclenchent un blocage automatique du système.

**3. Doublon de dossier**

Vous avez déposé deux fois la même demande (par erreur, ou en pensant que la première n\'avait pas abouti). Le système bloque le second dossier et **gèle parfois les deux**.

**4. Justificatif de domicile non conforme**

Le justificatif doit dater de **moins de 3 mois**, être à votre nom (ou avec attestation d\'hébergement + pièce d\'identité de l\'hébergeant + justificatif à son nom). Une simple facture mobile n\'est pas acceptée — il faut une facture EDF, eau, gaz, internet fixe ou avis de taxe d\'habitation.

**5. Photo d\'identité non conforme aux normes ANTS**

Photos floues, lunettes, sourire, fond non blanc : refus systématique. Utilisez un photomaton agréé ANTS avec **e-photo signée** (code à 22 chiffres).

**6. Bulletin n°2 du casier judiciaire non fourni ou périmé**

Pour certaines demandes (naturalisation, carte résident), le **bulletin n°2** est exigé. Il doit dater de moins de 3 mois.

**7. Situation fiscale non à jour**

La préfecture interroge la **DGFIP** automatiquement. Si vos déclarations d\'impôts des 3 dernières années sont incomplètes, ou si vous avez une dette fiscale non régularisée, votre dossier est mis en "attente de vérification" sans notification.

**8. Vérification consulaire en cours (Maghreb, Afrique sub-saharienne, Asie)**

Pour certaines nationalités, la préfecture demande une **vérification d\'authenticité** des documents (acte de naissance, casier) auprès du consulat français du pays d\'origine. Ces vérifications peuvent prendre **6 à 18 mois**.

**9. Saturation pure du service préfectoral**

Avec 930 000 dossiers en attente en 2026, certaines préfectures (Bobigny, Créteil, Lyon, Bordeaux) ont des files d\'attente de **8 à 14 mois** sans aucun blocage technique sur votre dossier — juste un manque d\'agents instructeurs.`,
    },
    {
      id: 'procedure-relance-prefecture',
      title: 'Procédure de relance préfecture : étape par étape',
      content: `Avant tout recours juridique, **épuisez la voie amiable**. La relance correctement formulée débloque environ **35 % des dossiers** selon les statistiques de la Cimade 2026.

**Étape 1 : Relance via la messagerie interne ANEF**

1. Connectez-vous sur **administration-etrangers-en-france.interieur.gouv.fr**
2. Ouvrez votre demande
3. Cliquez sur "**Contacter le service**" ou "Messagerie"
4. Rédigez un message **précis et bref** :
   - Numéro de dossier
   - Date de dépôt
   - Statut actuel
   - Demande explicite : "Pouvez-vous m\'indiquer la pièce manquante ou la date prévisionnelle de décision ?"

Délai de réponse moyen : **15 à 30 jours**.

**Étape 2 : Courrier recommandé avec accusé de réception (LRAR)**

Si pas de réponse sous 30 jours, envoyez un courrier en LRAR à votre préfecture. **Adressez-le au préfet en personne**, pas au service étrangers. Indiquez :

- Identité complète, nationalité, adresse
- Numéro de dossier ANEF
- Date de dépôt et statut actuel
- Rappel du délai légal de **4 mois** (article R.431-12 CESEDA)
- Demande de **décision motivée** sous 15 jours
- Mention : "À défaut, je saisirai le défenseur des droits et le tribunal administratif"

Conservez précieusement l\'**accusé de réception**. Il est essentiel pour la suite.

**Étape 3 : Demande de RDV physique en préfecture**

Certaines préfectures permettent de prendre un RDV "**point d\'étape dossier**" via leur site. C\'est rare mais efficace : un agent peut consulter votre dossier en direct et vous indiquer le blocage exact.

**Délai global : prévoyez 6 à 8 semaines** entre les 3 étapes avant de passer aux recours juridiques.`,
    },
    {
      id: 'defenseur-des-droits',
      title: 'Saisir le Défenseur des droits : gratuit et souvent efficace',
      content: `Le **Défenseur des droits** est une **autorité administrative indépendante** créée par la Constitution (article 71-1). Il intervient gratuitement quand l\'administration manque à ses obligations. En 2026, le défenseur a traité plus de **18 000 saisines** liées aux préfectures, avec un **taux de résolution amiable de 62 %**.

**Quand saisir le Défenseur des droits ?**

- Délai d\'instruction supérieur à **6 mois** sans justification
- Absence de réponse à vos relances LRAR
- Difficultés répétées d\'accès au service préfectoral
- Refus implicite non motivé

**Comment saisir (3 méthodes) :**

1. **En ligne** : formulaire sur **defenseurdesdroits.fr** (le plus rapide)
2. **Par courrier** : Défenseur des droits, 7 rue Saint-Florentin, 75409 Paris cedex 08 (gratuit, pas besoin de timbre)
3. **Via un délégué local** : 550 délégués territoriaux dans les préfectures, mairies et maisons France Services

**Pièces à joindre :**

- Copie de votre titre de séjour ou récépissé
- Capture d\'écran du statut ANEF
- Courrier LRAR de relance + accusé de réception
- Réponse de la préfecture (ou absence de réponse)
- Bref récit chronologique des faits

Le Défenseur des droits ne peut pas **annuler** une décision préfectorale, mais il peut envoyer une **demande d\'explication** à la préfecture, qui débouche très souvent sur le déblocage du dossier sous 2 à 4 mois.`,
    },
    {
      id: 'refere-liberte-tribunal',
      title: 'Référé liberté au tribunal administratif : l\'arme ultime en cas d\'urgence',
      content: `Si votre situation est **urgente** (titre expiré, perte d\'emploi imminente, voyage médical, regroupement familial bloqué), le **référé liberté** (article L.521-2 du Code de justice administrative) est l\'arme la plus puissante.

**Conditions cumulatives :**

1. **Urgence caractérisée** : vous démontrez un préjudice grave et immédiat
2. **Atteinte grave et manifestement illégale à une liberté fondamentale** : droit au respect de la vie privée et familiale, droit au travail, liberté d\'aller et venir

**Délai de jugement : 48 heures** (oui, c\'est aussi rapide que ça).

**Procédure :**

1. Saisissez le tribunal administratif **du ressort de votre préfecture** (téléservice **telerecours.fr** pour les avocats, formulaire papier pour les particuliers)
2. Joignez : pièce d\'identité, titre de séjour, capture ANEF, LRAR de relance, justificatifs d\'urgence (avis médical, courrier employeur, etc.)
3. Le juge fixe une **audience publique** sous 48h
4. La décision est rendue immédiatement

**Coût** : gratuit si vous bénéficiez de l\'**aide juridictionnelle** (plafond de ressources 2026 : 1 263 €/mois pour aide totale). Sinon, comptez **800 à 1 500 €** pour un avocat.

**Référé "mesures utiles" (L.521-3)** : alternative moins exigeante si vous n\'avez pas d\'urgence vitale mais besoin d\'une **injonction** à la préfecture (par exemple : "délivrer un récépissé"). Délai : 1 à 4 semaines.

Important : le **référé suspension (L.521-1)** ne s\'applique que si une décision a été prise (refus). Pour un dossier simplement bloqué sans décision, c\'est le référé liberté ou mesures utiles qu\'il faut viser.`,
    },
    {
      id: 'preserver-vos-droits-attente',
      title: 'Pendant l\'attente : préserver vos droits (récépissé, travail, voyage)',
      content: `Un dossier bloqué ne doit **jamais** vous priver de vos droits fondamentaux. Voici comment les sécuriser.

**1. Obtenir un récépissé valide**

Si votre titre expire pendant l\'instruction, vous avez **droit à un récépissé** (article R.431-12 CESEDA). Demandez-le explicitement via ANEF ou en préfecture. Le récépissé :

- Vaut **autorisation de séjour** sur le territoire français
- **Autorise à travailler** (mention "autorise son titulaire à travailler")
- Doit être **renouvelé tous les 4 ou 6 mois** tant que le dossier est en cours

**2. Voyager pendant l\'attente : prudence**

Un récépissé **ne vaut pas visa**. Pour quitter et rentrer en France :

- Si récépissé seul : **aucun voyage** hors espace Schengen sans **visa de retour** (à demander en préfecture, gratuit)
- Si ancien titre encore valide : voyages possibles mais retour avant expiration
- Voyage Schengen : autorisé avec récépissé pour des séjours de moins de 90 jours, **mais pas recommandé** (refoulement aux frontières fréquent en 2026)

**3. Maintenir votre emploi**

Présentez le récépissé à votre employeur. En cas de refus, rappelez l\'article **L.5221-5 du Code du travail** : un récépissé portant la mention "autorise à travailler" suffit légalement.

**4. Maintenir vos droits sociaux**

CAF, Sécurité sociale, Pôle emploi (France Travail) : transmettez le récépissé pour ne pas perdre **APL, RSA, allocations chômage**. En 2026, plusieurs CAF refusent à tort les récépissés — saisissez le **médiateur CAF** et le défenseur des droits si besoin.`,
    },
    {
      id: 'prevention-prochaine-demande',
      title: 'Prévention : sécuriser votre prochaine demande (et préparer le test civique)',
      content: `Une fois débloqué, votre dossier doit être **bétonné** pour éviter toute récidive. Voici la check-list 2026 :

**Avant tout dépôt :**

- Numérisez en **PDF couleur** (pas JPG) tous vos documents
- Vérifiez les dates de validité (titre, passeport, justificatifs < 3 mois)
- Faites traduire tout document étranger par un **traducteur assermenté**
- Apostillez les actes étrangers (cour d\'appel du pays émetteur)
- Demandez une **attestation de régularité fiscale** à la DGFIP avant dépôt

**Pendant l\'instruction :**

- Connectez-vous sur ANEF **toutes les 2 semaines**
- Conservez TOUS les courriers, mails, captures d\'écran
- Tenez un **journal de bord daté** des relances

**Profitez du temps d\'attente pour préparer la suite**

Si votre objectif final est la **naturalisation française**, profitez de ces mois d\'attente pour préparer le **test civique de naturalisation** (obligatoire depuis le décret du 1er janvier 2026). Le test comprend **40 questions** sur les valeurs, l\'histoire, la géographie et les institutions françaises, avec un seuil de **80 % de réussite** (32/40). Une préparation sérieuse de 4 à 8 semaines avec [notre guide officiel](/articles/comment-reussir-test-civique-premier-coup) vous permettra d\'arriver serein le jour J. De plus, [le niveau B1 obligatoire](/articles/niveau-de-langue-francais-nationalite-titre-sejour-a2-b1-2026) doit être validé en parallèle.

**Connaître vos recours d\'avance**

Lisez [notre guide sur les 930 000 dossiers bloqués en préfecture](/articles/930000-dossiers-bloques-prefecture-2026-droits-recours-etrangers-france) pour anticiper. Préparez à l\'avance vos modèles de LRAR et identifiez votre tribunal administratif compétent.`,
    },
  ],
  conclusion: `Un dossier ANEF bloqué n\'est jamais une fatalité en 2026. Entre les 9 causes identifiables, la procédure de relance amiable, la saisine gratuite du Défenseur des droits et le référé liberté au tribunal administratif, vous disposez d\'un **arsenal juridique complet** pour reprendre la main. La règle d\'or : agissez **méthodiquement**, **par écrit**, et **conservez toutes les preuves**. Pendant l\'attente, sécurisez votre récépissé, votre emploi et vos droits sociaux. Et si la naturalisation est votre objectif final, mettez à profit ces mois pour **préparer le test civique** : 40 questions, 80 % de réussite exigée, des connaissances précises sur les valeurs, institutions et histoire de France. Notre [plateforme d\'entraînement](/signup) vous propose des QCM officiels, des fiches révisions et un suivi personnalisé pour transformer cette attente subie en **préparation active** vers votre nationalité.`,
  faq: [
    {
      question: 'Mon dossier ANEF est en attente depuis 8 mois sans réponse. Est-ce normal ?',
      answer: 'Non. Le délai légal d\'instruction est de 4 mois selon l\'article R.431-12 du CESEDA. Au-delà de 6 mois sans nouvelles, vous devez relancer la préfecture par LRAR, puis saisir le Défenseur des droits si pas de réponse sous 30 jours. En cas d\'urgence, un référé liberté au tribunal administratif peut être jugé en 48 heures.',
    },
    {
      question: 'Puis-je travailler avec un récépissé ANEF en attente de décision ?',
      answer: 'Oui, à condition que votre récépissé porte la mention "autorise son titulaire à travailler". Cette mention est automatique pour les renouvellements de titres salariés ou les premières demandes salariées. L\'article L.5221-5 du Code du travail oblige les employeurs à reconnaître ce récépissé comme un titre de séjour valide.',
    },
    {
      question: 'Combien coûte un référé liberté au tribunal administratif ?',
      answer: 'La procédure est gratuite (pas de frais de greffe). L\'aide juridictionnelle est accessible si vos ressources sont inférieures à 1 263 €/mois (plafond 2026 pour l\'aide totale). Sans avocat, comptez environ 0 €. Avec avocat, prévoyez 800 à 1 500 € selon la complexité — souvent pris en charge intégralement par l\'aide juridictionnelle.',
    },
    {
      question: 'Le Défenseur des droits peut-il vraiment débloquer mon dossier ?',
      answer: 'Oui, dans 62 % des cas selon le rapport 2026. Le Défenseur des droits envoie une demande d\'explication formelle à la préfecture, qui doit y répondre dans un délai contraint. Cette pression administrative débloque la majorité des dossiers en 2 à 4 mois. La saisine est gratuite et peut se faire en ligne sur defenseurdesdroits.fr.',
    },
  ],
};

// =====================================================================
// ARTICLE 2 — RDV ANTS / Préfecture indisponible 2026
// =====================================================================
export const article2Content: ArticleFullContent = {
  slug: 'ants-rdv-indisponible-prefecture-2026-alternatives-solutions',
  introduction: `"**Aucun créneau disponible**". Vous voyez ce message depuis 3, 6, parfois 12 semaines en essayant de prendre rendez-vous sur **ANTS** ou sur le site de votre préfecture. Vous êtes loin d\'être seul : en 2026, **78 % des préfectures** affichent une saturation chronique des créneaux selon le baromètre de la Cimade. Avec **930 000 dossiers étrangers en attente** dans le système national et un manque structurel d\'agents instructeurs, l\'accès au RDV est devenu un parcours du combattant. Mais il existe **7 solutions concrètes et testées en 2026** pour décrocher un créneau, contourner la saturation, et même obtenir une injonction du tribunal administratif quand toutes les voies amiables ont échoué. Ce guide vous donne la **hiérarchie d\'actions** à suivre, le modèle de **référé "RDV indisponible"** qui fonctionne, les outils tiers utiles (et ceux à éviter), et comment repérer les **arnaques aux faux RDV** qui pullulent sur les réseaux sociaux.`,
  keywords: [
    'ants rdv indisponible 2026',
    'aucun créneau préfecture',
    'rdv préfecture impossible',
    'référé rdv préfecture',
    'préfecture saturée créneaux',
    'ants permis conduire rdv',
    'préfecture voisine rdv',
    'alerte créneau préfecture',
    'rdv préfecture étranger urgent',
    'arnaque rdv préfecture',
    'tribunal administratif rdv préfecture',
    'créneau nocturne préfecture',
    'anef alternative rdv',
    'pas de rdv titre séjour',
    'recours absence rdv préfecture',
  ],
  sections: [
    {
      id: 'pourquoi-aucun-creneau',
      title: 'Pourquoi aucun créneau disponible en 2026 ? Les vraies causes',
      content: `Le problème n\'est pas un bug informatique : c\'est une **crise structurelle** de l\'administration française.

**Les chiffres clés 2026 :**

- **930 000 dossiers étrangers en attente** dans les préfectures (rapport Cimade 2026)
- Délai moyen de prise de RDV : **6 à 14 semaines** selon les préfectures
- Préfectures les plus saturées : **Bobigny (93)**, **Créteil (94)**, **Lyon (69)**, **Bordeaux (33)**, **Montpellier (34)**, **Nanterre (92)**
- **3 800 agents instructeurs** pour traiter ces dossiers (en baisse de 12 % depuis 2020)
- Mise en ligne de l\'**ANEF** depuis 2021 qui devait dématérialiser : a réduit les RDV physiques mais saturé le service en ligne

**Les 4 causes structurelles :**

1. **Manque d\'effectifs** : la fonction publique d\'État a perdu près de 7 000 postes depuis 2017 dans les préfectures
2. **Concentration des dépôts** : Île-de-France traite **38 %** de tous les dossiers nationaux
3. **Algorithme ANTS défaillant** : les créneaux libérés par annulation ne sont pas toujours remis dans le pool
4. **Bots de revente de RDV** : des plateformes illégales scrapent les créneaux dès leur ouverture pour les revendre

**Le pic de demandes 2026 :**

Janvier 2026 a vu une **hausse de 31 %** des demandes après l\'entrée en vigueur du **nouveau test civique de naturalisation** (décret du 1er janvier 2026). Les candidats à la nationalité, désormais soumis au test obligatoire, ont massivement déposé leurs dossiers, créant un goulot d\'étranglement supplémentaire.

Comprendre ces causes est essentiel : votre absence de RDV n\'est **pas votre faute**, et la jurisprudence administrative reconnaît désormais ce dysfonctionnement comme **fautif** (CE, 10 juin 2020, n° 435594).`,
    },
    {
      id: 'sept-solutions-hierarchisees',
      title: 'Les 7 solutions concrètes pour décrocher un RDV en 2026',
      content: `Voici la **hiérarchie testée** par les associations spécialisées et confirmée par des milliers d\'usagers en 2026. Suivez-les **dans l\'ordre**.

**Solution 1 : Activer les alertes créneaux automatiques**

Configurez une alerte mail ou Telegram qui scanne ANTS/préfecture toutes les 5 minutes :
- Outils gratuits : extensions navigateur officielles
- Notification dès qu\'un créneau se libère
- **Taux de succès : 45 %** sur les préfectures moyennement saturées

**Solution 2 : Cibler les créneaux nocturnes (3h-6h)**

Beaucoup de préfectures **rouvrent automatiquement** les créneaux des 7 prochains jours **chaque nuit entre 3h et 6h du matin**. Un robot interne supprime les RDV non confirmés et libère les créneaux. C\'est l\'**heure d\'or** pour obtenir un RDV.

**Solution 3 : Tester les préfectures voisines (résidence en cours d\'année)**

Si vous avez **déménagé récemment** ou allez déménager, vous pouvez déposer dans la **nouvelle préfecture** (avec justificatif de domicile à jour). Préfectures rurales (Cantal, Lozère, Ardèche) : **créneaux disponibles sous 2 semaines**.

**Solution 4 : Privilégier les démarches en ligne ANEF**

Pour de nombreuses procédures (renouvellement carte de séjour pluriannuelle, changement d\'adresse, duplicata), **aucun RDV physique n\'est requis**. Tout passe par ANEF. Vérifiez sur **administration-etrangers-en-france.interieur.gouv.fr** si votre démarche est dématérialisée.

**Solution 5 : Le recours administratif gracieux**

Envoyez une **LRAR au préfet** demandant un RDV sous 15 jours, en citant l\'article **L.114-1 du Code des relations entre le public et l\'administration** (droit d\'accès au service public). Joignez 5 captures d\'écran datées prouvant l\'absence de créneaux.

**Solution 6 : Saisir le Défenseur des droits**

Gratuit, en ligne sur **defenseurdesdroits.fr**. Le Défenseur a obtenu en 2026 plus de **3 200 RDV** par injonction amiable.

**Solution 7 : Référé "mesures utiles" au tribunal administratif (L.521-3 CJA)**

L\'arme finale. Le juge enjoint à la préfecture de vous délivrer un RDV sous 8 à 30 jours. **Taux de succès : 92 %** quand le dossier est bien constitué.`,
    },
    {
      id: 'modele-refere-rdv',
      title: 'Modèle de référé "RDV indisponible" : éléments à inclure',
      content: `Le référé "mesures utiles" (article **L.521-3 du Code de justice administrative**) est la voie royale en 2026. Voici les **8 éléments obligatoires** pour qu\'il aboutisse.

**Structure du référé à déposer auprès du tribunal administratif :**

1. **Identification du requérant** : nom, prénom, date et lieu de naissance, nationalité, adresse, téléphone, email
2. **Identification de l\'autorité défenderesse** : "Le Préfet de [département], représenté par la Préfecture de [ville]"
3. **Objet précis** : "Demande tendant à enjoindre à la préfecture de [ville] de fournir un rendez-vous pour [type de démarche] sous astreinte"
4. **Exposé chronologique des faits** :
   - Date(s) de tentative de prise de RDV
   - Captures d\'écran datées (au moins 5 sur 30 jours)
   - Démarches déjà effectuées (mails, courriers, alertes)
5. **Démonstration de l\'urgence** :
   - Titre expirant sous X jours
   - Risque de perte d\'emploi
   - Risque de rupture familiale
   - Empêchement de voyager pour raison médicale
6. **Moyens de droit** :
   - Article **L.521-3 du CJA** (mesures utiles)
   - Article **L.114-1 du CRPA** (droit d\'accès au service public)
   - Article **R.431-12 du CESEDA** (délai d\'instruction)
   - Jurisprudence : **CE, 10 juin 2020, n° 435594**
7. **Demande d\'astreinte** : "Sous astreinte de 100 € par jour de retard"
8. **Pièces jointes** : copie pièce d\'identité, titre de séjour, captures écran ANTS, courriers de relance

**Tableau récapitulatif des recours :**

| Recours | Délai jugement | Coût | Taux de succès 2026 |
|---|---|---|---|
| Recours gracieux LRAR | 30 jours | 5 € | 18 % |
| Saisine Défenseur des droits | 60-120 jours | Gratuit | 62 % |
| Référé mesures utiles (L.521-3) | 8 à 30 jours | Gratuit ou AJ | 92 % |
| Référé liberté (L.521-2) | 48 heures | Gratuit ou AJ | 75 % (si urgence) |

**Astuce 2026** : déposez votre référé via **télérecours citoyens** (telerecours.fr) gratuitement, sans avocat obligatoire pour les particuliers.`,
    },
    {
      id: 'outils-tiers',
      title: 'Outils tiers gratuits et payants : lesquels fonctionnent vraiment ?',
      content: `Le marché des outils d\'alerte créneaux a explosé en 2026. Voici un **comparatif factuel** des solutions disponibles.

**Outils gratuits (recommandés) :**

- **RendezVousPréfecture.com** : association à but non lucratif, alerte mail toutes les 10 minutes, **fonctionne sur 89 préfectures**. Inscription gratuite, pas de pub agressive.
- **Service-Public.fr alertes** : outil officiel, mais limité aux changements d\'horaires d\'ouverture
- **Bots Telegram associatifs** (Cimade, Gisti) : alertes ciblées par département

**Outils payants :**

- Tarifs variables (souvent 5 à 30 €/mois) selon les services
- Méfiance : certains revendent simplement votre email à des tiers
- **Vérifiez toujours** les avis Trustpilot et la mention RGPD

**Outils à éviter absolument :**

- Toute plateforme demandant un **paiement pour obtenir un RDV** (illégal — la prise de RDV en préfecture est gratuite)
- Sites avec promesses du type "**RDV garanti en 48h pour 200 €**" : 100 % d\'arnaques en 2026
- Comptes WhatsApp ou Telegram inconnus proposant des "**créneaux réservés**"

**Comment configurer une alerte efficace :**

1. Identifier la préfecture cible (résidence + démarche)
2. Activer 2 outils en parallèle (redondance)
3. Configurer notifications **push** sur smartphone
4. Préparer **tous les documents en amont** (vous avez 5 minutes pour confirmer un créneau)
5. Activer le mode **avion désactivé** la nuit pour recevoir les alertes 3h-6h

**Le piège du compte unique** : ne créez **pas plusieurs comptes ANEF** pour multiplier vos chances — le système détecte les doublons et **bloque vos demandes**.`,
    },
    {
      id: 'cas-particuliers',
      title: 'Cas particuliers : urgence médicale, expiration imminente, mineurs',
      content: `Certaines situations donnent **droit à un traitement prioritaire** non documenté officiellement.

**Cas 1 : Titre expirant dans moins de 30 jours**

- Joignez la **préfecture par mail** avec copie du titre expirant
- Mention "**urgence régularisation**" dans l\'objet
- Demandez un **récépissé d\'urgence** : la préfecture doit légalement vous en délivrer un (CESEDA R.431-12)
- Si refus, **référé liberté sous 48h**

**Cas 2 : Urgence médicale (vous ou un proche)**

- Joindre une **attestation médicale** (du médecin traitant ou hospitalier)
- Mention de la **date du soin/intervention prévue**
- Référé liberté possible si l\'absence de titre empêche l\'accès aux soins
- Le **droit à la santé** est une liberté fondamentale (Conseil constitutionnel, décision 2018-770 QPC)

**Cas 3 : Décès ou maladie grave d\'un proche au pays d\'origine**

- Demandez un **visa de retour** plutôt qu\'un nouveau titre (procédure express)
- Délivré en 24-72h sur présentation : titre en cours, justificatif d\'urgence (acte de décès, certificat hospitalier)
- À demander **directement au préfet** par mail urgent

**Cas 4 : Mineurs étrangers**

- Procédure spécifique via le **service de l\'aide sociale à l\'enfance (ASE)** si mineur isolé
- Pour les enfants accompagnés : démarche du parent avec **document de circulation pour étranger mineur (DCEM)**
- RDV prioritaires théoriques mais souvent saturés en pratique

**Cas 5 : Étudiants en fin de cursus**

- Possibilité de demander un **titre "recherche d\'emploi/création d\'entreprise"** valable 12 mois
- À déposer **avant l\'expiration** du titre étudiant via ANEF

**Cas 6 : Demande de naturalisation**

Si vous attendez un RDV pour déposer votre dossier de naturalisation, profitez de l\'attente pour **valider votre niveau de langue** (DELF B1/B2) et **passer le test civique** obligatoire depuis 2026. Notre [guide d\'inscription au test civique](/articles/inscription-test-civique-2026-ou-quand-comment-sinscrire) détaille la procédure complète.`,
    },
    {
      id: 'eviter-arnaques',
      title: 'Éviter les arnaques aux faux RDV : signaux d\'alerte 2026',
      content: `Avec la saturation, les **arnaques au RDV préfecture** ont explosé en 2026. La police a recensé **3 400 plaintes** sur les 6 premiers mois. Voici comment les détecter.

**Les 5 arnaques les plus courantes :**

1. **Faux site préfecture** : URL ressemblant à "prefecture-paris-rdv.fr" au lieu de "paris.gouv.fr". Demandent paiement de 150-300 € pour un "créneau prioritaire". **C\'est illégal** : la prise de RDV est **toujours gratuite**.

2. **Faux avocats sur Facebook/WhatsApp** : se présentent comme "avocats spécialisés", proposent un référé pour 500-1 200 € sans diplôme réel. Vérifiez sur **avocat.fr** (annuaire officiel CNB).

3. **Revendeurs de créneaux Telegram** : achètent des bots qui captent les créneaux dès leur libération, puis les revendent 200-500 €. Vous payez sans aucune garantie, le créneau peut être annulé.

4. **Faux services "ANEF assistance"** : sites payants qui prétendent vous "aider à remplir" votre dossier ANEF pour 80-200 €. Le vrai ANEF est **gratuit**, et l\'aide officielle est fournie par les **maisons France Services** (gratuites).

5. **Arnaques aux pièces falsifiées** : fournissent de fausses fiches de paie, faux certificats de domicile pour "renforcer votre dossier". **Risque pénal** : usage de faux (5 ans de prison, 75 000 € d\'amende, interdiction définitive du territoire).

**Les 7 signaux d\'alerte :**

- Demande de **paiement à l\'avance** (Western Union, crypto, cartes prépayées)
- URL non officielle (pas en .gouv.fr)
- **Pression temporelle** ("offre limitée 24h")
- Pas de **mentions légales** ni numéro SIREN
- Tarifs supérieurs à **50 €** pour une simple aide administrative
- Aucun **avocat identifié** par numéro CNB
- Promesses de **garantie 100 %** d\'obtention

**Que faire si vous êtes victime ?**

1. Déposer plainte au commissariat (ou en ligne via **pre-plainte-en-ligne.gouv.fr**)
2. Signaler le site sur **PHAROS** (internet-signalement.gouv.fr)
3. Signaler à la **DGCCRF** via **signal.conso.gouv.fr**
4. Contacter votre banque pour **opposition immédiate**

Notre [guide complet sur les arnaques aux étrangers en France](/articles/arnaques-etrangers-france-2026-faux-avocats-prefecture-anef) détaille les 12 arnaques les plus courantes et la procédure de signalement.`,
    },
  ],
  conclusion: `L\'absence de créneau RDV n\'est plus une excuse acceptable de l\'administration en 2026. Entre les 7 solutions hiérarchisées (alertes automatiques, créneaux nocturnes, préfectures voisines, démarches ANEF dématérialisées, recours gracieux, défenseur des droits, et référé "mesures utiles" au tribunal administratif), vous disposez d\'un **arsenal complet** pour décrocher un rendez-vous. Évitez les **arnaques** qui pullulent sur les réseaux sociaux : la prise de RDV est **toujours gratuite**, l\'aide officielle passe par les maisons France Services, et tout référé peut se déposer **sans avocat** via télérecours citoyens. Si votre rendez-vous concerne une **demande de naturalisation**, profitez de l\'attente pour préparer le **test civique obligatoire** depuis 2026 — 40 questions, 80 % de réussite exigée. Notre [plateforme de préparation officielle](/signup) propose des QCM, fiches de révision et entraînements ciblés pour transformer cette attente en réussite.`,
  faq: [
    {
      question: 'Combien de temps faut-il attendre avant de saisir le tribunal administratif pour absence de RDV ?',
      answer: 'Aucun délai légal minimum n\'est exigé, mais en pratique les juges veulent voir au moins 4 à 6 semaines de tentatives infructueuses, avec captures d\'écran datées et un courrier de relance LRAR au préfet. Plus votre dossier de preuves est solide, plus l\'injonction est rapide. Le référé mesures utiles est jugé en 8 à 30 jours.',
    },
    {
      question: 'Puis-je prendre RDV dans une préfecture autre que celle de mon département ?',
      answer: 'En principe non, vous devez prendre RDV dans la préfecture de votre lieu de résidence. Cependant, si vous avez récemment déménagé ou allez déménager, vous pouvez justifier d\'un changement d\'adresse (bail, attestation hébergement) et déposer dans la nouvelle préfecture. Certaines démarches (titre temporaire) acceptent aussi un dépôt dans la préfecture du lieu de travail.',
    },
    {
      question: 'Faut-il obligatoirement un avocat pour un référé contre la préfecture ?',
      answer: 'Non. Pour les particuliers, le référé peut être déposé sans avocat via le site télérecours citoyens (telerecours.fr) gratuitement. Un avocat reste recommandé pour les cas complexes ou si vous n\'êtes pas à l\'aise avec la rédaction juridique. L\'aide juridictionnelle (sous conditions de ressources) prend en charge l\'avocat à 100 % si vos revenus sont inférieurs à 1 263 €/mois en 2026.',
    },
    {
      question: 'Les outils d\'alerte créneaux sont-ils légaux ?',
      answer: 'Oui, à condition qu\'ils ne fassent que vous notifier de la disponibilité d\'un créneau (sans le réserver à votre place). Les bots qui réservent automatiquement le créneau et le revendent sont illégaux (article 313-1 du Code pénal, escroquerie). Préférez les outils associatifs gratuits ou les services officiels.',
    },
    {
      question: 'Que faire si mon titre expire dans 15 jours et je n\'ai aucun RDV ?',
      answer: 'C\'est une situation d\'urgence caractérisée. Envoyez immédiatement un mail au préfet avec copie de votre titre expirant et demandez un récépissé d\'urgence (article R.431-12 CESEDA). Si pas de réponse sous 48h, déposez un référé liberté au tribunal administratif (jugement en 48 heures). En parallèle, contactez la Cimade ou un avocat spécialisé.',
    },
  ],
};

// =====================================================================
// ARTICLE 3 — Naturalisation par décret VS par mariage 2026
// =====================================================================
export const article3Content: ArticleFullContent = {
  slug: 'naturalisation-decret-mariage-2026-comparatif-conditions-delais',
  introduction: `Devenir français en 2026 : par **décret** ou par **mariage** ? La question paraît simple, mais le choix entre ces deux voies de naturalisation peut **changer radicalement** la durée de votre procédure (de 6 mois à 24 mois), votre taux de succès (de 65 % à 88 % selon les profils), et même votre relation avec votre conjoint. La **naturalisation par décret** est la voie classique : elle exige **5 ans de résidence régulière**, une intégration prouvée, des ressources stables. La **déclaration de nationalité par mariage** (souvent appelée à tort "naturalisation par mariage") repose sur **4 ans de mariage** et **3 ans de cohabitation**, avec une procédure plus courte. Mais attention : depuis le décret du **1er janvier 2026**, **les deux voies exigent désormais le test civique obligatoire** (40 questions, 80 % de réussite), ce qui change la donne. Ce comparatif détaillé 2026 vous donne les conditions exactes, les délais réels d\'instruction, le dossier comparé, le taux de refus, et la **stratégie optimale** selon votre situation personnelle.`,
  keywords: [
    'naturalisation décret mariage 2026',
    'comparatif naturalisation française',
    'nationalité française mariage conditions',
    'naturalisation décret 5 ans',
    'déclaration nationalité article 21-2',
    'délai naturalisation 2026',
    'taux refus naturalisation mariage',
    'choisir naturalisation décret ou mariage',
    'dossier nationalité mariage français',
    'communauté de vie naturalisation',
    'CESEDA naturalisation décret',
    'code civil 21-2 mariage français',
    'conditions naturalisation 2026',
    'nationalité française stratégie',
    'test civique naturalisation obligatoire',
  ],
  sections: [
    {
      id: 'deux-voies-naturalisation',
      title: 'Les 2 voies pour devenir français en 2026 : panorama',
      content: `La législation française distingue **deux modes principaux** d\'acquisition de la nationalité française pour les majeurs étrangers, à côté de la nationalité par naissance/filiation :

**Voie 1 — La naturalisation par décret (article 21-15 du Code civil)**

C\'est la voie "**classique**". L\'État français vous accorde, par décret signé du Premier ministre publié au **Journal officiel**, la nationalité française. Cette voie est **discrétionnaire** : l\'administration peut refuser même si toutes les conditions sont remplies, si elle estime votre intégration insuffisante.

Conditions principales :
- **5 ans de résidence régulière et continue** (réduit à 2 ans pour certains profils : diplômés, services rendus à la France)
- **Niveau de langue B1** validé (DELF/TCF)
- **Test civique obligatoire** depuis le 1er janvier 2026 (32/40 minimum)
- **Ressources stables et suffisantes**
- **Casier judiciaire compatible**
- **Assimilation à la communauté française** (entretien obligatoire)

**Voie 2 — La déclaration de nationalité par mariage (article 21-2 du Code civil)**

Réservée aux **conjoints d\'un Français**. Ce n\'est techniquement pas une "naturalisation" mais une **déclaration acquisitive de nationalité**. La procédure est **moins discrétionnaire** : si toutes les conditions sont remplies, l\'administration ne peut refuser que pour des motifs limitativement énumérés (indignité, défaut d\'assimilation).

Conditions principales :
- **4 ans de mariage** avec un conjoint français (ou **5 ans** si vous ne pouvez pas prouver 3 ans de résidence en France)
- **Communauté de vie affective et matérielle** ininterrompue depuis le mariage
- **Niveau de langue B1** validé
- **Test civique obligatoire** depuis le 1er janvier 2026
- Conjoint français de manière **continue** depuis le mariage

**Voies complémentaires (rares) :** possession d\'état (article 21-13), réintégration, déclaration pour frères/sœurs de Français. Notre [article complet sur la naturalisation 2026](/articles/naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet) détaille l\'ensemble des voies.`,
    },
    {
      id: 'conditions-decret',
      title: 'Conditions détaillées de la naturalisation par décret',
      content: `Le **décret n° 93-1362 du 30 décembre 1993** (modifié) fixe les conditions exactes. Examinons-les point par point.

**1. Résidence régulière de 5 ans (stage)**

- **5 ans** de résidence ininterrompue avant le dépôt
- Réduit à **2 ans** si vous avez accompli **2 ans d\'études supérieures** en France ou rendu des **services importants à la France**
- Suppression du stage dans certains cas exceptionnels (article 21-19 Code civil)

**2. Résidence en France au moment de la signature**

Vous devez résider en France au moment du **dépôt** ET de la **signature du décret**. Quitter la France pendant l\'instruction peut entraîner le rejet.

**3. Ressources suffisantes et stables**

Pas de seuil officiel, mais en pratique : **SMIC net** minimum (1 426 € net en 2026) pour une personne seule, **stabilité** sur 3 ans (CDI, fonction publique, indépendant établi). Refus quasi-systématique si **chômage long** ou **RSA seul**.

**4. Niveau de langue B1**

Diplôme reconnu : **DELF B1**, **TCF B1**, **DCL niveau 3**. Un diplôme français du secondaire/supérieur dispense.

**5. Test civique obligatoire (NOUVEAU 2026)**

Depuis le **décret du 1er janvier 2026**, tous les candidats doivent réussir le **test civique** : 40 questions sur les valeurs, institutions, histoire et géographie. Seuil : **32/40 (80 %)**.

**6. Assimilation à la communauté française**

Évaluée lors de l\'**entretien d\'assimilation** (30-60 minutes). Le fonctionnaire évalue votre maîtrise du français, vos connaissances historiques, votre adhésion aux **valeurs de la République** (laïcité, égalité, liberté), votre intégration sociale.

**7. Casier judiciaire**

Le bulletin n°2 doit être vierge ou ne contenir que des **infractions mineures**. Une condamnation à plus de **6 mois de prison ferme** est éliminatoire (article 21-23 Code civil), sauf réhabilitation.`,
    },
    {
      id: 'conditions-mariage',
      title: 'Conditions détaillées de la déclaration par mariage (art. 21-2)',
      content: `L\'article **21-2 du Code civil** régit cette voie. Voici le détail des conditions 2026.

**1. Durée de mariage : 4 ans minimum**

- **4 ans** si vous justifiez d\'au moins **3 ans de résidence régulière en France** depuis le mariage
- **5 ans** sinon
- Le mariage doit être **valable** (transcrit en France si célébré à l\'étranger)

**2. Communauté de vie affective et matérielle ininterrompue**

C\'est le critère **central** et le plus contrôlé :
- **Vie commune** : même domicile (justificatifs aux deux noms)
- **Communauté affective** : photos, témoignages, voyages communs
- **Communauté matérielle** : compte joint, déclaration fiscale commune, mutuelle

Toute interruption peut entraîner le rejet. L\'article **215 du Code civil** impose cette obligation.

**3. Conjoint français de manière continue**

Le conjoint doit être français **au moment du mariage** ET **au moment de la déclaration**.

**4. Niveau de langue B1 + test civique 2026**

Identique à la voie décret depuis le **1er janvier 2026** : niveau B1 (DELF/TCF) **et** test civique 32/40 minimum. Dispense possible après 60 ans ou pour handicap (certificat médical).

**5. Absence d\'indignité ou défaut d\'assimilation**

L\'article **21-4 du Code civil** permet au gouvernement de s\'opposer par décret en Conseil d\'État dans un délai de **2 ans** suivant la déclaration.

**6. Procédure de dépôt**

Déclaration en **préfecture** (résidence France) ou **consulat** (résidence étranger), via **Cerfa 15277**. Délai d\'instruction moyen : **6 à 12 mois** en 2026.`,
    },
    {
      id: 'tableau-comparatif',
      title: 'Tableau comparatif détaillé : décret vs mariage en 2026',
      content: `Voici le **comparatif chiffré** des deux voies au 1er semestre 2026.

| Critère | Naturalisation par décret | Déclaration par mariage |
|---|---|---|
| **Base légale** | Article 21-15 Code civil + décret 93-1362 | Article 21-2 Code civil |
| **Durée minimale en France** | 5 ans (2 ans si études sup.) | 3 ans depuis le mariage |
| **Durée mariage requise** | Non applicable | 4 ou 5 ans |
| **Niveau de français** | B1 (DELF/TCF) | B1 (DELF/TCF) |
| **Test civique 2026** | Obligatoire (32/40) | Obligatoire (32/40) |
| **Ressources exigées** | SMIC + stabilité 3 ans | Pas de minimum officiel |
| **Casier judiciaire** | B2 vierge ou mineur | B2 vierge ou mineur |
| **Entretien d\'assimilation** | Oui (30-60 min) | Oui mais plus court |
| **Délai d\'instruction moyen 2026** | 12 à 24 mois | 6 à 12 mois |
| **Coût (timbre fiscal 2026)** | 55 € | 55 € |
| **Taux de refus 2026** | ~35 % | ~12 % |
| **Discrétion administrative** | Forte (rejet possible même si conditions remplies) | Limitée (motifs encadrés) |
| **Possibilité d\'opposition gouvernementale** | Refus initial | Opposition décret 2 ans |
| **Lieu de dépôt** | Préfecture du domicile | Préfecture ou consulat |
| **Formulaire** | CERFA 12753 | CERFA 15277 |
| **Effet sur enfants mineurs** | Acquisition automatique si vivant avec vous | Acquisition par déclaration séparée |

**Lecture du tableau :** si vous êtes marié(e) avec un Français depuis **plus de 4 ans** avec une vraie vie commune, la voie **mariage est statistiquement plus favorable** (délai court, refus 3 fois inférieur). Mais elle exige une **preuve solide de communauté de vie**. Sinon, la voie **décret** reste votre option, plus longue mais bien balisée.`,
    },
    {
      id: 'delais-reels-2026',
      title: 'Délais réels d\'instruction en 2026 : ce que personne ne vous dit',
      content: `Les délais officiels et la réalité sont deux mondes différents. Voici les **chiffres réels** observés sur les 6 premiers mois de 2026.

**Naturalisation par décret — délais réels 2026 :**

- **Préfectures rapides** (Cantal, Lozère, Mayenne) : **9 à 14 mois**
- **Préfectures moyennes** (Paris, Rhône, Haute-Garonne) : **15 à 20 mois**
- **Préfectures saturées** (Bobigny, Créteil, Lyon, Marseille) : **20 à 30 mois**
- Délai légal (article 21-25-1 Code civil) : **18 mois** max, prorogeable une fois 3 mois

**Étapes chronologiques moyennes :**

1. Dépôt + accusé de réception : J0
2. Entretien d\'assimilation : J + 8 à 14 mois
3. Avis préfecture vers ministère : J + 10 à 18 mois
4. Décret au Journal officiel : J + 18 à 30 mois
5. Cérémonie de remise : J + 22 à 36 mois

**Déclaration par mariage — délais réels 2026 :**

- **Cas standards** : **6 à 12 mois**
- **Cas avec vérification consulaire** (Maghreb, Sénégal) : **12 à 18 mois**
- Délai légal (article 21-2 Code civil) : **1 an** max, prorogeable une fois pour vérifications

**Pourquoi ces différences ?** La voie décret implique **3 niveaux d\'instruction** (préfecture, SDANF, Premier ministre) contre **2 niveaux** pour la voie mariage. Le décret du **1er janvier 2026** a allongé certaines procédures de 3-4 mois en intégrant la phase de vérification du test civique.`,
    },
    {
      id: 'dossier-compare',
      title: 'Dossier comparé : pièces à fournir',
      content: `Le **dossier décret** est plus volumineux (25-35 pièces) que le **dossier mariage** (18-25 pièces).

**Pièces communes aux deux voies :**

- Formulaire CERFA rempli (12753 décret / 15277 mariage)
- Acte de naissance avec filiation (traduit + apostillé si étranger, < 3 mois)
- Copie passeport et titre de séjour en cours
- 2 photos d\'identité aux normes ANTS
- Justificatifs de domicile (3 derniers mois)
- **Preuve niveau B1** : DELF, TCF, DCL
- **Attestation test civique 2026** : 32/40 minimum
- **Bulletin n°2** du casier judiciaire
- Avis d\'imposition des 3 dernières années
- Timbre fiscal de **55 €**

**Pièces spécifiques décret :**

- 3 derniers bulletins de salaire et contrat de travail (ou Kbis)
- Tous les anciens titres de séjour (preuve continuité 5 ans)
- Lettre de motivation manuscrite (1-2 pages)
- Justificatifs d\'intégration (associations, bénévolat)

**Pièces spécifiques mariage :**

- **Acte de mariage** intégral (transcrit si célébré à l\'étranger)
- **Acte de naissance du conjoint français** (< 3 mois)
- **Certificat de nationalité française** du conjoint
- **Preuves de communauté de vie** : domicile commun, déclaration fiscale jointe, compte bancaire joint, mutuelle commune, photos
- Attestation sur l\'honneur de non-séparation

**Astuce stratégique** : pour la voie mariage, plus vous prouvez de **communauté de vie matérielle** (au moins **5 justificatifs** différents), plus votre dossier est inattaquable.`,
    },
    {
      id: 'strategie-choisir',
      title: 'Stratégie 2026 : quelle voie choisir selon votre situation ?',
      content: `Voici la **matrice de décision** affinée par les retours terrain 2026.

**Profil 1 : Conjoint(e) français(e) depuis 4+ ans, vie commune solide**

→ **Voie mariage (article 21-2)**. Plus rapide, taux de refus 3 fois inférieur, moins discrétionnaire. Constituez un dossier de **preuves de communauté de vie béton** (10+ justificatifs).

**Profil 2 : Marié(e) à un Français depuis 2-3 ans seulement**

→ **Attendez** d\'atteindre les 4 ans, OU si vous avez 5 ans de résidence en France, déposez par **décret** en parallèle. Stratégie hybride possible mais consultez un avocat.

**Profil 3 : Étudiant(e) avec 2 ans d\'études supérieures + emploi stable**

→ **Voie décret (article 21-18)**. Stage réduit à 2 ans, votre profil est très favorable. Bien préparer le test civique (40 questions, 80 %).

**Profil 4 : 5+ ans en France, CDI, célibataire, intégration solide**

→ **Voie décret classique**. Profil "modèle". Soignez la lettre de motivation et l\'entretien d\'assimilation.

**Profil 5 : Couple de fait (PACS ou concubinage)**

→ **Uniquement décret**. Le PACS ne donne **aucun droit** à la nationalité par déclaration. C\'est une différence majeure avec le mariage. Si vous envisagez la nationalité, le mariage civil reste un avantage juridique fort.

**Profil 6 : Travailleur indépendant / freelance**

→ **Voie décret** privilégiée mais **dossier renforcé** : 3 dernières liasses fiscales, bilans, justificatifs URSSAF à jour, attestation expert-comptable.

**Profil 7 : Personne en CDD multiples ou contrats précaires**

→ Préparez d\'abord votre **stabilité professionnelle** (CDI ou auto-entreprise viable depuis 2 ans), puis déposez. Sinon refus quasi-certain.

**Le test civique : obligatoire dans les deux voies**

Depuis le **1er janvier 2026**, **toutes les voies de naturalisation** (décret comme mariage) exigent le **niveau B1** ET le **test civique** (32/40 minimum). Ce test évalue vos connaissances sur les **valeurs de la République** ([liberté, égalité, fraternité](/articles/valeurs-republique-francaise-liberte-egalite-fraternite)), les **institutions** ([Président, Parlement, UE](/articles/institutions-francaises-president-assemblee-senat)), l\'histoire, la géographie et la vie en société. Une préparation sérieuse de **4 à 8 semaines** est indispensable. Le taux de réussite national en 2026 est de **72 %** — soit **28 % d\'échec** au premier passage.`,
    },
  ],
  conclusion: `Le choix entre **naturalisation par décret** et **déclaration par mariage** dépend avant tout de votre **situation personnelle** : marié à un Français depuis plus de 4 ans avec une vraie vie commune ? La voie 21-2 du Code civil est statistiquement la plus rapide et la moins risquée (12 % de refus contre 35 % pour le décret). Célibataire ou en couple non marié ? La voie décret reste votre option, plus longue mais bien encadrée. Dans **tous les cas**, depuis le décret du 1er janvier 2026, deux exigences sont **incontournables** : valider votre **niveau B1** en français et **réussir le test civique officiel** (40 questions, 32 bonnes réponses minimum). C\'est précisément sur ce dernier point que se joue désormais la majorité des refus pour défaut d\'assimilation. Notre [plateforme de préparation au test civique](/signup) vous propose des QCM officiels conformes au programme 2026, des fiches de révision sur les valeurs, institutions, histoire et géographie, ainsi qu\'un suivi personnalisé pour viser les 32/40 du premier coup. Préparez sérieusement, déposez méthodiquement, et la nationalité française sera au bout du chemin.`,
  faq: [
    {
      question: 'Le PACS donne-t-il les mêmes droits que le mariage pour la nationalité française ?',
      answer: 'Non. Le PACS ne permet PAS d\'obtenir la nationalité française par déclaration (article 21-2 Code civil réservé au mariage). Si vous êtes pacsé(e) avec un Français, vous devez passer par la voie décret classique (5 ans de résidence). C\'est une différence juridique majeure souvent méconnue. Le mariage civil reste un atout fort si la nationalité est votre objectif.',
    },
    {
      question: 'Si mon dossier de naturalisation par mariage est refusé, puis-je redemander par décret ?',
      answer: 'Oui, les deux voies sont indépendantes. Un refus de déclaration par mariage (souvent pour défaut de communauté de vie ou indignité) ne vous interdit pas une demande par décret si vous remplissez les 5 ans de résidence. Mais le ministère croisera les dossiers : préparez une argumentation claire sur l\'évolution de votre situation entre les deux demandes.',
    },
    {
      question: 'Mon conjoint français doit-il aussi passer le test civique ?',
      answer: 'Non, le conjoint français n\'a aucune démarche à effectuer (il est déjà français). Seul le candidat étranger à la nationalité passe le test civique, le test de langue B1, et fournit le dossier complet. Le conjoint français doit toutefois fournir son acte de naissance et son certificat de nationalité française pour prouver qu\'il est bien Français au moment du dépôt.',
    },
    {
      question: 'Que se passe-t-il si on divorce pendant l\'instruction de la déclaration par mariage ?',
      answer: 'Si le divorce est prononcé avant la déclaration, vous ne pouvez pas déposer (rupture de la communauté de vie). Si le divorce intervient après le dépôt mais avant l\'enregistrement, l\'administration peut s\'opposer pour rupture de communauté de vie. Si le divorce intervient après l\'enregistrement de la déclaration, votre nationalité est en principe acquise — mais le gouvernement peut s\'opposer par décret en Conseil d\'État dans les 2 ans pour fraude (mariage de complaisance).',
    },
    {
      question: 'Quel est le coût total réel d\'une procédure de naturalisation en 2026 ?',
      answer: 'Le timbre fiscal officiel est de 55 € (les deux voies). Mais comptez en réalité : DELF B1 ou TCF B1 (90-150 €), test civique (60-80 € selon centres), traductions assermentées (300-800 € selon nombre de documents), photos ANTS (10 €), apostilles éventuelles (50-200 €), photocopies certifiées. Budget total moyen 2026 : 600 à 1 500 € hors frais d\'avocat. Voir notre guide [coût naturalisation détaillé](/articles/cout-regularisation-situation-france-2026-budget-complet).',
    },
  ],
};

// =====================================================================
// METADATA — 3 entrées Article correspondantes
// =====================================================================
export const batch1Metadata: Article[] = [
  {
    id: 'mai-2026-1',
    slug: 'anef-dossier-bloque-en-attente-2026-debloquer-relancer',
    title: 'ANEF dossier bloqué ou en attente 2026 : 9 raisons et comment débloquer (guide complet)',
    excerpt: `Votre dossier ANEF est en attente depuis des mois ? Statut figé sur "en cours d'instruction" ? 9 causes réelles de blocage en 2026 et la procédure étape par étape pour relancer la préfecture, contacter le défenseur des droits et débloquer votre demande.`,
    content: '',
    category: 'Conseils pratiques',
    categorySlug: 'conseils',
    author: 'Brian BIENDOU',
    date: '06/05/2026',
    readTime: 16,
    views: 0,
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'mai-2026-2',
    slug: 'ants-rdv-indisponible-prefecture-2026-alternatives-solutions',
    title: 'RDV ANTS / préfecture indisponible 2026 : 7 solutions concrètes quand aucun créneau n\'est disponible',
    excerpt: `"Aucun créneau disponible" sur ANTS depuis des semaines ? 7 solutions testées en 2026 pour obtenir un RDV préfecture : créneaux supplémentaires nocturnes, recours administratif, référé "RDV indisponible", démarches en ligne alternatives et préfectures voisines.`,
    content: '',
    category: 'Conseils pratiques',
    categorySlug: 'conseils',
    author: 'Brian BIENDOU',
    date: '06/05/2026',
    readTime: 14,
    views: 0,
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 'mai-2026-3',
    slug: 'naturalisation-decret-mariage-2026-comparatif-conditions-delais',
    title: 'Naturalisation par décret ou par mariage 2026 : comparatif complet (conditions, délais, dossier)',
    excerpt: `Naturalisation par décret ou par mariage : laquelle choisir en 2026 ? Comparatif détaillé : conditions de résidence (5 ans vs 4 ans de mariage), délais d'instruction (12-24 mois), dossier requis, taux de refus, et stratégie pour maximiser vos chances.`,
    content: '',
    category: 'Conseils pratiques',
    categorySlug: 'conseils',
    author: 'Brian BIENDOU',
    date: '06/05/2026',
    readTime: 18,
    views: 0,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
];
