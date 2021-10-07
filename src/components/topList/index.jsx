import "./index.scss";
import React, { memo } from "react";
function TopList(props) {
  const { coverImgUrl, tracks, name } = props.data;

  const getItem = (item, index) => {
    return (
      <li key={item.id}>
        <span className={index < 3 ? "rank-top" : ""}>{index + 1}</span>
        <span className="word-hidden">
          <a href="#">{item.name}</a>
        </span>
      </li>
    );
  };
  return (
    <div className="toplist">
      <div className="top-warpper">
        <div className="top-left">
          <img src={coverImgUrl} alt="" />
        </div>
        <div className="top-right">
          <h3>{name}</h3>
          <div>ss</div>
        </div>
      </div>
      <ul className="middle-song">
        {tracks &&
          tracks.slice(0, 10).map((item, index) => getItem(item, index))}
        <li>查看全部&gt;</li>
      </ul>
    </div>
  );
}

export default memo(TopList);
