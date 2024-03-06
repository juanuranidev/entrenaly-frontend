import {
  Grid,
  Button,
  Divider,
  TextField,
  IconButton,
  InputLabel,
  Typography,
  InputAdornment,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import Google from "../../../assets/icons/google.svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

type Props = {};

export default function RegisterForm({}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit(values) {
      console.log(values);
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const googleHandler = async () => {
    // login || singup
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <InputLabel htmlFor="password" sx={{ fontWeight: 600 }}>
          Nombre
        </InputLabel>
        <TextField
          fullWidth
          name="name"
          size="small"
          placeholder="Juan"
          value={formik.values.name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.name) && Boolean(formik.errors.name)}
          helperText={
            Boolean(formik.touched.name) && Boolean(formik.errors.name)
          }
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InputLabel htmlFor="password" sx={{ fontWeight: 600 }}>
          Email
        </InputLabel>
        <TextField
          fullWidth
          value={formik.values.email}
          name="email"
          size="small"
          placeholder="juan@gmail.com"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.email) && Boolean(formik.errors.email)}
          helperText={
            Boolean(formik.touched.email) && Boolean(formik.errors.email)
          }
        />
      </Grid>
      <Grid item xs={12}>
        <InputLabel htmlFor="password" sx={{ fontWeight: 600 }}>
          Contraseña
        </InputLabel>
        <TextField
          fullWidth
          value={formik.values.password}
          name="password"
          id="password"
          size="small"
          type={showPassword ? "text" : "password"}
          placeholder="**********"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            Boolean(formik.touched.password) && Boolean(formik.errors.password)
          }
          helperText={
            Boolean(formik.touched.password) && Boolean(formik.errors.password)
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  size="large"
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth variant="contained">
          Registrarse
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Divider>
          <Typography variant="caption">Registrarse con</Typography>
        </Divider>
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          startIcon={<img src={Google} alt="Google" />}
          onClick={googleHandler}
        >
          Google
        </Button>
      </Grid>
    </Grid>
  );
}
