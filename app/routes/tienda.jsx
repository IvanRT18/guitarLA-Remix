import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import style from "~/styles/guitarras.css";
import ListadoGuitarras from "../components/listadoGuitarras";

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
      <ListadoGuitarras guitarras={guitarras} />
      )}
    </main>
  );
};
export default Tienda;
