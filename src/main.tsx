import React from "react";
import Routes from "routes";
import ReactDOM from "react-dom/client";
import ThemeCustomization from "./themes";
import { BrowserRouter as Router } from "react-router-dom";
import "css/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeCustomization>
      <Router>
        <Routes />
      </Router>
    </ThemeCustomization>
  </React.StrictMode>
);
