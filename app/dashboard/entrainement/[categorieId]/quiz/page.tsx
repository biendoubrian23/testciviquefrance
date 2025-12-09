'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { Clock, CheckCircle, XCircle, ArrowRight, Trophy, Gift, Sparkles, Unlock, Loader2 } from 'lucide-react'
import Confetti from '@/components/ui/Confetti'
import CelebrationToast from '@/components/ui/CelebrationToast'
import { createClient } from '@/lib/supabase/client'

// Import des questions locales (hashées) - Principes et valeurs
import { 
  getQuestionsForLevel as getQuestionsPrincipesValeurs,
  type QuizQuestion,
  CATEGORIE_PRINCIPES_VALEURS_ID
} from '@/lib/data/quiz-principes-valeurs'

// Import des questions locales (hashées) - Vivre dans la société française
import { 
  getQuestionsVivreSociete,
  CATEGORIE_VIVRE_SOCIETE_ID
} from '@/lib/data/quiz-vivre-societe'

// Import des questions locales (hashées) - Histoire, géographie et culture
import { 
  getQuestionsHistoireGeoCulture,
  CATEGORIE_HISTOIRE_GEO_CULTURE_ID
} from '@/lib/data/quiz-histoire-geo-culture'

// Import des questions locales (hashées) - Système institutionnel et politique
import { 
  getQuestionsInstitutions,
} from '@/lib/data/quiz-institutions'

// Import des questions locales (hashées) - Droits et devoirs
import { 
  getQuestionsDroitsDevoirs,
} from '@/lib/data/quiz-droits-devoirs'

// Import des questions locales (hashées) - Symboles de la France
import { 
  getQuestionsSymboles,
} from '@/lib/data/quiz-symboles'

// ID de la catégorie Institutions
const CATEGORIE_INSTITUTIONS_ID = '1631db93-aa8a-451b-ab61-9f5c30c0248f';

// ID de la catégorie Droits et devoirs
const CATEGORIE_DROITS_DEVOIRS_ID = '664907da-cad7-47e1-ade1-d7f4044c83db';

// ID de la catégorie Symboles de la France
const CATEGORIE_SYMBOLES_ID = '85fffbbc-168f-4aa9-9e0d-361a758afff3';

// Interface pour les questions avec options mélangées
interface ShuffledQuestion extends QuizQuestion {
  shuffledOptions: string[]
  shuffledCorrectIndex: number
}

interface ReponseUtilisateur {
  question_id: string
  reponse_index: number | null
  is_correct: boolean
  temps_reponse: number
}

// Interface profil étendu avec les achats
interface UserProfile {
  unlock_level_count?: number
  no_timer_enabled?: boolean
}

type QuizPhase = 'loading' | 'playing' | 'waiting' | 'explanation' | 'results' | 'offer'

