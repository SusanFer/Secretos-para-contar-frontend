import { Link } from "@remix-run/react";
import { Libro } from "~/interface/libraryInterface";

interface BookListProps {
  libros: Libro[];
}

export default function BookList({ libros }: BookListProps) {
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {libros.map((libro) => (
          <div
            key={libro.id} 
            style={{
              width: "300px",
              margin: "20px",
              textAlign: "center",
            }}
          >
            <img
              src={libro.imagen}
              alt={libro.titulo}
              style={{ maxWidth: "200px" }}
            />
            <h2>{libro.titulo}</h2>
            <p>{libro.descripcion}</p>
            <Link to={libro.enlace}>Ver más</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

//export default BookList;