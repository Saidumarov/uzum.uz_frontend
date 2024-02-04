import React, { useState } from "react";
export const Modal = React.createContext();
function ModalProvider({ children }) {
  const [active, setActive] = useState(false);
  const [product, setProduct] = useState(true);
  const [set, setSet] = useState(true);
  const [hig, setHig] = useState(true);
  const [text, setText] = useState(" Mahsulot qo'shish");
  const [isupdate, setIsUpdate] = useState(false);
  const [sitebar, setSitebar] = useState(false);
  const [length, setLegth] = useState();
  const [pas, setPas] = useState();
  const [fixed, setFixed] = useState();
  const [activee, setActivee] = useState(false);
  const [activeItem, setActiveItem] = useState();
  const [loading, setLoading] = useState(true);
  const [active1, setActive1] = useState();
  const [updateProduct, setUpdateProduct] = useState({
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
    id: "",
  });

  return (
    <div>
      <Modal.Provider
        value={{
          active,
          setActive,
          set,
          setSet,
          hig,
          setHig,
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
          length,
          setLegth,
          pas,
          setPas,
          fixed,
          setFixed,
          activee,
          setActivee,
          activeItem,
          setActiveItem,
          loading,
          setLoading,
          active1,
          setActive1,
        }}
      >
        {children}
      </Modal.Provider>
    </div>
  );
}

export default ModalProvider;
