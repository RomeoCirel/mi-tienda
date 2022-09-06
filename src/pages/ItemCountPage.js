import { useContext } from "react";
import { RouteContext } from "../contexts/RouteContext";
import ItemListContainer from "../containers/ItemListContainer";

const ItemCountPage = () => {
  const [, setSectionName] = useContext(RouteContext);
  setSectionName("Item Count Page");
  return (
    <>
      <div>Item List container</div>
      <div className="w-1/4 ">
        <ItemListContainer />
      </div>
    </>
  );
};

export default ItemCountPage;
