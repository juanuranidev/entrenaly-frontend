import * as yup from "yup";

export const loginFormValidation = yup.object().shape({
  email: yup.string().required("Requerido"),
  password: yup.string().required().min(5, "Mínimo 6 caracteres"),
});
