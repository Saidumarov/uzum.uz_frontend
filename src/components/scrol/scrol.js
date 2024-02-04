import "../../styles/scrol.css";
import "../../styles/chilla.css";
import { Chilla } from "../index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const Scrol = (itme) => {
  const imageList = [itme?.img, itme?.img1, itme?.img2, itme?.img3, itme?.img4];
  return (
    <div>
      <div className="scrrol">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper1"
        >
          {imageList.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt="" className="imglist1" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="scrrol1">
        <Chilla />
      </div>
    </div>
  );
};

export default Scrol;
