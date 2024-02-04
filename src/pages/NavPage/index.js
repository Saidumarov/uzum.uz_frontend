import React, { useContext } from "react";
import { Nav, NavItem, Sitebar } from "../../components";
import "../../styles/nav.css";
import FixedHeader from "../../components/fixed-header";
import { Modal } from "../../components/modalProvider";
function NavPage() {
  const { fixed } = useContext(Modal);

  return (
    <div>
      <Nav />
      <NavItem />
      <Sitebar />
      {fixed ? <FixedHeader /> : ""}
    </div>
  );
}

export default NavPage;
