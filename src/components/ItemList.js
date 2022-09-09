import { PropTypes } from "prop-types";
import { Item } from "./Item";

const ItemList = ({ products, path }) =>
  products.length > 0
    ? products.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          pictureUrl={product.image}
          title={product.name}
          description={product.description}
          price={product.price}
          stock={product.stock}
          pathView={path}
        />
      ))
    : "Sin Items";
ItemList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      pictureUrl: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      stock: PropTypes.number
    })
  ).isRequired,
  path: PropTypes.string.isRequired
};
export default ItemList;
