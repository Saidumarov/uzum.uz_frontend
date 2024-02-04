import React, { useContext, useEffect, useState } from "react";
import { Products, Scroldata } from "../../components";
import { Modal } from "../../components/modalProvider";
import myAxios from "../../api/index";
import { useQuery } from "react-query";
import "../../styles/sass/notFound.scss";
function Hompage() {
  const { setSet, setFixed, setActiveItem } = useContext(Modal);
  // const [eror, setEror] = useState(false);
  const [eror1, setEror1] = useState(true);

  useEffect(() => {
    setSet(true);
    setFixed(true);
    localStorage.setItem("text", JSON.stringify("Bosh sahifa"));
    setActiveItem("Bosh sahifa");
  }, []);
  useEffect(() => {
    localStorage.getItem("type");
    localStorage.removeItem("type");
  });

  const fetchPost = async () => {
    const response = await myAxios.get("prodsuct");
    return response?.data;
  };
  const {
    data: dataResponse,
    isLoading,
    isError,
    error,
  } = useQuery("posts", fetchPost);
  if (isError) {
    if (eror1) {
      console.log(error);
    }
    setTimeout(() => {
      setEror1(false);
    }, 100);
    // setTimeout(() => {
    //   setEror(true);
    // }, 40000);

    // return eror ? (
    //   <div className="hom_not">
    //     <h2> Sayt vaqtincha ishlamayapti :(</h2>
    //     <p>
    //       <hr />
    //       Serverda texnik ishlar olib borilmoqda. <hr />
    //     </p>
    //     <button onClick={() => window.location.reload()}>Qayta yuklash</button>
    //   </div>
    // ) : (
    // );
  }

  return (
    <div>
      <Scroldata products={{ dataResponse, isError, isLoading, error }} />
      <Products products={{ dataResponse, isError, isLoading, error }} />
    </div>
  );
}

export default Hompage;
