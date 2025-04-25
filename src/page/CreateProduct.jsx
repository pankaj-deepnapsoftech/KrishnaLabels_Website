import React, { useState } from "react";
import { FiUpload } from 'react-icons/fi';
// import { motion } from "framer-motion";
import { useFormik } from "formik";
import CreateProductValidationSchema from "../validation/CreateProductValidationSchema";

const CreateProduct = () => {
  const [preview, setPreview] = useState(null);

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      product_name: "",
      description: "",
      price: "",
      color: "",
      image: "",
    },
    validationSchema: CreateProductValidationSchema,
    onSubmit: (values) => {
      console.log("Form submitted", values);
      // Handle your product submission logic here
    },
  });

  return (
    <div className="w-full flex h-[100%] justify-center bg-gray-100 px-2">
      <div className="w-full max-w-[700px] mt-10 bg-white shadow-md rounded-lg p-6 pt-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          CREATE PRODUCT
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Name of Product
            </label>
            <input
              type="text"
              name="product_name"
              value={values.product_name}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full px-2 py-2 border-b border-gray-300 focus:border-sky-500 focus:outline-none"
            />
            {touched.product_name && errors.product_name && (
              <p className="text-red-400">{errors.product_name}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm text-gray-700 mb-3">Upload Image</label>
            <label
              htmlFor="image"
              className="flex items-center gap-2 justify-center px-3 py-2 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-sky-800 hover:bg-gray-50 transition duration-300"
            >
              <FiUpload className="text-lg text-sky-800" />
              Upload
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setFieldValue("image", e.currentTarget.files[0]);
                  const pre = URL.createObjectURL(e.currentTarget.files[0]);
                  setPreview(pre);
                }}
                onBlur={handleBlur}
                className="hidden"
              />
            </label>
            <div className="h-20 flex justify-end py-2">
              {preview && (
                <motion.img
                  src={preview}
                  alt="Preview"
                  className="h-20 rounded"
                  whileHover={{ scale: 1.1 }}
                />
              )}
            </div>
            {touched.image && errors.image && (
              <p className="text-red-400">{errors.image}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Description</label>
            <textarea
              name="description"
              rows="3"
              value={values.description}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Short product description..."
              className="w-full px-2 py-1 border-b border-gray-300 focus:border-sky-500 focus:outline-none"
            ></textarea>
            {touched.description && errors.description && (
              <p className="text-red-500">{errors.description}</p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={values.price}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full px-2 py-1 border-b border-gray-300 focus:border-sky-500 focus:outline-none"
            />
            {touched.price && errors.price && (
              <p className="text-red-400">{errors.price}</p>
            )}
          </div>

          {/* Color */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Color</label>
            <input
              type="text"
              name="color"
              value={values.color}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="e.g., Red, Blue"
              className="w-full px-2 py-1 border-b border-gray-300 focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <div>
            <motion.button
              type="submit"
              className="w-full py-2 bg-sky-800 text-white rounded hover:bg-sky-700 transition"
              whileTap={{ scale: 0.95 }}
            >
              Create Product
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
