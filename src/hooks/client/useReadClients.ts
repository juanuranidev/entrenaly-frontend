import { useState, useEffect } from "react";
import { getClientsByUserIdService } from "services/client/client.services";

export const useReadClients = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetClientsByUserId = async () => {
    setIsLoading(true);
    try {
      const response = await getClientsByUserIdService();

      setClients(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetClientsByUserId();
  }, []);

  return { clients, isLoading };
};
