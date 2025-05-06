// src/components/Navbar.js
import React from "react";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex justify-center gap-6 text-xs sm:text-sm font-semibold py-3 relative flex-wrap z-50">
      {/* Repeat this structure for each dropdown */}
      <div className="relative group">
        <a href="#" className="hover:text-blue-600">
          Hand Tags
        </a>
        <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg min-w-[180px]">
          {[
            "ARTCARD PAPER TAG",
            "UV+FOILING TAG",
            "EMBOSSING+DEBOSSING HANG TAG",
            "HAND MADE+CRAFT PAPER TAG",
            "DIE CUT TAG",
            "PLASTIC TAG",
            "PVC TAG",
          ].map((text, idx) => (
            <a key={idx} href="#" className="block px-4 py-2 hover:bg-gray-100">
              {text}
            </a>
          ))}
        </div>
      </div>

      <div className="relative group">
        <a href="#" className="hover:text-blue-600">
          Labels <FiChevronDown className="inline text-xs" />
        </a>
        <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg min-w-[180px]">
          {[
            "WOVEN LABEL",
            "COTTON LABEL",
            "SATIN LABEL",
            "TAFFETA PRINTED LABEL",
            "TYVEK LABEL",
            "HEAT TRANSFER",
          ].map((text, idx) => (
            <a key={idx} href="#" className="block px-4 py-2 hover:bg-gray-100">
              {text}
            </a>
          ))}
        </div>
      </div>

    
    </div>
  );
};

export default Navbar;
