import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/post.server";
import { formatearFecha } from "~/utils/helpers";
import style from "~/styles/blog.css";

export async function loader({ params }) {
  const post = await getPost(params.postUrl);
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada",
    });
  }
  return post;
}

export function meta(data) {
  if (!data) {
    return [
      {
        title: `GuitarLA - Entrada no encontrada`,
      },
      {
        descripcion: `Guitarras, venta de guitarras, entrada no encontrada`,
      },
    ];
  }

  const nombreEntrada = data?.data?.data[0]?.attributes?.titulo;
  return [
    {
      title: `GuitarLA - ${nombreEntrada}`,
    },
    {
      descripcion: `Guitarras, venta de guitarras, entrada ${nombreEntrada}`,
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

const Post = () => {
  const post = useLoaderData();
  const { contenido, imagen, publishedAt, titulo } = post?.data[0]?.attributes;

  return (
    <article className="contenedor post mt-5">
      <img
        src={imagen?.data?.attributes?.url}
        alt={`Imagen blog ${titulo}`}
        className="imagen"
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
      </div>
    </article>
  );
};
export default Post;
