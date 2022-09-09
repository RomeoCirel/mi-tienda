import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { productos } from "../contexts/ProductContext";
import { customFetch, getProductsByCategory } from "../services/products-api";

const ItemListContainer = () => {
  const ok = true;
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getProductsByCategory(productos, parseInt(id, 10))
        .then((res) => {
          setProducts(res);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  useEffect(() => {
    if (id === undefined) {
      customFetch(2000, productos, ok)
        .then((res) => {
          setProducts(res);
        })
        .catch((error) => console.log(error));
    }
  }, [products]);

  return products.length > 0 ? (
    <ItemList products={products} path="/item" />
  ) : (
    "No hay Items Para mostrar"
  );
};

export default ItemListContainer;
