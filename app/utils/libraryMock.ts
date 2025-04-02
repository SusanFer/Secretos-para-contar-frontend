import { Libro } from "~/interface/libraryInterface";

export const librosMock: Libro[] = [
  {
    id: 1,
    titulo: "Cuentos para contar 1",
    descripcion: "Una colección de cuentos para disfrutar en familia.",
    imagen: "/mockimage/cuento1.jpg",
    enlace: "/libro/cuento1",
  },
  {
    id: 2,
    titulo: "Cuentos para contar 2",
    descripcion: "Nuevas historias para compartir y soñar.",
    imagen: "/mockimage/cuento2.jpg",
    enlace: "/libro/cuento2",
  },
  {
    id: 3,
    titulo: "Cuentos para contar 3",
    descripcion: "Aventuras y personajes inolvidables.",
    imagen: "/mockimage/cuento3.jpg",
    enlace: "/libro/cuento3",
  },
  // Agrega aquí los demás libros
];