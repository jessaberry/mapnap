import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import  {App}  from "./App.js";
import { Auth0ProviderWithNavigate } from "./helpers/Auth0/auth0-provider-with-navigate.mjs";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";
import "./styles/styles.css";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>

        <App />

      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
