import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { formatArticleDate } from '../utils/articleUtils';

/**
 * Componente para mostrar una vista previa de un artículo del blog
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.article - Datos del artículo
 * @param {Function} props.onClick - Función a ejecutar al hacer clic
 * @returns {JSX.Element} Componente BlogCard
 */
export default function BlogCard({ article, onClick }) {
  if (!article) {
    return null;
  }

  const handleClick = () => {
    if (onClick) {
      onClick(article.slug);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <article 
      className="glass-effect rounded-2xl p-8 card-hover cursor-pointer group"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Leer artículo: ${article.title}`}
    >
      {/* Metadatos del artículo */}
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <Calendar size={16} className="text-primary-400" />
          <time dateTime={article.date}>
            {formatArticleDate(article.date)}
          </time>
        </div>
        {article.readTime && (
          <>
            <span className="text-gray-600">•</span>
            <div className="flex items-center gap-1">
              <Clock size={16} className="text-accent-400" />
              <span>{article.readTime}</span>
            </div>
          </>
        )}
      </div>

      {/* Categoría */}
      {article.category && (
        <div className="mb-3">
          <span className="inline-block bg-primary-500/20 text-primary-300 px-3 py-1 rounded-full text-xs font-medium">
            {article.category}
          </span>
        </div>
      )}

      {/* Título del artículo */}
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-400 transition-colors duration-200">
        {article.title}
      </h3>

      {/* Excerpt del artículo */}
      <p className="text-gray-400 leading-relaxed mb-6 line-clamp-3">
        {article.excerpt}
      </p>

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {article.tags.slice(0, 3).map(tag => (
            <span 
              key={tag} 
              className="bg-gray-800/50 text-gray-300 px-2 py-1 rounded-md text-xs border border-gray-700"
            >
              #{tag}
            </span>
          ))}
          {article.tags.length > 3 && (
            <span className="text-gray-500 text-xs px-2 py-1">
              +{article.tags.length - 3} más
            </span>
          )}
        </div>
      )}

      {/* Indicador de artículo destacado */}
      {article.featured && (
        <div className="mb-4">
          <span className="inline-flex items-center gap-1 bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full text-xs font-medium">
            <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
            Destacado
          </span>
        </div>
      )}

      {/* Botón de leer más */}
      <div className="flex items-center text-primary-400 font-medium group-hover:text-primary-300 transition-colors duration-200">
        <span>Leer más</span>
        <ArrowRight 
          size={16} 
          className="ml-2 group-hover:translate-x-1 transition-transform duration-200" 
        />
      </div>

      {/* Efecto de hover sutil */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </article>
  );
}
