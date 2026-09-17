import axios from "axios";
import { useEffect, useState } from "react";
import ProductsGrid from "./ProductsGrid";
import './HomePage.css'

function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/products')
      setProducts(response.data)
    }
    fetchData();
  }, [])

  return (
    <>
      <ProductsGrid products={products} cart={cart} loadCart={loadCart} />
    </>
  );
}

export default HomePage;