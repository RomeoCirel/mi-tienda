import { useState } from "react";
import ItemCount from "../components/ItemCount";

const ItemListContainer = () => {
  const items = [
    {
      stock: 10400,
      initial: 1
    },
    {
      stock: 104,
      initial: 2
    },
    {
      stock: 1010,
      initial: 10
    },
    {
      stock: 100,
      initial: 1
    }
  ];
  const [itemsList] = useState(items);
  const onAdd = (qty) => console.log("agregar al carrito", qty);
  return itemsList.length > 0
    ? itemsList.map((item) => (
        <ItemCount initial={item.initial} stock={item.stock} onAdd={onAdd} />
      ))
    : "No hay Items Para mostrar";
};

export default ItemListContainer;
