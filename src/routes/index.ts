import { useAuthContext } from "contexts/Auth";
import { USER_CONSTANTS } from "lib/constants/user.constants";
import { useRoutes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import TrainerRoutes from "./TrainerRoutes";

export default function Routes() {
  const { userData } = useAuthContext();

  if (userData?.role?.name === USER_CONSTANTS.ROLES.TRAINER) {
    return useRoutes([TrainerRoutes]);
  }

  return useRoutes([PublicRoutes]);
}
