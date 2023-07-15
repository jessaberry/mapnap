import React from "react";
import { NavBar } from "../widgets/navigation/nav-bar.mjs";

export const CallbackPage = () => {
  return (
    <div className="page-layout">
      <NavBar />
      <div className="page-layout__content" />
    </div>
  );
};