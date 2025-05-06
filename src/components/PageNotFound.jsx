/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-100 px-4 text-center">
      <motion.h1
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[120px] font-extrabold bg-clip-text bg-center text-sky-700"
      >
        Oops!
      </motion.h1>

      <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
        404 - PAGE NOT FOUND
      </h2>

      <p className="text-gray-600 text-lg max-w-xl mb-8">
        The page you're looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="bg-sky-700 hover:bg-sky-900 text-white font-medium text-lg py-3 px-8 rounded shadow-lg transition-all duration-300"
      >
        GO TO HOMEPAGE
      </Link>
    </div>     
  );
};

export default NotFound;


