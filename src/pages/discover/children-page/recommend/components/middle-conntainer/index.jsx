import React, { Component } from "react";
import "./index.scss";
import LeftBox from "../left-box";

function MiddleContainer() {
  return (
    <div className="middle-container">
      <div className="left">ZUOB</div>
      <div className="right">
        <LeftBox />
      </div>
    </div>
  );
}

export default MiddleContainer;
