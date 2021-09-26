import React, { Component } from "react";
import "./index.scss";
import RightBox from "../right-box";
import LeftBox from "../left-box";

function MiddleContainer() {
  return (
    <div className="middle-container">
      <div className="left">
        <LeftBox />
      </div>
      <div className="right">
        <RightBox />
      </div>
    </div>
  );
}

export default MiddleContainer;
