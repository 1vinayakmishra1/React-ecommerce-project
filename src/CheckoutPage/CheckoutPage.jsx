import './CheckoutPage.css'
import OrderSummary from './OrderSummary';
import CheckoutHeader from './CheckoutHeader';

function Checkout({ cart, loadCart }) {
  return (
    <>
      <CheckoutHeader cart={cart} />

      <OrderSummary cart={cart} loadCart={loadCart} />
    </>
  );
}

export default Checkout;