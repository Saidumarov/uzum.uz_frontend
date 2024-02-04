import React, { useContext, useEffect, useState } from "react";
import { Modal } from "../modalProvider";
import ProductCard from "../market/products/product-card";
import LoadingProducts from "../loading/loadingproducts";
import "../../styles/sass/wishes.scss";
import hearts from "../../assets/icons/imgs/hearts.cf414be.png";
function Wishes() {
  const { setFixed, hig, setHig } = useContext(Modal);
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setFixed(true);
    let wishes = localStorage.getItem("likedProducts");
    let wishesAll = wishes ? JSON?.parse(wishes) : null;
    localStorage.setItem("text", JSON.stringify("Saralangan"));
    setTimeout(() => {
      setWishes(wishesAll);
      setLoading(false);
      setHig(false);
    }, 1000);
  }, [wishes]);

  useEffect(() => {
    setHig(true);
  }, []);

  return (
    <div className="wishis-w">
      <div className="data">
        <div className="data1">
          {hig ? <div className="about-hig"></div> : ""}
          {loading ? (
            <LoadingProducts />
          ) : wishes?.length > 0 ? (
            wishes?.map((item, index) => <ProductCard key={index} {...item} />)
          ) : (
            <div className="not-like">
              <div>
                <img src={hearts} alt="" className="hearts" />
                <h3>Sizga yoqqanini qoʻshing</h3>
                <p>
                  Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha
                  saralanganlar saqlanib qoladi
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Wishes;
