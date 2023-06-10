import { NavLink } from "react-router-dom";
import Experience from "./experience/components/Experience";
import Dashboard from "./Dashboard/components/Dashboard";

// TODO: REPLACE THIS WITH ACTUAL COMPONENTS IN navbar
const PlaceholderComponent = () => {
  return <div>Placeholder</div>;
};

const navPages = [
  { path: "/", label: "Dashboard", component: Dashboard },
  { path: "/map", label: "Map", component: PlaceholderComponent },
  { path: "/experience", label: "EXPERIENCE", component: Experience },
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
    </div>
  );
};

export default Navbar;
