import { Dialog } from "@mui/material";

type Props = {
  image: string | undefined;
  open: boolean;
  close: () => void;
};

export default function ExerciseImageDialog({ image, open, close }: Props) {
  return (
    <Dialog open={open} onClose={close} fullWidth>
      <img src={image} />
    </Dialog>
  );
}
