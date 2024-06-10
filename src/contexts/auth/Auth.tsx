import { useEffect, useState, createContext, useContext } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { getUserSessionService } from "services/user/user.services";
import { Box } from "@mui/material";
import axios from "axios";
import LogoWithVersion from "components/common/logo-with-version/LogoWithVersion";

const initialContextValue = {
  userData: null,
};

export const AuthContext = createContext<any>(initialContextValue);
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [params] = useSearchParams();
  const invite = params.get("invite");

  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleManageSession = async () => {
    setIsLoading(true);
    try {
      const response: any = await getUserSessionService();
      if (!response) throw "Not an user in session";

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.authId}`;

      setUserData(response);
    } catch (error) {
      navigate(invite ? `?invite=${invite}` : "");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleManageSession();
  }, [location.pathname]);

  if (isLoading && !userData) {
    return (
      <Box
        width="100%"
        display="flex"
        height="100dvh"
        alignItems="center"
        justifyContent="center"
      >
        <LogoWithVersion hideVersion />
      </Box>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
