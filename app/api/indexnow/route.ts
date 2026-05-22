import { NextRequest, NextResponse } from 'next/server';
import sitemap from '@/app/sitemap';

// Toujours exécuter à la requête : la liste d'URLs doit refléter l'état réel du site.
export const dynamic = 'force-dynamic';

const INDEXNOW_KEY = '70856d61c94c4fbb84426195ce988ff5';
const HOST = 'www.testciviquefrance.fr';
const SITE_URL = `https://${HOST}`;

/**
 * Soumet toutes les URLs du sitemap à IndexNow (Bing, Yandex, Seznam, Naver…).
 *
 * Source unique de vérité : `app/sitemap.ts`. IndexNow et le sitemap restent
 * donc toujours cohérents, et seules les URLs réellement publiées sont soumises
 * (les brouillons sont déjà exclus de `allArticles` via `isArticlePublished`).
 *
 * Contrairement à l'ancien script `postbuild`, cet endpoint s'exécute SUR le
 * déploiement en ligne : aucune race condition possible entre build et déploiement.
 */
async function submitToIndexNow() {
  const urls = sitemap().map((entry) => entry.url);

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ];

  const results = [];
  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
          host: HOST,
          key: INDEXNOW_KEY,
          keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
          urlList: urls.slice(0, 10000), // Max 10k URLs par requête
        }),
      });
      results.push({ endpoint, status: response.status, ok: response.ok });
    } catch (error) {
      results.push({ endpoint, status: 'error', message: String(error) });
    }
  }

  return NextResponse.json({
    submitted: urls.length,
    results,
    timestamp: new Date().toISOString(),
  });
}

/**
 * GET — appelé automatiquement chaque jour par le Cron Vercel (voir `vercel.json`).
 * Vercel ajoute l'en-tête `Authorization: Bearer ${CRON_SECRET}` à la requête.
 */
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (!process.env.CRON_SECRET || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return submitToIndexNow();
}

/**
 * POST — déclenchement manuel : `POST /api/indexnow?secret=${INDEXNOW_SECRET}`.
 */
export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  if (!process.env.INDEXNOW_SECRET || secret !== process.env.INDEXNOW_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return submitToIndexNow();
}
