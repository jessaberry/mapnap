import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { NavBarTab } from "./nav-bar-tab.mjs";

export const NavBarTabs = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__tabs">
      <NavBarTab path="/" label="Home" />

      {isAuthenticated && (
        <>
          <NavBarTab path="/dashboard" label="Dashboard" />
          <NavBarTab path="/map" label="Map" />
          <NavBarTab path="/budget" label="Budget" />
          <NavBarTab path="/memory" label="Memory" />
        </>
      )}
    </div>
  );
};
