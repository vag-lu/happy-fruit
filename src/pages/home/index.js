import React from "react";
import { useSelector } from "react-redux";

import Head from "../../components/head";
import Products from "../../components/products";

function Home() {
  const cart = useSelector((state) => state.shopCart.cart);

  console.log(cart);
  return (
    <React.Fragment>
      <Head />
      <Products />
    </React.Fragment>
  );
}

export default Home;
