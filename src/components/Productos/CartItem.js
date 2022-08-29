import { PropTypes } from "prop-types";

export const CartItem = ({ item, editQuantity, deletOfCart }) => {
  const changeQuantity = (quantity) => {
    console.log(quantity);
    const { id } = item.product;
    editQuantity(id, quantity);
  };

  return (
    <div className="card card-side bg-gray-100 shadow-xl px-2 py-0 max-h-36">
      <figure className="p-1 h-36">
        <img src={item.product.image} alt="ilustracion" className="w-28 h-32" />
      </figure>
      <div className="card-body py-2">
        <h2 className="card-title font-semibold text-sm">
          {item.product.name}
        </h2>
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3">
            <input
              onChange={(e) => changeQuantity(e.target.value)}
              type="number"
              placeholder="cant"
              className="input input-bordered w-16 max-w-xs h-8"
              value={item.quantity}
            />
          </div>
          <div className="col-span-2 font-bold text-lg">$ {item.subTotal}</div>
        </div>
        <div className="card-actions justify-end py-0">
          <button
            type="button"
            className="btn btn-link "
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
    product: { id: null, image: "", name: "S/N", description: "", price: 0 },
    quantity: 0,
    subTotal: 0
  },
  deletOfCart: (id) => console.log("eliminar del carrito", id),
  editQuantity: (id, quantity) => console.log("editar cantidad", id, quantity)
};
CartItem.propTypes = {
  item: PropTypes.shape,
  deletOfCart: PropTypes.func,
  editQuantity: PropTypes.func
};
export default CartItem;
