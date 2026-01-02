'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSupabase } from '@/hooks/useSupabase'
import { Lock, CheckCircle, PlayCircle, Star, Trophy, ArrowLeft, Sparkles } from 'lucide-react'
import Link from 'next/link'

interface Categorie {
  id: string
  nom: string
  description: string
  nombre_questions: number
}

interface NiveauProgression {
  niveau: number
  is_unlocked: boolean
  is_completed: boolean
  meilleur_score: number | null
  tentatives: number
}

interface Gamification {
  points_totaux: number
  serie_jours: number
}

interface LastSession {
  niveau: number
  score: number
  created_at: string
}

export default function CategorieDetailPage() {
  const params = useParams()
  const router = useRouter()
  const supabase = useSupabase()
  const categorieId = params.categorieId as string
  
  const [categorie, setCategorie] = useState<Categorie | null>(null)
  const [niveaux, setNiveaux] = useState<NiveauProgression[]>([])
  const [gamification, setGamification] = useState<Gamification | null>(null)
  const [loading, setLoading] = useState(true)
  
  // États pour les restrictions d'accès
  const [allLevelsUnlocked, setAllLevelsUnlocked] = useState(false)
  const [hasActiveSubscription, setHasActiveSubscription] = useState(false)

  // Limite désactivée pour le moment (sera activée avec Stripe)
  // const LIMITE_NIVEAUX_JOUR = 3

  const loadData = useCallback(async () => {
    // Vérifier l'authentification
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }

    // Charger le profil pour savoir si l'utilisateur a débloqué tous les niveaux ET son statut d'abonnement
    const { data: profileData } = await supabase
      .from('profiles')
      .select('all_levels_unlocked, subscription_status')
      .eq('id', user.id)
      .single()
    
    const hasAllLevelsUnlocked = profileData?.all_levels_unlocked || false
    const hasActiveSubscription = profileData?.subscription_status === 'active'
    setAllLevelsUnlocked(hasAllLevelsUnlocked)
    setHasActiveSubscription(hasActiveSubscription)

    // Charger la catégorie (sans .single() pour éviter 406)
    const { data: categorieList } = await supabase
      .from('categories')
      .select('*')
      .eq('id', categorieId)
      .limit(1)

    const categorieData = categorieList && categorieList.length > 0 ? categorieList[0] : null

    if (categorieData) {
      setCategorie(categorieData)
    } else {
      // Catégorie non trouvée, retour à l'entrainement
      router.push('/dashboard/entrainement')
      return
    }

    // Charger la progression depuis la BD (sans .single() pour éviter erreur 406)
    const { data: progressionList } = await supabase
      .from('progression_niveaux')
      .select('niveau_actuel, questions_correctes_niveau, niveau_debloque, niveaux_aujourd_hui')
      .eq('user_id', user.id)
      .eq('categorie_id', categorieId)
      .limit(1)

    const progressionData = progressionList && progressionList.length > 0 ? progressionList[0] : null

    // Récupérer les meilleurs scores par niveau depuis sessions_quiz
    const { data: sessionsData } = await supabase
      .from('sessions_quiz')
      .select('niveau, score')
      .eq('user_id', user.id)
      .eq('categorie_id', categorieId)
      .eq('completed', true)

    // Calculer le meilleur score pour chaque niveau
    const meilleursScoresParNiveau = new Map<number, number>()
    const tentativesParNiveau = new Map<number, number>()
    
    if (sessionsData) {
      for (const session of sessionsData) {
        const currentBest = meilleursScoresParNiveau.get(session.niveau) || 0
        if (session.score > currentBest) {
          meilleursScoresParNiveau.set(session.niveau, session.score)
        }
        tentativesParNiveau.set(session.niveau, (tentativesParNiveau.get(session.niveau) || 0) + 1)
      }
    }

    // Récupérer la dernière session jouée pour cette catégorie
    const { data: lastSessionData } = await supabase
      .from('sessions_quiz')
      .select('niveau, score, completed_at')
      .eq('user_id', user.id)
      .eq('categorie_id', categorieId)
      .eq('completed', true)
      .order('completed_at', { ascending: false })
      .limit(1)

    const lastSession: LastSession | null = lastSessionData && lastSessionData.length > 0 
      ? lastSessionData[0] 
      : null

    // Calculer le niveau maximum débloqué basé sur les scores réussis
    // - Score >= 8/10 : déblocage normal
    // - Score >= 5/10 ET all_levels_unlocked : déblocage avec achat
    let niveauMaxDebloque = 1 // Niveau 1 toujours débloqué
    for (let i = 1; i <= 10; i++) {
      const scoreNiveau = meilleursScoresParNiveau.get(i) || 0
      // Si le niveau i a été réussi (score >= 8), débloquer le niveau i+1
      if (scoreNiveau >= 8) {
        niveauMaxDebloque = Math.max(niveauMaxDebloque, i + 1)
      }
      // Si l'utilisateur a all_levels_unlocked et score >= 5, débloquer aussi
      else if (allLevelsUnlocked && scoreNiveau >= 5) {
        niveauMaxDebloque = Math.max(niveauMaxDebloque, i + 1)
      }
    }
    // Ne pas dépasser le niveau 10
    niveauMaxDebloque = Math.min(niveauMaxDebloque, 10)

    // Utiliser le max entre progression_niveaux et le calcul basé sur les scores
    const niveauActuelFromDB = progressionData?.niveau_actuel || 1
    const niveauActuel = Math.max(niveauActuelFromDB, niveauMaxDebloque)

    // Créer la structure des 10 niveaux
    const niveauxStructure: NiveauProgression[] = []
    
    // Déterminer si l'utilisateur a accès premium (abonnement actif OU achat complet)
    const hasPremiumAccess = hasActiveSubscription || hasAllLevelsUnlocked
    
    for (let i = 1; i <= 10; i++) {
      const meilleurScore = meilleursScoresParNiveau.get(i) || null
      const tentatives = tentativesParNiveau.get(i) || 0
      // Un niveau est complété si on a obtenu >= 8/10
      const isCompleted = meilleurScore !== null && meilleurScore >= 8
      
      // Vérifier si le niveau précédent a un score de 5-10/10 (condition pour utiliser l'achat)
      const previousLevelScore = i > 1 ? (meilleursScoresParNiveau.get(i - 1) || null) : null
      const canUnlockWithPurchase = hasAllLevelsUnlocked && i > 1 && !isCompleted && previousLevelScore !== null && previousLevelScore >= 5
      
      // NOUVELLE LOGIQUE : Membres gratuits = niveau 1 uniquement
      let isUnlocked: boolean
      if (hasPremiumAccess) {
        // Utilisateurs premium : déblocage progressif normal OU déblocable avec l'achat
        isUnlocked = i <= niveauActuel || canUnlockWithPurchase
      } else {
        // Utilisateurs gratuits : seulement niveau 1
        isUnlocked = i === 1
      }
      
      niveauxStructure.push({
        niveau: i,
        is_unlocked: isUnlocked,
        is_completed: isCompleted,
        meilleur_score: meilleurScore,
        tentatives: tentatives
      })
    }
    setNiveaux(niveauxStructure)

    // Charger la gamification (points et série)
    const { data: gamificationList } = await supabase
      .from('gamification')
      .select('points_total, streak_jours')
      .eq('user_id', user.id)
      .limit(1)

    const gamificationData = gamificationList && gamificationList.length > 0 ? gamificationList[0] : null

    if (gamificationData) {
      setGamification({
        points_totaux: gamificationData.points_total || 0,
        serie_jours: gamificationData.streak_jours || 0
      })
    } else {
      setGamification({ points_totaux: 0, serie_jours: 0 })
    }

    // NOTE : Le système de déblocage de niveau suivant (0,99€) s'affiche UNIQUEMENT
    // dans le récapitulatif du quiz après avoir terminé un niveau avec score 5-7/10.
    // Il ne s'affiche PAS sur cette page de liste des niveaux.

    // Limite désactivée pour le moment
    setLoading(false)
  }, [categorieId, router, supabase])

  useEffect(() => {
    loadData()
  }, [loadData])

  const getNiveauNom = (niveau: number): string => {
    // Noms des niveaux selon la catégorie (noms officiels du référentiel)
    const nomsParCategorie: Record<string, string[]> = {
      // Thème 1 : Principes et valeurs de la République
      'Principes et valeurs de la République': [
        'La devise républicaine',
        'Les symboles constitutionnels',
        'La laïcité - Fondements',
        'La laïcité - Application',
        'Liberté et ses formes',
        'Égalité des droits',
        'Fraternité et solidarité',
        'Langue française',
        'Lutte contre les discriminations',
        'Maître des valeurs'
      ],
      // Thème 2 : Symboles de la France
      'Symboles de la France': [
        'Le drapeau tricolore',
        'La Marseillaise',
        'La devise républicaine',
        'Marianne',
        'Le coq gaulois',
        'Le sceau de la République',
        'La fête nationale (14 juillet)',
        'Monuments symboliques',
        'Lieux de mémoire',
        'Maître des symboles'
      ],
      // Thème 3 : Système institutionnel et politique
      'Système institutionnel et politique': [
        'État de droit et démocratie',
        'Le droit de vote',
        'Le Président de la République',
        'Le Gouvernement',
        'Le Parlement',
        'La Justice',
        'Les collectivités territoriales',
        'L\'Union européenne - Fondements',
        'L\'Union européenne - Institutions',
        'Maître des institutions'
      ],
      // Thème 4 : Droits et devoirs
      'Droits et devoirs': [
        'Droits fondamentaux',
        'Libertés individuelles',
        'Droits sociaux et économiques',
        'Textes garants des droits',
        'Devoirs et obligations',
        'Respect des lois',
        'Fiscalité et cotisations',
        'Participation citoyenne',
        'Attitude citoyenne',
        'Maître citoyen'
      ],
      // Thème 5 : Histoire, géographie et culture
      'Histoire, géographie et culture': [
        'La monarchie et la Révolution',
        'Le XIXe siècle',
        'Les conflits mondiaux',
        'La Ve République',
        'Géographie de la France',
        'Territoires d\'outre-mer',
        'Patrimoine et monuments',
        'Artistes et culture',
        'Gastronomie et traditions',
        'Maître de l\'Histoire'
      ],
      // Thème 6 : Vivre dans la société française
      'Vivre dans la société française': [
        'S\'installer en France',
        'Démarches administratives',
        'Accès à la nationalité',
        'Le système de santé',
        'Travailler en France',
        'Le droit du travail',
        'Autorité parentale',
        'Le système éducatif',
        'Logement et vie quotidienne',
        'Maître de la vie en France'
      ]
    }

    const noms = nomsParCategorie[categorie?.nom || ''] || [
      'Niveau 1', 'Niveau 2', 'Niveau 3', 'Niveau 4', 'Niveau 5',
      'Niveau 6', 'Niveau 7', 'Niveau 8', 'Niveau 9', 'Niveau 10'
    ]
    return noms[niveau - 1] || `Niveau ${niveau}`
  }

  const getDifficulteLabel = (niveau: number): string => {
    if (niveau <= 3) return 'Facile'
    if (niveau <= 5) return 'Moyen'
    if (niveau <= 7) return 'Difficile'
    if (niveau <= 9) return 'Expert'
    return 'Maître'
  }

  const getDifficulteColor = (niveau: number): string => {
    if (niveau <= 3) return 'text-emerald-600 bg-emerald-50'
    if (niveau <= 5) return 'text-primary-600 bg-primary-50'
    if (niveau <= 7) return 'text-amber-600 bg-amber-50'
    if (niveau <= 9) return 'text-orange-600 bg-orange-50'
    return 'text-red-600 bg-red-50'
  }

  // Retourne le nombre de questions selon le niveau
  // Niveaux 1-4 : 10 questions, Niveaux 5-10 : 5 questions
  const getNombreQuestions = (niveau: number): number => {
    return niveau <= 4 ? 10 : 5
  }

  const handleStartQuiz = (niveau: number) => {
    // Vérifier si l'utilisateur a accès premium
    const hasPremiumAccess = hasActiveSubscription || allLevelsUnlocked
    
    // Si membre gratuit essaie d'accéder aux niveaux 2+, rediriger vers credits
    if (!hasPremiumAccess && niveau > 1) {
      router.push('/dashboard/credits')
      return
    }
    
    router.push(`/dashboard/entrainement/${categorieId}/quiz?niveau=${niveau}`)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!categorie) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Catégorie non trouvée</p>
        <Link href="/dashboard/entrainement" className="text-primary-600 hover:underline mt-4 inline-block">
          Retour aux catégories
        </Link>
      </div>
    )
  }

  const niveauxCompletes = niveaux.filter(n => n.is_completed).length
  const progressionPourcentage = (niveauxCompletes / 10) * 100
  
  // Calculer le niveau actuel (le plus haut niveau débloqué)
  const niveauActuel = Math.max(...niveaux.filter(n => n.is_unlocked).map(n => n.niveau), 0)

  return (
    <div className="max-w-4xl mx-auto px-0 sm:px-4 py-6">
      {/* Header avec navigation */}
      <Link 
        href="/dashboard/entrainement" 
        className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Retour aux catégories</span>
      </Link>

      {/* Message info pour membres gratuits */}
      {!hasActiveSubscription && !allLevelsUnlocked && (
        <div className="bg-amber-50 border border-amber-300 p-3 mb-6 rounded-lg">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span className="text-sm font-medium text-amber-900">
                Niveau 1 uniquement • <span className="text-amber-700">Abonnez-vous pour tout débloquer</span>
              </span>
            </div>
            <button
              onClick={() => router.push('/dashboard/credits')}
              className="flex-shrink-0 bg-amber-600 text-white px-3 py-1.5 text-xs font-medium rounded hover:bg-amber-700 transition-colors"
            >
              Voir les offres
            </button>
          </div>
        </div>
      )}

      {/* Info catégorie */}
      <div className="bg-white border-2 border-gray-900 p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{categorie.nom}</h1>
        <p className="text-gray-600 mb-4">{categorie.description}</p>
        
        {/* Barre de progression globale */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progression</span>
            <span>{niveauActuel}/10 niveaux</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary-600 transition-all duration-500"
              style={{ width: `${(niveauActuel / 10) * 100}%` }}
            />
          </div>
        </div>

        {/* Stats rapides */}
        <div className="flex gap-6 text-sm">
          {gamification && (
            <>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500" />
                <span className="text-gray-700">{gamification.points_totaux} points</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-primary-600" />
                <span className="text-gray-700">{gamification.serie_jours} jours consécutifs</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Grille des niveaux */}
      <div className="grid gap-3">
        {niveaux.map((niveau) => {
          // Permettre le clic sur les niveaux verrouillés pour rediriger vers la page credits
          const isLockedForFreeUser = !hasActiveSubscription && !allLevelsUnlocked && niveau.niveau > 1
          const canPlay = niveau.is_unlocked || isLockedForFreeUser
          
          return (
            <div
              key={niveau.niveau}
              className={`bg-white rounded-xl border-2 p-4 transition-all ${
                niveau.is_unlocked 
                  ? 'border-gray-900 hover:border-primary-600' 
                  : 'border-gray-400 bg-gray-50 opacity-60'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Indicateur de statut */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    niveau.is_completed 
                      ? 'bg-emerald-100' 
                      : niveau.is_unlocked 
                        ? 'bg-primary-100' 
                        : 'bg-gray-100'
                  }`}>
                    {niveau.is_completed ? (
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    ) : niveau.is_unlocked ? (
                      <span className="text-primary-600 font-bold">{niveau.niveau}</span>
                    ) : (
                      <Lock className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                  
                  {/* Info niveau */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-gray-900">
                        <span className="font-bold">Niveau</span> {niveau.niveau}: {getNiveauNom(niveau.niveau)}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${getDifficulteColor(niveau.niveau)}`}>
                        {getDifficulteLabel(niveau.niveau)}
                      </span>
                      
                      {/* Badge "Déblocable avec achat" - COMMENTÉ POUR SIMPLIFIER L'UI
                      {(() => {
                        const previousLevelScore = niveau.niveau > 1 ? (niveaux.find(n => n.niveau === niveau.niveau - 1)?.meilleur_score || null) : null
                        const canUnlockWithPurchase = allLevelsUnlocked && niveau.niveau > 1 && !niveau.is_completed && previousLevelScore !== null && previousLevelScore >= 5
                        return canUnlockWithPurchase && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 border border-amber-300 whitespace-nowrap flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Déblocable
                          </span>
                        )
                      })()}
                      */}
                    </div>
                    <p className="text-sm text-gray-500">
                      {getNombreQuestions(niveau.niveau)} questions
                    </p>
                    
                    {/* Affichage du score si niveau joué */}
                    {niveau.meilleur_score !== null && (
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <div className={`text-sm font-medium px-2 py-1 rounded ${
                          niveau.is_completed 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {(() => {
                            const nbQuestions = getNombreQuestions(niveau.niveau)
                            const pourcentage = Math.round((niveau.meilleur_score / nbQuestions) * 100)
                            return niveau.is_completed ? (
                              <>✓ Meilleur score : {niveau.meilleur_score}/{nbQuestions} ({pourcentage}%)</>
                            ) : (
                              <>Meilleur score : {niveau.meilleur_score}/{nbQuestions} ({pourcentage}%)</>
                            )
                          })()}
                        </div>
                        {niveau.tentatives > 0 && (
                          <span className="text-xs text-gray-400">
                            {niveau.tentatives} tentative{niveau.tentatives > 1 ? 's' : ''}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bouton action */}
                <button
                  onClick={() => handleStartQuiz(niveau.niveau)}
                  disabled={!canPlay}
                  className={`w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 sm:py-2 rounded-none font-medium transition-colors ${
                    canPlay
                      ? 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800'
                      : !hasActiveSubscription && !allLevelsUnlocked && niveau.niveau > 1
                        ? 'bg-amber-100 text-amber-700 hover:bg-amber-200 border-2 border-amber-300 cursor-pointer'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {niveau.is_completed ? (
                    <>
                      <PlayCircle className="w-4 h-4" />
                      <span>Rejouer</span>
                    </>
                  ) : niveau.is_unlocked ? (
                    <>
                      <PlayCircle className="w-4 h-4" />
                      <span>Commencer</span>
                    </>
                  ) : !hasActiveSubscription && !allLevelsUnlocked && niveau.niveau > 1 ? (
                    <>
                      <Lock className="w-4 h-4" />
                      <span className="hidden sm:inline">S'abonner pour débloquer</span>
                      <span className="sm:hidden">S'abonner</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Verrouillé</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Message encouragement */}
      {niveauxCompletes === 10 && (
        <div className="mt-6 bg-gradient-to-r from-emerald-50 to-primary-50 border border-emerald-200 rounded-none p-6 text-center">
          <Trophy className="w-12 h-12 text-amber-500 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-gray-900 mb-1">Félicitations !</h3>
          <p className="text-gray-600">
            Vous avez complété tous les niveaux de cette catégorie. 
            Continuez à vous entraîner pour améliorer vos scores !
          </p>
        </div>
      )}

      {/* NOTE : Le popup de déblocage de niveau a été supprimé de cette page.
          Il s'affiche UNIQUEMENT dans le récapitulatif du quiz (après avoir terminé un niveau). */}
    </div>
  )
}
