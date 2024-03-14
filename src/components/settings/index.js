import { Link, useNavigate } from "react-router-dom";
import "../../styles/sass/settings.scss";
import { useEffect, useState } from "react";
import LoadingProducts from "../loading/loadingproducts";
function Settings() {
  const [active, setactive] = useState("e");
  const [user, setUser] = useState([]);
  const [isloading, setisloading] = useState(true);
  const navegit = useNavigate();
  const { name, surname, phone, ota, email, date, jins } = user;
  const women = (e) => {
    setactive(e);
  };

  const men = (e) => {
    setactive(e);
  };

  const handelChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    let name = JSON.parse(localStorage.getItem("profilUser")) || {};
    setUser(name);
    setTimeout(() => {
      setisloading(false);
    }, 500);
  }, []);

  useEffect(() => {
    setactive(jins);
  }, []);

  const save = () => {
    localStorage.setItem("profilUser", JSON.stringify(user));
    setUser({
      ...user,
      jins: active,
    });
    if (name && surname && email && date) {
      setisloading(true);
      setTimeout(() => {
        setisloading(false);
      }, 500);
    }
  };

  const logaut = () => {
    localStorage.removeItem("profilUser");
    navegit("/");
  };

  return (
    <>
      <div>
        {/* Settings  */}
        {isloading ? <LoadingProducts /> : ""}
        <section className="orders">
          <div className="container">
            <div className="orders_left">
              <h2>User</h2>
              <Link to={"/orders"}>
                <p style={{ opacity: "0.5" }}>Buyurtmalarim</p>
              </Link>
              <Link>
                <p>Sozlamalar</p>
              </Link>
            </div>

            <div className="orders_right">
              <div className="settings_foorm">
                <h3>Maʼlumotlarim</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                  <span className="form_name">
                    <span>
                      <label htmlFor="surname">Familiya</label>
                      <input
                        onChange={handelChange}
                        required
                        type="text"
                        id="surname"
                        placeholder="Familiya"
                        value={surname}
                      />
                    </span>
                    <span>
                      <label htmlFor="name">Ism</label>
                      <input
                        onChange={handelChange}
                        required
                        type="name"
                        id="name"
                        placeholder="Ism"
                        value={name}
                      />
                    </span>
                    <span>
                      <label htmlFor="ota">Otasining ismi</label>
                      <input
                        onChange={handelChange}
                        required
                        type="text"
                        id="ota"
                        placeholder="Otasining ismi"
                        value={ota}
                      />
                    </span>
                  </span>
                  <hr />
                  <span className="form_two">
                    <span>
                      <label htmlFor="email">Elektron pochta</label>
                      <input
                        onChange={handelChange}
                        required
                        type="email"
                        name="email"
                        placeholder="example@mail.ru"
                        autoComplete="email"
                        id="email"
                        pattern="^\S+@\S+\.\S+$"
                        value={email}
                      />
                    </span>
                    <span>
                      <label htmlFor="phone1">Telefon raqami</label>
                      <input
                        onChange={handelChange}
                        required
                        type="tel"
                        id="phone"
                        placeholder="+998 __ ___-__-__"
                        maxLength="17"
                        minLength="17"
                        value={phone}
                      />
                    </span>
                  </span>
                  <hr />
                  <p className="jins">Jins</p>
                  <div className="types">
                    <div
                      className="type_f"
                      style={{
                        backgroundColor:
                          active == "e" ? "rgb(223, 225, 230)" : "",
                      }}
                      onClick={() => men("e")}
                    >
                      Erkak
                    </div>
                    <div
                      className="type_f"
                      style={{
                        backgroundColor:
                          active == "a" ? "rgb(223, 225, 230)" : "",
                      }}
                      onClick={() => women("a")}
                    >
                      Ayol
                    </div>
                  </div>
                  <label htmlFor="date">Tugʻilgan sana</label>
                  <input
                    onChange={handelChange}
                    required
                    type="datepicker"
                    maxLength="10"
                    minLength="10"
                    placeholder="kk/oo/yyyy"
                    id="date"
                    value={date}
                  />
                  <div className="lagout" onClick={logaut}>
                    Tizimdan chiqish
                  </div>
                  <button type="submit" className="save" onClick={save}>
                    Saqlash
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Settings  */}
      </div>
    </>
  );
}

export default Settings;
