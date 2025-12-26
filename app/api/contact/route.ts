import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, RATE_LIMITS, rateLimitResponse, getIdentifier } from '@/lib/utils/rate-limit';

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const CONTACT_EMAIL = 'notification@testciviquefrance.fr';

// Fonction pour échapper le HTML (protection injection)
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

export async function POST(request: NextRequest) {
  // Rate limiting - 10 requêtes par minute (anti-spam)
  const identifier = getIdentifier(request);
  const rateLimitResult = checkRateLimit(identifier, RATE_LIMITS.auth);
  
  if (!rateLimitResult.success) {
    return rateLimitResponse(rateLimitResult.resetTime);
  }

  try {
    const body = await request.json();
    const { nom, email, sujet, message } = body;

    // Validation côté serveur
    if (!nom || !email || !sujet || !message) {
      return NextResponse.json(
        { success: false, message: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation email côté serveur
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Email invalide' },
        { status: 400 }
      );
    }

    // Vérifier que la clé API Brevo est présente
    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY non définie');
      return NextResponse.json(
        { success: false, message: 'Configuration serveur incorrecte' },
        { status: 500 }
      );
    }

    // Envoi via Brevo SMTP API
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: 'Test Civique France - Contact',
          email: 'notification@testciviquefrance.fr',
        },
        to: [
          {
            email: CONTACT_EMAIL,
            name: 'Test Civique France',
          },
        ],
        replyTo: {
          email: email,
          name: escapeHtml(nom),
        },
        subject: `[Contact] ${escapeHtml(sujet)}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%); padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">🇫🇷 Nouveau message de contact</h1>
            </div>
            <div style="padding: 30px; background: #f9fafb;">
              <p><strong>De :</strong> ${escapeHtml(nom)}</p>
              <p><strong>Email :</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
              <p><strong>Sujet :</strong> ${escapeHtml(sujet)}</p>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
              <p><strong>Message :</strong></p>
              <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
                ${escapeHtml(message).replace(/\n/g, '<br>')}
              </div>
            </div>
            <div style="padding: 20px; text-align: center; color: #6b7280; font-size: 12px;">
              <p>Ce message a été envoyé depuis le formulaire de contact de testciviquefrance.fr</p>
            </div>
          </div>
        `,
      }),
    });

    if (response.ok) {
      console.log(`✅ Message de contact envoyé de ${email} à ${CONTACT_EMAIL}`);
      return NextResponse.json({ success: true, message: 'Message envoyé avec succès' });
    }

    const errorData = await response.json();
    console.error('Erreur Brevo:', errorData);
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  } catch (error) {
    console.error('Erreur API contact:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
