import React, { useContext, useState } from "react";
import "../../../styles/sass/profil.scss";
import logo from "../../../assets/icons/savg/uzum.svg";
import { Link } from "react-router-dom";
import { Modal } from "../../modalProvider";
function SiteBarpage() {
  const { product, setProduct, setIsUpdate, setText, sitebar, setSitebar } =
    useContext(Modal);
  const [active, setActive] = useState(false);

  const userLocal = localStorage?.getItem("contactApi");
  const logonUserLocal = localStorage?.getItem("contacts");

  const user = userLocal ? JSON?.parse(userLocal) : null;
  const logonUser = logonUserLocal ? JSON?.parse(logonUserLocal) : null;

  const selectedUser = logonUser || user;

  const userIdentifier = selectedUser?.name;

  const Uname = userIdentifier?.charAt(0)?.toLocaleUpperCase();

  const reload = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("contactApi");
    localStorage.removeItem("logonUser");
    window.location.reload();
  };

  return (
    <div>
      <div className="sitebar-page">
        <div className="logo-acount">
          <img src={logo} alt="" />
        </div>
        <Link to={"/profil"}>
          <button
            className="mahsulot"
            style={{
              backgroundColor:
                product === true
                  ? "rgb(36, 40, 46)"
                  : product === false
                  ? "rgb(44, 49, 56)"
                  : "",
            }}
            onClick={() => (setProduct(true), setSitebar(!sitebar))}
          >
            Mahsulot qo'shish
          </button>
        </Link>
        <Link to={"/profil"}>
          <button
            className="mahsulot"
            style={{
              backgroundColor: !product
                ? "rgb(36, 40, 46)"
                : "" || product === "false"
                ? "rgb(44, 49, 56)"
                : "",
            }}
            onClick={() => (
              setProduct(false),
              setSitebar(!sitebar),
              setIsUpdate(
                true ? setIsUpdate(false) : "",
                setText("Mahsulot qo'shish")
              )
            )}
          >
            Mahsulotlar
          </button>
        </Link>
        <div className="user-bottom">
          <Link to={"/account"} className="acc">
            <div className="user-img" onClick={() => setProduct("false")}>
              <div className="name-img">{Uname}</div>
              <p>Mening profilim</p>
            </div>
          </Link>
          <div className="right-bar" onClick={() => setActive(!active)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className={`modal-profil-bot ${active ? "active" : ""}`}>
        <p onClick={reload}>
          <span className="tizm"> Tizimdan chiqish</span>
          <span className="tizm1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
            </svg>
          </span>
        </p>
        <hr />
        <Link to={"/"}>
          <p>
            <span className="bosh-menyu-w"> Doʻkon sahifasiga oʻtish</span>
            <span className="bosh-meyu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="18"
                viewBox="0 0 576 512"
              >
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default SiteBarpage;
