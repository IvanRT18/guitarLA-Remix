import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";
import { Post } from "../components/post";
import style from "~/styles/blog.css";

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
  const post = useLoaderData();
  return (
    <main className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {post.map((post) => {
          return <Post key={post.id} post={post.attributes} />;
        })}
      </div>
    </main>
  );
};
export default Blog;
