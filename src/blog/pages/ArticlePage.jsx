import { useEffect, useState } from 'react';
import { ArrowLeft, Loader, AlertCircle, Home } from 'lucide-react';
import { useArticles } from '../hooks/useArticles';
import ArticleHeader from '../components/ArticleHeader';
import ArticleContent from '../components/ArticleContent';
import ShareButtons from '../components/ShareButtons';
import SEO from '../../components/SEO';

/**
 * Página individual para mostrar un artículo completo
 * @param {Object} props - Propiedades del componente
 * @param {string} props.slug - Slug del artículo a mostrar
 * @param {Function} props.onBack - Función a ejecutar al hacer clic en "Volver"
 * @returns {JSX.Element} Componente ArticlePage
 */
export default function ArticlePage({ slug, onBack }) {
  const { articles, loading, error } = useArticles();
  const article = articles.find(art => art.slug === slug);
  const [readingProgress, setReadingProgress] = useState(0);

  const handleBackToHome = () => {
    window.location.hash = '#hero';
  };

  // Calcular progreso de lectura
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll suave al inicio del artículo
  useEffect(() => {
    if (article && !loading) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [article, loading]);

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <Loader className="animate-spin h-12 w-12 text-primary-500 mx-auto mb-4" />
          <p className="text-gray-400">Cargando artículo...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <AlertCircle className="h-16 w-16 text-red-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-4">Artículo no encontrado</h1>
          <p className="text-gray-400 mb-6">
            {error || 'El artículo que buscas no existe o ha sido movido.'}
          </p>
          <button
            onClick={handleBackClick}
            className="button-primary"
          >
            Volver al Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950">
      {/* SEO dinámico para el artículo */}
      <SEO
        title={article.title}
        description={article.excerpt}
        keywords={article.tags ? article.tags.join(', ') : ''}
        image="/og-image.png"
        url={`${window.location.origin}/Portfolio/#blog/${article.slug}`}
        type="article"
        publishedTime={article.date}
      />

      {/* Barra de progreso de lectura */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Header del Artículo con navegación */}
      <header className="bg-dark-900/80 backdrop-blur-sm border-b border-gray-800 sticky top-1 z-40">
        <div className="container-max py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handleBackToHome}
                className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                title="Volver al portfolio"
              >
                <Home size={20} />
                <span className="hidden sm:inline">Portfolio</span>
              </button>
              <div className="h-6 w-px bg-gray-700"></div>
              <button
                onClick={handleBackClick}
                className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                title="Volver al blog"
              >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Volver al Blog</span>
              </button>
            </div>
            
            <div className="text-sm text-gray-500">
              {article.readTime} de lectura
            </div>
          </div>
        </div>
      </header>

      <div className="container-max section-padding">
        {/* Header del artículo */}
        <ArticleHeader article={article} onBack={handleBackClick} />

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Contenido del artículo */}
          <div className="lg:col-span-3">
            <ArticleContent content={article.content} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Botones de compartir */}
              <ShareButtons article={article} />

              {/* Información del artículo */}
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Información</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Fecha:</span>
                    <span className="text-white">{new Date(article.date + 'T00:00:00').toLocaleDateString('es-AR', { year: 'numeric', month: 'numeric', day: 'numeric' })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Categoría:</span>
                    <span className="text-white">{article.category}</span>
                  </div>
                  {article.readTime && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tiempo de lectura:</span>
                      <span className="text-white">{article.readTime}</span>
                    </div>
                  )}
                  {article.tags && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Tags:</span>
                      <span className="text-white">{article.tags.length}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Artículos relacionados (placeholder) */}
              <div className="glass-effect rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Artículos relacionados</h3>
                <p className="text-gray-400 text-sm">
                  Próximamente: artículos relacionados basados en categoría y tags.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navegación entre artículos */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <button
              onClick={handleBackClick}
              className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Volver al Blog</span>
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-500">
                ¿Te gustó este artículo?
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Compártelo con tu red profesional
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-gray-500">
                Progreso de lectura
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {Math.round(readingProgress)}% completado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
