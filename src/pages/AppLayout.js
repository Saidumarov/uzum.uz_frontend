import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routeConfig";
import FooterPage from "./FooterPage";
import NavPage from "./NavPage";
import { Modal } from "../components/modalProvider";
function AppLayout() {
  const { set } = useContext(Modal);
  return (
    <>
      {set ? <NavPage /> : ""}
      <Routes>
        {routes.map(({ id, ...rest }) => (
          <Route key={id} {...rest} />
        ))}
      </Routes>
      {set ? <FooterPage /> : ""}
    </>
  );
}

export default AppLayout;
