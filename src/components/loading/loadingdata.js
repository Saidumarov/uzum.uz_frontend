import React, { useEffect, useState } from "react";

const Loadindata = () => {
  const [load, setLoad] = useState();
  useEffect(() => {
    const elements = [];
    function loading() {
      for (let i = 1; i <= 10; i++) {
        elements.push(
          <div key={i} className="content1">
            <div className="conimg">
              <div className="lo1"></div>
            </div>
            <div className="load1">
              <div className="lo2"></div>
            </div>
            <div className="load2">
              <div className="lo3"></div>
            </div>
            <div className="load3">
              <div className="lo4"></div>
            </div>
            <div className="load4">
              <div className="lo5"></div>
            </div>
          </div>
        );
      }

      setLoad(elements);
    }
    loading();
  }, []);

  return (
    <div>
      <div className="cload">
        <div className="lo6"></div>
      </div>
      <div className="cload1">
        <div className="loo1">
          <div className="lo7"></div>
        </div>
        <div className="loo2">
          <div className="lo8"></div>
        </div>
        <div className="loo3">
          <div className="lo9"></div>
        </div>
      </div>
      <div className="data1">{load}</div>
    </div>
  );
};

export default Loadindata;

export function Cardloading() {
  const [load, setLoad] = useState();
  useEffect(() => {
    const elements = [];
    function loading() {
      for (let i = 1; i <= 12; i++) {
        elements.push(
          <div key={i} className="content1">
            <div className="conimg">
              <div className="lo1"></div>
            </div>
            <div className="load1">
              <div className="lo2"></div>
            </div>
            <div className="load2">
              <div className="lo3"></div>
            </div>
            <div className="load3">
              <div className="lo4"></div>
            </div>
            <div className="load4">
              <div className="lo5"></div>
            </div>
          </div>
        );
      }

      setLoad(elements);
    }
    loading();
  }, []);

  return <div className="load-res">{load}</div>;
}

export function LoadingLeft() {
  return (
    <div className="loading-left">
      <div className="div-load-left1"></div>
      <div className="div-load-left2"></div>
      <div className="div-load-left3"></div>
      <div className="div-load-left4"></div>
      <div className="div-load-left1"></div>
      <div className="div-load-left2"></div>
      <div className="div-load-left3"></div>
      <div className="div-load-left4"></div>
      <div className="div-load-left1"></div>
      <div className="div-load-left2"></div>
      <div className="div-load-left3"></div>
      <div className="div-load-left4"></div>
    </div>
  );
}
