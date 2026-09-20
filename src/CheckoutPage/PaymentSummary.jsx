function PaymentSummary() {
  return (
    <div className="payment-summary">
      <div className="js-payment-info">

        <div className="payment-summary-title">
          Order Summary
        </div>

        <div className="payment-summary-row">
          <div>items(<span className="js-payment-items-quantity"></span>):</div>
          <div className="payment-summary-money js-items-total">$0.00</div>
        </div>

        <div className="payment-summary-row">
          <div>Shipping & handling:</div>
          <div className="payment-summary-money js-shipping-cost">$0.00</div>
        </div>

        <div className="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div className="payment-summary-money js-total-before-tax">$0.00</div>
        </div>

        <div className="payment-summary-row">
          <div>Estimated tax(10%):</div>
          <div className="payment-summary-money js-estimated-tax">$0.00</div>
        </div>

        <div className="payment-summary-row total-row">
          <div>Order total</div>
          <div className="payment-summary-money js-order-total">$0.00</div>
        </div>

        <button className="place-order-button button-primary js-place-order-button">
          Place your order
        </button>

      </div>
    </div>
  );
}

export default PaymentSummary;