import React from "react";

const BookDemo = () => {
  return (
    <div className="min-h-screen mt-40 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-16">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-blue-200">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 text-center">
  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
    Book a free demo
  </span>
</h2>
        <form className="grid grid-cols-1 gap-6">
      
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="you@your-email.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
         
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Purpose <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Tell us what you'd like to see in the demo..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows="4"
              required
            ></textarea>
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-10 py-3 rounded-full transition duration-300 shadow-lg"
            >
              Book Demo
            </button>
          </div>
        </form>

        <p className="text-xs text-center text-gray-500 mt-6">
          We will reach out to you within 24 hours. Your information is safe with us.
        </p>
      </div>
    </div>
  );
};

export default BookDemo;
