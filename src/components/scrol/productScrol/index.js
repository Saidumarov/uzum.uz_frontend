import "../../../styles/sass/slider-product.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProductCard from "../../market/products/product-card";
function ProductScrol(product) {
  const { dataResponse, error, isError, isLoading } = product?.products;

  return (
    <>
      {!isLoading ? (
        <div className="slider-product-w">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              "@2.00": {
                slidesPerView: 5,
                spaceBetween: 60,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {dataResponse?.map((item, index) => (
              <SwiperSlide key={index}>
                <ProductCard key={item?._id} {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ProductScrol;
