import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';

const ImageModal = ({ isOpen, images, currentIndex, onClose, title }) => {
  const [imageIndex, setImageIndex] = useState(currentIndex);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      setImageIndex(currentIndex);
      setZoom(1);
      setRotation(0);
      setPosition({ x: 0, y: 0 });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case '+':
        case '=':
          e.preventDefault();
          setZoom(prev => Math.min(prev + 0.25, 3));
          break;
        case '-':
          e.preventDefault();
          setZoom(prev => Math.max(prev - 0.25, 0.5));
          break;
        case 'r':
        case 'R':
          e.preventDefault();
          setRotation(prev => (prev + 90) % 360);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const goToPrevious = () => {
    setImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  const goToNext = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = images[imageIndex];
    link.download = `${title}-${imageIndex + 1}.jpg`;
    link.click();
  };

  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  if (!isOpen || !images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      {/* Overlay para cerrar */}
      <div 
        className="absolute inset-0" 
        onClick={onClose}
      />
      
      {/* Contenido del modal */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header con controles */}
        <div className="flex items-center justify-between p-4 bg-black/50 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <h3 className="text-white text-lg font-semibold">
              {title} - Imagen {imageIndex + 1} de {images.length}
            </h3>
            
            {/* Controles de zoom y rotación */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomOut}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                title="Alejar (Ctrl + -)"
              >
                <ZoomOut size={20} />
              </button>
              
              <span className="text-white text-sm min-w-[3rem] text-center">
                {Math.round(zoom * 100)}%
              </span>
              
              <button
                onClick={handleZoomIn}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                title="Acercar (Ctrl + +)"
              >
                <ZoomIn size={20} />
              </button>
              
              <button
                onClick={handleRotate}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                title="Rotar (R)"
              >
                <RotateCw size={20} />
              </button>
              
              <button
                onClick={resetView}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                title="Resetear vista"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                  <path d="M21 3v5h-5"/>
                  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                  <path d="M3 21v-5h5"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              title="Descargar imagen"
            >
              <Download size={20} />
            </button>
            
            <button
              onClick={onClose}
              className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              title="Cerrar (Esc)"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        
        {/* Imagen principal */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="relative max-w-full max-h-full">
            <img
              src={images[imageIndex]}
              alt={`${title} - Imagen ${imageIndex + 1}`}
              className="max-w-full max-h-full object-contain transition-transform duration-200"
              style={{
                transform: `scale(${zoom}) rotate(${rotation}deg) translate(${position.x}px, ${position.y}px)`,
                cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              draggable={false}
            />
          </div>
        </div>
        
        {/* Controles de navegación */}
        {images.length > 1 && (
          <>
            {/* Botón anterior */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
              title="Imagen anterior (←)"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Botón siguiente */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
              title="Imagen siguiente (→)"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
        
        {/* Miniaturas en la parte inferior */}
        {images.length > 1 && (
          <div className="p-4 bg-black/50 backdrop-blur-sm">
            <div className="flex justify-center gap-2 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setImageIndex(index);
                    setZoom(1);
                    setRotation(0);
                    setPosition({ x: 0, y: 0 });
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === imageIndex 
                      ? 'border-primary-400 scale-110' 
                      : 'border-transparent hover:border-white/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Miniatura ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Instrucciones */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm text-center">
          <p>Usa las flechas del teclado para navegar • + / - para zoom • R para rotar • Esc para cerrar</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
