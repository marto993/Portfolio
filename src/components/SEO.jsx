import { useEffect } from 'react';

/**
 * Componente para manejar SEO dinámico
 * @param {Object} props - Propiedades del componente
 * @param {string} props.title - Título de la página
 * @param {string} props.description - Descripción de la página
 * @param {string} props.keywords - Palabras clave (opcional)
 * @param {string} props.image - URL de la imagen social (opcional)
 * @param {string} props.url - URL de la página (opcional)
 * @param {string} props.type - Tipo de contenido (opcional, por defecto 'website')
 * @returns {null} No renderiza nada
 */
export default function SEO({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website' 
}) {
  useEffect(() => {
    // Actualizar título de la página
    if (title) {
      document.title = `${title} | Tu Portfolio`;
    }

    // Función para actualizar o crear meta tag
    const updateMetaTag = (name, content, property = false) => {
      if (!content) return;

      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let metaTag = document.querySelector(selector);

      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        if (property) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    };

    // Meta tags básicos
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', 'Tu Portfolio', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Canonical URL
    if (url) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', url);
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        canonicalLink.setAttribute('href', url);
        document.head.appendChild(canonicalLink);
      }
    }

    // Limpiar al desmontar
    return () => {
      // Restaurar título por defecto si es necesario
      if (title) {
        document.title = 'Tu Portfolio';
      }
    };
  }, [title, description, keywords, image, url, type]);

  return null;
}
