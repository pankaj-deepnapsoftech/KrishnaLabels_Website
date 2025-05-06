import { string, object, number, mixed } from "yup";

const productValidationSchema = object({
    product_name: string().required("*Product name is required"),
    description: string().required("*Description is required"),
    price: number().required("*Price is required").typeError("*Price must be a number"),
    image: mixed().required("*Image is required"),
});

export default productValidationSchema;