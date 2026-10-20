import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/travailler-france-etranger-autorisation-droits`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "travailler-france-etranger-autorisation-droits",
  titre: "Travailler en France en tant qu'étranger : droits et démarches",
  titreSeo: "Travailler en France en tant qu'étranger : droits et démarches",
  resume: "Tout savoir sur le travail en France pour les étrangers : autorisation de travail, titre de séjour salarié, droits du travailleur étranger et démarches Pôle Emploi.",
  chapo: "Travailler en France offre de nombreuses opportunités mais implique de connaître ses droits et obligations. Contrat de travail, SMIC, congés, protection sociale : ce guide complet vous accompagne dans votre vie professionnelle en France.",
  publieLe: "2025-12-06",
  modifieLe: "2025-12-06",
  minutes: 18,
  theme: "travailler france",
  motsCles: [
    "travailler france",
    "contrat travail",
    "smic 2025",
    "droits salariés",
    "congés payés",
    "autorisation travail étranger",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
  },
  blocs: [
    { type: "h2", texte: "Le contrat de travail en France", id: "contrat-travail" },
    { type: "p", texte: "**Types de contrats**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**CDI (Contrat à Durée Indéterminée)** : contrat standard, sans limitation de durée",
        "**CDD (Contrat à Durée Déterminée)** : durée limitée, motif obligatoire",
        "**Intérim** : mission temporaire via une agence",
        "**Contrat d'apprentissage** : formation en alternance",
      ],
    },
    { type: "p", texte: "**Le CDI**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Contrat de référence en France",
        "Pas de date de fin prévue",
        "Période d'essai : 2 à 4 mois selon le poste",
        "Rupture : démission, licenciement ou rupture conventionnelle",
      ],
    },
    { type: "p", texte: "**Le CDD**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Durée maximale : 18 mois (renouvellements inclus)",
        "Motifs autorisés : remplacement, accroissement d'activité, saison",
        "Prime de précarité : 10% à la fin du contrat",
      ],
    },
    { type: "p", texte: "**Contenu obligatoire du contrat**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Identité des parties",
        "Date de début et durée (pour CDD)",
        "Poste occupé et qualification",
        "Lieu de travail",
        "Rémunération",
        "Durée du travail",
        "Convention collective applicable",
      ],
    },
    { type: "h2", texte: "Droits des salariés", id: "droits-salaries" },
    { type: "p", texte: "**Le salaire minimum (SMIC)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**SMIC 2025** : 11,88€ brut/heure (environ 1 801€ brut/mois)",
        "Revalorisé chaque année au 1er janvier",
        "Garanti pour tous les salariés majeurs",
        "Mineurs : abattement possible",
      ],
    },
    { type: "p", texte: "**La durée du travail**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Durée légale : **35 heures par semaine**",
        "Heures supplémentaires majorées (+25% puis +50%)",
        "Maximum : 48h/semaine, 10h/jour",
        "Repos obligatoire : 11h entre deux journées",
      ],
    },
    { type: "p", texte: "**Les congés payés**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**5 semaines** de congés payés par an",
        "2,5 jours ouvrables par mois travaillé",
        "Période principale : mai à octobre",
        "Indemnité de congés = maintien du salaire",
      ],
    },
    { type: "p", texte: "**Les jours fériés en France (11 jours)**" },
    {
      type: "p",
      texte: "1er janvier, Lundi de Pâques, 1er mai, 8 mai, Ascension, Lundi de Pentecôte, 14 juillet, 15 août, 1er novembre, 11 novembre, 25 décembre",
    },
    { type: "p", texte: "**Autres droits**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Congé maternité : 16 semaines minimum",
        "Congé paternité : 28 jours",
        "Congé maladie avec indemnités",
        "Formation professionnelle",
      ],
    },
    { type: "h2", texte: "Protection sociale et chômage", id: "protection-emploi" },
    { type: "p", texte: "**Cotisations sociales**" },
    { type: "p", texte: "Sur votre bulletin de paie, vous cotisez pour :" },
    {
      type: "liste",
      style: "puces",
      items: ["Assurance maladie", "Assurance retraite", "Assurance chômage", "Allocations familiales"],
    },
    { type: "p", texte: "**L'assurance chômage**" },
    { type: "p", texte: "Conditions pour toucher le chômage :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Avoir travaillé au moins 6 mois sur les 24 derniers mois",
        "Être inscrit à France Travail (ex-Pôle emploi)",
        "Être en recherche active d'emploi",
        "Ne pas avoir démissionné (sauf cas légitimes)",
      ],
    },
    { type: "p", texte: "**Montant de l'allocation**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Environ 57% du salaire brut antérieur",
        "Durée : selon la durée de cotisation (4 à 24 mois)",
      ],
    },
    { type: "p", texte: "**France Travail (ex-Pôle emploi)**" },
    { type: "p", texte: "Services proposés :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Inscription et indemnisation",
        "Accompagnement dans la recherche d'emploi",
        "Formations professionnelles",
        "Offres d'emploi",
      ],
    },
    { type: "h2", texte: "Travailler en France quand on est étranger", id: "etrangers-travail" },
    { type: "p", texte: "**Autorisation de travail**" },
    { type: "p", texte: "Selon votre titre de séjour, vous pouvez travailler :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Sans restriction** : carte de résident, passeport talent, carte \"vie privée et familiale\"",
        "**Avec limite horaire** : visa étudiant (964h/an)",
        "**Avec autorisation préalable** : certains titres temporaires",
      ],
    },
    { type: "p", texte: "**Demander une autorisation de travail**" },
    { type: "p", texte: "Si votre titre ne vous autorise pas à travailler :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Trouvez un employeur prêt à vous embaucher",
        "L'employeur dépose une demande d'autorisation",
        "La DRIEETS examine la demande (métier en tension, situation de l'emploi)",
        "Si accord, vous pouvez commencer à travailler",
      ],
    },
    { type: "p", texte: "**Métiers en tension**" },
    { type: "p", texte: "Certains métiers facilitent l'obtention d'une autorisation :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "BTP, restauration, aide à la personne",
        "Informatique, ingénierie",
        "Santé (aide-soignant, infirmier)",
        "Liste mise à jour régulièrement",
      ],
    },
    { type: "p", texte: "**Le test civique et le travail**" },
    { type: "p", texte: "Questions possibles :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "\"Quelle est la durée légale du travail en France ?\"",
        "\"Qu'est-ce que le SMIC ?\"",
        "\"Combien de semaines de congés payés par an ?\"",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Travailler en France offre des droits solides : SMIC, 35 heures, 5 semaines de congés. Ces connaissances sont utiles pour le test civique et votre vie professionnelle. Préparez-vous sur Test Civique France.",
      ton: "bleu",
    },
  ],
  videos: [
    { id: "nXimESI0mQo", titre: "Travailler en France : droits et démarches" },
  ],
  sources: [
    {
      titre: "France Travail - Portail de l'emploi",
      url: "https://www.francetravail.fr/",
      type: "officiel",
      description: "Offres d'emploi et accompagnement professionnel",
    },
    {
      titre: "Service-Public.fr - Droit du travail",
      url: "https://www.service-public.fr/particuliers/vosdroits/N19806",
      type: "officiel",
      description: "Informations sur les contrats et droits des salariés",
    },
    {
      titre: "Légifrance - Code du travail",
      url: "https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006072050/",
      type: "juridique",
      description: "Textes juridiques régissant le travail en France",
    },
  ],
};

export default article;
