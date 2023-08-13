import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";
import style from "~/styles/blog.css";
import ListadoPosts from "~/components/listadoPosts";

export function meta() {
  return [
    { title: "GuitarLA - Nuestro Blog" },
    { description: "GuitarLA, Blog de música y venta de guitarras" },
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
  const post = await getPosts();
  return post.data;
}

const Blog = () => {
  const posts = useLoaderData();
  return (
    <main className="contenedor">
      <ListadoPosts posts={posts} />
    </main>
  );
};
export default Blog;
