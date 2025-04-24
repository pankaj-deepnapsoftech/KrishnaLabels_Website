import {string,object,number,mixed} from "yup";

export const ContactValidationSchema = object({
    product_name:string().required("Product name must be a required field"),
    description:string().required("Description must be a required field"),
    price:number().required("price must be a required field"),
    image:
})