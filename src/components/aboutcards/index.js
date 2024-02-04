import { useContext, useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/chilla.css";
import baho from "../../assets/icons/savg/baho.svg";
import olovv from "../../assets/icons/savg/olov.svg";
import haftaa from "../../assets/icons/imgs/hafta.png";
import likiia from "../../assets/icons/savg/lik.png";
import like from "../../assets/icons/savg/like.svg";
import LoadingProducts from "../loading/loadingproducts";
import { Modal } from "../modalProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
const AboutCards = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [productData, setProductData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [imgs, setImgs] = useState([]);
  const [btn, setBtn] = useState(true);
  const { setHig, fixed, setFixed, setLegth } = useContext(Modal);
  const [styl, setStyl] = useState(
    localStorage.getItem(`styl-${id}`) || "scale(1)"
  );
  const [bloc, setBloc] = useState(localStorage.getItem(`bloc-${id}`) || "");

  const [buttonColor, setButtonColor] = useState(
    localStorage.getItem("buttonColor") || "#959cb9"
  );
  const { _id, name, price, old_price, per_month, piece, hafta, imgags, dec } =
    productData;

  const imageList = productData?.imgags || [];
  useEffect(() => {
    const imgElements = imageList.map((item, index) => (
      <img
        key={index}
        src={item.img}
        alt="Note not found"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg";
        }}
        className="imglist"
      />
    ));
    setImgs(imgElements);
  }, [productData?.imgags]);

  // ...
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

  useEffect(() => {
    localStorage.setItem(`styl-${id}`, styl);
    localStorage.setItem(`bloc-${id}`, bloc);
  }, [id, styl, bloc]);

  useEffect(() => {
    localStorage.setItem("buttonColor", buttonColor);
  }, [buttonColor]);

  // // inc va dic

  const handleButtonClick = () => {
    if (count === piece) {
      setCount(1);
    } else {
      setCount(count + 1);
    }
  };
  const handleButtonClick1 = () => {
    if (count === piece) {
      setCount(count - 1);
    } else {
      setCount(count - 1);
    }
  };

  const buttonDisabled = count === piece;
  const buttonDisabled1 = count === 1;

  useEffect(() => {
    setFixed(false);
    const fetchProduct = async (Id) => {
      try {
        const response = await axios.get(`${apiUrl}product/${Id}`);
        const data = await response?.data;
        setProductData(data);
        setHig(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (id) {
      fetchProduct(id);
    }
  }, [id]);

  if (isLoading) {
    return <LoadingProducts />;
  }
  if (!productData) {
    return (
      <div className="hom_not" style={{ marginBottom: "-500px" }}>
        <h2> Sayt vaqtincha ishlamayapti :(</h2>
        <p>
          <hr />
          Serverda texnik ishlar olib borilmoqda. <hr />
        </p>
        <button onClick={() => window.location.reload()}>Qayta yuklash</button>
      </div>
    );
  }
  const pirc = price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const old = old_price?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const result = count * parseInt(pirc.replace(/\s/g, ""), 10);

  // Format result with thousand separators
  const formattedResult = result
    ?.toString()
    ?.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const sevCard = (
    _id,
    imgags,
    dec,
    price,
    per_month,
    old_price,
    piece,
    name
  ) => {
    if (localStorage.getItem("card") === null) {
      localStorage.setItem("card", JSON.stringify([]));
    }
    setBtn(false);
    let data = JSON.parse(localStorage.getItem("card")) || [];

    if (!Array?.isArray(data)) {
      data = [];
    }

    if (!data.some((item) => item._id === _id)) {
      data.push({ _id, imgags, dec, price, per_month, old_price, piece, name });

      localStorage.setItem("card", JSON.stringify(data));
    }
    let dataa = localStorage?.getItem("card");
    let dataAll = dataa ? JSON?.parse(dataa) : null;
    setLegth(dataAll?.length);
    localStorage.setItem("pas", JSON.stringify(dataAll?.length));
  };

  return (
    <div>
      {productData ? (
        <div>
          <div className="tavar">
            <div className="img-Itme">{imgs}</div>
            <div className="imgscrool">
              <div className="imgsledr"></div>
              <Swiper
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
              >
                {imageList.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="imglist"
                      src={item.img}
                      alt="Note not found"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg";
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="tavar2">
              <div className="baho">
                <img src={baho} alt="" />
                <p>
                  4.9 (
                  <abbr title="">
                    <span>405 baho</span>
                  </abbr>
                  )<span className="sapan">21000 ta buyurtma</span>
                </p>
                <p className="istak">
                  <img src={like} alt="" className="lik" onClick={lik1} />
                  <img
                    src={likiia}
                    alt=""
                    className="liki"
                    onClick={() => (
                      handleDeleteLikedProduct(),
                      setBloc("none"),
                      localStorage.setItem(`bloc-${id}`, "none")
                    )}
                    style={{ transform: styl, display: bloc }}
                  />
                  <span> Istaklarga</span>
                </p>
              </div>
              <p className="title">{dec}</p>
              <div className="sot">
                <p className="sot1">Sotuvchi: </p>
                <p className="sot2">
                  <u>{name}</u>
                </p>
              </div>
              <div className="yetkaz">
                <p className="yet1">Yetkazib berish:</p>
                <p className="yet2">1 kun, bepul</p>
              </div>
              <hr />
              <div className="miqdor">
                <p className="miq">Miqdor:</p>
                <div className="miqdor-itme">
                  <div className="inc">
                    <button
                      onClick={handleButtonClick1}
                      disabled={buttonDisabled1}
                      className="incc"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="14"
                        viewBox="0 0 448 512"
                      >
                        <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                      </svg>
                    </button>
                    <p className="res">{count * 1}</p>
                    <button
                      className="dic"
                      onClick={handleButtonClick}
                      disabled={buttonDisabled}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="14"
                        viewBox="0 0 448 512"
                      >
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                      </svg>
                    </button>
                  </div>
                  <div className="mimg">
                    <img src={olovv} alt="" /> <p>Sotuvda {piece} dona bor</p>
                  </div>
                </div>
              </div>
              <div className="narx">
                <p className="narx1">Narx:</p>
                <div className="narx-itme">
                  <h3>{formattedResult} so'm</h3>
                  <p>
                    <s>{old} so'm</s>
                  </p>
                  <div className="chil">Chilla Bozor</div>
                </div>
              </div>
              <div className="oyiga">
                <div className="oyiga-itme">
                  <p>
                    {`Oyiga ${(per_month / 12)
                      .toFixed(0)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'mdan`}
                  </p>
                </div>
                <p className="o-p"> muddatli to'lov</p>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
              <div className="fxs">
                <button
                  className="savatga"
                  onClick={() => {
                    sevCard(
                      _id,
                      imgags,
                      dec,
                      price,
                      per_month,
                      old_price,
                      piece,
                      name
                    );
                  }}
                >
                  Savatga qo'shish
                </button>
                <button className="tugmani">
                  Tugmani 1 bosishda xarid qilish
                </button>
              </div>
              <div className="hafta">
                <img src={haftaa} alt="" />
                <p> Bu haftada kishi sotib oldi</p>
              </div>
            </div>
            <div className="narx111">
              <div className="narx-itme11">
                <p
                  className="narx12"
                  style={{ fontSize: "10px", textAlign: "center" }}
                >
                  Narx umumiy
                </p>
                <h3 style={{ color: "black", fontSize: "18px" }}>
                  {formattedResult} so'm
                </h3>
              </div>
              {btn ? (
                <div
                  className="sav"
                  onClick={() => {
                    sevCard(
                      _id,
                      imgags,
                      dec,
                      price,
                      per_month,
                      old_price,
                      piece,
                      name
                    );
                  }}
                >
                  Savatga
                </div>
              ) : (
                <Link to={"/cart"}>
                  <button className="savat-item-card">
                    {" "}
                    <svg
                      width="24"
                      heightewBo="25"
                      vix="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="slightly transparent icon-pushcart"
                      data-v-1a3a46a8=""
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 3.25C1 2.83579 1.34178 2.5 1.7634 2.5H3.05714C3.8309 2.5 4.51617 2.99077 4.75295 3.71448L5.99146 7.5H21.2174C22.4332 7.5 23.2917 8.67021 22.9072 9.8034L20.5322 16.8034C20.2898 17.518 19.6091 18 18.8424 18H9.12149C8.34772 18 7.66245 17.5092 7.42568 16.7855L3.2994 4.1735C3.26557 4.07011 3.16768 4 3.05714 4H1.7634C1.34178 4 1 3.66421 1 3.25Z"
                        fill="#7000FF"
                      ></path>
                      <path
                        d="M19.8305 21C19.8305 21.8284 19.1469 22.5 18.3037 22.5C17.4604 22.5 16.7769 21.8284 16.7769 21C16.7769 20.1716 17.4604 19.5 18.3037 19.5C19.1469 19.5 19.8305 20.1716 19.8305 21Z"
                        fill="#7000FF"
                      ></path>
                      <path
                        d="M11.6876 21C11.6876 21.8284 11.004 22.5 10.1608 22.5C9.31754 22.5 8.63397 21.8284 8.63397 21C8.63397 20.1716 9.31754 19.5 10.1608 19.5C11.004 19.5 11.6876 20.1716 11.6876 21Z"
                        fill="#7000FF"
                      ></path>
                    </svg>
                    <span>Oʻtish</span>
                  </button>
                </Link>
              )}
            </div>
          </div>
          <hr className="hh" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AboutCards;
