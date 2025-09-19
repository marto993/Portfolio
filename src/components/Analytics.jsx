import { useEffect } from 'react';

const Analytics = ({ measurementId }) => {
  useEffect(() => {
    // Solo cargar en producción
    if (process.env.NODE_ENV !== 'production' || !measurementId) return;

    // Cargar el script de Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Configurar gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', measurementId, {
      // Configuraciones específicas para tu portfolio/blog
      page_title: document.title,
      page_location: window.location.href,
      // Configuraciones de privacidad
      allow_google_signals: false,
      anonymize_ip: true,
      // Configuraciones específicas para blog
      custom_map: {
        'custom_parameter_1': 'article_category',
        'custom_parameter_2': 'article_tags',
        'custom_parameter_3': 'reading_progress'
      }
    });

    // Cleanup function
    return () => {
      const existingScript = document.querySelector(`script[src*="${measurementId}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [measurementId]);

  return null;
};

export default Analytics;
