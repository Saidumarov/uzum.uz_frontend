import React, { useState } from "react";
import "../../styles/ads.css";
import tel from "../../assets/icons/savg/tel.svg";
import xx from "../../assets/icons/savg/barx.svg";

const Ads = () => {
  const [barx, setBarx] = useState();
  return (
    <div className="tel" style={{ display: barx }}>
      <a href="https://t.me/jafarxon_blog">
        <div className="rek">
          <img src={tel} alt="" />
          <p>Telegram kanalimizga obuna bo'ling </p>
        </div>
      </a>
      <div className="x" onClick={() => setBarx(`none`)}>
        <img src={xx} alt="" />
      </div>
    </div>
  );
};

export default Ads;
