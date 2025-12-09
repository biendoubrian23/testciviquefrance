import type { OnboardingQuestion } from '@/types/onboarding';

// Fonction de hash simple pour les réponses (SHA-256 simulé côté client)
function hashAnswer(text: string): string {
  // Hash simple basé sur un algorithme de hachage
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

// Vérifier si une réponse est correcte
export function verifyAnswer(questionId: string, selectedText: string): boolean {
  const question = onboardingQuestions.find(q => q.id === questionId);
  if (!question) return false;
  
  const selectedOption = question.options.find(opt => opt.text === selectedText);
  if (!selectedOption) return false;
  
  return selectedOption.hash === hashAnswer(selectedText + '_correct');
}

// Questions d'onboarding avec réponses hashées
export const onboardingQuestions: OnboardingQuestion[] = [
  {
    id: '1',
    domaine: 'Principes et valeurs de la République',
    question: 'Selon l\'article 1er de la Constitution, la France est une République :',
    options: [
      { text: 'Indivisible, laïque, démocratique et sociale', hash: hashAnswer('Indivisible, laïque, démocratique et sociale_correct') },
      { text: 'Fédérale, laïque et démocratique', hash: hashAnswer('Fédérale, laïque et démocratique_wrong') },
      { text: 'Indivisible, catholique et démocratique', hash: hashAnswer('Indivisible, catholique et démocratique_wrong') },
      { text: 'Divisible, laïque et monarchique', hash: hashAnswer('Divisible, laïque et monarchique_wrong') },
    ],
    explication: 'L\'article 1er de la Constitution de 1958 définit la France comme une République indivisible, laïque, démocratique et sociale. Ces quatre caractéristiques sont fondamentales.',
    ordre: 1,
  },
  {
    id: '2',
    domaine: 'Principes et valeurs de la République',
    question: 'La loi de séparation des Églises et de l\'État, fondement de la laïcité française, date de :',
    options: [
      { text: '1789', hash: hashAnswer('1789_wrong') },
      { text: '1905', hash: hashAnswer('1905_correct') },
      { text: '1958', hash: hashAnswer('1958_wrong') },
      { text: '1848', hash: hashAnswer('1848_wrong') },
    ],
    explication: 'La loi du 9 décembre 1905 établit la séparation des Églises et de l\'État. Elle garantit la liberté de conscience et le libre exercice des cultes.',
    ordre: 2,
  },
  {
    id: '3',
    domaine: 'Système institutionnel et politique',
    question: 'Qui promulgue les lois en France ?',
    options: [
      { text: 'Le Premier ministre', hash: hashAnswer('Le Premier ministre_wrong') },
      { text: 'Le Président de l\'Assemblée nationale', hash: hashAnswer('Le Président de l\'Assemblée nationale_wrong') },
      { text: 'Le Président de la République', hash: hashAnswer('Le Président de la République_correct') },
      { text: 'Le Conseil constitutionnel', hash: hashAnswer('Le Conseil constitutionnel_wrong') },
    ],
    explication: 'Selon l\'article 10 de la Constitution, le Président de la République promulgue les lois dans les quinze jours qui suivent leur transmission au Gouvernement.',
    ordre: 3,
  },
  {
    id: '4',
    domaine: 'Droits et devoirs',
    question: 'À partir de quel âge le vote devient-il un droit en France ?',
    options: [
      { text: '16 ans', hash: hashAnswer('16 ans_wrong') },
      { text: '18 ans', hash: hashAnswer('18 ans_correct') },
      { text: '21 ans', hash: hashAnswer('21 ans_wrong') },
      { text: '25 ans', hash: hashAnswer('25 ans_wrong') },
    ],
    explication: 'Depuis 1974, tout citoyen français âgé de 18 ans ou plus dispose du droit de vote. L\'inscription sur les listes électorales est automatique depuis 1997 pour les jeunes atteignant 18 ans.',
    ordre: 4,
  },
  {
    id: '5',
    domaine: 'Histoire, géographie et culture',
    question: 'La Déclaration des Droits de l\'Homme et du Citoyen a été adoptée en :',
    options: [
      { text: '1789', hash: hashAnswer('1789_correct') },
      { text: '1848', hash: hashAnswer('1848_wrong') },
      { text: '1958', hash: hashAnswer('1958_wrong') },
      { text: '1945', hash: hashAnswer('1945_wrong') },
    ],
    explication: 'La Déclaration des Droits de l\'Homme et du Citoyen (DDHC) a été adoptée le 26 août 1789 par l\'Assemblée nationale constituante.',
    ordre: 5,
  },
  {
    id: '6',
    domaine: 'Histoire, géographie et culture',
    question: 'Combien de régions administratives la France métropolitaine compte-t-elle depuis 2016 ?',
    options: [
      { text: '18', hash: hashAnswer('18_wrong') },
      { text: '13', hash: hashAnswer('13_correct') },
      { text: '22', hash: hashAnswer('22_wrong') },
      { text: '27', hash: hashAnswer('27_wrong') },
    ],
    explication: 'Depuis la réforme territoriale de 2015 (effective en 2016), la France métropolitaine compte 13 régions administratives.',
    ordre: 6,
  },
  {
    id: '7',
    domaine: 'Vivre dans la société française',
    question: 'L\'école est obligatoire en France pour les enfants de :',
    options: [
      { text: '6 à 16 ans', hash: hashAnswer('6 à 16 ans_wrong') },
      { text: '3 à 16 ans', hash: hashAnswer('3 à 16 ans_correct') },
      { text: '6 à 18 ans', hash: hashAnswer('6 à 18 ans_wrong') },
      { text: '3 à 18 ans', hash: hashAnswer('3 à 18 ans_wrong') },
    ],
    explication: 'Depuis 2019, l\'instruction est obligatoire de 3 à 16 ans. L\'obligation de formation a été étendue jusqu\'à 18 ans (formation, emploi ou service civique).',
    ordre: 7,
  },
];

// Fonction pour obtenir si une option est correcte (utilisée uniquement côté serveur ou après validation)
export function isOptionCorrect(questionId: string, optionIndex: number): boolean {
  const correctAnswers: { [key: string]: number } = {
    '1': 0, // Indivisible, laïque, démocratique et sociale
    '2': 1, // 1905
    '3': 2, // Le Président de la République
    '4': 1, // 18 ans
    '5': 0, // 1789
    '6': 1, // 13
    '7': 1, // 3 à 16 ans
  };
  
  return correctAnswers[questionId] === optionIndex;
}
