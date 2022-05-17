import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../style/images/Logo";
import "./index.scss";

function NavBar() {
  const cart = useSelector((state) => state.shopCart.cart);
  return (
    <header className="head">
      <Link to="/home">
        <Logo />
      </Link>
      <nav className="icons">
        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
          {cart.length}
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
