import { useState, useEffect } from "react";
import { getBanner } from "@/api/discover";
import "./index.scss";
function Banner() {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    getBanner().then((res) => {
      console.log(res);
    });
  });
  return <div className="banner">1111</div>;
}

export default Banner;
