import "./index.scss";
import { Carousel } from "antd";
import { useRef } from "react";
function NewDiscList(porps) {
  const { newDiscList } = porps;
  const ref = useRef();
  const discItem = (data) => {
    return (
      <div className="disc-box" key={data.id}>
        <div className="disc-div">
          <img src={data.blurPicUrl} alt={data.name} />
          <div className="img-mask"></div>
        </div>
        <div>
          <div className="disc-name word-hidden">{data.name}</div>
          <div className="disc-artist word-hidden">{data.artist.name}</div>
        </div>
      </div>
    );
  };
  const operate = (params) => {
    if (params === "prev") {
      ref.current.prev();
    } else {
      ref.current.next();
    }
  };
  return (
    <div className="new-disc">
      <div
        className="left sprite_02 icon-btn"
        onClick={() => operate("prev")}
      ></div>
      <div className="carousel-box">
        <Carousel dots={false} ref={ref}>
          {newDiscList &&
            [0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="disc-wrapper">
                    {newDiscList &&
                      newDiscList
                        .slice(item * 5, (item + 1) * 5)
                        .map((item2) => {
                          return discItem(item2);
                        })}
                  </div>
                </div>
              );
            })}
        </Carousel>
      </div>
      <div
        className="right sprite_02 icon-btn"
        onClick={() => operate("next")}
      ></div>
    </div>
  );
}

export default NewDiscList;
