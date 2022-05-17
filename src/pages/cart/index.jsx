import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../../components/cartItem";
import Layout from "../../components/layout";

import "./index.scss";

function Cart() {
  const cart = useSelector((state) => state.shopCart.cart);
  let total = cart.reduce(
    (accumulator, currentItem) =>
      accumulator + currentItem.quantity * currentItem.price,
    0.0
  );

  return (
    <Layout>
      <Link title="Retornar" className="back" to="/home">
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
      <h1>Carrinho de compras</h1>
      <div className="cart">
        {cart.length > 0 ? (
          <>
            {cart.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
            <div className="checkout">
              <p className="total">
                Total: R${total.toFixed(2).toString().replace(".", ",")}
              </p>
              <button>Checkout</button>
            </div>
          </>
        ) : (
          <div className="empty">
            <h2>Seu carrinho está vazio.</h2>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Cart;
