import React from "react";
import { Toaster } from "sonner";
import { BrowserRouter as Router } from "react-router-dom";
import initializeFirebaseApp from "./lib/config/firebase";
import ReactDOM from "react-dom/client";
import Routes from "routes";
import Theme from "./theme/Theme";
import "css/index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      {initializeFirebaseApp()}
      <Toaster richColors />
      <Router>
        <Routes />
      </Router>
    </Theme>
  </React.StrictMode>
);
