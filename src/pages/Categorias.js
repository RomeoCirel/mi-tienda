import { useContext } from "react";
import { RouteContext } from "../contexts/RouteContext";

const Categorias = () => {
  const [, setSectionName] = useContext(RouteContext);
  setSectionName("Categorias");
  return <div>ss</div>;
};

export default Categorias;
