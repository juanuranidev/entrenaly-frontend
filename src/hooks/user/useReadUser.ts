import { User } from "lib/types/user/user.types";
import { readUserService } from "services/user/user.services";
import { useState, useEffect } from "react";

type UseReadUser = {
  user: User | null;
  isLoading: boolean;
};

export const useReadUser = (): UseReadUser => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleReadUser = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await readUserService();

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
