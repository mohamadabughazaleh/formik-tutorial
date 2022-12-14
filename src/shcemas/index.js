import * as yup from "yup";
export const basicschema = yup.object().shape({
  email: yup.string().email("plase enter valid a email").required(),
  age: yup.number().positive().integer().required(),
  password: yup
    .string()
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // )
    .required(),
});
