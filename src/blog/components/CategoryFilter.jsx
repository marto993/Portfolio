import { useState } from 'react';

/**
 * Componente para filtrar artículos por categoría
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.categories - Lista de categorías disponibles
 * @param {string} props.activeCategory - Categoría activa actualmente
 * @param {Function} props.onCategoryChange - Función a ejecutar al cambiar categoría
 * @returns {JSX.Element} Componente CategoryFilter
 */
export default function CategoryFilter({ categories, activeCategory, onCategoryChange }) {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  if (!categories || categories.length === 0) {
    return null;
  }

  const handleCategoryClick = (category) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {/* Botón "Todos" */}
      <button
        onClick={() => handleCategoryClick('all')}
        onMouseEnter={() => setHoveredCategory('all')}
        onMouseLeave={() => setHoveredCategory(null)}
        className={`px-4 py-2 rounded-full transition-all duration-200 font-medium text-sm ${
          activeCategory === 'all'
            ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
            : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
        }`}
        aria-pressed={activeCategory === 'all'}
        aria-label="Mostrar todos los artículos"
      >
        Todos
        {activeCategory === 'all' && (
          <span className="ml-2 text-xs">({categories.length})</span>
        )}
      </button>

      {/* Botones de categorías */}
      {categories.map(category => {
        const isActive = activeCategory === category;
        const isHovered = hoveredCategory === category;
        
        return (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
            className={`px-4 py-2 rounded-full transition-all duration-200 font-medium text-sm relative overflow-hidden ${
              isActive
                ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
            }`}
            aria-pressed={isActive}
            aria-label={`Filtrar por categoría: ${category}`}
          >
            {/* Efecto de hover */}
            <span className={`absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 transition-opacity duration-200 ${
              isHovered && !isActive ? 'opacity-100' : 'opacity-0'
            }`}></span>
            
            {/* Contenido del botón */}
            <span className="relative z-10">{category}</span>
            
            {/* Indicador de estado activo */}
            {isActive && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full opacity-80"></span>
            )}
          </button>
        );
      })}
    </div>
  );
}
