/* eslint-disable react/prop-types */
import { useState } from "react";
import { PropTypes } from "prop-types";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartSolid,
  ShoppingCartIcon as CartSolid,
  EyeIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  XCircleIcon
} from "@heroicons/react/24/solid";

export const CardProduct = ({
  id,
  image,
  name,
  description,
  price,
  stock,
  inOfert,
  percentOff,
  inFavorites,
  inCart,
  addToCart,
  addToFavorites,
  deleteOfFavorites,
  goToDetail
}) => {
  const [showCount, setShowCont] = useState(false);
  const [qty, setQty] = useState(1);

  const handleClickAddBtn = () => {
    if (qty < stock) {
      setQty(qty + 1);
    }
  };

  const handleClickMinusBtn = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  const resetQty = () => setQty(1);

  const cancelAddToCart = () => {
    setShowCont(false);
    resetQty();
  };
  const producto = {
    id,
    image,
    name,
    description,
    price,
    stock
  };

  const addToCartLocal = () => {
    addToCart(producto, qty);
    setShowCont(false);
    resetQty();
  };

  const addToFavoritesLocal = () => {
    addToFavorites(producto);
  };

  const goToDetailLocal = () => {
    goToDetail(id);
  };

  const deleteOfFavoritesLocal = () => {
    deleteOfFavorites(id);
  };
  return (
    <div className="card w-64 max-w-md bg-gray-100 shadow-xl shadow-gray-700/50 text-gray-600">
      <figure className="max-h-64 h-52">
        <img src={image} alt={name} className="max-h-52" />
      </figure>
      <div className="card-body p-4 grid content-between">
        <div className="flex flex-nowrap justify-between">
          {inOfert ? (
            <div className="badge border-none bg-teal-500 text-xs text-gray-50 font-semibold">
              OFERTA {`${percentOff}%`}
            </div>
          ) : null}
          {stock === 0 ? (
            <div className="badge border-none bg-red-500 text-xs text-gray-50 font-semibold">
              SIN STOCK
            </div>
          ) : null}
        </div>
        <h3 className="card-title text-sm font-semibold">{name}</h3>

        {description ? <p className="p-2 text-justify">{description}</p> : null}
        <div className="card-actions grid grid-cols-6 gap-1 bottom-0">
          <div className="font-bold col-span-3">
            ${" "}
            {price.toLocaleString("es-IN", {
              minimumFractionDigits: 0
            })}
          </div>
          <div>
            <button
              type="button"
              className="btn btn-circle btn-link btn-sm border-none transparent"
              onClick={() => goToDetailLocal()}
            >
              <EyeIcon className="h-5 w-5 text-gray-400 hover:text-blue-500" />
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-circle btn-link btn-sm  border-none"
            >
              {inFavorites ? (
                <HeartSolid
                  className="h-5 w-5 text-red-500"
                  onClick={() => deleteOfFavoritesLocal()}
                />
              ) : (
                <HeartIcon
                  className="h-5 w-5 hover:text-red-500"
                  onClick={() => addToFavoritesLocal()}
                />
              )}
            </button>
          </div>
          <div>
            {inCart ? (
              <button type="button" className="btn btn-link btn-sm border-none">
                <CartSolid className="h-5 w-5 hover:text-gray-500" />
              </button>
            ) : null}
            {!inCart && !showCount ? (
              <button type="button" className="btn btn-link btn-sm border-none">
                <ShoppingCartIcon
                  className=" h-5 w-5 hover:text-gray-500 hover:text-primary"
                  onClick={() => setShowCont(true)}
                />
              </button>
            ) : null}
            {!inCart && showCount ? (
              <button
                type="button"
                className="text-red-500 btn-link btn-sm border-none"
                onClick={() => cancelAddToCart()}
              >
                <XCircleIcon className="h-5 w-5" />
              </button>
            ) : null}
          </div>
        </div>
        {showCount ? (
          <div className="card-actions grid grid-cols-6 gap-1 bottom-0">
            <div className="btn-group col-span-4  font-bold text-lg">
              <button
                type="button"
                className="p-1 btn-link w-8"
                onClick={() => handleClickMinusBtn()}
              >
                <ChevronDownIcon className="text-gray-800" />
              </button>
              <button
                type="button"
                className="btn-link w-8 bg-transparent hover:bg-transparent border-none"
              >
                {qty}
              </button>
              <button
                type="button"
                className="p-1 btn-link w-8"
                onClick={() => handleClickAddBtn()}
              >
                <ChevronUpIcon className="text-gray-800" />
              </button>
              <div className="col-span-4 mt-1">
                <h4 className="text-sm font-normal text-yellow-600">
                  ( {stock} ) disponibles
                </h4>
              </div>
            </div>
            <div className="col-span-1">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => addToCartLocal()}
                disabled={qty === 0}
              >
                <ShoppingCartIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
CardProduct.defaultProps = {
  inOfert: false,
  percentOff: "",
  inFavorites: false,
  inCart: false,
  addToCart: (id) => {
    console.log(`agrgar al carrito: ${id}`);
  },
  addToFavorites: (id) => {
    console.log(`agrgar a favoritos: ${id}`);
  },
  deleteOfFavorites: (id) => {
    console.log(`quitar de favoritos: ${id}`);
  },
  goToDetail: (id) => {
    console.log(`ir a detalle: ${id}`);
  }
};

CardProduct.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  inOfert: PropTypes.bool,
  percentOff: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inFavorites: PropTypes.bool,
  inCart: PropTypes.bool,
  addToCart: PropTypes.func,
  addToFavorites: PropTypes.func,
  deleteOfFavorites: PropTypes.func,
  goToDetail: PropTypes.func
};

export default CardProduct;
