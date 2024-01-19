import { lazy } from "react";
import Loadable from "components/Loadable";
import TrainerLayout from "layout/trainer/TrainerLayout";

const Dashboard = Loadable(
  lazy(() => import("pages/trainer/dashboard/Dashboard"))
);
const Clients = Loadable(lazy(() => import("pages/trainer/clients/Clients")));
const Plans = Loadable(lazy(() => import("pages/trainer/plans/Plans")));

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
  ],
};

export default TrainerRoutes;
