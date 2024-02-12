import React, { useContext, useState } from "react";
import { Modal } from "../modalProvider";
import "../../styles/nav.css";
import x from "../../assets/icons/savg/barx.svg";
function SignUp() {
  const { active, setActive } = useContext(Modal);
  const [value1, setValue1] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+998");

  const loginno = () => {
    setActive(!active);
    setValue1(false);
  };
  const loginnox = () => {
    setValue1(false);
    setActive(!active);
  };

  const handlePhoneChange = (event) => {
    let inputValue = event.target.value;

    // Sadece rakam, + ve - karakterlerini kabul et
    inputValue = inputValue.replace(/[^\d+-]/g, "");

    // Telefon numarasının uzunluğunu kontrol et
    if (inputValue.length > 17) {
      inputValue = inputValue.slice(0, 17);
    }

    // İlk karakter + değilse, başına + ekle
    if (!inputValue.startsWith("+")) {
      inputValue = "+998" + inputValue.substring(1);
    }

    // Numarayı uygun formata getir
    const formattedValue = formatPhoneNumber(inputValue);

    setPhoneNumber(formattedValue);
  };

  // Telefon numarasını uygun formata getiren yardımcı fonksiyon
  const formatPhoneNumber = (phoneNumber) => {
    const formattedNumber = phoneNumber.replace(
      /^(\+\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/,
      "$1 $2 $3-$4-$5"
    );
    return formattedNumber;
  };
  return (
    <div className="modall">
      <div
        className={`mar-itme-login ${active ? " activ" : ""} `}
        onClick={loginno}
      ></div>
      <div className={`bar-login ${active ? " activ" : ""} `}>
        <div className="x1">
          <img src={x} alt="" onClick={loginnox} />
        </div>
        <h1 className="hbar">Telefon raqamini kiriting</h1>
        <p className="pbar">Tasdiqlash kodini SMS orqali yuboramiz</p>
        {!value1 ? (
          <>
            <input
              type="tel"
              id="phone"
              name="phone"
              maxLength="17"
              placeholder="+998 00 000-00-00"
              className="telinput"
              value={phoneNumber}
              onChange={handlePhoneChange}
            />
            <button className="sabmit">Kodni olish</button>
          </>
        ) : (
          <>
            <input type="tel" placeholder=" 00-00-00" className="telinput" />
            <button className="sabmit">Kodni kiriting</button>
          </>
        )}

        <p className="hbar1">Avtotizatsiyadan o'tish orqali siz </p>
        <span className="sbar">
          shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik bildirasiz
        </span>
      </div>
    </div>
  );
}

export default SignUp;
