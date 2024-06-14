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
import { handleCreateErrorToast } from "lib/utils/toast";
import { loginFormValidation } from "./validations";
import { USER_CONSTANTS } from "lib/constants/user.constants";
import { useAuthContext } from "contexts/auth/Auth";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
import Google from "../../../../public/google.svg";
import Icons from "lib/utils/icons/icons";

type Props = {
  invite: any;
};

export default function LoginForm({ invite }: Props) {
  const navigate = useNavigate();
  const { setUserData } = useAuthContext();

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
      const response: any = await loginWithEmailService(data);
      if (response?.role?.name === USER_CONSTANTS.ROLES.TRAINER) {
        navigate("/trainer/clients");
        setUserData(response);
      }

      if (response?.role?.name === USER_CONSTANTS.ROLES.CLIENT) {
        navigate("/client/plans");
        setUserData(response);
      }
    } catch (error: any) {
      console.log(error);
      handleCreateErrorToast("Credenciales inválidas");
    }
    setIsLoading(false);
  };

  const handleLoginWithGoogle = async () => {
    setIsLoading(true);
    try {
      const response = await googleAuthService(invite);
      if (
        response &&
        response?.data?.role?.name === USER_CONSTANTS.ROLES.TRAINER
      ) {
        navigate("/trainer/clients");
        setUserData(response);
      }

      if (
        response &&
        response?.data?.role?.name === USER_CONSTANTS.ROLES.CLIENT
      ) {
        navigate("/client/plans");
        setUserData(response);
      }
    } catch (error) {
      console.log(error);
      handleCreateErrorToast("Error en el servidor");
    }
    setIsLoading(false);
  };

  return (
    <Grid container spacing={3}>
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
          helperText={
            Boolean(formik?.touched?.email) &&
            Boolean(formik?.errors?.email) && (
              <span>{formik?.errors?.email}</span>
            )
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
