import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar({ cart }) {
  let totalQuantity = 0;
  cart.map((cartItem) => {
    totalQuantity += cartItem.quantity
  })
  return (
    <>
      <div className="header">
        <div className="header-left">
          <img src="src/assets/images/amazon-logo-white.png" alt="" className="logo-img" />
        </div>

        <div className="header-center">
          <input type="text" placeholder="Search" className="input-bar js-input-bar" />
          <div className="autocomplete-suggestions js-autocomplete-suggestions"></div>
          <button className="input-btn js-input-btn"><img src="src/assets/icons/search-icon.png" alt="" className="search-icon" /></button>
        </div>

        <div className="header-right">
          <button className="returns-btn">Returns<br /><span style={{ fontWeight: '700' }}>& Orders</span></button>

          <NavLink to='/checkout'>
          <button type="button" className="cart-btn">
            <div className="cart-items js-cart-items">{totalQuantity}</div>

            <div className="cart-icon">
              <img src="src/assets/icons/cart-icon.png" alt="" className="cart-btn-img" />
            </div>

            <div className="cart-text">
              Cart
            </div>
          </button>
          </NavLink>

        </div>

      </div>
    </>
  );
}

export default Navbar;