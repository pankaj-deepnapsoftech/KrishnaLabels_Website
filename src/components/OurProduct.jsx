import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiUser, FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const products = [
  {
    title: "Custom Woven Self-Adhesive Labels (peel & stick!)",
    price: "From Rs. 38,600.00",
    image: "/logo-1.png",
    description: "High quality self-adhesive labels for various applications.",
  },
  {
    title: "Natural Printed Cotton Ribbon on Rolls",
    price: "From Rs. 5,100.00",
    image: "/logo-11.png",
    description: "Soft cotton ribbons perfect for crafting and decoration.",
  },
  {
    title: "Natural Printed Cotton Ribbon on Rolls",
    price: "From Rs. 5,100.00",
    image: "/logo-10.png",
    description: "Soft cotton ribbons perfect for crafting and decoration.",
  },
  {
    title: "Natural Printed Cotton Ribbon on Rolls",
    price: "From Rs. 5,100.00",
    image: "/logo-9.png",
    description: "Soft cotton ribbons perfect for crafting and decoration.",
  },
  {
    title: "Natural Printed Cotton Ribbon on Rolls",
    price: "From Rs. 5,100.00",
    image: "/logo-8.png",
    description: "Soft cotton ribbons perfect for crafting and decoration.",
  },
  {
    title: "Natural Printed Cotton Ribbon on Rolls",
    price: "From Rs. 5,100.00",
    image: "/logo-6.png",
    description: "Soft cotton ribbons perfect for crafting and decoration.",
  },
  {
    title: "Natural Printed Cotton Ribbon on Rolls",
    price: "From Rs. 5,100.00",
    image: "/logo-7.png",
    description: "Soft cotton ribbons perfect for crafting and decoration.",
  },
  {
    title: "Natural Printed Cotton Ribbon on Rolls",
    price: "From Rs. 5,100.00",
    image: "/logo-4.png",
    description: "Soft cotton ribbons perfect for crafting and decoration.",
  },
  {
    title: "Natural Printed Cotton Ribbon on Rolls",
    price: "From Rs. 5,100.00",
    image: "/logo-5.png",
    description: "Soft cotton ribbons perfect for crafting and decoration.",
  },
  {
    title: "Natural Printed Cotton Ribbon on Rolls",
    price: "From Rs. 5,100.00",
    image: "/logo-10.png",
    description: "Soft cotton ribbons perfect for crafting and decoration.",
  },
  {
    title: "Natural Printed Cotton Ribbon on Rolls",
    price: "From Rs. 5,100.00",
    image: "/logo-11.png",
    description: "Soft cotton ribbons perfect for crafting and decoration.",
  },
  {
    title: "Natural Printed Cotton Ribbon on Rolls",
    price: "From Rs. 5,100.00",
    image: "/logo-13.png",
    description: "Soft cotton ribbons perfect for crafting and decoration.",
  },
];

