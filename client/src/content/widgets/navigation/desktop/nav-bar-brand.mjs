import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <h1 className="white">{process.env.REACT_APP_APPLICATION_NAME}</h1>
      </NavLink>
    </div>
  );
};
