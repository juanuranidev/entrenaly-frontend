import { useEffect, useState, createContext, useContext } from "react";
import { getUserSessionService } from "services/user/user.services";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import axios from "axios";
import Logo from "components/common/logo/Logo";

const initialContextValue = {
  userData: null,
};

export const AuthContext = createContext<any>(initialContextValue);
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: any) => {
  const location = useLocation();

  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleManageSession = async () => {
    setIsLoading(true);
    try {
      const response = await getUserSessionService();
      if (!response) throw "Not an user in session";

      axios.defaults.headers.common["Authorization"] =
        `Bearer ${response.authId}`;

      setUserData(response);
    } catch (error) {
      console.log(error);
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
        <Logo />
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
