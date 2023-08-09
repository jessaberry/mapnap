import React from "react";
import SocialButtons from "../widgets/buttons/social-share.mjs";

export const PageFooter = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <SocialButtons />
            <p className="page-footer-message__headline">
              &copy; Team MapNap 2023.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
