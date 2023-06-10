import { NavLink } from "react-router-dom";
import Experience from "./experience/components/Experience";
import Memory from "./memories/components/Memory";

// TODO: REPLACE THIS WITH ACTUAL COMPONENTS IN navbar
const PlaceholderComponent = () => {
  return <div>Placeholder</div>;
};

const navPages = [
  { path: "/", label: "Dashboard", component: PlaceholderComponent },
  { path: "/map", label: "Map", component: PlaceholderComponent },
  { path: "/experience", label: "EXPERIENCE", component: Experience },
  { path: "/memory", label: "MEMORY", component: Memory }
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
