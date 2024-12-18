import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./i18n";
import Login from "./components/Login";

import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-hkj76rxtirg2jpfw.us.auth0.com"
      clientId="owcKfiqfMbfBFcoZuw3Mayf7WznFNPk7"
      redirectUri={window.location.origin}
    >
      <Login />
    </Auth0Provider>
  </React.StrictMode>
);
