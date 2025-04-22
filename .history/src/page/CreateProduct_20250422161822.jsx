import React, { useState } from "react";
import { FiUpload } from 'react-icons/fi';
const CreateProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productImage: "",
    description: "",
    price: "",
    color: "",
  });
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : '');
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Submitted:", formData);
  };

  return (
    <div className=" w-full flex items-center justify-center bg-gray-200 px-4 py-10">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          CREATE PRODUCT
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name of Product
            </label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full px-0 py-2 border-b border-gray-300 focus:border-cyan-500 focus:ring-0 focus:outline-none"
            />

          </div>

          {/* Image URL */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Image
            </label>

            <label
              htmlFor="productImage"
              className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border- hover:bg-gray-50 transition duration-300"
            >
              <FiUpload className="text-xl text-sky-800 mr-2" />
              <span className="text-sm text-gray-600">
                {fileName ? fileName : 'Choose an image or drag it here'}
              </span>
              <input
                id="productImage"
                name="productImage"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>

            {fileName && (
              <p className="mt-2 text-xs text-green-600">✅ {fileName} selected</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a short product description..."
              className="w-full px-0 py-2 border-b border-gray-300 focus:border-cyan-500 focus:ring-0 focus:outline-none"            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price ($)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full px-0 py-2 border-b border-gray-300 focus:border-cyan-500 focus:ring-0 focus:outline-none" />
          </div>

          {/* Color */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Color
            </label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              placeholder="e.g., Red, Blue, Black"
              className="w-full px-0 py-2 border-b border-gray-300 focus:border-cyan-500 focus:ring-0 focus:outline-none" />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-0 py-2 bg-sky-800 text-white border-b border-gray-300 focus:border-cyan-500 focus:ring-0 focus:outline-none"            >
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
