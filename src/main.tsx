import React from "react";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import { AuthContextProvider } from "contexts/Auth";
import { ThemeContextProvider } from "contexts/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import initializeFirebaseApp from "./lib/config/firebase";
import * as serviceWorkerRegistration from "./lib/config/serviceWorkerRegistration";
import ReactDOM from "react-dom/client";
import Routes from "routes";
import Theme from "./lib/theme/Theme";
import "css/index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <Analytics />
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

serviceWorkerRegistration.register();
