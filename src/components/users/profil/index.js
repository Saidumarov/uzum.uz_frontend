import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profil from "./profil";
import { Modal } from "../../modalProvider";
import SiteBarpage from "./sitebarpage";
import x from "../../../assets/icons/savg/bar.svg";
function ProfilAdd() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const {
    isupdate,
    setIsUpdate,
    updateProduct,
    setUpdateProduct,
    product,
    setProduct,
    text,
    setText,
    sitebar,
    setSitebar,
  } = useContext(Modal);
  const [contact, setContact] = useState({
    name: "",
    user: "",
    img: "",
    img1: "",
    img2: "",
    imgags: "",
    dec: "",
    price: "",
    piece: "",
    per_month: "",
    old_price: "",
    type: "",
  });
  // Update contact.imgags when contact.img, img1, or img2 changes
  useEffect(() => {
    axios
      .get(`${apiUrl}contact`)
      .then((response) => response?.data)
      .then((data) => {
        const selectedUsers = data?.find(
          (el) => el?.email === selectedUser?.email
        );
        if (selectedUsers) {
          localStorage.setItem("contactApi", JSON.stringify(selectedUsers));
        }
      });

    const userLocal = localStorage.getItem("user");
    const logonUserLocal = localStorage.getItem("logonUser");

    const user = userLocal ? JSON.parse(userLocal) : null;
    const logonUser = logonUserLocal ? JSON.parse(logonUserLocal) : null;

    const userLocalApi = localStorage?.getItem("contactApi");
    const userApi = userLocalApi ? JSON?.parse(userLocalApi) : null;

    const selectedUser = user || logonUser;

    setContact((prev) => ({
      ...prev,
      imgags: [
        { img: contact?.img },
        { img: contact?.img1 },
        { img: contact?.img2 },
      ],
      user: {
        id: userApi?._id || "",
      },
    }));
  }, [contact.img, contact.img1, contact.img2]);

  useEffect(() => {
    setUpdateProduct((prev) => ({
      ...prev,
      imgags: [
        { img: updateProduct.img },
        { img: updateProduct.img1 },
        { img: updateProduct.img2 },
      ],
    }));
  }, [updateProduct.img, updateProduct.img1, updateProduct.img2]);

  const updateProductHandler = async (id) => {
    try {
      if (Object.values(updateProduct).some((val) => !val)) {
        toast.error("To'liq ma'lumot kiriting");
      } else {
        await axios.put(`${apiUrl}put/${id}`, updateProduct);
        toast.success("Mahsulot tahrirlandi");
        setProduct(false);
        setIsUpdate(false);
        setUpdateProduct({
          name: "",
          user: {},
          img: "",
          img1: "",
          img2: "",
          imgags: [],
          dec: "",
          price: "",
          piece: "",
          per_month: "",
          old_price: "",
          type: "",
        });
      }
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Xatolik yuz berdi, mahsulot tahrirlanmadi");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validate fields
      if (
        Object.values(contact).some((val) => !val) ||
        Object.values(contact.imgags).some((val) => !val)
      ) {
        toast.error("To'liq ma'lumot kiriting");
      } else {
        const newProduct = { ...contact };

        await axios.post(`${apiUrl}newProduct`, newProduct);
        toast.success("Mahsulot qo'shildi");
        // Reset contact state
        setContact({
          name: "",
          user: {},
          img: "",
          img1: "",
          img2: "",
          imgags: [],
          dec: "",
          price: "",
          piece: "",
          per_month: "",
          old_price: "",
          type: "",
        });
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Xatolik yuz berdi, mahsulot qo'shilmadi");
    }
  };

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setUpdateProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [allImage, setAllImage] = useState(null);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    try {
      const result = await axios.get(`${apiUrl}product`);
      setAllImage(result?.data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  return (
    <>
      <ToastContainer />
      <span className={`sitebar-ac1 ${sitebar ? "activ" : ""}`}>
        <SiteBarpage />
      </span>
      <nav className="nav-profil">
        {product ? (
          <h1 className="title-mahsulot"> {text} !</h1>
        ) : (
          <h1 className="title-mahsulot">Mahsulotlar !</h1>
        )}
        <img
          src={x}
          alt=""
          className="x-bar-ac"
          onClick={() => setSitebar(!sitebar)}
        />
      </nav>

      {product ? (
        <>
          {!isupdate ? (
            <div className="mahsulot-kiritish">
              <div className="mahsulot-item">
                <form className="foorm-input-w">
                  <div className="input-product">
                    <label htmlFor="name" className="form-profil-label">
                      Sotuvchi ismi
                    </label>
                    <input
                      onChange={handleChange}
                      name="name"
                      type="text"
                      value={contact.name}
                      className="form-control"
                      id="name"
                    />
                  </div>
                  <div className="input-product">
                    <label htmlFor="narx" className="form-profil-label">
                      Mahsulot narxi
                    </label>
                    <input
                      id="narx"
                      onChange={handleChange}
                      name="price"
                      type="number"
                      value={contact.price}
                      className="form-control"
                    />
                  </div>
                  <div className="input-product">
                    <label htmlFor="narxe" className="form-profil-label">
                      Mahsulot eski narxi
                    </label>
                    <input
                      id="narxe"
                      onChange={handleChange}
                      name="old_price"
                      type="number"
                      value={contact.old_price}
                      className="form-control"
                    />
                  </div>
                  <div className="input-product">
                    <label htmlFor="img" className="form-profil-label">
                      Rasm 1
                    </label>
                    <input
                      id="img"
                      onChange={handleChange}
                      name="img"
                      type="text"
                      value={contact.img}
                      className="form-control"
                    />
                  </div>
                  <div className="input-product">
                    <label htmlFor="img1" className="form-profil-label">
                      Rasm 2
                    </label>
                    <input
                      id="img1"
                      onChange={handleChange}
                      name="img1"
                      type="text"
                      value={contact.img1}
                      className="form-control"
                    />
                  </div>
                  <div className="input-product">
                    <label htmlFor="img2" className="form-profil-label">
                      Rasm 3
                    </label>
                    <input
                      id="img2"
                      onChange={handleChange}
                      name="img2"
                      type="text"
                      value={contact.img2}
                      className="form-control"
                    />
                  </div>
                  <div className="input-product">
                    <label htmlFor="dona" className="form-profil-label">
                      Mahsulotdan necha dona bor ?
                    </label>
                    <input
                      onChange={handleChange}
                      name="piece"
                      type="number"
                      value={contact.piece}
                      className="form-control"
                      id="dona"
                    />
                  </div>
                  <div className="input-product">
                    <label htmlFor="bulib" className="form-profil-label">
                      Mahsulot bo'lib tolash narxi ?
                    </label>
                    <input
                      onChange={handleChange}
                      name="per_month"
                      type="number"
                      value={contact.per_month}
                      className="form-control"
                      id="bulib"
                    />
                  </div>
                  <div className="input-product">
                    <label htmlFor="last" className="form-profil-label">
                      Mahsulot haqida
                    </label>
                    <textarea
                      onChange={handleChange}
                      name="dec"
                      type="text"
                      value={contact.dec}
                      className="form-control"
                      id="last"
                    ></textarea>
                  </div>
                  <div className="input-product">
                    <label htmlFor="type" className="form-profil-label">
                      Mahsulot turini tanlang ?
                    </label>
                    <select
                      name="type"
                      value={contact.type}
                      onChange={handleChange}
                      className="slect"
                      id="type"
                    >
                      <option></option>
                      <option value="elektronika">Elektronika</option>
                      <option value="maishiy_texnika">Maishiy-texnika</option>
                      <option value="kiyim">Kiyim</option>
                      <option value="poyabzallar">Poyabzallar</option>
                      <option value="aksessuarlar">Aksessuarlar</option>
                      <option value="goʻzallik">Goʻzallik</option>
                      <option value="salomatlik">Salomatlik</option>
                      <option value="roʻzgʻor_buyumlari">
                        Uy-roʻzgʻor-buyumlari
                      </option>
                      <option value="qurilish">Qurilish-va-taʼmirlash</option>
                      <option value="avtotovarlar">Avtotovarlar</option>
                    </select>
                  </div>
                  <button onClick={handleSubmit} className="btn-form">
                    Qo'shish
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="mahsulot-kiritish">
              <div className="mahsulot-item">
                <form
                  className="foorm-input-w"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="input-product" id="input-product">
                    <label htmlFor="name" className="form-profil-label">
                      Sotuvchi ismi
                    </label>
                    <input
                      onChange={handleUpdate}
                      name="name"
                      type="text"
                      value={updateProduct.name}
                      className="form-control"
                      id="name"
                    />
                  </div>
                  <div className="input-product" id="input-product">
                    <label htmlFor="narx" className="form-profil-label">
                      Mahsulot narxi
                    </label>
                    <input
                      id="narx"
                      onChange={handleUpdate}
                      name="price"
                      type="number"
                      value={updateProduct.price}
                      className="form-control"
                    />
                  </div>
                  <div className="input-product" id="input-product">
                    <label htmlFor="narxe" className="form-profil-label">
                      Mahsulot eski narxi
                    </label>
                    <input
                      id="narxe"
                      onChange={handleUpdate}
                      name="old_price"
                      type="number"
                      value={updateProduct.old_price}
                      className="form-control"
                    />
                  </div>
                  <div className="input-product" id="input-product">
                    <label htmlFor="img" className="form-profil-label">
                      Rasm 1
                    </label>
                    <input
                      id="img"
                      onChange={handleUpdate}
                      name="img"
                      type="text"
                      value={updateProduct.img}
                      className="form-control"
                    />
                  </div>
                  <div className="input-product" id="input-product">
                    <label htmlFor="img1" className="form-profil-label">
                      Rasm 2
                    </label>
                    <input
                      id="img1"
                      onChange={handleUpdate}
                      name="img1"
                      type="text"
                      value={updateProduct.img1}
                      className="form-control"
                    />
                  </div>
                  <div className="input-product" id="input-product">
                    <label htmlFor="img2" className="form-profil-label">
                      Rasm 3
                    </label>
                    <input
                      id="img2"
                      onChange={handleUpdate}
                      name="img2"
                      type="text"
                      value={updateProduct.img2}
                      className="form-control"
                    />
                  </div>
                  <div className="input-product" id="input-product">
                    <label htmlFor="dona" className="form-profil-label">
                      Mahsulotdan necha dona bor ?
                    </label>
                    <input
                      onChange={handleUpdate}
                      name="piece"
                      type="number"
                      value={updateProduct.piece}
                      className="form-control"
                      id="dona"
                    />
                  </div>

                  <div className="input-product" id="input-product">
                    <label htmlFor="bulib" className="form-profil-label">
                      Mahsulot bo'lib tolash narxi ?
                    </label>
                    <input
                      onChange={handleUpdate}
                      name="per_month"
                      type="number"
                      value={updateProduct.per_month}
                      className="form-control"
                      id="bulib"
                    />
                  </div>

                  <div className="input-product" id="input-product">
                    <label htmlFor="last" className="form-profil-label">
                      Mahsulot haqida
                    </label>
                    <textarea
                      onChange={handleUpdate}
                      name="dec"
                      type="text"
                      value={updateProduct.dec}
                      className="form-control"
                      id="last"
                    ></textarea>
                  </div>
                  <div className="input-product">
                    <label htmlFor="type" className="form-profil-label">
                      Mahsulot turini tanlang ?
                    </label>
                    <span className="isclec">
                      <select
                        name="type"
                        value={updateProduct.type}
                        onChange={handleUpdate}
                        className="slect"
                        id="type"
                      >
                        <option></option>
                        <option value="elektronika">Elektronika</option>
                        <option value="maishiy_texnika">Maishiy-texnika</option>
                        <option value="kiyim">Kiyim</option>
                        <option value="poyabzallar">Poyabzallar</option>
                        <option value="aksessuarlar">Aksessuarlar</option>
                        <option value="goʻzallik">Goʻzallik</option>
                        <option value="salomatlik">Salomatlik</option>
                        <option value="roʻzgʻor_buyumlari">
                          Uy-roʻzgʻor-buyumlari
                        </option>
                        <option value="qurilish">Qurilish-va-taʼmirlash</option>
                        <option value="avtotovarlar">Avtotovarlar</option>
                      </select>
                    </span>
                  </div>
                  <button
                    onClick={() => updateProductHandler(updateProduct.id)}
                    className="btn-form"
                  >
                    O'zgartirish
                  </button>
                  <button
                    onClick={() => (
                      setIsUpdate(false),
                      setProduct(false),
                      setText("Mahsulot qo'shish")
                    )}
                    className="btn-form1"
                  >
                    Yopish
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <Profil />
        </>
      )}
    </>
  );
}

export default ProfilAdd;
