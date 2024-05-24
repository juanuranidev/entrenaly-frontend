import React from "react";
import { Toaster } from "sonner";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "contexts/Auth";
import initializeFirebaseApp from "./lib/config/firebase";
import ReactDOM from "react-dom/client";
import Routes from "routes";
import Theme from "./lib/theme/Theme";
import "css/index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeContextProvider } from "contexts/Theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <Toaster richColors />
      <Theme>
        {initializeFirebaseApp()}
        <Router>
          <ThemeContextProvider>
            <AuthContextProvider>
              <Routes />
            </AuthContextProvider>
          </ThemeContextProvider>
        </Router>
      </Theme>
    </>
  </React.StrictMode>
);
