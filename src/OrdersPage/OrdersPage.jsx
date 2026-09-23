import axios from "axios";
import { useEffect, useState } from "react";

import OrdersGrid from "./OrdersGrid";
import Navbar from "../components/Navbar"

function OrdersPage( {cart, loadCart} ) {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    const fetchOrderDetails = async () => {
      const response = await axios.get('/api/orders?expand=products');
      setOrders(response.data);
    }
    fetchOrderDetails();
  }, []);

  return(
    <>
    <Navbar cart={cart} />
    <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders} loadCart={loadCart} />
        
      </div>
    </>
  );
}

export default OrdersPage;