import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "../models/guitarras.server";
import style from "~/styles/guitarras.css";

export async function loader({ params }) {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);

  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada",
    });
  }

  return guitarra;
}

export function meta(data) {
  if (!data) {
    return [
      {
        title: `GuitarLA - Guitarra no encontrada`,
      },
      {
        descripcion: `Guitarras, venta de guitarras, guitarra no encontrada`,
      },
    ];
  }

  const nombreGuitarra = data?.data?.data[0]?.attributes?.nombre;
  return [
    {
      title: `GuitarLA - ${nombreGuitarra}`,
    },
    {
      descripcion: `Guitarras, venta de guitarras, guitarra ${nombreGuitarra}`,
    },
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

const Guitarra = () => {
  const guitarras = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarras.data[0].attributes;
  return (
    <main className="contenedor guitarra">
      <img
        src={imagen?.data[0]?.attributes?.url}
        alt={`Imagen de la guitarra ${nombre}`}
        className="imagen"
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
    </main>
  );
};
export default Guitarra;
