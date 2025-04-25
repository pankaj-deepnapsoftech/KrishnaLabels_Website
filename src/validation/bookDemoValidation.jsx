import * as Yup from "yup";

const bookDemoValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  purpose: Yup.string().required("Purpose is required"),
});

export default bookDemoValidation;
