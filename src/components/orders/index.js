import { Link } from "react-router-dom";
import "../../styles/sass/orders.scss";
import { useState } from "react";

function Orders() {
  const [active, setactive] = useState("b");
  const [products, setproducts] = useState();
  const product = () => {
    setproducts(!products);
  };
  return (
    <>
      {/* Orders  */}
      <section className="orders">
        <div className="container">
          <div className="orders_left">
            <h2>User</h2>
            <Link>
              <p>Buyurtmalarim</p>
            </Link>
            <Link to={"/settings"}>
              <p style={{ opacity: "0.5" }}>Sozlamalar</p>
            </Link>
          </div>

          <div className="orders_right">
            <div className="orders_right_top">
              <button
                className={`btn_t ${active == "b" ? "active" : ""}`}
                onClick={() => setactive("b")}
              >
                Barcha buyurtmalar
              </button>
              <button
                className={`btn_t ${active == "i" ? "active" : ""}`}
                onClick={() => setactive("i")}
              >
                Toʻlov qilinmagan
              </button>
              <button
                className={`btn_t ${active == "u" ? "active" : ""}`}
                onClick={() => setactive("u")}
              >
                Faol
              </button>
            </div>
            <div className="orders_right_bottom">
              <div className="id_b">
                <p>Buyurtma ID raqami 16756779</p>
                <p>BUYURTMAGA TOʻLOV QILISH</p>
              </div>
              <div className="table">
                <div className="table_one">
                  <p>Holat</p>
                  <p>Buyurtma sanasi:</p>
                  <p>Yetkazib berish sanasi:</p>
                  <p>Topshirish punkti:</p>
                  <p>Ish vaqti:</p>
                  <p>Buyurtma qiymati:</p>
                </div>
                <div className="table_two">
                  <p className="table_two_t">Toʻlovni kutmoqda</p>
                  <p>2024 M02 8, Thu 11:24</p>
                  <p>M02 9, Fri</p>
                  <p>Toshkent sh., Yashnobod tumani, Birlashgan ko'chasi</p>
                  <p>10:00-20:00</p>
                  <p>26 000 so'm</p>
                </div>
              </div>
            </div>
            <div
              className={`orders_right_bottom_card ${products ? "active" : ""}`}
              onClick={product}
            >
              <div className="o_rder_card_p">
                <p>1 mahsulot</p>
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#1f2026"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ui-icon noselect"
                  >
                    <path d="M12 16C12.3107 15.9911 12.5948 15.8748 12.8257 15.6243L18.4481 9.8071C18.6435 9.61029 18.75 9.3598 18.75 9.06458C18.75 8.47414 18.2883 8 17.7024 8C17.4183 8 17.143 8.1163 16.9388 8.32206L12.0089 13.4504L7.06116 8.32206C6.85696 8.12524 6.59061 8 6.29763 8C5.71167 8 5.25 8.47414 5.25 9.06458C5.25 9.3598 5.35654 9.61029 5.55186 9.8071L11.1832 15.6243C11.4229 15.8748 11.6893 16 12 16Z"></path>
                  </svg>
                </span>
              </div>
              <div
                className="order_card_w"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src="https://images.uzum.uz/cksb3jnn7c6qm23gd2mg/original.jpg"
                  alt=""
                />
                <div className="order_card_tavsif">
                  <div>
                    <p className="name">Nomi</p>
                    <p>Soni</p>
                    <p>Narxi</p>
                  </div>
                  <div>
                    <p>
                      Nomi Kungaboqar yog'i Oila tanlovi, tozalangan va
                      xidsizlantirilgan, 900
                    </p>
                    <p className="count">2</p>
                    <p className="prise">13 000 so'm</p>
                  </div>
                  <p className="p">Toʻlovni kutmoqda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orders  */}
    </>
  );
}

export default Orders;
