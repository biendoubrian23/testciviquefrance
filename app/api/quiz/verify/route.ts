import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

interface VerifyRequest {
  questionId: string
  reponseId: string | null
  tempsReponse: number
  sessionId: string | null
}

interface VerifyResponse {
  isCorrect: boolean
  correctReponseId: string
  explication: string
}

export async function POST(request: NextRequest) {
  try {
    const body: VerifyRequest = await request.json()
    const { questionId, reponseId, tempsReponse, sessionId } = body

    if (!questionId) {
      return NextResponse.json(
        { error: 'questionId est requis' },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Vérifier l'authentification
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      )
    }

    // Récupérer la bonne réponse côté serveur (JAMAIS envoyée au client avant)
    const { data: reponses, error: reponsesError } = await supabase
      .from('reponses')
      .select('id, is_correct')
      .eq('question_id', questionId)

    if (reponsesError || !reponses) {
      return NextResponse.json(
        { error: 'Erreur lors de la vérification' },
        { status: 500 }
      )
    }

    // Trouver la bonne réponse
    const bonneReponse = reponses.find(r => r.is_correct)
    if (!bonneReponse) {
      return NextResponse.json(
        { error: 'Aucune bonne réponse trouvée pour cette question' },
        { status: 500 }
      )
    }

    // Vérifier si la réponse de l'utilisateur est correcte
    const isCorrect = reponseId === bonneReponse.id

    // Récupérer l'explication de la question
    const { data: questionData } = await supabase
      .from('questions')
      .select('explication')
      .eq('id', questionId)
      .single()

    // Enregistrer le résultat dans la base
    if (reponseId) {
      await supabase
        .from('resultats')
        .insert({
          user_id: user.id,
          question_id: questionId,
          reponse_donnee: reponseId,
          is_correct: isCorrect,
          temps_reponse: tempsReponse,
          session_id: sessionId
        })
    }

    const response: VerifyResponse = {
      isCorrect,
      correctReponseId: bonneReponse.id,
      explication: questionData?.explication || ''
    }

    return NextResponse.json(response)

  } catch (error) {
    console.error('Erreur API verify:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
