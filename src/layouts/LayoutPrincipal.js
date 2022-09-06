import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { RouteContext } from "../contexts/RouteContext";

export const LayoutPrincipal = () => {
  const [sectionName] = useContext(RouteContext);
  return (
    <>
      {sectionName !== null && sectionName !== undefined ? (
        <Header sectionName={sectionName} />
      ) : null}
      <div className="bg-stone-400">
        <div className="container mx-auto shadow-2xl shadow-gray-300 bg-slate-50 min-h-[74vh]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutPrincipal;
