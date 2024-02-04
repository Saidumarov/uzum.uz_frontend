import React, { useState } from "react";
import ProductCard from "../products/product-card";
import Loadindata from "../../loading/loadingdata";
const ProductsAll = (product) => {
  const [isLoading1, setIsLoading1] = useState(false);
  const [visibleItems, setVisibleItems] = useState(20);
  const { dataResponse, error, isError, isLoading } = product?.products;
  const loadMoreItems = () => {
    setIsLoading1(true);
    setTimeout(() => {
      setIsLoading1(false);
      setVisibleItems((prevVisibleItems) => prevVisibleItems + 20);
    }, 2000);
  };

  // function getRandomItems(arr) {
  //   const shuffled = arr.slice();
  //   for (let i = shuffled.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  //   }
  //   return shuffled.slice(0);
  // }
  // const extractedItems = getRandomItems(delayedData);
  return (
    <div className="data">
      <div className="loding-chil">
        {isLoading ? (
          ""
        ) : (
          <>
            <div className="data1">
              {dataResponse?.slice(0, visibleItems)?.map((item) => (
                <ProductCard key={item?._id} {...item} />
              ))}
            </div>
          </>
        )}
        <div className="loding-chil1">{isLoading1 ? <Loadindata /> : ""}</div>
        <button
          className="yana-hom"
          onClick={loadMoreItems}
          style={{
            display: !isLoading ? "block" : "none",
          }}
        >
          Yana koʻrsatish 20
        </button>
      </div>
    </div>
  );
};

export default ProductsAll;