export default function QuizPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()
  const categorieId = params.categorieId as string
  const niveau = parseInt(searchParams.get('niveau') || '1')
  
  // Clé unique pour la persistance de ce quiz
  const STORAGE_KEY = `quiz_entrainement_${categorieId}_niveau_${niveau}`
  
  const [questions, setQuestions] = useState<ShuffledQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null)
  const [phase, setPhase] = useState<QuizPhase>('loading')
  const [reponses, setReponses] = useState<ReponseUtilisateur[]>([])
  const [showOffer, setShowOffer] = useState(false)
  const [offerType, setOfferType] = useState<'first10' | 'level45' | null>(null)
  
  // États pour les achats utilisateur
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [noTimerMode, setNoTimerMode] = useState(false)
  const [allLevelsUnlocked, setAllLevelsUnlocked] = useState(false) // Débloque TOUS les niveaux
  
  // Timer - peut être désactivé si mode sans chrono
  const DEFAULT_TIMER = 5 // 5 secondes par défaut
  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIMER)
  
  // États pour la célébration (confettis + toast)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  
  // États pour le mur de paiement "Débloquer niveau suivant"
  const [showPaywall, setShowPaywall] = useState(false)
  const [isUnlocking, setIsUnlocking] = useState(false)
  
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number>(0)
  const hasLoadedRef = useRef(false)
  const timerStartRef = useRef<number>(0) // Pour l'animation fluide
  const isRestoringRef = useRef(false) // Pour éviter de sauvegarder pendant la restauration

  // Charger le profil utilisateur pour les achats
  useEffect(() => {
    const loadUserProfile = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('all_levels_unlocked, no_timer_enabled')
          .eq('id', user.id)
          .single()
        
        if (profile) {
          setUserProfile(profile)
          setNoTimerMode(profile.no_timer_enabled || false)
          setAllLevelsUnlocked(profile.all_levels_unlocked || false)
        }
      }
    }
    
    loadUserProfile()
  }, [])

  // Interface pour l'état persisté
  interface PersistedQuizState {
    questions: ShuffledQuestion[]
    currentIndex: number
    reponses: ReponseUtilisateur[]
    phase: QuizPhase
    timestamp: number
  }

  // Sauvegarder l'état du quiz dans localStorage
  const saveQuizState = useCallback((currentPhase?: QuizPhase) => {
    if (isRestoringRef.current) return // Ne pas sauvegarder pendant la restauration
    if (questions.length === 0) return
    
    const state: PersistedQuizState = {
      questions,
      currentIndex,
      reponses,
      phase: currentPhase || phase,
      timestamp: Date.now()
    }
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (e) {
      console.error('Erreur sauvegarde quiz:', e)
    }
  }, [STORAGE_KEY, questions, currentIndex, reponses, phase])

  // Effacer l'état sauvegardé (fin du quiz)
  const clearQuizState = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (e) {
      console.error('Erreur effacement état quiz:', e)
    }
  }, [STORAGE_KEY])

  // Restaurer l'état du quiz depuis localStorage
  const restoreQuizState = useCallback((): PersistedQuizState | null => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (!saved) return null
      
      const state: PersistedQuizState = JSON.parse(saved)
      
      // Vérifier que l'état n'est pas trop vieux (max 1 heure)
      const maxAge = 60 * 60 * 1000 // 1 heure
      if (Date.now() - state.timestamp > maxAge) {
        clearQuizState()
        return null
      }
      
      // Vérifier que l'état est valide
      if (!state.questions || state.questions.length === 0) {
        clearQuizState()
        return null
      }
      
      return state
    } catch (e) {
      console.error('Erreur restauration quiz:', e)
      clearQuizState()
      return null
    }
  }, [STORAGE_KEY, clearQuizState])

  // Fonction pour mélanger un tableau
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  // Timer fluide avec animation continue
  // Ref pour savoir quand le timer a démarré pour cette question
  const timerStartedForQuestionRef = useRef(-1)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  
  // Durée du timer (infinie si mode sans chrono)
  const TIMER_DURATION = noTimerMode ? 9999 : DEFAULT_TIMER
  
  // Démarrer le timer quand on passe à une nouvelle question
  useEffect(() => {
    // Seulement quand on commence une nouvelle question
    if (phase === 'playing' && timerStartedForQuestionRef.current !== currentIndex) {
      timerStartedForQuestionRef.current = currentIndex
      timerStartRef.current = Date.now()
      setTimeLeft(noTimerMode ? 9999 : DEFAULT_TIMER)
    }
  }, [phase, currentIndex, noTimerMode])
  
  // L'intervalle tourne tant qu'on est en phase playing ou waiting (sauf mode sans chrono)
  useEffect(() => {
    // Mode sans chrono : pas de timer automatique
    if (noTimerMode) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }
    
    if (phase !== 'playing' && phase !== 'waiting') {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      return
    }
    
    // Créer l'intervalle s'il n'existe pas
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        const elapsed = (Date.now() - timerStartRef.current) / 1000
        const remaining = Math.max(0, DEFAULT_TIMER - elapsed)
        setTimeLeft(remaining)
        
        if (remaining <= 0 && intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
      }, 50)
    }
    
    return () => {
      // Ne PAS clear l'intervalle ici si on passe juste de playing à waiting
    }
  }, [phase, noTimerMode])
  
  // Cleanup à la fin
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])
  
  // Reset quand on change de question (pour le prochain timer)
  useEffect(() => {
    if (phase === 'explanation' || phase === 'results') {
      timerStartedForQuestionRef.current = -1
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [phase])

  const startTimer = useCallback(() => {
    setTimeLeft(noTimerMode ? 9999 : DEFAULT_TIMER)
    startTimeRef.current = Date.now()
  }, [noTimerMode])

  // Fonction pour charger les questions selon la catégorie
  const getQuestionsForCategory = useCallback((catId: string, niv: number): QuizQuestion[] => {
    // Vérifier si c'est la catégorie "Vivre dans la société française"
    if (catId === CATEGORIE_VIVRE_SOCIETE_ID || catId === '5a452914-91fc-4e4d-aa3f-5318eb95fb0a') {
      return getQuestionsVivreSociete(niv)
    }
    
    // Vérifier si c'est la catégorie "Histoire, géographie et culture"
    if (catId === CATEGORIE_HISTOIRE_GEO_CULTURE_ID || catId === '98ce105f-bfc6-425c-a1d9-b841ddae4016') {
      return getQuestionsHistoireGeoCulture(niv)
    }
    
    // Vérifier si c'est la catégorie "Système institutionnel et politique"
    if (catId === CATEGORIE_INSTITUTIONS_ID || catId === '1631db93-aa8a-451b-ab61-9f5c30c0248f') {
      return getQuestionsInstitutions(niv)
    }
    
    // Vérifier si c'est la catégorie "Droits et devoirs"
    if (catId === CATEGORIE_DROITS_DEVOIRS_ID || catId === '664907da-cad7-47e1-ade1-d7f4044c83db') {
      return getQuestionsDroitsDevoirs(niv)
    }
    
    // Vérifier si c'est la catégorie "Symboles de la France"
    if (catId === CATEGORIE_SYMBOLES_ID || catId === '85fffbbc-168f-4aa9-9e0d-361a758afff3') {
      return getQuestionsSymboles(niv)
    }
    
    // Par défaut: Principes et valeurs de la République
    return getQuestionsPrincipesValeurs(niv)
  }, [])

  // Charger les questions locales (ou restaurer depuis localStorage)
  const loadQuestions = useCallback(() => {
    if (hasLoadedRef.current) return
    hasLoadedRef.current = true

    // Essayer de restaurer un quiz en cours
    const savedState = restoreQuizState()
    if (savedState) {
      isRestoringRef.current = true
      
      setQuestions(savedState.questions)
      setCurrentIndex(savedState.currentIndex)
      setReponses(savedState.reponses)
      
      // Restaurer la phase (si c'est 'results', rester sur les résultats)
      if (savedState.phase === 'results') {
        setPhase('results')
      } else {
        setPhase('playing')
        startTimer()
      }
      
      // Permettre la sauvegarde après la restauration
      setTimeout(() => {
        isRestoringRef.current = false
      }, 100)
      return
    }

    try {
      // Charger les questions selon la catégorie
      const localQs = getQuestionsForCategory(categorieId, niveau)
      
      if (!localQs || localQs.length === 0) {
        console.error('Aucune question trouvée pour catégorie', categorieId, 'niveau', niveau)
        router.push(`/dashboard/entrainement/${categorieId}`)
        return
      }

      // Mélanger les questions
      const shuffledQuestions = shuffleArray([...localQs])

      // Mélanger les options de chaque question
      const questionsWithShuffledOptions: ShuffledQuestion[] = shuffledQuestions.map(q => {
        const indices = [0, 1, 2, 3]
        const shuffledIndices = shuffleArray(indices)
        const shuffledOptions = shuffledIndices.map(i => q.options[i])
        // La bonne réponse est toujours à l'index 0 dans les options originales
        const newCorrectIndex = shuffledIndices.indexOf(0)
        
        return {
          ...q,
          shuffledOptions,
          shuffledCorrectIndex: newCorrectIndex
        }
      })

      setQuestions(questionsWithShuffledOptions)
      setPhase('playing')
      startTimer()
      
    } catch (error) {
      console.error('Erreur chargement questions:', error)
      hasLoadedRef.current = false
      router.push(`/dashboard/entrainement/${categorieId}`)
    }
  }, [categorieId, niveau, router, startTimer, restoreQuizState, getQuestionsForCategory])

  // Vérifier l'accès au niveau (membres gratuits = niveau 1 uniquement)
  useEffect(() => {
    const checkAccess = async () => {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push('/login')
        return
      }
      
      // Charger le profil pour vérifier l'abonnement et all_levels_unlocked
      const { data: profileData } = await supabase
        .from('profiles')
        .select('all_levels_unlocked, subscription_status, no_timer_enabled')
        .eq('id', user.id)
        .single()
      
      if (profileData) {
        const hasAllLevelsUnlocked = profileData.all_levels_unlocked || false
        const hasActiveSubscription = profileData.subscription_status === 'active'
        const hasPremiumAccess = hasActiveSubscription || hasAllLevelsUnlocked
        
        setAllLevelsUnlocked(hasAllLevelsUnlocked)
        setNoTimerMode(profileData.no_timer_enabled || false)
        
        // RESTRICTION : Membres gratuits = niveau 1 uniquement
        if (!hasPremiumAccess && niveau > 1) {
          router.push('/dashboard/credits')
          return
        }
      }
    }
    
    checkAccess()
  }, [niveau, router])

  // Charger les questions au démarrage
  useEffect(() => {
    loadQuestions()
  }, [loadQuestions])

  // Sélectionner une réponse
  const handleSelectAnswer = (index: number) => {
    if (phase !== 'playing' && phase !== 'waiting') return
    
    setSelectedAnswerIndex(index)
    
    if (phase === 'playing') {
      setPhase('waiting')
    }
  }

  // Valider manuellement (mode sans chrono)
  const handleValidateAnswer = () => {
    if (phase !== 'waiting' || selectedAnswerIndex === null) return
    
    const currentQ = questions[currentIndex]
    if (!currentQ) return
    
    const tempsReponse = Math.round((Date.now() - startTimeRef.current) / 1000)
    
    // Vérification locale instantanée
    const isCorrect = selectedAnswerIndex === currentQ.shuffledCorrectIndex
    
    setReponses(prev => [...prev, {
      question_id: String(currentQ.id),
      reponse_index: selectedAnswerIndex,
      is_correct: isCorrect,
      temps_reponse: tempsReponse
    }])
    
    setPhase('explanation')
  }

  // Quand le timer atteint 0, vérifier la réponse (sauf mode sans chrono)
  useEffect(() => {
    // En mode sans chrono, on ne valide pas automatiquement
    if (noTimerMode) return
    
    if (timeLeft <= 0 && (phase === 'playing' || phase === 'waiting')) {
      if (timerRef.current) clearInterval(timerRef.current)
      
      const currentQ = questions[currentIndex]
      if (!currentQ) return
      
      const tempsReponse = Math.round((Date.now() - startTimeRef.current) / 1000)
      
      // Vérification locale instantanée
      const isCorrect = selectedAnswerIndex === currentQ.shuffledCorrectIndex
      
      setReponses(prev => [...prev, {
        question_id: String(currentQ.id),
        reponse_index: selectedAnswerIndex,
        is_correct: isCorrect,
        temps_reponse: tempsReponse
      }])
      
      setPhase('explanation')
    }
  }, [timeLeft, phase, questions, currentIndex, selectedAnswerIndex, noTimerMode])

  // Passer à la question suivante
  const handleNextQuestion = async () => {
    setSelectedAnswerIndex(null)
    
    const nextIndex = currentIndex + 1
    
    // Si on a fini toutes les questions
    if (nextIndex >= questions.length) {
      await finishQuiz()
      return
    }
    
    setCurrentIndex(nextIndex)
    setPhase('playing')
    startTimer()
  }

  // Sauvegarder l'état après chaque changement de question
  useEffect(() => {
    if (phase === 'playing' && questions.length > 0 && currentIndex > 0) {
      saveQuizState()
    }
  }, [currentIndex, phase, questions.length, saveQuizState])

  const handleDeclineOffer = () => {
    setShowOffer(false)
    setOfferType(null)
    
    if (currentIndex + 1 >= questions.length) {
      finishQuiz()
    } else {
      setCurrentIndex(currentIndex + 1)
      setPhase('playing')
      startTimer()
    }
  }

  const handleAcceptOffer = () => {
    router.push('/dashboard/credits')
  }

  // Utiliser le déblocage (achat) pour passer au niveau suivant avec un score de 5-7/10
  const handleUseUnlockLevel = async () => {
    // Si l'utilisateur n'a pas l'achat, rediriger vers la page d'achat
    if (!allLevelsUnlocked) {
      router.push('/dashboard/credits')
      return
    }
    
    setIsUnlocking(true)
    
    try {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        alert('Vous devez être connecté')
        setIsUnlocking(false)
        return
      }
      
      // Mettre à jour la progression dans la base de données
      // Vérifier si une progression existe déjà pour cette catégorie
      const { data: existingProgression } = await supabase
        .from('progression_niveaux')
        .select('niveau_actuel')
        .eq('user_id', user.id)
        .eq('categorie_id', categorieId)
        .single()

      if (existingProgression) {
        // Mettre à jour seulement si le nouveau niveau est plus élevé
        if (niveau >= existingProgression.niveau_actuel) {
          await supabase
            .from('progression_niveaux')
            .update({ 
              niveau_actuel: niveau + 1,
              updated_at: new Date().toISOString()
            })
            .eq('user_id', user.id)
            .eq('categorie_id', categorieId)
        }
      } else {
        // Créer la progression pour cette catégorie
        await supabase
          .from('progression_niveaux')
          .insert({
            user_id: user.id,
            categorie_id: categorieId,
            niveau_actuel: niveau + 1
          })
      }
      
      // Passer au niveau suivant
      clearQuizState()
      window.location.href = `/dashboard/entrainement/${categorieId}/quiz?niveau=${niveau + 1}`
      
    } catch (err) {
      console.error('Erreur:', err)
      alert('Une erreur est survenue')
    } finally {
      setIsUnlocking(false)
    }
  }

  // Terminer le quiz et sauvegarder les résultats
  const finishQuiz = async () => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (intervalRef.current) clearInterval(intervalRef.current)

    const score = reponses.filter(r => r.is_correct).length
    const tempsTotal = reponses.reduce((acc, r) => acc + r.temps_reponse, 0)

    // Sauvegarder les résultats dans la base de données
    try {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      
      if (user) {
        // Sauvegarder la session de quiz pour l'historique du dashboard et les scores
        const sessionData = {
          user_id: user.id,
          categorie_id: categorieId,
          niveau,
          score,
          total_questions: questions.length,
          temps_total: tempsTotal,
          completed: true,
          started_at: new Date(Date.now() - tempsTotal * 1000).toISOString(),
          completed_at: new Date().toISOString()
        }
        
        const { data: insertedSession, error: sessionError } = await supabase
          .from('sessions_quiz')
          .insert(sessionData)
          .select()
        
        if (sessionError) {
          console.error('Erreur insert sessions_quiz:', sessionError)
        }

        // Mettre à jour les statistiques utilisateur (colonnes correctes)
        const { data: stats, error: statsSelectError } = await supabase
          .from('statistiques')
          .select('*')
          .eq('user_id', user.id)
          .single()

        if (statsSelectError) {
          console.error('Erreur select statistiques:', statsSelectError)
          // Créer les statistiques si elles n'existent pas
          const { error: createStatsError } = await supabase
            .from('statistiques')
            .insert({
              user_id: user.id,
              total_questions_repondues: questions.length,
              total_bonnes_reponses: score,
              temps_total_etude: tempsTotal,
              derniere_activite: new Date().toISOString()
            })
          if (createStatsError) console.error('Erreur création statistiques:', createStatsError)
        } else if (stats) {
          const { error: updateStatsError } = await supabase
            .from('statistiques')
            .update({
              total_questions_repondues: (stats.total_questions_repondues || 0) + questions.length,
              total_bonnes_reponses: (stats.total_bonnes_reponses || 0) + score,
              temps_total_etude: (stats.temps_total_etude || 0) + tempsTotal,
              derniere_activite: new Date().toISOString(),
              updated_at: new Date().toISOString()
            })
            .eq('user_id', user.id)
          if (updateStatsError) console.error('Erreur update statistiques:', updateStatsError)
        }

        // Débloquer le niveau suivant si :
        // - Score >= 8/10 (normal), OU
        // - Score >= 5/10 ET l'utilisateur a all_levels_unlocked
        const canUnlockNext = score >= 8 || (score >= 5 && allLevelsUnlocked)

        if (canUnlockNext && niveau < 10) {
          // Vérifier si une progression existe déjà pour cette catégorie
          const { data: existingProgression } = await supabase
            .from('progression_niveaux')
            .select('niveau_actuel')
            .eq('user_id', user.id)
            .eq('categorie_id', categorieId)
            .single()

          if (existingProgression) {
            // Mettre à jour seulement si le nouveau niveau est plus élevé
            if (niveau >= existingProgression.niveau_actuel) {
              const { error: progressionError } = await supabase
                .from('progression_niveaux')
                .update({ 
                  niveau_actuel: niveau + 1,
                  updated_at: new Date().toISOString()
                })
                .eq('user_id', user.id)
                .eq('categorie_id', categorieId)
              if (progressionError) console.error('Erreur update progression:', progressionError)
            }
          } else {
            // Créer la progression pour cette catégorie
            const { error: createProgressionError } = await supabase
              .from('progression_niveaux')
              .insert({
                user_id: user.id,
                categorie_id: categorieId,
                niveau_actuel: niveau + 1
              })
            if (createProgressionError) console.error('Erreur création progression:', createProgressionError)
          }
        }
      }
    } catch (error) {
      console.error('Erreur sauvegarde résultats:', error)
    }

    // Déclencher la célébration si score >= 9/10
    if (score >= 9) {
      setShowConfetti(true)
      setShowCelebration(true)
    }
    
    // Afficher le paywall après 5 secondes si score entre 5 et 7 (pas assez pour passer à 8/10)
    if (score >= 5 && score <= 7 && niveau < 10) {
      setTimeout(() => {
        setShowPaywall(true)
      }, 5000)
    }

    setPhase('results')
    
    // Sauvegarder l'état avec la phase 'results' pour persister le récapitulatif
    saveQuizState('results')
  }

  // Rendu du timer circulaire fluide (ou icône pause en mode sans chrono)
  const renderTimer = () => {
    // Mode sans chrono : afficher une icône "pause" ou "∞"
    if (noTimerMode) {
      return (
        <div className="relative w-16 h-16 sm:w-20 sm:h-20">
          <svg className="w-full h-full" viewBox="0 0 88 88">
            <circle cx="44" cy="44" r="40" fill="none" stroke="#10b981" strokeWidth="5" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl sm:text-2xl font-bold text-emerald-500">∞</span>
          </div>
        </div>
      )
    }
    
    const circumference = 2 * Math.PI * 40
    const progress = (timeLeft / DEFAULT_TIMER) * circumference
    // Couleurs adaptées pour 5 secondes : bleu > 3s, orange > 1s, rouge <= 1s
    const timerColor = timeLeft > 3 ? '#2563eb' : timeLeft > 1 ? '#f59e0b' : '#ef4444'
    const displayTime = Math.ceil(timeLeft) // Afficher le temps arrondi au supérieur
    
    return (
      <div className="relative w-16 h-16 sm:w-20 sm:h-20">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 88 88">
          <circle cx="44" cy="44" r="40" fill="none" stroke="#e5e7eb" strokeWidth="5" />
          <circle
            cx="44" cy="44" r="40" fill="none" stroke={timerColor} strokeWidth="5"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl sm:text-2xl font-bold" style={{ color: timerColor }}>
            {displayTime}
          </span>
        </div>
      </div>
    )
  }

  // Écran de chargement
  if (phase === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600 mb-4"></div>
        <p className="text-gray-600">Chargement du quiz...</p>
      </div>
    )
  }

  // Écran des résultats
  if (phase === 'results') {
    const totalQuestions = reponses.length
    const score = reponses.filter(r => r.is_correct).length
    const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0
    const isSuccess = percentage >= 80 // 8/10 requis pour passer
    
    return (
      <>
        <Confetti isActive={showConfetti} duration={5000} />
        <CelebrationToast isVisible={showCelebration} score={score} onHide={() => setShowCelebration(false)} />
        
        <div className="max-w-md mx-auto px-2 sm:px-4 py-6">
          <div className="bg-white border border-gray-200 p-5 text-center">
            <div className="text-xs text-gray-500 mb-2">Niveau {niveau}</div>
          
            {isSuccess ? (
              <div className="w-14 h-14 mx-auto mb-3 bg-emerald-100 flex items-center justify-center">
                <Trophy className="w-7 h-7 text-emerald-600" />
              </div>
            ) : (
              <div className="w-14 h-14 mx-auto mb-3 bg-red-100 flex items-center justify-center">
                <XCircle className="w-7 h-7 text-red-500" />
              </div>
            )}
          
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              {isSuccess ? 'Niveau réussi !' : 'Niveau non validé'}
            </h2>
          
            <p className="text-gray-600 text-sm mb-4">
              {isSuccess 
                ? 'Félicitations ! Vous avez atteint les 70% requis.'
                : 'Vous devez obtenir au moins 70% pour valider ce niveau.'
              }
            </p>
          
            <div className={`inline-block px-6 py-3 mb-4 ${
              isSuccess ? 'bg-emerald-50 border border-emerald-200' : 'bg-red-50 border border-red-200'
            }`}>
              <div className={`text-4xl font-bold ${isSuccess ? 'text-emerald-600' : 'text-red-500'}`}>
                {percentage}%
              </div>
              <div className="text-xs text-gray-600 mt-1">
                {score}/{totalQuestions} bonnes réponses
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-500">Votre score</span>
                <span className="text-gray-500">Objectif : 70%</span>
              </div>
              <div className="h-2 bg-gray-200 overflow-hidden relative">
                <div className="absolute top-0 bottom-0 w-0.5 bg-gray-400" style={{ left: '70%' }} />
                <div 
                  className={`h-full transition-all duration-500 ${isSuccess ? 'bg-emerald-500' : 'bg-red-400'}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          
            <div className="bg-gray-50 p-3 mb-4">
              <h3 className="font-medium text-gray-800 mb-2 text-xs">Détail des réponses</h3>
              <div className="flex justify-center gap-1 flex-wrap">
                {reponses.map((r, i) => (
                  <div
                    key={i}
                    className={`w-6 h-6 flex items-center justify-center text-xs font-bold ${
                      r.is_correct ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mb-4">
              <span className="text-amber-600 font-bold text-sm">
                +{score * 10 + (isSuccess ? 50 : 0)} points
              </span>
            </div>
          
            {showPaywall && !isSuccess && niveau < 10 && (
              <div className="bg-gradient-to-br from-primary-50 to-emerald-50 border-2 border-primary-200 p-4 mb-4 animate-fade-in">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Unlock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Vous étiez proche !</h4>
                    <p className="text-xs text-gray-600">
                      {allLevelsUnlocked 
                        ? 'Passez au niveau suivant grâce à votre achat'
                        : 'Débloquez le niveau suivant sans recommencer'}
                    </p>
                  </div>
                </div>
              
                <button
                  onClick={handleUseUnlockLevel}
                  disabled={isUnlocking}
                  className="w-full bg-primary-600 text-white py-3 px-4 font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  {isUnlocking ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Déblocage...</span>
                    </>
                  ) : allLevelsUnlocked ? (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Passer au niveau suivant</span>
                      <span className="bg-white/20 px-2 py-0.5 text-xs ml-1">Inclus</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Débloquer le niveau suivant</span>
                      <span className="bg-white/20 px-2 py-0.5 text-xs ml-1">0,99€</span>
                    </>
                  )}
                </button>
              
                <p className="text-center text-xs text-gray-500 mt-2">
                  {allLevelsUnlocked 
                    ? 'Valable pour tous vos scores entre 5 et 7/10' 
                    : 'Achat unique - valable sur tous les thèmes'}
                </p>
              </div>
            )}
          
            <div className="flex flex-col gap-2">
              {niveau < 10 && (
                <button
                  onClick={() => {
                    clearQuizState()
                    window.location.href = `/dashboard/entrainement/${categorieId}/quiz?niveau=${niveau + 1}`
                  }}
                  disabled={!isSuccess}
                  className={`w-full py-2.5 px-4 font-semibold transition-colors ${
                    isSuccess 
                      ? 'bg-primary-600 text-white hover:bg-primary-700' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isSuccess ? 'Passer au niveau suivant' : 'Niveau suivant (80% requis)'}
                </button>
              )}
            
              <button
                onClick={() => {
                  clearQuizState()
                  window.location.href = `/dashboard/entrainement/${categorieId}/quiz?niveau=${niveau}`
                }}
                className="w-full bg-gray-100 text-gray-700 py-2.5 px-4 font-medium hover:bg-gray-200 transition-colors"
              >
                Recommencer ce niveau
              </button>
            
              <button
                onClick={() => {
                  clearQuizState()
                  router.push(`/dashboard/entrainement/${categorieId}`)
                }}
                className="w-full text-gray-500 py-1.5 text-sm hover:text-gray-700 transition-colors"
              >
                Retour aux niveaux
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }

  // Modal offre micro-transaction
  if (showOffer) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
          <button
            onClick={handleDeclineOffer}
            className="absolute top-3 right-3 p-1 text-gray-300 hover:text-gray-400 transition-colors"
          >
            <XCircle className="w-5 h-5" />
          </button>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-emerald-100 rounded-full flex items-center justify-center">
              {offerType === 'first10' ? (
                <Sparkles className="w-8 h-8 text-primary-600" />
              ) : (
                <Gift className="w-8 h-8 text-emerald-600" />
              )}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {offerType === 'first10' ? 'Bravo ! Vous progressez bien !' : 'Vous êtes à mi-chemin !'}
            </h3>
            
            <p className="text-gray-600 mb-6">
              {offerType === 'first10' 
                ? 'Débloquez les flashcards pour mémoriser efficacement.'
                : 'Accélérez votre préparation avec les flashcards interactives.'
              }
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <div className="text-3xl font-bold text-primary-600 mb-1">1,50 €</div>
              <div className="text-sm text-gray-500">Accès illimité aux flashcards</div>
            </div>
            
            <button
              onClick={handleAcceptOffer}
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Débloquer les flashcards
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ==================== RENDU QUIZ (MODE LOCAL HASH) ====================
  const currentQ = questions[currentIndex]
  if (!currentQ) return null

  return (
    <div className="max-w-2xl mx-auto px-2 sm:px-4 py-6">
      {/* Header avec progression et timer */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1">
          <div className="text-sm text-gray-500 mb-1">Niveau {niveau}</div>
          <div className="flex items-center gap-0.5 sm:gap-1">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-1.5 sm:h-2 rounded-full ${
                  i < currentIndex 
                    ? reponses[i]?.is_correct ? 'bg-emerald-500' : 'bg-red-400'
                    : i === currentIndex 
                      ? 'bg-primary-600' 
                      : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="ml-3 flex-shrink-0">
          {renderTimer()}
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-none border border-gray-200 p-4 sm:p-6 mb-4">
        <div className="text-sm text-gray-500 mb-2">Question {currentIndex + 1}/10</div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{currentQ.question}</h2>
      </div>

      {/* Réponses */}
      <div className="space-y-2 mb-4">
        {currentQ.shuffledOptions.map((option, index) => {
          const isSelected = selectedAnswerIndex === index
          const showResult = phase === 'explanation'
          const isCorrectAnswer = index === currentQ.shuffledCorrectIndex
          
          let buttonClass = 'bg-white border-gray-200 hover:border-primary-300'
          
          if (showResult) {
            if (isCorrectAnswer) {
              buttonClass = 'bg-emerald-50 border-emerald-500'
            } else if (isSelected && !isCorrectAnswer) {
              buttonClass = 'bg-red-50 border-red-500'
            } else {
              buttonClass = 'bg-white border-gray-200 opacity-50'
            }
          } else if ((phase === 'waiting' || phase === 'playing') && isSelected) {
            buttonClass = 'bg-primary-50 border-primary-500'
          }
          
          const canClick = phase === 'playing' || phase === 'waiting'
          
          return (
            <button
              key={index}
              onClick={() => handleSelectAnswer(index)}
              disabled={!canClick}
              className={`w-full py-3 px-4 rounded-none border-2 text-left transition-all ${buttonClass} ${canClick ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600 flex-shrink-0">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">{option}</span>
                </div>
                
                {showResult && (
                  isCorrectAnswer ? (
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  ) : isSelected ? (
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  ) : null
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Explication */}
      {phase === 'explanation' && (
        <div className="bg-primary-50 border border-primary-200 rounded-none p-4 mb-6">
          <h3 className="font-semibold text-primary-800 mb-2">Explication</h3>
          <p className="text-primary-700 text-sm">{currentQ.explication}</p>
        </div>
      )}

      {/* Bouton suivant */}
      {phase === 'explanation' && (
        <button
          onClick={handleNextQuestion}
          className="w-full bg-primary-600 text-white py-3 px-4 rounded-none font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
        >
          {currentIndex < questions.length - 1 ? (
            <>
              <span>Question suivante</span>
              <ArrowRight className="w-4 h-4" />
            </>
          ) : (
            <>
              <span>Voir mes résultats</span>
              <Trophy className="w-4 h-4" />
            </>
          )}
        </button>
      )}

      {/* Bouton Valider pour mode sans chrono */}
      {noTimerMode && phase === 'waiting' && selectedAnswerIndex !== null && (
        <button
          onClick={handleValidateAnswer}
          className="w-full bg-emerald-600 text-white py-3 px-4 rounded-none font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 mb-4"
        >
          <CheckCircle className="w-5 h-5" />
          <span>Valider ma réponse</span>
        </button>
      )}

      {/* Message d'attente pendant le timer (seulement si pas mode sans chrono) */}
      {phase === 'waiting' && !noTimerMode && (
        <div className="text-center text-gray-500 py-4">
          <Clock className="w-5 h-5 inline-block mr-2" />
          Attendez la fin du timer pour voir l&apos;explication...
        </div>
      )}

      {/* Message pour sélectionner une réponse (mode sans chrono) */}
      {noTimerMode && phase === 'playing' && (
        <div className="text-center text-emerald-600 py-4">
          <span className="text-sm">⏱️ Mode sans chrono activé - Prenez votre temps</span>
        </div>
      )}
    </div>
  )
}
