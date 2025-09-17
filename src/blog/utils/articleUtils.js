import { format, parseISO, isValid } from 'date-fns';
import { es } from 'date-fns/locale';

/**
 * Formatea una fecha para mostrar en la UI
 * @param {string} dateString - Fecha en formato ISO string
 * @returns {string} Fecha formateada
 */
export function formatArticleDate(dateString) {
  try {
    const date = parseISO(dateString);
    if (!isValid(date)) {
      throw new Error('Fecha inválida');
    }
    return format(date, 'dd MMM yyyy', { locale: es });
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString; // Retornar fecha original si hay error
  }
}

/**
 * Calcula el tiempo de lectura estimado
 * @param {string} content - Contenido del artículo
 * @returns {string} Tiempo estimado de lectura
 */
export function calculateReadTime(content) {
  const wordsPerMinute = 200; // Promedio de palabras por minuto
  const wordCount = content.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min`;
}

/**
 * Extrae categorías únicas de una lista de artículos
 * @param {Array} articles - Lista de artículos
 * @returns {Array} Array de categorías únicas
 */
export function extractCategories(articles) {
  const categories = new Set();
  articles.forEach(article => {
    if (article.category) {
      categories.add(article.category);
    }
  });
  return Array.from(categories).sort();
}

/**
 * Extrae tags únicos de una lista de artículos
 * @param {Array} articles - Lista de artículos
 * @returns {Array} Array de tags únicos
 */
export function extractTags(articles) {
  const tags = new Set();
  articles.forEach(article => {
    if (article.tags && Array.isArray(article.tags)) {
      article.tags.forEach(tag => tags.add(tag));
    }
  });
  return Array.from(tags).sort();
}

/**
 * Ordena artículos por fecha (más recientes primero)
 * @param {Array} articles - Lista de artículos
 * @returns {Array} Artículos ordenados
 */
export function sortArticlesByDate(articles) {
  return [...articles].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // Más recientes primero
  });
}

/**
 * Filtra artículos por categoría
 * @param {Array} articles - Lista de artículos
 * @param {string} category - Categoría a filtrar
 * @returns {Array} Artículos filtrados
 */
export function filterArticlesByCategory(articles, category) {
  if (category === 'all' || !category) {
    return articles;
  }
  return articles.filter(article => article.category === category);
}

/**
 * Busca artículos por término de búsqueda
 * @param {Array} articles - Lista de artículos
 * @param {string} searchTerm - Término de búsqueda
 * @returns {Array} Artículos que coinciden
 */
export function searchArticles(articles, searchTerm) {
  if (!searchTerm || searchTerm.trim() === '') {
    return articles;
  }
  
  const term = searchTerm.toLowerCase().trim();
  return articles.filter(article => 
    article.title.toLowerCase().includes(term) ||
    article.excerpt.toLowerCase().includes(term) ||
    (article.tags && article.tags.some(tag => tag.toLowerCase().includes(term)))
  );
}

/**
 * Obtiene los artículos destacados ordenados por fecha
 * @param {Array} articles - Lista de artículos
 * @param {number} limit - Número máximo de artículos a retornar
 * @returns {Array} Artículos destacados ordenados por fecha
 */
export function getFeaturedArticles(articles, limit = 3) {
  const featuredArticles = articles.filter(article => article.featured === true);
  return sortArticlesByDate(featuredArticles).slice(0, limit);
}