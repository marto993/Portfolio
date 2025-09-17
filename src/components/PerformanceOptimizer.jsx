import { useEffect } from 'react';

/**
 * Componente para optimizaciones de rendimiento
 * @returns {null} No renderiza nada
 */
export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload de recursos críticos
    const preloadResources = () => {
      // Preload de fuentes críticas
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload de imágenes críticas si existen
      const criticalImages = [
        // Añadir aquí las rutas de imágenes críticas
      ];

      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    // Lazy loading para imágenes
    const setupLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
      }
    };

    // Optimización de scroll
    const optimizeScroll = () => {
      let ticking = false;
      
      const updateScrollPosition = () => {
        // Aquí se pueden añadir optimizaciones de scroll
        ticking = false;
      };

      const requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollPosition);
          ticking = true;
        }
      };

      window.addEventListener('scroll', requestTick, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', requestTick);
      };
    };

    // Ejecutar optimizaciones
    preloadResources();
    setupLazyLoading();
    const cleanupScroll = optimizeScroll();

    // Cleanup
    return () => {
      cleanupScroll();
    };
  }, []);

  return null;
}
