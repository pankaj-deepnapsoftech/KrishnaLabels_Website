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
    <div className="min-h-screen mt-20 sm:mt-32 md:mt-40 flex items-center justify-center px-4 py-16 bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 sm:p-10 border border-blue-200 ">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Book a Free Demo
        </h2>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={formik.handleSubmit}
        >
          {/* Full Name */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
            )}
          </div>

          {/* Email Address */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="you@your-email.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm shadow focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Purpose */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Purpose <span className="text-red-500">*</span>
            </label>
            <textarea
              name="purpose"
              value={formik.values.purpose}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Tell us what you'd like to see in the demo..."
              rows="4"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm shadow resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
            {formik.touched.purpose && formik.errors.purpose && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.purpose}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm px-10 py-3 rounded-full transition duration-300 shadow-lg"
            >
              Book Demo
            </button>
          </div>
        </form>

        <p className="text-xs text-center text-gray-500 mt-8">
          We will reach out to you within 24 hours. Your information is safe with us.
        </p>
      </div>
    </div>
  );
};

export default BookDemo;
