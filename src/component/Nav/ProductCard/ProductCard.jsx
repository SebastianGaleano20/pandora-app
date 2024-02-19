/* eslint-disable react/prop-types */
import "./Productcard.css";
export function ProductCard({ productos = [] }) {
  return (
    <div className="container-product"> 
    <main className="products">
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <img src={producto.Imagen} alt={producto.Nombre} />
            <div className="info-product">
              <h1>{producto.Nombre}</h1>
              <h3>Precio: ${producto.Precio}</h3>
            </div>
              <button>añadir</button>
          </li>
        ))}
      </ul>
    </main>
    </div>
  );
}