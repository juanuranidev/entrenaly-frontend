import { useRoutes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import TrainerRoutes from "./TrainerRoutes";

export default function Routes() {
  return useRoutes([TrainerRoutes, PublicRoutes]);
}
