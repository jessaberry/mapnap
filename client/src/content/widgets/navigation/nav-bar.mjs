import React from "react";
import { NavBarBrand } from "./nav-bar-brand.mjs";
import { NavBarButtons } from "./nav-bar-buttons.mjs";
import { NavBarTabs } from "./nav-bar-tabs.mjs";

export const NavBar = () => {
  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <NavBarBrand />
        <NavBarTabs />
        <NavBarButtons />
      </nav>
    </div>
  );
};
