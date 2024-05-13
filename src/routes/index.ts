import { useAuthContext } from "contexts/Auth";
import { useRoutes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import TrainerRoutes from "./TrainerRoutes";

export default function Routes() {
  const { userData } = useAuthContext();

  return useRoutes([TrainerRoutes, PublicRoutes]);
}
