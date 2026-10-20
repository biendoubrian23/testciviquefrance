import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-passeport-impots-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/declaration-impots-non-resident-france-2026-formulaire-2042-nr-revenus-source-francaise`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "declaration-impots-non-resident-france-2026-formulaire-2042-nr-revenus-source-francaise",
  titre: "Déclaration impôts non-résident 2026 : formulaire 2042-NR, taux moyen vs 20 %, conventions fiscales",
  titreSeo: "Déclaration impôts non-résident 2026 : formulaire 2042-NR, taux moyen vs 20 %, conventions fiscales",
  resume: "Vous êtes non-résident fiscal avec des revenus français (loyers, salaires, dividendes) ? Procédure 2042-NR pas à pas pour 2026, comment choisir entre taux moyen et taux minimum 20 % (économie possible 1 200 €/an), 125+ conventions fiscales.",
  chapo: "Vous êtes **non-résident fiscal français** mais vous percevez des revenus de source française (loyers, salaires, dividendes, plus-values immobilières) ? Vous devez déclarer ces revenus en France via le **formulaire 2042-NR** chaque année, **avant le 23 mai 2026** (déclaration en ligne).",
  publieLe: "2026-04-28",
  modifieLe: "2026-04-28",
  minutes: 18,
  theme: "declaration impots non resident",
  motsCles: [
    "declaration impots non resident",
    "formulaire 2042-nr",
    "non resident fiscal france",
    "taux moyen non resident",
    "revenus source francaise",
    "convention fiscale internationale",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1554224154-26032ffc0d07",
  },
  blocs: [
    {
      type: "p",
      texte: "Ce guide explique exactement **quels revenus déclarer**, **comment remplir le 2042-NR**, **quels taux d'imposition s'appliquent** (taux moyen ou minimum 20%) et comment optimiser légalement votre fiscalité de non-résident en 2026.",
    },
    {
      type: "h2",
      texte: "Qui est considéré comme non-résident fiscal en 2026 ?",
      id: "qui-est-non-resident",
    },
    {
      type: "p",
      texte: "**Vous êtes non-résident fiscal français si vous remplissez l'une de ces conditions :**",
    },
    {
      type: "p",
      texte: "❌ Votre **foyer fiscal n'est PAS en France** (lieu de résidence habituel de la famille)",
    },
    { type: "p", texte: "❌ Vous **ne séjournez PAS plus de 183 jours/an** en France" },
    { type: "p", texte: "❌ Votre **activité professionnelle principale n'est PAS en France**" },
    { type: "p", texte: "❌ Le **centre de vos intérêts économiques n'est PAS en France**" },
    { type: "p", texte: "**Exemples concrets de non-résidents :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Expatriés français installés à l'étranger",
        "Étrangers vivant et travaillant à l'étranger mais possédant un bien immobilier en France",
        "Frontaliers : régime spécifique (Suisse, Luxembourg, Belgique, Allemagne, Italie, Espagne)",
        "Retraités étrangers ne résidant pas en France",
      ],
    },
    {
      type: "p",
      texte: "**Si vous êtes étranger résidant en France >6 mois/an : vous êtes RÉSIDENT fiscal**, pas non-résident. Vous remplissez la déclaration classique (2042 + 2042-RICI).",
    },
    {
      type: "h2",
      texte: "Les revenus imposables en France pour un non-résident",
      id: "revenus-imposables",
    },
    { type: "p", texte: "**Doivent être déclarés en France :**" },
    { type: "p", texte: "**1. Revenus immobiliers de source française**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Loyers (vide ou meublé)",
        "Plus-values immobilières en cas de vente",
        "Taux : barème progressif **avec minimum 20%**",
      ],
    },
    { type: "p", texte: "**2. Salaires de source française**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Travail effectué en France",
        "Stock-options exercés en France",
        "Indemnités de fin de carrière",
        "Taux : retenue à la source à 0%, 12% ou 20%",
      ],
    },
    { type: "p", texte: "**3. Pensions et retraites de source française**" },
    {
      type: "liste",
      style: "puces",
      items: ["Pension du régime général, complémentaires", "Retenue à la source 0%, 12% ou 20%"],
    },
    { type: "p", texte: "**4. Dividendes et intérêts de source française**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Prélèvement forfaitaire libératoire de 12.8% + prélèvements sociaux 17.2% (selon convention fiscale)",
      ],
    },
    { type: "p", texte: "**5. Plus-values mobilières et financières**" },
    {
      type: "liste",
      style: "puces",
      items: ["Selon convention fiscale bilatérale"],
    },
    { type: "p", texte: "**Conventions fiscales internationales :**" },
    {
      type: "p",
      texte: "La France a signé **125+ conventions fiscales** pour éviter la double imposition. Vérifiez la convention France/votre pays sur **impots.gouv.fr/conventions-fiscales**.",
    },
    { type: "h2", texte: "Remplir le formulaire 2042-NR : étape par étape", id: "remplir-2042-nr" },
    { type: "p", texte: "**Plateforme :** **impots.gouv.fr** → \"Mon espace particulier\"" },
    { type: "p", texte: "**Calendrier 2026 :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Ouverture du service : **avril 2026**",
        "Date limite **non-résidents** : **23 mai 2026** (déclaration en ligne uniquement, partout dans le monde)",
        "Avis d'imposition : **août/septembre 2026**",
      ],
    },
    { type: "p", texte: "**Étape 1 : Connexion**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Espace particulier impots.gouv.fr (avec numéro fiscal)",
        "Si pas de numéro fiscal : demande à recevoir 2-3 mois avant la déclaration",
      ],
    },
    { type: "p", texte: "**Étape 2 : Compléter les pages 1-2 (état civil)**" },
    {
      type: "liste",
      style: "puces",
      items: ["Adresse à l'étranger", "Date de départ de France si concerné"],
    },
    { type: "p", texte: "**Étape 3 : Page 3 : revenus de source française**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Cases **1AJ à 1DJ** : salaires",
        "Case **1AS** : pensions",
        "Cases **2DC, 2TR** : dividendes / intérêts",
        "Cases **4BE, 4BL** : revenus fonciers (loyers)",
      ],
    },
    { type: "p", texte: "**Étape 4 : Page 4 : plus-values**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Plus-values immobilières (déclarées via formulaire 2048-IMM lors de la vente)",
        "Plus-values mobilières",
      ],
    },
    { type: "p", texte: "**Étape 5 : Choisir le régime d'imposition**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Taux moyen** : votre taux mondial appliqué aux revenus français (favorable si revenus mondiaux faibles)",
        "**Taux minimum 20%** : appliqué d'office si vous ne demandez pas le taux moyen",
      ],
    },
    { type: "p", texte: "**Étape 6 : Validation et signature**" },
    {
      type: "liste",
      style: "puces",
      items: ["Récapitulatif", "Validation électronique", "Conservation accusé de réception"],
    },
    { type: "h2", texte: "Taux moyen vs taux minimum 20% : comment choisir", id: "taux-imposition" },
    { type: "p", texte: "**Le taux minimum de 20% (ou 30% au-delà de 28 797 € en 2026) :**" },
    {
      type: "liste",
      style: "puces",
      items: ["Appliqué d'office si vous ne faites rien", "Simple mais souvent défavorable"],
    },
    { type: "p", texte: "**Le taux moyen :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous appliquez le taux **comme si vos revenus mondiaux étaient imposés en France**",
        "Calculé selon le barème progressif français",
        "Déclaration des revenus mondiaux nécessaire (cases prévues)",
        "Si votre taux moyen calculé est <20%, vous payez ce taux moyen",
      ],
    },
    { type: "p", texte: "**Exemple chiffré :**" },
    {
      type: "p",
      texte: "Vous percevez 30 000 €/an de loyers en France. Vos revenus mondiaux sont 60 000 €.",
    },
    {
      type: "tableau",
      entetes: ["Régime", "Calcul", "Impôt"],
      lignes: [
        ["Taux minimum 20%", "30 000 × 20%", "**6 000 €**"],
        ["Taux moyen", "Taux moyen ≈ 16%", "**4 800 €**"],
      ],
    },
    { type: "p", texte: "**Économie : 1 200 €/an** en optant pour le taux moyen." },
    {
      type: "p",
      texte: "**Astuce :** demander le taux moyen est **toujours rentable si vos revenus mondiaux sont modestes**. Faites le calcul chaque année.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Déclarer ses revenus en France quand on est non-résident est **obligatoire dès le premier euro** de source française. La date limite 2026 est le **23 mai en ligne**, et le formulaire 2042-NR est désormais 100% dématérialisé. La règle d'optimisation : **demandez systématiquement le taux moyen** plutôt que le taux minimum 20%, surtout si vos revenus mondiaux sont modestes. Vérifiez la convention fiscale France/votre pays pour éviter la double imposition. En cas de doute, le **Service des Impôts des Particuliers Non-Résidents (SIPNR)** au **+33 1 72 95 20 42** est gratuit et compétent.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quel est le seuil de déclaration pour un non-résident ?",
      reponse: "Aucun seuil : vous déclarez dès le premier euro de revenus de source française (loyers, salaires, dividendes).",
    },
    {
      question: "Que se passe-t-il si je ne déclare pas mes revenus français ?",
      reponse: "Sanctions : majoration de 10% à 80% (selon bonne foi/manquement), intérêts de retard 0.20%/mois, et possible procédure pour fraude fiscale.",
    },
    {
      question: "Comment éviter la double imposition ?",
      reponse: "Vérifiez la convention fiscale France/votre pays sur impots.gouv.fr. Selon le cas : exonération en France, crédit d'impôt, ou imposition partagée.",
    },
    {
      question: "Dois-je déclarer si je suis salarié à l'étranger d'une entreprise française ?",
      reponse: "Oui, les salaires versés par un employeur français pour un travail à l'étranger restent en partie imposables en France selon la convention.",
    },
  ],
};

export default article;
