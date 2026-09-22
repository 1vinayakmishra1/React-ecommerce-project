import './CheckoutPage.css'
import OrderSummary from './OrderSummary';
import CheckoutHeader from './CheckoutHeader';
import PaymentSummary from './PaymentSummary';
import axios from "axios";
import { useEffect, useState } from 'react';

function Checkout({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([]);

  useEffect(() => {
    const fetchCheckoutDetails = async () => {
      const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
      setDeliveryOptions(response.data);
    }
    fetchCheckoutDetails();
  }, []);

  useEffect(() => {
    const fetchPaymentSummary = async () => {
      const response = await axios.get('/api/payment-summary');
      setPaymentSummary(response.data);
    }
    fetchPaymentSummary();
  }, [cart]);

  return (
    <>
      <CheckoutHeader cart={cart} />

      <OrderSummary cart={cart} loadCart={loadCart} deliveryOptions={deliveryOptions} />

      <PaymentSummary loadCart={loadCart} paymentSummary={paymentSummary} />
    </>
  );
}

export default Checkout;