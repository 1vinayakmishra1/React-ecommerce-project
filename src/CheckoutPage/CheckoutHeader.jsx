import { Link } from "react-router-dom";
import amazonLogo from "../assets/images/amazon-logo.png";
import amazonMobileLogo from "../assets/images/amazon-mobile-logo.png";
import checkoutLockIcon from "../assets/images/checkout-lock-icon.png";
import "./CheckoutHeader.css"

function CheckoutHeader({ cart }) {
  let totalQuantity = 0;
  cart.map((cartItem) => {
    totalQuantity += cartItem.quantity
  })

  return (
    <>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src={amazonLogo} />
              <img className="mobile-logo" src={amazonMobileLogo} />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<Link className="return-to-home-link"
              to="/">{totalQuantity} items</Link>)
          </div>

          <div className="checkout-header-right-section">
            <img src={checkoutLockIcon} />
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutHeader;