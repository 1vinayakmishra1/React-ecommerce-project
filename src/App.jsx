import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage/HomePage'
import Checkout from './CheckoutPage/CheckoutPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import OrdersPage from './OrdersPage/OrdersPage';
import TrackingPage from './TrackingPage/TrackingPage';
import PageNotFound from './PageNotFound/PageNotFound';

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  }

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
        <Route path="checkout" element={<Checkout cart={cart} loadCart={loadCart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} loadCart={loadCart} />} />
        <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />
        <Route path="*" element={<PageNotFound cart={cart} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
