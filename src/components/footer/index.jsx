import React, { Fragment, memo } from "react";
import { footerLinks, footerImages } from "@/common/js/commonData.js";
import "./index.scss";

const getLinks = (item, index) => {
  return (
    <Fragment key={item.title}>
      <a href={item.link}>{item.title}</a>
      <span className="line">|</span>
    </Fragment>
  );
};

const getImage = (item, index) => {
  return (
    <div className="image" key={index}>
      <a href={item.link}>{item.title}</a>
      <span className="title"></span>
    </div>
  );
};

const Footer = function () {
  return (
    <footer className="footer">
      <div className="f-box">
        <div className="f-left">
          <p>{footerLinks.map((item) => getLinks(item))}</p>
          <p>
            <span>网易公司版权所有©1997-2021</span>
            <span>杭州乐读科技有限公司运营：</span>
            <span>
              <a
                target="_blank"
                href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png"
                rel="noreferrer"
              >
                浙网文[2021] 1186-054号
              </a>
            </span>
          </p>
          <p>
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：ncm5990@163.com</span>
          </p>
          <p>
            <span>粤B2-20090191-18</span>
            <span>工业和信息化部备案管理系统网站</span>
            <span>浙公网安备 33010902002564号</span>
          </p>
        </div>
        <div className="f-right">
          {footerImages.map((item, index) => getImage(item, index))}
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
