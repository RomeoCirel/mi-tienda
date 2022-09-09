import { PropTypes } from "prop-types";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => (
  <div className=" min-h-2/4 ">
    <div className="hero-content flex-col lg:flex-row">
      <img
        src={item.image}
        className="max-w-sm rounded-lg shadow-2xl"
        alt={item.name}
      />
      <div className="pl-2">
        <h1 className="text-5xl font-bold text-gray-600">{item.name}</h1>
        <div>
          <ItemCount
            stock={item.stock}
            initial={1}
            textButton="Agregar al carrito"
          />
        </div>
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

ItemDetail.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number
  }).isRequired
};
export default ItemDetail;
