import * as Yup from "yup";

export const loginValidator = Yup.object().shape({
  email: Yup.string().required("Digite seu e-mail"),
  password: Yup.string().required("Digite a sua senha"),
});
