import React, { useContext, useEffect, useState } from "react";
import "../../styles/sass/category.scss";
import ProductCard from "../market/products/product-card";
import { Modal } from "../modalProvider";
import { Cardloading, LoadingLeft } from "../loading/loadingdata";
import myAxios from "../../api/index";
import { useQuery } from "react-query";
function Category() {
  const [type, setType] = useState();
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const { loading, setLoading } = useContext(Modal);

  const fetchPost = async () => {
    const response = await myAxios.get("product");
    return response?.data;
  };
  const { data: dataResponse, isLoading } = useQuery("posts", fetchPost);

  useEffect(() => {
    let type = localStorage.getItem("type");
    let categoryType = type ? JSON.parse(type) : null;
    setType(categoryType);
  });

  const text = [
    {
      text: `Avtotovarlar `,
      value: "avtotovarlar",
    },
    {
      text: `Qurilish-va-taʼmirlash `,
      value: "qurilish",
    },
    {
      text: `Goʻzallik`,
      value: "goʻzallik",
    },
    {
      text: `Aksessuarlar `,
      value: "aksessuarlar",
    },
    {
      text: `Poyabzallar `,
      value: "poyabzallar",
    },
    {
      text: `Elektronika `,
      value: "elektronika",
    },
    {
      text: `Maishiy-texnika `,
      value: "maishiy_texnika",
    },
    {
      text: `Kiyim `,
      value: "kiyim",
    },
    {
      text: `Salomatlik `,
      value: "salomatlik",
    },
    {
      text: `Uy-roʻzgʻor-buyumlari `,
      value: "roʻzgʻor_buyumlari",
    },
  ];

  // function getRandomItems(arr) {
  //   const shuffled = arr;
  //   for (let i = shuffled.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  //   }
  //   return shuffled;
  // }

  // const extractedItems = getRandomItems(text);

  const CateyoryType = (elemnt) => {
    localStorage.setItem("type", JSON.stringify(elemnt));
    setType(elemnt);
    setLoading(true);
  };

  const handleMaxachange = () => {};
  const handleMinachange = () => {};

  const filteredProducts = dataResponse
    ? dataResponse?.filter((item) => {
        const price = item?.price;
        return price >= minPrice && price <= maxPrice;
      })
    : [];

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  });

  // const moreItmes = () => {
  //   setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
  //   setLoading(true);
  // };

  return (
    <div>
      <div
        className="category-wrapper"
        style={{ height: loading ? "1425px" : "" }}
      >
        <div
          className="category-item-left"
          style={{ height: loading ? "400px" : "500px" }}
        >
          {loading && loading ? (
            <LoadingLeft />
          ) : (
            <div>
              <h3>Turkumlar</h3>
              {text?.map((item, index) => (
                <p onClick={() => CateyoryType(item?.value)} key={index}>
                  {item?.text}
                </p>
              ))}
              <h3>Narx, baho</h3>
              <div>
                <div className="sum">
                  <input
                    type="number"
                    value={minPrice || ""}
                    onChange={(e) => {
                      const newValue = parseInt(e.target.value);
                      if (newValue > maxPrice) {
                      } else if (!isNaN(newValue)) {
                        setMinPrice(newValue);
                      } else {
                        setMinPrice(0);
                      }
                    }}
                  />
                  <input
                    type="number"
                    value={maxPrice || ""}
                    onChange={(e) => {
                      const newValue = parseInt(e.target.value);
                      if (newValue < minPrice) {
                      } else if (!isNaN(newValue)) {
                        setMaxPrice(newValue);
                      } else {
                        setMaxPrice(0);
                      }
                    }}
                  />
                </div>
                <div className="value">
                  <input
                    type="range"
                    name="minPrice"
                    id="minPrice"
                    min="0"
                    max="100000"
                    value={minPrice}
                    onChange={(e) => {
                      handleMinachange(setMinPrice(e.target.value));
                    }}
                    style={{
                      background: `linear-gradient(to right, rgb(111, 0, 255) 0%, rgb(111, 0, 255) ${
                        (minPrice / 100000) * 100
                      }%, rgb(180, 183, 191) ${
                        (minPrice / 100000) * 100
                      }%, rgb(180, 183, 191) 100%)`,
                    }}
                  />
                  <input
                    type="range"
                    name="maxPrice"
                    id="maxPrice"
                    min="10000000"
                    max="100000000"
                    value={maxPrice}
                    onChange={(e) =>
                      handleMaxachange(setMaxPrice(e.target.value))
                    }
                    style={{
                      background: `linear-gradient(to right, rgb(111, 0, 255) 0%, rgb(111, 0, 255) ${
                        (maxPrice / 100000000) * 100
                      }%, rgb(180, 183, 191) ${
                        (maxPrice / 100000000) * 100
                      }%, rgb(180, 183, 191) 100%)`,
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className="category-item-right"
          style={{ display: loading ? "block" : "" }}
        >
          {loading ? (
            <div className="category-load">
              <Cardloading />
            </div>
          ) : (
            filteredProducts &&
            filteredProducts?.map((item, index) => {
              if (item?.type === type) {
                return <ProductCard key={index} {...item} />;
              }
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Category;
