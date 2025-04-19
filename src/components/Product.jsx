import React from "react";

const LabelTypes = () => {
  const labels = [
    {
      title: "All Labels",
      images: [
        "/logo-1.png",
        "/logo-2.png",
        "/logo-6.png",
        "/logo-7.png",
      ],
    },
    {
      title: "Patches",
      images: [
        "/logo-3.png",
        "/logo-4.png",
        "/logo-5.png",
        "/logo-6.png",
      ],
    },
    {
      title: "Ribbon on rolls",
      images: [
        "/logo-7.png",
        "/logo-8.png",
        "/logo-9.png",
        "/logo-10.png",
      ],
    },
    {
      title: "Custom Hangtags",
      images: [
        "/logo-11.png",
        "/logo-12.png",
        "/logo-5.png",
        "/logo-6.png",
      ],
    },
    {
      title: "Custom Leather Labels",
      images: [
        "/logo-1.png",
        "/logo-2.png",
        "/logo-3.png",
        "/logo-4.png",
      ],
    },
  ];

  return (
    <div className="py-12 px-4 md:px-20 bg-white">
      <h2 className="text-center text-green-800 font-bold text-lg mb-8 uppercase">
        What type of label do you need?
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {labels.map((label, idx) => (
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
              {label.title} <span className="text-lg">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabelTypes;
