import axios from "axios";
import dayjs from "dayjs";
import money from "../utils/money"
import { useState } from "react";

function CartItemDetails({ cartItem, deliveryOptions, loadCart }) {
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const updateCartItem = async () => {
    if (isUpdatingQuantity) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity
      });
      await loadCart();
      setIsUpdatingQuantity(false);
    } else {
      setIsUpdatingQuantity(true);
    }
  }

  const updateQuantityInput = (event) => {
    const text = Number(event.target.value);
    setQuantity(text);
  }

  const keyPress = (event) => {
    if (event.key === 'Enter') {
      updateCartItem();
    } else if (event.key === 'Escape') {
      setQuantity(cartItem.quantity);
      setIsUpdatingQuantity(false);
    }
  }


  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    await loadCart();
  }

  const defaultDeliveryOption = deliveryOptions.find((deliveryOption) => {
    return deliveryOption.id === cartItem.deliveryOptionId
  });

    const [selectedDeliveryDate, setSelectedDeliveryDate] = useState(defaultDeliveryOption?.estimatedDeliveryTimeMs);
  
  return (
    <>
      <div className="delivery-date">Delivery Date: {dayjs(selectedDeliveryDate).format('dddd, MMMM D')}</div>

      <div className="cart-item-details-grid">

        <img src={`/${cartItem.product.image}`} alt={cartItem.product.name} />
        <div className="cart-item-details">
          <div className="product-name">{cartItem.product.name}</div>
          <div className="product-price">${(cartItem.product.priceCents / 100).toFixed(2)}</div>
          <div className="product-quantity">
            Quantity: {
              isUpdatingQuantity
                ? <input type='text' className='checkout-quantity-input' value={quantity} onChange={updateQuantityInput} onKeyDown={keyPress} />
                : <span className="js-quantity-label-${cartItem.product.id}">{cartItem.quantity}</span>
            }

            <button onClick={updateCartItem} className="update-btn js-update-btn" data-product-id="${cartItem.product.id}">Update</button>
            <button onClick={deleteCartItem} className="delete-btn js-delete-btn" data-product-id="${cartItem.product.id}">Delete</button>

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
                  setSelectedDeliveryDate(deliveryOption.estimatedDeliveryTimeMs);
                  await loadCart();
                }

                return (
                  <div key={deliveryOption.id} className="delivery-option"
                    onClick={updateDeliveryOption}>
                    <input type="radio"
                      checked={deliveryOption.id === cartItem.deliveryOptionId}
                      onChange={() => { }}
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
    </>
  )
}

export default CartItemDetails;