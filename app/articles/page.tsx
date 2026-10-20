import ListeArticles from '@/components/articles/ListeArticles';
import { allArticles, categories } from '@/lib/data/articles';

/**
 * La page `/articles`, rendue au build : elle calcule les cartes (sans le
 * texte des articles) et les passe à la liste filtrable, qui est un composant
 * client. Avant le 20/10/2026, la page entière était un composant client qui
 * importait tout le contenu du site.
 */
export default function ArticlesPage() {
  return <ListeArticles allArticles={allArticles} categories={categories} />;
}
