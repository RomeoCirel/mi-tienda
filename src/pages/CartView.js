import { useContext } from "react";
import { RouteContext } from "../contexts/RouteContext";

const CartView = () => {
  const [, setSectionName] = useContext(RouteContext);
  setSectionName("Carrito");
  return <div>Cart</div>;
};

export default CartView;
