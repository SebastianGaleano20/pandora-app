import './App.css';
import { products } from "../src/db/products.json"
import { ProductCard } from './component/ProductCard';

function App() {
  return (
    <>
      <h1>Pandora App</h1>
      <ProductCard products={products} />
    </>
  )
}

export default App
