import { lazy, Suspense, ComponentType } from "react";
import { CircularProgress } from "@mui/material";
import TrainerLayout from "layouts/user/trainer/TrainerLayout";

const Loadable =
  (Component: ComponentType<any>) => (props: { [key: string]: any }) =>
    (
      <Suspense fallback={<CircularProgress />}>
        <Component {...props} />
      </Suspense>
    );

const Plans = Loadable(
  lazy(() => import("pages/user/trainer/plans/index/Plans"))
);
const Profile = Loadable(
  lazy(() => import("pages/user/trainer/user/profile/Profile"))
);
const ViewWeeklyPlan = Loadable(
  lazy(() => import("pages/user/trainer/plans/view-weekly-plan/ViewWeeklyPlan"))
);
const Clients = Loadable(
  lazy(() => import("pages/user/trainer/clients/index/Clients"))
);
const Exercises = Loadable(
  lazy(() => import("pages/user/trainer/exercises/index/Exercises"))
);
const NewWeeklyPlan = Loadable(
  lazy(() => import("pages/user/trainer/plans/new-weekly-plan/NewWeeklyPlan"))
);
const ClientProfile = Loadable(
  lazy(() => import("pages/user/trainer/clients/profile/ClientProfile"))
);
const EditWeeklyPlan = Loadable(
  lazy(() => import("pages/user/trainer/plans/edit-weekly-plan/EditWeeklyPlan"))
);
const NotFound = Loadable(
  lazy(() => import("pages/user/trainer/not-found/NotFound"))
);

const TrainerRoutes = {
  element: <TrainerLayout />,
  children: [
    {
      path: "/",
      element: <Clients />,
    },
    {
      path: "/trainer/clients",
      element: <Clients />,
    },
    {
      path: "/trainer/clients/profile/:clientId",
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
      path: "/trainer/plans/edit/weekly/:planId",
      element: <EditWeeklyPlan />,
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
      path: "/trainer/profile",
      element: <Profile />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};

export default TrainerRoutes;
