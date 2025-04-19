import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-10 px-4 md:px-16 border-t">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="flex flex-col items-center md:items-start gap-6">

          <div className="flex flex-col items-center md:items-start">
            <img src="/logoo.png" alt="Logo" className="h-14 mb-4" />
            <img src="/rating.png" alt="Rating" className="h-12" />
          </div>


          <div className="text-center md:text-left w-full">
            <h3 className="font-bold mb-3 text-lg">Get In Touch</h3>
            <p className="text-sm font-semibold">
              Call:{" "}
              <a href="tel:8135416368" className="text-blue-600">
                813-541-6368
              </a>
            </p>
            <p className="text-sm font-semibold">
              Email:{" "}
              <a href="mailto:CustomLabels4U@gmail.com" className="text-blue-600">
                CustomLabels4U@gmail.com
              </a>
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl">
              <a href="#"><FaFacebook className="text-blue-700 hover:scale-110 transition" /></a>
              <a href="#"><FaInstagram className="text-pink-500 hover:scale-110 transition" /></a>
              <a href="#"><FaTwitter className="text-black hover:scale-110 transition"/></a>
              <a href="#"><FaLinkedin className="text-blue-500 hover:scale-110 transition" /></a>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-bold mb-3 text-lg text-blue-700">Quick Links</h3>
          <div className="grid grid-cols-2 gap-x-6 text-sm font-medium">
            <ul className="space-y-1">
              <li>Woven Labels</li>
              <li>Woven Patches</li>
              <li>Printed (dye-sub) Labels</li>
              <li>Natural Cotton Labels</li>
              <li>Satin Silkscreen Labels</li>
            </ul>
            <ul className="space-y-1">
              <li>Cigar Bands</li>
              <li>Leather Labels</li>
              <li>Pre-Cut Sewing Labels</li>
              <li>Embroidered Craft Labels</li>
              <li>Stock Labels (Care, Content, Size)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-6 mt-10">
        <img src="/paytm.png" alt="Paytm" className="h-8" />
        <img src="/gpay.png" alt="GPay" className="h-8" />
        <img src="/phonepe.png" alt="PhonePe" className="h-8" />
      </div>
      <p className="text-center text-xs font-bold mt-6 tracking-wide uppercase">
        All Rights Reserved ©
      </p>
    </footer>
  );
}
