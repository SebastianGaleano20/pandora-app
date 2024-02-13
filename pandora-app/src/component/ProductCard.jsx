export function ProductCard ({ products }){
    return(
        <main>
            <ul>
                {products.map(product =>(
                    <li key={product.id}>
                    <img src={product.Imagen} alt={product.Nombre}/>
                   <div>
                    <strong>{product.Nombre}</strong>
                   </div>
                   <div>
                    <button>
                        añadir
                    </button>
                   </div>
                </li>
                ))}
                
            </ul>
        </main>
    )
}