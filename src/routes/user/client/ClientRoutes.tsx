import { lazy, Suspense, ComponentType } from "react";
import { CircularProgress } from "@mui/material";
import ClientLayout from "layouts/user/client/ClientLayout";
import Plans from "pages/user/client/plans/index/Plans";

const Loadable =
  (Component: ComponentType<any>) => (props: { [key: string]: any }) => (
    <Suspense fallback={<CircularProgress />}>
      <Component {...props} />
    </Suspense>
  );

const NotFound = Loadable(
  lazy(() => import("pages/user/trainer/not-found/NotFound"))
);
const ViewWeeklyPlan = Loadable(
  lazy(() => import("pages/user/client/plans/view-weekly-plan/ViewWeeklyPlan"))
);
const ViewCircuitPlan = Loadable(
  lazy(
    () => import("pages/user/client/plans/view-circuit-plan/ViewCircuitPlan")
  )
);

const ClientRoutes = {
  element: <ClientLayout />,
  children: [
    {
      path: "/client/plans",
      element: <Plans />,
    },
    {
      path: "/client/plans/view/weekly/:planId",
      element: <ViewWeeklyPlan />,
    },
    {
      path: "/client/plans/view/circuit/:planId",
      element: <ViewCircuitPlan />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};

export default ClientRoutes;
