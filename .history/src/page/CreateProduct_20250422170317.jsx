import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 bg-blue-100 text-blue-900 placeholder-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-blue-100 text-blue-900 placeholder-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 bg-blue-100 text-blue-900 placeholder-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Purpose */}
          <textarea
            rows="4"
            placeholder="Write your purpose here..."
            className="w-full px-4 py-2 bg-blue-100 text-blue-900 placeholder-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition duration-300"
          >
            Submit
          </button>

          {submitted && (
            <p className="text-green-600 text-sm text-center mt-2">
              Thanks for submitting!
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
