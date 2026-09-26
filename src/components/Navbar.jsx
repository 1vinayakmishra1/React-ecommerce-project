import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css'
import logo from "../assets/images/amazon-logo-white.png";
import searchIcon from "../assets/icons/search-icon.png";
import cartIcon from "../assets/icons/cart-icon.png";
import { useState } from 'react';

function Navbar({ cart }) {
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const searchText = params.get('search');

  const [search, setSearch] = useState(searchText || '');

  const updateInputText = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  }

  const searchInputText = () => {
    navigate(`/?search=${search}`);
  }

  const keyDown = (event) => {
    if (event.key === 'Enter') {
      searchInputText();
    }
  }

  let totalQuantity = 0;
  cart.map((cartItem) => {
    totalQuantity += cartItem.quantity
  })
  return (
    <>
      <div className="header">
        <NavLink to='/'>
          <div className="header-left">
            <img src={logo} alt="" className="logo-img" />
          </div>
        </NavLink>

        <div className="header-center">
          <input type="text" placeholder="Search" className="input-bar js-input-bar" onChange={updateInputText} onKeyDown={keyDown} />
          <div className="autocomplete-suggestions js-autocomplete-suggestions"></div>
          <button className="input-btn js-input-btn"><img src={searchIcon} alt="" className="search-icon" onClick={searchInputText} /></button>
        </div>

        <div className="header-right">
          <NavLink to='/orders'>
            <button className="returns-btn">Returns<br /><span style={{ fontWeight: '700' }}>& Orders</span></button>
          </NavLink>

          <NavLink to='/checkout'>
            <button type="button" className="cart-btn">
              <div className="cart-icon">
                <div className="cart-items js-cart-items">{totalQuantity}</div>
                <img src={cartIcon} alt="" className="cart-btn-img" />
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