import React from "react";
import {
  Stack,
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

export default function LoginForm({}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
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
    <React.Fragment>
      <Stack spacing={1}>
        <InputLabel htmlFor="password" sx={{ fontWeight: 600 }}>
          Email
        </InputLabel>
        <TextField
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
      </Stack>
      <Stack spacing={1}>
        <InputLabel htmlFor="password" sx={{ fontWeight: 600 }}>
          Contraseña
        </InputLabel>
        <TextField
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
      </Stack>
      <Button variant="contained">Ingresar</Button>
      <Divider>
        <Typography variant="caption">Ingresar con</Typography>
      </Divider>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<img src={Google} alt="Google" />}
        onClick={googleHandler}
      >
        Google
      </Button>
    </React.Fragment>
  );
}
