import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-passeport-impots-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/passeport-talent-salarie-qualifie-2026-salaire-conditions-procedure`).
 *
 * Corrigé et réécrit par le robot éditorial le 27/10/2026 (liste « à
 * revérifier » de `docs/seo/MOTS-CLES.md` : 4 100 citations Copilot sur trois
 * mois). La version migrée donnait un seuil faux (« 1,5 SMIC, 2 707 € brut
 * par mois ») là où service-public indique 39 582 € brut par an, acceptait un
 * master obtenu hors de France ou 5 ans d'expérience, chiffrait le timbre à
 * 200 € au lieu de 350 €, et affirmait sans source une autorisation de travail
 * demandée par l'employeur, des salaires par métier, une visite OFII, une
 * naturalisation « à 2 ans » et une carte de résident « après 3 ou 4 ans ».
 * Sources lues le 27/10/2026 : service-public F16922 (vérifiée le 01/06/2026)
 * et F39530.
 */
const article: Article = {
  slug: "passeport-talent-salarie-qualifie-2026-salaire-conditions-procedure",
  titre: "Passeport talent salarié qualifié : 39 582 € brut par an, un master obtenu en France, et les étapes de la demande",
  titreSeo: "Passeport talent salaire minimum : 39 582 € par an",
  resume: "Carte talent salarié qualifié : le salaire minimum officiel (39 582 € brut par an), le diplôme exigé, la durée, le prix de 350 € et la démarche.",
  chapo: "La carte talent « salarié qualifié » (l'ancien passeport talent) demande deux choses. D'abord, un contrat de plus de 3 mois payé ==au moins 39 582 € brut par an==. Ensuite, un diplôme de niveau master ==obtenu en France==. La carte dure le temps du contrat, 4 ans au plus, et coûte 350 €. Voici les conditions exactes, la démarche, et les erreurs que corrige cette page.",
  publieLe: "2026-04-28",
  modifieLe: "2026-10-27",
  minutes: 6,
  theme: "passeport talent salarié",
  motsCles: [
    "passeport talent salarié qualifié",
    "passeport talent salaire minimum 2026",
    "carte talent salarié qualifié",
    "passeport talent salaire",
    "carte talent 39 582 euros",
    "passeport talent master obtenu en France",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/passeport-talent-salarie-qualifie.webp",
    alt: "Des tours de bureaux en verre bleu du quartier d'affaires de La Défense, près de Paris, sous un ciel nuageux",
    largeur: 1024,
    hauteur: 768,
    credit: "Ruben Holthuijsen, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/60057960@N06/10530772825",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Cet article a été corrigé le 27 octobre 2026",
      texte: "La version précédente indiquait un salaire minimum de « 2 707 € brut par mois (1,5 SMIC) », un master « obtenu n'importe où ou 5 ans d'expérience » et un timbre de 200 €. Ces chiffres sont faux. Selon [service-public](https://www.service-public.gouv.fr/particuliers/vosdroits/F16922), le seuil est de ==39 582 € brut par an==, le master doit être obtenu en France, et la carte coûte ==350 €==.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Qu'est-ce que la carte talent « salarié qualifié » ?",
    },
    {
      type: "p",
      texte: "C'est une **carte de séjour pluriannuelle**, c'est-à-dire un titre de séjour valable plusieurs années. Le titre de séjour, c'est le document qui autorise un étranger à vivre en France. Beaucoup l'appellent encore « passeport talent ». Service-public l'appelle aujourd'hui « carte talent » ([F16922](https://www.service-public.gouv.fr/particuliers/vosdroits/F16922)).",
    },
    {
      type: "p",
      texte: "La carte talent a plusieurs motifs : chercheur, création d'entreprise, profession artistique, carte bleue européenne… Le motif « salarié qualifié » vise les salariés diplômés d'un master en France. Notre [guide général du passeport talent](/articles/passeport-talent-2026-conditions-metiers-demarches) présente les autres motifs.",
    },
    {
      type: "h2",
      texte: "Quelles sont les conditions exactes ?",
    },
    {
      type: "p",
      texte: "Service-public, dans sa fiche vérifiée le 1er juin 2026, fixe trois conditions pour le salarié qualifié :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Un diplôme au moins équivalent au master, obtenu en France.** Un diplôme de niveau 1 labellisé par la Conférence des grandes écoles, délivré par un établissement habilité, est aussi accepté.",
        "**Un contrat de travail de plus de 3 mois.**",
        "**Un salaire brut annuel d'au moins 39 582 €**, soit environ 3 298 € brut par mois sur 12 mois.",
      ],
    },
    {
      type: "p",
      texte: "Le même seuil de 39 582 € vaut pour deux situations proches. La première : le salarié recruté par une **entreprise innovante** pour un projet de recherche. La seconde : le salarié **en mission** envoyé par son groupe, s'il y travaille depuis au moins 3 mois.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Un master obtenu hors de France ne suffit pas** pour ce motif. Regardez alors la carte bleue européenne : selon service-public, elle demande un contrat d'au moins 6 mois et ==59 373 € brut par an==.",
        "**Le salaire se lit sur l'année.** Un temps partiel ou un contrat court peut faire passer le salaire sous le seuil : faites le calcul avec votre employeur avant de signer.",
        "**Pour une profession réglementée** (santé, droit…), il faut aussi prouver que vous avez le droit de l'exercer. Notre article sur [la reconnaissance des diplômes étrangers](/articles/reconnaissance-diplomes-etrangers-france-2026-enic-naric-equivalences) explique les démarches.",
      ],
    },
    {
      type: "tableau",
      entetes: ["Motif de la carte talent", "Salaire brut annuel minimum", "Autre condition clé"],
      lignes: [
        ["Salarié qualifié", "39 582 €", "Master obtenu en France, contrat de plus de 3 mois"],
        ["Salarié d'une entreprise innovante", "39 582 €", "Poste lié au projet de recherche"],
        ["Salarié en mission (groupe)", "39 582 €", "3 mois d'ancienneté dans le groupe"],
        ["Carte bleue européenne", "59 373 €", "Contrat d'au moins 6 mois"],
      ],
      legende: "Seuils de la fiche service-public F16922, vérifiée le 1er juin 2026. Ils peuvent changer : vérifiez la fiche le jour de votre demande.",
    },
    {
      type: "h2",
      texte: "Combien de temps dure la carte, et combien coûte-t-elle ?",
    },
    {
      type: "p",
      texte: "La carte dure ==le temps du contrat de travail, 4 ans au plus==. Elle coûte **350 €** : 50 € de droit de timbre et 300 € de taxe, payés en timbres fiscaux. Le timbre fiscal, c'est un paiement en ligne que l'on achète pour régler une taxe à l'État. Notre article sur [les taxes des titres de séjour](/articles/hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances) détaille les autres montants.",
    },
    {
      type: "p",
      texte: "Bonne nouvelle pour l'employeur : il ==n'a pas à demander d'autorisation de travail==, et il ne paie pas la taxe due pour l'emploi d'un étranger (F16922). Un contrat signé et une attestation de l'employeur suffisent.",
    },
    {
      type: "h2",
      texte: "Comment faire la demande ?",
    },
    {
      type: "h3",
      texte: "Vous êtes à l'étranger",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Demandez un visa au consulat de France** de votre pays de résidence.",
        "**Pour un séjour de moins de 12 mois**, vous recevez un **VLS-TS** « talent ». C'est un visa de long séjour qui vaut titre de séjour. Faites-le valider en ligne ==dans les 3 mois== après votre arrivée. Notre article sur [la validation du VLS-TS](/articles/visa-long-sejour-vls-ts-validation-ofii-2026) explique cette étape.",
        "**Pour un séjour d'un an ou plus**, vous recevez un visa de 3 mois « talent ». Une fois en France, demandez la carte en ligne, sur l'**ANEF** : c'est le site du ministère de l'Intérieur pour les titres de séjour.",
      ],
    },
    {
      type: "h3",
      texte: "Vous êtes déjà en France",
    },
    {
      type: "p",
      texte: "Si vous avez un visa de long séjour, déposez la demande en ligne ==dans les 2 mois== après votre entrée. Si vous avez déjà un titre de séjour, par exemple une carte étudiant après votre master, déposez-la entre 4 mois et 2 mois avant sa fin. Pendant l'étude, l'[attestation de prolongation d'instruction](/articles/attestation-prolongation-instruction) peut prouver que votre séjour reste régulier.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "votre visa ou votre titre de séjour en cours de validité ;",
        "votre passeport ;",
        "un justificatif de domicile de moins de 6 mois ;",
        "une photo d'identité avec un code e-photo (un code donné par les photographes et cabines agréés) ;",
        "votre diplôme ;",
        "l'attestation de votre employeur (service-public en propose un modèle) ;",
        "l'engagement signé à respecter les principes de la République.",
      ],
    },
    {
      type: "h2",
      texte: "Et votre famille ?",
    },
    {
      type: "p",
      texte: "Votre conjoint et vos enfants mineurs peuvent obtenir une carte « talent-famille ». Ils passent par une procédure simple, dite « famille accompagnante », ==sans regroupement familial== (F16922). Notre article sur [la famille d'un titulaire du passeport talent](/articles/famille-passeport-talent-france-2026-conjoint-enfants-droits-titre) détaille leurs droits.",
    },
    {
      type: "h2",
      texte: "Et plus tard : carte de résident et examen civique",
    },
    {
      type: "p",
      texte: "Plus tard, vous voudrez peut-être une **carte de résident de longue durée-UE**. Service-public cite parmi les personnes concernées par l'**examen civique** les titulaires d'une carte talent depuis plus de 5 ans qui demandent cette carte pour la première fois ([F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)). C'est un test de 40 questions sur la France et ses valeurs. Vérifiez en une minute [si l'examen vous concerne](/eligibilite-examen-civique).",
    },
    {
      type: "p",
      texte: "Pour un cas personnel (refus, contrat atypique, changement d'employeur), adressez-vous à la préfecture par l'ANEF, à un avocat ou à une association d'aide aux étrangers.",
    },
  ],
  faq: [
    {
      question: "Quel est le salaire minimum pour un passeport talent salarié qualifié en 2026 ?",
      reponse: "Selon service-public, dans sa fiche vérifiée le 1er juin 2026, le salaire brut annuel doit être d'au moins 39 582 €, soit environ 3 298 € brut par mois sur 12 mois. Le même seuil vaut pour le salarié d'une entreprise innovante et le salarié en mission. La carte bleue européenne demande 59 373 € brut par an.",
    },
    {
      question: "Peut-on avoir le passeport talent salarié qualifié avec un master obtenu à l'étranger ?",
      reponse: "Non, pas pour ce motif. Service-public exige un diplôme au moins équivalent au master obtenu en France, ou un diplôme de niveau 1 labellisé par la Conférence des grandes écoles. Avec un diplôme étranger, d'autres motifs existent, comme la carte bleue européenne, avec un seuil de salaire plus élevé.",
    },
    {
      question: "Combien coûte la carte talent salarié qualifié ?",
      reponse: "Elle coûte 350 € : 50 € de droit de timbre et 300 € de taxe, payés en timbres fiscaux, selon la fiche service-public F16922. La carte est valable pour la durée du contrat de travail, dans la limite de 4 ans. L'employeur n'a pas d'autorisation de travail à demander.",
    },
    {
      question: "Quelle est la durée de validité du passeport talent salarié ?",
      reponse: "La carte est valable pour la durée du contrat de travail, dans la limite de 4 ans. Pour la renouveler, déposez la demande entre 4 mois et 2 mois avant la fin de la carte. Pour une première carte de résident de longue durée-UE après plus de 5 ans, l'examen civique est demandé.",
    },
  ],
  sources: [
    {
      titre: "Service-public : carte talent, carte de séjour pluriannuelle d'un étranger en France (F16922), vérifiée le 1er juin 2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16922",
      type: "officiel",
      luLe: "2026-10-27",
    },
    {
      titre: "Service-public : examen civique pour une carte de séjour ou de résident (F39530)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530",
      type: "officiel",
      luLe: "2026-10-27",
    },
  ],
};

export default article;
