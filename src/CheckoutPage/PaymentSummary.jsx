import money from "../utils/money";

function PaymentSummary({ paymentSummary }) {
  return (
    <div className="payment-summary">
      <div className="js-payment-info">

        <div className="payment-summary-title">
          Order Summary
        </div>

        <div className="payment-summary-row">
          <div>items(<span className="js-payment-items-quantity">{paymentSummary.totalItems}</span>):</div>
          <div className="payment-summary-money js-items-total">${money(paymentSummary.productCostCents)}</div>
        </div>

        <div className="payment-summary-row">
          <div>Shipping & handling:</div>
          <div className="payment-summary-money js-shipping-cost">${money(paymentSummary.shippingCostCents)}</div>
        </div>

        <div className="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div className="payment-summary-money js-total-before-tax">${money(paymentSummary.totalCostBeforeTaxCents)}</div>
        </div>

        <div className="payment-summary-row">
          <div>Estimated tax(10%):</div>
          <div className="payment-summary-money js-estimated-tax">${money(paymentSummary.taxCents)}</div>
        </div>

        <div className="payment-summary-row total-row">
          <div>Order total</div>
          <div className="payment-summary-money js-order-total">${money(paymentSummary.totalCostCents)}</div>
        </div>

        <button className="place-order-button button-primary js-place-order-button">
          Place your order
        </button>

      </div>
    </div>
  );
}

export default PaymentSummary;