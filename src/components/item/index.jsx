import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { add } from "../../redux/reducers/cartSlice";
import "./index.scss";

function Item({ item }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shopCart.cart);
  const [quantity, setQuantity] = useState(1);

  function addToCartHandle() {
    let itemToAdd = { ...item, quantity: quantity };
    let existingItem = cart.find(
      (intemInCart) => intemInCart.id === itemToAdd.id
    );
    if (existingItem) {
      itemToAdd = {
        ...itemToAdd,
        quantity: itemToAdd.quantity + existingItem.quantity,
      };
    }
    setQuantity(1);
    dispatch(add(itemToAdd));
  }

  return (
    <div className="item">
      <img alt={item.name} src={item.url} />
      <div className="details">
        <div>
          <p className="name">{item.name}</p>
          <p className="price">
            R$ {item.price.toFixed(2).toString().replace(".", ",")}
          </p>
        </div>
        <div>
          <input
            type="number"
            value={quantity}
            onChange={({ target }) => setQuantity(parseInt(target.value))}
          />
          <button onClick={addToCartHandle}>
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
