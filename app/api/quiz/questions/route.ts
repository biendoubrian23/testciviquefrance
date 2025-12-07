import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

// Structure de réponse sans is_correct (sécurisé)
interface ReponseSecurisee {
  id: string
  texte: string
  ordre: number
}

interface QuestionSecurisee {
  id: string
  question: string
  explication: string
  reponses: ReponseSecurisee[]
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const categorieId = searchParams.get('categorieId')
    const niveau = searchParams.get('niveau')

    if (!categorieId || !niveau) {
      return NextResponse.json(
        { error: 'categorieId et niveau sont requis' },
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

    // Charger les questions SANS is_correct
    const { data: questionsData, error } = await supabase
      .from('questions')
      .select(`
        id,
        question,
        explication,
        reponses (
          id,
          texte,
          ordre
        )
      `)
      .eq('categorie_id', categorieId)
      .eq('difficulte', parseInt(niveau))
      .limit(10)

    if (error) {
      console.error('Erreur chargement questions:', error)
      return NextResponse.json(
        { error: 'Erreur lors du chargement des questions' },
        { status: 500 }
      )
    }

    if (!questionsData || questionsData.length === 0) {
      return NextResponse.json(
        { error: 'Aucune question trouvée pour ce niveau' },
        { status: 404 }
      )
    }

    // S'assurer qu'on a max 10 questions et formater la réponse
    const questionsSecurisees: QuestionSecurisee[] = questionsData.slice(0, 10).map(q => ({
      id: q.id,
      question: q.question,
      explication: q.explication || '',
      reponses: (q.reponses as ReponseSecurisee[]).map(r => ({
        id: r.id,
        texte: r.texte,
        ordre: r.ordre
      }))
    }))

    // Créer une session de quiz
    const { data: session } = await supabase
      .from('sessions_quiz')
      .insert({
        user_id: user.id,
        categorie_id: categorieId,
        niveau: parseInt(niveau),
        score: 0,
        total_questions: questionsSecurisees.length,
        temps_total: 0,
        completed: false
      })
      .select('id')
      .single()

    return NextResponse.json({
      questions: questionsSecurisees,
      sessionId: session?.id || null,
      totalQuestions: questionsSecurisees.length
    })

  } catch (error) {
    console.error('Erreur API questions:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
