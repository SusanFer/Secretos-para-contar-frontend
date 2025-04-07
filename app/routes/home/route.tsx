import { Link } from "@remix-run/react";
import BookList from "./BookList";

// Header component
function Header() {
    return (
        <header className="bg-blue-500 text-white p-4 fixed-header">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and Navigation */}
                <div className="flex items-center">
                    <img
                        src="public/mockImage/logo-principal.png"
                        alt="Logo"
                        className="h-8 mr-2"
                    />
                    <nav className="flex space-x-4">
                        <Link to="/" className="hover:underline">
                            Inicio
                        </Link>
                        <Link to="#nosotros">Nosotros</Link>
                        <Link to="/libros" className="hover:underline">
                            Libros
                        </Link>
                        <Link to="#aliados" className="hover:underline">
                            Aliados
                        </Link>
                        <Link to="/ingresar" className="hover:underline">
                            Ingresar
                        </Link>
                    </nav>
                </div>

                {/* Search and Actions */}
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="bg-white text-black p-2 rounded-l-md"
                    />
                    <button className="bg-blue-200 p-2 rounded-r-md">
                        Buscar
                    </button>
                    <Link to="/carrito" className="ml-4"></Link>
                    <button className="ml-4">☰</button>
                </div>
            </div>
        </header>
    );
}

// Main Home component
function Home() {
    return (
        <div>
            <Header />
            <BookList />
        </div>
    );
}

export default Home;