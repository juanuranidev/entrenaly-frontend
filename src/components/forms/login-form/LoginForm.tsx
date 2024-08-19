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
} from "services/user/user.services";
import { createErrorToastLib } from "lib/utils/toast";
import { loginFormValidation } from "./lib/validations";
import { useThemeContext } from "contexts/theme/Theme";
import type { LoginForm } from "./lib/types";
import { LoginWithEmail } from "services/user/types";
import { USER_CONSTANTS } from "lib/constants/user/user.constants";
import { useAuthContext } from "contexts/auth/Auth";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import { User } from "lib/types/user/user.types";
import Google from "../../../../public/google.svg";
import Icons from "lib/utils/icons/icons";

export default function LoginForm() {
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const { setUserData } = useAuthContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const formik = useFormik<LoginForm>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormValidation,
    onSubmit(values) {
      handleLoginWithEmail(values);
    },
  });

  const handleLoginWithEmail = async (data: LoginWithEmail): Promise<void> => {
    setIsLoading(true);
    try {
      const response: User = await loginWithEmailService(data);
      handleRedirectUser(response);
    } catch (error: unknown) {
      console.log(error);
      createErrorToastLib("Credenciales inválidas");
    }
    setIsLoading(false);
  };

  const handleLoginWithGoogle = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response: User = await googleAuthService();
      handleRedirectUser(response);
    } catch (error: unknown) {
      console.log(error);
      createErrorToastLib("Error en el servidor");
    }
    setIsLoading(false);
  };

  const handleRedirectUser = (user: User): void => {
    if (!user?.role?.name) return;

    switch (user?.role?.name) {
      case USER_CONSTANTS.ROLES.TRAINER:
        navigate("/trainer/clients");
        setUserData(user);
        break;
      case USER_CONSTANTS.ROLES.CLIENT:
        navigate("/client/plans");
        setUserData(user);
        break;
    }
  };

  return (
    <Grid container spacing={theme?.spacing(3)}>
      <Grid item xs={12}>
        <InputLabel htmlFor="password" sx={{ fontWeight: 600 }}>
          Email
        </InputLabel>
        <TextField
          fullWidth
          value={formik?.values.email}
          name="email"
          size="small"
          placeholder="juan@gmail.com"
          onBlur={formik?.handleBlur}
          onChange={formik?.handleChange}
          error={
            Boolean(formik?.touched?.email) && Boolean(formik?.errors?.email)
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
          onBlur={formik?.handleBlur}
          onChange={formik?.handleChange}
          value={formik?.values.password}
          type={showPassword ? "text" : "password"}
          error={
            Boolean(formik?.touched.password) &&
            Boolean(formik?.errors.password)
          }
          helperText={
            Boolean(formik?.touched.password) &&
            Boolean(formik?.errors.password) &&
            formik?.errors.password === "Mínimo 6 caracteres" && (
              <span>{formik?.errors.password}</span>
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
                  {showPassword ? (
                    <Icons.visibilityOn />
                  ) : (
                    <Icons.visibilityOff />
                  )}
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
          onClick={() => formik?.handleSubmit()}
          endIcon={isLoading ? <CircularProgress size={14} /> : null}
        >
          Ingresar
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Divider>
          <Typography variant="caption"> Ingresar con</Typography>
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
