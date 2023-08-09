import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import Guitarra from "../components/guitarra";
import style from "~/styles/guitarras.css";

export function meta() {
  return [
    { title: "GuitarLA - Tienda de Guitarras" },
    { description: "GuitarLA - Nuestra colección de guitarras" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
  ];
}

export async function loader() {
  const guitarras = await getGuitarras();

  return guitarras.data;
}

const Tienda = () => {
  const guitarras = useLoaderData();
  return (
    <main className="contenedor">
      <h2 className="heading">Nuestros productos</h2>

      {guitarras.length && (
        <div className="guitarras-grid">
          {guitarras.map((guitarra) => {
            return (
              <Guitarra key={guitarra?.id} guitarra={guitarra?.attributes} />
            );
          })}
        </div>
      )}
    </main>
  );
};
export default Tienda;
