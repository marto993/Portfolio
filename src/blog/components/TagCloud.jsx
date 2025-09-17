import { useState } from 'react';

/**
 * Componente para mostrar una nube de tags con funcionalidad de filtrado
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.tags - Lista de tags disponibles
 * @param {Array} props.selectedTags - Tags seleccionados actualmente
 * @param {Function} props.onTagToggle - Función a ejecutar al hacer toggle de un tag
 * @param {number} props.maxTags - Número máximo de tags a mostrar (por defecto 20)
 * @returns {JSX.Element} Componente TagCloud
 */
export default function TagCloud({ 
  tags, 
  selectedTags = [], 
  onTagToggle, 
  maxTags = 20 
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!tags || tags.length === 0) {
    return null;
  }

  const handleTagClick = (tag) => {
    if (onTagToggle) {
      onTagToggle(tag);
    }
  };

  const handleToggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Ordenar tags por frecuencia de uso (simulado por longitud del nombre)
  const sortedTags = [...tags].sort((a, b) => b.length - a.length);
  const displayedTags = isExpanded ? sortedTags : sortedTags.slice(0, maxTags);
  const hasMoreTags = tags.length > maxTags;

  return (
    <div className="glass-effect rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Tags</h3>
        {hasMoreTags && (
          <button
            onClick={handleToggleExpanded}
            className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
          >
            {isExpanded ? 'Ver menos' : `Ver todos (${tags.length})`}
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {displayedTags.map(tag => {
          const isSelected = selectedTags.includes(tag);
          
          return (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                isSelected
                  ? 'bg-primary-500 text-white shadow-md shadow-primary-500/25'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
              }`}
              aria-pressed={isSelected}
              aria-label={`Tag: ${tag}`}
            >
              #{tag}
            </button>
          );
        })}
      </div>

      {/* Información adicional */}
      <div className="mt-4 pt-4 border-t border-gray-700">
        <p className="text-xs text-gray-500">
          {selectedTags.length > 0 
            ? `${selectedTags.length} tag${selectedTags.length > 1 ? 's' : ''} seleccionado${selectedTags.length > 1 ? 's' : ''}`
            : 'Haz clic en un tag para filtrar artículos'
          }
        </p>
      </div>
    </div>
  );
}
