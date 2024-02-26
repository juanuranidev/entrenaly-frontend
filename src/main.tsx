import React from "react";
import Theme from "./theme/Theme";
import Routes from "routes";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
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
