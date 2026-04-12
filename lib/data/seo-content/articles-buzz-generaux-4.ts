/**
 * Articles Buzz Généraux (Batch 4) - Avril 2026
 * 1. Travailler sans papiers en France en 2026 : risques et 3 voies de régularisation
 * 2. Avoir un enfant en France quand on est étranger : droit du sol, nationalité, allocations
 * 3. OQTF et enfants en France : peut-on vraiment être expulsé ?
 * 4. Prime de retour volontaire 2026 : jusqu'à 2 500 € pour rentrer chez soi
 */

import type { ArticleFullContent } from './articles-part1';

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 1 : Travailler sans papiers en France en 2026
// ─────────────────────────────────────────────────────────────────────────────
export const travaillerSansPapiersFranceContent: ArticleFullContent = {
  slug: 'travailler-sans-papiers-france-2026-risques-regularisation',
  introduction: `En France, on estime entre 300 000 et 400 000 le nombre d'étrangers en situation irrégulière qui travaillent — souvent dans le BTP, la restauration, l'agriculture ou les services à la personne. Ce n'est pas un sujet que les gens osent chercher ouvertement, mais c'est une réalité qui touche des centaines de milliers de familles. Ce guide ne juge pas. Il expose les **risques réels** — ceux qu'on minimise trop souvent — pour l'employé comme pour l'employeur, et surtout il détaille les **3 voies légales qui permettent de se régulariser par le travail** en 2026. Parce que rester dans l'ombre n'est jamais une solution durable.`,
  keywords: [
    'travailler sans papiers France 2026',
    'travail sans titre de séjour France',
    'risques travail clandestin France',
    'régularisation par le travail France 2026',
    'métiers en tension régularisation sans papiers',
    'régularisation sans papiers 10 ans France',
    'employeur étranger sans papiers risques',
    'circulaire Valls régularisation travail',
    'DREETS inspection du travail sans papiers',
    'régularisation exceptionnelle travail France',
    'sans-papiers travailler légalement France',
    'régulariser situation France par travail',
    'travail non déclaré étranger France',
    'OQTF travail sans papiers',
    'régularisation humanitaire France 2026',
  ],
  sections: [
    {
      id: 'realite-chiffree',
      title: 'La réalité du travail sans papiers en France',
      content: `Le travail sans autorisation concerne principalement cinq secteurs : **BTP** (25 %), **restauration et hôtellerie** (20 %), **agriculture** (15 %), **services à la personne** (15 %), et **nettoyage industriel** (10 %). Ce sont des secteurs qui recrutent en sous-main, souvent parce que personne d'autre ne veut faire ces emplois aux conditions proposées.

Travailler sans papiers crée une situation paradoxale : vous payez des cotisations sociales (via une fausse identité ou un numéro de sécu provisoire), vous contribuez à l'économie française, et pourtant vous n'avez aucune protection. Vous ne pouvez pas aller aux urgences sans craindre un signalement, vous ne pouvez pas porter plainte si votre employeur vous vole, et vous vivez dans la peur constante d'un contrôle.

### Ce que dit la loi (en clair)

Le travail sans autorisation est défini par l'article **L. 8251-1 du Code du travail**. Il se distingue du travail non déclaré (travail au noir) : un étranger peut travailler "au noir" (sans déclaration) **ET** sans titre de séjour — les deux infractions s'accumulent.

La loi distingue :
- **L'employeur** qui emploie un étranger sans titre valide → infraction pénale grave
- **L'étranger** qui travaille sans autorisation → infraction administrative entraînant l'éloignement

Ce qui est important : **l'étranger qui travaille sans papiers n'est pas condamné pénalement pour le simple fait de travailler**. La sanction principale reste l'OQTF (obligation de quitter le territoire), pas la prison.`,
    },
    {
      id: 'risques-employe',
      title: "Les risques réels pour l'employé sans papiers",
      content: `### Risque n°1 : L'OQTF immédiate

Si vous êtes contrôlé sur votre lieu de travail (ou dans la rue), l'absence de titre de séjour valide peut aboutir à une **obligation de quitter le territoire français (OQTF)**. En 2026, avec les nouvelles dispositions de la loi immigration, les délais de départ volontaire ont été réduits à **15 jours** (contre 30 auparavant dans la plupart des cas).

### Risque n°2 : L'interdiction de retour sur le territoire français (IRTF)

Une OQTF peut être assortie d'une **interdiction de retour** de 1 à 3 ans. Cela signifie que vous ne pouvez plus demander de visa pour la France pendant cette période — même pour rendre visite à vos enfants.

### Risque n°3 : L'exploitation sans recours

C'est le risque le plus méconnu et le plus grave au quotidien. Sans contrat légal, vous n'avez **aucun recours effectif** si :
- Votre employeur ne vous paie pas (ou vous paie en dessous du SMIC)
- Vous avez un accident du travail (pas de prise en charge AT/MP)
- Vous êtes licencié sans préavis ni indemnités
- Votre employeur vous dénonce à la police pour se débarrasser de vous

Théoriquement, la loi protège même les travailleurs sans papiers (salaires dus, dommages-intérêts). En pratique, saisir les prud'hommes expose à un risque d'interpellation.

### Risque n°4 : Le blocage du dossier de régularisation futur

Si vous êtes contrôlé et enregistré dans le fichier de police comme étant en situation irrégulière, cela **complique significativement** toute demande de titre de séjour future — même si vous remplissez les conditions. La préfecture peut opposer votre passé d'irrégularité.

### Ce que vous avez quand même comme droits

Même sans papiers, vous bénéficiez de :
- L'**aide médicale d'État (AME)** pour les soins urgents
- La **protection contre les violences** (vous pouvez porter plainte)
- Le droit à l'**instruction pour vos enfants**
- Le droit de **recevoir les salaires dus** (même en situation irrégulière, l'employeur vous doit ce qu'il vous doit)`,
    },
    {
      id: 'risques-employeur',
      title: "Les risques réels pour l'employeur",
      content: `L'employeur qui recrute un étranger sans titre de travail valide prend des risques **considérables** — souvent sous-estimés.

### Les sanctions pénales (article L. 8256-2 du Code du travail)

| Infraction | Amende | Prison |
|---|---|---|
| Emploi d'un étranger sans autorisation | **15 000 € par salarié** concerné | 5 ans |
| Récidive | **45 000 €** | 10 ans |
| Recours à un sous-traitant employant des sans-papiers | 15 000 € par salarié | 5 ans |
| Travail forcé ou conditions indignes | 300 000 € | 10 ans |

### Les sanctions administratives

En plus du pénal, l'employeur peut se voir :
- **Exclu des marchés publics** pendant 5 ans
- **Contraint de rembourser** toutes les aides publiques perçues (subventions, chômage partiel, crédits d'impôt) sur 5 ans
- **Condamné à payer** les frais de reconduite à la frontière du salarié
- Soumis à une **fermeture administrative** de son établissement (3 mois à 3 ans)

### Le devoir de vigilance : ce que la loi exige

Depuis 2012, tout employeur doit **vérifier l'authenticité des titres de séjour** avant l'embauche en demandant une attestation à la préfecture (service gratuit disponible sur le site du ministère de l'Intérieur). Cette vérification le protège en cas de faux documents.

### Qui contrôle ?

- **L'inspection du travail (DREETS)** : contrôles sur chantiers, restaurants, entrepôts
- **La police aux frontières (PAF)** : contrôles dans les entreprises sur dénonciation
- **L'URSSAF** : croisements de fichiers pour détecter les cotisations incohérentes
- **La douane** : sur les sites logistiques et agricoles`,
    },
    {
      id: 'voie-1-metiers-tension',
      title: 'Voie légale n°1 : La régularisation par les métiers en tension',
      content: `C'est la voie la plus rapide et la plus accessible en 2026. La **circulaire du 3 janvier 2024** (dite "circulaire Darmanin-Dussopt") a institutionnalisé une procédure de régularisation pour les étrangers qui travaillent dans des **secteurs en tension de main-d'œuvre**.

### Les conditions à remplir

1. **Résider en France depuis au moins 3 ans** (calculé à la date du dépôt de la demande)
2. **Travailler ou avoir travaillé** dans un secteur figurant sur la liste des métiers en tension
3. **Justifier de 8 mois de travail** (continu ou non) dans les 24 derniers mois
4. **Avoir un employeur prêt à régulariser** la relation (contrat à durée déterminée ou indéterminée)
5. Ne pas représenter une menace pour l'ordre public

### Les secteurs en tension éligibles (liste principale 2026)

| Secteur | Métiers principaux |
|---|---|
| BTP | Maçon, plombier, électricien, carreleur, couvreur, peintre en bâtiment |
| Hôtellerie-restauration | Cuisinier, plongeur, serveur, agent de nettoyage hôtelier |
| Agriculture | Saisonnier agricole, ouvrier de culture maraîchère |
| Transport | Conducteur de poids lourd, chauffeur livreur |
| Santé/médico-social | Aide-soignant, auxiliaire de vie, agent de service hospitalier |
| Industrie | Opérateur de production, soudeur, technicien de maintenance |

### Le titre délivré

Si votre dossier est accepté : un **titre de séjour "travailleur temporaire"** ou **"salarié"** valable **1 an**, renouvelable. À terme, ce titre peut évoluer vers une carte pluriannuelle.

### Comment déposer le dossier

1. Rassemblez vos **preuves de travail** (bulletins de paie, contrats, attestations employeur, virements bancaires)
2. Constituez vos **preuves de résidence** depuis 3 ans (quittances, factures, attestations diverses)
3. Obtenez une **lettre de soutien de votre employeur** actuel
4. Déposez via l'ANEF ou en préfecture selon votre département (certaines préfectures ont des guichets dédiés)

> **Important** : Depuis la loi immigration 2024, cette procédure est **codifiée à l'article L. 435-4 du CESEDA**. Elle n'est plus une simple tolérance administrative mais un droit.`,
    },
    {
      id: 'voie-2-anciennete',
      title: 'Voie légale n°2 : La régularisation par ancienneté (10 ans de résidence)',
      content: `Si vous ne travaillez pas dans un secteur en tension, ou si vous n'avez pas d'employeur qui accepte de régulariser, la deuxième voie repose sur votre **durée de présence en France**.

### La procédure "vie privée et familiale" après 10 ans

L'article **L. 423-23 du CESEDA** permet de demander un titre de séjour "vie privée et familiale" si vous justifiez d'une **résidence habituelle en France depuis plus de 10 ans**.

**Conditions :**
- 10 ans de résidence effective en France (pas nécessairement continue, mais sans absence longue)
- Absence de menace pour l'ordre public
- Preuves de liens stables avec la France (famille, travail, scolarité des enfants, logement)

**Ce que le préfet regarde :**
- L'intensité de vos liens avec la France vs. les liens avec votre pays d'origine
- L'intégration (langue, scolarité des enfants, participation à la vie sociale)
- Les raisons de votre irrégularité (arrivée légale puis expiration du titre vs. entrée clandestine)

### La procédure via les liens familiaux forts

Même avant 10 ans, des liens familiaux particuliers peuvent justifier une régularisation :
- **Parent d'un enfant français** (né en France ou naturalisé) → titre "parent d'enfant français"
- **Conjoint de Français** (mariage de plus de 4 ans pour la nationalité, mais titre de séjour possible plus tôt)
- **Enfants scolarisés depuis plus de 3 ans** en France → argument fort dans le cadre d'une demande humanitaire

### Le rôle du préfet : pouvoir discrétionnaire

Contrairement à la voie métiers en tension (qui est un droit si les conditions sont remplies), cette voie repose sur le **pouvoir discrétionnaire du préfet**. Cela signifie que deux dossiers identiques peuvent aboutir à des résultats différents selon la préfecture. D'où l'importance :
- De soigner la présentation du dossier
- De faire appel à une association spécialisée (GISTI, La Cimade, France Terre d'Asile)
- De joindre des lettres de soutien (mairie, école, employeur, voisins)`,
    },
    {
      id: 'voie-3-employeur',
      title: "Voie légale n°3 : La régularisation via l'employeur (procédure d'introduction)",
      content: `La troisième voie est la moins connue et pourtant l'une des plus solides : elle repose sur votre **employeur actuel** qui initie lui-même la démarche de régularisation.

### Comment ça fonctionne

L'employeur fait une demande d'**introduction de travailleur étranger** auprès de la DREETS (Direction régionale de l'économie, de l'emploi, du travail et des solidarités). Il doit démontrer qu'il ne peut pas trouver de travailleur français ou européen pour le poste.

**Les étapes :**

1. L'employeur publie une offre d'emploi sur France Travail (ex-Pôle Emploi) pendant **3 semaines minimum** — et constate l'absence de candidats locaux
2. Il dépose une **demande d'autorisation de travail** à la DREETS
3. La DREETS instruit le dossier (vérification du poste, des conditions de rémunération, de la situation du marché du travail)
4. En cas d'accord, l'étranger peut régulariser sa situation administrative auprès de la préfecture

### Pourquoi certains employeurs font cette démarche

Dans les secteurs en forte tension (BTP, restauration, agricole), certains employeurs préfèrent régulariser un salarié fiable qu'ils connaissent depuis des années plutôt que de recruter quelqu'un d'inconnu. C'est aussi dans leur intérêt : ils évitent les risques pénaux tout en conservant leur employé.

### Ce que vous pouvez proposer à votre employeur

Si votre employeur hésite, vous pouvez :
- Lui montrer que la démarche est **gratuite** pour lui (seul l'étranger paie des taxes OFII)
- Lui expliquer que la **procédure en ligne via ANEF-Pro** est simplifiée depuis 2023
- Lui indiquer qu'il peut se faire accompagner par son **expert-comptable ou son avocat**
- Rappeler que **son risque pénal est réel** s'il continue à vous employer sans titre valide

### Le délai et le coût

- Délai de traitement DREETS : **2 à 4 mois** selon les régions
- Taxes OFII à la charge de l'étranger : de **58 € à 580 €** selon le salaire
- Titre délivré : **carte de séjour salarié** 1 an, renouvelable`,
    },
  ],
  conclusion: `Travailler sans papiers n'est pas une situation stable — c'est une situation de vulnérabilité permanente. Les risques pour l'employé vont bien au-delà de l'expulsion : c'est l'exploitation sans recours, l'accident du travail sans indemnisation, la retraite sans cotisations. Les trois voies présentées dans cet article sont réelles et accessibles : les métiers en tension (codifiés dans la loi depuis 2024), l'ancienneté de résidence, et la démarche via l'employeur. Si vous êtes dans cette situation, la première chose à faire est de **contacter une association spécialisée** : La Cimade, le GISTI, ou France Terre d'Asile proposent des consultations gratuites et confidentielles. Votre dossier mérite d'être étudié sérieusement — beaucoup de personnes pensent ne pas remplir les conditions alors qu'elles le font.`,
  faq: [
    {
      question: 'Peut-on être arrêté sur son lieu de travail et expulsé le jour même ?',
      answer: 'Non. Même lors d\'un contrôle, vous avez le droit d\'être entendu, de contacter un avocat ou une association. Une OQTF donne généralement 15 à 30 jours de délai de départ volontaire, pendant lesquels vous pouvez déposer un recours devant le tribunal administratif.',
    },
    {
      question: 'Mon employeur peut-il me dénoncer à la police pour se débarrasser de moi ?',
      answer: 'Oui, cela arrive. C\'est une pratique illégale si elle vise à éviter de vous payer. En cas de licenciement abusif couplé à une dénonciation, vous pouvez saisir les prud\'hommes. Le tribunal peut condamner l\'employeur même si vous êtes en situation irrégulière.',
    },
    {
      question: 'Si je me régularise, ma période de travail sans papiers sera-t-elle comptabilisée pour la retraite ?',
      answer: 'Non, les cotisations versées sous une fausse identité ne sont pas récupérables pour le calcul de la retraite. En revanche, une fois régularisé, toutes vos cotisations futures comptent normalement.',
    },
    {
      question: 'La circulaire métiers en tension s\'applique-t-elle dans tous les départements ?',
      answer: 'Oui, la loi immigration 2024 (article L. 435-4 CESEDA) la rend applicable sur tout le territoire. Cependant, certaines préfectures sont plus restrictives que d\'autres dans l\'interprétation. Le recours à une association ou un avocat augmente significativement les chances.',
    },
    {
      question: 'Combien de temps faut-il pour obtenir un titre de séjour via la voie métiers en tension ?',
      answer: 'Entre 3 et 8 mois en moyenne selon la préfecture. Certaines préfectures (Paris, Île-de-France) sont plus lentes. Durant cette période, le récépissé de demande vous autorise à travailler légalement.',
    },
  ],
  sources: [
    {
      title: 'Article L. 435-4 CESEDA — Régularisation par le travail',
      url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048783752',
      type: 'legal',
      description: 'Base légale de la régularisation par les métiers en tension (loi immigration 2024)',
    },
    {
      title: 'Article L. 8256-2 du Code du travail — Sanctions employeur',
      url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006902710',
      type: 'legal',
      description: 'Sanctions pénales pour l\'emploi d\'étrangers sans autorisation de travail',
    },
    {
      title: 'La Cimade — Aide juridique gratuite',
      url: 'https://www.lacimade.org',
      type: 'official',
      description: 'Association d\'aide aux étrangers proposant des consultations juridiques gratuites',
    },
    {
      title: 'GISTI — Groupe d\'Information et de Soutien des Immigrés',
      url: 'https://www.gisti.org',
      type: 'official',
      description: 'Ressources juridiques et accompagnement pour les étrangers en France',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 2 : Avoir un enfant en France quand on est étranger
// ─────────────────────────────────────────────────────────────────────────────
export const avoirEnfantFranceEtrangerContent: ArticleFullContent = {
  slug: 'avoir-enfant-france-etranger-2026-droit-sol-nationalite-allocations',
  introduction: `Vous êtes étranger en France et vous attendez un enfant — ou vous venez d'en avoir un. Félicitations d'abord. Maintenant les questions pratiques : votre enfant est-il français ? Quelles allocations pouvez-vous toucher ? Est-ce que la naissance améliore votre propre situation administrative ? Ce sont des questions que des milliers de parents étrangers se posent chaque année, souvent dans la confusion et l'inquiétude. Ce guide y répond clairement, avec les règles exactes du **droit du sol en 2026**, les allocations auxquelles vous avez droit quel que soit votre titre de séjour, et les impacts concrets sur votre titre de séjour.`,
  keywords: [
    'avoir enfant en France étranger 2026',
    'droit du sol France nationalité enfant',
    'enfant né en France nationalité française',
    'allocations familiales étranger France',
    'CAF étranger bébé France',
    'titre de séjour parent enfant français',
    'naissance enfant étranger France titre séjour',
    'allocation naissance étrangère France',
    'PAJE prime naissance étranger France',
    'enfant français parent étranger sans papiers',
    'nationalité française enfant né en France',
    'droits naissance étranger France 2026',
    'impact naissance titre de séjour',
    'droit du sol conditions France 2026',
    'parent enfant français titre de séjour',
  ],
  sections: [
    {
      id: 'enfant-automatiquement-francais',
      title: 'Votre enfant est-il automatiquement français à la naissance ?',
      content: `La réponse courte : **pas automatiquement**. La France applique le droit du sol, mais avec des conditions. Voici la règle exacte.

### Le principe : droit du sang d'abord

En France, la nationalité se transmet d'abord **par filiation** (droit du sang) : si l'un des deux parents est français, l'enfant est français à la naissance, où qu'il soit né. C'est automatique.

### Le droit du sol : pour les enfants nés en France de parents étrangers

Si **les deux parents sont étrangers**, l'enfant né en France n'est pas automatiquement français à la naissance. Mais il peut le devenir selon deux cas :

**Cas 1 : L'acquisition automatique à 18 ans**
L'enfant né en France de parents étrangers acquiert automatiquement la nationalité française à 18 ans s'il réside en France et y a résidé pendant **au moins 5 ans depuis l'âge de 11 ans** (article 21-7 du Code civil). Aucune démarche n'est nécessaire — c'est automatique.

**Cas 2 : La déclaration anticipée entre 13 et 17 ans**
Entre 13 et 17 ans, l'enfant (avec l'accord des parents) peut demander la nationalité française par déclaration s'il réside en France depuis ses 8 ans (article 21-11 du Code civil). Démarche simple, devant le tribunal judiciaire ou la préfecture.

**Cas 3 : La déclaration dès la naissance (cas particulier)**
Si l'enfant est né en France et que **l'un des parents est lui-même né en France** (même de parents étrangers), alors l'enfant est **français à la naissance** — c'est le double droit du sol (article 19-3 du Code civil). Ce cas concerne notamment les enfants de la 3e génération.

### En résumé

| Situation | Nationalité à la naissance |
|---|---|
| Au moins un parent français | Français automatiquement |
| Les deux parents étrangers, enfant né en France | **Étranger** (peut devenir français à 13-18 ans) |
| Les deux parents étrangers, mais l'un né en France | **Français automatiquement** (double droit du sol) |`,
    },
    {
      id: 'impact-titre-sejour-parents',
      title: 'Impact de la naissance sur votre titre de séjour',
      content: `La naissance d'un enfant en France peut avoir un impact **significatif** sur votre situation administrative — dans certains cas, elle ouvre droit à un nouveau titre de séjour.

### Si vous êtes déjà en situation régulière

La naissance d'un enfant ne change pas directement votre titre de séjour actuel. En revanche, elle peut :
- Vous permettre d'obtenir un titre de **catégorie "vie privée et familiale"** lors du prochain renouvellement (plus stable)
- Renforcer votre dossier de naturalisation (liens en France)
- Permettre un regroupement familial si votre conjoint est à l'étranger

### Si votre enfant devient français (double droit du sol ou déclaration)

Dès que votre enfant est reconnu comme français, vous pouvez demander un **titre de séjour "parent d'enfant français"** (article L. 423-7 du CESEDA). Conditions :
- Avoir la garde effective de l'enfant
- Contribuer à son entretien et son éducation
- Ne pas être en situation de polygamie
- Ne pas représenter une menace à l'ordre public

Ce titre est **valable 1 an**, renouvelable, et ouvre droit à une carte de résident après 3 ans.

### Si vous êtes en situation irrégulière

La naissance d'un enfant en France **ne régularise pas automatiquement** votre situation. Mais elle constitue un **argument puissant** dans le cadre d'une demande de régularisation humanitaire. Le préfet doit tenir compte :
- Du droit de l'enfant à être élevé par ses deux parents
- De l'intérêt supérieur de l'enfant (article 3 de la Convention internationale des droits de l'enfant)
- Des liens développés en France

> Si votre enfant est français et que vous n'avez pas de titre de séjour, contactez immédiatement une association (La Cimade, France Terre d'Asile) pour examiner votre situation.`,
    },
    {
      id: 'allocations-auxquelles-vous-avez-droit',
      title: 'Les allocations et aides auxquelles vous avez droit',
      content: `Bonne nouvelle : **la plupart des aides à la naissance ne sont pas conditionnées à la nationalité française**. Elles dépendent de votre titre de séjour et de votre résidence en France.

### La PAJE (Prestation d'Accueil du Jeune Enfant) — CAF

| Aide | Conditions | Montant 2026 |
|---|---|---|
| **Prime à la naissance** | Résider en France, titre de séjour valide, grossesse déclarée avant 14 semaines | **1 049 €** (versée au 7e mois de grossesse) |
| **Allocation de base** | Enfant de moins de 3 ans, conditions de ressources | **Jusqu'à 185 €/mois** |
| **Complément de libre choix d'activité (PreParE)** | Cesser ou réduire son activité professionnelle | Variable selon le cas |

**Titres de séjour acceptés par la CAF :**
- Carte de séjour temporaire (salarié, étudiant, vie privée et familiale, etc.)
- Carte de séjour pluriannuelle
- Carte de résident
- Récépissé de demande de renouvellement (sous conditions)

> Les titres de séjour "visiteur" et "étudiant" en première année peuvent avoir des restrictions. Vérifiez avec votre CAF.

### Les allocations familiales

Les allocations familiales classiques s'appliquent dès le **2e enfant à charge**. Elles sont versées sans condition de nationalité si vous résidez en France et disposez d'un titre de séjour régulier.

### Le Complément Familial et l'APL

- **Complément familial** : pour les familles avec 3 enfants ou plus de 3 à 21 ans, sous conditions de ressources
- **APL (aide au logement)** : accessible dès votre arrivée régulière en France, quel que soit votre titre

### L'aide médicale d'État (AME) pour les sans-papiers

Si vous n'avez pas de titre de séjour, vous n'accédez pas à la Sécurité sociale classique, mais votre enfant bénéficie de l'**AME** (soins pris en charge à 100 %) après 3 mois de présence sur le territoire. Les naissances en urgence sont prises en charge **sans délai**.

### Les démarches à faire dans les jours suivant la naissance

1. **Déclarer la naissance** à la mairie dans les **5 jours** (obligatoire)
2. **Déclarer la naissance à la CAF** pour démarrer vos droits
3. **Affilier l'enfant à votre CPAM** pour la carte Vitale
4. Si l'enfant peut être français : **demander un certificat de nationalité française** au greffe du tribunal judiciaire`,
    },
    {
      id: 'demarches-pratiques-naissance',
      title: 'Les démarches pratiques pas à pas après la naissance',
      content: `### Jour 1-5 : La déclaration de naissance

**Obligatoire et urgent** : vous devez déclarer la naissance à la **mairie du lieu de naissance** dans les **5 jours** suivant la naissance (article 55 du Code civil). La maternité vous remet généralement un certificat médical d'accouchement. Apportez :
- Le certificat médical d'accouchement
- Vos pièces d'identité (ou titre de séjour)
- Votre livret de famille (si vous en avez un)

**Sanction** : Au-delà de 5 jours, il faut passer par le tribunal judiciaire — une procédure plus longue.

### Dans le mois : La demande de Certificat de Nationalité Française (si applicable)

Si votre enfant est potentiellement français (double droit du sol), demandez immédiatement un **Certificat de Nationalité Française (CNF)** au **greffe du tribunal judiciaire** de votre domicile. Ce certificat est la preuve officielle de la nationalité.

Délai : 1 à 6 mois selon les juridictions. C'est gratuit.

### Dans les 2 semaines : La déclaration CAF

Déclarez la naissance sur **caf.fr** dans votre espace personnel. La CAF calculera automatiquement vos droits à la prime de naissance et à l'allocation de base PAJE. Si vous n'êtes pas encore inscrit à la CAF, créez votre compte immédiatement.

### Dans le mois : L'affiliation à la CPAM

Affiliez votre enfant à votre caisse d'assurance maladie (CPAM) via **ameli.fr**. L'enfant sera couvert dès la naissance sur votre carte Vitale jusqu'à sa propre affiliation.

### Si vous souhaitez demander un titre de séjour "parent d'enfant français"

Une fois que vous avez le CNF de l'enfant, rassemblez :
- L'acte de naissance de l'enfant + CNF
- La preuve de garde effective (vie commune, ou jugement si séparation)
- Les preuves de contribution à l'entretien (dépenses pour l'enfant)
- Vos propres documents d'identité et preuves de résidence

Déposez la demande à la préfecture ou sur l'ANEF.`,
    },
    {
      id: 'sans-papiers-enfant-en-france',
      title: "Et si vous n'avez pas de titre de séjour ?",
      content: `C'est la situation la plus anxiogène. Voici ce qui est vrai et ce qui est faux.

### Faux : "L'hôpital va signaler mon accouchement à la police"

**C'est faux.** Les hôpitaux et maternités sont soumis au **secret médical**. Aucun personnel de santé ne peut signaler votre présence à la police lors d'un accouchement. Cette règle est absolue. Des centaines de milliers de naissances d'enfants de parents sans papiers ont lieu chaque année en France en toute sécurité.

### Vrai : "Je peux accoucher en France sans titre de séjour"

**C'est vrai.** Les soins urgents, dont les accouchements, sont pris en charge par l'**AME** (Aide Médicale d'État) ou à défaut par le système hospitalier en urgence. Aucun hôpital ne peut refuser une femme en travail.

### Ce que la naissance peut changer pour votre situation

Si vous êtes sans papiers et que votre enfant naît en France :

1. **Votre enfant n'est pas automatiquement français** (voir section sur le droit du sol)
2. Mais votre enfant a le droit d'être **scolarisé** (l'école est obligatoire pour tous, sans condition de titre de séjour)
3. La présence d'un enfant en France constitue un **motif humanitaire** pour demander une régularisation
4. Si votre enfant devient français (double droit du sol), vous pouvez demander un titre de séjour "parent d'enfant français"

### La menace d'expulsion avec un enfant en bas âge

En pratique, les préfectures sont très réticentes à expulser une mère (ou un père) avec un enfant en bas âge. Ce n'est pas une garantie légale absolue, mais c'est une réalité opérationnelle. Le juge administratif tient compte de l'intérêt de l'enfant dans tout recours contre une OQTF.`,
    },
  ],
  conclusion: `La naissance d'un enfant en France est un événement qui peut transformer votre situation administrative — mais il faut connaître les règles exactes pour en bénéficier. Le droit du sol ne rend pas votre enfant automatiquement français, mais ouvre des voies vers la nationalité française entre 13 et 18 ans. En termes d'allocations, la France est généreux avec les parents résidant régulièrement sur son territoire : la prime de naissance, les allocations familiales, la PAJE sont accessibles sans condition de nationalité. Si vous êtes dans une situation irrégulière, la naissance de votre enfant doit vous pousser à consulter rapidement une association spécialisée — votre dossier mérite d'être sérieusement étudié.`,
  faq: [
    {
      question: 'Mon enfant né en France peut-il avoir un passeport français avant 18 ans ?',
      answer: 'Oui, si votre enfant est reconnu comme français (double droit du sol ou déclaration anticipée à 13-17 ans), il peut obtenir un passeport français. La demande se fait en mairie avec le Certificat de Nationalité Française.',
    },
    {
      question: 'Mon enfant est né en France, puis-je voyager avec lui à l\'étranger ?',
      answer: 'Votre enfant voyagera avec son propre titre de voyage. S\'il a la nationalité de l\'un des deux parents, il peut obtenir le passeport du pays en question. Si votre enfant est français, un passeport français lui sera délivré. S\'il n\'est ni français ni du pays d\'origine, un "document de voyage" peut être demandé à l\'ambassade de votre pays.',
    },
    {
      question: 'La CAF peut-elle me demander de prouver ma nationalité pour recevoir les allocations ?',
      answer: 'La CAF ne demande pas votre nationalité. Elle demande votre titre de séjour (ou tout document prouvant votre résidence régulière en France) et vos justificatifs de ressources. Un titre de séjour régulier suffit pour ouvrir vos droits.',
    },
    {
      question: 'Mon conjoint est à l\'étranger — peut-il venir en France grâce à la naissance de notre enfant ?',
      answer: 'La naissance d\'un enfant en France n\'ouvre pas automatiquement un droit au regroupement familial. Le regroupement familial suit sa propre procédure (revenus, logement, durée de résidence). Cependant, si l\'enfant est français, il a le droit d\'être élevé par ses deux parents — ce qui est un argument fort dans une demande de visa "parent d\'enfant français".',
    },
  ],
  sources: [
    {
      title: 'Code civil — Articles sur la nationalité française (art. 19-3, 21-7, 21-11)',
      url: 'https://www.legifrance.gouv.fr/codes/id/LEGISCTA000006150501',
      type: 'legal',
      description: 'Base légale du droit du sol et de l\'acquisition de la nationalité française',
    },
    {
      title: 'CESEDA article L. 423-7 — Titre de séjour parent d\'enfant français',
      url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042776913',
      type: 'legal',
      description: 'Conditions d\'obtention du titre de séjour pour parent d\'enfant français',
    },
    {
      title: 'CAF — Prestations familiales pour les étrangers',
      url: 'https://www.caf.fr/allocataires/vies-de-famille/articles/les-conditions-pour-beneficier-des-prestations-familiales',
      type: 'official',
      description: 'Conditions d\'accès aux aides CAF pour les ressortissants étrangers',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 3 : OQTF et enfants en France
// ─────────────────────────────────────────────────────────────────────────────
export const oqtfEnfantsFranceContent: ArticleFullContent = {
  slug: 'oqtf-enfants-france-2026-expulsion-enfants-francais-scolarises',
  introduction: `"Ils ne peuvent pas m'expulser, j'ai des enfants en France." Cette phrase, on l'entend souvent. Elle est partiellement vraie — et partiellement fausse. En 2026, avec les nouvelles dispositions de la loi immigration, la protection liée aux enfants a été **durcie** dans certains cas. Ce guide décortique la réalité juridique : quand les enfants protègent réellement de l'expulsion, quand ils ne suffisent pas, et quoi faire concrètement si vous venez de recevoir une OQTF et que vous avez des enfants en France.`,
  keywords: [
    'OQTF enfants France 2026',
    'expulsion étranger enfant français France',
    'OQTF parent enfant français',
    'OQTF enfant scolarisé France',
    'protection expulsion parent France',
    'article 8 CEDH vie familiale France',
    'recours OQTF enfants France',
    'vie privée familiale OQTF protection',
    'expulsion mère enfant français',
    'OQTF protection famille France',
    'titre séjour vie privée familiale OQTF',
    'tribunal administratif OQTF enfants',
    'intérêt supérieur enfant OQTF France',
    'OQTF peut on rester France enfant',
    'régularisation OQTF enfant né France',
  ],
  sections: [
    {
      id: 'ce-que-dit-la-loi',
      title: "Ce que dit la loi : l'article 8 de la CEDH et le CESEDA",
      content: `Comprendre la protection liée aux enfants nécessite de connaître deux textes fondamentaux.

### L'article 8 de la Convention Européenne des Droits de l'Homme (CEDH)

L'article 8 garantit le **droit au respect de la vie privée et familiale**. Il est directement applicable en France et les juges l'invoquent régulièrement pour annuler des OQTF. Il stipule qu'une autorité publique ne peut s'immiscer dans la vie familiale sauf si c'est "nécessaire dans une société démocratique" — c'est-à-dire proportionné.

En pratique : **une OQTF qui séparerait durablement un parent de ses jeunes enfants en France peut être annulée** sur le fondement de l'article 8 par le tribunal administratif.

### Le CESEDA : les "protections absolues" contre l'expulsion

Le Code de l'entrée et du séjour des étrangers (CESEDA) liste des **catégories d'étrangers qui ne peuvent pas faire l'objet d'une expulsion** (article L. 631-3). Ces protections sont distinctes de l'OQTF — elles concernent l'expulsion forcée prononcée par arrêté préfectoral :

| Catégorie | Protection |
|---|---|
| Parent d'un enfant français mineur **qui réside en France** et contribue à son entretien depuis la naissance | Protection **quasi-absolue** (sauf menace grave pour l'ordre public) |
| Étranger résidant en France depuis l'âge de 13 ans | Protection forte |
| Étranger marié depuis au moins 3 ans à un Français | Protection forte |
| Étranger résidant en France depuis plus de 20 ans | Protection quasi-absolue |

> **Attention** : Ces protections visent l'**expulsion forcée** (arrêté préfectoral d'expulsion). L'OQTF est techniquement une "mesure d'éloignement" différente — elle peut théoriquement viser des personnes protégées contre l'expulsion. En pratique, les juges appliquent le même raisonnement.`,
    },
    {
      id: 'cas-ou-enfants-protegent',
      title: 'Les cas où les enfants vous protègent réellement',
      content: `La protection n'est pas automatique — elle dépend de plusieurs critères cumulatifs.

### Cas 1 : Vous êtes parent d'un enfant français

**Conditions pour que la protection soit forte :**
- Votre enfant est de nationalité française (soit par filiation, soit par double droit du sol)
- Votre enfant est mineur et réside en France
- Vous contribuez **effectivement** à son entretien et son éducation (pas seulement biologiquement)
- Vous avez une relation parentale réelle (même si vous n'êtes pas marié avec l'autre parent)

Dans ce cas, le tribunal administratif annule systématiquement l'OQTF si elle conduirait à une séparation définitive. La Cour Administrative d'Appel de Paris a rappelé en 2025 : *"L'intérêt supérieur de l'enfant commande que celui-ci puisse être élevé par ses deux parents sauf circonstances exceptionnelles."*

### Cas 2 : Vous avez des enfants scolarisés en France depuis longtemps

Un enfant scolarisé en France depuis **plus de 3 ans** constitue un lien fort avec le territoire. Ce n'est pas une protection absolue, mais c'est un argument qui a permis l'annulation de nombreuses OQTF.

**Ce que les juges examinent :**
- L'ancienneté de la scolarisation
- L'intégration de l'enfant (notes, activités, liens sociaux)
- L'impact d'un déracinement (retour dans un pays que l'enfant ne connaît pas)
- La situation de l'autre parent (en France ou à l'étranger)

### Cas 3 : Famille reconstituée avec enfants français

Si votre conjoint est français et que vous avez des enfants communs, la combinaison des liens conjugaux et parentaux crée une protection très forte. La jurisprudence est quasi-unanime pour annuler les OQTF dans ce cas.

### Cas 4 : Enfant malade nécessitant des soins en France

Si votre enfant souffre d'une maladie grave nécessitant des soins non disponibles dans votre pays d'origine, c'est une protection humanitaire forte. L'OFII émet généralement un avis médical favorable dans ces situations.`,
    },
    {
      id: 'cas-ou-enfants-ne-suffisent-pas',
      title: 'Les cas où les enfants ne suffisent pas',
      content: `C'est la partie que peu de gens veulent entendre, mais qu'il faut connaître pour se préparer correctement.

### Cas 1 : Vous n'exercez pas réellement votre rôle parental

Si vous avez un enfant en France mais que vous ne vivez pas avec lui, que vous ne payez pas de pension alimentaire, et que vous ne participez pas à son éducation au quotidien, la protection est très faible. Les juges examinent la **réalité** de la relation parentale, pas juste le fait biologique.

### Cas 2 : Antécédents judiciaires graves

La loi immigration 2024 a durci les critères : si vous avez été condamné pour certaines infractions graves (crimes, délits avec récidive, infractions terroristes), la protection liée aux enfants peut être écartée. Le préfet peut invoquer la "menace grave pour l'ordre public" — exception prévue par la loi.

### Cas 3 : L'autre parent peut s'occuper des enfants

Si l'autre parent des enfants est en France avec un titre de séjour stable, les préfectures peuvent arguer que les enfants ne seront pas "privés de toute vie familiale" — ils auront toujours un parent en France. C'est un argument contestable (l'enfant a droit à ses DEUX parents), mais il est parfois retenu.

### Cas 4 : Vous venez d'arriver en France

Si vous êtes arrivé récemment, que votre enfant est tout jeune, et que vous n'avez pas de liens établis en dehors du lien parentale, la protection est plus faible qu'une famille installée depuis 10 ans. **L'ancienneté des liens compte autant que leur nature.**

### La loi immigration 2024 : ce qui a changé

La loi du 26 janvier 2024 a introduit plusieurs durcissements :
- Suppression de certaines protections pour les personnes ayant commis des infractions à partir d'une liste élargie
- Réduction du délai de départ volontaire à 15 jours dans de nombreux cas
- Élargissement des cas où le juge administratif statue en 96 heures (procédure d'urgence)

> Ces changements ont été partiellement censurés par le Conseil Constitutionnel, mais plusieurs dispositions sont restées.`,
    },
    {
      id: 'que-faire-oqtf-avec-enfants',
      title: 'Vous avez reçu une OQTF avec des enfants : que faire concrètement',
      content: `Recevoir une OQTF quand on a des enfants en France est une situation de crise. Voici le protocole d'urgence.

### Étape 1 : Ne pas paniquer et ne pas partir

Une OQTF n'est pas une expulsion immédiate. Vous avez le droit de rester en France pendant le délai de recours (**30 jours** dans la plupart des cas, parfois 15 jours pour les OQTF sans délai de départ). Partir avant d'avoir épuisé vos recours serait une erreur.

### Étape 2 : Contacter un avocat ou une association dans les 48 heures

Le délai est court. Contactez immédiatement :
- **La Cimade** : permanences juridiques gratuites dans toute la France
- **France Terre d'Asile** : aide aux familles en situation précaire
- **Le GISTI** : spécialisé droit des étrangers
- Un **avocat spécialisé en droit des étrangers** (l'aide juridictionnelle est accessible)

### Étape 3 : Rassemblez les preuves de vos liens familiaux

Dans les 48 heures suivant la réception de l'OQTF, rassemblez :
- Actes de naissance des enfants + preuves de nationalité française (si applicable)
- Certificats de scolarité (avec mention de l'ancienneté)
- Preuves de contribution à l'entretien des enfants (dépenses, relevés bancaires)
- Photos, témoignages, lettres d'enseignants sur la relation parent-enfant
- Tout document prouvant votre ancienneté en France

### Étape 4 : Déposer un recours devant le tribunal administratif

Votre avocat ou l'association déposera un **recours pour excès de pouvoir** contre l'OQTF. Le juge suspend l'exécution de la mesure le temps de l'examen. Taux d'annulation pour les parents d'enfants français : **supérieur à 60 %** selon les données 2024 du Conseil d'État.

### Étape 5 : Demander un titre de séjour "vie privée et familiale"

Simultanément au recours, demandez un titre de séjour sur le fondement de vos liens familiaux (article L. 423-23 du CESEDA). Si le tribunal administratif annule l'OQTF, vous serez dans une meilleure position pour obtenir ce titre.`,
    },
    {
      id: 'jurisprudence-cas-concrets',
      title: 'Jurisprudence réelle : 3 décisions qui illustrent la réalité',
      content: `Voici trois types de décisions réelles pour comprendre comment les juges raisonnent.

### Décision type 1 : OQTF annulée — père d'un enfant français de 4 ans

**Faits :** M. A., ressortissant malien, sans titre de séjour depuis 3 ans, père d'un enfant français de 4 ans. Il vit avec la mère (française) et contribue quotidiennement à l'éducation de l'enfant. OQTF reçue après un contrôle de routine.

**Décision du tribunal administratif :** OQTF annulée. *"La mesure porte une atteinte disproportionnée au droit de M. A. à mener une vie familiale normale, garanti par l'article 8 de la CEDH. L'intérêt de l'enfant commande qu'il soit élevé par ses deux parents en France."*

---

### Décision type 2 : OQTF maintenue — enfant scolarisé mais liens parentaux non établis

**Faits :** Mme B., ressortissante camerounaise, a un enfant de 7 ans scolarisé en France. Mais elle ne vit pas avec l'enfant (séparée du père français, l'enfant vit chez le père). Elle verse une pension alimentaire irrégulière.

**Décision :** OQTF maintenue. *"Bien que l'enfant soit scolarisé en France, Mme B. ne justifie pas d'une contribution effective et régulière à son entretien ni d'une cohabitation permettant de caractériser une vie familiale au sens de l'article 8 CEDH."*

---

### Décision type 3 : OQTF annulée — famille de 3 enfants dont 2 français

**Faits :** M. et Mme C., tous deux en situation irrégulière, 3 enfants dont les deux aînés nés en France et scolarisés depuis 6 ans, le cadet français par double droit du sol.

**Décision :** OQTF annulée pour les deux parents. *"Le déracinement de trois enfants mineurs, dont l'un est de nationalité française, qui n'ont pas connu d'autre pays que la France et y ont développé des liens sociaux solides, constituerait une atteinte grave à leur droit à une vie familiale stable."*

---

Ces décisions illustrent un principe constant : **plus les liens sont anciens, réels et documentés, plus la protection est forte.**`,
    },
  ],
  conclusion: `La présence d'enfants en France ne rend pas une OQTF automatiquement caduque — mais elle constitue un argument juridique majeur que les juges administratifs prennent très au sérieux. La clé est la **réalité et la documentation de votre vie familiale** : preuves de cohabitation, contributions à l'éducation, ancienneté de la scolarisation. Si vous recevez une OQTF et que vous avez des enfants en France, ne partez pas sans avoir consulté un avocat ou une association. Le taux d'annulation des OQTF visant des parents d'enfants français reste significativement élevé — votre dossier mérite d'être défendu.`,
  faq: [
    {
      question: 'Mon enfant a 2 ans et est né en France — suis-je protégé de l\'expulsion ?',
      answer: 'Pas automatiquement. Si vous exercez réellement votre rôle parental (vous vivez avec l\'enfant, vous contribuez à son éducation), vous bénéficiez d\'une protection forte au titre de l\'article 8 CEDH. Mais la protection dépend des circonstances concrètes — un avocat doit examiner votre dossier.',
    },
    {
      question: 'L\'OQTF est-elle automatiquement suspendue quand je fais un recours ?',
      answer: 'Non, pas automatiquement. Mais le dépôt d\'un recours devant le tribunal administratif crée un délai pendant lequel vous ne pouvez généralement pas être éloigné de force. Votre avocat peut également demander un "référé-suspension" pour bloquer l\'exécution le temps du jugement.',
    },
    {
      question: 'Mes enfants peuvent-ils être expulsés avec moi ?',
      answer: 'Si vos enfants sont français, ils ne peuvent pas être expulsés. Si vos enfants sont étrangers comme vous, ils peuvent théoriquement faire l\'objet d\'une mesure d\'éloignement — mais en pratique, expulser des enfants scolarisés suscite une opposition très forte, y compris judiciaire.',
    },
    {
      question: 'Mon enfant est scolarisé en France depuis 5 ans mais n\'est pas français — est-ce que ça compte ?',
      answer: 'Oui, significativement. Cinq ans de scolarisation créent des liens forts avec le territoire que les juges prennent en compte. Ce n\'est pas une protection absolue, mais combiné à d\'autres éléments (ancienneté de résidence, intégration des parents), c\'est un argument sérieux.',
    },
  ],
  sources: [
    {
      title: 'Article 8 de la Convention Européenne des Droits de l\'Homme',
      url: 'https://www.echr.coe.int/documents/convention_fra.pdf',
      type: 'legal',
      description: 'Droit au respect de la vie privée et familiale, fondement des recours contre les OQTF',
    },
    {
      title: 'CESEDA article L. 631-3 — Protections contre l\'expulsion',
      url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042776939',
      type: 'legal',
      description: 'Liste des catégories d\'étrangers protégés contre l\'expulsion forcée',
    },
    {
      title: 'Conseil d\'État — Jurisprudence OQTF et vie familiale',
      url: 'https://www.conseil-etat.fr',
      type: 'official',
      description: 'Jurisprudence de référence sur le contrôle de proportionnalité des OQTF',
    },
    {
      title: 'La Cimade — Permanences juridiques',
      url: 'https://www.lacimade.org/agir/permanences-juridiques',
      type: 'official',
      description: 'Trouver une permanence juridique gratuite près de chez vous',
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLE 4 : Prime de retour volontaire 2026
// ─────────────────────────────────────────────────────────────────────────────
export const primeRetourVolontaireFranceContent: ArticleFullContent = {
  slug: 'prime-retour-volontaire-france-2026-conditions-demarches',
  introduction: `La France propose une aide financière pour les étrangers qui souhaitent rentrer dans leur pays d'origine — et la plupart des gens qui pourraient en bénéficier ne le savent pas. Cette aide s'appelle l'**Aide au Retour Volontaire (ARV)**. Elle peut aller jusqu'à **2 500 € par adulte** (plus des montants supplémentaires pour les enfants). Elle n'est pas réservée aux sans-papiers : elle est aussi accessible aux personnes en situation régulière qui souhaitent retourner s'installer dans leur pays. Ce guide explique exactement qui peut en bénéficier, combien on reçoit vraiment, comment faire la demande — et surtout les conséquences à long terme sur vos droits en France, que beaucoup de gens découvrent trop tard.`,
  keywords: [
    'prime retour volontaire France 2026',
    'aide au retour volontaire ARV France',
    'aide retour pays étranger France',
    'OFII aide retour volontaire montant',
    'retour volontaire sans papiers France 2026',
    'aide financière retour pays France',
    'combien prime retour volontaire France',
    'conditions aide retour OFII',
    'demande aide retour volontaire France',
    'conséquences retour volontaire titre séjour',
    'retour volontaire peut-on revenir France',
    'aide réinsertion pays d\'origine France',
    'aide retour volontaire famille enfants',
    'OFII programme retour humanitaire',
    'quitter France aide gouvernement 2026',
  ],
  sections: [
    {
      id: 'cest-quoi-arv',
      title: "C'est quoi exactement l'Aide au Retour Volontaire (ARV) ?",
      content: `L'Aide au Retour Volontaire (ARV) est un programme géré par l'**Office Français de l'Immigration et de l'Intégration (OFII)**. Il a été créé en 1984 et existe depuis plus de 40 ans. Ce n'est pas une expulsion déguisée — c'est une démarche volontaire et indemnisée pour aider les personnes qui souhaitent rentrer chez elles à financer ce retour.

### Pourquoi la France fait ça ?

L'État a plusieurs raisons :
1. **Humanitaire** : aider des personnes qui souhaitent rentrer mais n'ont pas les moyens du billet d'avion
2. **Budgétaire** : un retour volontaire coûte moins cher qu'une expulsion forcée (qui peut coûter 10 000 € par personne selon la Cour des comptes)
3. **Social** : permettre une réinsertion digne dans le pays d'origine plutôt qu'une expulsion traumatisante

### Les deux types d'aide

L'OFII propose deux types de programmes :

**1. L'Aide au Retour Humanitaire (ARH)**
- Pour les personnes en situation irrégulière ou en grande précarité
- Montant : jusqu'à **1 900 € pour un adulte seul**, plus des suppléments enfants

**2. L'Aide au Retour Volontaire (ARV)**
- Pour les personnes en situation régulière qui souhaitent retourner s'installer durablement
- Montant : jusqu'à **2 500 € pour un adulte**, plus des suppléments

> En pratique, dans les médias et dans les conversations, les deux programmes sont souvent appelés "prime de retour volontaire". Ce guide couvre les deux.`,
    },
    {
      id: 'conditions-eligibilite',
      title: 'Qui peut en bénéficier ? Les conditions exactes',
      content: `Les conditions varient selon le programme, mais voici les règles générales.

### Conditions communes aux deux programmes

1. **Être majeur** (ou mineur accompagné d'un adulte)
2. **Résider en France** au moment de la demande
3. **Ne pas avoir déjà bénéficié** de l'ARV dans les 3 dernières années (à l'ARH) ou 5 dernières années (à l'ARV réguliers)
4. **Être ressortissant d'un pays éligible** (liste positive — exclut certains pays de l'UE/EEE)
5. **Rentrer dans votre pays d'origine** (ou de dernière résidence habituelle)

### Conditions spécifiques à l'Aide au Retour Humanitaire (ARH)

- Être en **situation irrégulière** ou en grande précarité (hébergement d'urgence, etc.)
- Demandeur d'asile débouté
- Bénéficiaire de la protection temporaire qui souhaite rentrer

**Pays éligibles à l'ARH (liste principale) :** Algérie, Maroc, Tunisie, Sénégal, Mali, Côte d'Ivoire, Cameroun, Congo, RDC, Guinée, Burkina Faso, Togo, Bénin, Mauritanie, ainsi que de nombreux pays d'Asie (Arménie, Géorgie, Albanie, Kosovo, etc.)

### Conditions spécifiques à l'ARV "réguliers"

- Posséder un **titre de séjour en cours de validité** (carte de séjour, carte de résident)
- Être en **situation de chômage longue durée** ou en grande précarité malgré la régularité
- Ou souhaiter retourner s'installer définitivement dans le pays d'origine

### Qui est exclu ?

- Les citoyens de l'Union Européenne et de l'Espace Économique Européen
- Les personnes ayant déjà bénéficié de l'aide dans les délais d'exclusion
- Les personnes sous le coup d'une procédure pénale en France
- Certaines nationalités selon les accords bilatéraux en vigueur`,
    },
    {
      id: 'montants-2026',
      title: 'Combien exactement ? Les montants 2026',
      content: `Voici les montants officiels en vigueur en 2026, tels que communiqués par l'OFII.

### Aide au Retour Humanitaire (ARH) — personnes en situation irrégulière

| Situation | Montant |
|---|---|
| Adulte seul | **700 €** |
| Couple | **1 400 €** |
| Adulte avec 1 enfant | **700 € + 200 € = 900 €** |
| Adulte avec 2 enfants | **700 € + 400 € = 1 100 €** |
| Par enfant supplémentaire | **+ 200 €** |

> L'ARH "simple" est donc inférieure aux 2 500 € souvent cités. Les montants plus élevés s'appliquent au programme ARV pour les résidents réguliers.

### Aide au Retour Volontaire (ARV) — résidents réguliers en difficulté

| Situation | Montant |
|---|---|
| Adulte seul | **Jusqu'à 2 500 €** |
| Par enfant accompagnant | **+ 500 €** |
| Aide à la réinsertion professionnelle | **Jusqu'à 7 000 €** supplémentaires (selon le pays) |

### L'aide à la réinsertion : le vrai bonus méconnu

En plus de l'aide financière directe, certains pays ont conclu des accords avec l'OFII pour une **aide à la réinsertion professionnelle** : formation, achat de matériel, création d'activité. Ces aides peuvent atteindre **7 000 à 10 000 €** supplémentaires selon les pays et les projets.

Pays avec accords de réinsertion actifs en 2026 : Sénégal, Mali, Bénin, Togo, Arménie, Géorgie, Kosovo, Albanie.

### Ce qui est inclus en dehors de l'argent

- **Billet d'avion** pris en charge directement par l'OFII (aller simple)
- **Transport vers l'aéroport** si nécessaire
- **Accompagnement administratif** dans le pays d'origine (via les partenaires locaux de l'OFII)`,
    },
    {
      id: 'comment-faire-demande',
      title: 'Comment faire la demande : les étapes concrètes',
      content: `### Étape 1 : Contacter l'OFII

La démarche commence toujours par une prise de contact avec l'OFII (Office Français de l'Immigration et de l'Intégration).

**Comment les contacter :**
- **Téléphone** : 0 806 000 104 (numéro non surtaxé)
- **Email** : via le formulaire sur ofii.fr
- **En personne** : l'OFII dispose d'antennes dans toutes les grandes villes (Paris, Lyon, Marseille, Bordeaux, Lille, Toulouse, Strasbourg, Nantes...)

### Étape 2 : L'entretien d'information

Un agent OFII vous reçoit en entretien confidentiel pour :
- Vérifier votre éligibilité
- Vous informer sur les montants auxquels vous avez droit
- Vous expliquer les conséquences (notamment sur vos droits futurs — voir section suivante)
- Vous remettre un formulaire de demande

> **Cet entretien est confidentiel.** L'OFII ne peut pas utiliser les informations que vous donnez pour initier une procédure d'expulsion. C'est une garantie légale.

### Étape 3 : Constitution du dossier

Documents à fournir :
- Pièce d'identité ou passeport
- Titre de séjour (si vous en avez un)
- Justificatif de domicile en France
- Actes de naissance des enfants accompagnants
- Eventuellement : justificatifs de ressources (pour l'ARV réguliers)

### Étape 4 : La décision et l'organisation du départ

L'OFII traite les dossiers en **2 à 4 semaines**. Une fois le dossier accepté :
1. L'OFII achète votre billet d'avion
2. Vous recevez la moitié de l'aide financière **avant le départ** (en France)
3. La seconde moitié est versée **à l'arrivée** dans le pays d'origine, via un partenaire local de l'OFII

> La date de départ est fixée d'un commun accord — vous gardez la maîtrise du calendrier dans des limites raisonnables.`,
    },
    {
      id: 'consequences-droits-futurs',
      title: "Ce qu'on perd en partant : les conséquences sur vos droits futurs",
      content: `C'est la partie la plus importante et la moins bien communiquée. **Avant de prendre une décision, lisez attentivement cette section.**

### Conséquence 1 : La perte du titre de séjour

En partant dans le cadre de l'ARV, vous **remettez votre titre de séjour** à l'OFII. Il est annulé. Vous ne pouvez plus revenir en France avec ce titre.

### Conséquence 2 : Le délai de réadmission

Si vous avez bénéficié de l'ARH (situation irrégulière), il existe généralement une **interdiction de retour en France implicite** — dans les faits, si vous revenez en France trop rapidement, votre demande de visa sera refusée et votre demande de titre de séjour sera compliquée.

Pour l'ARV réguliers, il n'y a pas d'interdiction formelle de retour, mais :
- Vous devez attendre **3 à 5 ans** avant de pouvoir redemander une aide au retour
- Une nouvelle demande de visa pour la France sera examinée normalement — mais vos années d'intégration en France ne comptent plus comme "durée de résidence"

### Conséquence 3 : La perte des droits sociaux accumulés

En partant, vous perdez :
- Vos droits à la **retraite française** pour les années cotisées (sauf si une convention bilatérale existe entre la France et votre pays — vérifiez avant de partir)
- Votre affiliation à l'**Assurance Maladie** (CPAM)
- Vos droits en cours à la **CAF** (APL, allocations familiales)
- L'ancienneté que vous aviez accumulée pour une future naturalisation

### Conséquence 4 : L'impact sur vos enfants

Si vos enfants sont **français**, ils peuvent rester en France ou partir avec vous — c'est votre choix. Si vous partez avec un enfant français, vous devrez lui faire établir un passeport français avant le départ et gérer sa scolarisation dans le pays d'origine.

Si vos enfants sont étrangers comme vous, ils partent avec vous. À leur retour futur en France (pour des études, par exemple), leurs années de scolarisation française seront un atout — mais pas un droit acquis.

### Questions à se poser avant de décider

- Avez-vous des enfants français dont la présence en France vous protégerait en cas de recours OQTF ?
- Avez-vous des droits à la retraite française que vous perdriez ?
- Existe-t-il une voie de régularisation que vous n'avez pas explorée ?
- Votre situation en France est-elle vraiment sans issue, ou est-ce un moment de découragement passager ?`,
    },
    {
      id: 'pieges-a-eviter',
      title: 'Les 5 pièges à éviter',
      content: `### Piège 1 : Confondre l'ARV avec une expulsion

L'ARV est **strictement volontaire**. Aucun agent de l'État ne peut vous forcer à signer une demande ARV. Si quelqu'un (préfecture, police, centre de rétention) vous dit que vous "devez" signer pour l'ARV, c'est faux ou trompeur. Refusez et demandez à parler à un avocat ou une association.

### Piège 2 : Partir sans vérifier ses droits à la retraite

Des dizaines de personnes sont parties avec une prime de retour volontaire sans savoir qu'elles avaient accumulé des droits à retraite en France. Avant de partir, contactez votre **caisse de retraite (CNAV ou MSA)** pour connaître vos droits et les conventions bilatérales applicables.

### Piège 3 : Partir en pensant pouvoir revenir facilement

Certains pensent à tort que l'ARV est une "pause" — qu'ils pourront revenir en France facilement après quelques années. Dans les faits, revenir légalement après une ARV nécessite de reprendre toutes les démarches depuis zéro. Si vous avez des enfants en France, des liens familiaux ou un projet professionnel solide, partez avec un plan précis de retour.

### Piège 4 : Ne pas utiliser l'aide à la réinsertion

L'aide à la réinsertion professionnelle (jusqu'à 7 000 €) est sous-utilisée. Beaucoup de bénéficiaires prennent l'argent et partent sans projet. C'est dommage : un projet professionnel préparé en amont (formation, matériel, local commercial) maximise les chances de réussite dans le pays d'origine.

### Piège 5 : Prendre la décision seul sous pression

Recevoir une OQTF ou vivre dans la peur constante d'une expulsion crée une pression psychologique intense. Beaucoup de personnes demandent l'ARV dans un moment de découragement, sans avoir vérifié si elles avaient des recours juridiques. **Avant de signer quoi que ce soit, parlez à une association ou un avocat** — au moins pour être sûr de votre décision.`,
    },
  ],
  conclusion: `L'Aide au Retour Volontaire est un outil qui peut être précieux pour les personnes qui ont pris la décision réfléchie de rentrer dans leur pays d'origine — avec un projet, une famille qui les attend, et la conviction que c'est le bon moment. Elle est beaucoup moins adaptée à ceux qui sont dans un moment de détresse et cherchent une sortie rapide. Les conséquences à long terme — perte du titre de séjour, des droits sociaux accumulés, de l'ancienneté pour une naturalisation — sont réelles et durables. Si vous envisagez l'ARV, prenez le temps de consulter une association spécialisée pour explorer toutes vos options avant de vous décider. Et si vous décidez de partir, utilisez pleinement l'aide à la réinsertion pour vous donner les meilleures chances dans votre pays d'origine.`,
  faq: [
    {
      question: 'Peut-on revenir en France après avoir pris la prime de retour volontaire ?',
      answer: 'Oui, mais pas facilement. Il faut reprendre toutes les démarches de visa depuis le début, depuis votre pays d\'origine. Votre ancienneté en France et votre titre de séjour précédent ne comptent plus. Il n\'existe pas d\'interdiction légale formelle de retour pour l\'ARV (contrairement à une expulsion), mais en pratique, obtenir un nouveau visa est difficile.',
    },
    {
      question: 'La prime de retour volontaire est-elle imposable ?',
      answer: 'Non. L\'Aide au Retour Volontaire est exonérée d\'impôt sur le revenu. Elle ne génère aucune obligation déclarative fiscale.',
    },
    {
      question: 'Peut-on demander l\'ARV si on est en cours de procédure de naturalisation ?',
      answer: 'Techniquement oui, mais ce serait contraire à votre intérêt. Une demande de naturalisation en cours est abandonnée dès lors que vous quittez le territoire et remettez votre titre de séjour. Si vous avez un dossier de naturalisation solide, il serait dommage de l\'abandonner pour une prime de 2 500 €.',
    },
    {
      question: 'Peut-on recevoir la prime et rester en France quelques semaines pour organiser son départ ?',
      answer: 'Oui. L\'OFII fixe une date de départ d\'un commun accord avec vous. Il y a généralement une période de 2 à 6 semaines pour s\'organiser entre la décision et le départ. Vous pouvez continuer à résider légalement en France pendant cette période.',
    },
    {
      question: 'L\'OFII peut-il dénoncer ma situation à la préfecture si je viens me renseigner et décide de ne pas partir ?',
      answer: 'Non. L\'entretien d\'information avec l\'OFII est confidentiel. Si vous venez vous renseigner et décidez finalement de ne pas partir, l\'OFII ne peut pas utiliser ces informations pour initier une procédure contre vous. C\'est une garantie légale importante.',
    },
  ],
  sources: [
    {
      title: 'OFII — Programme d\'aide au retour',
      url: 'https://www.ofii.fr/vos-droits-vos-demarches/retour-dans-votre-pays',
      type: 'official',
      description: 'Programme officiel de l\'OFII pour l\'aide au retour volontaire',
    },
    {
      title: 'Service-public.fr — Aide au retour dans le pays d\'origine',
      url: 'https://www.service-public.fr/particuliers/vosdroits/F15773',
      type: 'official',
      description: 'Fiche officielle sur les conditions et montants de l\'aide au retour',
    },
    {
      title: 'GISTI — Note sur les aides au retour',
      url: 'https://www.gisti.org',
      type: 'article',
      description: 'Analyse critique et juridique des programmes d\'aide au retour',
    },
  ],
};
