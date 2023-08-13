import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/post.server";
import ListadoGuitarras from "~/components/listadoGuitarras";
import styleGuitarras from "~/styles/guitarras.css";
import ListadoPosts from "~/components/listadoPosts";
import stylePosts from "~/styles/blog.css";

export function meta() {}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styleGuitarras,
    },
    {
      rel: "stylesheet",
      href: stylePosts,
    },
  ];
}

export async function loader() {
  const [guitarras, posts] = await Promise.all([getGuitarras(), getPosts()]);
  console.log(guitarras, posts);
  return {
    guitarras: guitarras.data,
    posts: posts.data,
  };
}

const Index = () => {
  const { guitarras, posts } = useLoaderData();

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>

      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
  );
};
export default Index;
