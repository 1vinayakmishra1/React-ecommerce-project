import CartItemDetails from "./CartItemDetails";

function OrderSummary({ cart, loadCart, deliveryOptions }) {
  return (
    cart.map((cartItem) => (
      <div key={cartItem.product.id} className="cart-item-container js-cart-item-container-${cartItem.product.id}">
        <CartItemDetails cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart} />
      </div>
    ))
  )
}

export default OrderSummary;