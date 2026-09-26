import axios from "axios";
import { useEffect, useState } from "react";
import ProductsGrid from "./ProductsGrid";
import './HomePage.css'
import { useSearchParams } from "react-router-dom";

function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchData = async () => {
      const urlPath = search ? `/api/products?search=${search}` : '/api/products';
      const response = await axios.get(urlPath)
      setProducts(response.data)
    }
    fetchData();
  }, [search]);

  return (
    <>
      <ProductsGrid products={products} cart={cart} loadCart={loadCart} />
    </>
  );
}

export default HomePage;