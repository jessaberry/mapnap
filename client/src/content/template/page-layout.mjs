import React from "react";
import { NavBar } from "../widgets/navigation/nav-bar.mjs";
import { PageFooter } from "./page-footer.mjs";

export const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <NavBar />
      <div className="page-layout__content">{children}</div>
      <PageFooter />
    </div>
  );
};
