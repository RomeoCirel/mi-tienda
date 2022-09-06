import { useState } from "react";
import { PropTypes } from "prop-types";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ShoppingCartIcon
} from "@heroicons/react/24/solid";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [qty, setQty] = useState(initial);
  const handleClickAddBtn = () => {
    if (qty < stock) {
      setQty(qty + 1);
    }
  };

  const resetQty = () => setQty(initial);

  const handleClickMinusBtn = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  const addToCartLocal = () => {
    onAdd(qty);
    resetQty();
  };
  return (
    <div className="card-actions grid grid-cols-5 gap-1 bottom-0 mt-8">
      <div className="btn-group col-span-4 font-bold text-lg">
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
      </div>
      <div className="col-span-1">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => addToCartLocal()}
          disabled={qty === 0}
        >
          <ShoppingCartIcon className="h-5 w-5 text-gray-50" />
        </button>
      </div>
      <div className="col-span-4 mt-1">
        <h4 className="text-sm font-normal text-yellow-600">
          ( {stock} ) disponibles
        </h4>
      </div>
    </div>
  );
};
ItemCount.defaultProps = {
  stock: 0,
  initial: 1,
  onAdd: (qty) => {
    console.log(`(function default) agrgar al carrito: ${qty}`);
  }
};

ItemCount.propTypes = {
  stock: PropTypes.number,
  initial: PropTypes.number,
  onAdd: PropTypes.func
};

export default ItemCount;
