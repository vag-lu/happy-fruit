import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Products from "../../components/products";
import Search from "../../components/search";

import { products } from "../../utils/products.data";

function Home() {
  const [search, setSearch] = useState();
  const [productsToRender, setProductsToRender] = useState([]);

  useEffect(() => {
    setProductsToRender(products);
  }, []);

  const onSearchChange = ({ target }) => setSearch(target.value);
  const handleSearch = () => {
    let newProductsList = products.filter((product) =>
      product.name.includes(search.toLowerCase())
    );
    setProductsToRender(newProductsList);
  };

  return (
    <Layout>
      <Search
        search={search}
        onSearchChange={onSearchChange}
        handleSearch={handleSearch}
      />
      <Products products={productsToRender} />
    </Layout>
  );
}

export default Home;
