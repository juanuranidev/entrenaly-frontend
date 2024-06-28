import { useAuthContext } from "contexts/auth/Auth";
import { USER_CONSTANTS } from "lib/constants/user/user.constants";
import { useRoutes } from "react-router-dom";
import ClientRoutes from "./user/client/ClientRoutes";
import PublicRoutes from "./public/PublicRoutes";
import TrainerRoutes from "./user/trainer/TrainerRoutes";

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
