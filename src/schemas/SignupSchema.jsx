import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  firstname: yup.string(),
  lastname: yup.string(),
  username: yup.string(),
  email: yup.string().email("Please type a valid email"),
  password: yup.string().min(6).max(12),
});
