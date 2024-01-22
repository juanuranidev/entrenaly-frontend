import { lazy } from "react";
import Loadable from "components/common/Loadable";
import TrainerLayout from "layout/trainer/TrainerLayout";
import NewPlanV2 from "pages/trainer/plans/NewPlanV2";

const Dashboard = Loadable(
  lazy(() => import("pages/trainer/dashboard/Dashboard"))
);
const Clients = Loadable(lazy(() => import("pages/trainer/clients/Clients")));
const Plans = Loadable(lazy(() => import("pages/trainer/plans/index/Plans")));
const NewPlan = Loadable(
  lazy(() => import("pages/trainer/plans/new-plan/NewPlan"))
);

const TrainerRoutes = {
  path: "/",
  element: <TrainerLayout />,
  children: [
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/clients",
      element: <Clients />,
    },
    {
      path: "/plans",
      element: <Plans />,
    },
    {
      path: "/plans/new",
      element: <NewPlan />,
    },
    {
      path: "/plans/new/v2",
      element: <NewPlanV2 />,
    },
  ],
};

export default TrainerRoutes;
