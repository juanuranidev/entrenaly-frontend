import { lazy } from "react";
import Loadable from "components/common/Loadable";

const Login = Loadable(lazy(() => import("pages/public/login/Login")));

const PublicRoutes = {
  path: "/",
  element: <Login />,
};

export default PublicRoutes;
