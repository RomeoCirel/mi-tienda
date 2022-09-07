import { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import { productos } from "../contexts/ProductContext";
import { customFetch } from "../services/products-api";

const ItemListContainer = () => {
  const ok = true;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    customFetch(2000, productos, ok)
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => console.log(error));
  }, [products]);
  return products.length > 0 ? (
    <ItemList products={products} />
  ) : (
    "No hay Items Para mostrar"
  );
};

export default ItemListContainer;
