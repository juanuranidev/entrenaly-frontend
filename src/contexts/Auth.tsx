import { useEffect, useState, createContext, useContext } from "react";
import { getUserSessionService } from "services/user/user.services";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const initialContextValue = {
  userData: null,
};

export const AuthContext = createContext<any>(initialContextValue);
export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleManageSession = async () => {
    setIsLoading(true);
    try {
      const response: any = await getUserSessionService();
      if (!response) {
        throw "Not an user in session";
      }

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.authId}`;

      setUserData(response);
    } catch (error) {
      navigate("");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleManageSession();
  }, [location.pathname]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <AuthContext.Provider
      value={{
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
