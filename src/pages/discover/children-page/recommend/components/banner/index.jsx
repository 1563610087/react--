import { useState, useEffect, useRef, useCallback } from "react";
import { Carousel } from "antd";
import { getBanner } from "@/api/discover";
import "./index.scss";
function Banner() {
  const [banner, setBanner] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    getBanner().then((res) => {
      if (res.code === 200) {
        setBanner(res.banners);
      }
    });
  }, []);
  const bannerRef = useRef(null);
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);
  // 其他的逻辑代码 memoize
  const bgImage =
    banner &&
    banner[currentIndex] &&
    banner[currentIndex].imageUrl + "?imageView&blur=40x20";
  const style = {
    backgroundImage: `url(${bgImage})`,
  };
  return (
    <div className="banner" style={style}>
      <div className="banner-wrapper">
        <div className="left">
          <Carousel
            effect="fade"
            ref={bannerRef}
            autoplay={true}
            beforeChange={bannerChange}
          >
            {banner &&
              banner.map((item) => {
                return (
                  <div key={item.url}>
                    <img src={item.imageUrl} alt="" />
                  </div>
                );
              })}
          </Carousel>
        </div>
        <div className="right">
          <a
            target="_blank"
            href="https://d1.music.126.net/dmusic/cloudmusicsetup2.8.0.198822.exe"
            rel="noreferrer"
          >
            &nbsp;
          </a>
        </div>
        <div className="btn">
          <span onClick={() => bannerRef.current.prev()}></span>
          <span onClick={() => bannerRef.current.next()}></span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
