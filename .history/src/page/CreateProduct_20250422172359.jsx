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
    <div className="w-full  flex items-center justify-center bg-gray-100 px-2 py-8">
      <div className="w-full max-w-[700px] bg-white shadow-md rounded-lg p-6">
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
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:border-sky-500 focus:outline-none"
            />
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
              <span className="text-sm text-gray-600">
                {fileName ? fileName : 'Choose image'}
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
              <p className="mt-1 text-xs text-green-600">✅ {fileName} selected</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              placeholder="Short product description..."
              className="w-full px-2 py-1 border-b border-gray-300 rounded focus:border-sky-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Price ($)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="w-full px-2 py-1 border-b border-gray-300 rounded focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* Color */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Color
            </label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              placeholder="e.g., Red, Blue"
              className="w-full px-2 py-1 border-b border-gray-300 rounded focus:border-sky-500 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full py-2 bg-sky-800 text-white rounded hover:bg-sky-700 transition"
            >
              Create Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
