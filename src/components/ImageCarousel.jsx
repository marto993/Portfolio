import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = ({ images, title, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleImageClick = () => {
    onImageClick(images[currentIndex], currentIndex);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  if (!images || images.length === 0) {
    return (
      <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">No hay imágenes disponibles</span>
      </div>
    );
  }

  return (
    <div 
      className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleImageClick}
    >
      {/* Imagen principal */}
      <img 
        src={images[currentIndex]} 
        alt={`${title} - Imagen ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
      
      {/* Controles de navegación */}
      {images.length > 1 && (
        <>
          {/* Botón anterior */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Botón siguiente */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
            aria-label="Imagen siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
      
      {/* Indicadores de posición */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary-400 scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Contador de imágenes */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
      
      {/* Icono de expansión */}
      <div className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
        </svg>
      </div>
    </div>
  );
};

export default ImageCarousel;
