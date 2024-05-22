import { lazy, Suspense } from "react";
import { CircularProgress } from "@mui/material";
import TrainerLayout from "layouts/trainer/TrainerLayout";

const Loadable = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<CircularProgress />}>
      <Component {...props} />
    </Suspense>
  );

const Plans = Loadable(lazy(() => import("pages/trainer/plans/index/Plans")));
const ViewWeeklyPlan = Loadable(
  lazy(() => import("pages/trainer/plans/view-weekly-plan/ViewWeeklyPlan"))
);
const Clients = Loadable(
  lazy(() => import("pages/trainer/clients/index/Clients"))
);
const Dashboard = Loadable(
  lazy(() => import("pages/trainer/dashboard/Dashboard"))
);
const Exercises = Loadable(
  lazy(() => import("pages/trainer/exercises/Exercises"))
);
const NewWeeklyPlan = Loadable(
  lazy(() => import("pages/trainer/plans/new-weekly-plan/NewWeeklyPlan"))
);
const NewCircuitPlan = Loadable(
  lazy(() => import("pages/trainer/plans/new-circuit-plan/NewCircuitPlan"))
);
const ClientProfile = Loadable(
  lazy(() => import("pages/trainer/clients/profile/ClientProfile"))
);
const EditWeeklyPlan = Loadable(
  lazy(() => import("pages/trainer/plans/edit-weekly-plan/EditWeeklyPlan"))
);
const NotFound = Loadable(
  lazy(() => import("pages/trainer/not-found/NotFound"))
);

const TrainerRoutes = {
  element: <TrainerLayout />,
  children: [
    {
      path: "/trainer/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/",
      element: <Clients />,
    },
    {
      path: "/trainer/clients",
      element: <Clients />,
    },
    {
      path: "/trainer/clients/profile/:id",
      element: <ClientProfile />,
    },
    {
      path: "/trainer/plans",
      element: <Plans />,
    },
    {
      path: "/trainer/plans/new/weekly",
      element: <NewWeeklyPlan />,
    },
    {
      path: "/trainer/plans/edit/weekly/:id",
      element: <EditWeeklyPlan />,
    },
    {
      path: "/trainer/plans/new/circuit",
      element: <NewCircuitPlan />,
    },
    {
      path: "/trainer/plans/view/weekly/:planId",
      element: <ViewWeeklyPlan />,
    },
    {
      path: "/trainer/exercises",
      element: <Exercises />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};

export default TrainerRoutes;
