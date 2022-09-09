import { useEffect, useState } from "react";
import { ShieldExclamationIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { getProduct } from "../services/products-api";
import { productos } from "../contexts/ProductContext";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getProduct(productos, parseInt(id, 10))
      .then((res) => {
        setItem(res);
      })
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <div>
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <div className="px-auto">
          <ShieldExclamationIcon className="w-1/4 mx-auto" />
          <h2 className="text-center text-4xl foont-semibold">
            UPPS!! No hay nada por aqui
          </h2>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
