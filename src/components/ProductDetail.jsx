import React, { useState } from "react";
import { FiSearch, FiUser, FiChevronDown } from "react-icons/fi";
import Footer from "./Footer";

const ProductDetail = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="font-sans">
      {/* Top Call Bar */}
      <div className="bg-sky-600 text-white text-xs sm:text-sm text-center py-1">
        <a href="tel:9911062762" className="underline">
          CALL NOW: +91 9911062762 →
        </a>
      </div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-4 border-b-2 border-sky-700 gap-3">
        {/* Left - Search */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-start">
          {!isSearchActive ? (
            <FiSearch
              className="text-xl cursor-pointer hover:text-sky-400 transition-all"
              onClick={handleSearchClick}
            />
          ) : (
            <input
              type="text"
              value={searchText}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full sm:w-auto pl-2 py-1 border-b-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              autoFocus
            />
          )}
        </div>

        {/* Center - Logo */}
        <div className="text-center">
          <img
            src="/logoo.png"
            alt="Logo"
            className="w-24 sm:w-36 mx-auto h-auto"
          />
          <p className="text-xs sm:text-sm italic text-red-700">
            Delightfully Different with a Personal Touch!
          </p>
        </div>

        {/* Right - User Icon */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end">
          <a href="/login">
            <FiUser className="font-extrabold text-2xl sm:text-3xl hover:text-sky-400 transition-all" />
          </a>
        </div>
      </div>
      {/* Navigation */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold py-3 px-4">
        <a href="#" className="hover:text-sky-600 transition-all">
          Hand Tag
        </a>
        <a href="#" className="hover:text-sky-600 transition-all">
          Labels <FiChevronDown className="inline text-xs" />
        </a>
        <a href="#" className="hover:text-sky-600 transition-all">
          Patches/Badges
        </a>
        <a href="#" className="hover:text-sky-600 transition-all">
          Ribbon/Tapes <FiChevronDown className="inline text-xs" />
        </a>
        <a href="#" className="hover:text-sky-600 transition-all">
          Tagseal/Thread
        </a>
        <a href="#" className="hover:text-sky-600 transition-all">
          Bags <FiChevronDown className="inline text-xs" />
        </a>
        <a href="#" className="hover:text-sky-600 transition-all">
          ButterPaper/Sticker
        </a>
        <a href="/about" className="hover:text-sky-600 transition-all">
          About Us
        </a>
        <a href="/contact" className="hover:text-sky-600 transition-all">
          Contact
        </a>
      </div>
      {/* Product Section */}
      <div className="flex flex-col md:flex-row gap-6 sm:gap-10 px-4 sm:px-6 py-6 sm:py-10">
        {/* Left - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/logo-13.png"
            alt="Silk Screen Printed Satin Labels"
            className="max-w-full h-120 object-cover rounded-lg shadow-lg hover:scale-105 transition-all"
          />
        </div>

        {/* Right - Product Info */}
        <div className="md:w-1/2">
          <p className="text-xs uppercase font-bold text-gray-600">
            KrishnaLabels INC
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-sky-800 mb-4 sm:mb-6">
            Silk Screen Printed Satin Labels
          </h2>

          <div className="flex flex-col gap-4 sm:gap-6 text-sm sm:text-base">
            <div>
              <label className="font-semibold text-gray-800 mb-1 block">
                Product Name:
              </label>
              <p className="text-gray-700">Silk Screen Printed Satin Labels</p>
            </div>

            <div>
              <label className="font-semibold text-gray-800 mb-1 block">
                Product Description:
              </label>
              <p className="text-gray-700">
                This is a high-quality satin label, printed with silk-screening
                technique, perfect for a premium look. Available in multiple
                fold types and sizes.
              </p>
            </div>

            <div>
              <label className="font-semibold text-gray-800 mb-1 block">
                Fold Type:
              </label>
              <p className="text-gray-700">
                Center Fold (for sewing into seams)
              </p>
            </div>

            <div>
              <label className="font-semibold text-gray-800 mb-1 block">
                Height (after folded):
              </label>
              <p className="text-gray-700">50mm</p>
            </div>

            <div>
              <label className="font-semibold text-gray-800 mb-1 block">
                Length (after folded):
              </label>
              <p className="text-gray-700">150mm</p>
            </div>

            <div>
              <label className="font-semibold text-gray-800 mb-1 block">
                Lurex Option:
              </label>
              <p className="text-gray-700">
                Yes, shiny metallic yarn included (40.00)
              </p>
            </div>
          </div>

          <div className="mt-4 sm:mt-6">
            <p className="text-xl sm:text-2xl font-bold text-sky-600">
              Price: 40.00
            </p>
          </div>
        </div>
      </div>
      n
      <Footer />
    </div>
  );
};

export default ProductDetail;
