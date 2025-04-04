import { useParams, Link } from "@remix-run/react";

import { useState } from "react";
import BookViewer from "../components/BookViewer";
import { libraryMock } from "../utils/libraryMock";


function BookDetails() {
  const { id } = useParams();
  const bookId = parseInt(id || "0");
  const [viewerOpen, setViewerOpen] = useState(false);

  // Find the book with the matching ID
  const book = libraryMock.find((book) => book.id === bookId);

  // Handle case when book is not found
  if (!book) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">
                Libro no encontrado. El libro con ID {id} no existe.
              </p>
            </div>
          </div>
        </div>
        <Link
          to="/home"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          Volver a la lista de libros
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Book Image Section */}
          <div className="md:w-1/3 p-4 flex items-center justify-center bg-gray-50">
            <img
              src={book.image}
              alt={book.name}
              className="w-full max-w-sm object-cover rounded-md shadow-md"
            />
          </div>

          {/* Book Details Section */}
          <div className="md:w-2/3 p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {book.available ? (
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Disponible</span>
              ) : (
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded">No disponible</span>
              )}
            </div>
            <h1 className="mt-2 text-3xl font-bold text-gray-900 leading-tight">
              {book.name}
            </h1>
            <p className="mt-2 text-xl text-gray-600">
              {book.author}
            </p>

            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800">Descripción</h2>
              <p className="mt-2 text-gray-600 leading-relaxed whitespace-pre-line">
                {book.description || "No hay descripción disponible para este libro."}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {book.downloadUrl && (
                <a
                  href={book.downloadUrl}
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
                  download
                >
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Descargar
                  </span>
                </a>
              )}

              {book.viewUrl && (
                <button
                  onClick={() => setViewerOpen(true)}
                  className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-200"
                >
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Ver libro
                  </span>
                </button>
              )}

              <Link
                to="/home"
                className="inline-block px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-md shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200"
              >
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Volver
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Book Viewer Component */}
      {viewerOpen && book && (
        <BookViewer
          book={book}
          isOpen={viewerOpen}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </div>
  );
}

export default BookDetails;

