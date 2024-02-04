import React, { useContext, useEffect, useState } from "react";
import uzm1 from "../../assets/icons/savg/uzm1.svg";
import uzm from "../../assets/icons/savg/uzm.svg";
import katalog from "../../assets/icons/savg/kat.svg";
import kirish from "../../assets/icons/savg/odam.svg";
import layk from "../../assets/icons/savg/like.svg";
import savat from "../../assets/icons/savg/savatt.svg";
import savat1 from "../../assets/icons/savg/savat.svg";
import passImg from "../../assets/icons/savg/pas.svg";
import joy from "../../assets/icons/savg/joy.svg";
import xar from "../../assets/icons/savg/xarita.svg";
import savol from "../../assets/icons/savg/suroq.svg";
import email from "../../assets/icons/savg/email.svg";
import uz from "../../assets/icons/savg/uz.svg";
import ilova from "../../assets/icons/imgs/ilova.png";
import { Link, useNavigate } from "react-router-dom";
import SearchPage from "../../pages/SearchPage/index";
import { Modal } from "../modalProvider";
import SignUp from "../signUp";
const NavItme = () => {
  const { active, setActive, length, pas, setPas, setLegth, activee } =
    useContext(Modal);
  const [pass, setPass] = useState();
  const [product, setProduct] = useState();
  const login = () => {
    setActive(!active);
  };

  const [addToCart, setAddToCart] = useState([]);
  const [add, setAdd] = useState();
  const navgatio = useNavigate();

  const cartKey = "card";
  const pasKey = "pas";

  useEffect(() => {
    const cart = localStorage.getItem(cartKey);
    const parsedCart = cart ? JSON.parse(cart) : [];
    setAddToCart(parsedCart);

    const storedPas = localStorage.getItem(pasKey);
    setPas(storedPas ? parseInt(storedPas, 10) : 0);
    setTimeout(() => {
      setAdd(addToCart);
    }, 0);
  }, [cartKey, pasKey && add]);

  const remove = (id) => {
    const updatedCart = addToCart?.filter((item) => item._id !== id);
    localStorage.setItem(cartKey, JSON.stringify(updatedCart));
    setAddToCart(updatedCart);
    const updatedPas = pas - 1;
    setPas(updatedPas);
    setLegth(updatedPas);
    localStorage.setItem(pasKey, updatedPas?.toString());
  };

  useEffect(() => {
    let pas = localStorage.getItem("pas");
    let pasAll = pas ? JSON?.parse(pas) : null;
    setPass(pasAll);
    let product = localStorage.getItem("card");
    let productAll = product ? JSON?.parse(product) : null;
    setProduct(productAll);
    setPass(pasAll);
  }, [length]);

  return (
    <div>
      <SignUp />
      <div className="barr"></div>
      <div className="navitme">
        <div className={`bar-menyu ${activee ? "activ" : ""}`}>
          <div className="barlin">
            <div className="bar-x">{/* <img src={barax} alt="" /> */}</div>
            <div className="kirsh1">
              <p onClick={() => navgatio("/signup")}>Kirish</p>/
              <p onClick={() => navgatio("/signup")}>Ro'yxatdan o'tish</p>
            </div>
          </div>
          <div className="katalog1">
            <img src={katalog} alt="" className="katim" />
            <p>Katalog</p>
            <img src={passImg} alt="" className="katim1" />
          </div>
          <div className="bar-man">
            <div className="buy">
              <img src={savat1} alt="" />
              <p className="bar-p">Buyurtmalarim</p>
            </div>
            <div className="sar">
              <img src={layk} alt="" />
              <p className="bar-p">Saralangan</p>
            </div>
            <div className="joyla">
              <img src={joy} alt="" />
              <p className="bar-p"> Shahar: Toshkent</p>
            </div>
            <div className="xarit">
              <img src={xar} alt="" />
              <p className="bar-p">Topshirish punkti</p>
            </div>
            <hr />
            <div className="savol1">
              <img src={savol} alt="" />
              <p className="bar-p">Savol-javoblar</p>
            </div>
            <a href="https://t.me/saidumarov_006">
              <div className="email">
                <img src={email} alt="" />
                <p className="bar-p">Biz bilan bog'lanish</p>
              </div>
            </a>
            <div className="ilova">
              <img src={ilova} alt="" />
              Uzum ilovasi
            </div>
            <div className="til">
              <img src={uz} alt="" />
              <p className="bar-p">Sayt tili: Оʻzbekcha</p>
            </div>
            <hr />
            <div className="biz">
              <p className="bar-p">Biz haqimizda</p>
              <img src={passImg} alt="" className="katim1" />
            </div>
            <hr />
            <div className="hamkor">
              <p className="bar-p">Hamkorlarga</p>
              <img src={passImg} alt="" className="katim1" />
            </div>
          </div>
        </div>
        <div className="uzm">
          <Link to="/">
            <img src={uzm} alt="" className="uzmm1" />
            <img src={uzm1} alt="" className="uzmm" />
          </Link>
        </div>
        <div className="katalog">
          <img src={katalog} alt="" />
          <p>Katalog</p>
        </div>
        <SearchPage />
        <div className="kirsh" onClick={login}>
          <img src={kirish} alt="" />
          <p> Kirish</p>
        </div>
        <Link to={"/wishes"}>
          <div className="sara">
            <img src={layk} alt="" />
            <p> Saralangan</p>
          </div>
        </Link>
        <div className="savat-wrapper">
          <div className="savat" onClick={() => navgatio("/cart")}>
            <img src={savat} alt="" />
            <p className="savatt"> Savat</p>
            <p
              className="pas"
              style={{
                backgroundColor: pass > 0 ? " rgb(111, 0, 255)" : "",
              }}
            >
              {pass}
            </p>
          </div>
          <div
            className="savat-product"
            style={{ display: pass > 0 ? "" : "none" }}
          >
            <div>
              {product?.map((item, index) => (
                <div className="product-card-pas" key={index}>
                  <div onClick={() => navgatio(`/uzum/product/${item?._id}`)}>
                    {item?.imgags?.slice(0, 1)?.map((url, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={url?.img}
                        alt=""
                        className="pas-img"
                      />
                    ))}
                    <p className="dec-pas">{item?.dec?.substring(0, 45)}...</p>
                    <p className="pic-pas">
                      {item?.price
                        ?.toString()
                        ?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                      so'm
                    </p>
                  </div>
                  {addToCart?.slice(0, 1)?.map((el) => (
                    <span
                      key={el?._id}
                      className="delete"
                      onClick={() => remove(el?._id)}
                    >
                      <svg
                        data-v-11fce24d=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="24"
                        viewBox="0 0 24 24"
                        className="ui-icon "
                      >
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                      </svg>
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <Link to={"/cart"}>
              <div className="savat-product1">
                <p>Buyurtmani rasmilashtirish </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavItme;
