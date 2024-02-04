import React, { useContext, useEffect, useState } from "react";
import "../../styles/sass/fixed-header.scss";
import { CartsAll, Catalog, Hom, Kabenit, LIke } from "../../assets/constants";
import { Link } from "react-router-dom";
import { Modal } from "../modalProvider";
function FixedHeader() {
  const { length, setActivee, activeItem, setActiveItem, setActive1 } =
    useContext(Modal);
  const [pass, setPass] = useState();

  const handleItemClick = (itemName) => {
    localStorage.setItem("text", JSON.stringify(itemName));
    setActiveItem(itemName);
  };
  useEffect(() => {
    let alltext = localStorage.getItem("text");
    let textValue = alltext ? JSON.parse(alltext) : null;
    setActiveItem(textValue);
  });

  useEffect(() => {
    let pas = localStorage.getItem("pas");
    let pasAll = pas ? JSON?.parse(pas) : null;
    setPass(pasAll);
  }, [length]);
  return (
    <div>
      <div className="fixed-header">
        <div
          className={`fixed-header-item ${
            activeItem === "Bosh sahifa" ? "active" : ""
          }`}
          onClick={() => (handleItemClick("Bosh sahifa"), setActivee(false))}
        >
          <Link to={"/"}>
            <Hom />
            <p> Bosh sahifa </p>
          </Link>
        </div>

        <div
          className={`fixed-header-item ${
            activeItem === "Katalog" ? "active" : ""
          }`}
          onClick={() => (
            handleItemClick("Katalog"), setActivee(false), setActive1(true)
          )}
        >
          <Link>
            <Catalog />
            <p> Katalog </p>
          </Link>
        </div>
        <div
          className={`fixed-header-item ${
            activeItem === "Savat" ? "active" : ""
          }`}
          onClick={() => (handleItemClick("Savat"), setActivee(false))}
        >
          <Link to={"/cart"}>
            <span
              style={{ backgroundColor: pass > 0 ? "rgb(34, 35, 41)" : "" }}
            >
              {pass}
            </span>
            <CartsAll />
            <p> Savat </p>
          </Link>
        </div>
        <div
          className={`fixed-header-item ${
            activeItem === "Saralangan" ? "active" : ""
          }`}
          onClick={() => (handleItemClick("Saralangan"), setActivee(false))}
        >
          <Link to={"/wishes"}>
            <LIke />
            <p> Saralangan </p>
          </Link>
        </div>
        <div
          className={`fixed-header-item ${
            activeItem === "Kabinet" ? "active" : ""
          }`}
          onClick={() => (handleItemClick("Kabinet"), setActivee(true))}
        >
          <Link>
            <Kabenit />
            <p> Kabinet </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FixedHeader;
