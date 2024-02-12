import "../../../styles/sass/slider-product.scss";
import ProductCard from "../../market/products/product-card";
function ProductScrol(product) {
  const { dataResponse, isLoading } = product?.products;

  let carouselCard1 = document.getElementById("wrap1");
  let scrollAmount_one = 249;

  const next_one = () => {
    carouselCard1.scrollLeft += scrollAmount_one;
  };

  const prev_one = () => {
    carouselCard1.scrollLeft -= scrollAmount_one;
  };

  return (
    <>
      {!isLoading ? (
        <div className="slider-product-w">
          <h2>
            Kiyimlar
            <span>
              <svg
                data-v-4ea18675=""
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ui-icon title-icon"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.18945 16.4983C8.91426 16.1887 8.94215 15.7146 9.25174 15.4394L13.1211 12L9.25173 8.56055C8.94215 8.28536 8.91426 7.81131 9.18945 7.50172C9.46464 7.19213 9.93869 7.16425 10.2483 7.43943L14.7483 11.4394C14.9084 11.5818 15 11.7858 15 12C15 12.2142 14.9084 12.4182 14.7483 12.5605L10.2483 16.5605C9.93869 16.8357 9.46464 16.8079 9.18945 16.4983Z"
                  fill="black"
                ></path>
              </svg>
            </span>
          </h2>
          <button
            className="swiper-button-prev"
            onClick={prev_one}
            id="prev"
          ></button>
          <div className="slider-product-scrol" id="wrap1">
            <div className="slider-product-scrol_item">
              {dataResponse?.map((item, index) => {
                if (item?.type === "kiyim") {
                  return <ProductCard key={index} {...item} />;
                }
              })}
            </div>
          </div>
          <button
            className="swiper-button-next"
            onClick={next_one}
            id="next"
          ></button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ProductScrol;
