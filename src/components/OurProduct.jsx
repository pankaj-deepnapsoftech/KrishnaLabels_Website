import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    name: "Printed Ribbon",
    description: "High-quality printed ribbon for branding and packaging.",
    price: "₹199",
    color: "Red",
  },
  {
    name: "Woven Label",
    description: "Durable woven labels for garments and accessories.",
    price: "₹299",
  },
  {
    name: "Satin Tags",
    description: "Smooth satin tags with customizable design.",
    price: "₹149",
    color: "Blue",
  },
  {
    name: "Twill Tape",
    description: "Stylish and strong twill tapes for branding.",
    price: "₹249",
    color: "Green",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
    },
  }),
};

const OurProduct = () => {
  return (
    <div className="max-w-7xl mt-30 mx-auto px-4 py-20">
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Our Products
          </span>
        </h2>
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((product, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white rounded-3xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 p-6 border border-gray-100"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
            </div>
            <div className="flex items-center justify-between mt-6">
              <span className="text-lg font-bold text-indigo-600">{product.price}</span>
              {product.color && (
                <span className="text-xs px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 font-medium shadow-sm">
                  {product.color}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
