import Item from "../item";

import "./index.scss";

function Products({ products }) {
  return (
    <div className="products">
      {products.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Products;
