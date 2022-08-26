import React, { useContext, Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { RouteContext } from "../contexts/RouteContext";

export const LayoutPrincipal = () => {
  const [sectionName] = useContext(RouteContext);
  return (
    <>
      {sectionName !== null && sectionName !== undefined ? (
        <Header sectionName={sectionName} />
      ) : (
        ""
      )}
      <div className="container mx-auto px-4">
        <Outlet />
      </div>
    </>
  );
};

export default LayoutPrincipal;
