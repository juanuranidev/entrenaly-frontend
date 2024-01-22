import React from "react";
import Theme from "./theme/Theme";
import Routes from "routes";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "css/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <Router>
        <Routes />
      </Router>
    </Theme>
  </React.StrictMode>
);
