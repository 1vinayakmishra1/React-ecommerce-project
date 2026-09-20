import axios from "axios";
import { useState } from "react";
import money from "../utils/money"
import CheckMarkIcon from "../assets/icons/checkmark.png"

function Products({ product, loadCart }) {
  const [quantity, setQuantity] = useState(1);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const addToCart = async () => {
    await axios.post('/api/cart-items', {
      productId: product.id,
      quantity: quantity
    });
    await loadCart();
    
    setShowAddedMessage(true);

    setTimeout(() => {
      setShowAddedMessage(false);
    },2000)
  }

  const selectQuantity = (event) => {
    const quantitySelected = Number(event.target.value)
    setQuantity(quantitySelected);
  };

  return (
    <>
      <div key={product.id} className={`product-container js-product-container data-${product.id}`}>

        <div className="product-img-div">
          <img src={product.image} className="product-img" />
        </div>

        <div className="product-name">
          {product.name}
        </div>

        <div className="product-ratings">
          <img src={`src/assets/ratings/rating-${((Math.round(product.rating.stars * 2) / 2) * 10)}.png`} />
          <div className="product-ratings-text">({product.rating.count})</div>
        </div>

        <div className="price-div">
          ${money(product.priceCents)}
        </div>

        <div className="dropdown">
          <select name="numbers" id={product.id} className="js-product-quantity" value={quantity} onChange={selectQuantity}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div className="added-to-cart" style={{opacity: showAddedMessage ? 1 : 0}}>
          <img src={CheckMarkIcon} alt="" />
          Added
        </div>

        <button className="add-to-cart js-add-to-cart" data-product-id={product.id} onClick={addToCart}>
          Add to Cart
        </button>

      </div>
    </>
  );
}

export default Products;