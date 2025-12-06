'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { useSupabase } from '@/hooks/useSupabase'
import { Clock, CheckCircle, XCircle, ArrowRight, Trophy, Star, Gift, Sparkles } from 'lucide-react'

interface Question {
  id: string
  question: string
  explication: string
  reponses: Reponse[]
}

interface Reponse {
  id: string
  texte: string
  is_correct: boolean
  ordre: number
}

interface ReponseUtilisateur {
  question_id: string
  reponse_id: string | null
  is_correct: boolean
  temps_reponse: number
}

interface QuestionDB {
  id: string
  question: string
  explication: string
  reponses: Reponse[]
}

type QuizPhase = 'loading' | 'playing' | 'waiting' | 'explanation' | 'results' | 'offer'

export default function QuizPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()
  const supabase = useSupabase()
  const categorieId = params.categorieId as string
  const niveau = parseInt(searchParams.get('niveau') || '1')
  
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState(30)
  const [phase, setPhase] = useState<QuizPhase>('loading')
  const [reponses, setReponses] = useState<ReponseUtilisateur[]>([])
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [showOffer, setShowOffer] = useState(false)
  const [offerType, setOfferType] = useState<'first10' | 'level45' | null>(null)
  
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const startTimeRef = useRef<number>(0)
  const questionsRef = useRef<Question[]>([])
  const currentIndexRef = useRef(0)
  const selectedAnswerRef = useRef<string | null>(null)
  const phaseRef = useRef<QuizPhase>('loading')

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

  const handleTimeUp = useCallback(() => {
    // Si pas de réponse sélectionnée, enregistrer comme non-répondu
    if (phaseRef.current === 'playing') {
      const currentQuestion = questionsRef.current[currentIndexRef.current]
      if (!currentQuestion) return
      
      const tempsReponse = TIMER_DURATION
      const answer = selectedAnswerRef.current
      
      setReponses(prev => [...prev, {
        question_id: currentQuestion.id,
        reponse_id: answer,
        is_correct: answer ? currentQuestion.reponses.find(r => r.id === answer)?.is_correct || false : false,
        temps_reponse: tempsReponse
      }])
      
      setPhase('explanation')
    }
  }, [])

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
    // Vérifier l'authentification
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }

    // Calculer l'offset pour ce niveau (niveau 1 = questions 0-9, niveau 2 = questions 10-19, etc.)
    const offset = (niveau - 1) * 10
    console.log('loadQuestions - niveau:', niveau, 'offset:', offset, 'categorieId:', categorieId)

    // Charger 10 questions pour ce niveau spécifique
    const { data: questionsData, error } = await supabase
      .from('questions')
      .select(`
        id,
        question,
        explication,
        reponses (
          id,
          texte,
          is_correct,
          ordre
        )
      `)
      .eq('categorie_id', categorieId)
      .order('created_at')
      .range(offset, offset + 9) // 10 questions par niveau

    console.log('Questions chargées:', questionsData?.length || 0, 'erreur:', error)

    if (error || !questionsData || questionsData.length === 0) {
      console.error('Erreur chargement questions:', error)
      router.push(`/dashboard/entrainement/${categorieId}`)
      return
    }

    // S'assurer qu'on a exactement 10 questions maximum
    const limitedQuestions = questionsData.slice(0, 10)
    console.log('Questions limitées à:', limitedQuestions.length)

    // Mélanger les réponses de chaque question
    const questionsWithShuffledAnswers = (limitedQuestions as QuestionDB[]).map((q: QuestionDB) => ({
      ...q,
      reponses: shuffleArray([...q.reponses])
    }))

    setQuestions(questionsWithShuffledAnswers)
    
    // Créer une session
    const { data: session } = await supabase
      .from('sessions_quiz')
      .insert({
        user_id: user.id,
        categorie_id: categorieId,
        niveau: niveau
      })
      .select()
      .single()

    if (session) {
      setSessionId(session.id)
    }

    setPhase('playing')
    startTimer()
  }, [categorieId, niveau, router, startTimer])

  // Charger les questions au démarrage
  useEffect(() => {
    loadQuestions()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [loadQuestions])

  const handleSelectAnswer = (reponseId: string) => {
    if (phase !== 'playing' || selectedAnswer) return
    
    setSelectedAnswer(reponseId)
    const tempsReponse = Math.round((Date.now() - startTimeRef.current) / 1000)
    
    const currentQuestion = questions[currentIndex]
    const isCorrect = currentQuestion.reponses.find(r => r.id === reponseId)?.is_correct || false
    
    setReponses(prev => [...prev, {
      question_id: currentQuestion.id,
      reponse_id: reponseId,
      is_correct: isCorrect,
      temps_reponse: tempsReponse
    }])
    
    // Passer en mode "attente" jusqu'à la fin du timer
    setPhase('waiting')
  }

  // Quand le timer atteint 0, passer à l'explication
  useEffect(() => {
    if (timeLeft === 0 && (phase === 'playing' || phase === 'waiting')) {
      if (timerRef.current) clearInterval(timerRef.current)
      setPhase('explanation')
    }
  }, [timeLeft, phase])

  const handleNextQuestion = async () => {
    setSelectedAnswer(null)
    
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
    
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const score = reponses.filter(r => r.is_correct).length
    const tempsMoyen = Math.round(reponses.reduce((acc, r) => acc + r.temps_reponse, 0) / reponses.length)

    // Mettre à jour la session
    if (sessionId) {
      await supabase
        .from('sessions_quiz')
        .update({
          score,
          temps_moyen: tempsMoyen,
          completed: true
        })
        .eq('id', sessionId)
    }

    // Mettre à jour ou créer la progression (sans .single() pour éviter 406)
    const { data: progressList } = await supabase
      .from('progression_niveaux')
      .select()
      .eq('user_id', user.id)
      .eq('categorie_id', categorieId)
      .limit(1)
    
    const existingProgress = progressList && progressList.length > 0 ? progressList[0] : null

    const isCompleted = score >= 7 // 70% pour valider le niveau

    if (existingProgress) {
      // Mettre à jour si le score est meilleur ou si on passe au niveau suivant
      const updateData: Record<string, unknown> = {
        questions_correctes_niveau: Math.max(existingProgress.questions_correctes_niveau || 0, score),
        questions_repondues_niveau: (existingProgress.questions_repondues_niveau || 0) + reponses.length,
        date_dernier_niveau: new Date().toISOString()
      }
      
      // Passer au niveau suivant si réussi
      if (isCompleted && niveau >= (existingProgress.niveau_actuel || 1)) {
        updateData.niveau_actuel = niveau + 1
        updateData.niveau_debloque = true
      }
      
      await supabase
        .from('progression_niveaux')
        .update(updateData)
        .eq('id', existingProgress.id)
    } else {
      // Créer la progression
      await supabase
        .from('progression_niveaux')
        .insert({
          user_id: user.id,
          categorie_id: categorieId,
          niveau_actuel: isCompleted ? niveau + 1 : niveau,
          questions_correctes_niveau: score,
          questions_repondues_niveau: reponses.length,
          niveau_debloque: true,
          date_dernier_niveau: new Date().toISOString()
        })
    }

    // Mettre à jour la gamification
    const pointsGagnes = score * 10 + (isCompleted ? 50 : 0)
    
    const { data: gamificationList } = await supabase
      .from('gamification')
      .select()
      .eq('user_id', user.id)
      .limit(1)
    
    const gamification = gamificationList && gamificationList.length > 0 ? gamificationList[0] : null

    if (gamification) {
      // Vérifier la série de jours
      const lastActive = new Date(gamification.derniere_activite)
      const today = new Date()
      const diffDays = Math.floor((today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24))
      
      const newSerieJours = diffDays === 1 ? (gamification.streak_jours || 0) + 1 : (diffDays === 0 ? (gamification.streak_jours || 0) : 1)
      
      await supabase
        .from('gamification')
        .update({
          points_total: (gamification.points_total || 0) + pointsGagnes,
          streak_jours: newSerieJours,
          meilleure_serie: Math.max(gamification.meilleure_serie || 0, newSerieJours),
          derniere_activite: new Date().toISOString()
        })
        .eq('id', gamification.id)
    } else {
      await supabase
        .from('gamification')
        .insert({
          user_id: user.id,
          points_total: pointsGagnes,
          streak_jours: 1,
          meilleure_serie: 1
        })
    }

    // Mettre à jour les statistiques globales (sans .single() pour éviter 406)
    const { data: statsList } = await supabase
      .from('statistiques')
      .select()
      .eq('user_id', user.id)
      .limit(1)
    
    const stats = statsList && statsList.length > 0 ? statsList[0] : null

    if (stats) {
      const newTotalQuestions = (stats.total_questions_repondues || 0) + reponses.length
      const newBonnesReponses = (stats.total_bonnes_reponses || 0) + score
      const newTauxReussite = newTotalQuestions > 0 ? Math.round((newBonnesReponses / newTotalQuestions) * 100) : 0
      
      await supabase
        .from('statistiques')
        .update({
          total_questions_repondues: newTotalQuestions,
          total_bonnes_reponses: newBonnesReponses,
          temps_total_etude: (stats.temps_total_etude || 0) + (tempsMoyen * reponses.length),
          derniere_activite: new Date().toISOString()
        })
        .eq('id', stats.id)
    }

    setPhase('results')
  }

  // Rendu du timer circulaire
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
            className="transition-all duration-1000"
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
          const showResult = phase === 'explanation' || phase === 'waiting'
          const isCorrect = reponse.is_correct
          
          let buttonClass = 'bg-white border-gray-200 hover:border-primary-300'
          
          if (showResult) {
            if (isCorrect) {
              buttonClass = 'bg-emerald-50 border-emerald-500'
            } else if (isSelected && !isCorrect) {
              buttonClass = 'bg-red-50 border-red-500'
            } else {
              buttonClass = 'bg-white border-gray-200 opacity-50'
            }
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
                
                {showResult && (
                  isCorrect ? (
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
