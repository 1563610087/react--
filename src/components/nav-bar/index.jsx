import React, { memo } from "react";
import { dicoverMenu } from "@/common/js/commonData.js";
import "./index.scss";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      {dicoverMenu.map((item) => {
        return (
          <span key={item.title}>
            <NavLink to={item.link}>{item.title}</NavLink>
          </span>
        );
      })}
    </nav>
  );
}

export default memo(NavBar);
