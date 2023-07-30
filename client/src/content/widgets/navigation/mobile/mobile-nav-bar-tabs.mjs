import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { MobileNavBarTab } from "./mobile-nav-bar-tab.mjs";
import { NavBarTab } from "../desktop/nav-bar-tab.mjs";

export const MobileNavBarTabs = ({ handleClick }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab path="/" label="Home" />

      {isAuthenticated && (
        <>
          <MobileNavBarTab path="/dashboard" label="Dashboard" />
          <MobileNavBarTab path="/map" label="Map" />
          <MobileNavBarTab path="/budget" label="Budget" />
          <MobileNavBarTab path="/memory" label="Memory" />
        </>
      )}
    </div>
  );
};
