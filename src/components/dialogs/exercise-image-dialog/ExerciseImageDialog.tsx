import { Dialog, DialogTitle, IconButton } from "@mui/material";
import Icons from "lib/utils/icons/icons";

type Props = {
  image: string | undefined;
  open: boolean;
  close: () => void;
};

export default function ExerciseImageDialog({ image, open, close }: Props) {
  return (
    <Dialog open={open} onClose={close} fullWidth>
      <DialogTitle display="flex" justifyContent="flex-end">
        <IconButton onClick={close}>
          <Icons.close />
        </IconButton>
      </DialogTitle>
      <img src={image} />
    </Dialog>
  );
}
