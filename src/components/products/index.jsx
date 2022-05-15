import { products } from "../../utils/products.data";
import Item from "../item";

import "./index.scss";

function Products() {
  return (
    <div className="products">
      {products.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Products;
