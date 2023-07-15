import { NavLink } from "react-router-dom";
// import Experience from "./experience/components/Experience";
import Memory from "./memories/components/Memory";
import Dashboard from "./Dashboard/components/Dashboard";
import Budget from "./budget/BudgetDashboard.js";
import Trip from "./trip/components/Trip";
import Logout from "./_toRemove/Logout";
import MapView from "./mapview/components/MapView";
import SocialButtons from "./sharing/SocialButtons";
import React from "react";

const navPages = [
  { path: "/dashboard", label: "Dashboard", component: Dashboard },
  { path: "/map", label: "Map", component: MapView },
  { path: "/budget", label: "Budget", component: Budget },
  { path: "/trip", label: "TRIP", component: Trip },
  // { path: "/experience", label: "EXPERIENCE", component: Experience },
  { path: "/memory", label: "MEMORY", component: Memory },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-links">
        {navPages.map((page, index) => (
          <li key={index}>
            <NavLink to={page.path} className="active" exact="true">
              {page.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <SocialButtons />

      <div className="nav-logout">
        <Logout />
      </div>
    </div>
  );
};

export default Navbar;
