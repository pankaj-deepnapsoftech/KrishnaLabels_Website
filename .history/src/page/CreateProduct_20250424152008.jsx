import React, { useState } from "react";
import { FiUpload } from 'react-icons/fi';
import { motion } from "motion/react";
import { useFormik } from "formik";
import { ContactValidationSchema } from "../validation/contact.validation";
const CreateProduct = () => {

  const {values,touched,errors,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:{product_name:"",description:"",price:"",color:"",image:""},
    validationSchema:ContactValidationSchema,
    onSubmit:(value)=>{
      console.log(value)
    }
  })

  return (
    <div className="w-full  flex  h-[100%] justify-center  bg-gray-100 px-2 ">
      <div className="w-full max-w-[700px] mt-10 h-[80%] bg-white shadow-md rounded-lg  p-6 pt-10  max-[800px]:mt-18">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          CREATE PRODUCT
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 shadow-xs">
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
              className="w-full px-2 py-2 border-b border-gray-300  focus:border-sky-500 focus:outline-none"
            />
            {touched.product_name && errors.product_name && <p>{errors.product_name}</p>}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Upload Image
            </label>
            <label
              htmlFor="productImage"
              className="flex items-center gap-2 justify-center px-3 py-2 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-sky-800 hover:bg-gray-50 transition duration-300"
            >
              <FiUpload className="text-lg text-sky-800" />
             
              <input
                id="productImage"
                name="productImage"
                type="file"
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
            </label>
            {/* {fileName && (
              <p className="mt-1 text-xs text-green-600">✅ {fileName} selected</p>
            )} */}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="3"
              value={values.description}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Short product description..."
              className="w-full px-2 py-1 border-b border-gray-300  focus:border-sky-500 focus:outline-none"
            ></textarea>
            {touched.description && errors.description && <p className="">{errors.description}</p>}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Price 
            </label>
            <input
              type="number"
              name="price"
              value={values.price}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full px-2 py-1 border-b border-gray-300  focus:border-sky-500 focus:outline-none"
            />
            {touched.price && errors.price && <p className="text-red-400 text-sm ">{errors.price}</p>}
          </div>

          {/* Color */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Color
            </label>
            <input
              type="text"
              name="color"
              value={values.color}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder="e.g., Red, Blue"
              className="w-full px-2 py-1 border-b border-gray-300  focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <div>
            <motion.button
              type="submit"
              className="w-full py-2 bg-sky-800  text-white rounded hover:bg-sky-700 transition focus-visible:outline-none"
              whileTap={{scale:0.9}}
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
