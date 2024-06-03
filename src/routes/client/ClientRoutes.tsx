import { lazy, Suspense } from "react";
import { CircularProgress } from "@mui/material";
import ClientLayout from "layouts/client/ClientLayout";
import Plans from "pages/client/plans/index/Plans";

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<CircularProgress />}>
      <Component {...props} />
    </Suspense>
  );

const NotFound = Loadable(
  lazy(() => import("pages/trainer/not-found/NotFound"))
);
const ViewWeeklyPlan = Loadable(
  lazy(() => import("pages/client/plans/view-weekly-plan/ViewWeeklyPlan"))
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
      path: "*",
      element: <NotFound />,
    },
  ],
};

export default ClientRoutes;
