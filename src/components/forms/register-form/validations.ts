import * as yup from "yup";

export const registerFormValidation = yup.object().shape({
  name: yup.string().required("Requerido"),
  email: yup.string().required("Requerido"),
  password: yup.string().required().min(5, "Mínimo 6 caracteres"),
});
