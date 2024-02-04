import React, { useState } from "react";
import ProductCard from "./product-card";
import Loadindata from "../../loading/loadingdata";
import ProductScrol from "../../scrol/productScrol";
import img from "../../../assets/icons/imgs/yog/cl88ertennt861ipbp7g.jpg";
import img1 from "../../../assets/icons/imgs/yog/Без названия.jpg";
import ProductsAll from "../products2";
const Products = (product) => {
  const { dataResponse, error, isError, isLoading } = product?.products;
  const [visibleItems, setVisibleItems] = useState(10);
  const [isLoading1, setIsLoading1] = useState(false);

  const loadMoreItems = () => {
    setIsLoading1(true);
    setTimeout(() => {
      setIsLoading1(false);
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
    }, 2000);
  };

  // if (isError) {
  //   return (
  //     <div className="data">
  //       <Loadindata />
  //     </div>
  //   );
  // }
  return (
    <div className="data">
      <div>
        {isLoading ? (
          <span>
            <Loadindata />
          </span>
        ) : (
          <>
            <div className="data1">
              {dataResponse?.slice(0, visibleItems)?.map((item) => (
                <ProductCard key={item?._id} {...item} />
              ))}
            </div>
            <div className="loding-chil1">
              {isLoading1 ? <Loadindata /> : ""}
            </div>
            <button className="yana-hom" onClick={loadMoreItems}>
              Yana koʻrsatish 10
            </button>
            <ProductScrol
              products={{ dataResponse, error, isError, isLoading }}
            />
            <div className="darhol">
              <img className="dar" src={img} alt="" />
              <img className="dar1" src={img1} alt="" />
            </div>
            <span className="data_span">
              <ProductsAll
                products={{ dataResponse, error, isError, isLoading }}
              />
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Products;
