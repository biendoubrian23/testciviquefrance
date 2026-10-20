import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-passeport-impots-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/passeport-talent-salarie-qualifie-2026-salaire-conditions-procedure`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "passeport-talent-salarie-qualifie-2026-salaire-conditions-procedure",
  titre: "Passeport Talent Salarié qualifié 2026 : salaire 2 707 € minimum, conditions et procédure complète",
  titreSeo: "Passeport Talent Salarié qualifié 2026 : salaire 2 707 € minimum, conditions et procédure complète",
  resume: "Les 3 conditions strictes du Passeport Talent salarié 2026 (Master, salaire ≥1.5 SMIC, contrat ≥3 mois), salaires réels par métier (3 200-12 000 €), procédure recrutement-arrivée, 6 pièges qui font refuser et 7 avantages massifs.",
  chapo: "Le **Passeport Talent : Salarié qualifié** est le titre de séjour de référence pour les cadres et ingénieurs étrangers recrutés par une entreprise française. Avec un **salaire minimum de 2 707 € brut/mois en 2026** et un titre **valable 4 ans renouvelables**, c'est la voie privilégiée pour les talents internationaux.",
  publieLe: "2026-04-28",
  modifieLe: "2026-04-28",
  minutes: 22,
  theme: "passeport talent salarié",
  motsCles: [
    "passeport talent salarié",
    "passeport talent salaire",
    "passeport talent qualifié",
    "visa salarié qualifié france",
    "salaire passeport talent 2026",
    "passeport talent 1.5 smic",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
  },
  blocs: [
    {
      type: "p",
      texte: "Voici toutes les **conditions, salaires exacts, démarches et pièges** du Passeport Talent salarié qualifié 2026, dans la version la plus pratique du web.",
    },
    {
      type: "h2",
      texte: "Les 3 conditions strictes du Passeport Talent Salarié 2026",
      id: "conditions-2026",
    },
    { type: "p", texte: "**Condition 1 : Diplôme**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Master (Bac+5) minimum**",
        "ou diplôme équivalent",
        "ou **5 ans d'expérience professionnelle** au niveau comparable (sans Master)",
      ],
    },
    { type: "p", texte: "**Condition 2 : Salaire**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**1.5 SMIC brut mensuel** = **2 707 € brut / mois en 2026**",
        "Soit **32 484 € brut/an minimum**",
        "Le salaire doit être stipulé dans le **contrat de travail** signé avant la demande",
      ],
    },
    { type: "p", texte: "**Condition 3 : Contrat**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**CDI** ou **CDD ≥ 3 mois**",
        "Avec une **entreprise établie en France** (peu importe la taille)",
        "L'employeur dépose une **demande d'autorisation de travail** sur ANEF (côté employeur)",
      ],
    },
    {
      type: "p",
      texte: "**Pas de quota, pas de profession spécifique :** tous les métiers qualifiés sont éligibles si les 3 conditions sont remplies.",
    },
    { type: "h2", texte: "Salaires Passeport Talent Salarié par métier en 2026", id: "salaire-detail" },
    {
      type: "p",
      texte: "Le seuil de **2 707 € brut/mois** est un minimum. Voici les fourchettes réelles 2026 :",
    },
    {
      type: "tableau",
      entetes: ["Métier", "Salaire moyen Passeport Talent"],
      lignes: [
        ["Développeur logiciel", "**3 200 à 5 500 €**"],
        ["Data Scientist / IA", "**4 000 à 7 000 €**"],
        ["Ingénieur cybersécurité", "**3 800 à 6 500 €**"],
        ["Chef de projet IT", "**3 500 à 6 000 €**"],
        ["Consultant senior", "**4 500 à 8 000 €**"],
        ["Médecin spécialiste", "**5 500 à 12 000 €**"],
        ["Architecte", "**3 200 à 5 500 €**"],
        ["Cadre commercial international", "**3 500 à 7 000 €**"],
        ["Designer UX/UI senior", "**3 200 à 5 500 €**"],
        ["Pilote de ligne", "**6 000 à 12 000 €**"],
      ],
    },
    {
      type: "p",
      texte: "**Régions à plus haut salaire :** Paris/Île-de-France (+15-25%), Lyon, Toulouse, Sophia-Antipolis.",
    },
    { type: "h2", texte: "Procédure complète : 5 étapes du recrutement à l'arrivée", id: "procedure" },
    { type: "p", texte: "**Étape 1 : Décrocher l'offre**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Sites recommandés : **Welcome to the Jungle**, **LinkedIn**, **Indeed**, **APEC**, **Choose Paris Region**",
        "Spécialisez votre CV pour le marché français (1-2 pages, pas de photo obligatoire)",
      ],
    },
    { type: "p", texte: "**Étape 2 : Signature du contrat**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le contrat doit mentionner **explicitement Passeport Talent Salarié qualifié**",
        "Salaire ≥ **2 707 €/mois brut**",
        "L'employeur dépose la demande sur ANEF (côté employeur) : délai 2 mois",
      ],
    },
    { type: "p", texte: "**Étape 3 : Demande de visa au consulat**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**VLS-TS Passeport Talent salarié** (long séjour valant titre)",
        "Documents : contrat, autorisation de travail, diplôme, passeport, CV",
        "Coût : **99 €** (frais consulaires)",
        "Délai : 15 à 60 jours",
      ],
    },
    { type: "p", texte: "**Étape 4 : Arrivée en France et validation**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Validation VLS-TS sur **ANEF** dans **3 mois** après arrivée",
        "Timbre fiscal **200 €**",
        "Visite médicale OFII (obligatoire)",
        "Pas d'entretien CIR (dispense automatique pour Passeport Talent)",
      ],
    },
    { type: "p", texte: "**Étape 5 : Carte 4 ans**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous obtenez ensuite une carte **Passeport Talent Salarié valable 4 ans**",
        "Renouvelable indéfiniment si conditions maintenues",
      ],
    },
    { type: "h2", texte: "Les 7 avantages massifs du Passeport Talent Salarié", id: "avantages" },
    {
      type: "p",
      texte: "**1. Titre de 4 ans dès le départ** (vs 1 an renouvelable pour un salarié classique)",
    },
    {
      type: "p",
      texte: "**2. Famille incluse, Passeport Talent Famille** (conjoint + enfants), travail autorisé pour le conjoint",
    },
    {
      type: "p",
      texte: "**3. Pas de regroupement familial classique** (procédure 12-18 mois supprimée)",
    },
    { type: "p", texte: "**4. Mobilité européenne facilitée** (carte bleue européenne possible)" },
    { type: "p", texte: "**5. Naturalisation accélérée à 2 ans** si Master français + résidence" },
    { type: "p", texte: "**6. Dispense entretien CIR** (vous gagnez 4 mois)" },
    { type: "p", texte: "**7. Possibilité de carte de résident 10 ans après 3-4 ans**" },
    {
      type: "h2",
      texte: "Les 6 pièges qui font refuser un Passeport Talent en 2026",
      id: "pieges-eviter",
    },
    { type: "p", texte: "**1. Salaire annoncé hors prime / variable**" },
    {
      type: "p",
      texte: "→ Le salaire **fixe brut** doit atteindre 2 707 €/mois sans compter les primes variables.",
    },
    { type: "p", texte: "**2. Contrat CDD <3 mois**" },
    { type: "p", texte: "→ Refus systématique. Exigez un CDD ≥3 mois ou un CDI." },
    { type: "p", texte: "**3. Diplôme étranger non reconnu**" },
    {
      type: "p",
      texte: "→ Faites valider votre diplôme par **ENIC-NARIC** (gratuit, 4 mois) avant la demande.",
    },
    { type: "p", texte: "**4. Entreprise en redressement judiciaire**" },
    { type: "p", texte: "→ Refus. Vérifiez la santé financière de l'employeur sur **societe.com**." },
    { type: "p", texte: "**5. Profession non qualifiée**" },
    {
      type: "p",
      texte: "→ Le poste doit être de niveau **cadre / technicien supérieur**. Un poste d'opérateur ne passe pas.",
    },
    { type: "p", texte: "**6. Mauvaise rédaction de la demande employeur**" },
    {
      type: "p",
      texte: "→ Le formulaire ANEF côté employeur doit être complet : description du poste, salaire détaillé, organigramme. Préparez-le ensemble.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le Passeport Talent Salarié qualifié reste en 2026 la meilleure voie pour s'établir durablement en France quand on est cadre étranger : 4 ans, famille incluse, naturalisation accélérée. La clé : un salaire ≥ 2 707 €/mois brut, un contrat solide et un employeur sérieux. Préparez votre dossier rigoureusement (diplôme reconnu ENIC-NARIC, CV au format français), soignez la demande employeur et anticipez 4-6 mois entre la signature du contrat et votre arrivée effective en France.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quel est le salaire minimum exact en 2026 pour un Passeport Talent salarié ?",
      reponse: "2 707 € brut/mois (1.5 SMIC sur la base de 35h hebdomadaires). Ce seuil est mis à jour chaque année avec le SMIC.",
    },
    {
      question: "Le Passeport Talent salarié peut-il être obtenu sans Master ?",
      reponse: "Oui, avec 5 ans d'expérience professionnelle dans un poste qualifié comparable. Mais c'est plus rare et le dossier doit être très solide.",
    },
    {
      question: "Combien de temps prend la procédure complète ?",
      reponse: "4 à 6 mois entre la signature du contrat et l'arrivée en France (2 mois employeur ANEF + 1-2 mois visa + voyage).",
    },
    {
      question: "Mon employeur peut-il refuser de faire la démarche Passeport Talent ?",
      reponse: "Oui, c'est l'employeur qui initie la procédure. Si refus, vous pouvez tenter le statut \"salarié classique\" (autorisation de travail + 1 an renouvelable).",
    },
  ],
};

export default article;
