import * as Yup from "yup";

export const ContactValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});
