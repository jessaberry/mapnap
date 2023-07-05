import { NavLink } from "react-router-dom";
// import Experience from "./experience/components/Experience";
import Memory from "./memories/components/Memory";
import Dashboard from "./Dashboard/components/Dashboard";
import Budget from "./budget/BudgetDashboard.js";
import Trip from "./trip/components/Trip";
import Login from "./sharing/Login";

// TODO: REPLACE THIS WITH ACTUAL COMPONENTS IN navbar
const PlaceholderComponent = () => {
  return <div>Placeholder</div>;
};

const navPages = [
  { path: "/", label: "Dashboard", component: Dashboard },
  { path: "/map", label: "Map", component: PlaceholderComponent },
  { path: "/budget", label: "Budget", component: Budget},
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
            <NavLink to={page.path} activeClassName="active">
              {page.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="nav-login">
        <Login />
      </div>
    </div>
  );
};

export default Navbar;
