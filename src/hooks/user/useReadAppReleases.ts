import { AppRelease } from "lib/types/user/user.types";
import { useState, useEffect } from "react";
import { readAppReleasesService } from "services/user/user.services";

type UseReadAppReleases = {
  appReleases: AppRelease[] | [];
  isLoading: boolean;
};

export const useReadAppReleases = (): UseReadAppReleases => {
  const [isLoading, setIsLoading] = useState(true);
  const [appReleases, setAppReleases] = useState<AppRelease[] | []>([]);

  const handleReadAppReleases = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response: AppRelease[] | [] = await readAppReleasesService();

      setAppReleases(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleReadAppReleases();
  }, []);

  return { appReleases, isLoading };
};
