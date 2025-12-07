import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

interface CompleteRequest {
  sessionId: string
  categorieId: string
  niveau: number
  score: number
  totalQuestions: number
  tempsTotal: number
  reponses: {
    questionId: string
    reponseId: string | null
    isCorrect: boolean
    tempsReponse: number
  }[]
}

export async function POST(request: NextRequest) {
  try {
    const body: CompleteRequest = await request.json()
    const { sessionId, categorieId, niveau, score, totalQuestions, tempsTotal } = body

    const supabase = await createClient()

    // Vérifier l'authentification
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      )
    }

    // 1. Mettre à jour la session
    if (sessionId) {
      await supabase
        .from('sessions_quiz')
        .update({
          score: score,
          temps_total: tempsTotal,
          completed: true
        })
        .eq('id', sessionId)
    }

    // 2. Calculer les points (10 points par bonne réponse + bonus)
    let pointsGagnes = score * 10
    if (score === totalQuestions) {
      pointsGagnes += 50 // Bonus score parfait
    } else if (score >= totalQuestions * 0.8) {
      pointsGagnes += 20 // Bonus 80%+
    }

    // 3. Mettre à jour la gamification
    const { data: gamification } = await supabase
      .from('gamification')
      .select('points_total, streak_jours, derniere_activite')
      .eq('user_id', user.id)
      .single()

    if (gamification) {
      const aujourdHui = new Date().toISOString().split('T')[0]
      const derniereActivite = gamification.derniere_activite?.split('T')[0]
      
      let nouveauStreak = gamification.streak_jours || 0
      if (derniereActivite !== aujourdHui) {
        const hier = new Date()
        hier.setDate(hier.getDate() - 1)
        const hierStr = hier.toISOString().split('T')[0]
        
        if (derniereActivite === hierStr) {
          nouveauStreak += 1
        } else if (derniereActivite !== aujourdHui) {
          nouveauStreak = 1
        }
      }

      await supabase
        .from('gamification')
        .update({
          points_total: (gamification.points_total || 0) + pointsGagnes,
          streak_jours: nouveauStreak,
          derniere_activite: new Date().toISOString()
        })
        .eq('user_id', user.id)
    } else {
      // Créer l'entrée gamification si elle n'existe pas
      await supabase
        .from('gamification')
        .insert({
          user_id: user.id,
          points_total: pointsGagnes,
          streak_jours: 1,
          derniere_activite: new Date().toISOString()
        })
    }

    // 4. Mettre à jour la progression si score >= 8/10
    if (score >= 8) {
      const { data: progression } = await supabase
        .from('progression_niveaux')
        .select('niveau_actuel')
        .eq('user_id', user.id)
        .eq('categorie_id', categorieId)
        .single()

      if (progression) {
        // Débloquer le niveau suivant si nécessaire
        if (niveau >= progression.niveau_actuel && niveau < 10) {
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
        // Créer la progression si elle n'existe pas
        await supabase
          .from('progression_niveaux')
          .insert({
            user_id: user.id,
            categorie_id: categorieId,
            niveau_actuel: niveau >= 8 ? niveau + 1 : niveau,
            questions_correctes_niveau: score
          })
      }
    }

    // 5. Mettre à jour les statistiques globales
    const { data: statsData } = await supabase
      .from('statistiques')
      .select('total_questions_repondues, total_bonnes_reponses, temps_total_etude')
      .eq('user_id', user.id)
      .single()

    if (statsData) {
      // Mettre à jour les statistiques existantes
      await supabase
        .from('statistiques')
        .update({
          total_questions_repondues: (statsData.total_questions_repondues || 0) + totalQuestions,
          total_bonnes_reponses: (statsData.total_bonnes_reponses || 0) + score,
          temps_total_etude: (statsData.temps_total_etude || 0) + tempsTotal,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', user.id)
    } else {
      // Créer les statistiques si elles n'existent pas
      await supabase
        .from('statistiques')
        .insert({
          user_id: user.id,
          total_questions_repondues: totalQuestions,
          total_bonnes_reponses: score,
          temps_total_etude: tempsTotal
        })
    }

    return NextResponse.json({
      success: true,
      pointsGagnes,
      niveauDebloque: score >= 8 && niveau < 10
    })

  } catch (error) {
    console.error('Erreur API complete:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
