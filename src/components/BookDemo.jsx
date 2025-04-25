import React from "react";
import { useLeadContext } from "../context/leadContext/leadContext";
import { useFormik } from "formik";
import bookDemoValidation from "../validation/bookDemoValidation";

const BookDemo = () => {
  const { createLead } = useLeadContext();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      purpose: "",
    },
    validationSchema: bookDemoValidation,
    onSubmit: async (values, { resetForm }) => {
      try {
        await createLead(values);
        alert("Demo booked successfully!");
        resetForm();
      } catch (error) {
        console.error(error);
        alert("Something went wrong. Please try again.");
      }
    },
  });

  return (
    <div className="min-h-screen mt-40 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-16">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-blue-200">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 text-center">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Book a free demo
          </span>
        </h2>

        <form className="grid grid-cols-1 gap-6" onSubmit={formik.handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="you@your-email.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Purpose <span className="text-red-500">*</span>
            </label>
            <textarea
              name="purpose"
              value={formik.values.purpose}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Tell us what you'd like to see in the demo..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows="4"
            ></textarea>
            {formik.touched.purpose && formik.errors.purpose && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.purpose}</p>
            )}
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
