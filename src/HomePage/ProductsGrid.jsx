import Navbar from "../components/Navbar";
import Products from "./Products";

function ProductsGrid( {products, cart} ) {
  return (
    <>
      <Navbar products={products} cart={cart} />
      <div className="products-grid">
        { products.map((product) => (
            <Products key={product.id} product={product} />
          ))}
      </div>
    </>
  )
}

export default ProductsGrid;