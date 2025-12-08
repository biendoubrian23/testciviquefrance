'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSupabase } from '@/hooks/useSupabase'
import { Lock, CheckCircle, PlayCircle, Star, Trophy, ArrowLeft, Unlock, Sparkles, X, Loader2 } from 'lucide-react'
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
  
  // États pour le popup de déblocage
  const [showUnlockPopup, setShowUnlockPopup] = useState(false)
  const [lastFailedLevel, setLastFailedLevel] = useState<number | null>(null)
  const [lastScore, setLastScore] = useState<number | null>(null)
  const [isUnlocking, setIsUnlocking] = useState(false)
  const [allLevelsUnlocked, setAllLevelsUnlocked] = useState(false)

  // Limite désactivée pour le moment (sera activée avec Stripe)
  // const LIMITE_NIVEAUX_JOUR = 3

  const loadData = useCallback(async () => {
    // Vérifier l'authentification
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }

    // Charger le profil pour savoir si l'utilisateur a débloqué tous les niveaux
    const { data: profileData } = await supabase
      .from('profiles')
      .select('all_levels_unlocked')
      .eq('id', user.id)
      .single()
    
    const hasAllLevelsUnlocked = profileData?.all_levels_unlocked || false
    setAllLevelsUnlocked(hasAllLevelsUnlocked)

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

    // Calculer le niveau maximum débloqué basé sur les scores réussis (>= 8/10)
    // Un niveau N+1 est débloqué si le niveau N a été réussi avec >= 70%
    let niveauMaxDebloque = 1 // Niveau 1 toujours débloqué
    for (let i = 1; i <= 10; i++) {
      const scoreNiveau = meilleursScoresParNiveau.get(i) || 0
      // Si le niveau i a été réussi (score >= 8), débloquer le niveau i+1
      if (scoreNiveau >= 8) {
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
    
    for (let i = 1; i <= 10; i++) {
      const meilleurScore = meilleursScoresParNiveau.get(i) || null
      const tentatives = tentativesParNiveau.get(i) || 0
      // Un niveau est complété si on a obtenu >= 8/10
      const isCompleted = meilleurScore !== null && meilleurScore >= 8
      
      niveauxStructure.push({
        niveau: i,
        // Débloqué selon la progression normale (l'achat permet juste de passer avec 5-7/10)
        is_unlocked: i <= niveauActuel,
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

    // Vérifier si on doit afficher le popup de déblocage
    // Conditions :
    // 1. La dernière session existe
    // 2. Le score était 5, 6 ou 7 (échec proche)
    // 3. Le niveau joué était le niveau actuel (le plus haut débloqué mais pas encore complété)
    // 4. Ce n'est pas le niveau 10 (dernier niveau)
    if (lastSession && niveauActuel < 10) {
      const { niveau: lastNiveau, score: lastScoreValue } = lastSession
      
      // Le niveau actuel est celui qu'on peut jouer mais pas encore validé
      // Donc si lastNiveau === niveauActuel et score entre 5 et 7, on propose le déblocage
      if (lastNiveau === niveauActuel && lastScoreValue >= 5 && lastScoreValue <= 7) {
        setLastFailedLevel(lastNiveau)
        setLastScore(lastScoreValue)
        // Afficher le popup après un court délai
        setTimeout(() => {
          setShowUnlockPopup(true)
        }, 1000)
      }
    }

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
    router.push(`/dashboard/entrainement/${categorieId}/quiz?niveau=${niveau}`)
  }

  // Fonction pour débloquer le niveau suivant (micro-transaction ou utilisation de l'achat)
  const handleUnlockNextLevel = async () => {
    if (!lastFailedLevel) return
    
    // Si l'utilisateur n'a pas l'achat, rediriger vers la page d'achat
    if (!allLevelsUnlocked) {
      router.push('/dashboard/credits')
      return
    }
    
    setIsUnlocking(true)
    
    try {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        alert('Vous devez être connecté')
        setIsUnlocking(false)
        return
      }
      
      // Mettre à jour la progression dans la base de données
      const { data: existingProgression } = await supabase
        .from('progression_niveaux')
        .select('niveau_actuel')
        .eq('user_id', user.id)
        .eq('categorie_id', categorieId)
        .single()

      if (existingProgression) {
        if (lastFailedLevel >= existingProgression.niveau_actuel) {
          await supabase
            .from('progression_niveaux')
            .update({ 
              niveau_actuel: lastFailedLevel + 1,
              updated_at: new Date().toISOString()
            })
            .eq('user_id', user.id)
            .eq('categorie_id', categorieId)
        }
      } else {
        await supabase
          .from('progression_niveaux')
          .insert({
            user_id: user.id,
            categorie_id: categorieId,
            niveau_actuel: lastFailedLevel + 1
          })
      }
      
      // Fermer le popup et aller directement au niveau suivant
      setShowUnlockPopup(false)
      router.push(`/dashboard/entrainement/${categorieId}/quiz?niveau=${lastFailedLevel + 1}`)
    } catch (error) {
      console.error('Erreur déblocage:', error)
      setIsUnlocking(false)
    }
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

      {/* Info catégorie */}
      <div className="bg-white border-2 border-gray-900 p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{categorie.nom}</h1>
        <p className="text-gray-600 mb-4">{categorie.description}</p>
        
        {/* Barre de progression globale */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progression</span>
            <span>{niveauxCompletes}/10 niveaux</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary-600 transition-all duration-500"
              style={{ width: `${progressionPourcentage}%` }}
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
          const canPlay = niveau.is_unlocked
          
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

      {/* Popup de déblocage du niveau suivant */}
      {showUnlockPopup && lastFailedLevel && lastScore && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 relative animate-fade-in shadow-2xl">
            {/* Bouton fermer */}
            <button
              onClick={() => setShowUnlockPopup(false)}
              className="absolute top-3 right-3 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              {/* Icône */}
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-emerald-100 rounded-full flex items-center justify-center">
                <Unlock className="w-8 h-8 text-primary-600" />
              </div>
              
              {/* Titre */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Vous étiez proche ! 😔
              </h3>
              
              {/* Score */}
              <div className="inline-block bg-amber-50 border border-amber-200 px-4 py-2 mb-4">
                <span className="text-amber-700 font-medium">
                  Niveau {lastFailedLevel} : {lastScore}/10
                </span>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 mb-6">
                Vous avez obtenu <strong>{lastScore}/10</strong> au niveau {lastFailedLevel}.
                <br />
                Passez directement au niveau suivant sans recommencer !
              </p>
              
              {/* Prix et bouton */}
              <div className="bg-gradient-to-r from-primary-50 to-emerald-50 border border-primary-200 p-4 mb-4">
                {!allLevelsUnlocked && (
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-primary-600" />
                    <span className="text-2xl font-bold text-primary-600">0,99€</span>
                  </div>
                )}
                
                <button
                  onClick={handleUnlockNextLevel}
                  disabled={isUnlocking}
                  className="w-full bg-primary-600 text-white py-3 px-4 font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  {isUnlocking ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Déblocage...</span>
                    </>
                  ) : allLevelsUnlocked ? (
                    <>
                      <Unlock className="w-5 h-5" />
                      <span>Passer au niveau {lastFailedLevel + 1}</span>
                    </>
                  ) : (
                    <>
                      <Unlock className="w-5 h-5" />
                      <span>Acheter le déblocage</span>
                    </>
                  )}
                </button>
                
                {allLevelsUnlocked && (
                  <p className="text-xs text-center text-primary-600 mt-2">
                    Inclus dans votre achat
                  </p>
                )}
              </div>
              
              {/* Option recommencer */}
              <button
                onClick={() => {
                  setShowUnlockPopup(false)
                  router.push(`/dashboard/entrainement/${categorieId}/quiz?niveau=${lastFailedLevel}`)
                }}
                className="text-gray-500 hover:text-gray-700 text-sm underline"
              >
                Non merci, recommencer le niveau {lastFailedLevel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