const OurProduct = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchClick = () => setIsSearchActive(true);
  const handleSearchChange = (e) => setSearchText(e.target.value);
  const handleProductClick = (product) =>
    navigate("/product-detail", { state: product });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchActive(false);
        setSearchText("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      {/* Top Banner */}
      <div className="bg-sky-600 text-white text-sm text-center py-1">
        <a href="tel:9911062762">CALL NOW: +91 9911062762 →</a>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b-2 border-sky-700">
        <div ref={searchRef}>
          {!isSearchActive ? (
            <FiSearch
              className="text-2xl cursor-pointer"
              onClick={handleSearchClick}
            />
          ) : (
            <input
              type="text"
              value={searchText}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="pl-2 py-1 border-b-2 border-gray-400 focus:outline-none text-sm"
              autoFocus
            />
          )}
        </div>

        <div className="text-center">
          <img
            src="/logoo.png"
            alt="Logo"
            className="w-28 sm:w-36 ml-15 h-auto"
          />
          <p className="text-xs italic text-red-700">
            Delightfully Different with a Personal Touch!
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href="/login">
            <FiUser className="font-extrabold text-3xl" />
          </a>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-6 text-xs sm:text-sm font-semibold py-3 relative flex-wrap z-50">
        <div className="relative group">
          <a href="#" className="hover:text-blue-600">
            Hand Tags
          </a>
          <div className="absolute hidden group-hover:block bg-white text-black  mt-2 rounded shadow-lg min-w-[180px]">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              ARTCARD PAPER TAG
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              UV+FOILING TAG
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              EMBOSSING+DEBOSSING HANG TAG
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              HAND MADE+CRAFT PAPER TAG
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              DIE CUT TAG
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              PLASTIC TAG
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              PVC TAG
            </a>
          </div>
        </div>

        <div className="relative group">
          <a href="#" className="hover:text-blue-600">
            Labels <FiChevronDown className="inline text-xs" />
          </a>
          <div className="absolute hidden group-hover:block bg-white text-black  mt-2 rounded shadow-lg min-w-[180px]">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              WOVEN LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              COTTON LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              SATIN LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              TAFFETA PRINTED LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              TYVEK LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              HEAT TRANSFER
            </a>
          </div>
        </div>

        <div className="relative group">
          <a href="#" className="hover:text-blue-600">
            Patches/Badges
          </a>
          <div className="absolute hidden group-hover:block bg-white text-black  mt-2 rounded shadow-lg min-w-[180px]">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              WOVEN LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              COTTON LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              SATIN LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              TAFFETA PRINTED LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              TYVEK LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              HEAT TRANSFER
            </a>
          </div>
        </div>

        <div className="relative group">
          <a href="#" className="hover:text-blue-600">
            Ribbon/Tapes <FiChevronDown className="inline text-xs" />
          </a>
          <div className="absolute hidden group-hover:block bg-white text-black  mt-2 rounded shadow-lg min-w-[180px]">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Satin Ribbon
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Cotton Tape
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Printed Ribbon
            </a>
          </div>
        </div>

        <div className="relative group">
          <a href="#" className="hover:text-blue-600">
            Tagseal/Thread
          </a>
          <div className="absolute hidden group-hover:block bg-white text-black  mt-2 rounded shadow-lg min-w-[180px]">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              WOVEN LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              COTTON LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              SATIN LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              TAFFETA PRINTED LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              TYVEK LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              HEAT TRANSFER
            </a>
          </div>
        </div>
        <div className="relative group">
          <a href="#" className="hover:text-blue-600">
            Bags <FiChevronDown className="inline text-xs" />
          </a>
          <div className="absolute hidden group-hover:block bg-white text-black  mt-2 rounded shadow-lg min-w-[180px]">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Cotton Bag
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Canvas Bag
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Non-Woven Bag
            </a>
          </div>
        </div>

        <div className="relative group">
          <a href="#" className="hover:text-blue-600">
            ButterPaper/Sticker
          </a>
          <div className="absolute hidden group-hover:block bg-white text-black  mt-2 rounded shadow-lg min-w-[180px]">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              WOVEN LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              COTTON LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              SATIN LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              TAFFETA PRINTED LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              TYVEK LABEL
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              HEAT TRANSFER
            </a>
          </div>
        </div>

        <a href="/about" className="hover:text-blue-600">
          About Us
        </a>

        <a href="/contact" className="hover:text-blue-600">
          Contact
        </a>
      </div>

      {/* Products Section */}
      <div className="px-6 pb-10">
        <div className="container mx-auto mt--10 md:py-12 p-0">
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="p-4 bg-sky-100 text-center transform duration-500 hover:-translate-y-2 cursor-pointer flex flex-col h-[460px] text-sm rounded shadow-md"
                  onClick={() => handleProductClick(product)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-44 object-cover rounded-t-md"
                  />
                  <div className="py-2 font-semibold">{product.title}</div>
                  <div className="text-red-600 font-bold">{product.price}</div>
                  <p className="text-gray-600 text-xs mt-2 flex-grow">
                    {product.description}
                  </p>
                  <button className="mt-4 bg-sky-700 text-white px-4 py-2 rounded text-xs hover:bg-sky-800 transition">
                    View Details
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">
                No products found.
              </p>
            )}
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OurProduct;
