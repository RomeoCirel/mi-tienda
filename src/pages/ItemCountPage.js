import { useContext } from "react";
import { RouteContext } from "../contexts/RouteContext";
import ItemListContainer from "../containers/ItemListContainer";

const ItemCountPage = () => {
  const [, setSectionName] = useContext(RouteContext);
  setSectionName("Promise");
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      <ItemListContainer />
    </div>
  );
};

export default ItemCountPage;
