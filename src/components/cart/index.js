import React, { useState, useEffect, useContext } from "react";
import { Modal } from "../modalProvider";
import { LoadingProducts } from "../index";
import notProduct from "../../assets/icons/imgs/shopocat.490a4a1 (1).png";
import "../../styles/sass/cart.scss";
import { Link } from "react-router-dom";
function Cart() {
  const cartKey = "card";
  const pasKey = "pas";
  const [addToCart, setAddToCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [add, setAdd] = useState();
  const [count, setCount] = useState(1);
  const [cartdata, setCartData] = useState([]);
  const [ad, setAd] = useState(false);
  const [delet, setDelet] = useState(false);
  const [res, setRes] = useState(0);
  const [max, setMax] = useState(1);

  const { pas, setPas, setLegth, setFixed, setActiveItem, hig, setHig } =
    useContext(Modal);
  useEffect(() => {
    setFixed(true);
    localStorage.setItem("text", JSON.stringify("Savat"));
    setActiveItem("Savat");
    setTimeout(() => {
      setLoading(false);
      setHig(false);
    }, 1000);
  }, []);

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
    const updatedCart = addToCart.filter((item) => item?._id !== id);
    localStorage.setItem(cartKey, JSON.stringify(updatedCart));
    setAddToCart(updatedCart);
    const updatedPas = pas - 1;
    setPas(updatedPas);
    setLegth(updatedPas);
    localStorage.setItem(pasKey, updatedPas?.toString());
  };
  useEffect(() => {
    setHig(true);
    setAd("itemId");
  }, []);
  const svg = (
    <svg
      data-v-1a3a46a8=""
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ui-icon  filled"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.75 3.5C9.33579 3.5 9 3.83579 9 4.25V5H15V4.25C15 3.83579 14.6642 3.5 14.25 3.5H9.75ZM7.5 4.25V5H3.75C3.33579 5 3 5.33579 3 5.75C3 6.16421 3.33579 6.5 3.75 6.5H4.30005L5.62088 19.9681C5.73386 21.1202 6.70255 21.9985 7.86014 21.9985H16.1399C17.2975 21.9985 18.2661 21.1202 18.3791 19.9681L19.7 6.5H20.25C20.6642 6.5 21 6.16421 21 5.75C21 5.33579 20.6642 5 20.25 5H16.5V4.25C16.5 3.00736 15.4926 2 14.25 2H9.75C8.50736 2 7.5 3.00736 7.5 4.25ZM11 9.75C11 9.33579 10.6642 9 10.25 9C9.83579 9 9.5 9.33579 9.5 9.75V17.25C9.5 17.6642 9.83579 18 10.25 18C10.6642 18 11 17.6642 11 17.25V9.75ZM14.5 9.75C14.5 9.33579 14.1642 9 13.75 9C13.3358 9 13 9.33579 13 9.75V17.25C13 17.6642 13.3358 18 13.75 18C14.1642 18 14.5 17.6642 14.5 17.25V9.75Z"
        fill="black"
      ></path>
    </svg>
  );

  const handleCountChange = (id, newCount, p) => {
    setMax(max - 1);
    setRes(res - p);
    console.log(p);
    setCount((prevCount) => ({
      ...prevCount,
      [id]: newCount,
    }));
  };
  const handleCountChange1 = (id, newCount, p) => {
    setMax(max + 1);
    setRes(p * max);
    console.log(p);
    setCount((prevCount) => ({
      ...prevCount,
      [id]: newCount,
    }));
  };

  const handleAddItem = (id, img, narx, dec, count) => {
    const existingItemIndex = cartdata.findIndex((item) => item.id === id);
    setAd(id);
    setMax(max + 1);
    setRes(narx * max);
    setDelet(false);
    if (existingItemIndex !== -1) {
      const updatedCartData = [...cartdata];
      updatedCartData[existingItemIndex].count += count;
      setCartData(updatedCartData);
      localStorage.setItem("cartdata", JSON.stringify(updatedCartData));
    } else {
      const newItem = {
        id,
        img,
        narx,
        dec,
        count,
      };
      setCartData((prevCartData) => [...prevCartData, newItem]);
      localStorage.setItem("cartdata", JSON.stringify([...cartdata, newItem]));
      localStorage.setItem("id", JSON.stringify(id));
    }
  };

  const handleDeleteItem = (itemId) => {
    setAd("itemId");
    setRes(0);
    localStorage.removeItem("id", JSON.stringify(itemId));
    const updatedCartData = cartdata?.filter((item) => item.id !== itemId);
    setCartData(updatedCartData);
    localStorage.setItem("cartdata", JSON.stringify(updatedCartData));
  };

  return (
    <div className="data">
      {addToCart?.length > 0 ? (
        <div className="cards_wrapper">
          <div className="mah">
            Savatingizda<span> {addToCart.length}ta mahsulot</span>
          </div>
          <div className="cards_w_b">
            {loading ? (
              <LoadingProducts />
            ) : (
              addToCart?.map((el, index) => (
                <div key={index} className="carts-wrapper">
                  <div className="carts_card_left">
                    <div className="card_card">
                      <div className="img_card">
                        {el?.imgags?.slice(0, 1).map((el, imgIndex) => (
                          <img key={imgIndex} src={el?.img} alt="" />
                        ))}
                      </div>
                      <div className="dec_card">
                        <div className="top_dec">
                          <p> {el?.dec?.substring(0, 50)} </p>
                          <div
                            className="delete"
                            onClick={() => remove(el?._id)}
                          >
                            {svg} <p>Yo'q qilish</p>
                          </div>
                        </div>
                        <div className="bottom_dec">
                          <p className="name">
                            Sotuvchi: <span> {el?.name}</span>
                          </p>
                          <div className="count">
                            <button
                              onClick={() =>
                                handleCountChange(
                                  el?._id,
                                  Math.max((count[el?._id] || 1) - 1, 1),
                                  el?.price
                                )
                              }
                              disabled={(count[el?._id] || 1) === 1}
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="16"
                                  width="14"
                                  viewBox="0 0 448 512"
                                >
                                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"></path>
                                </svg>
                              </span>
                            </button>
                            {count[el?._id] || 1}
                            <button
                              onClick={() =>
                                handleCountChange1(
                                  el?._id,
                                  Math.min((count[el?._id] || 1) + 1, el.piece),
                                  el?.price
                                )
                              }
                              disabled={(count[el?._id] || 1) === el.piece}
                            >
                              <span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="16"
                                  width="14"
                                  viewBox="0 0 448 512"
                                >
                                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className="narxone">
                            <h3>
                              {(
                                (count[el?._id] || 1) *
                                parseInt(
                                  el?.price?.toString().replace(/\s/g, ""),
                                  10
                                )
                              )
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                              so'm
                            </h3>
                            <s>
                              {el?.old_price
                                ?.toString()
                                ?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                              so'm
                            </s>
                          </div>
                        </div>
                      </div>
                      <button
                        style={{ zIndex: ad === el?._id ? 1 : 0 }}
                        className="delet"
                        onClick={() => handleDeleteItem(el?._id)}
                      ></button>
                      <button
                        className="add"
                        style={{ borderColor: delet ? "red" : "" }}
                        onClick={() =>
                          handleAddItem(
                            el?._id,
                            el?.imgags,
                            el?.price,
                            el?.dec,
                            count[el?._id] || 1
                          )
                        }
                      ></button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="carts_card_right">
            <h4>Buyurtmangiz</h4>
            <div className="mahsulot">
              Mahsulotlar:({ad === "itemId" ? 0 : 1}){" "}
              <span>
                {res?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm
              </span>
            </div>
            <div className="time">Yetkazib berish M01 27 (Erta)</div>

            <Link to={ad !== "itemId" ? "/checkout" : ""}>
              <button
                className="rasmiy"
                onClick={() =>
                  ad === "itemId" ? setDelet(true) : setDelet(false)
                }
              >
                Rasmiylashtirishga o'tish
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="not-product">
          <div>
            <img src={notProduct} alt="" />
            <h3>Savatda hozircha mahsulot yoʻq</h3>
            <p>
              Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni
              qidiruv orqali toping
            </p>
            <Link to={"/"}>
              <button
                onClick={() =>
                  localStorage.setItem("text", JSON.stringify("Bosh sahifa"))
                }
              >
                Bosh sahifa
              </button>
            </Link>
          </div>
        </div>
      )}
      {hig ? <div className="about-hig"></div> : ""}
    </div>
  );
}

export default Cart;
