import { toast } from "sonner";

export const handleCreateSuccessToast = (message: string): any => {
  return toast.success(message);
};

export const handleCreateErrorToast = (message: string): any => {
  return toast.error(message);
};
