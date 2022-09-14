import { useState } from "react";
import { PropTypes } from "prop-types";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item, addToCart }) => {
  const [inCart, setInCart] = useState(false);
  const aonAddHandler = (qty) => {
    setInCart(true);
    addToCart({ id: item.id, qty });
  };
  let renderComponent;

  if (!inCart && item.stock) {
    renderComponent = (
      <ItemCount
        stock={item.stock}
        initial={1}
        textButton="Agregar al carrito"
        onAdd={aonAddHandler}
      />
    );
  }

  if (!inCart && item.stock === 0) {
    renderComponent = (
      <div className="my-8">
        <h2 className="text-red-500 font-semibold">Sin Stock</h2>
      </div>
    );
  }

  if (inCart) {
    // HACER: armar un componente boton con props (texto, variante(RouterLink o Button), estilo, icono, onClick, path)
    renderComponent = (
      <div className="my-8">
        <Link to="/cart">
          <button type="button" className="btn  btn-primary text-gray-50">
            <ShoppingCartIcon className="h-5 w-5 text-gray-50" />
            <span className="text-gray-50 ml-1">Ver en carrito</span>
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className=" min-h-2/4 ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={item.image}
          className="max-w-sm rounded-lg shadow-2xl"
          alt={item.name}
        />
        <div className="pl-2">
          <h1 className="text-5xl font-bold text-gray-600">{item.name}</h1>
          <div>{renderComponent}</div>
        </div>
      </div>
      <div className="divider" />
      <div className="mt-4">
        <h2 className="text-xl font-bold text-center">
          Descripción del producto
        </h2>
        <p className="p-6 text-md font-semibold">
          {item.description ?? "Este Producto no cuenta con una descripción"}
        </p>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number
  }).isRequired,
  addToCart: PropTypes.func.isRequired
};

export default ItemDetail;
