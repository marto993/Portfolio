import { useEffect, useRef } from 'react';

/**
 * Componente para mostrar el contenido renderizado de un artículo
 * @param {Object} props - Propiedades del componente
 * @param {string} props.content - Contenido HTML del artículo
 * @param {string} props.className - Clases CSS adicionales
 * @returns {JSX.Element} Componente ArticleContent
 */
export default function ArticleContent({ content, className = '' }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current && content) {
      // Añadir clases de estilo para el contenido HTML del artículo
      const articleContent = contentRef.current;
      
      // Estilos para elementos específicos
      const styleElements = {
        'h1': 'text-3xl font-bold text-white mb-6 mt-8 first:mt-0',
        'h2': 'text-2xl font-bold text-white mb-4 mt-6',
        'h3': 'text-xl font-semibold text-white mb-3 mt-4',
        'h4': 'text-lg font-semibold text-white mb-2 mt-3',
        'p': 'text-gray-300 leading-relaxed mb-4',
        'a': 'text-primary-400 hover:text-primary-300 underline transition-colors duration-200',
        'strong': 'font-semibold text-white',
        'em': 'italic text-gray-200',
        'code': 'bg-gray-800 text-accent-400 px-2 py-1 rounded text-sm font-mono',
        'pre': 'bg-gray-900 border border-gray-700 rounded-lg p-4 overflow-x-auto mb-4',
        'blockquote': 'border-l-4 border-primary-500 pl-4 italic text-gray-400 my-4',
        'ul': 'list-disc list-inside text-gray-300 mb-4 space-y-1',
        'ol': 'list-decimal list-inside text-gray-300 mb-4 space-y-1',
        'li': 'mb-1',
        'table': 'w-full border-collapse border border-gray-700 mb-4',
        'th': 'border border-gray-700 bg-gray-800 text-white px-4 py-2 text-left',
        'td': 'border border-gray-700 text-gray-300 px-4 py-2',
        'img': 'max-w-full h-auto rounded-lg shadow-lg mb-4',
        'hr': 'border-gray-700 my-8'
      };

      // Aplicar estilos a los elementos
      Object.entries(styleElements).forEach(([selector, classes]) => {
        const elements = articleContent.querySelectorAll(selector);
        elements.forEach(element => {
          element.className = classes;
        });
      });

      // Añadir funcionalidad especial a los enlaces
      const links = articleContent.querySelectorAll('a');
      links.forEach(link => {
        if (link.href && !link.href.startsWith('#')) {
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
        }
      });

      // Añadir funcionalidad especial a las imágenes
      const images = articleContent.querySelectorAll('img');
      images.forEach(img => {
        img.loading = 'lazy';
        img.alt = img.alt || 'Imagen del artículo';
      });

      // Añadir funcionalidad especial a las tablas
      const tables = articleContent.querySelectorAll('table');
      tables.forEach(table => {
        table.style.width = '100%';
        table.style.overflowX = 'auto';
      });
    }
  }, [content]);

  if (!content) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No hay contenido disponible</p>
      </div>
    );
  }

  return (
    <div 
      ref={contentRef}
      className={`prose prose-invert prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
