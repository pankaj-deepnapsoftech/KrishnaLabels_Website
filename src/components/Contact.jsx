import React, { useState } from "react";
import { useContactContext } from '../context/contactContext/contactContext';


const Contact = () => {
  const { ContactUs } = useContactContext();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const formData = { name, phone, email, message };
    ContactUs(formData);
  };

  return (
    <div className="min-h-screen mt-40 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-16">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 sm:p-10 border border-blue-200">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              📞 Contact Details
            </h2>
            <div>
              <p className="text-gray-700 font-semibold">Contact Person:</p>
              <p className="text-gray-600">Raja Mallick (DIRECTOR)</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Address:</p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Krishna Labels INC.</strong>
                <br />
                W.Z. - 81-A, Vashist Park, Pankha Road, Street No. 12,
                <br />
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
              <p className="font-semibold">
                To Get Best QUOTES, Describe Your Requirements:
              </p>
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              onClick={handleSubmit}
              className="w-full bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-md font-semibold transition"
            >
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
