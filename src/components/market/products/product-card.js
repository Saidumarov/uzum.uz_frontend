import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../styles/chilla.css";
import baho from "../../../assets/icons/savg/baho.svg";
import savat from "../../../assets/icons/savg/savat+.svg";
import like from "../../../assets/icons/savg/lik.svg";
import liki from "../../../assets/icons/savg/lik.png";
import { Modal } from "../../modalProvider";
const ProductCard = ({
  _id,
  imgags,
  dec,
  price,
  per_month,
  old_price,
  name,
  piece,
}) => {
  const [styl, setStyl] = useState(
    localStorage.getItem(`styl-${_id}`) || "scale(1)"
  );
  const [bloc, setBloc] = useState(localStorage.getItem(`bloc-${_id}`) || "");
  const { setLegth } = useContext(Modal);
  const [dot, setDot] = useState(false);
  useEffect(() => {
    localStorage.setItem(`styl-${_id}`, styl);
    localStorage.setItem(`bloc-${_id}`, bloc);
  }, [_id, styl, bloc]);

  const sevCard = (
    _id,
    imgags,
    dec,
    price,
    per_month,
    old_price,
    name,
    piece
  ) => {
    if (localStorage.getItem("card") === null) {
      localStorage.setItem("card", JSON.stringify([]));
    }

    let data = JSON.parse(localStorage.getItem("card")) || [];

    if (!Array?.isArray(data)) {
      data = [];
    }

    if (!data.some((item) => item._id === _id)) {
      data.push({ _id, imgags, dec, price, per_month, old_price, name, piece });

      localStorage.setItem("card", JSON.stringify(data));
    }
    let dataa = localStorage?.getItem("card");
    let dataAll = dataa ? JSON?.parse(dataa) : null;
    setLegth(dataAll?.length);
    localStorage.setItem("pas", JSON.stringify(dataAll?.length));
  };

  const lik1 = () => {
    const likedProduct = {
      _id,
      imgags,
      dec,
      price,
      per_month,
      old_price,
      name,
      piece,
    };

    const likedProductsArray =
      JSON.parse(localStorage.getItem("likedProducts")) || [];

    if (!likedProductsArray.some((product) => product._id === _id)) {
      likedProductsArray.push(likedProduct);

      localStorage.setItem("likedProducts", JSON.stringify(likedProductsArray));

      console.log("Liked Products Array:", likedProductsArray);
    }

    setStyl("scale(1.1)");
    setBloc("block");
    localStorage.setItem(`styl-${_id}`, "scale(1.1)");
    localStorage.setItem(`bloc-${_id}`, "block");
  };

  const handleDeleteLikedProduct = () => {
    const likedProductsArray =
      JSON.parse(localStorage.getItem("likedProducts")) || [];

    // Filter out the product with the current _id
    const updatedLikedProductsArray = likedProductsArray.filter(
      (product) => product._id !== _id
    );

    localStorage.setItem(
      "likedProducts",
      JSON.stringify(updatedLikedProductsArray)
    );
  };

  const pirc = price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const old = old_price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  // console.log(dot);

  useEffect(() => {
    if (dec && dec?.length > 50) {
      setDot(true);
    }
  }, [dec]);
  return (
    <div className="wrr">
      <img src={like} alt="" className="lik" onClick={lik1} />
      <img
        src={liki}
        alt=""
        className="liki"
        onClick={() => {
          setBloc("none");
          handleDeleteLikedProduct();
        }}
        style={{ transform: styl, display: bloc }}
      />
      <Link to={`/uzum/product/${_id}`} className="a">
        <div className="clas">
          <div className="content">
            <div className="conimg">
              {imgags?.slice(0, 1)?.map((image, index) => (
                <img
                  key={index}
                  src={image?.img}
                  alt="Image not found"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg";
                  }}
                />
              ))}

              <div className="chibozor">Chilla Bozor</div>
            </div>
            <div className="conimg-itme">
              <p className="bo">
                {dec?.substring(0, 50)}
                {dot ? "..." : ""}
              </p>
              <div className="baho1">
                <img src={baho} alt="" />
                <p>
                  4.9 (
                  <abbr title="">
                    <span>405 baho</span>
                  </abbr>
                  )
                </p>
              </div>
              <div className="oyiga1">
                <p>
                  {(per_month / 12)
                    .toFixed(0)
                    ?.toString()
                    ?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                  so'm/oyiga
                </p>
              </div>
            </div>
          </div>
          <div className="xisobot">
            <div className="nar">
              <p className="narx11">
                <s>{old} so'm</s>
              </p>
              <p className="narx12">{pirc} so'm</p>
            </div>
          </div>
        </div>
      </Link>
      <div
        className="sev"
        onClick={() => {
          sevCard(_id, imgags, dec, price, per_month, old_price, name, piece);
        }}
      >
        <img src={savat} alt="" />
      </div>
    </div>
  );
};

export default ProductCard;
