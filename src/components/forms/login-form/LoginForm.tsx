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
import {
  googleAuthService,
  loginWithEmailService,
  verifyGoogleAuthService,
} from "services/user/user.services";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { errorToast } from "lib/utils/toast";
import { useFormik } from "formik";
import Google from "../../../assets/icons/google.svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

type Props = {};

export default function LoginForm({}: Props) {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
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

  const handleVerifyGoogleAuth = async () => {
    try {
      await verifyGoogleAuthService();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    handleVerifyGoogleAuth();
  }, []);

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
          onClick={() => googleAuthService()}
          startIcon={<img src={Google} alt="Google" />}
        >
          Google
        </Button>
      </Grid>
    </Grid>
  );
}
