import { Dialog, Grid, Typography, Button } from "@mui/material";
import { useThemeContext } from "contexts/Theme";

type Props = {
  open: boolean;
  message: string;
  onConfirm: () => void;
  onClose: () => void;
};

export default function ConfirmDialog({
  open,
  onClose,
  message,
  onConfirm,
}: Props) {
  const { theme } = useThemeContext();

  return (
    <Dialog open={open} onClose={close}>
      <Grid container spacing={theme?.spacing(4)} mt={theme?.spacing(0.5)}>
        <Grid item xs={12} mb={theme?.spacing(1)}>
          <Typography align="center" fontWeight={600} fontSize={16}>
            {message}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          gap={theme?.spacing(2)}
          justifyContent="flex-end"
        >
          <Button variant="contained" color="error" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="contained" color="primary" onClick={onConfirm}>
            Aceptar
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
}
