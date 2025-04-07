import { Link } from "@remix-run/react";
import React, { useState } from "react";
import "../styles.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-custon-bige">
      <header className="bg-blue-500 text-white p-4 fixed w-full z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/mockImage/logo-principal.png" alt="Secretos para contar" className="h-8 mr-2" />
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
              <Link to="/" className="hover:underline font-medium">
                Inicio
              </Link>
              <Link to="/#nosotros" className="hover:underline font-medium">
                Nosotros
              </Link>
              <Link to="/libros" className="hover:underline font-medium">
                Libros
              </Link>
              <Link to="/#aliados" className="hover:underline font-medium">
                Aliados
              </Link>
              <Link to="/ingresar" className="hover:underline font-medium">
                Ingresar
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center">
            {/* Search bar */}
            <div className="hidden md:flex">
              <input
                type="text"
                placeholder="Buscar"
                className="bg-white text-black p-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-blue-200 text-blue-800 p-2 rounded-r-md hover:bg-blue-300 transition-colors">
                Buscar
              </button>
            </div>
            
            {/* Shopping cart link */}
            <Link to="/carrito" className="ml-4 text-xl" aria-label="Carrito de compras">
              🛒
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="ml-4 text-xl md:hidden focus:outline-none" 
              onClick={toggleMobileMenu}
              aria-label="Menú móvil"
            >
              ☰
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-2 bg-blue-600 rounded-lg">
            <nav className="flex flex-col space-y-2 px-4">
              <Link to="/" className="py-2 hover:bg-blue-700 rounded px-2">
                Inicio
              </Link>
              <Link to="/#nosotros" className="py-2 hover:bg-blue-700 rounded px-2">
                Nosotros
              </Link>
              <Link to="/libros" className="py-2 hover:bg-blue-700 rounded px-2">
                Libros
              </Link>
              <Link to="/#aliados" className="py-2 hover:bg-blue-700 rounded px-2">
                Aliados
              </Link>
              <Link to="/ingresar" className="py-2 hover:bg-blue-700 rounded px-2">
                Ingresar
              </Link>
              <div className="flex mt-2">
                <input
                  type="text"
                  placeholder="Buscar"
                  className="flex-1 bg-white text-black p-2 rounded-l-md focus:outline-none"
                />
                <button className="bg-blue-200 text-blue-800 p-2 rounded-r-md">
                  Buscar
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
      
      {/* Main content with padding to account for fixed header */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className="bg-blue-800 text-white p-4 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="/mockImage/logo-secundario.png" alt="Logo" className="h-8 mr-2" />
            <p>© 2025 Secretos para contar - Todos los derechos reservados</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <span className="sr-only">Facebook</span>
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-blue-800">f</span>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <span className="sr-only">Twitter</span>
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-blue-800">t</span>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-200">
              <span className="sr-only">LinkedIn</span>
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white text-blue-800">in</span>
            </a>
            <div className="hidden md:block border-l border-blue-400 h-6 mx-2"></div>
            <p className="hidden md:block">011-497-99-10</p>
            <p className="hidden md:block">info@secretosparacontar.org</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
