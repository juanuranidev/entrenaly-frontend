import { useState, useEffect } from "react";
import { getUserService } from "services/user/user.services";

export const useGetUser = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetUser = async () => {
    setIsLoading(true);
    try {
      const response = await getUserService();

      setUser(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return { user, isLoading };
};
