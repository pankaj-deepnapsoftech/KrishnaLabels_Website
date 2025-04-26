import React from "react";
import { useFormik } from "formik";
import { ContactValidationSchema } from "../validation/contactValidation";
import { useContactContext } from "../context/contactContext/contactContext";

const Contact = () => {
  const { ContactUs } = useContactContext();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    validationSchema: ContactValidationSchema,
    onSubmit: (values, { resetForm }) => {
      ContactUs(values);
      alert("Message sent successfully!");
      resetForm();
    },
  });

  return (
    <div className="min-h-screen mt-40 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-16">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-blue-200">
        <div className="grid md:grid-cols-2 gap-10">
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

            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm">{formik.errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="4"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <p className="text-red-500 text-sm">{formik.errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-md font-semibold transition"
              >
                Contact Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
