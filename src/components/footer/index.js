import React, { useEffect, useState } from "react";
import "../../styles/nav.css";
import aple from "../../assets/icons/savg/apple.svg";
import gog from "../../assets/icons/savg/gog.svg";
import ins from "../../assets/icons/savg/ins.svg";
import tel from "../../assets/icons/savg/tel.svg";
import yout from "../../assets/icons/savg/yo.svg";
import fas from "../../assets/icons/savg/fas.svg";
import tepa from "../../assets/icons/savg/tepa.svg";
import mac from "../../assets/icons/savg/mac.svg";
import go from "../../assets/icons/savg/go.svg";
import pas from "../../assets/icons/savg/pas.svg";
import "../../styles/footer.css";
import { Link, useNavigate } from "react-router-dom";
import UserPage from "../../pages/UserPage";
const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const navigation = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const click = () => {
    setIsActive1(!isActive1);
    setIsActive2(false);
    setIsActive3(false);
  };
  const click1 = () => {
    setIsActive2(!isActive2);
    setIsActive1(false);
    setIsActive3(false);
  };
  const click2 = () => {
    setIsActive3(!isActive3);
    setIsActive2(false);
    setIsActive1(false);
  };
  const handelSutuv = () => {
    try {
      const user = localStorage.getItem("user");
      const parsedUser = JSON.parse(user);
      if (parsedUser && parsedUser.email) {
        return navigation("/profil");
      }
    } catch (error) {
      console.error(error);
    }
    return navigation("/signup");
  };

  return (
    <div>
      <div className="bcon">
        <div className="b1" style={{ marginLeft: "0px" }}>
          <p>
            <b className="no" onClick={click}>
              Biz haqimizda{" "}
              <img
                src={pas}
                alt=""
                className={`noimg ${isActive1 ? "active" : ""}`}
              />
            </b>
            <b className="no1">Biz haqimizda</b>
          </p>
          <div className={`vp ${isActive1 ? "active" : ""}`}>
            <p>Topshirish punktlari</p> <p>Vakansiyalar</p>
          </div>
          <div className="hr"></div>
        </div>
        <div className="b1">
          <p>
            <b className="no" onClick={click1}>
              Foydalanuvchilarga
              <img
                src={pas}
                alt=""
                className={`noimg ${isActive2 ? "active" : ""}`}
              />
            </b>
            <b className="no1">Foydalanuvchilarga</b>
          </p>
          <div className={`vp ${isActive2 ? "active1" : ""}`}>
            <p>Biz bilan bogʻlanish</p> <p>Savol-Javob</p>
          </div>
          <div className="hr"></div>
        </div>

        <div className="b1" id="tt">
          <p>
            <b className="no1">Tadbirkorlarga </b>
            <b className="no" onClick={click2}>
              Tadbirkorlarga
              <img
                src={pas}
                alt=""
                className={`noimg ${isActive3 ? "active" : ""}`}
              />
            </b>
          </p>
          <div className={`vp ${isActive3 ? "active2" : ""}`}>
            <p className="sotuv">Uzumda soting</p>{" "}
            <p className="sotuv" onClick={handelSutuv}>
              Sotuvchi kabinetiga kirish
            </p>
          </div>
        </div>
        <div className="b2">
          <p>
            <b> Ilovani yuklab olish</b>
          </p>
          <div className="p">
            <a href="https://apps.apple.com/ru/app/uzum-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/id1640483056">
              <div className="ap">
                <img src={aple} alt="" /> <p className="a"> AppStore </p>
              </div>
              <div className="ap1">
                <img src={mac} alt="" />
              </div>
            </a>
            <a href="https://play.google.com/store/apps/details?id=uz.uzum.app">
              <div className="go">
                <img src={gog} alt="" style={{ marginLeft: "20px" }} />
                <p>Google Play</p>
              </div>
              <div className="go1">
                <img src={go} alt="" />
              </div>
            </a>
          </div>
          <div className="b3">
            <p>
              <b>Uzum ijtimoiy tarmoqlarda</b>
            </p>
            <div className="imgg">
              <img src={ins} alt="" className="im1" />
              <img src={tel} alt="" className="im2" />
              <img src={yout} alt="" className="im3" />
              <img src={fas} alt="" className="im4" />
            </div>
          </div>
        </div>
      </div>
      <div className="bot"></div>
      <div className="bot1">
        <div className="pbb">
          <p className="bp1">Maxfiylik kelishuvi</p>
          <p className="bp2">Foydalanuvchi kelishuvi</p>
        </div>
        <p className="bp3">
          «2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
          himoyalangan»
        </p>
      </div>
      <a href="#">
        <div className={`tepaga ${isActive ? "activ" : ""}`}>
          <img src={tepa} alt="" />
        </div>
      </a>
    </div>
  );
};

export default Footer;
