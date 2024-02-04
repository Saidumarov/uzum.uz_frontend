import React, { useContext, useEffect, useState } from "react";
import "../../styles/sass/checkout.scss";
import { Modal } from "../modalProvider";
function Checkout() {
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(true);
  const [name, setName] = useState(false);
  const [lasname, setLasame] = useState(false);
  const [number, setNumber] = useState(false);
  const [chek, setChek] = useState(false);
  const [addToCart, setAddToCart] = useState([]);
  const { setFixed, setActiveItem, setHig } = useContext(Modal);

  const [contact, setContact] = useState({
    name: "",
    lasname: "",
    number: "",
    chek: "",
  });
  const handelchange = (e) => {
    const { name, value } = e.target;
    setName(false);
    setNumber(false);
    setLasame(false);
    setChek(false);
    setContact((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    setFixed(true);
    localStorage.setItem("text", JSON.stringify("Savat"));
    setActiveItem("Savat");
    const cart = localStorage.getItem("cartdata");
    const parsedCart = cart ? JSON.parse(cart) : [];
    setAddToCart(parsedCart);
  }, []);

  const onSubmit = () => {
    if (!contact.name || !contact.lasname || !contact.number || contact.chek) {
      if (!contact.name) setName(true);
      if (!contact.number) setNumber(true);
      if (!contact.lasname) setLasame(true);
      if (!contact.chek) setChek(true);
    } else {
      const id = localStorage.getItem("id");
      setLoading1(false);
      const { name, lasname, number } = contact;
      const photoURLs = addToCart?.map(
        (el) => el?.img?.slice(0, 1)?.map((a) => a?.img) || []
      );
      const p = addToCart?.map((el) => (el?.id === id ? el?.narx : el?.narx));
      const a = addToCart?.map((el) => (el?.id === id ? el?.dec : el?.dec));
      const c = addToCart?.map((el) => (el?.id === id ? el?.count : el?.count));

      const botToken = "6805483507:AAEkBEiNwAK1OE7ZnrgNYa3tEFQsVZzhYjc"; // bot tokini
      const chatId = 1121426146; // botning adminini idisi   2042795731

      const caption = `Familyasi: ${lasname}\nIsmi: ${name}\nTelifon raqami: ${number}\nNarxi: ${p
        ?.toString()
        ?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} so'm\nHaqida: ${a}\nNechta: ${
        c || 1
      }`;

      const formData = new FormData();
      formData.append("chat_id", chatId);
      formData.append("photo", ...photoURLs);
      formData.append("caption", caption);
      fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
        method: "post",
        body: formData,
      })
        .then((res) => res?.json())
        .then((data) => {
          console.log(data);
          setLoading(true);
          setTimeout(() => {
            setLoading1(true);
            setLoading(false);
          }, 1000);
          setContact({
            name: "",
            lasname: "",
            number: "",
            chek: "",
          });
        });
    }
  };

  return (
    <div>
      <div className="checkout">
        <div className="checkout_wrap">
          <h2>Buyurtma qabul qiluvchi:</h2>
          <div className="user_chek">
            <div className="name_chek">
              <p>Familiya </p>
              <input
                type="lasname"
                style={{ borderColor: lasname ? "red" : "" }}
                placeholder="Familyangizdi kiriting"
                value={contact.lasname}
                name="lasname"
                onChange={handelchange}
              />
            </div>
            <div className="surname_chek">
              <p>Ism </p>
              <input
                type="name"
                name="name"
                placeholder="Ismingizdi kiriting"
                style={{ borderColor: name ? "red" : "" }}
                value={contact.name}
                onChange={handelchange}
              />
            </div>
          </div>
          <p className="oparat">
            Siz koʻrsatgan telefon raqamiga buyurtma holati haqida bildirishnoma
            yuboramiz. Yetkazib berish vaqtini aniqlashtirish uchun kuryer siz
            bilan telefon orqali bogʻlanadi.
          </p>
          <div className="tel">
            <p>Telefon raqami </p>
            <input
              type="number"
              style={{ borderColor: number ? "red" : "" }}
              placeholder="+998 _-_-_-_-_-_-_"
              name="number"
              value={contact.number}
              onChange={handelchange}
            />
          </div>
          <div className="tasdiq">
            <input
              type="checkbox"
              name="chek"
              value={contact.chek}
              onChange={handelchange}
            />
            <p style={{ color: chek ? "red" : "" }}>Tasdiqlash</p>
          </div>
          <button onClick={onSubmit}>
            {loading ? (
              <span className="qabul">
                <span className="x"></span>
                <span className="y"></span>
              </span>
            ) : loading1 ? (
              "Buyurtma berish"
            ) : (
              <span className="loading_b"></span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
