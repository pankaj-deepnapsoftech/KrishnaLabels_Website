import React, { useState } from "react";
import { X } from "lucide-react";

const ReviewPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-green-700 text-white px-3 py-2 rounded-l-lg shadow-lg rotate-[-90deg] origin-bottom-right"
      >
        ★ Reviews
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-full md:w-1/2 lg:w-1/3 bg-white text-black shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 border-b border-gray-300">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 hover:text-red-500"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 h-[calc(100%-64px)] overflow-y-auto">
          <h2 className="text-xl font-bold mb-6 text-center text-green-700">
            Customer Testimonials
          </h2>

          <div className="space-y-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="border border-gray-300 p-4 rounded shadow-sm bg-white">
                <p className="font-semibold text-black">⭐️⭐️⭐️⭐️⭐️ Adam L.</p>
                <p className="text-gray-700">Great product great shipping</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewPanel;
