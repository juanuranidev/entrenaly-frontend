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
  registerWithEmailService,
} from "services/user/user.services";
import { createErrorToastLib, createSuccessToastLib } from "lib/utils/toast";
import { registerFormValidation } from "./lib/validations";
import { RegisterWithEmail } from "services/user/types";
import { useAuthContext } from "contexts/auth/Auth";
import { USER_CONSTANTS } from "lib/constants/user/user.constants";
import { RegisterForm } from "./lib/types";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import { User } from "lib/types/user/user.types";
import Google from "../../../../public/google.svg";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

type Props = {
  invite: string | null | undefined;
};

export default function RegisterForm({ invite }: Props) {
  const navigate = useNavigate();
  const { setUserData } = useAuthContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const formik = useFormik<RegisterForm>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      invite: invite ?? null,
    },
    validationSchema: registerFormValidation,
    onSubmit(values) {
      handleRegisterWithEmail(values);
    },
  });

  const handleRegisterWithEmail = async (
    data: RegisterWithEmail
  ): Promise<void> => {
    setIsLoading(true);
    try {
      const response: User = await registerWithEmailService(data);

      handleRedirectUser(response);
      createSuccessToastLib("Registrado con éxito");
    } catch (error: unknown) {
      console.log(error);
      handleManageRegisterWithEmailError(error);
    }
    setIsLoading(false);
  };

  const handleManageRegisterWithEmailError = (
    error: unknown
  ): string | number => {
    const errorString = String(error);

    switch (true) {
      case errorString.includes("email-already-in-use"):
        return createErrorToastLib("Email ya en uso");
      default:
        return createErrorToastLib("Error en el servidor");
    }
  };

  const handleRegisterWithGoogle = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response: User = await googleAuthService(invite);

      handleRedirectUser(response);
    } catch (error: unknown) {
      console.log(error);
      createErrorToastLib("Error en el servidor");
    }
  };

  const handleRedirectUser = (user: User) => {
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
          value={formik?.values?.name}
          onBlur={formik?.handleBlur}
          onChange={formik?.handleChange}
          error={Boolean(formik?.touched?.name) && Boolean(formik?.errors.name)}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InputLabel htmlFor="password" sx={{ fontWeight: 600 }}>
          Email
        </InputLabel>
        <TextField
          fullWidth
          name="email"
          size="small"
          placeholder="juan@gmail.com"
          onBlur={formik?.handleBlur}
          value={formik?.values?.email}
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
          value={formik?.values?.password}
          type={showPassword ? "text" : "password"}
          error={
            Boolean(formik?.touched?.password) &&
            Boolean(formik?.errors.password)
          }
          helperText={
            Boolean(formik?.touched?.password) &&
            Boolean(formik?.errors?.password) &&
            formik?.errors?.password === "Mínimo 6 caracteres" && (
              <span>{formik?.errors?.password}</span>
            )
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  size="large"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(event) => event.preventDefault()}
                  aria-label="toggle password visibility"
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
          onClick={() => formik?.handleSubmit()}
          endIcon={isLoading ? <CircularProgress size={14} /> : null}
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
          onClick={handleRegisterWithGoogle}
          startIcon={<img src={Google} alt="Google" />}
          endIcon={isLoading ? <CircularProgress size={14} /> : null}
        >
          Google
        </Button>
      </Grid>
    </Grid>
  );
}
