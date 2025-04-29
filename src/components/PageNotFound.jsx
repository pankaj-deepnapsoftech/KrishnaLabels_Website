import React from "react";
import { Link } from "react-router-dom"; 

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
      <h1 className="text-[120px] font-bold bg-clip-text text-transparent bg-[url('/space-texture.jpg')] bg-cover bg-center">
        Oops!
      </h1>
      <h2 className="text-xl font-bold text-black mb-2">404 - PAGE NOT FOUND</h2>
      <p className="text-gray-600 max-w-md mb-6">
        The page you are looking for might have been removed,<br />
        had its name changed or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-200"
      >
        GO TO HOMEPAGE
      </Link>
    </div>
  );
};

export default NotFound;
