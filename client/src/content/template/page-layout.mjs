import React from "react";
import { NavBar } from "../widgets/navigation/desktop/nav-bar.mjs";
import { PageFooter } from "./page-footer.mjs";
import { MobileNavBar } from "../widgets/navigation/mobile/mobile-nav-bar.mjs";

export const PageLayout = ({ children }) => {
  return (
    <div className="page-layout">
      <NavBar />
      <MobileNavBar />
      <div className="page-layout__content">{children}</div>
      <PageFooter />
    </div>
  );
};
