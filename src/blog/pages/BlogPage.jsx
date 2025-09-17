import { useState } from 'react';
import { Search, Filter, Grid, List, Loader, ArrowLeft, Home } from 'lucide-react';
import { useArticles } from '../hooks/useArticles';
import { useBlogFilters } from '../hooks/useBlogFilters';
import BlogCard from '../components/BlogCard';
import CategoryFilter from '../components/CategoryFilter';
import TagCloud from '../components/TagCloud';

/**
 * Página principal del blog que muestra la lista de artículos con filtros
 * @param {Object} props - Propiedades del componente
 * @param {Function} props.onArticleClick - Función a ejecutar al hacer clic en un artículo
 * @returns {JSX.Element} Componente BlogPage
 */
export default function BlogPage({ onArticleClick }) {
  const handleBackToHome = () => {
    window.location.hash = '#hero';
  };
  const { articles, loading, error } = useArticles();
  const {
    categories,
    activeCategory,
    setActiveCategory,
    searchTerm,
    setSearchTerm,
    filteredArticles,
    filterStats
  } = useBlogFilters(articles);

  const [viewMode, setViewMode] = useState('grid'); // 'grid' o 'list'
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleArticleClick = (slug) => {
    if (onArticleClick) {
      onArticleClick(slug);
    }
  };

  const handleTagToggle = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleViewModeToggle = () => {
    setViewMode(prev => prev === 'grid' ? 'list' : 'grid');
  };

  const handleFiltersToggle = () => {
    setShowFilters(prev => !prev);
  };

  // Filtrar artículos por tags seleccionados
  const finalFilteredArticles = selectedTags.length > 0 
    ? filteredArticles.filter(article => 
        article.tags && article.tags.some(tag => selectedTags.includes(tag))
      )
    : filteredArticles;

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <Loader className="animate-spin h-12 w-12 text-primary-500 mx-auto mb-4" />
          <p className="text-gray-400">Cargando artículos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-400 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-white mb-4">Error al cargar el blog</h2>
          <p className="text-gray-400 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="button-primary"
          >
            Intentar de nuevo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Header del Blog con navegación */}
      <header className="bg-dark-900/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-40">
        <div className="container-max py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={handleBackToHome}
                className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                title="Volver al portfolio"
              >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Volver al Portfolio</span>
              </button>
              <div className="h-6 w-px bg-gray-700"></div>
              <h1 className="text-2xl font-bold gradient-text">Blog</h1>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Controles de vista */}
              <button
                onClick={handleViewModeToggle}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                title={`Cambiar a vista ${viewMode === 'grid' ? 'lista' : 'cuadrícula'}`}
              >
                {viewMode === 'grid' ? <List size={20} /> : <Grid size={20} />}
              </button>
              
              {/* Toggle de filtros */}
              <button
                onClick={handleFiltersToggle}
                className={`p-2 rounded-lg transition-colors ${
                  showFilters ? 'bg-primary-500/20 text-primary-400' : 'hover:bg-white/10'
                }`}
                title="Mostrar/ocultar filtros"
              >
                <Filter size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container-max section-padding">
        {/* Header del blog */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Blog</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Reflexiones sobre desarrollo, tecnología y automatizaciones
          </p>
        </div>

        {/* Barra de herramientas */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Barra de búsqueda */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-dark-800/50 border border-gray-700 focus:border-primary-500 focus:outline-none text-white"
            />
          </div>

          {/* Controles de vista */}
          <div className="flex gap-3">
            {/* Botón de filtros */}
            <button
              onClick={handleFiltersToggle}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                showFilters 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-gray-700'
              }`}
            >
              <Filter size={18} />
              <span className="hidden sm:inline">Filtros</span>
            </button>

            {/* Botón de vista */}
            <button
              onClick={handleViewModeToggle}
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-gray-700 transition-all duration-200"
              aria-label={`Cambiar a vista ${viewMode === 'grid' ? 'lista' : 'cuadrícula'}`}
            >
              {viewMode === 'grid' ? <List size={18} /> : <Grid size={18} />}
            </button>
          </div>
        </div>

        {/* Panel de filtros */}
        {showFilters && (
          <div className="mb-8 p-6 glass-effect rounded-xl">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Filtros de categoría */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Categorías</h3>
                <CategoryFilter
                  categories={categories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                />
              </div>

              {/* Nube de tags */}
              <div>
                <TagCloud
                  tags={filterStats.tags}
                  selectedTags={selectedTags}
                  onTagToggle={handleTagToggle}
                />
              </div>
            </div>
          </div>
        )}

        {/* Estadísticas de filtros */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span>
              {finalFilteredArticles.length} de {articles.length} artículos
            </span>
            {filterStats.hasActiveFilters && (
              <>
                <span>•</span>
                <span>Filtros activos</span>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchTerm('');
                    setSelectedTags([]);
                  }}
                  className="text-primary-400 hover:text-primary-300 underline"
                >
                  Limpiar filtros
                </button>
              </>
            )}
          </div>
        </div>

        {/* Grid de artículos */}
        {finalFilteredArticles.length > 0 ? (
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {finalFilteredArticles.map((article, index) => (
              <div
                key={article.slug}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BlogCard
                  article={article}
                  onClick={handleArticleClick}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No se encontraron artículos</h3>
            <p className="text-gray-400 mb-6">
              {searchTerm || selectedTags.length > 0 || activeCategory !== 'all'
                ? 'Intenta ajustar los filtros de búsqueda'
                : 'No hay artículos disponibles en este momento'
              }
            </p>
            {(searchTerm || selectedTags.length > 0 || activeCategory !== 'all') && (
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchTerm('');
                  setSelectedTags([]);
                }}
                className="button-primary"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        )}

        {/* Footer del blog */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-500">
            <p>¿Tienes alguna pregunta o sugerencia?</p>
            <p className="mt-2">
              <a 
                href="#contact" 
                className="text-primary-400 hover:text-primary-300 underline"
              >
                Contáctame
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
