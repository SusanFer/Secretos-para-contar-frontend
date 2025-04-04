import { useState, useEffect, useCallback } from "react";
import { LibraryInterface } from "../interface/libraryInterface";

interface BookViewerProps {
  book: LibraryInterface;
  isOpen: boolean;
  onClose: () => void;
}

export default function BookViewer({ book, isOpen, onClose }: BookViewerProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); // Default to 10 pages until real data is loaded
  const [zoom, setZoom] = useState(100);
  const [isLoading, setIsLoading] = useState(true);

  // Mock function to simulate loading the book content
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Simulate loading time
      const timer = setTimeout(() => {
        setIsLoading(false);
        // In a real application, you'd load the actual book data and set the total pages
        setTotalPages(Math.floor(Math.random() * 20) + 5); // Random page count between 5-25
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, book.id]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
          nextPage();
          break;
        case "ArrowLeft":
          prevPage();
          break;
        case "+":
          setZoom(prev => Math.min(prev + 10, 200));
          break;
        case "-":
          setZoom(prev => Math.max(prev - 10, 50));
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentPage, totalPages, onClose]);

  const nextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  }, [currentPage, totalPages]);

  const prevPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  }, [currentPage]);

  const resetView = useCallback(() => {
    setCurrentPage(1);
    setZoom(100);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 transition-opacity duration-300">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 focus:outline-none"
        aria-label="Close viewer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Book title header */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-2 rounded-full">
        <h2 className="text-white text-lg font-medium">{book.name}</h2>
      </div>

      {/* Main content area */}
      <div className="w-full h-full max-w-6xl max-h-[90vh] flex flex-col items-center justify-center p-4">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center text-white">
            <svg className="animate-spin h-12 w-12 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-xl">Cargando libro...</p>
          </div>
        ) : (
          <div className={`relative w-full h-full flex items-center justify-center`}>
            {/* Book content - This would be replaced with actual book content rendering */}
            <div 
              className="bg-white rounded-md shadow-2xl overflow-hidden transition-all duration-300"
              style={{ 
                transform: `scale(${zoom / 100})`,
                width: '80%',
                height: '80%',
                maxWidth: '800px',
                maxHeight: '90%'
              }}
            >
              <div className="h-full w-full flex items-center justify-center p-8">
                <div className="text-center">
                  <img 
                    src={book.image} 
                    alt={`${book.name} preview`} 
                    className="max-h-[60vh] mx-auto mb-6 object-contain"
                  />
                  <h3 className="text-2xl font-bold mb-2">Página {currentPage} de {totalPages}</h3>
                  <p className="text-gray-600">
                    Este es un visor de libros de demostración. En una implementación real,
                    aquí se mostraría el contenido real del libro desde un PDF u otro formato.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Controls - only show when not loading */}
        {!isLoading && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-gray-900 bg-opacity-70 px-6 py-3 rounded-full text-white">
            <button 
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 focus:outline-none ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label="Previous page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="text-center min-w-[100px]">
              Página {currentPage} de {totalPages}
            </div>

            <button 
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 focus:outline-none ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-label="Next page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="mx-4 h-8 border-l border-gray-500"></div>

            <button 
              onClick={() => setZoom(prev => Math.max(prev - 10, 50))}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 focus:outline-none"
              aria-label="Zoom out"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>

            <div className="text-center min-w-[60px]">
              {zoom}%
            </div>

            <button 
              onClick={() => setZoom(prev => Math.min(prev + 10, 200))}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 focus:outline-none"
              aria-label="Zoom in"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>

            <div className="mx-4 h-8 border-l border-gray-500"></div>

            <button 
              onClick={resetView}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 focus:outline-none"
              aria-label="Reset view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

