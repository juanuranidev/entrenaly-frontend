import { toast } from "sonner";

export const successToast = (message: string) => {
  return toast.success(message);
};

export const errorToast = (message: string) => {
  return toast.error(message);
};
