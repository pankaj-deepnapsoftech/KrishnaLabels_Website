import React from "react";
import { Link } from "react-router-dom";

const LabelTypes = () => {
  const labels = [
    {
      title: "Hand Tag",
      images: ["/logo-1.png", "/logo-2.png", "/logo-6.png", "/logo-7.png"],
    },
    {
      title: "Labels",
      images: ["/logo-3.png", "/logo-4.png", "/logo-5.png", "/logo-6.png"],
    },
    {
      title: "Patches/Batches",
      images: ["/logo-7.png", "/logo-8.png", "/logo-9.png", "/logo-10.png"],
    },
    {
      title: "Ribbon/Tapes",
      images: ["/logo-11.png", "/logo-12.png", "/logo-5.png", "/logo-6.png"],
    },
    {
      title: "Tagseal/Thread",
      images: ["/logo-1.png", "/logo-2.png", "/logo-3.png", "/logo-4.png"],
    },
    {
      title: "Bags",
      images: ["/logo-1.png", "/logo-2.png", "/logo-3.png", "/logo-4.png"],
    },
    {
      title: "ButterPaper/Sticker",
      images: ["/logo-1.png", "/logo-2.png", "/logo-3.png", "/logo-4.png"],
    },
  ];

  return (
    <div className="py-12 bg-gradient-to-br from-blue-50 to-blue-100 px-4 md:px-20">
      <h2 className="text-center text-green-800 font-bold text-lg mb-8 uppercase">
        What type of label do you need?
      </h2>

      {/* First row: 4 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {labels.slice(0, 4).map((label, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-lg shadow-sm p-4 hover:shadow-md transition duration-200"
          >
            <div className="grid grid-cols-2 gap-1 mb-4">
              {label.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={label.title}
                  className="rounded object-cover w-full h-20"
                />
              ))}
            </div>
            <div className="text-center font-medium text-sm text-gray-800">
              <Link to="/products" className="hover:text-green-700">
                {label.title} <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Second row: 3 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {labels.slice(4).map((label, idx) => (
          <div
            key={idx + 4}
            className="bg-gray-50 rounded-lg shadow-sm p-4 hover:shadow-md transition duration-200"
          >
            <div className="grid grid-cols-2 gap-1 mb-4">
              {label.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={label.title}
                  className="rounded object-cover w-full h-20"
                />
              ))}
            </div>
            <div className="text-center font-medium text-sm text-gray-800">
              <Link to="/products" className="hover:text-green-700">
                {label.title} <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabelTypes;
