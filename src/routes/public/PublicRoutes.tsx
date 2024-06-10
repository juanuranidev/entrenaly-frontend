import { lazy, Suspense, ComponentType } from "react";
import { CircularProgress } from "@mui/material";

const Loadable =
  (Component: ComponentType<any>) => (props: { [key: string]: any }) =>
    (
      <Suspense fallback={<CircularProgress />}>
        <Component {...props} />
      </Suspense>
    );

const Login = Loadable(lazy(() => import("pages/public/login/Login")));

const PublicRoutes = {
  path: "/",
  element: <Login />,
};

export default PublicRoutes;
