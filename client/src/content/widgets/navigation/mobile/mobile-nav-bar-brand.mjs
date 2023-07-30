import React from "react";
import { NavLink } from "react-router-dom";

export const MobileNavBarBrand = ({ handleClick }) => {
    return (
        <div onClick={handleClick} className="mobile-nav-bar__brand">
            <NavLink to="/">
                <h1 className="white">{process.env.REACT_APP_APPLICATION_NAME}</h1>
            </NavLink>
        </div>
    );
};