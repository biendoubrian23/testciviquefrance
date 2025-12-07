'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { Clock, CheckCircle, XCircle, ArrowRight, Trophy, Star, Gift, Sparkles } from 'lucide-react'
import Confetti from '@/components/ui/Confetti'
import CelebrationToast from '@/components/ui/CelebrationToast'

// Interface sécurisée - PAS de is_correct côté client !
interface Question {
  id: string
  question: string
  explication: string
  reponses: Reponse[]
}

interface Reponse {
  id: string
  texte: string
  ordre: number
  // NOTE: is_correct n'est PLUS ici - sécurité !
}

interface ReponseUtilisateur {
  question_id: string
  reponse_id: string | null
  is_correct: boolean
  temps_reponse: number
  correct_reponse_id?: string // Ajouté après vérification serveur
}

type QuizPhase = 'loading' | 'playing' | 'waiting' | 'verifying' | 'explanation' | 'results' | 'offer'

export default function QuizPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()
  const categorieId = params.categorieId as string
  const niveau = parseInt(searchParams.get('niveau') || '1')
  
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [correctAnswerId, setCorrectAnswerId] = useState<string | null>(null) // Réponse correcte (du serveur)
  const [timeLeft, setTimeLeft] = useState(30)
  const [phase, setPhase] = useState<QuizPhase>('loading')
  const [reponses, setReponses] = useState<ReponseUtilisateur[]>([])
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [showOffer, setShowOffer] = useState(false)
  const [offerType, setOfferType] = useState<'first10' | 'level45' | null>(null)
  
  // États pour la célébration (confettis + toast)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number>(0)
  const questionsRef = useRef<Question[]>([])
  const currentIndexRef = useRef(0)
  const selectedAnswerRef = useRef<string | null>(null)
  const phaseRef = useRef<QuizPhase>('loading')
  const sessionIdRef = useRef<string | null>(null)
  const hasLoadedRef = useRef(false) // Empêcher les appels multiples

  const TIMER_DURATION = 5 // DEV: 5 secondes (PROD: 30)

  // Mettre à jour les refs quand les états changent
  useEffect(() => {
    questionsRef.current = questions
  }, [questions])
  
  useEffect(() => {
    currentIndexRef.current = currentIndex
  }, [currentIndex])
  
  useEffect(() => {
    selectedAnswerRef.current = selectedAnswer
  }, [selectedAnswer])
  
  useEffect(() => {
    phaseRef.current = phase
  }, [phase])

  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  // Fonction pour vérifier une réponse via l'API sécurisée
  const verifyAnswer = useCallback(async (questionId: string, reponseId: string | null, tempsReponse: number) => {
    try {
      const response = await fetch('/api/quiz/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId,
          reponseId,
          tempsReponse,
          sessionId: sessionIdRef.current // Utiliser la ref !
        })
      })
      
      if (!response.ok) {
        throw new Error('Erreur de vérification')
      }
      
      const data = await response.json()
      return {
        isCorrect: data.isCorrect,
        correctReponseId: data.correctReponseId,
        explication: data.explication
      }
    } catch (error) {
      console.error('Erreur vérification:', error)
      return { isCorrect: false, correctReponseId: null, explication: '' }
    }
  }, []) // Plus de dépendance à sessionId !

  const handleTimeUp = useCallback(async () => {
    // Si pas de réponse sélectionnée, enregistrer comme non-répondu
    if (phaseRef.current === 'playing') {
      const currentQuestion = questionsRef.current[currentIndexRef.current]
      if (!currentQuestion) return
      
      const tempsReponse = TIMER_DURATION
      const answer = selectedAnswerRef.current
      
      // Phase de vérification
      setPhase('verifying')
      
      // Vérifier la réponse côté serveur
      const verification = await verifyAnswer(currentQuestion.id, answer, tempsReponse)
      
      setCorrectAnswerId(verification.correctReponseId)
      setReponses(prev => [...prev, {
        question_id: currentQuestion.id,
        reponse_id: answer,
        is_correct: verification.isCorrect,
        temps_reponse: tempsReponse,
        correct_reponse_id: verification.correctReponseId
      }])
      
      setPhase('explanation')
    }
  }, [verifyAnswer])

  const startTimer = useCallback(() => {
    setTimeLeft(TIMER_DURATION)
    startTimeRef.current = Date.now()
    
    if (timerRef.current) clearInterval(timerRef.current)
    
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!)
          handleTimeUp()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }, [handleTimeUp])

  const loadQuestions = useCallback(async () => {
    // Éviter les appels multiples
    if (hasLoadedRef.current) {
      console.log('loadQuestions - déjà chargé, skip')
      return
    }
    hasLoadedRef.current = true
    
    // Charger les questions via l'API sécurisée (sans is_correct)
    try {
      console.log('loadQuestions - niveau:', niveau, 'categorieId:', categorieId)

      const response = await fetch(`/api/quiz/questions?categorieId=${categorieId}&niveau=${niveau}`)
      
      if (!response.ok) {
        if (response.status === 401) {
          router.push('/login')
          return
        }
        throw new Error('Erreur chargement questions')
      }

      const data = await response.json()
      
      if (!data.questions || data.questions.length === 0) {
        console.error('Aucune question trouvée')
        router.push(`/dashboard/entrainement/${categorieId}`)
        return
      }

      console.log('Questions chargées (sécurisé):', data.questions.length)

      // Mélanger les réponses de chaque question
      const questionsWithShuffledAnswers = data.questions.map((q: Question) => ({
        ...q,
        reponses: shuffleArray([...q.reponses])
      }))

      setQuestions(questionsWithShuffledAnswers)
      setSessionId(data.sessionId)
      sessionIdRef.current = data.sessionId // Mettre à jour la ref aussi !
      
      setPhase('playing')
      startTimer()
      
    } catch (error) {
      console.error('Erreur chargement questions:', error)
      hasLoadedRef.current = false // Permettre un retry en cas d'erreur
      router.push(`/dashboard/entrainement/${categorieId}`)
    }
  }, [categorieId, niveau, router, startTimer])

  // Charger les questions au démarrage (une seule fois)
  useEffect(() => {
    loadQuestions()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, []) // Dépendances vides pour n'exécuter qu'une fois !

  const handleSelectAnswer = async (reponseId: string) => {
    if (phase !== 'playing' || selectedAnswer) return
    
    setSelectedAnswer(reponseId)
    const tempsReponse = Math.round((Date.now() - startTimeRef.current) / 1000)
    
    // Passer en mode "attente" jusqu'à la fin du timer
    setPhase('waiting')
    
    // La vérification se fera quand le timer atteint 0
  }

  // Quand le timer atteint 0, vérifier la réponse côté serveur
  useEffect(() => {
    const verifyAndShowExplanation = async () => {
      if (timeLeft === 0 && (phase === 'playing' || phase === 'waiting')) {
        if (timerRef.current) clearInterval(timerRef.current)
        
        const currentQuestion = questions[currentIndex]
        if (!currentQuestion) return
        
        const tempsReponse = Math.round((Date.now() - startTimeRef.current) / 1000)
        
        // Phase de vérification
        setPhase('verifying')
        
        // Vérifier la réponse côté serveur (SÉCURISÉ)
        const verification = await verifyAnswer(currentQuestion.id, selectedAnswer, tempsReponse)
        
        setCorrectAnswerId(verification.correctReponseId)
        setReponses(prev => [...prev, {
          question_id: currentQuestion.id,
          reponse_id: selectedAnswer,
          is_correct: verification.isCorrect,
          temps_reponse: tempsReponse,
          correct_reponse_id: verification.correctReponseId
        }])
        
        setPhase('explanation')
      }
    }
    
    verifyAndShowExplanation()
  }, [timeLeft, phase, questions, currentIndex, selectedAnswer, verifyAnswer])

  const handleNextQuestion = async () => {
    setSelectedAnswer(null)
    setCorrectAnswerId(null) // Réinitialiser la bonne réponse
    
    // Vérifier si c'est le moment de proposer une offre
    const nextIndex = currentIndex + 1
    
    console.log('handleNextQuestion - nextIndex:', nextIndex, 'questions.length:', questions.length)
    
    // NOTE: Offres désactivées temporairement pour debug
    // Offre après la 10ème question (index 9) du premier niveau
    // if (nextIndex === 10 && niveau === 1) {
    //   setOfferType('first10')
    //   setShowOffer(true)
    //   return
    // }
    
    // Offre au niveau 5 (environ question 45 sur l'ensemble)
    // if (nextIndex === 5 && niveau === 5) {
    //   setOfferType('level45')
    //   setShowOffer(true)
    //   return
    // }
    
    // Si on a fini toutes les questions
    if (nextIndex >= questions.length) {
      await finishQuiz()
      return
    }
    
    // Passer à la question suivante
    setCurrentIndex(nextIndex)
    setPhase('playing')
    startTimer()
  }

  const handleDeclineOffer = () => {
    setShowOffer(false)
    setOfferType(null)
    
    // Continuer le quiz
    if (currentIndex + 1 >= questions.length) {
      finishQuiz()
    } else {
      setCurrentIndex(currentIndex + 1)
      setCorrectAnswerId(null)
      setPhase('playing')
      startTimer()
    }
  }

  const handleAcceptOffer = () => {
    // Rediriger vers la page des offres
    router.push('/dashboard/credits')
  }

  const finishQuiz = async () => {
    if (timerRef.current) clearInterval(timerRef.current)

    const score = reponses.filter(r => r.is_correct).length
    const tempsTotal = reponses.reduce((acc, r) => acc + r.temps_reponse, 0)

    try {
      // Appeler l'API sécurisée pour sauvegarder les résultats
      const response = await fetch('/api/quiz/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          categorieId,
          niveau,
          score,
          totalQuestions: questions.length,
          tempsTotal,
          reponses: reponses.map(r => ({
            questionId: r.question_id,
            reponseId: r.reponse_id,
            isCorrect: r.is_correct,
            tempsReponse: r.temps_reponse
          }))
        })
      })

      if (!response.ok) {
        console.error('Erreur sauvegarde résultats')
      }

      // Déclencher la célébration si score >= 9/10
      if (score >= 9) {
        setShowConfetti(true)
        setShowCelebration(true)
      }

      setPhase('results')
      
    } catch (error) {
      console.error('Erreur finishQuiz:', error)
      setPhase('results') // Afficher quand même les résultats
    }
  }

  // Rendu du timer circulaire avec animation fluide
  const renderTimer = () => {
    const circumference = 2 * Math.PI * 40
    const progress = (timeLeft / TIMER_DURATION) * circumference
    const timerColor = timeLeft > 10 ? '#2563eb' : timeLeft > 5 ? '#f59e0b' : '#ef4444'
    
    return (
      <div className="relative w-16 h-16 sm:w-20 sm:h-20">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 88 88">
          <circle
            cx="44"
            cy="44"
            r="40"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="5"
          />
          <circle
            cx="44"
            cy="44"
            r="40"
            fill="none"
            stroke={timerColor}
            strokeWidth="5"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 1s linear, stroke 0.3s ease'
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl sm:text-2xl font-bold" style={{ color: timerColor }}>
            {timeLeft}
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
    const isSuccess = percentage >= 70 // 70% minimum pour passer
    
    return (
      <>
        {/* Confettis pour 9/10 ou 10/10 */}
        <Confetti isActive={showConfetti} duration={5000} />
        
        {/* Toast de célébration */}
        <CelebrationToast 
          isVisible={showCelebration} 
          score={score}
          onHide={() => setShowCelebration(false)}
        />
        
        <div className="max-w-md mx-auto px-2 sm:px-4 py-6">
          <div className="bg-white border border-gray-200 p-5 text-center">
            {/* Titre du niveau */}
            <div className="text-xs text-gray-500 mb-2">Niveau {niveau}</div>
          
            {/* Icône de résultat */}
          {isSuccess ? (
            <div className="w-14 h-14 mx-auto mb-3 bg-emerald-100 flex items-center justify-center">
              <Trophy className="w-7 h-7 text-emerald-600" />
            </div>
          ) : (
            <div className="w-14 h-14 mx-auto mb-3 bg-red-100 flex items-center justify-center">
              <XCircle className="w-7 h-7 text-red-500" />
            </div>
          )}
          
          {/* Titre */}
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            {isSuccess ? 'Niveau réussi !' : 'Niveau non validé'}
          </h2>
          
          {/* Message */}
          <p className="text-gray-600 text-sm mb-4">
            {isSuccess 
              ? 'Félicitations ! Vous avez atteint les 70% requis.'
              : 'Vous devez obtenir au moins 70% pour valider ce niveau.'
            }
          </p>
          
          {/* Score principal */}
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

          {/* Barre de progression vers 70% */}
          <div className="mb-4">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-500">Votre score</span>
              <span className="text-gray-500">Objectif : 70%</span>
            </div>
            <div className="h-2 bg-gray-200 overflow-hidden relative">
              {/* Indicateur 70% */}
              <div className="absolute top-0 bottom-0 w-0.5 bg-gray-400" style={{ left: '70%' }} />
              {/* Barre de score */}
              <div 
                className={`h-full transition-all duration-500 ${
                  isSuccess ? 'bg-emerald-500' : 'bg-red-400'
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
          
          {/* Détail des réponses */}
          <div className="bg-gray-50 p-3 mb-4">
            <h3 className="font-medium text-gray-800 mb-2 text-xs">Détail des réponses</h3>
            <div className="flex justify-center gap-1 flex-wrap">
              {reponses.map((r, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 flex items-center justify-center text-xs font-bold ${
                    r.is_correct 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-red-500 text-white'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Points gagnés */}
          <div className="text-center mb-4">
            <span className="text-amber-600 font-bold text-sm">
              +{score * 10 + (isSuccess ? 50 : 0)} points
            </span>
          </div>
          
          {/* Boutons d'action */}
          <div className="flex flex-col gap-2">
            {/* Bouton niveau suivant - activé seulement si réussi */}
            {niveau < 10 && (
              <button
                onClick={() => {
                  // Aller au niveau suivant (nouvelle série de 10 questions)
                  window.location.href = `/dashboard/entrainement/${categorieId}/quiz?niveau=${niveau + 1}`
                }}
                disabled={!isSuccess}
                className={`w-full py-2.5 px-4 font-semibold transition-colors ${
                  isSuccess 
                    ? 'bg-primary-600 text-white hover:bg-primary-700' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isSuccess ? 'Passer au niveau suivant' : 'Niveau suivant (70% requis)'}
              </button>
            )}
            
            {/* Bouton recommencer */}
            <button
              onClick={() => {
                // Recommencer ce niveau (question 1 du même niveau)
                window.location.href = `/dashboard/entrainement/${categorieId}/quiz?niveau=${niveau}`
              }}
              className="w-full bg-gray-100 text-gray-700 py-2.5 px-4 font-medium hover:bg-gray-200 transition-colors"
            >
              Recommencer ce niveau
            </button>
            
            {/* Bouton retour */}
            <button
              onClick={() => router.push(`/dashboard/entrainement/${categorieId}`)}
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
          {/* Bouton fermer (croix grise discrète) */}
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
              {offerType === 'first10' 
                ? 'Bravo ! Vous progressez bien !' 
                : 'Vous êtes à mi-chemin !'
              }
            </h3>
            
            <p className="text-gray-600 mb-6">
              {offerType === 'first10' 
                ? 'Débloquez les flashcards pour mémoriser efficacement.'
                : 'Accélérez votre préparation avec les flashcards interactives.'
              }
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <div className="text-3xl font-bold text-primary-600 mb-1">
                1,50 €
              </div>
              <div className="text-sm text-gray-500">
                Accès illimité aux flashcards
              </div>
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

  const currentQuestion = questions[currentIndex]
  if (!currentQuestion) return null

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
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{currentQuestion.question}</h2>
      </div>

      {/* Réponses */}
      <div className="space-y-2 mb-4">
        {currentQuestion.reponses.map((reponse, index) => {
          const isSelected = selectedAnswer === reponse.id
          const showResult = phase === 'explanation'
          // Utiliser correctAnswerId du serveur au lieu de reponse.is_correct (SÉCURISÉ)
          const isCorrectAnswer = correctAnswerId === reponse.id
          
          let buttonClass = 'bg-white border-gray-200 hover:border-primary-300'
          
          if (showResult && correctAnswerId) {
            if (isCorrectAnswer) {
              buttonClass = 'bg-emerald-50 border-emerald-500'
            } else if (isSelected && !isCorrectAnswer) {
              buttonClass = 'bg-red-50 border-red-500'
            } else {
              buttonClass = 'bg-white border-gray-200 opacity-50'
            }
          } else if (phase === 'waiting' && isSelected) {
            buttonClass = 'bg-primary-50 border-primary-500'
          } else if (isSelected) {
            buttonClass = 'bg-primary-50 border-primary-500'
          }
          
          return (
            <button
              key={reponse.id}
              onClick={() => handleSelectAnswer(reponse.id)}
              disabled={phase !== 'playing' || selectedAnswer !== null}
              className={`w-full py-3 px-4 rounded-none border-2 text-left transition-all ${buttonClass}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600 flex-shrink-0">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-gray-800 text-sm sm:text-base">{reponse.texte}</span>
                </div>
                
                {showResult && correctAnswerId && (
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

      {/* Indicateur de vérification */}
      {phase === 'verifying' && (
        <div className="bg-blue-50 border border-blue-200 rounded-none p-4 mb-6 flex items-center gap-3">
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-600 border-t-transparent"></div>
          <span className="text-blue-700">Vérification de la réponse...</span>
        </div>
      )}

      {/* Explication */}
      {phase === 'explanation' && (
        <div className="bg-primary-50 border border-primary-200 rounded-none p-4 mb-6">
          <h3 className="font-semibold text-primary-800 mb-2">Explication</h3>
          <p className="text-primary-700 text-sm">{currentQuestion.explication}</p>
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

      {/* Message d'attente pendant le timer */}
      {phase === 'waiting' && (
        <div className="text-center text-gray-500 py-4">
          <Clock className="w-5 h-5 inline-block mr-2" />
          Attendez la fin du timer pour voir l&apos;explication...
        </div>
      )}
    </div>
  )
}
