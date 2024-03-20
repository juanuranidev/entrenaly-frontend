import { errorToast } from "lib/utils/toast";
import {
  getUserByAuthIdService,
  getUserSessionService,
} from "services/user/user.services";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }: any) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleManageSession = async () => {
    setIsLoading(true);
    try {
      const response = await getUserSessionService();
      setUserData(response);
    } catch (error) {
      navigate("");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleManageSession();
  }, []);

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
