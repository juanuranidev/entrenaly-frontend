import { toast } from "sonner";

export const handleCreateSuccessToast = (message: string) => {
  return toast.success(message);
};

export const handleCreateErrorToast = (message: string) => {
  return toast.error(message);
};
