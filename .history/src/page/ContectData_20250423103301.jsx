import React, { useState } from 'react';
import {motion} from "motion/react"
const Contact2 = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Replace with your form submission logic
    alert('Form submitted successfully!');
  };

  return (
    <div className="flex justify-center w-full h-full items-center max-[800px]:h-[100%] bg-gray-200 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-2xs rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Contact Us</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder='Enter your name'
            required
            className="mt-1 w-full   border-b py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder='Enter your email'
            required
            className="mt-1 w-full py-3  border-b  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            name="phone"
            type="tel"
            placeholder='Enter your phone number'
            value={form.phone}
            onChange={handleChange}
            required
            className="mt-1 w-full py-3  border-b focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Purpose</label>
          <textarea
            name="purpose"
            value={form.purpose}
            onChange={handleChange}
            placeholder='write your purpose...'
            rows="4"
            required
            className="mt-1 w-full border-b py-3  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <motion.button
          type="submit"
          className="w-full py-3 bg-sky-800 text-white font-semibold rounded-lg hover:bg-sky-700 transition"
          whileTap={}
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
};

export default Contact2;
