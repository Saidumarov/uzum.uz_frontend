import React, { useContext, useEffect, useState } from "react";
import "../../styles/sass/accounts.scss";
import { Modal } from "../modalProvider";
import SiteBarpage from "../users/profil/sitebarpage";
import "../../styles/sass/accounts.scss";
import LoadingProducts from "../loading/loadingproducts";
import x from "../../assets/icons/savg/bar.svg";
import x1 from "../../assets/icons/savg/barx.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Account() {
  const { setSet } = useContext(Modal);

  // State for managing contacts
  const apiUrl = process.env.REACT_APP_API_URL;
  const [contacts, setContacts] = useState();
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);
  const [input3, setInput3] = useState(false);
  const [input4, setInput4] = useState(false);
  const [sitebar, setSitebar] = useState(false);

  // State for updating a contact
  const [updateContact, setUpdateContact] = useState({
    name: "",
    email: "",
    password: "",
    id: "",
    joriy: "",
  });

  useEffect(() => {
    setSet(false);
    axios
      .get(`${apiUrl}contact`)
      .then((response) => response?.data)
      .then((data) => {
        setContacts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [updateContact]);
  // console.log(updateContact.joriy);
  // Update a contact on the server and show a success message
  const updateContactHandler = (id) => {
    const passwordMatches = contacts?.some(
      (contact) =>
        contact?._id === id && updateContact.password === contact?.password
    );
    const password = contacts?.some(
      (contact) =>
        contact?._id === id && updateContact.joriy !== contact?.password
    );

    setInput1(false);
    setInput2(false);
    setInput3(false);
    setInput4(false);

    if (
      (!updateContact.name || !updateContact.password || !updateContact.email,
      !updateContact.joriy)
    ) {
      if (!updateContact.name) setInput1(true);
      if (!updateContact.joriy) setInput4(true);
      if (!updateContact.email || !updateContact.email.includes("@gmail.com"))
        setInput2(true);
      if (!updateContact.password) setInput3(true);
      return;
    }

    if (!updateContact.email.includes("@gmail.com")) {
      setInput2(true);
      return;
    }

    if (updateContact.password.length < 8 || passwordMatches) {
      setInput3(true);
      return;
    }

    if (password) {
      setInput4(true);
      return;
    }
    axios
      .put(`${apiUrl}putContact/${id}`, updateContact)
      .then(() => {
        toast.success("Malumotlar tahrirlandi !");
        setModal(false);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      })
      .catch((error) => {
        console.error("Error updating contact:", error);
        if (error.response) {
          console.error(
            "Server responded with status code:",
            error.response.status
          );
          console.error("Server response data:", error.response.data);
        } else if (error.request) {
          console.error("No response received from the server");
        } else {
          console.error("Error setting up the request:", error.message);
        }
        toast.error("Malumotlar tahrirlanmadi !");
      });
  };
  const updateHandler = (id) => {
    setUpdateContact({
      name: "",
      email: "",
      password: "",
      id: id,
    });
    setModal(true);
  };

  // Handle input changes for updating a contact
  const handleUpdate = (e) => {
    const { name, value } = e?.target;
    setInput1(false);
    setInput2(false);
    setInput3(false);
    setInput4(false);
    setUpdateContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Local storage handling
  const userLocal = localStorage?.getItem("contactApi");
  const user = userLocal ? JSON?.parse(userLocal) : null;

  useEffect(() => {
    const updatedContacts = contacts?.map((contact) =>
      contact?._id === updateContact?.id ? updateContact : contact
    );
    updatedContacts?.map((el) => {
      if (el?._id === user?._id) {
        return localStorage.setItem("contacts", JSON.stringify(el));
      }
    });
  }, [updateContact, contacts]);

  return (
    <div className="accunt-wrr">
      <ToastContainer />
      <nav className="nav-profil">
        <h1 className="title-mahsulot">Akkauntni boshqarish !</h1>
        <div className="accaunt-x" onClick={() => setSitebar(!sitebar)}>
          <img src={x} alt="" />
        </div>
      </nav>
      <div className="account">
        <span className={`sitebar-ac ${sitebar ? "activ" : ""}`}>
          <SiteBarpage />
        </span>
        {loading ? (
          <LoadingProducts />
        ) : (
          contacts &&
          contacts?.map((item) => {
            let inputNumber = item?.password;
            const numberString = inputNumber?.toString();
            const atIndex = item?.email?.indexOf("@");
            const maskedEmail = item?.email?.replace(
              item?.email?.substring(3, atIndex),
              "*".repeat(atIndex)
            );

            const asteriskString = "*".repeat(numberString?.length);
            if (item?._id === user?._id) {
              return (
                <>
                  <div className="accaunt-wr" key={item?._id}>
                    <div className="accaunt-name">
                      <p>
                        Ismingiz <span className="s-n">{item?.name}</span>
                      </p>
                      <hr className="hr-ac" />
                      <p>
                        Email <span className="s-n1">{maskedEmail}</span>
                      </p>
                      <hr className="hr-ac" />

                      <p>
                        Parol <span className="s-n2">{asteriskString}</span>
                      </p>
                      <hr className="hr-ac" />

                      <button onClick={() => updateHandler(item?._id)}>
                        OʻZGARTIRISH
                      </button>
                    </div>
                  </div>
                  {modal ? (
                    <div className="form-account">
                      <div className="form-item-ac">
                        <img src={x1} alt="" onClick={() => setModal(false)} />
                        <form onSubmit={(e) => e.preventDefault()}>
                          <label htmlFor="name">Ism</label>
                          <input
                            required
                            name="name"
                            type="text"
                            onChange={handleUpdate}
                            id="name"
                            placeholder="Ism"
                            value={updateContact?.name}
                            className={`innAc ${input1 ? "activ" : ""}`}
                          />
                          <label htmlFor="email">Email</label>
                          <input
                            required
                            type="email"
                            name="email"
                            onChange={handleUpdate}
                            id="email"
                            placeholder="example@email.com"
                            value={updateContact?.email}
                            className={`innAc ${input2 ? "activ" : ""}`}
                          />
                          <label htmlFor="joriy">Joriy parol</label>
                          <input
                            required
                            type="joriy"
                            name="joriy"
                            onChange={handleUpdate}
                            id="joriy"
                            placeholder="Joriy parol"
                            value={updateContact?.joriy}
                            className={`innAc ${input4 ? "activ" : ""}`}
                          />

                          <label htmlFor="parol"> Yangi parol</label>
                          <input
                            required
                            type="password"
                            name="password"
                            onChange={handleUpdate}
                            id="parol"
                            placeholder="Yangi parol"
                            value={updateContact?.password}
                            className={`innAc ${input3 ? "activ" : ""}`}
                          />

                          <div className="parol-p">
                            <p>
                              Parol: Kamida 8 ta belgi ! <br />
                            </p>
                            <p style={{ paddingTop: "5px" }}>
                              Joriy parolni takrorlamaydi !
                            </p>
                          </div>

                          <button
                            className="btn-w"
                            onClick={() =>
                              updateContactHandler(updateContact?.id)
                            }
                          >
                            {modal ? (
                              "Saqlash"
                            ) : (
                              <span className="loading-btn1"> </span>
                            )}
                          </button>
                        </form>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              );
            }
          })
        )}
      </div>
    </div>
  );
}

export default Account;
