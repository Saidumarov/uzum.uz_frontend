import React, { useState } from "react";
import "../../styles/chilla.css";
const Chilla = () => {
  const [state, setState] = useState();

  return (
    <div>
      <h2 className="bb">
        Chilla Bozor
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
      <div className="mobilchil">
        <p className="mobc" onClick={() => setState(`8%`)}>
          Chilla Bozor
        </p>
        <p className="mobc" onClick={() => setState(`41%`)}>
          Mashhur
        </p>
        <p className="mobc" onClick={() => setState(`70%`)}>
          Yangi
        </p>
        <div className="scle" style={{ left: state }}></div>
      </div>
    </div>
  );
};

export default Chilla;
