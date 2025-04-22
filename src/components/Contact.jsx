import React from "react";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto my-24 mt-60 px-4">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden p-8 border border-gray-200">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">📞 Contact Details</h2>
            <div>
              <p className="text-gray-700 font-semibold">Contact Person:</p>
              <p className="text-gray-600">Raja Mallick (DIRECTOR)</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Address:</p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Krishna Labels INC.</strong><br />
                W.Z. - 81-A, Vashist Park, Pankha Road, Street No. 12,<br />
                New Delhi - 110046, Delhi, India
              </p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Call Us:</p>
              <p className="text-gray-600">08048977061</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded shadow-md font-medium transition">
                Send SMS
              </button>
              <span className="text-blue-600 hover:underline cursor-pointer">Other Contact Details</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
            <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded text-sm text-gray-800">
              <p className="font-semibold">To Get Best QUOTES, Describe Your Requirements:</p>
              <ul className="list-disc list-inside mt-2">
                <li>What Are You Looking For</li>
                <li>Features / Specifications</li>
                <li>Application / Usage</li>
                <li>Minimum Order Quantity, etc</li>
              </ul>
            </div>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Enter your message"
              rows="4"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-md font-semibold transition">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
