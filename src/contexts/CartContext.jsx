/* eslint-disable react/jsx-no-constructed-context-values */
import { useState, createContext } from "react";
import { PropTypes } from "prop-types";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const addToCart = (product, quantity = 1) => {
    if (cart.some((el) => el.product.id === product.id)) {
      const index = cart.findIndex((el) => el.product.id === product.id);
      const item = cart[index];
      item.quantity += quantity;
      item.subTotal = item.quantity * item.product.price;
      const newCart = [...cart];
      newCart.splice(index, 1, item);

      setCart([...newCart]);
    } else {
      const item = { product, quantity: 1, subTotal: product.price };
      setCart([...cart, item]);
    }
  };

  const editQuantity = (id, quantity) => {
    if (cart.some((el) => el.product.id === id)) {
      const index = cart.findIndex((el) => el.product.id === id);
      const item = cart[index];
      item.quantity = quantity;
      item.subTotal = quantity * item.product.price;
      const newCart = [...cart];
      newCart.splice(index, 1, item);
      setCart([...newCart]);
    }
  };

  const deleteOfCart = (id) => {
    if (cart.some((el) => el.product.id === id)) {
      const index = cart.findIndex((el) => el.product.id === id);
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart([...newCart]);
    }
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        editQuantity,
        deleteOfCart,
        open,
        setOpen
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default CartProvider;
