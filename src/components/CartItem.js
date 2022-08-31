import { PropTypes } from "prop-types";

export const CartItem = ({ item, editQuantity, deletOfCart }) => {
  const changeQuantity = (quantity) => {
    if (quantity > 0 && quantity <= item.product.stock) {
      const { id } = item.product;
      editQuantity(id, quantity);
    }
  };

  return (
    <div className="card card-side bg-gray-100 shadow-xl  px-0 sm:px-2 py-0 max-h-36">
      <figure className="p-1 h-36">
        <img src={item.product.image} alt="ilustracion" className="w-28 h-32" />
      </figure>
      <div className="card-body py-2">
        <h2 className="card-title font-semibold text-sm">
          {item.product.name}
        </h2>
        <div className="grid grid-cols-10 gap-4">
          <div className="col-span-4">
            <input
              onChange={(e) => changeQuantity(e.target.value)}
              type="number"
              placeholder="cant"
              className="input input-bordered w-16 max-w-xs h-8"
              value={item.quantity}
            />
          </div>
          <div className="col-span-5 font-bold text-md md:text-lg">
            ${" "}
            {item.subTotal.toLocaleString("es-IN", {
              minimumFractionDigits: 0
            })}
          </div>
        </div>
        <div className="card-actions justify-end py-0 mt-2">
          <button
            type="button"
            className="text-sm uppercase font-semibold  text-primary py-0"
            onClick={() => deletOfCart(item.product.id)}
          >
            eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
CartItem.defaultProps = {
  item: {
    product: {
      id: null,
      image: "",
      name: "S/N",
      description: "",
      price: 0,
      stock: 0
    },
    quantity: 0,
    subTotal: 0
  },
  deletOfCart: (id) => console.log("eliminar del carrito", id),
  editQuantity: (id, quantity) => console.log("editar cantidad", id, quantity)
};
CartItem.propTypes = {
  item: PropTypes.shape({
    product: {
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      stock: PropTypes.number
    },
    quantity: PropTypes.number,
    subTotal: PropTypes.number
  }),
  deletOfCart: PropTypes.func,
  editQuantity: PropTypes.func
};
export default CartItem;
