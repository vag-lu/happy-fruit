import { useDispatch } from "react-redux";
import { remove } from "../../redux/reducers/cartSlice";
import "./index.scss";

function CartItem({ item }) {
  const dispatch = useDispatch();

  function deleteItemHandle() {
    dispatch(remove(item));
  }

  return (
    <div className="cart-item">
      <img alt={item.name} src={item.url} />
      <div>
        <p className="name">{item.name}</p>
        <p>
          {item.quantity}x R$
          {item.price.toFixed(2).toString().replace(".", ",")}
        </p>
        <p>
          <b>
            R$
            {(item.price * item.quantity)
              .toFixed(2)
              .toString()
              .replace(".", ",")}
          </b>
        </p>
      </div>
      <div>
        <button title="Excluir" onClick={deleteItemHandle}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
