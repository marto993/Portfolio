import { useState, useMemo } from 'react';
import { 
  filterArticlesByCategory, 
  searchArticles, 
  extractCategories,
  extractTags 
} from '../utils/articleUtils';

/**
 * Hook para manejar filtros y búsqueda del blog
 * @param {Array} articles - Lista de artículos
 * @returns {Object} Objeto con filtros y artículos filtrados
 */
export function useBlogFilters(articles) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Extraer categorías únicas de los artículos
  const categories = useMemo(() => {
    return extractCategories(articles);
  }, [articles]);

  // Extraer tags únicos de los artículos
  const tags = useMemo(() => {
    return extractTags(articles);
  }, [articles]);

  // Filtrar artículos por categoría y búsqueda
  const filteredArticles = useMemo(() => {
    let filtered = articles;

    // Aplicar filtro de categoría
    filtered = filterArticlesByCategory(filtered, activeCategory);

    // Aplicar búsqueda
    filtered = searchArticles(filtered, searchTerm);

    return filtered;
  }, [articles, activeCategory, searchTerm]);

  // Resetear filtros
  const resetFilters = () => {
    setActiveCategory('all');
    setSearchTerm('');
  };

  // Obtener estadísticas de filtros
  const filterStats = useMemo(() => {
    return {
      totalArticles: articles.length,
      filteredArticles: filteredArticles.length,
      activeCategory,
      searchTerm,
      hasActiveFilters: activeCategory !== 'all' || searchTerm !== ''
    };
  }, [articles.length, filteredArticles.length, activeCategory, searchTerm]);

  return {
    // Estados
    activeCategory,
    searchTerm,
    categories,
    tags,
    filteredArticles,
    filterStats,
    
    // Acciones
    setActiveCategory,
    setSearchTerm,
    resetFilters
  };
}
