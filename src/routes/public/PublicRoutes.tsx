import { lazy, Suspense, ComponentType } from "react";
import { CircularProgress } from "@mui/material";

const Loadable =
  (Component: ComponentType<any>) => (props: { [key: string]: any }) =>
    (
      <Suspense fallback={<CircularProgress />}>
        <Component {...props} />
      </Suspense>
    );

const LoginView = Loadable(lazy(() => import("pages/public/login/Login")));
const RegisterView = Loadable(
  lazy(() => import("pages/public/register/Register"))
);

const PublicRoutes = {
  children: [
    {
      path: "/",
      element: <LoginView />,
    },
    {
      path: "/register",
      element: <RegisterView />,
    },
  ],
};

export default PublicRoutes;
