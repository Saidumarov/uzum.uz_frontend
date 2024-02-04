import React, { useEffect, useState } from "react";
import Scrol from "./scrol";
import img1 from "../../assets/imgs/sledrImgs/manzura.jpg";
import img2 from "../../assets/imgs/sledrImgs/vel.jpg";
import img3 from "../../assets/imgs/sledrImgs/telvi.jpg";
import img4 from "../../assets/imgs/sledrImgs/yog'.jpg";
import img5 from "../../assets/imgs/sledrImgs/futa1.jpg";
import img6 from "../../assets/imgs/sledrImgs/manzura1.jpg";
import img7 from "../../assets/imgs/sledrImgs/vel1.jpg";
import img8 from "../../assets/imgs/sledrImgs/telvi1.jpg";
import img9 from "../../assets/imgs/sledrImgs/yogg.jpg";
import img10 from "../../assets/imgs/sledrImgs/futa.jpg";

const Scroldata = (product) => {
  const { dataResponse, error, isError, isLoading } = product?.products;
  const [delayedData, setDelayedData] = useState();
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth || document.documentElement.clientWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  const data1 = [
    {
      id: 1,
      img: img1,
      img1: img2,
      img2: img3,
      img3: img4,
      img4: img5,
    },
  ];
  const data2 = [
    {
      id: 1,
      img: img6,
      img1: img7,
      img2: img8,
      img3: img9,
      img4: img10,
    },
  ];

  useEffect(() => {
    if (screenWidth <= 1160) {
      setDelayedData(data2);
    } else if (screenWidth >= 1160) {
      setDelayedData(data1);
    }
  }, [screenWidth]);
  // if (isError) {
  //   return (
  //     <div className="scrol">
  //       <div className="load"></div>
  //     </div>
  //   );
  // }
  return (
    <div>
      {isLoading ? (
        <div className="scrol">
          <div className="load"></div>
        </div>
      ) : (
        delayedData?.map((item) => <Scrol key={item.id} {...item} />)
      )}
    </div>
  );
};

export default Scroldata;
