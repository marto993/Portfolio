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
      const articleContent = contentRef.current;
      
      // Solo agregar funcionalidad especial, NO sobrescribir estilos
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