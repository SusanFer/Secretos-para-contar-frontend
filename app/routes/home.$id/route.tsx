import { useParams } from "@remix-run/react";
function bookCard() {
    const { id } = useParams();
    return (
        <div>
            <h2>Hola desde book {id}</h2>
        </div>
      );
}

export default bookCard;