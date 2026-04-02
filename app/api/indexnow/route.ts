import { NextRequest, NextResponse } from 'next/server';
import { allArticles } from '@/lib/data/articles';

const INDEXNOW_KEY = '8a87c068beb74ed1862dcac708d9f59b';
const SITE_URL = 'https://www.testciviquefrance.fr';

export async function POST(request: NextRequest) {
  // Protection par clé secrète simple
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  if (secret !== process.env.INDEXNOW_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Collecter toutes les URLs du site
  const urls = [
    SITE_URL,
    `${SITE_URL}/articles`,
    `${SITE_URL}/tarifs`,
    `${SITE_URL}/faq`,
    `${SITE_URL}/a-propos`,
    `${SITE_URL}/contact`,
    ...allArticles.map((a) => `${SITE_URL}/articles/${a.slug}`),
  ];

  // Soumettre à IndexNow (Bing, Yandex, Seznam, Naver)
  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ];

  const results = [];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          host: 'www.testciviquefrance.fr',
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
