import * as yup from "yup";

export const addOrUpdateVariantFormValidations = yup.object().shape({
  name: yup.string().required("Requerido"),
  categoryId: yup.number().required("Requerido"),
});