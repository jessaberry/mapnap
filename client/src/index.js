import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.js";
import { Auth0ProviderWithNavigate } from "./helpers/Auth0/auth0-provider-with-navigate.mjs";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import "./styles/index.css";
import "./styles/styles.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
