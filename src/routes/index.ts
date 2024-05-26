import { useAuthContext } from "contexts/Auth";
import { USER_CONSTANTS } from "lib/constants/user.constants";
import { useRoutes } from "react-router-dom";
import ClientRoutes from "./ClientRoutes";
import PublicRoutes from "./PublicRoutes";
import TrainerRoutes from "./TrainerRoutes";

export default function Routes() {
  const { userData } = useAuthContext();

  if (userData?.role?.name === USER_CONSTANTS.ROLES.TRAINER) {
    return useRoutes([TrainerRoutes]);
  }

  if (userData?.role?.name === USER_CONSTANTS.ROLES.CLIENT) {
    return useRoutes([ClientRoutes]);
  }

  return useRoutes([PublicRoutes]);
}
