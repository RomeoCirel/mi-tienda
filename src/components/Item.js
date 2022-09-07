/* eslint-disable react/prop-types */
import { useState } from "react";
import { PropTypes } from "prop-types";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { EyeIcon, XCircleIcon } from "@heroicons/react/24/solid";
import ItemCount from "./ItemCount";

export const Item = ({
  id,
  pictureUrl,
  title,
  description,
  price,
  stock = 1
}) => {
  const [showCount, setShowCont] = useState(false);
  const initial = 1;

  const producto = {
    id,
    pictureUrl,
    title,
    description,
    price,
    stock
  };

  const addToCartLocal = (qty) => {
    console.log(producto, qty);
    setShowCont(false);
  };

  return (
    <div className="card w-64 max-w-md bg-gray-100 shadow-xl shadow-gray-700/50 text-gray-600">
      <figure className="max-h-64 h-52">
        <img src={pictureUrl} alt={title} className="max-h-52" />
      </figure>
      <div className="card-body p-4 grid content-between">
        <h3 className="card-title text-sm font-semibold">
          {id}-{title}
        </h3>

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
            >
              <EyeIcon className="h-5 w-5 text-gray-400 hover:text-blue-500" />
            </button>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-circle btn-link btn-sm  border-none"
            >
              <HeartIcon className="h-5 w-5 hover:text-red-500" />
            </button>
          </div>
          <div>
            {!showCount ? (
              <button type="button" className="btn btn-link btn-sm border-none">
                <ShoppingCartIcon
                  className=" h-5 w-5 hover:text-gray-500 hover:text-primary"
                  onClick={() => setShowCont(true)}
                />
              </button>
            ) : null}
            {showCount ? (
              <button
                type="button"
                className="text-red-500 btn-link btn-sm border-none"
                onClick={() => setShowCont(false)}
              >
                <XCircleIcon className="h-5 w-5" />
              </button>
            ) : null}
          </div>
        </div>
        {showCount ? (
          <ItemCount initial={initial} stock={stock} onAdd={addToCartLocal} />
        ) : null}
      </div>
    </div>
  );
};
Item.defaultProps = {};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Item;
