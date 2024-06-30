import { lazy, Suspense, ComponentType } from "react";
import { CircularProgress } from "@mui/material";
import PublicLayout from "layouts/public/PublicLayout";

const Loadable =
  (Component: ComponentType<any>) => (props: { [key: string]: any }) =>
    (
      <Suspense fallback={<CircularProgress />}>
        <Component {...props} />
      </Suspense>
    );

const LoginView = Loadable(lazy(() => import("pages/public/login/Login")));
const UpdatesView = Loadable(
  lazy(() => import("pages/public/updates/Updates"))
);
const RegisterView = Loadable(
  lazy(() => import("pages/public/register/Register"))
);

const PublicRoutes = {
  element: <PublicLayout />,
  children: [
    {
      path: "/",
      element: <LoginView />,
    },
    {
      path: "/register",
      element: <RegisterView />,
    },
    {
      path: "/updates",
      element: <UpdatesView />,
    },
  ],
};

export default PublicRoutes;
