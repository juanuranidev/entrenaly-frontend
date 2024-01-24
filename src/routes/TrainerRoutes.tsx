import { lazy } from "react";
import Loadable from "components/common/Loadable";
import TrainerLayout from "layout/trainer/TrainerLayout";

const Dashboard = Loadable(
  lazy(() => import("pages/trainer/dashboard/Dashboard"))
);
const Clients = Loadable(lazy(() => import("pages/trainer/clients/Clients")));
const Plans = Loadable(lazy(() => import("pages/trainer/plans/index/Plans")));
const NewWeeklyPlan = Loadable(
  lazy(() => import("pages/trainer/plans/new-weekly-plan/NewWeeklyPlan"))
);
const NewCircuitPlan = Loadable(
  lazy(() => import("pages/trainer/plans/new-circuit-plan/NewCircuitPlan"))
);

const Exercises = Loadable(
  lazy(() => import("pages/trainer/exercises/Exercises"))
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
      path: "/plans/new/weekly",
      element: <NewWeeklyPlan />,
    },
    {
      path: "/plans/new/circuit",
      element: <NewCircuitPlan />,
    },
    {
      path: "/exercises",
      element: <Exercises />,
    },
  ],
};

export default TrainerRoutes;
