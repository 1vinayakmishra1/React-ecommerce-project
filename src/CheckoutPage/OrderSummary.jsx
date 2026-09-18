import dayjs from "dayjs";
import axios from "axios";
import { useState, useEffect } from "react";
import money from "../utils/money"

function OrderSummary({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);

  useEffect(() => {
    const fetchCheckoutDetails = async () => {
      const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime');
      setDeliveryOptions(response.data);
    }
    fetchCheckoutDetails();
  }, [])
  console.log(deliveryOptions);

  return (
    cart.map((cartItem) => (
      <div key={cartItem.product.id} className="cart-item-container js-cart-item-container-${cartItem.product.id}">

        <div className="delivery-date">Delivery Date: Monday, July 27</div>

        <div className="cart-item-details-grid">

          <img src={`/${cartItem.product.image}`} alt={cartItem.product.name} />
          <div className="cart-item-details">
            <div className="product-name">{cartItem.product.name}</div>
            <div className="product-price">${(cartItem.product.priceCents / 100).toFixed(2)}</div>
            <div className="product-quantity">
              Quantity: <span className="js-quantity-label-${cartItem.product.id}">{cartItem.quantity}</span>

              <span className="js-quantity-editing-container js-quantity-editing-container-${cartItem.product.id}">
                <input className="new-quantity-input js-new-quantity-input-${cartItem.product.id}" type="number" min="1" value={cartItem.product.quantity} data-testid="new-quantity-input" />
                <button className="save-btn js-save-btn" data-product-id="${cartItem.product.id}">Save</button>
              </span>

              <button className="update-btn js-update-btn" data-product-id="${cartItem.product.id}">Update</button>
              <button className="delete-btn js-delete-btn" data-product-id="${cartItem.product.id}">Delete</button>

            </div>
          </div>

          <div className="delivery-options-main">
            <div className="delivery-options-title">Choose a delivery option:</div>

            <div className="delivery-options js-delivery-options">
              {
                deliveryOptions.map((deliveryOption) => {
                  let priceString = 'FREE Shipping';

                  if (deliveryOption.priceCents > 0) {
                    priceString = `${money(deliveryOption.priceCents)} - Shipping`
                  }

                  const updateDeliveryOption = async () => {
                    await axios.put(`/api/cart-items/${cartItem.productId}`, {
                      deliveryOptionId: deliveryOption.id
                    });
                    await loadCart();
                  }

                  return (
                    <div key={deliveryOption.id} className="delivery-option"
                      onClick={updateDeliveryOption}>
                      <input type="radio"
                        checked={deliveryOption.id === cartItem.deliveryOptionId}
                        onChange={() => {}}
                        className="delivery-option-input"
                        name={`delivery-option-${cartItem.productId}`} />
                      <div>
                        <div className="delivery-option-date">
                          {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                        </div>
                        <div className="delivery-option-price">
                          {priceString}
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>

          </div>

        </div>

      </div>
    ))
  )
}

export default OrderSummary;