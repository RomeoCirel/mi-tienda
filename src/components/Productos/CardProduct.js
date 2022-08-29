/* eslint-disable react/prop-types */
import { PropTypes } from "prop-types";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartSolid,
  ShoppingCartIcon as CartSolid,
  EyeIcon
} from "@heroicons/react/24/solid";

export const CardProduct = ({
  id,
  image,
  name,
  description,
  price,
  inOfert,
  percentOff,
  inFavorites,
  inCart,
  outOfStock,
  addToCart,
  addToFavorites,
  deleteOfFavorites,
  goToDetail
}) => {
  const producto = {
    id,
    image,
    name,
    description,
    price
  };
  const addToCartLocal = () => {
    addToCart(producto);
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
          {outOfStock ? (
            <div className="badge border-none bg-red-500 text-xs text-gray-50 font-semibold">
              SIN STOCK
            </div>
          ) : null}
        </div>
        <h3 className="card-title text-sm font-semibold">{name}</h3>
        {description ? <p className="p-2 text-justify">{description}</p> : null}
        <div className="card-actions grid grid-cols-6 gap-1 bottom-0">
          <div className="font-bold col-span-3">$ {price}</div>
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
            <button type="button" className="btn btn-link btn-sm border-none">
              {inCart ? (
                <CartSolid className="h-5 w-5 hover:text-gray-500" />
              ) : (
                <ShoppingCartIcon
                  className="h-5 w-5 hover:text-gray-500 hover:text-primary"
                  onClick={() => addToCartLocal()}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
CardProduct.defaultProps = {
  inOfert: false,
  percentOff: "",
  inFavorites: false,
  inCart: false,
  outOfStock: false,
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
  price: PropTypes.string.isRequired,
  inOfert: PropTypes.bool,
  percentOff: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inFavorites: PropTypes.bool,
  inCart: PropTypes.bool,
  outOfStock: PropTypes.bool,
  addToCart: PropTypes.func,
  addToFavorites: PropTypes.func,
  deleteOfFavorites: PropTypes.func,
  goToDetail: PropTypes.func
};

export default CardProduct;
