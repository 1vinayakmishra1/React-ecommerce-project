import './CheckoutPage.css'
import OrderSummary from './OrderSummary';
import CheckoutHeader from './CheckoutHeader';
import PaymentSummary from './PaymentSummary';

function Checkout({ cart, loadCart }) {
  return (
    <>
      <CheckoutHeader cart={cart} />

      <OrderSummary cart={cart} loadCart={loadCart} />

      <PaymentSummary />
    </>
  );
}

export default Checkout;