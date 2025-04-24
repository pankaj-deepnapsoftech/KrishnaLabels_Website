import {string,object} from "yup";

export const ContactValidationSchema = object({
    product_name:string,
    description:"",
    price:"",
})