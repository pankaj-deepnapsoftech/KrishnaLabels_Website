import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 py-12 px-6 md:px-20 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src="/logoo.png" alt="Logo" className="h-16 mb-4" />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            {[
              "Woven Labels",
              "Woven Patches",   
              "Printed (dye-sub) Labels",
              "Natural Cotton Labels",
              "Satin Silkscreen Labels",
              "Cigar Bands",
              "Leather Labels",
              "Pre-Cut Sewing Labels",
              "Embroidered Craft Labels",
              "Stock Labels (Care, Content, Size)",
            ].map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-blue-700 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col items-center md:items- ml-20">
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <p className="text-sm mb-1 font-medium">
            Call:{" "}
            <a href="tel:9911062762" className="text-blue-600 hover:underline">
              +91 9911062762
            </a>
          </p>
          <p className="text-sm mb-4 font-medium">
            Email:{" "}
            <a
              href="mailto:CustomLabels4U@gmail.com"
              className="text-blue-600 hover:underline"
            >
              CustomLabels4U@gmail.com
            </a> 
          </p>
          <div className="flex gap-4 text-2xl">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="text-blue-700 hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="text-pink-500 hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-sky-500 hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="text-blue-500 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Payment Icons */}
      <div className="flex justify-center gap-6 mt-10">
        <img src="/paytm.png" alt="Paytm" className="h-8" />
        <img src="/gpay.png" alt="GPay" className="h-8" />
        <img src="/phonepe.png" alt="PhonePe" className="h-8" />
      </div>

      {/* Bottom Note */}
      <p className="text-center text-xs font-bold mt-6 tracking-wider uppercase text-gray-500">
        &copy; {new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>
  );
}
