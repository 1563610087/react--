import React, { memo } from "react";
import { dicoverMenu } from "@/common/js/commonData.js";
import "./index.scss";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-bar">
      <div>
        <ul>
          {dicoverMenu.map((item) => {
            return (
              <li key={item.title}>
                <NavLink to={item.link} activeClassName="menu-active">
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default memo(NavBar);
