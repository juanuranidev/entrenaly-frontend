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
import { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { successToast } from "lib/utils/toast";
import { registerWithEmailService } from "services/user/user.services";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Google from "../../../assets/icons/google.svg";

export default function RegisterForm() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit(values) {
      handleRegisterWithEmail(values);
    },
  });

  const handleRegisterWithEmail = async (data: any) => {
    setIsLoading(true);
    try {
      await registerWithEmailService(data);

      successToast("Registrado con éxito");
      navigate("/clients");
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
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
        <Button
          fullWidth
          variant="contained"
          disabled={isLoading}
          onClick={() => formik.handleSubmit()}
        >
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
          color="primary"
          variant="outlined"
          disabled={isLoading}
          startIcon={<img src={Google} alt="Google" />}
          onClick={() => {}}
        >
          Google
        </Button>
      </Grid>
    </Grid>
  );
}
