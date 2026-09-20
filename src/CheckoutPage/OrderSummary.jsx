import axios from "axios";
import { useState, useEffect } from "react";
import CartItemDetails from "./CartItemDetails";

function OrderSummary({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);

  useEffect(() => {
    const fetchCheckoutDetails = async () => {
      const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
      setDeliveryOptions(response.data);
    }
    fetchCheckoutDetails();
  }, []);

  return (
    cart.map((cartItem) => (
      <div key={cartItem.product.id} className="cart-item-container js-cart-item-container-${cartItem.product.id}">
        <CartItemDetails cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />
      </div>
    ))
  )
}

export default OrderSummary;