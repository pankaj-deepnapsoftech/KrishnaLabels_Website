import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Shop", icon: "/Shopp.png", path: "/" },
  { label: "OurProduct", icon: "/Product.png", path: "/products" },
  { label: "Help", icon: "/Help.png", path: "/contact" },
  { label: "QuickQuote", icon: "/QuickQuote.png", path: "/bookDemo" },
  { label: "AboutUs", icon: "/AboutUs.png", path: "/about" },
  { label: "Blog", icon: "/Blog.png", path: "/blog" },
  { label: "ContactUs", icon: "/ContactUs.png", path: "/contact" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <div className="bg-gray-900 text-lime-400 text-xs sm:text-sm flex justify-between items-center px-4 sm:px-6 py-2">
        <div className="text-center w-full sm:w-auto">
          EXTRAORDINARY PRODUCT TO ENHANCE YOUR BRAND
        </div>

        <div className="flex items-center gap-4 text-white text-xs sm:text-sm ml-2">
          <a href="tel:9911062762" className="text-lime-400 font-semibold">
            +91 9911062762
          </a>
          <Link
            to="/login"
            className="flex items-center gap-1 text-xs sm:text-sm font-medium text-gray-300 hover:text-lime-400 transition duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm1 2H9a4 4 0 00-4 4v1h10v-1a4 4 0 00-4-4z" />
            </svg>
            LOG IN
          </Link>
        </div>
      </div>

      <nav className="bg-white px-4 sm:px-6 py-3 shadow-md">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src="/logoo.png" alt="Logo" className="w-28 sm:w-36 h-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-5">
            <button
              onClick={() => navigate("/BookDemo")}
              className="bg-lime-600 text-black px-4 py-2 text-sm font-bold rounded hover:bg-lime-500 transition"
            >
              GET INSTANT QUOTE
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row gap-6 md:gap-8 mt-4 md:mt-4 items-center font-semibold transition-all duration-300`}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex flex-col items-center text-gray-700 hover:text-lime-500 transition cursor-pointer"
            >
              <Link
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="flex flex-col items-center"
              >
                <img src={item.icon} alt={item.label} className="h-6 mb-1" />
                <span className="text-sm">{item.label}</span>
              </Link>
            </li>
          ))}

          <li className="block md:hidden">
            <button
              onClick={() => {
                navigate("/BookDemo");
                setIsMenuOpen(false);
              }}
              className="bg-lime-600 text-black px-4 py-2 text-sm font-bold rounded hover:bg-lime-500 transition"
            >
              GET INSTANT QUOTE
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
