import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/products"


export default function Home(){
    const products = getProducts();
    return(
        <div className="page">
            <div className="home-hero">
                <h1 className="home-title">Bienvenidos a Ropita de Bebé</h1>
                <p className="home-subtitle">La ropita más hermosa para bebés, a precios sorprendentes.</p>
            </div>
            <div className="container">
                <h2 className="page-title">Nuestros productos</h2>
                <div className="product-grid">
                    {products.map((product)=>(
                        <ProductCard product={product} key={product.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}