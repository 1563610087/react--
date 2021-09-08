import React, { memo } from "react";
import { dicoverMenu } from "@/common/js/commonData.js";
import "./index.scss";
import { NavLink } from "react-router-dom";

function AppNavBar() {
  return (
    <nav>
      {dicoverMenu.map((item) => {
        return (
          <span>
            <NavLink to={item.link}>{item.title}</NavLink>
          </span>
        );
      })}
    </nav>
  );
}

export default memo(AppNavBar);
