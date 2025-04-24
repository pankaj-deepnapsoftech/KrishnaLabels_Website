import {string,object} from "yup";

export const ContactValidationSchema = object({
    product_name:string().required("Product name must be a required field"),
    description:string().required("Product name must be a required field"),
    price:string().required("Product name must be a required field"),
})