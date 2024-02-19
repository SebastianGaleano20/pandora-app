import { ProductCard } from "../component/Nav/ProductCard/ProductCard";
import { productos } from "../db/productos.json";
export function Productos() {
  return <ProductCard productos={productos} />;
}
