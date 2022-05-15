import React from "react";
import Logo from "../../style/images/Logo";
import "./index.scss";

function Head() {
  return (
    <section className="head">
      <Logo />
      <div className="icons">
        <a>
          <i className="fa-solid fa-user"></i>
        </a>
        <a>
          <i className="fa-solid fa-cart-shopping"></i>
        </a>
      </div>
    </section>
  );
}

export default Head;
