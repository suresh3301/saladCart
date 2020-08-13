import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import "./../css/MainNavigation.css";

const MainNavigation = () => {
  const enableCheckout = useSelector((state) => (state as any).enableCheckout);
  const dispatch = useDispatch();

  const checkout = () => {
    dispatch({ type: "CHECKOUT_TRIGGER" });
  };

  return (
    <div className="App-Header__container">
      <nav className="App-Header__nav">
        <h3 className="mainnav__title">The Salad Store</h3>
        {(enableCheckout === true || enableCheckout === false) && (
          <button
            className="btn btn-primary mainnav__checkoutbtn"
            disabled={!enableCheckout}
            onClick={checkout}
          >
            <FaShoppingCart />
            &nbsp;&nbsp;Proceed to checkout
          </button>
        )}
      </nav>
      <div className="mainnav__bottompadding"></div>
    </div>
  );
};

export default MainNavigation;
