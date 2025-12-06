'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSupabase } from '@/hooks/useSupabase'
import { Lock, CheckCircle, PlayCircle, Star, Trophy, Clock, ArrowLeft } from 'lucide-react'
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

export default function CategorieDetailPage() {
  const params = useParams()
  const router = useRouter()
  const supabase = useSupabase()
  const categorieId = params.categorieId as string
  
  const [categorie, setCategorie] = useState<Categorie | null>(null)
  const [niveaux, setNiveaux] = useState<NiveauProgression[]>([])
  const [gamification, setGamification] = useState<Gamification | null>(null)
  const [niveauxJouesAujourdhui, setNiveauxJouesAujourdhui] = useState(0)
  const [loading, setLoading] = useState(true)

  const LIMITE_NIVEAUX_JOUR = 3

  const loadData = useCallback(async () => {
    // Vérifier l'authentification
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login')
      return
    }

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
      .select('niveau_actuel, questions_correctes_niveau, niveau_debloque')
      .eq('user_id', user.id)
      .eq('categorie_id', categorieId)
      .limit(1)

    const progressionData = progressionList && progressionList.length > 0 ? progressionList[0] : null

    // Créer la structure des 10 niveaux basée sur niveau_actuel
    const niveauxStructure: NiveauProgression[] = []
    const niveauActuel = progressionData?.niveau_actuel || 1
    
    for (let i = 1; i <= 10; i++) {
      niveauxStructure.push({
        niveau: i,
        is_unlocked: i <= niveauActuel,
        is_completed: i < niveauActuel,
        meilleur_score: i === niveauActuel ? (progressionData?.questions_correctes_niveau || null) : null,
        tentatives: 0
      })
    }
    setNiveaux(niveauxStructure)

    // Charger la gamification (sans .single() pour éviter 406)
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
      // Créer l'entrée gamification si elle n'existe pas
      await supabase.from('gamification').insert({
        user_id: user.id,
        points_total: 0,
        streak_jours: 0
      })
      setGamification({ points_totaux: 0, serie_jours: 0 })
    }

    // Compter les niveaux joués aujourd'hui
    const aujourdhui = new Date().toISOString().split('T')[0]
    const { count } = await supabase
      .from('sessions_quiz')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('categorie_id', categorieId)
      .gte('started_at', aujourdhui)
      .eq('completed', true)

    setNiveauxJouesAujourdhui(count || 0)
    setLoading(false)
  }, [categorieId, router, supabase])

  useEffect(() => {
    loadData()
  }, [loadData])

  const getNiveauNom = (niveau: number): string => {
    const noms = [
      'Fondamentaux',
      'Laïcité',
      'Droits fondamentaux',
      'Démocratie et citoyenneté',
      'Égalité et solidarité',
      'Histoire des valeurs',
      'Défense des valeurs',
      'Europe et international',
      'Cas pratiques',
      'Maître'
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

  const handleStartQuiz = (niveau: number) => {
    if (niveauxJouesAujourdhui >= LIMITE_NIVEAUX_JOUR) {
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
      <div className="bg-white rounded-none border border-gray-200 p-6 mb-6">
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

      {/* Limite journalière */}
      <div className={`rounded-none border p-4 mb-6 ${
        niveauxJouesAujourdhui >= LIMITE_NIVEAUX_JOUR 
          ? 'bg-amber-50 border-amber-200' 
          : 'bg-primary-50 border-primary-200'
      }`}>
        <div className="flex items-center gap-3">
          <Clock className={`w-5 h-5 ${
            niveauxJouesAujourdhui >= LIMITE_NIVEAUX_JOUR ? 'text-amber-600' : 'text-primary-600'
          }`} />
          <div>
            <p className={`font-medium ${
              niveauxJouesAujourdhui >= LIMITE_NIVEAUX_JOUR ? 'text-amber-800' : 'text-primary-800'
            }`}>
              {niveauxJouesAujourdhui >= LIMITE_NIVEAUX_JOUR 
                ? 'Limite atteinte pour aujourd\'hui' 
                : `${LIMITE_NIVEAUX_JOUR - niveauxJouesAujourdhui} niveau(x) restant(s) aujourd'hui`
              }
            </p>
            <p className="text-sm text-gray-600">
              {niveauxJouesAujourdhui >= LIMITE_NIVEAUX_JOUR 
                ? 'Revenez demain pour continuer votre entraînement !' 
                : 'Maximum 3 niveaux par jour pour une meilleure mémorisation'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Grille des niveaux */}
      <div className="grid gap-3">
        {niveaux.map((niveau) => {
          const canPlay = niveau.is_unlocked && niveauxJouesAujourdhui < LIMITE_NIVEAUX_JOUR
          
          return (
            <div
              key={niveau.niveau}
              className={`bg-white rounded-none border p-4 transition-all ${
                niveau.is_unlocked 
                  ? 'border-gray-200 hover:border-primary-300' 
                  : 'border-gray-100 bg-gray-50 opacity-60'
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
                        Niveau {niveau.niveau}: {getNiveauNom(niveau.niveau)}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${getDifficulteColor(niveau.niveau)}`}>
                        {getDifficulteLabel(niveau.niveau)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      10 questions • 30s par question
                    </p>
                    
                    {/* Affichage du score et tentatives si déjà joué */}
                    {niveau.tentatives > 0 && (
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <div className={`text-sm font-medium px-2 py-1 rounded ${
                          niveau.is_completed 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          Meilleur score : {niveau.meilleur_score}/10 ({niveau.meilleur_score !== null ? niveau.meilleur_score * 10 : 0}%)
                        </div>
                        <span className="text-xs text-gray-400">
                          {niveau.tentatives} tentative{niveau.tentatives > 1 ? 's' : ''}
                        </span>
                        {niveau.is_completed && (
                          <span className="text-xs text-emerald-600 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Validé
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
    </div>
  )
}
