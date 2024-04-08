import {
  Grid,
  Button,
  Divider,
  TextField,
  IconButton,
  InputLabel,
  Typography,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import {
  googleAuthService,
  loginWithEmailService,
  verifyGoogleAuthService,
} from "services/user/user.services";
import { useEffect, useState } from "react";
import { loginFormValidation } from "./validations";
import { useNavigate } from "react-router-dom";
import { errorToast } from "lib/utils/toast";
import { useFormik } from "formik";
import Google from "../../../assets/icons/google.svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function LoginForm() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormValidation,
    onSubmit(values) {
      handleLoginWithEmail(values);
    },
  });

  const handleLoginWithEmail = async (data: any) => {
    setIsLoading(true);
    try {
      await loginWithEmailService(data);
      navigate("/clients");
    } catch (error: any) {
      console.log(error);
      errorToast("Credenciales inválidas");
    }
    setIsLoading(false);
  };

  const handleLoginWithGoogle = () => {
    setIsLoading(true);
    try {
      googleAuthService();
    } catch (error) {
      console.log(error);
      errorToast("Error en el servidor");
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
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
            Boolean(formik.touched.email) && <span>{formik.errors.email}</span>
          }
        />
      </Grid>
      <Grid item xs={12}>
        <InputLabel htmlFor="password" sx={{ fontWeight: 600 }}>
          Contraseña
        </InputLabel>
        <TextField
          fullWidth
          size="small"
          id="password"
          name="password"
          placeholder="**********"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
          type={showPassword ? "text" : "password"}
          error={
            Boolean(formik.touched.password) && Boolean(formik.errors.password)
          }
          helperText={
            Boolean(formik.touched.password) &&
            Boolean(formik.errors.password) &&
            formik.errors.password === "Mínimo 6 caracteres" && (
              <span>{formik.errors.password}</span>
            )
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  size="large"
                  onMouseDown={(event) => event.preventDefault()}
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
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
          endIcon={isLoading ? <CircularProgress size={14} /> : null}
        >
          Ingresar
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Divider>
          <Typography variant="caption">Ingresar con</Typography>
        </Divider>
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          color="primary"
          variant="outlined"
          disabled={isLoading}
          onClick={handleLoginWithGoogle}
          startIcon={<img src={Google} alt="Google" />}
          endIcon={isLoading ? <CircularProgress size={14} /> : null}
        >
          Google
        </Button>
      </Grid>
    </Grid>
  );
}
