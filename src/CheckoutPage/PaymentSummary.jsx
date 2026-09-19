function PaymentSummary() {
  return (
    <div class="payment-summary">
      <div class="js-payment-info">

        <div class="payment-summary-title">
          Order Summary
        </div>

        <div class="payment-summary-row">
          <div>items(<span class="js-payment-items-quantity"></span>):</div>
          <div class="payment-summary-money js-items-total">$0.00</div>
        </div>

        <div class="payment-summary-row">
          <div>Shipping & handling:</div>
          <div class="payment-summary-money js-shipping-cost">$0.00</div>
        </div>

        <div class="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div class="payment-summary-money js-total-before-tax">$0.00</div>
        </div>

        <div class="payment-summary-row">
          <div>Estimated tax(10%):</div>
          <div class="payment-summary-money js-estimated-tax">$0.00</div>
        </div>

        <div class="payment-summary-row total-row">
          <div>Order total</div>
          <div class="payment-summary-money js-order-total">$0.00</div>
        </div>

        <button class="place-order-button button-primary js-place-order-button">
          Place your order
        </button>

      </div>
    </div>
  );
}

export default PaymentSummary;