import { Link } from "@remix-run/react";
import "../styles.css";

export default function Index() {

  
  return (
    <div className="bg-custon-bige ">
      <header className="bg-blue-500 text-white p-4 fixed-header ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="public/mockImage/logo-principal.png" alt="Logo" className="h-8 mr-2" />
            <nav className="flex space-x-4">
              <Link to="/" className="hover:underline">
                Inicio
              </Link>
              <Link to="#nosotros">
                Nosotros
              </Link>
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
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Buscar"
              className="bg-white text-black p-2 rounded-l-md"
            />
            <button className="bg-blue-200 p-2 rounded-r-md">Buscar</button>
            <Link to="/carrito" className="ml-4"></Link>
            <button className="ml-4">☰</button>
          </div>
        </div>
      </header>
      <img src="public/mockImage/Secretos-en-red-inicio.webp" alt="" />
      <main className="container mx-auto p-4">
        <section className="mb-8">
          
          <div className="flex overflow-x-auto">
            <div className="carousel-item">
              <span className="nuevo">NUEVO</span>
              <img src="public/mockImage/A-que-te-cojo-raton.png " alt="" />
            </div>
            <div className="carousel-item">
              <span className="nuevo">NUEVO</span>
              <img src="public/mockImage/Con-los-pelos-de-punta.png" alt="" />
            </div>
            <div className="carousel-item">
              <span className="nuevo">NUEVO</span>
              <img src="public/mockImage/Cuentos-maravillosos.png" alt="" />
            </div>
            <div className="carousel-item">
              <span className="nuevo">NUEVO</span>
              <img src="public/mockImage/Cuentos-para-desenredar-enredos.png" alt="" />
            </div>
          </div>
          <div className="text-center mt-4"id="nosotros">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
              Ver más
            </button>
          </div>
        </section>

        <section className="mb-8 bg-blue-200 ">
          <div className="grid grid-cols-2 gap-4">
            <div className=" p-4 rounded">
              <img src="public/mockImage/Cuentos-para-desenredar-enredos.png" alt="" />
            </div>

            <div className="p-4 roundeb ">
              <h1 className="text-center font-bold mb-2"> Nosotros</h1>
                <p className="mt-12"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos sapiente fugit obcaecati, alias eius quaerat, corporis officia assumenda ratione et cupiditate, aspernatur dolore repellat omnis accusantium tempora labore cum nobis distinctio nulla? Nesciunt ab aperiam nostrum, labore quisquam, itaque incidunt magnam ipsum explicabo ut omnis. Animi omnis laborum odit, hic repudiandae vel? Eius tenetur autem quibusdam quidem reprehenderit sapiente tempore laborum, doloremque voluptatem, provident aperiam corrupti id atque saepe nesciunt! Voluptas beatae aut dolorem eveniet minus! Perspiciatis, velit laboriosam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestias architecto
                     quisquam commodi optio ipsum repellat fugiat eius tempore! Nulla, et, beatae labore optio minima voluptatum 
                     distinctio totam eum esse qui expedita quam sequi provident blanditiis quo 
                    deserunt aliquam magnam vel tempore similique cum pariatur itaque quisquam. Nam, tempora eos.
                </p>
            </div>
          </div>
        </section>
        <h1 className="bg-blue-200 text-center " >Aliados</h1>
        <section className="grid grid-cols-4 gap-4 mt-4"id="aliados">
          
          <div className="bg-blue-200 p-4 rounded">
          <img src="public/mockImage/logo-principal.png" alt="" />
          </div>
          <div className="bg-blue-200 p-4 rounded">
          <img src="public/mockImage/logo-principal.png" alt="" />
          </div>
          <div className="bg-blue-200 p-4 rounded">
          <img src="public/mockImage/logo-principal.png" alt="" />
          </div>
          <div className="bg-blue-200 p-4 rounded">
          <img src="public/mockImage/logo-principal.png" alt="" />
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white p-4 mt-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="public/mockImage/logo-secundario.png" alt="Logo" className="h-8 mr-2" />
            <p>Todos los derechos reservados</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">f</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">t</a>
            <button className="text-white underline">in</button>
            <p>011-497-99-10</p>
            <p>info@secretosparacontar.org</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
//
