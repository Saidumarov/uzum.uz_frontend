import React, { useContext, useEffect, useState } from "react";
import { Modal } from "../../modalProvider";
import "../../../styles/sign.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const { setSet } = useContext(Modal);
  const [login, setLogin] = useState(false);
  const [contacts, setContacts] = useState();
  const [input, setInput] = useState(false);
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);
  const [input3, setInput3] = useState(false);
  const [label, setLabel] = useState(true);
  const [label1, setLabel1] = useState(true);
  const [email1, setEmail1] = useState();
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(true);
  const [password1, setPassword1] = useState();
  const [parol, setParol] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();
  useEffect(() => {
    setSet(false);
  });
  const svg = (
    <svg
      width="500"
      height="147"
      viewBox="0 0 500 147"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M146.403 73.2015C146.403 113.553 113.553 146.274 73.2015 146.274C32.7208 146.274 0 113.553 0 73.2015C0 32.7208 32.8501 0 73.2015 0C113.553 0 146.403 32.7208 146.403 73.2015ZM120.278 48.1112C114.329 46.1712 108.121 44.6193 101.525 43.4553V76.1761C101.525 99.7144 91.4372 112.13 73.0721 112.13C54.7071 112.13 44.6193 99.7144 44.6193 76.1761V43.4553C38.0234 44.6193 31.8155 46.1712 25.8662 48.1112V76.3054C25.8662 102.172 47.0766 123.382 73.0721 123.382C99.0677 123.382 120.278 102.172 120.278 76.3054V48.1112ZM81.608 25.4782C78.8921 25.2196 76.0468 25.0902 73.2015 25.0902C70.3562 25.0902 67.5109 25.2196 64.795 25.4782V64.5363H81.608V25.4782Z"
        fill="white"
      ></path>
      <path
        d="M369.629 74.624C369.629 84.0652 364.326 88.4625 356.437 88.4625C348.548 88.4625 343.374 84.0652 343.374 74.624V43.4553H326.303V75.2707C326.303 95.9637 343.504 104.112 356.566 104.112C369.499 104.112 386.83 95.9637 386.83 75.2707V43.4553H369.758L369.629 74.624Z"
        fill="white"
      ></path>
      <path
        d="M311.688 43.4553V57.811L277.545 88.4625H313.758V102.948H254.783V88.4625L289.055 57.811H256.205V43.4553H311.688Z"
        fill="white"
      ></path>
      <path
        d="M473.094 42.2912C462.23 42.2912 454.082 46.6885 450.073 53.4137C445.934 46.6885 437.01 42.2912 427.698 42.2912C409.463 42.2912 400.022 53.9311 400.022 68.4162V102.948H416.964V70.7441C416.964 63.8896 420.585 57.811 428.862 57.811C437.14 57.811 441.408 63.7603 441.408 70.4855V102.948H458.479V70.4855C458.479 63.6309 462.618 57.811 470.766 57.811C479.043 57.811 482.923 63.8896 482.923 70.7441V102.948H499.995V68.4162C500.253 53.9311 491.329 42.2912 473.094 42.2912Z"
        fill="white"
      ></path>
      <path
        d="M213.267 88.4625C221.156 88.4625 226.459 84.0652 226.459 74.624L226.588 43.4553H243.66V75.2707C243.66 95.9637 226.33 104.112 213.397 104.112C200.334 104.112 183.133 95.9637 183.133 75.2707V43.4553H200.205V74.624C200.205 84.0652 205.249 88.4625 213.267 88.4625Z"
        fill="white"
      ></path>
    </svg>
  );
  const handleClik = () => {
    setLogin(!login);
    setEmail1("");
    setPassword1("");
  };
  //sing
  const [contact, setContact] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handelchange = (e) => {
    const { name, value } = e.target;
    setInput1(false);
    setInput2(false);
    setInput3(false);
    setLabel(true);
    setParol(true);
    setContact((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  ///// login

  const handleRegister = async () => {
    if (!contact.name || !contact.password || !contact.email) {
      // Validate if any required fields are empty
      if (!contact.name) setInput1(true);
      if (!contact.email || !contact.email.includes("@gmail.com"))
        setInput2(true);
      if (!contact.password) setInput3(true);
    } else if (!contact.email.includes("@gmail.com")) {
      setInput2(true);
    } else if (contact.password.length <= 7) {
      // Handle the case where the password length is less than 8
      setInput3(true);
      setParol(false);
    } else if (contacts.find((item) => contact.email === item?.email)) {
      // Check if the email is already taken
      setLabel(false);
      setInput2(true);
    } else {
      // If all conditions pass, proceed with registration
      const { name, password, email } = contact;
      const newContact = { name, password, email };
      setLoading(false);

      try {
        await axios.post(`${apiUrl}newContact`, newContact);
        // Reset the contact state and show loading (if needed)
        setContact({
          name: "",
          email: "",
          password: "",
        });

        // Navigate to "/profil" only if the password meets the length requirement
        if (password.length >= 8) {
          navigate("/profil");
          const user = { name, email, password };

          localStorage.setItem("user", JSON.stringify(user));
        } else {
          // Handle the case where the password length is less than 8
          setInput3(true);
        }
      } catch (error) {
        console.error("Error registering user:", error);
      }
    }
  };

  const loginhandle = () => {
    const loginUser = { email: email1, password: password1 };
    const foundUser = contacts.find(
      (item) => email1 === item?.email && password1 === item?.password
    );
    if (foundUser) {
      setLoading1(false);
      setTimeout(() => {
        navigate("/profil");
      }, 500);
      localStorage?.setItem("logonUser", JSON.stringify(loginUser));
    } else {
      setInput(true);
      setLabel1(false);
    }
  };

  useEffect(() => {
    axios
      .get(`${apiUrl}contact`)
      .then((response) => response?.data)
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="sign-wrapper">
      <div className="sign-left">
        <Link to={"/"}>
          <span>{svg}</span>
        </Link>
      </div>
      <div className="sign-right">
        {!login ? (
          <div className="ruyhat-w">
            <button className="kir" onClick={handleClik}>
              Kirish
            </button>
            <div className="ruyhat">
              <h1 className="h1-for">
                Uzum.uz saytida sotishni <br /> boshlang
              </h1>
              <form
                className="foorm"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label htmlFor="ism">Ism</label>
                <input
                  onChange={handelchange}
                  name="name"
                  type="name"
                  value={contact.name}
                  id="ism"
                  placeholder="Ism"
                  required
                  className={`inn ${input1 ? "activ" : ""}`}
                />
                <label htmlFor="email">
                  {label ? (
                    " Elektron pochtangizni kiriting"
                  ) : (
                    <span style={{ color: "red" }}>
                      Bu email ro'yxatdan o'tgan boshqa email kiriting !
                    </span>
                  )}
                </label>
                <input
                  onChange={handelchange}
                  name="email"
                  type="email"
                  value={contact.email}
                  id="email"
                  required
                  placeholder="example@email.com"
                  className={`inn ${input2 ? "activ" : ""}`}
                />
                <label htmlFor="parol">
                  {parol ? (
                    " Parol oʻylab toping"
                  ) : (
                    <span style={{ color: "red" }}>
                      Parol 8 belgidan kam bo'lmasligi kerak !
                    </span>
                  )}
                </label>
                <input
                  onChange={handelchange}
                  name="password"
                  type="password"
                  value={contact.password}
                  id="parol"
                  required
                  placeholder="Parol"
                  className={`inn ${input3 ? "activ" : ""}`}
                />
                <button
                  type="submit"
                  className="davomet"
                  onClick={handleRegister}
                  disabled={!loading}
                >
                  {loading ? (
                    "Davom etish"
                  ) : (
                    <span className="loading-btn"> </span>
                  )}
                </button>
                <p className="text">
                  “Davom etish” tugmasini bosish orqali <br /> Uzum | Business
                  Oferta shartnomasi va Maxfiylik siyosatiga rozilik bildirasiz
                </p>
              </form>
              <div className="till"></div>
            </div>
          </div>
        ) : (
          <div className="ruyhat-w">
            <button className="kir1" onClick={handleClik}>
              Roʻyxatdan oʻtish
            </button>
            <div className="ruyhat">
              <h1 className="h1-for">Kirish</h1>
              <form
                className="foorm"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label htmlFor="email">
                  {label1 ? (
                    "Elektron pochtangizni kiriting"
                  ) : (
                    <span style={{ color: "red" }}>
                      email yoki parol noto'g'ri !
                    </span>
                  )}
                </label>
                <input
                  onChange={(e) => (setEmail1(e.target.value), setInput(false))}
                  name="email"
                  type="email"
                  id="email"
                  value={email1}
                  required
                  placeholder="example@email.com"
                  className={`inn ${input ? "activ" : ""}`}
                />
                <label htmlFor="parol"> Parol kiriting </label>
                <input
                  onChange={(e) => (
                    setPassword1(e.target.value), setInput(false)
                  )}
                  name="password"
                  type="password"
                  id="parol"
                  value={password1}
                  required
                  placeholder="Parol"
                  className={`inn ${input ? "activ" : ""}`}
                  disabled={!loading}
                />
                <button type="submit" className="davomet" onClick={loginhandle}>
                  {loading1 ? (
                    " Davom etish"
                  ) : (
                    <span className="loading-btn"></span>
                  )}
                </button>
                <p className="text">Parolni unutdingizmi?</p>
              </form>
              <div className="till"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SignIn;
