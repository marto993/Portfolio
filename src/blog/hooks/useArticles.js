import { useState, useEffect } from 'react';
import { articlesData } from '../data/articles';
import { sortArticlesByDate } from '../utils/articleUtils';

/**
 * Hook para cargar y gestionar artículos del blog
 * @returns {Object} Objeto con artículos, estado de carga y errores
 */
export function useArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    function loadArticles() {
      try {
        setLoading(true);
        setError(null);

        // Usar datos estáticos de artículos
        const validArticles = sortArticlesByDate(articlesData);
        setArticles(validArticles);
      } catch (error) {
        console.error('Error loading articles:', error);
        setError('Error al cargar los artículos del blog');
      } finally {
        setLoading(false);
      }
    }

    loadArticles();
  }, []);

  return {
    articles,
    loading,
    error
  };
}

/**
 * Hook para obtener un artículo específico por slug
 * @param {string} slug - Slug del artículo
 * @returns {Object} Objeto con artículo, estado de carga y error
 */
export function useArticle(slug) {
  const { articles, loading, error } = useArticles();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (articles.length > 0 && slug) {
      const foundArticle = articles.find(a => a.slug === slug);
      setArticle(foundArticle || null);
    }
  }, [articles, slug]);

  return {
    article,
    loading,
    error: error || (!loading && !article ? 'Artículo no encontrado' : null)
  };
}
