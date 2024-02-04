import React, { useContext, useEffect, useState } from "react";
import oo from "../../assets/icons/imgs/yog/union.png";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "../modalProvider";
const Sitebar = () => {
  const [type, setType] = useState();
  const { setLoading } = useContext(Modal);
  const navigate = useNavigate();
  const CateyoryType = (elemnt) => {
    localStorage.setItem("type", JSON.stringify(elemnt));
    setType(elemnt);
    navigate(`/category/${elemnt}`);
    setLoading(true);
  };
  useEffect(() => {
    let type = localStorage.getItem("type");
    let categoryType = type ? JSON.parse(type) : null;
    setType(categoryType);
  });

  return (
    <div>
      <div className="navmenyu">
        <div className="nav1">
          <img src={oo} alt="" />
          <p className="nasiya">Muddatli to'lov</p>
        </div>
        <div className="nav2" onClick={() => CateyoryType("elektronika")}>
          <Link style={{ color: type === "elektronika" ? "black" : "" }}>
            Elektronika
          </Link>
          <div className="efkt"></div>
        </div>
        <div
          className="nav2"
          id="nav3"
          onClick={() => CateyoryType("maishiy_texnika")}
        >
          <Link style={{ color: type === "maishiy_texnika" ? "black" : "" }}>
            Maishiy-texnika
          </Link>
          <div className="efkt1"></div>
        </div>
        <div className="nav2" id="nav2" onClick={() => CateyoryType("kiyim")}>
          <Link style={{ color: type === "kiyim" ? "black" : "" }}>Kiyim</Link>
          <div className="efkt2"></div>
        </div>
        <div className="nav2" onClick={() => CateyoryType("poyabzallar")}>
          <Link style={{ color: type === "poyabzallar" ? "black" : "" }}>
            Poyabzallar
          </Link>
          <div className="efkt3"></div>
        </div>
        <div className="nav2" onClick={() => CateyoryType("aksessuarlar")}>
          <Link style={{ color: type === "aksessuarlar" ? "black" : "" }}>
            Aksessuarlar
          </Link>
          <div className="efkt4"></div>
        </div>
        <div className="nav2" onClick={() => CateyoryType("goʻzallik")}>
          <Link style={{ color: type === "goʻzallik" ? "black" : "" }}>
            Goʻzallik
          </Link>
          <div className="efkt5"></div>
        </div>
        <div className="nav2" onClick={() => CateyoryType("salomatlik")}>
          <Link style={{ color: type === "salomatlik" ? "black" : "" }}>
            Salomatlik
          </Link>
          <div className="efkt6"></div>
        </div>
        <div
          className="nav2"
          id="nav1"
          onClick={() => CateyoryType("roʻzgʻor_buyumlari")}
        >
          <Link style={{ color: type === "roʻzgʻor_buyumlari" ? "black" : "" }}>
            Uy-roʻzgʻor-buyumlari
          </Link>
          <div className="efkt7"></div>
        </div>
        <div className="nav2" onClick={() => CateyoryType("qurilish")}>
          <Link style={{ color: type === "qurilish" ? "black" : "" }}>
            Qurilish-va-taʼmirlash
          </Link>
          <div className="efkt8"></div>
        </div>
        <div className="nav2" onClick={() => CateyoryType("avtotovarlar")}>
          <Link style={{ color: type === "avtotovarlar" ? "black" : "" }}>
            Avtotovarlar
          </Link>
          <div className="efkt9"></div>
        </div>
        <div className="nav2">
          <Link> Yana</Link>
          <span className="down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </span>
          <div className="efkt10"></div>
        </div>
      </div>
    </div>
  );
};

export default Sitebar;
