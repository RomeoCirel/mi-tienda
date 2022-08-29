import { useContext } from "react";
import { RouteContext } from "../contexts/RouteContext";

export const MisCompras = () => {
  const [, setSectionName] = useContext(RouteContext);
  setSectionName("Mis Compras");
  return <div>sss</div>;
};

export default MisCompras;
