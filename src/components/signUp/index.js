import React, { useContext, useEffect, useState } from "react";
import { Modal } from "../modalProvider";
import "../../styles/nav.css";
import x from "../../assets/icons/savg/barx.svg";
function SignUp() {
  const { active, setActive } = useContext(Modal);
  const [value1, setValue1] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+998");
  const [activeModal, setactiveModal] = useState(true);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [code, setcode] = useState();
  const [user, setUser] = useState({
    name: "",
    surname: "",
    phone: "",
    ota: "",
    email: "",
    date: "",
    jins: "",
  });

  const loginno = () => {
    setActive(!active);
    setValue1(false);
    setactiveModal(true);
  };

  const loginnox = () => {
    setValue1(false);
    setActive(!active);
    setactiveModal(true);
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
    setUser({ ...user, phone: phoneNumber });

    return formattedNumber;
  };

  const handelChange = (e, index) => {
    if (isNaN(e.target.value)) return false;
    setOtp([...otp.map((el, i) => (i === index ? e.target.value : el))]);

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  const codeNumber = () => {
    setActive(!active);
    setcode(otp?.join(""));
    localStorage.setItem("profilUser", JSON.stringify(user));
  };

  useEffect(() => {
    if (!active) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [active]);

  return (
    <div className="modall">
      <div
        className={`mar-itme-login ${active ? " activ" : ""} `}
        onClick={loginno}
      ></div>
      <div className={`bar-login ${active ? " activ" : ""} `}>
        {activeModal ? (
          <>
            <div className="x1">
              <img
                style={{ cursor: "pointer" }}
                src={x}
                alt=""
                onClick={loginnox}
              />
            </div>
            <div className="tel_w">
              <h1 className="hbar">Telefon raqamini kiriting</h1>
              <p className="pbar">Tasdiqlash kodini SMS orqali yuboramiz</p>
              <input
                type="tel"
                id="phone"
                name="phone"
                maxLength="17"
                required
                placeholder="+998 00 000-00-00"
                className="telinput"
                value={phoneNumber}
                onChange={handlePhoneChange}
              />
              <button
                className="sabmit"
                id="submit_code"
                onClick={() => setactiveModal(false)}
                disabled={phoneNumber.length < 13}
              >
                Kodni olish
              </button>
              <p className="hbar1">Avtotizatsiyadan o'tish orqali siz</p>
              <span className="sbar">
                shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik
                bildirasiz
              </span>
            </div>
          </>
        ) : (
          <div className="code_w">
            <div className="x1">
              <img
                style={{ cursor: "pointer" }}
                src={x}
                alt=""
                onClick={loginnox}
              />
            </div>
            <span className="x2" onClick={() => setactiveModal(true)}>
              <svg
                data-v-3af5b026=""
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ui-icon"
              >
                <g filter="url(#filter0_b_351_54933)">
                  <rect
                    width="28"
                    height="28"
                    rx="14"
                    fill="#76797F"
                    fillOpacity="0.1"
                  ></rect>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.7826 10.778C14.0755 10.4851 14.0755 10.0102 13.7826 9.71735C13.4897 9.42446 13.0149 9.42446 12.722 9.71735L8.97329 13.466C8.95992 13.4792 8.94705 13.4929 8.93471 13.5071C8.88726 13.5614 8.84896 13.6209 8.8198 13.6836C8.77501 13.7797 8.75 13.8869 8.75 14C8.75 14.1154 8.7761 14.2248 8.82272 14.3225C8.84959 14.379 8.8839 14.4327 8.92565 14.4823C8.94094 14.5005 8.95708 14.5179 8.974 14.5346L12.722 18.2826C13.0149 18.5755 13.4897 18.5755 13.7826 18.2826C14.0755 17.9897 14.0755 17.5148 13.7826 17.2219L11.3107 14.75H18.2512C18.6654 14.75 19.0012 14.4142 19.0012 14C19.0012 13.5858 18.6654 13.25 18.2512 13.25H11.3107L13.7826 10.778Z"
                    fill="#15151A"
                  ></path>
                </g>
                <defs>
                  <filter
                    id="filter0_b_351_54933"
                    x="-40"
                    y="-40"
                    width="108"
                    height="108"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood
                      floodOpacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feGaussianBlur
                      in="BackgroundImage"
                      stdDeviation="20"
                    ></feGaussianBlur>
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_351_54933"
                    ></feComposite>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_351_54933"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </span>
            <h2 className="code_k">Kodni kiriting</h2>
            <p className="code_p">
              Telefonni tasdiqlash uchun <b id="b"> {phoneNumber} </b> raqamiga
              4 xonali kod yuborildi
            </p>
            <form className="inputs">
              {otp?.map((el, i) => {
                return (
                  <input
                    key={i}
                    type="tel"
                    maxLength="1"
                    id="code_one"
                    value={el}
                    onChange={(e) => handelChange(e, i)}
                  />
                );
              })}
            </form>
            <div className="code"> Kiriting: 0 0 0 0</div>
            <button className="sabmit" id="submit_code" onClick={codeNumber}>
              Yuborish
            </button>
            <p className="code_q">
              Agar kod kelmasa, siz <span id="time"></span> soniya orqali
              yangisini olishingiz mumkin
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignUp;
