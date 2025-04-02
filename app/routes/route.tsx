import BookList from "./BookList";
import { librosMock } from "~/utils/libraryMock"; // Asegúrate de que la ruta sea correcta

export default function Home() {
  return (
    <div>
      <BookList libros={librosMock} />
    </div>
  );
}