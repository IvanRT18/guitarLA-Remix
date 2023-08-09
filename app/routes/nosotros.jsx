import imagen from "../../public/img/nosotros.jpg";
import style from "~/styles/nosotros.css";

export function meta() {
  return [
    { title: "GuitarLA - Nosotros" },
    { description: "Venta de guitarras, blog de música" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: style,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quae earum obcaecati facere voluptatum commodi
            asperiores hic tempore unde tempora. Error aspernatur sit, odio
            adipisci dicta vitae asperiores iure corrupti.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            laboriosam quis quae, provident dolorem magnam rerum fugiat
            accusamus optio debitis non consequuntur nemo ipsum corrupti,
            possimus nesciunt recusandae obcaecati nihil?
          </p>
        </div>
      </div>
    </main>
  );
};
export default Nosotros;
