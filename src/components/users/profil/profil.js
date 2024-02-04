import React, { useContext, useEffect } from "react";
import myAxios from "../../../api/index";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../loading/loadingproducts";
import { Modal } from "../../modalProvider";
import "../../../styles/sass/Pcard.scss";
import Not from "../../notfount";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
function Profil() {
  const {
    isupdate,
    setIsUpdate,
    setUpdateProduct,
    setProduct,
    setSet,
    setText,
  } = useContext(Modal);
  useEffect(() => {
    setSet(false);
  });
  const deleteProduct = async (id) => {
    if (window.confirm("Bu mahsulotni oʻchirib tashlamoqchimisiz? ")) {
      await myAxios.delete(`delete/` + id);
      toast.error("Mahsulot o'chirildi ");
      setTimeout(() => {
        window.location.reload();
      }, 600);
    }
  };

  const userLocalApi = localStorage?.getItem("contactApi");

  const userApi = userLocalApi ? JSON?.parse(userLocalApi) : null;
  const man = { id: userApi?._id };
  let localUser = userApi?._id;

  const updateHandler = (id) => {
    setUpdateProduct({
      name: "",
      user: man,
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
      id: id,
    });
    setIsUpdate(true);
  };

  const fetchPost = async () => {
    const response = await myAxios.get("product");
    return response?.data;
  };
  const { data: dataResponse, isLoading } = useQuery("posts", fetchPost);

  if (isLoading) {
    return <Loading />;
  }

  if (!dataResponse || dataResponse.length === 0) {
    return (
      <div className="profil-card">
        <Not />
      </div>
    );
  }

  let matchingProducts = [];

  return (
    <>
      <div className="profil-card">
        {!isupdate ? (
          <div>
            {dataResponse?.forEach((item, productIndex) => {
              let summ = item?.per_month / 12;
              if (item?.user?.id === localUser) {
                matchingProducts?.push(
                  <div key={productIndex} className="card-profil">
                    <div className="card-top-profil">
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
                      >
                        {item.imgags.map((url, imgIndex) => (
                          <SwiperSlide key={imgIndex}>
                            <img
                              src={url?.img}
                              alt="Note not found"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                  "https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg";
                              }}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <div className="card-bootom-profil">
                      <p className="sotuv-pro">
                        <b>Sotuvchi:</b> {item?.name}
                      </p>
                      <p className="dec">
                        <b>Haqida:</b> {item?.dec}
                      </p>
                      <span className="oyiga-pro">
                        {summ
                          .toFixed()
                          ?.toString()
                          ?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                        so'm/oyiga
                      </span>
                      <p className="narx-no-pro">
                        <s>
                          {item?.old_price
                            ?.toString()
                            ?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                          so'm
                        </s>
                      </p>
                      <p className="narx-profil">
                        {item?.price
                          ?.toString()
                          ?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                        so'm
                      </p>
                      <p className="dona">
                        {item?.piece
                          ?.toString()
                          ?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                        dona bor.
                      </p>
                      <div className="btn-ww">
                        <div className="btn-wr">
                          <button
                            onClick={() => deleteProduct(item?._id)}
                            className="btn1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="14"
                              viewBox="0 0 448 512"
                            >
                              <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => {
                              updateHandler(item?._id);
                              setProduct(true);
                              setText(" Mahsulotni tahrirlash");
                            }}
                            className="btnn"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="16"
                              viewBox="0 0 512 512"
                            >
                              <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
            {matchingProducts}
            {dataResponse?.length > 0 && matchingProducts?.length === 0 && (
              <div>
                <Not />
              </div>
            )}
          </div>
        ) : null}
      </div>
      ;
    </>
  );
}

export default Profil;
