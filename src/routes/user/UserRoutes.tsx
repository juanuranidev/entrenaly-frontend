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
const Profile = Loadable(
  lazy(() => import("pages/trainer/user/profile/Profile"))
);
const ViewWeeklyPlan = Loadable(
  lazy(() => import("pages/trainer/plans/view-weekly-plan/ViewWeeklyPlan"))
);
const Clients = Loadable(
  lazy(() => import("pages/trainer/clients/index/Clients"))
);

const Exercises = Loadable(
  lazy(() => import("pages/trainer/exercises/index/Exercises"))
);
const NewWeeklyPlan = Loadable(
  lazy(() => import("pages/trainer/plans/new-weekly-plan/NewWeeklyPlan"))
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

const UserRoutes = {
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

export default UserRoutes;
