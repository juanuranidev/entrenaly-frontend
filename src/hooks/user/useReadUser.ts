import { useState, useEffect } from "react";
import { getUserService } from "services/user/user.services";

export const useReadUser = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleReadUser = async () => {
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
    handleReadUser();
  }, []);

  return { user, isLoading };
};
