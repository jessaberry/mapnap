import React from "react";

export const HeroBanner = () => {
  const logo = "https://static.thenounproject.com/png/1429513-200.png";

  return (
    <div className="hero-banner hero-banner--sauder">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="React logo" />
      </div>
      <h1 className="hero-banner__headline">
        Welcome to {process.env.REACT_APP_APPLICATION_NAME}!
      </h1>
    </div>
  );
};
