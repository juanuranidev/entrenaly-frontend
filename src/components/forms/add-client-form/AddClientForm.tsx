import {
  Box,
  Grid,
  Button,
  Drawer,
  useTheme,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import PageTitle from "components/common/page-title/PageTitle";
import BaseDrawer from "components/common/base-drawer/BaseDrawer";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const DrawerStyled = styled(Drawer)(() => ({
  padding: "20rem",
}));

export default function AddClientForm({ open, onClose, onSubmit }: any) {
  const theme: any = useTheme();

  return (
    <BaseDrawer open={open} onClose={onClose}>
      <Grid container spacing={3} height="100%">
        <Grid item xs={12}>
          <PageTitle title="Añadir nuevo cliente" action={<CloseIcon />} />
        </Grid>
        <Grid item xs={12}>
          <Typography pt={4}>
            Comparte el siguiente enlace a tu cliente para que pueda crearse una
            cuenta
          </Typography>
          <TextField
            fullWidth
            style={{ paddingTop: 20 }}
            value="odinadidaodnoinion1io2nion12"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Box
          zIndex={10}
          width="100%"
          display="flex"
          position="sticky"
          alignItems="flex-end"
          mt={theme.spacing(3)}
          justifyContent="center"
          paddingY={theme.spacing(2)}
          paddingLeft={theme.spacing(3)}
          bottom={theme.spacing(0)}
          bgcolor={theme.colors.background.primary}
        >
          <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={onSubmit}
          >
            Aceptar
          </Button>
        </Box>
      </Grid>
    </BaseDrawer>
  );
}
