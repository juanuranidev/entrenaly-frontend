import { User } from "lib/types/user/user.types";
import { getUserService } from "services/user/user.services";
import { useState, useEffect } from "react";

export const useReadUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleReadUser = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response: User = await getUserService();

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
