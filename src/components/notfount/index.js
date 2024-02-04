import React, { useContext, useEffect } from "react";
import not from "../../assets/imgs/sledrImgs/penguin.a739ac8.png";
import "../../styles/sass/Pcard.scss";
import { Link } from "react-router-dom";
import imgNot from "../../assets/imgs/sledrImgs/penguin.a739ac8.png";
import { Modal } from "../modalProvider";
function Not() {
  return (
    <div className="not-mahsulot">
      <img src={not} alt="" />
      <h2>Mahsulotlar yo'q ?</h2>
    </div>
  );
}

export default Not;

export function NotFount() {
  const { setSet } = useContext(Modal);
  useEffect(() => {
    setSet(false);
  }, []);
  return (
    <div className="notfount_Page">
      <h1>Hech narsa yoʻq :(</h1>
      <hr />
      <Link to={"/"}>
        <p>Bosh sahifaga qaytish</p>
      </Link>
    </div>
  );
}

export function NotFountSearch() {
  return (
    <div>
      <div>
        <img src={imgNot} alt="" />
      </div>
    </div>
  );
}
