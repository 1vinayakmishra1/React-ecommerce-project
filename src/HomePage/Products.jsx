import axios from "axios";
import { useState } from "react";
import money from "../utils/money"

function Products({ product }) {
  const [quantity, setQuantity] = useState(0);

  const addToCart = async () => {
    await axios.post('/api/cart-items'), {
      productId: product.id,
      quantity: quantity + 1
    };
    setQuantity(quantity);
  }

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
          <select name="numbers" id={product.id} className="js-product-quantity">
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

        <button className="add-to-cart js-add-to-cart" data-product-id={product.id} onClick={addToCart}>
          Add to Cart
        </button>

      </div>
    </>
  );
}

export default Products;