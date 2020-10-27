import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import profile from "./Images/profile.jpg";

function Header() {
  return (
    <div className="Header ">
      <div className="top__header">
        <NavLink to="/" className="brand__name">
          mobactiv
        </NavLink>

        <div className="menu__itemlist">
          <NavLink
            to="/mileageallowance"
            className="menu__item"
            activeClassName="menuitem__active"
          >
            Mileage Allowance
          </NavLink>
          <NavLink
            to="/user"
            className="menu__item"
            activeClassName="menuitem__active"
          >
            User
          </NavLink>
          <NavLink
            to="/animation"
            className="menu__item"
            activeClassName="menuitem__active"
          >
            Animation
          </NavLink>
        </div>

        <div className="header__profile">
          <img src={profile} className="user__profile" alt="profile" />
          <div className="user__name">lina Doe</div>
          <p className="user__dropdown">
            <i class="arrow down"></i>
          </p>
        </div>
      </div>
      <div className="line__div"></div>
    </div>
  );
}

export default Header;
