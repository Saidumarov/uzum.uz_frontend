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
              <h2
                className="bb"
                style={{ display: "flex", alignItems: "center" }}
              >
                Muddatli to'lov
                <span style={{ paddingTop: "10px" }}>
                  <svg
                    data-v-4ea18675=""
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="ui-icon title-icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.18945 16.4983C8.91426 16.1887 8.94215 15.7146 9.25174 15.4394L13.1211 12L9.25173 8.56055C8.94215 8.28536 8.91426 7.81131 9.18945 7.50172C9.46464 7.19213 9.93869 7.16425 10.2483 7.43943L14.7483 11.4394C14.9084 11.5818 15 11.7858 15 12C15 12.2142 14.9084 12.4182 14.7483 12.5605L10.2483 16.5605C9.93869 16.8357 9.46464 16.8079 9.18945 16.4983Z"
                      fill="black"
                    ></path>
                  </svg>
                </span>
              </h2>
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
