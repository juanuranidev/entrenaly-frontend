import { lazy, Suspense } from "react";
import { CircularProgress } from "@mui/material";

const Loadable = (Component: any) => (props: any) =>
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
