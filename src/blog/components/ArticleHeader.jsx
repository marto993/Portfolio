import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { formatArticleDate } from '../utils/articleUtils';
import { getRelativeTime } from '../utils/dateUtils';

/**
 * Componente para mostrar el header de un artículo individual
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.article - Datos del artículo
 * @param {Function} props.onBack - Función a ejecutar al hacer clic en "Volver"
 * @returns {JSX.Element} Componente ArticleHeader
 */
export default function ArticleHeader({ article, onBack }) {
  if (!article) {
    return null;
  }

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleBackClick();
    }
  };

  return (
    <header className="mb-12">
      {/* Botón de regreso */}
      <button
        onClick={handleBackClick}
        onKeyDown={handleKeyDown}
        className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-200 mb-8 group"
        aria-label="Volver al blog"
      >
        <ArrowLeft 
          size={20} 
          className="group-hover:-translate-x-1 transition-transform duration-200" 
        />
        <span>Volver al Blog</span>
      </button>

      {/* Metadatos del artículo */}
      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-6">
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-primary-400" />
          <time dateTime={article.date}>
            {formatArticleDate(article.date)}
          </time>
          <span className="text-gray-600">•</span>
          <span className="text-gray-400">
            {getRelativeTime(article.date)}
          </span>
        </div>

        {article.readTime && (
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-accent-400" />
            <span>{article.readTime}</span>
          </div>
        )}

        {article.author && (
          <div className="flex items-center gap-2">
            <User size={16} className="text-purple-400" />
            <span>{article.author}</span>
          </div>
        )}
      </div>

      {/* Categoría */}
      {article.category && (
        <div className="mb-4">
          <span className="inline-block bg-primary-500/20 text-primary-300 px-4 py-2 rounded-full text-sm font-medium">
            {article.category}
          </span>
        </div>
      )}

      {/* Título del artículo */}
      <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
        {article.title}
      </h1>

      {/* Excerpt del artículo */}
      {article.excerpt && (
        <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-4xl">
          {article.excerpt}
        </p>
      )}

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-8">
          {article.tags.map(tag => (
            <span 
              key={tag} 
              className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-primary-500/50 transition-colors duration-200"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Indicador de artículo destacado */}
      {article.featured && (
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 bg-accent-500/20 text-accent-300 px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
            Artículo Destacado
          </span>
        </div>
      )}

      {/* Separador visual */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
    </header>
  );
}
