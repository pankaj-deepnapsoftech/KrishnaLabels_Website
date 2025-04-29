import React from "react";

const LabelTypes = () => {
  const labels = [
    {
      title: "Hand Tags",
      href: "/hand-tags",
      images: ["/logo-1.png", "/logo-2.png", "/logo-6.png", "/logo-7.png"],
    },
    {
      title: "Labels",
      href: "/labels",
      images: ["/logo-3.png", "/logo-4.png", "/logo-5.png", "/logo-6.png"],
    },
    {
      title: "Ribbon/Tape",
      href: "/ribbon-tape",
      images: ["/logo-7.png", "/logo-8.png", "/logo-9.png", "/logo-10.png"],
    },
    {
      title: "Tagseal/Thread",
      href: "/tagseal-thread",
      images: ["/logo-11.png", "/logo-12.png", "/logo-5.png", "/logo-6.png"],
    },
    {
      title: "Butter-Paper/Sticker",
      href: "/butter-paper-sticker",
      images: ["/logo-1.png", "/logo-2.png", "/logo-3.png", "/logo-4.png"],
    },
    {
      title: "Patches/Badge",
      href: "/patches-badge",
      images: ["/logo-11.png", "/logo-12.png", "/logo-5.png", "/logo-6.png"],
    },
    {
      title: "Bags",
      href: "/bags",
      images: ["/logo-1.png", "/logo-2.png", "/logo-3.png", "/logo-4.png"],
    },
  ];

  const firstRow = labels.slice(0, 4);
  const secondRow = labels.slice(4);

  return (
    <div className="py-12 bg-gradient-to-br from-blue-50 to-blue-100 px-4 md:px-20 mt-40 bg-white">
      <h2 className="text-center text-green-800 font-bold text-5xl mb-8">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {firstRow.map((label, idx) => (
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
            <div className="text-center text-sm">
              <a
                href={label.href}
                className="text-black hover:text-blue-600 font-medium"
              >
                {label.title} <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        {secondRow.map((label, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-lg shadow-sm p-4 hover:shadow-md transition duration-200 w-full sm:w-[45%] md:w-[30%] lg:w-[18%]"
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
            <div className="text-center text-sm">
              <a
                href={label.href}
                className="text-black hover:text-blue-600 font-medium"
              >
                {label.title} <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabelTypes;
