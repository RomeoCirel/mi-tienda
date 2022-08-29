/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CardProduct } from "./CardProduct";
import { CartContext } from "../../contexts/CartContext";

export const CarrucelCardsProduct = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <>
      {products.map((element) => (
        <CardProduct
          key={element.id}
          id={element.id}
          name={element.name}
          price={element.price}
          image={element.image}
          inCart={element.inCart}
          inFavorites={element.inFavorites}
          inOfert={element.inOfert}
          percentOff={element.percentOff}
          outOfStock={element.outOfStock}
          addToCart={addToCart}
        />
      ))}
    </>
  );
};
export default CarrucelCardsProduct;
